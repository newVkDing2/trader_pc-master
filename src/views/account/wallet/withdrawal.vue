<template>
  <div class="deposit-box">
    <div class="fit-background assets-box">
      <div class="safe-title flex-box">
        <h2 class="fit-tc-primary" style="font-weight: 600">{{ currCoinLangFun("menu_tx", "move_index") }}</h2>
        <!-- <div class="Withdrawal" style="font-size: 12px">
          <span class="fit-tc-tip">今日已提现</span>
          <span class="fit-tc-primary">0 BTC</span>
          <span class="fit-tc-tip">日提现额度</span>
          <span class="fit-tc-primary">5 BTC</span>
          <span
            class="a-theme"
            style="cursor: pointer"
            @click="$router.push({ path: '/account/center/kyc' })"
            >提升额度</span
          >
        </div>-->
      </div>
      <div class="flex-box select-symbol-box">
        <el-select v-model="formData.symbol" filterable class="coinName"
          popper-class="fit-background-select option-coin-name" @change="chooseCoinFun">
          <template #prefix>
            <div style="padding-left: 5px; width: 24px; height: 24px">
              <img v-if="currCoinObj.avatar" style="width: 100%; height: 100%" :src="currCoinObj.avatar" />
            </div>
          </template>
          <template v-for="item in coinData">
            <el-option :key="item.symbol" :label="item.symbol" :value="item.symbol">
              <div style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 0 20px;
                  height: 36px;
                  line-height: 36px;
                ">
                <div style="display: flex; align-items: center">
                  <img :src="item.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
                  <span style="margin-right: 8px">{{ item.symbol }}</span>
                  <span class="article-tip">{{ item.full_name }}</span>
                </div>
                <div class="fit-tc-tip">
                  {{ currCoinLangFun("entrust_available", "full") }}：{{
                                    removeZero(item.balance || 0)
                                    }}
                </div>
              </div>
            </el-option>
          </template>
        </el-select>
        <ul class="flex-box">
          <li>
            <p class="article-tip">{{ currCoinLangFun("total_assets", "assets") }}</p>
            <p class="fit-tc-primary">{{ removeZero(currCoinObj.total || 0) }} {{ currCoinObj.symbol }}</p>
          </li>
          <span class="box-line"></span>
          <li>
            <p class="article-tip">{{ currCoinLangFun("entrust_available", "full") }}</p>
            <p class="fit-tc-primary">
              {{ removeZero(currCoinObj.balance || 0) }}
              {{ currCoinObj.symbol }}
            </p>
          </li>
          <span class="box-line"></span>
          <li>
            <p class="article-tip">{{ currCoinLangFun("order_freezing") }}</p>
            <p class="fit-tc-primary">
              {{ removeZero(currCoinObj.frozen_balance || 0) }}
              {{ currCoinObj.symbol }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="fit-background code-box">
      <div class="left" style="margin-right: 24px">
        <div class="left-top">
          <p class="fit-tc-primary" style="margin-bottom: 12px">{{ currCoinLangFun("transfer_network") }}</p>
          <div class="line-type">
            <ul>
              <li v-for="item in networkList" :key="item.chain_type"
                :class="{ isSelect: formData.chainType == item.chain_type }" @click="chooseNetworkFun(item)">{{
                                item.chain_type }}</li>
            </ul>
          </div>
        </div>
        <el-form :model="formData" :rules="rules" ref="withdrawalForm" label-width="100%" label-position="top"
          class="withdrawalForm">
          <el-form-item :label="
                        replaceCoinLangFun(currCoinLangFun('coin_address'), [
                          {
                            key: '$[symbol]',
                            value: currCoinObj.symbol,
                          },
                        ])
                      " prop="address">
            <el-input v-model="formData.address" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="备注" prop="remark">
            <el-input v-model="formData.remark" autocomplete="off"></el-input>
          </el-form-item>-->
          <el-form-item :label="currCoinLangFun('withdrawal_num')" prop="number">
            <div class="input-number-box">
              <el-input type="number" v-model.number="formData.amount" @input="(e) => inputChengFun(e, 'amount')"
                :placeholder="
                                  replaceCoinLangFun(
                                    currCoinLangFun('max_withdrawal_balance'),
                                    [
                                      {
                                        key: '$[balance]',
                                        value: removeZero(currCoinObj.balance || 0),
                                      },
                                    ]
                                  )
                                "></el-input>
              <span class="el-input__suffix">
                <span class="el-input__suffix-inner">
                  <div class="flex-box">
                    <span class="fit-tc-tip">
                      {{
                                            currCoinObj.symbol || ""
                                            }}
                    </span>
                    <span class="box-line"></span>
                    <span class="fit-tc-tertiary active-text" @click="useAll">
                      {{
                                            currCoinLangFun("zd_text", "move_contract")
                                            }}
                    </span>
                  </div>
                </span>
              </span>
            </div>
            <div class="fit-error" v-if="formData.amount-0 > currCoinObj.balance-0">{{
                          currCoinLangFun("insufficient_withdrawal_limit") }}</div>
          </el-form-item>
          <el-form-item>
            <div class="flex-box" style="font-size: 12px">
              <span class="fit-tc-tip">
                {{
                                currCoinLangFun("service_charge", "all")
                                }}
              </span>
              <!-- <i class="el-icon-info fit-tc-tip" style="margin-left: 4px"></i> -->
              <span class="fit-tc-primary" style="margin-left: 8px">
                {{ removeZero(currNetworkObj.withdraw_fee) }}
                {{ currCoinObj.symbol }}
              </span>
              <span class="box-line"></span>
              <span class="fit-tc-tip">
                {{
                                currCoinLangFun("shijidaozhang_text", "buy_coins_relevant")
                                }}
              </span>
              <span class="fit-tc-primary" style="margin-left: 8px">
                {{
                                Number(formData.amount) >=
                                Number(currNetworkObj.withdraw_min || 0) &&
                                Number(currCoinObj.balance) >= Number(formData.amount || 0)
                                ? Number(formData.amount).mySub(
                                Number(currNetworkObj.withdraw_fee || 0)
                                )
                                : 0
                                }}
                {{ currCoinObj.symbol }}
              </span>
            </div>
            <el-button style="width: 100%" type="primary" :disabled="!vaildForm" :loading="withdrawBtnLoading"
              @click="withdrawalFun">
              {{
                            replaceCoinLangFun(currCoinLangFun("withdrawal_coin"), [
                            {
                            key: "$[symbol]",
                            value: currCoinObj.symbol,
                            },
                            ])
                            }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right symbol-info-box flex-box">
        <div class="deposit-explain">
          <ul class="explain-wrap" style="font-size: 12px">
            <li style="margin-top: 12px">
              <i class="el-icon-warning fit-fall"></i>
              <span>
                {{
                                replaceCoinLangFun(currCoinLangFun("min_withdrawal_amount"), [
                                {
                                key: "$[withdraw_min]",
                                value: currNetworkObj.withdraw_min || 0,
                                },
                                {
                                key: "$[symbol]",
                                value: currCoinObj.symbol,
                                },
                                ])
                                }}
              </span>
            </li>
            <li class="fit-tc-tip">
              {{ currCoinLangFun("text_kztxjllymgzjd") }}
              <!-- （ 您可在
              <span
                class="a-theme"
                style="cursor: pointer"
                @click="
                  $router.push({ path: '/account/wallet/history-withdrawal' })
                "
                >提现记录</span
              >
              页面跟踪进度。）-->
            </li>
            <li style="margin-top: 12px">
              <i class="el-icon-warning fit-fall"></i>
              <span>
                {{
                                replaceCoinLangFun(
                                currCoinLangFun("qzxqfxydwl_text", "buy_coins_relevant"),
                                [
                                {
                                key: "$[coin_name]",
                                value: currCoinObj.symbol,
                                },
                                ]
                                )
                                }}
              </span>
            </li>
            <li style="margin-top: 12px; display: flex">
              <i class="el-icon-warning fit-fall" style="margin-right: 4px"></i>
              <span class="fit-tc-tip">
                {{ currCoinLangFun("text_tbczwch") }}
                <!-- 您的提币操作一旦完成,
                对应的资产所有权将由您变更为目标地址所对应的账户所有人享有,
                请您务必在提币操作前, 仔细核对提币地址信息,
                确保提币属于自愿行为,
                并确认不涉及任何传销、非法集资、诈骗等违法情形, 谨防上当受骗,
                避免造成不必要的财产损失。-->
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fit-background symbol-history-box">
      <div class="table-header">
        <div class="fit-tc-primary" style="font-size: 18px">{{ currCoinLangFun("last_20_withdrawal_records") }}</div>
        <div>
          <span class="a-theme" style="font-size: 14px; cursor: pointer" @click="
                        $router.push({ path: '/account/wallet/history-withdrawal' })
                      ">
            {{ currCoinLangFun("check_all_withdrawal_records") }}
            <i class="el-icon-right"></i>
          </span>
        </div>
      </div>
      <div class="assets-table">
        <el-table v-loading="requestStatus" :data="valuationData" style="width: 100%">
          <el-table-column :show-overflow-tooltip="true" prop="coin_symbol"
            :label="currCoinLangFun('orders_table_coin', 'full')" width="120"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="amount" :label="currCoinLangFun('entrust_money', 'full')"
            min-width="90" align="right"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="arrived_amount" :label="currCoinLangFun('actual_amount')"
            min-width="90" align="right"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="entry_time" :label="currCoinLangFun('withdrawal_time')"
            width="150" align="right"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="withdrawal_time"
            :label="currCoinLangFun('completion_time')" width="150" align="right"></el-table-column>
          <el-table-column prop="address" min-width="150" :label="currCoinLangFun('address', 'all')" align="right">
            <template slot-scope="scope">
              <div v-if="scope.row.address">
                <span>{{ scope.row.address }}</span>
                <!-- <i
                  class="el-icon-link a-theme"
                  style="font-size: 14px; cursor: pointer; padding: 0 4px"
                ></i>-->
                <i class="el-icon-copy-document a-theme" style="font-size: 14px; cursor: pointer; padding: 0 4px"
                  @click="copy(scope.row.address)"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="log_status"
            :label="currCoinLangFun('orders_table_state', 'full')" width="90" align="center">
            <template slot-scope="scope">
              <div>
                <span>{{ showStatus(scope.row.log_status) }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getWithdrawalLog,
  getRechargeCurrency,
  withdrawalApi,
} from '@/api/user.js'
import {
  toThousands,
  inputNumberLinmitFun,
  toNonExponential,
} from '@/util/util'
import { getDicTableData } from '@/api/system.js'
export default {
  watch: {
    coinId() {
      let filterArr = this.coinData.filter((item) => item.id == this.coinId)
      this.currCoinObj = filterArr[0]
    },
  },
  data() {
    return {
      withdrawBtnLoading: false,
      requestStatus: false, //table请求状态
      valuationData: [],
      coinData: [], //币种
      coinObj: {},
      networkList: [], //链路名称
      formData: {
        symbol: '',
        chainType: '',
        remark: '',
        address: '',
        amount: '',
      },
      currCoinObj: {
        avatar: '',
        symbol: '',
        full_name: '',
        balance: '0',
        total: '0',
      }, //当前币种
      currNetworkObj: {}, //当前网络
      status: [
        {
          value: '',
          label: this.currCoinLangFun('orders_table_all_state', 'full'), //全部状态
        },
      ], //状态
    }
  },
  created() {
    // 获取充值记录状态
    getDicTableData('wallet_history_status').then((res) => {
      this.status = this.status.concat(res.data.data)
    })
    this.init()
  },
  methods: {
    currCoinLangFun(code, type = 'order') {
      return this.coinLangFun(type, code)
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key)
          //while循环替换相同的key
          while (keyIndex >= 0) {
            if (
              typeof item.value == 'string' &&
              item.value.indexOf('-') != -1
            ) {
              item.value = toNonExponential(item.value - 0)
            }
            text = text.replace(item.key, item.value || '')
            item.value = item.value + ''
            keyIndex = text.indexOf(item.key)
          }
        })
      }

      return text
    },
    //设置输入框的值
    inputChengFun(value, key) {
      this.formData[key] = inputNumberLinmitFun(
        value,
        this.currNetworkObj.original_decimals
      )
    },
    init() {
      //获取币种
      getRechargeCurrency().then((res) => {
        this.coinData = res.data.data
        this.coinObj = {}
        this.coinData.forEach((item) => {
          this.coinObj[item.symbol] = item
        })
        if (this.coinData.length) {
          this.coinData.some((item) => {
            if (Number(item.balance) != 0) {
              this.formData.symbol = item.symbol
              this.currCoinObj = item
              return true
            }
          })

          if (
            this.currCoinObj.networkList &&
            this.currCoinObj.networkList.length
          ) {
            this.networkList = this.currCoinObj.networkList
            this.formData.chainType = this.networkList[0].chain_type

            this.chooseNetworkFun(this.networkList[0])
          } else {
            this.networkList = []
          }
        }
      })
      this.getWithdrawalLogFun()
    },
    //切换币种
    chooseCoinFun(value) {
      this.formData = {
        ...this.formData,
        address: '',
        remark: '',
        amount: '',
      }
      if (this.coinObj[value]) {
        this.currCoinObj = this.coinObj[value]
        this.networkList = this.currCoinObj.networkList
        if (this.networkList.length > 0) {
          this.chooseNetworkFun(this.networkList[0])
        }
      }
    },
    //切换链路
    chooseNetworkFun(obj) {
      this.currNetworkObj = obj
      this.formData.chainType = obj.chain_type
      this.formData = {
        ...this.formData,
        address: '',
        remark: '',
        amount: '',
      }
    },
    withdrawalFun() {
      this.withdrawBtnLoading = true
      let data = {
        ...this.formData,
        coinSymbol: this.formData.symbol,
      }

      withdrawalApi(data)
        .then(() => {
          this.withdrawBtnLoading = false
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('tjtx_tips'), //已提交,可在提现记录中查看进度
          })

          this.formData = {
            ...this.formData,
            address: '',
            remark: '',
            amount: '',
          }

          this.init('clearFormData')
        })
        .catch(() => {
          this.withdrawBtnLoading = false
        })
    },
    showStatus(value) {
      if (value) {
        let filterArr = this.status.filter((item) => item.value == value)
        if (filterArr.length) {
          return filterArr[0].label
        } else {
          return value
        }
      } else {
        return ''
      }
    },
    removeZero(value) {
      if (value) {
        return `${toThousands(Number(value))}`
      } else {
        return '0'
      }
    },
    //历史记录
    getWithdrawalLogFun() {
      this.requestStatus = true
      this.valuationData = []
      getWithdrawalLog({
        current: 1,
        size: 20,
      })
        .then((res) => {
          this.valuationData = res.data.data.records.map((item) => {
            item.amount = toThousands(item.amount)
            item.arrived_amount = toThousands(item.arrived_amount)
            return item
          })
          this.total = res.data.data.total
          this.requestStatus = false
        })
        .catch(() => {
          this.requestStatus = false
        })
    },
    //输入全部数量
    useAll() {
      this.formData.amount = Number(this.currCoinObj.balance || 0)
    },
    copy(text) {
      // 模拟 输入框
      let cInput = document.createElement('input')
      cInput.value = text
      document.body.appendChild(cInput)
      // 选取文本框内容
      cInput.select()

      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand('copy')

      this.$message({
        type: 'success',
        message: this.currCoinLangFun('text_fzcg', 'all'),
      }) //复制成功
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput)
    },
  },
  computed: {
    vaildForm: function () {
      return (
        this.formData.address.length &&
        this.formData.amount > 0 &&
        this.formData.amount - 0 <= this.currCoinObj.balance - 0
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.box-line {
  width: 1px;
  height: 16px;
  display: block;
  margin-left: 12px !important;
  margin-right: 12px !important;
  background-color: rgba(123, 123, 147, 0.16);
}

::v-deep.withdrawalForm {
  .el-form-item {
    margin-bottom: 8px;

    .el-form-item__label {
      margin-bottom: 8px;
      padding: 0;
      line-height: 20px;
    }

    .input-number-box {
      position: relative;

      .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;

        input {
          padding-right: 83px;
          height: 48px !important;

          &::placeholder {
            font-family: MicrosoftYaHei;
            color: #688199;
            letter-spacing: 0;
            font-weight: 600;
          }
        }
      }

      &>.el-input__suffix {
        display: flex;
        align-items: center;
        right: 12px;

        .el-input__suffix-inner {
          pointer-events: all;

          .flex-box {
            font-size: 12px;

            span:last-child {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

.deposit-box {
  .assets-box {
    padding: 24px;
    margin-bottom: 8px !important;

    .safe-title {
      justify-content: space-between;

      .Withdrawal {
        span:nth-child(n + 2) {
          margin-left: 8px !important;
          margin-right: 8px !important;
        }
      }
    }

    .select-symbol-box {
      margin-top: 16px;
      height: 48px;

      ::v-deep.el-select.coinName {
        .el-input__inner {
          padding-left: 46px;
          width: 480px;
          height: 48px;
          line-height: 48px;
          font-size: 20px;
          font-weight: 500;
        }

        .el-input__prefix {
          display: flex;
          align-items: center;
        }
      }

      &>ul {
        flex: 1;
        font-size: 12px !important;

        li {
          flex: 1;
          padding-left: 24px;
        }

        .box-line {
          width: 1px;
          height: 48px;
          display: block;
          background-color: rgba(123, 123, 147, 0.16);
        }
      }
    }
  }

  .code-box {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 24px;

    .left {
      min-width: 560px;
      flex: 1;

      .left-top {
        margin-bottom: 24px !important;

        .commom-che {
          div {
            font-size: 14px !important;
            padding: 0 12px;
            position: relative;
            cursor: pointer;

            span {
              margin-left: 4px !important;
            }
          }
        }

        .line-type {
          ul {
            line-height: 20px;
            font-size: 14px !important;

            li {
              padding: 4px 12px;
              border-radius: 2px;
              margin-right: 12px;
              margin-bottom: 8px;
              display: inline-block;
              cursor: pointer;

              &.isSelect {
                color: #f5faff !important;
                background-color: #0020FD !important;
              }
            }
          }
        }
      }
    }

    .right.symbol-info-box {
      align-items: flex-start;
      justify-content: space-between;

      .deposit-explain {
        width: 452px;
        padding: 24px;
      }
    }
  }

  .symbol-history-box {
    margin-top: 24px !important;

    .table-header {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
      border-bottom: 1px solid;

      div {
        margin-left: 24px !important;
      }
    }
  }

  ::v-deep.assets-table {
    .control-column {
      padding-right: 12px;
      text-align: right;

      .cell {
        box-sizing: border-box;
        justify-content: flex-end;
      }
    }

    .el-table__header {
      thead tr th .cell {
        font-size: 12px;
      }
    }

    .el-pagination {
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
  }
}
</style>

<style lang="scss" scoped>
.theme-daytime {
  .deposit-box {
    .line-type {
      ul {
        li {
          background-color: #f5f6fa;
          color: #4e6073;
        }
      }
    }

    .symbol-info-box {
      .deposit-explain {
        background: rgba(225, 228, 235, 0.16078);
      }
    }

    .symbol-history-box {
      .table-header {
        border-bottom-color: #dddddd;
      }

      ::v-deep.assets-table {
        padding: 0 20px 20px;

        .el-table__header {
          thead tr th .cell {
            color: #4e6073;

            .ascending {
              border-bottom-color: #4e6073;
            }

            .descending {
              border-top-color: #4e6073;
            }
          }

          thead tr th.ascending {
            .ascending {
              border-bottom-color: #2271e6 !important;
            }
          }

          thead tr th.descending {
            .descending {
              border-top-color: #2271e6 !important;
            }
          }
        }
      }
    }
  }
}

.theme-night {
  .deposit-box {
    .line-type {
      ul {
        li {
          background-color: #151d29;
          color: #9bb4cc;
        }
      }
    }

    .symbol-info-box {
      .deposit-explain {
        background: rgba(225, 228, 235, 0.05882);
      }
    }

    .symbol-history-box {
      .table-header {
        border-bottom-color: #262d38;
      }

      ::v-deep.assets-table {
        .el-table__header {
          thead tr th .cell {
            color: #9bb4cc;

            .ascending {
              border-bottom-color: #9bb4cc;
            }

            .descending {
              border-top-color: #9bb4cc;
            }
          }

          thead tr th.ascending {
            .ascending {
              border-bottom-color: #0020FD !important;
            }
          }

          thead tr th.descending {
            .descending {
              border-top-color: #0020FD !important;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>