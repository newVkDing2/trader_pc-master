<template>
  <div class="fund-transfer-box">
    <el-dialog
      :title="currCoinLangFun('transfer', 'all')"
      width="560px"
      :visible.sync="transferDialog"
      :close-on-click-modal="false"
      @close="closeDialog('transferDialog')"
    >
      <div v-loading="requesting">
        <div class="flex-box top-box">
          <div class="flex-1 fit-tc-background border-color">
            <el-dropdown trigger="hover" click="flex-1" @command="chooseSource">
              <div class="flex-box el-dropdown-link dropdown-trigger">
                <div class="content">
                  <div class="fit-tc-tip">
                    {{ currCoinLangFun("form", "all") }}
                  </div>
                  <div class="label">{{ sourceWallet.label }}</div>
                </div>
                <i class="el-icon-arrow-down"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in walletArrSource"
                  :key="item.id"
                  :command="item"
                >
                  <span
                    :class="{
                      active: item.id == sourceWallet.id,
                    }"
                    >{{ item.label }}</span
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <i class="fa fa-exchange transfer-icon" @click="exchange"></i>
          <div class="flex-1 fit-tc-background border-color">
            <el-dropdown trigger="hover" click="flex-1" @command="chooseTarger">
              <div class="flex-box el-dropdown-link dropdown-trigger">
                <div class="content">
                  <div class="fit-tc-tip">
                    {{ currCoinLangFun("to", "all") }}
                  </div>
                  <div class="label">{{ targerWallet.label }}</div>
                </div>
                <i class="el-icon-arrow-down"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in walletArrTarger"
                  :key="item.id"
                  :command="item"
                >
                  <span
                    :class="{
                      active: item.id == targerWallet.id,
                    }"
                    >{{ item.label }}</span
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="center-box">
          <div v-if="ifHadFixed">
            <el-select
              v-model="pairId"
              filterable
              :placeholder="currCoinLangFun('merinfo_qxz', 'center')"
              popper-class="fit-background-select coin-select"
            >
              <el-option
                v-for="item in transactionPair"
                :key="item.id"
                :label="item.symbol_name"
                :value="item.id"
              >
                <div @click="chooseCurrPair(item)">
                  <img :src="item.avatar" alt />
                  {{ item.symbol_name }}
                </div>
              </el-option>
            </el-select>

            <el-select
              v-model="currCoinZc"
              filterable
              :placeholder="currCoinLangFun('merinfo_qxz', 'center')"
              popper-class="fit-background-select coin-select"
              style="margin-top: 16px"
            >
              <el-option
                v-for="item in coinArrZc"
                :key="item.id"
                :label="item.symbol"
                :value="item.id"
              >
                <div @click="chooseCurrCoinZc(item)">
                  <img :src="item.avatar" alt />
                  {{ item.symbol }}
                </div>
              </el-option>
            </el-select>
          </div>
          <div v-if="!ifHadFixed">
            <el-select
              v-model="currCoin"
              filterable
              :placeholder="currCoinLangFun('merinfo_qxz', 'center')"
              popper-class="fit-background-select coin-select"
            >
              <el-option
                v-for="item in coinArr"
                :key="item.id"
                :label="item.symbol"
                :value="item.id"
              >
                <div @click="chooseCurrCoin(item)">
                  <img :src="item.avatar" alt />
                  {{ item.symbol }}
                </div>
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="input-number-box">
          <el-input
            type="number"
            v-model="number"
            :placeholder="currCoinLangFun('table_coin_num', 'exchange')"
            onkeypress="return (/[^-^e^+]/.test(String.fromCharCode(event.keyCode)))"
            class="fit-tc-primary"
          ></el-input>
          <span class="el-input__suffix">
            <span class="el-input__suffix-inner">
              <div class="flex-box">
                <span class="fit-tc-tip border-right-line">
                  {{
                    ifHadFixed
                      ? currCoinObjZc && currCoinObjZc.symbol
                      : currCoinObj && currCoinObj.symbol
                  }}
                </span>
                <span class="fit-tc-tertiary active-text" @click="useAll">{{
                  currCoinLangFun("all", "all")
                }}</span>
              </div>
            </span>
          </span>
        </div>
        <div class="flex-box tip-box">
          <span class="fit-tc-tip">{{
            currCoinLangFun("entrust_available", "full")
          }}</span>
          <span class="fit-tc-primary">
            {{
              ifHadFixed
                ? transferNumber(currCoinObjZc.balance || 0)
                : transferNumber(currCoinObj.balance || 0)
            }}
            {{ ifHadFixed ? currCoinObjZc.symbol : currCoinObj.symbol }}
          </span>
        </div>
        <el-button
          type="primary"
          :disabled="!(number > 0)"
          class="confirmBtn"
          :loading="transLoading"
          @click="transFun"
          >{{ currCoinLangFun("confirm", "all") }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDicTableData } from "@/api/system.js";
