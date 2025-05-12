<template>
  <div class="login-view">
    <div
      class="coin-top daytime"
      style="background: #fff; border-bottom: 1px solid #f1f1f1"
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
    <div class="login-box">
      <!-- 语言选择 -->
<!--      <div class="langBox">-->
<!--        <div class="operat-item">-->
<!--          <el-tooltip-->
<!--            placement="bottom"-->
<!--            effect="light"-->
<!--            trigger="click"-->
<!--            popper-class="operat-info-tooltip lang-tooltip "-->
<!--          >-->
<!--            <div slot="content">-->
<!--              <div-->
<!--                v-for="(item, index) in languageData"-->
<!--                :key="index"-->
<!--                class="info-item"-->
<!--                @click="switchLang(item)"-->
<!--              >-->
<!--                <div class="item-text">-->
<!--                  <div class="title flex-start" style="gap: 12px">-->
<!--                    <img :src="item.imgUrl" alt width="18px" v-if="item.imgUrl" />-->
<!--                    <span>{{ $t(item.remark) }}</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; {{ userInfo.avatar}}&#45;&#45;userInfo &ndash;&gt;-->
<!--            <div class="operat-lang">-->
<!--              <img class="img" src="../../assets/image/lang.png" />-->
<!--            </div>-->
<!--          </el-tooltip>-->
<!--        </div>-->
<!--      </div>-->
      <div class="login_main">
        <!-- 左边图片 -->
<!--        <div class="login-banner">-->
<!--          &lt;!&ndash; <img v-show="themeName == 'theme-night'" :src="conifgData.config_img_night" />-->
<!--        <img v-show="themeName != 'theme-night'" :src="conifgData.config_img_daytime" /> &ndash;&gt;-->
<!--          <img src="../../assets/image/login_bg.png" alt="" />-->
<!--        </div>-->
        <!-- 右边表单 -->
        <div class="login-content flex-colum-start">
          <div class="login-wrapper">
            <div class="login-title">
              <!-- {{ currCoinLangFun("login_title") }} -->
              {{ $t("findPsw.findPsw") }}
            </div>
            <ul class="login-check-list">
              <li
                class="fit-tc-tertiary title"
                @click="$router.push({ path: '/user/login' })"
                style="color: #09BA85"
              >
                <!-- {{ currCoinLangFun("account") }} -->
                {{ "<" + " " }} {{ $t("findPsw.backLogin") }}
              </li>
            </ul>
            <div class="login-info">
              <el-form
                ref="form"
                :rules="rules"
                :model="formData"
                label-position="top"
                label-width="80px"
                @submit.native.prevent="submitFindPsw"
              >
                <el-form-item prop="email">
                  <el-input
                    class="contains-icon"
                    :placeholder="$t('findPsw.plsFillEmailAddress')"
                    prefix-icon="el-icon-user-solid"
                    v-model="formData.email"
                  ></el-input>
                </el-form-item>

                <el-form-item prop="emailCode">
                  <el-input
                    class="contains-icon"
                    :placeholder="$t('findPsw.plsFillCode')"
                    prefix-icon="el-icon-lock"
                    v-model="formData.emailCode"
                  >
                    <template slot="suffix">
                      <div class="btnBox flex-center">
                        <p class="commonBtn_bg" @click="sendCode(loginType)">
                          {{ $t("findPsw.send") }}
                        </p>
                      </div>
                    </template>
                  </el-input>
                </el-form-item>

                <el-form-item prop="newPwd">
                  <el-input
                    class="contains-icon"
                    :placeholder="$t('findPsw.plsInputLoginPsw')"
                    prefix-icon="el-icon-lock"
                    show-password
                    v-model="formData.newPwd"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="newLoginPassword">
                  <el-input
                    class="contains-icon"
                    :placeholder="$t('findPsw.plsConfirmPsw')"
                    prefix-icon="el-icon-lock"
                    show-password
                    v-model="formData.newLoginPassword"
                  ></el-input>
                </el-form-item>

                <el-button
                  type="primary"
                  class="commonBtn_bg"
                  :loading="loading"
                  native-type="submit"
                  >{{ $t("utils.submit") }}</el-button
                >
              </el-form>
            </div>
          </div>

          <!-- <div class="login-wrapper">
            <div class="login-title fit-tc-primary">
              {{ currCoinLangFun("text_aqyz", "popup_tips") }}
            </div>
            <ul class="login-check-list flex-box" v-if="loginType != ' account'">
                  <template v-if="isBindGoogle">
              <li class="fit-tc-tertiary hover-text title" :class="{ 'active-text': verifyType == 'google' }"
                @click="setVerifyDataFun('google')">
                {{ currCoinLangFun("security_ggyz", "all") }}
              </li>
              <span class="box-line" style="width: 1px; height: 16px; display: block"></span>
  </template>

  <li class="fit-tc-tertiary hover-text title" :class="{ 'active-text': verifyType == 'phone' }"
    @click="setVerifyDataFun('phone')">
    {{ currCoinLangFun("phone_verification", "all") }}
  </li>
  </ul>
  <div class="login-info">
    <el-form ref="form" :model="verifyData" label-position="top" label-width="80px">
      <el-form-item prop="google" v-if="verifyType == 'google'">
        <div class="fit-tc-tertiary">
          {{ currCoinLangFun("text_ggyzmtx", "popup_tips") }}
        </div>
        <el-input v-model="verifyData.googleCode"></el-input>
      </el-form-item>
      <el-form-item v-if="verifyType == 'phone' || verifyType == 'email'">
        <div class="fit-tc-tertiary">{{ verifyText }}</div>
        <div class="verify-code-wrap">
          <div class="codeInput el-input el-input--suffix">
            <input type="text" v-model="verifyData[verifyType + 'Code']" autocomplete="off" maxlength="6"
              class="el-input__inner" />
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <div class="yz-container">
                  <span class="small-btn fit-tc-tertiary active-text" :style="{
                              opacity: codeTime > 0 || codeLoading ? '0.6' : '1',
                            }" @click="sendAuthCodeFun">
                    {{
                    codeTime > 0
                    ? codeTime +
                    `S ${currCoinLangFun(
                    "text_resend",
                    "popup_tips"
                    )}`
                    : `${currCoinLangFun("text_fsyzm", "all")}`
                    }}
                    <i v-if="codeLoading" class="el-icon-loading"></i>
                  </span>
                </div>
              </span>
            </span>
          </div>
        </div>
      </el-form-item>
      <el-button type="primary" :class="{
                  'fit-tc-tertiary': isVerify,
                }" :disabled="isVerify" @click="loginFun" :loading="loading" native-type="submit">{{
        currCoinLangFun("text_qr", "popup_tips") }}</el-button>
    </el-form>
  </div>
  </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "./../../page/index/top-menu.vue";
