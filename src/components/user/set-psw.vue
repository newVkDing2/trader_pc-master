<template>
  <div class="exchange_form_main">
    <div class="exchange_form_inner" v-show="!showSuccess">
      <div>
        <div class="title num_bold bold">{{ $t("user.tardPwd") }}</div>
        <div class="exchange_form">
          <el-form
            :model="form"
            ref="form"
            label-width="90px"
            label-position="top"
            hide-required-asterisk="true"
          >
            <div v-if="!userInfo.detail.userTardPwd">
              <el-form-item
                :label="$t('user.tardPwd')"
                prop="zijinPsw"
                :rules="[
                  {
                    required: true,
                    message: $t('user.plsInputAssetsPsw'),
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input show-password type="number" :placeholder="$t('utils.plsInput')"   v-model="form.zijinPsw">
                </el-input>
              </el-form-item>
            </div>

            <div v-else>
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
                <el-input show-password type="number" :placeholder="$t('utils.plsInput')" v-model="form.oldPwd">
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
                <el-input show-password type="number" :placeholder="$t('utils.plsInput')" v-model="form.newPwd">
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
                <el-input show-password type="number" :placeholder="$t('utils.plsInput')" v-model="form.password">
                </el-input>
              </el-form-item>
            </div>

            <el-form-item>
              <div class="confirm_btn cur_p">
                <div v-loading="showLoading" v-if="!userInfo.detail.userTardPwd">
                  <div @click="submit">
                    {{$t('utils.confirm')}}
                  </div>
                </div>
                <div @click="editPsw" v-loading="showLoading" v-else>{{$t('utils.submit')}}</div>
              </div>
            </el-form-item>
            <div v-show="userInfo.detail.userTardPwd">
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
                {{$t('user.forgetPswTip')}}
              </p>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="edit_success" v-show="showSuccess">
      <div class="cer_result">
        <div class="cer_result_inner">
          <div class="imgBox">
            <img :src="require('@/assets/image/cer_success.png')" alt="" />
          </div>
          <div>{{$t('user.pswEditSuccess')}}</div>
        </div>
      </div>
      <div class="btn_box cur_p flex-center">
        <el-button type="primary"> {{$t('user.goTransaction')}} </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { tardPwdSetApi,updatePwdApi } from "@/api/user";
export default {
  props: {
    type: String,
    userInfo: Object,
  },
  data() {
    return {
      form: {
        zijinPsw: "",
        oldPwd: "",
        password: "",
        newPwd: "",
        signType:1
      },
      showSuccess: false,
      showLoading: false
    };
  },
  methods: {
    editPsw(){
      this.showLoading = true
        updatePwdApi({
            oldPwd: this.form.oldPwd,
            password: this.form.password,
            newPwd: this.form.newPwd,
            signType: this.form.signType,
      }).then((res) => {
          this.showLoading = false
        if (res.data.code == 200) {
            this.$emit("getNewUserInfo");
        }
      }).finally(() => {
          this.showLoading = false
      })
    },
    submit() {
      this.showLoading = true
      tardPwdSetApi({
        pwd: this.form.zijinPsw,
      }).then((res) => {
        this.showLoading = false
        if (res.data.code == 200) {
          this.showSuccess = true;
          this.$emit("getNewUserInfo");
          setTimeout(() => {
            this.$emit("getNewUserInfo");
            this.showSuccess = false;
          }, 3000);
        }
      }).finally(() => {
        this.showLoading = false
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
  .edit_success {
    //width: 100%;
    //background: red;
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
}
</style>
