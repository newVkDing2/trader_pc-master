<template>
  <div class="fit-background history-deposit-box">
    <div class="article-border searchBox">
      <el-select v-model="tableSearchData.coinId" filterable :placeholder="currCoinLangFun('text_all_currency')"
        class="coinName" popper-class="fit-background-select option-coin-name">
        <template #prefix>
          <span style="padding-left: 5px">
            <i class="el-icon-search"></i>
          </span>
        </template>
        <el-option v-for="item in coinData" :key="item.id" :label="item.symbol" :value="item.id">
          <div>
            <img :src="item.avatar" v-if="item.avatar" alt />
            <span :class="{ 'fit-tc-primary': item.id !== tableSearchData.coinId }">{{ item.symbol }}</span>
            <span class="fit-tc-tertiary" v-if="item.full_name">
              {{ item.full_name }}
            </span>
          </div>
        </el-option>
      </el-select>

      <!--      <el-select-->
      <!--        v-model="tableSearchData.type"-->
      <!--        :placeholder="currCoinLangFun('orders_table_all_state', 'full')"-->
      <!--        class="status"-->
      <!--        popper-class="fit-background-select"-->
      <!--      >-->
      <!--        <el-option-->
      <!--          v-for="item in status"-->
      <!--          :key="item.value"-->
      <!--          :label="item.label"-->
      <!--          :value="item.value"-->
      <!--        ></el-option>-->
      <!--      </el-select>-->
    </div>
    <div class="assets-table">
      <el-table v-loading="requestStatus" :data="valuationData" style="width: 100%">
        <el-table-column :show-overflow-tooltip="true" prop="chain_type" :label="currCoinLangFun('chain_type_unsupport')"
          width="90"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="coin_symbol"
          :label="currCoinLangFun('orders_table_coin', 'full')" width="80"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="amount" :label="currCoinLangFun('entrust_money', 'full')"
          min-width="60" align="right"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="completion_time"
          :label="currCoinLangFun('receipt_amount_date')" width="150" align="right"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="block_num" :label="currCoinLangFun('block_height')"
          width="120" align="right"></el-table-column>
        <el-table-column prop="address" :label="currCoinLangFun('address', 'all')" align="left" min-width="150">
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
        <el-table-column prop="hash" :label="currCoinLangFun('hash')" align="left" min-width="150">
          <template slot-scope="scope">
            <div v-if="scope.row.hash">
              <span>{{ scope.row.hash }}</span>
              <!-- <i
                  class="el-icon-link a-theme"
                  style="font-size: 14px; cursor: pointer; padding: 0 4px"
              ></i>-->
              <i class="el-icon-copy-document a-theme" style="font-size: 14px; cursor: pointer; padding: 0 4px"
                @click="copy(scope.row.hash)"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="log_status"
          :label="currCoinLangFun('orders_table_state', 'full')" width="60" align="center">
          <template slot-scope="scope">
            <div>
              <span>{{ showStatus(scope.row.log_status) }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page="currPage" @current-change="pageChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { getRechargeLog } from "@/api/user.js";
import { getDicTableData, getDataApi } from "@/api/system.js";
import { toThousands } from "@/util/util";
export default {
  data() {
    return {
      requestStatus: false, //请求状态
      tableSearchData: {
        coinId: "",
        // type: "",
      },
      valuationData: [],
      total: 1,
      pageSize: 10,
      currPage: 1,
      coinData: [
        {
          id: "",
          symbol: this.currCoinLangFun("text_all_currency"), //全部币种
        },
      ],
      status: [
        {
          value: "",
          label: this.currCoinLangFun("orders_table_all_state", "full"), //全部状态
        },
      ], //状态
    };
  },
  created() {
    this.getRechargeLogFun();

    getDicTableData("wallet_history_status").then((res) => {
      this.status = this.status.concat(res.data.data);
    });
    getDataApi("1531180815470080002", { pageSize: "-521", order: "asc" }).then(
      (res) => {
        this.coinData = this.coinData.concat(res.data.data.records);
      }
    );
  },
  watch: {
    tableSearchData: {
      handler(newVal) {
        this.getRechargeLogFun();
      },
      deep: true,
    },
  },
  methods: {
    currCoinLangFun(code, type = "order") {
      return this.coinLangFun(type, code);
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key);
          //while循环替换相同的key
          while (keyIndex >= 0) {
            text = text.replace(item.key, item.value || "");
            keyIndex = text.indexOf(item.key);
          }
        });
      }

      return text;
    },
    pageChange(page) {
      // 切换分页
      this.currPage = page;
      this.getRechargeLogFun();
    },
    showStatus(value) {
      if (value) {
        let filterArr = this.status.filter((item) => item.value == value);
        if (filterArr.length) {
          return filterArr[0].label;
        } else {
          return value;
        }
      } else {
        return "";
      }
    },
    getRechargeLogFun() {
      this.requestStatus = true;
      this.valuationData = [];
      getRechargeLog({
        current: this.currPage,
        size: this.pageSize,
        ...this.tableSearchData,
      })
        .then((res) => {
          this.valuationData = res.data.data.records.map((item) => {
            item.amount = toThousands(item.amount);
            return item;
          });
          this.total = res.data.data.total;
          this.requestStatus = false;
        })
        .catch(() => {
          this.requestStatus = false;
        });
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

.history-deposit-box {
  .searchBox {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;

    ::v-deep.el-select {
      box-sizing: border-box;

      input.el-input__inner {
        height: 32px !important;
      }

      &.coinName {
        width: 180px;

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

      &.status {
        width: 120px;
        margin-left: 8px !important;

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

  ::v-deep.assets-table {
    padding: 0 12px;

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
.theme-night {
  .history-deposit-box {
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
  }

  .assets-bot {
    .assets-bot-top {
      .box-switch-green {
        border-color: #262d38;
        background: linear-gradient(270deg, transparent, #636363);

        .box-switch_content {
          background-color: #384252;
          border-color: #384252;
        }
      }
    }
  }
}

.theme-daytime {
  .history-deposit-box {
    ::v-deep.assets-table {
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
  }
}
</style>
