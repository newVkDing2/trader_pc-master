<template>
  <div class="customer-service">
    <div class="float-box" id="float-box" v-if="!customerChatDialog" @click.prevent="showChatBox" :style="floatBoxStyle">
      <span class="unread-message" v-if="unreadMsg > 0">{{ unreadMsg }}</span>
      <div class="bg-icon"></div>
    </div>
    <el-dialog width="564px" :title="currCoinLangFun('customer_service', 'home_index')" :visible.sync="customerChatDialog"
      :modal-append-to-body="true" :append-to-body="true" :close-on-click-modal="false"
      custom-class="customer-service-box" @close="closeDialogFun()">
      <div class="header-border chat-area-box">
        <div class="chat-content contentListBox" ref="contentListBox" id="contentListBox"
          @scroll.passive="contentListScroll">
          <div class="loadingHistory" v-if="isShowGetHistory" @click="getChatByPage">
            <i :class="requestPage ? 'el-icon-loading' : ' el-icon-refresh'"></i>
            {{ currCoinLangFun("load_historical_messages") }}
          </div>
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
                  <div class="text" v-if="item.content_type == '1'">
                    {{ item.content }}
                  </div>
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
                  <div class="text" v-if="item.content_type == '1'">
                    {{ item.content }}
                  </div>
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
            <el-input v-model="EnteringText" type="textarea" autosize placeholder="" resize="none" show-word-limit
              :maxlength="400" @keydown.enter.native="handKeyCode($event)"></el-input>
            <div class="btn-box">
              <p class="fit-tc-tertiary">
                {{ currCoinLangFun("send_by_enter") }}
              </p>
              <el-button type="primary" size="mini" @click="sendOrderChatRecordFun('1')" :loading="textSending"
                :disabled="EnteringText === ''">{{ currCoinLangFun("fasong_text", "all") }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { uploadeFileApi } from "@/api/system.js";
import { sendServiceChatApi, getServeChatRecord } from "@/api/user.js";
import mqtt from "@/mixins/mqtt.js";
import { mapGetters } from "vuex";

export default {
  mixins: [mqtt],
  name: "customer-service",
  watch: {
    customerChatDialog() {
      if (this.customerChatDialog) {
        //消息记录滚动到最底部
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.contentListBox.scrollTop =
              this.$refs.contentListBox.scrollHeight;
          });
        });
      }
      //关闭状态重新激活拖拽
      if (!this.customerChatDialog) {
        this.initDrag();
      }
    },
    isLogin() {
      if (this.isLogin) {
        this.initServiceChat();
      }
    },
  },
  data() {
    return {
      unreadMsg: 0,
      customerChatDialog: false,
      action: `api/mjkj-bladex/cgform-api/upload/file`, //上传地址
      EnteringText: "",
      chatData: [],
      chatMqtt: null,
      allImgList: [],
      textSending: false, //正在发送文本
      pageInfo: {
        current: 1,
        size: 15,
      },
      isShowGetHistory: false, //请求分页按钮
      requestPage: false, //请求分页状态
      scrollBottom: 0, //记录加载历史记录前聊天滚动条距离底部的位置
      floatBoxStyle: {
        left: "90%",
        top: "90vh",
      }, //位置
      draging: false, //正在拖拽
    };
  },
  created() {
    //未登录则不请求
    if (this.isLogin) {
      this.initServiceChat();
    }
  },
  mounted() {
    //拖拽初始化
    this.initDrag();
  },
  methods: {
    currCoinLangFun(code, type = "user") {
      return this.coinLangFun(type, code);
    },
    initServiceChat() {
      let PromiseArr = [];
      this.chatData = [];
      this.allImgList = [];
      PromiseArr.push(
        new Promise((resolve, reject) => {
          getServeChatRecord(this.pageInfo, this.userInfo.chatKey)
            .then((res) => {
              let data = res.data.data.records;

              //判断是否显示加载更多按钮
              if (data.length < Number(this.pageInfo.size)) {
                this.isShowGetHistory = false;
              } else {
                this.isShowGetHistory = true;
              }

              data.forEach((item) => {
                if (item.content_type == 2) {
                  this.allImgList.push(item.content);
                }
              });
              this.chatData = data;

              resolve();
            })
            .catch(() => {
              reject();
            });
          resolve();
        })
      );
      Promise.all(PromiseArr).then(() => {
        //拿到聊天记录和订单数据再链接mqtt
        this.chatMqtt = this.initMqtt(this.userInfo.chatKey, (data) => {
          this.chatData = this.chatData.concat(data);
          console.log(data, "聊天信息推送");

          //添加进图片list
          if (data.content_type == "2") {
            this.allImgList.push(data.content);
          }

          //未读
          if (
            !this.customerChatDialog &&
            data.blade_user_id != this.userInfo.blade_user_id
          ) {
            this.unreadMsg++;
          }

          this.$nextTick(() => {
            if (this.$refs.contentListBox) {
              this.$refs.contentListBox.scrollTop =
                this.$refs.contentListBox.scrollHeight;
            }
          });
        });
      });
    },
    //滚动监听
    contentListScroll(e) {
      this.scrollBottom =
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
    },
    // 获取消息分页
    getChatByPage() {
      this.pageInfo.current++;
      this.getChatHistoryPage();
    },
    //根据分页获取历史记录
    getChatHistoryPage() {
      //防抖
      if (this.requestPage) {
        return;
      }

      this.requestPage = true;

      getServeChatRecord(this.pageInfo, this.userInfo.chatKey)
        .then((res) => {
          let data = res.data.data.records;

          //判断是否显示加载更多按钮
          if (data.length < Number(this.pageInfo.size)) {
            this.isShowGetHistory = false;
          } else {
            this.isShowGetHistory = true;
          }

          data.forEach((item) => {
            if (item.content_type == 2) {
              this.allImgList.push(item.content);
            }
          });

          this.chatData = data.concat(this.chatData);

          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.contentListBox.scrollTop =
                this.$refs.contentListBox.scrollHeight -
                this.scrollBottom -
                this.$refs.contentListBox.offsetHeight;
            }, 0);
          });

          this.requestPage = false;
        })
        .catch(() => {
          this.requestPage = false;
        });
    },
    showChatBox() {
      //正在拖拽
      if (this.draging) {
        return;
      }
      //清除未读消息
      this.unreadMsg = 0;
      this.customerChatDialog = true;
    },
    //上传文件 图片
    customUploadFun(file) {
      let formdata = new FormData();
      formdata.append("file", file);
      formdata.append("type", 0);
      uploadeFileApi(formdata)
        .then((res) => {
          let url = res.data.data.link;
          this.sendOrderChatRecordFun("2", url);
        })
        .catch(() => {
          this.$message.error(
            this.currCoinLangFun("tips_fstpsb", "popup_tips")
          ); //发送图片失败，请重新上传~
        });
      return false;
    },
    handKeyCode(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        //enter发送，ctrl+enter换行
        if (event.ctrlKey) {
          this.EnteringText = this.EnteringText + "\n";
        } else {
          //防抖
          if (!this.textSending) {
            this.sendOrderChatRecordFun("1");
          }
        }
      }
    },
    sendOrderChatRecordFun(contentType, content = this.EnteringText) {
      let reg = /\s\S+|S+\s|\S/;

      if (!reg.test(content)) {
        this.$message({
          type: "error",
          message: this.currCoinLangFun("text_fsnrbnwk", "popup_tips"),
        }); //发送内容不能为空
        return false;
      }

      let data = {
        content,
        contentType,
        chatId: this.userInfo.chatKey,
      };

      if (contentType == "1") {
        this.textSending = true;
      }

      sendServiceChatApi(data)
        .then((res) => {
          //发送的是文本清空文本
          if (contentType == "1") {
            this.EnteringText = "";
          }
          this.textSending = false;
        })
        .catch(() => {
          this.textSending = false;
        });
    },
    closeDialogFun() {
      this.customerChatDialog = false;
    },
    initDrag() {
      //设置拖拽
      this.$nextTick(() => {
        let that = this;
        let dragDiv = document.querySelector(".float-box");

        // 鼠标按下事件 处理程序
        let putDown = function (event) {
          let dragDivStyle = window.getComputedStyle(
            document.querySelector(".float-box"),
            null
          );

          document.onselectstart = function () {
            return false;
          }; //解决拖动会选中文字的问题
          document.ondragstart = function () {
            return false;
          };

          let offsetX = parseInt(dragDivStyle.left); // 获取当前的x轴距离
          let offsetY = parseInt(dragDivStyle.top); // 获取当前的y轴距离
          let innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
          let innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
          // 鼠标移动的时候不停的修改div的left和top值
          document.onmousemove = function (event) {
            //正在拖拽
            that.draging = true;

            that.floatBoxStyle.left = dragDiv.style.left =
              event.clientX - innerX + "px";
            that.floatBoxStyle.top = dragDiv.style.top =
              event.clientY - innerY + "px";
            // 边界判断
            if (parseInt(that.floatBoxStyle.left) <= 0) {
              that.floatBoxStyle.left = dragDiv.style.left = "0px";
            }
            if (parseInt(that.floatBoxStyle.top) <= 64) {
              that.floatBoxStyle.top = dragDiv.style.top = "64px";
            }
            if (
              parseInt(that.floatBoxStyle.left) >=
              window.innerWidth - parseInt(that.floatBoxStyle.width)
            ) {
              that.floatBoxStyle.left = dragDiv.style.left =
                window.innerWidth - parseInt(that.floatBoxStyle.width) + "px";
            }
            if (
              parseInt(that.floatBoxStyle.top) >=
              window.innerHeight - parseInt(that.floatBoxStyle.height)
            ) {
              that.floatBoxStyle.top = dragDiv.style.top =
                window.innerHeight - parseInt(that.floatBoxStyle.height) + "px";
            }
          };
          // 鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件
          // 否则鼠标抬起后还可以继续拖拽方块
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            //清除拖拽状态
            setTimeout(() => {
              that.draging = false;
              document.onselectstart = null;
              document.ondragstart = null;
            }, 100);
          };
        };
        // 绑定鼠标按下事件
        dragDiv.addEventListener("mousedown", putDown, false);
      });
    },
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.customer-service {
  .float-box {
    position: fixed;
    // right: 40px;
    // bottom: 10vh;
    border-radius: 50%;
    background-color: #fff;
    padding: 2px;
    z-index: 5;

    cursor: pointer;
    width: 40px;
    height: 40px;

    .unread-message {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      right: -6px;
      top: -6px;
      text-align: center;
      line-height: 16px;
      font-size: 12px;
      display: inline-block;
      background-color: #ff0000;
      color: #ffffff;

      position: absolute;
    }

    .bg-icon {
      width: 100%;
      height: 100%;
      background: url("https://miniopic.baiyiex.com/baiyiex/public/home/%E5%AE%A2%E6%9C%8D.png") no-repeat 100% 100% / cover;
    }
  }
}

