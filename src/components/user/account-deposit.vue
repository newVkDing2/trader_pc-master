<template>
  <div class="account_deposit_box">
    <div class="content_box flex-between">
      <div class="left_ruJin flex-colum-between">
        <div class="top flex-colum-between">
          <div class="title bold">{{ $t("user.accountDeposit") }}</div>
          <div class="title_tip">
            Coincheckusa{{ $t("user.accountDepositTip") }}
          </div>
        </div>
        <div class="bottom">
          <div class="flex-between">
            <div class="imgBox">
              <img :src="require('@/assets/image/invest.png')" alt="" />
            </div>
            <div class="textBox flex-colum-between">
              <p>{{ $t("user.recharge") }}</p>
              <p>{{ $t("user.rechargeTip") }}</p>
            </div>
            <div class="btnBox flex-end">
              <el-button @click="goTab('recharge')">{{
                $t("user.recharge")
              }}</el-button>
            </div>
          </div>
          <div class="flex-between">
            <div class="imgBox">
              <img :src="require('@/assets/image/invest.png')" alt="" />
            </div>
            <div class="textBox flex-colum-between">
              <p>{{ $t("user.withdraw") }}</p>
              <p>{{ $t("user.withdrawTip") }}</p>
            </div>
            <div class="btnBox flex-end">
              <el-button @click="goTab('withdraw')">{{
                $t("user.withdraw")
              }}</el-button>
            </div>
          </div>
          <div class="flex-between">
            <div class="imgBox">
              <img :src="require('@/assets/image/invest.png')" alt="" />
            </div>
            <div class="textBox flex-colum-between">
              <p>{{ $t("user.transfer") }}</p>
              <p>{{ $t("user.transferTip") }}</p>
            </div>
            <div class="btnBox flex-end">
              <el-button @click="goTab('transfer')">{{
                $t("user.transfer")
              }}</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="right_anno">
        <div class="title flex-start">
          <p>{{ $t("user.annoCenter") }}</p>
        </div>
        <div class="time flex-colum-evenly">
          <!-- {{noticeList}}--noticeList -->
          <p>{{ createTime }}</p>
          <p>{{noticeContent }}</p>
        </div>
        <div class="download flex-start">
          <div class="download_inner flex-colum-evenly">
            <div class="top num_bold">
              <p>{{ $t("user.downloadEnjoy") }}</p>
            </div>
            <div class="bottom flex-start">
              <div class="qrbox">
                <img :src="require('@/assets/image/qrcode.png')" alt="" />
              </div>
              <div class="textBox flex-colum-around">
                <p>Coincheckusa App</p>
                <p>IOS & Android {{ $t("user.scanDownloadStri") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBtnSet: Boolean,
    noticeList: Array,
    createTime:String,
    noticeContent:String
  },
  data() {
    return {};
  },
  methods: {
    goTab(tabname) {
      this.$router.push({
        path: "/assets/index",
        query: { key: tabname },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.account_deposit_box {
  margin-top: 20px;
  //   padding: 70px 0;
  // padding-bottom: 70px;
  padding-top: 40px;
  //   box-sizing: border-box;
}

.content_box {
  width: 1200px;
  font-size: 20px;
  margin: auto;
  gap: 80px;

  .left_ruJin {
    flex: 3.6;

    .top {
      // height: 70px;
      // background: blue;
      .title {
        font-size: 24px;
        color: #1e2329;
      }

      .title_tip {
        margin-top: 20px;
        font-size: 14px;
      }
    }

    .bottom {
      > div {
        //   height: 70px;
        margin-top: 20px;

        .imgBox {
          flex: 1;

          // background: red;
          img {
            width: 80px;
          }
        }

        .textBox {
          flex: 9;
          height: 40px;
          font-size: 14px;
        }

        .btnBox {
          flex: 1;
        }
      }
    }
  }

  .right_anno {
    flex: 2;
    height: 300px;
    // background: red;
    align-self: flex-start;

    .title {
      height: 60px;
      border-bottom: 1px solid #f1f1f1;

      p {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .time {
      height: 80px;
      border-bottom: 1px solid #f1f1f1;

      p:nth-child(1) {
        font-size: 12px;
      }

      p:nth-child(2) {
        font-size: 14px;
      }
    }

    .download {
      height: 240px;
      // background: blue;

      .download_inner {
        width: 100%;
        height: 160px;
        background: #dddddd;
        padding-left: 20px;
        border: 1px dashed #f1f1f1;

        .top {
          p {
            font-size: 24px;
            font-weight: bold;
          }
        }

        .bottom {
          gap: 20px;

          .qrbox {
            img {
              width: 70px;
            }
          }

          .textBox {
            p:nth-child(1) {
              font-size: 16px;
            }

            p:nth-child(2) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
