<template>
  <div class="recharge_record_main">
    <div class="recharge_record_title bold">{{ title }}</div>
    <div class="recharge_record_tabs">
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
    <div class="recharge_record_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="serialId"
          :label="$t('assets.orderNum')"
          align="left"
        >
        </el-table-column>
        <el-table-column prop="address" :label="label1" align="center">
        </el-table-column>
        <el-table-column
          prop="type"
          :label="$t('assets.coinType')"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="realAmount" :label="label2" align="center">
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
    </div>
    <el-empty v-if="!total" :description="$t('utils.noData')">
      <template #image>
        <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
      </template>
    </el-empty>
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
import { getRecordList } from "@/api/assets";
// import { param } from "jquery";
// import { set } from "nprogress";
export default {
  props: {
    title: String,
    label1: String,
    label2: String,
    initAllRexharData: Boolean,
    initAllRexharData2: Boolean,
    tableData: Array,
    total: Number,
  },
  data() {
    return {
      pageNum: 1, // 当前页码
      pageSize: 10, // 每页显示条数\
      tabsValue: "totol",
      curStatus: "",
      tabsList: [
        {
          label: "assets.totol",
          name: "totol",
        },
        {
          label: "assets.underReview",
          name: "uderReview",
        },
        {
          label: "assets.reviewPass",
          name: "reviewPass",
        },
        {
          label: "assets.reviewFail",
          name: "reviewFail",
        },
      ],
      tableData2: [],
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄",
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
      ],
    };
  },
  created() {},
  mounted() {
    // this.init();
  },
  watch: {
    initAllRexharData: function (newVal, oldVal) {
      // 在这里处理当 initAllRexharData 的值发生变化时的逻辑
      console.log("initAllRexharData 值发生变化:", newVal);
      if (newVal) {
        this.init();
      }
      // 执行其他逻辑...
    },
    initAllRexharData2: function (newVal, oldVal) {
      // 在这里处理当 initAllRexharData 的值发生变化时的逻辑
      console.log("initAllRexharData2 值发生变化:", newVal);
      if (newVal) {
        this.init();
      }
      // 执行其他逻辑...
    },
  },
  methods: {
    init() {
      // console.log("initAllRexharData==》", this.initAllRexharData);
      setTimeout(() => {
        this.commonEmitGetTable("");
      }, 100);
    },
    handleCurrentChange(val) {
      // 当前页码改变时触发
      this.pageNum = val;
      this.commonEmitGetTable(this.curStatus);
      // this.fetchData(); // 重新加载数据
    },
    tabsClick(tab) {
      console.log("tab=====>", tab);
      this.pageNum = 1;
      let status;
      switch (tab.name) {
        case "totol":
          status = "";
          break;
        case "uderReview":
          status = 0;
          break;
        case "reviewPass":
          status = 1;
          break;
        case "reviewFail":
          status = 2;
          break;

        default:
          status = "";
          break;
      }
      this.curStatus = status;
      this.commonEmitGetTable(status);
    },
    commonEmitGetTable(status) {
      this.$emit("getTableData", {
        param1: status,
        pageNum: this.pageNum,
      });
    },
    // getTableData(status) {
    //   getRecordList(
    //     {
    //       pageNum: 1,
    //       pageSize: 20,
    //       status,
    //     },
    //     this.type
    //   ).then((res) => {
    //     // console.log("充值记录列表===>", res.data.rows);
    //     // this.nowList = res.data.data;
    //     // console.log(res.data, "-------------产品列表:");
    //     this.tableData = res.data.rows;
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.recharge_record_main {
  width: 1200px;
  padding: 60px 0;
  margin: auto;
  .recharge_record_title {
    font-size: 36px;
    color: #1e2329;
  }
  .recharge_record_tabs {
    margin-top: 50px;
    ::v-deep.el-tabs {
      .el-tabs__item {
        font-size: 16px;
      }
      .el-tabs__active-bar {
        height: 3px;
      }
    }
  }
  .recharge_record_table {
    ::v-deep.el-table {
      font-size: 12px;
      .el-table__empty-block {
        display: none;
      }
    }
  }
}
</style>
