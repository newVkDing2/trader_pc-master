<template>
  <div>
    <div class="third">
      <!-- {{headIntervalList}}--headIntervalList -->
      <!-- {{ menuIntervalList }}--menuIntervalList -->
      <div class="list">
        <div class="thirdLeft">
          <div
            :class="{
              'hightItem item ff-num': item.interval == currTime,
              'item ff-num': true,
            }"
            class="cur_p"
            v-for="(item, index) in headIntervalList"
            :key="index"
            @click="checkedInterval(item)"
          >
            {{ item.value }}
          </div>
        </div>
        <!-- 更多 -->
        <!-- <div
          class="thirdRight"
          v-show="currentCoinInfo.market != 'mt5'"
          @click="showMenu = !showMenu"
        >

          <div>{{ _t18(`exchange_more`) }}</div>
          <svg-load v-if="!showMenu" name="jiantou-x" class="thirdRightImg"></svg-load>
          <svg-load v-if="showMenu" name="jiantou-s" class="thirdRightImg"></svg-load>
        </div> -->
      </div>
    </div>
    <div
      class="selectTimes"
      v-if="showMenu"
      @touchmove.prevent
      @mousewheel.prevent
      @click="showMenu = false"
    >
      <div class="times">
        <div
          v-for="(item, index) in menuIntervalList"
          :key="index"
          :class="{
            hightItem: item.interval == currentInterval.interval,
            'item ff-num': true,
          }"
          @click="checkedInterval(item, 'menu')"
        >
          {{ item.value }}
        </div>
      </div>
    </div>

    <div :id="klineId" class="candlestick" :style="computedStyle"></div>
    <div v-if="type=='secondContract'"  >
      <p style="margin-left: 20px; margin-top: 10px" class="num_Bold">
        {{ coinInfo.showSymbol }}
      </p>
    </div>
    <!-- <div class="studyList">
      <div
        :class="item.name == currentStudy ? 'hightItem studyItem' : 'studyItem'"
        class="cur_p"
        v-for="(item, index) in studyList"
        :key="index"
        @click="setStudy(item.name)"
      >
        {{ item.label }}
      </div>
    </div> -->
  </div>
</template>

