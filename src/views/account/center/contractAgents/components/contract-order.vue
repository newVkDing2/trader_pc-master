<template>
  <div class="contract-order">
    <div class="title">{{ title }}</div>
    <div class="condition_box" v-if="navCurrent !== 5">
      <div style="width: 140px; margin-right: 16px">
        <el-input v-model="orderID" :placeholder="currCoinLangFun('dingdanID_text', 'order')"></el-input>
      </div>
      <div style="width: 140px; margin-right: 16px">
        <el-input v-model="uid" placeholder="UID"></el-input>
      </div>
      <!-- 币种选择 -->
      <el-select v-model="coinId" filterable :placeholder="currCoinLangFun('table_coin_trading', 'exchange')"
        class="coinName" popper-class="fit-background-select option-coin-name">
        <el-option v-for="item in coinData" :key="item.id" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <!-- 手续费币种 -->
      <el-select v-model="commissionCoinId" filterable :placeholder="currCoinLangFun('手续费币种')" class="coinName"
        popper-class="fit-background-select option-coin-name" v-if="navCurrent != 4">
        <el-option v-for="item in commissionCoinData" :key="item.id" :label="item.label" :value="item.value">
          <div>
            <img :src="item.avatar" v-if="item.avatar" alt />
            <span :class="{
                            'fit-tc-primary': item.value !== coinId,
                          }">{{ item.label }}</span>
            <span class="fit-tc-tertiary" v-if="item.full_name">{{
                          item.full_name
                          }}</span>
          </div>
        </el-option>
      </el-select>
      <!-- 日期选择 -->
      <el-date-picker v-model="dateValue" type="daterange" align="right" unlink-panels range-separator="-"
        start-placeholder end-placeholder :clearable="false" :picker-options="pickerOptions"
        popper-class="fit-background-picker" v-if="navCurrent != 4"></el-date-picker>

      <div class="btn" @click="getTableDataFun(true)">
        {{ currCoinLangFun("info_query_text") }}
      </div>
    </div>
    <div class="table_box">
      <el-table :data="tableData" style="width: 100%" v-loading="requestStatus">
        <template v-for="(item, index) in tableDataHead">
          <el-table-column :key="index" :show-overflow-tooltip="true" v-bind="item"></el-table-column>
        </template>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page.sync="currPage" @current-change="getTableDataFun()"></el-pagination>
    </div>
  </div>
</template>

<script>
import {
  contractProxyGetOrders,
  contractProxyGetCommission,
  contractProxyGetPosition,
  contractProxyGetHistory,
} from "@/api/contractAgents.js";
import { getDataApi } from "@/api/system.js";
import { getBillTransaction } from "@/api/user.js";
import { dateFormat } from "@/util/date.js";
import { numberFilterFun, toNonExponential } from "@/util/util";
import it from "element-ui/src/locale/lang/it";

