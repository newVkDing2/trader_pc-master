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
      <div class="table_content" v-if="orderTabsValue == 'cuwei'">
        <el-table :data="curOrderTableData" style="width: 100%">
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

          <el-table-column :label="$t('assets.curPrice')" align="center">
            <template slot-scope="scope">
              <span>
                {{ coinPriceInfo.close }}
                {{
                  scope.row.baseSymbol ? scope.row.baseSymbol.toUpperCase() : ""
                }}</span
              >
            </template>
          </el-table-column>

          <el-table-column :label="$t('assets.num')" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.betAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('assets.profitAndLoss')" align="center">
            <template slot-scope="scope">
              <span
                :class="
                  profitAndlossColor(
                    scope.row.betAmount,
                    scope.row.rewardAmount
                  )
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
          <el-table-column :label="$t('assets.countdown')" align="right">
            <template slot-scope="scope">
              <span>{{ formatTime(countDown) }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 历史委托 -->
      <div class="table_content" v-else>
        <tableData  :data="hisOrderTableData"  @fetchData="fetchData"  ></tableData>
        <!-- <el-table :data="hisOrderTableData" style="width: 100%">
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
                  profitAndlossColor(
                    scope.row.rewardAmount,
                    scope.row.betAmount
                  )
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
        </el-table> -->
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
import tableData  from '../tableData.vue'
export default {
  props: {
    curOrderTableData: Array, //当前委托订单详情列表
    hisOrderTableData: Array, //历史委托订单详情列表
    coinInfo: Object, //币种信息
    coinPriceInfo: Object, //币种价格信息
    countDown: Number,
  },
  components: {tableData},
  data() {
    return {
      //   orderList: [
      //     {
      //       label: "assets.curCommis",
      //       name: "cuwei",
      //     },
      //     {
      //       label: "assets.historyCommis",
      //       name: "hiswei",
      //     },
      //   ], //订单tab
      orderTabsValue: "cuwei", //订单默认tab值
      checked: false, //是否隐藏其他交易队单选框
    };
  },
  computed: {
    orderList() {
      return [
        {
          label:
            this.$t("assets.curCommis") +
            "(" +
            this.curOrderTableData.length +
            ")",
          name: "cuwei",
        },
        {
          label:
            this.$t("assets.historyCommis") +
            "(" +
            this.hisOrderTableData.length +
            ")",
          name: "hiswei",
        },
      ]; //订单tab
    },
  },
  watch: {},
  methods: {
    // profitAndlossColor(betAmount, rewardAmount) {
    //   const a = parseFloat(betAmount);
    //   const b = parseFloat(rewardAmount);
    //   if (a > b) {
    //     return "rise";
    //   }
    //   if (a === b) {
    //     return "";
    //   }
    //   if (a < b) {
    //     return "fall";
    //   }
    // },
    fetchData(){
      this.$emit("getSecondContractOrder", 1);
    },
    //切换Tab
    orderTabsClick(e) {
      this.orderTabsValue = e.name;
      if (this.orderTabsValue == "cuwei") {
        this.$emit("getSecondContractOrder", 0);
      } else {
        this.$emit("getSecondContractOrder", 1);
      }
    },
    //点击显示隐藏其他交易队
    clickCheckBox(e) {
      if (e) {
        this.$emit("filterSecData", this.orderTabsValue);
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
          this.$emit("getSecondContractOrder", 0);
        } else {
          this.$emit("getSecondContractOrder", 1);
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