import TopOperation from "./../../page/index/top-operation.vue";
import PhoneAreaCode from "@/components/user/phone-area-code.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getCountryCode } from "@/api/system";
import {
  sendEmailApi,
  sendPhoneSmsApi,
  getAuthentication,
  sendEmailCode,
  sendMobileCode,
  regisApi,
  findPswApi,
} from "@/api/user";
import config from "@/config/index";
export default {
  components: {
    PhoneAreaCode,
    TopMenu,
    TopOperation
  },
  data() {
    return {
      codeTime: 0,
      loading: false,
      codeLoading: false,
      loginStep: 1,
      conifgData: {},
      loginType: "account",
      isPhoneCode: false,
      formData: {
        newPwd: "",
        newLoginPassword: "",
        email: "",
        emailCode: "",
      },
      rules: {
        loginName: [
          {
            required: true,
            message: "请输入邮箱或者子账户", //请输入邮箱或者子账户
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号", //请输入手机号
            trigger: "blur",
          },
        ],
        loginPassword: [
          {
            min: 6,
            message: "请输入正确的密码格式", //请输入正确的密码格式
            trigger: "blur",
          },
        ],
      },
      // 验证
      isBindGoogle: false,
      verifyType: "google",
      verifyData: {
        phoneCode: "",
        googleCode: "",
        emailCode: "",
      },
      verCodeUrl: "",
      timestamp: "",
      value: "1",
      areaData: [],
      langConf: [
        {
          value: "zh",
          text: "简体中文",
        },
        {
          value: "en",
          text: "English",
        },
      ], //语言
    };
  },
  computed: {
    ...mapGetters(["themeName", "language", "languageData"]),
    codeUrl() {
      this.timestamp = Date.now();
      return `${config.baseUrl}/api/user/easyGenerateCode?codeType=REGISTER&timestamp=${this.timestamp}`;
    },
    // verifyText() {
    //   let text = `
    //     ${this.loginType == "account"
    //       ? this.currCoinLangFun("text_qsrbdyxzh", "center") //请输入绑定邮箱
    //       : this.currCoinLangFun("text_qsrbdsjh", "center") //请输入绑定手机号
    //     }${this.formData[this.loginType]
    //       ? this.formData[this.loginType].substring(0, 3)
    //       : ""
    //     }****${this.formData[this.loginType]
    //       ? this.formData[this.loginType].substring(
    //         this.formData[this.loginType].length - 3,
    //         this.formData[this.loginType].length
    //       )
    //       : ""
    //     }${this.currCoinLangFun("text_sdyzm", "popup_tips")}
    //   `; //收到的 6 位验证码
    //   return text;
    // },
    isLogin() {
      let { loginPassword, loginName, phone } = this.formData;
      loginPassword = loginPassword + "";
      // console.log("password", password);
      // console.log("loginType", this.loginType);
      if (
        loginPassword.length >= 6 &&
        ((this.loginType == "account" && loginName) ||
          (this.loginType == "phone" && phone))
      ) {
        return false;
      }
      return true;
    },
    isVerify() {
      if (this.verifyData[this.verifyType + "Code"].length != 6) {
        return true;
      }
      return false;
    },
  },
  created() {
    // getDetailDataApi("1530464853989064705", "1531925304853741570").then(
    //   (res) => {
    //     this.conifgData = res.data.data;
    //   }
    // );
    this.getAreaDataFun();
  },
  methods: {
    ...mapActions(["login", "getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO", "SET_LANGUAGE"]),
    //获取区号列表
    async getAreaDataFun() {
      let dataRes = await getCountryCode();
      let data = dataRes.data.data;
      this.areaData = data;
    },
    switchLang(item) {
      this.$i18n.locale = item.dictValue;
      localStorage.setItem("lang", item.dictValue);
      this.SET_LANGUAGE({
        language: item.dictValue,
        languageName: item.remark,
      });
      // window.location.reload();
      //this.$router.go(0);
    },
    //选择区号
    changeCode(e) {
      this.value = e;
    },
    //提交
    submitFindPsw() {
      findPswApi({
        ...this.formData,
      }).then((res) => {
        // console.log("找回密码结果===》", res.data);
        if (res.data.code == 200) {
          this.$message({
            message: this.$t("findPsw.submitSuccessTip"), //成功，请重新登录
            type: "success",
          });
        }
      });
    },
    //发送验证码
    sendCode(type) {
      sendEmailCode({
        codeType: "FIND_PASSWORD",
        email: this.formData.email,
      }).then((res) => {
        console.log("发送邮箱结果===》", res.data);
        if (res.data.code == 200) {
          this.$message({
            message: this.$t("regisAndLogin.sendCodeToEmail"), //验证码已发送到您的邮箱，请注意查收
            type: "success",
          });
        }
      });
    },
    refreshCode() {
      this.timestamp = Date.now();
    },
    setFormConfigFun(type) {
      this.loginType = type;
      this.formData = {
        loginName: "",
        phone: "",
        loginPassword: "",
      };
      this.$refs.form.clearValidate();
    },
    sendAuthCodeFun() {
      if (this.codeTime > 0 || this.codeLoading) {
        return false;
      }
      this.codeLoading = true;
      if (this.loginType == "account") {
        sendEmailApi({
          email: this.formData.account,
          type: 2,
        })
          .then((res) => {
            this.codeLoading = false;
            this.codeTime = 60;
            let timer = setInterval(() => {
              this.codeTime--;
              if (this.codeTime <= 0) {
                clearInterval(timer);
              }
            }, 1000);
          })
          .catch(() => {
            this.codeLoading = false;
          });
      } else {
        sendPhoneSmsApi({
          phone: this.formData.phone,
          type: 2,
          areaCode: this.formData.phoneRegion,
        })
          .then((res) => {
            this.codeLoading = false;
            this.codeTime = 60;
            let timer = setInterval(() => {
              this.codeTime--;
              if (this.codeTime <= 0) {
                clearInterval(timer);
              }
            }, 1000);
          })
          .catch(() => {
            this.codeLoading = false;
          });
      }
    },
    setVerifyDataFun(type) {
      this.verifyType = type;
      this.verifyData = {
        phoneCode: "",
        googleCode: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep.el-select {
  width: 140px;
  border-right: 1px solid #ddd;
}

::v-deep .el-input:hover .el-input__inner {
  border-color: #f1f1f1 !important;
  /* 重置为默认边框颜色 */
}

.login-box {
  display: flex;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  // min-height: 600px;
  align-items: start;
  justify-content: center;
  background: #eef1f6;
  .langBox {
    position: fixed;
    top: 15px;
    right: 30px;

    .operat-lang {
      img {
        width: 30px;
      }
    }
  }

  .login_main {
    display: flex;
    // align-items: center;
    width: 1570px;
    margin-top: 3rem;
    // padding: 80px;
    //background: blue;
  }

  // width: 1200px;
  // margin: 0 auto;
  .login-banner {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    // background: red;

    img {
      width: 460px;
      height: auto;
      object-fit: contain;
    }
  }

  .login-content {
    flex: 1;
    display: flex;
    align-items: start;
    // background:blue;
  }

  .login-wrapper {
    // padding-top: 82px;
    // width: 52px;
    margin: 0 auto;
    //  background:yellow;
    // margin-top: -11%;
    background: #fff;
    padding: 3rem;
    min-width: 26rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-title {
      word-wrap: break-word;
      font-weight: 700;
      font-size: 20px;
    }

    ul {
      // padding-bottom: 16px;
      margin-top: 20px;
      li {
        cursor: pointer;
        font-size: 16px;
        min-height: 28px;
        font-weight: 700;
        margin-right: 40px;
      }

      .active-text {
        color: #09BA85;
      }

      span {
        margin: 0 12px;
      }
    }
  }

  .login-info {
    flex: 1;
    width: 100%;
    ::v-deep.el-form {
      .el-form-item__content {
        display: flex;
      }

      .el-input__icon {
        // font-size: 16px;
        line-height: 45px;
      }

      .el-form-item__label {
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        margin-bottom: 8px;
      }

      // .el-form-item__content {
      //   display: flex;
      //   justify-content: space-between;
      // }

      .contains-icon {
        // position: relative;

        // input {
        //   // height:50px;
        //   padding-right: 130px;
        //   /* 留出图片的空间 */
        // }

        // .el-input__inner {
        //   padding-left: 40px;
        //   background: #f1f1f1;
        //   height: 50px;
        // }
        .imgBox {
          width: 100px;
          height: 45px;

          img {
            width: 100%;
            border-radius: .2rem;
            overflow: hidden;
            //background: red;
            // height: 30px;
            // position: absolute;
            // top: 6px;
            // right: 20px;
            // transform: translateY(-10%); /* 垂直居中 */
          }
        }

        .btnBox {
          width: 100px;
          height: 45px;

          .commonBtn_bg {
            width: 90px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            border-radius: .3rem;
            overflow: hidden;
          }
          .commonBtn_bg:hover{
            //background: #09BA85;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
          }
        }
      }

      .el-input__inner {
        font-weight: 500;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 2px;
        background: #f1f1f1;
        border-color: #f1f1f1;
      }

      .phone-input {
        position: relative;

        .before-box {
          left: 0;
          position: absolute;
          // width:140px;
          border-right: 1px solid #ddd;
        }

        .el-input__prefix {
        }
      }
    }

    .el-button {
      width: 100%;
      height: 40px;
      border: 0;
      padding: 12px;
      font-size: 16px;
      margin-top: 30px;
    }

    .forget-pwd {
      line-height: 20px;
      text-align: right;
      font-size: 14px;
      cursor: pointer;
      margin-top: 10px;
    }

    .login-tip {
      font-size: 14px;
      margin-top: 30px;
      text-align: center;

      span {
        &:nth-child(2) {
          margin-left: 8px;
          cursor: pointer;
        }
      }
      .active-text {
        color: #09BA85;
      }
    }

    .verify-code-wrap {
      .codeInput {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
      }

      .el-input__suffix {
        display: flex;
        align-items: center;
        right: 12px !important;
      }

      .small-btn {
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}



$height: 65px;
.login-view{
  display: flex;
  flex-direction: column;
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
  background: #fff;
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
