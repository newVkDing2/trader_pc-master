import { setStore, getStore, getAllStore } from "@/util/store";
import config from "@/config/index";
import { getDataApi, getSettingConfigApi } from "@/api/system";
import { getPlatFormConfigApi } from "@/api/common";
import { analysisFunction } from "@/util/util";

const common = {
  state: {
    logo: getStore({ name: "logo" }) || {},
    language: getStore({ name: "language" }) || "en",
    languageName: getStore({ name: "languageName" }) || "English",
    defaultLang: getStore({ name: "defaultLang" }) || "en",
    // language:  'en',
    // languageName: 'English',
    // defaultLang: 'en',
    exchange: getStore({ name: "exchange" }) || "cny",
    exchangeName: getStore({ name: "exchangeName" }) || "CNY",
    exchangeCode: getStore({ name: "exchangeCode" }) || "¥",
    exchangeNum: getStore({ name: "exchangeNum" }) || "1",
    themeName: getStore({ name: "themeName" }) || "theme-daytime",
    config: config,
    languageData: getStore({ name: "languageData" }) || "",
    allImgUrl: getStore({ name: "allImgUrl" }) || {},
    dealType: getStore({ name: "dealType" }) || "", //现货cash  杠杠pry
    currCoin: getStore({ name: "currCoin" }) || {}, //当前币种信息
    prySelf: getStore({ name: "prySelf" }) || {}, //是否 自动借款 自动还款
    contractType: getStore({ name: "contractType" }) || "", //合约类型 ubw  bbw
    contractUnit: getStore({ name: "contractUnit" }) || "", //合约计价单位
    assetSetting: getStore({ name: "assetSetting" }) || {
      showAllAssets: true,
      type: 1,
    }, //showAllAssets显示隐藏资产，type当前显示的钱包类型
    userVariation: {}, //用户账户变动记录
    merchantVariation: {}, //商家账户变动记录
    isRouterAlive: true, //是否重载页面
    settingConfig: {}, //系统配置
    /**
     * 客服邮箱
     */
    customerEmail: "",
    /**
     * 时区
     */
    timezone: "Asia/Hong_Kong",
    /**
     * 时区
     */
    timezoneOffset: 8,
    /**
     * 格式化
     */
    timeFormat: "MM/DD/YYYY",

    platFormConfig: {}, //平台配置文件
  },
  actions: {
    getAllSystemConfig({ commit }) {
      getSettingConfigApi().then((res) => {
        if (res.data.code == 200) {
          commit("SET_SYSTEM_CONFIG", res.data.data);
          commit("SET_LANGUAGE_DATA", res.data.data.t_app_language);
          commit("SET_TIME_ZONE", res.data.data.timeZone);
        }
      });
    },
    getPlatFormConfig({ commit }) {
      getPlatFormConfigApi().then((res) => {
        // console.log("getPlatFormConfigApi====>", res);
        if (res.status == 200) {
          commit("SET_PLATFORM_CONFIG", res.data);
        }
      });
    },
    getAllLangData({ commit }) {
      getDataApi("1530094068845895681", {
        pageSize: -521,
      }).then((res) => {
        let data = res.data.data.records;
        // commit('SET_LANGUAGE_DATA', data)
      });
    },
    getAllImgUrlData({ commit }) {
      getDataApi("1598229929599741953", {
        pageSize: -521,
      }).then((res) => {
        let data = res.data.data.records;
        commit("SET_All_IMG_URL", data);
      });
    },
  },
  mutations: {
    SET_PLATFORM_CONFIG: (state, platFormConfig) => {
      const dynamicCode = platFormConfig;
      const dynamicFunction = new Function(dynamicCode);
      state.platFormConfig = dynamicFunction();
      // console.log("platFormConfig====>", dynamicFunction());
    },
    SET_TIME_ZONE: (state, timeZone) => {
      const data = timeZone || "";
      const result =
        state.config.TIMEZONE_DICT.find(
          (elem) => elem.offset == data.offSetValue
        ) || null;
      // console.log("SET_TIME_ZONE===>", result);
      // console.log("timezoneOffset===>", data);
      if (!result) {
        state.timezone = data.zoneId;
        state.timezoneOffset = data.offSetValue;
      } else {
        state.timezone = result.timezone;
        state.timezoneOffset = data.offSetValue;
      }
      setStore({
        name: "timeZoneInfo",
        content: {
          timezone: state.timezone,
          timezoneOffset: state.timezoneOffset,
        },
      });
    },
    SET_SYSTEM_CONFIG: (state, settingConfig) => {
      state.settingConfig = settingConfig;
    },
    SET_IS_ROUTER_ALIVE: (state, isRouterAlive) => {
      state.isRouterAlive = isRouterAlive;
    },
    SET_ASSETS_SETTING: (state, assetSetting) => {
      state.assetSetting = assetSetting;
      setStore({
        name: "assetSetting",
        content: state.assetSetting,
      });
    },
    SET_LOGO: (state, logo) => {
      state.logo = logo;
      setStore({
        name: "logo",
        content: state.logo,
      });
    },
    SET_LANGUAGE: (state, { language, languageName }) => {
      state.language = language;
      state.languageName = languageName;
      setStore({
        name: "language",
        content: state.language,
      });
      setStore({
        name: "languageName",
        content: state.languageName,
      });
    },
    SET_DEFAULT_LANG: (state, defaultLang) => {
      state.defaultLang = defaultLang;
      setStore({
        name: "defaultLang",
        content: state.defaultLang,
      });
    },
    SET_EXCHANGE: (
      state,
      { exchange, exchangeName, exchangeCode, exchangeNum }
    ) => {
      state.exchange = exchange;
      state.exchangeName = exchangeName;
      state.exchangeCode = exchangeCode;
      state.exchangeNum = exchangeNum;
      setStore({
        name: "exchange",
        content: state.exchange,
      });
      setStore({
        name: "exchangeName",
        content: state.exchangeName,
      });
      setStore({
        name: "exchangeCode",
        content: state.exchangeCode,
      });
      setStore({
        name: "exchangeNum",
        content: state.exchangeNum,
      });
    },
    SET_THEME_NAME: (state, themeName) => {
      state.themeName = themeName;
      setStore({
        name: "themeName",
        content: state.themeName,
      });
    },
    SET_DEAL_TYPE: (state, dealType) => {
      state.dealType = dealType;
      setStore({
        name: "dealType",
        content: state.dealType,
      });
    },
    SET_CURR_COIN: (state, currCoin) => {
      state.currCoin = currCoin;
      setStore({
        name: "currCoin",
        content: state.currCoin,
      });
    },
    SET_LANGUAGE_DATA: (state, languageData) => {
      state.languageData = languageData;
      setStore({
        name: "languageData",
        content: state.languageData,
      });
    },
    // SET_LANGUAGE_DATA: (state, languageData) => {
    //   let lang = {}
    //   languageData.forEach(item => {
    //     try {
    //       if (item.attr_page != 'ht_config') {
    //         lang[`${item.attr_page}_${item.code}`] = analysisFunction(`function getData(){${item.text}}`)()
    //       }
    //     } catch (error) {
    //       console.warn(`数据格式异常:编号  ${item.code} ==> ` + error);
    //     }
    //   })
    //   setTimeout(() => {
    //     state.languageData = lang;
    //     console.log('所有翻译数据=====>', lang)
    //     setStore({
    //       name: 'languageData',
    //       content: state.languageData,
    //     })
    //   }, 0);

    // },
    SET_All_IMG_URL: (state, allImgUrl) => {
      let imgs = {};
      allImgUrl.forEach((item) => {
        imgs[item.code] = item.img;
      });
      state.allImgUrl = imgs;
      setStore({
        name: "allImgUrl",
        content: state.allImgUrl,
      });
    },
    SET_EXCHANGE_NUM: (state, exchangeNum) => {
      state.exchangeNum = exchangeNum;
      setStore({
        name: "exchangeNum",
        content: state.exchangeNum,
      });
    },
    SET_PRY_SELF: (state, prySelf) => {
      state.prySelf = prySelf;
      setStore({
        name: "prySelf",
        content: state.prySelf,
      });
    },
    SET_CONTRACT_TYPE: (state, contractType) => {
      state.contractType = contractType;
      setStore({
        name: "contractType",
        content: state.contractType,
      });
    },
    SET_CONTRACT_UNIT: (state, contractUnit) => {
      state.contractUnit = contractUnit;
      setStore({
        name: "contractUnit",
        content: state.contractUnit,
      });
    },
    SET_USER_VARIATION: (state, userVariation) => {
      state.userVariation = userVariation;
    },
    SET_MERCHANT_VARIATION: (state, merchantVariation) => {
      state.merchantVariation = merchantVariation;
    },
  },
};
export default common;
