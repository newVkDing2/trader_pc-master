<template>
  <div class="newbottom-footer">
    <div class="footer-wrap">
      <div class="wrap-logo flex-colum-between">
<!--        <div class="logo-img flex-start">-->
<!--          <img src="../../assets/image/logo.jpg" alt="" />-->
<!--          <span class="num_Bold">Coincheckusa</span>-->
<!--        </div>-->

        <div class="language-view">
          Language
          <!-- 使用 el-select 替代 el-popover -->
          <!-- <el-select
            v-model="selectedLang"
            placeholder="选择语言"
            @change="switchLang"
          >
            <el-option
              v-for="(item, index) in languageData"
              :key="index"
              :label="item.remark"
              :value="item"
            >
            </el-option>
          </el-select> -->
          <el-tooltip
            placement="bottom"
            effect="light"
            trigger="click"
            popper-class="operat-info-tooltip lang-tooltip "
          >
            <div slot="content">
              <div
                v-for="(item, index) in languageData"
                :key="index"
                class="info-item"
                @click="switchLang(item)"
              >
                <div class="item-text">
                  <div class="title flex-start" style="gap: 12px">
                    <img
                      :src="item.imgUrl"
                      alt
                      width="18px"
                      v-if="item.imgUrl"
                    />
                    <span>{{ $t(item.remark) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- {{ userInfo.avatar}}--userInfo -->
            <div class="logo-lang">
              <p>
                {{ selectedLang }}
              </p>
            </div>
          </el-tooltip>
        </div>

        <!-- <div class="logo-lang" @click="openSetLangFun">
          <span>{{ languageName }}</span>
        </div> -->
      </div>
      <div class="wrap-content flex-between">
        <div class="title-item">
          <div class="logo-top-view">
            <div
              class="top-logo"
              @click="$router.push({ path: '/' })"
            >
              <!--          <svg xmlns="http://www.w3.org/2000/svg" id="_レイヤー_2" viewBox="0 0 1260 221.43">-->
              <!--            <defs xmlns="http://www.w3.org/2000/svg"></defs>-->
              <!--            <g id="_レイヤー_1-2"><g><g><path class="cls-1" d="M39.74,103.05H1.48c-1.32,0-1.98-1.59-1.05-2.52L100.76,.44c.93-.93,2.53-.27,2.53,1.05V39.65c0,2.74-1.09,5.38-3.04,7.32l-53.18,53.05c-1.94,1.94-4.58,3.03-7.33,3.03Z"/><path class="cls-1" d="M182.21,118.38h38.26c1.32,0,1.98,1.59,1.05,2.52l-100.33,100.09c-.93,.93-2.53,.27-2.53-1.05v-38.17c0-2.74,1.09-5.38,3.04-7.32l53.18-53.05c1.94-1.94,4.58-3.03,7.33-3.03Z"/><path class="cls-1" d="M118.66,39.65V1.48c0-1.32,1.59-1.98,2.53-1.05l100.33,100.09c.93,.93,.27,2.52-1.05,2.52h-38.26c-2.75,0-5.39-1.09-7.33-3.03l-53.18-53.05c-1.94-1.94-3.04-4.57-3.04-7.31Z"/><path class="cls-1" d="M103.29,181.78v38.17c0,1.32-1.59,1.98-2.53,1.05L.44,120.9c-.93-.93-.27-2.52,1.05-2.52H39.74c2.75,0,5.39,1.09,7.33,3.03l53.18,53.05c1.94,1.94,3.04,4.57,3.04,7.31Z"/>-->
              <!--              <path class="cls-1" d="M70.42,105.15l34.98-34.9c3.08-3.07,8.07-3.07,11.15,0l34.98,34.9c3.08,3.07,3.08,8.05,0,11.12l-34.98,34.9c-3.08,3.07-8.07,3.07-11.15,0l-34.98-34.9c-3.08-3.07-3.08-8.05,0-11.12Z"/></g><g><path class="cls-2" d="M283.6,113.03c0-39.27,31.29-72.1,70.65-72.1,21.4,0,39.97,9.06,52.28,23.56l-13.32,11.28c-9.28-10.88-23.42-17.93-38.96-17.93-29.27,0-52.28,25.38-52.28,55.18s23.01,54.58,52.28,54.58c15.54,0,29.67-7.05,38.96-17.92l13.32,11.28c-12.31,14.5-30.89,23.56-52.28,23.56-39.36,0-70.65-32.22-70.65-71.49Z"/><path class="cls-2" d="M430.2,134.98c0-29.8,22.41-49.34,49.25-49.34s49.46,19.54,49.46,49.34-22.61,49.54-49.46,49.54-49.25-19.73-49.25-49.54Zm81.15,0c0-19.33-14.53-32.83-31.89-32.83s-31.49,13.49-31.49,32.83,14.33,33.03,31.49,33.03,31.89-13.49,31.89-33.03Z"/><path class="cls-2" d="M695.32,127.73v54.37h-17.56v-53.37c0-15.71-9.69-25.78-22.81-25.78s-28.87,7.85-28.87,28.2v50.95h-17.56V88.06h17.56v14.3c5.65-11.48,20.99-16.72,31.29-16.72,23.42,0,38.15,15.71,37.95,42.09Z"/><path class="cls-2" d="M720.29,134.98c0-29.8,23.62-49.34,50.67-49.34,14.74,0,27.65,5.84,35.93,14.9l-11.1,11.48c-5.85-6.04-14.33-9.87-24.22-9.87-18.57,0-33.51,13.49-33.51,32.83s14.94,33.03,33.51,33.03c9.89,0,18.37-3.83,24.22-9.87l11.1,11.48c-8.28,9.26-21.2,14.9-35.93,14.9-27.05,0-50.67-19.73-50.67-49.54Z"/><path class="cls-2" d="M918.66,127.73v54.37h-17.56v-53.37c0-15.71-9.69-25.78-22.81-25.78s-28.87,7.85-28.87,28.2v50.95h-17.56V36.91h17.56V102.36c5.65-11.48,20.99-16.72,31.29-16.72,23.42,0,38.15,15.71,37.95,42.09Z"/><path class="cls-2" d="M1038.5,142.63h-76.71c2.62,16.71,14.74,25.37,30.88,25.37,11.51,0,22-5.24,27.45-14.7l15.14,6.04c-8.08,16.31-25.03,25.17-43.2,25.17-26.85,0-48.45-19.94-48.45-49.74s21.6-49.14,48.45-49.14,46.83,19.33,46.83,49.14c0,2.62-.2,5.24-.4,7.85Zm-17.16-15.1c-2.22-16.11-13.73-25.38-29.27-25.38s-27.25,8.46-30.08,25.38h59.35Z"/><path class="cls-2" d="M1063.86,134.98c0-29.8,23.62-49.34,50.67-49.34,14.74,0,27.65,5.84,35.93,14.9l-11.1,11.48c-5.85-6.04-14.33-9.87-24.22-9.87-18.57,0-33.51,13.49-33.51,32.83s14.94,33.03,33.51,33.03c9.89,0,18.37-3.83,24.22-9.87l11.1,11.48c-8.28,9.26-21.2,14.9-35.93,14.9-27.05,0-50.67-19.73-50.67-49.54Z"/><path class="cls-2" d="M1260,182.11h-23.62l-43.4-45.92v45.92h-17.56V36.91h17.56V121.29l32.7-33.23h24.43l-40.37,40.68,50.26,53.37Z"/><path class="cls-2" d="M558.3,182.11V88.06h17.56v94.05h-17.56Z"/><ellipse class="cls-2" cx="567.08" cy="53.42" rx="11.71" ry="11.68"/></g></g></g></svg>-->


              <svg xmlns="http://www.w3.org/2000/svg" id="_レイヤー_2" viewBox="0 0 1260 221.43">
                <!--          <defs xmlns="http://www.w3.org/2000/svg"></defs>-->
                <g id="_レイヤー_1-2">
                  <g>
                    <g>
                      <path class="cls-1" d="M39.74,103.05H1.48c-1.32,0-1.98-1.59-1.05-2.52L100.76,.44c.93-.93,2.53-.27,2.53,1.05V39.65c0,2.74-1.09,5.38-3.04,7.32l-53.18,53.05c-1.94,1.94-4.58,3.03-7.33,3.03Z"/>
                      <path class="cls-1" d="M182.21,118.38h38.26c1.32,0,1.98,1.59,1.05,2.52l-100.33,100.09c-.93,.93-2.53,.27-2.53-1.05v-38.17c0-2.74,1.09-5.38,3.04-7.32l53.18-53.05c1.94-1.94,4.58-3.03,7.33-3.03Z"/>
                      <path class="cls-1" d="M118.66,39.65V1.48c0-1.32,1.59-1.98,2.53-1.05l100.33,100.09c.93,.93,.27,2.52-1.05,2.52h-38.26c-2.75,0-5.39-1.09-7.33-3.03l-53.18-53.05c-1.94-1.94-3.04-4.57-3.04-7.31Z"/>
                      <path class="cls-1" d="M103.29,181.78v38.17c0,1.32-1.59,1.98-2.53,1.05L.44,120.9c-.93-.93-.27-2.52,1.05-2.52H39.74c2.75,0,5.39,1.09,7.33,3.03l53.18,53.05c1.94,1.94,3.04,4.57,3.04,7.31Z"/>
                      <path class="cls-1" d="M70.42,105.15l34.98-34.9c3.08-3.07,8.07-3.07,11.15,0l34.98,34.9c3.08,3.07,3.08,8.05,0,11.12l-34.98,34.9c-3.08,3.07-8.07,3.07-11.15,0l-34.98-34.9c-3.08-3.07-3.08-8.05,0-11.12Z"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span class="logo-name"
            >Coincheckusa</span>
          </div>
          <div class="qr flex-colum" style="margin-top: 20px">
            <div class="qrcode_box">
              <img src="../../assets/image/qrcode.png" alt="" />
            </div>
          </div>
        </div>


        <div
          class="title-item flex-between"
          v-for="(item, index) in textData"
          :key="index"
        >
<!--           <div class="title">{{ item.title_code }}</div>-->
          <div class="sub-title">{{ $t(item.title_code) }}</div>
          <div class="child-list">
            <div
              class="child-item"
              v-for="(child, i) in item.child_list"
              :key="i"
              @click="jumpPage(child)"
            >
              {{ $t(child.title_code) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrDataFunction } from "@/util/util";
import { getDataApi } from "@/api/system";
import { mapGetters, mapMutations } from "vuex";
import { footerList } from "@/assets/js/header.js";
import { watch } from "@vue/composition-api";
export default {
  props: ["openSetLangFun"],
  data() {
    return {
      textData: [],
      iconData: [],
      copyright: {},
      isSkipArticle: false,
      langConf: [
        {
          value: "zh",
          text: "简体中文",
        },
        {
          value: "en",
          text: "English",
        },
      ], //语言
      selectedLang: "", //默认选中语言
    };
  },
  computed: {
    ...mapGetters([
      "language",
      "languageName",
      "languageData",
      "themeName",
      "logo",
      "allImgUrl",
    ]),
  },
  watch: {
    language(val) {
     if(val){
      this.selectedLang = this.languageName;
     }
    },
  },
  mounted() {
    this.textData = footerList;
    this.selectedLang = this.languageData.find(
      (item) => item.dictValue == this.language
    )["remark"];
    //获取底部导航配置
    // getDataApi('1530464853989064705', {
    //   config_type: 'footer',
    //   config_code: 'bottom_content',
    // }).then((res) => {
    //   let data = res.data.data.records[0]
    //   let config_data = getStrDataFunction(data.config_data)
    //   this.copyright = config_data.copyright
    //   this.textData = config_data.list_data
    //   this.iconData = config_data.icon_data

    //   console.log('底部导航配置', config_data)
    // })
  },
  methods: {
    ...mapGetters([
      "isLogin",
    ]),
    ...mapMutations([
      "SET_DEAL_TYPE",
      "SET_CURR_COIN",
      "SET_CONTRACT_TYPE",
      "SET_LANGUAGE",
    ]),
    openUrlFun(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    switchLang(item) {
      // console.log("item===>", item);
      this.$i18n.locale = item.dictValue;
      this.selectedLang = item.remark;
      localStorage.setItem("lang", item.dictValue);
      this.SET_LANGUAGE({
        language: item.dictValue,
        languageName: item.remark,
      });
    },
    jumpPage(data) {
      console.log(data)
      console.log(this.isLogin())
      console.log('点我你========>')
      // if (data.title_code !== "bottomNav.nav11" && data.title_code !== "bottomNav.nav12") {
      //   this.$message({
      //     message: this.$t('trade.downApp'),
      //     type: "success",
      //   });
      //   return
      // }
      // console.log("jumP===>", data);
      if (data.linkUrl == "customerService") {
        this.$emit("openDialog");
        return;
      }
      if (data.openUrl) {
        window.open(data.openUrl)
        return
      }
      if (!this.isLogin()) {
        this.$router.push({
          path: '/user/login',
        })
        return;
      }
      if (data.query) {
        this.$router.push({
          path: data.linkUrl,
          query: data.query,
        });
      } else {
        this.$router.push({
          path: data.linkUrl,
        });
      }
    },
    getImgUrlFun(code, type) {
      if (type) {
        code = code[type];
      }
      return this.allImgUrl[code] ? this.allImgUrl[code] : "";
    },
    textClickFun(data) {
      if (data.skip_type == "article" && data.article_code) {
        if (this.isSkipArticle) {
          return false;
        }
        this.isSkipArticle = true;
        //跳转文章
        getDataApi("1530431184536666113", {
          article_code: data.article_code,
          article_lang: this.language,
        })
          .then((res) => {
            this.isSkipArticle = false;
            let data = res.data.data.records;
            if (res.data.data.records.length > 0) {
              data = data[0];
              let routeData = this.$router.resolve({
                path: `/article/main/content/${data.article_type}/${data.id}`,
              });
              window.open(routeData.href, "_blank");
            }
          })
          .catch(() => {
            this.isSkipArticle = false;
          });
      } else if (data.skip_type == "page" && data.skip_path) {
        if (data.set_store && data.fun_key) {
          this[data.fun_key](data.set_store);
        }
        //跳转页面
        let routeData = this.$router.resolve({
          path: data.skip_path,
        });
        window.open(routeData.href, "_blank");
      }
    },
    currCoinLangFun(code, type = "footer") {
      return this.coinLangFun(type, code);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep.el-select {
  .el-input__inner {
    height: 48px;
    border-color: #09BA85;
  }
}
.newbottom-footer {
  width: 100%;
  // margin-top: 48px;
  background-color: #fafbfe;
  color: #838b9c;
  border-top: solid 1px #dde4e6;
  background: #eef1f6;

  .footer-wrap {
    width: 1240px;
    margin: auto;
    padding: 20px 20px 100px 20px;
    box-sizing: border-box;
    //background: red;
  }
}

.wrap-content {
  // display: flex;
  // justify-content: center;
  margin-top: 0px;
  // gap: 160px;

  .title-item {
    .title {
      font-size: 18px;
    }

    .child-list {
      margin-top: 0px;

      .child-item {
        font-size: 12px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
          color: #0f71c4;
        }
      }
    }
  }

  .qrcode_box {
    img {
      width: 150px;
    }
  }

  .qr {
    // flex: 1;

    .moreChoose {
      margin-top: 40px;

      .el-button {
        width: 120px;
      }
    }
  }
}

.wrap-logo {
  // padding: 20px;
  height: 100px;
  // background: yellow;

  .logo-img {
    img {
      width: 44px;
    }

    span {
      font-size: 28px;
      color: #09BA85;
    }
  }

  .logo-lang {
    font-size: 16px;
    border: 1px solid #0f71c4;
    border-radius: 4px;
    width: 170px;
    text-align: center;
    padding: 5px 0;
    // margin: 20px auto 0;
    cursor: pointer;
  }
}

.footer-icon-box {
  border-top: 1px solid #e5e5e5;
  padding: 24px 0;

  .box-content {
    width: 1240px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    grid-column-gap: 12px;

    .icon-item {
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;

        &:nth-child(1) {
          display: block;
        }

        &:nth-child(2) {
          display: none;
        }
      }

      &:hover {
        img {
          &:nth-child(1) {
            display: none;
          }

          &:nth-child(2) {
            display: block;
          }
        }
      }
    }
  }

  .icon-c {
    cursor: pointer;
  }
}

.language-view{
  display: flex;
  align-items: center;
  font-size: 12px;
  .logo-lang{
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
  }
}
.top-logo {
  cursor: pointer;
  //height: 30px;
  width: 40px;
  .cls-1{fill:#00d9b1;}
  .cls-2{fill:#00241e;}
  overflow: hidden;

  svg{
    width: 170px !important;
    height: auto;
  }
  img {
    width: 35px;
  }
}
.operat-info-tooltip{
  height: auto;
}
.operat-info-tooltip .info-item{
  padding: 10px 23px;
}




.logo-top-view{
  display: flex;
  align-items: start;
}
.logo-name{
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
}
.wrap-content.flex-between{
  align-items: flex-start;
  flex-wrap: nowrap;
}
.title-item.flex-between{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  overflow: hidden;
  margin: 0 20px;
  .sub-title{
    font-size: 14px;
    color: #838b9c;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
