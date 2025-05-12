<template>
  <div class="fit-background-di setting-google-box">
    <div class="account-container">
      <div class="account-wrapper">
        <div class="edit-wrapper">
          <div class="fit-background edit-title">
            <span
              class="fit-tc-tertiary active-text back"
              @click="$router.push({ path: '/account/center/security' })"
            >
              <i class="el-icon-back"></i>
              {{ currCoinLangFun("text_fhaqsz") }}
            </span>
            <h2 class="fit-tc-primary">
              {{
                userInfo.google_key == 1
                  ? currCoinLangFun("text_reset")
                  : currCoinLangFun("security_bind")
              }}{{ currCoinLangFun("security_ggyz", "all") }}
            </h2>
            <div class="fit-tc-primary warning-tips">
              <i class="el-icon-warning"></i>
              {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
            </div>
          </div>
          <div class="fit-background google-wrapper">
            <div class="google-top">
              <div class="fit-tc-primary first-box">
                <h4>
                  1、{{ currCoinLangFun("text_bdggyz") }}
                  <el-tooltip placement="bottom">
                    <div
                      slot="content"
                      style="width: 400px; font-size: 14px; padding: 10px"
                      class="fit-tc-primary"
                    >
                      <p style="font-weight: 600; padding-bottom: 8px">
                        {{ currCoinLangFun("google_smsggyz") }}
                      </p>

                      <p style="padding-bottom: 8px">
                        {{ currCoinLangFun("google_ggyzsm") }}
                      </p>

                      <p>{{ currCoinLangFun("google_xzqd") }}</p>
                    </div>
                    <i class="el-icon-info"> </i>
                  </el-tooltip>
                </h4>
                <ul class="fit-tc-tip google-list">
                  <li>
                    <div class="icon-span">1</div>
                    <div class="text">
                      {{ currCoinLangFun("google_step1") }}
                    </div>
                  </li>
                  <li>
                    <div class="icon-span">2</div>
                    <div class="text">
                      {{ currCoinLangFun("google_step2") }}
                    </div>
                  </li>
                  <li>
                    <div class="icon-span">3</div>
                    <div class="text">
                      {{ currCoinLangFun("google_step3") }}
                    </div>
                  </li>
                </ul>
                <div class="google-ewm">
                  <div
                    class="fit-tc-border-color qrcode-normal"
                    id="qrcode"
                    ref="qrcode"
                  ></div>
                </div>
                <div class="google-pwdKey">
                  <h4 class="fit-tc-tip">
                    {{ currCoinLangFun("google_sdsrmy") }}
                  </h4>
                  <div class="pwdKey-info">{{ secretData.secretKey }}</div>
                </div>
              </div>
            </div>
            <div class="google-bottom">
              <div class="second-box">
                <h4 class="fit-tc-primary">
                  2、{{ currCoinLangFun("text_sryzm") }}
                </h4>
                <p class="fit-tc-tip tip">
                  {{ currCoinLangFun("google_sryzqyzm") }}
                </p>
                <div class="input-area">
                  <el-input
                    v-model="verificationCode"
                    :placeholder="`${currCoinLangFun(
                      'text_sryzm',
                      'popup_tips'
                    )}`"
                    :maxlength="6"
                    onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                  ></el-input>
                </div>
                <div class="bindBtn">
                  <el-button
                    type="primary fit-tc-button"
                    size="medium"
                    :disabled="verificationCode.length != 6"
                    @click="confirmCode()"
                    >{{ currCoinLangFun("text_qrbd", "popup_tips") }}</el-button
                  >
                </div>
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
import {
  getGoogleVerification,
  googleVerificationBindingOrReset,
} from "@/api/user.js";
import QRCode from "qrcodejs2";

export default {
  data() {
    return {
      verificationCode: "",
      secretData: {
        qrCodeText: "",
        secretKey: "",
      },
    };
  },

  mounted() {
    this.getErCode();
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    getErCode() {
      this.$refs.qrcode.innerHTML = "";

      getGoogleVerification("0").then((res) => {
        this.secretData = res.data.data;
        let qrcode = new QRCode("qrcode", {
          width: 118,
          height: 118,
          text: this.secretData.qrCodeText,
          render: "canvas",
        });
      });
    },
    confirmCode() {
      googleVerificationBindingOrReset(this.verificationCode, "1")
        .then(async (res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("text_bdcg", "popup_tips"), //绑定成功
          });
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
    ...mapGetters(["userInfo", "language"]),
  },
};
</script>

<style lang="scss" scoped>
.setting-google-box {
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

  .google-wrapper {
    padding: 24px 0 !important;
    .google-top {
      width: 100%;
      position: relative;
      box-sizing: border-box;
      padding: 24px !important;
      &::after {
        content: "";
        width: auto;
        height: 1px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
      }
      .first-box {
        h4 {
          display: flex;
          align-items: center;
          font-size: 18px !important;
          padding-bottom: 24px !important;
          i {
            cursor: pointer;
            font-size: 16px !important;
            margin-left: 8px !important;
          }
        }

        .google-list {
          padding-right: 48px !important;
          li {
            display: flex;
            align-items: flex-start;
            padding-bottom: 8px;
            .icon-span {
              margin-top: 4px;
              display: block;
              width: 12px;
              height: 12px;
              line-height: 12px;
              border-radius: 50%;
              margin-right: 16px;
              text-align: center;
              border: 1px solid;
              font-size: 10px;
            }

            .text {
              flex: 1;
              line-height: 20px;
              font-size: 14px !important;
            }
          }
        }
        .google-ewm {
          margin-left: 32px !important;
          margin-bottom: 24px !important;
          padding-top: 16px !important;
          .qrcode-normal {
            width: 152px;
            height: 152px;
            padding: 16px;
            display: inline-flex;
            border-radius: 4px;
            border: 1px solid;
            background-color: #fff;
            box-sizing: border-box;
          }
        }
        .google-pwdKey {
          padding-left: 32px !important;
          h4 {
            line-height: 20px;
            font-size: 14px !important;
            padding-bottom: 8px !important;
          }

          .pwdKey-info {
            display: inline-block;
            border-radius: 4px;
            padding: 8px 12px;
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
    .google-bottom {
      width: 100%;
      box-sizing: border-box;
      padding: 24px 24px 40px !important;
      .second-box {
        h4 {
          display: flex;
          align-items: center;
          font-size: 18px !important;
          padding-bottom: 24px !important;
        }

        .tip {
          line-height: 20px;
          font-size: 14px !important;
          margin-left: 32px !important;
        }

        .input-area {
          width: 364px;
          padding: 34px 0;
          margin-left: 32px !important;

          input {
            height: 46px;
          }
        }

        .bindBtn {
          margin-left: 32px !important;

          button {
            width: 364px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.theme-night {
  .setting-google-box {
    .warning-tips {
      i {
        color: #ffa033;
      }
    }
    .google-wrapper {
      .google-top {
        &::after {
          background-color: #262d38;
        }
      }
    }

    .google-pwdKey {
      .pwdKey-info {
        background-color: #151d29;
      }
    }
  }
}
.theme-daytime {
  .setting-google-box {
    .warning-tips {
      i {
        color: #e06100;
      }
    }

    .google-wrapper {
      .google-top {
        &::after {
          background-color: #eff0f2;
        }
      }
    }

    .google-pwdKey {
      .pwdKey-info {
        background-color: #f5f6fa;
      }
    }
  }
}
</style>