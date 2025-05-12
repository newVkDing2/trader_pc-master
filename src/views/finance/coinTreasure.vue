<template>
  <div class="coinTreasure">
    <div class="top-bg">
      <!-- <div class="text-box">
        <div class="title">
          {{ currCoinLangFun("item_cfgl_cbb_title", "top") }}
        </div>
        <div class="tip">{{ currCoinLangFun("save_coin_top_tip") }}</div>
      </div> -->
    </div>
    <!-- {{ language }}---language -->
    <div class="main-content flex-colum-between">
      <div class="tabs flex-between">
        <div v-for="(item, index) in tabList" :key="index">
          <div
            class="tab_item flex-colum-between"
            @click="clickTabItem(item.type)"
          >
            <div class="imgbox flex-center">
              <!-- <img :src="item.imgUrl" alt=""> -->
              <img src="../../assets/image/invest.png" alt="" />
            </div>
            <div class="textbox">
              {{ $t(item.text) }}
            </div>
          </div>
        </div>
      </div>

      <div class="invest_box flex-between" v-if="dataList.length > 0">
        <div v-for="(item, index) in dataList" :key="index">
          <div
            class="invest_item flex-colum-evenly"
            @click="goToDetail(item.id)"
          >
            <div class="invest_item_title">
              {{ item.title }}
            </div>
            <div class="invest_item_content flex-box">
              <div class="imgBox flex-start">
                <img src="../../assets/image/pic.png" alt="" />
              </div>
              <div class="content flex-colum-between">
                <div class="top flex-between">
                  <div class="perc">
                    {{ item.avgRate + "%" }}
                  </div>
                  <div class="oper_btn">
                    <el-button type="primary" size="medium">{{
                      $t("finance.particNow")
                    }}</el-button>
                  </div>
                </div>
                <div class="bottom flex-between">
                  <div>
                    <p>
                      {{ $t("finance.particAmount") }}
                    </p>
                    <p>{{ item.limitMin }} USDT</p>
                  </div>
                  <div>
                    <p>{{ $t("finance.particLimitAmount") }}</p>
                    <p>{{ item.limitMax }} USDT</p>
                  </div>
                  <div class="lock_days">
                    <p>{{ $t("finance.lockDays") }}</p>
                    <p>{{ item.days }} 天</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="invest_item_progress_text">
                {{ $t("finance.projectProgress") }}
              </div>
              <div class="invest_item_progress">
                <el-progress
                  :percentage="item.process"
                  color="rgb(41, 203, 74)"
                  :stroke-width="8"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <el-empty image="../../assets/image/noData.png" description="暂无数据" v-else></el-empty> -->

      <el-empty v-else :description="$t('utils.noData')">
        <template #image>
          <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
        </template>
      </el-empty>
    </div>

    <!-- <div class="main-content">
      <div class="flex-box flex-wrap">
        <div class="private-coin-treasure_item coin-treasure_item__activ" v-for="(item, index) in nowList" :key="index"
          @click="onClick(item)">
          <div class="storage-plan fit-tc-background">
            <div class="flex-box fit-tc-primary">
              <img class="img" :src="item.coin_avatar" alt />
              <span style="font-weight: 600; margin-right: 8px">{{
                item.coin_name
              }}</span>
              <span>{{ dataCoinLangFun("title", item) }}</span>
            </div>
            <div class="flex-box space-between" style="margin-top: 12px">
              <span class="fit-tc-tertiary" style="margin-left: 32px; font-size: 12px">{{
                currCoinLangFun("flash_buying_cycle") }}</span>
              <span class="fit-tc-primary" style="font-size: 12px">
                {{ item.buy_start_time.slice(5) }} ~
                {{ item.buy_end_time.slice(5) }}
              </span>
            </div>
          </div>
          <div class="storage-yield fit-tc-border-color">
            <div class="flex-box justify-center">
              <div class="s-half text-center">
                <div class="rate">
                  {{ toNorounded(item.rate_year * 100, 2) }}%
                </div>
                <div class="color--grey fit-tc-tertiary">
                  {{ currCoinLangFun("year_annualized_rate") }}
                </div>
              </div>
            </div>
            <div class="storage-ongoing">
              <div style="margin-bottom: 8px">
                <el-progress :percentage="Number(item.total_buy_cou)
                  .myDiv(item.buy_total_cou)
                  .myMul(100)
                  " stroke-width="8" :show-text="false"></el-progress>
              </div>
              <div class="flex-box space-between fit-tc-primary" style="font-size: 12px">
                <span>
                  {{ currCoinLangFun("text_locked") }}
                  <span style="font-weight: 500">{{
                    toThousands(item.total_buy_cou)
                  }}</span>
                </span>
                <span>
                  {{ item.member_cou }}
                  <span style="font-weight: 500">
                    {{ currCoinLangFun("text_peple", "all")
                    }}{{ currCoinLangFun("text_join", "all") }}
                  </span>
                </span>
              </div>
              <div class="snap-btn text-center" :class="{ 'snap-btn-activation': isBuy_fun(item).boolean }">
                {{ isBuy_fun(item).label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="past-projects text-center" v-if="historyList.length > 0">
        <span class="past-projects-text fit-background-di fit-tc-tertiary">
          {{ currCoinLangFun("previous_projects") }}
        </span>
      </div>
      <div class="flex-box flex-wrap">
        <div class="private-coin-treasure_item coin-treasure_item__activ" v-for="(item, index) in historyList"
          :key="index" @click="onClick(item)">
          <div class="storage-plan fit-tc-background">
            <div class="flex-box fit-tc-primary">
              <img class="img" :src="item.coin_avatar" alt />
              <span style="font-weight: 600; margin-right: 8px">{{
                item.coin_name
              }}</span>
              <span>{{ dataCoinLangFun("title", item) }}</span>
            </div>
            <div class="flex-box space-between" style="margin-top: 12px">
              <span cfit-tc-tertiary style="margin-left: 32px; font-size: 12px">{{ currCoinLangFun("flash_buying_cycle")
              }}</span>
              <span class="fit-tc-primary" style="font-size: 12px">
                {{ item.buy_start_time.slice(5) }} ~
                {{ item.buy_end_time.slice(5) }}
              </span>
            </div>
          </div>
          <div class="storage-yield fit-tc-border-color">
            <div class="flex-box justify-center">
              <div class="s-half text-center">
                <div class="rate">
                  {{ toNorounded(item.rate_year * 100, 2) }}%
                </div>
                <div class="color--grey fit-tc-tertiary">
                  {{ currCoinLangFun("year_annualized_rate") }}
                </div>
              </div>
            </div>
            <div class="storage-ongoing">
              <div class="
                  flex-box
                  space-between
                  fit-tc-primary fit-tc-border-color
                " style="
                  font-size: 12px;
                  border-top: 1px solid;
                  padding-top: 10px;
                ">
                <span>
                  {{ currCoinLangFun("text_locked") }}
                  <span style="font-weight: 500">{{
                    toThousands(item.total_buy_cou)
                  }}</span>
                </span>
                <span>
                  {{ item.member_cou }}
                  <span style="font-weight: 500">
                    {{ currCoinLangFun("text_peple", "all")
                    }}{{ currCoinLangFun("text_join", "all") }}
                  </span>
                </span>
              </div>
              <div class="snap-btn text-center" :class="{ 'snap-btn-activation': false }">
                {{ currCoinLangFun("flash_sale_ended") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  getFinanList,
  getCbsxNowApi,
  getCbsxHistoryApi,
} from "@/api/finance.js";
import { toNorounded, toThousands, getStrDataFunction } from "@/util/util.js";
import { mapGetters } from "vuex";
import { getDataApi } from "@/api/system";

export default {
  props: ["projectId"],
  data() {
    return {
      bannerUrl: "../../assets/image/finance_banner.png",
      nowList: [],
      historyList: [],
      tabList: [
        {
          imgUrl: "../../assets/image/invest.png",
          actUrl: "",
          // text: "增值收益",
          text: "finance.tab1",
          type: "2",
        },
        {
          imgUrl: "../../assets/image/invest.png",
          actUrl: "",
          text: "finance.tab2",
          type: "1",
        },
        {
          imgUrl: "../../assets/image/invest.png",
          actUrl: "",
          text: "finance.tab3",
          type: "0",
        },
        {
          imgUrl: "../../assets/image/invest.png",
          actUrl: "",
          text: "finance.tab4",
          type: "4",
        },
      ],
      type: "3",
      dataList: [],
      toNorounded,
      toThousands,
    };
  },
  created() {
    console.log("coinLang===>", this.language);
    //获取存币宝banner
    // getDataApi("1530464853989064705", {
    //   config_code: "save_coin_data",
    // }).then((res) => {
    //   let data = res.data.data.records[0];
    //   if (data) {
    //     this.bannerUrl = data.config_img_night
    //       ? data.config_img_night
    //       : data.config_img_daytime;
    //   }
    // });
    this.init();
  },
  mounted() {
    // this.init();
    // this.goToDetail(1);
  },
  watch: {},
  methods: {
    goToDetail(id) {
      this.$router.push({
        path: "/finance/detail",
        query: { id },
      });
    },
    clickTabItem(type) {
      console.log("type====>", type);
      this.type = type;
      this.getDataList(type);
    },
    currCoinLangFun(code, type = "coin_treasure") {
      return this.coinLangFun(type, code);
    },
    onClick(e) {
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }

      this.$emit("update:projectId", e.id);
      this.$emit("toCoinTreasureDetail", e);
    },
    getDataList(type) {
      getFinanList({
        classify: type,
      }).then((res) => {
        // this.nowList = res.data.data;
        console.log(res.data, "-------------产品列表:");
        this.dataList = res.data.rows;
      });
    },
    init() {
      this.getDataList("0");
      // getCbsxNowApi().then((res) => {
      //   this.nowList = res.data.data;
      //   console.log(this.nowList, "当前");
      // });
      // getCbsxHistoryApi().then((res) => {
      //   this.historyList = res.data.data;
      //   console.log(this.historyList, "往期");
      // });
    },
    isBuy_fun(data) {
      let currentTime = new Date().getTime();
      if (currentTime < new Date(data.buy_start_time).getTime()) {
        //抢购未开始
        return {
          label: this.currCoinLangFun("rush_buy_no_start"),
          boolean: false,
        };
      } else if (currentTime > new Date(data.buy_end_time).getTime()) {
        //抢购已截止
        return {
          label: this.currCoinLangFun("rush_buy_end", "coin_treasure"),
          boolean: false,
        };
      } else {
        if (data.goods_status == 1) {
          //抢购已售罄
          return {
            label: this.currCoinLangFun("rush_buy_whole_sold", "coin_treasure"),
            boolean: false,
          };
        } else if (data.goods_status == 0) {
          //正在抢购
          return {
            label: this.currCoinLangFun("rushing_to_buy", "coin_treasure"),
            boolean: true,
          };
        } else if (
          data.goods_status == 2 ||
          currentTime > new Date(data.unlock_time).getTime()
        ) {
          //抢购已结束
          return {
            label: this.currCoinLangFun("flash_sale_ended", "coin_treasure"),
            boolean: false,
          };
        }
      }
    },
  },
  computed: {
    ...mapGetters(["isLogin", "language"]),
  },
};
</script>

<style lang="scss" scoped>
.coinTreasure {
  .top-bg {
    width: 100%;
    height: 700px;
    // background-color: #070b1e;
    background: url("../../assets/image/finance_banner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;

    .text-box {
      position: absolute;
      left: 44%;
      top: 45%;
      transform: translateX(-50%) translateY(-50%);

      .title {
        font-size: 48px;
        color: #febf31;
        font-weight: bold;
      }

      .tip {
        color: #fff;
        font-size: 20px;
        padding-top: 30px;
        letter-spacing: 5px;
      }
    }
  }

  .main-content {
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1260px;
    // margin-top: -102px;
    // min-height: 740px;
    padding: 40px 0;
    //background: red;
  }

  .tabs {
    width: 100%;
    height: 178px;
    //background: yellow;
  }

  .tab_item {
    height: 178px;
    // background: blue;

    .imgbox {
      img {
        width: 120px;
      }
    }

    .textbox {
      text-align: center;
      font-size: 22px;
    }
  }

  .invest_box {
    width: 100%;
    height: 600px;
    // align-items: center;
    gap: 20px;
    // flex-wrap: wrap;
    // justify-content: space-between;
    //background: blue;
    // gap: 40px;
    // justify-content: space-between;
  }

  .invest_item {
    width: 580px;
    // flex: 1.6;
    height: 228px;
    padding: 10px 20px;
    // box-sizing: border-box;
    background: #f1f1f1;

    .invest_item_title {
      font-size: 20px;
    }

    .invest_item_content {
      .imgBox {
        flex: 1;
        padding-left: 10px;

        img {
          width: 40px;
        }
      }

      .content {
        // height: 70px;
        flex: 6.4;
        .top {
          .perc {
            font-size: 40px;
            color: #ffb143;
          }
        }
        .bottom {
          margin-top: 10px;
          gap: 10px;
          // background: blue;
          div {
            // background: yellow;
            flex: 1.2;
            align-self: flex-start;
            font-size: 12px;
          }
          .lock_days {
            p {
              padding-left: 20px;
            }
            // padding-left: 10px;
            // box-sizing: border-box;
          }
        }
      }
    }

    .invest_item_progress_text {
      // display: inline-block;
      font-size: 14px;
    }
  }

  .private-coin-treasure_item {
    width: 384px;
    min-height: 324px;
    border-radius: 4px;
    background-color: #f8f9fb;
    box-shadow: 0 3px 5px 0 #0000000d, 0 7px 14px 0 #36364d1a;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    .storage-plan {
      padding: 25px 32px;
      position: relative;
      font-size: 24px;

      .img {
        width: 1em;
        height: 1em;
        margin-right: 4px;
      }

      span {
        font-size: 16px;
      }
    }

    .storage-yield {
      padding: 32px 0 0;
      // -webkit-box-shadow: inset 0 1px 0 0 #e6e6eb;
      // box-shadow: inset 0 1px 0 0 #e6e6eb;
      background-color: #f8f9fb;
      border-top: 1px solid;

      .s-half {
        width: 50%;
        color: #f80;

        .rate {
          font-size: 40px;
          font-weight: 600;
          padding: 5px 0;
        }

        .color--grey {
          // color: #8a9099;
          font-size: 12px;
          line-height: 16px;
        }
      }

      .storage-ongoing {
        padding: 32px;

        .snap-btn {
          border-radius: 4px;
          width: 100%;
          padding: 12px 0;
          margin-top: 32px;
          font-weight: 700;
          color: #657585;
          background: #f2f3f5;
        }

        .snap-btn-activation {
          color: #fff;
          background: #f80;
        }
      }
    }
  }

  .private-coin-treasure_item:hover {
    -webkit-box-shadow: 0 6px 12px 0 #0000000d, 0 12px 24px 0 #36364d1a;
    box-shadow: 0 6px 12px 0 #0000000d, 0 12px 24px 0 #36364d1a;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }

  .past-projects {
    position: relative;
    margin: 0 0 48px;

    .past-projects-text {
      display: inline-block;
      padding: 0 24px;
      position: relative;
      z-index: 1;
      line-height: 1.36;
    }
  }

  .past-projects::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #eff0f2;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "";
    z-index: 0;
  }

  .coin-treasure_item__activ {
    margin-bottom: 48px;
  }

  .coin-treasure_item__activ:not(:nth-of-type(3n)) {
    margin-right: 24px;
  }

  .text-center {
    text-align: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-box {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss">
.theme-night {
  .private-coin-treasure_item {
    box-shadow: 0 3px 5px 0 #0d1324, 0 7px 14px 0 #0d1324 !important;
  }

  .past-projects::after {
    background: #151d29 !important;
  }

  .storage-yield {
    background-color: #151d29 !important;

    .snap-btn {
      color: #7e92a6 !important;
      background: #1f2733 !important;

      &.snap-btn-activation {
        color: #fff !important;
        background: #f80 !important;
      }
    }
  }
}
</style>
