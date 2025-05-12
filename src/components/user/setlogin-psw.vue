<template>
  <div class="exchange_form_main">
    <div class="exchange_form_inner">
      <div>
        <div class="title num_bold bold">{{ $t("user.loginPwd") }}</div>
        <div class="exchange_form">
          <el-form
            :model="form"
            ref="form"
            label-width="90px"
            label-position="top"
            hide-required-asterisk="true"
          >
            <el-form-item
              :label="$t('user.oldPwd')"
              prop="oldPwd"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsInputOldPwd'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                show-password
                type="number"
                :placeholder="$t('utils.plsInput')"
                v-model="form.oldPwd"
              >
              </el-input>
            </el-form-item>

            <el-form-item
              :label="$t('user.newPwd')"
              prop="newPwd"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsInputNewPwd'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                show-password
                type="number"
                :placeholder="$t('utils.plsInput')"
                v-model="form.newPwd"
              >
              </el-input>
            </el-form-item>

            <el-form-item
              :label="$t('user.confirmNewPsw')"
              prop="password"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsConfirmNewPsw'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                show-password
                type="number"
                :placeholder="$t('utils.plsInput')"
                v-model="form.password"
              >
              </el-input>
            </el-form-item>

            <el-form-item>
              <div class="confirm_btn cur_p">
                <div v-loading="showLoading">
                <div @click="submit">{{ $t("utils.confirm") }}</div>
                </div>
              </div>
            </el-form-item>
            <div>
              <p
                class="cur_p"
                @click="
                  $router.push({
                    path: '/user/index',
                    query: { key: 'certified' },
                  })
                "
                style="font-size: 12px; color: #09BA85; margin-top: 20px"
              >
                {{ $t("user.useEmailEdit") }}
              </p>
            </div>
          </el-form>
        </div>
      </div>

      <!-- <div v-else>
          <div class="cer_result">
            <div class="cer_result_inner">
              <div class="imgBox">
                <img :src="require('@/assets/image/cer_success.png')" alt="" />
              </div>
              <div>资金密码修改成功</div>
            </div>
          </div>
          <div class="btn_box cur_p flex-center">
            <el-button type="primary"> 去交易 </el-button>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import { updateUserLoginPwd } from "@/api/user";
export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {
      form: {
        oldPwd: "",
        password: "",
        newPwd: "",
        userId: "",
      },
      showLoading: false
    };
  },
  methods: {
    submit() {
      this.showLoading =  true
      this.form.userId = this.userInfo.detail.userId;
      updateUserLoginPwd({
        ...this.form,
      }).then((res) => {
        this.showLoading =  false
        if (res.data.code == 200) {
          this.$emit("getNewUserInfo");
        }
      }).finally(() => {
        this.showLoading =  false
      })
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
  .cer_result {
    .cer_result_inner {
      > div {
        margin-top: 70px;
        text-align: center;

        img {
          width: 100px;
        }
      }
    }
  }

  .btn_box {
    margin-top: 100px;

    .el-button {
      width: 200px;
      height: 50px;
      font-size: 16px;
      background: #09BA85;
    }
  }

  .confirm_btn {
    margin-top: 60px;

    > div {
      width: 227px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      background: #09BA85;
    }
  }
}
</style>
