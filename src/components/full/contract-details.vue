<template>
  <!-- 历史委托-详情 -->
  <el-dialog
    :close-on-click-modal="false"
    title
    :visible.sync="dialog"
    width="800px"
    custom-class="history-entrust-dialog"
  >
    <div slot="title" class="title-box fit-tc-primary">
      <span style="font-weight: 700; font-size: 16px; line-height: 24px">{{
        orderHistoryData.symbol
      }}</span>
      <span
        style="
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          padding-left: 4px;
        "
        >{{ currCoinLangFun("transaction_details") }}</span
      >
      <span class="box-line"></span>
      <span
        style="font-size: 12px; line-height: 16px; margin-right: 16px"
        :class="orderHistoryData.className"
        >{{ orderHistoryData.directionText }}</span
      >
      <span style="font-size: 12px; line-height: 16px" class="fit-tc-tip">{{
        orderHistoryData.zt
      }}</span>
      <span class="box-line"></span>
      <span style="font-size: 12px; line-height: 16px">{{
        orderHistoryData.completedTime
      }}</span>
    </div>
    <div class="history-entrust-box fit-tc-primary">
      <div class="content-title flex-box fit-tc-border-color">
        <div class="title-item">
          <span class="fit-tc-tip" style="padding-right: 8px">{{
            currCoinLangFun("cw_text", "move_contract")
          }}</span>
          <span>{{
            contractUnit == "coin"
              ? orderHistoryData.coin_cj_cjl
              : orderHistoryData.base_cj_cjl
          }}</span>
        </div>
        <div class="title-item">
          <span class="fit-tc-tip" style="padding-right: 8px">{{
            currCoinLangFun("cwjz_text", "move_contract")
          }}</span>
          <span>{{ orderHistoryData.base_cj_cjl }}</span>
        </div>
        <div class="title-item">
          <span class="fit-tc-tip" style="padding-right: 8px">{{
            currCoinLangFun("orders_table_deal_both_price", "full")
          }}</span>
          <span
            >{{ orderHistoryData.successPrice }}
            {{
              contractType == "ubw" ? orderHistoryData.frozen_symbol : ""
            }}</span
          >
        </div>
      </div>
      <div class="content-table">
        <el-table
          :data="orderHistoryData.tableData"
          style="width: 100%"
          size="mini"
        >
          <el-table-column
            v-for="(item, index) in tableColumn"
            :key="item.id + '_' + index"
            v-bind="item"
            :show-overflow-tooltip="true"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    contractUnit: String,
    orderHistoryData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      dialog: false,
      tableColumn: [
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          width: "138",
          prop: "completedTime",
          align: "left",
        },
        {
          label: this.currCoinLangFun("table_coin_price", "exchange"), //价格
          minWidth: "146",
          prop: "successPrice",
          align: "left",
        },
        {
          label: this.currCoinLangFun("table_coin_num", "exchange"), //数量
          minWidth: "146",
          prop: "coin_cj_cjl",
          align: "left",
        },
        {
          label: this.currCoinLangFun("text_total_ze", "exchange"), //总额
          minWidth: "146",
          prop: "base_cj_cjl",
          align: "left",
        },
        {
          label: this.currCoinLangFun("service_charge", "all"), //手续费
          minWidth: "144",
          prop: "fee_balance",
          align: "right",
        },
      ],
    };
  },
  methods: {
    currCoinLangFun(code, type = "entrust") {
      return this.coinLangFun(type, code);
    },
  },
};
</script>

<style lang="scss">
.history-entrust-dialog {
  padding-bottom: 100px;
  .title-box {
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  .box-line {
    width: 1px;
    height: 16px;
    display: block;
    margin-left: 16px;
    margin-right: 16px;
  }
  .content-title {
    margin: 0 16px;
    padding-bottom: 24px;
    border-bottom: 1px solid;
    .title-item {
      margin-right: 24px;
      .fit-tc-tip {
        margin-left: 8px;
      }
    }
  }
  .content-table {
    margin-top: 16px;
    .el-table {
      .el-table__header-wrapper {
        th {
          border: 0;
          font-weight: 400;
        }
      }
    }
  }
}
</style>