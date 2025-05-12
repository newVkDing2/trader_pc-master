<template>
  <div class="merchant-index" :style="{
        backgroundImage: `url(${
          bannerData[
            themeName == 'theme-night' ? 'config_img_night' : 'config_img_daytime'
          ]
        })`,
      }">
    <div class="index-box">
      <div class="index-title">{{ currCoinLangFun("merchant_title") }}</div>
      <div class="index-tip">{{ currCoinLangFun("merchant_condition") }}</div>
      <div class="index-err" v-if="userInfo.yy && userInfo.is_merchant == -1">
        <span style="font-weight: 600">
          {{ currCoinLangFun("yuanying_tips") }}：</span>
        {{ userInfo.yy }}
      </div>
      <div class="index-btn" v-if="userInfo.is_merchant != 2" :class="{ disabled: userInfo.is_merchant == 1 }"
        @click="applyMerchantFun">
        {{ btnText }}
      </div>
      <div class="index-btn" v-else @click="$router.push({ path: '/account/center/merchant' })">
        {{ currCoinLangFun("merchant_go_management") }}
      </div>
    </div>
    <el-dialog :close-on-click-modal="false" :title="currCoinLangFun('text_apply')" :visible.sync="formData.dialog"
      width="600px" custom-class="merchant-apply-dialog">
      <div class="merchant-apply-box fit-tc-primary">
        <div class="content-box">
          <el-form ref="form" :model="formData" label-width="140px">
            <el-form-item :rules="{
                            required: true,
                            message: currCoinLangFun('merchant_name_none'),
                            trigger: 'blur',
                          }" :label="`${currCoinLangFun('merchant_name')}：`">
              <el-input v-model="formData.name" maxlength="20"></el-input>
            </el-form-item>
            <el-form-item :rules="{
                            required: true,
                            message: currCoinLangFun('merchant_email_none'),
                            trigger: 'blur',
                          }" :label="`${currCoinLangFun('register_email', 'home_index')}：`">
              <el-input v-model="formData.email" :disabled="emailDisabled"></el-input>
            </el-form-item>
            <el-form-item :rules="{
                            required: true,
                            message: currCoinLangFun('merchant_phone_none'),
                            trigger: 'blur',
                          }" :label="`${currCoinLangFun('register_phone', 'home_index')}：`">
              <el-input v-model="formData.phone" :disabled="emailDisabled"></el-input>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('need_pay_deposit')}：`">
              <div class="money">
                <span class="fit-tc-fall">{{
                                  formData.margin | moneyFilter
                                  }}</span>
                {{ formData.coin }}
              </div>
              <div class="tip">
                <span>
                  {{ currCoinLangFun("wallet_account_amount") }}：{{
                                    Number(coinInfo.balance || 0) | moneyFilter
                                    }}
                  {{ formData.coin }}
                </span>
                <el-tooltip class="item" effect="dark" :content="currCoinLangFun('transfer', 'full')" placement="top">
                  <i class="fit-tc-primary el-icon-sort" style="transform: rotate(-90deg); font-size: 12px"
                    @click="isTradeFundsDialog = true"></i>
                </el-tooltip>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box">
          <el-button type="primary" :loading="formData.loading" @click="confirmPayFun" :disabled="btnDisabled">{{
                      currCoinLangFun("confirm_pay_deposit") }}</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 资金划转 -->
    <fund-transfer v-if="isTradeFundsDialog" :transferDialog="isTradeFundsDialog"
      :closeDialog="closeDialog.bind(this)"></fund-transfer>

    <!-- 验证码 -->
    <el-dialog width="480px" append-to-body modal-append-to-body :close-on-click-modal="false"
      :visible.sync="showSendCodeDialog" class="messageVaildate">
      <div class="verify-code-container">
        <div class="verify-code-wrapper">
          <div class="verify-code-tabs" v-if="
                        (userInfo.phone && userInfo.google_key) ||
                        (userInfo.email && userInfo.google_key)
                      ">
            <div>
              <span class="fit-tc-primary" :class="{ 'active-text': verifyTab == 1 }" @click="verifyTab = 1">{{
                              currCoinLangFun("security_ggyz", "all") }}</span>
            </div>
            <div>
              <span class="fit-tc-primary" :class="{ 'active-text': verifyTab == 2 }" @click="verifyTab = 2">
                {{
                                userInfo.phone
                                ? currCoinLangFun("phone_verification", "all")
                                : currCoinLangFun("youxiangyanzheng_text", "center")
                                }}</span>
            </div>
          </div>
          <div class="fit-tc-primary phone-dialog-safe-tip">
            <i class="el-icon-warning"></i>
            {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
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
                  {{ currCoinLangFun("text_sdyzm", "popup_tips") }}</span>
              </div>
              <div class="yz-container" v-if="verifyTab == 2">
                <el-button type="primary fit-tc-button" size="mini" :loading="sendingCode"
                  @click="sendVerificationCode()">{{ sendCodeBtnText }}</el-button>
              </div>
            </dd>
          </div>
          <div class="verify-code-wrap">
            <el-input v-model="verificationCode" :placeholder="`${currCoinLangFun('text_sryzm', 'popup_tips')}`"
              :maxlength="6" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
            <!-- <p class="error-tips">验证码为6位</p> -->
          </div>
          <div class="btn-box">
            <el-button type="primary fit-tc-button" size="medium" :disabled="verificationCode.length != 6"
              :loading="isConfirmCode" @click="confirmCode()">{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
import {
  accountVerificationBinding,
  sendEmailApi,
  sendPhoneSmsApi,
  googleVerificationBindingOrReset,
  getCurrencyAccount,
} from "@/api/user.js";
import { getDataApi } from "@/api/system";
import { merchantBusinessApi } from "@/api/merchant";
import {
  verifyMoneyPassApi,
} from '@/api/otc.js'
import { toThousands } from "@/util/util";
import md5 from 'js-md5'
export default {
  components: {
    fundTransfer,
  },
  data() {
    return {
      counDowntTimer: null, //倒计时
      sendingCode: false, //正在发送验证码
      sendCodeBtnText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
      verificationCode: "",
      isConfirmCode: false,

      sendCodeContent: {
        typeText: this.currCoinLangFun("register_email", "home_index"),
        account: "",
        accountType: "1",
        routerAddress: "", //跳转地址
      },
      verifyTab: "1", //验证码弹框tabs
      showSendCodeDialog: false, //发送邮件弹框

      codeType: {
        codeType: 1, //1 手机 2 邮箱 3 谷歌
        code: "",
      },
      bannerData: {},
      emailDisabled: false,
      coinInfo: {
        balance: 0,
      },
      formData: {
        dialog: false,
        loading: false,
        name: "",
        email: "",
        phone: "",
        margin: 0,
        coin: "USDT",
      },
      isTradeFundsDialog: false,
    };
  },
  filters: {
    moneyFilter(value) {
      return toThousands(value);
    },
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin", "themeName"]),
    replacePhone() {
      let text = this.userInfo.phone;
      return text.slice(0, 3) + "***" + text.slice(-4);
    },
    replaceEmail() {
      let text = this.userInfo.email;
      return text.slice(0, 2) + "***" + text.slice(-2);
    },
    btnText() {
      if (this.userInfo.is_merchant == 1) {
        return this.currCoinLangFun("merchant_under_review");
      } else if (this.userInfo.is_merchant == -1) {
        return this.currCoinLangFun("reApplyBtn_text");
      } else {
        return this.currCoinLangFun("merchant_apply_now");
      }
    },
    btnDisabled() {
      if (
        this.formData.name != "" &&
        this.formData.email != "" &&
        this.formData.phone != "" &&
        this.formData.margin != 0 &&
        this.coinInfo.balance >= this.formData.margin
      ) {
        return false;
      }
      return true;
    },
  },
  async mounted() {
    if (this.userInfo.google_key) {
      this.verifyTab = "1";
    } else {
      this.verifyTab = "2";
    }
    getDataApi("1530464853989064705", {
      config_code: "merchant_banner_data",
    }).then((res) => {
      let data = res.data.data.records[0];
      if (data) {
        this.bannerData = data;
      }
    });
    //审核状态  this.userInfo.is_merchant  默认0 审核1 通过2
    if (this.isLogin) {
      this.getUserInfo();
    }
    await this.getMarginFun();
    this.getMoneyFun();
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    confirmCode() {
      this.isConfirmCode = true;
      this.codeType = {
        codeType: 1, //1 手机 2 邮箱 3 谷歌
        code: "",
      };

      //校验验证码
      if (this.verifyTab == "1") {
        console.log(this.sendCodeContent, "谷歌");
        this.codeType.codeType = 3;
        googleVerificationBindingOrReset(this.verificationCode)
          .then(async () => {
            this.isConfirmCode = false;
            this.codeType.code = this.verificationCode;

            this.verificationCode = "";
            // this.$router.push(this.sendCodeContent.routerAddress);
            this.emailDisabled = true;
            this.formData.dialog = true;
            this.showSendCodeDialog = false;
          })
          .catch(() => {
            this.isConfirmCode = false;
          });
      } else {
        console.log(this.sendCodeContent, "短信");
        this.codeType.codeType = this.sendCodeContent.accountType;

        accountVerificationBinding({
          account: this.sendCodeContent.account,
          checkType: 1,
          accountType: this.sendCodeContent.accountType,
          verificationCode: this.verificationCode,
        })
          .then(() => {
            this.isConfirmCode = false;
            this.codeType.code = this.verificationCode;
            this.verificationCode = "";
            clearInterval(this.counDowntTimer);
            this.sendingCode = false;
            this.sendCodeBtnText = this.currCoinLangFun("text_fsyzm", "all");
            // this.$router.push(this.sendCodeContent.routerAddress);
            this.emailDisabled = true;
            this.showSendCodeDialog = false;
            this.formData.dialog = true;
          })
          .catch(() => {
            this.isConfirmCode = false;
          });
      }
      return false;
    },
    async sendVerificationCode() {
      this.sendCodeBtnText = this.currCoinLangFun("text_sending", "popup_tips"); //正在发送
      let dataRes = () => {
        return new Promise((resolve, reject) => {
          if (this.userInfo.phone) {
            sendPhoneSmsApi({
              type: 3,
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
              type: 3,
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
            message: `${
              this.userInfo.phone
                ? this.currCoinLangFun("text_dxfsscgts", "popup_tips") //短信
                : this.currCoinLangFun("text_fsyjcg", "popup_tips") //邮箱
            }`,
          }); //短信&邮箱
          let seconds = 60;
          this.sendCodeBtnText =
            seconds + `s ${this.currCoinLangFun("text_resend", "popup_tips")}`; //重新发送
          this.sendingCode = true;
          this.counDowntTimer = setInterval(() => {
            if (seconds == 1) {
              clearInterval(this.counDowntTimer);
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
    currCoinLangFun(code, type = "merchant") {
      return this.coinLangFun(type, code);
    },
    closeDialog(type, isRefresh) {
      this.isTradeFundsDialog = false;
      if (isRefresh) {
        this.getMoneyFun();
      }
    },
    //立即申请
    applyMerchantFun() {
      if (!this.isLogin) {
        this.$router.push({
          path: "/user/login",
        });
        return false;
      }
      if (
        (this.userInfo.is_merchant != 0 && this.userInfo.is_merchant != -1) ||
        this.formData.margin == 0
      ) {
        return false;
      }
      if (this.userInfo.real_name_status != "2") {
        this.$confirm(
          this.currCoinLangFun("no_real_name_authentication", "user"), //您还未实名认证,是否前往?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            this.$router.push({
              path: "/account/center/kyc",
            });
          })
          .catch(() => {});
        return false;
      }
      this.getMoneyFun();
      if (this.userInfo.email) {
        this.formData.name = "";
        this.formData.email = this.userInfo.email;
      } else {
        this.$confirm(
          this.currCoinLangFun("sqsjbxbdyx_sfqwbd_text", "merchant"), //申请商家必须绑定邮箱，是否前往绑定？?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            this.$router.push({
              path: "/account/center/security",
            });
          })
          .catch(() => {});
        return false;
      }

      if (this.userInfo.phone) {
        this.formData.name = "";
        this.formData.phone = this.userInfo.phone;
      } else {
        this.$confirm(
          this.currCoinLangFun("sqsjbxbdsj_sfqwbd_text", "merchant"), //申请商家必须绑定手机，是否前往绑定？?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            this.$router.push({
              path: "/account/center/security",
            });
          })
          .catch(() => {});
        return false;
      }

      //申请商家不需要验证码，需要验证码需注释此段代码
      this.emailDisabled = true;
      this.formData.dialog = true;
      //申请商家不需要验证码，需要验证码需注释此段代码==end

      //申请商家需要验证码
      // //手机号校验优先
      // if (this.userInfo.phone) {
      //   this.sendCodeContent = {
      //     typeText: this.currCoinLangFun("text_phone", "all"), //手机
      //     accountType: 1,
      //     account: this.userInfo.phone,
      //     ellipsis_account: this.replacePhone,
      //   };
      // } else {
      //   this.sendCodeContent = {
      //     typeText: this.currCoinLangFun("register_email", "home_index"), //邮箱
      //     accountType: 2,
      //     account: this.userInfo.email,
      //     ellipsis_account: this.replaceEmail,
      //   };
      // }
      // this.showSendCodeDialog = true;
    },
    //确认缴纳
    confirmPayFun() {
      this.formData.loading = true;
      let data = {
        status: "1",
        coin_cou: this.formData.margin,
        coin_symbol: this.formData.coin,
        email: this.formData.email,
        name: this.formData.name,
        // ...this.codeType,
      };
      this.merchantBusinessFun(data)
    },
    //缴纳保证金
    merchantBusinessFun(data){
      merchantBusinessApi(data).then((res) => {
          if (res.data.msg == 'verification') {
            //需要校验支付密码
            this.$DialogForm.show({
                title: this.currCoinLangFun('sfqrxd_tip_text', 'center'),//请输入资金密码
                width: '30%',
                menuPosition: 'right',
                option: {
                  submitText: this.currCoinLangFun('qrsq_text', 'merchant'),//确认申请
                  column: [
                    {
                      label:this.currCoinLangFun('security_zjmm', 'center'),//资金密码
                      type: 'password',
                      prop: 'tradePwd',
                      showPassword: true,
                      span: 24,
                    },
                  ],
                },
                callback: (res) => {
                  let zjmmData = this.deepClone(res.data)
                  zjmmData.tradePwd = md5(zjmmData.tradePwd)
                  verifyMoneyPassApi(zjmmData)
                    .then(() => {
                      this.merchantBusinessFun(data)
                      res.done()
                      res.close()
                    })
                    .catch(() => {
                      res.done()
                    })
                },
              })
              return false
          }
          this.getUserInfo();
          this.$message({
            type: "success",
            message: this.currCoinLangFun("pay_deposit_success"), //缴纳成功
          });
          this.formData.loading = false;
          this.formData.dialog = false;
        })
        .catch(() => {
          this.formData.loading = false;
        });
    },
    //获取钱包账户金额
    getMoneyFun() {
      if (!this.isLogin) {
        return false;
      }
      getCurrencyAccount({
        type: "1",
      }).then((res) => {
        let data = res.data.data;
        data.forEach((item) => {
          if (item.symbol == this.formData.coin) {
            this.coinInfo = item;
          }
        });
        console.log(data);
      });
    },
    //获取保证金
    getMarginFun() {
      return new Promise((resolve) => {
        getDataApi("1554703741460680705", {
          code: "sjgl_bzjsz",
          column: "id",
          order: "desc",
          pageSize: -521,
        }).then((res) => {
          let data = res.data.data.records;
          if (data.length > 0) {
            data = JSON.parse(data[0].param_json);
            this.formData.margin = Number(data.money);
            this.formData.coin = data.coin;
          }
          resolve();
        });
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-night {
  .index-title {
    color: #fff;
  }

  .index-tip {
    color: #fff;
  }

  .index-err {
    background: #f5f6fa;
  }
}

.theme-daytime {
  .index-err {
    background: #f5f6fa;
  }
}

.merchant-index {
  // height: 90vh;
  min-height: 650px;
  background: no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.index-box {
  // height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 40px;

  .index-title {
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
  }

  .index-tip {
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    max-width: 760px;
    text-align: center;
    margin-top: 20px;
  }

  .index-err {
    color: rgb(255, 0, 0);
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 20px;
  }

  .index-btn {
    color: #fff;
    background: #247bff;
    border-radius: 4px;
    min-width: 180px;
    padding: 0 20px;
    height: 57px;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    &.disabled {
      cursor: no-drop;
    }
  }
}

.messageVaildate {
  .verify-code-container {
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
.merchant-apply-dialog {
  .merchant-apply-box {
    .btn-box {
      text-align: center;

      .el-button {
        width: 100%;
      }
    }

    .content-box {
      .money {
        font-size: 16px;
      }

      .tip {
        font-size: 12px;
        text-align: right;

        span {
          padding-right: 10px;
        }

        i {
          cursor: pointer;
        }
      }
    }
  }
}

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
}
</style>