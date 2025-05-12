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
      <el-table-column :label="$t('trade.time')" align="center">
        <template slot-scope="scope">
          <span>
            {{
              formatTimestampWithTimezone(
                scope.row.delegateTime || scope.row.delegateTime,
                "DD/MM/YYYY HH:mm",
                true
              )
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.totalAmountEntrusted')" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.delegateTotal }} {{ scope.row.symbol.toUpperCase() }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.commissPrice')" align="center">
        <template slot-scope="scope">
          <span> {{ scope.row.delegatePrice }} USDT </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('trade.haveDealNum')" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.dealNum ? scope.row.dealNum : "0" }}
            {{ scope.row.symbol.toUpperCase() }}
          </span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.dealAverPrice')" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.dealPrice ? scope.row.dealPrice : "---" }}
          </span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('trade.operate')" align="center">
        <template slot-scope="scope">
          <span>
            <el-button
              type="primary"
              @click="$emit('cancelUstaOrder', scope.row.id)"
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
</style>
