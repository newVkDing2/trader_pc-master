<template>
  <div class="exchange_form_main">
    <div class="exchange_form_inner">
      <div class="title bold">{{ $t(textInfo.title) }}</div>
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
                v-model="form.fromSymbol"
                :placeholder="$t('assets.plsSelectCoinType')"
                clearable
                @change="changeCoin"
              >
                <el-option
                  v-for="option in optionArr"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
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
                v-model="form.toSymbol"
                :placeholder="$t('assets.plsSelectCoinType')"
                clearable
                @change="changeCoin2"
              >
                <el-option
                  v-for="option2 in optionArr"
                  :key="option2.value"
                  :label="option2.label"
                  :value="option2.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item
            :label="$t(textInfo.label)"
            prop="total"
            :rules="[
              {
                required: true,
                message: $t('assets.plsInputWithdrawNum'),
                trigger: 'blur',
              },
            ]"
          >
            <el-input v-model="form.total" :placeholder="$t('utils.plsInput')">
              <template slot="append">
                <div class="all_btn cur_p" @click="initAllNum">
                  {{ $t(textInfo.butText) }}
                </div>
              </template>
            </el-input>
            <div>
              {{ $t("assets.canUseAssets") }}: {{ canUseAmount }}
              {{ form.fromSymbol }}
            </div>
          </el-form-item>
          <!-- <el-form-item label=" "> 可用资产: 0.00791USDT </el-form-item> -->

          <div style="height: 20px"></div>

          <el-form-item label="">
            {{ $t("assets.todayExchangeRate") }}: 1 {{ form.fromSymbol }} ≈
            {{ rate }}{{ form.toSymbol }}
          </el-form-item>

          <el-form-item>
            <div class="confirm_btn cur_d">
              <div v-loading="showLoading">
                <div @click="submit" class="cur_d">{{ $t("utils.confirm") }}</div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyExchange } from "@/api/assets";
export default {
  props: {
    textInfo: Object,
    optionArr: Array,
    showRate: Boolean,
    canUseAmount: Number,
    rate: String,
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
        fromSymbol: "USDT",
        toSymbol: "ETH",
        total: "",
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
      const data = {
        fromSymbol: this.form.fromSymbol.toLowerCase(),
        toSymbol: this.form.toSymbol.toLowerCase(),
        total: this.form.total,
      };
      this.showLoading = true
      currencyExchange({
        ...data,
      }).then((res) => {
        this.showLoading = false
        console.log("闪兑结果===>", res.data);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.$emit("upDateUser");
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    changeBindValue() {
      [this.form.fromSymbol, this.form.toSymbol] = [
        this.form.toSymbol,
        this.form.fromSymbol,
      ];
      this.commonEmitGetRate();
      // console.log("fromSymbol===>", this.form.fromSymbol);
      this.commonEmitGetCanUse();
    },
    //调用父组件的获取汇率接口
    commonEmitGetRate() {
      this.$emit("getRate", {
        param1: this.form.fromSymbol.toLowerCase(),
        param2: this.form.toSymbol.toLowerCase(),
      });
    },
    commonEmitGetCanUse() {
      this.$emit("getCanUseAmount", {
        param1: this.form.fromSymbol,
        param2: 1,
      });
    },
    //切换不同货币类型时(到)
    changeCoin2() {
      this.commonEmitGetRate();
    },
    //切换不同货币类型时(从)
    changeCoin(e) {
      this.commonEmitGetRate();
      this.commonEmitGetCanUse();
      if (this.form.total.length > 0) {
        this.initAllNum();
        console.log("重新赋值form.totol");
      }
    },
    initAllNum() {
      this.form.total = this.canUseAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.exchange_form_main {
  width: 1200px;
  margin: auto;

  //background: red;
  .exchange_form_inner {
    width: 750px;
    padding: 40px 0;
  }

  .title {
    font-size: 36px;
    color: #1e2329;
  }

  .exchange_form {
    ::v-deep.el-form {
      .el-select {
        width: 350px;

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
      width: 600px;
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
