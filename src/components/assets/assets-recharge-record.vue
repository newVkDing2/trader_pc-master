<template>
  <div class="main_box container_box">
    <div class="recharge_record_table">
      <el-table :data="data" style="width: 100%">
        <el-table-column
          prop="serialId"
          :label="$t('assets.orderNum')"
          align="left"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          :label="
            curTab == 'recharge'
              ? $t('assets.rechargeAddress')
              : $t('assets.withdrawAddress')
          "
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          :label="$t('assets.coinType')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="realAmount"
          :label="
            curTab == 'recharge'
              ? $t('assets.rechargeNum')
              : $t('assets.withdraeAmount')
          "
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="updateTime"
          :label="$t('assets.time')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          :label="$t('assets.status')"
          align="right"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.status == 0" style="color: red">
              {{ $t("assets.underReview") }}
            </span>
            <span v-else-if="scope.row.status == 1" style="color: red">
              {{ $t("assets.reviewPass") }}
            </span>
            <span v-else-if="scope.row.status == 2" style="color: green">
              {{ $t("assets.reviewFail") }}
            </span>
            <span v-else>
              {{ scope.row.status }}
            </span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <template #empty>
        <div style="margin-top: 10px">
          <img
            :src="require('@/assets/image/noData.png')"
            alt="Empty Image"
            width="140"
          />
          <p>{{ $t("utils.noData") }}</p>
        </div>
      </template> -->
    </div>

    <div style="margin-top: 30px" v-if="total">
      <el-pagination
        align="center"
        background
        @current-change="handleCurrentChange"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    total: Number,
    curTab: String,
    isSwitchTabs: Boolean,
  },
  components: {},
  data() {
    return {
      pageNum: 1, // 当前页码
      pageSize: 10, // 每页显示条数\
    };
  },
  computed: {},
  watch: {
    isSwitchTabs(val) {
      if (val) {
        this.pageNum = 1;
        // this.$emit("fetchData", this.pageNum);
      }
    },
  },
  methods: {
    handleCurrentChange(val) {
      // 当前页码改变时触发
      this.pageNum = val;
      this.$emit("fetchData", this.pageNum);
      // this.fetchData(); // 重新加载数据
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
