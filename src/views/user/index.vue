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
    <div v-show="tabsValue == 'all'">
      <div>
        <CommonHeader :userInfo="userInfo"> </CommonHeader>
      </div>
      <div>
        <AccountDeposit
        :createTime="noticeCreateTime"
        :noticeContent="noticeContent"></AccountDeposit>
      </div>
      <div>
        <Quotes @getTableData="getUserCoinApi" :tableList="tableList"></Quotes>
      </div>
    </div>
    <div v-show="tabsValue == 'primary'">
      <div>
        <PrimaryCert
          :userInfo="userInfo"
          @getNewUserInfo="getUserInfo"
        ></PrimaryCert>
      </div>
    </div>
    <div v-show="tabsValue == 'advanced'">
      <div>
        <RelnameCert
          :userInfo="userInfo"
          @getNewUserInfo="getUserInfo"
        ></RelnameCert>
      </div>
    </div>
    <div v-show="tabsValue == 'bank'">
      <div>
        <BindBank :isBindBank="isBindBank" :userInfo="userInfo"></BindBank>
      </div>
      <!-- <div></div> -->
    </div>
    <div v-show="tabsValue == 'tardPwd'">
      <div>
        <SetPsw :userInfo="userInfo" @getNewUserInfo="getUserInfo"></SetPsw>
      </div>
    </div>
    <div v-show="tabsValue == 'loginPwd'">
      <div>
        <SetloginPsw
          :userInfo="userInfo"
          @getNewUserInfo="getUserInfo"
        ></SetloginPsw>
      </div>
    </div>
    <div v-show="tabsValue == 'certified'">
      <div>
        <EmailCer></EmailCer>
      </div>
    </div>
    <div v-show="tabsValue == 'termsService'">
      <div>
        <TermsRule :articleInfo="articleInfo"></TermsRule>
      </div>
    </div>
    <div v-show="tabsValue == 'helper'">
      <div>
        <HelpCenter
          :contentInfo="contentInfo"
          @getContentInfo="getHelpCenterInfo"
        ></HelpCenter>
      </div>
    </div>
  </div>
</template>

<script>
import MyAssetsHead from "@/components/assets/myAssets-head.vue";
import AssetsOverview from "@/components/assets/assets-overview.vue";
import AssetsDetail from "@/components/assets/assets-detail.vue";

import CommonHeader from "@/components/user/common-header.vue";
import AccountDeposit from "@/components/user/account-deposit.vue";
import Quotes from "@/components/common/quotes.vue";

import PrimaryCert from "@/components/user/primary-cert.vue";
import RelnameCert from "@/components/user/relname-cer.vue";

import BindBank from "@/components/user/bind-bank.vue";

import SetPsw from "@/components/user/set-psw.vue";
import SetloginPsw from "@/components/user/setlogin-psw.vue";
import EmailCer from "@/components/user/email-cer.vue";
import TermsRule from "@/components/user/terms-rule.vue";
import HelpCenter from "@/components/user/help-center.vue";