.chat-area-box {
  flex: 1;
  height: 600px;
  display: flex;
  flex-direction: column;

  .chat-content {
    height: 480px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 16px 16px 0;
    box-sizing: border-box;

    .loadingHistory {
      text-align: center;
      color: #497dff;
      cursor: pointer;
      font-size: 12px;
    }

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
            justify-content: right;
            align-items: center;

            .icon {
              margin-left: 10px;
              width: 26px;
              height: 26px;
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
        border: 0;
      }

      .btn-box {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>

<style lang="scss" >
.el-dialog.customer-service-box {
  .el-dialog__header {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-dialog__headerbtn {
      position: relative;
      top: auto;
      right: auto;
    }
  }

  .el-dialog__body {
    padding-top: 0px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    padding-bottom: 8px !important;
  }
}
</style>


<style lang="scss">
.theme-night {
  .el-dialog.customer-service-box {
    .el-dialog__header {
      border-bottom: 1px solid #4a5058;
    }
  }

  .chat-area-box {
    .input-box {
      border-top: 1px solid #4a5058;

      .input-area {
        textarea.el-textarea__inner {
          background-color: #2e3847 !important;
          color: #ffffff;
        }

        .btn-box {}
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
  }
}

.theme-daytime {
  .el-dialog.customer-service-box {
    .el-dialog__header {
      border-bottom: 1px solid #dfdfdf;
    }
  }

  .chat-area-box {
    .input-box {
      border-top: 1px solid #dfdfdf;

      .input-area {
        textarea.el-textarea__inner {
          color: #000000;
          background-color: #ffffff !important;
        }

        .btn-box {}
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
                background-color: #f5f6fa;
              }
            }
          }

          .system {
            .normal-tips {
              background-color: #f5f6fa;
              color: #10171f;
            }
          }

          .own {
            .content {
              .text {
                background-color: #f5f6fa;
              }
            }
          }
        }
      }
    }
  }
}
</style>
