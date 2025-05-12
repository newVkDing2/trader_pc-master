<template>
  <div class="assets_main">
    <div class="assets_tabs_box">
      <div class="assets_tabs_inner">
        <el-tabs v-model="tabsValue" @tab-click="tabsClick">
          <el-tab-pane
            :key="item.name"
            :label="$t(item.label)"
            :name="item.name"
            v-for="item in tabsList"
          >
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- {{ tabsValue }}-----tabsValue -->
    <div v-show="tabsValue == 'overview'">
      <div>
        <MyAssetsHead
          :showBtnSet="showBtnSet"
          :overViewTabIndex="overViewTabIndex"
          :title="$t('assets.myAssets')"
          @currentOption="currentOption"
        ></MyAssetsHead>
      </div>
      <div>
        <AssetsOverview
          :myAmount="totolAmount"
          :teamInfo="teamInfo"
          :extensionRule="extensionRule"
          @getRulesList="getRulesList"
          :agentData="agentData"
          @getAgentData="getAgentList"
          :personIncome="personIncome"
          :personalOrderList="personalOrderList"
          :overViewTabIndex="overViewTabIndex"
          :title="$t('assets.assetsOverview')"
        ></AssetsOverview>
      </div>
      <div v-show="overViewTabIndex == 0">
        <AssetsDetail :tableData="overvTableData"></AssetsDetail>
      </div>

      <div v-show="overViewTabIndex == 0">
        <AccountDeposit></AccountDeposit>
      </div>
    </div>
    <div v-show="tabsValue == 'finance'">
      <div>
        <MyAssetsHead
          :showBtnSet="false"
          :title="$t('assets.financeAssets')"
        ></MyAssetsHead>
      </div>
      <div>
        <AssetsOverview
          :myAmount="financeMoney ? financeMoney : '0.00'"
          :title="$t('assets.accountBalance')"
        ></AssetsOverview>
      </div>
      <div>
        <AccountDeposit></AccountDeposit>
      </div>
    </div>
    <div v-show="tabsValue == 'agreement'">
      <div>
        <MyAssetsHead
          :showBtnSet="false"
          :title="$t('assets.agreeAssets')"
        ></MyAssetsHead>
      </div>
      <div>
        <AssetsOverview
          :myAmount="agreeMoney ? agreeMoney : '0.00'"
          :title="$t('assets.accountBalance')"
        ></AssetsOverview>
      </div>
      <div>
        <AccountDeposit></AccountDeposit>
      </div>
    </div>
    <div v-show="tabsValue == 'recharge'">
      <div>
        <RechargeForm
          @getRechargeRecord="initAllRexharData = true"
          :settingConfig="settingConfig"
          :platFormConfig="platFormConfig"
          :coinTypeList="settingConfig.ASSET_COIN"
          :rechargeAddress="rechargeAddress"
          @getRange="getRange"
          :rechargeNumRange="rechargeNumRange"
        ></RechargeForm>
      </div>
      <div>
        <RechargeRecord
          :type="tabsValue"
          :title="$t('assets.rechargeRecord')"
          :label1="$t('assets.rechargeAddress')"
          :label2="$t('assets.rechargeNum')"
          :initAllRexharData="initAllRexharData"
          :tableData="tableData"
          :total="tableDataTotal"
          @getTableData="getTableData"
        ></RechargeRecord>
      </div>
    </div>
    <div v-show="tabsValue == 'withdraw'">
      <div>
        <WithdrawForm
          @getWithdrawRecord="initAllRexharData2 = true"
          @getWithdrawInfo="getWithdrawInfo"
          :withdrawInfo="withdrawInfo"
          :data="withdrawCoinList"
          :withdrawBankList="withdrawBankList"
          :curBank="curBank"
          @getCurBankInfo="getCurBankInfo"
          :userInfo="userInfo"
        ></WithdrawForm>
      </div>
      <div>
        <RechargeRecord
          :type="tabsValue"
          :title="$t('assets.withdrawRecord')"
          :label1="$t('assets.withdrawAddress')"
          :label2="$t('assets.withdraeAmount')"
          :initAllRexharData="initAllRexharData2"
          :tableData="tableData"
          :total="tableDataTotal"
          @getTableData="getTableData"
        ></RechargeRecord>
      </div>
    </div>
    <div v-show="tabsValue == 'swap'">
      <div>
        <ExchangeForm
          :textInfo="textInfo1"
          :optionArr="swapOpArr"
          :canUseAmount="canUseAmount"
          :rate="rate"
          @getRate="getCurrencyRateData"
          @getCanUseAmount="getCanUseAmount"
          @upDateUser="getUserInfo"
        ></ExchangeForm>
      </div>
    </div>
    <div v-show="tabsValue == 'transfer'">
      <div>
        <TransferForm
          :textInfo="textInfo2"
          :optionArr="transOpArr"
          :canUseAmount="canUseAmount"
          @getCanUseAmount="getCanUseAmount"
          @upDateUser="getUserInfo"
        ></TransferForm>
      </div>
    </div>
    <div v-show="tabsValue == 'tradeOrder'">
      <div>
        <MyOrder
          :secCurOrderList="secCurOrderList"
          :secHisOrderList="secHisOrderList"
          :curSpotList="curSpotList"
          :curSpotLen="curSpotLen"
          :hisSpotList="hisSpotList"
          :hisSpotLen="hisSpotLen"
          :ustaCurOrderList="ustaCurOrderList"
          :ustaOrderLen1="ustaOrderLen1"
          :ustaHisOrderList="ustaHisOrderList"
          :ustaOrderLen2="ustaOrderLen2"
          :positionList="positionList"
          :ustaOrderLen3="ustaOrderLen3"
          :ustaLossList="ustaLossList"
          :ustaOrderLen4="ustaOrderLen4"
          @getSecondContractOrder="getSecondContractOrder"
          @filterSecData="filterSecData"
          @getSpotContractOrder="getSpotContractOrder"
          @filterSpotData="filterSpotData"
          @contractHistoryList="contractHistoryList"
          @getUstaContractOrder="getUstaContractOrder"
          @contractLossList="contractLossList"
          @filterUstaData="filterUstaData"
          :secCoinOption="secCoinOption"
          :spotCoinOption="spotCoinOption"
          :ustaCoinOption="ustaCoinOption"
          @searchData="searchData"
          :allCoinPriceInfo="allCoinPriceInfo"
          :coinPriceInfo="coinPriceInfo"
          @cancelSpotOrder="cancelSpotOrder"
          :contractCoinList="contractCoinList"
          :availableBalance="availableBalance"
          @cancelUstaOrder="cancelUstaOrder"
          @stoplossBullshit="stoplossBullshit"
          @stopOrder="stopOrder"
          @upDateUser="getUserInfo"
        ></MyOrder>
      </div>
    </div>
    <div v-show="tabsValue == 'records'">
      <div>
        <AssetsRecord
          :assetsTabsList="assetsTabsList"
          :rechargeTable="rechargeTable"
          :withdrawTable="withdrawTable"
          :mingOrderTable="mingOrderTable"
          @getTableData="getTableData"
          @redeem="handleRedeem"
          :total="tableDataTotal"
          :mineOrderTotal="mineOrderTotal"
        ></AssetsRecord>
      </div>
    </div>
  </div>
