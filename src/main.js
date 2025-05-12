import Vue from "vue";
import axios from "./router/axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "./permission"; // 权限
import "./cache";
import store from "./store";

import Element from "element-ui";
import VueI18n from "vue-i18n";
import messages from "./i18n/index";
import ElementLocale from "element-ui/lib/locale";

import { _initCoinWebSocket } from "@/socket/index.js";
import * as publicFun from "@/util/public";
import * as filterFun from "@/util/filter";
//引入@vue/composition-api插件
import VueCompositionAPI from "@vue/composition-api";
//注册使用@vue/composition-api插件
Vue.use(VueCompositionAPI);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);



/**
 * 初始化socket
 */
_initCoinWebSocket();

store.dispatch("getPlatFormConfig");
store.dispatch("getAllSystemConfig");
store.dispatch("getCoinList");

// 页面公共函数
for (const key in publicFun) {
  if (Object.hasOwnProperty.call(publicFun, key)) {
    const elem = publicFun[key];
    // 在Vue 2中，通过Vue.prototype来添加全局属性或方法
    Vue.prototype[key] = elem;
  }
}

// 页面公共函数
for (const key in filterFun) {
  if (Object.hasOwnProperty.call(filterFun, key)) {
    const elem = filterFun[key];
    // 在Vue 2中，通过Vue.prototype来添加全局属性或方法
    Vue.prototype[key] = elem;
  }
}

Vue.use(VueI18n); // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en", // 语言标识
  messages,
});

ElementLocale.i18n((key, value) => i18n.t(key, value)); // 设置Element UI的多语言支持

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
});

Vue.prototype._i18n = i18n; // 将i18n实例挂载到Vue原型上

//计算精度处理
import "./util/calculate";
import "./styles/common.scss";
//引入图标库
import "@/assets/css/font-awesome.min.css";

Vue.use(VueAxios, axios);

// Vue.use(window.AVUE, {
//   size: 'small',
//   tableSize: 'small',
//   calcHeight: 65,
//   i18n: (key, value) => i18n.t(key, value)
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
