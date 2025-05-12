<template>
  <div class="otc-wrapper min-h otc-common-box fit-background-di">
    <div class="otc-content fit-background" v-loading="requestPayCost">
      <div class="flex-box space-between otc-title">
        <span class="otc-title-left fit-tc-primary"> 普通买币 </span>
        <span
          class="otc-order-link fit-tc-primary active-text"
          @click="$router.push('/otc/order?serviceType=2')"
          ><i class="el-icon-document active-text"></i>
          订单记录
        </span>
      </div>
      <div class="flex-box space-between">
        <ul class="otc-tab">
          <li
            :class="{ 'otc-tab-item buy ': true, 'bg-active': tabIndex == '1' }"
            @click="tabIndex = '1'"
          >
            买入
          </li>
          <li
            class="fit-tc-tip"
            :class="{
              'otc-tab-item': true,
              sell: true,
              'bg-active': tabIndex == '2',
            }"
            @click="tabIndex = '2'"
          >
            卖出
          </li>
        </ul>
      </div>
      <div style="margin-top: 48px">
        <div class="flex-box symbol-select">
          <div class="input-area">
            <div class="input-label flex-box">您要支付</div>
            <div class="otc-input fit-background-di el-input-bg">
              <input
                type="number"
                autocomplete="off"
                :placeholder="otcInputTip"
                v-model="amountNumber"
                onKeypress="return (/[^e^-^+]/.test(String.fromCharCode(event.keyCode)))"
                class="el-input__inner fit-tc-primary"
                style="padding-left: 12px; padding-right: 132px"
                @keyup="handleRequest"
              />
              <span class="pay-select">
                <span class="pay-select-inner">
                  <el-dropdown
                    class="otc-el-dropdown"
                    trigger="click"
                    @command="chooseSource"
                    @visible-change="ifChooseSource = !ifChooseSource"
                  >
                    <span class="el-dropdown-link">
                      <img
                        class="fit-ta-border-color"
                        v-if="currSource.icon"
                        :src="currSource.icon"
                      />
                      <span class="label fit-tc-primary">{{
                        currSource.label
                      }}</span>
                      <i
                        class="
                          fit-tc-primary
                          otc-symbol-icon
                          el-icon-caret-bottom
                        "
                        :class="{
                          transform: ifChooseSource,
                        }"
                      ></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-for="item in sourceList"
                        :key="item.id"
                        :command="item"
                      >
                        <img :src="item.icon" alt="" />
                        <span
                          class="fit-tc-primary"
                          :class="{
                            active: currSource.id == item.id,
                          }"
                          >{{ item.label }}</span
                        >
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
              </span>
            </div>
            <div class="sell-limit" v-if="tabIndex == 2">
              <span class="fit-tc-tip"> 可出售 </span>
              <span class="fit-tc-primary">0</span>
              <span
                class="fit-tc-tertiary active-text"
                @click="transferDialog = true"
                >划转</span
              >
            </div>
          </div>
          <span class="icon-icon_link-wrap fit-background-di">
            <i class="el-icon-connection"></i>
          </span>
          <div class="receive-wrap">
            <div class="input-label flex-box" style="paddint-bottom: 8px">
              您将收到
            </div>
            <div class="otc-dropdown fit-background-di">
              <el-dropdown
                trigger="click"
                @command="chooseTarget"
                @visible-change="ifChooseTarget = !ifChooseTarget"
              >
                <span class="el-dropdown-link">
                  <img
                    class="otc-symbol-img"
                    v-if="currTarget.icon"
                    :src="currTarget.icon"
                  />
                  <span class="otc-symbol-name fit-tc-primary">{{
                    currTarget.label
                  }}</span>
                  <i
                    class="fit-tc-primary otc-symbol-icon el-icon-caret-bottom"
                    :class="{
                      transform: ifChooseTarget,
                    }"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="item in targetList"
                    :key="item.id"
                    :command="item"
                  >
                    <img v-if="currTarget.icon" :src="item.icon" />
                    <span
                      :class="{
                        active: currTarget.id == item.id,
                      }"
                      >{{ item.label }}</span
                    >
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
        <div
          class="flex-box otc-pc-limit"
          :class="{
            'fit-tc-tip': true,
            'fit-error': !validateLimit && amountNumber.length,
          }"
        >
          <span class="limit-left">限额:</span>
          <span class="limit-right"> {{ limittip }} </span>
        </div>
      </div>
      <div class="payment-area">
        <div class="payment-trigger">
          <div class="payment-trigger-title fit-tc-primary">
            1. 选择支付方式
          </div>
          <div class="otc-dropdown">
            <el-dropdown
              trigger="click"
              @command="choosePayType"
              @visible-change="ifChoosePay = !ifChoosePay"
            >
              <span
                class="fit-tc-primary"
                :class="{ 'el-dropdown-link': true, active: ifChoosePay }"
              >
                <img class="otc-symbol-img" :src="currPayType.icon" alt="" />
                <span class="otc-symbol-name">{{
                  currPayType.pay_method
                }}</span>
                <i
                  class="fit-tc-primary otc-symbol-icon el-icon-caret-bottom"
                  :class="{
                    transform: ifChoosePay,
                  }"
                ></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in payTypeList"
                  :key="item.pay_method_id"
                  :command="item"
                >
                  <img :src="item.icon" alt="" />
                  <span
                    :class="{
                      active: currPayType.pay_method_id == item.pay_method_id,
                    }"
                    >{{ item.pay_method }}</span
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="service-list-trigger">
          <div class="service-trigger-title fit-tc-primary">2. 服务商选择</div>
          <div class="otc-service-list-content">
            <div
              v-for="item in serveList"
              :class="{
                'service-item': true,
                active: currServe.pay_service_id == item.pay_service_id,
              }"
              :key="item.pay_service_id"
              @click="chooseService(item)"
            >
              <div class="flex-box">
                <img class="service-icon" :src="item.icon" />
                <span class="service-name">
                  {{ item.en_name }}
                </span>
                <div class="estimate flex-box" v-if="item.estimate">
                  <span class="article-tip">预计获得</span>
                  <span class="fit-tc-primary">{{ item.estimate }}</span>
                  <span class="article-tip">{{ currTarget.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment-info">
        <div
          class="payment-info-item"
          v-for="item in paymentInfoList"
          :key="item.value"
        >
          <span class="label fit-tc-tip">{{ item.label }}</span>
          <span class="value fit-tc-primary">{{ item.value }}</span>
        </div>
        <div class="fit-tc-tertiary countDown" v-if="validateLimit">
          <p>当前价格会根据市场波动而变化，每10s刷新一次</p>
          <span class="fit-error">{{ `[${countDown}s]` }}</span>
        </div>
        <el-button
          type="info"
          class="pay-button"
          :disabled="!amountNumber.length || !validateLimit"
          plain
          @click="buyCoin"
          v-loading="generating"
          >去购买</el-button
        >
      </div>
    </div>

    <el-dialog
      :visible.sync="kycDialog"
      width="400px"
      :before-close="handleClose"
      class="real-name-tip el-message-box__wrapper"
    >
      <div>
        <div class="real-name-img"></div>
        <div class="fit-tc-primary title">实名认证</div>
        <div class="fit-tc-tip tips">
          {{
            userInfo.real_name_status == 1
              ? "实名认证正在审核中... 请耐心等候"
              : "法币交易需要完成KYC实名认证,才能使用此功能"
          }}
        </div>
        <div class="el-message-box__btns">
          <el-button type="primary" @click="comfirmKyc">
            {{ userInfo.real_name_status == 1 ? "确定" : "身份验证" }}
          </el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 划转弹框 -->
    <fund-transfer
      v-if="transferDialog"
      :transferDialog="transferDialog"
      :closeDialog="closeDialog.bind(this)"
    ></fund-transfer>

    <!-- 聊天框 -->
    <business-chat-box
      v-if="businessChatDialog"
      :businessChatDialog="businessChatDialog"
      :closeDialog="closeDialog.bind(this)"
      :userInfo="userInfo"
      :orderData="currOrderData"
    ></business-chat-box>
  </div>
</template>

<script>
import {
  getFiatCurrency,
  getQuotedPrice,
  getSupportService,
  newCommonOrder,
  getServicePayment,
} from "@/api/otc.js";

import { mapGetters } from "vuex";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
import businessChatBox from "@/components/chat/business-chat-box.vue";
export default {
  components: { fundTransfer, businessChatBox },
  watch: {
    tabIndex: {
      handler(newVal) {
        if (newVal == 1) {
          this.otcInputTip = "请输入购买金额";
          this.sourceList = this.deepClone(this.allFiatList);
        } else {
          this.otcInputTip = "请输入出售数量";
          this.sourceList = this.deepClone(this.allcoinList);
        }

        this.amountNumber = "";
        this.chooseSource(this.sourceList[0]);
      },
    },
  },
  data() {
    return {
      tabIndex: "1",
      otcInputTip: "请输入购买金额",
      generating: false, //正在生成订单
      requestPayCost: false, //请求支付金额状态

      ifChooseSource: false, //是否在选择源货币
      ifChoosePay: false, //是否在选择支付方式
      ifChooseTarget: false, //是否在选择目标货币

      sourceList: [], //源币列表
      targetList: [], //目标币列表

      currSource: {}, //当前源币
      currTarget: {}, //当前目标币

      amountNumber: "", //金额/数量

      allFiatList: [], //所有法币集合
      allcoinList: [], //所有币种集合
      payTypeList: [], //支付方式
      serveList: [], //服务商列表
      currPayType: {}, //当前支付方式
      currServe: {}, //当前服务商列表

      countDown: 10, //倒计时
      countDownTimer: null, //10秒定时器
      refreshTimer: null, //0.5秒延时器

      kycDialog: false, //提醒实名认证弹框
      transferDialog: false, //划转弹框

      businessChatDialog: false, //商家聊天窗口
      currOrderData: {}, //传入订单数据
    };
  },
  created() {
    getFiatCurrency().then((res) => {
      let dataRes = res.data.data;
      this.allFiatList = dataRes.fiat;
      this.allcoinList = dataRes.coin;

      //设置当前法币
      this.sourceList = this.allFiatList;
      if (this.sourceList.length) {
        this.chooseSource(this.sourceList[0]);
      }
    });
  },
  methods: {
    handleRequest() {
      if (this.refreshTimer) {
        clearTimeout(this.refreshTimer);
      }

      if (this.amountNumber && this.validateLimit) {
        this.refreshTimer = setTimeout(() => {
          this.getQuotedPriceFun("loading");
        }, 500);
      }
      //重置倒数
      this.resetcountDown();
    },
    resetcountDown() {
      //清空定时器
      if (this.refreshTimer) {
        clearInterval(this.countDownTimer);
        this.countDown = 10;
      }
      if (this.amountNumber && this.validateLimit) {
        this.countDownTimer = setInterval(() => {
          if (this.countDown > 1) {
            this.countDown--;
          } else {
            this.getQuotedPriceFun();
            this.countDown = 10;
          }
        }, 1000);
      }
    },
    comfirmKyc() {
      if (this.userInfo.real_name_status == 1) {
        this.kycDialog = false;
      } else {
        this.kycDialog = false;
        this.$router.push("/account/center/kyc");
      }
    },
    chooseSource(data) {
      this.currSource = this.deepClone(data);
      this.currTarget = {};
      let params = {};

      if (this.tabIndex == 1) {
        params = {
          id: this.currSource.id,
          fiat: this.currSource.label,
        };
      } else {
        params = {
          id: this.currSource.id,
        };
      }

      getSupportService(params).then((res) => {
        this.targetList = res.data.data;

        if (!this.targetList.length) {
          this.currTarget = {};
          return false;
        }

        this.chooseTarget(this.targetList[0]);

        if (this.amountNumber && this.validateLimit) {
          this.getQuotedPriceFun("loading");
        }
      });
    },
    chooseTarget(data) {
      this.currTarget = this.deepClone(data);

      if (data.id && data.method.length) {
        this.payTypeList = data.method;

        this.choosePayType(data.method[0]);

        if (this.amountNumber && this.validateLimit) {
          this.getQuotedPriceFun("loading");
        }
      } else {
        this.payTypeList = {};
        this.currPayType = {};
      }
    },
    choosePayType(data) {
      this.currPayType = this.deepClone(data);

      if (data.pay_method_id && data.service.length) {
        this.serveList = data.service;
        this.chooseService(data.service[0]);
      } else {
        this.serveList = [];
        this.currServe = {};
      }
    },
    chooseService(data) {
      this.currServe = this.deepClone(data);
    },
    buyCoin() {
      if (this.userInfo.real_name_status != "2") {
        this.kycDialog = true;
        return false;
      }

      let data = {
        coinCou: this.tabIndex == 2 ? this.amountNumber : "",
        fiatCurrencyAmount: this.tabIndex == 1 ? this.amountNumber : "",
        coinId: this.tabIndex == 1 ? this.currTarget.id : this.currSource.id,
        coinSymbol:
          this.tabIndex == 1 ? this.currTarget.label : this.currSource.label,
        countryId: this.tabIndex == 2 ? this.currTarget.id : this.currSource.id,
        fiatCurrency:
          this.tabIndex == 1 ? this.currSource.label : this.currTarget.label,
        payMethodId: this.currPayType.pay_method_id,
        payService: this.currServe.zh_name || "",
        payServiceId: this.currServe.pay_service_id,
        type: this.tabIndex,
        serviceType: "2",
      };
      //正在产生订单
      this.generating = true;

      newCommonOrder(data)
        .then((res) => {
          this.generating = false;
          this.$message({ type: "success", message: "下单成功" });
          this.amountNumber = "";
          this.resetcountDown();
          getServicePayment({ orderId: res.data.data }).then((dataRes) => {
            this.currOrderData = {
              id: res.data.data,
              ...dataRes.data.data,
            };
            this.businessChatDialog = true;
          });
        })
        .catch(() => {
          this.generating = false;
        });
    },
    getQuotedPriceFun(type) {
      if (type && type == "loading") {
        this.requestPayCost = true;
      }

      let serviceIds = [];
      this.serveList.forEach((item) => {
        serviceIds.push(item.pay_service_id);
      });

      let data = {
        serviceIds: serviceIds,
        source: this.currSource.label,
        target: this.currTarget.label,
        amount: this.amountNumber,
      };
      getQuotedPrice(data)
        .then((res) => {
          let priceData = res.data.data;
          this.serveList = this.serveList.map((child) => {
            priceData.forEach((item) => {
              if (child.pay_service_id == item.service_id) {
                child.estimate = item.price;
              }

              if (item.pay_service_id == this.currServe.service_id) {
                this.currServe.estimate = item.price;
              }
            });

            return child;
          });
          this.requestPayCost = false;
          this.resetcountDown();
        })
        .catch(() => {
          this.requestPayCost = false;
        });
    },
    closeDialog(type) {
      if (type == "transferDialog") {
        this.transferDialog = false;
      } else if (type == "businessChatDialog") {
        this.businessChatDialog = false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    //清除定时器
    next();
    if (this.countDownTimer) {
      clearInterval(this.countDownTimer);
      this.countDownTimer = null;
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    validateLimit: function () {
      if (this.amountNumber.length) {
        if (this.tabIndex == 1) {
          return (
            this.amountNumber * 100000000 >=
              this.currTarget.min_buy * 100000000 &&
            this.amountNumber * 10000000 <= this.currTarget.max_buy * 100000000
          );
        } else {
          return (
            this.amountNumber * 100000000 >=
              this.currSource.min_sell * 100000000 &&
            this.amountNumber * 100000000 <=
              this.currSource.max_sell * 100000000
          );
        }
      } else {
        return false;
      }
    },
    limittip: function () {
      if (this.tabIndex == 1) {
        return `${Number(this.currTarget.min_buy) || 0} ${
          this.currSource.label
        } - ${Number(this.currTarget.max_buy) || 0} ${this.currSource.label}`;
      } else {
        return `${Number(this.currSource.min_sell) || 0} ${
          this.currSource.name
        } - ${Number(this.currSource.max_sell) || 0} ${this.currSource.label}`;
      }
    },
    paymentInfoList: function () {
      let paymentInfo = [];
      if (this.tabIndex == 1) {
        paymentInfo = [
          {
            label: "渠道",
            value: this.currServe.en_name || "--",
          },
          {
            label: "支付金额",
            value: `${this.amountNumber || "--"} ${
              this.currSource.label || "--"
            }`,
          },
          {
            label: "获得",
            value: `${this.currServe.estimate || "--"} ${
              this.currTarget.label || "--"
            }`,
          },
          {
            label: "支付方式",
            value: `${this.currPayType.pay_method || "--"}`,
          },
        ];
      } else if (this.tabIndex == 2) {
        paymentInfo = [
          {
            label: "渠道",
            value: this.currServe.en_name || "--",
          },
          {
            label: "卖出数量",
            value: `${this.amountNumber || "--"} ${
              this.currSource.label || "--"
            }`,
          },
          {
            label: "获得",
            value: `${this.currServe.estimate || "--"} ${
              this.currTarget.label || "--"
            }`,
          },
          {
            label: "支付方式",
            value: `${this.currPayType.pay_method || "--"}`,
          },
        ];
      }

      return paymentInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.space-between {
  justify-content: space-between;
}

.real-name-tip {
  .real-name-img {
    width: 72px;
    height: 72px;
    margin: 0 auto;
    background-size: 100% 100%;
  }
  .title {
    text-align: center;
    line-height: 24px;
    font-weight: 700;
    font-size: 20px !important;
    margin-top: 24px !important;
    margin-bottom: 8px !important;
  }

  .tips {
    text-align: center;
    line-height: 20px;
    font-size: 14px !important;
  }

  button {
    width: 100%;
    margin-top: 24px !important;
  }
}

.otc-wrapper {
  padding: 40px 0;
  &.min-h {
    min-height: calc(100vh - 517px);
    box-sizing: border-box;
  }

  .otc-content {
    padding: 32px 40px 40px;
    box-sizing: border-box;
    max-width: 900px;
    margin: 0 auto;
    .otc-title {
      margin-bottom: 24px !important;
      .otc-title-left {
        line-height: 48px;
        font-size: 32px !important;
      }
      .otc-order-link {
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        line-height: 20px;
        font-size: 14px !important;
        i {
          line-height: 1em;
          height: 1em;
          margin-right: 4px !important;
        }
      }
    }
    .otc-tab {
      display: flex;
      align-items: center;
      border-radius: 2px;
      padding: 2px;
      .otc-tab-item {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        box-sizing: border-box;
        padding: 8px;
        width: 140px;
        cursor: pointer;
        text-align: center;
        transition: all 0.3s;

        &.bg-active {
          box-shadow: 0 4px 8px rgba(26, 48, 82, 0.04),
            0 8px 32px rgba(26, 48, 82, 0.08);
          border-radius: 2px;
        }

        &.buy {
          &.bg-active {
            color: #27c28e;
            border-radius: 2px;
          }
          &:hover {
            color: #27c28e;
          }
        }

        &.sell {
          &.bg-active {
            color: #e04d43;
            border-radius: 2px;
          }
          &:hover {
            color: #e04d43;
          }
        }
      }
    }
    .symbol-select {
      align-items: flex-end;
      .input-area {
        position: relative;

        .input-label {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }
        .otc-input {
          position: relative;
          width: 378px;
          overflow: hidden;
          margin-top: 8px !important;
          font-size: 14px;
          height: 48px !important;

          input {
            height: 48px !important;
            border: none;
            &::-webkit-input-placeholder {
              color: #688199;
            }
          }

          .pay-select {
            width: 120px;
            height: 46px;
            right: 0px;
            top: 1px !important;
            border: none;
            position: absolute;
            display: inline-block;
            padding: 1px 0;
            &::before {
              content: "";
              position: absolute;
              left: -1px;
              top: 11px;
              width: 1px;
              height: 24px;
            }
            .pay-select-inner {
              width: 100%;
              height: 100%;
              .otc-el-dropdown {
                width: 100%;
                height: 46px;
                .el-dropdown-link {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    height: 20px;
                    margin-right: 8px !important;
                    padding-left: 8px;
                  }
                  .label {
                    width: 50px;
                    height: 46px !important;
                    line-height: 46px;
                    padding: 0;
                  }

                  .otc-symbol-icon {
                    transition: all 0.3s;
                    &.transform {
                      transform: rotate(180deg);
                    }
                  }
                }
              }
            }
          }
        }
        .sell-limit {
          position: absolute;
          width: 378px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          left: 0;
          bottom: -22px;
          font-size: 12px;
          line-height: 18px;
          span:nth-child(2) {
            margin-left: 4px !important;
          }

          span:nth-child(3) {
            margin-left: 4px !important;
            cursor: pointer;
          }
        }
      }
      .icon-icon_link-wrap {
        font-size: 24px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 12px;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;
        i {
          font-size: 16px;
          line-height: 1em;
          height: 1em;
        }
      }
      .receive-wrap {
        position: relative;

        .input-label {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }

        .otc-dropdown {
          margin-top: 8px !important;
        }
      }
    }
    .otc-pc-limit {
      margin-top: 4px;
      padding-bottom: 24px;

      span {
        font-size: 12px !important;
        line-height: 16px;
      }
      .limit-left {
      }
      .limit-right {
        margin-left: 8px !important;
      }
    }

    .payment-area {
      display: flex;
      padding-top: 24px;
      align-items: flex-start;
      .payment-trigger {
        flex: 1;
        margin-right: 64px;
        .payment-trigger-title {
          line-height: 20px;
          font-size: 14px !important;
          margin-bottom: 8px !important;
        }
        .el-dropdown-link.active {
          // border-color: #0020FD;
        }
      }
      .service-list-trigger {
        flex: 1;
        .service-trigger-title {
          line-height: 20px;
          font-size: 14px !important;
          margin-bottom: 8px !important;
        }
        .otc-service-list-content {
          padding: 0;
          margin: 0;
          font-weight: 400;

          .service-item:not(:last-of-type) {
            margin-bottom: 12px;
          }
          .service-item {
            height: 48px;
            padding: 0 24px 0 12px;
            box-sizing: border-box;
            border: 1px solid;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            border-radius: 2px;
            &:hover {
              border-color: #0020FD !important;
              position: relative;
              background-color: rgba(64, 140, 255, 0.1);
            }
            &.active {
              border-color: #0020FD !important;
              position: relative;
              background-color: rgba(64, 140, 255, 0.1);
              &:after {
                content: "";
                position: absolute;
                right: 0;
                bottom: 0;
                width: 24px;
                height: 24px;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgB1Zc7SBxBHMY/zcMiD0gRkiYELk2S6kICJk1IYYpAULEQ1N5OwUosRDsbO0srC7VQRHsLsRAVFCsfCD46RUFRrlARnc9xdfdu93Z2Z3Zv5wfL7Q0z8Ptm/jO7C1jMn8GbvipYCuXFT7+VARx53lsXwC1PrApQLE+sCeAnT6wIECRPMh+gnDzJdIAweZLZACryJJMBVOVJ5gJEkSeZChBVnmQmQBx5kokAceVJxQPoyJOKBtCVJxULYEKeVCSAKXmSegCT8iTVAKblSWoBkpAnqQRISp48QcLoyL97DfT+l/c7x/59Eg2gO/Ptv4FfOXF9EmFeAbtHQOHS2yexALrydV+AttrH/7m3wOE5sHXg7VeNBNCVf1EDtNZ62w7PgJm10r7GA5jYsI15Wf9ueqb8+xoNYEKe4sWzP7okV8APYwFMHZUDTd7/QaXjYCSAKXm/0hkTs1+4CB6jHcCUPMXr89622XVxbZQfpxVARZ4nCo/EMFj37tln6Ywth497ipiozjzP8oa8PMdHA8qBAYtDsu6DNq6bWCugKs+abrgvC/4OtcgnqpsoZ74fkZ/EqvIU6/oLvKx5bON93Vfg6hrYvH+iNv+QrwpuOsfLb1w3kQJE2bCUXNwBfua8IZ6Lov3+UbadFIDuf95xLDOOU0X5dTruaeOUSGM+vC9LpyPC7BOlFdA5KrkSq/tS6vN7uQJBDM+XvqyFERrA1DlPsfnt0pJymBabdnIFkSkbwPSXFFeBD6ZnYhU+vJGrwbYJIT6ygFgE7oEkPwMdeKTyHV8H3wBpyJuiJIBN8sQTwDZ58hDARnncYOYugJXywCmu8K3aQvlTcc1Rfq6nau8WHA34YPYe67YAAAAASUVORK5CYII=);
                background-size: 100% 100%;
              }
            }

            .service-icon {
              height: 24px;
              font-size: 24px;
              margin-right: 8px;
            }

            .estimate {
              margin-left: auto;
              font-size: 12px !important;
              line-height: 16px;
              span:nth-child(1) {
                margin-right: 4px !important;
              }

              span:nth-child(3) {
                margin-left: 4px !important;
              }
            }
          }
        }
      }
    }
    .payment-info {
      margin-top: 24px;
      padding-top: 24px;
      font-size: 14px;
      .payment-info-item {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .countDown {
        font-size: 12px;
        line-height: 16px;
        display: flex;
        span {
          margin-left: 4px !important;
        }
      }
      .pay-button {
        background-color: #0020FD;
        border-color: #0020FD;
        color: #fff;
        margin-top: 24px;
        width: 100%;
        border: 0;
        opacity: 1;
      }
    }
  }
}

.otc-dropdown {
  width: 100%;
  .el-dropdown {
    width: 100%;
    .el-dropdown-link {
      cursor: pointer;
      box-sizing: border-box;
      width: 378px;
      border-radius: 2px;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      padding: 11px 12px;
      .otc-symbol-img {
        font-size: 20px;
        height: 20px;
        display: inline-flex;
        margin-right: 8px !important;
      }
      .otc-symbol-name {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-right: 8px;
      }
      .otc-symbol-icon {
        margin-left: auto;
        font-size: 16px;
        transition: all 0.3s;
        display: inline-block;
        &.transform {
          transform: rotate(180deg);
        }
      }
    }
  }
}

.currency_option {
  padding: 10px 24px !important;

  img {
    width: 20px;
    height: 20px;
    display: inline-flex;
    margin-right: 8px !important;
  }

  .otc-symbol-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-right: 8px;
  }
}

.el-dropdown-menu {
  width: 378px;
  max-height: 400px;
  overflow-y: scroll;
  li {
    display: flex;
    align-items: center;
    padding: 10px 24px !important;
    img {
      width: 20px;
      height: 20px;
      display: inline-flex;
      margin-right: 8px !important;
      border-style: none;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-right: 8px;
    }
  }
}
</style>
<style lang="scss">
.theme-night {
  .real-name-tip {
    .real-name-img {
      background-image: url(https://miniopic.baiyiex.com/baiyiex/public/common/real-name-dark.4167dec.png);
    }
  }

  .otc-common-box {
    .otc-tab {
      background-color: #1f2733;
      color: #9bb4cc;
      .bg-active {
        background-color: #2e3847;
      }
    }
    .pay-button.is-disabled {
      color: #688199 !important;
      background-color: #384252 !important;
      border-color: #384252 !important;
    }
    .otc-input {
      .pay-select::before {
        background-color: #384252;
      }
    }
    .otc-pc-limit {
      border-bottom: 1px dashed #384252;
    }
    .payment-info {
      border-top: 1px dashed #384252;
    }
    .payment-area {
      .otc-dropdown {
        border: 1px solid #262d38;
      }
      .service-item {
        border: 1px solid #262d38 !important;
      }
    }
  }
}
.theme-daytime {
  .real-name-tip {
    .real-name-img {
      background-image: url(https://miniopic.baiyiex.com/baiyiex/public/common/real-name-light.4d3af86.png);
    }
  }
  .otc-common-box {
    .otc-tab {
      background-color: #f5f6fa;
      color: #4e6073;
      .bg-active {
        background-color: #fff;
      }
    }
    .pay-button.is-disabled {
      color: #a3b2c2 !important;
      background-color: rgba(131, 134, 143, 0.16) !important;
      border-color: rgba(131, 134, 143, 0.16) !important;
      opacity: 1;
    }
    .otc-input {
      .pay-select::before {
        background-color: #d8dfeb;
      }
    }
    .otc-pc-limit {
      border-bottom: 1px dashed #d8dfeb;
    }
    .payment-info {
      border-top: 1px dashed #d8dfeb;
    }
    .payment-area {
      .otc-dropdown {
        border: 1px solid #eff0f2;
      }
      .service-item {
        border: 1px solid #eff0f2 !important;
      }
    }
  }
}
</style>
