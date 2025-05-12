<template>
  <div class="fit-background wallet-bills-box">
    <ul class="nav-box">
      <li class="li-item fit-tc-tip" v-for="item in navList" :key="item.value" :class="{
                'active-text': navCurrent == item.value,
                'fit-tc-tertiary': navCurrent == item.value,
              }" @click="onNav(item)">
        {{ item.name }}
      </li>
    </ul>
    <div class="table-bg fit-background">
      <div class="condition-box condition-box-bg article-border">
        <div class="condition-left">
          <!-- 币种选择 -->
          <el-select v-if="navCurrent == 1 || navCurrent == 2 || navCurrent == 3" v-model="coinId" filterable
            :placeholder="currCoinLangFun('text_all_currency')" class="coinName"
            popper-class="fit-background-select option-coin-name" @change="(currPage = 1), getMyBillFn()">
            <template #prefix>
              <span style="padding-left: 5px">
                <i class="el-icon-search"></i>
              </span>
            </template>
            <el-option v-for="item in coinData" :key="item.id" :label="item.symbol" :value="item.id">
              <div>
                <img :src="item.avatar" v-if="item.avatar" alt />
                <span :class="{
                                    'fit-tc-primary': item.id !== coinId,
                                  }">{{ item.symbol }}</span>
                <span class="fit-tc-tertiary" v-if="item.full_name">{{
                                  item.full_name
                                  }}</span>
              </div>
            </el-option>
          </el-select>

          <!-- 合约交易对 -->
          <el-select v-if="navCurrent == 4 || navCurrent == 5" v-model="pairId" filterable
            :placeholder="currCoinLangFun('text_all', 'all')" class="pairName"
            popper-class="fit-background-select option-pair-name" @change="(currPage = 1), getMyBillFn()">
            <el-option v-for="item in pairData" :key="item.id" :label="item.symbol_name" :value="item.id"></el-option>
          </el-select>

          <!-- 类型选择 -->
          <el-select v-model="type" placeholder class="status" popper-class="fit-background-select"
            @change="(currPage = 1), getMyBillFn()">
            <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <!-- 日期选择 -->
          <el-date-picker v-model="dateValue" type="daterange" align="right" unlink-panels range-separator="-"
            start-placeholder end-placeholder :clearable="false" :picker-options="pickerOptions"
            popper-class="fit-background-picker" @change="(currPage = 1), getMyBillFn()"></el-date-picker>
        </div>
        <div class="condition-right">
          <!-- <span class=""><i class="fa fa-file-text"></i> 导出数据 </span
          ><span class="box-line"></span><span> 导出近一年账单 </span>-->
        </div>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" v-loading="requestStatus" v-if="navCurrent != 4">
        <el-table-column :show-overflow-tooltip="true" prop="create_time"
          :label="currCoinLangFun('table_coin_time', 'exchange')" min-width="177"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="coin_symbol"
          :label="currCoinLangFun('menu_bz', 'move_index')" min-width="108">
          <template slot-scope="scope">
            <div class="name-box">
              <img :src="scope.row.avatar" />
              <span>{{ scope.row.coin_symbol }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="amount" align="right"
          :label="currCoinLangFun('table_coin_num', 'exchange')" min-width="217">
          <template slot-scope="scope">
            <div :style="{ color: scope.row.amount < 0 ? '#db3a35' : '#22a87b' }">
              {{
                            scope.row.amount < 0 ? transferNumber(scope.row.amount) : "+" + transferNumber(scope.row.amount) }} </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="fee_amount" align="right"
          :label="currCoinLangFun('service_charge', 'all')" min-width="174">
          <template slot-scope="scope">
            <div>
              <span v-if="transferNumber(scope.row.fee_amount) == 0">
                {{
                                `${transferNumber(scope.row.fee_amount)} ${
                                scope.row.coin_symbol
                                }`
                                }}
              </span>
              <span v-else style="color: #cc3b31">
                {{
                                `-${transferNumber(scope.row.fee_amount)} ${
                                scope.row.coin_symbol
                                }`
                                }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="member_after_balance" align="right"
          :label="currCoinLangFun('account_balance', 'coin_treasure')" min-width="250">
          <template slot-scope="scope">
            <span>
              {{ `${transferNumber(scope.row.member_after_balance)}` }}
            </span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="type" align="right"
          :label="currCoinLangFun('text_type', 'all')" min-width="250">
          <template slot-scope="scope">
            <span>
              <!-- {{ showTypeText(scope.row.type) }} -->
              {{ scope.row.remark }}
            </span>
          </template>
        </el-table-column>
        <template slot="append">
          <div class="footer-tips" v-if="false">
            <i class="el-icon-warning-outline"></i>
            {{ currCoinLangFun("yext_wltgxtxn") }}
            <!-- 为了提升系统的性能, 系统只保留近 6 个月的历史数据, 请及时备份 -->
          </div>
        </template>
      </el-table>
      <el-table :data="tableData" style="width: 100%" v-loading="requestStatus" v-if="navCurrent == 4">
        <el-table-column :show-overflow-tooltip="true" prop="create_time"
          :label="currCoinLangFun('table_coin_time', 'exchange')" min-width="160"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="coin_symbol"
          :label="currCoinLangFun('orders_table_coin', 'full')" min-width="105">
          <template slot-scope="scope">
            <div class="name-box">
              <img :src="scope.row.avatar" />
              <span>{{ scope.row.coin_symbol }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="amount" align="right"
          :label="currCoinLangFun('table_coin_num', 'exchange')" min-width="168">
          <template slot-scope="scope">
            <div :style="{ color: scope.row.amount < 0 ? '#db3a35' : '#22a87b' }">
              {{
                            scope.row.amount < 0 ? transferNumber(scope.row.amount) : "+" + transferNumber(scope.row.amount) }} </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="fee_amount" align="right"
          :label="currCoinLangFun('service_charge', 'all')" min-width="126">
          <template slot-scope="scope">
            <div>
              <span v-if="transferNumber(scope.row.fee_amount) == 0">
                {{
                                `${transferNumber(scope.row.fee_amount)} ${
                                scope.row.coin_symbol
                                }`
                                }}
              </span>
              <span v-else style="color: #cc3b31">
                {{
                                `-${transferNumber(scope.row.fee_amount)} ${
                                scope.row.coin_symbol
                                }`
                                }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="member_after_balance" align="right"
          :label="currCoinLangFun('account_balance', 'coin_treasure')" min-width="210">
          <template slot-scope="scope">
            <span>
              {{ `${transferNumber(scope.row.member_after_balance)}` }}
            </span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="type" align="right"
          :label="currCoinLangFun('text_type', 'all')" min-width="231">
          <template slot-scope="scope">
            <span>
              <!-- {{ showTypeText(scope.row.type) }} -->
              {{ scope.row.remark }}
            </span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="symbol_name" align="right"
          :label="currCoinLangFun('item_four', 'top')" min-width="168"></el-table-column>
        <template slot="append">
          <div class="footer-tips" v-if="false">
            <i class="el-icon-warning-outline"></i>
            {{ currCoinLangFun("yext_wltgxtxn") }}
            <!-- 为了提升系统的性能, 系统只保留近 6 个月的历史数据, 请及时备份 -->
          </div>
        </template>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page.sync="currPage" @current-change="getMyBillFn()"></el-pagination>
    </div>
  </div>
</template>

<script>
import { getDataApi, getDicTableData } from "@/api/system.js";
import { getMyBill, getBillTransaction } from "@/api/user.js";
import { dateFormat } from "@/util/date.js";
import { toThousands, toNorounded } from "@/util/util.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      requestStatus: false,
      currPage: 1,
      pageSize: 10,
      total: 1,
      type: "",
      dateValue: [new Date().setMonth(new Date().getMonth() - 1), new Date()],
      navCurrent: 1,
      coinId: "", //当前币种
      coinData: [
        //币种
        {
          id: "",
          symbol: this.currCoinLangFun("text_all_currency"), //全部币种
        },
      ],
      pairId: "", //当前交易对
      pairData: [
        //交易对
        {
          id: "",
          symbol_name: this.currCoinLangFun("text_all", "all"), //全部
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
      navList: [
        {
          name: this.currCoinLangFun("wallet_account"), //钱包账户
          value: 1,
        },
        {
          name: this.currCoinLangFun("coin", "all"), //币币
          value: 2,
        },
        {
          name: this.currCoinLangFun("nav_gg", "move_transaction"), //杠杆
          value: 3,
        },
        {
          name: this.currCoinLangFun("item_four_child_one_title", "top"), //U本位永续合约
          value: 4,
        },
        {
          name: this.currCoinLangFun("item_four_child_two_title", "top"), //币本位永续合约
          value: 5,
        },
        {
          name: this.currCoinLangFun("item_five", "top"), //市值
          value: 6,
        },
        {
          name: this.currCoinLangFun("money", "article"), //理财
          value: 7,
        },
      ],
      typeList: [
        {
          label: this.currCoinLangFun("all_bill_types"), //全部账单类型
          value: "0",
        },
      ],
      tableData: [],
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    if (this.userInfo.is_merchant == 2) {
      this.navList.push({
        name: this.currCoinLangFun("item_sj", "top"), //商家
        value: 8,
      });
    }
    getDataApi("1531180815470080002", { pageSize: "-521", order: "asc" }).then(
      (res) => {
        this.coinData = this.coinData.concat(res.data.data.records);
      }
    );

    this.getTypeSelectData();
    this.getMyBillFn();
      this.navList.forEach(item=>{
        if(item.value==this.$route.query.type){
          this.onNav(item)
        }
      })
  },
  methods: {
    currCoinLangFun(code, type = "order") {
      return this.coinLangFun(type, code);
    },
    onNav(item) {
      this.navCurrent = item.value;
      this.currPage = 1;
      this.getTypeSelectData();
      this.getMyBillFn();
    },
    getBillTransactionFun(type, symbolName) {
      //重置
      this.pairId = "";
      this.pairData = [
        {
          id: "",
          symbol_name: this.currCoinLangFun("text_all", "all"), //全部
        },
      ];
      // 获取U本位 币本位交易对
      getBillTransaction(type, symbolName).then((res) => {
        this.pairData = this.pairData.concat(res.data.data);
      });
    },
    getTypeSelectData() {
      // 重置类型
      this.type = "0";
      this.typeList = [
        {
          label: this.currCoinLangFun("all_types"), //全部类型
          value: "0",
        },
      ];

      if (this.navCurrent == 1) {
        //钱包账户
        this.getDicTableDataFun("assets_mybill_wallet_type");
      } else if (this.navCurrent == 2) {
        //币币账户
        this.getDicTableDataFun("assets_mybill_spot_type");
      } else if (this.navCurrent == 3) {
        //杠杆账户
        this.getDicTableDataFun("assets_mybill_margin_type");
      } else if (this.navCurrent == 4) {
        //U本位永续合约
        this.getDicTableDataFun("assets_mybill_contract_type");
        this.getBillTransactionFun("ubw", "all");
      } else if (this.navCurrent == 5) {
        //币本位永续合约
        this.getDicTableDataFun("assets_mybill_contract_type");
        this.getBillTransactionFun("bbw", "all");
      } else if (this.navCurrent == 6) {
        //市值账户
        this.getDicTableDataFun("assets_mybill_market_type");
      } else if (this.navCurrent == 7) {
        //理财账户
        this.getDicTableDataFun("assets_mybill_wealth_type");
      } else if (this.navCurrent == 8) {
        //商家账户
        this.getDicTableDataFun("assets_mybill_service_type");
      }
    },
    //类型列表
    getDicTableDataFun(code) {
      getDicTableData(code).then((res) => {
        // 重置类型
        this.type = "0";
        this.typeList = [
          {
            label: this.currCoinLangFun("all_types"), //全部类型
            value: "0",
          },
        ];

        if (this.navCurrent == 1) {
          res.data.data = res.data.data.reverse();
        }

        this.typeList = this.typeList.concat(res.data.data);
      });
    },
    //获取账单
    getMyBillFn() {
      this.requestStatus = true;
      this.tableData = [];
      getMyBill({
        billsType: this.navCurrent,
        coinId:
          this.navCurrent == 4 || this.navCurrent == 5
            ? this.pairId
            : this.coinId,
        current: this.currPage,
        endTime: dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd"),
        size: this.pageSize,
        startTime: dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd"),
        type: this.type,
      })
        .then((res) => {
          this.requestStatus = false;
          this.tableData = res.data.data.records.map((item) => {
            if (item.type == "1") {
              item.amount = 0 - item.amount;
            }
            return item;
          });
          this.total = res.data.data.total;
        })
        .catch(() => {
          this.requestStatus = false;
        });
    },
    //数值转换
    transferNumber(value) {
      if (value) {
        let str = toNorounded(value, 8);
        return `${toThousands(str)}`;
      } else {
        return "0";
      }
    },
    //回显类型
    showTypeText(value) {
      if (value) {
        let filterArr = this.typeList.filter((item) => item.value == value);
        if (filterArr.length) {
          return filterArr[0].label;
        } else {
          return value;
        }
      } else {
        return "";
      }
    },
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

.el-select-dropdown.option-pair-name {
  .el-select-dropdown__item {
    width: 114px !important;

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

.wallet-bills-box {
  .nav-box {
    display: flex;
    padding: 8px 0;

    .li-item {
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .table-bg {
    padding: 0 12px;

    .condition-box {
      padding: 16px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .condition-left {
        width: 702px;
        display: flex;

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

      .condition-right {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 12px;

        .box-line {
          width: 1px;
          height: 16px;
          display: block;
          margin: 0 12px;
        }
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

  .footer-tips {
    padding: 33px 0 16px 12px;
    font-size: 12px;
    display: flex;
    align-items: center;

    .el-icon-warning-outline {
      font-size: 16px;
      margin-right: 6px;
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
</style>

<style lang="scss" scoped>
.theme-daytime {
  .condition-box-bg {
    background-color: #fff;

    .condition-right {
      color: #2954cc;
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
}

.theme-night {
  .condition-box-bg {
    background-color: #151d29;

    .condition-right {
      color: #0020FD;
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
}
</style>
<style lang="scss">
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
</style>
