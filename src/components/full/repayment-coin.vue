<template>
  <div>
    <!--  还币付息-->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('reimbursement')"
      :visible.sync="dialog"
      width="600px"
      custom-class="borrow-coin-pry-dialog"
    >
      <div class="borrow-coin-pry-box" v-loading="loading">
        <div class="flex-box borrow-tab" v-if="tradeType == 'zc'">
          <div
            class="tab-item"
            v-for="(item, index) in pryTabs"
            :key="index"
            :class="{ active: pryType == item.label }"
            @click="pryType = item.label"
          >
            <img :src="exchangeCoinData[`${item.type}_avatar`]" />
            <span class="fit-tc-primary">{{ item.label }}</span>
          </div>
        </div>
        <div class="borrow-select" v-else>
          <el-select
            v-model="warehouseType"
            :placeholder="currCoinLangFun('merinfo_qxz', 'center')"
          >
            <el-option
              v-for="item in warehouseTabs"
              :key="item.coinName"
              :value="item.coinName"
            >
              <span style="display: flex; align-items: center">
                <img style="width: 20px" :src="item.avatar" />
                <span style="padding-left: 10px">{{ item.coinName }}</span>
              </span>
            </el-option>
          </el-select>
        </div>
        <div v-if="tradeType == 'zc'">
          <div
            v-for="(item, index) in pryTabs"
            :key="index"
            v-show="pryType == item.label"
          >
            <div class="flex-box borrow-info">
              <div class="flex-box">
                <span class="fit-tc-tip">{{
                  currCoinLangFun("should_also")
                }}</span>
                <span class="fit-tc-primary">
                  {{ pryMultipleInfo[`${item.type}AlsoBalance`] }}
                  {{ item.label }}
                </span>
              </div>
              <div class="flex-box">
                <span class="fit-tc-tip">{{
                  currCoinLangFun("have_borrow")
                }}</span>
                <span class="fit-tc-primary">
                  {{ pryMultipleInfo[`${item.type}BorrowBalance`] }}
                  {{ item.label }}
                </span>
              </div>
            </div>
            <div class="borrow-info">
              <div class="flex-box">
                <span class="fit-tc-tip">{{
                  currCoinLangFun("orders_table_interest_amount")
                }}</span>
                <span class="fit-tc-primary">
                  {{ pryMultipleInfo[`${item.type}InterestAmount`] }}
                  {{ item.label }}
                </span>
              </div>
            </div>
            <div class="borrow-money">
              <el-input
                :placeholder="currCoinLangFun('text_qsrhksl')"
                @input="(e) => borrowChengFun(e, item.type)"
                v-model="repaymentFrom[item.type]"
              >
                <div slot="suffix">
                  <span class="text fit-tc-tip">{{ item.label }}</span>
                  <span
                    class="btn fit-tc-primary active-text"
                    @click="
                      repaymentFrom[item.type] =
                        pryMultipleInfo[`${item.type}AlsoBalance`]
                    "
                    >{{ currCoinLangFun("zd_text", "move_contract") }}</span
                  >
                </div>
              </el-input>
            </div>
            <div class="borrow-tip">
              <span class="fit-tc-tip">{{
                currCoinLangFun("text_ggzczhky")
              }}</span>
              <span class="fit-tc-primary">
                {{ pryMultipleInfo[`${item.type}Balance`] }}
                {{ item.label }}
              </span>
              <span
                class="fit-tc-primary active-text"
                @click="isTradeFundsDialog = true"
                >{{ currCoinLangFun("transfer_text", "all") }}</span
              >
            </div>
            <div class="borrow-btn-box">
              <el-button
                type="primary"
                :disabled="repaymentFrom[item.type] == ''"
                :loading="btnLoading"
                @click="repaymentMoneyFun(item.label, item.type)"
                >{{
                  replaceCoinLangFun(currCoinLangFun("gh_text"), [
                    {
                      key: "$[key_word]",
                      value: item.label,
                    },
                  ])
                }}
              </el-button>
            </div>
          </div>
        </div>
        <div v-else-if="tradeType == 'qc' && warehouseObj[warehouseType]">
          <div class="flex-box borrow-info">
            <div class="flex-box">
              <span class="fit-tc-tip">{{
                currCoinLangFun("should_also", "full")
              }}</span>
              <span class="fit-tc-primary"
                >{{ warehouseObj[warehouseType].yh }} {{ warehouseType }}</span
              >
            </div>
            <div class="flex-box">
              <span class="fit-tc-tip">{{
                currCoinLangFun("have_borrow", "full")
              }}</span>
              <span class="fit-tc-primary">
                {{ warehouseObj[warehouseType].borrowBalance }}
                {{ warehouseType }}
              </span>
            </div>
          </div>
          <div class="borrow-info">
            <div class="flex-box">
              <span class="fit-tc-tip">{{
                currCoinLangFun("orders_table_interest_amount", "full")
              }}</span>
              <span class="fit-tc-primary">
                {{ warehouseObj[warehouseType].interestAmount }}
                {{ warehouseType }}
              </span>
            </div>
          </div>
          <div class="borrow-money">
            <el-input
              :placeholder="currCoinLangFun('text_qsrhksl', 'full')"
              @input="(e) => borrowChengFun(e, warehouseType)"
              v-model="repaymentFrom[warehouseType]"
            >
              <div slot="suffix">
                <span class="text fit-tc-tip">{{ warehouseType }}</span>
                <span
                  class="btn fit-tc-primary active-text"
                  @click="
                    repaymentFrom[warehouseType] =
                      warehouseObj[warehouseType].yh
                  "
                  >{{ currCoinLangFun("zd_text", "move_contract") }}</span
                >
              </div>
            </el-input>
          </div>
          <div class="borrow-tip">
            <span class="fit-tc-tip">{{
              currCoinLangFun("ggqczhky_text")
            }}</span>
            <span class="fit-tc-primary">
              {{ warehouseObj[warehouseType].balance }}
              {{ warehouseType }}
            </span>
            <span
              class="fit-tc-primary active-text"
              @click="isTradeFundsDialog = true"
              >{{ currCoinLangFun("transfer_text", "all") }}</span
            >
          </div>
          <div class="borrow-btn-box">
            <el-button
              type="primary"
              :disabled="
                repaymentFrom[warehouseType] == '' ||
                repaymentFrom[warehouseType] == undefined
              "
              :loading="btnLoading"
              @click="repaymentMoneyFun(warehouseType, warehouseType)"
              >{{
                replaceCoinLangFun(currCoinLangFun("gh_text"), [
                  {
                    key: "$[key_word]",
                    value: warehouseType,
                  },
                ])
              }}
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 资金划转 -->
    <fund-transfer
      v-if="isTradeFundsDialog"
      :transferDialog="isTradeFundsDialog"
      :closeDialog="closeDialog.bind(this)"
    ></fund-transfer>
  </div>
