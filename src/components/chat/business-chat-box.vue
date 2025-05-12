<template>
  <div class="business-chat-box">
    <el-dialog width="1036px" :visible.sync="businessChatDialog" @close="closeDialogFun()">
      <div class="flex-box">
        <div class="header-border fit-background left-box">
          <div class="top left-top">
            <div class="tabs fit-tc-tertiary" v-if="orderData.type == 1 && orderData.order_status != 4">
              <div :class="{ active: orderData.order_status == 1 }">
                <span>1</span>
                {{
                                isMerchant
                                ? currCoinLangFun("text_xyhzhhk")
                                : currCoinLangFun("xsjzhhk_text")
                                }}
              </div>
              <div :class="{ active: orderData.order_status == 2 }">
                <span>2</span>
                {{ currCoinLangFun("dddfhdkx_text") }}
              </div>
              <div :class="{ active: orderData.order_status == 3 }">
                <span>3</span>
                {{ currCoinLangFun("jiaoyiwangcheng_text") }}
              </div>
            </div>
            <div class="tabs fit-tc-tertiary" v-if="orderData.type == 2 && orderData.order_status != 4">
              <div :class="{
                                active: orderData.order_status == 1,
                              }">
                <span>1</span>
                {{
                                isMerchant
                                ? currCoinLangFun("text_ddyhhk")
                                : currCoinLangFun("ddsjhk_text")
                                }}
              </div>
              <div :class="{ active: orderData.order_status == 2 }">
                <span>2</span>
                {{ currCoinLangFun("heduikuangxian_text") }}
              </div>
              <div :class="{ active: orderData.order_status == 3 }">
                <span>{{ 3 }}</span>
                {{ currCoinLangFun("jiaoyiwangcheng_text") }}
              </div>
            </div>
            <div class="tabs fit-tc-tertiary" v-if="orderData.order_status == 4">
              <div class="active">
                <span>1</span>
                {{ currCoinLangFun("text_jyyqx") }}
              </div>
            </div>
          </div>
          <div class="order-content">
            <div class="first">
              <div class="tb-order fit-tc-primary">
                <div>
                  <div class="coin-name">
                    <span class="buy" v-if="orderData.type == '1'">
                      {{
                                            currCoinLangFun("buy_text", "all")
                                            }}
                    </span>
                    <span class="sell" v-if="orderData.type == '2'">{{ currCoinLangFun("sell_text", "all") }}</span>
                    {{ orderData.coin_symbol }}
                  </div>
                  <div class="order-num">
                    <span class="fit-tc-tertiary">
                      {{
                                            currCoinLangFun("ddh_text", "move_contract")
                                            }}
                    </span>
                    {{ orderData.order_code }}
                  </div>
                </div>
                <div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("entrust_money", "full") }}
                    <span style="padding-left: 5px">
                      {{ ` ${orderData.exchange_code}`
                                            }}{{
                                            toThousands(Number(orderData.fiat_currency_amount))
                                            }}
                    </span>
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("text_unit_price", "exchange") }}
                    <span class="fit-tc-primary">
                      {{ orderData.exchange_code
                                            }}{{ toThousands(Number(orderData.unit_price)) }}
                    </span>
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_num", "exchange") }}
                    <span class="fit-tc-primary">
                      {{ toThousands(Number(orderData.coin_cou)) }}
                      {{ orderData.coin_symbol }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="payee-info fit-tc-primary">
                <!-- 商家不需要倒计时 -->
                <div class="payee-info-top" v-if="!isMerchant">
                  <div class="left" v-if="orderData.type == '1'">{{ currCoinLangFun("qxyxzhfk_text") }}</div>
                  <div class="right" v-if="orderData.order_status == 1">
                    <span class="timeDown">{{ countDown }}</span>
                    {{ currCoinLangFun("wfkddjgb_text") }}
                  </div>
                  <div class="right" v-if="orderData.order_status == 2">{{ currCoinLangFun("yfk_zzddsjhs_text") }}</div>
                </div>
                <div class="bank-card-info">
                  <div class="title">
                    <i class="el-icon-bank-card"></i>
                    {{ currCoinLangFun("bank_card_text", "all") }}
                  </div>
                  <div class="fit-background-di detail">
                    <div>
                      <span>
                        {{
                                                currCoinLangFun("merinfo_payee", "center")
                                                }}
                      </span>
                      <em>{{ orderData.name }}</em>
                      <i class="copy el-icon-copy-document" @click="copy(orderData.name)"></i>
                    </div>
                    <div>
                      <span>{{ currCoinLangFun("yhkkh_text") }}</span>
                      <em>{{ orderData.account }}</em>
                      <i class="copy el-icon-copy-document" @click="copy(orderData.account)"></i>
                    </div>
                    <div>
                      <span>{{ currCoinLangFun("kaihuhang_text") }}</span>
                      <em>{{ orderData.bank }}</em>
                      <i class="copy el-icon-copy-document" @click="copy(orderData.bank)"></i>
                    </div>
                    <div v-if="orderData.branch">
                      <span>
                        {{ currCoinLangFun("kaihuzhihang_text")
                                                }}{{ currCoinLangFun("kaihuzhihang_text") }}
                      </span>
                      <em>{{ orderData.branch }}</em>
                      <i class="copy el-icon-copy-document" @click="copy(orderData.branch)"></i>
                    </div>
                  </div>
                </div>
                <div class="tips fit-tc-primary">
                  <p class="tips-title">{{ currCoinLangFun("zzzysx_text") }}</p>
                  <p>{{ currCoinLangFun("zysx_tips1") }}</p>
                  <p>{{ currCoinLangFun("zysx_tips2") }}</p>
                  <p>{{ currCoinLangFun("zysx_tips3") }}</p>
                  <p class="tips-footer">{{ currCoinLangFun("zysx_tips5") }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ricorso-box">
            <el-button type="primary" size="small" @click="openAppealFun()">
              <div v-if="appealStatus==0">{{currCoinLangFun("shensu_text")}}</div>
              <div v-else-if="appealStatus==1">
                <span>{{currCoinLangFun("shenshuzhong_tips")}}</span>
                <span style="color: #e9bf4d; margin-left: 6px">{{ appealTime }}</span>
              </div>
              <div v-else-if="appealStatus==6">
                <span>{{currCoinLangFun("shenshuzhong_tips")}}</span>
              </div>
              <div v-else-if="appealStatus==2">{{currCoinLangFun("shenshuyijieshu_tips")}}</div>
            </el-button>
          </div>
          <div class="btn-box" v-if="orderData.order_status == 1">
            <!-- 商家不能取消订单 -->
            <template v-if="!isMerchant">
              <el-button size="small" @click="cancelOrder" :loading="requesting">{{ currCoinLangFun("quxiaojiaoyi_text")
                              }}</el-button>
            </template>

            <el-button type="primary" size="small" v-if="orderData.type == 1" @click="payOrder" :loading="requesting">{{
                          currCoinLangFun("woyifukuang_text") }}</el-button>
          </div>
          <div v-if="orderData.order_status == 2" class="btn-box">
            <el-button type="primary" size="small" v-if="orderData.type == 2" @click="completeOrder"
              :loading="requesting">{{ currCoinLangFun("qrskbfb_text") }}</el-button>
          </div>
          <div v-if="orderData.order_status == 3 || orderData.order_status == 4" class="btn-box">
            <span class="status_text fit-tc-primary" v-if="orderData.order_status == 3">{{ currCoinLangFun("ddywc_text")
                          }}</span>
            <span class="status_text fit-tc-primary" v-if="orderData.order_status == 4">{{ currCoinLangFun("ddyqx_nav")
                          }}</span>
            <el-button type="primary" size="small" @click="closeDialogFun()">{{ currCoinLangFun("close_window", "all")
                          }}</el-button>
          </div>
        </div>
        <div class="header-border fit-background-di right-box">
          <div class="top right-top">
            <div class="title fit-tc-primary">
              <i class="el-icon-chat-line-square"></i>
              {{
                            isMerchant
                            ? currCoinLangFun("chat_with_user")
                            : currCoinLangFun("chat_with_business")
                            }}
            </div>
            <div class="close">
              <i class="el-icon-close fit-tc-tertiary" @click="closeDialogFun()"></i>
            </div>
          </div>
          <div class="chat-content" ref="contentListBox">
            <ul class="content-list">
              <li v-for="item in chatData" :key="item.id">
                <div class="other" v-if="
                                    item.blade_user_id != userInfo.blade_user_id &&
                                    item.blade_user_id != '-1'
                                  ">
                  <div class="time">
                    <span class="online"></span>
                    <span class="fit-tc-primary">{{ item.create_time }}</span>
                  </div>
                  <div class="content">
                    <div class="text" v-if="item.content_type == '1'">{{ item.content }}</div>
                    <div class="image" v-if="item.content_type == '2'">
                      <el-image :src="item.content" lazy :preview-src-list="allImgList"></el-image>
                    </div>
                  </div>
                </div>
                <div class="system" v-if="item.blade_user_id == '-1'">
                  <div class="normal-tips">
                    {{ item.content }}
                    <em class="fit-tc-tertiary">[{{ item.create_time }}]</em>
                  </div>
                </div>
                <div class="own" v-if="item.blade_user_id == userInfo.blade_user_id">
                  <div class="time">
                    <span class="fit-tc-primary">{{ item.create_time }}</span>
                    <span class="icon" :style="{ 'background-image': `url(${userInfo.avatar})` }"></span>
                  </div>
                  <div class="content">
                    <div class="text" v-if="item.content_type == '1'">{{ item.content }}</div>
                    <div class="image" v-if="item.content_type == '2'">
                      <el-image :src="item.content" lazy :preview-src-list="allImgList"></el-image>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="input-box">
            <div class="function-area fit-tc-primary">
              <div class="upload-image">
                <el-upload class="avatar-uploader" :action="action" accept="image/*" :show-file-list="false"
                  :before-upload="(file) => customUploadFun(file)">
                  <i class="fa fa-picture-o"></i>
                </el-upload>
              </div>
            </div>
            <div class="input-area">
              <el-input v-model="EnteringText" type="textarea" autosize
                :placeholder="currCoinLangFun('qsrnrahcjfs_text', 'user')" resize="none" :maxlength="400" show-word-limit
                @keydown.enter.native="handKeyCode($event)"></el-input>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <appealBox v-if="appealBoxDialog" :appealBoxDialog="appealBoxDialog" :closeAppealFun="closeAppealFun.bind(this)"
      :paterOrderData="orderData" :userInfo="userInfo"></appealBox>
  </div>
</template>

<script>
import { getDataApi, uploadeFileApi } from '@/api/system.js'
import mqtt from '@/mixins/mqtt.js'
import {
  getOrderChatRecord,
  sendOrderChatRecord,
  cancelCommonOrder,
  payCommonOrder,
  cancelCompleteOrder,
  getAppealOrder,
  getServicePayment,
} from '@/api/otc.js'
import { toThousands, getCurrentDateFun } from '@/util/util'
import appealBox from '@/components/chat/appeal-box.vue'

export default {
  props: {
    businessChatDialog: Boolean,
    closeDialog: Function,
    userInfo: Object,
    orderData: Object,
    isMerchant: {
      type: Boolean,
      default: false,
    },
    serviceType: {
      type: String,
      default: '1',
    },
  },
  components: {
    appealBox,
  },
  mixins: [mqtt],
  data() {
    return {
      currStep: 1,
      action: `api/mjkj-bladex/cgform-api/upload/file`, //上传地址
      EnteringText: '',
      chatData: [],
      chatMqtt: null,
      countDown: `--"--'`,
      countDownTimer: null,
      allImgList: [],
      textSending: false,
      toThousands: toThousands,
      getCurrentDateFun: getCurrentDateFun,
      requesting: false,
      timeout: 15,
      appealBoxDialog: false,

      appealTime: 0, //申诉时间倒计时
      appealData: {},
      appealTimer: null,
      appealStatus: 0,
    }
  },
  created() {
    //商家不需要自动取消订单
    if (!this.isMerchant) {
      this.countDownFun()
    }
    let PromiseArr = []
    PromiseArr.push(
      new Promise((resolve, reject) => {
        getOrderChatRecord(this.orderData.id)
          .then((res) => {
            let data = res.data.data
            data.forEach((item) => {
              if (item.content_type == 2) {
                this.allImgList.push(item.content)
              }
            })
            this.chatData = data

            setTimeout(() => {
              this.$refs.contentListBox.scrollTop =
                this.$refs.contentListBox.scrollHeight
            }, 100)
            resolve()
          })
          .catch(() => {
            reject()
          })
        resolve()
      })
    )

    Promise.all(PromiseArr).then(() => {
      //拿到聊天记录和订单数据再链接mqtt
      this.chatMqtt = this.initMqtt(`CHAT_${this.orderData.id}`, (data) => {
        //添加进图片list
        if (data.content_type == '2') {
          this.allImgList.push(data.content)
        }
        this.chatData = this.chatData.concat(data)
        setTimeout(() => {
          this.$refs.contentListBox.scrollTop =
            this.$refs.contentListBox.scrollHeight
        }, 100)
      })
    })
    this.initAppealFun()
  },
  methods: {
    currCoinLangFun(code, type = 'buy_coins_relevant') {
      return this.coinLangFun(type, code)
    },
    //初始化申诉
    async initAppealFun(bool) {
      if (bool) {
        //重新获取订单状态
        let orderData = await getServicePayment({
          orderId: this.orderData.id,
        })
        orderData = orderData.data.data
        this.appealStatus = orderData.appeal_status
      } else {
        this.appealStatus = this.orderData.appeal_status
      }
      //申诉中
      if (this.appealStatus == 1) {
        //获取倒计时
        getAppealOrder(this.orderData.id).then((res) => {
          this.appealData = res.data.data[0]
          this.appealCountDownFun()
        })
      }
    },
    //申诉倒计时
    appealCountDownFun() {
      let startTime = new Date(this.appealData.create_time).getTime()
      //30分钟超时
      let endTime = startTime + 30 * 60 * 1000

      if (this.appealTimer) {
        clearInterval(this.appealTimer)
      }

      //结束时间蹉
      this.appealTimer = setInterval(() => {
        if (this.appealStatus == 1) {
          let currTime = new Date().getTime()
          let time = endTime - currTime

          let m = Math.floor(time / 60000) //分
          let s = Math.floor(time / 1000) - m * 60 //秒
          if (time >= 0) {
            this.appealTime = `${m}"${s < 10 ? '0' + s : s}'s`
          } else if (!time || time < 0) {
            this.appealTime = ``
            this.appealStatus = 6 //客服处理中
            clearInterval(this.appealTimer)
          }
        } else {
          clearInterval(this.appealTimer)
        }
      }, 1000)
    },
    //超时时间
    getTimeoutFun(type) {
      return new Promise((resolve) => {
        getDataApi('1554703741460680705', {
          code: type == 1 ? 'order_buy_timeout' : 'order_sell_timeout',
          column: 'id',
          order: 'desc',
          pageSize: -521,
        }).then((res) => {
          let data = res.data.data.records
          if (data.length > 0) {
            this.timeout = data[0].param_json
          }
          resolve()
        })
      })
    },
    async countDownFun(data) {
      if (!this.orderData && !this.orderData.order_time) {
        return false
      }
      let startTime = new Date(this.orderData.order_time).getTime()
      //*分钟超时
      await this.getTimeoutFun(this.orderData.type)
      let endTime = startTime + this.timeout * 60 * 1000
      //结束时间蹉
      this.countDownTimer = setInterval(() => {
        if (this.orderData.order_status == 1) {
          let currTime = new Date().getTime()
          let time = endTime - currTime

          let m = Math.floor(time / 60000) //分
          let s = Math.floor(time / 1000) - m * 60 //秒
          // console.log(time, m, s);
          if (time >= 0) {
            this.countDown = `${m}"${s < 10 ? '0' + s : s}'`
          } else if (!time || time < 0) {
            this.countDown = `00"00'`
            clearInterval(this.countDownTimer)
            cancelCommonOrder(this.orderData.id)
              .then(() => {
                this.orderData.order_status = 4
                this.$message.warning(this.currCoinLangFun('ddcswfk_text')) //订单超过15分钟未付款,已取消
              })
              .catch(() => {})
          }
        } else {
          clearInterval(this.countDownTimer)
        }
      }, 1000)
      if (data && data.status) {
        console.log(data, '订单信息更新')
        this.updateChatData(data)
      }
    },
    updateChatData(data) {
      this.chatData.push({
        blade_user_id: '-1',
        content: data.content,
        create_time: this.getCurrentDateFun('dataTime'),
      })
    },
    copy(text) {
      // 模拟 输入框
      let cInput = document.createElement('input')
      cInput.value = text
      document.body.appendChild(cInput)
      // 选取文本框内容
      cInput.select()

      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand('copy')

      this.$message({
        type: 'success',
        message: this.currCoinLangFun('text_fzcg', 'all'),
      }) //复制成功
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput)
    },
    //上传文件 图片
    customUploadFun(file) {
      let formdata = new FormData()
      formdata.append('file', file)
      formdata.append('type', 0)
      uploadeFileApi(formdata)
        .then((res) => {
          let url = res.data.data.link

          this.sendOrderChatRecordFun('2', '1', url)
        })
        .catch(() => {
          this.$message.error(this.currCoinLangFun('tips_fstpsb', 'popup_tips')) //发送图片失败，请重新上传~
        })
      return false
    },
    handKeyCode(event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        //enter发送，ctrl+enter换行
        if (event.ctrlKey) {
          this.EnteringText = this.EnteringText + '\n'
        } else {
          if (!this.textSending) {
            this.sendOrderChatRecordFun('1', '1')
          }
        }
      }
    },
    sendOrderChatRecordFun(contentType, userType, content = this.EnteringText) {
      let reg = /\s\S+|S+\s|\S/

      if (!reg.test(content)) {
        this.$message({
          type: 'error',
          message: this.currCoinLangFun('text_fsnrbnwk', 'popup_tips'),
        }) //发送内容不能为空
        return false
      }
      let data = {
        content,
        contentType,
        orderId: this.orderData.id,
        userType,
      }

      if (contentType == '1') {
        this.textSending = true
      }
      sendOrderChatRecord(data)
        .then(() => {
          //发送的是文本清空文本
          if (contentType == '1') {
            this.EnteringText = ''
          }
          this.textSending = false
        })
        .catch(() => {
          this.textSending = false
        })
    },
    cancelOrder() {
      this.$confirm(
        this.currCoinLangFun('sfqdqxdd_text'), // 是否确定取消订单
        this.currCoinLangFun('tips', 'all'), //提示
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'warning',
        }
      ).then(() => {
        this.requesting = true
        cancelCommonOrder(this.orderData.id)
          .then(() => {
            this.orderData.order_status = 4
            this.$message({
              type: 'success',
              message: this.currCoinLangFun('qxddcg_text'),
            }) //取消订单成功
            this.requesting = false
          })
          .catch(() => {
            this.requesting = false
          })
      })
    },
    payOrder() {
      this.$confirm(
        this.currCoinLangFun('sfqdyzfddje_text'), // 是否确定已支付订单金额
        this.currCoinLangFun('tips', 'all'), //提示
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'warning',
        }
      ).then(() => {
        this.requesting = true
        payCommonOrder(this.orderData.id)
          .then(() => {
            this.orderData.order_status = 2
            this.requesting = false
          })
          .catch(() => {
            this.requesting = false
          })
      })
    },
    completeOrder() {
      this.$confirm(
        this.currCoinLangFun('sdjejxfb_text'), //是否确定已收到订单金额,继续放币?
        this.currCoinLangFun('tips', 'all'), //提示
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'warning',
        }
      ).then(() => {
        this.requesting = true
        cancelCompleteOrder(this.orderData.id)
          .then(() => {
            this.orderData.order_status = 3
            this.requesting = false
          })
          .catch(() => {
            this.requesting = false
          })
      })
    },
    closeDialogFun(isRefresh) {
      if (this.countDownTimer) {
        clearInterval(this.countDownTimer)
      }
      this.closeDialog('businessChatDialog', { isRefresh: true })
    },
    openAppealFun() {
      this.appealBoxDialog = true
    },
    closeAppealFun() {
      this.initAppealFun(true)
      this.appealBoxDialog = false
    },
    beforeDestroy() {
      if (this.countDownTimer) {
        clearInterval(this.countDownTimer)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.business-chat-box {
  ::v-deep.el-dialog {
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0 !important;
    }
  }

  .header-border {
    .top {
      border-bottom: 1px solid;
    }
  }

  .left-box {
    flex: 0 0 576px;
    position: relative;
    padding-bottom: 60px;

    .left-top {
      height: 50px !important;

      .tabs {
        height: 100%;
        display: flex;

        div {
          display: flex;
          align-items: center;
          margin: 0 8px;
          padding: 0 8px;
          font-size: 12px;

          span {
            display: inline-block;
            width: 12px;
            height: 12px;
            line-height: 11px;
            font-size: 12px;
            text-align: center;
            border-radius: 50%;
            margin-right: 8px;
          }

          &.active {
            color: #151d29;
            font-weight: 600;
          }
        }
      }
    }

    .order-content {
      padding: 30px 40px;

      .first {
        .tb-order {
          font-size: 12px;
          padding-bottom: 30px;

          &>div:first-child {
            font-size: 12px;
            display: flex;

            .coin-name {
              font-weight: 600;
              padding-right: 18px;

              .buy,
              .sell {
                border-radius: 2px;
                padding: 0 6px;
                display: inline-block;
                margin-right: 6px;
              }
            }

            .order-num {
              margin-left: 18px;

              span {
                margin-right: 4px;
              }
            }
          }

          &>div:last-child {
            margin-top: 10px;
            display: flex;

            &>div:nth-child(1) {
              flex: 0 0 245px;

              span {
                font-size: 18px;
              }
            }

            &>div:nth-child(2) {
              flex: 0 0 104px;

              span {
                margin-left: 4px;
              }
            }

            &>div:nth-child(3) {
              flex: 0 0 156px;

              span {
                margin-left: 4px;
              }
            }
          }
        }

        .payee-info {
          padding-top: 28px;

          .payee-info-top {
            font-size: 12px;
            display: flex;
            justify-content: space-between;

            .right {
              .timeDown {
                margin-right: 10px;
              }
            }
          }

          .bank-card-info {
            margin-top: 20px;

            .title {
              font-weight: 600;
              font-size: 14px;

              i {
                font-size: 16px;
                margin-right: 4px;
              }
            }

            .detail {
              padding: 16px;
              margin-top: 10px;
              border-radius: 2px;
              font-size: 14px;

              &>div {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;

                span {
                  flex: 0 0 108px;
                }

                em {
                  font-style: normal;
                  font-weight: 600;
                  flex: 1;
                }

                i {
                  flex: 0 0 20px;
                  cursor: pointer;
                }
              }
            }
          }

          .tips {
            margin-top: 24px;
            font-size: 12px;

            span {
              font-weight: 600;
            }

            .tips-title {
              margin-bottom: 10px;
            }

            .tips-footer {
              margin-top: 16px;
            }
          }
        }
      }
    }

    .ricorso-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 40px;
      position: absolute;
      bottom: 30px;
      left: 10px;

      .status_text {
        margin-right: 10px;
      }
    }

    .btn-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 40px;
      position: absolute;
      bottom: 30px;
      right: 10px;

      .status_text {
        margin-right: 10px;
      }
    }
  }

  .right-box {
    flex: 1;
    display: flex;
    flex-direction: column;

    .right-top {
      display: flex;
      align-items: center;
      flex: 0 0 50px;
      padding: 0 24px;

      .title {
        font-size: 16px;
        font-weight: 600;

        i {
          font-size: 20px;
          margin-right: 4px;
        }
      }

      .close {
        margin-left: auto;
        cursor: pointer;
      }
    }

    .chat-content {
      height: 480px;
      overflow: hidden;
      overflow-y: scroll;
      padding: 16px 16px 0;
      box-sizing: border-box;

      ul.content-list {
        li {
          margin-bottom: 24px;

          .other {
            .time {
              display: flex;
              align-items: center;
              font-size: 12px;

              .online {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 10px;
              }
            }

            .content {
              margin-top: 8px;
              margin-left: 22px;
              font-size: 12px;
              font-weight: 600;

              .text {
                display: inline-block;
                // min-width: 100px;
                max-width: 290px;
                padding: 12px;
                border-radius: 2px 12px 12px 12px;
              }
            }
          }

          .system {
            text-align: center;
            font-size: 12px;

            .normal-tips {
              padding: 4px;
              display: inline-block;
              font-weight: 600;
              border-radius: 20px;

              em {
                margin-left: 4px;
              }
            }
          }

          .own {
            font-size: 12px;

            .time {
              display: flex;
              justify-content: flex-end;
              align-items: center;

              .icon {
                margin-left: 10px;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                overflow: hidden;
                background-size: cover;
              }
            }

            .content {
              text-align: right;
              margin-top: 8px;
              margin-right: 26px;
              font-size: 12px;
              font-weight: 600;

              .text {
                text-align: left;
                display: inline-block;
                // min-width: 100px;
                max-width: 290px;
                padding: 12px;
                border-radius: 12px 2px 12px 12px;
              }
            }
          }

          .image {
            display: inline-block;
            width: 150px;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .input-box {
      flex: 1;
      height: auto;
      padding: 10px;
      box-sizing: border-box;

      .function-area {
        padding: 0 12px;

        &>div {
          i {
            font-size: 16px;
            cursor: pointer;
          }
        }
      }

      .input-area {
        padding: 5px;

        ::v-deeptextarea.el-textarea__inner {
          padding: 10px !important;
          height: 100px !important;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.theme-night {
  .business-chat-box {
    .left-box {
      .left-top {
        border-color: #262d38;

        .tabs {
          div {
            span {
              border: 1px solid #688199;
            }

            &.active {
              color: #dfdfdf;
              border-bottom: 1px solid hsl(216, 100%, 63%) !important;

              span {
                border: 1px solid #dfdfdf;
              }
            }
          }
        }
      }

      .order-content {
        .first {
          .tb-order {
            border-bottom: 1px solid #262d38;

            &>div:first-child {
              .coin-name {
                border-right: 1px solid #262d38;

                .buy {
                  background-color: #5ab993;
                  color: #ffffff;
                }

                .sell {
                  background-color: #e00b0b;
                  color: #ffffff;
                }
              }
            }

            &>div:last-child {
              &>div:nth-child(1) {
                span {
                  color: #d4651b;
                }
              }
            }
          }

          .payee-info {
            .payee-info-top {
              .right {
                .timeDown {
                  color: #ecaa7e;
                }
              }
            }

            .bank-card-info {
              .title {
                i {
                  color: #0020FD;
                }
              }

              .detail {
                &>div {
                  i {
                    color: #7d92a8;
                  }
                }
              }
            }

            .tips {
              .tips-footer {
                color: #7d92a8;
              }
            }
          }
        }
      }

      // .btn-box {
      // }
    }

    .right-box {
      .right-top {
        border-color: #222222;

        .title {
          i {
            color: #0020FD;
          }
        }
      }

      .chat-content {
        ul.content-list {
          li {
            .other {
              .time {
                .online {
                  background-color: #32a678;
                }
              }

              .content {
                .text {
                  background-color: #ffffff;
                }
              }
            }

            .system {
              .normal-tips {
                background-color: #ffffff;
                color: #10171f;
              }
            }

            .own {
              .content {
                .text {
                  background-color: #ffffff;
                }
              }
            }
          }
        }
      }

      .input-box {
        border-top: 1px solid #222222;
      }
    }
  }
}

.theme-daytime {
  .business-chat-box {
    .left-box {
      .left-top {
        border-color: #f3f3f3;

        .tabs {
          div {
            span {
              border: 1px solid #688199;
            }

            &.active {
              color: #151d29;
              border-bottom: 1px solid #7fb2ff !important;

              span {
                border: 1px solid #151d29;
              }
            }
          }
        }
      }

      .order-content {
        .first {
          .tb-order {
            border-bottom: 1px solid #f3f3f3;

            &>div:first-child {
              .coin-name {
                border-right: 1px solid #f3f3f3;

                .buy {
                  background-color: #5ab993;
                  color: #ffffff;
                }

                .sell {
                  background-color: #e00b0b;
                  color: #ffffff;
                }
              }
            }

            &>div:last-child {
              &>div:nth-child(1) {
                span {
                  color: #d4651b;
                }
              }

              &>div:nth-child(2) {
                span {
                  color: #10171f;
                }
              }

              &>div:nth-child(3) {
                span {
                  color: #10171f;
                }
              }
            }
          }

          .payee-info {
            .payee-info-top {
              .right {
                .timeDown {
                  color: #ecaa7e;
                }
              }
            }

            .bank-card-info {
              .title {
                i {
                  color: #0020FD;
                }
              }

              .detail {
                background-color: #f5f6fa;

                &>div {
                  i {
                    color: #7d92a8;
                  }
                }
              }
            }

            .tips {
              .tips-footer {
                color: #7d92a8;
              }
            }
          }
        }
      }
    }

    .right-box {
      .right-top {
        border-color: #e4e4e4;

        .title {
          i {
            color: #0020FD;
          }
        }
      }

      .chat-content {
        ul.content-list {
          li {
            .other {
              .time {
                .online {
                  background-color: #32a678;
                }
              }

              .content {
                .text {
                  background-color: #ffffff;
                }
              }
            }

            .system {
              .normal-tips {
                background-color: #ffffff;
                color: #10171f;
              }
            }

            .own {
              .content {
                .text {
                  background-color: #ffffff;
                }
              }
            }
          }
        }
      }

      .input-box {
        border-top: 1px solid #e6e6e6;
      }
    }
  }
}</style>
