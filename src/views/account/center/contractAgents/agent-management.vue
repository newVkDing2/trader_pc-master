<template>
  <div class="fit-background agent-management">
    <ul class="nav-box">
      <li
        class="li-item fit-tc-tip"
        v-for="item in navList"
        :key="item.value"
        :class="{
          'active-text': navCurrent == item.value,
          'fit-tc-tertiary': navCurrent == item.value,
        }"
        @click="navigateTo(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div style="padding: 0px 20px 20px 20px">
      <component :is="componentId" :navCurrent="navCurrent"></component>
    </div>
  </div>
</template>

<script>
import memberManagement from "@/views/account/center/contractAgents/components/member-management.vue";
import contractOrder from "@/views/account/center/contractAgents/components/contract-order.vue";

export default {
  components: {
    memberManagement,
    contractOrder,
  },
  data() {
    return {
      componentId: "memberManagement",
      navCurrent: 1,
      navList: [
        {
          name: this.currCoinLangFun("dlcygl_nav"), //代理端成员管理
          value: 1,
          componentId: "memberManagement",
        },
        {
          name: this.currCoinLangFun("hyddmx_nav"), //合约订单明细
          value: 2,
          componentId: "contractOrder", //合约订单明细与合约订单分佣明细与下级当前持仓与佣金分发记录共用一个页面
        },
        {
          name: this.currCoinLangFun("hyddfymx_nav"), //合约订单分佣明细
          value: 3,
          componentId: "contractOrder", //合约订单明细与合约订单分佣明细与下级当前持仓与佣金分发记录共用一个页面
        },
        {
          name: this.currCoinLangFun("xjdqcc_nav"), //下级当前持仓
          value: 4,
          componentId: "contractOrder", //合约订单明细与合约订单分佣明细与下级当前持仓与佣金分发记录共用一个页面
        },
        {
          name: this.currCoinLangFun("yjffjl_nav"), //佣金分发记录
          value: 5,
          componentId: "contractOrder", //合约订单明细与合约订单分佣明细与下级当前持仓与佣金分发记录共用一个页面
        },
      ],
    };
  },
  mounted() {},
  methods: {
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    navigateTo(item) {
      this.navCurrent = item.value;
      this.componentId = item.componentId;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.agent-management {
  min-height: 600px;
  .nav-box {
    display: flex;
    padding: 8px 0;
    .li-item {
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .flex-box {
    display: flex;
    align-items: center;
  }
}
</style>

<style lang="scss">
.theme-night {
  .agent-management {
  }
}
.theme-daytime {
  .agent-management {
  }
}
</style>