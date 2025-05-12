<template>
  <div class="table_box">
    <!-- {{ data }}--data -->
    <el-table
      :data="data.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      style="width: 100%"
    >
      <el-table-column :label="$t('assets.transacPairs')" align="left">
        <template slot-scope="scope">
          <span
            >{{ scope.row.coinSymbol.toUpperCase() }}/{{
              scope.row.baseSymbol.toUpperCase()
            }}
          </span>
          <span v-if="Number(scope.row.betContent)" class="rise">{{
            $t("trade.buyRise")
          }}</span>
          <span v-else class="fall"> {{ $t("trade.buyFall") }} </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="openPrice"
        :label="$t('assets.openPrice')"
        align="center"
      >
      </el-table-column>

      <el-table-column
        :label="$t('assets.num')"
        align="center"
        prop="betAmount"
      >
      </el-table-column>

      <el-table-column :label="$t('assets.profitAndLoss')" align="center">
        <template slot-scope="scope">
          <span
            :class="
              profitAndlossColor(scope.row.rewardAmount, scope.row.betAmount)
            "
            >{{
              (
                parseFloat(scope.row.rewardAmount) -
                parseFloat(scope.row.betAmount)
              ).toFixed(2)
            }}
            {{ scope.row.baseSymbol.toUpperCase() }}</span
          >
        </template>
      </el-table-column>
      <el-table-column :label="$t('assets.createTime')" align="center">
        <template slot-scope="scope">
          <span>{{
            formatTimestampWithTimezone(
              scope.row.params.createTime,
              "DD/MM/YYYY HH:mm",
              true
            )
          }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('assets.time')" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}s</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('trade.closeTime')"
        prop="closeTime"
        align="right"
      >
        <template slot-scope="scope">
          <span>{{
            formatTimestampWithTimezone(
              scope.row.closeTime,
              "DD/MM/YYYY HH:mm",
              true
            )
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="closePrice"
        :label="$t('trade.closePrice')"
        align="right"
      >
      </el-table-column>
    </el-table>

    <div style="margin-top: 30px">
      <el-pagination
        align="center"
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="data.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  components: {},
  data() {
    return {
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示条数
      // total: 100, // 总条数，根据实际情况设置
    };
  },
  computed: {},
  watch: {},
  methods: {
    profitAndlossColor(betAmount, rewardAmount) {
      const a = parseFloat(betAmount);
      const b = parseFloat(rewardAmount);
      if (a > b) {
        return "rise";
      }
      if (a === b) {
        return "";
      }
      if (a < b) {
        return "fall";
      }
    },
    // handleSizeChange(val) {
    //   // 每页条数改变时触发
    //   this.pageSize = val;
    //   // this.fetchData(); // 重新加载数据
    //   this.$emit("fetchData");
    // },
    handleCurrentChange(val) {
      // 当前页码改变时触发
      this.currentPage = val;
      //this.$emit("fetchData");
      // this.fetchData(); // 重新加载数据
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
::v-deep.el-table {
  font-size: 12px;
}
//@import url(); 引入公共css类
.table_box {
  width: 100%;
}
</style>