export default {
  props: ["navCurrent"],
  data() {
    return {
      requestStatus: false,
      title: this.currCoinLangFun("hyddmx_nav"),
      total: 1,
      current: 1,
      size: 10,
      orderID: "",
      uid: "",
      coinId: "",
      commissionCoinId: "",
      coinData: [],
      commissionCoinData: [],
      dateValue: [],
      pickerOptions: {
        shortcuts: [
          {
            text: this.currCoinLangFun("within_a_week", "order"), //一周内
            onClick(picker) {
              let start = new Date(
                new Date(new Date().toLocaleDateString()).getTime() -
                  7 * 24 * 3600 * 1000
              );
              picker.$emit("pick", [start, new Date()]);
            },
          },
          {
            text: this.currCoinLangFun("last_month", "order"), //最近一个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 1);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_three_months", "order"), //最近三个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_six_months", "order"), //最近六个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      tableDataHead: [],
      tableData: [],
      directionTypeList: [
        {
          label: this.currCoinLangFun("all_directions", "entrust"), //全部方向
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
    };
  },
  methods: {
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    async initFun() {
      this.current = 1;
      this.coinId = "";
      this.orderID = "";
      this.uid = "";
      this.commissionCoinId = "";
      this.requestStatus = true;
      this.dateValue = [];
      this.total = 1;
      this.tableData = [];

      if (this.coinData.length == 0) {
        this.coinData = [
          //交易对
          {
            label: this.currCoinLangFun("text_all", "all"),
            value: "", //全部交易对
          },
        ];
        // 获取U本位 币本位交易对
        await getBillTransaction("ubw", "all").then((res) => {
          this.coinData = this.coinData.concat(res.data.data);
          this.coinData = this.coinData.map((item) => {
            if (item.symbol_name) {
              return {
                ...item,
                label: item.symbol_name,
                value: item.symbol_name,
              };
            }
            return item;
          });
        });
        // 获取U本位 币本位交易对
        await getBillTransaction("bbw", "all").then((res) => {
          this.coinData = this.coinData.concat(res.data.data);
          this.coinData = this.coinData.map((item) => {
            if (item.symbol_name) {
              return {
                ...item,
                label: item.symbol_name,
                value: item.symbol_name,
              };
            }
            return item;
          });
        });
      }
      if (this.commissionCoinData.length == 0) {
        this.commissionCoinData = [
          //币种
          {
            label: this.currCoinLangFun("text_all_currency", "order"),
            value: "", //全部币种
          },
        ];
        //获取币种
        await getDataApi("1531180815470080002", {
          pageSize: "-521",
          order: "asc",
        }).then((res) => {
          this.commissionCoinData = this.commissionCoinData.concat(
            res.data.data.records
          );
          this.commissionCoinData = this.commissionCoinData.map((item) => {
            if (item.symbol) {
              return {
                ...item,
                label: item.symbol,
                value: item.symbol,
              };
            }
            return item;
          });
        });
      }
      this.requestStatus = false;

      // 合约订单明细(id:2)与合约订单分佣明细(id:3)与下级当前持仓(id:4)与佣金分发记录(id:5)共用一个页面
      if (this.navCurrent == 2) {
        this.title = this.currCoinLangFun("hyddmx_nav");
        this.tableDataHead = [
          {
            label: this.currCoinLangFun("dingdanID_text", "order"),
            prop: "ddId",
            align: "center",
          },
          {
            label: "UID",
            prop: "UID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("register_email", "home_index"),
            prop: "mailbox",
            align: "center",
          },

          {
            label: this.currCoinLangFun("上级UID"),
            prop: "sjUID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("orders_table_dir", "full"),
            prop: "fx",
            align: "center",
          },
          {
            label: this.currCoinLangFun("table_coin_trading", "exchange"),
            prop: "jyd",
            align: "center",
          },

          {
            label: this.currCoinLangFun("成交价格"),
            prop: "cjjg",
            align: "center",
          },
          {
            label: this.currCoinLangFun("cjsl_text", "move_transaction"),
            prop: "cjsl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("交易量"),
            prop: "jyl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("service_charge", "all"),
            prop: "sxf",
            align: "center",
          },
          {
            label: this.currCoinLangFun("成交时间"),
            prop: "cjsj",
            align: "center",
          },
        ];
      } else if (this.navCurrent == 3) {
        this.title = this.currCoinLangFun("hyddfymx_nav");
        this.tableDataHead = [
          {
            label: this.currCoinLangFun("dingdanID_text", "order"),
            prop: "ddId",
            align: "center",
          },
          {
            label: "UID",
            prop: "UID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("register_email", "home_index"),
            prop: "mailbox",
            align: "center",
          },
          {
            label: this.currCoinLangFun("分佣比例"),
            prop: "fybl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("上级UID"),
            prop: "sjUID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("orders_table_dir", "full"),
            prop: "fx",
            align: "center",
          },
          {
            label: this.currCoinLangFun("table_coin_trading", "exchange"),
            prop: "jyd",
            align: "center",
          },

          {
            label: this.currCoinLangFun("成交价格"),
            prop: "cjjg",
            align: "center",
          },
          {
            label: this.currCoinLangFun("cjsl_text", "move_transaction"),
            prop: "cjsl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("交易量"),
            prop: "jyl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("service_charge", "all"),
            prop: "sxf",
            align: "center",
          },
          {
            label: this.currCoinLangFun("分佣数量"),
            prop: "fysl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("分佣时间"),
            prop: "fysj",
            align: "center",
          },
          {
            label: this.currCoinLangFun("成交时间"),
            prop: "cjsj",
            align: "center",
          },
        ];
      } else if (this.navCurrent == 4) {
        this.title = this.currCoinLangFun("xjdqcc_nav");

        this.tableDataHead = [
          {
            label: this.currCoinLangFun("dingdanID_text", "order"),
            prop: "ddId",
            align: "center",
          },
          {
            label: "UID",
            prop: "UID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("上级UID"),
            prop: "sjUID",
            align: "center",
          },
          {
            label: this.currCoinLangFun("menu_hy", "move_index"),
            prop: "hy",
            align: "center",
          },
          {
            label: this.currCoinLangFun("nav_gg", "move_transaction"),
            prop: "gg",
            align: "center",
          },

          {
            label: this.currCoinLangFun("仓位方向"),
            prop: "cwfx",
            align: "center",
          },
          {
            label: this.currCoinLangFun("cw_text", "move_contract"),
            prop: "cw",
            align: "center",
          },
          {
            label: this.currCoinLangFun("kpcsl_text", "move_contract"),
            prop: "kpcsl",
            align: "center",
          },
          {
            label: this.currCoinLangFun("cwjz_text", "move_contract"),
            prop: "cwjz",
            align: "center",
          },
          {
            label: this.currCoinLangFun("仓位保证金"),
            prop: "cwbzj",
            align: "center",
          },
          {
            label: this.currCoinLangFun("kcjj_text", "move_contract"),
            prop: "kcjj",
            align: "center",
          },
          {
            label: this.currCoinLangFun("ygbcj_text", "move_transaction"),
            prop: "ygqbj",
            align: "center",
          },
          {
            label: this.currCoinLangFun("bzjl_text", "move_contract"),
            prop: "bzjl",
            align: "center",
          },
        ];
      } else if (this.navCurrent == 5) {
        this.title = this.currCoinLangFun("yjffjl_nav");
        this.tableDataHead = [
          {
            label: this.currCoinLangFun("date_rq", "all"),
            prop: "date",
            align: "center",
          },
          {
            label: this.currCoinLangFun("返佣"),
            prop: "fy",
            align: "center",
          },
        ];
      }
      this.getTableDataFun();
    },
    getTableDataFun(isReset = false) {
      if (this.requestStatus) {
        return;
      }

      this.requestStatus = true;
      this.tableData = [];
      // 合约订单明细(id:2)与合约订单分佣明细(id:3)与下级当前持仓(id:4)与佣金分发记录(id:5)共用一个页面
      if (this.navCurrent == 2) {
        contractProxyGetOrders({
          contractId: this.orderID || "",
          UID: this.uid || "",
          symbol: this.coinId || "",
          feeSymbol: this.commissionCoinId || "",
          current: this.current,
          size: this.size,
          startDate: this.dateValue[0]
            ? dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd")
            : "",
          endDate: this.dateValue[1]
            ? dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd")
            : "",
        })
          .then((res) => {
            this.requestStatus = false;
            this.total = res.data.data.total;
            this.tableData = res.data.data.records.map((item) => {
              return {
                ...item,
                ddId: item.id,
                UID: item.uid,
                mailbox: item.email,
                sjUID: item.puid,
                fx: this.directionTypeList.filter(
                  (i) => item.direction == i.value
                )[0].label,
                jyd: item.symbol_name,
                cjjg: numberFilterFun(item.avg_price),
                cjsl: Number(item.entrust_balance) || "-",
                jyl: Number(item.turnover),
                sxf: `${Number(item.fee_balance)} ${item.fee_symbol}`,
                cjsj: item.completed_time || "",
              };
            });
            // console.log(res, "合约订单明细");
          })
          .catch((err) => {
            this.requestStatus = false;
          });
      } else if (this.navCurrent == 3) {
        this.requestStatus = false;
        //合约订单分佣明细
        contractProxyGetCommission({
          contractId: this.orderID || "",
          UID: this.uid || "",
          symbol: this.coinId || "",
          feeSymbol: this.commissionCoinId || "",
          current: this.current,
          size: this.size,
          startDate: this.dateValue[0]
            ? dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd")
            : "",
          endDate: this.dateValue[1]
            ? dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd")
            : "",
        })
          .then((res) => {
            this.requestStatus = false;
            this.total = res.data.data.total;
            this.tableData = res.data.data.records.map((item) => {
              return {
                ...item,
                ddId: item.id,
                UID: item.uid,
                mailbox: item.email,
                fybl: Number(item.commission_rate).myMul(100) + "%",
                sjUID: item.puid,
                fx: this.directionTypeList.filter(
                  (i) => item.direction == i.value
                )[0].label,
                jyd: item.symbol_name,
                cjjg: numberFilterFun(item.avg_price),
                cjsl: Number(item.entrust_balance) || "-",
                jyl: Number(item.turnover),
                sxf: `${Number(item.fee_balance)} ${item.fee_symbol}`,
                fysl: Number(item.commission) + item.fee_symbol,
                fysj: item.commission_time || "",
                cjsj: item.completed_time || "",
              };
            });
            // console.log(res, "合约订单分佣明细");
          })
          .catch((err) => {
            this.requestStatus = false;
          });
      } else if (this.navCurrent == 4) {
        contractProxyGetPosition({
          contractId: this.orderID || "",
          UID: this.uid || "",
          symbol: this.coinId || "",
          current: this.current,
          size: this.size,
          startDate: this.dateValue[0]
            ? dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd")
            : "",
          endDate: this.dateValue[1]
            ? dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd")
            : "",
        })
          .then((res) => {
            this.requestStatus = false;
            this.total = res.data.data.total;
            // console.log(res, "下级当前持仓");
            try {
              this.tableData = res.data.data.records.map((item) => {
                return {
                  ...item,
                  ddId: item.id,
                  UID: item.uid,
                  sjUID: item.puid,
                  hy: item.symbol_name,
                  gg: item.leverage,
                  cwfx: this.directionTypeList.filter(
                    (i) => item.direction == i.value
                  )[0].label,
                  cw: toNonExponential(item.frozen_balance),
                  kpcsl: numberFilterFun(item.balance),
                  cwjz: toNonExponential(item.position_value),
                  cwbzj: Number(item.principal_amount) + item.principal_symbol,
                  kcjj: numberFilterFun(item.avg_price),
                  ygqbj: numberFilterFun(item.force_price),
                  bzjl: Number(item.margin_rate).myMul(100) + "%",
                };
              });
            } catch (error) {
              console.log(error);
            }
          })
          .catch((err) => {
            this.requestStatus = false;
          });
      } else if (this.navCurrent == 5) {
        contractProxyGetHistory()
          .then((res) => {
            this.requestStatus = false;
            this.total = res.data.data.total;
            // console.log(res, "佣金分发记录");

            this.tableData = res.data.data.records.map((item) => {
              return {
                ...item,
                date: item.create_time,
                fy: Number(item.commission) + item.commission_coin_symbol,
              };
            });
          })
          .catch((err) => {
            this.requestStatus = false;
          });
      }
    },
  },
  watch: {
    navCurrent() {
      this.initFun();
    },
  },
  mounted() {
    this.initFun();
  },
};
</script>

<style lang="scss" scoped>
.el-select-dropdown.option-coin-name {
  .el-select-dropdown__item {
    padding: 0 20px !important;
    width: 331px !important;

    &>div {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-right: 8px !important;
      }

      span:nth-child(2) {
        font-weight: 500;
        margin-right: 8px !important;
      }

      span:nth-child(2) {
        font-weight: 400;
        margin-right: 8px !important;
      }
    }
  }
}

.contract-order {
  .title {
    font-size: 22px;
    padding: 20px 0;
  }

  .condition_box {
    padding: 16px 12px;
    display: flex;

    .btn {
      font-size: 14px;
      margin-left: 16px;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 4px;
      background: #4fa99e;
      color: #fff;
      line-height: 32px;
    }

    ::v-deep.el-input {
      .el-input__inner {
        height: 32px;
        line-height: 32px;
      }
    }

    ::v-deep.el-select {
      box-sizing: border-box;

      input.el-input__inner {
        height: 32px !important;
      }

      &.coinName {
        width: 180px;
        margin-right: 16px;

        .el-input__prefix {
          display: flex;
          align-items: center;
        }

        input.el-input__inner {
          padding-left: 28px;
        }

        .el-input--suffix {
          .el-input__suffix-inner {
            display: none;
          }
        }
      }

      &.pairName {
        width: 114px;
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
            }
          }
        }
      }

      &.status {
        width: 280px;
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
            }
          }
        }
      }
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
}

.theme-night {
  .condition_box {}

  .table_box {
    border-top: 1px solid #262d38;
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
}

.theme-daytime {
  .condition_box {}

  .table_box {
    border-top: 1px solid #ddd;
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
}
</style>

<style lang="scss">
.theme-night {
  .contract-order {
    .title {
      color: #fff;
    }

    .condition_box {
      background: #151d29;
    }
  }

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

    .el-picker-panel__sidebar {
      background-color: #151d29 !important;

      .el-picker-panel__shortcut {
        color: #fff;
      }
    }
  }

  .el-table__header {
    thead {
      tr {
        th {
          div {
            color: #9bb4cc;
            font-size: 12px;
          }
        }
      }
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

.theme-daytime {
  .contract-order {
    .title {
      color: #717e94;
    }
  }

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

  .el-table__header {
    thead {
      tr {
        th {
          div {
            color: #4e6073;
            font-size: 12px;
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
</style>
