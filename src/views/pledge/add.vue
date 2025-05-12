<template>
  <div class="add_main">
    <div class="page_title bold flex-start">
      {{ $t("pledgeAdd.commissionOrder") }}
    </div>
    <div class="nav_list flex-start">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/pledge' }">{{
          $t("pledgeAdd.pledgeMining")
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{
          $t("pledgeAdd.commissionOrder")
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub_amount">
      <div class="label">{{ $t("pledgeAdd.subscriAmount") }}</div>

      <el-input
        :placeholder="$t('utils.plsInput')"
        size="large"
        v-model="input"
      >
        <template slot="suffix">
          <div class="type flex-center">USDT</div>
        </template>
        <template slot="append">
          <div class="all_btn cur_d" @click="initAllNum">
            {{ $t("utils.totol") }}
          </div>
        </template>
      </el-input>
    </div>

    <div class="limit_content">
      <div class="flex-between">
        <p>{{ $t("pledgeAdd.limitNum") }}</p>
        <p>{{ $t("pledgeAdd.dayRate") }}</p>
        <p>{{ $t("pledgeAdd.cycle") }}</p>
      </div>
      <div class="flex-between">
        <p>{{ info.limitMin }} - {{ info.limitMax }}</p>
        <p style="color: #4bbd83">
          {{ info.minOdds + "%" }} - {{ info.maxOdds + "%" }}
        </p>
        <!-- <p>{{ item.minOdds + "%" }}~{{ item.maxOdds + "%" }}</p> -->
        <p>{{ info.days }}</p>
      </div>
    </div>
    <div class="pro_details flex-colum-evenly">
      <div class="title bold">{{ $t("pledgeAdd.productDetails") }}</div>
      <div class="detail_item flex-between">
        <p>{{ $t("utils.canUseBalance") }}</p>
        <p>
          {{ availableBalance ? availableBalance.toFixed(2) : "0" }}
          {{ info.title }}
        </p>
      </div>
      <div class="detail_item flex-between">
        <p>{{ $t("pledgeAdd.canBuyNum") }}</p>
        <p>{{ info.buyPurchase }}/{{ info.timeLimit }}</p>
      </div>
    </div>

    <div class="confirm_btn cur_d">
      <div v-loading="loading">
        <div @click="submit">{{ $t("utils.confirm") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
import { mineSubmit } from "@/api/pledge";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      input: "",
      info: {},
      amoutInfo: [],
      loading: false
    };
  },
  mounted() {
    // 在目标页面中访问传递过来的参数对象
    this.info = JSON.parse(this.$route.query.info);
    console.log("info=====>", this.info); // 输出 { key: 'value' }
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters(["userInfo"]),
    //获取当前可用usdt货币数量
    availableBalance() {
      console.log("this.userInfo", this.userInfo);
      if (this.userInfo && this.userInfo.asset.length > 0) {
        return this.userInfo.asset.filter((item) => {
          return item.symbol.toUpperCase() == this.info.title && item.type == 1;
        })[0]?.availableAmount;
      }
    },
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    init() {
      // this.getUserInfo();
    },
    submit() {
      this.loading = true
      mineSubmit({
        amount: this.input,
        planId: 1,
      }).then((res) => {
        this.loading = false
        this.$message({
          message: res.data.msg, //登录成功
          type: "success",
        });
        this.getUserInfo();
      }).finally(() => {
        this.loading = false
      })
    },
    initAllNum() {
      if (this.userInfo && this.userInfo.asset.length > 0) {
        this.input = this.userInfo.asset
          .filter((item) => {
            return (
              item.symbol.toUpperCase() == this.info.title && item.type == 1
            );
          })[0]
          ?.availableAmount.toFixed(2);
      }
      //  console.log("amoutInfo====>", this.amoutInfo);
    },
    // getUserInfo() {
    //   getUserInfo().then((res) => {
    //     this.amoutInfo = res.data.data.asset.filter((item) => {
    //       return item.symbol.toUpperCase() == this.info.title;
    //     });
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.add_main {
  width: 1200px;
  margin: auto;
  padding: 0 0 100px;
  margin-top: 80px;
  // background: red;
}

.page_title {
  width: 100%;
  height: 130px;
  //background: blueviolet;
  font-size: 36px;
  //   color: #000;

  border-bottom: 1px solid #d9d9d9;
}

.nav_list {
  height: 120px;
  ::v-deep.el-breadcrumb__item {
    font-size: 16px;
    .is-link {
      color: #000;
      font-weight: bold;
    }
  }
}
.sub_amount {
  width: 700px;
  .label {
    color: #1e2329;
  }
}
.el-input {
  margin-top: 20px;
  .type {
    height: 55px;
  }
  ::v-deep.el-input__inner {
    height: 55px;
    line-height: 55px;
  }
}
.limit_content {
  margin-top: 60px;
  width: 700px;
  > div {
    height: 60px;

    &:nth-child(1) {
      color: #909399;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #d9d9d9;
    }
  }
}
.pro_details {
  width: 700px;
  margin-top: 40px;
  padding: 0 30px;
  height: 200px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  .title {
    color: #333;
    font-size: 24px;
  }
  .detail_item {
    color: #909399;
    font-size: 14px;
  }
  //   > div {
  //     margin-top: 20px;
  //   }
}
.confirm_btn {
  margin-top: 60px;
  > div {
    width: 400px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    background: #09BA85;
  }
}
</style>
