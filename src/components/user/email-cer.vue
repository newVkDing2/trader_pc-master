<template>
  <div class="exchange_form_main">
    <div class="exchange_form_inner">
      <div class="title num_bold bold">{{ $t("user.certified") }}</div>
      <div class="exchange_form">
        <el-form
          :model="form"
          ref="form"
          label-width="90px"
          label-position="top"
          hide-required-asterisk="true"
        >
          <el-form-item
            :label="$t('user.emailAddress')"
            prop="email"
            :rules="[
              {
                required: true,
                message: $t('user.plsFillEmailAddress'),
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              type="text"
              :placeholder="$t('utils.plsInput')"
              v-model="form.email"
            >
            </el-input>
          </el-form-item>
          <!-- <el-form-item label=" "> 可用资产: 0.00791USDT </el-form-item> -->

          <el-form-item
            :label="$t('user.code')"
            prop="emailCode"
            :rules="[
              {
                required: true,
                message: $t('user.plsFillCode'),
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              :placeholder="$t('utils.plsInput')"
              v-model="form.emailCode"
            >
              <template slot="append">
                <div @click="sendCode">{{ $t("user.send") }}</div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <div class="confirm_btn">
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
import { sendEmailCode, bindEmail } from "@/api/user";
export default {
  props: {
    textInfo: Object,
    optionArr: Array,
    showRate: Boolean,
    beSelectValue: String,
  },
  data() {
    return {
      form: {
        email: "",
        emailCode: "",
      },
      showLoading: false
    };
  },
  methods: {
    submit() {
      this.showLoading = true
      bindEmail({
        ...this.form,
      }).then((res) => {
        this.showLoading = false
        // console.log("发送邮箱结果===》", res.data);
        if (res.data.code == 200) {
          this.$message({
            message: this.$t("user.emailCerSuccess"), //邮箱认证成功
            type: "success",
          });
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    sendCode() {
      sendEmailCode({
        codeType: "BIND",
        email: this.form.email,
      }).then((res) => {
        console.log("发送邮箱结果===》", res.data);
        if (res.data.code == 200) {
          this.$message({
            message: this.$t("user.sendCodeToEmail"), //验证码已发送到您的邮箱，请注意查收
            type: "success",
          });
        }
      });
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
    width: 550px;
    padding: 40px 0;
  }

  .title {
    font-size: 24px;
    color: #1e2329;
  }

  .exchange_form {
    ::v-deep.el-form {
      .el-select {
        width: 350px;

        .select_box {
        }
      }

      .el-form-item__label {
        font-size: 14px;
        padding: 0;
      }

      .el-input__icon {
        line-height: 40px;
      }
    }
  }

  .confirm_btn {
    margin-top: 40px;

    > div {
      width: 300px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      background: #09BA85;
    }
  }
}
</style>