</template>

<script>
import {
  getCurrPropertyApi,
  getCounterpartyDataApi,
  repaymentMoneyApi,
  getPryWarehouseAccountDataApi,
} from "@/api/fullScreen";
import { inputNumberLinmitFun, toNonExponential } from "@/util/util";
import { mapGetters } from "vuex";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
export default {
  components: {
    fundTransfer,
  },
  props: {
    tradeType: String,
    orderData: Object,
  },
  data() {
    return {
      symbol: "",
      dialog: false,
      loading: false,
      btnLoading: false,
      pryMultipleInfo: {},
      exchangeCoinData: {},
      pryTabs: {},
      pryType: "",
      repaymentFrom: {
        base: "",
        coin: "",
      },
      warehouseObj: {},
      warehouseType: "",
      warehouseTabs: [],

      isTradeFundsDialog: false,
    };
  },
  watch: {
    dialog(val) {
      if (val) this.initData();
    },
    warehouseType() {
      for (let key in this.repaymentFrom) {
        this.repaymentFrom[key] = "";
      }
    },
  },
  computed: {
    ...mapGetters(["isLogin"]),
  },
  methods: {
    currCoinLangFun(code, type = "full") {
      return this.coinLangFun(type, code);
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key);
          //while循环替换相同的key
          while (keyIndex >= 0) {
            text = text.replace(item.key, item.value || "");
            keyIndex = text.indexOf(item.key);
          }
        });
      }

      return text;
    },
    initData() {
      if (this.orderData.symbol_name) {
        this.symbol = this.orderData.symbol_name;
      } else {
        this.symbol = "";
      }

      this.repaymentFrom = {};
      if (this.tradeType == "zc") {
        let symbol = this.orderData.symbol_name.split("/");
        this.pryTabs = [
          {
            label: symbol[1],
            type: "base",
            min: "",
            rate: "",
          },
          {
            label: symbol[0],
            type: "coin",
            min: "",
            rate: "",
          },
        ];
        this.repaymentFrom = {
          base: "",
          coin: "",
        };
        this.pryType = this.pryTabs[0].label;
      }
      if (this.tradeType == "zc") {
        this.initZcFun();
      } else {
        this.initQcFun();
      }
    },
    initZcFun() {
      this.loading = true;
      getCounterpartyDataApi("xh", this.symbol.replace("/", "_")).then(
        (res) => {
          let data = res.data.data;
          this.exchangeCoinData = data;
        }
      );
      getCurrPropertyApi(
        this.orderData.symbol_name.replace("/", "_"),
        this.tradeType
      )
        .then((res) => {
          let data = res.data.data;
          if (this.tradeType == "zc") {
            data.baseAlsoBalance = toNonExponential(
              Number(data.baseBorrowBalance).myAdd(data.baseInterestAmount)
            );
            data.coinAlsoBalance = toNonExponential(
              Number(data.coinBorrowBalance).myAdd(data.coinInterestAmount)
            );
            if (`${data.baseAlsoBalance}`.indexOf(".") != -1) {
              data.basePrecision = `${data.baseAlsoBalance}`.split(
                "."
              )[1].length;
            } else {
              data.basePrecision = 2;
            }
            if (`${data.coinAlsoBalance}`.indexOf(".") != -1) {
              data.coinPrecision = `${data.coinAlsoBalance}`.split(
                "."
              )[1].length;
            } else {
              data.coinPrecision = 2;
            }

            this.pryTabs.map((item) => {
              let type = item.type.replace(
                item.type[0],
                item.type[0].toUpperCase()
              );
              item.rate = data[`borrw${type}DayRate`];
              item.min = data[`borrowMin${type}Cou`];
              return item;
            });
          }
          console.log("还款", data);
          this.pryMultipleInfo = data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    initQcFun() {
      this.loading = true;
      this.repaymentFrom = {};
      //获取全仓账户信息列表
      getPryWarehouseAccountDataApi().then((res) => {
        let data = res.data.data;
        data = data.map((item) => {
          item.yh = Number(item.borrowBalance).myAdd(item.interestAmount);
          if (`${item.yh}`.indexOf(".") != -1) {
            item.precision = `${item.yh}`.split(".")[1].length;
          } else {
            item.precision = 2;
          }
          this.$set(this.repaymentFrom, item.coinName, "");
          this.warehouseObj[item.coinName] = item;
          return item;
        });
        this.warehouseType = data[0].coinName;
        this.warehouseTabs = data;
        this.loading = false;
      });
    },
    //借款 还款输入框
    borrowChengFun(value, type) {
      if (this.tradeType == "zc") {
        this.repaymentFrom[type] = inputNumberLinmitFun(
          value,
          this.pryMultipleInfo[`${type}Precision`]
        );
      } else {
        this.repaymentFrom[type] = inputNumberLinmitFun(
          value,
          this.warehouseObj[this.warehouseType].precision
        );
      }
    },
    //还款
    repaymentMoneyFun(symbol, type) {
      this.btnLoading = true;
      repaymentMoneyApi(
        {
          symbolName: this.symbol,
          symbol,
          cou: this.repaymentFrom[type],
        },
        this.tradeType
      )
        .then((res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("repayment_coin_tip"), //还款成功
          });
          this.btnLoading = false;
          this.dialog = false;
        })
        .catch(() => {
          this.btnLoading = false;
        });
    },
    closeDialog(type, isRefresh) {
      if (type == "transferDialog") {
        this.isTradeFundsDialog = false;
        if (isRefresh && isRefresh == "refresh") {
          this.initData();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.borrow-coin-pry-dialog {
  .borrow-coin-pry-box {
    .borrow-tab {
      border-bottom: 1px solid rgba(123, 123, 147, 0.16);
      font-weight: 400;
      .tab-item {
        padding: 12px 16px 10px;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 24px;
          height: 24px;
          margin-right: 4px;
        }
        span {
          font-weight: 700;
          font-size: 16px;
        }
        &.active {
          border-color: #0020FD;
        }
      }
    }
    .borrow-select {
      margin-top: -16px;
      display: inline-block;
      width: 100%;
      .el-select {
        width: 100%;
      }
      .el-input__inner {
        height: 42px;
        line-height: 42px;
        padding: 0 15px;
      }
    }
    .borrow-info {
      margin-top: 24px;
      font-weight: 400;
      font-size: 12px;
      div {
        flex: 1;
        span {
          &:nth-child(1) {
            padding-right: 8px;
          }
        }
      }
    }
    .borrow-money {
      margin-top: 24px;
      width: 100%;
      .el-select {
        width: 100%;
      }
      .el-input {
        .el-input__inner {
          height: 48px;
          width: 100%;
        }
      }
    }
    .borrow-money {
      .el-input__inner {
        padding-right: 100px;
      }
      .el-input__suffix {
        display: flex;
        align-items: center;
        .text {
          border-right: 1px solid;
          line-height: 16px;
          font-size: 12px;
          padding-right: 12px;
          margin-right: 12px;
        }
        .btn {
          cursor: pointer;
          font-size: 12px;
          padding-right: 5px;
        }
      }
      .money-text {
        text-align: right;
        margin-top: 4px;
        font-size: 12px;
        line-height: 16px;
        span {
          padding-left: 10px;
        }
      }
    }
    .borrow-rate {
      margin-top: 24px;
      span {
        &:nth-child(1) {
          padding-right: 8px;
        }
      }
    }
    .borrow-btn-box {
      margin-top: 24px;
      .el-button {
        width: 100%;
        font-size: 16px;
        padding: 12px;
      }
    }
    .borrow-tip {
      text-align: right;
      margin-top: 8px;
      font-size: 12px;
      .active-text {
        cursor: pointer;
      }
      span {
        &:nth-child(2) {
          padding: 0 6px;
        }
      }
    }
  }
}
</style>