<template>
  <el-dialog
    :close-on-click-modal="false"
    title
    :visible.sync="dialog"
    width="900px"
    custom-class="trade-details-dialog"
  >
    <span slot="title" class="title flex-box">
      <span class="fit-tc-primary">
        {{
        currCoinLangFun("transaction_details", "entrust")
        }}
      </span>
      <span class="fit-tc-primary">{{ tradeDetails.symbol_name }}</span>
      <span class="box-line" style="width: 1px; height: 16px; display: block"></span>
      <span
        :class="{
          'fit-tc-rise': tradeDetails.direction == 1,
          'fit-tc-fall': tradeDetails.direction != 1,
        }"
      >{{ tradeDetails.directionText }}</span>
      <span class="fit-tc-primary">
        {{
        currCoinLangFun(tradeDetails.exchange_type && tradeDetails.exchange_type.indexOf('sjwt')!=-1?entrustType.sjwt.code :entrustType.ptwt.code)
        }}
      </span>
      <span class="fit-tc-primary">{{ tradeDetails.wtzt }}( {{ tradeDetails.wcd }} )</span>
      <span class="box-line" style="width: 1px; height: 16px; display: block"></span>
      <span class="fit-tc-primary">{{ tradeDetails.create_time }}</span>
    </span>
    <div v-loading="loading">
      <div class="details-money-box">
        <div class="money-list flex-box">
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("orders_table_entrust_price")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.entrust_price_text }}</span>
          </div>
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("orders_table_entrust_balance")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.entrust_balance_text }}</span>
          </div>
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("orders_table_entrust_money")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.wtje }}</span>
          </div>
        </div>
        <div class="money-list flex-box">
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("orders_table_deal_price")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.success_price_text }}</span>
          </div>
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("orders_table_dir_amount")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.success_balance_text }}</span>
          </div>
          <div class="list-item">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("menu_cje", "move_index")
              }}
            </span>
            <span class="fit-tc-primary">{{ tradeDetails.cjje }}</span>
          </div>
        </div>
      </div>
      <div class="details-money-talbe table-border-null fit-background">
        <el-table size="mini" :data="tradeDetailsData" style="width: 100%">
          <el-table-column
            :show-overflow-tooltip="true"
            prop="sj"
            :label="currCoinLangFun('table_coin_time', 'exchange')"
            minWidth="120"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="jg"
            :label="currCoinLangFun('table_coin_price', 'exchange')"
            minWidth="130"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="sl"
            :label="currCoinLangFun('table_coin_num', 'exchange')"
            minWidth="130"
          ></el-table-column>
          <!-- <el-table-column
            :show-overflow-tooltip="true"
            prop="ze"
            :label="currCoinLangFun('text_total_ze', 'exchange')"
            minWidth="130"
          ></el-table-column>-->
          <el-table-column
            :show-overflow-tooltip="true"
            prop="sxf"
            :label="currCoinLangFun('service_charge', 'all')"
            minWidth="130"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { getOrdersDetailsApi } from '@/api/fullScreen'
