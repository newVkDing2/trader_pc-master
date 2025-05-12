<template>
  <div class="rel_main">
    <div v-if="!userInfo.detail.auditStatusAdvanced">
      <div class="rel_header_box flex-center">
        <div class="header_inner flex-start">
          <div class="title num_Bold">
            <p>{{ $t("user.advanced") }}</p>
          </div>
        </div>
      </div>
      <div class="form_container flex-start">
        <div class="loan_box">
          <el-form
            :model="form"
            ref="form"
            label-width="90px"
            label-position="top"
            hide-required-asterisk="true"
          >
            <div class="top_box">
              <el-form-item :label="$t('user.country')" prop="country">
                <el-select
                  v-model="form.country"
                  :placeholder="$t('utils.plsSelect')"
                  clearable
                  @change="changeSelect"
                >
                  <!-- <el-option label="1000-100000   USDT" value="1000-100000"></el-option>
                <el-option label="1000-1000000 USDT" value="1000-1000000"></el-option> -->
                  <el-option
                    :label="$t(item.label)"
                    :value="item.value"
                    v-for="(item, index) in countries"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="$t('user.cardType')" prop="cardType">
                <el-select
                  v-model="form.cardType"
                  :placeholder="$t('utils.plsSelect')"
                  clearable
                  @change="changeSelect2"
                >
                  <!-- <el-option label="1000-100000   USDT" value="1000-100000"></el-option>
                <el-option label="1000-1000000 USDT" value="1000-1000000"></el-option> -->
                  <el-option
                    :label="$t(item.label)"
                    :value="item.value"
                    v-for="(item, index) in cardTypes"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="$t('user.name')" prop="realName">
                <el-input v-model="form.realName"></el-input>
              </el-form-item>
              <el-form-item :label="$t('user.idCard')" prop="idCard">
                <el-input v-model="form.idCard"></el-input>
              </el-form-item>
            </div>

            <div style="height: 20px"></div>

            <el-form-item
              :label="$t('user.plsSurePhotoClear')"
              prop="imageUrl"
              :rules="[
                {
                  required: true,
                  message: $t('user.plsUploadTip'),
                  trigger: 'blur',
                },
              ]"
            >
              <div class="upload_box flex-between">
                <div class="upload_box_item">
                  <el-upload
                    class="image-uploader flex-center"
                    ref="upload1"
                    :headers="headerObj"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                    :before-upload="beforeAvatarUpload"
                  >
                    <div v-if="form.frontUrl" class="avatar_box flex-center">
                      <img :src="form.frontUrl" class="avatar" />
                    </div>
                    <i
                      v-else
                      class="el-icon-camera-solid avatar-uploader-icon"
                    ></i>
                  </el-upload>
                  <div class="btn_box flex-center">
                    <el-button @click="upPic('cardUrl')">{{
                      $t("user.uploadFront")
                    }}</el-button>
                  </div>
                </div>
                <div class="upload_box_item">
                  <el-upload
                    class="image-uploader flex-center"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload"
                  >
                    <div v-if="form.backUrl" class="avatar_box flex-center">
                      <img :src="form.backUrl" class="avatar" />
                    </div>
                    <i
                      v-else
                      class="el-icon-camera-solid avatar-uploader-icon"
                    ></i>
                  </el-upload>
                  <div class="btn_box flex-center">
                    <el-button @click="upPic('cardBackUrl')">{{
                      $t("user.uploadBack")
                    }}</el-button>
                  </div>
                </div>
                <div class="upload_box_item">
                  <el-upload
                    class="image-uploader flex-center"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                    :before-upload="beforeAvatarUpload"
                  >
                    <div v-if="form.handelUrl" class="avatar_box flex-center">
                      <img :src="form.handelUrl" class="avatar" />
                    </div>
                    <i
                      v-else
                      class="el-icon-camera-solid avatar-uploader-icon"
                    ></i>
                  </el-upload>
                  <div class="btn_box flex-center">
                    <el-button @click="upPic('capitalUrl')">{{
                      $t("user.uploadHandle")
                    }}</el-button>
                  </div>
                </div>
                <div class="upload_box_item last_img flex-center">
                  <img :src="require('@/assets/image/shili.png')" alt="" />
                </div>
              </div>
            </el-form-item>

            <el-form-item>
              <div class="confirm_btn">
                <div @click="submit">{{ $t("utils.confirm") }}</div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="cer_success" v-else>
      <div class="cer_result">
        <div class="cer_result_inner">
          <div class="imgBox">
            <img :src="require('@/assets/image/cer_success.png')" alt="" />
          </div>
          <div v-show="userInfo.detail.auditStatusAdvanced == 1">
            {{ $t("user.advancedCerSuccess") }}
          </div>
          <div v-show="userInfo.detail.auditStatusAdvanced == 3">
            {{ $t("user.msgSubmitSuccess") }}
          </div>
        </div>
      </div>
      <div class="btn_box flex-center">
        <el-button
          type="primary"
          v-show="userInfo.detail.auditStatusAdvanced == 1"
          @click="
            $router.push({ path: '/trade/index', query: { type: 'sec' } })
          "
        >
          {{ $t("user.goTransaction") }}
        </el-button>
        <el-button
          type="primary"
          v-show="userInfo.detail.auditStatusAdvanced == 3"
          @click="$router.push('/home/index')"
        >
          {{ $t("user.backHome") }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfoCerApi } from "@/api/user";
