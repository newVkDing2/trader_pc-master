<template>
  <div class="top-operation">
    <div class="off-login" v-if="!isLogin">
      <div class="operat-item">
        <div
          class="operat-login"
          @click="$router.push({ path: '/user/login' })"
          :style="{'font-weight': '500'}"
        >
          <!-- Log In -->
          {{ $t("login.login") }}
        </div>
      </div>
      <div class="operat-item">
        <div
          class="operat-register"
          @click="$router.push({ path: '/user/register' })"
        >
          <!-- Register -->
          {{ $t("regis.regis") }}
        </div>
      </div>
    </div>
    <div class="no-login" v-else>
      <!-- <div class="operat-item">
        <div
          style="margin-right: 24px"
          @click="newWindowOpen('/account/entrust')"
        >{{ currCoinLangFun("entrust", "full") }}</div>
      </div> -->
      <div class="operat-item">
        <el-tooltip
          effect="light"
          placement="bottom"
          popper-class="operat-info-tooltip assets-tootip "
        >
          <div slot="content">
            <div
              v-for="(item, index) in assetsInfoItems"
              :key="index"
              class="info-item"
              @click="redirectTo(item.path, item.query)"
            >
              <div class="item-text">
                <div class="title flex-start" style="gap: 12px">
                  <img :src="item.imageSrc" alt width="18px" />
                  <span>{{ $t(item.title) }}</span>
                </div>
              </div>
            </div>

            <!-- <div class="content">
              <div class="content-total-box">
                <div class="border-bottom-line__second">
                  <div class="total-operat flex-box">
                    <div class="">
                      111
                      <span>
                        <i
                          class="fa"
                          style="cursor: pointer"
                          :class="{
                            'fa-eye-slash': !assetSetting.showAllAssets,
                            'fa-eye': assetSetting.showAllAssets,
                          }"
                          @click="setAssetsConfig"
                        ></i>
                      </span>
                    </div>
                    <div
                      class=""
                      style="cursor: pointer"
                      @click="$router.push({ path: '/account/wallet/bills' })"
                    >
                      <i class="el-icon-tickets"></i>
                      111
                    </div>
                  </div>
                  <div class="total-text">
                    <div class="" style="font-size: 24px">≈1111 BTC</div>
                    <div class="" style="line-height: 20px">1111</div>
                  </div>
                </div>
              </div>
              <template v-for="item in walletData">
                <div
                  class="content-wallet-item"
                  :key="item.type"
                  v-if="item.type != '0'"
                  @click="toAssetsPage(item.type)"
                >
                  <div class="flex-box border-bottom-line__second">
                    <div class="wallet-text">
                      <div class="title hover">{{ item.name }}</div>
                      <div class="money">
                        ≈1111 BTC
                        <span class=""> / 1111 </span>
                      </div>
                    </div>
                    <div class="wallet-icon">
                      <i class="el-icon-arrow-right hover"></i>
                    </div>
                  </div>
                </div>
              </template>
            </div> -->
          </div>

          <!-- @mouseenter="getWalletAccountFun()" -->
          <div style="margin-right: 24px">
            {{ $t("topOpera.title") }}
            <i class="el-icon-caret-bottom"></i>
          </div>
        </el-tooltip>
      </div>
      <div class="operat-item">
        <el-tooltip
          placement="bottom"
          effect="light"
          popper-class="operat-info-tooltip avatar-tooltip "
        >
          <div slot="content">
            <!-- <div class="info-box">
              <div class="flex-box info-conent border-bottom-line__second">
                <div class="info">
                  <div class="info-account">
                    {{ replaceAccount }}
                    <span
                      class="active-text"
                      v-if="userInfo.real_name_status == '0'"
                      >11111</span
                    >
                    <span
                      class="fit-error"
                      v-if="userInfo.real_name_status == '-1'"
                      >111111</span
                    >
                  </div>
                  <div class="info-id fit-tc-tip">UID {{ userInfo.uid }}</div>
                </div>
                <div class="info-level hover flex-box active-text">
                  <span></span>
                  {{ userInfo.level_str }}
                </div>
              </div>
            </div> -->
            <!-- <div
              class="info-item"
              @click="
                $router.push({
                  path: '/account/center/info',
                })
              "
            >
              <div class="item-text">
                <div class="title flex-start" style="gap: 10px">
                  <img src="@/assets/image/cer.png" alt width="20px" />
                  <span>总览</span>
                </div>
              </div>
            </div>
            <div
              class="info-item"
              @click="
                $router.push({
                  path: '/account/center/security',
                })
              "
            >
              <div class="item-text">
                <div class="title flex-start" style="gap: 10px">
                  <img src="@/assets/image/cer.png" alt width="20px" />
                  <span>初级认证</span>
                </div>
              </div>
            </div>

            <div class="info-item" v-if="false">
              <div class="item-text">
                <div class="title">2222</div>
                <div class="icon">
                  <i class="hover el-icon-right"></i>
                </div>
              </div>
            </div>
            <div
              class="info-item"
              @click="
                $router.push({
                  path: '/account/center/kyc',
                })
              "
            >
              <div class="item-text">
                <div class="title">2222</div>
              </div>
            </div> -->

            <div
              v-for="(item, index) in avatarInfoItems"
              :key="index"
              class="info-item"
              @click="redirectTo(item.path, item.query)"
            >
              <div class="item-text">
                <div class="title flex-start" style="gap: 12px">
                  <img :src="item.imageSrc" alt width="18px" />
                  <span>{{ $t(item.title) }}</span>
                </div>
              </div>
            </div>

            <!-- 退出登录 -->
            <!-- <div class="info-link border-bottom-line__second"></div> -->
            <div @click="outLogin" class="info-item">
              <div class="item-text">
                <div class="title flex-start" style="gap: 15px">
                  <img src="@/assets/image/cer.png" alt width="20px" />
                  <p>{{ $t("topOpera.logout") }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- {{ userInfo.avatar}}--userInfo -->
          <div class="operat-avatar">
            <img :src="userInfo.avatar" alt />
          </div>
        </el-tooltip>
      </div>
    </div>
    <!-- 下载图标 -->
<!--    <div class="operat-item">-->
<!--      <div class="operat-lang">-->
<!--        &lt;!&ndash; {{ languageName }} / {{ exchangeName }} &ndash;&gt;-->
<!--        &lt;!&ndash; <i class="el-icon-caret-bottom"></i> &ndash;&gt;-->
<!--        &lt;!&ndash; <img class="img" :src="allImgUrl.top_lang_normal" /> &ndash;&gt;-->
<!--        <img class="img" src="../../assets/image/download.png" />-->
<!--        &lt;!&ndash; <img class="img-hover" :src="allImgUrl.top_lang_hover" /> &ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
    <!-- 客服图标 -->
<!--    <div class="operat-item" @click="$emit('openDialog')">-->
<!--      <div class="operat-lang">-->
<!--        &lt;!&ndash; {{ languageName }} / {{ exchangeName }} &ndash;&gt;-->
<!--        &lt;!&ndash; <i class="el-icon-caret-bottom"></i> &ndash;&gt;-->
<!--        &lt;!&ndash; <img class="img" :src="allImgUrl.top_lang_normal" /> &ndash;&gt;-->
<!--        <img class="img" src="../../assets/image/customer.png" />-->
<!--        &lt;!&ndash; <img class="img-hover" :src="allImgUrl.top_lang_hover" /> &ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
    <!-- 语言图标 -->
    <div class="operat-item">
<!--      <el-tooltip-->
<!--        placement="bottom"-->
<!--        effect="light"-->
<!--        trigger="click"-->
<!--        popper-class="operat-info-tooltip lang-tooltip "-->
<!--      >-->
<!--        <div slot="content">-->
<!--          <div-->
<!--            v-for="(item, index) in languageData"-->
<!--            :key="index"-->
<!--            class="info-item"-->
<!--            @click="switchLang(item)"-->
<!--          >-->
<!--            <div class="item-text">-->
<!--              <div class="title flex-start" style="gap: 12px">-->
<!--                <img :src="item.imgUrl" alt width="18px" v-if="item.imgUrl"  />-->
<!--                <span>{{ $t(item.remark) }}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; {{ userInfo.avatar}}&#45;&#45;userInfo &ndash;&gt;-->
<!--        <div class="operat-lang">-->
<!--          <img class="img" src="../../assets/image/lang.png" />-->
<!--        </div>-->
<!--      </el-tooltip>-->
      <!-- <el-popover
        placement="bottom"
        width="320"
        trigger="click"
        popper-class="menu-child-popover common-propver"
      >
        <div class="menu-child-list">
          <div
            class="menu-child-item-box"
            v-for="(item, index) in langConf"
            :key="index"
          >
            <div class="menu-child-item" @click="switchLang(item)">
              <div class="child-content">
                <h3>{{ item.text }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div slot="reference" class="item-title">
          <div class="operat-lang">
            <img class="img" src="../../assets/image/lang.png" />
          </div>
        </div>
      </el-popover> -->
    </div>
    <!-- 主题切换图标 -->
    <!-- <div class="operat-item" @click="
      setThemeNameFun(
        themeName == 'theme-night' ? 'theme-daytime' : 'theme-night'
      )
      ">
      <div class="operat-theme">
        <i class="el-icon-moon" v-if="themeName == 'theme-daytime'"></i>
        <i class="el-icon-sunny" v-else-if="themeName == 'theme-night'"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getDicTableData, getDataApi, setHtLangApi } from "@/api/system";
import { getWalletAccount } from "@/api/user";
import { numberFilterFun, toThousands } from "@/util/util";

import config from "@/config/index";
export default {
  data() {
    return {
      isMoney: false,
      pageName: "top",
      // langDialog: true,
      langConf: [
        {
          value: "zh",
          text: "简体中文",
          imageSrc: "./img/cer.png",
        },
        {
          value: "en",
          text: "English",
          imageSrc: "./img/cer.png",
        },
      ], //语言
      exchangeData: [], //汇率
      active: "lang",
      exchangTimer: null,
      walletData: [], //资产
      allAssets: { name: "总资产", rate: "1.0", usdt: "0.0" }, //总资产
      avatarInfoItems: [
        {
          title: "assetsNav.all",
          path: "/user/index",
          query: { key: "all" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.primary",
          path: "/user/index",
          query: { key: "primary" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.advanced",
          path: "/user/index",
          query: { key: "advanced" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.bank",
          path: "/user/index",
          query: { key: "bank" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.tardPwd",
          path: "/user/index",
          query: { key: "tardPwd" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.loginPwd",
          path: "/user/index",
          query: { key: "loginPwd" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.certified",
          path: "/user/index",
          query: { key: "certified" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.termsService",
          path: "/user/index",
          query: { key: "termsService" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "assetsNav.helper",
          path: "/user/index",
          query: { key: "helper" },
          imageSrc: "./img/cer.png",
        },
      ],
      assetsInfoItems: [
        {
          title: "userNav.overview",
          path: "/assets/index",
          query: { key: "overview" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.finance",
          path: "/assets/index",
          query: { key: "finance" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.agreement",
          path: "/assets/index",
          query: { key: "agreement" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.recharge",
          path: "/assets/index",
          query: { key: "recharge" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.withdraw",
          path: "/assets/index",
          query: { key: "withdraw" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.swap",
          path: "/assets/index",
          query: { key: "swap" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.transfer",
          path: "/assets/index",
          query: { key: "transfer" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.tradeOrder",
          path: "/assets/index",
          query: { key: "tradeOrder" },
          imageSrc: "./img/cer.png",
        },
        {
          title: "userNav.records",
          path: "/assets/index",
          query: { key: "records" },
          imageSrc: "./img/cer.png",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "isLogin",
      "userInfo",
      "themeName",
      "language",
      "languageData",
      "exchange",
      "languageName",
      "exchangeName",
      "exchangeNum",
      "exchangeCode",
      "assetSetting",
      "allImgUrl",
    ]),
    replaceAccount() {
      let text = this.userInfo.email || this.userInfo.phone;
      if (this.userInfo.email) {
        return text.slice(0, 2) + "***" + text.slice(-2);
      } else if (this.userInfo.phone) {
        return text.slice(0, 3) + "***" + text.slice(-4);
      } else {
        return "--";
      }
    },
  },
  mounted() {
    console.log("isLogin===>", this.isLogin);
    // setHtLangApi(this.language)
    // this.setThemeNameFun(this.themeName);
    // this.getLangListFun()
    // this.getExChangeFun();
    // this.exchangTimer = setInterval(() => {
    //   this.getExChangeFun();
    // }, config.exchangeTime);
    // //登录状态下获取钱包数据
    // if (this.isLogin) {
    //   this.getWalletAccountFun();
    // }
  },
  methods: {
    ...mapMutations([
      "SET_THEME_NAME",
      "SET_LANGUAGE",
      "SET_EXCHANGE",
      "SET_EXCHANGE_NUM",
      "SET_ASSETS_SETTING",
      "SET_USER_INFO",
    ]),
    ...mapActions(["FedLogOut", "getUserInfoData"]),
    switchLang(item) {
      this.$i18n.locale = item.dictValue;
      localStorage.setItem("lang", item.dictValue);
      this.SET_LANGUAGE({
        language: item.dictValue,
        languageName: item.remark,
      });

      // window.location.reload();
      //this.$router.go(0);
      // 读取缓存
      // let lang = localStorage.getItem("lang")
      //   ? localStorage.getItem("lang")
      //   : "zh";
      // if (lang === "zh") {
      //   this.$i18n.locale = "en";
      //   localStorage.setItem("lang", "en"); // en表示英文，zh表示中文，可根据自己喜好设定，尽量通俗易懂
      // } else {
      //   this.$i18n.locale = "zh";
      //   localStorage.setItem("lang", "zh");
      // }
      //location.replace(location); //刷新网页
    },
    redirectTo(path, query) {
      this.$router.push({ path: path, query: query });
    },
    setAssetsConfig() {
      this.SET_ASSETS_SETTING({
        ...this.assetSetting,
        showAllAssets: !this.assetSetting.showAllAssets,
      });
    },
    //控制所有资产显示隐藏
    showAssetFun(value) {
      return this.assetSetting.showAllAssets ? value : "***";
    },
    toAssetsPage(type) {
      this.$router.push({
        path: "/account/wallet/assets",
      });
      //设置显示的钱包类型
      this.SET_ASSETS_SETTING({
        ...this.assetSetting,
        type,
      });
    },
    newWindowOpen(path, params = {}) {
      let routeUrl = this.$router.resolve({
        path: path,
        query: { ...params },
      });
      window.open(routeUrl.href, "_blank");
    },
    outLogin() {
      this.FedLogOut().then(() => {
        this.$router.push({
          path: "/",
        });
      });
    },
    // currCoinLangFun(code, type = "top") {
    //   console.log("this.coinLangFun(type, code)", this.coinLangFun(type, code));
    //   return this.coinLangFun(type, code);
    // },
    //设置主题
    setThemeNameFun(themen) {
      console.log(themen);
      this.SET_THEME_NAME(themen);
      document.body.className = themen;
    },
    //获取语言
    getLangListFun() {
      getDicTableData("coin_lang").then((res) => {
        this.langData = res.data.data;
      });
    },
    //获取资产
    getWalletAccountFun() {
      getWalletAccount().then((res) => {
        let dataRes = res.data.data;

        let allAssetsData = dataRes.filter((item) => item.type == "0");
        this.allAssets = allAssetsData[0];
        this.walletData = dataRes.filter((item) => {
          if (item.type == "8" && this.userInfo.is_merchant != 2) {
            return false;
          }
          return true;
        });
      });
    },
    computeBTC(usdt, rate) {
      //计算BTC 去掉后面的0
      if (usdt && rate) {
        return `${toThousands(Number(usdt).myDiv(Number(rate)).toFixed(8))}`;
      } else {
        return "0";
      }
    },
    exchangeRateFilter(val, money) {
      if (!val) {
        return "";
      }
      if (money) {
        val = Number(val).myMul(money);
      }
      return `${this.exchangeCode}${toThousands(
        Number(val).myMul(this.exchangeNum)
      )}`;
    },
    //获取汇率
    getExChangeFun() {
      getDataApi("1531553843420971009", {
        pageSize: -521,
        country_flag: "1",
      }).then((res) => {
        this.exchangeData = res.data.data.records;
        //设置当前汇率
        this.exchangeData.forEach((item) => {
          if (item.exchange_value == this.exchange) {
            this.SET_EXCHANGE_NUM(item.rate);
          }
        });
      });
    },
    async setLanguageFun(item) {
      let oldLang = this.language;
      console.log(item.value, this.$i18n.locale);
      this.$i18n.locale = item.value;
      this.SET_LANGUAGE({
        language: item.value,
        languageName: item.text,
      });
      if (item.value != oldLang) {
        setTimeout(() => {
          this.reloadViewFun();
          // setHtLangApi(item.value)
        }, 0);
      }

      if (this.isLogin) {
        //登录状态拿对应语言的个人数据回显
        let userInfo = await this.getUserInfoData();
        this.SET_USER_INFO({
          ...this.userInfo,
          ...userInfo,
        });
      }
    },
    setExchangeFun(item) {
      this.SET_EXCHANGE({
        exchange: item.exchange_value,
        exchangeName: item.quote_currency,
        exchangeCode: item.exchange_code,
        exchangeNum: item.rate,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-operation {
  display: flex;
  align-items: center;

  .off-login,
  .no-login {
    display: flex;
    align-items: center;
  }

  .operat-item {
    font-size: 14px;
    margin-right: 0px;
    cursor: pointer;
    color: #333 !important;
    // .info-item {
    //   background: red;
    // }

    .operat-login,
    .operat-register {
      padding: 4px 36px;
      height: 24px;
      line-height: 24px;
    }
    .operat-login{
      padding: 4px 20px;
      font-weight: bold;
      font-size: 16px;
    }

    .operat-register {
      margin-left: 12px;
      color: #fff;
      background: #00B78A;
      border-radius: .5rem;
      // font-weight: 600;
    }

    .operat-register:hover{
      background: #09BA85;
      background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
    }

    .operat-login {
      // background-color: #333;
      // color: #fff;
      font-weight: bold;
    }

    .operat-lang {
      display: flex;
      align-items: center;
      margin-left: 18px;

      // .img {
      //   display: block;
      // }

      // .img-hover {
      //   display: none;
      // }

      // &:hover {
      //   .img {
      //     display: none;
      //   }

      //   .img-hover {
      //     display: block;
      //   }
      // }

      img {
        width: 26px;
        margin-right: 2px;
      }
    }

    .operat-theme {
      font-size: 24px;
      margin-left: 26px;
    }

    .operat-avatar {
      img {
        width: 26px;
        // height: 26px;
      }
    }
  }

  .operat-info {
    display: flex;
    align-items: center;
    font-size: 14px;

    .info {
      padding-left: 4px;
      width: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .info-user {
      font-size: 18px;
    }
  }
}
</style>
<style lang="scss">
.el-dialog__wrapper {
  .el-dialog {
    // background: red;
    .el-dialog__header {
      font-size: 16px;
      border-bottom: 1px solid #f1f1f1;
    }
    .el-dialog__body {
      font-size: 14px;
      line-height: 20px;
      padding: 20px 20px 24px !important;
      p:nth-child(2) {
      }
    }
    // .el-dialog__header {
    //   // padding: 0;
    //   padding: 20px 0 20px;
    // }
  }
}

.operat-property-tooltip {
  padding: 0;
  width: 400px;

  .content {
    padding: 20px 0;
    font-size: 14px;

    .content-total-box {
      padding: 0 24px;

      .total-operat {
        justify-content: space-between;
      }
    }

    .content-wallet-item {
      padding: 0 24px;
      cursor: pointer;

      .wallet-text {
        flex: 1;

        .money {
          font-size: 18px;

          span {
            font-size: 14px;
            margin-left: 4px;
          }
        }
      }

      .wallet-icon {
        i {
          font-size: 20px;
          display: none;
        }
      }

      &:hover {
        i {
          display: block;
        }
      }
    }

    .border-bottom-line__second {
      padding: 16px 0;
    }
  }
}


.operat-info-tooltip::-webkit-scrollbar {
  width: 2px !important; /* 滚动条宽度 */
  height: 2px !important;
}
.operat-info-tooltip::-webkit-scrollbar-track {
  background: #f1f1f1; /* 滚动条轨道颜色 */
}
.operat-info-tooltip {
  padding: 0;
  // width: 210px;
  // overflow: hidden;
  height: 300px;
  overflow: auto; /* 当内容溢出时显示滚动条 */
  border: none !important ; /* 移除边框 */

  .info-box {
    padding: 0 26px;
    margin-bottom: 8px;

    .border-bottom-line__second {
      padding: 16px 0;
      align-items: center;
    }

    .info {
      flex: 1;

      .info-account {
        font-size: 24px;

        span {
          font-size: 14px;
        }
      }

      .info-id {
        font-size: 14px;
        padding-top: 16px;
      }
    }

    .info-level {
      padding: 0 16px 0 8px;
      height: 24px;
      border-radius: 14px;
      margin-right: -36px;
      cursor: pointer;

      span {
        display: block;
        width: 20px;
        height: 20px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7ZRBTsJAFED/L2jijiOwBFY2Aok7uEGJ4FY5AXIC4ATiCaxbS0xvgDsTlcAK6q5HcOcC6HcGy6Yy7UzBxMW8pMlk5v/f18nvB9BoNBrN/wZlggrNtxoCdtgyxzLchVO+gz8iUahwOb3CYG1Htmdfq0zdd81PODCxQsXWewcIhoJjaamwTo0tc2RkbO/RfBDFGqKDQnPSi5HhnJ5k1/eQJNOc3IZ1LPbU+G2XeG1VIQPIgmSsUmsilNp8FNBNdJ9iaguFgtWyAYg+JEBE17ukuAwC9X8lIPm0yjRE9WJ7qGC95PHoeMzemocEENGeO2ftTd7uH+FHZpmte67pC+tAAipSDJc1rZtWRkpoK2Vkj6bE51AaJGU4Bkjguec+YFBn9spzh+ewXmrIyITx8oQTe6ySgxiYc6c6k42XuqEt3qjyTEHQlo0nhLaKjLLQRuqpagdA3eRI6npO2QZFlIU4H6PKkA23geic9cxgwWIgBUo9FIX1VJ/1VC8qMx9V+pCSvYSiUvvKHIzixavNH9BoNBrN4fkGgnqs9xCMyG4AAAAASUVORK5CYII=)
          no-repeat 50%;
        background-size: 100% auto;
      }
    }
  }

  .info-item {
    padding: 18px 23px;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }

    .item-text {
      // display: flex;
      // justify-content: space-between;
    }

    .title {
      font-size: 14px;
      line-height: 22px;
    }

    i {
      font-size: 20px;
      display: none;
    }

    &:nth-last-of-type(1) {
      // margin-bottom: 8px;
    }

    &:hover {
      i {
        display: block;
      }
    }
  }

  .info-link {
    height: 1px;
    margin: 8px 24px 0;
  }
}
.assets-tootip {
  margin-left: 20px;
}
// .lang-tooltip {
//   height: 120px;
// }

.avatar-tooltip {
  // width: 240px;
  margin-left: 80px;
}
</style>
