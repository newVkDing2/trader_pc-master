<template>
  <div class="table_box">
    <el-table :data="data" style="width: 100%">
      <el-table-column :label="$t('assets.transacPairs')" align="left">
        <template slot-scope="scope">
          <span
            >{{ scope.row.symbol.toUpperCase() }}/{{
              scope.row.baseSymbol ? scope.row.baseSymbol.toUpperCase() : "USDT"
            }}
          </span>
          <span v-if="!scope.row.type" class="rise">{{
                $t("trade.goingLong")
              }}</span>
              <span v-else class="fall"> {{ $t("trade.openAir") }} </span>
          <span> {{ scope.row.leverage }}x</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.commissTime')" align="center">
        <template slot-scope="scope">
          <span>
            {{
              formatTimestampWithTimezone(
                scope.row.params.createTime || scope.row.createTime,
                "DD/MM/YYYY HH:mm",
                true
              )
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.commissType')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.lossType == 1 ? $t('trade.stopLoss') : $t('trade.stopProfit') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.totalAmountEntrusted')" align="center">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.lossType ? scope.row.loseNumber : scope.row.earnNumber
            }}
            {{
              scope.row.showCoin
                ? scope.row.showCoin
                : scope.row.symbol.toUpperCase()
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.commissPrice')" align="center">
        <template slot-scope="scope">
          <span :class="scope.row.delegateType ? 'colorBlue' : ''" class='num_Bold'  >
            {{
              scope.row.delegateType
                ? $t('trade.marketOrder')
                : scope.row.loseDelegatePrice + " USDT"
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.triggerPrice')" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.lossType ? scope.row.losePrice : scope.row.earnPrice }}
            USDT
          </span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.operate')" align="center">
        <template slot-scope="scope">
          <span>
            <el-button
              type="primary"
              @click="$emit('stoplossBullshit', scope.row.id)"
              >{{ $t("trade.cancelOrder") }}</el-button
            >
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
::v-deep.el-table {
  font-size: 12px;
}
.colorBlue{
  color:#138a5d;
}
</style>