import { uploadFile } from "@/api/common";
export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {
      form: {
        realName: "",
        idCard: "",
        flag: 2,
        frontUrl: "",
        backUrl: "",
        handelUrl: "",
        country: "United States of America",
        cardType: 1,
      },
      countries: [
        {
          label: "user.us",
          value: "United States of America",
        },
        {
          label: "user.china",
          value: "China",
        },
      ],
      cardTypes: [
        {
          label: "user.IDcard",
          value: 1,
        },
        {
          label: "user.passport",
          value: 2,
        },
      ],
      headerObj: { "Content-Type": "multipart/form-data" },
    };
  },
  created() {
    this.init();
  },
  methods: {
    submit() {
      userInfoCerApi({
        ...this.form,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$emit("getNewUserInfo");
        }
      });
    },
    init() {},
    upPic(field) {
      // 创建新的数据对象
      // let formData = new FormData();
      // formData.append('file', file.raw);
    },
    uploadFile(formData, type) {
      uploadFile(formData).then((res) => {
        //this.repayTypeInfo = res.data.data[0];
        console.log("上传图片结果=====》", res.data);
        this.form[type] = res.data.data.url;
      });
    },
    handleAvatarSuccess1(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "frontUrl");
    },
    handleAvatarSuccess2(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "backUrl");
    },
    handleAvatarSuccess3(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "handelUrl");
    },
    beforeAvatarUpload(file) {
      // console.log("file==>", file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.warning("上传头像图片只能是 JPG 格式!");
      // }
      if (!isLt2M) {
        this.$message.warning("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    changeSelect() {
      //   this.getLoanProductInfo();
    },
    changeSelect2() {
      //   this.getLoanProductInfo();
    },
  },
};
</script>

<style scoped lang="scss">
.rel_main {
  width: 100%;
  // height: 154px;
  // margin-top: 65px;

  .rel_header_box {
    width: 100%;
    // height: 100px;
    margin-top: 40px;
    //background: #f1f1f1;

    .header_inner {
      width: 1200px;
      height: 100%;
      margin: auto;

      .title {
        p {
          font-size: 24px;
        }
      }
    }
  }

  .form_container {
    width: 1200px;
    margin: auto;
    padding: 10px 40px 40px 40px;
    // background: red;

    .loan_box {
      width: 100%;
      // background: yellow;

      ::v-deep.el-form {
        .top_box {
          display: flex;
          justify-content: space-between;
          height: 200px;
          flex-wrap: wrap;
          .el-form-item {
            width: 560px;
            // padding: 0;
          }
        }

        .el-select {
          width: 560px;

          .select_box {
          }
        }
        .el-form-item {
          width: 850px;
          // padding: 0;
        }

        .el-form-item__label {
          width: 100%;
          font-size: 16px;
          // padding: 0;
        }

        .label_box {
          .loan_record {
            font-size: 14px;
          }

          .label_text {
            font-size: 16px;
          }
        }

        .pro_details {
          width: 100%;
          margin-top: 10px;

          .pro_details_item {
            padding: 0 20px;
            height: 360px;
            border: 1px solid #d9d9d9;

            box-sizing: border-box;

            .title {
              color: #333;
              font-size: 24px;
            }

            .detail_item {
              color: #909399;
              font-size: 14px;
            }
          }
        }

        .pro_details_left {
          width: 100%;
        }

        .el-input__icon {
          line-height: 40px;
        }

        .avatar-uploader .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .el-upload {
          width: 100%;
          height: 110px;
          background: #f1f1f1;
          padding: 5px;
          //box-sizing: border-box;
          // background: red;
        }

        .avatar-uploader .el-upload:hover {
          border-color: #409eff;
        }

        .avatar-uploader-icon {
          font-size: 34px;
          color: #8c939d;
          height: 110px;
          line-height: 110px;
        }

        .avatar_box {
          width: 100%;
          height: 100%;
          border: 1px dashed #d9d9d9;
        }

        .avatar {
          width: 100px;
          display: block;
        }

        .upload_box {
          gap: 20px;

          .upload_box_item {
            flex: 1;
            height: 160px;
            align-self: flex-start;
          }

          .last_img {
            // width: 100%;
            // height: 100%;
            background: #f1f1f1;

            img {
              width: 140px;
            }
          }
        }

        .confirm_btn {
          margin-top: 40px;

          > div {
            width: 360px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            background: #09BA85;
          }
        }
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
    margin-top: 10px;
    .el-button {
      width: 200px;
      height: 40px;
      color: #fff;
      margin-top: 20px;
      background: #09BA85;
      &:hover {
        background: #2c3f67;
      }
    }
  }
}
</style>
