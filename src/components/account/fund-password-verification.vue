<template>
  <div class="fundPasswordVerification">
    <el-dialog
      title="确认资金密码"
      width="560px"
      :visible.sync="fundPopupDialog"
      :close-on-click-modal="false"
      @close="fundCloseDialog()"
    >
      <div class="verify-code-wrap">
        <el-input
          v-model="verificationCode"
          :placeholder="`${currCoinLangFun('text_sryzm', 'popup_tips')}`"
          :maxlength="30"
          onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
        ></el-input>
        <p
          class="error-tips"
          @click="
            $router.push({
              path: `/account/center/security/setting/trade-pwd`,
            })
          "
        >
          忘记资金密码？
        </p>
      </div>
      <div class="btn-box">
        <el-button
          type="primary fit-tc-button"
          size="medium"
          :disabled="verificationCode.length != 6"
          :loading="isConfirmCode"
          @click="fundCloseDialog()"
          >{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    fundPopupDialog: Boolean,
    fundCloseDialog: Function,
  },
  data() {
    return {
      verificationCode: "",
    };
  },
  methods: {
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
  },
};
</script>

<style lang="scss" scoped>
.fundPasswordVerification {
  .verify-code-wrap {
    .error-tips {
      color: #0020FD;
      cursor: pointer;
      font-size: 12px;
      margin-top: 6px;
      text-align: right;
    }
  }
  .btn-box {
    button {
      display: block;
      width: 100%;
      height: 40px;
      margin-top: 24px;
      font-size: 16px;
      box-shadow: 0 1px 2px rgba(56, 68, 108, 0.04);
      border-radius: 4px;
    }
  }
}
</style>>