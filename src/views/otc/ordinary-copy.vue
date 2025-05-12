<template>
  <div class="otc-ordinary-box main">
    <div class="main-body">
      <div class="max-w">
        <div class="main-content">
          <div class="the-text">
            <p class="ttile1 fit-tc-primary">
              {{ currCoinLangFun("ordinary_title") }}
            </p>
            <p class="ttile2 fit-tc-tip">
              {{ currCoinLangFun("ordinary_aqgxgm") }}
            </p>
            <!-- <div class="ttile3 fit-tc-tip">
              <span>如若购买其他数字资产, 请前往场外合作平台</span>
              <span class="link fit-tc-tertiary active-text">
                LinkCoin
                <i class="el-icon-top-right"></i>
              </span>
            </div> -->
            <div class="coinImg">
              <!-- <span></span>
              <span></span>
              <span></span>
              <span></span>-->
            </div>
            <p class="title4 fit-tc-primary">
              {{ currCoinLangFun("ordinary_fdhbhszb") }}
            </p>
            <p class="title5 fit-tc-tip">
              {{ currCoinLangFun("ordinary_advantage") }}
            </p>
            <div class="instructions">
              <div
                class="
                  instructions-btn
                  fit-background-di fit-tc-primary
                  active-text
                "
              >
                {{ currCoinLangFun("text_use_Instructions", "article") }}
              </div>
              <div
                class="
                  instructions-btn
                  fit-background-di fit-tc-primary
                  active-text
                "
              >
                {{ currCoinLangFun("text_aqgfzd", "article") }}
              </div>
            </div>
          </div>
          <div>
            <div class="buy-main">
              <div class="buy-top-title" v-if="isLogin">
                <span
                  class="right fit-tc-primary active-text"
                  @click="$router.push('/otc/order?serviceType=1')"
                >
                  <i class="el-icon-document"></i>
                  {{ currCoinLangFun("text_order_records", "all") }}
                </span>
              </div>
              <div class="type-symbol">
                <div
                  class="tab-btn fit-tc-tip"
                  :class="{ disactive: orderType != 'buy' }"
                  @click="serOrderType('buy')"
                >
                  <span>{{ currCoinLangFun("text_buy", "all") }}</span>
                </div>
                <div
                  class="tab-btn fit-tc-tip"
                  :class="{ disactive: orderType != 'sell' }"
                  @click="serOrderType('sell')"
                >
                  <span>{{ currCoinLangFun("text_sell", "all") }}</span>
                </div>
              </div>
              <div class="order-inputs">
                <div class="order-inputs-main">
                  <div class="input-box source">
                    <p class="fit-tc-tip title">
                      {{
                        orderType == "buy"
                          ? currCoinLangFun("text_need_pay")
                          : currCoinLangFun("text_need_sell")
                      }}
                    </p>
                    <div class="money-input">
                      <input
                        type="number"
                        onkeypress="return (/[^-^e^+]/.test(String.fromCharCode(event.keyCode)))"
                        :class="{
                          'input-ontology': true,
                          'input-error': !AmountCheck,
                        }"
                        placeholder="0.00"
                        v-model="sourceValue"
                        @input="sourceValChangeFun(sourceValue)"
                      />
                      <div class="equivalent">
                        <span class="box-line"></span>
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
                            <span class="label fit-tc-primary">
                              {{ currSource.label }}
                            </span>
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
                          <el-dropdown-menu
                            slot="dropdown"
                            v-if="filterSource.length"
                          >
                            <template v-for="item in filterSource">
                              <el-dropdown-item
                                :key="item.value"
                                :command="item"
                              >
                                <img :src="item.icon" alt />
                                <span
                                  class="fit-tc-primary"
                                  :class="{
                                    active: currSource.value == item.value,
                                  }"
                                  >{{ item.label }}</span
                                >
                              </el-dropdown-item>
                            </template>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>
                      <div>
                        <div
                          v-if="orderType == 'buy'"
                          class="tip-text fit-tc-primary"
                          :class="{ 'error-text': !AmountCheck }"
                        >
                          <span>
                            {{
                              exchangeRateFilter(
                                currTarget.min_buy || 0,
                                currTarget.usdtRate || 0
                              )
                            }}{{ ` ${currSource.label || ""}` }}～{{
                              exchangeRateFilter(
                                currTarget.max_buy || 0,
                                currTarget.usdtRate || 0
                              )
                            }}{{ ` ${currSource.label || ""}` }}
                          </span>
                        </div>
                        <div
                          v-else
                          class="tip-text fit-tc-primary"
                          :class="{ 'error-text': !AmountCheck }"
                        >
                          <span>
                            {{ currCoinLangFun("text_available_balance") }}：
                            {{ computeSurplusNum(currSource.surplusNum || "")
                            }}{{ ` ${currSource.label || ""}` }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input-box target">
                    <p class="fit-tc-tip title">
                      {{ currCoinLangFun("text_will_get") }}
                    </p>
                    <div class="money-input">
                      <input
                        type="number"
                        onkeypress="return (/[^-^e^+]/.test(String.fromCharCode(event.keyCode)))"
                        :class="{
                          'input-ontology': true,
                        }"
                        placeholder="0.00"
                        v-model="targetValue"
                        @input="targetValChangeFun(targetValue)"
                      />
                      <div class="equivalent">
                        <span class="box-line"></span>
                        <el-dropdown
                          class="otc-el-dropdown"
                          trigger="click"
                          @command="chooseTarget"
                          @visible-change="ifChooseTarget = !ifChooseTarget"
                        >
                          <span class="el-dropdown-link">
                            <img
                              class="fit-ta-border-color"
                              v-if="currTarget.icon"
                              :src="currTarget.icon"
                            />
                            <span class="label fit-tc-primary">
                              {{ currTarget.label }}
                            </span>
                            <i
                              class="
                                fit-tc-primary
                                otc-symbol-icon
                                el-icon-caret-bottom
                              "
                              :class="{
                                transform: ifChooseTarget,
                              }"
                            ></i>
                          </span>
                          <el-dropdown-menu
                            slot="dropdown"
                            v-if="filterTarget.length"
                          >
                            <template v-for="item in filterTarget">
                              <el-dropdown-item
                                :key="item.value"
                                :command="item"
                              >
                                <img :src="item.icon" alt />
                                <span
                                  class="fit-tc-primary"
                                  :class="{
                                    active: currTarget.value == item.value,
                                  }"
                                  >{{ item.label }}</span
                                >
                              </el-dropdown-item>
                            </template>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>
                    </div>
                    <div class="text">
                      <span
                        class="fit-tc-primary"
                        v-if="currTarget.label && currSource.label"
                      >
                        1{{ ` ${currTarget.label}` }} ≈ {{ computedRate
                        }}{{ ` ${currSource.label}` }}
                      </span>
                      <span class="fit-tc-tip">{{
                        currCoinLangFun("ordinary_refresh_rule")
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="pay_way" v-if="isLogin">
                  <div class="pay_way_text">
                    <span class="fit-tc-tip">
                      {{
                        orderType == "buy"
                          ? currCoinLangFun("text_pay_way")
                          : currCoinLangFun("text_collection_way")
                      }}
                    </span>
                  </div>
                  <div class="order-ways" v-if="orderType == 'buy'">
                    <div v-if="payWayList.length">
                      <div class="payment-area">
                        <div class="payment-trigger">
                          <div class="otc-dropdown">
                            <el-dropdown
                              trigger="click"
                              @command="choosePayWay"
                              @visible-change="ifChoosePay = !ifChoosePay"
                            >
                              <span
                                class="fit-tc-primary"
                                :class="{
                                  'el-dropdown-link': true,
                                  active: ifChoosePay,
                                }"
                              >
                                <img
                                  class="otc-symbol-img"
                                  :src="currPayWay.icon"
                                  alt
                                />
                                <span class="otc-symbol-name">
                                  {{ currPayWay.pay_method || "" }}
                                </span>
                                <i
                                  class="
                                    fit-tc-primary
                                    otc-symbol-icon
                                    el-icon-caret-bottom
                                  "
                                  :class="{
                                    transform: ifChoosePay,
                                  }"
                                ></i>
                              </span>
                              <el-dropdown-menu
                                slot="dropdown"
                                class="otc-dropdown-payment"
                              >
                                <el-dropdown-item
                                  v-for="item in payWayList"
                                  :key="item.pay_method_id"
                                  :command="item"
                                >
                                  <img :src="item.icon" alt />
                                  <span
                                    :class="{
                                      active:
                                        currPayWay.pay_method_id ==
                                        item.pay_method_id,
                                    }"
                                    >{{ item.pay_method }}</span
                                  >
                                </el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="!payWayList.length" class="fit-error none-text">
                      <p>{{ currCoinLangFun("ordinary_no_payway") }}</p>
                    </div>
                  </div>
                  <div class="order-ways" v-if="orderType == 'sell'">
                    <div v-if="filterMyPayMethods.length">
                      <div class="payment-area">
                        <div class="payment-trigger">
                          <div class="otc-dropdown">
                            <el-dropdown
                              trigger="click"
                              @command="chooseSellWay"
                              @visible-change="ifChooseSell = !ifChooseSell"
                            >
                              <span
                                class="fit-tc-primary"
                                :class="{
                                  'el-dropdown-link': true,
                                  active: ifChooseSell,
                                }"
                              >
                                <img
                                  class="otc-symbol-img"
                                  :src="currSellWay.icon"
                                  alt
                                />
                                <span class="otc-symbol-name">
                                  {{ currSellWay.name || "" }}
                                </span>
                                <i
                                  class="
                                    fit-tc-primary
                                    otc-symbol-icon
                                    el-icon-caret-bottom
                                  "
                                  :class="{
                                    transform: ifChooseSell,
                                  }"
                                ></i>
                              </span>
                              <el-dropdown-menu
                                slot="dropdown"
                                class="otc-dropdown-payment"
                              >
                                <el-dropdown-item
                                  v-for="item in filterMyPayMethods"
                                  :key="item.pay_method_id"
                                  :command="item"
                                >
                                  <img :src="item.icon" alt />
                                  <span
                                    :class="{
                                      active:
                                        currSellWay.pay_method_id ==
                                        item.pay_method_id,
                                    }"
                                    >{{ item.name }}</span
                                  >
                                </el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="commom-che" v-if="!filterMyPayMethods.length">
                      <div style="font-size: 12px">
                        <div
                          class="fit-tc-tip"
                          v-if="filterMyPayMethodsErr == 1"
                        >
                          <span>{{ currCoinLangFun("ordinary_skfsbzc") }}</span>
                          <span
                            style="cursor: pointer"
                            class="fit-tc-tertiary active-text"
                            @click="
                              $router.push({
                                path: '/account/center/info',
                              })
                            "
                            >{{ currCoinLangFun("user_center", "user") }}</span
                          >{{ currCoinLangFun("text_change_payway") }}
                        </div>
                        <!--  -->
                        <div
                          class="fit-tc-tip"
                          v-if="filterMyPayMethodsErr == 2"
                        >
                          <span>{{
                            currCoinLangFun("nhmyskfs_qqw_tips")
                          }}</span>
                          <span
                            style="cursor: pointer"
                            class="fit-tc-tertiary active-text"
                            @click="
                              $router.push({
                                path: '/account/center/info',
                              })
                            "
                            >{{ currCoinLangFun("user_center", "user") }}</span
                          >{{ currCoinLangFun("text_tj", "move_quotation") }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pay-button">
                  <el-button
                    class="loginBtn"
                    type="success"
                    v-if="!isLogin"
                    @click="
                      $router.push({
                        path: `/user/login`,
                      })
                    "
                    >{{ currCoinLangFun("login", "top") }}</el-button
                  >
                  <div v-if="orderType == 'buy' && isLogin">
                    <el-button
                      class="loginBtn"
                      type="success"
                      @click="buyCoin"
                      :loading="orderBooking"
                      :disabled="!AmountCheck || !sourceValue"
                      >{{ currCoinLangFun("text_buy", "all")
                      }}{{ ` ${currTarget.label || ""}` }}</el-button
                    >
                  </div>
                  <div v-if="orderType == 'sell' && isLogin">
                    <div v-if="myPayMethods.length">
                      <el-button
                        class="loginBtn"
                        type="success"
                        v-if="isLogin"
                        @click="buyCoin"
                        :loading="orderBooking"
                        :disabled="!AmountCheck || !sourceValue"
                        >{{ currCoinLangFun("text_sell", "all")
                        }}{{ ` ${currSource.label}` }}</el-button
                      >
                    </div>
                    <!-- <el-button
                      class="tjskfsBtn"
                      type="primary"
                      icon="el-icon-circle-plus-outline"
                      plain
                      v-if="!myPayMethods.length"
                      >添加收款方式</el-button
                    >-->
                  </div>
                </div>
              </div>
            </div>
            <div style="padding: 27px 0"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="three-steps-box">
      <div class="three-s fit-background-di">
        <div class="max-w">
          <p class="title1 fit-tc-primary">
            {{ currCoinLangFun("ordinary_steptext1") }}
          </p>
          <div class="title2">
            <div class="three-min">
              {{ currCoinLangFun("ordinary_steptext2") }}
            </div>
            <span class="fit-tc-tip">{{
              currCoinLangFun("ordinary_steptext3")
            }}</span>
          </div>
          <div class="step-img">
            <div class="step">
              <div class="icon-bg"></div>
              <div class="three-tw">
                <p class="fit-tc-primary">
                  {{ currCoinLangFun("ordinary_steptext4") }}
                </p>
                <p class="fit-tc-tip">
                  {{ currCoinLangFun("ordinary_steptext5") }}
                </p>
              </div>
            </div>
            <div class="step">
              <div class="trans-png">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAAAXNSR0IArs4c6QAAAUJJREFUWAntlN8JwjAQxpMigjhBB3AL19BH11AQ/Acu0kddwy0cwAlE8CX2M4aW5NK7tuiDpBCafLn7ftdLiVaCZ3Yyw9v1cVDKLGy4LvLJaHOe6yeXPuACsA9zo8yyijXLUsNyVWn0LKNlX3WV13VKq+/buRAQJkoVIUAXoSGlhVGiM8CB2p67tthDDu2SkjrwjQ5oiWm6iyRd6hyT7qLOrUuJf9SBdBexhym6KoxSue9EaX4M1iIAlSjVEoDt1O9aND3edxhsSUyA7/P+Aojlb7fF6AOhfDInusK6QmI+5Bm0hfjmrli8s8t6vCtvvH1dxFwKiZnD8+NtrZsCAfMLwBom1J4z/8RUqTFIFcHP6uYBAEIfiG9OArpCKPMooC0kZt4IkEKazFkAB+HMRYAYRGIuBvgQqTnyWj34hTHaJL0AQXnPBgBmPfIAAAAASUVORK5CYII="
                  alt
                />
              </div>
              <div class="icon-bg"></div>
              <div class="three-tw">
                <p class="fit-tc-primary">
                  {{ currCoinLangFun("ordinary_steptext6") }}
                </p>
                <p class="fit-tc-tip">
                  {{ currCoinLangFun("ordinary_steptext7") }}
                </p>
              </div>
            </div>
            <div class="step">
              <div class="trans-png">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAAAXNSR0IArs4c6QAAAUJJREFUWAntlN8JwjAQxpMigjhBB3AL19BH11AQ/Acu0kddwy0cwAlE8CX2M4aW5NK7tuiDpBCafLn7ftdLiVaCZ3Yyw9v1cVDKLGy4LvLJaHOe6yeXPuACsA9zo8yyijXLUsNyVWn0LKNlX3WV13VKq+/buRAQJkoVIUAXoSGlhVGiM8CB2p67tthDDu2SkjrwjQ5oiWm6iyRd6hyT7qLOrUuJf9SBdBexhym6KoxSue9EaX4M1iIAlSjVEoDt1O9aND3edxhsSUyA7/P+Aojlb7fF6AOhfDInusK6QmI+5Bm0hfjmrli8s8t6vCtvvH1dxFwKiZnD8+NtrZsCAfMLwBom1J4z/8RUqTFIFcHP6uYBAEIfiG9OArpCKPMooC0kZt4IkEKazFkAB+HMRYAYRGIuBvgQqTnyWj34hTHaJL0AQXnPBgBmPfIAAAAASUVORK5CYII="
                  alt
                />
              </div>
              <div class="icon-bg"></div>
              <div class="three-tw">
                <p class="fit-tc-primary">
                  {{ currCoinLangFun("ordinary_steptext8") }}
                </p>
                <p class="fit-tc-tip">
                  {{ currCoinLangFun("ordinary_steptext9") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-advantage">
        <div class="max-w">
          <p class="title1 fit-tc-primary">
            {{ currCoinLangFun("ordinary_advantagetext1") }}
          </p>
          <div class="advantage-detail">
            <div class="detail">
              <div class="icon-bg"></div>
              <p class="fit-tc-primary">
                {{ currCoinLangFun("ordinary_advantagetext2") }}
              </p>
              <p class="fit-tc-tip">
                {{ currCoinLangFun("ordinary_advantagetext3") }}
              </p>
              <p class="fit-tc-tip">
                {{ currCoinLangFun("ordinary_advantagetext4") }}
              </p>
            </div>
            <div class="detail">
              <div class="icon-bg"></div>
              <p class="fit-tc-primary">
                {{ currCoinLangFun("ordinary_advantagetext5") }}
              </p>
              <p class="fit-tc-tip">
                {{ currCoinLangFun("ordinary_advantagetext6") }}
              </p>
            </div>
            <div class="detail">
              <div class="icon-bg"></div>
              <p class="fit-tc-primary">
                {{ currCoinLangFun("ordinary_advantagetext7") }}
              </p>
              <p class="fit-tc-tip">
                {{ currCoinLangFun("ordinary_advantagetext8") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :title="currCoinLangFun('ordinary_yjmbzgyz')"
      :visible.sync="goKycDialog"
      width="480px"
      :before-close="handleClose"
      class="goKyc"
    >
      <p class="fit-tc-tip goKyc-tip">
        {{ currCoinLangFun("ordinary_yjmbwsxx") }}
      </p>
      <div class="flex-box goKyc-bottom">
        <div class="flex-box left fit-tc-primary">
          <i class="el-icon-postcard"></i>
          <span>{{ currCoinLangFun("ordinary_wcsfrz") }}</span>
        </div>
        <div class="right">
          <el-button
            type="primary"
            size="small"
            class="fit-tc-button"
            @click="goKycFun"
            >{{ currCoinLangFun("text_go_authentication", "user") }}</el-button
          >
        </div>
      </div>
    </el-dialog>

    <!-- 聊天框 -->
    <business-chat-box
      ref="businessChatBox"
      v-if="businessChatDialog"
      :businessChatDialog="businessChatDialog"
      :closeDialog="closeDialog.bind(this)"
      :userInfo="userInfo"
      :orderData="currOrderData"
    ></business-chat-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getDataApi } from "@/api/system";
import { getCurrencyAccount, getPayment } from "@/api/user.js";
import businessChatBox from "@/components/chat/business-chat-box.vue";
import {
  newCommonOrder,
  getOneClickPayment,
  getServicePayment,
} from "@/api/otc.js";
import { toThousands } from "@/util/util";
export default {
  components: { businessChatBox },
  watch: {
    orderType() {
      this.currSource = this.filterSource[0];
      this.currTarget = this.filterTarget[0];
    },
    userVariation: {
      handler(data) {
        if (data.type == "otc" && data.order == this.currOpenOrderId) {
          //更新当前聊天弹窗状态
          this.upDataBusinessChatBoxFun(data);
        }
      },
      deep: true,
    },
  },
  beforeRouteLeave(to, from, next) {
    //清除定时器
    next();
    if (this.countDownTimer) {
      clearInterval(this.countDownTimer);
    }
  },
  beforeDestroy() {
    // console.log("页面销毁");
    if (this.countDownTimer) {
      clearInterval(this.countDownTimer);
    }
  },
  data() {
    return {
      currOpenOrderId: "", //当前订单id
      orderType: "buy", //订单类型：购买buy，出售sell
      orderBooking: false, //下单中 状态
      ifChoosePay: false, //是否在选择支付方式
      ifChooseSell: false, //是否在选择收款方式
      sourceValue: "",
      targetValue: "",
      payWayList: [], //支付方式
      goKycDialog: false,
      currPayWay: {}, //买入时选择的支付方式
      currSellWay: {}, //卖出时的收款方式
      ifChooseSource: false, //正在选择源
      ifChooseTarget: false, //正在选择目标
      currSource: {}, //源
      currTarget: {}, //目标
      countryList: [], //国家列表
      coinList: [], //币种列表
      oneClickData: {}, //服务商数据
      exchangeData: [], //汇率数据
      countDownTimer: null, //刷新汇率数据定时器
      myPayMethods: [], //我的收款方式
      businessChatDialog: false, //商家聊天窗口
      currOrderData: {}, //传入订单数据
    };
  },
  created() {
    //获取我的收款方式
    this.getMyPayMethodsFun();

    getOneClickPayment().then(async (res) => {
      let data = res.data.data[0];
      //服务商信息
      for (let key in data) {
        if (typeof data[key] == "string") {
          this.oneClickData[key] = data[key];
        }
      }

      //付款方式
      this.payWayList = data.method;
      if (this.payWayList.length) {
        this.currPayWay = this.payWayList[0];
      }

      this.countryList = data.country;
      this.coinList = data.coin;

      await this.getExChangeFun();

      //获取钱包账户余额
      this.getCurrencyAccountFun();

      this.currSource = this.filterSource[0] || {};
      this.currTarget = this.filterTarget[0] || {};

      if (this.countDownTimer) {
        clearInterval(this.countDownTimer);
      }

      this.countDownTimer = setInterval(() => {
        //获取汇率
        this.upExChangeRateFun();
      }, 10000);
    });
  },
  methods: {
    currCoinLangFun(code, type = "exchange") {
      return this.coinLangFun(type, code);
    },
    //更新聊天窗口信息
    upDataBusinessChatBoxFun(data) {
      getServicePayment({ orderId: this.currOpenOrderId }).then((res) => {
        this.currOrderData = {
          id: this.currOpenOrderId,
          ...res.data.data,
        };
        setTimeout(() => {
          this.$refs.businessChatBox.countDownFun(data);
        }, 0);
      });
    },
    sourceValChangeFun(val) {
      if (val) {
        if (this.orderType == "buy") {
          this.targetValue = Number(val).myDiv(Number(this.exchangeNum));
        } else {
          this.targetValue = Number(this.exchangeNum).myMul(Number(val));
        }
      } else {
        this.targetValue = "";
      }
    },
    targetValChangeFun(val) {
      if (val) {
        if (this.orderType == "buy") {
          this.sourceValue = Number(this.exchangeNum).myMul(Number(val));
        } else {
          this.sourceValue = Number(val).myDiv(Number(this.exchangeNum));
        }
      } else {
        this.sourceValue = "";
      }
    },
    serOrderType(type) {
      //设置订单类型  出售/购买
      if (this.orderType == type) {
        return false;
      }
      this.orderType = type;
      this.sourceValue = "";
      this.targetValue = "";
      this.currTarget = {};
      let bool = false;
      if (
        this.orderType == "sell" &&
        this.myPayMethods.length &&
        this.filterTarget.length
      ) {
        this.filterTarget.forEach((item) => {
          this.myPayMethods.forEach((child) => {
            if (!bool && child.data && item.value == child.data.country_id) {
              bool = true;
              setTimeout(() => {
                this.currTarget = this.deepClone(item);
              }, 0);
            }
          });
        });
      }
    },
    choosePayWay(obj) {
      //选择支付方式
      this.currPayWay = obj;
    },
    chooseSellWay(obj) {
      // console.log(obj);
      //选择收款方式
      this.currSellWay = obj;
    },
    closeDialog(type) {
      if (type == "businessChatDialog") {
        this.currOpenOrderId = "";
        this.businessChatDialog = false;
        //刷新余额
        this.getCurrencyAccountFun();
      }
    },
    chooseSource(data) {
      this.currSource = data;
      this.sourceValue = "";
      this.targetValue = "";
      // console.log(this.currSource);
    },
    chooseTarget(data) {
      this.currTarget = data;
      this.sourceValue = "";
      this.targetValue = "";
      //清除已选中收款方式
      this.currSellWay = {};

      if (this.orderType == "sell") {
        if (this.filterMyPayMethods.length) {
          this.currSellWay = this.filterMyPayMethods[0];
        }
      }
      // console.log(this.currTarget);
    },
    //获取所有收款方式
    getMyPayMethodsFun() {
      if (!this.isLogin) {
        return false;
      }
      getDataApi("1541709245688348673", {
        pageSize: "-521",
        enable: 1,
      }).then((res) => {
        this.myPayMethods = res.data.data.records;
        if (this.myPayMethods.length) {
          this.getPaymentFun();
        }
      });
    },
    //获取我的收款方式
    getPaymentFun() {
      getPayment().then((res) => {
        let payment = res.data.data;
        if (payment.length) {
          this.myPayMethods = this.myPayMethods.map((item) => {
            payment.forEach((child) => {
              if (item.id == child.pay_method_id) {
                item.data = child;
              }
            });
            return item;
          });
          this.currSellWay = this.myPayMethods[0];
        }
        // console.log(this.myPayMethods);
      });
    },
    //获取钱包数据
    getCurrencyAccountFun() {
      if (!this.isLogin) {
        return false;
      }
      getCurrencyAccount({ type: 1 }).then((res) => {
        let dataRes = res.data.data;

        this.WalletData = dataRes;

        this.coinList.map((item) => {
          //匹配对应币种金额
          this.WalletData.forEach((child) => {
            if (child.symbol == item.symbol) {
              item.surplusNum = child.balance || 0;
            }
          });

          return item;
        });
      });
    },
    //获取汇率
    async getExChangeFun() {
      try {
        let dataRes = await getDataApi("1531553843420971009", {
          pageSize: -521,
        });

        this.exchangeData = dataRes.data.data.records;
      } catch (err) {
        console.log(err);
      }
    },
    //刷新汇率
    async upExChangeRateFun() {
      try {
        let dataRes = await getDataApi("1531553843420971009", {
          pageSize: -521,
        });

        this.exchangeData = dataRes.data.data.records;
      } catch (err) {
        console.log(err);
      }
    },
    //下单
    buyCoin() {
      //提醒实名认证
      if (this.userInfo.real_name_status != "2") {
        this.goKycDialog = true;
        return false;
      }

      if (this.orderBooking) {
        return false;
      }
      this.orderBooking = true;

      let data = {
        coinCou: this.orderType == "buy" ? this.targetValue : this.sourceValue,
        coinId:
          this.orderType == "buy"
            ? this.currTarget.value
            : this.currSource.value,
        coinSymbol:
          this.orderType == "buy"
            ? this.currTarget.label
            : this.currSource.label,
        countryId:
          this.orderType == "buy"
            ? this.currSource.value
            : this.currTarget.value,
        fiatCurrencyAmount:
          this.orderType == "buy" ? this.sourceValue : this.targetValue,
        fiatCurrency:
          this.orderType == "buy"
            ? this.currSource.label
            : this.currTarget.label,
        payMethodId:
          this.orderType == "buy"
            ? this.currPayWay.pay_method_id
            : this.currSellWay.id,
        payService: this.oneClickData.zh_name || "",
        payServiceId: this.oneClickData.pay_service_id,
        type: this.orderType == "buy" ? 1 : 2,
        serviceType: "1",
      };
      console.log(data);
      if (!data.payMethodId) {
        if (this.orderType == "buy") {
          this.$message({
            type: "warning",
            message: this.currCoinLangFun("text_qxzzffs", "popup_tips"),
          }); //请选择支付方式
        } else {
          this.$message({
            type: "warning",
            message: this.currCoinLangFun("text_qxzskfs", "popup_tips"),
          }); //请选择收款方式
        }

        //清除loading

        this.orderBooking = false;

        return false;
      }

      newCommonOrder(data)
        .then((res) => {
          console.log(res);
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"),
          }); //下单成功
          //更新钱包数据
          this.getCurrencyAccountFun();
          getServicePayment({ orderId: res.data.data }).then((dataRes) => {
            this.currOrderData = {
              id: res.data.data,
              ...dataRes.data.data,
            };
            this.currOpenOrderId = res.data.data;
            this.businessChatDialog = true;
          });

          this.sourceValue = "";
          this.targetValue = "";
          this.orderBooking = false;
        })
        .catch(() => {
          this.orderBooking = false;
        });
    },
    goKycFun() {
      this.goKycDialog = false;
      this.$router.push({
        path: `/account/center/kyc`,
      });
    },
    exchangeRateFilter(val) {
      if (!val) {
        return "0";
      }

      return `${toThousands(Number(val).myMul(Number(this.exchangeNum)))}`;
    },
    computeSurplusNum(val) {
      if (!val) {
        return "0";
      }

      return `${toThousands(Number(val))}`;
    },
  },
  computed: {
    ...mapGetters([
      "isLogin",
      "userInfo",
      "language",
      "exchange",
      "userVariation",
    ]),
    AmountCheck() {
      if (this.orderType == "buy") {
        if (this.sourceValue) {
          //最大值
          let maxVal = Number(this.currTarget.max_buy).myMul(
            Number(this.exchangeNum)
          );

          //最小值
          let minVal = Number(this.currTarget.min_buy).myMul(
            Number(this.exchangeNum)
          );

          if (
            Number(this.sourceValue) >= minVal &&
            Number(this.sourceValue) <= maxVal
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        if (this.sourceValue) {
          if (
            this.sourceValue > 0 &&
            this.sourceValue <= Number(this.currSource.surplusNum)
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    },
    filterMyPayMethodsErr() {
      let arr = this.myPayMethods.filter((item) => item.data);
      if (arr.length) {
        let cArr = arr.filter(
          (item) => item.data.country_id == this.currTarget.value
        );
        if (cArr.length == 0) {
          return 1;
          // "您的收款方式不支持当前所选法定代币,请前往个人中心更改您的收款方式";
        }
      } else {
        return 2;
        // "您还没有收款方式，请前往个人中心添加";
      }
    },
    filterMyPayMethods() {
      return this.myPayMethods.filter(
        (item) => item.data && item.data.country_id == this.currTarget.value
      );
    },
    filterSource() {
      let filterData = [];
      if (this.orderType == "buy") {
        filterData = this.countryList.map((item) => {
          item.icon = item.country_icon;
          item.label = item.fiat;
          item.value = item.country_id;
          return item;
        });

        filterData = filterData.filter((item) => item.is_buy == "1");
        return filterData;
      } else {
        filterData = this.coinList.map((item) => {
          item.icon = item.avatar;
          item.label = item.symbol;
          item.value = item.coin_id;
          return item;
        });

        filterData = filterData.filter((item) => item.is_sell == "1");
        return filterData;
      }
    },
    filterTarget() {
      let filterData = [];
      if (this.orderType == "buy") {
        filterData = this.coinList.map((item) => {
          item.icon = item.avatar;
          item.label = item.symbol;
          item.value = item.coin_id;
          return item;
        });

        filterData = filterData.filter((item) => item.is_buy == "1");
        return filterData;
      } else {
        filterData = this.countryList.map((item) => {
          item.icon = item.country_icon;
          item.label = item.fiat;
          item.value = item.country_id;
          return item;
        });
        filterData = filterData.filter((item) => item.is_sell == "1");
        return filterData;
      }
    },
    computedRate() {
      return toThousands(Number(this.exchangeNum).toFixed(8));
    },
    exchangeNum() {
      //当前币种兑法币的汇率
      let rate = 0;
      if (this.orderType == "buy") {
        this.exchangeData.forEach((item) => {
          if (
            item.quote_currency == this.currSource.fiat &&
            item.base_currency == this.currTarget.symbol
          ) {
            rate = item.rate || 0;
          }
        });
      } else {
        this.exchangeData.forEach((item) => {
          if (
            item.quote_currency == this.currTarget.fiat &&
            item.base_currency == this.currSource.symbol
          ) {
            rate = item.rate || 0;
          }
        });
      }

      return rate;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.max-w {
  margin: 0 auto;
  max-width: 1200px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.otc-dropdown {
  width: 100%;
  .el-dropdown {
    width: 100%;
    .el-dropdown-link {
      cursor: pointer;
      box-sizing: border-box;
      width: 100%;
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

.main {
  box-sizing: border-box;
  min-height: calc(100vh - 517px);
  .main-body {
    min-width: 1248px;
    padding-bottom: 26px;
    padding-top: 48px !important;

    .main-content {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #dde3e6;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding-right: 40px;
      .the-text {
        width: 510px;
        .ttile1 {
          line-height: 1;
          font-weight: 600;
          font-size: 48px !important;
        }
        .ttile2 {
          line-height: 24px;
          font-size: 20px !important;
          margin-top: 24px !important;
          margin-bottom: 24px !important;
        }
        .ttile3 {
          font-size: 14px !important;
          line-height: 20px;
          .link {
            text-decoration: none;
            cursor: pointer;
          }
        }
        .coinImg {
          margin-top: 64px;
          span {
            width: 32px;
            height: 32px;
          }
          span:nth-child(1) {
            background-image: url("");
          }
          span:nth-child(2) {
            background-image: url("");
          }
          span:nth-child(3) {
            background-image: url("");
          }
          span:nth-child(4) {
            background-image: url("");
          }
        }

        .title4 {
          line-height: 32px;
          font-weight: 600;
          font-size: 24px !important;
          margin-top: 16px !important;
          margin-bottom: 16px !important;
        }
        .title5 {
          margin-top: 16px !important;
          margin-bottom: 32px !important;
          font-size: 16px !important;
        }
        .instructions {
          display: flex;
          .instructions-btn {
            font-weight: 600;
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px !important;
            text-decoration: none;
            cursor: pointer;
            &:last-child {
              margin-left: 16px !important;
            }
          }
        }
      }
      .buy-main {
        width: 488px;
        min-height: 580px;
        border: 1px solid;
        box-sizing: border-box;
        border-radius: 10px;
        position: relative;
        .buy-top-title {
          width: 100%;
          position: absolute;
          top: -28px;
          text-align: right;

          .right {
            text-decoration: none;
            cursor: pointer;
            line-height: 20px;
            font-size: 14px !important;
          }
        }
        .type-symbol {
          display: flex;
          font-weight: 600;
          height: 60px;
          .tab-btn {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-size: 20px;
          }
        }
        .order-inputs {
          margin-top: 20px !important;
          padding: 22px 40px 24px 40px !important;

          .order-inputs-main {
            margin-top: 8px !important;
            .input-box {
              .title {
                font-size: 14px;
                margin-bottom: 6px;
              }
              .money-input {
                position: relative;
                .input-ontology {
                  &::-webkit-outer-spin-button,
                  &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                  }
                  &[type="number"] {
                    -moz-appearance: textfield;
                  }
                  &::placeholder {
                    color: #688199;
                  }
                  width: 100%;
                  height: 56px;
                  border-radius: 4px;
                  -webkit-box-sizing: border-box;
                  padding: 0 140px 0 15px;
                  font-size: 20px;
                  font-weight: 700;
                  box-sizing: border-box;
                  border: 1px solid;
                  overflow: visible;

                  &:focus {
                    outline: none !important;
                  }
                }

                .equivalent {
                  height: 56px;
                  position: absolute;
                  top: 0;
                  right: 10px;
                  display: flex;
                  align-items: center;
                  .box-line {
                    width: 1px;
                    height: 24px;
                  }
                  .otc-el-dropdown {
                    width: 100%;
                    height: 46px;
                    .el-dropdown-link {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
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

                .tip-text {
                  margin-top: 8px !important;
                  font-size: 12px !important;
                  &.error-text {
                    color: #f5566f;
                  }
                }
              }
            }
            .target {
              margin-top: 20px;

              .text {
                margin-top: 10px !important;
                span:nth-child(1) {
                  line-height: 20px;
                  font-size: 14px !important;
                }

                span:nth-child(2) {
                  line-height: 16px;
                  font-size: 12px !important;
                }
              }
            }
          }

          .pay_way {
            margin-top: 24px !important;
            .pay_way_text {
              -webkit-box-pack: justify;
              justify-content: space-between;
              line-height: 16px;
              font-size: 12px !important;
              margin-top: 8px !important;
              margin-bottom: 8px !important;
            }
            .order-ways {
              .payment-area {
                display: flex;
                align-items: flex-start;
                .payment-trigger {
                  flex: 1;

                  .el-dropdown-link.active {
                    // border-color: #0020FD;
                  }
                }
              }

              .none-text {
                text-align: center;
                font-size: 16px;
                margin: 10px 0;
              }

              .commom-che {
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;

                .cc-item {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 12px 0;
                  border-radius: 4px;
                  border: 1px solid;
                  position: relative;
                  margin-left: 14px;
                  flex: 0 0 159px;
                  text-align: center;
                  cursor: pointer;

                  & > img {
                    margin-right: 4px !important;
                    width: 16px;
                  }
                  &:nth-child(1) {
                    margin-left: 0px !important;
                  }

                  &.active {
                    border-color: #0020FD;
                  }

                  &.not-select {
                    color: #688199 !important;
                    cursor: not-allowed !important;
                  }
                  span {
                    line-height: 20px;
                    font-weight: 500;
                    font-size: 14px !important;
                  }
                  .fast_radio {
                    position: absolute;
                    right: -0.5px;
                    bottom: 0;
                    img {
                      width: 18px;
                      display: block;
                      border-style: none;
                    }
                  }
                }
              }
            }
          }
          .pay-button {
            margin-top: 40px !important;

            button {
              width: 100%;
              line-height: 44px;
              height: 44px;
              transition: none 0s ease 0s !important;
              font-size: 14px;
              outline: none;
              padding: 0 16px;
              border-radius: 4px;
              border-width: 1px;
              text-decoration: none;
              border-style: solid;
              cursor: pointer;
            }

            .loginBtn {
              &:not([disabled="disabled"]) {
                border-color: #4ec293;
                background-color: #4ec293;
                color: #f5faff;
                -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04),
                  0 2px 6px 0 rgba(0, 0, 0, 0.04);
                font-weight: 700;
                &:hover {
                  background-color: #247b59 !important;
                  border-color: #247b59 !important;
                }
              }

              &[disabled="disabled"] {
                cursor: not-allowed;
                color: #ffffff !important;
              }
            }

            .tjskfsBtn {
              border-color: #262d38;
              color: #0020FD;
              font-weight: 500;
              background-color: transparent;

              &:hover {
                color: #3a7ee6;
              }
            }
          }
        }
      }
    }
  }

  .three-steps-box {
    min-width: 1248px;

    .three-s {
      padding-top: 80px !important;
      padding-bottom: 80px !important;
      .title1 {
        text-align: center;
        line-height: 48px;
        font-weight: 600;
        font-size: 32px !important;
      }
      .title2 {
        margin-top: 16px !important;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .three-min {
          border-radius: 14px;
          padding: 3px 12px;
          line-height: 16px;
          font-weight: 600;
          font-size: 12px !important;
          background-color: #4ec293;
        }
        span {
          font-size: 16px !important;
          margin-left: 8px !important;
        }
      }
      .step-img {
        margin-top: 70px;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .step {
          flex: 1;
          display: flex;
          align-items: center;

          .icon-bg {
            margin: 0px !important;
            width: 72px;
            height: 72px;
          }

          &:nth-child(1) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat;
            background-size: 432px 72px;
          }
          &:nth-child(2) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat -72px 0;
            background-size: 432px 72px;
          }
          &:nth-child(3) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat -144px 0;
            background-size: 432px 72px;
          }

          .trans-png {
            padding: 0 6px;
            margin-right: 36px;
            img {
              height: 24px;
              -webkit-transform: rotate(-90deg);
              transform: rotate(-90deg);
              display: block;
              border-style: none;
            }
          }
          .three-tw {
            width: 240px;
            margin-left: 24px !important;
          }
        }
      }
    }
    .my-advantage {
      min-width: 1248px;
      padding-top: 80px !important;
      padding-bottom: 80px !important;
      .title1 {
        text-align: center;
        line-height: 48px;
        font-weight: 600;
        font-size: 32px !important;
      }
      .advantage-detail {
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        text-align: center;
        margin-top: 64px !important;
        .detail {
          flex: 1;
          .icon-bg {
            margin: 0 auto !important;
            width: 72px;
            height: 72px;
          }

          &:nth-child(1) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat -216px 0;
            background-size: 432px 72px;
          }
          &:nth-child(2) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat -288px 0;
            background-size: 432px 72px;
          }
          &:nth-child(3) .icon-bg {
            background: url("https://miniopic.baiyiex.com/baiyiex/public/ordinary/%E7%B2%BE%E7%81%B5%E5%9B%BE.png")
              no-repeat -360px 0;
            background-size: 432px 72px;
          }

          p {
            width: 360px;
            margin: 0 auto;
            font-size: 16px !important;
            text-align: center;
          }

          p:nth-child(2) {
            line-height: 24px;
            font-weight: 500;
            font-size: 20px !important;
            margin-top: 48px !important;
            margin-bottom: 16px !important;
          }
        }
      }
    }
  }
}
.goKyc {
  .goKyc-tip {
    line-height: 20px;
    margin-bottom: 40px !important;
    margin-top: 0 !important;
  }
  .goKyc-bottom {
    justify-content: space-between;
    margin-bottom: 24px !important;
    .left {
      i {
        font-size: 24px;
      }
      span {
        font-weight: 600;
        font-size: 16px !important;
        margin-left: 4px !important;
      }
    }
    .right {
    }
  }
}
</style>
<style lang="scss">
.otc-dropdown-payment {
  width: 406px !important;
}

.theme-daytime {
  .payment-area {
    .otc-dropdown {
      border: 1px solid #eff0f2;
    }
    .service-item {
      border: 1px solid #eff0f2 !important;
    }
  }
  .otc-ordinary-box {
    .buy-main {
      background-color: #fff;
      border-color: #eff0f2 !important;
      box-shadow: 0 8px 32px rgba(26, 48, 82, 0.08),
        0 4px 8px rgba(26, 48, 82, 0.04);
      .type-symbol {
        .tab-btn {
          &.disactive {
            background-color: #f5f5f5;
            color: #b2bcc6;
          }
        }
      }
    }

    .order-inputs-main {
      .money-input {
        .input-ontology {
          background-color: #fff;
          border-color: #d8dfeb !important;
          caret-color: #0020FD;
          color: #10171f;
          &:hover {
            border-color: #2271e6 !important;
          }
          &:focus {
            border-color: #2271e6 !important;
            box-shadow: 0 0 0 2px rgba(82, 118, 235, 0.24);
          }
          &.input-error {
            border-color: #db2c49 !important;
          }
        }
      }
    }
  }
}
.theme-night {
  .payment-area {
    .otc-dropdown {
      border: 1px solid #262d38;
    }
    .service-item {
      border: 1px solid #262d38 !important;
    }
  }
  .otc-ordinary-box {
    .buy-main {
      background-color: #151d29;
      border-color: #262d38 !important;
      .type-symbol {
        .tab-btn {
          &.disactive {
            background-color: #2e3847;
            color: #b2bcc6;
          }
        }
      }
    }

    .order-inputs-main {
      .money-input {
        .input-ontology {
          background-color: #1f2733;
          border-color: #384252 !important;
          caret-color: #0020FD;
          color: #dde3e6;
          &:hover {
            border-color: #0020FD !important;
          }
          &:focus {
            border-color: #0020FD !important;
            box-shadow: 0 0 0 2px rgba(82, 118, 235, 0.24);
          }
          &.input-error {
            border-color: #f5566f !important;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-dropdown-menu {
  width: 238px;
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
