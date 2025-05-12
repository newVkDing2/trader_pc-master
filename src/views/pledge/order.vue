<template>
  <div class="order_main">
    <div class="title bold">{{ $t("pledgeOrder.title") }}</div>
    <div class="nav_list flex-start">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/pledge' }">{{
          $t("pledgeAdd.pledgeMining")
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t("pledgeOrder.title") }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="order_tabs">
      <el-tabs v-model="tabsValue" @tab-click="tabsClick">
        <el-tab-pane
          :key="item.name"
          :label="$t(item.label)"
          v-for="item in tabsList"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="order_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="amount"
          :label="$t('assets.investAmount') + '(USDT)'"
          align="left"
        >
        </el-table-column>
        <el-table-column :label="$t('assets.dayRate')" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.minOdds }}%~{{ scope.row.maxOdds }}%</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="days"
          :label="$t('assets.cycle') + '(' + $t('utils.day') + ')'"
          align="center"
        >
        </el-table-column>
        <el-table-column :label="$t('assets.beginTime')" align="center">
          <template slot-scope="scope">
            <span>{{
              formatTimestampWithTimezone(scope.row.params.createTime)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('assets.endTime')" align="center">
          <template slot-scope="scope">
            <span>{{
              formatTimestampWithTimezone(scope.row.params.endTime)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('assets.status')" align="right">
          <template slot-scope="scope">
            <!-- <span v-if="scope.row.status == 0">进行中</span>
                <span v-if="scope.row.status == 1">已完成</span>
                <span v-if="scope.row.status == 2">已赎回</span> -->
            <span>{{ formatStatus(scope.row.status) }}</span>
            <!-- {{ mineStatus }}-mineStatus -->
            <!-- <span>{{mineStatus}}--mineStatus</span> -->
          </template>
        </el-table-column>
        <el-table-column :label="$t('assets.redemption')" align="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="redeemOrder(scope.row.id)"
              v-if="scope.row.status == 0"
              >{{ $t("pledgeOrder.redemption") }}</el-button
            >
            <span v-else>{{ formatStatus(scope.row.status) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getRecordList } from "@/api/assets";
import { redemption } from "@/api/pledge";
export default {
  components: {},
  data() {
    return {
      tabsValue: "totol",
      tableData: [],
    };
  },
  computed: {
    formatStatus() {
      return function (e) {
        this.mineStatus = e;
        let statusText;
        if (e == 0) {
          statusText = this.$t("pledgeOrder.inProgress") ;
        } else if (e == 1) {
          statusText = this.$t("pledgeOrder.completed");
        } else {
          statusText = this.$t("pledgeOrder.redeemed");
        }
        return statusText;
      };
    },
    tabsList() {
      return [
        {
          label: "assets.totol",
          name: "totol",
        },
        {
          label: "assets.inProgress",
          name: "0",
        },
        {
          label: "assets.completed",
          name: "1",
        },
        {
          label: "assets.redeemed",
          name: "2",
        },
      ];
    },
  },
  watch: {},
  methods: {
    tabsClick(e) {
      this.tabsValue = e.name;
      const status = e.name == "totol" ? "" : e.name;
      this.getTableData(status);
    },
    getTableData(status) {
      getRecordList(
        {
          pageNum: 1,
          pageSize: 20,
          status,
        },
        "mingOrder"
      ).then((res) => {
        if (res.data.code == 200) {
          this.tableData = res.data.rows;
        }
      });
    },
    redeemOrder(id) {
      redemption({
        id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getTableData();
        }
      });
    },
  },
  created() {},
  mounted() {
    this.getTableData();
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
