<template>
  <div class="fit-background-di trade-pwd-box">
    <div class="account-container">
      <div class="account-wrapper">
        <div class="pagebg">
          <div class="edit-container">
            <div class="fit-background edit-title">
              <a href="javascript:void(0);" @click="
                                $router.push({
                                  path: `/account/center/security`,
                                })
                              " class="fit-tc-tertiary active-text">
                <i class="el-icon-back"> </i>
                {{ currCoinLangFun("text_fhaqsz") }}
              </a>
              <h2>
                {{
                                userInfo.pay_pwd
                                ? currCoinLangFun("text_xg", "all")
                                : currCoinLangFun("setup", "all")
                                }}{{ currCoinLangFun("security_zjmm") }}
              </h2>
              <div class="fit-tc-primary warning-tips">
                <i class="el-icon-warning"></i>
                {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
              </div>
            </div>
            <div class="fit-background phone-wrapper">
              <div class="phone-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                  class="pwd-form-container el-form--label-top">
                  <el-form-item prop="tradePwd">
                    <div slot="label">
                      {{ currCoinLangFun("security_zjmm") }}
                      <div style="margin-top: -20px">
                        <span class="fit-tc-tip" style="font-size: 12px">{{
                                                  currCoinLangFun("text_zjmm_rule")
                                                  }}</span>
                      </div>
                    </div>
                    <el-input type="password" v-model="ruleForm.tradePwd" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item :label="`${currCoinLangFun('text_qrmm')}`" prop="tradePwd1">
                    <el-input type="password" v-model="ruleForm.tradePwd1" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item prop="loginPwd" v-if="!userInfo.pay_pwd">
                    <div slot="label" style="display: flex; justify-content: space-between">
                      <span>{{ currCoinLangFun("security_dlmm") }}</span>
                      <span class="fit-tc-tertiary active-text" style="font-size: 12px; cursor: pointer"
                        @click="$router.push({ path: '/user/reset' })">{{ currCoinLangFun("text_wjmm") }}</span>
                    </div>
                    <el-input type="password" v-model="ruleForm.loginPwd" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item v-if="!userInfo.pay_pwd">
                    <div class="verify-code-first-container">
                      <div class="verify-code-wrapper">
                        <div class="verify-code-tabs" v-if="userInfo.phone && userInfo.google_key">
                          <div>
                            <span class="fit-tc-primary" :class="{ 'active-text': verifyTab == 1 }"
                              @click="(verifyTab = 1), (verificationCode = '')">{{
                                                            currCoinLangFun("security_ggyz", "all")
                                                            }}</span>
                          </div>
                          <div>
                            <span class="fit-tc-primary" :class="{ 'active-text': verifyTab == 2 }"
                              @click="(verifyTab = 2), (verificationCode = '')">{{
                                                            currCoinLangFun("phone_verification", "all")
                                                            }}</span>
                          </div>
                        </div>
                        <div class="verify-code-title-lr">
                          <dd>
                            <div class="fit-tc-primary title-text">
                              <span v-if="verifyTab == 1">{{
                                                              currCoinLangFun("text_ggyzmtx", "popup_tips")
                                                              }}</span>
                              <span v-if="verifyTab == 2">{{ currCoinLangFun("text_qsrbd", "popup_tips")
                                                              }}{{ sendCodeContent.typeText }}
                                <span style="font-weight: bold">{{
                                                                  sendCodeContent.ellipsis_account
                                                                  }}</span>
                                {{
                                                                currCoinLangFun("text_sdyzm", "popup_tips")
                                                                }}</span>
                            </div>
                            <div class="yz-container" v-if="verifyTab == 2">
                              <el-button type="primary fit-tc-button" size="mini" :loading="sendingCode"
                                @click="sendVerificationCode()">{{ sendCodeBtnText }}</el-button>
                            </div>
                          </dd>
                        </div>
                        <div>
                          <el-input v-model="verificationCode" :placeholder="`${currCoinLangFun(
                                                        'text_sryzm',
                                                        'popup_tips'
                                                      )}`" :maxlength="6"
                            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
                          <!-- <p class="error-tips">验证码为6位</p> -->
                        </div>
                        <div class="btn-box">
                          <el-button type="primary fit-tc-button" size="medium" :disabled="verificationCode.length != 6"
                            @click="submitForm('ruleForm')">{{
                                                        currCoinLangFun("text_qr", "popup_tips")
                                                        }}</el-button>
                        </div>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item v-if="userInfo.pay_pwd">
                    <el-button type="primary" class="submitBtn" @click="securityDialogFun()"
                      :disabled="!isValidatePass">{{
                                            currCoinLangFun("text_qrxg", "popup_tips")
                                            }}</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 安全验证 -->
    <el-dialog width="480px" :title="`${currCoinLangFun('text_aqyz', 'popup_tips')}`" append-to-body modal-append-to-body
      :visible.sync="securityDialog" class="messageVaildate">
      <div class="verify-code-container">
        <div class="verify-code-wrapper">
          <div class="fit-tc-primary phone-dialog-safe-tip">
            <i class="el-icon-warning"></i>
            {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
          </div>
          <div class="pwdFrom">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
              class="pwd-form-container el-form--label-top">
              <el-form-item prop="loginPwd">
                <div slot="label" style="display: flex; justify-content: space-between">
                  <span>{{ currCoinLangFun("security_dlmm") }}</span>
                  <span class="fit-tc-tertiary active-text" style="font-size: 12px; cursor: pointer"
                    @click="$router.push({ path: '/user/reset' })">{{ currCoinLangFun("text_wjmm") }}</span>
                </div>
                <el-input type="password" v-model="ruleForm.loginPwd" :clearable="false" show-password></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="verify-code-wrap">
            <div class="fit-tc-primary verify-title">
              <span>
                {{ currCoinLangFun("text_qsrbdyxzh") }}
                <span style="font-weight: bold">{{ replaceEmail }}</span>
                {{ currCoinLangFun("text_sdyzm", "popup_tips") }}</span>
            </div>
            <div class="yz-container">
              <el-button type="primary fit-tc-button" size="mini" :loading="sendingCode" @click="sendEmailCode()">{{
                              sendCodeBtnText }}</el-button>
            </div>
            <div class="input-box">
              <el-input v-model="emailCode" :placeholder="`${currCoinLangFun('text_qsryxyzm')}`" :maxlength="6"
                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
            </div>
          </div>
          <div class="verify-code-wrap" v-if="userInfo.google_key">
            <div class="fit-tc-primary verify-title">
              <span>{{ currCoinLangFun("text_ggyzmtx", "popup_tips") }}</span>
            </div>
            <div class="input-box">
              <el-input v-model="totpCode" :placeholder="`${currCoinLangFun('text_qsrggyzm')}`" :maxlength="6"
                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
            </div>
          </div>
          <div class="btn-box">
            <el-button type="primary fit-tc-button" size="medium" :disabled="!isSafeValidatePass"
              @click="changeTradePwd('ruleForm')">{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 提醒绑定邮箱和谷歌验证 -->
    <el-dialog width="420px" append-to-body modal-append-to-body :visible.sync="bindwarnTipDialog">
      <div class="disabled-message-box">
        <div class="warning-tips">
          <div class="el-icon-warning"></div>
          <span class="fit-tc-primary">
            {{ currCoinLangFun("text_czzjmmtj") }}
          </span>
        </div>
        <div class="btn-box">
          <el-button type="primary fit-tc-button" size="medium" class="fit-tc-button"
            @click="bindwarnTipDialog = false">{{ currCoinLangFun("text_know") }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { validatePassword } from "@/util/validate.js";
import { sendEmailApi, sendPhoneSmsApi, setTradePwd } from "@/api/user.js";
export default {
  data() {
    let validatetradePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("text_qsrzjmm"))); //请输入资金密码
      } else {
        callback();
      }
    };
    let validatetradePwd2 = (rule, value, callback) => {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else if (
        this.ruleForm.tradePwd1 != "" &&
        value !== this.ruleForm.tradePwd1
      ) {
        callback(new Error(this.currCoinLangFun("tip_mmbyz"))); //两次密码不一致
      } else {
        callback();
      }
    };
    let validateConfirmPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("tip_qsrzqmm"))); //请输入资金密码
      } else {
        callback();
      }
    };
    let validateConfirmPwd2 = (rule, value, callback) => {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else if (
        this.ruleForm.tradePwd != "" &&
        value !== this.ruleForm.tradePwd
      ) {
        callback(new Error(this.currCoinLangFun("tip_mmbyz"))); //两次密码不一致
      } else {
        callback();
      }
    };
    let validateLogPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("text_qsrdlmm"))); //请输入登录密码
      } else {
        callback();
      }
    };
    let validateLogPwd2 = (rule, value, callback) => {
      if (!validatePassword(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else {
        callback();
      }
    };
    return {
      verifyTab: "1", //验证码tabs
      ruleForm: {
        loginPwd: "",
        tradePwd: "",
        tradePwd1: "",
      },
      securityDialog: false, //安全验证弹框
      emailCode: "", //邮箱验证码
      totpCode: "", //谷歌验证码
      verificationCode: "", //验证码--首次绑定时
      rules: {
        tradePwd: [
          { validator: validatetradePwd, trigger: "blur" },
          { validator: validatetradePwd2, trigger: "change" },
        ],
        tradePwd1: [
          { validator: validateConfirmPwd, trigger: "blur" },
          { validator: validateConfirmPwd2, trigger: "change" },
        ],
        loginPwd: [
          { validator: validateLogPwd, trigger: "blur" },
          { validator: validateLogPwd2, trigger: "change" },
        ],
      },
      sendCodeContent: {
        typeText: this.currCoinLangFun("register_email", "home_index"),
        account: "",
        accountType: "1",
      },
      sendingCode: false, //正在发送验证码
      sendCodeBtnText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
      bindwarnTipDialog: false, //提醒绑定邮箱
    };
  },
  created() {
    if (!this.userInfo.google_key) {
      this.verifyTab = "1";
    } else if (this.userInfo.email || this.userInfo.phone) {
      this.verifyTab = "2";
    }
    if (this.userInfo.phone) {
      this.sendCodeContent = {
        typeText: this.currCoinLangFun("text_phone", "home_index"), //手机
        accountType: 1,
        account: this.userInfo.phone,
        ellipsis_account: this.replacePhone,
      };
    } else {
      this.sendCodeContent = {
        typeText: this.currCoinLangFun("register_email", "home_index"), //邮箱
        accountType: 2,
        account: this.userInfo.email,
        ellipsis_account: this.replaceEmail,
      };
    }
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            ...this.ruleForm,
          };
          if (this.verifyTab == "1") {
            params.totpCode = this.verificationCode;
          } else if (this.verifyTab == "2") {
            if (this.userInfo.phone) {
              params.phoneCode = this.verificationCode;
            } else if (this.userInfo.email) {
              params.emailCode = this.verificationCode;
            }
          }

          setTradePwd(params).then(async () => {
            this.$message({
              type: "success",
              message: this.currCoinLangFun("tip_success_szzjmm", "popup_tips"), //设置资金密码成功
            });

            let userInfo = await this.getUserInfoData();
            this.SET_USER_INFO({
              ...this.userInfo,
              ...userInfo,
            });
            this.$router.push({
              path: `/account/center/security`,
            });
          });
        } else {
          return false;
        }
      });
    },
    async sendVerificationCode() {
      this.sendCodeBtnText = this.currCoinLangFun("text_sending", "popup_tips"); //正在发送

      let dataRes = () => {
        return new Promise((resolve, reject) => {
          if (this.userInfo.phone) {
            sendPhoneSmsApi({
              type: 4,
              phone: this.sendCodeContent.account,
            })
              .then((res) => {
                resolve(res);
              })
              .catch(() => {
                reject();
              });
          } else {
            sendEmailApi({
              type: 4,
              email: this.sendCodeContent.account,
            })
              .then((res) => {
                resolve(res);
              })
              .catch(() => {
                reject();
              });
          }
        });
      };

      dataRes()
        .then(() => {
          this.$message({
            type: "success",
            message: `${this.currCoinLangFun(
              "tip_success_send",
              "popup_tips"
            )},${this.currCoinLangFun("tip_qlynd", "popup_tips")}${
              this.userInfo.phone
                ? this.currCoinLangFun("text_sms", "popup_tips")
                : this.currCoinLangFun("register_email", "home_index")
            }`, //发送成功，请留意您的短信/邮箱
          });
          let seconds = 60;
          this.sendCodeBtnText =
            seconds + `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
          this.sendingCode = true;
          let timeout = setInterval(() => {
            if (seconds == 1) {
              clearInterval(timeout);
              this.sendingCode = false;
              this.sendCodeBtnText = this.currCoinLangFun(
                "text_resend",
                "popup_tips"
              ); //重新发送
            } else {
              seconds--;
              this.sendCodeBtnText =
                seconds +
                `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
            }
          }, 1000);
        })
        .catch(() => {
          this.sendCodeBtnText = this.currCoinLangFun(
            "text_resend",
            "popup_tips"
          ); //重新发送
          this.sendingCode = false;
        });
    },
    sendEmailCode() {
      sendEmailApi({
        type: 4,
        email: this.userInfo.email,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("tip_fsyxcg", "popup_tips"), //发送成功请留意你的邮箱
          });
          let seconds = 60;
          this.sendCodeBtnText =
            seconds + `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
          this.sendingCode = true;
          let timeout = setInterval(() => {
            if (seconds == 1) {
              clearInterval(timeout);
              this.sendingCode = false;
              this.sendCodeBtnText = this.currCoinLangFun(
                "text_resend",
                "popup_tips"
              );
            } else {
              seconds--;
              this.sendCodeBtnText =
                seconds +
                `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
            }
          }, 1000);
        })
        .catch(() => {});
    },
    changeTradePwd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            ...this.ruleForm,
            emailCode: this.emailCode,
          };
          if (this.userInfo.google_key) {
            params.totpCode = this.totpCode;
          }
          setTradePwd(params).then(async () => {
            this.$message({
              type: "success",
              message: this.currCoinLangFun("tip_xgzjmmcg", "popup_tips"),
            });

            let userInfo = await this.getUserInfoData();
            this.SET_USER_INFO({
              ...this.userInfo,
              ...userInfo,
            });
            this.$router.push({
              path: `/account/center/security`,
            });
          });
        } else {
          return false;
        }
      });
    },
    securityDialogFun() {
      if (this.userInfo.email && this.userInfo.google_key) {
        //需要绑定邮箱才可以修改资金密码
        this.emailCode = "";
        this.totpCode = "";
        this.ruleForm.loginPwd = "";
        this.securityDialog = true;
      } else {
        //提醒绑定邮箱和谷歌验证
        this.bindwarnTipDialog = true;
      }
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    isValidatePass() {
      if (
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(
          this.ruleForm.tradePwd
        ) &&
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(
          this.ruleForm.tradePwd1
        ) &&
        this.ruleForm.tradePwd == this.ruleForm.tradePwd1
      ) {
        return true;
      } else {
        return false;
      }
    },
    replacePhone() {
      if (this.userInfo.email) {
        let text = this.userInfo.phone;
        return (
          `+${this.userInfo.area_code}` +
          text.slice(0, 3) +
          "***" +
          text.slice(-4)
        );
      } else {
        return "";
      }
    },
    replaceEmail() {
      if (this.userInfo.email) {
        let text = this.userInfo.email;
        return text.slice(0, 2) + "***" + text.slice(-2);
      } else {
        return "";
      }
    },
    isSafeValidatePass() {
      if (
        validatePassword(this.ruleForm.loginPwd) &&
        this.emailCode.length == 6 &&
        this.totpCode.length == 6
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.messageVaildate {
  .verify-code-container {
    margin: 0 -8px;

    .verify-code-wrapper {
      position: relative;

      ::v-deep.el-input {

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }

        ::v-deep.el-input__validateIcon {
          display: none;
        }
      }

      .pwd-form-container {
        width: 400px;

        ::v-deep.el-form-item__label {
          width: 100%;
          padding: 0 !important;
        }

        ::v-deep .el-input__validateIcon {
          display: none;
        }

        .submitBtn {
          width: 100%;

          &.is-disabled {
            border: 0;
            opacity: 1;
          }
        }
      }

      .phone-dialog-safe-tip {
        padding: 8px 16px;
        background: rgba(255, 160, 51, 0.08);
        border-radius: 8px;
        line-height: 20px;
        font-size: 14px;
        margin: 0 -16px 20px;
      }

      .pwdFrom {
        padding-bottom: 18px;
      }

      .verify-code-wrap {
        padding-bottom: 40px;

        .yz-container {
          padding-top: 10px;
        }

        .input-box {
          padding-top: 36px;
        }
      }

      .btn-box {
        button {
          display: block;
          width: 100%;
          height: 40px;
          margin-top: 24px;
          font-size: 16px;
          box-shadow: 0 1px 2px rgba(56, 68, 108, 0.04);
          border-radius: 4px;
        }
      }
    }
  }
}

.disabled-message-box {
  .warning-tips {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    color: #dde3e6;
    font-weight: 600;

    div {
      display: block;
      font-size: 64px;
      margin-bottom: 16px;

      &::before {}
    }
  }

  .btn-box {
    padding: 16px 20px 0px !important;
    margin-top: 50px !important;

    button {
      width: 100%;
      height: 42px;
    }
  }
}

.trade-pwd-box {
  .account-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 0 48px;
    position: relative;
    box-sizing: border-box;
    min-height: calc(100vh - 517px);

    .account-wrapper {
      .edit-title {
        padding-left: 24px !important;
        padding-right: 24px !important;
        padding-top: 24px !important;
        padding-bottom: 24px !important;
        margin-bottom: 24px !important;

        a {
          line-height: 20px;
          display: block;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .warning-tips {
          padding: 8px 16px;
          background: rgba(255, 160, 51, 0.08);
          border-radius: 8px;
          line-height: 20px;
          font-size: 14px;
          margin-top: 16px;
        }
      }

      .phone-wrapper {
        padding-top: 40px !important;
        padding-bottom: 40px !important;

        .phone-form {
          display: flex;
          align-items: center;
          justify-content: center;

          .pwd-form-container {
            width: 400px;

            ::v-deep.el-form-item__label {
              width: 100%;
              padding: 0 !important;
            }

            ::v-deep .el-input__validateIcon {
              display: none;
            }

            .submitBtn {
              width: 100%;

              &.is-disabled {
                border: 0;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .verify-code-first-container {
    margin: 0 -8px;

    .verify-code-wrapper {
      position: relative;

      .verify-code-tabs {
        display: flex;
        padding-bottom: 24px !important;

        div {
          flex: 1;
          text-align: center;

          span {
            cursor: pointer;
          }
        }
      }

      ::v-deep.el-input {

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      }

      .phone-dialog-safe-tip {
        padding: 8px 16px;
        background: rgba(255, 160, 51, 0.08);
        border-radius: 8px;
        line-height: 20px;
        font-size: 14px;
        margin: 0 -16px 20px;
      }

      .verify-code-title-lr {
        padding: 0;
        margin: 0 0 36px;

        dd {
          margin-right: 56px;
          margin-left: 0;
          width: auto;
          height: auto;

          .title-text {
            display: flex;
            align-items: center;
            line-height: 20px !important;
            font-size: 14px !important;
          }

          .yz-container {
            button {
              margin-top: 8px;
            }
          }
        }
      }

      .btn-box {
        button {
          display: block;
          width: 100%;
          height: 40px;
          margin-top: 24px;
          font-size: 16px;
          box-shadow: 0 1px 2px rgba(56, 68, 108, 0.04);
          border-radius: 4px;
        }
      }
    }
  }
}
</style>


<style lang="scss">
.theme-night {
  .messageVaildate {
    .verify-code-container {
      .verify-code-wrapper {
        .phone-dialog-safe-tip {
          i {
            color: #ffa033;
          }
        }
      }
    }
  }

  .disabled-message-box {
    .warning-tips {
      .el-icon-warning {
        color: #ffa033;
      }
    }
  }

  .trade-pwd-box {
    .warning-tips {
      i {
        color: #ffa033;
      }
    }

    .pwd-form-container {
      .submitBtn {
        &.is-disabled {
          color: #688199 !important;
          background-color: rgb(56, 66, 82);
        }
      }
    }

    .verify-code-first-container {
      .verify-code-wrapper {
        .phone-dialog-safe-tip {
          i {
            color: #ffa033;
          }
        }
      }
    }
  }
}

.theme-daytime {
  .messageVaildate {
    .verify-code-container {
      .verify-code-wrapper {
        .phone-dialog-safe-tip {
          i {
            color: #e06100;
          }
        }
      }
    }
  }

  .disabled-message-box {
    .warning-tips {
      .el-icon-warning {
        color: #e06100;
      }
    }
  }

  .trade-pwd-box {
    .warning-tips {
      i {
        color: #e06100;
      }
    }

    .pwd-form-container {
      .submitBtn {
        &.is-disabled {
          color: #a3b2c2 !important;
          background-color: rgba(131, 134, 143, 0.16);
        }
      }
    }

    .verify-code-first-container {
      .verify-code-wrapper {
        .phone-dialog-safe-tip {
          i {
            color: #ffa033;
          }
        }
      }
    }
  }
}
</style>