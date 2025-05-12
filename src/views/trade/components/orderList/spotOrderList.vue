<template>
  <div class="order_list">
    <div class="inner_box">
      <div class="in_tabs_box">
        <div class="in_tabs_inner">
          <el-tabs v-model="orderTabsValue" @tab-click="orderTabsClick">
            <el-tab-pane
              :key="item.name"
              :label="item.label"
              v-for="item in orderList"
              :name="item.name"
            >
            </el-tab-pane>
            <div>
              <el-checkbox v-model="checked" @change="clickCheckBox">{{
                $t("assets.hideOtherPairs")
              }}</el-checkbox>
              <i class="el-icon-refresh-right"></i>
            </div>
          </el-tabs>
        </div>
      </div>
      <!-- 当前委托 -->
      <div class="table_content">
        <!-- {{ orderTabsValue }}--orderTabsValue
        {{ spotOrderObj.hisSpotList }}--hisSpotList -->
        <el-table
          :data="orderTabsValue == 'cuwei' ? curSpotList : hisSpotList"
          style="width: 100%"
        >
          <el-table-column :label="$t('assets.transacPairs')" align="left">
            <template slot-scope="scope">
              <span
                >{{ scope.row.symbol.toUpperCase() }}/{{
                  scope.row.coin.toUpperCase()
                }}
              </span>
              <span v-if="scope.row.type == 1" style="color: red">{{
                $t("trade.sell")
              }}</span>
              <span v-else style="color: green"> {{ $t("trade.buy") }} </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="createTime"
            :label="$t('assets.time')"
            align="center"
          >
          </el-table-column>

          <el-table-column
            :label="$t('trade.commissPrice')"
            align="center"
            prop="delegatePrice"
          >
          </el-table-column>

          <el-table-column
            :label="$t('trade.commissNum')"
            align="center"
            prop="dealNum"
          >
          </el-table-column>
          <el-table-column
            :label="$t('assets.num')"
            align="center"
            prop="delegateTotal"
          >
          </el-table-column>

          <el-table-column
            :label="$t('trade.dealPrice')"
            align="center"
            prop="dealPrice"
          >
          </el-table-column>

          <el-table-column :label="$t('trade.newestPrice')" align="center">
            <template slot-scope="scope">
              <span>{{ allCoinPriceInfo[scope.row.symbol].close }}</span>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('trade.profitRate')"
            align="center"
            prop="dealPrice"
          >
          </el-table-column>

          <el-table-column
            :label="$t('trade.profit')"
            align="center"
            prop="dealPrice"
          >
          </el-table-column>

          <el-table-column
            :label="$t('trade.operate')"
            align="center"
            v-if="orderTabsValue == 'cuwei'"
          >
            <template slot-scope="scope" v-if="scope.row.status == 0">
              <span>
                <el-button
                  type="primary"
                  @click="$emit('cancelSpotOrder', scope.row.id)"
                  >{{ $t("trade.cancelOrder") }}</el-button
                >
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- <el-empty v-if="orderTableData.length == 0" :description="$t('utils.noData')">
          <template #image>
            <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
          </template>
        </el-empty> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curSpotList: Array, //订单详情当前
    hisSpotList: Array, //订单详情历史
    curSpotLen: String,
    hisSpotLen: String,
    allCoinPriceInfo: Object,
  },
  components: {},
  data() {
    return {
      orderTabsValue: "cuwei", //订单默认tab值
      checked: false, //是否隐藏其他交易队单选框
    };
  },
  computed: {
    orderList() {
      return [
        {
          label: this.$t("assets.curCommis") + "(" + this.curSpotLen + ")",
          name: "cuwei",
        },
        {
          label: this.$t("assets.historyCommis") + "(" + this.hisSpotLen + ")",
          name: "hiswei",
        },
      ]; //订单tab
    },
  },
  watch: {},
  methods: {
    //切换Tab
    orderTabsClick(e) {
      this.orderTabsValue = e.name;
      if (this.orderTabsValue == "cuwei") {
        this.$emit("getSpotContractOrder", 0);
      } else {
        this.$emit("getSpotContractOrder", 1);
      }
    },
    //点击显示隐藏其他交易队
    clickCheckBox(e) {
      if (e) {
        this.$emit("filterSpotData", this.orderTabsValue);
        //   if(this.orderTabsValue == "cuwei"){
        //       this.orderTableData = this.orderTableData.filter((item) => {
        //       return item.coinSymbol == "adb";
        //      });
        //      this.$emit('filterSecData', this.orderTabsValue);
        //   }else{
        //      this.orderTableData = this.orderTableData.filter((item) => {
        //       return item.coinSymbol == "btc";
        //      });
        //   }
      } else {
        // console.log("orderTabsValue===>", this.orderTabsValue);
        if (this.orderTabsValue == "cuwei") {
          this.$emit("getSpotContractOrder", 0);
        } else {
          this.$emit("getSpotContractOrder", 1);
        }
      }
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
// @import url("../../index.scss");
.in_tabs_box {
  margin-top: 10px;
  .in_tabs_inner {
    ::v-deep.el-tabs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-tabs__nav-wrap::after {
        height: 0;
      }
      .el-tabs__active-bar {
        display: none;
      }
    }
  }
}
</style>
