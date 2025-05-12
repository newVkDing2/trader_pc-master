<template>
  <div class="rate-main">
    <div class="rate-main__title">
      <!-- 费率介绍      -->
      {{ currCoinLangFun("account") }}
    </div>
    <div
      class="content-tabs fit-background fit-tc-tip fit-tabs fit-tc-border-color el-table-border-color"
    >
      <el-tabs class="fit-tc-tip" v-model="tabsValue" type="card">
        <el-tab-pane
          v-for="item in tabsData"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="fit-background">
      <el-table :data="list">
        <el-table-column
          v-for="(item, index) in tableColumn"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  getExchangeContractFee,
  getExchangeSpotFee,
  getWithdrawFee,
} from "@/api/rate";
import { toNorounded } from "@/util/util";
export default {
  data() {
    return {
      tabsValue: "hy",
      tabsData: [
        {
          label: "合约交易手续费",
          value: "hy",
          code: "optional",
        },
        {
          label: "现货手续费",
          value: "xh",
          code: "spot_goods",
        },
        {
          label: "提现手续费",
          value: "tx",
          code: "contract",
        },
      ],
      list: [],
    };
  },
  computed: {
    tableColumn() {
      switch (this.tabsValue) {
        case "hy":
          return [
            {
              label: "交易对",
              minWidth: "134",
              prop: "symbol_name",
              align: "center",
            },
            {
              label: "开仓平仓滑点",
              minWidth: "134",
              prop: "open_hd",
              align: "center",
            },
            {
              label: "开仓手续费",
              minWidth: "134",
              prop: "open_fee",
              align: "center",
            },
            {
              label: "平仓手续费",
              minWidth: "134",
              prop: "close_fee",
              align: "center",
            },
            {
              label: "持仓手续费",
              minWidth: "134",
              prop: "close_fee",
              align: "center",
            },
          ];
        case "xh":
          return [
            {
              label: "交易对",
              minWidth: "134",
              prop: "symbol_name",
              align: "center",
            },
            {
              label: "Maker",
              minWidth: "134",
              prop: "buy_fee",
              align: "center",
            },
            {
              label: "Taker",
              minWidth: "134",
              prop: "sell_fee",
              align: "center",
            },
          ];
        case "tx":
          return [
            {
              label: "主网类型",
              minWidth: "134",
              prop: "chain_type",
              align: "center",
            },
            {
              label: "提币手续费",
              minWidth: "134",
              prop: "withdraw_fee",
              align: "center",
            },
            {
              label: "最小提币量",
              minWidth: "134",
              prop: "withdraw_min",
              align: "center",
            },
          ];
        default:
          return [];
      }
    },
  },
  watch: {
    tabsValue() {
      this.list = [];
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  methods: {
    currCoinLangFun(code, type = "login_and_register") {
      console.log("11111111111===>", this.coinLangFun(type, code));
      return this.coinLangFun(type, code);
    },
    async getData() {
      let data = [];
      switch (this.tabsValue) {
        case "hy": {
          const res = await getExchangeContractFee(1);
          data = res.data.data.map((item) => {
            return {
              ...item,
              open_hd: toNorounded(+item.open_hd * 100, 4) + "%",
              open_fee: toNorounded(+item.open_fee * 100, 4) + "%",
              close_fee: toNorounded(+item.close_fee * 100, 4) + "%",
            };
          });
          break;
        }
        case "xh": {
          const res = await getExchangeSpotFee();
          data = res.data.data.map((item) => {
            return {
              ...item,
              buy_fee: toNorounded(+item.buy_fee * 100, 4) + "%",
              sell_fee: toNorounded(+item.sell_fee * 100, 4) + "%",
            };
          });
          break;
        }
        case "tx": {
          const res = await getWithdrawFee();
          data = res.data.data.map((item) => {
            return {
              ...item,
              withdraw_fee: toNorounded(+item.withdraw_fee * 100, 4) + "%",
            };
          });
          break;
        }
        default:
          data = [];
      }
      this.list = data;
      console.log(this.list);
    },
  },
};
</script>

<style lang="scss" scoped>
.rate-main {
  width: 1200px;
  margin: auto;
  padding: 0 0 100px;

  &__title {
    padding: 80px 0;
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
  }

  .content-tabs {
    ::v-deep.el-tabs {
      .el-tabs__header {
        padding: 0 24px;
        border: none;

        &::before {
          height: 1px;
        }
      }

      .el-tabs__nav {
        border: none;
      }

      .el-tabs__item {
        font-size: 16px;
        line-height: 18px;
        padding: 24px 12px 28px;
        height: 70px;
        border: none;

        &.is-active::after {
          width: 20px;
          height: 5px;
        }
      }

      .el-tabs__nav-wrap::after {
        height: 1px;
      }
    }
  }
}
</style>
