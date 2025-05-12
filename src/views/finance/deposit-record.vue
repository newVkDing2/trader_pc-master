<template>
  <div class="deposit-record">
    <div class="main-content">
      <div class="flex-box space-between nav">
        <span style="
            user-select: none;
            cursor: pointer;
            color: #3b85f5;
            font-size: 12px;
          " @click="$emit('goBack')"><i class="el-icon-back" style="margin-right: 4px"></i>{{
                    currCoinLangFun("back_coin_treasure") }}</span>
      </div>
      <h2 class="fit-tc-primary">{{ currCoinLangFun("lock_record") }}</h2>

      <div class="assets-table fit-background">
        <el-table v-loading="requestStatus" :data="tableData" style="width: 100%">
          <el-table-column prop="title" :label="currCoinLangFun('project_name')" min-width="210">
          </el-table-column>
          <el-table-column prop="rate_year" :label="currCoinLangFun('year_annualized_rate')" min-width="108"
            align="center">
            <template slot-scope="scope">
              <div>
                <span>{{ computedrateYear(scope.row.rate_year || 0) }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="day" :label="currCoinLangFun('coin_deposit_period_day')" min-width="108" align="center">
          </el-table-column>
          <el-table-column prop="buy_cou" :label="currCoinLangFun('num_deposit_coin')" min-width="148" align="center">
            <template slot-scope="scope">
              <div>
                <span>{{ transferNumber(scope.row.buy_cou || 0)
                                  }}{{ ` ${scope.row.coin_name}` }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="profit" :label="currCoinLangFun('profit_by_end')" min-width="168" align="center">
            <template slot-scope="scope">
              <div>
                <span style="color: #22a87b">{{ transferNumber(scope.row.profit || 0) }}
                  {{ ` ${scope.row.coin_name}` }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="coin_cou" :label="`${currCoinLangFun(
                        'interest_accrual_time'
                      )}/${currCoinLangFun('unlocking_time')}`" min-width="138">
            <template slot-scope="scope">
              <p>{{ scope.row.interest_start_time }}</p>
              <p>{{ scope.row.unlock_time }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" :label="currCoinLangFun('operation_time', 'all')" min-width="128">
            <template slot-scope="scope">
              <p>
                {{
                                scope.row.create_time
                                ? scope.row.create_time.slice(0, -3)
                                : "--"
                                }}
              </p>
            </template>
          </el-table-column>
          <el-table-column prop="order_status" :label="currCoinLangFun('orders_table_state', 'full')" min-width="85"
            align="right">
            <template slot-scope="scope">
              <div>
                <span :style="{
                                    color:
                                      scope.row.order_status == '0' ? '#db3a35' : '#22a87b',
                                  }">{{ showStatus(scope.row) }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :page-size="pageInfo.size" :pager-count="7" layout="prev, pager, next" :total="total"
          :current-page.sync="pageInfo.current" @current-change="getWealthCbjlListFun()">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getWealthCbjlListApi } from "@/api/finance.js";
import { getDicTableData } from "@/api/system.js";
import { toThousands, toNorounded } from "@/util/util.js";

export default {
  data() {
    return {
      tableData: [],
      requestStatus: false, //加载状态
      typeList: [],
      pageInfo: {
        current: "1",
        size: "10",
      },
      total: 0,
    };
  },
  created() {
    this.getWealthCbjlListFun();
    this.getDicTableDataFun("wealth_order_status");
  },
  methods: {
    currCoinLangFun(code, type = "coin_treasure") {
      return this.coinLangFun(type, code);
    },
    //获取存币宝记录
    getWealthCbjlListFun() {
      this.requestStatus = true;
      this.tableData = [];
      let params = {
        ...this.pageInfo,
      };
      getWealthCbjlListApi(params)
        .then((res) => {
          this.tableData = res.data.data.records.map((item) => {
            if (item.title.indexOf("return") != -1) {
              item.title = this.dataCoinLangFun("title", item);
            }
            return item;
          });
          this.total = res.data.data.total;
          this.requestStatus = false;
        })
        .catch(() => {
          this.requestStatus = false;
        });
    },
    showStatus(obj) {
      let value = obj.order_status;
      if (value) {
        let filterArr = this.typeList.filter((item) => item.value == value);
        if (filterArr[0]) {
          return filterArr[0].label;
        } else {
          return value;
        }
      } else {
        return "";
      }
    },
    computedrateYear(value) {
      if (value) {
        return Number(value) * 100 + `%`;
      } else {
        return "0";
      }
    },
    //数值转换
    transferNumber(value) {
      if (value) {
        let str = toNorounded(Number(value), 8);
        return `${toThousands(str)}`;
      } else {
        return "0";
      }
    },
    //类型列表
    getDicTableDataFun(code) {
      getDicTableData(code).then((res) => {
        this.typeList = res.data.data;
      });
    },
  },
};
</script>


<style lang="scss" scoped>
// ::v-deep.assets-table {
//   .el-table__header {
//     thead tr th .cell {
//       color: #9bb4cc;

//       .ascending {
//         border-bottom-color: #9bb4cc;
//       }
//       .descending {
//         border-top-color: #9bb4cc;
//       }
//     }
//     thead tr th.ascending {
//       .ascending {
//         border-bottom-color: #0020FD !important;
//       }
//     }

//     thead tr th.descending {
//       .descending {
//         border-top-color: #0020FD !important;
//       }
//     }
//   }

//   tbody {
//     .el-table__row {
//       .success-cell .cell {
//         color: #31ad84;
//       }

//       .error-cell .cell {
//         color: #e04d43;
//       }
//     }
//   }

//   .el-pagination {
//     button {
//       color: #dde3e6 !important;

//       &[disabled] {
//         color: #688199 !important;
//       }
//     }
//     ul.el-pager li {
//       &.number {
//         color: #dde3e6 !important;
//       }
//       &.number.active {
//         color: #0020FD !important;
//       }
//     }
//   }
// }

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
</style>

<style lang="scss"  >
.deposit-record {
  padding-top: 15px;

  .main-content {
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1200px;

    .nav {
      margin-bottom: 24px;
    }
  }

  .text-center {
    text-align: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-box {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
}
</style>

<style lang="scss">
// .theme-daytime {
//   ::v-deep.assets-table {
//     .el-table__header {
//       thead tr th .cell {
//         color: #4e6073;

//         .ascending {
//           border-bottom-color: #4e6073;
//         }
//         .descending {
//           border-top-color: #4e6073;
//         }
//       }

//       thead tr th.ascending {
//         .ascending {
//           border-bottom-color: #2271e6 !important;
//         }
//       }

//       thead tr th.descending {
//         .descending {
//           border-top-color: #2271e6 !important;
//         }
//       }
//     }

//     tbody {
//       .el-table__row {
//         .success-cell .cell {
//           color: #31ad84;
//         }

//         .error-cell .cell {
//           color: #e04d43;
//         }
//       }
//     }

//     .el-pagination {
//       button {
//         color: #10171f !important;

//         &[disabled] {
//           color: #7e92a6 !important;
//         }
//       }
//       ul li {
//         &.number {
//           color: #10171f !important;
//         }
//         &.number.active {
//           color: #2271e6 !important;
//         }
//       }
//     }
//   }

//   .el-pagination {
//     button {
//       color: #10171f !important;

//       &[disabled] {
//         color: #7e92a6 !important;
//       }
//     }
//     ul li {
//       &.number {
//         color: #10171f !important;
//       }
//       &.number.active {
//         color: #2271e6 !important;
//       }
//     }
//   }
// }

// .theme-night {
//   .el-pagination {
//     button {
//       color: #dde3e6 !important;

//       &[disabled] {
//         color: #688199 !important;
//       }
//     }
//     ul.el-pager li {
//       &.number {
//         color: #dde3e6 !important;
//       }
//       &.number.active {
//         color: #0020FD !important;
//       }
//     }
//   }
// }
</style>