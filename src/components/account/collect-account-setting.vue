<template>
  <div class="collect-account-setting">
    <div class="payWay-info-container">
      <div class="payway-title flex-box">
        <span><img :src="payWayDialogOption.icon" /></span>
        <em class="fit-tc-primary">
          {{
                    payWayDialogOption.data
                    ? currCoinLangFun("text_xg", "all")
                    : currCoinLangFun("text_tj", "all")
                    }}
          {{ payWayDialogOption.name }}</em>
      </div>
      <div class="payway-tips flex-box">
        <i class="el-icon-warning-outline icon-info"></i>
        <span class="fit-tc-primary">{{ currCoinLangFun("text_kjskzhsz")
                  }}{{ payWayDialogOption.name }}。{{
                    currCoinLangFun("text_kjskzhsz2")
                    }}
          support@baiyiex.com</span>
      </div>
    </div>
    <div class="payWay-info-form">
      <el-form ref="payWayForm" :model="payWayData" :rules="rules" label-position="top" label-width="518px">
        <el-form-item :label="`${currCoinLangFun('text_name', 'all')}`" prop="name">
          <el-input v-model="payWayData.name" :disabled="true" :maxlength="20"></el-input>
        </el-form-item>
        <div v-if="payWayDialogOption.pay_methods_type == 1">
          <el-form-item :label="`${currCoinLangFun('text_yhkgsd')}`" prop="country_id">
            <el-select style="width: 100%" v-model="payWayData.country_id" filterable popper-class="fit-background-select"
              :placeholder="`${currCoinLangFun('text_xzgjhdq')}`">
              <el-option v-for="item in countryList" :key="item.id" :label="item.zh_name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item :label="`${
                    pay_methods_type == 1
                      ? `${currCoinLangFun('text_yhkh')}`
                      : payWayDialogOption.name +
                        `${currCoinLangFun('account', 'login_and_register')}`
                  }`" prop="account">
          <el-input v-model="payWayData.account" :maxlength="40"></el-input>
        </el-form-item>
        <div v-if="payWayDialogOption.pay_methods_type == 1">
          <el-form-item :label="`${currCoinLangFun('text_khyh')}`" prop="bank">
            <el-input v-model="payWayData.bank" :maxlength="40"></el-input>
          </el-form-item>
          <el-form-item :label="`${currCoinLangFun('text_khzh')}`" prop="branch">
            <el-input v-model="payWayData.branch" :maxlength="40"></el-input>
          </el-form-item>
        </div>
        <div v-if="payWayDialogOption.pay_methods_type == 2">
          <el-form-item :label="`${currCoinLangFun('text_skewm')}`" prop="qr_code">
            <el-upload class="avatar-uploader upload-qrCode" :action="`api/mjkj-bladex/cgform-api/upload/file`"
              :show-file-list="false" accept="image/*" :before-upload="(file) => customUploadFun(file, 'qr_code')">
              <img v-if="payWayData.qr_code" :src="payWayData.qr_code" class="avatar" />
              <div class="center-icon" v-else>
                <i class="el-icon-upload"></i>
                <p>{{ currCoinLangFun("text_upload", "all") }}</p>
              </div>
            </el-upload>
          </el-form-item>
        </div>
        <div class="btn-cont">
          <el-button type="primary" class="fit-tc-button" @click="addPayMethods" :loading="btnLoading">{{
                      currCoinLangFun("text_qr", "popup_tips")
                      }}{{
                        payWayDialogOption.data
                        ? currCoinLangFun("text_xg", "all")
                        : currCoinLangFun("text_tj", "move_quotation")
                        }}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { uploadeFileApi, getDataApi } from "@/api/system.js";

