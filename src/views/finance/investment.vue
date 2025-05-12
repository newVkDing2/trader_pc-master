<template>
  <div class="investment">
    <component
      v-bind:is="isComponent"
      @toCoinTreasureDetail="toCoinTreasureDetail"
      @goBack="isComponent = 'coinTreasure'"
      @toDepositRecord="isComponent = 'depositRecord'"
      :projectId.sync="projectId"
    ></component>
  </div>
</template>

<script>
import coinTreasure from "./coinTreasure.vue";
import coinTreasureDetail from "./coin-treasure-detail.vue";
import depositRecord from "./deposit-record.vue";

export default {
  components: { coinTreasure, coinTreasureDetail, depositRecord },
  data() {
    return {
      isComponent: "coinTreasure",
      projectId: "123456",
    };
  },
  watch: {
    isComponent() {
      document.body.scrollTop = 1;
      document.documentElement.scrollTop = 1;
    },
  },
  methods: {
    toCoinTreasureDetail(e) {
      this.isComponent = "coinTreasureDetail";
    },
  },
};
</script>

<style lang="scss" scoped>
.investment {
}
</style>