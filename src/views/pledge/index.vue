<template>
  <div class="rate-main">
    <div class="order_detail flex-between">
      <div class="trusteeship flex-colum-evenly">
        <p>{{ $t("pledgeIndex.hosting") }}</p>
        <p  >{{ showInfo.amount ||'0.00' }} USDT</p>
      </div>
      <div class="order">
        <div @click="$router.push('/pledge/order')" class="cur_d"  >
          {{ $t("pledgeIndex.orderRecord") }}
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="income flex-around">
      <div class="income_item flex-colum-evenly today_income">
        <p>{{ $t("pledgeIndex.todayIncome") }}</p>
        <p>{{ showInfo.todayProfit ||'0.00' }}</p>
      </div>
      <div class="income_item flex-colum-evenly total_income">
        <p>{{ $t("pledgeIndex.totolIncome") }}</p>
        <p>{{ showInfo.profitMoney ||'0.00' }}</p>
      </div>
      <div class="income_item flex-colum-evenly entrust_order">
        <p>{{ $t("pledgeIndex.commissOrder") }}</p>
        <p>{{ showInfo.orderNum ||0 }}</p>
      </div>
    </div>

    <div class="product flex-box" v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="product_item flex-colum-evenly">
          <div class="product_item_content flex-box">
            <div class="imgBox flex-center">
              <img :src="require('@/assets/image/pic.png')" alt="" />
            </div>
            <div class="content flex-colum-between">
              <div class="top flex-between">
                <div class="perc">
                  {{ item.title }}
                </div>
                <div class="oper_btn">
                  <!-- <el-button type="primary" size="medium">立即参投</el-button> -->
                  {{ $t("pledgeIndex.canBuyNum") }} {{ item.buyPurchase }}/{{
                    item.timeLimit
                  }}
                </div>
              </div>
              <div class="bottom flex-between">
                <div class="flex-colum-evenly">
                  <p>{{ $t("pledgeIndex.limitNum") }}</p>
                  <p>{{ item.limitMin }}~{{ item.limitMax }}</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("pledgeIndex.dayRate") }}</p>
                  <p>{{ item.minOdds + "%" }}~{{ item.maxOdds + "%" }}</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("pledgeIndex.cycle") }}</p>
                  <p>{{ item.days }}</p>
                </div>
              </div>

              <div>
                <el-button
                  type="primary"
                  size="medium"
                  @click="gotoBuy(item)"
                  >{{ $t("pledgeIndex.buyNow") }}</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-empty v-else :description="$t('utils.noData')">
      <template #image>
        <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
      </template>
    </el-empty>

    <div class="intro">
      <div class="intro_titile">
        <!-- {{ introInfo.title }} -->
        {{ $t("pledgeIndex.intro") }}
      </div>
      <div class="content flex-colum-between">
        <div class="title">
          <!-- {{ introInfo.title }} -->
          {{ $t("pledgeIndex.intro") }}
        </div>
        <div class="article" v-html="introInfo.content"></div>
        <div class="time flex-between">
          <p>11</p>
          <p>{{ introInfo.createTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMineList, getPledgeShowInfo, getMineIntro } from "@/api/pledge";
import router from "@/router";
import { toNorounded } from "@/util/util";
import { mapGetters } from "vuex";
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
      showInfo:{},
      introInfo: {},
    };
  },
  computed: {
    ...mapGetters(["language"]),
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
    language(newLanguage, oldLanguage) {
      // 在 language 属性发生变化时执行的逻辑
      console.log(`Language changed from ${oldLanguage} to ${newLanguage}`);
      // 可以在这里执行其他操作，比如重新加载数据或者更新页面内容
      this.getMineIntro();
    },
  },
  created() {
    this.init();
  },
  methods: {
    currCoinLangFun(code, type = "exchange") {
      return this.coinLangFun(type, code);
    },
    init() {
      this.getMineIntro();
      this.getPledgeShowInfo();
      this.getDataList();
    },
    getMineIntro() {
      getMineIntro({
        key: "PLEDGE_EXPLAIN",
      }).then((res) => {
        // this.nowList = res.data.data;
        // console.log(res.data, "-------------profitMoney:");
        this.introInfo = res.data.data[0];
      });
    },
    gotoBuy(item) {
      this.$router.push({
        path: "/pledge/add",
        query: { info: JSON.stringify(item) },
      });
    },
    getPledgeShowInfo() {
      getPledgeShowInfo().then((res) => {
        // this.nowList = res.data.data;
        // console.log(res.data, "-------------profitMoney:");
        if(res.data.code==200){
          this.showInfo = res.data.data;
        }
      });
    },
    getDataList() {
      getMineList().then((res) => {
        // this.nowList = res.data.data;
        console.log(res.data, "-------------产品列表:");
        this.list = res.data.rows;
      });
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
  margin-top: 80px;

  //background: red;
  .order_detail {
    height: 140px;
    //background:blue;
    border-bottom: 1px solid #d9d9d9;

    .trusteeship {
      height: 100%;

      p:nth-child(1) {
        font-size: 20px;
      }

      p:nth-child(2) {
        font-size: 34px;
      }
    }
  }

  .income {
    height: 190px;
    // background:blue;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;

    .income_item {
      height: 100%;

      p:nth-child(1) {
        font-size: 18px;
      }

      p:nth-child(2) {
        font-size: 36px;
      }
    }
  }

  .product {
    width: 100%;
    height: 500px;
    flex-wrap: wrap;
    padding-top: 40px;
    justify-content: space-between;
    //background: blue;
    // gap: 40px;
    // justify-content: space-between;
  }

  .product_item {
    width: 500px;
    height: 210px;
    padding: 0 20px;
    background: #f1f1f1;

    .product_item_content {
      .imgBox {
        flex: 1;

        img {
          width: 60px;
        }
      }

      .content {
        height: 140px;
        //background: red;
        flex: 5;

        .bottom {
          > div {
            height: 70px;
          }
        }
      }
    }

    .invest_item_progress_text {
      // display: inline-block;
    }
  }

  .intro {
    margin-top: 30px;

    .intro_titile {
      font-size: 28px;
      font-weight: bold;
    }

    .content {
      width: 280px;
      height: 100px;
      border: 1px solid #f1f1f1;

      padding: 15px;
      margin-top: 20px;

      .title {
        font-size: 16px;
        font-weight: bold;
      }

      .article {
        height: 33px;
        font-size: 12px;
        overflow: hidden;
      }

      .time {
        font-size: 13px;
      }
    }
  }

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
