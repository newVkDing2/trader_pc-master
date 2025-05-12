<template>
  <div class="bottom-footer">
    <div class="footer-wrap">
      <div class="footer-left">
        <div class="left-logo">
          <img v-show="themeName == 'theme-night'" :src="logo.night" />
          <img v-show="themeName != 'theme-night'" :src="logo.daytime" />
        </div>
        <div class="left-title">{{ getLangText(leftData.title) }}</div>
        <div class="left-property">
          {{ getLangText(leftData.copyright) }}
        </div>
        <div class="left-platform-list">
          <div
            class="platform-item"
            v-for="(item, index) in leftData.contactList"
            :key="index"
            @click="navRouterFun(item)"
          >
            <el-popover
              placement="bottom"
              width="120"
              trigger="hover"
              popper-class="operation-child-popover common-propver"
              v-if="item.img"
            >
              <div class="item-content child-qr">
                <!-- <img src="@/assets/image/lang_zh.png" /> -->
              </div>
              <i slot="reference" :class="item.icon"></i>
            </el-popover>
            <div class="item-content" v-else>
              <i :class="item.icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="right-list">
          <div
            class="list-item"
            v-for="(item, index) in rightData"
            :key="index"
          >
            <div class="item-title">{{ getLangText(item.label) }}</div>
            <div
              class="item-child"
              v-for="(child, index) in item.childern"
              :key="index"
              @click="navRouterFun(child)"
            >
              <el-popover
                placement="bottom"
                width="120"
                trigger="hover"
                popper-class="footer-child-popover common-propver"
                v-if="child.img"
              >
                <div class="child-qr">
                  <img :src="child.img" />
                </div>
                <div class="child-text" slot="reference">
                  {{ getLangText(child.label) }}
                </div>
              </el-popover>
              <div class="child-text" v-else>
                {{ getLangText(child.label) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrDataFunction } from "@/util/util";
import { isURL } from "@/util/validate";
import { getDataApi } from "@/api/system";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      leftData: {},
      rightData: [],
    };
  },
  computed: {
    ...mapGetters(["language", "themeName", "logo"]),
  },
  mounted() {
    //获取底部导航配置
    getDataApi("1530464853989064705", {
      config_type: "footer",
    }).then((res) => {
      let data = res.data.data.records;
      data.forEach((item) => {
        let config_data = getStrDataFunction(item.config_data);
        console.log("底部导航配置", config_data);
        if (item.config_code == "footer_let_data") {
          this.leftData = config_data;
        } else {
          this.rightData = config_data;
        }
      });
    });
  },
  methods: {
    ...mapMutations(["SET_DEAL_TYPE", "SET_CURR_COIN", "SET_CONTRACT_TYPE"]),

    getLangText(data) {
      if (!data) {
        return "";
      }
      return data[this.language] ? data[this.language] : data.zh_cn;
    },
    navRouterFun(data) {
      if (!data.path) {
        return false;
      }

      console.log(data);

      //现货交易  特殊处理
      if (data.id == "1530117082144694273") {
        this.SET_DEAL_TYPE("cash");
      }
      //杠杠交易 特殊处理
      if (data.id == "1530117755481481217") {
        this.SET_DEAL_TYPE("pry");
      }
      //合约 ubw
      if (data.id == "1530120028890718210") {
        this.SET_CONTRACT_TYPE("ubw");
      }
      //合约 bbw
      if (data.id == "1530120509004308481") {
        this.SET_CONTRACT_TYPE("bbw");
      }

      if (isURL(data.path)) {
        window.open(data.path);
      } else {
        this.$router.push({ path: data.path });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-footer {
  padding: 20px;
  display: flex;
  justify-content: center;
  .footer-wrap {
    flex: 1;
    max-width: 1200px;
    display: flex;
    justify-content: center;
  }
  .footer-left {
    flex: 0 0 320px;
    text-align: left;
    .left-logo {
      img {
        width: 200px;
      }
    }
    .left-title {
      font-size: 14px;
      padding-left: 10px;
      margin-top: 10px;
    }
    .left-property {
      font-size: 12px;
      margin-top: 30px;
      padding-left: 10px;
    }
    .left-platform-list {
      padding-left: 10px;
      display: flex;
      align-items: center;
      margin-top: 30px;
      .platform-item {
        font-size: 16px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        .item-content {
          height: 16px;
          width: 16px;
          cursor: pointer;
        }
        i {
          height: 16px;
          width: 16px;
        }
      }
    }
  }
  .footer-right {
    flex: 1;
    .right-list {
      display: flex;
      .list-item {
        flex: 0 0 140px;
        margin-right: 40px;
        text-align: center;
        .item-title {
          font-size: 16px;
          margin-bottom: 16px;
        }
        .item-child {
          .child-text {
            font-size: 12px;
            margin-bottom: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.footer-child-popover,
.operation-child-popover {
  width: 120px;
  min-width: 120px;
  padding: 0px;
  box-sizing: border-box;
  .popper__arrow {
    display: none;
  }
  .child-qr {
    padding: 6px;
    img {
      width: 106px;
    }
  }
}
</style>
