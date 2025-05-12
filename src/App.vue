<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { getStrDataFunction } from "@/util/util";
import { getDataApi } from "@/api/system";
import { initWebSocket } from "@/socket/index";

export default {
  computed: {
    ...mapActions(["getCoinList"]),
    ...mapGetters(["languageData", "language", "defaultLang", "userInfo"]),
  },
  created() {
    //初始化socket
    if (this.userInfo && this.userInfo.user && this.userInfo.user.userId) {
      initWebSocket(this.userInfo.user.userId);
      //this.getCoinList();
    }

    //定义全局语言转换方法  def 未找到相关语言是 默认显示的语言其他
    Vue.prototype.coinLangFun = (page, code, def = "en") => {
      let codeText = page + "_" + code;
      if (
        this.languageData &&
        this.languageData[codeText] &&
        this.languageData[codeText][this.language]
      ) {
        return this.languageData[codeText][this.language];
      } else if (this.languageData && this.languageData[codeText]) {
        return this.languageData[codeText][
          this.defaultLang ? this.defaultLang : def
        ];
      } else {
        return "";
      }
    };
    Vue.prototype.dataCoinLangFun = (code, data, def = "en") => {
      if (data) {
        if (code) {
          if (typeof data[code] == "string") {
            try {
              data[code] = getStrDataFunction(data[code]);
            } catch (error) {
              data = {};
            }
          }
          return data[code]
            ? data[code][this.language]
              ? data[code][this.language]
              : data[code][this.defaultLang ? this.defaultLang : def]
            : "";
        } else {
          return data[this.language]
            ? data[this.language]
            : data[this.defaultLang ? this.defaultLang : def];
        }
      }
    };
    Vue.prototype.reloadViewFun = () => {
      this.SET_IS_ROUTER_ALIVE(false);
      this.$nextTick(() => {
        this.SET_IS_ROUTER_ALIVE(true);
      });
    };
    // getDataApi("1530464853989064705", {
    //   config_code: "empty_lang",
    // }).then((res) => {
    //   let data = res.data.data.records[0];
    //   let defaultLang = "";
    //   try {
    //     defaultLang = getStrDataFunction(data.config_data);
    //   } catch (error) {
    //     defaultLang = "zh_en";
    //   }
    //   this.SET_DEFAULT_LANG(defaultLang);
    // });
  },
  methods: {
    ...mapMutations(["SET_DEFAULT_LANG", "SET_IS_ROUTER_ALIVE"]),
  },
};
</script>
<style lang="scss">
// @font-face {
//   font-family: "DINPro";
//   src: url("/fonts/DINPro-Medium.otf");
// }
@font-face {
  font-family: DINOT-Regular;
  // src: url("/assets//fonts/DINOT-Regular.ttf");
  src: url("./assets/fonts/DINOT-Regular.ttf");
}

@font-face {
  font-family: DINOT-Regular-Bold;
  src: url("./assets/fonts/PINGFANG-SC-BOLD.ttf");
}

@font-face {
  font-family: DINOT-Regular-heavy;
  src: url("./assets/fonts/PINGFANG-SC-HEAVY.ttf");
}

.num_Bold {
  font-family: DINOT-Regular-Bold !important;
}

.num_Heavy {
  font-family: DINOT-Regular-heavy !important;
}

// 涨
$ex-rfd-rise-bg: rgba(46, 189, 133, 0.2);
// 跌
$ex-rfd-fall-bg: rgba(223, 41, 74, 0.2);
// 平
$ex-rfd-draw-bg: rgba(125, 145, 157, 0.2);
// 涨
$ex-rfd-rise: #4bbd83;
// 跌
$ex-rfd-fall: #d62548;
// 平
$ex-rfd-draw: #7d919d;

/* 绿涨 */
.rise {
  color: $ex-rfd-rise !important;

  &.rfd-sign::before {
    content: "+";
    padding-right: 2px;
    display: inline-block;
  }

  &.rfd-bg {
    background-color: $ex-rfd-rise-bg !important;
    /* color: var(--ex-white) !important; */
  }
}

/* 红跌 */
.fall {
  color: $ex-rfd-fall !important;

  &.rfd-sign::before {
    content: "-";
    padding-right: 2px;
    display: inline-block;
  }

  &.rfd-bg {
    background-color: $ex-rfd-fall-bg !important;
    /* color: var(--ex-white) !important; */
  }
}

.draw {
  color: $ex-rfd-draw !important;

  &.rfd-bg {
    background-color: $ex-rfd-draw-bg !important;
  }
}

#app {
  font-family: DINOT-Regular !important;
  background: #fafbfe;
  // font-family: DINPro, "SF Pro SC", "SF Pro Text", "Helvetica Neue", "Helvetica",
  //   "Arial", "PingFang SC", "Microsoft YaHei", "微软雅黑", sans-serif;

  // color: #2c3e50;
}

// .theme-night {
//   #app {
//     color: #dde3e6;
//   }
// }

// .theme-daytime {
//   #app {
//     color: #10171f;
//   }
// }
</style>