import { toThousands, numberFilterFun } from '@/util/util'
export default {
  props: {
    orderData: Object,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      tradeDetails: {},
      tradeDetailsData: [],
      entrustType: {
        ptwt: {
          label: this.currCoinLangFun('entrust_ordinary'), //普通委托
          value: 'ptwt',
          code: 'entrust_ordinary',
        },
        sjwt: {
          label: this.currCoinLangFun('market_price'), //市价委托
          value: 'sjwt',
          code: 'market_price',
        },
      },
    }
  },
  watch: {
    dialog(val) {
      if (val) this.getDetailsFun(this.orderData)
    },
  },
  methods: {
    currCoinLangFun(code, type = 'full') {
      return this.coinLangFun(type, code)
    },
    getDetailsFun(row) {
      if (row.create_time.indexOf('-') == 4) {
        row.sj = row.create_time.substring(5).replace('-', '.')
      } else {
        row.sj = row.create_time
      }
      row.directionText =
        row.direction == '1'
          ? this.currCoinLangFun('entrust_buy')
          : this.currCoinLangFun('entrust_sell') //"买入" : "卖出"
      // row.wcd = row.success_price > 0 ? "100%" : "0%";
      let wcdNum = (
        (row.success_balance / row.entrust_balance) *
        100
      ).toString()
      if (wcdNum == 'NaN' || wcdNum=='Infinity') {
        wcdNum = '0'
      }
      let wcdIndex = wcdNum.indexOf('.')
      if (wcdIndex != -1) {
        wcdNum = wcdNum.substring(0, wcdIndex + 3) + '%'
      } else {
        wcdNum = wcdNum + '%'
      }
      row.wcd = wcdNum
      if (row.entrust_status == -1) {
        row.wtzt = this.currCoinLangFun('rescinded') //已撤销
      } else if (row.entrust_status == 1) {
        if (this.ordersDrop == 'zyzs') {
          row.wtzt = this.currCoinLangFun('triggered') //已触发
        } else if (this.ordersDrop == 'dtzyzs') {
          row.wtzt = this.currCoinLangFun('delegation_succeeded') //委托成功
        } else {
          if (row.exchange_type.indexOf('sjwt') != -1 && row.direction == '1') {
            //市价委托 买入
            if (
              Number(row.frozen_total_balance).mySub(row.frozen_balance) ==
              row.frozen_total_balance
            ) {
              row.wtzt = this.currCoinLangFun('complete_transaction') //完全成交
            } else {
              row.wtzt = this.currCoinLangFun('portion_transaction') //部分成交
            }
          } else if (row.success_balance / row.entrust_balance != 1) {
            row.wtzt = this.currCoinLangFun('portion_transaction') //部分成交
          } else {
            row.wtzt = this.currCoinLangFun('complete_transaction') //完全成交
          }
        }
      } else if (row.entrust_status == -2) {
        row.wtzt = this.currCoinLangFun('delegation_failed') //委托失败
      }
      row.wtje = toThousands(
        Number(row.entrust_price).myMul(row.entrust_balance)
      )
      row.cjje = toThousands(
        Number(row.success_price).myMul(row.success_balance)
      )

      this.tradeDetails = {
        ...row,
      }
      this.tradeDetailsData = []
      this.loading = true
      this.dialog = true
      getOrdersDetailsApi(row.order_code)
        .then((res) => {
          let data = res.data.data
          let symbol = row.symbol_name.split('/')
          row.wtje = `${row.wtje} ${symbol[1]}`
          row.cjje = `${row.cjje} ${symbol[1]}`
          row.entrust_price_text = toThousands(row.entrust_price)
          row.entrust_balance_text = toThousands(row.entrust_balance)
          row.success_price_text = toThousands(row.success_price)
          row.success_balance_text = toThousands(row.success_balance)
          this.tradeDetails = {
            ...row,
            ...data,
          }
          let typeKey = row.direction == '1' ? 'buy' : 'sell'
          this.tradeDetailsData = data.detailList.map((item) => {
            let jgKey = `${typeKey}_price`
            let sxfKey = `${typeKey}_fee_amount`
            let sxfdwKey = `${typeKey}_symbol`
            return {
              sj: item.create_time,
              jg: `${toThousands(item[jgKey])} ${symbol[1]}`,
              sl: `${toThousands(item.amount)} ${symbol[0]}`,
              ze: `${toThousands(Number(item[jgKey]).myMul(item.amount))} ${
                symbol[1]
              }`,
              sxf: `${toThousands(item[sxfKey])} ${item[sxfdwKey]}`,
            }
          })

          if (this.tradeDetails.exchange_type.indexOf('sjwt') != -1) {
            //市价委托
            this.tradeDetails.entrust_price_text = '--'
            if (this.tradeDetails.direction == '2') {
              //卖出
              this.tradeDetails.wtje = '--'
            } else {
              //买入
              this.tradeDetails.entrust_balance_text = '--'
              this.tradeDetails.wtje = `${this.tradeDetails.frozen_total_balance} ${symbol[1]}`
              if (
                Number(this.tradeDetails.success_price).myMul(
                  this.tradeDetails.success_balance
                ) > this.tradeDetails.frozen_total_balance
              ) {
                this.tradeDetails.cjje = `${this.tradeDetails.frozen_total_balance} ${symbol[1]}`
              }
              this.tradeDetails.wcd = Number(this.tradeDetails.frozen_balance)
                .myDiv(this.tradeDetails.frozen_total_balance)
                .myMul(100)
              if (this.tradeDetails.wcd > 100) {
                this.tradeDetails.wcd = 100
              } else if (this.tradeDetails.wcd < 0) {
                this.tradeDetails.wcd = 0
              }
              this.tradeDetails.wcd = this.tradeDetails.wcd.toString()
              let wcdIndex = this.tradeDetails.wcd.indexOf('.')
              if (wcdIndex != -1) {
                this.tradeDetails.wcd =
                  this.tradeDetails.wcd.substring(0, wcdIndex + 3) + '%'
              } else {
                this.tradeDetails.wcd = this.tradeDetails.wcd + '%'
              }
            }
          }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss">
.trade-details-dialog {
  .el-dialog__header {
    .title {
      span {
        font-size: 12px;
        font-weight: 400;
        &:nth-child(1) {
          font-size: 16px;
        }
        &:nth-child(2) {
          font-size: 16px;
          font-weight: bold;
          margin-left: 24px;
        }
        &:nth-child(3) {
          margin: 0 16px;
        }
        &:nth-child(4) {
        }
        &:nth-child(5) {
          margin-left: 16px;
        }
        &:nth-child(6) {
          margin-left: 16px;
        }
        &:nth-child(7) {
          margin: 0 16px;
        }
      }
    }
  }
  .details-money-box {
    margin: 0 16px;
    padding-bottom: 24px;
    .money-list {
      .list-item {
        flex: 1;
        span {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          &:nth-child(2) {
            font-weight: 500;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .details-money-talbe {
    .el-table {
      th {
        font-weight: 400;
      }
      &::before {
        height: 1px;
      }
    }
  }
  .box-line {
    width: 1px;
    height: 16px;
    display: block;
    margin: 0 16px;
  }
}
</style>