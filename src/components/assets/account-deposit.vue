<template>
  <div class="account_deposit_box">
    <div class="content_box flex-colum-between">
      <div class="top flex-colum-between">
        <div class="title bold">{{ $t("assets.accountDeposit") }}</div>
        <div class="title_tip">
          Coincheckusa {{ $t("assets.accountDepositTip") }}
        </div>
      </div>
      <div class="bottom">
        <div class="flex-between">
          <div class="imgBox">
            <img :src="require('@/assets/image/invest.png')" alt="" />
          </div>
          <div class="textBox flex-colum-between">
            <p>{{ $t("assets.recharge") }}</p>
            <p>{{ $t("assets.rechargeTip") }}</p>
          </div>
          <div class="btnBox flex-end">
            <el-button @click="goTab('recharge')">{{
              $t("assets.recharge")
            }}</el-button>
          </div>
        </div>
        <div class="flex-between">
          <div class="imgBox">
            <img :src="require('@/assets/image/invest.png')" alt="" />
          </div>
          <div class="textBox flex-colum-between">
            <p>{{ $t("assets.withdraw") }}</p>
            <p>{{ $t("assets.withdrawTip") }}</p>
          </div>
          <div class="btnBox flex-end">
            <el-button @click="goTab('withdraw')">{{
              $t("assets.withdraw")
            }}</el-button>
          </div>
        </div>
        <div class="flex-between">
          <div class="imgBox">
            <img :src="require('@/assets/image/invest.png')" alt="" />
          </div>
          <div class="textBox flex-colum-between">
            <p>{{ $t("assets.transfer") }}</p>
            <p>{{ $t("assets.transferTip") }}</p>
          </div>
          <div class="btnBox flex-end">
            <el-button @click="goTab('transfer')">{{
              $t("assets.transfer")
            }}</el-button>
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
  margin-top: 10px;
  //   padding: 70px 0;
  padding-bottom: 70px;
  padding-top: 40px;
  //   box-sizing: border-box;
}
.content_box {
  width: 1200px;
  font-size: 20px;
  margin: auto;
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
</style>
