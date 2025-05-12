<template>
  <div class="fit-background-di anti-code-box">
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
                                userInfo.anti_code
                                ? currCoinLangFun("text_xg", "all")
                                : currCoinLangFun("setup", "all")
                                }}
                {{ currCoinLangFun("security_fdym") }}
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
                  <el-form-item>
                    <div slot="label">
                      {{ currCoinLangFun("anti_jfdym") }}
                      <span class="lineCode-box">{{ userInfo.anti_code }}</span>
                    </div>
                  </el-form-item>
                  <el-form-item prop="antiCode">
                    <div slot="label">
                      {{ currCoinLangFun("anti_xfdym") }}
                      <div style="margin-top: -20px">
                        <span class="fit-tc-tip" style="font-size: 12px">{{
                                                  currCoinLangFun("anti_szgz")
                                                  }}</span>
                      </div>
                    </div>
                    <el-input v-model="ruleForm.antiCode" :clearable="false"></el-input>
                  </el-form-item>
                  <el-form-item>
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
                          <el-button type="primary fit-tc-button" size="medium" :disabled="
                                                        verificationCode.length != 6 && !isValidatePass
                                                      " @click="submitForm()">
                            {{
                                                        currCoinLangFun("text_qr", "popup_tips")
                                                        }}</el-button>
                        </div>
                      </div>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { sendPhoneSmsApi, setAntiCode } from "@/api/user.js";
export default {
  data() {
    let validateAntiCode = (rule, value, callback) => {
      if (!/^[0-9A-Za-z\\u4e00-\\u9fa5]{4,20}$/.test(value)) {
        callback(new Error(this.currCoinLangFun("anti_srzqdfdym"))); //请输入正确的防钓鱼码
      } else {
        callback();
      }
    };

    return {
      verifyTab: "1", //验证码tabs
      ruleForm: {
        antiCode: "",
      },
      googleCode: "", //谷歌验证码
      phoneCode: "", //手机验证码
      verificationCode: "", //验证码--首次绑定时
      rules: {
        antiCode: [{ validator: validateAntiCode, trigger: "change" }],
      },
      sendCodeContent: {
        typeText: this.currCoinLangFun("text_phone", "all"), //手机
        account: "",
        accountType: "1",
      },
      sendingCode: false, //正在发送验证码状态
      sendCodeBtnText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
    };
  },
  created() {
    if (this.userInfo.google_key) {
      this.verifyTab = "1";
    } else {
      this.verifyTab = "2";
    }
    if (this.userInfo.phone) {
      this.sendCodeContent = {
        typeText: this.currCoinLangFun("text_phone", "all"), //手机
        accountType: 1,
        account: this.userInfo.phone,
        ellipsis_account: this.replacePhone,
      };
    }
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          let params = {
            ...this.ruleForm,
          };

          if (this.verifyTab == "1") {
            params.googleCode = this.verificationCode;
          } else if (this.verifyTab == "2") {
            params.phoneCode = this.verificationCode;
          }

          setAntiCode(params).then(async () => {
            if (this.userInfo.anti_code) {
              this.$message({
                type: "success",
                message: this.currCoinLangFun("anti_fdymszcg", "center"),
              }); //防钓鱼码修改成功
            } else {
              this.$message({
                type: "success",
                message: this.currCoinLangFun("anti_fdymszcg", "center"),
              }); //防钓鱼码设置成功
            }

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
        });
      };

      dataRes()
        .then(() => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("text_dxfsscgts", "popup_tips"), //发送成功,请留意您的短信
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
  },
  computed: {
    ...mapGetters(["userInfo"]),
    isValidatePass() {
      if (/^[0-9A-Za-z\\u4e00-\\u9fa5]{4,20}$/.test(this.ruleForm.antiCode)) {
        return true;
      } else {
        return false;
      }
    },
    replacePhone() {
      if (this.userInfo.phone) {
        let text = this.userInfo.phone;
        return text.slice(0, 3) + "***" + text.slice(-4);
      } else {
        return "";
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

          .lineCode-box {
            display: block;
            line-height: 24px;
            height: 24px;
            font-size: 16px;
            font-weight: 400;
            margin-left: 8px !important;
          }
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

.anti-code-box {
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

  .anti-code-box {
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

  .anti-code-box {
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