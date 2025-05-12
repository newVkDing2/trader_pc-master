<template>
  <div class="myAssets_head_box">
    <div class="head_box flex-between">
      <!-- {{ overViewTabIndex }}--overViewTabIndex -->
      <div class="title">
        {{ overViewTabIndex == 9 ? title : buttons[overViewTabIndex] }}
      </div>
      <div v-show="showBtnSet" class="btn_set flex-between">
        <el-button
          v-for="(button, index) in buttons"
          :key="index"
          :style="{
            backgroundColor: currentButtonIndex === index ? '#09BA85' : '',
            color: currentButtonIndex === index ? '#fff' : '',
          }"
          @click="setCurrentButton(index)"
        >
          {{ button }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    overViewTabIndex: {
      type: Number,
      default: 9, // 默认为 false
    },
    showBtnSet: Boolean,
    title: String,
  },
  computed: {
    buttons() {
      return [
        this.$t("assets.assetsOverview"),
        this.$t("assets.myGenerali"),
        this.$t("assets.myInvest"),
      ];
    },
  },
  data() {
    return {
      // buttons: [
      //   this.$t("assets.assetsOverview"),
      //   this.$t("assets.myGenerali"),
      //   this.$t("assets.myInvest"),
      // ],
      currentButtonIndex: 0,
    };
  },
  methods: {
    setCurrentButton(index) {
      this.currentButtonIndex = index;
      this.$emit("currentOption", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.myAssets_head_box {
  width: 1200px;
  //   height:152px;
  margin: auto;

  .head_box {
    width: 100%;
    height: 212px;
    font-size: 36px;
    // background: red;
    border-bottom: 1px solid #f1f1f1;
    .el-button:hover {
      background-color: #09BA85;
      color: #fff;
    }
  }
}
</style>
