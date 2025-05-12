<template>
  <div class="table_box">
    <el-table :data="data" style="width: 100%">
      <el-table-column :label="$t('assets.transacPairs')" align="left">
        <template slot-scope="scope">
              <span
                >{{ scope.row.symbol.toUpperCase() }}/{{
                  scope.row.baseSymbol
                    ? scope.row.baseSymbol.toUpperCase()
                    : "USDT"
                }}
              </span>
              <span v-if="!scope.row.type" class="rise">{{
                $t("trade.goingLong")
              }}</span>
              <span v-else class="fall"> {{ $t("trade.openAir") }} </span>
              <span> {{ scope.row.leverage }}x</span>
            </template>
      </el-table-column>
      <el-table-column :label="$t('trade.status')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status ? $t("trade.dealTotol") : $t("trade.waitDeal") }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.totalAmountEntrusted')" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.openNum }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.entrustedValue')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.entrustmentValue }} USDT</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.commissPrice')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.openPrice }} USDT</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.closeRate')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.dealPrice }} USDT</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.serviceCharge')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sellFee }} USDT</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.profitRate')" align="center">
        <template slot-scope="scope">
          <span :class="[_isRFDE(yieldHisValue(scope.row))]"
            >{{ yieldHisValue(scope.row) }}%</span
          >
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.profit')" align="center">
        <template slot-scope="scope">
          <span :class="[_isRFDE(scope.row.earn)]"
            >{{ formatFixed(scope.row.earn, 4) }} USDT</span
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { _add, _sub, _div, _toFixed, _mul } from "@/util/decimal";
export default {
  props: {
    data: Array,
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    /**
     * 历史收益率
     * earn / adjustAmount * 100
     */
    yieldHisValue() {
      return function (item) {
        // console.log("item=44444444444====>", item);
        let price = _mul(_div(item.earn, item.adjustAmount), 100);
        // rxce 收益率=收益/保证金/杠杆
        if (false) {
          price = _div(price, item.leverage);
        } else if (0 == 1) {
          // 收益率=收益/委托价值/杠杆
          price = _mul(
            _div(_div(item.earn, item.entrustmentValue), item.leverage),
            100
          );
        }
        return _toFixed(price, 4);
      };
    },
  },
  watch: {},
  methods: {
    formatFixed(value) {
      return _toFixed(value, 4);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
::v-deep.el-table {
  font-size: 12px;
}
</style>
