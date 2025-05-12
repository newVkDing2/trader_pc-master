<template>
  <div class="fit-background-di login-pwd-box">
    <div class="account-container">
      <div class="account-wrapper">
        <div class="pagebg">
          <div class="edit-container">
            <div class="fit-background edit-title">
              <a href="javascript:void(0);" @click="
                                $router.push({
                                  path: `/account/center/security`,
                                })
                              " class="fit-tc-tertiary active-text">
                <i class="el-icon-back"> </i>
                {{ currCoinLangFun("text_fhaqsz") }}
              </a>
              <h2>{{ currCoinLangFun("pwd_xgdlmm") }}</h2>
              <div class="fit-tc-primary warning-tips">
                <i class="el-icon-warning"></i>
                {{ currCoinLangFun("text_zjaqts", "popup_tips") }}
              </div>
            </div>
            <div class="fit-background phone-wrapper">
              <div class="phone-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                  class="pwd-form-container el-form--label-top">
                  <el-form-item prop="oldPassword">
                    <div slot="label" style="display: flex; justify-content: space-between">
                      <span>{{ currCoinLangFun("pwd_ymm") }}</span>
                      <span class="fit-tc-tertiary active-text" style="font-size: 12px; cursor: pointer"
                        @click="$router.push({ path: '/user/reset' })">{{ currCoinLangFun("text_wjmm") }}</span>
                    </div>
                    <el-input type="password" v-model="ruleForm.oldPassword" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item prop="newPassword">
                    <div slot="label">
                      {{ currCoinLangFun("pwd_xmm") }}
                      <div style="margin-top: -20px">
                        <span class="fit-tc-tip" style="font-size: 12px">{{
                                                  currCoinLangFun("pwd_mmszgz")
                                                  }}</span>
                      </div>
                    </div>
                    <el-input type="password" v-model="ruleForm.newPassword" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item :label="`${currCoinLangFun('text_qrmm')}`" prop="newPassword1">
                    <el-input type="password" v-model="ruleForm.newPassword1" :clearable="false" show-password></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" class="submitBtn" @click="submitForm('ruleForm')"
                      :disabled="!isValidatePass">{{
                                            currCoinLangFun("text_qrxg", "popup_tips")
                                            }}</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validatePassword, passwordStrength } from "@/util/validate.js";

export default {
  data() {
    let validateOldPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("pwd_srymm"))); //请输入原密码
      } else {
        callback();
      }
    };
    let validateOldPwd2 = (rule, value, callback) => {
      if (!validatePassword(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else {
        callback();
      }
    };
    let validateNewPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("pwd_srxmm"))); //请输入新密码
      } else {
        callback();
      }
    };
    let validateNewPwd2 = (rule, value, callback) => {
      if (
        this.ruleForm.newPassword1 != "" &&
        value !== this.ruleForm.newPassword1
      ) {
        callback(new Error(this.currCoinLangFun("tip_mmbyz"))); //两次输入密码不一致!
      } else if (!validatePassword(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else {
        if (passwordStrength(value)) {
          callback();
        } else {
          callback(
            new Error(
              this.currCoinLangFun(
                "bxmzszfhzmrylzhhdmm_tips",
                "login_and_register"
              )
            )
          ); //必须满足数字，符号，字母任意两种混合的密码。
        }
      }
    };
    let validateConfirmPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.currCoinLangFun("tip_qsrzqmm"))); //请输入确认密码
      } else {
        callback();
      }
    };
    let validateConfirmPwd2 = (rule, value, callback) => {
      if (
        this.ruleForm.newPassword != "" &&
        value !== this.ruleForm.newPassword
      ) {
        callback(new Error(this.currCoinLangFun("tip_mmbyz"))); //两次输入密码不一致!
      } else if (!validatePassword(value)) {
        callback(new Error(this.currCoinLangFun("tip_correct_pwd"))); //请输入正确的密码格式
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        newPassword1: "",
      },
      rules: {
        oldPassword: [
          { validator: validateOldPwd, trigger: "blur" },
          { validator: validateOldPwd2, trigger: "change" },
        ],
        newPassword: [
          { validator: validateNewPwd, trigger: "blur" },
          { validator: validateNewPwd2, trigger: "change" },
        ],
        newPassword1: [
          { validator: validateConfirmPwd, trigger: "blur" },
          { validator: validateConfirmPwd2, trigger: "change" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["updatePassword", "FedLogOut"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updatePassword(this.ruleForm).then((res) => {
            this.$message({
              type: "success",
              message: this.currCoinLangFun("pwd_xgcgcxdl"), //您的密码已修改,请重新登录
            });
            setTimeout(() => {
              this.FedLogOut().then(() => {
                this.$router.push({
                  path: "/",
                });
              });
            }, 800);
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    isValidatePass() {
      if (
        validatePassword(this.ruleForm.oldPassword) &&
        validatePassword(this.ruleForm.newPassword) &&
        validatePassword(this.ruleForm.newPassword1) &&
        this.ruleForm.newPassword == this.ruleForm.newPassword1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-pwd-box {
  .account-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 0 48px;
    position: relative;
    box-sizing: border-box;
    min-height: calc(100vh - 517px);

    .account-wrapper {
      .edit-title {
        padding-left: 24px !important;
        padding-right: 24px !important;
        padding-top: 24px !important;
        padding-bottom: 24px !important;
        margin-bottom: 24px !important;

        a {
          line-height: 20px;
          display: block;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .warning-tips {
          padding: 8px 16px;
          background: rgba(255, 160, 51, 0.08);
          border-radius: 8px;
          line-height: 20px;
          font-size: 14px;
          margin-top: 16px;
        }
      }

      .phone-wrapper {
        padding-top: 40px !important;
        padding-bottom: 40px !important;

        .phone-form {
          display: flex;
          align-items: center;
          justify-content: center;

          .pwd-form-container {
            width: 400px;

            ::v-deep.el-form-item__label {
              width: 100%;
              padding: 0 !important;
            }

            ::v-deep .el-input__validateIcon {
              display: none;
            }

            .submitBtn {
              width: 100%;

              &.is-disabled {
                border: 0;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>


<style lang="scss">
.theme-night {
  .login-pwd-box {
    .warning-tips {
      i {
        color: #ffa033;
      }
    }

    .pwd-form-container {
      .submitBtn {
        &.is-disabled {
          color: #688199 !important;
          background-color: rgb(56, 66, 82);
        }
      }
    }
  }
}

.theme-daytime {
  .login-pwd-box {
    .warning-tips {
      i {
        color: #e06100;
      }
    }

    .pwd-form-container {
      .submitBtn {
        &.is-disabled {
          color: #a3b2c2 !important;
          background-color: rgba(131, 134, 143, 0.16);
        }
      }
    }
  }
}
</style>