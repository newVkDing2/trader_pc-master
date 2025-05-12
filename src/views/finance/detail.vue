<template>
  <div class="detail_main">
    <div class="page_title bold">
      <div class="content flex-start">
        <div class="imgBox flex-start">
          <img src="../../assets/image/pic.png" alt="" />
        </div>
        <div class="mid_content flex-colum-between">
          <div class="type_text">USDT</div>
          <div class="income_all flex-between">
            <div class="income_all_item flex-colum-between">
              <p>{{$t("finance.averageIncome")}}</p>
              <p>{{ info.avgRate + "%" }}</p>
            </div>
            <div class="income_all_item flex-colum-between">
              <p>{{$t("finance.productCycle")}}</p>
              <p>{{ info.days }}{{$t("utils.days")}}</p>
            </div>
            <div class="income_all_item flex-colum-between">
              <p>{{$t("finance.particAmount")}}</p>
              <p>{{ info.limitMin }} {{ info.title }}</p>
            </div>
            <div class="income_all_item flex-colum-between">
              <p>{{$t("finance.particLimitAmount")}}</p>
              <p>{{ info.limitMax }} {{ info.title }}</p>
            </div>
          </div>
        </div>
        <div class="right_img flex-end">
          <img src="../../assets/image/pic.png" alt="" />
        </div>
      </div>
    </div>

    <div class="inner_box">
      <div class="nav_list flex-start">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/finance' }"
            >{{$t("finance.finance")}}</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{$t("finance.productDetails")}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="pro_details flex-between">
        <div class="pro_details_item pro_details_left flex-colum-evenly">
          <div class="title bold">{{$t("finance.productDetails")}}</div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.productName")}}</p>
            <p>{{ info.title }}</p>
          </div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.averageIncome")}}</p>
            <p>{{ info.process + "%" }}</p>
          </div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.projectProgress")}}</p>
            <p>{{ info.totalInvestAmount }} {{ info.title }}</p>
          </div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.lastAmount")}}</p>
            <p>{{ info.remainAmount }} {{ info.title }}</p>
          </div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.particLimitNum")}}</p>
            <p>{{ info.timeLimit }}</p>
          </div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.averageDayIncome")}}</p>
            <p>{{ info.avgRate + "%" }}</p>
          </div>
        </div>
        <div class="pro_details_item pro_details_right">
          <div class="title bold">{{$t("finance.productRules")}}</div>
          <div class="detail_item flex-between">
            <p>{{$t("finance.regularInvest")}}</p>
          </div>
        </div>
      </div>
      <div class="confirm_btn">
        <div @click="submit">{{$t("utils.confirm")}}</div>
      </div>
    </div>

    <!-- <div class="sub_amount">
      <div class="label">申购金额</div>

      <el-input placeholder="请输入" size="large" v-model="input">
        <template slot="suffix">
          <div class="type flex-center">USDT</div>
        </template>
        <template slot="append">
          <div class="all_btn" @click="initAllNum">全部</div>
        </template>
      </el-input>
    </div>

    <div class="limit_content">
      <div class="flex-between">
        <p>限额</p>
        <p>日收益率</p>
        <p>周期</p>
      </div>
      <div class="flex-between">
        <p>{{ info.limitMin }} - {{ info.limitMax }}</p>
        <p style="color: #4bbd83">
          {{ info.minOdds + "%" }} - {{ info.maxOdds + "%" }}
        <p>{{ info.days }}</p>
      </div>
    </div>
    <div class="pro_details flex-colum-evenly">
      <div class="title bold">产品详情</div>
      <div class="detail_item flex-between">
        <p>可用余额</p>
        <p>
          {{
            amoutInfo[0].availableAmount ? amoutInfo[0].availableAmount : "0"
          }}
          {{ info.title }}
        </p>
      </div>
      <div class="detail_item flex-between">
        <p>可购次数</p>
        <p>{{ info.buyPurchase }}/{{ info.timeLimit }}</p>
      </div>
    </div>

    <div class="confirm_btn">
      <div @click="submit">确定</div>
    </div> -->
  </div>
</template>

<script>
import { getFinanDetail } from "@/api/finance";
export default {
  data() {
    return {
      id: "",
      info: {},
    };
  },
  mounted() {
    // 在目标页面中访问传递过来的参数对象
    this.id = this.$route.query.id;
    // console.log("id=====>", this.id);
    this.getFinanDetail(this.id);
  },
  created() {},
  methods: {
    getFinanDetail(id) {
      getFinanDetail({
        id,
      }).then((res) => {
        console.log("detail=====>", res.data.data);
        this.info = res.data.data;
      });
    },
    submit() {
      mineSubmit({
        amount: this.input,
        planId: 1,
      }).then((res) => {
        this.$message({
          message: res.data.msg, //登录成功
          type: "success",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.detail_main {
  width: 100%;
  margin-top: 65px;
  //   background: #F1F1F1;
  // background: red;
}

.page_title {
  width: 100%;
  height: 170px;
  font-size: 36px;
  background: #f1f1f1;
  //   color: #000;

  .content {
    width: 1200px;
    height: 100%;
    margin: auto;
    // padding: 0 0 100px;
    .imgBox {
      flex: 1;
      height: 100%;
      // background: red;

      img {
        width: 70px;
      }
    }

    .mid_content {
      padding: 20px;
      height: 100px;
      font-size: 14px;
      flex: 4;
      .income_all {
        // padding-right: 30px;
        .income_all_item {
          height: 60px;
          p:nth-child(1) {
            font-weight: bold;
          }
          p:nth-child(2) {
            font-size: 18px;
            color: #909399;
          }
        }
      }
    }
    .right_img {
      flex: 2;
      img {
        width: 70px;
      }
    }
  }
}
.inner_box {
  width: 1200px;
  margin: auto;
  padding: 0 0 100px;
  //   margin-top: 80px;
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
  width: 100%;
  margin-top: 10px;
  .pro_details_item {
    padding: 0 30px;
    height: 400px;
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
  }
}

.pro_details_left {
  width: 700px;
}
.pro_details_right {
  width: 450px;
  > div {
    margin-top: 32px;
  }
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