<script>
import { getKlineHistory } from "@/api/kline.js";
import Datafees from "@/config/kline/datafees.js";
import { socketDict } from "@/config/dict";
import {
  getConfig,
  getIntervalList,
  getStudyList,
} from "@/config/kline/index.js";
import { _coinWebSocket } from "@/socket/index";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { _add, _div, _mul, priceFormat } from "@/util/decimal";
import PubSub from "pubsub-js";
import _ from "lodash";
import { debounce, throttle } from "lodash";
export default {
  props: {
    type: {
      type: String,
      default: "detail",
    },
    coinInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      tempTrade: {
        time: "",
        amount: "",
        open: "",
        high: "",
        low: "",
        close: "",
        volume: "",
        lastClose: "",
        intervention: false,
      },
      intervalDiff: "",
      headIntervalList: [],
      menuIntervalList: [],
      studies: [],
      currentCoinInfo: {},
      currentInterval: {},
      subscribeClientList: [],
      showMenu: false,
      currentStudy: "",
      widget: null,
      supportedResolutions: [],
      datafeeds: null,
      dataFeedInstance: {},
      intervalList: [],
      studyList: [],
      currTime: "1",
    };
  },
  computed: {
    klineId: function () {
      return `kline_${this.type}`;
    },
    computedStyle() {
      return {
        height: this.type == 'secondContract' ? '368px' : '398px'
      };
    },
    priceScale() {
      let tempPricescale = 10000;
      if (this.coinInfo.amount > 100) {
        tempPricescale = 100;
      } else if (this.coinInfo.amount < 0.1) {
        tempPricescale = 1000000;
      } else if (this.coinInfo.amount < 100) {
        tempPricescale = 10000;
      }
      return tempPricescale;
    },
  },
  created() {
    // 初始化 intervalList 和 studyList
    this.intervalList = getIntervalList();
    this.studyList = getStudyList();

    // 现在 menuIntervalList 可以被过滤且填充
    this.menuIntervalList = this.intervalList.filter((elem) => elem.isMore);

    // 其他初始化操作...
    this.fetchDataFeedInstance();

    // this.dataFeedInstance.getConfig();
    // this.getServerTime();
    // this.getBars();
    // this.resolveSymbol();
  },
  mounted() {
    // console.log("coinInfo====>", this.coinInfo);
    Object.assign(this.currentCoinInfo, this.coinInfo);
    this.supportedResolutions = this.getSupportedResolutions();
    this.headIntervalList.splice(
      0,
      this.headIntervalList.length,
      ...this.getHeadIntervalList()
    );
    Object.assign(this.currentInterval, this.headIntervalList[0]);
    document.addEventListener(
      "event_tradeSymbolChange",
      this.eventTradeSymbolChange
    );
    this.$nextTick(() => {
      this.initWidget();
    });
  },
  beforeUnmount() {
    document.removeEventListener(
      "event_tradeSymbolChange",
      this.eventTradeSymbolChange
    );
    this.unsubscribeTrades(true);
    this.widget.remove();
  },
  methods: {
    ...mapMutations(["SET_KLINE_TICKER"]),
    fetchDataFeedInstance() {
      /**
       * 获取配置
       */
      this.dataFeedInstance.getConfig = async (callback) => {
        setTimeout(() => {
          callback({
            // 分辨率
            supported_resolutions: this.supportedResolutions,
            supports_marks: false,
            supports_timescale_marks: true,
            supports_time: true,
          });
        }, 0);
      };

      /**
       * 获取服务器时间
       */
      this.dataFeedInstance.getServerTime = async (callback) => {
        let time = +new Date();
        callback && callback(time);
      };

      /**
       * 获取历史KLine数据
       */
      this.dataFeedInstance.getBars = async ({
        symbolInfo: coinInfo,
        resolution,
        from,
        firstDataRequest,
      }) => {
        // console.log("coinInfo====3333333", coinInfo);
        let tempInterval = this.intervalList.find(
          (elem) => elem.interval == resolution
        );
        try {
          if (tempInterval && (from == "" || from > 0)) {
            let params = {
              symbol: coinInfo.coinUpperCase,
              interval: tempInterval.key,
              limit: 1000,
            };
            if (from) {
              params.end = from;
            }
            return new Promise((resolve, reject) => {
              getKlineHistory({
                ...params,
                interval: tempInterval.key,
                symbol: coinInfo.coinUpperCase,
                market: coinInfo.market,
              })
                .then(({ data }) => {
                  let barList = [];
                  if (data) {
                    this.SET_KLINE_TICKER(data.data.sticker);
                    barList = data.data.historyKline;
                  }
                  barList = barList
                    .map((elem) => {
                      return {
                        open: parseFloat(elem.o),
                        high: parseFloat(elem.h),
                        low: parseFloat(elem.l),
                        close: parseFloat(priceFormat(elem.c)),
                        amount: parseFloat(priceFormat(elem.c)),
                        volume: parseFloat(elem.v),
                        time: elem.T,
                      };
                    })
                    .sort((a, b) => a.time - b.time);
                  if (firstDataRequest) {
                    let tempObj = barList.slice(-1)[0];

                    this.tempTrade.amount = tempObj.amount;
                    this.tempTrade.open = tempObj.open;
                    this.tempTrade.close = tempObj.close;
                    this.tempTrade.high = tempObj.high;
                    this.tempTrade.low = tempObj.low;
                    this.tempTrade.volume = tempObj.volume;
                    this.tempTrade.time = tempObj.time;
                    this.tempTrade.lastClose = tempObj.close;
                    this.tempTrade.intervention = false;

                    this.intervalDiff = Math.abs(
                      this.tempTrade.time - barList.slice(-2, -1)[0].time
                    );
                    // console.log(
                    //   "初始",
                    //   this.tempTrade.lastClose,
                    //   this.intervalDiff
                    // );
                    this.updateDataKline(this.tempTrade);
                    this.subscribeTrades({
                      coin: coinInfo.coin,
                      symbol: coinInfo.symbol,
                      interval: tempInterval.key,
                      firstDataRequest: firstDataRequest,
                    });
                  }
                  resolve(barList);
                })
                .catch((error) => {
                  this.unsubscribeTrades(true);
                  reject([]);
                });
            });
          }
        } catch (error) {
          // console.log("error===>", error);
          this.unsubscribeTrades(true);
          return Promise.resolve([]);
        }
        return Promise.resolve([]);
      };

      /**
       * 加载商品配置
       */
      this.dataFeedInstance.resolveSymbol = async () => {
        return {
          // 商品名称
          name: this.coinInfo.symbolUpperCase,
          // 自定义携带参数
          coin: this.coinInfo.coin,
          coinUpperCase: this.coinInfo.coin,
          symbol: this.coinInfo.symbol,
          symbolUpperCase: this.coinInfo.symbolUpperCase,
          market: this.coinInfo.market,
          // resolution: '1m',
          fractional: false,
          //设置周期
          session: "24x7",
          // 显示商品是否具有历史数据
          has_intraday: true,
          //设置是否支持周月线
          has_weekly_and_monthly: true,
          // 布尔值显示商品是否具有以日为单位的历史数据
          // has_daily: true,
          // 交易所名称
          exchange: "Coincheckusa",
          //设置是否支持周月线
          description: this.coinInfo.symbolUpperCase,
          //设置价格精度  100表示保留两位小数   1000三位   10000四位
          pricescale: this.priceScale,
          // 最小波动
          minmov: 1 / this.priceScale,
          // 分辨率数组
          supported_resolutions: this.supportedResolutions,
        };
      };
    },
    /**
     * 交易对监听
     */
    eventTradeSymbolChange: debounce(function (e) {
      // 监听币种切换
      let symbol = e.detail.symbol;
      let tempCoinInfo = e.detail.coinInfo;
      // 分辨率改变
      let tempHeadIntervalList = this.getHeadIntervalList(tempCoinInfo);

      if (
        tempHeadIntervalList.map((elem) => elem.value).join() !=
        this.headIntervalList.map((elem) => elem.value).join()
      ) {
        // 判断分辨率是否一致
        this.supportedResolutions = this.getSupportedResolutions();
        this.headIntervalList.splice(
          0,
          this.headIntervalList.length,
          ...tempHeadIntervalList
        );
        Object.assign(this.currentInterval, this.headIntervalList[0]);
      }
      this.showMenu = false;
      // 设置币种
      this.setSymbol(symbol, this.currentInterval.interval, () => {
        Object.assign(this.currentCoinInfo, this.coinInfo);
      });
    }, 200),
    /**
     * 获取分辨率
     */
    getSupportedResolutions(tempCoinInfo) {
      // 设置默认参数为 undefined
      tempCoinInfo = tempCoinInfo || this.currentCoinInfo;

      let tempList = this.intervalList.map((elem) => elem.interval);
      if (tempCoinInfo && tempCoinInfo.market === "mt5") {
        // 使用过滤器直接获取满足条件的时间间隔列表
        tempList = this.intervalList
          .filter((elem) => elem.market === "mt5")
          .map((elem) => elem.interval);
      }
      return tempList;
    },
    /**
     * 获取分辨率显示菜单
     */
    getHeadIntervalList(tempCoinInfo) {
      // 设置默认参数为 this.currentCoinInfo
      tempCoinInfo = tempCoinInfo || this.currentCoinInfo;

      let tempList = this.intervalList.filter((elem) => !elem.isMore);
      if (
        tempCoinInfo &&
        (tempCoinInfo.market === "mt5" || tempCoinInfo.coinType === 3)
      ) {
        tempList = this.intervalList.filter((elem) => elem.market === "mt5");
      }
      return tempList;
    },
    /**
     * 设置币种、周期
     */
    async setSymbol(symbol, interval, callBack) {
      if (
        this.currentCoinInfo.symbol !== symbol ||
        interval !== this.currentInterval.interval
      ) {
        if (this.widget) {
          this.widget.setSymbol(symbol, interval, () => {
            // console.log(
            //   "------setSymbol---------",
            //   this.currentCoinInfo.symbol,
            //   interval
            // );
            Object.assign(
              this.currentInterval,
              this.intervalList.find((elem) => elem.interval == interval)
            );
            //console.log("currentIntervalv==55", this.currentInterval);
            // this.currentIntervalv = this.currentInterval;
            if (callBack) {
              callBack();
            }
          });
        }
      }
    },

    // /**
    //  * 获取配置
    // */
    // getConfig(callback) {
    //   setTimeout(() => {
    //     callback({
    //       // 分辨率
    //       supported_resolutions: this.supportedResolutions,
    //       supports_marks: false,
    //       supports_timescale_marks: true,
    //       supports_time: true
    //     });
    //   }, 0);
    // },

    /**
     * 获取历史KLine数据
     */
    // async getBars({
    //   symbolInfo: coinInfo,
    //   resolution,
    //   from,
    //   firstDataRequest,
    // }) {
    //   let tempInterval = this.intervalList.find(
    //     (elem) => elem.interval == resolution
    //   );
    //   try {
    //     if (tempInterval && (from == "" || from > 0)) {
    //       let params = {
    //         symbol: this.coinInfo.coinUpperCase,
    //         interval: tempInterval.key,
    //         limit: 1000,
    //       };
    //       if (from) {
    //         params.end = from;
    //       }
    //       return new Promise((resolve, reject) => {
    //         getKlineHistory({
    //           ...params,
    //           interval: tempInterval.key,
    //           symbol: this.coinInfo.coinUpperCase,
    //           market: this.coinInfo.market,
    //         })
    //           .then(({ data }) => {
    //             let barList = [];
    //             if (data) {
    //               SET_KLINE_TICKER(data.ticker);
    //               barList = data.historyKline;
    //             }
    //             barList = barList
    //               .map((elem) => {
    //                 return {
    //                   open: parseFloat(elem.o),
    //                   high: parseFloat(elem.h),
    //                   low: parseFloat(elem.l),
    //                   close: parseFloat(priceFormat(elem.c)),
    //                   amount: parseFloat(priceFormat(elem.c)),
    //                   volume: parseFloat(elem.v),
    //                   time: elem.T,
    //                 };
    //               })
    //               .sort((a, b) => a.time - b.time);
    //             if (firstDataRequest) {
    //               let tempObj = barList.slice(-1)[0];

    //               tempTrade.amount = tempObj.amount;
    //               tempTrade.open = tempObj.open;
    //               tempTrade.close = tempObj.close;
    //               tempTrade.high = tempObj.high;
    //               tempTrade.low = tempObj.low;
    //               tempTrade.volume = tempObj.volume;
    //               tempTrade.time = tempObj.time;
    //               tempTrade.lastClose = tempObj.close;
    //               tempTrade.intervention = false;

    //               this.intervalDiff.value = Math.abs(
    //                 tempTrade.time - barList.slice(-2, -1)[0].time
    //               );
    //               console.log(
    //                 "初始",
    //                 tempTrade.lastClose,
    //                 this.intervalDiff.value
    //               );
    //               this.updateDataKline(tempTrade);
    //               this.subscribeTrades({
    //                 coin: coinInfo.coin,
    //                 symbol: coinInfo.symbol,
    //                 interval: tempInterval.key,
    //                 firstDataRequest: firstDataRequest,
    //               });
    //             }
    //             resolve(barList);
    //           })
    //           .catch((error) => {
    //             this.unsubscribeTrades(true);
    //             reject([]);
    //           });
    //       });
    //     }
    //   } catch (error) {
    //     this.unsubscribeTrades(true);
    //     return Promise.resolve([]);
    //   }
    //   return Promise.resolve([]);
    // },
    /**
     * 加载商品配置
     */
    resolveSymbol() {
      return {
        // 商品名称
        name: this.coinInfo.symbolUpperCase,
        // 自定义携带参数
        coin: this.coinInfo.coin,
        coinUpperCase: this.coinInfo.coin,
        symbol: this.coinInfo.symbol,
        symbolUpperCase: this.coinInfo.symbolUpperCase,
        market: this.coinInfo.market,
        // resolution: '1m',
        fractional: false,
        //设置周期
        session: "24x7",
        // 显示商品是否具有历史数据
        has_intraday: true,
        //设置是否支持周月线
        has_weekly_and_monthly: true,
        // 布尔值显示商品是否具有以日为单位的历史数据
        // has_daily: true,
        // 交易所名称
        exchange: "Coincheckusa",
        //设置是否支持周月线
        description: this.coinInfo.symbolUpperCase,
        //设置价格精度  100表示保留两位小数   1000三位   10000四位
        pricescale: this.priceScale,
        // 最小波动
        minmov: 1 / this.priceScale,
        // 分辨率数组
        supported_resolutions: this.supportedResolutions,
      };
    },
    /**
     * 初始化图表
     */
    initWidget() {
      // console.log("dataFeedInstance===>", this.dataFeedInstance);
      this.datafeeds = new Datafees(this.dataFeedInstance);
      // 主题
      // let theme = window.__theme
      let theme = "light";
      this.widget = new TradingView.widget({
        symbol: this.coinInfo.symbolUpperCase,
        theme,
        debug: false,
        autosize: true,
        // 默认分辨率
        interval: this.currentInterval.interval,
        container_id: this.klineId,
        datafeed: this.datafeeds,
        library_path: "/charting_library/",
        custom_css_url: `/charting_library/tradingview_${theme}.css`,
        locale: "en",

        timezone: "Asia/Shanghai", //时区
        // 自定义日期格式化
        // customFormatters: {
        //   dateFormatter: {
        //     format(date) {
        //       return _klineTimeFormat(date.getTime(), 'DD/MM/YYYY', true)
        //     }
        //   },
        //   timeFormatter: {
        //     format(date) {
        //       return _klineTimeFormat(date.getTime(), 'HH:mm:ss', true)
        //     }
        //   }
        // },

        // preset: 'mobile',
        ...getConfig(theme),
      });
      this.widget.onChartReady(() => {
        this.createStudy();
      });
    },
    /**
     * 创建指标
     */
    createStudy() {
      // let id = widget.chart().createStudy('volume', false, false, [5], null)
      // studies.push(id)
      let id = this.setStudy(this.studyList[0].name);
      this.studies.push(id);
    },
    /**
     * 取消订阅
     * @param {*} firstDataRequest
     */
    unsubscribeTrades(firstDataRequest = false) {
      if (this.currentCoinInfo.coin) {
        _coinWebSocket.send({
          op: socketDict.unsubscribe,
          type: socketDict.KLINE,
          symbol: this.currentCoinInfo.coin,
          interval: this.currentInterval.key,
        });
        if (firstDataRequest) {
          this.subscribeClientList.forEach((subKey) => {
            subKey && PubSub.unsubscribe(subKey);
          });
          this.subscribeClientList.length = 0;
          _coinWebSocket.send({
            op: socketDict.unsubscribe,
            type: socketDict.TRADE,
            symbol: this.currentCoinInfo.coin,
          });
        }
      }
    },
    /**
     * 订阅实时成交
     */
    subscribeTrades(params) {
      // 先取消订阅
      this.unsubscribeTrades(params.firstDataRequest);

      _coinWebSocket.send({
        op: socketDict.subscribe,
        type: socketDict.KLINE,
        symbol: params.coin,
        interval: params.interval,
      });

      if (params.firstDataRequest) {
        _coinWebSocket.send({
          op: socketDict.subscribe,
          type: socketDict.TRADE,
          symbol: params.coin,
        });
      }
      // let marketTradeKey = PubSub.subscribe(socketDict.TRADE, (key, data) => {
      // // 实时成交
      // if (data.symbol == params.coin) {
      //   let tempData = data.data.tick.data[0]
      //   // console.log('实时成交', data.symbol, tempData)
      //   if (
      //     tempTrade.time <= tempData.ts &&
      //     priceFormat(tempTrade.close) != priceFormat(tempData.price)
      //   ) {
      //     if (tempTrade.high < tempData.price) {
      //       tempTrade.high = tempData.price
      //     } else if (tempTrade.low > tempData.price) {
      //       tempTrade.low = tempData.price
      //     }
      //     tempTrade.close = Number(priceFormat(tempData.price))
      //     // updateDataKlineThrottle(tempTrade)
      //     updateDataKline(tempTrade)
      //   }
      // }
      // })
      // subscribeClientList.push(marketTradeKey)
      let candlestickKey = PubSub.subscribe(socketDict.KLINE, (key, data) => {
        // K线数据
        // console.log(
        //   "K线数据",
        //   this.tempTrade.lastClose,
        //   this.intervalDiff,
        //   data.data.tick
        // );
        let tempData = data.data.tick;
        if (data.symbol == params.coin) {
          if (this.tempTrade.intervention != tempData.intervention) {
            // console.log('干预', tempTrade.intervention, tempData?.intervention, tempTrade.lastClose)
            tempData.open = this.tempTrade.lastClose;
            this.tempTrade.intervention = tempData.intervention;
          }
          // 本次时间
          let tempTime =
            parseInt(tempData.id / this.intervalDiff) * this.intervalDiff;
          if (this.tempTrade.time < tempTime) {
            // console.log('本次时间', tempData.open, tempTrade.time, tempTime, tempData)
            this.tempTrade.time = tempTime;
            this.tempTrade.open = tempData.open;
          }
          this.tempTrade.high = tempData.high;
          this.tempTrade.low = tempData.low;
          this.tempTrade.close = Number(priceFormat(tempData.close));
          this.tempTrade.volume = tempData.vol;
          this.updateDataKline(this.tempTrade);
        }
      });
      this.subscribeClientList.push(candlestickKey);
    },
    /**
     * 更新数据
     */
    updateDataKline(newData) {
      if (newData.close) {
        // console.log('更新数据', newData)
        this.datafeeds.updateData(newData);
        PubSub.publish(socketDict.DETAIL, {
          data: {
            ...newData,
            vol: newData.volume,
          },
          origin: "kline",
          symbol: this.currentCoinInfo.coin,
          type: socketDict.DETAIL,
        });
      }
    },
    /**
     * 更新数据 限流
     */
    updateDataKlineThrottle: throttle(function (newData) {
      updateDataKline(newData);
    }, 300),
    /**
     * 选中分辨率
     * @param {*}
     */
    checkedInterval(item, type = "") {
      this.currTime = item.interval;
      // console.log("item.interval", item.interval);
      // console.log("currentInterval.interval", this.currentInterval.interval);
      if (item.interval != this.currentInterval.interval) {
        this.setSymbol(this.coinInfo.symbol, item.interval);
      }
      this.showMenu = !!type;
    },
    /**
     * 设置指标
     */
    setStudy(name) {
      if (this.currentStudy == name) {
        return;
      }
      const activeChart = this.widget.activeChart();
      console.log("activeChart===>", activeChart);
      // 关闭旧指标
      if (this.currentStudy) {
        let oldStudy = this.studyList.filter(
          (elem) => elem.name == this.currentStudy
        )[0];
        oldStudy.list.forEach((elem) => {
          activeChart.removeEntity(elem);
        });
      }
      // 设置新指标
      this.currentStudy = name;
      let newStudy = this.studyList.filter(
        (elem) => elem.name == this.currentStudy
      )[0];
      let tempList = [];
      newStudy.cycleList.forEach(async (cycle, index) => {
        let result = "";
        if (name == "MACD") {
          result = await activeChart.createStudy(
            this.currentStudy,
            false,
            false,
            [],
            {}
          );
        } else if (name == "Bollinger Bands") {
          result = await activeChart.createStudy(
            this.currentStudy,
            false,
            false,
            [],
            {}
          );
        } else {
          // console.log("78787777777");
          result = await activeChart.createStudy(
            this.currentStudy,
            false,
            false,
            [cycle],
            {
              "plot.color": newStudy.colorList[index],
              "plot.linewidth": 2,
            }
          );
        }
        // console.log("result====>", result);
        tempList.push(result);
      });
      newStudy.list = tempList;
    },
  },
};
</script>

<style lang="scss" scoped>
.candlestick {
  // height: 388px;
  background-color: #fafafa;
}

.hightItem {
  color: #09BA85 !important;
}

.third {
  margin-top: 10px;
  padding: 0px 15px 10px;
  // border-bottom: 1px solid #3e3e3e;

  .list {
    // background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .thirdLeft {
      // flex: 1;
      // background-color: #fff;
      display: flex;
      font-size: 14px;
      color: #333;

      .item {
        flex: 1;
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .thirdRight {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #17ac74;

      .thirdRightImg {
        width: 10px;
        height: 6px;
        margin-left: 5px;
      }
    }
  }
}

.selectTimes {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  z-index: 10;

  .times {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    border-radius: 0px 0px 15px 15px;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 15px;
      width: 37px;
      height: 23px;
      background: #e8e8e8;
      border-radius: 2px 2px 2px 2px;
      font-size: 12px;
      color: #333;
    }
  }
}

.studyList {
  display: flex;
  padding: 10px 15px;

  .studyItem {
    font-size: 14px;
    color: #333;
    margin-right: 30px;
  }
}
</style>
