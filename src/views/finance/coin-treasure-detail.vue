<template>
  <div class="coin-treasure-detail fit-tc-primary">
    <div class="main-content">
      <div class="flex-box space-between nav">
        <span style="
            user-select: none;
            cursor: pointer;
            color: #3b85f5;
            font-size: 12px;
          " @click="$emit('goBack')">
          <i class="el-icon-back" style="margin-right: 4px"></i>{{ currCoinLangFun("back_coin_treasure") }}
        </span>
        <span style="
            user-select: none;
            cursor: pointer;
            color: #3b85f5;
            font-size: 12px;
          " @click="$emit('toDepositRecord')">
          {{ currCoinLangFun("coin_deposit_record") }}
          <i class="el-icon-document" style="margin-left: 4px"></i>
        </span>
      </div>

      <div class="lock-header flex-box space-between">
        <div class="flex-box">
          <img class="img" :src="projectData.coin_avatar" alt />
          <div style="margin-left: 12px">
            <div style="font-size: 16px; color: #903; font-weight: 600">
              {{ projectData.coin_name }}
            </div>
            <div style="font-size: 14px; color: #903">
              {{ dataCoinLangFun("title", projectData) }}
            </div>
          </div>
        </div>
        <div>
          <div style="font-size: 20px; color: #903">
            {{ projectData.day }}{{ currCoinLangFun("day", "all") }}
          </div>
          <div style="font-size: 12px; color: #10171f">
            {{ currCoinLangFun("period_coin_deposit") }}
          </div>
        </div>
      </div>

      <div class="detail-content flex-box fit-background">
        <div class="content-left">
          <div style="margin-bottom: 8px">
            <el-progress :percentage="
                            Number(projectData.total_buy_cou)
                              .myDiv(projectData.buy_total_cou)
                              .myMul(100)
                          " stroke-width="12" :show-text="false"></el-progress>
          </div>
          <div class="flex-box space-between" style="padding-bottom: 16px; border-bottom: 1px solid #e6e6eb">
            <span style="font-size: 12px">
              {{ currCoinLangFun("text_locked") }}
              {{ toThousands(toNorounded(projectData.total_buy_cou)) }}
            </span>
            <span style="font-size: 12px">{{ projectData.member_cou
                          }}{{ currCoinLangFun("text_peple", "all")
                            }}{{ currCoinLangFun("text_join", "all") }}</span>
          </div>

          <div class="plan-detail">
            <div class="flex-box space-between">
              <span>{{ currCoinLangFun("rush_buy_Total_amount") }}</span>
              <span>
                {{ toThousands(toNorounded(projectData.buy_total_cou, 8)) }}
                {{ projectData.coin_name }}
              </span>
            </div>
            <div class="flex-box space-between">
              <span>{{ currCoinLangFun("remaining_quota") }}</span>
              <span>
                {{
                                `${toThousands(
                                toNorounded(
                                Number(projectData.buy_total_cou).mySub(
                                projectData.total_buy_cou
                                ),
                                8
                                )
                                )} ${projectData.coin_name}`
                                }}
              </span>
            </div>
            <div class="flex-box space-between">
              <span>{{ currCoinLangFun("max_limit_deposit_coin") }}</span>
              <span>
                {{
                                `${toThousands(toNorounded(projectData.buy_max_cou, 8))} ${
                                projectData.coin_name
                                }`
                                }}
              </span>
            </div>
            <div class="flex-box space-between">
              <span>{{ currCoinLangFun("single_purchase_quantity") }}</span>
              <span>
                {{
                                `${toThousands(toNorounded(projectData.buy_min_cou, 8))} ${
                                projectData.coin_name
                                }`
                                }}
              </span>
            </div>
          </div>

          <div style="margin-top: 32px">
            <el-timeline :reverse="reverse">
              <el-timeline-item v-for="(activity, index) in activities" :key="index"
                :color="themeName == 'theme-night' ? '#0020FD' : '#3b85f5'">{{ activity.content }}</el-timeline-item>
            </el-timeline>
          </div>
        </div>

        <div class="content-center">
          <div class="flex-box center-head" style="justify-content: flex-end; line-height: 20px">
            <span style="color: #8a9099; margin-right: 12px">{{
                          currCoinLangFun("account_balance")
                          }}</span>
            <span style="margin-right: 12px">
              {{ `${wealthBalance} ${projectData.coin_name}` }}
            </span>
            <span style="
                color: #3b85f5;
                border-left: 1px solid #e6eaf0;
                padding: 0 12px;
                cursor: pointer;
              " @click="hzBtnFun">{{ currCoinLangFun("transfer_text", "all") }}</span>
          </div>
          <div style="margin-bottom: 8px; font-size: 14px; line-height: 20px">
            {{ currCoinLangFun("num_deposit_coin") }}
          </div>
          <div class="money-input">
            <el-input :disabled="!com_isBuy" :placeholder="`${currCoinLangFun(
                            'zx_text',
                            'move_contract'
                          )} ${toNorounded(projectData.buy_min_cou, 8)} ${
                            projectData.coin_name
                          } ~ ${currCoinLangFun('zd_text', 'move_contract')} ${toNorounded(
                            com_max_buy,
                            8
                          )} ${projectData.coin_name}`" @input="(val) => setInputFun(val)" v-model="input">
              <div slot="suffix">
                <span class="text fit-tc-tip">{{ projectData.coin_name }}</span>
                <span class="btn fit-tc-primary active-text" v-if="com_isBuy" @click="
                                    input =
                                      wealthBalance >= com_max_buy ? com_max_buy : wealthBalance
                                  ">{{ currCoinLangFun("zd_text", "move_contract") }}</span>
                <span v-else class="btn fit-tc-primary active-text" style="cursor: not-allowed">{{
                                  currCoinLangFun("zd_text", "move_contract") }}</span>
              </div>
            </el-input>
          </div>
          <div class="err_text" style="padding: 4px">{{ errTextCompute }}</div>

          <div class="expected-revenue">
            <span style="color: #8a9099; font-size: 16px">{{
                          currCoinLangFun("estimated_income")
                          }}</span>
            <span style="color: #ff5447; font-size: 16px; margin-left: 8px">
              {{
                            `${toNorounded(
                            Number(input)
                            .myMul(Number(projectData.day).myDiv(365))
                            .myMul(projectData.rate_year),
                            8
                            )} ${projectData.coin_name}`
                            }}
            </span>
            <div class="num_err" v-show="numErrCompute">
              {{ currCoinLangFun("Insufficient_balance", "all") }}
            </div>
          </div>

          <div>
            <el-button type="primary" class="snapUp_btn" :class="{ disable_btn: btnDisabled }" :disabled="btnDisabled"
              :loading="btnLoading" @click="buyCoin()">{{ btnText }}</el-button>
          </div>
        </div>
      </div>

      <p class="common_problem fit-tc-tip">
        {{ currCoinLangFun("common_problem", "all") }}
      </p>

      <div class="collapse_box">
        <div class="collapse_item fit-tc-border-color" v-for="(item, index) in whatList" :key="index"
          @click="handleChange(item, index)">
          <div class="item_top flex-box space-between">
            <span>{{ item.title }}</span>
            <i class="el-icon-plus" style="font-size: 12px; font-weight: 600" v-if="!activeNames.includes(index)"></i>
            <i class="el-icon-arrow-up" style="font-size: 12px; font-weight: 600" v-else></i>
          </div>
          <div class="item_bottom" style="white-space: pre-line" v-show="activeNames.includes(index)">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

    <fund-transfer v-if="transferDialog" :transferDialog="transferDialog" :closeDialog="closeDialog.bind(this)"
      :targerWalletKey="transfertargerWalletKey"></fund-transfer>
  </div>
</template>

<script>
import { getGoodsInfoApi, getWealthApi, buyCoinApi } from "@/api/finance.js";
import { toNorounded, toThousands, inputNumberLinmitFun } from "@/util/util.js";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
import { mapGetters } from "vuex";

export default {
  props: ["projectId"],
  components: { fundTransfer },
  data() {
    return {
      btnText: this.currCoinLangFun("rush_buy"), //抢购
      btnDisabled: true,
      btnLoading: false,
      toNorounded,
      toThousands,
      projectData: {
        buy_end_time: "--",
        buy_max_cou: "0",
        buy_min_cou: "0",
        buy_start_time: "--",
        buy_total_cou: "0",
        total_buy_cou: 0,
        coin_avatar: "",
        coin_id: "-",
        coin_name: "--",
        day: "0",
        rate_year: "0",
        id: "-",
        interest_start_time: "--",
        title: "--",
        unlock_time: "--",
        update_time: "--",
        update_user: "-",
      },
      wealthBalance: "",
      input: "",
      reverse: false,
      activities: [
        {
          content: this.currCoinLangFun("lock_up_deadline"), //锁仓截止时间
          timestamp: "",
        },
        {
          content: this.currCoinLangFun("interest_accrual_time"), //计息时间
          timestamp: "",
        },
        {
          content: this.currCoinLangFun("unlocking_time"), //解锁时间
          timestamp: "",
        },
      ],
      activeNames: [],
      whatList: [
        {
          title: this.currCoinLangFun("what_list_title1"), //什么是存币宝?
          content: this.currCoinLangFun("what_list_answer1"),
        },
        {
          title: this.currCoinLangFun("what_list_title2"), //如何参与?
          content: this.currCoinLangFun("what_list_answer2"),
        },
        {
          title: this.currCoinLangFun("what_list_title3"), //收益如何计算?
          content: this.currCoinLangFun("what_list_answer3"),
        },
        {
          title: this.currCoinLangFun("what_list_title4"), //收益如何发放?
          content: this.currCoinLangFun("what_list_answer4"),
        },
        {
          title: this.currCoinLangFun("what_list_title5"), //收益与其他活动奖励是否叠加？
          content: this.currCoinLangFun("what_list_answer5"),
        },
        {
          title: this.currCoinLangFun("what_list_title6"), //存币宝可以提前解锁么?
          content: this.currCoinLangFun("what_list_answer6"),
        },
      ],
      transferDialog: false, //划转
      transfertargerWalletKey: "", //划转目标钱包key
    };
  },
  watch: {
    input(now) {
      if (
        Number(now) >= Number(this.projectData.buy_min_cou) &&
        Number(now) <= this.com_max_buy &&
        Number(now) > 0 &&
        Number(now) <= Number(this.wealthBalance) &&
        this.com_isBuy
      ) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
  },

  computed: {
    ...mapGetters(["themeName"]),
    com_max_buy() {
      let max_quota = Number(this.projectData.buy_total_cou).mySub(
        this.projectData.total_buy_cou
      );
      let upperLimit = Number(this.projectData.buy_max_cou).mySub(
        this.projectData.member_buy_cou
      );
      if (max_quota > upperLimit) {
        return upperLimit;
      } else {
        return max_quota;
      }
    },
    //是否可抢购
    com_isBuy() {
      let currentTime = new Date().getTime();

      if (currentTime < new Date(this.projectData.buy_start_time).getTime()) {
        //抢购未开始
        return false;
      } else if (
        currentTime > new Date(this.projectData.buy_end_time).getTime()
      ) {
        //抢购已截止
        return false;
      } else {
        if (this.projectData.goods_status == 1) {
          //抢购已售罄
          return false;
        } else if (this.projectData.goods_status == 0) {
          //抢购
          return true;
        } else if (
          this.projectData.goods_status == 2 ||
          currentTime > new Date(this.projectData.unlock_time).getTime()
        ) {
          //抢购已结束
          return false;
        }
      }
    },
    numErrCompute() {
      if (Number(this.input) > Number(this.wealthBalance)) {
        return true;
      } else {
        return false;
      }
    },
    errTextCompute() {
      if (
        Number(this.input) < Number(this.projectData.buy_min_cou) &&
        this.input
      ) {
        return `${this.currCoinLangFun(
          "single_min_deposit_coin"
        )}：${toNorounded(this.projectData.buy_min_cou, 8)} ${
          this.projectData.coin_name
        }`;
      }
      if (
        Number(this.input) >
        Number(this.projectData.buy_total_cou).mySub(
          this.projectData.total_buy_cou
        )
      ) {
        return `${this.currCoinLangFun("text_grzdcbl")}：${toNorounded(
          Number(this.projectData.buy_total_cou).mySub(
            this.projectData.total_buy_cou
          ),
          8
        )} ${this.projectData.coin_name}`;
      } else {
        return "";
      }
    },
  },
  created() {
    this.init();
  },
  methods: {
    currCoinLangFun(code, type = "coin_treasure") {
      return this.coinLangFun(type, code);
    },
    setInputFun(value) {
      this.input = inputNumberLinmitFun(value, 8);
    },
    handleChange(e, i) {
      if (!this.activeNames.includes(i)) {
        this.activeNames.push(i);
      } else {
        this.activeNames = this.activeNames.filter((item) => item != i);
      }
    },
    init() {
      getGoodsInfoApi(this.projectId).then((res) => {
        this.projectData = res.data.data;
        console.log(this.projectData, "dsdsfdsf");
        this.activities = [
          {
            content: `${this.currCoinLangFun("lock_up_deadline")} ${
              this.projectData.buy_end_time
            }`, //锁仓截止时间
            timestamp: "",
          },
          {
            content: `${this.currCoinLangFun("interest_accrual_time")}  ${
              this.projectData.interest_start_time
            }`, //计息时间
            timestamp: "",
          },
          {
            content: `${this.currCoinLangFun("unlocking_time")}  ${
              this.projectData.unlock_time
            }`, //解锁时间
            timestamp: "",
          },
        ];

        let currentTime = new Date().getTime();

        if (currentTime < new Date(this.projectData.buy_start_time).getTime()) {
          this.btnText = this.currCoinLangFun("rush_buy_no_start"); //抢购未开始
          this.btnDisabled = true;
        } else if (
          currentTime > new Date(this.projectData.buy_end_time).getTime()
        ) {
          this.btnText = this.currCoinLangFun("rush_buy_end"); //抢购已截止
          this.btnDisabled = true;
        } else {
          if (this.projectData.goods_status == 1) {
            this.btnText = this.currCoinLangFun("rush_buy_whole_sold"); //抢购已售罄
            this.btnDisabled = true;
          } else if (this.projectData.goods_status == 0) {
            this.btnText = this.currCoinLangFun("rush_buy"); //抢购
            this.btnDisabled = this.input ? false : true;
          } else if (
            this.projectData.goods_status == 2 ||
            currentTime > new Date(this.projectData.unlock_time).getTime()
          ) {
            this.btnText = this.currCoinLangFun("flash_sale_ended"); //抢购已结束
            this.btnDisabled = true;
          }
        }

        getWealthApi(this.projectData.coin_name).then((res) => {
          this.wealthBalance = res.data.data.wealthBalance;
        });
      });
    },
    buyCoin() {
      this.btnLoading = true;
      buyCoinApi({
        wealthGoodsId: this.projectId,
        buyCou: this.input,
      })
        .then((res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("successful_rush_purchase"), //抢购成功
          });
          this.input = "";
          this.init();
          this.btnLoading = false;
          this.$emit("toDepositRecord");
        })
        .catch((err) => {
          this.btnLoading = false;
        });
    },
    //划转按钮
    hzBtnFun() {
      this.transfertargerWalletKey = "wealth"; //理财账户

      this.transferDialog = true;
    },
    closeDialog(type, isRefresh) {
      if (type == "transferDialog") {
        this.transferDialog = false;
        if (isRefresh && isRefresh == "refresh") {
          this.init();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.coin-treasure-detail {
  padding-top: 15px;
  padding-bottom: 80px;

  .main-content {
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1200px;

    .nav {
      margin-bottom: 24px;
    }

    .lock-header {
      padding: 0 20px;
      margin-bottom: 16px;
      height: 76px;
      border-radius: 4px;
      -webkit-box-shadow: 0 3px 5px 0 #0000001a, 0 7px 14px 0 #36364d1a;
      box-shadow: 0 3px 5px 0 #0000001a, 0 7px 14px 0 #36364d1a;
      background-image: -webkit-gradient(linear,
          left top,
          right top,
          from(#fd9),
          to(#ffefad));
      background-image: linear-gradient(90deg, #fd9, #ffefad);

      .img {
        width: 44px;
        height: 44px;
      }
    }

    .detail-content {
      border-radius: 4px;
      // background-color: #fff;
      box-shadow: 0 3px 5px 0 #0000000d, 0 7px 14px 0 #36364d1a;
      margin-bottom: 48px;
      padding: 32px 24px 12px 24px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      align-items: flex-start;

      .content-left {
        width: 252px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        .plan-detail {
          padding: 16px 0 32px;
          border-bottom: 1px solid #e6e6eb;

          span {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }

      .content-center {
        width: 480px;
        padding-left: 132px;
        height: 100%;

        .center-head {
          margin-bottom: 8px;

          span {
            font-size: 14px;
          }
        }
      }
    }
  }

  .money-input {
    position: relative;

    ::v-deep.el-input {
      .el-input__inner {
        padding-right: 100px;
        height: 48px;
      }

      .el-input__suffix {
        display: flex;
        align-items: center;

        .text {
          border-right: 1px solid;
          line-height: 16px;
          font-size: 12px;
          padding-right: 12px;
          margin-right: 12px;
        }

        .btn {
          cursor: pointer;
          font-size: 12px;
          padding-right: 5px;
        }
      }
    }

    .box-input_suffix {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      align-items: center;

      .all_text {
        font-size: 14px;
        color: #3b85f5;
        padding-left: 12px;
        margin-left: 12px;
        border-left: 1px solid #e6eaf0;
        cursor: pointer;
      }
    }
  }

  .expected-revenue {
    margin: 25px 12px 24px 12px;
    width: 400px;
    position: relative;

    .num_err {
      position: absolute;
      left: 50%;
      bottom: 0;
      -webkit-transform: translateX(-50%) translateY(100%);
      transform: translateX(-50%) translateY(100%);
      white-space: nowrap;
      color: #ff0000;
      font-size: 14px;
    }
  }

  .err_text {
    color: #ff5447;
    font-size: 12px;
    position: absolute;
  }

  .snapUp_btn {
    width: 100%;
    font-size: 16px;
  }

  .common_problem {
    margin-bottom: 16px;
    line-height: 24px;
    font-size: 20px;
  }

  .collapse_box {
    .collapse_item {
      border-top: 1px solid;
      padding: 16px;
      cursor: pointer;

      .item_top {
        span {
          font-size: 16px;
        }
      }

      .item_bottom {
        font-size: 14px;
        margin: 8px 24px 0 0;
      }
    }

    .collapse_item:hover {
      .item_top {
        color: #3b85f5;
      }
    }
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
  .detail-content {
    box-shadow: 0 3px 5px 0 #070c18, 0 7px 14px 0 #070c18 !important;
  }

  .el-progress-bar__outer {
    background-color: #151d29 !important;
  }

  .el-timeline-item__content {
    color: #dde3e6 !important;
  }
}
</style>