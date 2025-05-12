<template>
  <div class="home-index">
    <div class="home-index-content">
      <!-- banner -->
      <div class="home-banner">
        <img class="banner-img" v-show="themeName == 'theme-night'" :src="bannerNight" alt />
        <img class="banner-img" v-show="themeName != 'theme-night'" :src="bannerdaytime" alt />
        <div class="banner-center">
          <div class="banner-left">
            <h1 class="fit-tc-primary home-page">
              {{ currCoinLangFun("title_1") }}
            </h1>
            <h1 class="flex-box fit-tc-primary home-page">
              <span class style="display: block">{{
                              currCoinLangFun("title_2")
                              }}</span>
              <em style="display: block">{{ currCoinLangFun("title_3") }}</em>
            </h1>
            <p class="fit-tc-primary home-page">
              {{ currCoinLangFun("title_tip") }}
            </p>
            <div class="banner-register" :class="{ 'register-phone': registerType == 'phone' }">
              <el-input v-if="!isLogin" v-model="register" class="register-input" :placeholder="inputTip">
                <div slot="prefix" class="before-box" v-if="registerType == 'phone'">
                  <el-tooltip popper-class="phone-area-code-popper" v-model="isPhoneCode">
                    <div class="flex-box">
                      <div class="phone-select-box flex-box" @click="isPhoneCode = !isPhoneCode">
                        <div class="flex-box">
                          <div class="fit-tc-primary">+</div>
                          <input type="text" v-model="phoneRegion" disabled="disabled" class="input-txt-box" />
                        </div>
                        <i class="el-icon-caret-bottom"></i>
                      </div>
                    </div>
                    <div slot="content" class="contries-cont" style="width: 352px">
                      <phone-area-code v-model="phoneRegion" @change="isPhoneCode = false"
                        :language="language"></phone-area-code>
                    </div>
                  </el-tooltip>
                </div>
              </el-input>
              <span v-if="!isLogin" class="register-tips" @click="setTypeRegFun">
                {{ btnText }}
              </span>
              <el-button v-if="!isLogin" @click="registerFun" type="primary" class="normal register-btn">{{
                              currCoinLangFun("register") }}</el-button>
              <el-button v-if="isLogin" type="primary" @click="
                                $router.push({ path: '/exchange/full-screen/BTC_USDT' })
                              " class="normal register-btn">{{ currCoinLangFun("to_trade") }}</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 新闻 -->
      <div class="home-info">
        <div class="info-wrapper flex-box">
          <div class="info-left">
            <div class="new-title flex-box">
              <span class="title fit-tc-primary">{{
                              currCoinLangFun("new_title")
                              }}</span>
              <span class="more" @click="$router.push({ path: configData.news_left.morePath })">
                {{ currCoinLangFun("more", "all") }}
                <i class="el-icon-right"></i>
              </span>
            </div>
            <div class="new-list">
              <ul>
                <li v-for="item in newsLeftData" :key="item.id" @click="
                                    $router.push({
                                      path: `/article/main/content/${item.article_type}/${item.id}`,
                                    })
                                  ">
                  <h2 class="fit-tc-primary">{{ item.article_title }}</h2>
                  <p>{{ item.article_time }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="info-right">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in newsRightData" :key="item.id">
                  <img :src="item.article_img" @click="
                                        $router.push({
                                          path: `/article/main/content/${item.article_type}/${item.id}`,
                                        })
                                      " />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 行情 -->
      <div class="market-container">
        <div class="market-wrapper">
          <div class="market-title">
            <div class="title-txt fit-tc-primary">
              {{ currCoinLangFun("market") }}
            </div>
            <div class="market-nav flex-box">
              <ul class="flex-box">
                <li v-for="item in marketTabs.list" :key="item.value" :class="{ active: marketActive == item.value }"
                  @click="marketActive = item.value">
                  <span>{{ dataCoinLangFun("label", item) }}</span>
                </li>
              </ul>
              <div class="market-search fit-tc-primary">
                <el-input placeholder prefix-icon="el-icon-search" v-model="marketSearch"></el-input>
              </div>
            </div>
          </div>
          <div class="market-table">
            <el-table class="none-boder" :data="currMarketTable" style="width: 1240px" height="386px">
              <el-table-column width="234">
                <template slot="header" slot-scope="scope">
                  <span>
                    {{ currCoinLangFun("table_coin_name", "exchange") }}</span>
                </template>
                <template slot-scope="scope">
                  <div class="flex-box table-bzmc">
                    <el-image v-if="scope.row.bzicon" style="
                        width: 24px;
                        height: 24px;
                        margin-right: 4px;
                        margin-left: 20px;
                      " :src="scope.row.bzicon" lazy></el-image>
                    <span class="fit-tc-primary">{{ scope.row.bzmc }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="252" align="right" :label="currCoinLangFun('table_coin_price', 'exchange')">
                <template slot-scope="scope">
                  <div class="fit-tc-primary">
                    {{ scope.row.close }} /
                    <span class="fit-tc-tertiary">{{
                                          exchangeFilter("close", scope.row)
                                          }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="135" align="right" :label="currCoinLangFun('table_coin_zdf', 'exchange')">
                <template slot-scope="scope">
                  <span :style="{
                                        color: scope.row.zdf >= 0 ? '#27c28e' : '#e04d43',
                                      }">{{ scope.row.zdf | dzfFilter }}</span>
                </template>
              </el-table-column>
              <el-table-column width="232" align="right" :label="currCoinLangFun('orders_table_dir_amount', 'full')">
                <template slot-scope="scope">
                  <span class="fit-tc-primary">
                    {{ scope.row.cjl | toThousandsFilter }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column width="252" align="right" :label="currCoinLangFun('menu_cje', 'move_index')">
                <template slot-scope="scope">
                  <span class="fit-tc-primary">{{
                                      exchangeFilter("cje", scope.row)
                                      }}</span>
                </template>
              </el-table-column>
              <el-table-column width="135" align="right" label>
                <template slot-scope="scope">
                  <el-button class="amount-btn" style="
                      background: none;
                      font-size: 18px;
                      padding: 8px 12px;
                      margin-right: 20px;
                    " @click="openDealFun(scope.row)">{{ currCoinLangFun("item_three", "top") }}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="market-more flex-box">
            <span @click="$router.push({ path: marketTabs.morePath })">{{
                          currCoinLangFun("view_more", "all")
                          }}</span>
            <i class="el-icon-right"></i>
          </div>
        </div>
      </div>
      <!-- 下载 -->
      <div class="download-container" :style="{
                background: `url(${require('@/assets/image/new-bg-download.png')}) no-repeat bottom`,
              }">
        <div class="download-wrapper">
          <div class="download-title">
            <h2 class="fit-tc-primary">
              {{ dataCoinLangFun("title", downloadData) }}
            </h2>
            <p class="fit-tc-primary">
              {{ dataCoinLangFun("text", downloadData) }}
            </p>
          </div>
          <div class="download-img">
            <img :src="
                            themeName == 'theme-night'
                              ? downloadData.config_img_night
                              : downloadData.config_img_daytime
                          " class="dark-img" />
          </div>
          <div class="download-content">
            <dl class="flex-box space-between">
              <dt>
                <ul class="big-download-list flex-box fit-tc-button">
                  <li v-for="(item, index) in downloadData.downWeb" :key="index">
                    <i :class="item.icon"></i>
                    <div class="txt-item">
                      <div class="download-tit">
                        {{ dataCoinLangFun("text", item) }}
                      </div>
                      <div class="btn-text">
                        {{ dataCoinLangFun("title", item) }}
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="small-download-list flex-box fit-tc-button">
                  <li v-for="(item, index) in downloadData.apk" :key="index">
                    <div class="download-border-btn flex-box">
                      <!-- <i :class="item.icon"></i> -->
                      <span class="text">{{
                                              dataCoinLangFun("title", item)
                                              }}</span>
                    </div>
                  </li>
                </ul>
              </dt>
              <dd>
                <div class="ewm-box fit-tc-button">
                  <template v-for="(item, index) in appUrlList">
                    <div class="ewm-box-item" v-if="item.url" :key="index">
                      <div class="ewm-img">
                        <div class="qrcode-normal" :ref="`qrcode_${item.type}`" :id="`qrcode_${item.type}`"></div>
                      </div>
                      <p>{{ dataCoinLangFun("title", downloadData.ewm) }}</p>
                      <div style="text-align: center">
                        {{ currCoinLangFun(`app_${item.type}`) }}
                      </div>
                    </div>
                  </template>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- 学院 -->
      <div class="school-conatiner">
        <div class="school-wrapper">
          <div class="school-title flex-box">
            <span class="fit-tc-primary title">{{
                          currCoinLangFun("college")
                          }}</span>
            <div class="more" @click="$router.push({ path: configData.college.morePath })">
              <span>{{ currCoinLangFun("view_more", "all") }}</span>
              <i class="el-icon-right"></i>
            </div>
          </div>
          <div class="school-list">
            <ul class="flex-box">
              <li v-for="item in collegeData" :key="item.id" @click="
                                $router.push({
                                  path: `/article/main/content/${item.article_type}/${item.id}`,
                                })
                              ">
                <div class="img-box">
                  <img :src="item.article_img" />
                  <div class="txt">
                    <h3 style="height: 60px">{{ item.article_title }}</h3>
                    <!-- <div class="tag-txt blue">基础知识</div> -->
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="school-wrap-cont flex-box">
            <div class="wrap-left">
              <h2 class="fit-tc-primary">
                {{ dataCoinLangFun("title", selectMeData) }}
              </h2>
              <div class="school-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" style="width: 530px" v-for="(item, index) in selectMeData.list" :key="index">
                    <h3>{{ dataCoinLangFun("title", item) }}</h3>
                    <p>{{ dataCoinLangFun("text", item) }}</p>
                  </div>
                </div>
                <div class="pagation-list"></div>
              </div>
            </div>
            <div class="wrap-right">
              <img :src="selectMeData.config_img_night" class="dark-img" v-if="themeName == 'theme-night'" />
              <img v-else :src="selectMeData.config_img_daytime" class="light-img" />
            </div>
          </div>
        </div>
      </div>
      <!-- 网格交易 -->
      <div class="grid-exchange">
        <div class="grid-wrapper">
          <h2 class="fit-tc-primary">
            {{ dataCoinLangFun("title", gridData) }}
          </h2>
          <p class="fit-tc-primary" v-for="(item, index) in gridData.list" :key="index">
            {{ dataCoinLangFun("", item) }}
          </p>
          <el-button type="primary" @click="$router.push({ path: '/exchange/full-screen/BTC_USDT' })">
            {{ dataCoinLangFun("buttonText", gridData) }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapGetters, mapMutations } from "vuex";
import { getDataApi } from "@/api/system";
import { getAppApi } from "@/api/application";
import { getMqttInitDataApi } from "@/api/fullScreen";
import { analysisFunction, toThousands, numberFilterFun } from "@/util/util";
import mqtt from "@/mixins/mqtt";
import PhoneAreaCode from "@/components/user/phone-area-code.vue";
import { simpleEmail } from "@/util/validate";
import QRCode from "qrcodejs2";

export default {
  components: { PhoneAreaCode },
  mixins: [mqtt],
  data() {
    return {
      articleId: "1530431184536666113", //文章表id
      init: false,
      pageName: "",
      registerType: "email", //注册类型
      register: "", //注册输入的数据
      phoneRegion: "1", //手机归属地
      isPhoneCode: false,
      tableType: "", //表格类型
      allMarketData: {},
      marketTabs: [], //行情分类数据
      marketSearch: "",
      marketActive: "", //当前选择的行情分类
      marketMqtt: null,
      downloadData: {}, //下载数据
      configData: {}, //首页配置参数
      newsLeftData: [], //新闻左边列表
      newsRightData: [], //新闻右边列表
      collegeData: [], //学院数据
      selectMeData: {}, //选择我们数据
      gridData: {}, //网格交易数据
      appUrlList: [], //app应用数据
    };
  },
  computed: {
    ...mapGetters([
      "isLogin",
      "themeName",
      "language",
      "exchangeCode",
      "exchange",
      "exchangeNum",
    ]),
    inputTip() {
      if (this.registerType == "email") {
        return this.currCoinLangFun("register_email_tip");
      } else {
        return this.currCoinLangFun("register_phone_tip");
      }
    },
    btnText() {
      if (this.registerType != "email") {
        return this.currCoinLangFun("register_email");
      } else {
        return this.currCoinLangFun("register_phone");
      }
    },
    bannerNight() {
      if (this.init) {
        let night = this.currPageDataFun(
          this.configData,
          "banner,config_img_night"
        );
        return night;
      }
      return "";
    },
    bannerdaytime() {
      if (this.init) {
        let daytime = this.currPageDataFun(
          this.configData,
          "banner,config_img_daytime"
        );
        return daytime;
      }

      return "";
    },
    bannerSrc() {
      if (this.init) {
        let night = this.currPageDataFun(
          this.configData,
          "banner,config_img_night"
        );
        let daytime = this.currPageDataFun(
          this.configData,
          "banner,config_img_daytime"
        );
        if (this.themeName == "theme-night") {
          if (typeof night == "string") {
            return night;
          } else {
            return daytime;
          }
        } else {
          if (typeof daytime == "string") {
            return daytime;
          } else {
            return night;
          }
        }
        /* if (this.themeName == "theme-night") {
          if (typeof night == "string") {
            return {
              backgroundImage: `url(${night})`,
            };
          } else {
            return {
              backgroundImage: `url(${daytime})`,
            };
          }
        } else {
          if (typeof daytime == "string") {
            return {
              backgroundImage: `url(${daytime})`,
            };
          } else {
            return {
              backgroundImage: `url(${night})`,
            };
          }
        } */
      } else {
        return "";
      }
    },
    tableDataFiter() {
      return this.tableData;
    },
    currMarketTable() {
      let data = this.deepClone(
        this.allMarketData[this.marketActive]
          ? this.allMarketData[this.marketActive]
          : []
      );
      if (this.marketSearch) {
        data = data.filter(
          (item) =>
            item.bzmc.toLowerCase().indexOf(this.marketSearch.toLowerCase()) !=
            -1
        );
      }
      return data;
    },
  },
  filters: {
    toThousandsFilter(value) {
      return toThousands(value);
    },
    dzfFilter(value) {
      if (value >= 0) {
        return `+${value}%`;
      } else {
        return `${value}%`;
      }
    },
  },
  created() {
    // 获取页面参数
    getDataApi("1530464853989064705", {
      config_type: "home_index",
    }).then((res) => {
      let data = res.data.data.records;
      data.forEach((item) => {
        try {
          this.configData[item.config_code] = analysisFunction(
            `function getData(){${item.config_data}}`
          )();
          if (item.config_img_daytime || item.config_img_night) {
            if (!this.configData[item.config_code]) {
              this.configData[item.config_code] = {};
            }
            this.configData[item.config_code].config_img_daytime =
              item.config_img_daytime;
            this.configData[item.config_code].config_img_night =
              item.config_img_night;
          }
        } catch (error) {
          console.warn("数据编号：" + item.config_code + "配置异常");
        }
      });
      this.initFun();
    });
    this.getMarketIndexData();
    this.getAppFun();
  },
  watch: {
    language() {
      this.selectLangInit();
    },
  },
  mounted() {},
  methods: {
    ...mapMutations(["SET_CURR_COIN", "SET_DEAL_TYPE"]),
    //获取app链接
    getAppFun() {
      let arr = ["Android", "Ios"];
      let promiseArr = [];

      arr.forEach((item) => {
        promiseArr.push(
          new Promise((resolve, reject) => {
            getAppApi(item)
              .then((res) => {
                resolve({ type: item, url: res.data.data });
              })
              .catch(() => {
                reject();
              });
          })
        );
      });

      Promise.all(promiseArr).then((res) => {
        this.appUrlList = res;

        this.appUrlList.forEach((item) => {
          if (item.url) {
            this.setQrCodeFun(item.type, item.url);
          }
        });
        console.log("appUrlList=>", res);
      });
    },
    //生成二维码
    setQrCodeFun(type, url) {
      setTimeout(() => {
        console.log(this.$refs);
        this.$refs[`qrcode_${type}`][0].innerHTML = "";
        this[`qrcode_${type}`] = new QRCode(`qrcode_${type}`, {
          width: 120,
          height: 120,
          text: url,
          render: "canvas",
          correctLevel: QRCode.CorrectLevel.L,
        });
      }, 0);
    },
    initFun() {
      this.init = true;
      console.log("所有的首页参数", this.configData);
      this.selectLangInit();
      // 设置行情
      this.marketTabs = this.configData.market;
      this.marketActive = this.marketTabs.list[0].value;
      //连接行情mqtt
      this.marketMqtt = this.initMqtt("index", (data) => {
        this.allMarketData = data;
      });
      //设置下载
      this.downloadData = this.configData.download;
      //设置选择我们
      this.selectMeData = this.configData.select_we;
      setTimeout(() => {
        new Swiper(".school-swiper", {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".pagation-list",
            clickable: true,
          },
          slidesPerView: "auto",
        });
      }, 300);
      //网格交易
      this.gridData = this.configData.grid_trading;
    },
    registerFun() {
      if (this.registerType == "phone" && !this.register) {
        this.$message.error(this.currCoinLangFun("register_phone_error")); //请输入正确的手机号
        return false;
      } else if (this.registerType != "phone" && !simpleEmail(this.register)) {
        this.$message.error(this.currCoinLangFun("register_email_error")); //请输入正确的邮箱
        return false;
      }
      let query = {};
      if (this.registerType == "phone") {
        query.phone = this.register;
        query.code = this.phoneRegion;
      } else {
        query.account = this.register;
      }
      this.$router.push({
        path: "/user/register",
        query,
      });
    },
    exchangeFilter(type, data) {
      let money = data[type];
      return `${this.exchangeCode}${numberFilterFun(
        Number(money).myMul(this.exchangeNum)
      )}`;
    },
    currPageDataFun(data, code) {
      let codeArr = code.split(",");
      codeArr.forEach((item) => {
        if (data[item]) {
          data = data[item];
        }
      });
      return data;
    },
    currCoinLangFun(code, type = "home_index") {
      return this.coinLangFun(type, code);
    },
    setTypeRegFun() {
      if (this.registerType == "email") {
        this.registerType = "phone";
      } else {
        this.registerType = "email";
      }
    },
    //获取新闻数据
    getNewsDataFun(data, type) {
      getDataApi(this.articleId, {
        ...data.search,
        article_lang: this.language,
      }).then((res) => {
        let data = res.data.data.records;
        if (type == "left") {
          this.newsLeftData = data;
        } else if (type == "right") {
          this.newsRightData = data;
          new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            slidesPerView: "auto",
            loopedSlides: 2,
          });
        }
      });
    },
    //获取学院数据
    getCollegeDataFun() {
      let params = this.configData.college;
      getDataApi(this.articleId, {
        ...params.search,
        article_lang: this.language,
      }).then((res) => {
        let data = res.data.data.records;
        this.collegeData = data;
      });
    },
    //切换语言时需要重新获取的数据
    selectLangInit() {
      // 设置新闻
      this.getNewsDataFun(this.configData.news_left, "left");
      this.getNewsDataFun(this.configData.news_right, "right");
      //设置学院
      this.getCollegeDataFun();
    },
    openDealFun(row) {
      this.SET_DEAL_TYPE("cash");
      this.SET_CURR_COIN({
        ...row,
        coinInfo: {},
        coinMoneyData: { closeData: {}, riseFallData: {} },
      });
      let path = `/exchange/full-screen/${row.symbolName.replace("/", "_")}`;
      this.$router.push({ path });
    },
    //获取行情基础数据
    getMarketIndexData() {
      getMqttInitDataApi("index").then((res) => {
        let data = res.data.data;
        let keys = Object.keys(data);
        if (keys.length <= 0) {
          return false;
        }
        for (let key in data) {
          data[key] = data[key].map((item) => {
            item.zdf = Number(item.zdf);
            return item;
          });
        }
        this.allMarketData = data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-index-content {
  .home-banner {
    width: 100%;
    // height: 724px;
    border-radius: 0 !important;
    margin: 0 auto;
    position: relative;

    .banner-img {
      width: 100%;
      display: block;
    }

    .banner-center {
      position: absolute;
      left: 50%;
      top: 0px;
      transform: translateX(-50%);
      width: 1200px;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      align-items: center;

      .banner-left {
        box-sizing: border-box;
        background-size: 954px 485px;
        background-repeat: no-repeat;
        background-position: 100% 100%;

        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-align: left;

          span {
            color: #0020FD;
          }

          em {
            font-style: normal;
          }
        }

        p {
          font-size: 16px;
          padding-top: 24px;
          padding-bottom: 40px;
          font-weight: 700;
          text-align: left;
        }
      }

      .banner-register {
        position: relative;
        display: flex;
        align-items: center;

        .register-input {
          width: 380px !important;
          height: 64px !important;
          margin-right: 16px;
          position: relative;
          font-size: 14px;
          display: inline-block;

          ::v-deep.el-input__inner {
            height: 64px !important;
            border-radius: 2px !important;
            padding: 0 16px;
            font-size: 16px;
          }
        }

        .register-tips {
          position: absolute;
          right: 147px;
          height: calc(100% - 2px);
          width: auto;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .register-btn {
          height: 64px;
          padding: 0 44px;
          font-size: 20px;
          border-radius: 2px;
        }

        ::v-deep.el-input__prefix {
          left: 8px !important;
          display: flex;
          align-items: center;
          height: 100%;

          ::after {
            display: block;
            content: "";
            width: 1px;
            position: absolute;
            top: 1px;
            right: 0;
            bottom: 1px;
          }
        }

        .before-box {
          .flex-box {
            display: flex;
            align-items: center;
          }

          .phone-select-box {
            justify-content: space-between;
            width: 100%;
            height: 44px;
            line-height: 44px;

            .fit-tc-primary {
              line-height: 20px;
              font-size: 14px !important;
              padding-left: 8px !important;
            }

            .input-txt-box {
              height: 64px !important;
              border-radius: 2px !important;
              display: block;
              border: 0;
              width: 40px;
              background: none;
              padding: 0;
              margin: 0;
              cursor: pointer;
              overflow: visible;
            }

            i {
              padding-right: 8px !important;
            }
          }
        }

        &.register-phone {
          ::v-deep.el-input__inner {
            padding-left: 92px !important;
          }
        }
      }
    }
  }

  .home-info {
    width: 100%;
    height: auto;

    .info-wrapper {
      width: 1200px;
      margin: 0 auto;
      padding: 44px 0 68px;
      max-height: 316px;
      justify-content: space-between;

      .info-left {
        width: 378px;

        .new-title {
          justify-content: space-between;
          padding-bottom: 8px;
        }

        .title {
          font-size: 28px;
        }

        .more {
          font-size: 14px;
          cursor: pointer;
        }

        .new-list {
          min-height: 168px;

          li {
            padding-bottom: 8px;
            text-align: left;
            cursor: pointer;

            h2 {
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 8px;
            }

            p {
              font-size: 12px;
            }
          }
        }
      }

      .info-right {
        width: 794px;

        .swiper-container {
          display: flex;
          flex-direction: column-reverse;
          width: 800px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;

          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;

            .swiper-slide {
              width: 352px;
              height: 176px;
              margin-left: 48px;
              cursor: pointer;

              img {
                width: 352px;
                height: 176px;
                border-radius: 4px;
              }
            }
          }

          .swiper-pagination {
            position: static;
            display: flex;
            padding-bottom: 30px;
            bottom: 10px;
            left: 0;
            width: 100%;
            justify-content: flex-end;

            ::v-deep.swiper-pagination-bullet {
              cursor: pointer;
              width: 12px;
              height: 6px;
              border-radius: 0;
              opacity: 1;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
}

.market-container {
  width: 100%;
  height: auto;
  padding-bottom: 96px;
  display: flex;
  justify-content: center;

  .market-wrapper {
    width: 1200px;

    .market-title {
      padding: 0;
      height: auto;
      overflow: hidden;
      border-bottom: 1px solid;

      .title-txt {
        text-align: left;
        line-height: 56px;
        font-weight: 400;
        font-size: 40px !important;
        margin-bottom: 24px !important;
      }

      .market-nav {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        ul {
          li {
            padding: 0 0 17px;
            margin-right: 36px;
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: flex-end;

            &.active {
              color: #0020FD;

              &::after {
                content: "";
                display: block;
                width: 100%;
                height: 5px;
                position: absolute;
                bottom: 0;
              }
            }
          }
        }

        .market-search {
          .el-input {
            font-size: 14px;
          }
        }
      }
    }

    .market-table {
      margin: 0 -20px;

      ::v-deep.el-table {
        &::before {
          height: 0;
        }
      }

      ::v-deep.el-table__header-wrapper {
        thead {
          font-weight: 400;

          tr {
            background: none !important;

            th {
              font-size: 14px;
              font-weight: 400;
              border: none !important;
              padding: 24px 0 0;
              line-height: 14px;
              height: 16px;
              background: none !important;

              span {
                margin-left: 20px !important;
              }
            }
          }
        }
      }

      ::v-deep.el-table__body-wrapper {
        .el-table__body {
          margin-top: 8px;
          display: block;

          tr {
            background: none !important;
            font-size: 18px;

            td {
              border-bottom: 0;
              padding: 0;
              height: 72px;
            }
          }
        }
      }
    }

    .market-more {
      height: 20px;
      justify-content: center;
      margin-top: 32px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.school-conatiner {
  width: 100%;
  height: auto;
  padding: 100px 0;

  .school-wrapper {
    width: 1200px;
    height: auto;
    margin: 0 auto;

    .school-title {
      justify-content: space-between;

      .title {
        font-size: 40px;
      }

      .more {
        font-size: 20px;
        cursor: pointer;

        i {
          font-size: 14px;
        }
      }
    }

    .school-list {
      padding-top: 60px;

      ul {
        justify-content: space-between;

        li {
          width: 380px;
          height: auto;
          border-radius: 15px;
          cursor: pointer;

          img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 15px;
          }

          .txt {
            padding: 22px 16px;
            text-align: left;

            h3 {
              height: 60px;
              font-size: 20px;
            }

            .tag-txt {
              font-size: 12px;
              padding: 0 12px;
              height: 20px;
              line-height: 20px;
              margin-top: 8px;
              display: inline-block;
              vertical-align: middle;

              &::before {
                content: "";
                display: inline-block;
                vertical-align: middle;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                margin-right: 4px;
                margin-bottom: 2px;
              }
            }

            &:nth-child(1) {
              .tag-txt {
                background: rgba(36, 123, 255, 0.3);
              }
            }

            &:nth-child(2) {
              .tag-txt {
                background: rgba(255, 160, 51, 0.3);
              }
            }

            &:nth-child(3) {
              .tag-txt {
                background: rgba(85, 194, 100, 0.3);
              }
            }
          }
        }
      }
    }

    .school-wrap-cont {
      height: 600px;
      justify-content: space-between;
      text-align: left;

      .wrap-left {
        width: 530px;

        h2 {
          line-height: 64px;
          font-size: 48px;
          margin-bottom: 24px;
        }

        .school-swiper {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;

          .swiper-wrapper {
            .swiper-slide {
              h3 {
                font-size: 36px;
              }

              p {
                margin-top: 24px;
                font-size: 16px;
              }
            }
          }
        }

        .pagation-list {
          position: static;
          margin-top: 20px;

          ::v-deep.swiper-pagination-bullet {
            margin: 0 4px;
            cursor: pointer;
            width: 12px;
            height: 6px;
            border-radius: 0;
            opacity: 1;
          }
        }
      }

      .wrap-right {
        width: 654px;
        height: auto;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

.grid-exchange {
  padding: 120px 0;
  background: rgba(131, 134, 143, 0.16);
  text-align: left;

  .grid-wrapper {
    width: 1200px;
    margin: 0 auto;

    h2 {
      line-height: 64px;
      padding-bottom: 48px;
      font-size: 48px;
    }

    p {
      line-height: 40px;
      font-size: 16px;
      margin-bottom: 24px;
    }

    .el-button {
      height: 64px;
      padding: 0 44px;
      font-size: 20px;
      border-radius: 2px;
    }
  }
}

.download-container {
  width: 100%;
  height: auto;
  background-size: auto 756px !important;

  .download-wrapper {
    width: 1200px;
    margin: 0 auto;

    .download-title {
      text-align: center;

      h2 {
        line-height: 46px;

        font-size: 48px;
        padding-bottom: 24px;
      }

      p {
        font-size: 16px !important;
      }
    }

    .download-img {
      width: 970px;
      height: auto;
      display: block;
      margin: 36px auto 0;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    .download-content {
      width: 1200px;
      height: 275px;
      background: #0d1324;
      border-radius: 20px;

      dl {
        height: 275px;
        padding: 0 126px;
        justify-content: space-between;

        .big-download-list {
          li {
            margin-right: 46px;
            cursor: pointer;

            .txt-item {
              padding-top: 18px;
              text-align: left;

              i {
                font-size: 34px;
              }

              .download-tit {
                line-height: 16px;
                font-size: 12px;
              }

              .btn-text {
                font-size: 24px;
              }
            }
          }
        }

        .small-download-list {
          li {
            margin-right: 48px;
            padding-top: 40px;
            cursor: pointer;
            line-height: 34px;
            font-size: 18px;

            i {
              font-size: 16px;
            }
          }
        }

        .ewm-box {
          display: flex;
          align-items: center;

          .ewm-box-item {
            &:not(:first-child) {
              margin-left: 12px;
            }

            .ewm-img {
              padding: 2px;
              width: 120px;
              height: 120px;
              border: 1px solid;
              margin: 0 auto;

              .qrcode-normal {
                width: 120px;
                height: 120px;
              }
            }

            p {
              text-align: center;
              padding-top: 16px;
              font-size: 14px;
            }

            div {
              line-height: 20px;
              font-size: 14px;
              // margin-top: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
