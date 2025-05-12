<!--资产划转-->
<template>
  <div class="exchange_form_main">
    <div class="exchange_form_inner">
      <div class="exchange_form">
        <el-form
          :model="form"
          ref="form"
          label-width="90px"
          label-position="top"
          hide-required-asterisk="true"
        >
          <div class="select_box flex-between">
            <el-form-item :label="$t('assets.from')">
              <el-select
                v-model="form.transferOutAccount"
                :placeholder="$t('assets.plsSelectCoinType')"
                clearable
                @change="changeCoin"
              >
                <el-option
                  v-for="option in optionArr"
                  :key="option.value"
                  :label="$t(option.label)"
                  :value="option.value"
                  :disabled="option.value == form.transferInAccount"
                ></el-option>
              </el-select>
            </el-form-item>
            <div class="changeImg_box">
              <img
                :src="require('@/assets/image/change_arrow.png')"
                alt=""
                width="20px"
                style="margin-top: 70px"
                @click="changeBindValue"
              />
            </div>

            <el-form-item :label="$t('assets.to')">
              <el-select
                v-model="form.transferInAccount"
                :placeholder="$t('assets.plsSelectCoinType')"
                clearable
                @change="changeCoin2"
              >
                <el-option
                  v-for="option2 in optionArr"
                  :key="option2.value"
                  :label="$t(option2.label)"
                  :value="option2.value"
                  :disabled="option2.value == form.transferOutAccount"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item
            :label="$t(textInfo.label)"
            prop="amount"
            :rules="[
              {
                required: true,
                message: $t('assets.plsInputWithdrawNum'),
                trigger: 'blur',
              },
            ]"
          >
            <el-input v-model="form.amount" :placeholder="$t('utils.plsInput')">
              <template slot="append">
                <div class="all_btn cur_p" @click="initAllNum">
                  {{ $t(textInfo.butText) }}
                </div>
              </template>
            </el-input>
            <div>
              <!-- {{ form.transferInAccount }}--form.transferInAccount -->
<!--              {{ $t("assets.todayExchangeRate") }}:-->
              {{ $t("utils.canUseBalance") }}:
              {{ canUseAmount }}
              USDT
            </div>
          </el-form-item>
          <!-- <el-form-item label=" "> 可用资产: 0.00791USDT </el-form-item> -->

          <div style="height: 20px"></div>

          <el-form-item>
            <div class="confirm_btn cur_p">
              <div v-loading="showLoading">
                <div @click="submit">{{ $t("utils.confirm") }}</div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { transferFunds } from "@/api/assets";
export default {
  props: {
    textInfo: Object,
    optionArr: Array,
    canUseAmount: Number,
  },
  data() {
    return {
      coinOptions: [
        { label: "USDT", value: "USDT" },
        { label: "MATIC", value: "MATIC" },
        { label: "BNB", value: "BNB" },
        { label: "LTC", value: "LTC" },
        { label: "XRP", value: "XRP" },
        { label: "ETH", value: "ETH" },
        { label: "BTC", value: "BTC" },
        { label: "DOGE", value: "DOGE" },
        { label: "TRX", value: "TRX" },
      ],
      form: {
        transferInAccount: 3,
        transferOutAccount: 1,
        amount: "",
        coin: "usdt",
      },
      showLoading: false
    };
  },
  created() {
    // this.init();
  },
  watch: {
    // isGetRate(oldValue, newValue) {
    //   console.log("isGetRate==newValue",newValue);
    //   if (newValue) {
    //     this.init();
    //   }
    // },
  },
  mounted() {
    // this.init();
  },
  methods: {
    submit() {
      this.showLoading = true
      transferFunds({
        ...this.form,
      }).then((res) => {
        this.showLoading = false
        console.log("划转结果===>", res.data);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.$emit("upDateUser");
          this.$emit("closeDialog");
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    init() {
      //   this.changeCoin(this.form.fromSymbol);
    },
    changeBindValue() {
      [this.form.transferInAccount, this.form.transferOutAccount] = [
        this.form.transferOutAccount,
        this.form.transferInAccount,
      ];
      this.commonEmitGetCanUse();
    },
    commonEmitGetCanUse() {
      this.$emit("getCanUseAmount", {
        param1: "USDT",
        param2: this.form.transferOutAccount,
      });
    },
    //切换不同货币类型时(到)
    changeCoin2(e) {
      this.form.transferInAccount = e;
      //   this.commonEmitGetRate();
    },
    //切换不同货币类型时(从)
    changeCoin(e) {
      this.form.transferOutAccount = e;
      this.commonEmitGetCanUse();

      if (this.form.amount.length > 0) {
        this.initAllNum();
      }
    },
    initAllNum() {
      this.form.amount = this.canUseAmount ? this.canUseAmount : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.exchange_form_main {
  width: 100%;
  margin: auto;

  //background: red;
  .exchange_form_inner {
    width: 100%;
    padding: 10px 0;
  }

  .exchange_form {
    ::v-deep.el-form {
      .el-select {
        width: 400px;

        .select_box {
          .changeImg_box {
          }
        }
      }

      .el-form-item__label {
        font-size: 16px;
      }

      .el-input__icon {
        line-height: 40px;
      }
    }
  }

  .confirm_btn {
    margin-top: 40px;

    > div {
      width: 100%;
      height: 48px;
      line-height: 48px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      background: #09BA85;
    }
  }
}
</style>
