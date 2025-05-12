<template>
  <div class="fit-background-di account-info-box">
    <div class="account-container-wrap">
      <div class="fit-background new-common-card">
        <div class="fit-tc-primary account">
          {{ replaceAccount }} ({{ currCoinLangFun("info_zzh") }})
          <el-button type="primary" size="mini" v-if="!userInfo.real_name_status" @click="
                        $router.push({
                          path: `/account/center/kyc`,
                        })
                      ">{{ currCoinLangFun("info_sfrz") }}</el-button>
        </div>
        <ul class="fit-tc-tip relevant">
          <li class="split-right-line fit-tc-border-color">
            <span>UID: {{ userInfo.uid }}</span>
            <i class="copy el-icon-copy-document" @click="copy(userInfo.uid)"></i>
          </li>
          <li class="split-right-line fit-tc-border-color" v-if="userInfo.email">
            {{ currCoinLangFun("register_email", "home_index") }}:
            {{ replaceEmail }}
          </li>
          <li class="split-right-line fit-tc-border-color" v-if="userInfo.phone">
            {{ currCoinLangFun("register_phone", "home_index") }}：+{{
                        userInfo.area_code
                        }}
            {{ replacePhone }}
          </li>
          <li class="fit-tc-border-color" v-if="userInfo.level_str">
            {{ currCoinLangFun("info_hydj") }}: {{ userInfo.level_str }}
          </li>
          <!-- <li class="third-icon">
            <img
              src="https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/google.svg"
            />
          </li>-->
        </ul>
        <ul class="fit-tc-border-color authentication">
          <li>
            <div>
              <div class="title-icon"></div>
              <span class="fit-tc-primary step-two-text">{{
                              currCoinLangFun("info_ecyz")
                              }}</span>
              <div class="span-tips" v-if="!(userInfo.phone || userInfo.google_key)">
                <i class="el-icon-warning"></i>
                <span>{{ currCoinLangFun("info_wsz") }}</span>
              </div>
            </div>
            <div class="fit-tc-tip step-two-intro">
              {{ currCoinLangFun("info_ecrzts") }}
            </div>
            <div>
              <sapn v-if="!userInfo.phone" class="setting" @click="
                                $router.push({
                                  path: `/account/center/security`,
                                })
                              ">
                {{ currCoinLangFun("setup", "all") }}
                <i class="el-icon-right"></i>
              </sapn>
              <div class="setted" v-else>
                <span class="bg-img"></span>
                <span class="fit-tc-primary">{{
                                  currCoinLangFun("info_ysz")
                                  }}</span>
              </div>
            </div>
          </li>
          <li class="fit-tc-border-color split-left-line">
            <div>
              <div class="kyc-icon"></div>
              <span class="fit-tc-primary step-two-text">{{
                              currCoinLangFun("info_sfrz")
                              }}</span>
              <div class="span-tips" v-if="!userInfo.real_name_status">
                <i class="el-icon-warning"></i>
                <span>{{ currCoinLangFun("info_wrz") }}</span>
              </div>
            </div>
            <div class="fit-tc-tip step-two-intro">
              {{ currCoinLangFun("info_sfrzts") }}
            </div>
            <div>
              <sapn class="setting" v-if="userInfo.real_name_status != 2" @click="
                                $router.push({
                                  path: `/account/center/kyc`,
                                })
                              ">
                {{ currCoinLangFun("info_rz") }}
                <i class="el-icon-right"></i>
              </sapn>
              <div class="setted" v-else>
                <span class="bg-img"></span>
                <span class="fit-tc-primary">{{
                                  currCoinLangFun("info_ysz")
                                  }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="fit-background exchange-info" v-if="false">
        <div class="new-common-card">
          <h2 class="info-title">
            <div>{{ currCoinLangFun("info_jyfl") }}</div>
          </h2>
          <div class="sx-price-info">
            <div class="useBix">
              <span
                class="box-switch-green"
                :class="{ active: usedBix }"
                @click="usedBix = !usedBix"
              >
                <span class="box-switch_label" v-if="usedBix">NO</span>
                <span
                  class="box-switch_content"
                  :class="{ active: usedBix }"
                ></span>
              </span>
              <h3 class="fit-tc-primary text">使用 BIX 支付交易手续费</h3>
              <span class="fit-tc-button discount">75折</span>
              <em class="article-tip else">(需将BIX划转至币币账户)</em>
            </div>
            <span class="go-detail">
              <a href="#">查看详情</a>
              <i class="el-icon-right"></i>
            </span>
          </div>
          <div class="exchange-wrap-info">
            <div class="exchange-item">
              <h3 class="levelInfo">
                <span>币币</span>
                <div class="level-type-cont">
                  <em class="level-new">
                    <span class="ld-main"></span>
                    Lv1
                  </em>
                  <p class="fit-tc-tip txt-pos-p">
                    锁仓 5000 BIX 即刻升级至 Lv2
                  </p>
                </div>
              </h3>
              <ul class="mkInfo">
                <li>
                  <p>
                    <em class="fit-tc-tip">Maker (挂单)</em>
                  </p>
                  <h4>0.100%</h4>
                </li>
                <li>
                  <p>
                    <em class="fit-tc-tip">Taker (吃单)</em>
                  </p>
                  <h4>0.20%</h4>
                </li>
              </ul>
            </div>
            <div class="exchange-item">
              <h3 class="levelInfo">
                <span>合约</span>
                <div class="level-type-cont">
                  <em class="level-new">
                    <span class="ld-main"></span>
                    基础费率
                  </em>
                  <p class="fit-tc-tip txt-pos-p">
                    近7天交易量 ≥1,000 BTC 就可升级为 Lv1
                  </p>
                </div>
              </h3>
              <ul class="mkInfo">
                <li>
                  <p>
                    <em class="fit-tc-tip">Maker (挂单)</em>
                  </p>
                  <h4>0.040%</h4>
                </li>
                <li>
                  <p>
                    <em class="fit-tc-tip">Taker (吃单)</em>
                  </p>
                  <h4>0.060%</h4>
                </li>
              </ul>
            </div>
          </div>
          <div class="fit-tc-border-color lasted-exchang-info">
            <div>
              <div class="exchange-num">
                <span class="fit-tc-primary">交易量</span>
              </div>
              <div class="exchange-type">
                <span class="fit-tc-tip">币币(近30天)</span>
                <em class="fit-tc-primary">0.00 BTC</em>
              </div>
              <div class="exchange-type">
                <span class="fit-tc-tip">合约(近7天)</span>
                <em class="fit-tc-primary">0.01 BTC</em>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="info-banner">
        <div class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">
            <!-- <div class="swiper-slide">
              <dl class="sock sock1">
                <dt>
                  <img
                    src="https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/user-sock-img.21f645f.png"
                  />
                </dt>
                <dd>
                  <div class="fit-tc-button left-text">
                    锁仓 BIX 可享更多折扣与更高返佣比例
                  </div>
                  <div class="right-text">
                    <p class="fit-tc-button">
                      锁仓数量
                      <span> 0 BIX </span>
                    </p>
                    <div class="btn-box">
                      <el-button type="success">锁仓</el-button>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>-->
            <div class="swiper-slide">
              <dl class="sock sock2">
                <dt>
                  <img src="https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/user-invite-img.b769f0d.png" />
                </dt>
                <dd>
                  <div class="fit-tc-button left-text">
                    {{ currCoinLangFun("info_yyfyts") }}
                  </div>
                  <div class="right-text">
                    <p class="fit-tc-button">
                      {{ currCoinLangFun("info_yqm") }}
                      <span>{{ invite.code }}</span>
                    </p>
                    <span class="fit-tc-button">{{
                                          currCoinLangFun("info_yqlj")
                                          }}</span>
                    <span class="fit-tc-button">{{ invite.link }}</span>
                    <div class="btn-box">
                      <el-button type="success" @click="copy(invite.link)">{{
                                              currCoinLangFun("info_fzfx")
                                              }}</el-button>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="fit-background new-common-card pay-method-box" v-if="payMethodsList.length">
          <h2 class="info-title fit-tc-primary">
            {{ currCoinLangFun("info_kjmmskzh") }}
          </h2>
          <div class="bank-list-container">
            <ul class="bank-list-wrap">
              <li v-for="item in payMethodsList" :key="item.id">
                <dl class="fit-ta-border-color">
                  <dt>
                    <img :src="item.icon" />
                  </dt>
                  <dd>
                    <p class="fit-tc-tip">{{ item.name }}</p>
                    <h3 v-if="!item.data">
                      <span @click="settingCollAccountFun(item)">
                        {{ currCoinLangFun("text_tj", "move_quotation") }}
                      </span>
                    </h3>
                    <h3 v-else class="base-info">
                      {{ item.data.name }}[{{ item.data.account }}]
                      <div class="hover-qrcode" v-if="item.pay_methods_type != '1'">
                        <el-popover placement="right" width="350" trigger="hover" popper-class="popover-qrcode">
                          <div>
                            <img style="width: 100%" :src="item.data.qr_code" alt />
                          </div>
                          <i class="fa fa-qrcode" slot="reference"></i>
                        </el-popover>
                      </div>
                    </h3>

                    <span class="change-area" v-if="item.data">
                      <el-popover placement="top" trigger="hover" popper-class="popover-change">
                        <div class="fit-tc-button" @click="settingCollAccountFun(item)">
                          {{ currCoinLangFun("text_xg", "all") }}
                        </div>
                        <div class="fit-tc-button" @click="delPayMethods(item)">
                          {{ currCoinLangFun("text_sc", "all") }}
                        </div>
                        <span slot="reference">...</span>
                      </el-popover>
                    </span>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- <div class="el-dialog__wrapper"></div> -->
        </div>
        <!-- <div
          class="fit-background new-common-card set-language"
          :class="{ full: !payMethodsList.length }"
        >
          <h2 class="fit-tc-primary">
            通知语言设置
            <span class="article-tip"
              >您可在此更改接收邮件、短信和AppPush消息的语言</span
            >
          </h2>
          <ul>
            <li
              v-for="item in messageLangArr"
              :key="item.value"
              :class="{ active: messageLang == item.value }"
              @click="editLang(item.value)"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>-->
      </div>
      <!-- 做市商 -->
      <div class="bottom-box" v-if="isZss">
        <div class="fit-background new-common-card pay-method-box" v-if="payMethodsList.length">
          <h2 class="info-title fit-tc-primary" style="display: flex; align-items: center">
            {{ currCoinLangFun("info_zss_text") }}
            <span style="margin-left: 10px; display: inherit" v-if="zssData.show">
              <el-button type="danger" @click="delZssFun" :loading="zssData.loading" size="mini">{{
                              currCoinLangFun("text_sc", "all") }}</el-button>
            </span>
          </h2>
          <div class="api-content">
            <div class="content-button" v-if="!zssData.show">
              <span style="font-size: 12px; padding-right: 10px">{{
                              currCoinLangFun("info_zss_tip")
                              }}</span>
              <el-button type="primary fit-tc-button" @click="becomeZssFun" :loading="zssData.loading">{{
                              currCoinLangFun("info_zss_text") }}</el-button>
            </div>
            <div v-else class="content-info">
              <div class="info-item">
                <span class="fit-tc-tip">API Key：</span>
                <span>{{ zssData.info.api_key }}</span>
              </div>
              <div class="info-item">
                <!-- 名称 -->
                <span class="fit-tc-tip">{{ currCoinLangFun("menu_mc", "move_index") }}：</span>
                <span>{{ zssData.info.name }}</span>
              </div>
              <div class="info-item">
                <!-- 权限 查询 交易 -->
                <span class="fit-tc-tip">{{ currCoinLangFun("info_auth_text") }}：{{
                                  currCoinLangFun("info_query_text")
                                  }}
                  {{ currCoinLangFun("deal", "all") }}</span>
                <span></span>
              </div>
              <!-- <div class="info-item">
                <span class="fit-tc-tip">{{currCoinLangFun('info_secretkey_text')}}：</span>
                <span>{{isShowText(zssData.info.)}}</span>
                <i
                  style="margin-left:5px"
                  @click="isMyEye=!isMyEye"
                  :class="{'fa fa-eye':isMyEye,'fa fa-eye-slash':!isMyEye}"
                ></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-dialog width="600px" :visible.sync="settingCollAccount" :fullscreen="false" :modal="true" class="payWayDialog"
        :close-on-press-escape="false">
        <collect-account-setting :settingCollAccount="settingCollAccount" :payWayDialogOption="payWayDialogOption"
          :btnLoading="btnLoading" :settingPayMentFun="settingPayMentFun.bind(this)"></collect-account-setting>
      </el-dialog>
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
                                }}
              </span>
            </div>
          </div>
          <div class="fit-tc-primary phone-dialog-safe-tip">
            <i class="el-icon-warning"></i>
            {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
          </div>
          <div class="verify-code-title-lr">
            <dd>
              <div class="fit-tc-primary title-text">
                <span v-if="verifyTab == 1">
                  {{ currCoinLangFun("text_ggyzmtx", "popup_tips") }}
                </span>
                <span v-if="verifyTab == 2">
                  {{ currCoinLangFun("text_qsrbd", "popup_tips")
                                    }}{{ sendCodeContent.typeText }}
                  <span style="font-weight: bold">
                    {{ sendCodeContent.ellipsis_account }}
                  </span>
                  {{ currCoinLangFun("text_sdyzm", "popup_tips") }}
                </span>
              </div>
              <div class="yz-container" v-if="verifyTab == 2">
                <el-button type="primary fit-tc-button" size="mini" :loading="sendingCode"
                  @click="sendVerificationCode()">{{ sendCodeBtnText }}</el-button>
              </div>
            </dd>
          </div>
          <div class="verify-code-wrap">
            <el-input v-model="verificationCode" :placeholder="`${currCoinLangFun('text_sryzm', 'popup_tips')}`"
              :maxlength="6" onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
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
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapGetters } from "vuex";

