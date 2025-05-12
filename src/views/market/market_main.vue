<template>
  <div class="market_main fit-background-di">
    <div class="main-banner" :style="{ backgroundImage: `url(${bannerUrl})` }">
      <div class="banner-content">
        <div class="title">
          {{ currCoinLangFun("szwh_text", "move_assets") }}
        </div>
        <div class="title-tip">
          {{ currCoinLangFun("text_market_objective") }}
        </div>
        <div class="influencer">
          <div class="influencer-tag" @click="openMarket">
            {{ currCoinLangFun("nav_cywh", "move_assets") }}
          </div>
          <div class="bot-banner">
            <span>{{ currCoinLangFun("market_today_profit") }}</span>
            <span>+ {{ yieldInfo.jrsy.banalceText }}
              {{ yieldInfo.jrsy.coinName }}</span>
          </div>
          <i class="el-icon-arrow-right" @click="openBill"></i>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="flex-box content-box">
        <div class="box-tabs flex-box">
          <div class="box-tabs-item" v-for="item in mainTabs" :key="item.value" @click="mainType = item.value"
            :class="{ active: mainType == item.value }">
            {{ item.label }}
          </div>
        </div>
        <!-- <div class="box-tip" @click="lookTutorialFun">
          <i class="el-icon-collection"></i> 使用教程
        </div> -->
      </div>
      <div class="table-box fit-background">
        <el-table v-loading="orderLoading" :data="currTableData" style="width: 100%" size="mini" height="500px"
          ref="orderTable">
          <el-table-column v-for="(item, index) in currTableColumn" :key="item.id + '_' + index" v-bind="item"
            :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div v-if="item.prop == 'auto_buy'">
                <i class="el-icon-loading" v-show="scope.row.loading"></i>
                <el-switch v-show="!scope.row.loading" :active-value="1" :inactive-value="0" v-model="scope.row.auto_buy"
                  @change="(value) => setcontractFun(scope.row, value)"></el-switch>
              </div>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
          <template slot="empty">
            <div class="table-empty fit-tc-tip">
              <div class="null-login" v-if="!isLogin">
                <span class="fit-tc-tertiary active-text" @click="skipUserPage('login')">{{ currCoinLangFun("login",
                                  "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span class="fit-tc-tertiary active-text" @click="skipUserPage('register')">{{
                                  currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("nav_cywh", "move_assets") }}
              </div>
              <div v-else class="is-login">
                <img src="@/assets/svg/icon-Null.svg" alt />
                <span class="fit-tc-tip">{{
                                  currCoinLangFun("table_null_data", "all")
                                  }}</span>
              </div>
            </div>
          </template>
        </el-table>
      </div>
    </div>
    <!-- 市值维护 -->
    <el-dialog :close-on-click-modal="false" :title="currCoinLangFun('create_market_maintain')"
      :visible.sync="marketData.dialog" width="600px" custom-class="market-dialog">
      <div class="market-dialog-content fit-tc-primary">
        <div class="flex-box top-info fit-tc-border-color">
          <el-dropdown @command="handleCommand">
            <div class="info-symbol flex-box">
              <img :src="marketData.img" />
              <span class="coin">{{ marketData.coin }}</span>
              <span class="base fit-tc-tip">/{{ marketData.base }}</span>
              <i class="el-icon-arrow-down fit-tc-tip"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, key, index) in menuData" :key="index" :command="item">{{ key
                              }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="info-money flex-box">
            <div class="money">
              <span class="fit-tc-tip">{{
                              currCoinLangFun("table_coin_close", "exchange")
                              }}</span>
              <span>{{
                              symbolPrice[marketData.symbol]
                              ? Number(symbolPrice[marketData.symbol].close)
                              : ""
                              }}
                {{ marketData.base }}</span>
            </div>
            <!-- <span
              class="box-line"
              style="width: 1px; height: 18px;display: inline-block;margin:0 16px;"
            ></span> -->
            <!-- <div class="money-tip fit-tc-primary active-text" @click="lookTutorialFun">
              <i class="el-icon-collection"></i> 使用教程
            </div> -->
          </div>
        </div>
        <div class="tabs-box flex-box">
          <div class="box-tabs fit-background-di flex-box">
            <div class="box-tabs-item fit-tc-tip" v-for="(item, index) in marketData.tabs" :key="index" :class="{
                            'fit-tc-primary active': item.type == marketData.tabsValue,
                          }" @click="marketData.tabsValue = item.type">
              {{ currCoinLangFun("market_text_investment") }}{{ item.text }}
            </div>
            <div class="segment-active fit-background" :style="{ left: tabsLeft }"></div>
          </div>
        </div>
        <div class="main-cycle">
          <div class="cycle-label fit-tc-tip">
            {{ currCoinLangFun("whzq_text", "move_assets") }}
          </div>
          <div class="cycle-text">
            <el-dropdown @command="yieldHandleCommand">
              <span style="cursor: pointer" class="fit-background-di fit-tc-tip">{{ currCoinLangFun("szwh_text",
                              "move_assets") }}
                {{ currYield.periodDay }}
                {{ currCoinLangFun("daily_income_estimate") }}
                {{ Number(currYield.profitRate).myMul(100)}}%</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in yieldData" :key="index" :command="item">{{
                                  currCoinLangFun("szwh_text", "move_assets")
                                  }}{{ item.periodDay
                                    }}{{ currCoinLangFun("daily_income_estimate")
                                    }}{{ Number(item.profitRate ).myMul(100)}}%</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="main-money main-cycle">
          <div class="cycle-label fit-tc-tip">
            {{ currCoinLangFun("Invested_assets") }}
            <span style="font-size: 12px; padding-left: 4px">（{{ currCoinLangFun("minimum_input_required") }}
              {{ currYield.minMoney }} {{ currType }}）</span>
          </div>
          <div class="money-input flex-box">
            <el-input v-model="marketData.money" @input="
                            (e) =>
                              inputChengFun(
                                e,
                                'money',
                                myMoneyData[`${marketData.tabsValue}_coin_scale`]
                              )
                          " @focus="marketData.slider = 0">
              <div slot="suffix" class="fit-tc-tip">{{ currType }}</div>
            </el-input>
          </div>
          <div class="money-slider">
            <el-slider v-model="marketData.slider" :show-tooltip="false"></el-slider>
          </div>
        </div>
        <div class="my-money">
          <span class="fit-tc-tip">{{
                      currCoinLangFun("wallet_available")
                      }}</span>
          <span>{{ myMoneyData[`${marketData.tabsValue}_balance`] }}
            {{ currType }}</span>
          <span class="fit-tc-primary active-text" @click="isTradeFundsDialog = true">{{ currCoinLangFun("transfer_text",
                      "all") }}</span>
        </div>
        <div class="main-set">
          <div class="set-item">
            <el-switch v-model="marketData.contract"></el-switch>
            <div class="item-tip fit-tc-primary">
              {{ currCoinLangFun("automatic_renewal_upon_expiration") }}
            </div>
          </div>
          <div class="set-item">
            <el-switch v-model="marketData.security"></el-switch>
            <div class="item-tip fit-tc-primary">
              {{ currCoinLangFun("maintenance_fund_guarantee") }}
            </div>
          </div>
          <div class="set-tip fit-tc-tip">
            {{ currCoinLangFun("Maintenance_mechanism") }}
          </div>
        </div>
        <div class="main-btn">
          <el-button type="primary" :disabled="btnDisabled" :loading="marketData.loading" @click="inputMoneyFnu">{{
                      currCoinLangFun("market_start_maintenance") }}</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 市值维护账单 -->
    <el-dialog :close-on-click-modal="false" :title="currCoinLangFun('market_value_maintenance_bill')"
      :visible.sync="billDialog" width="900px" custom-class="market-bill-dialog">
      <div class="market-bill-dialog-content fit-tc-primary">
        <div class="bill-info">
          <div class="info-item">
            <div class="item-money">
              <span class="money">{{ yieldInfo.dqtr.banalceText }}</span>
              <span class="type fit-tc-tip">{{ yieldInfo.dqtr.coinName }}</span>
            </div>
            <div class="info-tip fit-tc-tip">
              {{ currCoinLangFun("current_investment") }}
            </div>
          </div>
          <div class="info-item">
            <div class="item-money">
              <span class="money">{{ yieldInfo.lstr.banalceText }}</span>
              <span class="type fit-tc-tip">{{ yieldInfo.lstr.coinName }}</span>
            </div>
            <div class="info-tip fit-tc-tip">
              {{ currCoinLangFun("history_investment") }}
            </div>
          </div>
          <div class="info-item">
            <div class="item-money">
              <span class="money fit-tc-rise">{{
                              yieldInfo.lssy.banalceText
                              }}</span>
              <span class="type fit-tc-tip">{{ yieldInfo.lssy.coinName }}</span>
            </div>
            <div class="info-tip fit-tc-tip">
              {{ currCoinLangFun("total_income") }}
            </div>
          </div>
          <div class="info-item">
            <div class="item-money">
              <span class="money fit-tc-rise">{{
                              yieldInfo.jrsy.banalceText
                              }}</span>
              <span class="type fit-tc-tip">{{ yieldInfo.jrsy.coinName }}</span>
            </div>
            <div class="info-tip fit-tc-tip">
              {{ currCoinLangFun("today_profit") }}
            </div>
          </div>
        </div>
        <div class="bill-more fit-tc-primary active-text" @click="$router.push({ path: '/account/wallet/bills?type=6' })">
          <span>
            {{ currCoinLangFun("more", "all") }}
            <i class="el-icon-right"></i>
          </span>
        </div>
        <div class="bill-table fit-background">
          <el-table v-loading="billLoading" :data="billData" style="width: 100%" size="mini" ref="orderTable">
            <el-table-column v-for="(item, index) in billTableColumn" :key="item.id + '_' + index" v-bind="item"
              :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <div v-if="item.prop == 'auto_buy'">
                  <i class="el-icon-loading" v-show="scope.row.loading"></i>
                  <el-switch v-show="!scope.row.loading" :active-value="1" :inactive-value="0"
                    v-model="scope.row.auto_buy" @change="(value) => setcontractFun(scope.row, value)"></el-switch>
                </div>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
    <!-- 资金划转 -->
    <fund-transfer v-if="isTradeFundsDialog" :transferDialog="isTradeFundsDialog" :closeDialog="closeDialog.bind(this)"
      :targerWalletKey="`market,${currYield.coinId}`"></fund-transfer>
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { getCurrCoinMoneyApi, getSymbolNewDataApi } from "@/api/fullScreen";
import {
  getMarketGoodsApi,
  marketPlaceOrderApi,
  getMarketOrderDataApi,
  updataeOrderContractApi,
  getMarketYieldInfoApi,
  getMarketYieldListApi,
} from "@/api/market";
import {
  inputNumberLinmitFun,
  getStrDataFunction,
  numberFilterFun,
  toNorounded,
  toThousands,
} from "@/util/util";
import {mapGetters } from "vuex";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
export default {
  components: { fundTransfer },
  data() {
    return {
      isTradeFundsDialog: false,
      orderLoading: false,
      bannerUrl: "",
      mainType: "zzwh",
      mainTabs: [
        {
          label: this.currCoinLangFun("nav_zzwh", "move_assets"), //正在维护
          value: "zzwh",
        },
        {
          label: this.currCoinLangFun("nav_lswh", "move_assets"), //历史维护
          value: "lswh",
        },
      ],
      isMenu: true, //是否有维护数据
      tableData: {
        zzwh: [],
        lswh: [],
      },
      tableColumn: {
        zzwh: [
          {
            label: this.currCoinLangFun("participation_time"), //参与时间
            prop: "join_time",
            align: "center",
          },
          {
            label: this.currCoinLangFun("maintain_transaction_pairs"), //维护交易对
            prop: "symbol_name",
            align: "center",
          },
          {
            label: this.currCoinLangFun("ztrgz_text", "move_assets"), //总投入估值
            prop: "join_amount_text",
            align: "center",
          },
          {
            label: `${this.currCoinLangFun(
              "cyjg_text",
              "move_assets"
            )}（USDT）`, //参与价格（USDT）
            prop: "join_price",
            align: "center",
          },
          {
            label: this.currCoinLangFun("whzq_text", "move_assets"), //维护周期
            prop: "period_day",
            align: "center",
          },
          {
            label: this.currCoinLangFun("syl_text", "move_contract"), //收益率
            prop: "profit_rate_text",
            align: "center",
          },
          {
            label: this.currCoinLangFun("text_auto_renew"), //自动续约
            prop: "auto_buy",
            align: "center",
          },
          {
            label: this.currCoinLangFun("ygsy_text", "move_assets"), //预估收益
            prop: "profit_text",
            align: "center",
          },
          {
            label: this.currCoinLangFun("yxsc_text", "move_assets"), //运行时长
            prop: "time",
            align: "center",
          },
        ],
        lswh: [
          {
            label: this.currCoinLangFun("participation_time"), //参与时间
            prop: "join_time",
            align: "center",
          },
          {
            label: this.currCoinLangFun("maintain_transaction_pairs"), //维护交易对
            prop: "symbol_name",
            align: "center",
          },
          {
            label: this.currCoinLangFun("ztrgz_text", "move_assets"), //总投入估值
            prop: "join_amount_text",
            align: "center",
          },
          {
            label: `${this.currCoinLangFun(
              "cyjg_text",
              "move_assets"
            )}（USDT）`, //参与价格（USDT）
            prop: "join_price",
            align: "center",
          },
          {
            label: this.currCoinLangFun("whzq_text", "move_assets"), //维护周期
            prop: "period_day",
            align: "center",
          },
          {
            label: this.currCoinLangFun("syl_text", "move_contract"), //收益率
            prop: "profit_rate_text",
            align: "center",
          },
          {
            label: this.currCoinLangFun("maintenance_profit"), //维护收益
            prop: "profit",
            align: "center",
          },
          {
            label: this.currCoinLangFun("zjfy_text", "move_assets"), //资金费用
            prop: "capital_cost",
            align: "center",
          },
          {
            label: this.currCoinLangFun("service_charge", "all"), //手续费
            prop: "fee_balance",
            align: "center",
          },
        ],
      },
      marketData: {
        img: "",
        dialog: false,
        loading: false,
        symbol: "",
        coin: "",
        base: "",
        tabs: [], //可投入类型
        tabsObj: {},
        tabsValue: "", //投入类型
        money: 0, //投入资产
        slider: 0,
        contract: false, //自动续约
        security: true, //资金保障
      },
      //我的资产
      myMoneyData: {
        base_coin_scale: "6",
        coin_coin_scale: "6",
        coin_balance: 0,
        base_balance: 0,
      },
      menuData: [], //维护交易对列表
      yieldObj: {}, //维护周期
      currYield: {}, //当前选择的维护周期
      tutorialPath: "",
      symbolPrice: {}, //交易对最新价格
      yieldInfo: {
        //收益信息
        jrsy: {},
        dqtr: {},
        lstr: {},
        lssy: {},
      },
      billDialog: false,
      billLoading: false,
      billTableColumn: [
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          prop: "create_time",
          align: "center",
        },
        {
          label: this.currCoinLangFun("orders_table_coin", "full"), //币种
          prop: "coin_symbol",
          align: "center",
        },
        {
          label: this.currCoinLangFun("text_type", "all"), //类型
          prop: "remark",
          align: "center",
        },
        {
          label: this.currCoinLangFun("table_coin_num" ,"exchange"), //数量
          prop: "amount",
          align: "center",
        },
        {
          label: this.currCoinLangFun("service_charge", "all"), //手续费
          prop: "fee_amount",
          align: "center",
        },
      ],
      billData: [],
    };
  },
  watch: {
    mainType() {
      this.getTableData(this.mainType == "zzwh" ? "now" : "history");
    },
    "marketData.tabsValue": function () {
      this.marketData.slider = 0;
      this.marketData.money = 0;
      this.currYield = this.yieldData[0];
    },
    "marketData.slider": function (val) {
      val = val / 100;
      let currMoney = this.myMoneyData[`${this.marketData.tabsValue}_balance`];
      let money = Number(val).myMul(currMoney);
      this.marketData.money = money;
    },
  },
  computed: {
    ...mapGetters(["isLogin"]),
    currTableData() {
      return this.tableData[this.mainType];
    },
    currTableColumn() {
      return this.tableColumn[this.mainType];
    },
    tabsLeft() {
      let left = "2px";
      if (
        this.marketData.tabs.length > 1 &&
        this.marketData.tabsValue == "base"
      ) {
        left = "122px";
      }
      return left;
    },
    yieldData() {
      if (this.marketData.tabsValue) {
        return this.yieldObj[
          this.marketData.tabsObj[this.marketData.tabsValue].text
        ];
      }
      return [];
    },
    currType() {
      let text = "";
      this.marketData.tabs.forEach((item) => {
        if (item.type == this.marketData.tabsValue) {
          text = item.text;
        }
      });
      return text;
    },
    btnDisabled() {
      let { money, security } = this.marketData;
      if (money <= 0) {
        return true;
      }
      if (!security) {
        return true;
      }
      return false;
    },
  },
  async created() {
    //获取市值维护banner
    getDataApi("1530464853989064705", {
      config_code: "market_main_banner",
    }).then((res) => {
      let data = res.data.data.records[0];
      if (data) {
        this.bannerUrl = data.config_img_night
          ? data.config_img_night
          : data.config_img_daytime;

        let configData = getStrDataFunction(data.config_data);
        let tutorial_id = configData.tutorial_id;
        if (tutorial_id) {
          getDataApi("1530431184536666113", {
            id: tutorial_id,
          }).then((res) => {
            let articleData = res.data.data.records[0];
            if (articleData) {
              this.tutorialPath = `/article/main/content/${articleData.article_type}/${articleData.id}`;
            }
          });
        }
      }
    });
    if(!this.isLogin){
      return false
    }
    //获取市值维护交易对列表
    let goodRes = await getMarketGoodsApi();
    let data = goodRes.data.data;
    this.menuData = data;
    let keys = Object.keys(this.menuData);
    if (keys.length <= 0) {
      this.isMenu = false;
      return false;
    }
    //初始化数据
    await this.getNewPrice(keys);
    this.handleCommand(this.menuData[keys[0]]);
    //获取维护表格数据
    this.getTableData();
    this.getYieldInfoData();
    this.getMoneyListData();
  },
  methods: {
    currCoinLangFun(code, type = "market") {
      return this.coinLangFun(type, code);
    },
    //获取钱包
    getMoneyData() {
      if (!this.isLogin) {
        return false;
      }
      getCurrCoinMoneyApi(
        "market",
        `${this.marketData.coin}_${this.marketData.base}`
      ).then((res) => {
        let data = res.data.data;
        this.myMoneyData = {
          ...data,
          coin_balance: data.szCoinBalance,
          base_balance: data.szBaseBalance,
        };
      });
    },
    //获取维护记录
    getTableData(type) {
      if (!this.isLogin) {
        return false;
      }
      this.orderLoading = true;
      let setData = (data) => {
        data = data.map((item, index) => {
          item.$index = index;
          item.join_amount_text = `${toThousands(item.join_amount)} ${
            item.coin_symbol
          }`;

          item.join_price = item.join_price - 0;
          item.profit = item.profit - 0;
          item.period_day =
            item.period_day + ` ${this.currCoinLangFun("sun", "all")}`; // $d日
          item.profit_rate_text = item.profit_rate * 100 + "%";
          item.cost_balance = item.cost_balance - 0;

          let dateEnd = new Date();
          let dateDiff = dateEnd.getTime() - new Date(item.join_time).getTime(); //时间差的毫秒数
          let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
          dayDiff = dayDiff <= 0 ? 0 : dayDiff;
          let leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
          let hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
          hours = hours <= 0 ? 0 : hours;
          item.time = `${dayDiff} ${this.currCoinLangFun(
            "day",
            "all"
          )} ${hours} ${this.currCoinLangFun("hour", "all")}`;

          let baseScale = this.symbolPrice[item.symbol_name]
            ? this.symbolPrice[item.symbol_name].base_coin_scale
            : 4;
          let coinScale = this.symbolPrice[item.symbol_name]
            ? this.symbolPrice[item.symbol_name].coin_scale
            : 6;
          //预估收益
          if (item.symbol_name.split("/")[1] == item.cost_coin_symbol) {
            item.profit_text = toThousands(
              toNorounded(
                Number(item.join_amount).myMul(item.profit_rate),
                baseScale
              )
            );
          } else {
            item.profit_text = toThousands(
              toNorounded(
                Number(item.join_amount).myMul(item.profit_rate),
                coinScale
              )
            );
          }
          item.profit_text = item.profit_text + " " + item.cost_coin_symbol;
          item.profit = `${toThousands(item.profit)} ${item.cost_coin_symbol}`;
          item.capital_cost = `${toThousands(item.capital_cost)} ${
            item.cost_coin_symbol
          }`;
          item.fee_balance = `${toThousands(item.fee_balance)} ${
            item.cost_coin_symbol
          }`;
          return item;
        });
        return data;
      };
      if (!type || type == "now") {
        getMarketOrderDataApi("now").then((res) => {
          let data = res.data.data;
          data = setData(data);
          this.tableData.zzwh = data;
          if (this.mainType == "zzwh") {
            this.orderLoading = false;
          }
        });
      }
      if (!type || type == "history") {
        getMarketOrderDataApi("history").then((res) => {
          let data = res.data.data;
          data = setData(data);
          this.tableData.lswh = data;
          if (this.mainType == "lswh") {
            this.orderLoading = false;
          }
        });
      }
    },
    //获取当前交易对最新成交价
    getNewPrice(symbol) {
      return new Promise((resolve) => {
        if (typeof symbol == "string") {
          symbol = [symbol];
        }
        getSymbolNewDataApi(symbol, "xh")
          .then((res) => {
            let data = res.data.data;
            this.symbolPrice = {
              ...this.symbolPrice,
              ...data,
            };
            resolve();
          })
          .catch(() => {
            resolve();
          });
      });
    },
    //获取今日维护收益
    getYieldInfoData() {
      if (!this.isLogin) {
        return false;
      }
      getMarketYieldInfoApi().then((res) => {
        let data = res.data.data;
        data.forEach((item) => {
          item.banalceText = toThousands(toNorounded(item.banalce, 8));
          this.yieldInfo[item.type] = item;
        });
        console.log("维护收益", data);
      });
    },
    //获取市值钱包记录
    getMoneyListData() {
      if (!this.isLogin) {
        return false;
      }
      this.billLoading = true;
      getMarketYieldListApi().then((res) => {
        let data = res.data.data;
        this.billLoading = false;
        this.billData = data.map((item) => {
          item.fee_amount = item.fee_amount - 0;
          item.amount = item.amount - 0;
          return item;
        });
        console.log("钱包记录", data);
      });
    },
    //选择交易对
    handleCommand(row) {
      row = this.deepClone(row);
      this.getNewPrice(row.symbolName);
      let symbol = row.symbolName.split("/");
      this.marketData = {
        ...this.marketData,
        img: row.avatar,
        coin: symbol[0],
        base: symbol[1],
        tabs: [],
        tabsObj: {},
        symbol: row.symbolName,
        tabsValue: 0,
        money: 0,
        slider: 0,
      };
      let rightIndex = 0;
      if (row.leftGoodsList.length > 0) {
        this.marketData.tabs.push({
          text: symbol[0],
          type: "coin",
        });
        row.leftGoodsList = row.leftGoodsList.map((item) => {
          let minArr = item.minMoney.split(",");
          item.minMoney = minArr[0];
          return item;
        });
        rightIndex = 1;
      }
      if (row.rightGoodsList.length > 0) {
        this.marketData.tabs.push({
          text: symbol[1],
          type: "base",
        });
        row.rightGoodsList = row.rightGoodsList.map((item) => {
          let minArr = item.minMoney.split(",");
          item.minMoney = minArr[rightIndex];
          return item;
        });
      }
      this.yieldObj = {
        [symbol[0]]: row.leftGoodsList,
        [symbol[1]]: row.rightGoodsList,
      };
      if (row.leftGoodsList.length > 0) {
        this.currYield = row.leftGoodsList[0];
        this.marketData.tabsValue = "coin";
      } else {
        this.currYield = row.rightGoodsList[0];
        this.marketData.tabsValue = "base";
      }
      this.marketData.tabs.forEach((item) => {
        this.marketData.tabsObj[item.type] = item;
      });
      this.getMoneyData();
    },
    //选择维护日期
    yieldHandleCommand(row) {
      this.currYield = row;
    },
    //开始维护
    inputMoneyFnu() {
      if (this.marketData.money < this.currYield.minMoney) {
        this.$message(
          `${this.currCoinLangFun("minimum_input_required")} ${
            this.currYield.minMoney
          } ${this.currType}`
        ); //最小需投入
        return false;
      }
      this.marketData.loading = true;
      let obj = {
        marketSymbolId: this.currYield.marketSymbolId,
        coinId: this.currYield.coinId,
        amount: this.marketData.money,
        autoFlag: this.marketData.contract ? 1 : 0,
      };
      marketPlaceOrderApi(obj)
        .then((res) => {
          this.marketData.loading = false;
          this.marketData.dialog = false;

          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.handleCommand(this.menuData[this.marketData.symbol]);
          this.getTableData();
          this.getYieldInfoData();
        })
        .catch(() => {
          this.marketData.loading = false;
        });
    },
    //设置输入框的值
    inputChengFun(value, key, dec) {
      this.marketData[key] = inputNumberLinmitFun(value, dec);
    },
    //打开市值维护教程
    lookTutorialFun() {
      if (this.tutorialPath) {
        this.$router.push({ path: this.tutorialPath });
      }
    },
    //打开市值维护
    openMarket() {
      if (this.isMenu === false) {
        this.$message(this.currCoinLangFun("market_not_online")); //市值维护未上线，敬请期待
        return false;
      }
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }
      this.handleCommand(this.menuData[this.marketData.symbol]);
      this.marketData.dialog = true;
    },
    //打开收益明细
    openBill() {
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }
      this.getYieldInfoData();
      this.getMoneyListData();
      this.billDialog = true;
    },
    //修改自动续约
    setcontractFun(row, value) {
      if (this.tableData[this.mainType][row.$index].loading) {
        return false;
      }
      this.$set(this.tableData[this.mainType][row.$index], "loading", true);
      updataeOrderContractApi({
        id: row.id,
        autoFlag: value,
      })
        .then((res) => {
          this.$set(
            this.tableData[this.mainType][row.$index],
            "loading",
            false
          );
        })
        .catch(() => {
          this.$set(
            this.tableData[this.mainType][row.$index],
            "auto_buy",
            value == 1 ? 0 : 1
          );
          setTimeout(() => {
            this.$set(
              this.tableData[this.mainType][row.$index],
              "loading",
              false
            );
          }, 300);
        });
    },
    closeDialog(type, isRefresh) {
      if (type == "transferDialog") {
        this.isTradeFundsDialog = false;
        if (isRefresh && isRefresh == "refresh") {
          this.handleCommand(this.menuData[this.marketData.symbol]);
        }
      }
    },
    skipUserPage(type) {
      if (type == "login") {
        this.$router.push({ path: "/user/login" });
      } else if (type == "register") {
        this.$router.push({ path: "/user/register" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.market_main {
  padding-bottom: 48px;
}

.main-banner {
  height: 400px;
  background-color: #101a33;
  background-size: 912px 467px;
  background-position: 100%;
  background-repeat: no-repeat;

  .banner-content {
    height: 400px;
    margin: 0 auto;
    box-sizing: border-box;
    max-width: 1200px;

    .title {
      padding-top: 80px;
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      color: #dde3e6;
    }

    .title-tip {
      font-size: 20px;
      color: #9bb4cc;
      margin-top: 8px;
    }

    .influencer {
      display: inline-flex;
      align-items: center;
      margin-top: 24px;
      border-radius: 20px;
      padding: 2px 10px 2px 2px;
      font-size: 12px;
      line-height: 16px;
      background-color: rgba(123, 123, 147, 0.16) !important;

      .influencer-tag {
        color: #fff;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 22px;
        padding: 14px 60px;
        background-color: #40b285;
        font-size: 18px;
        cursor: pointer;
      }

      .bot-banner {
        min-width: 180px;

        span {
          color: #f5faff;
          white-space: nowrap;
          line-height: 16px;
          font-size: 12px;
          margin-left: 12px;

          &:nth-child(2) {
            color: #40b285;
          }
        }
      }

      i {
        font-size: 12px;
        margin-left: 12px;
        color: #f5faff;
        cursor: pointer;
      }
    }
  }
}

.main-content {
  border-radius: 4px;
  margin: 0 auto;
  margin-top: -118px;
  max-width: 1200px;
  box-sizing: border-box;

  .content-box {
    justify-content: space-between;
    border-bottom: 1px solid rgba(123, 123, 147, 0.16);

    .box-tabs {
      .box-tabs-item {
        color: #f5faff;
        font-weight: 700;
        font-size: 16px;
        padding: 11px 24px 13px;
        transition: color 0.3s;
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        margin: 16px 0;

        &.active {
          &::after {
            background-color: #2271e6;
          }
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
        }
      }
    }

    .box-tip {
      color: #0020FD;
      cursor: pointer;
    }
  }

  .table-box {
    width: 100%;
    border-radius: 10px;
    padding: 0 20px;

    ::v-deep.el-table {
      border-radius: 10px;

      .el-table__header-wrapper {
        th {
          padding: 12px 0;
        }
      }

      .table-empty {
        font-size: 12px;
        line-height: 16px;

        .is-login {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 72px;
            height: 72px;
          }

          span {
            font-size: 16px;
          }
        }

        .active-text {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.market-dialog {
  .market-dialog-content {
    .top-info {
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid;
      padding-bottom: 14px;

      .info-symbol {
        cursor: pointer;

        img {
          width: 20px;
          height: 20px;
          margin-right: 4px;
        }

        span {
          font-size: 16px;
        }

        i {
          font-size: 12px;
          padding-left: 5px;
        }
      }

      .info-money {
        font-size: 12px;
        line-height: 16px;

        .money-tip {
          cursor: pointer;
        }

        .money {
          span:nth-child(1) {
            padding-right: 5px;
          }
        }
      }
    }

    .tabs-box {
      margin-top: 24px;
      justify-content: center;

      .box-tabs {
        border-radius: 20px;
        padding: 0 2px 2px 2px;
        position: relative;
        z-index: 19;

        .box-tabs-item {
          width: 120px;
          cursor: pointer;
          text-align: center;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          font-size: 12px;
          padding: 10px 32px;
          transition: all 0.2s;
          white-space: nowrap;

          &.active {
            font-weight: 600;
          }
        }

        .segment-active {
          width: 120px;
          position: absolute;
          z-index: 0;
          top: 2px;
          height: 34px;
          border-radius: 20px;
          transition: all 0.2s;
        }
      }
    }

    .main-cycle {
      margin-top: 16px;

      .cycle-label {
        font-size: 14px;
        line-height: 24px;
      }

      .cycle-text {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          display: inline-block;
          padding: 10px 32px;
          border-radius: 20px;
        }
      }
    }

    .main-money {
      .money-input {
        justify-content: center;
        margin-top: 5px;

        .el-input {
          width: 200px;

          .el-input__inner {
            padding-right: 60px;
          }

          .el-input__suffix {
            display: flex;
            align-items: center;
            justify-content: center;

            .el-input__suffix-inner {
              padding: 2px 0;
              padding-left: 15px;
              padding-right: 10px;
              border-left: 1px solid rgba(123, 123, 147, 0.16);
            }
          }
        }
      }

      .money-slider {
        padding: 0 10px;
        margin-top: 5px;
      }
    }

    .my-money {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        padding-left: 5px;
      }

      .active-text {
        cursor: pointer;
      }
    }

    .main-set {
      margin-top: 20px;

      .set-item {
        display: flex;
        align-items: center;
        font-size: 14px;

        .item-tip {
          padding-left: 10px;
        }

        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }

      .set-tip {
        font-size: 12px;
        padding-top: 10px;
        padding-left: 50px;
      }
    }

    .main-btn {
      width: 100%;
      margin-top: 20px;

      .el-button {
        width: 100%;
      }
    }
  }
}

.market-bill-dialog {
  .market-bill-dialog-content {
    .bill-info {
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;

      .info-item {
        margin-bottom: 10px;
      }

      .money {
        font-size: 18px;
        padding-right: 5px;
      }

      .info-tip {
        font-size: 12px;
        padding-top: 5px;
      }
    }

    .bill-more {
      font-size: 12px;
      text-align: right;
      margin-top: 30px;
      margin-bottom: 10px;

      span {
        cursor: pointer;

        i {
          padding-left: 4px;
        }
      }
    }

    .bill-table {
      padding-bottom: 20px;
    }
  }
}
</style>
