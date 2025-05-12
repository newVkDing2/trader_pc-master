<template>
  <div class="coin-contail" id="coin-contail">
    <div
      class="coin-top daytime"
      style="background: #eef1f6; border-bottom: 1px solid #f1f1f1"
      v-show="
        !$route.fullPath.includes('/login') &&
        !$route.fullPath.includes('register') &&
        !$route.fullPath.includes('reset')
      "
    >
      <div class="coin-top-main">
        <div class="top-bar_menu">
          <top-menu></top-menu>
        </div>
        <div class="top-operation">
          <top-operation
            ref="topOperation"
            @openDialog="showDialog = true"
          ></top-operation>
        </div>
      </div>
    </div>

    <div class="coin-main">
      <router-view
        v-if="isRouterAlive"
        :key="$route.fullPath"
        class="avue-view"
      />
    </div>

    <!-- <div class="customer-box" v-if="isLogin">
      <customer-service></customer-service>
    </div> -->
    <div class="coin-foot" v-if="isFooter">
      <bottom-footer
        @openDialog="showDialog = true"
        :openSetLangFun="openSetLangFun"
      ></bottom-footer>
    </div>

    <el-dialog
      :title="$t('home.onlineCustomer')"
      :visible.sync="showDialog"
      width="532px"
      :modal-append-to-body="false"
      :append-to-body="true"
    >
      <span slot="title">
        <div class="dialogTitle">
          <div class="box-tabs">
            <p class="box-tabs-item flex-center">
              {{ $t("home.onlineCustomer") }}
            </p>
          </div>
        </div>
      </span>

      <div class="bottom_content">
        <p>
          {{ $t("home.customerTip1") }}
        </p>
        <p>{{ $t("home.customerTip2") }}</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TopMenu from "./top-menu.vue";
import TopOperation from "./top-operation.vue";
import BottomFooter from "./bottom-footer.vue";
import customerService from "@/components/chat/customer-service.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getStore } from "@/util/store";
import { calcDate } from "@/util/date";
import { validatenull } from "@/util/validate";
import { getDataApi } from "@/api/system";
import website from "@/config/index";
import mqtt from "@/mixins/mqtt";
import { getCurrentDateFun } from "@/util/util";

