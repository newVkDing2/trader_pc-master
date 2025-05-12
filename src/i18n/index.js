import en from "./langs/en";
import ja from "./langs/ja";
import ko from "./langs/ko";
import zh from "./langs/zh";
import pt from "./langs/pt";
import vi from "./langs/vi";
import th from "./langs/th";
import es from "./langs/es";
import fr from "./langs/fr";
import ru from "./langs/ru";
import de from "./langs/de";
import it from "./langs/it";
import tw from "./langs/tw";
// import hk from './zh-hk.json'
// import vi from './vi-vn.json'
// import de from './de-DE.json'
// import ja from './ja-JP.json'
// import fr from './fr-FR.json'
// import ru from './ru-RU.json'
// import th from './th-TH.json'
// import es from './es-ES.json'
// import kr from './kr-KR.json'
// import ms from './ms.json'

import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

export default {
  //英文语言包
  en: {
    ...en,
    ...enLocale,
  },
  ja: {
    ...ja,
    ...enLocale,
  },
  ko: {
    ...ko,
    ...enLocale,
  },
  zh: {
    ...zh,
    ...zhLocale,
  },
  pt: {
    ...pt,
    ...enLocale,
  },
  vi: {
    ...vi,
    ...enLocale,
  },
  th: {
    ...th,
    ...enLocale,
  },
  es: {
    ...es,
    ...enLocale,
  },
  fr: {
    ...fr,
    ...enLocale,
  },
  ru: {
    ...ru,
    ...enLocale,
  },
  de: {
    ...de,
    ...enLocale,
  },
  it: {
    ...it,
    ...enLocale,
  },
  tw: {
    ...tw,
    ...zhLocale,
  },
};

// import Vue from "vue"
// import VueI18n from "vue-i18n"
// //引入自定义语言配置
// import zh from './langs/zh'
// import en from './langs/en'
// //引入UI框架语言配置---elementui
// import ElementLocale from 'element-ui/lib/locale'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// ElementLocale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换
// Vue.use(VueI18n); // 全局注册国际化包

// console.log("lang====>",localStorage.getItem('lang'));
// // 准备翻译的语言环境信息
// const i18n = new VueI18n({
//     locale: localStorage.getItem('lang') || "zh", //将语言标识存入localStorage或sessionStorage中，页面刷新不会默认中文显示
//     messages: {
//         // 中文语言包
//         'zh': {
//             ...zh,
//             ...zhLocale
//         },
//         //英文语言包
//         'en': {
//             ...en,
//             ...enLocale
//         }
//     },
//     silentTranslationWarn: true, //解决vue-i18n黄色警告"value of key 'xxx' is not a string"和"cannot translate the value of keypath 'xxx'.use the value of keypath as default",可忽略
//     globalInjection: true, // 全局注入
//     //fallbackLocale: 'zh', // 指定的locale没有找到对应的资源或当前语种不存在时，默认设置当前语种为中文
// });

// export default i18n
