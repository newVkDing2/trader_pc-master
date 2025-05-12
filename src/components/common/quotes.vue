<template>
  <div class="exchange-box">
    <!-- <div class="exchange-top-chart"></div> -->
    <!-- <div class="exchange_header_box flex-center">
        <div class="header_inner flex-start">
          <div class="title num_Bold">
            <p>行情</p>
          </div>
        </div>
      </div> -->
    <div class="exchange-content">
      <div class="title num_Bold">{{ $t("user.marketTitle") }}</div>
      <div class="content-tabs">
        <el-tabs class="fit-tc-tip" v-model="tabsValue" @tab-click="tabsClick">
          <el-tab-pane
            v-for="item in tabsData"
            :key="item.value"
            :label="$t(item.label)"
            :name="item.value"
          ></el-tab-pane>
        </el-tabs>
        <!-- <div class="flex-box search_box">
          <el-input v-model="input" placeholder="搜索币种"></el-input>
          <el-button type="primary">搜索</el-button>
        </div> -->
      </div>

      <div class="content-table">
        <el-table :data="tableList" style="width: 100%">
          <el-table-column
            prop="showSymbol"
            :label="$t('user.coinType')"
            align="left"
            width="350"
            sortable
          >
            <template slot-scope="scope">
              <div class="flex-start" style="gap: 10px">
                <img :src="scope.row.logo" alt class="leftImg" width="20px" />
                <div class="fw-bold e2">{{ scope.row.showSymbol }}</div>
              </div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('user.newPrice')" width="370">
            <template slot-scope="scope">
              <div>{{ allCoinPriceInfo[scope.row.coin].close }}</div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('user.riseFallRange')">
            <template slot-scope="scope">
              <div
                :class="[
                  _isRFD(
                    allCoinPriceInfo[scope.row.coin].openPrice,
                    allCoinPriceInfo[scope.row.coin].close
                  ),
                  'rfd-sign rightNum fw-num num_Bold',
                ]"
              >
                {{ allCoinPriceInfo[scope.row.coin].priceChangePercent }}%
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="menu"
            :label="$t('user.operate')"
            align="right"
          >
            <template slot-scope="scope">
              <span
                class="table-btn"
                @click="goDealFun(scope.row, scope.row.coin)"
                >{{ $t("user.transaction") }}</span
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: {
    tableList: Array,
  },
  data() {
    return {
      tabsValue: "miao",
      tabsData: [
        {
          label: "user.selfChoose", //自选
          value: "zx",
          code: "optional",
        },
        {
          label: "user.secondContract", //现货
          value: "miao",
          code: "spot_goods",
        },
        {
          label: "user.spotContract", //现货
          value: "bb",
          code: "spot_goods",
        },
        {
          label: "user.uContract", //合约
          value: "uyue",
          code: "contract",
        },
      ],
      //   tableList: [],
    };
  },
  computed: {
    ...mapGetters([
      "isLogin",
      "allCoinPriceInfo",
      "secondContractCoinList",
      "spotCoinList",
      "contractCoinList",
    ]),
  },
  created() {},
  mounted() {
    // this.getUserCoinApi();
    //this.getCoinList();
    // console.log("allCoinPriceInfo====>", this.allCoinPriceInfo);
    // console.log("秒合约列表数据====>", this.secondContractCoinList);
  },
  methods: {
    // ...mapActions(["getCoinList"]),
    commonEmitGetTable() {
      this.$emit("getTableData");
    },
    // 封装映射逻辑到一个函数中
    getType(tabsValue) {
      const typeMapping = {
        miao: "sec",
        bb: "spot",
        uyue: "usta",
      };
      // 使用函数内部的默认值，确保了函数的独立性和可重用性
      const defaultType = "sec";
      return typeMapping[tabsValue] || defaultType;
    },
    goDealFun(row, symbol) {
      // console.log("row===>", row);
      // console.log("symbol===>", symbol);
      // 在需要的地方调用这个函数
      let type = this.getType(this.tabsValue);
      this.$router.push({
        path: "/trade/index",
        query: {
          type: "sec",
          symbol,
        },
      });
    },
    tabsClick(e) {
      console.log("e====>", e);
      this.tableList = [];
      if (e.name == "zx") {
        this.commonEmitGetTable();
      } else if (e.name == "miao") {
        this.tableList = this.secondContractCoinList;
      } else if (e.name == "bb") {
        this.tableList = this.spotCoinList;
      } else {
        this.tableList = this.contractCoinList;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.exchange-box {
  width: 100%;
  margin-top: 0px;
}

.exchange_header_box {
  width: 100%;
  height: 154px;
  //background: #f1f1f1;

  .header_inner {
    width: 1200px;
    height: 100%;
    margin: auto;

    .title {
      p {
        font-size: 36px;
      }
    }
  }
}

.exchange-content {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
  background: #fafbfe;
  // padding-bottom: 50px;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .content-title-box {
    justify-content: space-between;
    // padding: 20px 0;

    h2 {
      font-size: 48px;
      font-weight: 400;
      padding-left: 36px;
    }

    .search-box {
      width: 360px;

      ::v-deep.el-input__inner {
        height: 46px;
        font-size: 16px;
        line-height: 36px;
      }
    }
  }

  .content-tabs {
    .search_box {
      gap: 20px;
    }

    ::v-deep.el-tabs {
      .el-tabs__header {
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

  .content-type {
    padding: 0 36px;

    .type-xh,
    .type-hy {
      .area-tabs {
        display: flex;
        align-items: center;
        padding-bottom: 16px;

        .tabs-item {
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          border-radius: 2px;
          font-weight: 400;
          padding: 0 12px;
          margin-right: 16px;
          border: 1px solid;
          cursor: pointer;

          &:hover {
            color: #0020fd;
          }

          &.active {
            background-color: #0020fd;
            color: #fff;
            border-color: #0020fd;
          }
        }
      }

      .type-coin {
        display: flex;
        align-items: center;
        padding-bottom: 16px;

        .coin-item {
          padding: 0 14px;
          line-height: 20px;
          font-size: 12px;
          cursor: pointer;
          font-weight: bold;

          &:nth-child(1) {
            padding-left: 0px;
          }
        }
      }

      .type-pry {
        padding-bottom: 16px;
      }
    }
  }

  .content-table {
    // padding: 0 36px 30px;

    ::v-deep.el-table {
      background: #fafbfe;

      th.el-table__cell {
        background: #fafbfe;
      }

      .el-table__header-wrapper {
        th {
          font-weight: 400;
        }
      }

      .el-table__body-wrapper {
        td {
          padding: 16px 0;
          font-size: 14px;
        }
      }
    }

    .table-bzmc {
      display: flex;
      align-items: center;

      .collect-star {
        margin-right: 12px;
        font-size: 16px;
        cursor: pointer;
      }

      img {
        width: 16px;
        height: 16px;
      }

      .title {
        font-weight: bold;
        font-size: 14px;
        margin: 0 4px;
      }

      .pry {
        padding: 2px 4px;
        box-sizing: border-box;
        border-radius: 2px;
        display: inline-flex;
        font-weight: 500;
        line-height: 14px;
        background: rgba(36, 123, 255, 0.1);
        color: #0020fd;
        border: 1px solid #0020fd;
      }
    }

    .table-btn {
      // color: #f5faff;
      // background-color: #0020fd;
      color: #0020fd;
      font-size: 14px;
      padding: 4px 12px;
      line-height: 18px;
      border-radius: 2px;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