import { walletTrans, getMyBalance } from "@/api/user.js";
import { toThousands } from "@/util/util";
import { mapGetters } from "vuex";

export default {
  name: "fundtransfer",
  props: {
    transferDialog: Boolean,
    closeDialog: Function,
    targerWalletKey: String,
  },
  watch: {
    coinArrZc: {
      handler() {
        if (this.coinArrZc.length) {
          this.currCoinObjZc = this.coinArrZc[0];
          if (this.currCoinObjZc) {
            this.currCoinZc = this.currCoinObjZc.id;
          }
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      requesting: false, //请求状态
      number: "", //数量
      walletArr: [], //钱包列表
      currCoinObjZc: {}, //逐仓-当前币种data
      currCoinZc: "", //逐仓-当前币种id
      currCoinObj: {
        //当前币种data
        balance: "", //可用余额
      },
      currCoin: "", //当前币种id
      sourceWallet: {}, //源钱包
      targerWallet: {}, //当前目标钱包
      currPair: {}, //当前交易对data
      pairId: "", //当前交易对id
      amountData: [], //钱包资产
      transLoading: false,
      walletData: [], //钱包币种数据
      spotData: [], //币币币种数据
      marginFixedData: [], //逐仓交易对数据
      marginAllData: [], //全仓币种数据
      contractData: [], //合约币种数据
      serviceData: [], //商家币种数据
      wealthData: [], //理财
      marketData: [], //市值
    };
  },
  async created() {
    this.initData();

    getDicTableData("wallet_trans_account").then((res) => {
      this.walletArr = res.data.data.filter((item) => {
        if (this.userInfo.is_merchant != 2 && item.value == "service") {
          return false;
        }
        return true;
      });
      if (this.targerWalletKey) {
        //如果第一个被占用则用第二个
        if (this.targerWalletKey.split(",")[0] == this.walletArr[0].key) {
          this.chooseSource(this.walletArrSource[1]);
        } else {
          this.chooseSource(this.walletArrSource[0]);
        }

        this.walletArr.forEach((item) => {
          if (this.targerWalletKey.split(",")[0] == item.key) {
            this.chooseTarger(item, this.targerWalletKey.split(",")[1]);
          }
        });
      } else {
        this.chooseSource(this.walletArr[0]);
        this.chooseTarger(this.walletArr[1]);
      }
    });
  },
  methods: {
    currCoinLangFun(code, type = "assets") {
      return this.coinLangFun(type, code);
    },
    async initData() {
      //初始化拿所有账户信息
      if (!this.isLogin) {
        return false;
      }
      this.requesting = true;
      //钱包账户
      let coinDataRes = await getMyBalance(1);
      this.walletData = coinDataRes.data.data;

      //币币账户
      let spotDataRes = await getMyBalance(2);
      this.spotData = spotDataRes.data.data;

      //逐仓账户
      let tranDataRes = await getMyBalance(3);
      this.marginFixedData = tranDataRes.data.data;

      //全仓账户
      let marginAllDataRes = await getMyBalance(4);
      this.marginAllData = marginAllDataRes.data.data;

      //合约账户
      let contractDataRes = await getMyBalance(5);
      this.contractData = contractDataRes.data.data;

      //市值账户
      let marketDataRes = await getMyBalance(6);
      this.marketData = marketDataRes.data.data;

      //理财账户
      let wealthDataRes = await getMyBalance(7);
      this.wealthData = wealthDataRes.data.data;

      //商家账户
      if (this.userInfo.is_merchant == 2) {
        let serviceDataRes = await getMyBalance(8);
        this.serviceData = serviceDataRes.data.data;
      }

      this.requesting = false;
    },
    chooseSource(newVal) {
      //源钱包
      this.sourceWallet = newVal;

      //设置交易对
      if (this.sourceWallet.id == "marginFixed") {
        const getCoinTimer = setInterval(() => {
          if (this.transactionPair.length) {
            clearInterval(getCoinTimer);
            this.currPair = this.transactionPair[0];
            this.pairId = this.currPair.id;
          } else {
            this.currPair = {};
            this.pairId = "";
          }
        }, 10);
      } else {
        const getCoinTimer = setInterval(() => {
          // console.log("定时器getCoinTimer");
          if (this.coinArr.length) {
            this.currCoinObj = this.coinArr[0];
            this.currCoin = this.currCoinObj.id;

            clearInterval(getCoinTimer);
          } else {
            this.currCoinObj = {};
            this.currCoin = "";
          }
        }, 10);
      }
    },
    chooseTarger(newVal, id) {
      //目标钱包
      this.targerWallet = newVal;

      //设置交易对
      if (this.targerWallet.id == "marginFixed") {
        const getCoinTimer = setInterval(() => {
          if (this.transactionPair.length) {
            console.log("transactionPair", this.transactionPair, id);

            clearInterval(getCoinTimer);
            if (id) {
              this.transactionPair.forEach((item) => {
                if (item.id == id) {
                  this.currPair = item;
                }
              });
            } else {
              this.currPair = this.transactionPair[0];
            }
            this.pairId = this.currPair.id;
          } else {
            this.currPair = {};
            this.pairId = "";
          }
        }, 10);
      } else {
        const getCoinTimer = setInterval(() => {
          // console.log("定时器getCoinTimer");
          if (this.coinArr.length) {
            clearInterval(getCoinTimer);
            if (id) {
              this.coinArr.forEach((item) => {
                if (item.id == id) {
                  this.currCoinObj = item;
                }
              });
            } else {
              this.currCoinObj = this.coinArr[0];
            }

            this.currCoin = this.currCoinObj.id;
          } else {
            this.currCoinObj = {};
            this.currCoin = "";
          }
        }, 10);
      }
    },
    transferNumber(value) {
      if (value) {
        return `${toThousands(Number(value))}`;
      } else {
        return "0";
      }
    },
    //输入全部数量
    useAll() {
      if (this.ifHadFixed) {
        this.number = Number(this.currCoinObjZc.balance || 0);
      } else {
        this.number = Number(this.currCoinObj.balance || 0);
      }
    },
    //源钱包、目标钱包 互换位置
    exchange() {
      let data = this.deepClone(this.sourceWallet);
      this.sourceWallet = this.deepClone(this.targerWallet);
      this.targerWallet = this.deepClone(data);

      //选择源钱包获取余额
      this.chooseSource(this.sourceWallet);
    },
    //选择当前逐仓交易对
    chooseCurrPair(obj) {
      this.currPair = obj;
      this.number = "";
    },
    //选择当前逐仓币种
    chooseCurrCoinZc(obj) {
      if (this.currCoinObjZc.id != obj.id) {
        this.currCoinObjZc = obj;
        this.number = "";
      }
    },
    //选择当前币种
    chooseCurrCoin(obj) {
      if (this.currCoinObj.id != obj.id) {
        this.currCoinObj = obj;
        this.number = "";
      }
    },
    //划转
    transFun() {
      this.transLoading = true;
      let params = {
        amount: this.number, //数量
        coinSymbol: this.ifHadFixed
          ? this.currCoinObjZc.symbol
          : this.currCoinObj.symbol, //币种名称
        exchangeCoinId: this.ifHadFixed ? this.pairId : "", //交易对ID
        from: this.sourceWallet.value, //源
        to: this.targerWallet.value, //目标
      };

      walletTrans(params)
        .then(() => {
          this.transLoading = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("transfer_succeeded", "popup_tips"),
          }); //划转成功
          this.closeDialog("transferDialog", "refresh");
        })
        .catch(() => {
          this.transLoading = false;
        });
    },
  },
  computed: {
    ...mapGetters(["isLogin", "userInfo"]),
    //过滤源钱包-- 防止目标钱包和源钱包有相同
    walletArrSource: function () {
      return this.walletArr.filter(
        (item) => item.value != this.targerWallet.value
      );
    },
    //过滤目标钱包-- 防止目标钱包和源钱包有相同
    walletArrTarger: function () {
      return this.walletArr.filter(
        (item) => item.value != this.sourceWallet.value
      );
    },
    //交易对 取交易币与币种交集
    transactionPair: function () {
      let arr = [];
      let source = [];
      let targer = [];
      if (
        this.sourceWallet.id &&
        this[`${this.sourceWallet.id}Data`].length &&
        this.targerWallet.id &&
        this[`${this.targerWallet.id}Data`].length
      ) {
        if (this.sourceWallet.id == "marginFixed") {
          source = this[`${this.sourceWallet.id}Data`];
          targer = this[`${this.targerWallet.id}Data`];

          arr = source.filter((item) =>
            targer.some((child) => child.id == item.coin_coin_id)
          );
        } else if (this.targerWallet.id == "marginFixed") {
          source = this[`${this.sourceWallet.id}Data`];
          targer = this[`${this.targerWallet.id}Data`];

          arr = targer.filter((item) =>
            source.some((child) => item.coin_coin_id == child.id)
          );
        }
      }

      return arr;
    },
    //币种取交集
    coinArr: function () {
      let arr = [];
      if (
        this.sourceWallet.id &&
        this[`${this.sourceWallet.id}Data`].length &&
        this.targerWallet.id &&
        this[`${this.targerWallet.id}Data`].length
      ) {
        if (this.sourceWallet.id != "marginFixed") {
          let source = this[`${this.sourceWallet.id}Data`];
          let targer = this[`${this.targerWallet.id}Data`];

          arr = source.filter((item) =>
            targer.some((child) => child.id == item.id)
          );
        } else if (this.sourceWallet.id == "marginFixed") {
          let source = this[`${this.sourceWallet.id}Data`];
          let targer = this[`${this.targerWallet.id}Data`];

          arr = targer.filter((item) =>
            source.some((child) => child.coin_coin_id == item.id)
          );
        } else if (this.targerWallet.id == "marginFixed") {
          let source = this[`${this.sourceWallet.id}Data`];
          let targer = this[`${this.targerWallet.id}Data`];

          arr = source.filter((item) =>
            targer.some((child) => child.coin_coin_id == item.id)
          );
        }
      }
      return arr;
    },
    coinArrZc: function () {
      //源钱包是逐仓就用逐仓的余额,否则用其他钱包的余额
      let arr = [];
      if (
        this.sourceWallet &&
        this.targerWallet &&
        this.ifHadFixed &&
        this.currPair.id
      ) {
        arr[0] = {
          avatar: this.currPair.coinAvatar,
          id: this.currPair.coin_coin_id,
          symbol: this.currPair.coin_symbol,
          balance: this.currPair.coinBalance,
        };
        arr[1] = {
          avatar: this.currPair.baseAvatar,
          id: this.currPair.base_coin_id,
          symbol: this.currPair.base_symbol,
          balance: this.currPair.baseBalance,
        };

        if (
          this.sourceWallet.id != "marginFixed" &&
          this[`${this.sourceWallet.id}Data`].length
        ) {
          let baseData = this[`${this.sourceWallet.id}Data`].filter(
            (item) => item.id == this.currPair.base_coin_id
          );

          let coinData = this[`${this.sourceWallet.id}Data`].filter(
            (item) => item.id == this.currPair.coin_coin_id
          );

          arr[1].balance = baseData.length ? baseData[0].balance || 0 : 0;
          arr[0].balance = coinData.length ? coinData[0].balance || 0 : 0;
        }
      }

      return arr;
    },
    //判断是否含有逐仓钱包显示交易对
    ifHadFixed: function () {
      if (
        this.targerWallet.value == "marginFixed" ||
        this.sourceWallet.value == "marginFixed"
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.space-between {
  justify-content: space-between;
}

.el-dropdown-menu {
  width: 206px;
}

.coin-select {
  .el-select-dropdown__list {
    .el-select-dropdown__item {
      padding: 0 20px;
      font-size: 14px;
      overflow: hidden;
      div {
        display: flex;
        align-items: center;
        line-height: 34px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        img {
          fill: currentColor;
          overflow: hidden;
          width: 20px;
          height: 20px;
          margin-right: 8px !important;
        }
      }
    }
  }
}
.fund-transfer-box {
  .top-box {
    & > div {
      border: 1px solid;
      box-sizing: border-box;
      border-radius: 4px;
      transition: all 0.3s;
      .el-dropdown {
        width: 100%;
        .el-dropdown-link {
          padding: 8px;
          justify-content: space-between !important;
        }
        .el-icon-arrow-down {
          color: #7d92a8;
        }
      }
    }
    .transfer-icon {
      font-size: 20px;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid;
      cursor: pointer;
      color: #0020FD;
      border-color: #0020FD;
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
  }
  .tip-box {
    font-size: 12px !important;
    justify-content: flex-end;
    margin-top: 4px !important;
    span:last-child {
      margin-left: 8px !important;
    }
  }
  .center-box {
    margin-top: 24px !important;
    .el-select {
      width: 100%;
      height: 48px;
    }
  }
  .input-number-box {
    margin-top: 24px !important;
    position: relative;
    .el-input {
      position: relative;
      font-size: 14px;
      display: inline-block;
      width: 100%;
      input {
        padding-right: 83px;
        height: 48px !important;
      }
    }
    & > .el-input__suffix {
      display: flex;
      align-items: center;
      font-size: 12px;
      right: 10px;

      .el-input__suffix-inner {
        .flex-box {
          span:first-child {
            padding-right: 12px !important;
            margin-right: 12px !important;
          }
          span:last-child {
            cursor: pointer;
          }
        }
      }
    }
  }
  .confirmBtn {
    width: 100%;
    margin-top: 40px;
  }
}
</style>

<style lang="scss" scoped>
.theme-night {
  .border-right-line {
    border-right: 1px solid #262d38;
  }
  .dropdown-trigger {
    .content {
      .label {
        color: #f5faff;
      }
    }
  }
}
.theme-daytime {
  .border-right-line {
    border-right: 1px solid #eff0f2;
  }

  .dropdown-trigger {
    .content {
      .label {
        color: #4e6073;
      }
    }
  }
}
</style>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>