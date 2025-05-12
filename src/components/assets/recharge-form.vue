<template>
  <div class="recharge_form_box">
    <div class="recharge_inner">
      <div class="title bold">{{ $t("assets.recharge") }}</div>
      <div class="recharge_form">
        <el-form
          :model="form"
          ref="form"
          label-width="90px"
          label-position="left"
          hide-required-asterisk="true"
        >
          <el-form-item :label="$t('assets.coinTypeList')" prop="type">
            <!-- <el-select v-model="form.type" :placeholder="$t('assets.plsSelectCoinType')" clearable>
              <el-option label="USDT-TRC" value="USDT-TRC"></el-option>
              <el-option label="ETH" value="ETH"></el-option>
              <el-option label="USDT-ERC" value="USDT-ERC"></el-option>
              <el-option label="BTC" value="BTC"></el-option>
            </el-select> -->
            <el-select
              v-model="form.type"
              :placeholder="$t('assets.plsSelectCoinType')"
              clearable
            >
              <el-option
                v-for="(coin, index) in coinTypeList"
                :key="index"
                :label="coin.coinName"
                :value="coin.coinName"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            :label="$t('assets.rechargeNum')"
            prop="amount"
            :rules="[
              {
                required: true,
                message: $t('assets.plsInputRechargeNum'),
                trigger: 'blur',
              },
              { type: 'number', message: $t('assets.mustNumber') },
            ]"
          >
            <el-input
              v-model="form.amount"
              :placeholder="$t('utils.plsInput') + rechargeNumRange"
            ></el-input>
          </el-form-item>

          <el-form-item :label="$t('assets.rechargeAddress')">
            <el-input v-model="rechargeAddress" disabled readonly>
              <template v-slot:suffix>
                <img
                  :src="require('@/assets/image/copy.png')"
                  alt=""
                  width="15px"
                  class="copy_icon"
                  style="cursor: pointer;"
                  @click="copyAddress(rechargeAddress)"
                />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item :label="$t('assets.scanRecharge')">
            <!-- <el-image
              style="width: 100px; height: 100px"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="contain"
            ></el-image> -->
            <qrcode :address="rechargeAddress"></qrcode>
          </el-form-item>

          <el-form-item
            :label="$t('assets.uploadPayShoot')"
            prop="imageUrl"
            :rules="[
              {
                required: true,
                message: $t('assets.plsUploadPayShoot'),
                trigger: 'blur',
              },
            ]"
          >
            <el-upload
              class="image-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :headers="headerObj"
            >
              <img v-if="form.fileFath" :src="form.fileFath" class="avatar" />
              <i v-else class="el-icon-camera-solid avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <div class="confirm_btn">
              <div v-loading="showLoading">
                <div @click="submit" class="cur_d"   >{{ $t("assets.confirmRecharge") }}</div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { rechargeSubmit } from "@/api/assets";
import qrcode from "@/components/common/qrcode.vue";
import { uploadFile } from "@/api/common";
// import { mapGetters } from "vuex";
export default {
  props: {
    settingConfig: Object,
    platFormConfig: Object,
    coinTypeList: Array,
    rechargeAddress: String,
    rechargeNumRange: String,
  },
  components: {
    qrcode,
  },
  data() {
    return {
      form: {
        coin: "ETH",
        type: "ETH",
        amount: "",
        address: "",
        fileFath: "",
      },
      // coinTypeList: [],
      headerObj: { "Content-Type": "multipart/form-data" },
      // rechargeNumRange: "", //充值范围
      showLoading: false
    };
  },
  computed: {
    // ...mapGetters(["settingConfig","platFormConfig"]),
    // form(){
    //   return{
    //     coin: "usdt",
    //     type: "USDT-TRC",
    //     amount: "",
    //     address: this.rechargeAddress,
    //     fileFath: "",
    //   }
    // }
  },
  mounted() {
    // console.log("settingConfig==>", this.settingConfig);
    // this.coinTypeList = this.settingConfig.ASSET_COIN;
    //this.form.address = this.platFormConfig.RECHARGE_ADDRESS[this.form.type];
    // this.getRange(this.form.type);
  },
  watch: {
    "form.type"(val) {
      // this.form.address = this.platFormConfig.RECHARGE_ADDRESS[val];
      // this.getRange(val);
      this.$emit("getRange", val);
    },
  },
  methods: {
    submit() {
      this.rechargeSubmit();
    },
    rechargeSubmit() {
      this.$emit("getRechargeRecord");
      this.showLoading = true
      this.form.address = this.rechargeAddress;
      rechargeSubmit({
        ...this.form,
      }).then((res) => {
        this.showLoading = false
        if (res.data.code==200) {
          this.$message.success(res.data.msg);
          this.form.amount='';
          this.form.fileFath='';
          this.$emit("getRechargeRecord");
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    copyAddress(text) {
      this.$copyText(text)
        .then(() => {
          this.$message.success(this.$t('utils.copySuccess'));
        })
        .catch(() => {
          this.$message.warning(this.$t('utils.copyFail'));
        });
    },
    // getRange(val) {
    //   let itemObj = this.settingConfig.ASSET_COIN.filter((item) => {
    //     return item.coinName == val;
    //   })[0];
    //   const minRechargeNum = itemObj.rechargeMin;
    //   const maxRechargeNum = itemObj.rechargeMax;
    //   this.rechargeNumRange = minRechargeNum + "-" + maxRechargeNum;
    // },
    uploadFile(formData, type) {
      uploadFile(formData).then((res) => {
        //this.repayTypeInfo = res.data.data[0];
        console.log("上传图片结果=====》", res.data);
        this.form[type] = res.data.data.url;
      });
    },
    handleAvatarSuccess(res, file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploadFile(formData, "fileFath");
      console.log("fileFath==>", this.form.fileFath);
    },
    beforeAvatarUpload(file) {
      console.log("file==>", file);
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
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.recharge_form_box {
  width: 1200px;
  padding: 40px 0;
  // background: red;
  margin: auto;

  .recharge_inner {
    width: 750px;
    .title {
      font-size: 36px;
      color: #1e2329;
    }
    .recharge_form {
      margin-top: 50px;
    }

    ::v-deep.el-form {
      .el-select {
        width: 100%;
      }
      .copy_icon {
        margin-right: 10px;
      }
      .el-form-item__label {
        font-size: 16px;
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
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 102px;
        height: 102px;
        line-height: 102px;
        text-align: center;
        background: #f1f1f1;
      }
      .avatar {
        width: 100px;
        height: 100px;
        background: #f1f1f1;
        border: 1px dashed #d9d9d9;
        display: block;
      }
      .confirm_btn {
        margin-top: 40px;
        > div {
          width: 600px;
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
</style>
