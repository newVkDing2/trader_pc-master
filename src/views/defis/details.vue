<template>
  <div class="main_box">
    <div class="title bold">{{ $t("defiMine.details") }}</div>
    <div class="nav_list flex-start">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/defis/index' }">{{
          $t("defiMine.title")
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t("defiMine.details") }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="order_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column :label="$t('defiMine.time')" align="left">
          <template slot-scope="scope">
            <span>
              {{
                formatTimestampWithTimezone(
                  scope.row.createTimes,
                  "DD/MM/YYYY HH:mm",
                  true
                )
              }}</span
            >
          </template>
        </el-table-column>
        <el-table-column :label="$t('defiMine.income')" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.amount }} ETH</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('defiMine.accountBalance')" align="right">
          <template slot-scope="scope">
            <span>{{ scope.row.totleAmount }} USDT</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { showOrderDetail } from "@/api/defi";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      pageNum: 1,
      pageSize: 20,
      total: 0,
      tableData: [],
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
  },
  watch: {},
  methods: {
    getTableData() {
      const data = `userId=${this.userInfo.user.userId}&pageNum=${this.pageNum}&pageSize=${this.pageSize}&orderByColumn=createTime&isAsc=desc`;
      showOrderDetail(data).then((res) => {
        if (res.data.code == 200) {
          this.tableData = res.data.rows;
          this.total = res.data.total;
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
.main_box {
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
