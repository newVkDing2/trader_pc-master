<template>
  <div class="fit-background merchant-info-box">
    <div class="info-top fit-tc-border-color">
      <div class="info-name">
        <avue-avatar class="fit-background-di fit-tc-primary active-text">
          {{ userInfo.merchant.name.split("")[0] }}
        </avue-avatar>
        <span>{{ userInfo.merchant.name }}</span>
        <el-tooltip class="item" effect="dark" :content="currCoinLangFun('transfer', 'full')" placement="top">
          <i class="fit-tc-primary el-icon-sort" style="transform: rotate(-90deg); font-size: 12px"
            @click="isTradeFundsDialog = true"></i>
        </el-tooltip>
      </div>
      <div class="info-time">
        {{ currCoinLangFun("merinfo_zcsj") }}：{{
                userInfo.merchant.create_time.split(" ")[0]
                }}
      </div>
      <div class="info-statistical">
        <div class="statistical-item">
          <div class="title">{{ statisticsData.cjds || 0 }}</div>
          <div class="text">{{ currCoinLangFun("merinfo_cjds") }}</div>
        </div>

        <div class="statistical-item">
          <div class="title">{{ statisticsData.wcl || "0.00%" }}</div>
          <div class="text">{{ currCoinLangFun("merinfo_wcl") }}</div>
        </div>
        <div class="statistical-item">
          <div class="title">{{ statisticsData.wtds || 0 }}</div>
          <div class="text">{{ currCoinLangFun("merinfo_jyds") }}</div>
        </div>
      </div>
    </div>
    <!-- 用户 -->
    <!-- <div class="info-content">
      <div class="order-list-content">
        <div class="content-title">委托单</div>
        <div class="content-buy">
          <div class="list-title">购买</div>
          <div class="list-table">
            <el-table size="mini" :data="marketsData" height="300px">
              <el-table-column v-for="(item,index) in orderTableColumn" :key="index" v-bind="item">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="content-buy">
          <div class="list-title">出售</div>
          <div class="list-table">
            <el-table size="mini" :data="marketsData" height="300px">
              <el-table-column v-for="(item,index) in orderTableColumn" :key="index" v-bind="item">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>-->
    <!-- 商家 -->
    <div class="merchant-tabs-box">
      <el-tabs v-model="tabsValue" @tab-click="tabsClick">
        <el-tab-pane :label="currCoinLangFun('merinfo_wtgl')" name="entrust"></el-tab-pane>
        <el-tab-pane :label="currCoinLangFun('merinfo_jyjl')" name="deal"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="entrust-box" v-show="tabsValue == 'entrust'">
      <!-- 委托管理 -->
      <div class="entrust-btn">
        <el-button type="primary" size="medium" @click="opentEntrust('add')">{{
                  currCoinLangFun("merinfo_xzwt")
                  }}</el-button>
      </div>
      <div class="entrust-table null-table-hover">
        <el-table size="mini" :data="entrustData" v-loading="entrustLoading">
          <el-table-column v-for="(item, index) in entrustTAbleColumn" :key="index" v-bind="item"
            :show-overflow-tooltip="item.prop != 'cz'">
            <template slot-scope="scope">
              <div class="table-merchant-info" v-if="item.prop == 'coin_symbol'">
                <img :src="
                                    coinObj[scope.row.coin_id]
                                      ? coinObj[scope.row.coin_id].avatar
                                      : ''
                                  " alt style="width: 22px; height: 22px; border-radius: 50%" />
                <span>{{ scope.row.coin_symbol }}</span>
              </div>
              <div class="table-merchant-num" v-else-if="item.prop == 'sl'">
                <div class="num-item">
                  <span class="fit-tc-tertiary">{{
                                      currCoinLangFun("sl_text", "move_transaction")
                                      }}</span>
                  {{ scope.row.coin_cou }} {{ scope.row.coin_symbol }}
                </div>
                <div class="num-item">
                  <span class="fit-tc-tertiary">{{
                                      currCoinLangFun("merinfo_surplus")
                                      }}</span>
                  {{ toNorounded(scope.row.coin_cou_remain || 0) }}
                  {{ scope.row.coin_symbol }}
                </div>
                <div class="num-item">
                  <span class="fit-tc-tertiary">{{
                                      currCoinLangFun("merinfo_quota")
                                      }}</span>
                  {{ scope.row.min_transaction }} {{ scope.row.coin_symbol }} -
                  {{ scope.row.max_transaction }} {{ scope.row.coin_symbol }}
                </div>
              </div>
              <div class="table-merchant-money" :class="{
                                'fit-tc-rise': scope.row.direction == '1',
                                'fit-tc-fall': scope.row.direction != '1',
                              }" v-else-if="item.prop == 'dj'">
                {{ scope.row.rate }} {{ scope.row.fiat_currency }}
              </div>
              <div class="table-merchant-money" :class="{
                                'fit-tc-rise': scope.row.direction == '1',
                                'fit-tc-fall': scope.row.direction != '1',
                              }" v-else-if="item.prop == 'lx'">
                {{
                                scope.row.direction == "1"
                                ? currCoinLangFun("text_buy", "all")
                                : currCoinLangFun("text_sell", "all")
                                }}
              </div>
              <div class="table-merchant-pay" v-else-if="item.prop == 'zffs'">
                <div v-if="scope.row.direction=='2'">
                  <div>
                    <span class="fit-tc-tip">{{ currCoinLangFun("merinfo_payee") }}：</span>
                    {{ scope.row.realname }}
                  </div>
                  <div>
                    <span class="fit-tc-tip">{{ currCoinLangFun("text_khyh") }}：</span>
                    {{ scope.row.bank }}
                  </div>
                  <div>
                    <span class="fit-tc-tip">{{ currCoinLangFun("text_yhkh") }}：</span>
                    {{ scope.row.account }}
                  </div>
                </div>
                <div v-else>-</div>
              </div>
              <div class="table-merchant-remarks" v-else-if="item.prop == 'remarks'">
                {{ scope.row.remarks }}
              </div>
              <div class="table-merchant-btn" v-else-if="item.prop == 'cz'">
                <el-button v-if="scope.row.status != '1'" type="text" @click="opentEntrust('upper', scope.row)">{{
                                  currCoinLangFun("merinfo_onsell") }}</el-button>
                <el-button v-if="scope.row.status != '0'" type="text" @click="opentEntrust('lower', scope.row)">{{
                                  currCoinLangFun("merinfo_offsell") }}</el-button>
                <el-button type="text" v-if="scope.row.status == '0'" @click="opentEntrust('edit', scope.row)">{{
                                  currCoinLangFun("text_xg", "all") }}</el-button>
                <el-button type="text" @click="opentEntrust('del', scope.row)">{{ currCoinLangFun("text_sc", "all")
                                  }}</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="deal-box" v-show="tabsValue == 'deal'">
      <order ref="orderView" serviceType="" :isMerchant="true"></order>
    </div>

    <!-- 新增委托 -->
    <el-dialog :close-on-click-modal="false" :title="
            currCoinLangFun(entrustType == 'add' ? 'merinfo_xzwt' : 'merinfo_bjwt')
          " :visible.sync="entrustForm.dialog" width="700px" custom-class="merchant-info-add-dialog">
      <div class="add-box fit-tc-primary">
        <div class="add-form">
          <el-form ref="form" :rules="rules" :model="entrustForm" label-width="120px">
            <el-form-item :label="`${currCoinLangFun('orders_table_coin', 'full')}：`">
              <el-select class="coin-select-box" popper-class="select-poper-box" v-model="entrustForm._bz"
                :disabled="entrustType == 'edit'" filterable :placeholder="`${currCoinLangFun(
                                  'merinfo_qxz'
                                )} ${currCoinLangFun('orders_table_coin', 'full')}`">
                <div slot="prefix" class="select-heade-box">
                  <img :src="currCoinData.avatar" />
                </div>
                <template v-for="item in coinData">
                  <el-option v-if="item.id != '1542030861903380482'" :key="item.id" :label="item.symbol" :value="item.id">
                    <div class="select-item-box">
                      <img :src="item.avatar" />
                      <span>{{ item.symbol }}</span>
                    </div>
                  </el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('text_type', 'all')}：`">
              <el-select :disabled="entrustType == 'edit'" v-model="entrustForm._lx" filterable :placeholder="`${currCoinLangFun(
                                'merinfo_qxz'
                              )} ${currCoinLangFun('text_type', 'all')}`">
                <el-option v-for="item in dealTypeData" :key="item.value" :label="item.label"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('text_unit_price', 'exchange')}：`" prop="_dj">
              <el-input :placeholder="`${currCoinLangFun(
                                'merinfo_qsr'
                              )} ${currCoinLangFun('text_unit_price', 'exchange')}`" @input="(value) => setInputFun(value, '_dj', 2)"
                v-model="entrustForm._dj" class="country-input-select">
                <el-select v-model="entrustForm._gj" popper-class="select-poper-box" filterable slot="append"
                  :placeholder="currCoinLangFun('merinfo_qxz')">
                  <div slot="prefix" class="select-heade-box">
                    <img :src="currCountryData.icon" />
                  </div>
                  <el-option v-for="(item, index) in countryData" :key="index" :label="item.local_currency"
                    :value="item.id">
                    <div class="select-item-box">
                      <img :src="item.icon" />
                      <span>{{ item.local_currency }}</span>
                    </div>
                  </el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('sl_text', 'move_transaction')}：`" prop="_sl">
              <el-input @input="(value) => setInputFun(value, '_sl', 8)" v-model="entrustForm._sl" :placeholder="`${currCoinLangFun(
                                'merinfo_qsr'
                              )} ${currCoinLangFun('sl_text', 'move_transaction')}`"></el-input>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('merinfo_quota')}：`" prop="_xe">
              <div style="display: flex; align-items: center">
                <el-form-item prop="_xe_strt">
                  <el-input @input="(value) => setInputFun(value, '_xe_strt', 2)" v-model="entrustForm._xe_strt"
                    :placeholder="`${currCoinLangFun(
                                          'qsrzdxl_tips',
                                          'merchant'
                                        )}`"></el-input>
                </el-form-item>
                <span style="padding: 0 10px">-</span>
                <el-form-item prop="_xe_end">
                  <el-input @input="(value) => setInputFun(value, '_xe_end', 2)" v-model="entrustForm._xe_end"
                    :placeholder="`${currCoinLangFun(
                                          'qsrzgxl_tups',
                                          'merchant'
                                        )}`"></el-input>
                </el-form-item>
                <span style="padding-left: 10px; flex: 0 0 70px">
                  {{ currCoinData.symbol }}
                </span>
              </div>
            </el-form-item>
            <template v-if="
                            payment.length > 0 ||
                            entrustForm._xm ||
                            entrustForm._yhkzh ||
                            entrustForm._khyh
                          ">
              <el-form-item :label="`${currCoinLangFun('text_skrxm')}：`" prop="_xm" v-if="entrustForm._lx == 2">
                <el-input v-model="entrustForm._xm" :disabled="true" :placeholder="`${currCoinLangFun(
                                    'merinfo_qsr'
                                  )} ${currCoinLangFun('text_skrxm')}`"></el-input>
              </el-form-item>
              <el-form-item :label="`${currCoinLangFun('text_yhkzh')}：`" prop="_yhkzh" v-if="entrustForm._lx == 2">
                <el-input v-model="entrustForm._yhkzh" :disabled="true" :placeholder="`${currCoinLangFun(
                                    'merinfo_qsr'
                                  )} ${currCoinLangFun('text_yhkzh')}`"></el-input>
              </el-form-item>
              <el-form-item :label="`${currCoinLangFun('text_khyh')}：`" prop="_khyh" v-if="entrustForm._lx == 2">
                <el-input v-model="entrustForm._khyh" :disabled="true" :placeholder="`${currCoinLangFun(
                                    'merinfo_qsr'
                                  )} ${currCoinLangFun('text_khyh')}`"></el-input>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item :label="`${currCoinLangFun('tips', 'all')}：`" prop="_xm">
                <div class="fit-tc-tip">
                  <span>
                    {{ currCoinLangFun("wszskfs_qw_set_text") }}
                    <!-- 未设置收款方式，前往 -->
                  </span>
                  <span style="cursor: pointer" class="fit-tc-tertiary active-text" @click="
                                        $router.push({
                                          path: '/account/center/info',
                                        })
                                      ">{{ currCoinLangFun("user_center", "user") }}</span>
                  {{ currCoinLangFun("setup", "all") }}
                </div>
              </el-form-item>
            </template>

            <el-form-item :label="`${currCoinLangFun('text_remark', 'all')}：`" prop="remarks">
              <el-input type="textarea" :maxlength="400" show-word-limit v-model="entrustForm.remarks"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box">
          <!-- <el-button @click="entrustForm.dialog=false">{{currCoinLangFun('cancel', 'all')}}</el-button> -->
          <el-button type="primary" :loading="entrustForm.loading" :disabled="isBtn" @click="entrustFun()">{{
                      entrustForm.formType == "add"
                      ? currCoinLangFun("text_newly", "all")
                      : currCoinLangFun("text_xg", "all")
                      }}</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 资金划转 -->
    <fund-transfer v-if="isTradeFundsDialog" :transferDialog="isTradeFundsDialog" :closeDialog="closeDialog.bind(this)"
      targerWalletKey="service"></fund-transfer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { getDataApi } from "@/api/system";
import { getPayment } from "@/api/user";
import { inputNumberLinmitFun, toNorounded } from "@/util/util";
import {
  merchantAddEntrustApi,
  merchantEditEntrustApi,
  getMerchantEntrustListApi,
} from "@/api/merchant";
import { getServicePayment } from "@/api/otc.js";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
import order from "@/views/otc/order.vue";
export default {
  components: {
    fundTransfer,
    order,
  },
  data() {
    return {
      toNorounded: toNorounded,
      isTradeFundsDialog: false,
      orderData: [],
      statisticsData: [], //统计数据
      orderTableColumn: [
        {
          prop: "wtdlx",
          width: "130",
          label: this.currCoinLangFun("merinfo_wtdh", "exchange"), //委托单号
          align: "left",
        },
        {
          prop: "dj",
          minWidth: "90",
          label: this.currCoinLangFun("text_unit_price", "exchange"), //单价
          align: "left",
        },
        {
          prop: "sl",
          minWidth: "90",
          label: this.currCoinLangFun("sl_text", "move_transaction"), //数量
          align: "left",
        },
        {
          prop: "ze",
          minWidth: "120",
          label: this.currCoinLangFun("text_total_ze", "exchange"), //总额
          align: "left",
        },
        {
          prop: "dbxe",
          minWidth: "120",
          label: this.currCoinLangFun("text_single_limit", "exchange"), //单笔限额
          align: "left",
        },
        {
          prop: "zffs",
          minWidth: "150",
          label: this.currCoinLangFun("text_payinfo", "exchange"), //支付信息
          align: "left",
        },
      ],
      entrustData: [],
      entrustTAbleColumn: [
        {
          prop: "coin_symbol",
          width: "120",
          label: this.currCoinLangFun("orders_table_coin", "full"), //币种
          align: "left",
        },
        {
          prop: "dj",
          width: "120",
          label: this.currCoinLangFun("text_unit_price", "exchange"), //单价
          align: "left",
        },
        {
          prop: "lx",
          width: "80",
          label: this.currCoinLangFun("orders_table_entrust_type", "full"), //委托类型
          align: "center",
        },
        {
          prop: "sl",
          minWidth: "150",
          label: this.currCoinLangFun("sl_text", "move_transaction"), //数量
          align: "left",
        },
        {
          prop: "zffs",
          minWidth: "150",
          label: this.currCoinLangFun("text_payinfo", "exchange"), //支付信息
          align: "left",
        },
        {
          prop: "remarks",
          width: "120",
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
      tabsValue: "entrust",
      entrustForm: {
        dialog: false,
        loading: false,
        formType: "add",
        _bz: "", //币种
        _lx: 2, //类型
        _sl: "", //数量
        _gj: "", //国家
        _dj: "", //单价
        _xe_strt: "", //限额
        _xe_end: "", //限额
        _xm: "", //收款人姓名
        _yhkzh: "", //银行卡账户
        _khyh: "", //开户银行
        _xe: "0",
        remarks: "", //备注
      },
      entrustType: "add",
      coinData: [], //币种列表
      coinObj: {},
      dealTypeData: [
        {
          label: this.currCoinLangFun("text_sell", "all"), //出售
          value: 2,
        },
        {
          label: this.currCoinLangFun("text_buy", "all"), //购买
          value: 1,
        },
      ], //交易类型
      countryData: [], //国家列表
      countryObj: {},
      rules: {
        _dj: [
          {
            required: true,
            message: `${this.currCoinLangFun(
              "merinfo_qsr"
            )} ${this.currCoinLangFun("text_unit_price", "exchange")}`, //请输入单价
            trigger: "blur",
          },
        ],
        _sl: [
          {
            required: true,
            message: `${this.currCoinLangFun(
              "merinfo_qsr"
            )} ${this.currCoinLangFun("sl_text", "move_transaction")}`, //请输入 数量
            trigger: "blur",
          },
        ],
        _xm: [
          {
            required: true,
            message: `${this.currCoinLangFun(
              "merinfo_qsr"
            )} ${this.currCoinLangFun("text_skrxm")}`, //请输入 收款人姓名
            trigger: "blur",
          },
        ],
        _yhkzh: [
          {
            required: true,
            message: `${this.currCoinLangFun(
              "merinfo_qsr"
            )} ${this.currCoinLangFun("text_yhkzh")}`, //请输入 银行卡账户
            trigger: "blur",
          },
        ],
        _khyh: [
          {
            required: true,
            message: `${this.currCoinLangFun(
              "merinfo_qsr"
            )} ${this.currCoinLangFun("text_khyh")}`, //请输入开户银行
            trigger: "blur",
          },
        ],
        _xe_strt: [
          {
            required: true,
            message: `${this.currCoinLangFun("qsrzdxl_tips", "merchant")}`, //请输入 最低限额
            trigger: "blur",
          },
        ],
        _xe_end: [
          {
            required: true,
            message: this.currCoinLangFun("qsrzgxl_tups", "merchant"), //请输入 最高限额
            trigger: "blur",
          },
        ],
        _xe: [{ required: true }],
      },
      payment: [],
    };
  },
  async created() {
    await getPayment().then((res) => {
      this.payment = res.data.data;
    });
  },
  computed: {
    ...mapGetters(["userInfo"]),
    currCoinData() {
      return this.coinObj[this.entrustForm._bz]
        ? this.coinObj[this.entrustForm._bz]
        : {};
    },
    currCountryData() {
      return this.countryObj[this.entrustForm._gj]
        ? this.countryObj[this.entrustForm._gj]
        : {};
    },
    isBtn() {
      let bool = false;
      console.log(this.entrustForm);
      for (let key in this.entrustForm) {
        if (
          ![
            "dialog",
            "loading",
            "formType",
            "remarks",
            "_xe",
            "_khyh",
            "_xm",
            "_yhkzh",
          ].includes(key) &&
          this.entrustForm[key] === ""
        ) {
          bool = true;
        }
        if (
          this.entrustForm._lx == 2 &&
          (this.entrustForm._xm === "" ||
            this.entrustForm._yhkzh === "" ||
            this.entrustForm._khyh === "")
        ) {
          bool = true;
        }
      }
      return bool;
    },
  },
  mounted() {
    this.rules._xe_end.push({
      validator: (rule, value, callback) => {
        if (
          value - 0 > this.entrustForm._sl - 0 ||
          value - 0 < this.entrustForm._xe_strt - 0 ||
          value - 0 == 0
        ) {
          return callback(
            new Error(this.currCoinLangFun("text_qsrzqxe", "exchange"))
          ); //请输入正确的限额
        }
        callback();
      },
      trigger: "blur",
    });
    this.rules._xe_strt.push({
      validator: (rule, value, callback) => {
        if (
          value - 0 > this.entrustForm._sl - 0 ||
          (this.entrustForm._xe_end && value - 0 > this.entrustForm._xe_end - 0)
        ) {
          return callback(
            new Error(this.currCoinLangFun("text_qsrzqxe", "exchange"))
          ); //请输入正确的限额
        }
        callback();
      },
      trigger: "blur",
    });
    if (this.$route.params.orderCode) {
      this.tabsValue = "deal";
      this.$nextTick(() => {
        //切换到交易记录tab

        this.$refs.orderView.tableSearchData.orderCode =
          this.$route.params.orderCode;

        this.$refs.orderView.getCommonOrderFun();
      });
    }
    //获取币种列表
    getDataApi("1531180815470080002", { pageSize: -521 }).then((res) => {
      let data = res.data.data;
      this.coinData = data.records;
      this.coinObj = {};
      this.coinData.forEach((item) => {
        this.coinObj[item.id] = item;
      });
      this.entrustForm._bz = this.coinData[0].id;
    });
    //获取国家列表
    getDataApi("1531578936708677634", { pageSize: -521 }).then((res) => {
      let data = res.data.data;
      this.countryData = data.records;
      this.countryData.forEach((item) => {
        this.countryObj[item.id] = item;
      });
      this.entrustForm._gj = this.countryData[0].id;
    });
    this.getUserInfo();
    this.getEntrustListFun();
  },
  methods: {
    ...mapMutations(["getUserInfoData"]),
    ...mapActions(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    closeDialog() {
      this.isTradeFundsDialog = false;
    },
    tabsClick(e) {
      console.log(e);
      if (e.name == "entrust") {
        this.getEntrustListFun();
      } else if (e.name == "deal") {
        this.$refs.orderView.currPage = 1;
        this.$refs.orderView.getCommonOrderFun();
      }
    },
    //打开委托表单
    opentEntrust(type, data) {
      if (type == "add") {
        this.entrustType = type;
        this.entrustForm = {
          dialog: true,
          loading: false,
          formType: type,
          _bz: this.coinData[0].id, //币种
          _lx: 2, //类型
          _sl: "", //数量
          _gj: this.countryData[0].id, //国家
          _dj: "", //单价
          _xe_strt: "", //限额
          _xe_end: "", //限额
          _xm: this.payment.length > 0 ? this.payment[0].name : "", //收款人姓名
          _yhkzh: this.payment.length > 0 ? this.payment[0].account : "", //银行卡账户
          _khyh: this.payment.length > 0 ? this.payment[0].bank : "", //开户银行
          remarks: "", //备注
          _xe: "0",
        };
      } else if (type == "edit") {
        this.entrustType = type;
        this.entrustForm = {
          dialog: true,
          loading: false,
          formType: type,
          id: data.id,
          _bz: data.coin_id, //币种
          _lx: Number(data.direction), //类型
          _sl: data.coin_cou, //数量
          _gj: data.country_id, //国家
          _dj: data.rate, //单价
          _xe_strt: data.min_transaction, //限额
          _xe_end: data.max_transaction, //限额
          _xm: data.realname, //收款人姓名
          _yhkzh: data.account, //银行卡账户
          _khyh: data.bank, //开户银行
          remarks: data.remarks, //备注
          _xe: "0",
        };
      }
      if (type == "add" || type == "edit") {
        setTimeout(() => {
          this.$refs.form.clearValidate();
        }, 0);
      }
      if (type == "upper") {
        this.$confirm(
          this.currCoinLangFun("text_wt_upper", "popup_tips"), //是否上架当前委托?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            merchantEditEntrustApi({
              id: data.id,
              status: 1,
            })
              .then(() => {
                this.$message({
                  type: "success",
                  message: this.currCoinLangFun(
                    "text_upper_success",
                    "popup_tips"
                  ), //上架成功!
                });
                this.getEntrustListFun();
              })
              .catch(() => {
                this.entrustForm.loading = false;
              });
          })
          .catch(() => {});
      } else if (type == "lower") {
        this.$confirm(
          this.currCoinLangFun("text_wt_lower", "popup_tips"), //是否下架当前委托?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            merchantEditEntrustApi({
              id: data.id,
              status: 0,
            })
              .then((res) => {
                this.$message({
                  type: "success",
                  message: this.currCoinLangFun(
                    "text_lower_success",
                    "popup_tips"
                  ), //下架成功!
                });
                this.getEntrustListFun();
              })
              .catch(() => {
                this.entrustForm.loading = false;
              });
          })
          .catch(() => {});
      }
      if (type == "del") {
        this.$confirm(
          this.currCoinLangFun("text_wt_del", "popup_tips"), //是否删除当前委托?
          this.currCoinLangFun("tips", "all"), //提示
          {
            confirmButtonText: this.currCoinLangFun("confirm", "all"), //确定
            cancelButtonText: this.currCoinLangFun("cancel", "all"), //取消
            type: "warning",
          }
        )
          .then(() => {
            merchantEditEntrustApi({
              id: data.id,
              status: 0,
              isDeleted: -1,
            })
              .then((res) => {
                this.$message({
                  type: "success",
                  message: this.currCoinLangFun(
                    "text_del_success",
                    "popup_tips"
                  ), //删除成功!
                });
                this.getEntrustListFun();
              })
              .catch(() => {
                this.entrustForm.loading = false;
              });
          })
          .catch(() => {});
      }
    },
    //新增、编辑 委托
    entrustFun() {
      this.$refs.form.validate((bool, data) => {
        console.log(bool, data);
        if (bool) {
          this.entrustForm.loading = true;
          let data = {
            coinCou: this.entrustForm._sl, //数量
            coinId: this.entrustForm._bz, //币种
            countryId: this.entrustForm._gj, //国家
            direction: this.entrustForm._lx, //类型
            minTransaction: this.entrustForm._xe_strt, //最低限额
            maxTransaction: this.entrustForm._xe_end, //最高限额
            rate: this.entrustForm._dj, //单价
            rateType: 1,
            remarks: this.entrustForm.remarks, //备注
          };
          if (data.direction == "2") {
            data.account = this.entrustForm._yhkzh; //银行卡号
            data.name = this.entrustForm._xm; //姓名
            data.bank = this.entrustForm._khyh; //开户银行
          }
          if (this.entrustForm.formType == "add") {
            merchantAddEntrustApi(data)
              .then((res) => {
                this.$message({
                  type: "success",
                  message: this.currCoinLangFun(
                    "text_newly_success",
                    "popup_tips"
                  ), //新增成功
                });
                this.entrustForm.loading = false;
                this.entrustForm.dialog = false;
                this.getEntrustListFun();
              })
              .catch(() => {
                this.entrustForm.loading = false;
              });
          } else {
            data.id = this.entrustForm.id;
            merchantEditEntrustApi(data)
              .then((res) => {
                this.$message({
                  type: "success",
                  message: this.currCoinLangFun(
                    "text_change_success",
                    "popup_tips"
                  ),
                }); //修改成功
                this.entrustForm.loading = false;
                this.entrustForm.dialog = false;
                this.getEntrustListFun();
              })
              .catch(() => {
                this.entrustForm.loading = false;
              });
          }
        }
      });
    },
    //获取委托列表
    getEntrustListFun() {
      this.entrustLoading = true;
      getMerchantEntrustListApi({
        merchantId: this.userInfo.merchant.id,
        size: -521,
      }).then((res) => {
        let data = res.data.data.records;
        if (data.length) {
          this.statisticsData = {
            cjds: data[0].completedOrderQuantity || 0,
            wcl: `${toNorounded(data[0].completedRate, 2) || 0.0}%`,
            wtds: data[0].advertiseQuantity || 0,
          };
        }
        this.entrustData = data;
        this.entrustLoading = false;
      });
    },
    setInputFun(value, key, num) {
      this.entrustForm[key] = inputNumberLinmitFun(value, num);
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
    //获取交易记录
    getDealListFun() {
      this.getCommonOrder();
    },
    getServicePaymentFun(orderId) {
      getServicePayment({ orderId }).then((res) => {
        this.currOrderData = {
          id: orderId,
          ...res.data.data,
        };
        this.businessChatDialog = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.merchant-info-box {
  padding: 24px;
  min-height: 80vh;

  .info-top {
    border-bottom: 1px solid;
    padding-bottom: 20px;

    .info-name {
      font-size: 16px;
      padding-bottom: 5px;
      font-weight: 700;
      display: flex;
      align-items: center;

      span {
        padding: 0 10px;
      }

      i {
        cursor: pointer;
      }
    }

    .info-time {
      font-size: 12px;
    }

    .info-statistical {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;

      .statistical-item {
        min-width: 200px;
        text-align: left;
        border-right: 1px solid rgba(123, 123, 147, 0.16);
        margin: 20px;

        &:nth-last-child(1) {
          border: 0;
        }

        .title {
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 5px;
        }

        .text {
          font-size: 14px;
        }
      }
    }
  }

  .info-content {
    .order-list-content {
      .content-title {
        font-size: 24px;
        font-weight: 600;
        margin-top: 50px;
        margin-left: 10px;
      }

      .list-title {
        font-size: 16px;
        font-weight: 500;
        height: 25px;
        line-height: 25px;
        margin-bottom: 14px;
        margin-top: 40px;
        margin-left: 10px;
      }
    }
  }

  .merchant-tabs-box {
    margin-top: 50px;
  }

  .entrust-box {
    margin-top: 10px;

    .entrust-btn {
      margin-bottom: 10px;
    }

    .entrust-table {
      .table-merchant-info {
        display: flex;
        align-items: center;

        span {
          padding-left: 10px;
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
    ::v-deep.el-input__inner {
      padding-left: 40px;
      width: 200px;
    }
  }

  .country-input-select {
    ::v-deep.el-select {
      .el-input__inner {
        width: 115px;
        padding-left: 40px;
      }
    }
  }
}
</style>
<style lang="scss">
.merchant-info-add-dialog {
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    .el-button {
      width: 160px;

      &:nth-child(1) {
        margin-right: 20px;
      }
    }
  }

  .country-select-item-box {}
}

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
</style>