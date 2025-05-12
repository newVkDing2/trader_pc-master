<template>
  <div class="order_main">
    <div class="title bold">{{ $t('loan.loanRecord') }}</div>
    <div class="nav_list flex-start">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/loan' }">{{$t('loan.title')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('loan.loanRecord')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="order_tabs">
      <el-tabs v-model="tabsValue" @tab-click="tabsClick">
        <el-tab-pane
          :key="item.name"
          :label="item.label"
          v-for="item in tabsList"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="order_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="amount" :label="$t('loan.loanAmount')" align="left">
        </el-table-column>
        <el-table-column :label="$t('loan.repayCycle')" align="center" prop="cycleType">
          <!-- <template slot-scope="scope">
              <span>{{ scope.row.minOdds }}%~{{ scope.row.maxOdds }}%</span>
            </template> -->
        </el-table-column>
        <el-table-column :label="$t('loan.dayRate')" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.rate }}%</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('loan.interest')" align="center">
          <template slot-scope="scope">
            <span>{{ formatAmount(scope.row) }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('loan.repayWay')" align="center" prop="repayTypeLabel">
        </el-table-column>
        <el-table-column :label="$t('assets.status')" align="right">
          <template slot-scope="scope">
            <span>{{ formatStatus(scope.row.status) }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('loan.repayTime')" align="right">
          <template slot-scope="scope"  v-if="!(scope.row.status === 0 || scope.row.status === 2)"  >
            {{
              formatTimestampWithTimezone(
                scope.row.params.finalRepayTime,
                "HH:mm MM/DD",
                true
              )
            }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('loan.loanInstit')" align="right">
          <template slot-scope="scope">
            {{ scope.row.tloadProduct.repayOrg }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  countFormat,
  priceFormat,
  _add,
  _sub,
  _div,
  _toFixed,
  _mul,
} from "@/util/decimal";
import { getLoanOrderList } from "@/api/loan";
//   import { redemption } from "@/api/pledge";
import { getRepayType } from "@/api/common";
export default {
  components: {},
  data() {
    return {
      tabsValue: "totol",
      tableData: [],
      dictList: [],
    };
  },
  computed: {
    formatAmount() {
      return function (item) {
        return _mul(_mul(_mul(item.amount, item.rate), item.cycleType), 0.01);
      };
    },
    formatStatus() {
      return function (e) {
        this.mineStatus = e;
        let statusText;
        if (e == 0) {
          statusText = this.$t('loan.pendingReview');
        } else if (e == 1) {
          statusText = this.$t('loan.reviewPass');
        } else if (e == 2) {
          statusText = this.$t('loan.reviewFail');
        } else if (e == 3) {
          statusText = this.$t('loan.settled');
        } else {
          statusText = this.$t('loan.overdue');
        }
        return statusText;
      };
    },
    tabsList() {
      return [
        {
          label: this.$t('loan.totol'),
          name: "totol",
        },
        {
          label: this.$t('loan.pendingReview'),
          name: "0",
        },
        {
          label: this.$t('loan.reviewPass'),
          name: "1",
        },
        {
          label: this.$t('loan.reviewFail'),
          name: "2",
        },
        {
          label: this.$t('loan.settled'),
          name: "3",
        },
        {
          label:this.$t('loan.overdue'),
          name: "4",
        },
      ];
    },
  },
  watch: {
    tableData(newValue) {
      newValue.forEach((item, index) => {
        this.dictList.forEach((itm, idx) => {
          if (item.tloadProduct.repayType == itm.dictValue) {
            item["repayTypeLabel"] = itm.dictLabel;
          }
        });
      });
    },
  },
  methods: {
    tabsClick(e) {
      this.tabsValue = e.name;
      const status = e.name == "totol" ? "" : e.name;
      this.getTableData(status);
    },
    getRepayType() {
      getRepayType({
        t_repay_type: "",
      }).then((res) => {
        if (res.data.code == 200) {
          this.dictList = res.data.data;
          this.getTableData();
        }
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    getTableData(status) {
      getLoanOrderList({
        pageNum: 1,
        pageSize: 20,
        status,
      }).then((res) => {
        if (res.data.code == 200) {
          this.tableData = res.data.rows;
          this.tableData.forEach((item, index) => {
            this.dictList.forEach((itm, idx) => {
              if (item.tloadProduct.repayType == itm.dictValue) {
                item["repayTypeLabel"] = itm.dictLabel;
              }
            });
          });
        }
      });
    },
    //   redeemOrder(id) {
    //     redemption({
    //       id,
    //     }).then((res) => {
    //       if (res.data.code == 200) {
    //         this.$message.success(res.data.msg);
    //         this.getTableData();
    //       }
    //     });
    //   },
  },
  created() {},
  mounted() {
    this.getRepayType();
    //   this.getTableData();
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.bold {
  font-weight: bold;
}
.order_main {
  width: 1200px;
  padding: 60px 0;

  margin: 50px auto;
  .title {
    width: 100%;
    height: 130px;
    //background: blueviolet;
    font-size: 36px;
    //   color: #000;

    border-bottom: 1px solid #d9d9d9;
  }
  .nav_list {
    height: 100px;
    ::v-deep.el-breadcrumb__item {
      font-size: 16px;
      .is-link {
        color: #000;
        font-weight: bold;
      }
    }
  }
  .order_tabs {
    margin-top: 10px;
    ::v-deep.el-tabs {
      .el-tabs__item {
        font-size: 16px;
      }
      //   .el-tabs__active-bar {
      //     height: 3px;
      //   }
    }
  }
  .order_table {
    ::v-deep.el-table {
      font-size: 12px;
      .el-table__empty-block {
        display: none;
      }
    }
  }
}
</style>
