<template>
  <div class="terms_box">
    <div v-html="articleInfo.content" class="rule_content"></div>
    <el-empty v-if="!articleInfo.content" :description="$t('utils.noData')">
      <template #image>
        <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
      </template>
    </el-empty>
  </div>
</template>

<script>
import { getRulesList } from "@/api/rule.js";
export default {
  props: {
    articleInfo: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.terms_box {
  width: 1200px;
  margin: auto;
  .rule_content {
    padding: 20px;
    margin-top: 30px;
    font-size: 12px;
    > P:first-child {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
