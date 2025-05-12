<template>
  <div class="loan_main">
    <div class="loan_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("loan.title") }}</p>
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
          <el-form-item :label="$t('loan.loabProduct')" prop="amountRange">
            <el-select
              v-model="form.proId"
              :placeholder="$t('utils.plsSelect')"
              clearable
              @change="changeSelect"
              @visible-change="visibleChange"
            >
              <!-- <el-option label="1000-100000   USDT" value="1000-100000"></el-option>
              <el-option label="1000-1000000 USDT" value="1000-1000000"></el-option> -->
              <!-- :label="item.amountMin + '-' + item.amountMax" -->
              <el-option
                :label="item.amountMin + '-' + item.amountMax"
                :value="item.id"
                v-for="(item, index) in loanProductList"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label=" "> 可用资产: 0.00791USDT </el-form-item> -->

          <el-form-item label prop="loanAmount">
            <el-input type="number" v-model="form.amount"></el-input>
            <template slot="label">
              <div class="label_box flex-between">
                <div class="label_text">{{ $t("loan.loanAmount") }}</div>
                <div class="loan_record" @click="$router.push('/loan/order')">
                  {{ $t("loan.loanRecord") + ">" }}
                </div>
              </div>
            </template>
          </el-form-item>

          <el-form-item>
            <div class="label_box flex-between">
              <div class="label_text">{{ $t("loan.detail") }}</div>
              <!-- <div class="loan_record" :to=""  >{{ "规则" + ">" }}</div> -->
              <router-link :to="'/rule/index'" class="loan_record"
                >{{ $t("loan.rules") }} >
              </router-link>
            </div>
            <div class="pro_details">
              <div class="pro_details_item pro_details_left flex-colum-evenly">
                <div class="detail_item flex-between">
                  <p>{{ $t("loan.repayCycle") }}</p>
                  <p>{{ loanProductInfo.cycleType }} {{ $t("utils.days") }}</p>
                </div>
                <div class="detail_item flex-between">
                  <p>{{ $t("loan.dayRate") }}</p>
                  <p>{{ loanProductInfo.odds + "%" }}</p>
                </div>
                <div class="detail_item flex-between">
                  <p>{{ $t("loan.repayWay") }}</p>
                  <p>{{ repayTypeInfo.dictLabel }}</p>
                </div>
                <div class="detail_item flex-between">
                  <p>{{ $t("loan.interest") }}</p>
                  <p>0 USDT</p>
                </div>
                <div class="detail_item flex-between">
                  <p>{{ $t("loan.lendingInstit") }}</p>
                  <p>{{ loanProductInfo.repayOrg }}</p>
                </div>
              </div>
            </div>
          </el-form-item>

          <el-form-item
            :label="$t('loan.plsSurePhotoClear')"
            prop="imageUrl"
            :rules="[
              {
                required: true,
                message: $t('loan.plsUploadTip'),
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
                  <div v-if="form.cardUrl" class="avatar_box flex-center">
                    <img :src="form.cardUrl" class="avatar" />
                  </div>
                  <i
                    v-else
                    class="el-icon-camera-solid avatar-uploader-icon"
                  ></i>
                </el-upload>
                <div class="btn_box flex-center">
                  <el-button @click="upPic('cardUrl')">{{
                    $t("loan.uploadFront")
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
                  <div v-if="form.cardBackUrl" class="avatar_box flex-center">
                    <img :src="form.cardBackUrl" class="avatar" />
                  </div>
                  <i
                    v-else
                    class="el-icon-camera-solid avatar-uploader-icon"
                  ></i>
                </el-upload>
                <div class="btn_box flex-center">
                  <el-button @click="upPic('cardBackUrl')">{{
                    $t("loan.uploadBack")
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
                  <div v-if="form.capitalUrl" class="avatar_box flex-center">
                    <img :src="form.capitalUrl" class="avatar" />
                  </div>
                  <i
                    v-else
                    class="el-icon-camera-solid avatar-uploader-icon"
                  ></i>
                </el-upload>
                <div class="btn_box flex-center">
                  <el-button @click="upPic('capitalUrl')">{{
                    $t("loan.uploadHandle")
                  }}</el-button>
                </div>
              </div>
              <div class="upload_box_item last_img flex-center">
                <img :src="require('@/assets/image/shili.png')" alt="" />
              </div>
            </div>
          </el-form-item>

          <el-form-item>
            <div class="confirm_btn cur_d">
              <div @click="submit" class="cur_d">
                {{ $t("loan.confirmUpload") }}
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoanProdList, loanSubmit } from "@/api/loan";
import { getRepayType, uploadFile } from "@/api/common";
export default {
  data() {
    return {
      form: {
        proId: "",
        amount: "",
        cycleType: "",
        cardUrl: "",
        cardBackUrl: "",
        capitalUrl: "",
      },
      headerObj: { "Content-Type": "multipart/form-data" },
      repayTypeInfo: {},
      loanProductList: [],
      loanProductInfo: {},
      isVisible: false,
    };
  },
  created() {
    this.init();
  },
  computed: {
    // getOptionLabel(){
    //   return function (min,max) {
    //     if(!this.isVisible){
    //       return `${min}-${max}`
    //     }else{
    //       return `${min}-${max}`+' '+'USDT'
    //     }
    //   }
    // }
  },
  methods: {
    submit() {
      loanSubmit({
        ...this.form,
      }).then((res) => {
        //this.repayTypeInfo = res.data.data[0];
        console.log("提交贷款结果=====》", res.data);
        if (res.data.code == 200) {
          this.form = {
            proId: "",
            amount: "",
            cycleType: "",
            cardUrl: "",
            cardBackUrl: "",
            capitalUrl: "",
          };
          this.$message.success(res.data.msg);
        }
      });
    },
    init() {
      this.getRepayType();
      this.getLoanProdList();
    },
    visibleChange(value) {
      if (value) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
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
      this.uploadFile(formData, "cardUrl");
    },
    handleAvatarSuccess2(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "cardBackUrl");
    },
    handleAvatarSuccess3(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "capitalUrl");
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
      this.getLoanProductInfo();
    },
    getLoanProductInfo() {
      this.loanProductInfo = this.loanProductList.filter((item) => {
        return item.id == this.form.proId;
      })[0];
      this.form.cycleType = this.loanProductInfo.cycleType;
    },
    getRepayType() {
      getRepayType({
        t_repay_type: "",
      }).then((res) => {
        this.repayTypeInfo = res.data.data[0];

        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
    getLoanProdList() {
      getLoanProdList().then((res) => {
        this.loanProductList = res.data.rows;
        this.form.proId = res.data.rows[0].id;
        this.getLoanProductInfo();
      });
    },
  },
};
</script>

<style scoped lang="scss">
.loan_main {
  width: 100%;
  // height: 154px;
  margin-top: 65px;

  .loan_header_box {
    width: 100%;
    height: 154px;
    background: #f1f1f1;

    .header_inner {
      width: 1200px;
      height: 100%;
      margin: auto;

      .title {
        p {
          font-size: 36px;
        }
      }
    }
  }

  .form_container {
    width: 1200px;
    margin: auto;
    padding: 40px;
    // background: red;

    .loan_box {
      width: 750px;
      // background: yellow;

      ::v-deep.el-form {
        .el-select {
          width: 100%;

          .select_box {
          }
          // .el-select-dropdown__item {
          //   text-align: center;
          // }
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

            .btn_box {
              margin-top: 10px;

              // .image-uploader {
              //     padding: 0 10px;

              // }

              .el-button {
                width: 100%;
                height: 40px;
                color: #fff;
                background: #2c3f67;
              }
            }
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
            width: 400px;
            height: 48px;
            line-height: 48px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            background: #09BA85;
          }
        }
      }
    }
  }
}
</style>