export default {
  name: "collectAccountSetting",
  props: {
    payWayDialogOption: Object,
    settingCollAccount: String,
    settingPayMentFun: Function,
    btnLoading: Boolean,
  },
  watch: {
    settingCollAccount: {
      immediate: true,
      handler() {
        if (this.settingCollAccount) {
          if (this.$refs.payWayForm) {
            this.$refs.payWayForm.clearValidate();
          }
          this.payWayData = {
            name: this.userInfo.real_name,
            country_id: "",
            account: "",
            branch: "",
            bank: "",
            qr_code: "",
          };

          //修改操作时赋值
          if (this.payWayDialogOption.data) {
            console.log(this.payWayDialogOption.data);
            this.payWayData = {
              ...this.payWayDialogOption.data,
            };
          }
        }
      },
      deep: true,
    },
  },
  async created() {
    let countryRes = await getDataApi("1531578936708677634", {
      pageSize: "-521",
      column: "sort",
      order: "asc",
    });
    this.countryList = countryRes.data.data.records;
  },
  data() {
    return {
      payWayData: {
        surname: "",
        name: "",
        country_id: "",
        account: "",
        bank: "",
        branch: "",
        qr_code: "",
      },
      rules: {
        surname: [
          {
            required: true,
            message: this.currCoinLangFun("text_qsrxs"), //请输入姓氏
            trigger: "blur",
          },
        ],
        country_id: [
          {
            required: true,
            message: this.currCoinLangFun("text_qxzyhkgsd"), //请选择国家或地区
            trigger: "change",
          },
        ],
        name: [
          {
            required: true,
            message: this.currCoinLangFun("text_qsrxm"), //请输入姓名
            trigger: "blur",
          },
        ],
        account: [
          {
            required: true,
            message: this.currCoinLangFun("text_qsrzh"), //请输入账户
            trigger: "blur",
          },
        ],
        bank: [
          {
            required: true,
            message: this.currCoinLangFun("text_qsrzh"), //请输入账户
            trigger: "blur",
          },
        ],
        qr_code: [
          {
            required: true,
            message: this.currCoinLangFun("text_qscskm"), //请上传收款码
            trigger: "blur",
          },
        ],
      },
      countryList: [], //国家/地区列表
    };
  },
  methods: {
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    addPayMethods() {
      if (this.userInfo.real_name_status != "2") {
        this.$message({
          type: "error",
          message: this.currCoinLangFun("text_zhwsm", "popup_tips"), //账户未实名
        });
        this.btnLoading = false;
        return false;
      }

      this.$refs["payWayForm"].validate((valid) => {
        if (valid) {
          let data = {
            ...this.payWayData,
            pay_method_id: this.payWayDialogOption.id,
          };
          this.settingPayMentFun(data);
        } else {
          return false;
        }
      });
    },
    //上传文件 图片
    customUploadFun(file, filedName) {
      let formdata = new FormData();
      formdata.append("file", file);
      formdata.append("type", 0);
      uploadeFileApi(formdata)
        .then((res) => {
          console.log(res);
          let url = res.data.data.link;
          this.payWayData[filedName] = url;
        })
        .catch(() => {
          this.$message.error(
            this.currCoinLangFun("text_sctpsb", "popup_tips")
          ); //上传"图片"失败，请重新上传~
        });
      return false;
    },
  },
  computed: {
    ...mapGetters(["language", "userInfo"]),
  },
};
</script>
<style lang="scss" scoped>
.collect-account-setting {
  .flex-box {
    display: flex;
    align-items: center;
  }

  .upload-qrCode {
    ::v-deep.el-upload {
      width: 94px;
      height: 94px;
      border-radius: 6px;
      border: 1px dashed #d8dfeb;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      outline: 0;

      img {
        width: 100%;
        height: 100%;
      }

      .center-icon {
        p {
          line-height: 20px;
          margin: 0;
          padding: 0;
          font-size: 14px;
        }

        i {
          display: block;
          font-size: 20px !important;
        }
      }
    }
  }

  .payWay-info-container {
    font-size: 14px;

    .payway-title {
      line-height: 24px;
      padding-bottom: 16px;

      span {
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 8px;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      em {
        font-weight: 600;
        font-size: 16px !important;
        font-style: normal;
      }
    }

    .payway-tips {
      padding: 8px 16px;
      background: rgba(34, 113, 230, 0.08);
      border-radius: 8px;
      font-weight: 400;
      align-items: flex-start;

      .icon-info {
        display: block;
        font-size: 18px;
        margin-right: 8px;
        margin-top: 2px;
        color: #0020FD;
      }
    }
  }

  .payWay-info-form {
    padding-top: 24px;

    .el-form {
      padding: 0 16px;
    }

    .btn-cont {
      padding: 16px 16px 24px;

      button {
        display: block;
        width: 100%;
        background-color: #0020FD;
        border-color: #0020FD;
        font-size: 16px;

        &:hover {
          background: #3776d4;
          border-color: #3776d4;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.theme-night {
  .upload-qrCode {
    ::v-deep.el-upload {
      .center-icon {
        p {
          color: #0020FD;
        }

        i {
          color: #0020FD;
        }
      }
    }
  }
}

.theme-daytime {
  .upload-qrCode {
    ::v-deep.el-upload {
      .center-icon {
        p {
          color: #0020FD;
        }

        i {
          color: #2954cc;
        }
      }
    }
  }
}
</style>
