<template>
  <div class="merchant-deal-box fit-tc-primary fit-background">
    <div class="merchant-deal-container">
      <div class="search-box">
        <div class="search-item search-type-box fit-ta-border-color">
          <div class="type-item" v-for="item in typeDic" :key="item.value" @click="searchForm._type = item.value"
            :class="{ active: item.value == searchForm._type }">
            {{ item.label }}
          </div>
        </div>
        <div class="search-item">
          <el-select class="coin-select-box" popper-class="select-poper-box" v-model="searchForm._bz" filterable
            :placeholder="`${currCoinLangFun(
                          'merinfo_qxz',
                          'center'
                        )} ${currCoinLangFun('orders_table_coin', 'full')}`">
            <div slot="prefix" class="select-heade-box">
              <img :src="currCoinData.avatar" />
            </div>
            <el-option v-for="item in coinData" :key="item.id" :label="item.symbol" :value="item.id">
              <div class="select-item-box">
                <img :src="item.avatar" />
                <span>{{ item.symbol }}</span>
              </div>
            </el-option>
          </el-select>
        </div>
        <div class="search-item">
          <el-input :placeholder="`${currCoinLangFun('zuigaodanjia_text')}`"
            @input="(value) => setInputFun(value, '_dj', 2)" v-model="searchForm._dj" class="country-input-select">
            <el-select v-model="searchForm._gj" popper-class="select-poper-box" filterable slot="append"
              :placeholder="`${currCoinLangFun('merinfo_qxz', 'center')}`">
              <div slot="prefix" class="select-heade-box">
                <img :src="currCountryData.icon" />
              </div>
              <el-option v-for="(item, index) in countryData" :key="index" :label="item.local_currency" :value="item.id">
                <div class="select-item-box">
                  <img :src="item.icon" />
                  <span>{{ item.local_currency }}</span>
                </div>
              </el-option>
            </el-select>
          </el-input>
        </div>
        <!-- <div class="search-item">
          <el-select filterable v-model="searchForm._zffs">
            <el-option
              v-for="item in payDic"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>-->
      </div>
      <div class="deal-list-icon">
        <div class="buy-top-title" v-if="isLogin">
          <span class="right fit-tc-primary active-text" @click="$router.push('/otc/order?serviceType=2')">
            <i class="el-icon-document"></i>
            {{ currCoinLangFun("text_order_records", "all") }}
          </span>
        </div>
      </div>
      <div class="table-box null-table-hover">
        <el-table size="small" :data="dealTableData" v-loading="tableLoading">
          <el-table-column v-for="(item, index) in dealTableColumn" :key="index" v-bind="item">
            <template slot-scope="scope">
              <div class="table-merchant-info" v-if="item.prop == 'sj'">
                <avue-avatar class="fit-background-di fit-tc-primary active-text">{{ scope.row.name.split("")[0]
                                  }}</avue-avatar>
                <div class="info-box">
                  <div class="info-name">{{ scope.row.name }}</div>
                  <div class="info-tip fit-tc-tertiary">
                    {{ scope.row.completedOrderQuantity }}
                    {{ currCoinLangFun("orders_table_dir_amount", "full") }} |
                    {{ scope.row.completedRate }}%
                    {{ currCoinLangFun("text_turnover_rate") }}
                  </div>
                </div>
              </div>
              <div class="table-merchant-num" v-else-if="item.prop == 'sl'">
                <div class="num-item">
                  <span class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_num") }}
                  </span>
                  {{ scope.row.coin_cou_remain_text }}
                  {{ scope.row.coin_symbol }}
                </div>
                <div class="num-item">
                  <span class="fit-tc-tertiary">
                    {{ currCoinLangFun("merinfo_quota", "center") }}
                  </span>
                  {{ scope.row.min_transaction }} {{ scope.row.coin_symbol }} -
                  {{ scope.row.max_transaction }} {{ scope.row.coin_symbol }}
                </div>
              </div>
              <div class="table-merchant-money" :class="{
                                'fit-tc-rise': scope.row.direction == '2',
                                'fit-tc-fall': scope.row.direction != '2',
                              }" v-else-if="item.prop == 'dj'">
                {{ scope.row.rate_text }} {{ scope.row.fiat_currency }}
              </div>
              <div class="table-merchant-pay" v-else-if="item.prop == 'zffs'">
                {{ currCoinLangFun("bank_card_text", "all") }}
              </div>
              <div class="table-merchant-pay" v-else-if="item.prop == 'remarks'">
                {{ scope.row.remarks }}
              </div>
              <div class="table-merchant-btn" v-else-if="item.prop == 'cz'">
                <el-button v-if="
                                    userInfo.is_merchant != '2' ||
                                    userInfo.is_merchant == undefined ||
                                    (userInfo.is_merchant == '2' &&
                                      userInfo.merchant &&
                                      scope.row.service_id != userInfo.merchant.id)
                                  " @click="openPayFun(scope.row)" :style="{
                                      background:
                                        scope.row.direction == '2' ? '#22a87b' : '#db3a35',
                                      borderColor:
                                        scope.row.direction == '2' ? '#22a87b' : '#db3a35',
                                    }" :type="scope.row.direction == '2' ? 'success' : 'danger'">
                  {{
                                    scope.row.direction == "2"
                                    ? currCoinLangFun("text_buy", "all")
                                    : currCoinLangFun("text_sell", "all")
                                    }}
                  {{ scope.row.coin_symbol }}
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog :close-on-click-modal="false" :title="payFormData.dialogTitle" :visible.sync="payFormData.dialog"
      width="500px" custom-class="deal-form-dialog">
      <div class="deal-form-box">
        <div class="form-item">
          <div class="item-label fit-tc-tip">
            {{
                        payFormData.orderInfo.direction == "2"
                        ? currCoinLangFun("i_want_to_buy", "move_transaction")
                        : currCoinLangFun("text_need_sell")
                        }}
          </div>
          <el-input v-model="payFormData._num" :placeholder="`${
                        payFormData.orderInfo.direction == '2'
                          ? currCoinLangFun('text_qsr_buy_num')
                          : currCoinLangFun('text_qsr_sell_num')
                      }`" @input="(value) => setPayInputFun(value, '_num', 8)">
            <template slot="append">
              {{ payFormData.orderInfo.coin_symbol }}
            </template>
          </el-input>
          <div class="item-tip fit-tc-tertiary">
            {{ currCoinLangFun("merinfo_quota", "center") }}：{{
                        payFormData.orderInfo.min_transaction_text
                        }}
            -
            {{ payFormData.orderInfo.max_transaction_text }}
            {{ payFormData.orderInfo.coin_symbol }}
          </div>
        </div>
        <div class="form-item">
          <div class="item-label fit-tc-tip">
            {{
                        payFormData.orderInfo.direction == "2"
                        ? currCoinLangFun("text_need_pay")
                        : currCoinLangFun("i_will_collect_money", "move_transaction")
                        }}
          </div>
          <el-input v-model="payFormData._money" :placeholder="`${
                        payFormData.orderInfo.direction == '2'
                          ? currCoinLangFun('text_qsr_pay_amount')
                          : currCoinLangFun('text_qsr_collect_amount')
                      }`" @input="(value) => setPayInputFun(value, '_money', 2)">
            <template slot="append">
              {{ payFormData.orderInfo.fiat_currency }}
            </template>
          </el-input>
          <div class="item-tip fit-tc-tertiary">
            {{ currCoinLangFun("text_unit_price") }}：{{
                        payFormData.orderInfo.rate
                        }}
            {{ payFormData.orderInfo.fiat_currency }}
            <span style="padding-left: 10px" class="fit-tc-tip">{{ time }}s{{ currCoinLangFun("refresh_text", "all")
                          }}</span>
          </div>
        </div>
        <div class="form-item" v-if="this.searchForm._type == 2 || !isBdBankFun">
          {{ currCoinLangFun("zhifufangshi_text", "move_transaction") }}：{{
                    currCoinLangFun("bank_card_text", "all")
                    }}
        </div>
        <div class="form-item" v-else>
          <div style="font-size: 12px">
            <div class="fit-tc-tip" v-if="isAccordWithPay == 1">
              <span>{{ currCoinLangFun("ordinary_skfsbzc") }}</span>
              <span style="cursor: pointer" class="fit-tc-tertiary active-text" @click="
                                $router.push({
                                  path: '/account/center/info',
                                })
                              ">{{ currCoinLangFun("user_center", "user") }}</span>
              {{ currCoinLangFun("text_change_payway") }}
            </div>
            <!--  -->
            <div class="fit-tc-tip" v-if="isAccordWithPay == 2">
              <span>{{ currCoinLangFun("nhmyskfs_qqw_tips") }}</span>
              <span style="cursor: pointer" class="fit-tc-tertiary active-text" @click="
                                $router.push({
                                  path: '/account/center/info',
                                })
                              ">{{ currCoinLangFun("user_center", "user") }}</span>
              {{ currCoinLangFun("text_tj", "move_quotation") }}
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <el-button :style="payBtnStyle" type="primary" :loading="payFormData.loading" :disabled="isPayFormBtn"
          @click="payCoinFun()">{{ payFormData.dialogTitle }}</el-button>
      </div>
    </el-dialog>
    <!-- 聊天框 -->
    <business-chat-box v-if="businessChatDialog" :businessChatDialog="businessChatDialog"
      :closeDialog="closeDialog.bind(this)" :userInfo="userInfo" :orderData="currOrderData"></business-chat-box>
    <!-- 资金密码验证 -->
    <fund-password-verification v-if="fundPopupDialog" :fundPopupDialog="fundPopupDialog"
      :fundCloseDialog="fundCloseDialog.bind(this)"></fund-password-verification>
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { getMerchantEntrustListApi } from "@/api/merchant";
import { inputNumberLinmitFun, toNorounded, toThousands } from "@/util/util";
import {
  newCommonOrder,
  getServicePayment,
  verifyMoneyPassApi,
} from "@/api/otc.js";
import businessChatBox from "@/components/chat/business-chat-box.vue";
import fundPasswordVerification from "@/components/account/fund-password-verification.vue";
import { mapGetters } from "vuex";
import { getPayment } from "@/api/user.js";
import md5 from "js-md5";
export default {
  components: { businessChatBox, fundPasswordVerification },
  data() {
    return {
      typeDic: [
        {
          label: this.currCoinLangFun("wanta_buy_text", "buy_coins_relevant"), //我要买
          value: "2",
        },
        {
          label: this.currCoinLangFun("wanta_sell_text", "buy_coins_relevant"), //我要卖
          value: "1",
        },
      ],
      payDic: [
        {
          label: this.currCoinLangFun("text_all_payment"), //所有支付方式
          value: "",
        },
        {
          label: this.currCoinLangFun("bank_card_text", "all"), //银行卡
          value: "yhk",
        },
      ],
      coinData: [], //币种列表
      coinObj: {},
      myPayMethods: [], //我的收款银行卡
      countryData: [], //国家列表
      countryObj: {},
      isInit: false,
      searchForm: {
        _type: 2,
        _bz: "",
        _gj: "",
        _dj: "",
        // _zffs: '',
      },
      //交易列表
      tableLoading: false,
      dealTableData: [],
      dealTableColumn: [
        {
          prop: "sj",
          minWidth: "130",
          label: this.currCoinLangFun("item_sj", "top"), //商家
          align: "left",
        },
        {
          prop: "sl",
          minWidth: "130",
          label: `${this.currCoinLangFun(
            "table_coin_num"
          )}/${this.currCoinLangFun("merinfo_quota", "center")}`, //数量/限额
          align: "left",
        },
        {
          prop: "dj",
          width: "120",
          label: this.currCoinLangFun("text_unit_price"), //单价
          align: "left",
        },
        {
          prop: "zffs",
          minWidth: "100",
          label: this.currCoinLangFun("zhifufangshi_text", "move_transaction"), //支付方式
          align: "left",
        },
        {
          prop: "remarks",
          minWidth: "100",
          label: this.currCoinLangFun("text_remark", "all"), //备注
          align: "left",
        },
        {
          prop: "cz",
          width: "140",
          label: this.currCoinLangFun("operation", "all"), //操作
          align: "right",
        },
      ],
      //交易表单
      payFormData: {
        dialog: false,
        loading: false,
        dialogTitle: `${this.currCoinLangFun("text_buy", "all")} USDT`, //弹窗标题(购买 xxx)
        orderInfo: {},
        _num: "", //数量
        _money: "", //金额
      },
      businessChatDialog: false,
      currOrderData: {},
      currOpenOrderId: "", //当前打开的订单id
      countDownTimer: null, //刷新倒计时
      time: 30,
      fundPopupDialog: false,
    };
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "isLogin",
      "userVariation",
      "merchantVariation",
      "exchangeName",
    ]),
    currCoinData() {
      return this.coinObj[this.searchForm._bz]
        ? this.coinObj[this.searchForm._bz]
        : {};
    },
    currCountryData() {
      return this.countryObj[this.searchForm._gj]
        ? this.countryObj[this.searchForm._gj]
        : {};
    },
    payBtnStyle() {
      if (this.isPayFormBtn) {
        return {};
      }
      return {
        background:
          this.payFormData.orderInfo.direction == "2" ? "#22a87b" : "#db3a35",
        borderColor:
          this.payFormData.orderInfo.direction == "2" ? "#22a87b" : "#db3a35",
      };
    },
    isPayFormBtn() {
      let bool = false;
      if (this.searchForm._type == 1) {
        if (
          !this.payFormData._num ||
          Number(this.payFormData._num) >
            Number(this.payFormData.orderInfo.max_transaction) ||
          Number(this.payFormData._num) <
            Number(this.payFormData.orderInfo.min_transaction) ||
          this.isBdBankFun
        ) {
          bool = true;
        }
      } else {
        if (
          !this.payFormData._num ||
          Number(this.payFormData._num) >
            Number(this.payFormData.orderInfo.max_transaction) ||
          Number(this.payFormData._num) <
            Number(this.payFormData.orderInfo.min_transaction)
        ) {
          bool = true;
        }
      }

      return bool;
    },
    isAccordWithPay() {
      if (this.myPayMethods.length) {
        let arr = this.myPayMethods.filter(
          (item) => item.country_id == this.searchForm._gj
        );
        if (arr.length == 0) {
          return 1;
          // "您的收款方式不支持当前所选法定代币,请前往个人中心更改您的收款方式";
        }
      } else {
        return 2;
        // "您还没有收款方式，请前往个人中心添加";
      }
    },
    isBdBankFun() {
      let arr = this.myPayMethods.filter(
        (item) => item.country_id == this.searchForm._gj
      );

      if (arr.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  watch: {
    searchForm: {
      handler(newVal) {
        if (this.isInit) {
          this.getDealTableDataFun();
        }
      },
      deep: true, //深监听
    },
    userVariation: {
      handler(data) {
        if (data.type == "otc" && data.order == this.currOpenOrderId) {
          //更新当前聊天弹窗状态
          this.upDataBusinessChfundPopupDialogatBoxFun(data);
        }
      },
      deep: true,
    },
    merchantVariation: {
      handler(data) {
        if (data.type == "otc" && data.order == this.currOpenOrderId) {
          //更新当前聊天弹窗状态
          this.upDataBusinessChfundPopupDialogatBoxFun(data);
        }
      },
      deep: true,
    },
  },
  mounted() {
    //获取币种列表
    //获取国家列表
    let promiseArr = [
      new Promise((resolve) => {
        getDataApi("1531180815470080002", { pageSize: -521 }).then((res) => {
          let data = res.data.data;
          this.coinData = data.records;
          this.coinData.forEach((item) => {
            this.coinObj[item.id] = item;
            if (item.symbol == "USDT") {
              this.searchForm._bz = item.id;
            }
          });
          if (!this.searchForm._bz) {
            this.searchForm._bz = this.coinData[0].id;
          }
          resolve();
        });
      }),
      new Promise((resolve) => {
        getDataApi("1531578936708677634", { pageSize: -521 }).then((res) => {
          let data = res.data.data;
          this.countryData = data.records;
          this.countryData.forEach((item) => {
            this.countryObj[item.id] = item;
            if (item.local_currency == this.exchangeName) {
              this.searchForm._gj = item.id;
            }
          });
          if (!this.searchForm._gj) {
            this.searchForm._gj = this.countryData[0].id;
          }
          resolve();
        });
      }),
      new Promise((resolve) => {
        getPayment().then((res) => {
          this.myPayMethods = res.data.data;
          resolve();
        });
      }),
    ];
    Promise.all(promiseArr).then(() => {
      this.isInit = true;
      this.getDealTableDataFun();
    });
  },
  methods: {
    currCoinLangFun(code, type = "exchange") {
      return this.coinLangFun(type, code);
    },
    fundCloseDialog() {
      this.fundPopupDialog = false;
    },
    //更新聊天窗口信息
    upDataBusinessChfundPopupDialogatBoxFun(data) {
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
    setInputFun(value, key, num) {
      this.searchForm[key] = inputNumberLinmitFun(value, num);
    },
    setPayInputFun(value, key, num) {
      this.payFormData[key] = inputNumberLinmitFun(value, num);
      if (key == "_money") {
        this.payFormData._num = toNorounded(
          Number(this.payFormData[key]).myDiv(this.payFormData.orderInfo.rate),
          8
        );
      } else if (key == "_num") {
        this.payFormData._money = toNorounded(
          Number(this.payFormData[key]).myMul(this.payFormData.orderInfo.rate),
          2
        );
      }
    },
    //获取交易列表
    getDealTableDataFun() {
      this.tableLoading = true;
      let search = {
        size: -521,
        coinId: this.searchForm._bz,
        countryId: this.searchForm._gj,
        type: this.searchForm._type,
        status: 1,
        coinCou: this.searchForm._dj,
      };
      getMerchantEntrustListApi(search).then((res) => {
        let data = res.data.data.records;
        this.dealTableData = data.map((item) => {
          item.completedRate = toNorounded(item.completedRate, 2);
          item.coin_cou_remain_text = toThousands(item.coin_cou_remain);
          item.min_transaction_text = toThousands(item.min_transaction);
          item.max_transaction_text = toThousands(item.max_transaction);
          item.rate_text = toThousands(item.rate);
          item.completedOrderQuantity = toThousands(
            item.completedOrderQuantity
          );
          return item;
        });
        this.tableLoading = false;
        //打开窗口30s刷新一次单价
        this.refreshPaymentInfo();
      });
    },
    //打开购买 出售弹窗
    openPayFun(data) {
      if (!this.isLogin) {
        this.$router.push({
          path: `/user/login`,
        });
        return false;
      }

      this.payFormData = {
        ...this.payFormData,
        orderInfo: data,
        _num: "",
        _money: "",
        dialogTitle: `${
          data.direction == 1
            ? this.currCoinLangFun("text_sell", "all") //出售
            : this.currCoinLangFun("text_buy", "all") //购买
        } ${data.coin_symbol}`,
      };
      this.payFormData.dialog = true;
    },
    //购买 出售
    payCoinFun() {
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
      // ====

      let data = {
        advertiseId: this.payFormData.orderInfo.id,
        coinCou: this.payFormData._num,
        fiatCurrencyAmount: this.payFormData._money,
        serviceType: 2,
        type: this.payFormData.orderInfo.direction == "2" ? "1" : "2",
      };
      //确认下单
      this.$confirm(
        this.currCoinLangFun("sfqrxd_tip_text", "exchange"),
        this.currCoinLangFun("tips", "all"),
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"),
          cancelButtonText: this.currCoinLangFun("cancel", "all"),
          type: "warning",
        }
      )
        .then(() => {
          this.payFormData.loading = true;
          this.affirmPayCoinFun(data);
        })
        .catch(() => {});
    },
    //下单
    affirmPayCoinFun(data) {
      newCommonOrder(data)
        .then((res) => {
          console.log(res);
          if (res.data.msg == "verification") {
            this.payFormData.loading = false;
            try {
              this.$DialogForm.show({
                title: this.currCoinLangFun("sfqrxd_tip_text", "center"), //请输入资金密码
                width: "30%",
                menuPosition: "right",
                option: {
                  submitText: this.currCoinLangFun("confirm_order", "all"), //确认下单
                  column: [
                    {
                      label: this.currCoinLangFun("security_zjmm", "center"), //资金密码
                      type: "password",
                      prop: "tradePwd",
                      showPassword: true,
                      span: 24,
                    },
                  ],
                },
                callback: (res) => {
                  let zjmmData = this.deepClone(res.data);
                  zjmmData.tradePwd = md5(zjmmData.tradePwd);
                  verifyMoneyPassApi(zjmmData)
                    .then(() => {
                      this.affirmPayCoinFun(data);
                      res.done();
                      res.close();
                    })
                    .catch(() => {
                      res.done();
                    });
                },
              });
            } catch (error) {
              console.warn(error);
            }
            return false;
          }

          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"),
          }); //下单成功
          getServicePayment({ orderId: res.data.data })
            .then((dataRes) => {
              this.currOrderData = {
                id: res.data.data,
                ...dataRes.data.data,
              };

              this.currOpenOrderId = res.data.data;
              this.payFormData.loading = false;
              this.payFormData.dialog = false;
              this.businessChatDialog = true;
            })
            .catch(() => {
              this.payFormData.loading = false;
              this.payFormData.dialog = false;
            });
        })
        .catch(() => {
          this.payFormData.loading = false;
          this.payFormData.dialog = false;
        });
    },
    refreshPaymentInfo() {
      if (this.countDownTimer) {
        clearInterval(this.countDownTimer);
      }
      this.time = 30;
      this.countDownTimer = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          this.time = 30;
          try {
            let search = {
              size: -521,
              coinId: this.searchForm._bz,
              countryId: this.searchForm._gj,
              type: this.searchForm._type,
              status: 1,
            };
            getMerchantEntrustListApi(search).then((res) => {
              let data = res.data.data.records;
              this.dealTableData = data.map((item) => {
                item.completedRate = toNorounded(item.completedRate, 2);
                item.coin_cou_remain_text = toThousands(item.coin_cou_remain);
                item.min_transaction_text = toThousands(item.min_transaction);
                item.max_transaction_text = toThousands(item.max_transaction);
                item.rate_text = toThousands(item.rate);
                item.completedOrderQuantity = toThousands(
                  item.completedOrderQuantity
                );
                return item;
              });

              //更新当前商家交易数据
              if (this.payFormData.orderInfo && this.payFormData.orderInfo.id) {
                let currOrderInfo = this.dealTableData.filter(
                  (item) => item.id == this.payFormData.orderInfo.id
                )[0];
                this.payFormData.orderInfo = currOrderInfo;
              }
            });
          } catch (err) {}
        }
      }, 1000);

      // this.countDownTimer = setInterval(() => {
      //   try {
      //     let search = {
      //       size: -521,
      //       coinId: this.searchForm._bz,
      //       countryId: this.searchForm._gj,
      //       type: this.searchForm._type,
      //       status: 1,
      //     };
      //     getMerchantEntrustListApi(search).then((res) => {
      //       let data = res.data.data.records;
      //       this.dealTableData = data.map((item) => {
      //         item.completedRate = toNorounded(item.completedRate, 2);
      //         item.coin_cou_remain_text = toThousands(item.coin_cou_remain);
      //         item.min_transaction_text = toThousands(item.min_transaction);
      //         item.max_transaction_text = toThousands(item.max_transaction);
      //         item.rate_text = toThousands(item.rate);
      //         item.completedOrderQuantity = toThousands(
      //           item.completedOrderQuantity
      //         );
      //         return item;
      //       });

      //       //更新当前商家交易数据
      //       if (this.payFormData.orderInfo && this.payFormData.orderInfo.id) {
      //         let currOrderInfo = this.dealTableData.filter(
      //           (item) => item.id == this.payFormData.orderInfo.id
      //         )[0];
      //         this.payFormData.orderInfo = currOrderInfo;
      //       }
      //     });
      //   } catch (err) {}
      // }, 30000);
    },
    closeDialog(type) {
      if (type == "businessChatDialog") {
        this.businessChatDialog = false;
        this.currOpenOrderId = "";
        this.getDealTableDataFun();
      }
    },
    beforeDestroy() {
      if (this.countDownTimer) {
        clearInterval(this.countDownTimer);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.merchant-deal-box {
  min-height: 70vh;

  .merchant-deal-container {
    width: 1200px;
    margin: 0px auto;
    padding: 40px 0;
  }

  .search-box {
    display: flex;
    align-items: center;

    .search-item {
      margin-right: 20px;
    }

    .search-type-box {
      display: flex;
      align-items: center;
      padding: 5px;
      font-size: 14px;
      border-radius: 2px;
      border: 1px solid;

      .type-item {
        padding: 5px 20px;
        border-radius: 2px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;

        &:nth-child(1).active {
          background-color: #22a87b;
          color: #fff;
        }

        &:nth-child(2).active {
          background-color: #db3a35;
          color: #fff;
        }
      }

      // box-shadow:0 1px 2px 0 rgba(0, 0, 0,0.05)
    }

    .select-heade-box {
      display: flex;
      align-items: center;
      padding-left: 5px;
      width: 100%;
      height: 100%;

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }

    .coin-select-box {
      width: 155px;

      ::v-deep.el-input__inner {
        padding-left: 40px;
      }
    }

    .country-input-select {
      width: 230px;

      .el-select {
        width: 105px;

        ::v-deep.el-input__inner {
          padding-left: 40px;
        }
      }
    }
  }

  .deal-list-icon {
    font-size: 14px;
    text-align: right;
    padding-left: 10px;
    margin: 40px 0 20px;
    cursor: pointer;
  }

  .table-box {
    .table-merchant-info {
      display: flex;
      align-items: center;

      .info-box {
        padding-left: 10px;

        .info-name {
          font-size: 16px;
        }

        .info-tip {
          font-size: 12px;
        }
      }
    }

    .table-merchant-num {
      .num-item {
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;

        span {
          padding-right: 10px;
        }
      }
    }

    .table-merchant-money {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
<style lang="scss">
.select-poper-box {
  .select-item-box {
    display: flex;
    align-items: center;

    img {
      width: 22px;
      height: 22px;
      margin-right: 10px;
      border-radius: 50%;
      margin-left: 20px;
    }
  }
}

.deal-form-dialog {
  .deal-form-box {
    .form-item {
      margin-bottom: 15px;

      .item-label {
        font-size: 12px;
        padding-bottom: 5px;
      }

      .item-tip {
        font-size: 12px;
        padding-top: 2px;
      }
    }
  }

  .btn-box {
    .el-button {
      width: 100%;
    }
  }
}
</style>