<template>
  <div class="assets_detail_box">
    <div class="content_box flex-colum-between">
      <div class="title bold">{{$t("assets.assetsDetail")}}</div>
      <div class="table_detail">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            align="center"
            prop="symbol"
            :label="$t('assets.coinType')"
            width="120"
          >
            <template slot-scope="scope">
              <div style="height: 40px; line-height: 40px">
                {{ scope.row.symbol.toUpperCase() }}
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="availableAmount" :label="$t('assets.canUse')">
            <template slot-scope="scope">
              <div style="height: 40px; line-height: 40px">
                {{ scope.row.availableAmount }}
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="occupiedAmount" :label="$t('assets.occupation')">
            <template slot-scope="scope">
              <div style="height: 40px; line-height: 40px">
                {{ scope.row.occupiedAmount }}
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="exchageAmount" :label="$t('assets.Equivalent')">
            <template slot-scope="scope">
              <div style="height: 40px; line-height: 40px">
                {{ scope.row.exchageAmount.toFixed(2) }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    // showBtnSet: Boolean,
  },
  data() {
    return {
      // tableData: [
      //   {
      //     coinType: "2016-05-02",
      //     used: "王小虎",
      //     occup: "上海市普陀区金沙江路 1518 弄",
      //     Equi: "11111",
      //   },
      //   {
      //     coinType: "2016-05-02",
      //     used: "王小虎",
      //     occup: "上海市普陀区金沙江路 1518 弄",
      //     Equi: "11111",
      //   },
      //   {
      //     coinType: "2016-05-02",
      //     used: "王小虎",
      //     occup: "上海市普陀区金沙江路 1518 弄",
      //     Equi: "11111",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.assets_detail_box {
  padding-top: 40px;
}
.content_box {
  width: 1200px;
  // height: 400px;
  margin: auto;
  .title {
    font-size: 22px;
    color: #1e2329;
  }
  .table_detail {
    font-size: 16px;
    margin-top: 40px;
  }
}
</style>
