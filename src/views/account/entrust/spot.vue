<template >
  <div class="fit-background sopt">
    <ul class="nav-box article-border fit-tc-border-color">
      <li class="li-item fit-tc-tip" v-for="(item, index) in navList" :key="index" :class="{
                'active-text': navCurrent == index,
                'fit-tc-tertiary': navCurrent == index,
              }" style="cursor: pointer" @click="onNav(item, index)">{{ item.name }}</li>
    </ul>
    <div class="table-bg fit-background">
      <div class="condition-box condition-box-bg article-border fit-tc-border-color">
        <div class="condition-left">
          <div class="left-input-box">
            <el-input v-model="input" placeholder="Token"
              @keyup.enter.native="(currPage = 1), getEntrustLogCurrencyFn()"></el-input>
          </div>
          <span class="Separator">/</span>
          <!-- 币种选择 -->
          <el-select v-model="currencyType" placeholder class="small-input" popper-class="fit-background-select currency"
            value-key="label" @change="(currPage = 1), getEntrustLogCurrencyFn()">
            <el-option v-for="item in currencyTypeList" :key="item.value" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <template v-if="navCurrent != 2">
            <!-- 交易方式选择 -->
            <el-select v-model="transactionType" placeholder class="small-input" popper-class="fit-background-select"
              :style="{ width: navCurrent != 1 ? '130px' : '180px' }" @change="(currPage = 1), getEntrustLogCurrencyFn()">
              <el-option v-for="item in transactionTypeList" :key="item.value" :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </template>

          <!-- 方向选择 -->
          <el-select v-model="directionType" placeholder class="small-input" popper-class="fit-background-select"
            style="width: 130px" @change="(currPage = 1), getEntrustLogCurrencyFn()">
            <el-option v-for="item in directionTypeList" :key="item.value" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <template v-if="navCurrent != 0">
            <!-- 日期选择 -->
            <el-date-picker v-model="dateValue" type="daterange" align="right" unlink-panels range-separator="-"
              start-placeholder end-placeholder :clearable="false" :picker-options="pickerOptions"
              popper-class="fit-background-picker" @change="(currPage = 1), getEntrustLogCurrencyFn()"></el-date-picker>
          </template>
        </div>
        <div class="condition-right">
          <template v-if="navCurrent == 1">
            <el-checkbox v-model="checked" @change="(currPage = 1), getEntrustLogCurrencyFn()">
              <span class="checkedText">
                {{
                                currCoinLangFun("hide_undo")
                                }}
              </span>
            </el-checkbox>
          </template>
          <template v-if="navCurrent == 2">
            <!-- <div>
              <span class=""><i class="fa fa-file-text"></i> 导出数据 </span>
            </div>-->
          </template>
        </div>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" v-loading="requestStatus">
        <div v-for="(item, index) in ordersTableColumn" :key="item.prop + '_' + index">
          <el-table-column v-if="item.prop == 'jydMeun'" v-bind="item">
            <template slot-scope="scope">
              <div class="name-box" :class="{ filterText: scope.row.entrust_status == -1 }">
                <img :src="scope.row.avatar" />
                <span>{{ scope.row.symbol_name }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.prop == 'fxMeun'" v-bind="item">
            <template slot-scope="scope">
              <span :class="[
                                { filterText: scope.row.entrust_status == -1 },
                                scope.row.direction == 1 ? 'fit-tc-rise' : 'fit-tc-fall',
                              ]">{{ directionTypeList[scope.row.direction].label }}</span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.prop == 'ztczMeun'" v-bind="item" label-class-name="statusColor">
            <template slot="header">
              <span class="top" v-if="navCurrent == 0">{{ currCoinLangFun("operation", "all") }}</span>
              <span class="top" v-if="navCurrent == 1">{{ currCoinLangFun("orders_table_state", "full") }}</span>
              <span class="top" v-if="navCurrent == 2">{{ currCoinLangFun("service_charge", "all") }}</span>
            </template>
            <template slot-scope="scope">
              <!-- 当前委托 -->
              <span class="table-column-content" v-if="navCurrent == 0"
                :class="{ filterText: scope.row.entrust_status == -1 }" @click="ordersCancellationsFun(scope.row.id)">{{
                                currCoinLangFun("rders_table_cancellations", "full") }}</span>
              <!-- 历史委托 -->
              <span v-if="navCurrent == 1" :class="{ filterText: scope.row.entrust_status == -1 }">{{
                              scope.row.entrust_status_text }}</span>
              <span v-if="navCurrent == 2">{{ scope.row.fee_balance }}</span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.prop == 'jyxqMeun'" v-bind="item">
            <template slot-scope="scope">
              <el-button style type="text" icon="el-icon-tickets" size="mini" v-if="scope.row.entrust_status != -1"
                @click="lookDetailsFun(scope.row)"></el-button>
            </template>
          </el-table-column>

          <el-table-column v-else v-bind="item" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span :class="{ filterText: scope.row.entrust_status == -1 }">{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </div>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page.sync="currPage" @current-change="getEntrustLogCurrencyFn()"></el-pagination>
    </div>
    <!-- 委托列表详情 -->
    <entrust-details ref="entrustDetails" :orderData="currOrderItem"></entrust-details>
  </div>
</template>

<script>
import { getDataApi } from '@/api/system.js'
import { getEntrustLogCurrency } from '@/api/user.js'
import { numberFilterFun } from '@/util/util'
import { getOrdersCancellationsApi } from '@/api/fullScreen'
import { dateFormat } from '@/util/date.js'
import entrustDetails from '@/components/full/entrust-details.vue'

export default {
  components: {
    entrustDetails,
  },
  data() {
    return {
      numberFilterFun: numberFilterFun,
      requestStatus: false,
      currPage: 1,
      pageSize: 10,
      total: 1,
      checked: false,
      input: '',
      navCurrent: 0,
      dateValue: [new Date().setMonth(new Date().getMonth() - 1), new Date()],
      currencyType: '',
      transactionType: 1,
      directionType: '',
      directionTypeList: [
        {
          label: this.currCoinLangFun('all_directions'), //全部方向
          value: '',
        },
        {
          label: this.currCoinLangFun('buy_text', 'all'), //买
          value: 1,
        },
        {
          label: this.currCoinLangFun('sell_text', 'all'), //卖
          value: 2,
        },
      ],
      transactionTypeList: [
        {
          label: this.currCoinLangFun('entrust_ordinary', 'full'), //普通委托
          value: 1,
          type: 'xh',
          cdType: 'ptwt',
        },
        {
          label: this.currCoinLangFun('market_price', 'full'), //市价委托
          value: 4,
          type: 'sjwt',
          cdType: 'sjwt',
        },
        // {
        //   label: this.currCoinLangFun('entrust_dtzyzs', 'full'), //动态止盈止损
        //   value: 2,
        //   type: 'xh_dtzyzs',
        //   cdType: 'dtzyzs',
        // },
        {
          label: this.currCoinLangFun('entrust_zyzs', 'full'), //止盈止损
          value: 3,
          type: 'xh_zyzs',
          cdType: 'zyzs',
        },
      ],
      currencyTypeList: [
        {
          label: 'ALL',
          value: '',
        },
      ],
      navList: [
        {
          name: this.currCoinLangFun('orders_tabs_curr', 'full'), //当前委托
          value: 1,
        },
        {
          name: this.currCoinLangFun('orders_tabs_history', 'full'), //历史委托
          value: 2,
        },
        {
          name: this.currCoinLangFun('transaction_record'), //成交记录
          value: 3,
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: this.currCoinLangFun('within_a_week'), //一周内
            onClick(picker) {
              let start = new Date(
                new Date(new Date().toLocaleDateString()).getTime() -
                  7 * 24 * 3600 * 1000
              )
              picker.$emit('pick', [start, new Date()])
            },
          },
          {
            text: this.currCoinLangFun('last_month'), //最近一个月
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 1)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: this.currCoinLangFun('last_three_months'), //最近三个月
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 3)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: this.currCoinLangFun('last_six_months'), //最近六个月
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      tableData: [],
      currOrderItem: {},
    }
  },
  computed: {
    ordersTableColumn() {
      let obj
      if (this.navCurrent == 0 || this.navCurrent == 1) {
        //当前委托||历史委托
        let jyType = this.transactionTypeList.filter(
          (item) => item.value == this.transactionType
        )[0].cdType
        switch (jyType) {
          case 'ptwt':
          case 'sjwt':
            obj = [
              {
                label: this.currCoinLangFun('table_coin_time', 'exchange'), //时间
                minWidth: this.navCurrent == 0 ? '126' : '117',
                prop: 'create_time',
                align: 'left',
                fixed: 'left',
              },
              {
                label: this.currCoinLangFun('table_coin_trading', 'exchange'), //交易对
                minWidth: '121',
                prop: 'jydMeun',
                align: 'left',
              },
              {
                label: this.currCoinLangFun('orders_table_dir', 'full'), //方向
                minWidth: '60',
                prop: 'fxMeun',
                align: 'left',
              },
              {
                label:
                  jyType == 'sjwt'
                    ? `${this.currCoinLangFun(
                        'orders_table_deal_both_price',
                        'full'
                      )}`
                    : `${this.currCoinLangFun(
                        'entrust',
                        'full'
                      )} | ${this.currCoinLangFun(
                        'orders_table_deal_both_price',
                        'full'
                      )}`, //委托 | 成交均价
                minWidth: this.navCurrent == 0 ? '182' : '181',
                prop: 'entrust_success_price',
                align: 'right',
              },
              {
                label: `${this.currCoinLangFun(
                  'entrust',
                  'full'
                )} | ${this.currCoinLangFun(
                  'orders_table_dir_amount',
                  'full'
                )}`, //委托 | 成交量
                minWidth: this.navCurrent == 0 ? '182' : '181',
                prop: 'entrust_success_balance',
                align: 'right',
              },
              {
                label: this.currCoinLangFun('orders_table_deg', 'full'), //完成度
                width: this.navCurrent == 0 ? '90' : '91',
                prop: 'completion',
                align: 'right',
              },
              {
                label: this.currCoinLangFun('entrusted_amount', 'entrust'), //委托额
                minWidth: '141',
                prop: 'entrusted_amount',
                align: 'right',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_entrust_type',
                  'full'
                ), //委托类型
                minWidth: this.navCurrent == 0 ? '111' : '84',
                prop: 'transactionType',
                align: 'right',
              },
              {
                prop: 'ztczMeun',
                align: 'right',
                label: `${this.currCoinLangFun(
                  'orders_table_state',
                  'full'
                )}/${this.currCoinLangFun('operation', 'all')}`, //状态/操作
                minWidth: this.navCurrent == 0 ? '93' : '90',
              },
            ]
            if (this.navCurrent == 1) {
              obj.push({
                prop: 'jyxqMeun',
                align: 'right',
                label: '',
                minWidth: '42',
              })
            }
            break

          case 'dtzyzs':
            obj = [
              {
                label: this.currCoinLangFun('table_coin_time', 'exchange'), //时间
                minWidth: '126',
                prop: 'create_time',
                align: 'left',
                fixed: 'left',
              },
              {
                label: this.currCoinLangFun('table_coin_trading', 'exchange'), //交易对
                minWidth: '124',
                prop: 'jydMeun',
                align: 'left',
              },
              {
                label: this.currCoinLangFun('orders_table_dir', 'full'), //方向
                minWidth: '103',
                prop: 'fxMeun',
                align: 'center',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_take_profit_price',
                  'full'
                ), //止盈价
                minWidth: '240',
                prop: 'take_profit_price',
                align: 'right',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_stop_loss_price',
                  'full'
                ), //止损价
                minWidth: '248',
                prop: 'stop_loss_price',
                align: 'right',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_entrust_balance',
                  'full'
                ), //委托量
                minWidth: '206',
                align: 'right',
                prop: 'entrust_balance',
              },
              {
                prop: 'ztczMeun',
                align: 'right',
                label: `${this.currCoinLangFun(
                  'orders_table_state',
                  'full'
                )}/${this.currCoinLangFun('operation', 'all')}`, //状态/操作
                minWidth: '121',
                fixed: 'right',
              },
            ]
            break
          case 'zyzs':
            obj = [
              {
                label: this.currCoinLangFun('table_coin_time', 'exchange'), //时间
                minWidth: '126',
                prop: 'create_time',
                align: 'left',
                fixed: 'left',
              },
              {
                label: this.currCoinLangFun('table_coin_trading', 'exchange'), //交易对
                minWidth: '124',
                prop: 'jydMeun',
                align: 'left',
              },
              {
                label: this.currCoinLangFun('orders_table_dir', 'full'), //方向
                minWidth: '103',
                prop: 'fxMeun',
                align: 'center',
              },
              {
                label: this.currCoinLangFun('orders_table_trigger', 'full'), //触发价
                minWidth: '240',
                prop: 'trigger_price',
                align: 'right',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_entrust_price',
                  'full'
                ), //委托价
                minWidth: '248',
                align: 'right',
                prop: 'entrust_price',
              },
              {
                label: this.currCoinLangFun(
                  'orders_table_entrust_balance',
                  'full'
                ), //委托量
                minWidth: '206',
                align: 'right',
                prop: 'entrust_balance',
              },
              {
                prop: 'ztczMeun',
                align: 'right',
                label: `${this.currCoinLangFun(
                  'orders_table_state',
                  'full'
                )}/${this.currCoinLangFun('operation', 'all')}`, //状态/操作
                minWidth: '121',
                fixed: 'right',
              },
            ]
            break
          default:
            break
        }
        return obj
      } else if (this.navCurrent == 2) {
        //成交记录
        obj = [
          {
            label: this.currCoinLangFun('table_coin_time', 'exchange'), //时间
            minWidth: '160',
            prop: 'create_time',
            align: 'left',
            fixed: 'left',
          },
          {
            label: this.currCoinLangFun('table_coin_trading', 'exchange'), //交易对
            minWidth: '126',
            prop: 'jydMeun',
            align: 'left',
          },
          {
            label: this.currCoinLangFun('orders_table_dir', 'full'), //方向
            minWidth: '63',
            prop: 'fxMeun',
            align: 'center',
          },
          {
            label: this.currCoinLangFun('table_coin_price', 'exchange'), //价格
            minWidth: '210',
            prop: 'success_price',
            align: 'right',
          },
          {
            label: this.currCoinLangFun('table_coin_num', 'exchange'), //数量
            minWidth: '210',
            align: 'right',
            prop: 'cjjl_sl',
          },
          {
            label: this.currCoinLangFun('text_cjje', 'move_transaction'), //成交金额
            minWidth: '189',
            align: 'right',
            prop: 'cjjl_cjje',
          },
          {
            prop: 'ztczMeun',
            align: 'right',
            label: `${this.currCoinLangFun(
              'orders_table_state',
              'full'
            )}/${this.currCoinLangFun('operation', 'all')}`, //状态/操作
            minWidth: '220',
            fixed: 'right',
          },
        ]
        return obj
      } else {
        return []
      }
    },
  },
  created() {
    this.currencyTypeList = []
    getDataApi('1531180815470080002', { pageSize: '-521', order: 'asc' }).then(
      (res) => {
        this.currencyTypeList = res.data.data.records.map((item, index) => {
          return {
            label: item.symbol,
            value: item.symbol,
          }
        })
        this.currencyTypeList.unshift({
          label: 'ALL',
          value: '',
        })
      }
    )
    this.getEntrustLogCurrencyFn()
  },
  methods: {
    currCoinLangFun(code, type = 'entrust') {
      return this.coinLangFun(type, code)
    },
    onNav(item, index) {
      this.currPage = 1
      this.pageSize = 10
      this.total = 1
      this.checked = false
      this.input = ''
      this.dateValue = [
        new Date().setMonth(new Date().getMonth() - 1),
        new Date(),
      ]
      this.currencyType = ''
      this.transactionType = 1
      this.directionType = ''

      this.navCurrent = index
      this.getEntrustLogCurrencyFn()
    },
    ordersCancellationsFun(id) {
      let obj = {
        type: this.transactionTypeList.filter(
          (item) => item.value == this.transactionType
        )[0].cdType,
        idList: [id],
      }
      getOrdersCancellationsApi(obj).then((res) => {
        this.getEntrustLogCurrencyFn()
      })
    },
    getEntrustLogCurrencyFn() {
      this.requestStatus = true
      console.log(this.navCurrent)
      let obj
      let jyTypeData = this.transactionTypeList.filter(
        (item) => item.value == this.transactionType
      )[0]
      if (this.navCurrent == 0) {
        //当前委托
        obj = {
          current: this.currPage,
          size: this.pageSize,
          currentType: jyTypeData.type, //币币交易
          type: this.navList[this.navCurrent].value,
          tradingPairA: this.input.toUpperCase(), //交易对a
          tradingPairB: this.currencyType, //交易对b
          entrustType: this.transactionType, //委托类型
          tradeType: this.directionType, //交易类型 方向
        }
      } else if (this.navCurrent == 1) {
        //历史委托
        obj = {
          current: this.currPage,
          size: this.pageSize,
          currentType: jyTypeData.type, //币币交易
          type: this.navList[this.navCurrent].value,
          tradingPairA: this.input.toUpperCase(), //交易对a
          tradingPairB: this.currencyType, //交易对b
          entrustType: this.transactionType, //委托类型
          tradeType: this.directionType, //交易类型 方向
          endTime: dateFormat(new Date(this.dateValue[1]), 'yyyy-MM-dd'),
          startTime: dateFormat(new Date(this.dateValue[0]), 'yyyy-MM-dd'),
          isShowRevoke: this.checked ? -1 : '',
        }
      } else if (this.navCurrent == 2) {
        //成交记录
        obj = {
          current: this.currPage,
          size: this.pageSize,
          currentType: jyTypeData.type, //币币交易
          type: this.navList[this.navCurrent].value,
          tradingPairA: this.input.toUpperCase(), //交易对a
          tradingPairB: this.currencyType, //交易对b
          tradeType: this.directionType, //交易类型 方向
          endTime: dateFormat(new Date(this.dateValue[1]), 'yyyy-MM-dd'),
          startTime: dateFormat(new Date(this.dateValue[0]), 'yyyy-MM-dd'),
        }
      }

      this.tableData = []

      getEntrustLogCurrency(obj)
        .then((res) => {
          this.requestStatus = false
          this.total = res.data.data.total
          let data = res.data.data.records
          let params = {}

          this.tableData = data.map((item) => {
            if (this.navCurrent == 0 || this.navCurrent == 1) {
              switch (jyTypeData.cdType) {
                case 'ptwt':
                case 'sjwt':
                  let wcdNum = '0'
                  if (jyTypeData.cdType == 'sjwt' && item.direction == 1) {
                    //市价委托 买入
                    wcdNum = Number(item.frozen_total_balance)
                      .mySub(item.frozen_balance)
                      .myDiv(item.frozen_total_balance)
                      .myMul(100)
                    if (wcdNum > 100) {
                      wcdNum = 100
                    } else if (wcdNum < 0) {
                      wcdNum = 0
                    }
                    wcdNum = wcdNum.toString()
                  } else {
                    wcdNum = (
                      Number(item.success_balance).myDiv(
                        Number(item.entrust_balance)
                      ) * 100
                    ).toString()
                  }
                  if (wcdNum == 'NaN' || wcdNum == 'Infinity') {
                    wcdNum = '0'
                  }
                  let wcdIndex = wcdNum.indexOf('.')
                  if (wcdIndex != -1) {
                    wcdNum = wcdNum.substring(0, wcdIndex + 3) + '%'
                  } else {
                    wcdNum = wcdNum + '%'
                  }
                  params = {
                    ...item,
                    transactionType: jyTypeData.label,
                    create_time: item.create_time.slice(5),
                    // completion: this.navCurrent == 0 ? '0%' : '100%',
                    completion: wcdNum,
                    entrust_success_price: `${Number(
                      item.entrust_price
                    )} | ${Number(item.success_price)}`,
                    entrust_success_balance: `${Number(
                      item.entrust_balance
                    )} | ${Number(item.success_balance)}`,
                    entrusted_amount: Number(item.success_price).myMul(
                      item.success_balance
                    ),
                  }
                  if (jyTypeData.cdType == 'sjwt') {
                    params.entrust_success_price = `${Number(
                      item.success_price
                    )}`
                    if (Number(item.success_price) <= 0) {
                      params.entrust_success_price = '--'
                    }
                    if (item.direction == 2) {
                      params.entrusted_amount = '--'
                    } else {
                      params.entrust_success_balance = `-- | ${Number(
                        item.success_balance
                      )}`
                      if (params.success_price > item.frozen_total_balance) {
                        params.entrusted_amount = item.frozen_total_balance
                      }
                    }
                  }
                  if (this.navCurrent == 1) {
                    let entrust_status_text = this.currCoinLangFun(
                      'rescinded',
                      'full'
                    )
                    if (
                      item.entrust_status == 1 &&
                      jyTypeData.cdType == 'sjwt' &&
                      item.direction == 1
                    ) {
                      if (
                        Number(item.frozen_total_balance).mySub(
                          item.frozen_balance
                        ) == item.frozen_total_balance
                      ) {
                        entrust_status_text = this.currCoinLangFun(
                          'complete_transaction',
                          'full'
                        )
                      } else {
                        entrust_status_text = this.currCoinLangFun(
                          'portion_transaction',
                          'full'
                        )
                      }
                    } else if (item.entrust_status == 1) {
                      if (item.success_balance / item.entrust_balance != 1) {
                        entrust_status_text = this.currCoinLangFun(
                          'portion_transaction',
                          'full'
                        )
                      } else {
                        entrust_status_text = this.currCoinLangFun(
                          'complete_transaction',
                          'full'
                        )
                      }
                    }
                    params = {
                      ...params,
                      entrust_status_text,
                      // entrust_status_text:
                      //   item.entrust_status == 1
                      //     ? this.currCoinLangFun('complete_transaction', 'full') //"完全成交"
                      //     : this.currCoinLangFun('rescinded', 'full'), //  "已撤销"
                    }
                  }
                  return params
                  break
                case 'dtzyzs':
                  params = {
                    ...item,
                    transactionType: jyTypeData.label,
                    create_time: item.create_time.slice(5),
                    take_profit_price: numberFilterFun(
                      Number(item.take_profit_price)
                    ),
                    stop_loss_price: numberFilterFun(
                      Number(item.stop_loss_price)
                    ),
                    entrust_balance: `${numberFilterFun(
                      Number(item.entrust_balance)
                    )} ${item.entrust_symbol}
                  `,
                  }
                  if (this.navCurrent == 1) {
                    params = {
                      ...params,
                      entrust_status_text:
                        item.entrust_status == 1
                          ? this.currCoinLangFun('delegation_succeeded', 'full') //"委托成功"
                          : this.currCoinLangFun('rescinded', 'full'), //  "已撤销"
                    }
                  }
                  return params
                  break
                case 'zyzs':
                  params = {
                    ...item,
                    transactionType: jyTypeData.label,
                    create_time: item.create_time.slice(5),
                    trigger_price: numberFilterFun(Number(item.trigger_price)),
                    entrust_price: numberFilterFun(Number(item.entrust_price)),
                    entrust_balance: `${numberFilterFun(
                      Number(item.entrust_balance)
                    )} ${item.entrust_symbol}
                  `,
                  }
                  if (this.navCurrent == 1) {
                    params = {
                      ...params,
                      entrust_status_text:
                        item.entrust_status == 1
                          ? this.currCoinLangFun('triggered', 'full') //"已触发"
                          : this.currCoinLangFun('rescinded', 'full'), //  "已撤销"
                    }
                  }
                  return params
                  break
                default:
                  break
              }
            } else if (this.navCurrent == 2) {
              params = {
                ...item,
                transactionType: jyTypeData.label,
                create_time: item.create_time.slice(5),
                cjjl_cjje:
                  item.direction == 1
                    ? numberFilterFun(Number(item.frozen_balance))
                    : numberFilterFun(
                        Number(item.balance).myAdd(item.fee_balance)
                      ),

                cjjl_sl:
                  item.direction == 1
                    ? numberFilterFun(
                        Number(item.balance).myAdd(item.fee_balance)
                      )
                    : numberFilterFun(Number(item.frozen_balance)),

                success_price: numberFilterFun(Number(item.success_price)),

                fee_balance: `${numberFilterFun(Number(item.fee_balance))} ${
                  item.fee_symbol
                }
                  `,
              }
              return params
            }
          })
        })
        .catch(() => {
          this.requestStatus = false
        })
    },
    lookDetailsFun(row) {
      row = this.deepClone(row)
      this.currOrderItem = row
      this.$refs.entrustDetails.dialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
.sopt {
  .nav-box {
    display: flex;
    padding: 12px 4px;
    margin: 0 12px;

    .li-item {
      padding: 10px 20px;
      font-size: 14px;
    }
  }

  .table-bg {
    padding: 0 12px;

    .condition-box {
      padding: 16px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-input-box {
        width: 100px;

        ::v-deep .el-input {
          .el-input__inner {
            height: 32px;
            padding: 0 8px;

            &::placeholder {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #688199;
              letter-spacing: 0;
              font-weight: 600;
            }
          }
        }
      }

      .Separator {
        display: flex;
        align-items: center;
        margin: 0 4px;
        font-size: 12px;
        color: #688199;
      }

      .condition-left {
        display: flex;
        justify-content: space-between;

        ::v-deep.el-select {
          box-sizing: border-box;

          input.el-input__inner {
            height: 32px !important;
          }

          &.small-input {
            width: 100px;
            margin-right: 16px;

            .el-input__suffix {
              display: flex;
              align-items: center;
              transition: all 0.3s;
              pointer-events: none;

              .el-input__suffix-inner {
                display: inline-block;
                height: 40px !important;

                i {
                  line-height: 40px !important;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }

      .condition-right {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 12px;
      }
    }
  }

  .name-box {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  ::v-deep.el-pagination {
    display: flex;
    justify-content: center;
    padding-top: 24px !important;
    padding-bottom: 24px !important;

    button {
      background-color: transparent;
    }

    ul li {
      background-color: transparent;
    }
  }

  ::v-deep.el-table__header {
    thead {
      tr {
        th {
          div {
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }
  }

  ::v-deep.el-table__body-wrapper::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
}
</style>

<style lang="scss" scoped>
.theme-daytime {
  .condition-box-bg {
    .condition-right {
      color: #2954cc;

      .checkedText {
        color: #10171f;
      }

      ::v-deep.is-checked {
        .el-checkbox__inner {
          background-color: #2271e6;
          border-color: #2271e6;
        }
      }
    }
  }

  .el-date-editor--daterange {
    width: 210px;
    height: 32px;

    ::v-deep .el-icon-date {
      line-height: 25px;
    }

    ::v-deep.el-range-input {
      background-color: #fff;
    }

    ::v-deep .el-range__close-icon {
      display: none;
    }
  }

  .table-bg {
    ::v-deep.statusColor {
      .top {
        color: #2954cc;
      }
    }

    .table-column-content {
      cursor: pointer;
      color: #2954cc;
    }
  }
}

.theme-night {
  .condition-box-bg {
    .condition-right {
      color: #0020FD;

      .checkedText {
        color: #dde3e6;
      }

      ::v-deep.is-checked {
        .el-checkbox__inner {
          background-color: #0020FD;
          border-color: #0020FD;
        }
      }
    }
  }

  .el-date-editor--daterange {
    width: 210px;
    height: 32px;

    ::v-deep .el-icon-date {
      line-height: 25px;
    }

    ::v-deep.el-range-input {
      background-color: #151d29;
    }

    ::v-deep .el-range-input {
      color: #fff;
    }

    ::v-deep .el-range-separator {
      color: #fff;
    }

    ::v-deep .el-range__close-icon {
      display: none;
    }
  }

  .table-bg {
    ::v-deep.statusColor {
      .top {
        color: #0020FD;
      }
    }

    .table-column-content {
      cursor: pointer;
      color: #0020FD;
    }
  }
}
</style>

<style lang="scss">
.currency {
  .el-scrollbar {
    .el-select-dropdown__wrap {
      .el-scrollbar__view {
        width: 131px;
      }
    }
  }
}

tbody {
  .filterText {
    filter: opacity(0.4);
  }
}

.theme-daytime {
  .fit-background-picker {
    .el-picker-panel__body {
      tr {
        .in-range {
          div {
            background-color: #dfdfe5;
          }
        }
      }
    }
  }

  .el-pagination {
    button {
      color: #10171f !important;

      &[disabled] {
        color: #7e92a6 !important;
      }
    }

    ul li {
      &.number {
        color: #10171f !important;
      }

      &.number.active {
        color: #2271e6 !important;
      }
    }
  }
}

.theme-night {
  .fit-background-picker {
    background-color: #151d29 !important;
    border-color: #262d38;

    .el-picker-panel__body {
      .el-picker-panel__icon-btn {
        color: #fff;
      }

      .el-date-range-picker__header {
        div {
          color: #fff;
        }
      }

      .el-picker-panel__content {
        table {
          tbody {
            tr {
              th {
                color: #fff;
              }

              .available {
                color: #fff;
              }

              .prev-month {
                color: #688199;
              }

              .in-range {
                div {
                  background-color: rgba(123, 123, 147, 0.24);
                }
              }

              .start-date span,
              .end-date span {
                color: #000;
              }
            }
          }
        }
      }
    }
  }

  .el-picker-panel__sidebar {
    background-color: #151d29 !important;

    .el-picker-panel__shortcut {
      color: #fff;
    }
  }

  .el-pagination {
    button {
      color: #dde3e6 !important;

      &[disabled] {
        color: #688199 !important;
      }
    }

    ul.el-pager li {
      &.number {
        color: #dde3e6 !important;
      }

      &.number.active {
        color: #0020FD !important;
      }
    }
  }
}
</style>