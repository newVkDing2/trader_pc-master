<template>
  <div class="fit-background-di device-management-box">
    <div class="actives-container">
      <div class="fit-background new-common-card">
        <div class="actives-wrap">
          <div class="fit-tc-border-color title">
            <h2>{{ currCoinLangFun("dev_sbgl") }}</h2>
          </div>
          <div class="table-border-null" v-loading="deviceLoading">
            <el-table :data="deviceData" style="width: 100%">
              <el-table-column prop="last_login_time" :label="`${currCoinLangFun('dev_scdlsj')}`"
                min-width="180"></el-table-column>
              <el-table-column prop="device_name" :label="`${currCoinLangFun('dev_sb')}`"
                min-width="180"></el-table-column>
              <el-table-column prop="ip" :label="`${currCoinLangFun('dev_ipdz')}`"></el-table-column>
              <el-table-column prop="login_address" :label="`${currCoinLangFun('dev_dldz')}`"></el-table-column>
              <el-table-column prop="login_aulh" :label="`${currCoinLangFun('dev_dlmyz')}`">
                <template slot-scope="scope">
                  <div>
                    <span class="box-switch-green" :class="{ active: scope.row.login_aulh == '1' }"
                      @click="changeAulh(scope.row)">
                      <span class="box-switch_label" v-if="scope.row.login_aulh == '1'">NO</span>
                      <span class="box-switch_content" :class="{ active: scope.row.login_aulh == '1' }"></span>
                    </span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="login_status" :label="`${currCoinLangFun('orders_table_state', 'full')}`">
                <template slot-scope="scope">
                  <div>
                    {{
                                        scope.row.login_status == "1"
                                        ? `${currCoinLangFun("dev_dlz")}`
                                        : ""
                                        }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column :label="currCoinLangFun('operation', 'all')">
                <template slot-scope="scope">
                  <div style="display: flex; justify-content: space-between">
                    <span class="fit-tc-tertiary active-text del-btn"
                      style="background: none; font-size: 14px; cursor: pointer" @click="deleteDeviceFun(scope.row)">{{
                                            currCoinLangFun("text_sc", "all") }}</span>
                    <span>
                      <i class="el-icon-monitor"></i>
                    </span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="fit-background new-common-card" style="margin-top: 24px">
        <div class="actives-wrap">
          <div class="fit-tc-border-color title">
            <h2>{{ currCoinLangFun("dev_dljl") }}</h2>
            <p class="fit-tc-tip subTitle-text">{{ currCoinLangFun("dev_zjstjl") }}</p>
          </div>
          <div class="table-border-null">
            <el-table :data="login_logs" v-loading="loginLogsLoading" style="width: 100%">
              <el-table-column prop="login_time" :label="`${currCoinLangFun('dev_scdlsj')}`"></el-table-column>
              <el-table-column prop="login_ip" :label="`${currCoinLangFun('dev_ipdz')}`"></el-table-column>
              <el-table-column prop="login_address" :label="`${currCoinLangFun('dev_dldz')}`"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <!-- 验证码 -->
    <el-dialog width="480px" append-to-body modal-append-to-body :visible.sync="showSendCodeDialog"
      class="messageVaildate">
      <div class="verify-code-container">
        <div class="verify-code-wrapper">
          <div class="verify-code-title-lr">
            <dd>
              <div class="fit-tc-primary title-text">
                <span>
                  {{ currCoinLangFun("text_qsrbd", "popup_tips")
                                    }}{{ sendCodeContent.typeText }}
                  <span style="font-weight: bold">
                    {{
                                        sendCodeContent.ellipsis_account
                                        }}
                  </span>
                  {{ currCoinLangFun("text_sdyzm", "popup_tips") }}
                </span>
              </div>
              <div class="yz-container">
                <el-button type="primary fit-tc-button" size="mini" :loading="sendingCode"
                  @click="sendVerificationCode()">{{ sendCodeBtnText }}</el-button>
              </div>
            </dd>
          </div>
          <div class="verify-code-wrap">
            <el-input v-model="verificationCode" placeholder="请输入6位验证码" :maxlength="6"
              onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
            <!-- <p class="error-tips">验证码为6位</p> -->
          </div>
          <div class="btn-box">
            <el-button type="primary fit-tc-button" size="medium" :disabled="verificationCode.length != 6"
              @click="confirmCode()">{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getLoginLogs,
  getDeviceLogs,
  deleteDevice,
  sendEmailApi,
  sendPhoneSmsApi,
  updateDeviceAulh,
} from '@/api/user.js'

export default {
  data() {
    return {
      deviceLoading: false,
      loginLogsLoading: false,
      deviceData: [],
      login_logs: [],
      showSendCodeDialog: false, //发送验证码弹框
      verificationCode: '',
      sendingCode: false, //正在发送验证码
      sendCodeBtnText: this.currCoinLangFun('text_fsyzm', 'all'), //发送验证码
      SendCodeDialogTips: {},
      sendCodeContent: {
        typeText: this.currCoinLangFun('register_email', 'home_index'), //邮箱
        account: '',
        accountType: '1',
        routerAddress: '', //跳转地址
      },
      currRow: {},
      timeout: null,
    }
  },
  created() {
    this.loginLogs()
    this.deviceLogs()
  },
  methods: {
    currCoinLangFun(code, type = 'center') {
      return this.coinLangFun(type, code)
    },
    loginLogs() {
      this.loginLogsLoading = true
      this.login_logs = []
      getLoginLogs()
        .then((res) => {
          this.loginLogsLoading = false
          this.login_logs = res.data.data.map((item) => {
            if (!item.login_address) {
              item.login_address = '-'
            }
            return item
          })
        })
        .catch(() => {
          this.loginLogsLoading = false
        })
    },
    deviceLogs() {
      this.deviceLoading = true
      this.deviceData = []
      getDeviceLogs()
        .then((res) => {
          this.deviceLoading = false
          this.deviceData = res.data.data
        })
        .catch(() => {
          this.deviceLoading = false
        })
    },
    deleteDeviceFun(row) {
      this.$confirm(
        `${this.currCoinLangFun('dev_qrscsb')} ${row.device_name}`, //确认删除设备--
        `${this.currCoinLangFun('dev_scxrsb')}`, //删除信任设备
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'warning',
        }
      ).then(async () => {
        deleteDevice(row.device_id).then(() => {
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('text_sccg', 'popup_tips'),
          }) //删除成功
          this.deviceLogs()
        })
      })
    },
    changeAulh(row) {
      this.currRow = row

      if (this.userInfo.phone) {
        this.sendCodeContent = {
          typeText: this.currCoinLangFun('text_phone', 'home_index'), //手机
          accountType: 1,
          account: this.userInfo.phone,
          ellipsis_account: this.replacePhone,
        }
      } else {
        this.sendCodeContent = {
          typeText: this.currCoinLangFun('register_email', 'home_index'), //邮箱
          accountType: 2,
          account: this.userInfo.email,
          ellipsis_account: this.replaceEmail,
        }
      }

      this.showSendCodeDialog = true
    },
    async sendVerificationCode() {
      this.sendCodeBtnText = this.currCoinLangFun('text_sending', 'popup_tips') //正在发送

      let dataRes = () => {
        return new Promise((resolve, reject) => {
          if (this.userInfo.phone) {
            sendPhoneSmsApi({
              type: 3,
              phone: this.sendCodeContent.account,
            })
              .then((res) => {
                resolve(res)
              })
              .catch(() => {
                reject()
              })
          } else {
            sendEmailApi({
              type: 3,
              email: this.sendCodeContent.account,
            })
              .then((res) => {
                resolve(res)
              })
              .catch(() => {
                reject()
              })
          }
        })
      }

      dataRes()
        .then((res) => {
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('tip_fsyxcg', 'popup_tips'), //发送成功请留意你的邮箱
          })
          let seconds = 60
          this.sendCodeBtnText =
            seconds + `s ${this.currCoinLangFun('text_resend', 'popup_tips')}` //重新发送
          this.sendingCode = true
          this.timeout = setInterval(() => {
            if (seconds == 1) {
              clearInterval(this.timeout)
              this.sendingCode = false
              this.sendCodeBtnText = this.currCoinLangFun(
                'text_resend',
                'popup_tips'
              ) //重新发送
            } else {
              seconds--
              this.sendCodeBtnText =
                seconds +
                `s ${this.currCoinLangFun('text_resend', 'popup_tips')}` //重新发送
            }
          }, 1000)
        })
        .catch((err) => {
          // this.$message({ type: "error", message: "网络异常" });
          this.sendCodeBtnText = this.currCoinLangFun(
            'text_resend',
            'popup_tips'
          ) //重新发送
          this.sendingCode = false
        })
    },
    confirmCode() {
      updateDeviceAulh({
        account: this.sendCodeContent.account,
        deviceId: this.currRow.device_id,
        loginAulh: this.currRow.login_aulh == 1 ? '0' : '1',
        verificationCode: this.verificationCode,
        accountType: this.sendCodeContent.accountType,
      })
        .then((res) => {
          clearInterval(this.timeout)
          this.sendingCode = false
          this.sendCodeBtnText = this.currCoinLangFun('text_fsyzm', 'all') //发送验证码
          this.showSendCodeDialog = false
          this.verificationCode = ''

          this.deviceLogs()
        })
        .catch(() => {
          this.verificationCode = ''
        })
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
    replacePhone() {
      let text = this.userInfo.phone
      return text.slice(0, 3) + '***' + text.slice(-4)
    },
    replaceEmail() {
      let text = this.userInfo.email
      return text.slice(0, 2) + '***' + text.slice(-2)
    },
  },
}
</script>

