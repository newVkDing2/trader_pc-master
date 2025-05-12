<template >
  <div class="fit-background future-u">
    <ul class="nav-box article-border fit-tc-border-color">
      <li class="li-item fit-tc-tip" v-for="item in navList" :key="item.value" :class="{
                'active-text': navCurrent == item.value,
                'fit-tc-tertiary': navCurrent == item.value,
              }" style="cursor: pointer" @click="onNav(item)">
        {{ item.name }}
      </li>
    </ul>
    <div class="table-bg fit-background">
      <div class="
          condition-box condition-box-bg
          article-border
          fit-tc-border-color
        ">
        <div class="condition-left">
          <!-- 币种选择 -->
          <el-select v-model="currencyType" placeholder class="small-input" popper-class="fit-background-select currency"
            value-key="label" @change="(currPage = 1), getEntrustLogCurrencyFn()">
            <el-option v-for="item in currencyTypeList" :key="item.value" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <!-- 方向选择 -->
          <el-select v-if="navCurrent != '6'" v-model="directionType" placeholder class="small-input"
            popper-class="fit-background-select" style="width: 130px" @change="(currPage = 1), getEntrustLogCurrencyFn()">
            <el-option v-for="item in directionTypeList" :key="item.value" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <template v-if="navCurrent == 5 || navCurrent == 6">
            <!-- 日期选择 -->
            <el-date-picker v-model="dateValue" type="daterange" align="right" unlink-panels range-separator="-"
              start-placeholder end-placeholder :clearable="false" :picker-options="pickerOptions"
              popper-class="fit-background-picker" @change="(currPage = 1), getEntrustLogCurrencyFn()"></el-date-picker>
          </template>
        </div>
        <div class="condition-right">
          <template v-if="navCurrent == 5">
            <el-checkbox v-model="checked" @change="(currPage = 1), getEntrustLogCurrencyFn()">
              <span class="checkedText">{{
                              currCoinLangFun("hide_undo")
                              }}</span>
            </el-checkbox>
          </template>
          <template v-if="navCurrent == 6">
            <!-- <div>
              <span class=""><i class="fa fa-file-text"></i> 导出数据 </span>
            </div>-->
          </template>
        </div>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" ref="tableref" style="width: 100%" v-loading="requestStatus">
        <div v-for="(item, index) in ordersTableColumn" :key="item.prop + '_' + index">
          <el-table-column v-if="item.prop == 'contractMenu'" v-bind="item">
            <template slot-scope="scope">
              <div class="name-box" :class="{ filterText: scope.row.entrust_status == -1 }">
                <span style="
                    display: inline-block;
                    border-radius: 2px;
                    padding: 0 2px;
                    margin-right: 8px;
                    color: #f5faff;
                  " :class="
                                      scope.row.direction == 1 || scope.row.direction == 4
                                        ? 'fit-tc-rise-bg'
                                        : 'fit-tc-fall-bg'
                                    " v-if="scope.row.directionText">{{ scope.row.directionText }}</span>
                <span>{{ scope.row.contract }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.prop == 'profitMenu'" v-bind="item">
            <template slot-scope="scope">
              <span :class="[
                                { filterText: scope.row.entrust_status == -1 },
                                scope.row.profit == 0
                                  ? ''
                                  : scope.row.profit.includes('-')
                                  ? 'fit-tc-fall'
                                  : 'fit-tc-rise',
                              ]">{{ scope.row.profit }}</span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.prop == 'ztczMeun'" v-bind="item" label-class-name="statusColor">
            <template slot="header">
              <span class="top" v-if="navCurrent != 5 && navCurrent != 6">{{
                              currCoinLangFun("operation", "all")
                              }}</span>
            </template>
            <template slot-scope="scope">
              <!-- 当前委托 -->
              <span class="table-column-content" v-if="
                                navCurrent == 1 ||
                                ((navCurrent == 2 || navCurrent == 3) &&
                                  scope.row.entrust_status == 0)
                              " :class="{ filterText: scope.row.entrust_status == -1 }"
                @click="ordersCancellationsFun(scope.row.id)">{{
                                currCoinLangFun("rders_table_cancellations", "full")
                                }}</span>
              <!-- 历史委托 -->

              <el-button style type="text" icon="el-icon-tickets" size="mini" v-if="navCurrent == 5"
                @click="openDetailsFun(scope.row)"></el-button>
            </template>
          </el-table-column>

          <el-table-column v-else v-bind="item" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span :class="{ filterText: scope.row.entrust_status == -1 }">{{
                              scope.row[item.prop]
                              }}</span>
            </template>
          </el-table-column>
        </div>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page.sync="currPage" @current-change="getEntrustLogCurrencyFn()"></el-pagination>
    </div>
    <contract-details ref="contractDetails" contractUnit="coin" :orderHistoryData="orderHistoryData"></contract-details>
  </div>
