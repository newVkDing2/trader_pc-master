<template>
  <div class="fit-background-di setting-email-box">
    <div class="account-container">
      <div class="account-wrapper">
        <div class="edit-wrapper">
          <div class="fit-background edit-title">
            <span class="fit-tc-tertiary active-text back" @click="$router.push('/account/center/security')">
              <i class="el-icon-back"></i>
              {{ currCoinLangFun("text_fhaqsz") }}
            </span>
            <h2 class="fit-tc-primary">{{ currCoinLangFun("text_bddxyz") }}</h2>
            <div class="fit-tc-primary warning-tips">
              <i class="el-icon-warning"></i>
              {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
            </div>
          </div>
          <div class="fit-background phone-wrapper">
            <div class="phone-form">
              <el-form ref="form" :rules="rules" :model="formData" label-position="top" label-width="80px"
                class="phone-form-container">
                <el-form-item :label="`${currCoinLangFun('register_email', 'home_index')}`" prop="account">
                  <el-input v-model="formData.account" class="phone-input"
                    :placeholder="`${currCoinLangFun('text_bdyxts')}`">
                    <div slot="suffix" class="after-box">
                      <el-button type="primary" :disabled="
                                                !/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
                                                  formData.account
                                                )
                                              " @click="sendSms()" :loading="sending">{{ sendingText }}</el-button>
                    </div>
                  </el-input>
                </el-form-item>
                <el-form-item :label="`${currCoinLangFun('text_yzm', 'all')}`" prop="verificationCode">
                  <el-input v-model="formData.verificationCode" :placeholder="`${currCoinLangFun(
                                        'text_sryzm',
                                        'popup_tips'
                                      )}`" :maxlength="6"
                    onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
                </el-form-item>
                <el-button type="primary" :disabled="formData.verificationCode.length != 6" @click="confirmBind()"
                  :loading="binding" :class="{
                                      'fit-tc-tertiary': formData.verificationCode.length != 6,
                                    }">{{ currCoinLangFun("text_qrbd", "popup_tips") }}</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { sendEmailApi, accountVerificationBinding } from "@/api/user.js";
export default {
  data() {
    return {
      isPhoneCode: false,
      binding: false, //正在绑定
      sending: false, //正在发送验证码
      sendingText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
      formData: {
        account: "",
        verificationCode: "",
      },
      rules: {
        account: [
          {
            required: true,
            message: this.currCoinLangFun("register_phone_tip", "home_index"), //请输入手机号
            trigger: "blur",
          },
          {
            required: true,
            message: this.currCoinLangFun("register_phone_tip", "home_index"), //请输入手机号
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    sendSms() {
      this.sending = true;
      this.sendingText = this.currCoinLangFun("text_sending", "popup_tips"); //正在发送
      sendEmailApi({
        email: this.formData.account,
        type: 4,
      })
        .then((res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("text_fsyjcg", "popup_tips"), //发送成功,请留意您的邮箱
          });
          let seconds = 60;
          this.sendingText =
            seconds + `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
          let timeout = setInterval(() => {
            if (seconds == 1) {
              clearInterval(timeout);
              this.sending = false;
              this.sendingText = this.currCoinLangFun(
                "text_resend",
                "popup_tips"
              ); //重新发送
            } else {
              seconds--;
              this.sendingText =
                seconds +
                `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
            }
          }, 1000);
        })
        .catch((err) => {
          // this.$message({ type: "error", message: "网络异常" });
          this.sendingText = this.currCoinLangFun("text_resend", "popup_tips"); //重新发送
          this.sending = false;
        });
    },
    confirmBind() {
      accountVerificationBinding({
        checkType: 2,
        accountType: 2,
        ...this.formData,
      })
        .then(async (res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("text_bdcg", "popup_tips"),
          }); //绑定成功！
          this.$router.push("/account/center/security");

          let userInfo = await this.getUserInfoData();
          this.SET_USER_INFO({
            ...this.userInfo,
            ...userInfo,
          });
        })
        .catch(() => {
          this.formData.verificationCode = "";
        });
    },
  },
  computed: {
    ...mapGetters(["language", "userInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.setting-email-box {
  .account-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 0 48px;
    position: relative;
    box-sizing: border-box;
    min-height: calc(100vh - 517px);
  }

  .edit-wrapper {
    width: 1200px;
    min-height: 640px;
    margin: 0 auto;
    overflow: hidden;

    .edit-title {
      padding-left: 24px !important;
      padding-right: 24px !important;
      padding-top: 24px !important;
      padding-bottom: 24px !important;
      margin-bottom: 24px !important;

      .back {
        line-height: 20px;
        display: block;
        font-size: 14px;
        margin-bottom: 16px;
        cursor: pointer;
      }

      h2 {
        line-height: 32px;
        font-size: 24px;
        font-weight: 400;
      }

      .warning-tips {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        background: rgba(255, 160, 51, 0.08);
        border-radius: 8px;
        line-height: 20px;
        font-size: 14px;
        margin-top: 16px;

        i {
          font-size: 16px !important;
          margin-right: 4px !important;
        }
      }
    }
  }

  .phone-wrapper {
    padding-top: 40px !important;
    padding-bottom: 40px !important;

    .phone-form {
      display: flex;
      align-items: center;
      justify-content: center;

      .phone-form-container {
        width: 400px;

        ::v-deep.el-form-item {
          position: relative;
          margin-bottom: 28px !important;

          .phone-input {
            .el-input__suffix {
              .after-box {
                button {
                  background-color: transparent !important;
                  border: 0;
                  position: relative;

                  &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    margin-top: -8px;
                    width: 1px;
                    height: 16px;
                  }
                }
              }
            }
          }

          label.el-form-item__label {
            line-height: 18px;
            padding: 0;
            margin-bottom: 8px;
            float: none;
            display: inline-block;
            text-align: left;
            font-size: 14px;
            vertical-align: middle;
            box-sizing: border-box;
          }
        }

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.theme-night {
  .setting-email-box {
    .warning-tips {
      i {
        color: #ffa033;
      }
    }

    ::v-deep .phone-form-container {
      .el-form-item {
        .el-form-item__label::before {
          color: #dde3e6;
        }
      }

      .phone-input {
        .phone-select-box {
          ::after {
            background-color: #3f4a5c;
          }
        }

        .el-input__suffix {
          .after-box {
            button {
              color: #0020FD !important;

              &.el-button.is-disabled {
                opacity: 0.6;
              }

              &::before {
                background-color: #262d38;
              }
            }
          }
        }
      }
    }
  }
}

.theme-daytime {
  .setting-email-box {
    .warning-tips {
      i {
        color: #e06100;
      }
    }

    ::v-deep .phone-form-container {
      .el-form-item {
        .el-form-item__label::before {
          color: #10171f;
        }
      }

      .phone-input {
        .phone-select-box {
          ::after {
            background-color: #ced3e0;
          }
        }

        .el-input__suffix {
          .after-box {
            button {
              color: #2954cc !important;

              &.el-button.is-disabled {
                opacity: 0.6;
              }

              &::before {
                background-color: #eff0f2;
              }
            }
          }
        }
      }
    }
  }
}
</style>