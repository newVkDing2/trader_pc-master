<template>
  <div class="fit-background-di kyc-box">
    <div class="kyc-container">
      <div class="fit-background kyc-wrapper">
        <!-- <div class="flex-box fit-tc-border-color limit-line-wrap">
          <div class="limit-left">
            <h2 class="fit-tc-primary">额度</h2>
            <p class="fit-tc-tip">完成身份认证, 即可获得更高的日提现额度</p>
          </div>
          <div class="limit-right">
            <div class="line-text">
              <h3 class="flex-box">
                <i
                  class="limit-icon"
                  :class="{
                    circular: userInfo.real_name_status == '2',
                    'el-icon-success': userInfo.real_name_status != '2',
                  }"
                ></i>
                <span class="limit-text">
                  每日限额
                  <span>0.5 BTC</span>
                </span>
              </h3>
              <p
                class="fit-tc-tip"
                :class="{
                  'font-success': userInfo.real_name_status != '2',
                }"
              >
                {{ userInfo.real_name_status != "2" ? "当前" : "注册" }}
              </p>
            </div>
            <div class="line-box"></div>
            <div class="line-text">
              <h3 class="flex-box">
                <i
                  class="limit-icon"
                  :class="{
                    circular: userInfo.real_name_status != '2',
                    'el-icon-success': userInfo.real_name_status == '2',
                  }"
                ></i>
                <span class="limit-text">
                  每日限额
                  <span>10 BTC</span>
                </span>
              </h3>
              <p
                class="fit-tc-tip"
                :class="{ 'font-success': userInfo.real_name_status == '2' }"
              >
                {{ userInfo.real_name_status == "2" ? "当前" : "身份认证" }}
              </p>
            </div>
            <div class="line-box"></div>
            <div class="line-text">
              <h3 class="flex-box">
                <i
                  class="limit-icon"
                  :class="{ circular: true, 'el-icon-success': false }"
                ></i>
                <span class="limit-text"> 更高额度，请联系 </span>
              </h3>
              <p class="fit-tc-tip" :class="{ 'font-success': false }">
                service@BAIYIEX.zendesk.com
              </p>
            </div>
          </div>
        </div>-->
        <div class="fit-tc-border-color uc-title">
          <h2>{{ currCoinLangFun("info_sfrz") }}</h2>
          <div class="tag-tips flex-box">
            <i class="fit-tc-tertiary active-text el-icon-warning-outline"></i>
            <span class="fit-tc-primary">{{ currCoinLangFun("kyc_fxtxts") }}
            </span>
          </div>
        </div>
        <div class="uc-auth-container" v-if="
                    userInfo.real_name_status == '0' ||
                    (userInfo.real_name_status == '-1' && reAuthStatus)
                  ">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="344px">
            <el-form-item :label="`${currCoinLangFun('kyc_xzgjhdq')}`" prop="country">
              <el-select v-model="ruleForm.country" filterable @change="countryChange"
                popper-class="fit-background-select" :placeholder="`${currCoinLangFun('text_xzgjhdq')}`">
                <el-option v-for="item in countryList" :key="item.id" :label="item.zh_name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_xzzjlxx')}`" prop="cardType">
              <el-select popper-class="fit-background-select" v-model="ruleForm.cardType" filterable
                :placeholder="`${currCoinLangFun('kyc_qxzzjlxx')}`">
                <el-option v-for="item in certificatesType" :key="item.value" :label="item.label"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_xs')}`" prop="surname" v-if="currCountry.area_code != '86'">
              <el-input v-model="ruleForm.surname" maxlength="20"></el-input>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_mz')}`" prop="name">
              <el-input v-model="ruleForm.name" maxlength="20"></el-input>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_zjid')}`" prop="cardCode">
              <el-input v-model="ruleForm.cardCode" maxlength="50"></el-input>
            </el-form-item>
            <div class="line-box"></div>
            <el-form-item :label="`${currCoinLangFun('kyc_sfzzm')}`" prop="cardFront">
              <div slot>
                <span class="fit-tc-tip n-font-p-sty">{{ currCoinLangFun("kyc_tpgs") }}，{{
                                  currCoinLangFun("tpdxbndy5m_err", "buy_coins_relevant")
                                  }}</span>
                <el-upload :style="{ opacity: ruleForm.cardFront ? 1 : 0.6 }" class="avatar-uploader card-before"
                  :action="action" :show-file-list="false" accept="image/*" :before-upload="
                                      (file) => customUploadFun(file, 'cardFront', 'image')
                                    ">
                  <img v-if="ruleForm.cardFront" :src="ruleForm.cardFront" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_sfzghm')}`" prop="cardBack">
              <el-upload :style="{ opacity: ruleForm.cardBack ? 1 : 0.6 }" class="avatar-uploader card-back"
                :action="action" accept="image/*" :show-file-list="false" :before-upload="
                                  (file) => customUploadFun(file, 'cardBack', 'image')
                                ">
                <img v-if="ruleForm.cardBack" :src="ruleForm.cardBack" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item :label="`${currCoinLangFun('kyc_scsfz')}`" prop="cardHand">
              <div slot>
                <div class="info-text">
                  <p class="fit-tc-tip n-font-p-sty">
                    {{ currCoinLangFun("kyc_scsfzyq") }}
                  </p>
                  <ul class="flex-box n-font-p-sty">
                    <li class="flex-box">
                      <i></i>
                      {{ currCoinLangFun("kyc_rxqx") }}
                    </li>
                    <li class="flex-box">
                      <i></i>
                      {{ currCoinLangFun("kyc_zjhmqx") }}
                    </li>
                    <li class="flex-box">
                      <i></i>
                      {{ currCoinLangFun("kyc_sxwzqx") }}
                    </li>
                    <li class="flex-box">
                      <i></i>
                      {{ currCoinLangFun("kyc_wzbhdqxx") }}
                    </li>
                  </ul>
                </div>

                <el-upload :style="{ opacity: ruleForm.cardHand ? 1 : 0.6 }" class="avatar-uploader id-card"
                  :action="action" accept="image/*" :show-file-list="false" :before-upload="
                                      (file) => customUploadFun(file, 'cardHand', 'image')
                                    ">
                  <img v-if="ruleForm.cardHand" :src="ruleForm.cardHand" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="kyc-btn" style="width: 480px" @click="submitForm('ruleForm')">{{
                              currCoinLangFun("text_submit", "popup_tips") }}</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="result-container" v-else-if="userInfo.real_name_status == '1' && !reAuthStatus">
          <div class="result-wrapper">
            <img src="https://miniopic.baiyiex.com/baiyiex/upload/20220705/51b4e733d0b44ed228c65fe35d7e1fb6.svg" alt />
            <div class="fit-tc-primary result-title">
              <span>{{ currCoinLangFun("kyc_shz") }}</span>
            </div>
            <div class="fit-tc-primary result-info">
              {{ currCoinLangFun("kyc_ddshjg") }}
            </div>
          </div>
        </div>
        <div class="result-container" v-else-if="userInfo.real_name_status == '2' && !reAuthStatus">
          <div class="result-wrapper">
            <img src="https://miniopic.baiyiex.com/baiyiex/upload/20220705/68a53a0a6e148ec5fb486223eb796aa5.svg" />
            <div class="fit-tc-primary result-title">
              <span>{{ currCoinLangFun("kyc_tgsfrz") }}</span>
            </div>
            <!-- <div class="fit-tc-primary result-info"></div> -->
          </div>
        </div>
        <div class="result-container" v-else-if="userInfo.real_name_status == '-1' && !reAuthStatus">
          <div class="result-wrapper">
            <img src="https://miniopic.baiyiex.com/baiyiex/upload/20220705/49a50fa58acb435ab6c0e1106c2b386b.svg" alt />
            <div class="fit-tc-primary result-title">
              <span>{{ currCoinLangFun("kyc_rzsb") }}</span>
            </div>
            <div class="fit-error result-info">{{ refuseReason || "" }}</div>
            <div class="btnBox">
              <el-button type="primary" class="reAuth" @click="reAuthStatus = true">{{ currCoinLangFun("kyc_cxrz")
                              }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { submitAuthentication, getVerifiedInfo } from "@/api/user.js";
import { uploadeFileApi, getDataApi, getDicTableData } from "@/api/system.js";
export default {
  data() {
    return {
      currCountry: {}, //当前国家
      reAuthStatus: false, //是否正在重新认证
      action: `api/mjkj-bladex/cgform-api/upload/file`, //上传地址
      certificatesType: [],
      certificatesDic: [], //证件类型字典
      countryList: [], //国家/地区列表
      refuseReason: "", //失败原因
      ruleForm: {
        country: "",
        cardType: "",
        surname: "",
        name: "",
        cardCode: "",
        cardFront: "",
        cardBack: "",
        cardHand: "",
      },
      rules: {
        country: [
          {
            required: true,
            message: this.currCoinLangFun("text_xzgjhdq"), //请选择国家或地区
            trigger: "blur",
          },
          {
            required: true,
            message: this.currCoinLangFun("text_xzgjhdq"), //请选择国家或地区
            trigger: "change",
          },
        ],
        cardType: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qxzzjlxx"), //请选择证件类型
            trigger: "blur",
          },
          {
            required: true,
            message: this.currCoinLangFun("kyc_qxzzjlxx"), //请选择证件类型
            trigger: "change",
          },
        ],
        surname: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qtxxs"), //请填写姓氏
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qtxxm"), //请填写姓名
            trigger: "blur",
          },
        ],
        cardCode: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qtszjid"), //请填写证件ID号
            trigger: "blur",
          },
        ],
        cardFront: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qscrxzp"), //请上传身份证人像照
            trigger: "blur",
          },
        ],
        cardBack: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qscghm"), //请上传身份证国徽照
            trigger: "blur",
          },
        ],
        cardHand: [
          {
            required: true,
            message: this.currCoinLangFun("kyc_qscsczj"), //请上传手持身份证
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions(["getUserInfoData"]),
    ...mapMutations(["SET_USER_INFO"]),
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    async init() {
      let countryRes = await getDataApi("1531578936708677634", {
        pageSize: "-521",
        column: "sort",
        order: "asc",
        is_auth: "1",
      });
      this.countryList = countryRes.data.data.records;

      let certificatesRes = await getDicTableData("certificates_type");
      this.certificatesDic = certificatesRes.data.data;

      if (this.userInfo.real_name_status == "-1") {
        //回显用户认证信息
        let examineRes = await getVerifiedInfo();

        let examineInfo = examineRes.data.data;
        this.refuseReason = examineInfo.reason;
        this.ruleForm = {
          country: examineInfo.country || "",
          cardType: examineInfo.card_type || "",
          surname: examineInfo.surname || "",
          name: examineInfo.name || "",
          cardCode: examineInfo.card_code || "",
          cardFront: examineInfo.card_front || "",
          cardBack: examineInfo.card_back || "",
          cardHand: examineInfo.card_hand || "",
        };
        //更新身份类型选择
        if (this.ruleForm.country) {
          this.countryChange(Number(this.ruleForm.country));
        }
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          submitAuthentication(this.ruleForm).then(async () => {
            this.$message({
              type: "success",
              message: this.currCoinLangFun("kyc_tjcgts"), //提交成功，工作人员将在第一时间进行审核
            });
            this.reAuthStatus = false;
            let userInfo = await this.getUserInfoData();
            this.SET_USER_INFO({
              ...this.userInfo,
              ...userInfo,
            });
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploadSuccess(res, file) {
      console.log(res);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    //上传文件 图片
    customUploadFun(file, filedName) {
      let formdata = new FormData();
      formdata.append("file", file);
      formdata.append("type", 0);
      if (file.size > 5242880) {
        this.$message.error(
          this.currCoinLangFun("tpdxbndy5m_err", "buy_coins_relevant")
        ); //不能大于5m
        return false;
      }

      uploadeFileApi(formdata)
        .then((res) => {
          let url = res.data.data.link;
          this.ruleForm[filedName] = url;
        })
        .catch(() => {
          this.$message.error(this.currCoinLangFun("kyc_sctpsbts")); //上传“图片”失败，请重新上传~
        });
      return false;
    },
    countryChange(value) {
      let index = this.countryList.findIndex((item) => item.id == value);
      let currType = this.countryList[index].card_type_list || "";
      let currTypeArr = currType.split(",");
      this.currCountry = this.countryList[index];
      this.certificatesType = [];
      currTypeArr.forEach((item) => {
        this.certificatesDic.forEach((child) => {
          if (item == child.value) {
            this.certificatesType.push(child);
          }
        });
      });
    },
  },
  computed: {
    ...mapGetters(["language", "userInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.el-upload {
  img {
    width: 100%;
    height: 100%;
  }
}

.kyc-box {
  .flex-box {
    display: flex;
    align-items: center;
  }

  .kyc-wrapper {
    padding: 24px;

    .limit-line-wrap {
      justify-content: space-between;
      padding: 0 0 24px;
      height: auto;
      overflow: hidden;
      border-bottom: 1px solid;

      .limit-left {
        h2 {
          line-height: 24px;
          font-weight: 600;
          font-size: 16px !important;
        }

        p {
          line-height: 16px;
          font-size: 12px !important;
        }
      }

      .limit-right {
        display: flex;
        align-items: flex-start;

        .line-text {
          h3 {
            .limit-icon {
              margin-right: 4px !important;

              &.circular {
                width: 20px;
                height: 20px;
                line-height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;

                &::after {
                  background-color: #7d92a8;
                  display: inline-block;
                  content: "";
                  width: 6px;
                  height: 6px;
                  border-radius: 3px;
                }
              }

              &.el-icon-success {
                font-size: 20px !important;
              }
            }

            .limit-text {
              line-height: 20px;
              font-size: 14px !important;

              span {
                font-weight: 700;
                padding-left: 4px !important;
              }
            }
          }

          &>p {
            line-height: 16px;
            font-size: 12px !important;
            margin-left: 24px !important;
          }
        }

        .line-box {
          width: 64px;
          height: 2px;
          margin: 9px 16px;
        }
      }
    }

    .uc-title {
      padding: 24px 0;
      border-bottom: 1px solid;

      h2 {
        line-height: 32px;
        font-size: 24px;
        font-weight: 600;
      }

      .tag-tips {
        margin-top: 16px;
        padding: 8px 16px;
        border-radius: 2px;

        i {
          line-height: 20px;
          height: 20px;
          font-size: 16px !important;
          margin-right: 8px !important;
        }

        span {
          font-size: 14px;
        }
      }
    }

    .uc-auth-container {
      .el-form {
        padding-top: 40px;
      }

      .n-font-p-sty {
        padding-top: 10px;
        font-size: 12px;
        line-height: 20px;
      }

      ::v-deep.el-form {
        .el-input {
          width: 480px;
        }

        .el-form-item__label {
          font-size: 12px;
        }

        .el-upload {
          width: 392px;
          height: 232px;
          padding: 4px;
          border-radius: 4px;
          border: 1px solid;
          position: relative;
          overflow: hidden;
          display: inline-block;
          text-align: center;
          cursor: pointer;
          outline: 0;

          .el-icon-plus {
            opacity: 0;
          }
        }

        .card-before>.el-upload {
          background: url(https://miniopic.baiyiex.com/baiyiex/public/common/sfzzm.png) no-repeat 4px 4px;
          background-size: 392px auto;
        }

        .card-back>.el-upload {
          background: url(https://miniopic.baiyiex.com/baiyiex/public/common/sfzfm.png) no-repeat 4px 4px;
          background-size: 392px auto;
        }

        .id-card>.el-upload {
          background: url(https://miniopic.baiyiex.com/baiyiex/public/common/szfqm.png) no-repeat 4px 4px;
          background-size: 392px auto;
        }

        .info-text {
          ul {
            li {
              display: flex;
              align-items: center;
              padding-right: 16px;

              i {
                width: 12px;
                height: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                &::before {
                  display: inline-block;
                  content: "";
                  width: 4px;
                  height: 4px;
                  border-radius: 3px;
                }
              }
            }
          }
        }
      }

      .line-box {
        width: 100%;
        height: 1px;
        margin-bottom: 40px;
        margin-top: 40px;
      }
    }

    .result-container {
      display: flex;
      justify-content: center;

      .result-wrapper {
        padding: 40px 0;
        text-align: center;

        img {
          width: 72px;
          height: 72px;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      }

      .result-title {
        font-size: 20px !important;
        line-height: 24px;
        margin-top: 16px;

        span {
          font-weight: 700;
        }
      }

      .result-info {
        line-height: 20px;
        margin-top: 16px;
        font-size: 14px !important;
      }

      .btnBox {
        margin-top: 16px;

        button.reAuth {
          width: 90px !important;
          height: 42px;
          padding: 12px;
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: 0;
          margin: 0;
          transition: 0.1s;
          font-weight: 500;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.theme-night {
  .kyc-box {
    .line-box {
      background-color: #262d38;
    }

    .limit-right {
      .line-text {
        h3 {
          .el-icon-success {
            color: #19a680;
          }
        }

        .font-success {
          color: #19a680;
        }
      }
    }

    .uc-title .tag-tips {
      background-color: #151d29;
    }

    .kyc-wrapper .uc-auth-container .el-form .el-upload {
      border-color: #262d38 !important;
    }

    .info-text ul li {
      i::before {
        background-color: #9bb4cc;
      }
    }

    .btnBox {
      button.reAuth {
        background: #151d29;
        border: 1px solid #0020FD;
        color: #f5faff;

        &:hover {
          color: #0020FD;
          border-color: #223e69;
          background-color: #19283e;
        }
      }
    }
  }
}

.theme-daytime {
  .kyc-box {
    .line-box {
      background-color: #eff0f2;
    }

    .limit-right {
      .line-text {
        h3 {
          .el-icon-success {
            color: #0d8665;
          }
        }

        .font-success {
          color: #0d8665;
        }
      }
    }

    .uc-title .tag-tips {
      background-color: #f5f6fa;
    }

    .kyc-wrapper .uc-auth-container .el-form .el-upload {
      border-color: #eff0f2;
    }

    .info-text ul li {
      i::before {
        background-color: #4e6073;
      }
    }

    .btnBox {
      button.reAuth {
        background: #fff;
        border: 1px solid #d8dfeb;
        color: #4e6073;

        &:hover {
          color: #2271e6;
          border-color: #bdd4f8;
          background-color: #e9f1fd;
        }
      }
    }
  }
}
</style>