<style lang="scss" scoped>
.device-management-box {
  .new-common-card {
    padding: 24px;
  }

  .actives-wrap {
    .title {
      display: flex;
      align-items: center;
      border-bottom: 1px solid;
      padding-bottom: 24px !important;
      margin-bottom: 24px !important;

      h2 {
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
      }

      .subTitle-text {
        line-height: 16px;
        font-size: 12px;
        margin-left: 8px !important;
      }
    }

    ::v-deep .el-table {
      th {
        font-size: 12px;
        color: rgb(104, 129, 153);
      }
    }
  }

  .box-switch-green {
    width: 26px;
    height: 12px;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 2px;
    position: relative;
    z-index: 0;
    display: inline-block;
    cursor: pointer;
    margin-right: 12px !important;

    &.active {
      background: linear-gradient(270deg, #53e6b4 39.74%, hsla(0, 0%, 100%, 0));
    }

    .box-switch_label {
      font-size: 16px;
      line-height: 8px;
      transform: scale(0.5);
      display: inline-block;
      position: absolute;
      z-index: 0;
      top: 1px;
      left: -3px;
    }

    .box-switch_content {
      border-color: #384252;
      width: 14px;
      height: 16px;
      box-shadow: 0 4px 12px -2px rgba(56, 68, 108, 0.08);
      border-radius: 4px;
      position: absolute;
      z-index: 1;
      left: -7px;
      top: -4px;
      transition: all 0.3s;
      border: 1px solid;

      &.active {
        left: 17px;
      }
    }
  }
}

.messageVaildate {
  .verify-code-container {
    margin: 0 -8px;

    .verify-code-wrapper {
      position: relative;

      ::v-deep.el-input {

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }
      }

      .verify-code-title-lr {
        padding: 0;
        margin: 0 0 36px;

        dd {
          margin-right: 56px;
          margin-left: 0;
          width: auto;
          height: auto;

          .title-text {
            display: flex;
            align-items: center;
            line-height: 20px !important;
            font-size: 14px !important;
          }

          .yz-container {
            button {
              margin-top: 8px;
            }
          }
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
  }
}
</style>

<style lang="scss">
.theme-night {
  .device-management-box {
    .box-switch-green {
      border-color: #262d38;
      background: linear-gradient(270deg, transparent, #636363);

      .box-switch_content {
        background-color: #384252;
        border-color: #384252;
      }
    }
  }
}

.theme-daytime {
  .device-management-box {
    .box-switch-green {
      background: linear-gradient(270deg, transparent, #384252);
      border-color: #384252;

      .box-switch_content {
        background-color: #fff;
        border-color: #384252;
      }
    }
  }
}
</style>