export default {
  mixins: [mqtt],
  components: {
    TopMenu,
    TopOperation,
    BottomFooter,
    customerService,
  },
  data() {
    return {
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: "",
      getCurrentDateFun: getCurrentDateFun,
      notifyInstanceArr: [],
      mqttArr: [],
      merchantMqtt: null, //商家账户mqtt
      userMqtt: null, //用户账户mqtt
      showDialog: false,
    };
  },
  computed: {
    ...mapGetters(["themeName", "isLogin", "userInfo", "isRouterAlive"]),
    isFooter() {
      console.log("path==>", this.$route.path);
      const blackList = [
        /^\/user(?!\/index)/,
        "/pledge/",
        "/finance/detail",
        "/trade",
      ];
      if (
        blackList.some((item) => {
          if (typeof item === "string") {
            return this.$route.path.includes(item);
          } else if (item instanceof RegExp) {
            return item.test(this.$route.path);
          }
        })
      ) {
        return false;
      }
      if (this.$route.path.indexOf("/exchange/full-screen/") != -1) {
        return false;
      }
      return true;
    },
  },
  async created() {
    // this.getAllLangData();
    // this.getAllImgUrlData();

    if (this.isLogin) {
      let userInfo = await this.getUserInfoData();
      this.SET_USER_INFO({
        ...this.userInfo,
        ...userInfo,
      });
      // this.getPlatFormConfigApi();
    }
    //获取网站logo
    // getDataApi("1530464853989064705", {
    //   config_code: "web_logo",
    // }).then((res) => {
    //   let data = res.data.data.records[0];
    //   if (data) {
    //     this.SET_LOGO({
    //       daytime: data.config_img_daytime,
    //       night: data.config_img_night,
    //     });
    //   }
    // });
  },
  watch: {
    $route(to, from) {
      document.title = `Coincheckusa`;
    },
    isLogin(newVal) {
      // if (newVal) {
      //   this.refreshToken();
      //   //重连mqtt
      //   setTimeout(() => {
      //     this.initMqttFun();
      //   }, 0);
      // } else {
      //   //退出登录清除账户监听的mqtt
      //   console.log("已退出，取消订阅账户变动mqtt");
      //   if (this.userMqtt) {
      //     this.closeMqtt(this.userMqtt);
      //     this.userMqtt = null;
      //   }
      //   if (this.merchantMqtt) {
      //     this.closeMqtt(this.merchantMqtt);
      //     this.merchantMqtt = null;
      //   }
      //   clearInterval(this.refreshTime);
      // }
    },
    /*     "$route.path": function () {
        this.
      }, */
  },
  mounted() {
    //监听滚动
    // window.addEventListener('scroll', () => {
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop
    //   if (this.themeName == 'theme-daytime') {
    //     if (scrollTop != 0) {
    //       document.querySelector('.coin-top').classList.add('daytime')
    //     } else {
    //       document.querySelector('.coin-top').classList.remove('daytime')
    //     }
    //   }
    // })
    console.log("=======>", this.isLogin, website);
    if (this.isLogin) {
      // this.refreshToken();
      setTimeout(() => {
        // this.initMqttFun();
      }, 0);
    }
  },
  methods: {
    ...mapActions([
      "getAllLangData",
      "getAllImgUrlData",
      "getUserInfoData",
      "logo",
    ]),
    ...mapMutations([
      "SET_USER_INFO",
      "SET_LOGO",
      "SET_USER_VARIATION",
      "SET_MERCHANT_VARIATION",
    ]),
    openSetLangFun() {
      this.$refs.topOperation.langDialog = true;
    },
    currCoinLangFun(code, type = "user") {
      return this.coinLangFun(type, code);
    },
    initMqttFun() {
      //建立连接 用户账户变动

      console.log("已登录，初始化监听账户变动", this.userInfo);

      this.userMqtt = this.initMqtt(`refresh_${this.userInfo.id}`, (data) => {
        console.log("用户账户 refresh_==========>", data);
        this.SET_USER_VARIATION(data);

        if (["otc", "appeal"].includes(data.type)) {
          this.sendOtcNotifyFun("user", data);
        }
      });
      //商家账户变动
      if (this.userInfo.is_merchant == 2)
        this.merchantMqtt = this.initMqtt(
          `refresh_${this.userInfo.merchant.id}`,
          (data) => {
            console.log("商家账户 refresh_==========>", data);
            this.SET_MERCHANT_VARIATION(data);

            if (["otc", "appeal"].includes(data.type)) {
              this.sendOtcNotifyFun("business", data);
            }
          }
        );
    },
    //推送otc订单消息
    sendOtcNotifyFun(userType, data) {
      if (data.changeUser == this.userInfo.id) {
        return;
      }

      if (
        this.userInfo.is_merchant == 2 &&
        data.changeUser == this.userInfo.merchant.id
      ) {
        return;
      }
      //获取通知标题内容  和路由路径
      let { htmlMessage, routerOption, title } = this.htmlTemplete(
        userType,
        data
      );
      console.log(routerOption);
      let that = this;

      console.log(this.notifyInstanceArr);
      if (this.notifyInstanceArr.length >= 4) {
        //通知数量超过一定数量，调用前面的实例关闭方法并删除
        this.notifyInstanceArr[0].close();

        this.notifyInstanceArr.splice(0, 1);
      }

      this.notifyInstanceArr.push(
        this.$notify({
          title: title, // 您有一条新订单/订单状态变更
          dangerouslyUseHTMLString: true,
          duration: 0,
          message: htmlMessage,
          onClick: function () {
            that.$router.push(routerOption);
            this.close();
          },
        })
      );
    },
    htmlTemplete(userType, data) {
      let { isNew, content, orderCode, type, changeUser, serviceType } = data;

      let htmlMessage = "";
      let routerOption = {};
      let title = ``;
      //商家
      if (userType == "business") {
        if (type == "otc") {
          if (isNew == "1") {
            title = `${this.currCoinLangFun(
              "nyytxdd_text",
              "popup_tips"
            )} ${this.getCurrentDateFun("dataTime")}`; //您有一条新订单

            //订单号
            //立即前往

            htmlMessage = `<div style="cursor: pointer;" >
        <p>${this.currCoinLangFun(
          "ddh_text",
          "move_contract"
        )}: ${orderCode} </p>
            <p>${this.currCoinLangFun(
              "ljqw_text",
              "popup_tips"
            )} <i class="el-icon-arrow-right" ></i> </p>
        <div>`;
          } else if (isNew == "0") {
            title = `${this.currCoinLangFun(
              "ddztbg_text",
              "move_contract"
            )} ${this.getCurrentDateFun("dataTime")} `; //订单状态变更
            //订单号
            htmlMessage = `<div  style="cursor: pointer;">
            <p>${this.currCoinLangFun(
              "ddh_text",
              "move_contract"
            )}: ${orderCode} </p>
            <p>${content}</p>
        <div>`;
          }
        } else if (tyep == "appeal") {
          title = `${this.currCoinLangFun(
            "nyytbssdd_text",
            "popup_tips"
          )} ${this.getCurrentDateFun("dataTime")}`; //您有一条被申诉订单

          //订单号
          //立即前往

          htmlMessage = `<div style="cursor: pointer;" >
        <p>${this.currCoinLangFun(
          "ddh_text",
          "move_contract"
        )}: ${orderCode} </p>
            <p>${this.currCoinLangFun(
              "ljqw_text",
              "popup_tips"
            )} <i class="el-icon-arrow-right" ></i> </p>
        <div>`;
        }

        routerOption = {
          name: "merchant",
          params: {
            serviceType,
            orderCode: orderCode,
          },
        };
      } else if (userType == "user") {
        if (type == "otc") {
          if (isNew == "0") {
            title = `${this.currCoinLangFun(
              "ddztbg_text",
              "move_contract"
            )} ${this.getCurrentDateFun("dataTime")} `; //订单状态变更

            htmlMessage = `<div>
            <p>${this.currCoinLangFun(
              "ddh_text",
              "move_contract"
            )}: ${orderCode} </p>
            <p>${content}</p>
        <div>`;
          }
          routerOption = {
            name: "order",
            params: {
              serviceType,
              orderCode: orderCode,
            },
          };
        } else if (type == "appeal") {
          title = `${this.currCoinLangFun(
            "nyytbssdd_text",
            "popup_tips"
          )} ${this.getCurrentDateFun("dataTime")}`; //您有一条被申诉订单

          //订单号
          //立即前往

          htmlMessage = `<div style="cursor: pointer;" >
        <p>${this.currCoinLangFun(
          "ddh_text",
          "move_contract"
        )}: ${orderCode} </p>
            <p>${this.currCoinLangFun(
              "ljqw_text",
              "popup_tips"
            )} <i class="el-icon-arrow-right" ></i> </p>
        <div>`;
          routerOption = {
            name: data.link_merchant == 1 ? "merchant" : "order",
            params: {
              serviceType,
              orderCode: orderCode,
            },
          };
        }
      }

      return { htmlMessage, routerOption, title };
    },
    // 定时检测token
    refreshToken() {
      this.refreshTime = setInterval(() => {
        const token =
          getStore({
            name: "token",
            debug: true,
          }) || {};
        const date = calcDate(token.datetime, new Date().getTime());
        if (validatenull(date)) return;
        if (date.seconds >= website.tokenTime && !this.refreshLock) {
          this.refreshLock = true;
          this.$store
            .dispatch("refreshToken")
            .then(async () => {
              this.refreshLock = false;
              let userInfo = await this.getUserInfoData();
              this.SET_USER_INFO({
                ...this.userInfo,
                ...userInfo,
              });
            })
            .catch(() => {
              this.refreshLock = false;
            });
        }
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scope>
$height: 65px;

.coin-contail {
  position: relative;
}

.coin-top {
  // min-width: 1200px;
  width: 100%;
  height: $height;
  padding: 0 24px;
  // background-color: #0d1324;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #eef1f6;
  justify-content: center;
  //position: fixed;
  //left: 0;
  //top: 0;
  //z-index: 999;
  // width: 100%;
  // transition: background-color 0.5s;
  .coin-top-main{
    width: 1120px;
    display: flex;
    justify-content: space-between;
  }
  &.daytime {
    .night_logo_img {
      display: block !important;
    }

    .daytime_logo_img {
      display: none !important;
    }
  }
}

.coin-main {
  min-width: 1248px;
  // width: 100%;
  // background: #fafbfe;
  // margin-top: $height;
}
</style>
