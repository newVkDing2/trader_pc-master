<template>
  <div>
    <div v-if="$route.meta.isChild">
      <router-view :key="$route.fullPath" />
    </div>
    <div class="fit-background-di account-security-box" v-else>
      <div class="security-container-wrap">
        <div class="fit-background new-common-card second-vertify-container">
          <div class="safe-title">
            <h2>{{ currCoinLangFun("info_ecyz") }}</h2>
            <p class="fit-tc-tip">{{ currCoinLangFun("security_ecrzts") }}</p>
          </div>
          <ul class="second-vertify-wrapper">
            <li class="border-top-line">
              <dl>
                <dt>
                  <div class="img-icon phone"></div>
                </dt>
                <dd class="left">
                  <h3 class="fit-tc-primary">
                    {{ currCoinLangFun("security_dxyz") }}
                    <div class="span-tips" v-if="!userInfo.phone">
                      <i class="el-icon-warning"></i>
                      <span> {{ currCoinLangFun("security_wbd") }}</span>
                    </div>
                  </h3>
                  <p class="fit-tc-tip">
                    {{ currCoinLangFun("security_dxyzts") }}
                  </p>
                </dd>
                <dd class="right">
                  <div>
                    <h4 v-if="userInfo.phone" @click="Unbind()">
                      {{ currCoinLangFun("security_unbind") }}
                    </h4>
                    <h4 v-if="!userInfo.phone" @click="
                                            sendCodeDialog('/account/center/security/setting/phone')
                                          ">
                      {{ currCoinLangFun("security_bind") }}
                      <span class="el-icon-right"></span>
                    </h4>
                    <div v-if="userInfo.phone">
                      <span class="success-icon-bg"></span>
                      <span class="alreaybd">{{ currCoinLangFun("security_bound") }} +{{
                                              userInfo.area_code
                                              }}
                        {{ replacePhone }}</span>
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
            <li class="border-top-line">
              <dl>
                <dt>
                  <div class="img-icon google"></div>
                </dt>
                <dd class="left">
                  <h3 class="fit-tc-primary">
                    {{ currCoinLangFun("google_yz") }}
                    <!-- <div class="span-tips" v-if="userInfo.google_key">
                      <i class="el-icon-warning"></i>
                      <span>{{ currCoinLangFun("security_unbind") }}</span>
                    </div> -->
                  </h3>
                  <p class="fit-tc-tip">
                    {{ currCoinLangFun("security_ggyzts") }}
                  </p>
                </dd>
                <dd class="right">
                  <div>
                    <h4 v-if="userInfo.google_key" @click="
                                            sendCodeDialog(
                                              '/account/center/security/setting/google'
                                            )
                                          ">
                      {{ currCoinLangFun("text_reset") }}
                    </h4>
                    <h4 v-if="!userInfo.google_key" @click="
                                            sendCodeDialog(
                                              '/account/center/security/setting/google'
                                            )
                                          ">
                      <span></span>
                      {{ currCoinLangFun("security_bind") }}
                      <span class="el-icon-right"></span>
                    </h4>
                    <div v-if="userInfo.google_key">
                      <span class="success-icon-bg"></span>
                      <span class="alreaybd">{{
                                              currCoinLangFun("security_bound")
                                              }}</span>
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="fit-background new-common-card safe-setting-container">
          <div class="safe-title">
            <h2>
              {{ currCoinLangFun("security_set", "user") }}
            </h2>
          </div>
          <div class="safe-setting-wrapper">
            <ul class="setting-wrapper">
              <li class="border-top-line">
                <dl>
                  <dt>
                    <div class="el-icon-lock"></div>
                  </dt>
                  <dd class="left">
                    <h3 class="fit-tc-primary">
                      {{ currCoinLangFun("security_dlmm") }}
                    </h3>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("security_dlssy") }}
                    </p>
                  </dd>
                  <dd class="right">
                    <div>
                      <h4 @click="
                                                $router.push({
                                                  path: `/account/center/security/setting/login-pwd`,
                                                })
                                              ">
                        {{ currCoinLangFun("text_xg", "all") }}
                      </h4>
                    </div>
                  </dd>
                </dl>
              </li>
              <li class="border-top-line">
                <dl>
                  <dt>
                    <div class="el-icon-message"></div>
                  </dt>
                  <dd class="left">
                    <h3 class="fit-tc-primary">
                      {{ currCoinLangFun("register_email", "home_index") }}
                      <div class="span-tips" v-if="!userInfo.email">
                        <i class="el-icon-warning"></i>
                        <span>{{ currCoinLangFun("security_wbd") }}</span>
                      </div>
                    </h3>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("security_bdyxts") }}
                    </p>
                  </dd>
                  <dd class="right">
                    <div>
                      <h4 v-if="!userInfo.email" @click="
                                                sendCodeDialog(
                                                  '/account/center/security/setting/email'
                                                )
                                              ">
                        {{ currCoinLangFun("security_bind") }}
                        <span class="el-icon-right"></span>
                      </h4>
                      <div v-if="userInfo.email">
                        <span class="success-icon-bg"></span>
                        <span class="alreaybd">{{
                                                  currCoinLangFun("security_bound")
                                                  }}</span>
                      </div>
                    </div>
                  </dd>
                </dl>
              </li>
              <li class="border-top-line">
                <dl>
                  <dt>
                    <div class="el-icon-lock"></div>
                  </dt>
                  <dd class="left">
                    <h3 class="fit-tc-primary">
                      {{ currCoinLangFun("security_zjmm") }}
                      <div class="span-tips" v-if="!userInfo.pay_pwd">
                        <i class="el-icon-warning"></i>
                        <span v-if="!userInfo.google_key && !userInfo.email">{{
                                                  currCoinLangFun("security_zjmmts")
                                                  }}</span>
                        <span v-if="userInfo.google_key || userInfo.email">{{
                                                  currCoinLangFun("info_wsz")
                                                  }}</span>
                      </div>
                    </h3>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("security_zjmmyt") }}
                    </p>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("qbdyxyggyzhsz_text") }}
                    </p>
                  </dd>
                  <dd class="right">
                    <div class="pay-pwd-frequency" v-if="userInfo.pay_pwd">
                      <span class="fit-tc-tip">{{
                                              currCoinLangFun("security_jyyz")
                                              }}</span>
                      <div class="select-box fit-tc-border-color">
                        <el-popover popper-class="el-popover-box" placement="bottom-end" width="150" trigger="click">
                          <div>
                            <ul>
                              <li v-for="item in payVerificationDic" :key="item.value" @click="chooseVailOption(item)">
                                <el-tooltip class="item" popper-class="el-popover-item-tips" effect="dark"
                                  :content="showTips(item.value)" placement="left">
                                  <span class="fit-tc-primary hover-text" :class="{
                                                                        'active-text':
                                                                          item.value == currPayVerification.value,
                                                                      }">{{ item.label }}</span>
                                </el-tooltip>
                              </li>
                            </ul>
                          </div>
                          <div slot="reference">
                            <span>{{ currPayVerification.label }}</span>
                            <i class="el-icon-caret-bottom"></i>
                          </div>
                        </el-popover>
                      </div>
                    </div>
                    <div>
                      <h4 v-if="userInfo.pay_pwd" @click="
                                                $router.push({
                                                  path: `/account/center/security/setting/trade-pwd`,
                                                })
                                              ">
                        {{ currCoinLangFun("text_xg", "all") }}
                      </h4>
                      <div class="setBtn" v-if="!userInfo.pay_pwd">
                        <el-button type="primary" :disabled="!(userInfo.google_key && userInfo.email)" @click="
                                                    $router.push({
                                                      path: `/account/center/security/setting/trade-pwd`,
                                                    })
                                                  ">
                          {{ currCoinLangFun("setup", "all") }}</el-button>
                      </div>
                    </div>
                  </dd>
                </dl>
              </li>
              <li class="border-top-line">
                <dl>
                  <dt>
                    <div class="el-icon-lock"></div>
                  </dt>
                  <dd class="left">
                    <h3 class="fit-tc-primary">
                      {{ currCoinLangFun("security_fdym") }}
                      <div class="span-tips" v-if="!userInfo.anti_code">
                        <i class="el-icon-warning"></i>
                        <span>{{ currCoinLangFun("info_wsz") }}</span>
                      </div>
                    </h3>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("security_fdymyt") }}
                    </p>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("bind_phone_or_google") }}
                    </p>
                    <p class="fit-tc-tip">
                      {{ currCoinLangFun("security_fdymxg") }}
                    </p>
                  </dd>
                  <dd class="right">
                    <h4 v-if="userInfo.anti_code" @click="
                                            $router.push({
                                              path: `/account/center/security/setting/anti-code`,
                                            })
                                          ">
                      {{ currCoinLangFun("text_xg", "all") }}
                    </h4>
                    <div class="setBtn" v-if="!userInfo.anti_code">
                      <el-button type="primary" :disabled="!(userInfo.google_key || userInfo.phone)" @click="
                                                $router.push({
                                                  path: `/account/center/security/setting/anti-code`,
                                                })
                                              ">
                        {{ currCoinLangFun("setup", "all") }}</el-button>
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

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

    <!-- 解绑手机号 -->
    <el-dialog width="480px" append-to-body modal-append-to-body :close-on-click-modal="false"
      :visible.sync="unbindPhoneDialog" :title="`${currCoinLangFun('security_jbdxyz')}`" class="messageVaildate">
      <div class="verify-code-container">
        <div class="verify-code-wrapper">
          <div class="fit-tc-primary phone-dialog-safe-tip">
            <i class="el-icon-warning"></i>
            {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
          </div>
          <div class="verify-code-title-lr">
            <dd>
              <div class="fit-tc-primary title-text">
                <span>
                  {{ currCoinLangFun("security_qsrbdsj", "popup_tips") }}
                  <span style="font-weight: bold">{{
                                      sendCodeContent.ellipsis_account
                                      }}</span>
                  {{ currCoinLangFun("text_sdyzm", "popup_tips") }}</span>
              </div>
              <div class="yz-container">
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

    <!-- 禁止解绑 -->
    <el-dialog width="420px" append-to-body modal-append-to-body :visible.sync="disabledMessageBox">
      <div class="disabled-message-box">
        <div class="warning-tips">
          <div class="el-icon-warning"></div>
          <span class="fit-tc-primary">
            {{ currCoinLangFun("security_dxggexy", "center") }}
          </span>
        </div>
        <div class="btn-box">
          <el-button type="primary fit-tc-button" size="medium" class="fit-tc-button"
            @click="disabledMessageBox = false">{{ currCoinLangFun("text_ok", "popup_tips") }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  accountVerificationBinding,
  sendEmailApi,
  sendPhoneSmsApi,
  googleVerificationBindingOrReset,
  setTradePwd,
} from "@/api/user.js";

import { getDicTableData } from "@/api/system.js";
export default {
  data() {
    return {
      isConfirmCode: false,
      targetCheckType: "JumpLink", // JumpLink 跳转到指定页面，  capitalPwd 资金密码交易验证   unbindPhone解绑手机
      showSendCodeDialog: false, //发送邮件弹框
      disabledMessageBox: false, //禁止解绑弹框
      unbindPhoneDialog: false, //二次确认解绑手机号弹窗
      verificationCode: "",
      sendingCode: false, //正在发送验证码
      sendCodeBtnText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
      sendCodeContent: {
        typeText: this.currCoinLangFun("register_email", "home_index"),
        account: "",
        accountType: "1",
        routerAddress: "", //跳转地址
      },
      verifyTab: "1", //验证码弹框tabs
      payVerificationDic: [], //交易验证-字典数据
      currPayVerification: {
        label: this.currCoinLangFun("security_not_validate"), //不验证
        value: "0",
      }, //当前交易验证选项
      counDowntTimer: null, //倒计时
    };
  },
  created() {
    if (this.userInfo.google_key) {
      this.verifyTab = "1";
    } else {
      this.verifyTab = "2";
    }

    getDicTableData("pay_pwd_verification").then((res) => {
      //交易验证字典
      this.payVerificationDic = res.data.data;

      let data = this.payVerificationDic.filter(
        (item) => item.value == this.userInfo.transaction_validate
      ); //当前交易验证值
      if (data.length) {
        this.currPayVerification = data[0];
      }
    });
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    initData() {
      this.verificationCode = "";
      this.sendingCode = false; //正在发送验证码
      (this.sendCodeBtnText = this.currCoinLangFun("text_fsyzm", "all")),
        (this.sendCodeContent = {
          typeText: this.currCoinLangFun("register_email", "home_index"),
          account: "",
          accountType: "1",
          routerAddress: "", //跳转地址
        });

      if (this.userInfo.google_key) {
        this.verifyTab = "1";
      } else {
        this.verifyTab = "2";
      }
      if (this.counDowntTimer) {
        clearInterval(this.counDowntTimer);
      }
    },
    sendCodeDialog(url) {
      if (
        this.targetCheckType != "JumpLink" ||
        this.sendCodeContent.routerAddress != url
      ) {
        this.targetCheckType = "JumpLink";
        this.initData();
      }

      //手机号校验优先
      if (this.userInfo.phone) {
        this.sendCodeContent = {
          typeText: this.currCoinLangFun("text_phone", "all"), //手机
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

      this.sendCodeContent.routerAddress = url;
      this.showSendCodeDialog = true;
    },
    showTips(value) {
      if (value == "0") {
        return this.currCoinLangFun("not_validate_tradepwd"); //不验证资金密码
      } else if (value == "1") {
        return this.currCoinLangFun("tradepwd_tcqwxsr"); //输入一次，退出登录前无需再次输入
      } else if (value == "2") {
        return this.currCoinLangFun("tradepwd_some_hours"); //每隔3小时输入一次
      } else if (value == "3") {
        return this.currCoinLangFun("tradepwd_every_time"); //每次交易都需要输入资金密码
      } else {
        return "";
      }
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
    confirmCode() {
      let type = this.targetCheckType;
      this.isConfirmCode = true;
      if (type == "unbindPhone") {
        //解绑手机号
        accountVerificationBinding({
          account: this.sendCodeContent.account,
          checkType: "3", //解绑账号
          accountType: "1",
          areaCode: "",
          verificationCode: this.verificationCode,
        })
          .then(async () => {
            this.verificationCode = "";
            this.$message({
              type: "success",
              message: `${this.currCoinLangFun(
                "unbind_success",
                "popup_tips"
              )}`,
            }); //解绑成功
            this.unbindPhoneDialog = false;
            this.isConfirmCode = false;

            let userInfo = await this.getUserInfoData();
            this.SET_USER_INFO({
              ...this.userInfo,
              ...userInfo,
            });
          })
          .catch(() => {
            this.verificationCode = "";
            this.isConfirmCode = false;
          });
        return false;
      }

      //校验验证码
      if (type == "JumpLink") {
        if (this.verifyTab == "1") {
          googleVerificationBindingOrReset(this.verificationCode)
            .then(async () => {
              this.isConfirmCode = false;
              this.verificationCode = "";
              this.$router.push(this.sendCodeContent.routerAddress);
            })
            .catch(() => {
              this.isConfirmCode = false;
            });
        } else {
          accountVerificationBinding({
            account: this.sendCodeContent.account,
            checkType: 1,
            accountType: this.sendCodeContent.accountType,
            verificationCode: this.verificationCode,
          })
            .then(() => {
              this.isConfirmCode = false;
              this.verificationCode = "";
              this.$router.push(this.sendCodeContent.routerAddress);
            })
            .catch(() => {
              this.isConfirmCode = false;
            });
        }
        return false;
      }

      if (type == "capitalPwd") {
        if (this.verifyTab == "1") {
          setTradePwd({
            totpCode: this.verificationCode,
            valType: this.targerPayVerification.value,
          })
            .then(() => {
              this.isConfirmCode = false;
              this.$message({
                type: "success",
                message: this.currCoinLangFun(
                  "text_change_success",
                  "popup_tips"
                ), //修改成功
              });
              this.currPayVerification = this.targerPayVerification;
              this.showSendCodeDialog = false;
            })
            .catch(() => {
              this.isConfirmCode = false;
            });
        } else {
          setTradePwd({
            emailCode: this.userInfo.phone ? "" : this.verificationCode,
            phoneCode: this.userInfo.phone ? this.verificationCode : "",
            valType: this.targerPayVerification.value,
          })
            .then(() => {
              this.isConfirmCode = false;
              this.$message({
                type: "success",
                message: this.currCoinLangFun(
                  "text_change_success",
                  "popup_tips"
                ), //修改成功
              });
              this.currPayVerification = this.targerPayVerification;

              this.showSendCodeDialog = false;
            })
            .catch(() => {
              this.isConfirmCode = false;
            });
        }
        return false;
      }
    },
    Unbind() {
      if (this.targetCheckType != "unbindPhone") {
        this.targetCheckType = "unbindPhone";
        this.initData();
      }
      if (this.userInfo.phone && this.userInfo.google_key) {
        this.sendCodeContent = {
          typeText: this.currCoinLangFun("text_phone", "all"), //手机
          accountType: 1,
          account: this.userInfo.phone,
          ellipsis_account: this.replacePhone,
        };
        this.unbindPhoneDialog = true;
        return false;
      } else {
        //只有绑定了一个二次验证禁止解绑
        this.disabledMessageBox = true;
      }
    },
    chooseVailOption(data) {
      if (this.targetCheckType != "capitalPwd") {
        this.targetCheckType = "capitalPwd";
        this.initData();
      }

      if (this.userInfo.phone) {
        this.sendCodeContent = {
          typeText: this.currCoinLangFun("text_phone", "all"), //手机
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
      this.targerPayVerification = data; //将要选择的数据存起
      this.showSendCodeDialog = true;
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    replacePhone() {
      let text = this.userInfo.phone;
      return text.slice(0, 3) + "***" + text.slice(-4);
    },
    replaceEmail() {
      let text = this.userInfo.email;
      return text.slice(0, 2) + "***" + text.slice(-2);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-popover-box {
  ul {
    li {
      cursor: pointer;

      span {
        display: block;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        padding: 0 24px;
      }
    }
  }
}

.el-popover-item-tips {
  padding: 10px;
}

.account-security-box {
  .new-common-card {
    padding: 24px;
  }

  .security-container-wrap {
    .second-vertify-container {
      padding-bottom: 0 !important;

      .safe-title {
        padding-bottom: 24px !important;

        h2 {
          margin-bottom: 12px !important;

          p {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }

      .second-vertify-wrapper {
        li {
          flex: 1;
          width: 100%;

          dl {
            padding: 24px 0;
            display: flex;
            align-items: center;

            dt {
              .img-icon {
                width: 48px;
                height: 48px;
                background-size: 100% 100%;
                margin-right: 16px;
              }
            }

            .left {
              flex: 1;

              h3 {
                display: flex;
                align-items: center;
                line-height: 28px;
                font-size: 18px;
                margin-bottom: 8px;

                .span-tips {
                  display: flex;
                  align-items: center;
                  margin-left: 8px !important;
                  margin-top: 4px !important;

                  i {
                    font-size: 16px !important;
                    padding: 4px;
                  }

                  span {
                    font-weight: 500;
                    line-height: 16px;
                    font-size: 12px !important;
                  }
                }
              }

              p {
                line-height: 18px;
                font-size: 14px;
              }
            }

            .right {
              justify-content: flex-end;
              display: flex;
              align-items: center;

              &>div {
                h4 {
                  text-align: right;
                  line-height: 22px;
                  font-size: 18px;
                  margin-bottom: 8px;
                  cursor: pointer;
                }

                &>div {
                  display: flex;
                  align-items: center;

                  .success-icon-bg {
                    display: block;
                    width: 14px;
                    height: 14px;
                    background-size: 100% 100%;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgBvVU9bFJRFP4uaAVTzHPTdiGpSQeHdjF24zWadFMmjbEJGAd1k8G/SRYXYyJb1dRIB2OcrKNxKCzGxKE4mQ6mTP4tD6UUaUuP53sPkL8nuPQk5PLOPed73zvfueca+Fh5W2wjiBsgJkBUV0vXkq5FXfMakh0dMYV+uabb4VQleiCIZ5poE0RdTPwoooAGlv6f0iTbTRYs13aROhw2RfhZdUcSG1vi8FeuSVpErH5x9G9UJVmpyXpFY5nnC6gBor/VqrLFEMY4xjOvB5ifTHYM8GPnZ47GN4Adp53MZk1eqXN9WIY+jJ3NLVlxHcpwui/9IYx1bbKjBsQpV8UOqMJJOjNvkZ+4I/GJ25I8dkvsQYCVbblrtEtC+xHj8+I7ZMGWC2obKtPVT18RvfDEjW3VU19W1CX9+Z5Z6geoAekfZWROP9CeDeCstll8MQHrRBQFw1o8fw/r/hsv4cwUMD8DXH8JfCm1wHMBg8LuDn6+uAL7+DgSj3LAQr7zZTfm3NzSPrL79fvvxtp3YEz5PtUKX15ygaPqTmrz49opQAHRD9Ctq4djBViHQ6E20G8eWCTkAY81CnLVVtCYPyAt4uGUKFRx8kjnZjfwzbnBgLQGTpGgeT5EQv7AF2cGAzJORaIG+QDqWKZj/mRvYBOYIv4LkDY76a2ieO6U4klQsexzjz3F/9eawo5byB0cMbMUCqaOS8q2lDnfW4ZBxnjmHbW08RWHPhc0rPNQaadY23bFh2XYECgVbszVjiHNs6zH7KGWwFrIAStrrd7rYUcNKOBoyB3kKb0Fss39nsnPiVPXM83pTkCK9aHo7bGfyarZLap0LqifHO6a/AY+xmljAjpsjHt9TNPn3lF6rYjBa6ocCZsc9sr+AD77ZIQTejsqAAAAAElFTkSuQmCC);
                    margin-right: 4px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .safe-setting-container {
      margin-top: 24px !important;

      .safe-title {
        padding-bottom: 24px !important;
      }

      .safe-setting-wrapper {
        li {
          flex: 1;
          width: 100%;

          dl {
            padding: 24px 0;
            display: flex;
            align-items: center;

            dt {
              div {
                width: 42px;
                height: 42px;
                background-size: 100% 100%;
                margin-right: 16px;
                font-size: 36px;
              }
            }

            .left {
              flex: 1;

              h3 {
                display: flex;
                align-items: center;
                line-height: 28px;
                font-size: 18px;
                margin-bottom: 8px;

                .span-tips {
                  display: flex;
                  align-items: center;
                  margin-left: 8px !important;
                  margin-top: 4px !important;

                  i {
                    font-size: 16px !important;
                    padding: 4px;
                  }

                  span {
                    font-weight: 500;
                    line-height: 16px;
                    font-size: 12px !important;
                  }
                }
              }

              p {
                line-height: 18px;
                font-size: 14px;
              }
            }

            .right {
              justify-content: flex-end;
              display: flex;
              align-items: center;

              .pay-pwd-frequency {
                display: flex;
                align-items: center;
                margin-right: 12px;

                &>span {
                  margin-right: 8px;
                }

                &>div.select-box {
                  border: 1px solid;

                  &>span {
                    width: 100%;
                    height: 100%;
                    display: block;
                    cursor: pointer;

                    ::v-deep.el-popover__reference-wrapper {
                      width: 100%;
                      height: 100%;
                      display: block;

                      div {
                        width: 128px;
                        padding: 0 8px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 40px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                      }
                    }
                  }
                }
              }

              &>div {
                h4 {
                  text-align: right;
                  line-height: 22px;
                  font-size: 18px;
                  margin-bottom: 8px;
                  cursor: pointer;
                }

                &>div {
                  display: flex;
                  align-items: center;

                  .success-icon-bg {
                    display: block;
                    width: 14px;
                    height: 14px;
                    background-size: 100% 100%;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgBvVU9bFJRFP4uaAVTzHPTdiGpSQeHdjF24zWadFMmjbEJGAd1k8G/SRYXYyJb1dRIB2OcrKNxKCzGxKE4mQ6mTP4tD6UUaUuP53sPkL8nuPQk5PLOPed73zvfueca+Fh5W2wjiBsgJkBUV0vXkq5FXfMakh0dMYV+uabb4VQleiCIZ5poE0RdTPwoooAGlv6f0iTbTRYs13aROhw2RfhZdUcSG1vi8FeuSVpErH5x9G9UJVmpyXpFY5nnC6gBor/VqrLFEMY4xjOvB5ifTHYM8GPnZ47GN4Adp53MZk1eqXN9WIY+jJ3NLVlxHcpwui/9IYx1bbKjBsQpV8UOqMJJOjNvkZ+4I/GJ25I8dkvsQYCVbblrtEtC+xHj8+I7ZMGWC2obKtPVT18RvfDEjW3VU19W1CX9+Z5Z6geoAekfZWROP9CeDeCstll8MQHrRBQFw1o8fw/r/hsv4cwUMD8DXH8JfCm1wHMBg8LuDn6+uAL7+DgSj3LAQr7zZTfm3NzSPrL79fvvxtp3YEz5PtUKX15ygaPqTmrz49opQAHRD9Ctq4djBViHQ6E20G8eWCTkAY81CnLVVtCYPyAt4uGUKFRx8kjnZjfwzbnBgLQGTpGgeT5EQv7AF2cGAzJORaIG+QDqWKZj/mRvYBOYIv4LkDY76a2ieO6U4klQsexzjz3F/9eawo5byB0cMbMUCqaOS8q2lDnfW4ZBxnjmHbW08RWHPhc0rPNQaadY23bFh2XYECgVbszVjiHNs6zH7KGWwFrIAStrrd7rYUcNKOBoyB3kKb0Fss39nsnPiVPXM83pTkCK9aHo7bGfyarZLap0LqifHO6a/AY+xmljAjpsjHt9TNPn3lF6rYjBa6ocCZsc9sr+AD77ZIQTejsqAAAAAElFTkSuQmCC);
                    margin-right: 4px;
                  }
                }
              }
            }
          }
        }
      }
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
</style>


<style lang="scss" scoped>
.theme-night {
  .account-security-box {
    .border-top-line {
      border-top: 1px solid;
      border-color: #262d38;
    }

    .second-vertify-wrapper,
    .safe-setting-container {
      .right {
        h4 {
          color: #0020FD;
        }
      }

      .span-tips {
        i {
          color: #e04d43;
        }

        span {
          color: #e04d43;
        }
      }
    }

    .safe-setting-wrapper {
      .right {
        h4 {
          color: #0020FD;
        }
      }
    }

    .pay-pwd-frequency {
      .select-box {
        i {
          color: #262d38;
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

  .second-vertify-wrapper {
    li {
      dl {
        dt {
          .img-icon {
            &.phone {
              background-image: url(https://miniopic.baiyiex.com/baiyiex/upload/20220706/a51e7d39413d66d936f9f3be04b62be2.webp);
            }

            &.google {
              background-image: url(https://miniopic.baiyiex.com/baiyiex/upload/20220706/8d286e6d3fa99d4c797b17487d78cd8f.webp);
            }
          }
        }
      }
    }
  }
}

.theme-daytime {
  .account-security-box {
    .border-top-line {
      border-top: 1px solid;
      border-color: #eff0f2;
    }

    .pay-pwd-frequency {
      .select-box {
        i {
          color: #eff0f2;
        }
      }
    }

    .second-vertify-wrapper,
    .safe-setting-container {
      .right {
        h4 {
          color: #2954cc;
        }
      }

      .span-tips {
        i {
          color: #db3a35;
        }

        span {
          color: #db3a35;
        }
      }
    }

    .safe-setting-wrapper {
      .right {
        h4 {
          color: #0020FD;
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

  .second-vertify-wrapper {
    li {
      dl {
        dt {
          .img-icon {
            &.phone {
              background-image: url(https://miniopic.baiyiex.com/baiyiex/public/security/user-phone-light.8c69735.png);
            }

            &.google {
              background-image: url(https://miniopic.baiyiex.com/baiyiex/public/security/user-google-light.43f87bc.png);
            }
          }
        }
      }
    }
  }
}
</style>
