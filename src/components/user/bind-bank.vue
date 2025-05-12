<template>
  <div class="bank_main">
    <div class="bank_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("user.bank") }}</p>
        </div>
      </div>
    </div>
    <div class="form_box" v-if="isBindBank || clickAddCard">
      <!-- 面包屑导航 -->
      <div class="top_nav flex-start">
        <p @click="clickAddCard = false" style="color: #606266" class="cur_p">
          {{ $t("user.bankCard") }}
        </p>
        <p><i class="el-icon-arrow-right"></i></p>
        <p>{{ $t("user.bank") }}</p>
      </div>
      <div class="form_main">
        <el-form
          :model="form"
          ref="form"
          label-width="90px"
          label-position="top"
          hide-required-asterisk="true"
        >
          <div class="top_box flex-between">
            <el-form-item
              :label="$t('user.bankCardNum')"
              prop="cardNumber"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsFillBankCardNum'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="form.cardNumber"
                :placeholder="$t('utils.plsInput')"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.bankAddress')" prop="bankAddress">
              <el-input
                v-model="form.bankAddress"
                :placeholder="$t('utils.plsInput')"
              ></el-input>
            </el-form-item>
            <el-form-item
              :label="$t('user.bankName')"
              prop="bankName"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsFillBankName'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="form.bankName"
                :placeholder="$t('utils.plsInput')"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.bankCode')" prop="bankCode">
              <el-input
                v-model="form.bankCode"
                :placeholder="$t('utils.plsInput')"
              >
              </el-input>
            </el-form-item>
            <el-form-item :label="$t('user.bankBranch')" prop="bankBranch">
              <el-input
                v-model="form.bankBranch"
                :placeholder="$t('utils.plsInput')"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.userAddress')" prop="userAddress">
              <el-input
                v-model="form.userAddress"
                :placeholder="$t('utils.plsInput')"
              ></el-input>
            </el-form-item>
          </div>

          <div style="height: 20px"></div>

          <el-form-item>
            <div class="confirm_btn">
              <div v-loading="showLoading">
              <div @click="submit">{{ $t("utils.submit") }}</div>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <div style="color: red">{{ $t("user.bindBankCardTip") }}</div>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="noBankInfo_box flex-colum-center" v-else>
      <div class="empty">
        <el-empty :description="$t('utils.noData')">
          <template #image>
            <img
              :src="require('@/assets/image/noData.png')"
              alt="Empty Image"
            />
          </template>
        </el-empty>
      </div>

      <div class="btn_box cur_p flex-center">
        <el-button
          class="commonBtn_bg flex-center"
          @click="addBankCard"
          type="primary"
        >
          + {{ $t("user.addBankCard") }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { submitBankInfo } from "@/api/user";
export default {
  props: {
    isBindBank: Boolean,
  },
  data() {
    return {
      clickAddCard: false,
      form: {
        cardNumber: "",
        bankAddress: "",
        bankName: "",
        bankCode: "",
        bankBranch: "",
        userAddress: "",
        coin: "",
      },
      showLoading: false
    };
  },
  methods: {
    submit() {
      this.showLoading  = true
      submitBankInfo({
        ...this.form,
      }).then((res) => {
        this.showLoading = false
        if (res.data.code == 200) {
          this.$message({
            message: this.$t("user.bindSuccess"),
            type: "success",
          });
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    addBankCard() {
      this.clickAddCard = true;
    },
  },
};
</script>

<style lang="scss">
.bank_main {
  .bank_header_box {
    width: 100%;
    height: 125px;
    background: #dddddd;

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

  .form_box {
    width: 1200px;
    margin: auto;
    .top_nav {
      height: 76px;
      gap: 10px;
    }
    .form_main {
      width: 1200px;
      margin: auto;
      // background: red;
      // padding: 10px 40px 40px 40px;
      .el-form {
        .top_box {
          //   display: flex;
          //   justify-content: space-between;
          //   //   height: 200px;
          //   flex-wrap: wrap;
          .el-form-item {
            width: 580px;
            // padding: 0;
          }
        }
        .confirm_btn {
          margin-top: 40px;

          > div {
            width: 227px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            text-align: center;
            font-size: 14px;
            background: #09BA85;
            border-radius: 4px;
          }
        }
        // .el-form-item {
        //   width: 560px;
        //   // padding: 0;
        // }
        // .el-form-item {
        //   width: 850px;
        //   // padding: 0;
        // }
      }
    }
  }

  .noBankInfo_box {
    .empty {
      margin-top: 30px;
    }
    .btn_box {
      margin: 150px auto 60px;
      .el-button {
        width: 245px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
      }
    }
  }
}
</style>