import collectAccountSetting from "@/components/account/collect-account-setting.vue";
import { getDataApi } from "@/api/system.js";
import {
  settingPayMent,
  getPayment,
  accountVerificationBinding,
  sendEmailApi,
  sendPhoneSmsApi,
  googleVerificationBindingOrReset,
  getZssApiInfoApi,
  becomeZssApi,
  delZssApi,
} from "@/api/user";

export default {
  components: { collectAccountSetting },
  data() {
    return {
      validationType: "add", //验证操作类型/add=添加/modify=修改/del=删除
      counDowntTimer: null, //倒计时
      sendingCode: false, //正在发送验证码
      sendCodeBtnText: this.currCoinLangFun("text_fsyzm", "all"), //发送验证码
      verificationCode: "",
      currCode: "", //记录校验增强的code
      isConfirmCode: false,
      sendCodeContent: {
        typeText: this.currCoinLangFun("register_email", "home_index"),
        account: "",
        accountType: "1",
        routerAddress: "", //跳转地址
      },
      verifyTab: "1", //验证码弹框tabs
      showSendCodeDialog: false, //发送邮件弹框

      delData: {}, //需要删除银行卡的data

      btnLoading: false,
      settingCollAccount: false, //打开收款账户设置弹框
      payWayDialogOption: {}, //收款方式弹框配置
      usedBix: false,
      messageLang: "zh",
      messageLangArr: [
        {
          label: "简体中文",
          value: "zh",
        },
        {
          label: "English",
          value: "en",
        },
      ],
      invite: {
        code: "-----",
        link: "",
      },
      payMethodsList: [],

      isZss: false,
      zssData: {
        show: false,
        loading: false,
        info: {},
      },
      isMyEye: false,
    };
  },
  async created() {
    let payMethodsRes = await getDataApi("1541709245688348673", {
      pageSize: "-521",
      enable: "1",
    });
    this.payMethodsList = payMethodsRes.data.data.records;

    this.invite = {
      code: this.userInfo.promotion_code,
      link: `${window.location.protocol}://${window.location.host}/#/user/register?invite_code=${this.userInfo.promotion_code}`,
    };

    this.getPaymentFun();
    if (this.userInfo.google_key === 0) {
      //没有绑定谷歌 修改校验默认值
      this.verifyTab = 2;
    }
  },
  mounted() {
    this.getZssDataFun();
    this.setSwiperContent();
  },
  methods: {
    confirmCode() {
      this.isConfirmCode = true;
      //校验验证码
      if (this.verifyTab == "1") {
        googleVerificationBindingOrReset(this.verificationCode)
          .then(async () => {
            this.isConfirmCode = false;
            this.currCode = this.verificationCode;
            this.verificationCode = "";
            this.showSendCodeDialog = false;

            if (this.validationType == "add") {
              this.settingCollAccount = true;
            } else if (this.validationType == "del") {
              // 您确定要删除该收款方式吗
              let text = this.currCoinLangFun("info_scskfsts");

              this.$confirm(
                `${text}?`,
                `${this.currCoinLangFun("tips", "all")}`,
                {
                  confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
                  cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
                  type: "warning",
                }
              ).then(() => {
                let data = {
                  ...this.delData.data,
                  is_deleted: true,
                };
                this.settingPayMentFun(data);
              });
            }
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
            this.currCode = this.verificationCode;
            this.verificationCode = "";
            this.showSendCodeDialog = false;
            clearInterval(this.counDowntTimer);
            this.sendingCode = false;
            this.sendCodeBtnText = this.currCoinLangFun("text_fsyzm", "all");

            if (this.validationType == "add") {
              this.settingCollAccount = true;
            } else if (this.validationType == "del") {
              // 您确定要删除该收款方式吗
              let text = this.currCoinLangFun("info_scskfsts");

              this.$confirm(
                `${text}?`,
                `${this.currCoinLangFun("tips", "all")}`,
                {
                  confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
                  cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
                  type: "warning",
                }
              ).then(() => {
                let data = {
                  ...this.delData.data,
                  is_deleted: true,
                };
                this.settingPayMentFun(data);
              });
            }
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
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    delPayMethods(obj) {
      this.delData = obj;

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
      this.validationType = "del";
      this.showSendCodeDialog = true;

      // // 您确定要删除该收款方式吗
      // let text = this.currCoinLangFun("info_scskfsts");

      // this.$confirm(`${text}?`, `${this.currCoinLangFun("tips", "all")}`, {
      //   confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
      //   cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
      //   type: "warning",
      // }).then(() => {
      //   let data = {
      //     ...this.delData.data,
      //     is_deleted: true,
      //   };
      //   this.settingPayMentFun(data);
      // });
    },
    getPaymentFun() {
      getPayment().then((res) => {
        let payment = res.data.data;
        this.payMethodsList = this.payMethodsList.map((item) => {
          item.data = null;
          payment.forEach((child) => {
            if (item.id == child.pay_method_id) {
              item.data = child;
            }
          });
          return item;
        });
      });
    },
    settingPayMentFun(data) {
      data = {
        ...data,
        checkType: this.sendCodeContent.accountType, //二次验证类型
        code: this.currCode, //二次验证code值
        // area_code:this.userInfo.area_code,//手机区号
      };
      this.btnLoading = true;
      settingPayMent(data)
        .then((res) => {
          this.btnLoading = false;
          this.settingCollAccount = false;
          this.getPaymentFun();
        })
        .catch(() => {
          this.btnLoading = false;
        });
    },
    settingCollAccountFun(obj) {
      if (this.userInfo.real_name_status != "2") {
        this.$confirm(
          this.currCoinLangFun("security_real_name_authentication", "user"), //为了您的账户安全,请先实名认证后再进行交易，是否前往认证?
          this.currCoinLangFun("tips", "all"),
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            this.$router.push({
              path: `/account/center/kyc`,
            });
          })
          .catch(() => {});
        return false;
      }
      this.payWayDialogOption = obj;

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
      this.validationType = "add";
      this.showSendCodeDialog = true;

      // this.settingCollAccount = true;
    },
    setSwiperContent() {
      //轮播开关
      let bool = false;
      let autoplay = false;
      if (bool) {
        autoplay = {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        };
      }
      new Swiper(".swiper-container", {
        loop: true,
        autoplay,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: "auto",
        loopedSlides: 1,
      });
    },
    copy(text) {
      // 模拟 输入框
      let cInput = document.createElement("input");
      cInput.value = text;
      document.body.appendChild(cInput);
      // 选取文本框内容
      cInput.select();

      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand("copy");

      this.$message({
        type: "success",
        message: this.currCoinLangFun("text_fzcg", "all"), //复制成功
      });
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput);
    },
    editLang(type) {
      this.messageLang = type;

      this.$message({
        type: "success",
        message: "您的更改设置已生效",
      });
    },
    //获取做市商信息
    getZssDataFun() {
      getZssApiInfoApi().then((res) => {
        let data = res.data.data;
        if (data.length <= 0) {
          this.zssData.show = false;
          this.zssData.info = {};
        } else {
          this.zssData.show = true;
          this.zssData.info = {
            ...data[0],
          };
        }
        this.isZss = true;
        this.zssData.loading = false;
      });
    },
    //成为做市商
    becomeZssFun() {
      this.$prompt(
        this.currCoinLangFun("info_zss_check_tip"),
        this.currCoinLangFun("info_zss_check_title"),
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"),
          cancelButtonText: this.currCoinLangFun("cancel", "all"),
          inputErrorMessage: this.currCoinLangFun("info_zss_check_tip"),
          closeOnClickModal: false,
          inputValidator: (value) => {
            if (!value) {
              return false;
            }
            return true;
          },
        }
      )
        .then(({ value }) => {
          this.zssData.loading = true;
          becomeZssApi({ name: value })
            .then((res) => {
              let secret_key = res.data.data.secret_key;
              this.getZssDataFun();
              this.$alert(
                `
                <div>
                  <div class="fit-tc-tip" style="font-size:14px;">${this.currCoinLangFun(
                    "info_secretkey_tip"
                  )}</div>
                  <div class="fit-tc-primary" style="font-size:14px;padding-top:10px">${this.currCoinLangFun(
                    "info_secretkey_text"
                  )}：${secret_key}</div>
                </div>
                `,
                this.currCoinLangFun("tips", "all"),
                {
                  confirmButtonText: this.currCoinLangFun("confirm", "all"),
                  closeOnClickModal: false,
                  dangerouslyUseHTMLString: true,
                  callback: (action) => {},
                }
              );
            })
            .catch(() => {
              this.zssData.loading = false;
            });
        })
        .catch(() => {});
    },
    //删除做市商
    delZssFun() {
      this.$confirm(
        this.currCoinLangFun("info_zss_del_tip"),
        this.currCoinLangFun("tips", "all"),
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"),
          cancelButtonText: this.currCoinLangFun("cancel", "all"),
          type: "warning",
        }
      )
        .then(() => {
          this.zssData.loading = true;
          delZssApi({ id: this.zssData.info.id })
            .then((res) => {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.zssData.loading = false;
              this.getZssDataFun();
            })
            .catch(() => {
              this.zssData.loading = false;
            });
        })
        .catch(() => {});
    },
    isShowText(text) {
      if (this.isMyEye) {
        return text;
      } else {
        let asterisk = "";
        text.split("").forEach(() => {
          asterisk = asterisk + "*";
        });
        return asterisk;
      }
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    replaceAccount() {
      let text = this.userInfo.email || this.userInfo.phone;
      return text.slice(0, 2) + "***" + text.slice(-2);
    },
    replaceEmail() {
      let text = this.userInfo.email;
      return text.slice(0, 2) + "***" + text.slice(-2);
    },
    replacePhone() {
      let text = this.userInfo.phone;
      return text.slice(0, 3) + "***" + text.slice(-4);
    },
  },
};
</script>

<style lang="scss" scoped>
.account-info-box {
  width: 100%;
  height: 100%;
}

.new-common-card {
  padding: 24px;
}

.payWayDialog {
  ::v-deep.el-dialog__body {
    padding: 0 24px !important;
    margin-top: -16px;
  }
}

.account-container-wrap {
  width: 100%;
  height: auto;

  .new-common-card {
    .account {
      display: flex;
      align-items: center;
      line-height: 48px;
      font-size: 32px !important;

      button {
        padding: 4px 8px;
        font-size: 12px;
        margin-left: 4px;
        margin-top: 8px;
      }
    }

    .relevant {
      display: flex;
      align-items: center;
      line-height: 20px;
      margin-top: 16px !important;
      font-size: 14px !important;

      li {
        display: flex;
        align-items: center;

        &.split-right-line {
          border-color: #262d38;
          border-right: 1px solid;
          padding-right: 16px;
          margin-right: 16px;
        }

        .copy {
          color: #7d92a8;
          cursor: pointer;
          line-height: 1em;
          height: 1em;
          margin-left: 8px !important;
        }
      }

      .third-icon {
        img {
          opacity: 0.4;
          width: 20px;
          height: 20px;
          line-height: 20px;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          margin-right: 16px !important;

          &:last-child {
            margin-right: 0px !important;
          }
        }
      }
    }

    .authentication {
      display: flex;
      border-top: 1px solid;
      padding-top: 24px;
      align-items: flex-start;
      margin-top: 24px !important;

      li {
        flex: 1;

        &.split-left-line {
          border-left: 1px solid;
          padding-left: 24px;
          margin-left: 24px;
        }

        &>div:first-child {
          display: flex;
          align-items: center;

          .kyc-icon,
          .title-icon {
            margin-right: 8px;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
          }

          .step-two-text {
            font-size: 18px;
            line-height: 28px;
          }

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

        .step-two-intro {
          font-size: 14px;
          line-height: 18px;
          margin-top: 16px;
          min-height: 54px;
        }

        .setting {
          font-size: 18px;
          line-height: 28px;
          cursor: pointer;
          margin-top: 16px !important;
        }

        .setted {
          display: flex;
          align-items: center;
          margin-top: 4px !important;

          .bg-img {
            display: block;
            width: 14px;
            height: 14px;
            background-size: 100% 100%;
            margin-right: 4px;
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

.exchange-info {
  position: relative;
  margin-top: 24px !important;

  .new-common-card {
    .info-title {
      line-height: 30px;
      font-size: 18px;
      padding-bottom: 24px;
      position: relative;
      display: flex;
      align-items: center;
      font-size: 24px !important;
    }

    .sx-price-info {
      border-top: 1px solid;
      border-bottom: 1px solid;
      padding: 24px 0;
      display: flex;
      align-items: center;

      .useBix {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .box-switch-green {
          width: 26px;
          height: 12px;
          box-sizing: border-box;
          border: 1px solid;
          border-radius: 2px;
          position: relative;
          z-index: 0;
          display: inline-block;
          cursor: pointer;
          margin-right: 12px !important;

          &.active {
            background: linear-gradient(270deg,
                #53e6b4 39.74%,
                hsla(0, 0%, 100%, 0));
          }

          .box-switch_label {
            font-size: 16px;
            line-height: 8px;
            transform: scale(0.5);
            display: inline-block;
            position: absolute;
            z-index: 0;
            top: 1px;
            left: -3px;
          }

          .box-switch_content {
            border-color: #384252;
            width: 14px;
            height: 16px;
            box-shadow: 0 4px 12px -2px rgba(56, 68, 108, 0.08);
            border-radius: 4px;
            position: absolute;
            z-index: 1;
            left: -7px;
            top: -4px;
            transition: all 0.3s;
            border: 1px solid;

            &.active {
              left: 17px;
            }
          }
        }

        .text {
          line-height: 20px;
          font-size: 14px !important;
          margin-right: 8px !important;
        }

        .discount {
          background-color: #31ad84;
          display: block;
          padding: 4px 8px;
          border-radius: 4px 8px 4px 4px;
          line-height: 12px;
          margin-right: 8px;
          font-size: 12px !important;
        }

        .else {
          width: 100%;
          font-style: normal;
          line-height: 16px;
          font-size: 12px !important;
          margin-top: 8px !important;
        }
      }

      .go-detail {
        display: flex;
        align-items: center;
        line-height: 20px;
        margin-left: auto;
        font-size: 14px !important;

        a {
          font-size: 18px !important;
          background-color: transparent;
          text-decoration: none;
        }

        i {
          line-height: 1em;
          height: 1em;
          font-size: 20px !important;
          margin-left: 8px !important;
        }
      }
    }

    .exchange-wrap-info {
      padding: 24px 0;
      display: flex;
      align-items: center;

      .exchange-item {
        position: relative;
        margin-right: 24px;
        flex: 1;

        &:nth-child(1)::after {
          content: "";
          display: block;
          position: absolute;
          width: 1px;
          height: 88px;
          top: 50%;
          margin-top: -44px;
          right: 0;
        }

        .levelInfo {
          display: flex;
          height: 46px;
          margin-bottom: 12px;
          position: relative;
          align-items: flex-start;

          &>span {
            display: block;
            line-height: 24px;
            font-size: 16px !important;
            margin-right: 8px !important;
          }

          .level-type-cont {
            .level-new {
              padding: 0 4px 0 0;
              height: 24px;
              border-radius: 14px;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              box-sizing: border-box;
              font-style: normal;
              font-size: 14px;
              font-weight: 500;
              border: 0;
              display: flex;
              align-items: center;
              margin-right: 16px !important;

              .ld-main {
                display: block;
                width: 20px;
                height: 20px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQA…KHIzixavNH9BoNBrN4fkGgnqs9xCMyG4AAAAASUVORK5CYII=) no-repeat 50%;
                background-size: 100% auto;
                line-height: 24px;
              }
            }

            .txt-pos-p {
              position: absolute;
              left: 0;
              bottom: 0;
              line-height: 20px;
              font-size: 14px !important;
            }
          }
        }

        .mkInfo {
          display: flex;
          align-items: center;

          li {
            flex: 1;

            &>p {
              display: flex;
              align-items: center;

              em {
                font-style: normal;
                margin-right: 4px !important;
                line-height: 20px;
                font-size: 14px !important;
              }
            }

            &>h4 {
              font-size: 14px;
              line-height: 24px;
              margin-top: 4px;
              font-weight: 500;
            }
          }
        }
      }
    }

    .lasted-exchang-info {
      border-top: 1px solid;
      padding: 24px 0 0;

      &>div {
        display: flex;
        align-items: center;

        &>div {
          display: flex;
          align-items: center;

          &.exchange-num {
            span {
              font-weight: 400;
              font-size: 14px;
              padding-right: 16px;
              position: relative;

              &::after {
                content: "";
                width: 1px;
                height: 24px;
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -12px;
              }
            }
          }

          &.exchange-type {
            padding-left: 16px;
            font-size: 14px;

            span {
              display: block;
              line-height: 24px;
              margin-right: 8px !important;
            }

            em {
              display: block;
              line-height: 24px;
              font-style: normal;
            }
          }
        }
      }
    }
  }
}

.info-banner {
  margin-top: 24px;
  position: relative;

  .swiper-container {
    &.swiper-no-swiping {
      .swiper-pagination {
        width: 100%;

        span {
          margin: 4px;
        }
      }
    }

    .swiper-wrapper {
      padding-bottom: 24px;

      .swiper-slide {
        .sock {
          display: flex;
          align-items: center;
          width: 100%;
          height: 68px;
          border-radius: 2px;
          width: 100%;
          height: 68px;
          border-radius: 2px;

          &>dt {
            width: 88px;
            height: 68px;

            img {
              width: 88px;
              height: 68px;
            }
          }

          &>dd {
            width: 100%;
            justify-content: space-between;
            display: flex;
            align-items: center;

            .left-text {
              margin-left: 8px;
              font-size: 16px;
            }

            .right-text {
              display: flex;
              align-items: center;

              &>p {
                height: 68px;
                padding-right: 24px;
                display: flex;
                align-items: center;
                position: relative;

                &>span {
                  font-weight: 500;
                  margin-left: 8px !important;

                  &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -18px;
                    width: 1px;
                    height: 36px;
                    background: rgba(131, 134, 143, 0.16);
                  }
                }
              }

              &>span:nth-child(2) {
                line-height: 16px;
                font-size: 12px !important;
                padding-left: 16px !important;
                padding-right: 8px !important;
              }

              &>span:nth-child(3) {
                line-height: 16px;
                font-size: 12px !important;
              }

              .btn-box {
                padding: 0 24px;

                button {
                  padding: 8px 24px;
                  border-color: #31ad84;
                  background-color: #31ad84;
                }
              }
            }
          }
        }

        .sock1 {
          background-color: #2954cc;
        }

        .sock2 {
          background-color: #165d94;
        }
      }
    }
  }

  .swiper-pagination {
    position: absolute;
    bottom: 4px;

    ::v-deep.swiper-pagination-bullet {
      background: #7d92a8;
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background-color: #0020FD;
        width: 16px !important;
        border-radius: 9px;
      }
    }
  }
}

.bottom-box {
  display: flex;
  align-items: center;
  margin-top: 24px !important;

  .pay-method-box {
    flex: 1;
    margin-right: 8px !important;

    &>h2 {
      padding-bottom: 31px;
    }

    .bank-list-container {
      .bank-list-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
          flex: 0 0 33%;

          &:not(:last-child) dl {
            padding-right: 16px;
            margin-right: 16px;
            border-right: 1px solid;
          }

          dl {
            height: auto;
            overflow: hidden;
            position: relative;

            dt {
              float: left;
              width: 20px;
              height: 20px;

              img {
                display: block;
                width: 20px;
                height: 20px;
                font-size: 20px;
              }
            }

            dd {
              width: auto;
              margin-left: 28px;
              position: relative;

              &>p {
                font-size: 14px;
                line-height: 18px;
              }

              &>h3 {
                display: flex;
                align-items: center;
                line-height: 24px;
                font-size: 16px;
                margin-top: 16px;
                width: calc(100% + 28px);
                transform: translateX(-28px);

                span {
                  cursor: pointer;
                }
              }

              .base-info {
                line-height: 24px;
                font-size: 16px;
                margin-top: 16px;
                width: calc(100% + 28px);
                transform: translateX(-28px);

                ::v-deep.hover-qrcode {
                  margin-left: auto;

                  .el-popover__reference-wrapper {
                    display: block;
                    width: 24px;
                    height: 24px;
                  }

                  i {
                    width: 24px;
                    height: 24px;
                    font-size: 24px;
                    cursor: pointer;
                  }
                }
              }

              .change-area {
                ::v-deep.el-popover__reference-wrapper {
                  position: absolute;
                  right: 5px;
                  top: 0;
                  width: 20px;
                  height: 20px;
                  line-height: 6px;
                  font-size: 20px;
                  text-align: center;
                  font-weight: 500;
                  cursor: pointer;
                  color: #7d92a8;
                }
              }
            }
          }
        }
      }
    }
  }

  .set-language {
    width: 486px;

    &.full {
      width: 100% !important;
    }

    &>h2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 18px !important;

      span {
        line-height: 16px;
        font-size: 12px !important;
        margin-top: 4px !important;
      }
    }

    &>ul {
      display: flex;
      align-items: center;
      margin-top: 16px !important;

      li {
        flex: 1;
        height: 56px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;

        &>.active {}
      }
    }
  }
}

.bottom-box {
  .api-content {
    .content-info {
      .info-item {
        padding-bottom: 5px;
        font-size: 14px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
<style lang="scss">
.theme-night {
  .el-popover {
    &.popover-qrcode {
      width: 350px !important;
      height: 350px !important;
      padding: 10px !important;
    }

    &.popover-change {
      width: 150px !important;
      height: auto !important;
      padding: 8px 0 !important;

      div.fit-tc-button {
        height: 36px;
        text-align: center;
        line-height: 36px;
        color: #f5faff;
        cursor: pointer;

        &:hover {
          background-color: #151d29;
          color: #0020FD;
        }
      }
    }
  }

  .account-info-box {
    .authentication {
      li {
        &>div:first-child {
          .title-icon {
            background-image: url(https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/step-two-icon.d02ba73.png);
          }

          .kyc-icon {
            background-image: url(https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/kyc-icon.ceaed6e.png);
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

        .setting {
          color: #0020FD;
        }

        .setted {
          .bg-img {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgBvVU9bFJRFP4uaAVTzHPTdiGpSQeHdjF24zWadFMmjbEJGAd1k8G/SRYXYyJb1dRIB2OcrKNxKCzGxKE4mQ6mTP4tD6UUaUuP53sPkL8nuPQk5PLOPed73zvfueca+Fh5W2wjiBsgJkBUV0vXkq5FXfMakh0dMYV+uabb4VQleiCIZ5poE0RdTPwoooAGlv6f0iTbTRYs13aROhw2RfhZdUcSG1vi8FeuSVpErH5x9G9UJVmpyXpFY5nnC6gBor/VqrLFEMY4xjOvB5ifTHYM8GPnZ47GN4Adp53MZk1eqXN9WIY+jJ3NLVlxHcpwui/9IYx1bbKjBsQpV8UOqMJJOjNvkZ+4I/GJ25I8dkvsQYCVbblrtEtC+xHj8+I7ZMGWC2obKtPVT18RvfDEjW3VU19W1CX9+Z5Z6geoAekfZWROP9CeDeCstll8MQHrRBQFw1o8fw/r/hsv4cwUMD8DXH8JfCm1wHMBg8LuDn6+uAL7+DgSj3LAQr7zZTfm3NzSPrL79fvvxtp3YEz5PtUKX15ygaPqTmrz49opQAHRD9Ctq4djBViHQ6E20G8eWCTkAY81CnLVVtCYPyAt4uGUKFRx8kjnZjfwzbnBgLQGTpGgeT5EQv7AF2cGAzJORaIG+QDqWKZj/mRvYBOYIv4LkDY76a2ieO6U4klQsexzjz3F/9eawo5byB0cMbMUCqaOS8q2lDnfW4ZBxnjmHbW08RWHPhc0rPNQaadY23bFh2XYECgVbszVjiHNs6zH7KGWwFrIAStrrd7rYUcNKOBoyB3kKb0Fss39nsnPiVPXM83pTkCK9aHo7bGfyarZLap0LqifHO6a/AY+xmljAjpsjHt9TNPn3lF6rYjBa6ocCZsc9sr+AD77ZIQTejsqAAAAAElFTkSuQmCC);
          }
        }
      }
    }

    .exchange-info {
      .new-common-card {
        .sx-price-info {
          border-color: #262d38;

          .box-switch-green {
            border-color: #262d38;
            background: linear-gradient(270deg, transparent, #636363);

            .box-switch_content {
              background-color: #384252;
              border-color: #384252;
            }
          }

          .go-detail {
            a {
              color: #27c28e;
            }

            i {
              color: #27c28e;
            }
          }
        }

        .level-type-cont {
          .level-new {
            color: #0020FD;
          }
        }

        .exchange-wrap-info {
          .exchange-item {
            &:nth-child(1)::after {
              background-color: #262d38;
            }
          }
        }

        .exchange-num {
          span::after {
            background-color: #262d38;
          }
        }
      }
    }

    .bank-list-container {
      .bank-list-wrap {
        li {
          dl {
            border-color: #262d38 !important;
          }

          dd {
            &>h3 {
              span {
                color: #0020FD;
              }
            }

            .base-info {
              i {
                color: #0020FD;
              }
            }
          }
        }
      }
    }

    .set-language {
      &>ul {
        li.active {
          color: #0020FD;
          background-color: #151d29;
        }
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
}

.theme-daytime {
  .el-popover {
    &.popover-qrcode {
      width: 350px !important;
      height: 350px !important;
      padding: 10px !important;
    }

    &.popover-change {
      width: 150px !important;
      height: auto !important;
      padding: 8px 0 !important;

      div.fit-tc-button {
        height: 36px;
        text-align: center;
        line-height: 36px;
        color: #4e6073;
        cursor: pointer;

        &:hover {
          background-color: #f5f6fa;
          color: #2954cc;
        }
      }
    }
  }

  .account-info-box {
    .authentication {
      li {
        &>div:first-child {
          .title-icon {
            background-image: url(https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/step-two-icon-light.199992e.png);
          }

          .kyc-icon {
            background-image: url(https://miniopic.baiyiex.com/baiyiex/public/PersonalCenter/kyc-icon-light.570628e.png);
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

        .setting {
          color: #2954cc;
        }

        .setted {
          .bg-img {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALNSURBVHgBvZVdSBRRFMfP7KyzuLoxla0afoxWPi0ZGVHRg2FEaQkWRFH4QRTVS4lQaA/5UPi0IAU9BFFvKUEaldFDmESPskYYKGWzKbirqdtuO62zH7dz6g67Lbvr2oN/OMzMOff+5n/PHe4ApFctRi+GC2MJg/Gri+d3pJsopMgpGA851IcxhvGB38sY1bxGGsRox1Ahg1q4G4puDkklyrdifOVjWzIBaYku7jYbKXw8SwVWIN4vGVYnGeJ9VxILA/B3KQr8nxQOHTYStIsp7WehVogb6eacWnqgz4Plb2myK9eZUtnJqkqvsc1ZAG8mmsmraCzkbnvpk3KZ8grFiqseJw6xGDOYAAGIwehUjzCZBthtkmw9Ze3++2AGRQQod99VuiJ+t2Ym+9L6qlEDODd0cW9w8unBwqbH96zldbbKG6wmBjArMvjOGOjqneILsaCnw7r1yPPik0MqTjn0xy/KvK5sGqE1JryXTVK+ZljILds/zZZ/bPA+Od6hud9sFBjYEFiFpX2e/npnAvBFsn3OkQnqi+k/rUbB5jg7s6nhgZNFQ7kGmPKzffXHtKlXR9MBSZzjo+WrEb9amlgkMF6c8y/PdRBYslePhWbe1WUCkiL+b8RRyelINOgtCS9NWJPBhuNsgOGlz1bsJ7VpBDcNQsCi58OLX8I2x5l/dtpi3+43yxXjgpjjLTox+BoyaGG4a5fuGaVvvtM4pYYFUdpddGroFu74AqxS1HcPtonp/o/4eMDE820squvegdOXk9uwkmg8zUMgrbqNciKv0VnpZWGtOfCp32Ep3jmeI1f+WglIDmf7Gq7EtPkSfLyE8TYRSqLD2I3gRm1icE/E59akgm2LYm5BOJW7uWfNh33vb7dwhwR8ZNQznvyCaNHEPPuMVOCYoEJMD9AOl0aDcyUsumzlzmjJKmSpWv524xA2/lF0RPZC/JeyNvoN+GE3238+rM0AAAAASUVORK5CYII=);
          }
        }
      }
    }

    .exchange-info {
      .new-common-card {
        .sx-price-info {
          border-color: #eff0f2;

          .box-switch-green {
            background: linear-gradient(270deg, transparent, #384252);
            border-color: #384252;

            .box-switch_content {
              background-color: #fff;
              border-color: #384252;
            }
          }

          .go-detail {
            a {
              color: #22a87b;
            }

            i {
              color: #22a87b;
            }
          }
        }

        .level-type-cont {
          .level-new {
            color: #2954cc;
          }
        }

        .exchange-wrap-info {
          .exchange-item {
            &:nth-child(1)::after {
              background-color: #eff0f2;
            }
          }
        }

        .exchange-num {
          span::after {
            background-color: #eff0f2;
          }
        }
      }
    }

    .bank-list-container {
      .bank-list-wrap {
        li {
          dl {
            border-color: #eff0f2 !important;
          }

          dd {
            &>h3 {
              span {
                color: #2954cc;
              }
            }

            .base-info {
              i {
                color: #2954cc;
              }
            }
          }
        }
      }
    }

    .set-language {
      &>ul {
        li.active {
          color: #2954cc;
          background-color: #f5f6fa;
        }
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
}
</style>