import RechargeForm from "@/components/assets/recharge-form.vue";
import RechargeRecord from "@/components/assets/recharge-record.vue";
import WithdrawForm from "@/components/assets/withdraw-form.vue";
import ExchangeForm from "@/components/assets/exchange-form.vue";
import MyOrder from "@/components/assets/my-order.vue";
import AssetsRecord from "@/components/assets/assets-record.vue";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getNoticeList, getHelpCenterInfo } from "@/api/common";
import { getUserCoinApi, getBankInfo } from "@/api/user";
import { getRulesList } from "@/api/rule.js";
export default {
  components: {
    MyAssetsHead,
    AssetsOverview,
    AssetsDetail,
    CommonHeader,
    AccountDeposit,
    Quotes,
    PrimaryCert,
    RelnameCert,
    BindBank,
    SetPsw,
    SetloginPsw,
    EmailCer,
    TermsRule,
    HelpCenter,
    RechargeForm,
    RechargeRecord,
    WithdrawForm,
    ExchangeForm,
    MyOrder,
    AssetsRecord,
  },
  data() {
    return {
      noticeCreateTime:"",
      noticeContent:"",
      overvTableData: [],
      initAllRexharData: false,
      initAllRexharData2: false,
      // textInfo1: {
      //   title: "user.swap",
      //   label: "user.exchangeNum",
      //   butText: "user.exchangeAll",
      // },
      // textInfo2: {
      //   title: "user.amountTransfer",
      //   label: "user.transferAmount",
      //   butText: "user.transferAll",
      // },
      swapOpArr: [
        { label: "USDT", value: "1" },
        { label: "MATIC", value: "2" },
        { label: "BNB", value: "3" },
        { label: "LTC", value: "4" },
        { label: "XRP", value: "5" },
        { label: "ETH", value: "6" },
        { label: "BTC", value: "7" },
        { label: "DOGE", value: "8" },
        { label: "TRX", value: "9" },
      ],
      // transOpArr: [
      //   { label: "平台资产", value: "1" },
      //   { label: "理财资产", value: "2" },
      //   { label: "合约资产", value: "3" },
      // ],
      tabsList: [
        {
          label: "user.all",
          name: "all",
        },
        {
          label: "user.primary",
          name: "primary",
        },
        {
          label: "user.advanced",
          name: "advanced",
        },
        {
          label: "user.bank",
          name: "bank",
        },
        {
          label: "user.tardPwd",
          name: "tardPwd",
        },
        {
          label: "user.loginPwd",
          name: "loginPwd",
        },
        {
          label: "user.certified",
          name: "certified",
        },
        {
          label: "user.termsService",
          name: "termsService",
        },
        {
          label: "user.helper",
          name: "helper",
        },
      ],
      tabsValue: "",
      showBtnSet: true,
      noticeList: [], //公告列表
      tableList: [], //总览 行情表格
      articleInfo: {}, //服务条款
      contentInfo: {}, //帮助中心
      isBindBank: false, //是否绑定银行卡
    };
  },
  created() {
    // 初始载入页面时计算URL
    // this.updateURL(this.$route.query.key);
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "isLogin",
      "language",
      "allCoinPriceInfo",
      "secondContractCoinList",
    ]),
    totolAmount() {
      // 使用 reduce 方法对数组元素进行累加
      let sum = this.overvTableData.reduce(
        (pre, cur) => pre + cur.exchageAmount,
        0
      );
      return sum.toFixed(2);
    },
  },
  watch: {
    // 监视路由中的 `key` 参数变化以更新URL
    "$route.query.key"(newKey) {
      console.log("newKey====>", newKey);
      // this.updateURL(newKey);
    },
    language() {
      this.getNoticeList("ROLL_NOTICE");
      this.getDataList("TERMS_CLAUSE");
      this.getHelpCenterInfo(3);
    },
  },
  async mounted() {
    // 在目标页面中访问传递过来的参数对象
    this.tabsValue = this.$route.query.key;
    //console.log("tt=====>", this.tabsValue); // 输出 { key: 'value' }

    //审核状态  this.userInfo.is_merchant  默认0 审核1 通过2
    if (this.isLogin) {
      this.getUserInfo();
    }
    // console.log("userInfo===>", this.userInfo);
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),

    updateURL(tabName) {
      // 更新URL的逻辑
      if (history.pushState) {
        const baseUrl = window.location.href.split("#")[0];
        const newUrlHash = `#/user/index?key=${tabName}`;
        window.history.replaceState(null, "", baseUrl + newUrlHash);
      }
    },
    //获取公告信息
    getNoticeList(key) {
      getNoticeList({
        key,
      }).then((res) => {
        console.log("公告信息====>", res.data);
        this.noticeList = res.data.data;
        this.noticeCreateTime=res.data.data[0].createTime;
        this.noticeContent=res.data.data[0].noticeContent;
      });
    },
    //获取自选币种信息
    getUserCoinApi() {
      this.tableList = [];
      getUserCoinApi().then((res) => {
        // console.log("自选币种信息===>", res.data);
        res.data.data.forEach((item) => {
          this.tableList.push({
            logo: item.icon,
            showSymbol: item.coin.toUpperCase(),
            coin: item.coin,
            id: item.id,
          });
        });
        //console.log("tableList===>", this.tableList);
      });
    },
    //获取服务条款信息
    getDataList(type) {
      getRulesList({
        key: type,
      }).then((res) => {
        this.articleInfo = res.data.data[0];
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    //获取服务条款信息
    getHelpCenterInfo(id) {
      getHelpCenterInfo({
        id,
      }).then((res) => {
        this.contentInfo = res.data.data;
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    //获取银行卡信息
    getBankInfo() {
      getBankInfo().then((res) => {
        if (res) {
          this.isBindBank = true;
        }
      });
    },
    //获取用户信息
    async getUserInfo() {
      if (this.isLogin) {
        let userInfo = await this.getUserInfoData();
        this.SET_USER_INFO({
          ...this.userInfo,
          ...userInfo,
        });
        // console.log("userInfo=======>", this.userInfo);
        this.overvTableData = this.userInfo.asset.filter((item) => {
          return item.type == 1;
        });

        if (this.tabsValue == "all") {
          this.getNoticeList("ROLL_NOTICE");
          this.tableList = this.secondContractCoinList;
          // this.getUserCoinApi();
        }
        if (this.tabsValue == "advanced") {
          if (userInfo.detail.auditStatusPrimary != 1) {
            this.$router.push({
              path: "/user/index",
              query: {
                key: "primary",
              },
            });
            this.$message({
              message: "请先完成初级认证",
              type: "error",
            });
          }
        }
        if (this.tabsValue == "termsService") {
          this.getDataList("TERMS_CLAUSE");
        }

        if (this.tabsValue == "helper") {
          this.getHelpCenterInfo(3);
        }

        if (this.tabsValue == "bank") {
          this.getBankInfo();
        }

        //console.log("overvTableData===>",this.overvTableData);
      }
    },
    tabsClick(tab) {
      console.log("e===》", tab.name);
      this.tabsValue = tab.name;
      // 使用 History API 进行 URL 更改
      if (this.$route.query.key !== tab.name) {
        // if (this.isLogin) {
        //   this.getUserInfo();
        // }

        this.$router.push({
          path: "/user/index",
          query: { key: tab.name },
        });

        // 如果新旧 key 值不同，模拟开始路由跳转
        // NProgress.start();

        // if (history.pushState) {
        //   // 获取base URL（不包括`#`及之后的部分），构建新的 URL 哈希及查询参数
        //   const baseUrl = window.location.href.split("#")[0];
        //   const newUrlHash = `#/user/index?key=${tab.name}`;
        //   console.log("baseUrl===》", baseUrl);
        //   console.log("newUrlHash===》", newUrlHash);
        //   console.log("allHash===》", baseUrl + newUrlHash);
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
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          line-height: 55px;
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
