<template>
  <div class="order_list">
    <div class="inner_box">
      <div class="in_tabs_box">
        <div class="in_tabs_inner">
          <el-tabs v-model="orderTabsValue" @tab-click="orderTabsClick">
            <el-tab-pane
              :key="item.name"
              :label="item.label"
              v-for="item in orderList"
              :name="item.name"
            >
            </el-tab-pane>
            <div>
              <el-checkbox v-model="checked" @change="clickCheckBox">{{
                $t("assets.hideOtherPairs")
              }}</el-checkbox>
              <i class="el-icon-refresh-right"></i>
            </div>
          </el-tabs>
        </div>
      </div>
      <!-- 当前持仓 -->
      <div class="table_content" v-if="orderTabsValue == 'curPosition'">
        <!-- {{ positionList }}--positionList -->
        <el-table :data="positionList" style="width: 100%">
          <el-table-column :label="$t('assets.transacPairs')" align="left">
            <template slot-scope="scope">
              <span
                >{{ scope.row.symbol.toUpperCase() }}/{{
                  scope.row.baseSymbol
                    ? scope.row.baseSymbol.toUpperCase()
                    : "USDT"
                }}
              </span>
              <span v-if="!scope.row.type" class="rise">{{
                $t("trade.goingLong")
              }}</span>
              <span v-else class="fall"> {{ $t("trade.openAir") }} </span>
              <span> {{ scope.row.leverage }}x</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('trade.openInterest')" align="center">
            <template slot-scope="scope">
              <span
                >{{ scope.row.openNum }} {{ scope.row.symbol.toUpperCase() }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('trade.holdCollateralAssets')"
            align="center"
          >
            <template slot-scope="scope">
              <span> {{ scope.row.adjustAmount }} USDT </span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('trade.positionMargin')" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.remainMargin }} USDT </span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('trade.guarAssetRatio')" align="center">
            <template slot-scope="scope">
              <span>{{ guaranteePrice(scope.row) }}% </span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('trade.averOpenPrice')" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.openPrice }} USDT </span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('trade.newestPrice')" align="center">
            <template slot-scope="scope">
              <span>{{ coinPriceInfo.close }} USDT </span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('trade.expectedStrongParity')"
            align="center"
          >
            <template slot-scope="scope">
              <span>
                {{ scope.row.closePrice <= 0 ? "--" : scope.row.closePrice }}
                USDT
              </span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('trade.profitRate')" align="center">
            <template slot-scope="scope">
              <span :class="[_isRFDE(yieldValue(scope.row))]">
                {{ yieldValue(scope.row) }}%
              </span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('trade.profit')" align="center">
            <template slot-scope="scope">
              <span :class="[_isRFDE(incomeValue(scope.row))]">
                {{ incomeValue(scope.row) }} USDT
              </span>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('trade.operate')"
            align="center"
            width="230"
          >
            <template slot-scope="scope">
              <el-button class="cur_p" @click="$emit('stopOrder', scope.row.id)"
                >{{ $t("trade.closePosition") }}
              </el-button>
              <el-button class="cur_p" @click="openAdjustDialog(scope.row)"
                >{{ $t("trade.adjustPromiseMoney") }}
              </el-button>
              <el-button
                class="cur_p"
                @click="openProfitLossDialog(scope.row, 0)"
                >{{ $t("trade.stopProfit") }}
              </el-button>
              <el-button
                class="cur_p"
                @click="openProfitLossDialog(scope.row, 1)"
                >{{ $t("trade.stopLoss") }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 当前委托 -->
      <div class="table_content" v-if="orderTabsValue == 'cuwei'">
        <ustaTable1
          :data="ustaCurOrderList"
          @cancelUstaOrder="cancelUstaOrder"
        ></ustaTable1>
      </div>

      <!-- 止盈止损 -->
      <div class="table_content" v-if="orderTabsValue == 'loss'">
        <ustaTable2
          :data="ustaLossList"
          @stoplossBullshit="stoplossBullshit"
        ></ustaTable2>
      </div>

      <!-- 历史委托 -->
      <div class="table_content" v-if="orderTabsValue == 'hiswei'">
        <ustaTable3 :data="ustaHisOrderList"></ustaTable3>
      </div>
      <!-- <el-empty v-if="orderTableData.length == 0" :description="$t('utils.noData')">
          <template #image>
            <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
          </template>
        </el-empty> -->
    </div>
    <!-- 调整保证金 -->
    <el-dialog
      :visible.sync="showMargin"
      :title="$t('trade.adjustPromiseMoney')"
      width="40%"
      :close-on-click-modal="false"
      @close="showMargin = false"
    >
      <el-tabs v-model="margin" @tab-click="handleTabClick">
        <el-tab-pane :label="$t('trade.addMargin')" name="add"> </el-tab-pane>
        <el-tab-pane :label="$t('trade.reduceMargin')" name="reduce">
        </el-tab-pane>

        <div class="popupContent">
          <div class="popupInput">
            <el-input :placeholder="$t('utils.plsInput')" v-model="money">
              <template slot="append">USDT</template>
            </el-input>
          </div>
          <div class="rightFourth">
            <el-slider
              v-model="sliderValue"
              @change="changeAdjustSider"
              :min="0"
              :max="100"
            ></el-slider>
          </div>
          <div class="popupLr flex-start">
            <div>
              {{
                margin == "add" ? $t("trade.maxAdd") : $t("trade.maxReduce")
              }}：
            </div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ atMostValue(adjustObj) }} USDT
            </div>
          </div>
          <div class="popupLr flex-start">
            <div>
              {{
                margin == "add"
                  ? $t("trade.addPriceLabel")
                  : $t("trade.reducePriceLabel")
              }}：
            </div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ qiangpingPrice(adjustObj) }} USDT
            </div>
          </div>
          <div class="determine">
            <el-button
              class="commonBtn_bg"
              type="primary"
              @click="adjustMargin"
              >{{ $t("utils.confirm") }}</el-button
            >
          </div>
        </div>
      </el-tabs>
    </el-dialog>
    <!-- 止赢止损 -->
    <el-dialog
      :visible.sync="showTermination"
      :title="!stopName ? $t('trade.stopProfit') : $t('trade.stopLoss')"
      width="40%"
      :close-on-click-modal="false"
      @close="showTermination = false"
    >
      <el-tabs v-model="margin1" @tab-click="handleTabClick1">
        <el-tab-pane :label="$t('trade.marketPrice')" name="city">
        </el-tab-pane>
        <el-tab-pane :label="$t('trade.limitPrice')" name="limit">
        </el-tab-pane>
        <!-- 止盈触发价格/止损出发价格 -->

        <div class="popupContent">
          <div class="popupName">
            {{
              !stopName
                ? $t("trade.stopProfitTriPrice")
                : $t("trade.stopLossTriPrice")
            }}
          </div>
          <div class="popupInput">
            <el-input
              :placeholder="$t('utils.plsInput')"
              v-model="earnPriceValue"
            >
              <template slot="append">USDT</template>
            </el-input>
          </div>

          <!-- 止盈委托/止损委托 -->
          <div class="popupName">
            {{
              !stopName
                ? $t("trade.stopProfitCommiss")
                : $t("trade.stopLossCommiss")
            }}
          </div>
          <!-- 止盈市价 -->
          <div class="popupInput" v-if="margin1 == 'city'">
            <el-input :readonly="true" class="readInput">
              <template slot="suffix">{{
                $t("trade.tradeOptimalprice")
              }}</template>
            </el-input>
          </div>

          <!-- 止盈限价 -->
          <div class="popupInput" v-if="margin1 == 'limit'">
            <el-input
              type="number"
              v-model="earnDelegatePriceValue"
              :placeholder="$t('utils.plsInput')"
            >
              <template slot="append">USDT</template>
            </el-input>
          </div>

          <!-- 持仓量 -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.openInterest") }}：</div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ adjustObj.openNum }}
              {{
                adjustObj.showCoin
                  ? adjustObj.showCoin
                  : adjustObj.symbol.toUpperCase()
              }}
            </div>
          </div>

          <!-- 平仓均价： -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.closingAverPrice") }}：</div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ adjustObj.openPrice }} USDT
            </div>
          </div>

          <!-- 最新成交价： -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.newestDealPrice") }}：</div>
            <div class="fw-num popupLrNum">{{ coinPriceInfo.close }} USDT</div>
          </div>

          <!-- 止盈 -->
          <div class="stopBottom" v-if="margin1 == 'city'">
            <!-- 市场价格至 -->
            {{ $t("trade.marketPriceTo") }}
            <span class="stopBottomSpan fw-num"
              >{{ coinPriceInfo.close }} USDT</span
            >
            <!-- 时将触发止盈委托，成交后预计盈利 -->
            {{ $t("trade.marketPriceToTip") }}
            <span
              class="stopBottomSpan fw-num"
              v-if="Object.keys(adjustObj).length > 0"
              >{{ incomeValue(adjustObj) }} USDT</span
            >
          </div>

          <div class="determine">
            <el-button
              class="commonBtn_bg"
              type="primary"
              @click="stopWinAndLosing(adjustObj)"
              >{{ $t("utils.confirm") }}</el-button
            >
          </div>
        </div>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import {
  countFormat,
  priceFormat,
  _add,
  _sub,
  _div,
  _toFixed,
  _mul,
} from "@/util/decimal";
import ustaTable1 from "../ustaTable1.vue"; //当前委托
import ustaTable2 from "../ustaTable2.vue"; //止盈止损
import ustaTable3 from "../ustaTable3.vue"; //历史委托
import { adjustAmount, settLoss } from "@/api/trade.js";
export default {
  props: {
    ustaCurOrderList: Array,
    ustaHisOrderList: Array,
    positionList: Array,
    ustaLossList: Array,
    ustaOrderLen1: String,
    ustaOrderLen2: String,
    ustaOrderLen3: String,
    ustaOrderLen4: String,
    coinPriceInfo: Object,
    availableBalance: String,
    contractCoinList: Array,
  },
  components: { ustaTable1, ustaTable2, ustaTable3 },
  data() {
    return {
      showMargin: false,
      margin: "add",
      money: "",
      sliderValue: 0,
      showTermination: false,
      stopName: 0,
      margin1: "city",
      earnPriceValue: "",
      earnDelegatePriceValue: "",
      adjustObj: {},
      orderTabsValue: "curPosition", //订单默认tab值
      checked: false, //是否隐藏其他交易队单选框
    };
  },
  computed: {
    orderList() {
      return [
        {
          label:
            this.$t("trade.currentPosition") + "(" + this.ustaOrderLen3 + ")",
          name: "curPosition",
        },
        {
          label: this.$t("assets.curCommis") + "(" + this.ustaOrderLen1 + ")",
          name: "cuwei",
        },
        {
          label:
            this.$t("trade.stopProfitStopLoss") +
            "(" +
            this.ustaOrderLen4 +
            ")",
          name: "loss",
        },
        {
          label:
            this.$t("assets.historyCommis") + "(" + this.ustaOrderLen2 + ")",
          name: "hiswei",
        },
      ]; //订单tab
    },
    // 最多/最少增加
    atMostValue() {
      return function (item) {
        let price;
        // 最多增加
        if (this.margin == "add") {
          // type  0 买入 1 卖出
          if (item.type) {
            // openPrice   + adjustAmount / openNum  卖出
            price = _add(item.openPrice, _div(item.adjustAmount, item.openNum));
            price = price > 0 ? price : 0;
          } else {
            price = _sub(item.openPrice, _div(item.adjustAmount, item.openNum));
            price = price > 0 ? price : 0;
          }
        } else {
          // 最多减少
          // adjustAmount -amount   >  adjustAmount -amount  : 0
          price = _sub(item.adjustAmount, item.amount);
          price = price > 0 ? price : 0;
        }

        return price;
      };
    },
    // 强平价格
    qiangpingPrice() {
      return function (item) {
        var price;
        var closeFee = 0;
        if (this.contractCoinList.length > 0) {
          this.contractCoinList.forEach((element) => {
            if (element.coin == item.symbol) {
              closeFee = element.closeFee;
            }
          });
        }
        // adjustAmount + 当前输入的值   ） / 持仓数量（openNum）
        let position;
        if (this.margin == "add") {
          position = _div(
            _add(item.adjustAmount, this.money ? this.money : 0),
            item.openNum
          );
        } else {
          position = _div(
            _sub(item.adjustAmount, this.money ? this.money : 0),
            item.openNum
          );
        }
        // 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
        let commission = _mul(
          _add(item.adjustAmount, this.money ? this.money : 0),
          closeFee
        );
        // 判断type 0  1
        if (item.type == 0) {
          // 开盘价（openPrice） - （adjustAmount + 当前输入的值   ） / 持仓数量（openNum） + 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
          price = _add(_sub(item.openPrice, position), commission);
        } else if (item.type == 1) {
          // （adjustAmount + 当前输入的值   ） / 持仓数量（openNum）  +   开盘价（openPrice）   -  手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
          price = _sub(_add(position, item.openPrice), commission);
        }
        price = price <= 0 ? 0 : price;
        return _toFixed(price, 2);
      };
    },

    // (现金+信用账户内证券市值)/(融资买入金额+融券卖出证券数量*市价+利息及费用)
    // （账户余额+ （当前价*数量openNum） ） / （购买金额（adjustAmount）+ 数量openNum*当前+  利息openFee  ）
    guaranteePrice() {
      return function (item) {
        if (this.coinPriceInfo.close) {
          let price = _div(
            _add(
              this.availableBalance,
              _mul(this.coinPriceInfo.close, item.openNum)
            ),
            _add(
              _add(
                item.adjustAmount,
                _mul(item.openNum, this.coinPriceInfo.close)
              ),
              item.openFee
            )
          );
          return _toFixed(price);
        }
      };
    },
    /**
     * 收益率
     */
    yieldValue() {
      return function (item) {
        if (this.coinPriceInfo.close) {
          //之前的 收益率：最新价 当买多时 最新价-开仓价均价（openPrice） /开仓价（openPrice） *100
          /**新改的
           * 收益率=(最新价-开仓价)*杠杆倍数/开仓价
           * 最新价coinPriceInfo.value.close
           * 开仓价props.recordListItem.openPrice
           * 杠杆倍数props.recordListItem.leverage
           */
          if (!item.type) {
            let price = _mul(
              _mul(
                _div(
                  _sub(this.coinPriceInfo.close, item.openPrice),
                  item.openPrice
                ),
                100
              ),
              item.leverage
            );
            // rxce 收益率 = ((开盘价-关盘价)*数量)/保证金/杠杆倍数
            if (false) {
              price = _div(
                _div(
                  _mul(
                    _mul(
                      _sub(this.coinPriceInfo.close, item.openPrice),
                      item.openNum
                    ),
                    100
                  ),
                  item.entrustmentValue
                ),
                item.leverage
              );
            }
            return _toFixed(price, 4);
          } else {
            var price = _mul(
              _mul(
                _div(
                  _sub(item.openPrice, this.coinPriceInfo.close),
                  item.openPrice
                ),
                100
              ),
              item.leverage
            );
            /* if (['rxce'].includes(__config._APP_ENV)) {
        price = _div(price, props.recordListItem.leverage)
      } */
            return _toFixed(price, 4);
          }
        }
      };
    },
    /**
     * 收益
     */
    incomeValue() {
      return function (item) {
        if (this.coinPriceInfo.close) {
          // 最新价 当买多时 最新价-开仓价均价（openPrice） * 持仓数量（openNum）
          if (!item.type) {
            var price = _mul(
              _sub(this.coinPriceInfo.close, item.openPrice),
              item.openNum
            );
            return _toFixed(price, 4);
          } else {
            // 卖出  开仓-最新 * 持仓
            var price = _mul(
              _sub(item.openPrice, this.coinPriceInfo.close),
              item.openNum
            );
            return _toFixed(price, 4);
          }
        }
      };
    },
    // /**
    //  * 历史收益率
    //  * earn / adjustAmount * 100
    //  */
    // yieldHisValue() {
    //   return function (item) {
    //     console.log("item=44444444444====>", item);
    //     let price = _mul(_div(item.earn, item.adjustAmount), 100);
    //     // rxce 收益率=收益/保证金/杠杆
    //     if (false) {
    //       price = _div(price, item.leverage);
    //     } else if (0 == 1) {
    //       // 收益率=收益/委托价值/杠杆
    //       price = _mul(
    //         _div(_div(item.earn, item.entrustmentValue), item.leverage),
    //         100
    //       );
    //     }
    //     return _toFixed(price, 4);
    //   };
    // },
  },
  watch: {
    money(val) {
      if (val) {
        if (val >= this.availableBalance) {
          this.money = this.availableBalance;
        }
      } else {
        this.money = "";
      }
    },
  },
  methods: {
    stopWinAndLosing(item) {
      var data = {};
      if (!this.stopName) {
        data = {
          positionId: item.id,
          earnPrice: this.earnPriceValue,
          earnNumber: item.openNum,
          // 0 止盈 1止损
          lossType: 0,
          // 委托类型（0 限价 1 市价）
          delegateType: this.margin1 == "limit" ? 0 : 1,
        };
        if (!data.delegateType) {
          data.earnDelegatePrice = this.earnDelegatePriceValue;
        }
      } else {
        data = {
          positionId: item.id,
          losePrice: this.earnPriceValue,
          loseNumber: this.openNum,
          // 0 止盈 1止损
          lossType: 1,
          // 委托类型（0 限价 1 市价）
          delegateType: this.margin1 == "limit" ? 0 : 1,
        };
        if (!data.delegateType) {
          data.loseDelegatePrice = this.earnDelegatePriceValue;
        }
      }
      if (!data.delegateType) {
        if (this.earnPriceValue && this.earnDelegatePriceValue) {
          settLoss(data).then((res) => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg);
              this.showTermination = false;
              this.$emit("upDateUser");
              this.$emit("contractLossList");
            }
          });
        }
      } else {
        if (this.earnPriceValue) {
          settLoss(data).then((res) => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg);
              this.showTermination = false;
              this.$emit("upDateUser");
              this.$emit("contractLossList");
            }
          });
        }
      }
    },
    handleTabClick1(e) {
      this.margin1 = e.name;
    },
    openProfitLossDialog(item, value) {
      this.showTermination = true;
      this.stopName = value;
      this.adjustObj = item;
    },
    adjustMargin() {
      let data = {
        id: this.adjustObj.id,
        money: this.money,
        // 0 增加保证金 1 减少保证金
        flag: this.margin == "add" ? 0 : 1,
      };
      if (Number(this.money)) {
        adjustAmount(data).then((res) => {
          if (res.data.code == 200) {
            // data.flag 追加成功 : 减少成功
            // showToast(`${!data.flag ? _showName(`additional_success`) : _showName(`reduce_success`)}`)
            this.$message.success(res.data.msg);
            this.showMargin = false;
            this.$emit("upDateUser");
            this.$emit("contractHistoryList", 0);
          }
        });
      }
    },
    changeAdjustSider(value) {
      if (value) {
        let rate = _div(value, 100);
        this.money = _mul(this.availableBalance, rate);
      } else {
        this.money = "";
      }
    },
    openAdjustDialog(item) {
      this.showMargin = true;
      this.adjustObj = item;
    },
    handleTabClick(e) {
      this.margin = e.name;
      this.money = "";
      this.sliderValue = 0;
    },
    stoplossBullshit(id) {
      this.$emit("stoplossBullshit", id);
    },
    cancelUstaOrder(id) {
      this.$emit("cancelUstaOrder", id);
    },
    formatFixed(value) {
      return _toFixed(value, 4);
    },
    //切换Tab
    orderTabsClick(e) {
      this.orderTabsValue = e.name;
      if (this.orderTabsValue == "curPosition") {
        this.$emit("contractHistoryList", 0);
      } else if (this.orderTabsValue == "cuwei") {
        this.$emit("getUstaContractOrder", 0);
      } else if (this.orderTabsValue == "loss") {
        this.$emit("contractLossList");
      } else {
        this.$emit("contractHistoryList", 1);
      }
    },
    //点击显示隐藏其他交易队
    clickCheckBox(e) {
      if (e) {
        this.$emit("filterUstaData", this.orderTabsValue);
        //   if(this.orderTabsValue == "cuwei"){
        //       this.orderTableData = this.orderTableData.filter((item) => {
        //       return item.coinSymbol == "adb";
        //      });
        //      this.$emit('filterSecData', this.orderTabsValue);
        //   }else{
        //      this.orderTableData = this.orderTableData.filter((item) => {
        //       return item.coinSymbol == "btc";
        //      });
        //   }
      } else {
        // console.log("orderTabsValue===>", this.orderTabsValue);
        if (this.orderTabsValue == "curPosition") {
          this.$emit("contractHistoryList", 0);
        } else if (this.orderTabsValue == "cuwei") {
          this.$emit("getUstaContractOrder", 0);
        } else if (this.orderTabsValue == "loss") {
          this.$emit("contractLossList");
        } else {
          this.$emit("contractHistoryList", 1);
        }
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
::v-deep.el-table {
  font-size: 12px;
}
.el-button {
  font-size: 12px;
}
// @import url("../../index.scss");
.in_tabs_box {
  margin-top: 10px;
  .in_tabs_inner {
    ::v-deep.el-tabs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-tabs__nav-wrap::after {
        height: 0;
      }
      .el-tabs__active-bar {
        display: none;
      }
    }
  }
}

.popupLr,
.determine {
  margin-top: 15px;
}
.determine {
  .el-button {
    width: 100%;
  }
}
.popupName {
  margin-top: 10px;
}
.popupInput {
  margin-top: 10px;
}
.stopBottom {
  margin-top: 15px;
}
::v-deep.el-input {
  .el-input__suffix {
    height: 42px;
    line-height: 42px;
  }
}
::v-deep.readInput .el-input__inner {
  background: #f1f1f1;
}
</style>