</template>

<script>
import { getEntrustLogCurrency, getBillTransaction } from "@/api/user.js";
import { numberFilterFun, toThousands } from "@/util/util";
import { getOrdersCancellationsApi } from "@/api/fullScreen";
import { dateFormat } from "@/util/date.js";
import contractDetails from "@/components/full/contract-details.vue";

export default {
  components: { contractDetails },
  watch: {
    navCurrent: {
      handler() {
        this.ordersTableColumn = [];
        let column = [];
        if (this.navCurrent == 1 || this.navCurrent == 5) {
          //当前委托  历史委托
          column = this.columnObject.dqwt;
        } else if (this.navCurrent == 2 || this.navCurrent == 3) {
          //计划委托
          column = this.columnObject.jhwt;
        } else if (this.navCurrent == 6) {
          //成交记录
          column = this.columnObject.cjjl;
        }
        this.$nextTick(() => {
          this.ordersTableColumn = column;
        });
      },
      immediate: true,
    },
  },
  data() {
    return {
      orderHistoryData: {},
      numberFilterFun: numberFilterFun,
      requestStatus: false,
      currPage: 1,
      pageSize: 10,
      total: 1,
      checked: false,
      navCurrent: 1,
      dateValue: [new Date().setMonth(new Date().getMonth() - 1), new Date()],
      currencyType: "",
      directionType: "",
      directionTypeList: [
        {
          label: this.currCoinLangFun("all_directions"), //全部方向
          value: "",
        },
        {
          label: this.currCoinLangFun("kaiduo_text", "move_contract"), //开多
          value: 1,
        },
        {
          label: this.currCoinLangFun("kaiKong_text", "move_contract"), //开空
          value: 2,
        },
        {
          label: this.currCoinLangFun("pingduo_text", "move_contract"), //平多
          value: 3,
        },
        {
          label: this.currCoinLangFun("pingkong_text", "move_contract"), //平空
          value: 4,
        },
      ],
      currencyTypeList: [
        {
          label: "ALL",
          value: "",
        },
      ],
      navList: [
        {
          name: this.currCoinLangFun("orders_tabs_curr", "full"), //当前委托
          value: 1,
        },
        {
          name: this.currCoinLangFun("plan_delegation"), //计划委托
          value: 2,
        },
        {
          name: this.currCoinLangFun("entrust_zyzs", "full"), //止盈止损
          value: 3,
        },
        // {
        //   name: "跟踪委托",
        //   value: 3,
        // },
        {
          name: this.currCoinLangFun("orders_tabs_history", "full"), //历史委托
          value: 5,
        },
        {
          name: this.currCoinLangFun("transaction_record"), //成交记录
          value: 6,
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: this.currCoinLangFun("within_a_week"), //一周内
            onClick(picker) {
              let start = new Date(
                new Date(new Date().toLocaleDateString()).getTime() -
                  7 * 24 * 3600 * 1000
              );
              picker.$emit("pick", [start, new Date()]);
            },
          },
          {
            text: this.currCoinLangFun("last_month"), //最近一个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 1);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_three_months"), //最近三个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_six_months"), //最近六个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      tableData: [],
      columnObject: {
        dqwt: [
          {
            label: this.currCoinLangFun("item_four", "top"), //合约
            width: "200",
            prop: "contractMenu",
            align: "left",
            fixed: "left",
          },
          {
            label: `${this.currCoinLangFun(
              "entrust",
              "full"
            )} | ${this.currCoinLangFun("orders_table_dir_amount", "full")}`, //委托 | 成交量
            minWidth: "144",
            prop: "entrust_success_balance",
            align: "left",
          },
          {
            label: `${this.currCoinLangFun(
              "entrust",
              "full"
            )} | ${this.currCoinLangFun(
              "orders_table_deal_both_price",
              "full"
            )}`, //委托 | 成交均价
            minWidth: "206",
            prop: "entrust_success_price",
            align: "center",
          },
          // {
          //   label: "委托类型",
          //   minWidth: "144",
          //   prop: "contract_type",
          //   align: "right",
          // },
          {
            label: this.currCoinLangFun("bin_id"), //仓位ID
            width: "144",
            align: "right",
            prop: "order_code",
          },
          {
            label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
            width: "144",
            align: "right",
            prop: "create_time",
          },
          {
            prop: "entrustStatus",
            align: "right",
            label: this.currCoinLangFun("orders_table_state", "full"), //状态
            width: "108",
          },
          {
            prop: "ztczMeun",
            align: "right",
            label: this.currCoinLangFun("operation", "all"), //操作
            minWidth: "80",
          },
        ],
        jhwt: [
          {
            label: this.currCoinLangFun("item_four", "top"), //合约
            minWidth: "160",
            prop: "contractMenu",
            align: "left",
            fixed: "left",
          },
          {
            label: this.currCoinLangFun("trigger_price_usdt"), //触发价格[USDT]
            minWidth: "133",
            prop: "trigger_price",
            align: "left",
          },
          {
            label: this.currCoinLangFun("entrust_price_usdt"), //委托价[USDT]
            minWidth: "164",
            prop: "entrust_price",
            align: "right",
          },
          {
            label: this.currCoinLangFun("orders_table_entrust_balance", "full"), //委托量
            minWidth: "144",
            align: "right",
            prop: "entrust_balance",
          },
          {
            label: this.currCoinLangFun("create_time"), //创建时间
            minWidth: "133",
            align: "right",
            prop: "create_time",
          },
          {
            label: this.currCoinLangFun("trigger_time"), //触发时间
            minWidth: "154",
            align: "right",
            prop: "completed_time",
          },
          {
            prop: "entrustStatus",
            align: "right",
            label: this.currCoinLangFun("orders_table_state", "full"), //状态
            minWidth: "144",
          },
          {
            prop: "ztczMeun",
            align: "right",
            label: this.currCoinLangFun("operation", "all"), //操作
            minWidth: "144",
          },
        ],
        cjjl: [
          {
            label: this.currCoinLangFun("item_four", "top"), //合约
            width: "150",
            prop: "contractMenu",
            align: "left",
            fixed: "left",
          },
          {
            label: this.currCoinLangFun("orders_table_dir_amount", "full"), //成交量
            minWidth: "120",
            prop: "entrust_success_balance",
            align: "right",
          },
          {
            label: this.currCoinLangFun("deal_both_price_usdt"), //成交均价[USDT]
            minWidth: "130",
            prop: "entrust_success_price",
            align: "right",
          },
          {
            label: this.currCoinLangFun("kcjjusdt_text"), //开仓均价[USDT]
            minWidth: "160",
            prop: "open_price",
            align: "right",
          },
          {
            label: this.currCoinLangFun("profit_usdt"), //盈利[USDT]
            minWidth: "140",
            prop: "profitMenu",
            align: "right",
          },
          {
            label: this.currCoinLangFun("service_charge_usdt"), //手续费[USDT]
            minWidth: "180",
            prop: "fee_balance",
            align: "right",
          },
          {
            label: this.currCoinLangFun("bin_id"), //仓位ID
            minWidth: "160",
            align: "right",
            prop: "order_code",
          },
          {
            label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
            minWidth: "132",
            align: "right",
            prop: "create_time",
          },
        ],
      },
      ordersTableColumn: [],
    };
  },
  created() {
    this.getBillTransactionFun();
    this.getEntrustLogCurrencyFn();
  },
  methods: {
    currCoinLangFun(code, type = "entrust") {
      return this.coinLangFun(type, code);
    },
    onNav(item) {
      this.currPage = 1;
      this.pageSize = 10;
      this.total = 1;
      this.checked = false;
      this.dateValue = [
        new Date().setMonth(new Date().getMonth() - 1),
        new Date(),
      ];
      this.currencyType = "";
      this.transactionType = 1;
      this.directionType = "";

      this.navCurrent = item.value;
      this.getEntrustLogCurrencyFn();
    },
    getBillTransactionFun() {
      //重置
      this.pairId = "";
      this.currencyTypeList = [
        {
          value: "",
          label: "ALL",
        },
      ];
      // 获取U本位交易对
      getBillTransaction("ubw", "all").then((res) => {
        let data = res.data.data.map((item) => {
          return {
            value: item.symbol_name,
            label: item.symbol_name,
          };
        });

        this.currencyTypeList = this.currencyTypeList.concat(data);
      });
    },
    ordersCancellationsFun(id) {
      let type = "contract_";
      if (this.navCurrent == 1) {
        type = type + "dqwt";
      } else if (this.navCurrent == 2) {
        type = type + "jhwt";
      } else if (this.navCurrent == 3) {
        type = type + "zyzs";
      }
      let obj = {
        type,
        idList: [id],
      };
      getOrdersCancellationsApi(obj).then((res) => {
        console.log("撤单", res.data.data);
        this.getEntrustLogCurrencyFn();
      });
    },
    getEntrustLogCurrencyFn() {
      this.requestStatus = true;
      let obj = {
        current: this.currPage,
        size: this.pageSize,
        currentType: "ubw",
        type: this.navCurrent,
        symbolName: this.currencyType,
      };
      if (this.navCurrent != 5 && this.navCurrent != 6) {
        //当前委托
        obj = {
          ...obj,
          tradeType: this.directionType, //交易类型 方向
        };
      } else if (this.navCurrent == 5) {
        //历史委托
        obj = {
          ...obj,
          tradeType: this.directionType, //交易类型 方向
          endTime: dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd"),
          startTime: dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd"),
          isShowRevoke: this.checked ? -1 : "",
        };
      } else if (this.navCurrent == 6) {
        //成交记录
        obj = {
          ...obj,
          endTime: dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd"),
          startTime: dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd"),
        };
      }

      this.tableData = [];

      getEntrustLogCurrency(obj)
        .then((res) => {
          console.log('============',res.data.data,this.navCurrent)
          this.requestStatus = false;
          this.total = res.data.data.total;
          
          let data = res.data.data.records;
          let that=this
          this.tableData = data.map((item) => {
            try {
             if (this.navCurrent == 1 || this.navCurrent == 5) {
              return {
                ...item,
                contract: item.entrust_symbol + item.fee_symbol,
                directionText: (() => {
                  let text = "";
                  this.directionTypeList.forEach((child) => {
                    if (child.value == item.direction) {
                      text = child.label;
                    }
                  });

                  return text;
                })(),
                create_time: item.create_time.slice(5),
                entrustStatus: (function () {
                  if (item.entrust_status == -1) {
                    return that.currCoinLangFun("rescinded", "full"); //已撤销
                  } else if (item.entrust_status == 0) {
                    return that.currCoinLangFun("entrusting"); //委托中
                  }
                  if (item.entrust_status == 1) {
                    return that.currCoinLangFun("completed_text", "all"); //已完成
                  }
                  return item.entrust_status;
                })(),
                entrust_success_price: `${toThousands(
                  item.entrust_price
                )} | ${toThousands(item.success_price)}`,
                entrust_success_balance: `${toThousands(
                  item.entrust_balance
                )} | ${toThousands(item.success_balance)} ${
                  item.entrust_symbol
                }`,
                entrusted_amount: toThousands(
                  Number(item.success_price).myMul(item.success_balance)
                ),
              };
            } else if (this.navCurrent == 2 || this.navCurrent == 3) {
              return {
                ...item,
                contract: item.symbol_name.replace("/", ""),
                trigger_price: `${toThousands(item.trigger_price || 0)}`,
                directionText: (() => {
                  let text = "";
                  this.directionTypeList.forEach((child) => {
                    if (child.value == item.direction) {
                      text = child.label;
                    }
                  });

                  return text;
                })(),
                entrust_price: `${toThousands(item.entrust_price || 0)}`,
                entrust_balance: `${toThousands(item.entrust_balance || 0)} ${
                  item.symbol_name.split("/")[0] || ""
                }`,
                create_time: item.create_time ? item.create_time.slice(5) : "",
                completed_time: item.completed_time
                  ? item.completed_time.slice(5)
                  : "--",
                entrustStatus: (function () {
                  if (item.entrust_status == -1) {
                    return that.currCoinLangFun("rescinded", "full"); //已撤销
                  } else if (item.entrust_status == 0) {
                    return that.currCoinLangFun("entrusting"); //委托中
                  }
                  if (item.entrust_status == 1) {
                    return that.currCoinLangFun("triggered", "full"); //已触发
                  }
                  return item.entrust_status;
                })(),
              };
            } else if (this.navCurrent == 6) {
              return {
                ...item,
                contract: item.entrust_symbol + item.fee_symbol,
                directionText: (() => {
                  let text = "";
                  this.directionTypeList.forEach((child) => {
                    if (child.value == item.direction) {
                      text = child.label;
                    }
                  });

                  return text;
                })(),
                fee_balance: toThousands(item.fee_balance || 0),
                profit: `${toThousands(item.profit || 0)}`,
                open_price: `${toThousands(item.open_price || 0)}`,
                create_time: item.create_time.slice(5),
                entrust_success_price: `${toThousands(
                  item.success_price || 0
                )}`,
                entrust_success_balance: `${toThousands(
                  item.entrust_balance || 0
                )} ${item.entrust_symbol}`,
                entrust_status: 1,
              };
            }
          } catch (error) {
            console.log(error)
          }
           
          });
          console.log(this.tableData, res.data.data.records, "++++++++++++++");
        })
        .catch(() => {
          this.requestStatus = false;
        });
    },
    openDetailsFun(data) {
      this.orderHistoryData = {
        ...this.orderHistoryData,
        symbol: data.symbol_name,
        directionText: data.directionText,
        className:
          data.direction == 1 || data.direction == 4
            ? "fit-tc-rise"
            : "fit-tc-fall",
        zt: data.entrustStatus,
        completedTime: data.completed_time,
        base_cj_cjl: `${toThousands(
          Number(data.entrust_balance - 0).myMul(data.success_price)
        )} ${data.frozen_symbol}`,
        coin_cj_cjl: `${toThousands(data.entrust_balance)} ${
          data.entrust_symbol
        }`,
        successPrice: toThousands(data.success_price),
        frozen_symbol: data.frozen_symbol,
        tableData: [],
      };
      if (data.entrust_status != -1) {
        this.orderHistoryData.tableData = [
          {
            completedTime: this.orderHistoryData.completedTime,
            successPrice: this.orderHistoryData.successPrice,
            coin_cj_cjl: this.orderHistoryData.coin_cj_cjl,
            base_cj_cjl: this.orderHistoryData.base_cj_cjl,
            fee_balance: toThousands(data.fee_balance) + " " + data.fee_symbol,
          },
        ];
      }
      this.$refs.contractDetails.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.future-u {
  .nav-box {
    display: flex;
    padding: 12px 4px;

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