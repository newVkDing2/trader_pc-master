<template>
  <div class="prim_cer_main">
    <div class="cer_form" v-if="!userInfo.detail.auditStatusPrimary">
      <div class="title num_Bold">{{$t('user.primary')}}</div>
      <div class="form_container">
        <el-form
          label-position="top"
          label-width="80px"
          :model="form"
          ref="form"
          hide-required-asterisk="true"
        >
          <el-form-item
            :label="$t('user.name')"
            prop="realName"
            :rules="[
              { required: true, message: $t('user.plsFillName'), trigger: 'blur' },
            ]"
          >
            <el-input v-model="form.realName"></el-input>
          </el-form-item>
          <el-form-item
            :label="$t('user.idCard')"
            prop="idCard"
            :rules="[
              { required: true, message:$t('user.plsFillIdcard'), trigger: 'blur' },
            ]"
          >
            <el-input v-model="form.idCard"></el-input>
          </el-form-item>
          <el-form-item>
            <p style="color: red">{{$t('user.bindTip')}}</p>
          </el-form-item>
          <el-form-item>
            <div class="confirm_btn commonBtn_bg flex-center">
              <div v-loading="showLoading">
                <div @click="submit">{{$t('utils.confirm')}}</div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="cer_success" v-else>
      <div class="cer_result">
        <div class="cer_result_inner">
          <div class="imgBox">
            <img :src="require('@/assets/image/cer_success.png')" alt="" />
          </div>
          <div v-show="userInfo.detail.auditStatusPrimary == 1">
            {{$t('user.primaryCerSuccess')}}
          </div>
          <div v-show="userInfo.detail.auditStatusPrimary == 3">
            {{$t('user.msgSubmitSuccess')}}
          </div>
        </div>
      </div>
      <div class="btn_box flex-center">
        <el-button
          type="primary"
          v-show="userInfo.detail.auditStatusPrimary == 1"
          @click="$router.push({ path: '/trade/index',query:{type:'sec'} })"
        >
        {{$t('user.goTransaction')}}
        </el-button>
        <el-button
          type="primary"
          v-show="userInfo.detail.auditStatusPrimary == 3"
          @click="$router.push('/home/index')"
        >
        {{$t('user.backHome')}}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfoCerApi } from "@/api/user";
import router from "@/router";
export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {
      form: {
        realName: "",
        idCard: "",
        flag: 1,
      },
      showLoading: false
    };
  },
  methods: {
    submit() {
      this.relNameCer();
    },
    relNameCer() {
      this.showLoading = true
      userInfoCerApi({
        ...this.form,
      }).then((res) => {
        this.showLoading = false
        // console.log("认证j");
        if (res.data.code == 200) {
          this.$emit("getNewUserInfo");
        }
      }).finally(() => {
        this.showLoading = false
      })

      // this.$emit('getNewUserInfo');
    },
  },
};
</script>

<style scoped lang="scss">
.prim_cer_main {
  width: 1200px;
  margin: auto;
  padding-bottom: 200px;
  .cer_form {
    .title {
      font-size: 24px;
      margin: 40px 0 20px 0;
    }
    .form_container {
      ::v-deep .el-form {
        .el-form-item {
          width: 550px;
          // padding: 0;
        }
      }
      .confirm_btn {
        width: 227px;
        margin-top: 40px;

        > div {
          width: 260px;
          height: 40px;
          line-height: 40px;
          color: #fff;
          text-align: center;
          font-size: 16px;
          //background: #09BA85;
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