</template>

<script>
import MyAssetsHead from "@/components/assets/myAssets-head.vue";
import AssetsOverview from "@/components/assets/assets-overview.vue";
import AssetsDetail from "@/components/assets/assets-detail.vue";
import AccountDeposit from "@/components/assets/account-deposit.vue";
import RechargeForm from "@/components/assets/recharge-form.vue";
import RechargeRecord from "@/components/assets/recharge-record.vue";
import WithdrawForm from "@/components/assets/withdraw-form.vue";
import ExchangeForm from "@/components/assets/exchange-form.vue";
import TransferForm from "@/components/assets/transfer-form.vue";

import MyOrder from "@/components/assets/my-order.vue";
import AssetsRecord from "@/components/assets/assets-record.vue";
import NProgress, { status } from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  getCurrencyRate,
  getRecordList,
  getPersonalIncome,
  getPersonalOrderList,
} from "@/api/assets";
import { redemption } from "@/api/pledge";
import {
  getSecondContractOrder,
  getSpotContractOrder,
  getUstaContractOrder,
  contractHistoryList,
  contractLossList,
  getCoinListApi,
  cancelOrderCurrencyApi,
  canCelOrder,
  cancelLoss,
  stopOrder,
} from "@/api/trade";
import {
  getTeamInfo,
  getAgentList,
  getUserCoinApi,
  getBankInfo,
} from "@/api/user";
import { getRulesList } from "@/api/rule";
import { priceFormat } from "@/util/decimal.js";
import { filterCoin2 } from "@/util/public";
export default {
  components: {
    MyAssetsHead,
    AssetsOverview,
    AssetsDetail,
    AccountDeposit,
    RechargeForm,
    RechargeRecord,
    WithdrawForm,
    ExchangeForm,
    TransferForm,
    MyOrder,
    AssetsRecord,
  },
  data() {
    return {
      teamInfo: {},
      personIncome: {},
      personalOrderList: [],
      extensionRule: "",
      agentData: [],
      overViewTabIndex: 0,
      overvTableData: [],
      initAllRexharData: false,
      initAllRexharData2: false,
      textInfo1: {
        title: "assets.swap",
        label: "assets.exchangeNum",
        butText: "assets.exchangeAll",
      },
      textInfo2: {
        title: "assets.amountTransfer",
        label: "assets.transferAmount",
        butText: "assets.transferAll",
      },
      swapOpArr: [
        { label: "USDT", value: "USDT" },
        { label: "MATIC", value: "MATIC" },
        { label: "BNB", value: "BNB" },
        { label: "LTC", value: "LTC" },
        { label: "XRP", value: "XRP" },
        { label: "ETH", value: "ETH" },
        { label: "BTC", value: "BTC" },
        { label: "DOGE", value: "DOGE" },
        { label: "TRX", value: "TRX" },
      ],
      transOpArr: [
        { label: "assets.platformAssets", value: 1 },
        { label: "assets.financeAssets", value: 2 },
        { label: "assets.contractAssets", value: 3 },
      ],
      tabsList: [
        {
          label: "assets.myAssets",
          name: "overview",
        },
        {
          label: "assets.financeAssets",
          name: "finance",
        },
        {
          label: "assets.agreeAssets",
          name: "agreement",
        },
        {
          label: "assets.recharge",
          name: "recharge",
        },
        {
          label: "assets.withdraw",
          name: "withdraw",
        },
        {
          label: "assets.swap",
          name: "swap",
        },
        {
          label: "assets.amountTransfer",
          name: "transfer",
        },
        {
          label: "assets.orderCenter",
          name: "tradeOrder",
        },
        {
          label: "assets.assetsDetail",
          name: "records",
        },
      ],
      tabsValue: "recharge",
      showBtnSet: true,
      input: "",
      rate: "", //swap
      canUseAmount: "", //common
      tableData: [], //common
      assetsTabsList: [
        //资产明细
        {
          label: "assets.assetsDetail",
          name: "mingOrder",
        },
        {
          label: "assets.storeDetail",
          name: "recharge",
        },
        {
          label: "assets.withdrawDetails",
          name: "withdraw",
        },
      ],
      rechargeTable: [],
      withdrawTable: [],
      tableDataTotal: 0,
      mineOrderTotal: 0,
      withdrawInfo: {},
      withdrawBankList: [], //提现银行列表
      curBank: {}, //提现银行列表第一个信息
      mingOrderTable: [],
      //secOrderAllObj: {}, //秒合约总的订单对象（两种状态）
      secCurOrderList: [], //秒合约当前订单列表
      secHisOrderList: [], //秒合约历史订单列表
      curSpotList: [], //币币交易当前订单列表
      curSpotLen: "", //币币交易当前订单列表长度
      hisSpotList: [], //币币交易历史订单列表
      hisSpotLen: "", //币币交易历史订单列表长度
      ustaCurOrderList: [], //usta的当前委托订单详情列表
      ustaOrderLen1: "", //usta的当前委托订单详情列表长度
      ustaHisOrderList: [], //usta的历史委托订单详情列表
      ustaOrderLen2: "", //usta的历史委托订单详情列表长度
      positionList: [], //usta的持仓列表
      ustaOrderLen3: "", //usta的持仓列表长度
      ustaLossList: [], //usta的亏损列表
      ustaOrderLen4: "", //usta的亏损列表长度
      userCoinList: ["btc"], //自选币种信息
      secCoinOption: [],
      spotCoinOption: [],
      ustaCoinOption: [],
      //原始数据
      secCurOrderList2: [],
      secHisOrderList2: [],
      curSpotList2: [],
      hisSpotList2: [],
      ustaCurOrderList2: [],
      ustaHisOrderList2: [],
      positionList2: [],
      ustaLossList2: [],
      rechargeNumRange: "",
      rechargeAddress: "",
      financeMoney: "", //理财资产
      agreeMoney: "", //合约资产
      coinSymbolInfo: {},
    };
  },
  created() {},
  computed: {
    ...mapGetters([
      "userInfo",
      "isLogin",
      "settingConfig",
      "platFormConfig",
      "allCoinPriceInfo",
      "secondContractCoinList",
      "spotCoinList",
      "contractCoinList",
    ]),
    coinPriceInfo() {
      const tradeInfo = JSON.parse(localStorage.getItem("tradeInfo"));

      // 默认 typeCoinList 为 "secondContractCoinList"，以防止 tradeInfo 为空时报错
      let typeCoinList = "secondContractCoinList";

      if (tradeInfo && tradeInfo.typeCoinList) {
        typeCoinList = tradeInfo.typeCoinList;
      }

      console.log("typeCoinList===>", typeCoinList);

      // 使用安全导航运算符 ?. 避免在 tradeInfo 为空时访问 symbol 属性报错
      const symbol = tradeInfo?.symbol;

      // 使用 find 方法来查找匹配的项，确保匹配项存在
      let matchedItem = this[typeCoinList]?.find(
        (item) => item.coin === symbol
      );

      // 如果找不到匹配的项，则使用默认值 "btc"
      this.coinSymbolInfo = matchedItem
        ? matchedItem
        : this[typeCoinList].find((item) => item.coin === "btc");

      console.log("coinSymbolInfo====>", this.coinSymbolInfo);

      // 添加安全检查，确保 this.allCoinPriceInfo[this.coinSymbolInfo.coin] 不会报错
      return this.allCoinPriceInfo[this.coinSymbolInfo?.coin] || {};
    },
    totolAmount() {
      // 使用 reduce 方法对数组元素进行累加
      let sum = this.overvTableData.reduce(
        (pre, cur) => pre + cur.exchageAmount,
        0
      );
      return sum.toFixed(2);
    },
    withdrawCoinList() {
      let list = [];
      this.settingConfig.WITHDRAWAL_CHANNEL_SETTING.forEach((item, index) => {
        // status:0关闭，1开启
        if (item.status == "1") {
          let obj = {};
          obj["type"] = 1; //提现
          obj["ratio"] = item.ratio || ""; //手续费
          obj["fee"] = item.fee; //固定手续费
          // type:0数据货币，1银行卡
          if (item.type == 0) {
            obj["icon"] = item.rechargeType;
            obj["title"] = item.rechargeName;
          } else {
            obj["icon"] = "card";
            // 银行卡提现
            (obj["title"] = this.$t("assets.bankCardWithdraw")),
              (obj["card"] = filterCoin2(
                item.rechargeType
              ).toLocaleUpperCase());
          }

          list.push(obj);
        }
      });
      return list;
    },
    //获取当前可用usdt货币数量
    availableBalance() {
      // console.log("this.userInfo",this.userInfo);
      if (this.userInfo && this.userInfo.asset?.length > 0) {
        return (
          this.userInfo.asset.filter(
            (item) => item.symbol == "usdt" && item.type == 1
          )[0]?.availableAmount || 0
        );
      }
    },
  },
  watch: {
    // 监视路由中的 `key` 参数变化以更新URL
    "$route.query.key"(newKey) {
      console.log("newKey====>", newKey);
    },
  },
  async mounted() {
    // 在目标页面中访问传递过来的参数对象
    // this.tabsValue = this.$route.query.key;
    this.tabsValue = this.$route.query.key;

    //审核状态  this.userInfo.is_merchant  默认0 审核1 通过2
    if (this.isLogin) {
      this.getUserInfo();
    }
    // console.log("userInfo===>", this.userInfo);
  },
  methods: {
    ...mapActions(["getUserInfoData", "getCoinList", "getAllSystemConfig"]),
    ...mapMutations(["SET_USER_INFO"]),
    //获取用户信息
    async getUserInfo() {
      if (this.isLogin) {
        this.getAllSystemConfig();
        let userInfo = await this.getUserInfoData();
        this.SET_USER_INFO({
          ...this.userInfo,
          ...userInfo,
        });
        this.overvTableData = this.userInfo.asset.filter((item) => {
          return item.type == 1;
        });

        this.financeMoney = this.userInfo.asset.filter((item) => {
          return item.type == 2 && item.symbol == "usdt";
        })[0].availableAmount;

        this.agreeMoney = this.userInfo.asset.filter((item) => {
          return item.type == 3 && item.symbol == "usdt";
        })[0].availableAmount;

        // console.log("agreeMoney===>", this.agreeMoney);

        if (this.tabsValue == "overview") {
          this.getTeamInfo();
          this.getAgentList(0);
          this.getPersonalIncome();
          this.getRulesList("PROMOTION_CENTER_EXPLAIN");
        }

        if (this.tabsValue == "recharge" || this.tabsValue == "withdraw") {
          // this.getRange("USDT-TRC");
          this.getRange(this.settingConfig.ASSET_COIN[0].coinName);
          this.getTableData({
            param1: "",
            pageNum: 1,
          });

          this.getWithdrawInfo({
            param1:
              this.settingConfig.WITHDRAWAL_CHANNEL_SETTING[0].rechargeType,
            param2: 1,
          });
        }

        if (this.tabsValue == "swap") {
          this.getCurrencyRateData({
            param1: "usdt",
            param2: "eth",
          });
        }

        if (this.tabsValue == "tradeOrder") {
          this.getCoinList();
          this.getUserCoinApi();
          this.getCoinListApi();
          this.getSecondContractOrder(0);
          this.getSecondContractOrder(1);
          this.getSpotContractOrder(0);
          this.getSpotContractOrder(1);
          this.getUstaContractOrder(0);
          this.contractHistoryList(0);
          this.contractHistoryList(1);
          this.contractLossList();
        }

        if (this.tabsValue == "records") {
          this.getTableData(
            {
              param1: "",
              pageNum: 1,
            },
            true
          );
        }
        this.getCanUseAmount({
          param1: "USDT",
          param2: 1,
        });

        // this.amoutInfo = this.overvTableData.filter((item) => {
        //   return item.symbol.toUpperCase() == "USDT";
        // });

        //this.input = this.amoutInfo[0].amout;
        //console.log("overvTableData===>",this.overvTableData);
      }
    },
    getUserCoinApi() {
      getUserCoinApi().then((res) => {
        console.log("自选币种信息===>", res.data);
        if (res.data.code == 200) {
          res.data.data.forEach((item) => {
            this.userCoinList.push(item.coin);
          });
        }
      });
    },
    //获取规则相关文章
    getRulesList(key) {
      getRulesList({
        key,
      }).then((res) => {
        if (res.data.code == 200) {
          this.extensionRule = res.data.data[0].content;
        }
      });
    },
    handleRedeem(id) {
      redemption({
        id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.getTableData({
            param1: "",
            pageNum: 1,
            sendTabValue: "mingOrder",
          });
        }
      });
    },
    //极速平仓--usta
    stopOrder(id) {
      stopOrder({
        id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.contractHistoryList(0);
        }
      });
    },
    //U本位订单--取消
    cancelUstaOrder(id) {
      canCelOrder(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.getUstaContractOrder(0);
        }
      });
    },
    //止盈止损撤单
    stoplossBullshit(id) {
      cancelLoss(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.contractLossList();
        }
      });
    },
    // 撤单--spot
    cancelSpotOrder(id) {
      cancelOrderCurrencyApi(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.getSpotContractOrder(0);
        }
      });
    },
    //我的投资订单列表
    getPersonalOrderList() {
      getPersonalOrderList({
        pageNum: 1,
        pageSize: 20,
      }).then((res) => {
        if (res.data.code == 200) {
          this.personalOrderList = res.data.rows;
        }
      });
    },
    //我的投资数据
    getPersonalIncome() {
      getPersonalIncome().then((res) => {
        if (res.data.code == 200) {
          this.personIncome = res.data.data;
        }
      });
    },
    //overview button tabs切换
    currentOption(index) {
      this.overViewTabIndex = index;
    },
    //推广中心统计数据
    getTeamInfo() {
      getTeamInfo().then((res) => {
        if (res.data.code == 200) {
          this.teamInfo = res.data.data;
        }
      });
    },
    //获取代理数据列表
    getAgentList(leve) {
      getAgentList({
        params: {
          leve,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.agentData = res.data.data;
        }
      });
    },
    getRange(val) {
      if (Object.keys(this.platFormConfig).length > 0) {
        // console.log("val====>", val);
        // console.log("this.platFormConfig====>", this.platFormConfig);
        // this.rechargeAddress = this.platFormConfig.RECHARGE_ADDRESS[val];
        let itemObj = this.settingConfig.ASSET_COIN.filter((item) => {
          return item.coinName == val;
        })[0];
        this.rechargeAddress = itemObj.coinAddress;
        const minRechargeNum = itemObj.rechargeMin;
        const maxRechargeNum = itemObj.rechargeMax;
        this.rechargeNumRange = minRechargeNum + "-" + maxRechargeNum;
      }
    },
    searchData(param) {
      const filterBySearchCoin = (list, searchCoin) => {
        // console.log("list===>", list);
        return list.filter((item) => {
          // Ensure item.baseSymbol exists before accessing it
          const baseSymbol = item.baseSymbol
            ? item.baseSymbol.toUpperCase()
            : "USDT";
          return item.symbol.toUpperCase() + "/" + baseSymbol == searchCoin;
        });
      };
      const filterBySearchCoin2 = (list, searchCoin) => {
        return list.filter(
          (item) =>
            item.symbol.toUpperCase() + "/" + item.coin.toUpperCase() ==
            searchCoin
        );
      };

      if (param.type == 0) {
        if (param.tab === "cuwei") {
          this.secCurOrderList = filterBySearchCoin(
            this.secCurOrderList2,
            param.searchCoin
          );
        } else {
          this.secHisOrderList = filterBySearchCoin(
            this.secHisOrderList2,
            param.searchCoin
          );
        }
      } else if (param.type == 1) {
        if (param.tab === "cuwei") {
          this.curSpotList = filterBySearchCoin2(
            this.curSpotList2,
            param.searchCoin
          );
        } else {
          this.hisSpotList = filterBySearchCoin2(
            this.hisSpotList2,
            param.searchCoin
          );
        }
      } else {
        if (param.tab == "curPosition") {
          this.positionList = filterBySearchCoin(
            this.positionList2,
            param.searchCoin
          );
        } else if (param.tab == "cuwei") {
          this.ustaCurOrderList = filterBySearchCoin(
            this.ustaCurOrderList2,
            param.searchCoin
          );
        } else if (param.tab == "loss") {
          this.ustaLossList = filterBySearchCoin(
            this.ustaLossList2,
            param.searchCoin
          );
        } else {
          this.ustaHisOrderList = filterBySearchCoin(
            this.ustaHisOrderList2,
            param.searchCoin
          );
        }
      }
    },
    filterSecData(value) {
      let arr = [];
      const filterByCoinSymbol = (list) => {
        list.forEach((item) => {
          this.userCoinList.forEach((ele) => {
            if (item.coinSymbol == ele) {
              arr.push(item);
            }
          });
        });
        return arr;
      };

      if (value == "cuwei") {
        this.secCurOrderList = filterByCoinSymbol(this.secCurOrderList);
      } else {
        this.secHisOrderList = filterByCoinSymbol(this.secHisOrderList);
      }
    },
    filterSpotData(value) {
      let arr = [];
      const filterByCoinSymbol = (list) => {
        list.forEach((item) => {
          this.userCoinList.forEach((ele) => {
            // console.log("item.coinSymbol==>", item);
            // console.log("el5555==>", ele);
            if (item.symbol == ele) {
              arr.push(item);
            }
          });
        });
        return arr;
      };

      if (value == "cuwei") {
        this.curSpotList = filterByCoinSymbol(this.curSpotList);
      } else {
        this.hisSpotList = filterByCoinSymbol(this.hisSpotList);
      }
    },
    filterUstaData(value) {
      // console.log("value===>", value);
      let arr = [];
      const filterByCoinSymbol = (list) => {
        list.forEach((item) => {
          this.userCoinList.forEach((ele) => {
            if (item.coinSymbol == ele) {
              arr.push(item);
            }
          });
        });
        return arr;
      };

      if (value == "curPosition") {
        this.positionList = filterByCoinSymbol(this.positionList);
      } else if (value == "cuwei") {
        this.ustaCurOrderList = filterByCoinSymbol(this.ustaCurOrderList);
      } else if (value == "loss") {
        this.ustaLossList = filterByCoinSymbol(this.ustaLossList);
      } else {
        this.ustaHisOrderList = filterByCoinSymbol(this.ustaHisOrderList);
      }
    },
    //获取秒合约订单列表
    getSecondContractOrder(status) {
      getSecondContractOrder({
        status,
      }).then((res) => {
        console.log("getSecondContractOrder===>", res);
        if (res.data.code == 200) {
          if (status == 0) {
            this.secCurOrderList = res.data.data || [];
            this.secCurOrderList2 = res.data.data || [];
          } else {
            this.secHisOrderList = res.data.data || [];
            this.secHisOrderList2 = res.data.data || [];
          }
          /// console.log("秒合约总的列表===>",this.secOrderAllObj);
        }
      });
    },
    //币币交易订单列表   status: 0 当前委托 1 历史委托
    getSpotContractOrder(status) {
      getSpotContractOrder({
        isAsc: "desc",
        orderByColumn: "updateTime",
        status,
        pageSize: 10,
        pageNum: 1,
      }).then((res) => {
        if (res.data.code == 200) {
          // this.spotOrderList=res.data.rows;
          if (status == 0) {
            this.curSpotLen = res.data.total;
            this.curSpotList = res.data.rows;
            this.curSpotList2 = res.data.rows;
          } else {
            this.hisSpotLen = res.data.total;
            this.hisSpotList = res.data.rows;
            this.hisSpotList2 = res.data.rows;
          }

          //console.log("curSpotList===>",this.curSpotList);
        }
      });
    },
    //委托订单列表
    getUstaContractOrder(status) {
      getUstaContractOrder({
        status,
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          this.ustaCurOrderList = res.data.rows;
          this.ustaCurOrderList2 = res.data.rows;
          this.ustaOrderLen1 = res.data.total;
          // if (status == 0) {

          //   this.ustaCurOrderList = res.data.rows;
          //   this.ustaCurOrderList2 = res.data.rows;
          //   this.ustaOrderLen1 = res.data.total;
          // } else {
          //   this.ustaHisOrderList = res.data.rows;
          //   this.ustaHisOrderList2 = res.data.rows;
          //   this.ustaOrderLen2 = res.data.total;
          // }
        }
      });
    },
    //持仓列表
    contractHistoryList(status) {
      contractHistoryList({
        status,
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          // this.positionList = res.data.rows;
          // this.positionList2 = res.data.rows;
          // this.ustaOrderLen3 = res.data.total;
          if (status == 0) {
            this.positionList = res.data.rows;
            this.positionList2 = res.data.rows;
            this.ustaOrderLen3 = res.data.total;
          } else {
            this.ustaHisOrderList = res.data.rows;
            this.ustaHisOrderList2 = res.data.rows;
            this.ustaOrderLen2 = res.data.total;
          }
        }
      });
    },
    //止盈止损列表
    contractLossList() {
      contractLossList({
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          this.ustaLossList = res.data.rows;
          this.ustaLossList2 = res.data.rows;
          this.ustaOrderLen4 = res.data.total;
        }
      });
    },

    //获取所有币种列表
    getCoinListApi() {
      getCoinListApi().then((res) => {
        if (res.data.code == 200) {
          console.log("所有币种列表===>", res.data.data);
          this.secCoinOption = res.data.data.coinList;
          this.spotCoinOption = res.data.data.currencyList;
          this.ustaCoinOption = res.data.data.contractList;
        }
      });
    },
    //获取表格数据(common)
    getTableData(param, isTotolData = false) {
      if (!isTotolData) {
        getRecordList(
          // {
          //   pageNum: 1,
          //   pageSize: 20,
          //   status: param.param1,
          // },
          {
            pageNum: param.pageNum,
            pageSize: 10,
            status: param.param1,
          },
          param.sendTabValue ? param.sendTabValue : this.tabsValue
        ).then((res) => {
          if (param.sendTabValue) {
            if (param.sendTabValue == "recharge") {
              this.rechargeTable = res.data.rows;
              this.tableDataTotal = res.data.total;
            } else if (param.sendTabValue == "withdraw") {
              this.withdrawTable = res.data.rows;
              this.tableDataTotal = res.data.total;
            } else {
              this.mingOrderTable = res.data.rows;
              this.tableDataTotal = res.data.total;
            }
          } else {
            this.tableData = res.data.rows;
            this.tableDataTotal = res.data.total;
          }
        });
      } else {
        // let dataArray = [];

        for (let i = 0; i < this.assetsTabsList.length; i++) {
          getRecordList(
            {
              pageNum: param.pageNum,
              pageSize: 10,
              status: param.param1,
            },
            this.assetsTabsList[i].name
          ).then((res) => {
            if (this.assetsTabsList[i].name === "recharge") {
              this.rechargeTable = res.data.rows;
              this.tableDataTotal = res.data.total;
            } else if (this.assetsTabsList[i].name === "withdraw") {
              this.withdrawTable = res.data.rows;
              this.tableDataTotal = res.data.total;
            } else {
              this.mingOrderTable = res.data.rows;
              this.mineOrderTotal = res.data.total;
            }
          });
          // this.tableData = dataArray;
        }

        // 在所有异步请求完成后，将dataArray赋给this.tableData
        // Promise.all(promises).then(() => {
        //   this.tableData = dataArray;
        // });
      }
    },
    // 获取当前两个货币之间汇率(swap)
    getCurrencyRateData(param) {
      getCurrencyRate({
        currency: param.param1 + "," + param.param2,
      })
        .then((res) => {
          console.log("汇率换算结果====>", res.data);
          let rateFrom = res.data.data[param.param1];
          let rateTo = res.data.data[param.param2];
          if (rateFrom == null) {
            rateFrom = 1;
          }
          if (rateTo == null) {
            rateTo = 1;
          }
          this.rate = priceFormat(rateFrom / rateTo, 8);
        })
        .catch((error) => {
          console.error("获取汇率失败！", error);
        });
    },
    //获取提现银行列表
    getwithdrawBankInfo() {
      getBankInfo().then((res) => {
        if (res.data.code == 200) {
          if (res.data.data.length > 0) {
            this.withdrawBankList = res.data.data;
            this.curBank = this.withdrawBankList[0];
          }
        }
      });
    },
    //获取当前选中的提现银行卡信息
    getCurBankInfo(param) {
      this.curBank = this.withdrawBankList.find(
        (item) => item.id == param.param1
      );
    },
    //获取当前选中提现信息
    getWithdrawInfo(param) {
      let canUseAmount;
      let obj;
      let icon;
      obj = this.withdrawCoinList.find(
        (withItem) => withItem.icon == param.param1
      );
      // console.log("param.param1===>", param.param1);
      // console.log("obj===>", obj);
      const overvTableData = this.userInfo.asset.filter((item) => {
        return item.type == param.param2;
      });
      if (obj.icon == "card") {
        icon = "usdt";
      } else {
        icon = obj.icon;
      }
      const filteredData = overvTableData.filter((dataItem) => {
        return icon == dataItem.symbol;
      });
      // console.log("filteredData==22222==>", filteredData);
      if (filteredData.length > 0 && filteredData[0].hasOwnProperty("amout")) {
        canUseAmount = filteredData[0].amout;
      } else {
        // 处理无法找到匹配项或匹配项缺少属性的情况
        canUseAmount = 0; // 或者设定其他默认值
      }
      obj["canUseAmount"] = canUseAmount;
      // console.log("obj==22222==>", obj);
      this.withdrawInfo = obj;
    },
    //获取当前可用货币余额（common）
    getCanUseAmount(param) {
      // console.log("asset====>", this.userInfo.asset);
      // console.log("param.param2====>", param.param2);
      if (!param.param2) {
        param["param2"] = 1;
      }
      const overvTableData = this.userInfo.asset.filter((item) => {
        return item.type == param.param2;
      });
      const filteredData = overvTableData.filter((dataItem) => {
        return param.param1.includes(dataItem.symbol.toUpperCase());
      });
      console.log("filteredData====>", filteredData);
      if (filteredData.length > 0 && filteredData[0].hasOwnProperty("amout")) {
        this.canUseAmount = filteredData[0].amout;
      } else {
        // 处理无法找到匹配项或匹配项缺少属性的情况
        this.canUseAmount = 0; // 或者设定其他默认值
      }
      //console.log("this.canUseAmount", this.canUseAmount);
      // console.log("this.canUseAmount==tyep", typeof this.canUseAmount);
    },
    //tab切换 替换key值
    tabsClick(tab) {
      console.log("e===》", tab.name);
      this.tabsValue = tab.name;
      localStorage.setItem("assetsKey", tab.name);
      // if (this.isLogin) {
      //   this.getUserInfo();
      // }

      // 使用 History API 进行 URL 更改
      if (this.$route.query.key !== tab.name) {
        if (this.tabsValue == "swap") {
          console.log("tabsValue===》", this.tabsValue);
          //this.isGetRate = true;
          // this.getCurrencyRateData({
          //   param1: "usdt",
          //   param2: "eth",
          // });

          // this.getCanUseAmount({
          //   param1: "USDT",
          // });
        }

        this.$router.push({
          path: "/assets/index",
          query: { key: tab.name },
        });

        // 如果新旧 key 值不同，模拟开始路由跳转
        // NProgress.start();
        // console.log("history===》", history);

        // if (history.pushState) {
        //   // 获取base URL（不包括`#`及之后的部分），构建新的 URL 哈希及查询参数
        //   const baseUrl = window.location.href.split("#")[0];
        //   const newUrlHash = `#/assets/index?key=${tab.name}`;
        //   //console.log("baseUrl===》", baseUrl);
        //   //console.log("newUrlHash===》", newUrlHash);
        //   //console.log("allHash===》", baseUrl + newUrlHash);
        //   // 使用 History API 更新页面 URL
        //   window.history.replaceState(null, "", baseUrl + newUrlHash);
        // }
        // // 模拟路由跳转结束
        // this.$nextTick(() => {
        //   NProgress.done();
        // });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.assets_main {
  width: 100%;

  .assets_tabs_box {
    width: 100%;

    background: #f1f1f1;
    .assets_tabs_inner {
      width: 1200px;
      margin: auto;
      ::v-deep.el-tabs {
        .el-tabs__nav-wrap::after {
          height: 0;
        }
        .el-tabs__item {
          height: 55px;
          line-height: 55px;
        }
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__active-bar {
          height: 3px;
        }
      }
    }
  }
}
</style>
