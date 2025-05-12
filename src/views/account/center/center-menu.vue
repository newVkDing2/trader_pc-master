<template>
  <div class="fit-background-di account-main">
    <div class="fit-background menu-list-box" v-if="showMenu">
      <ul class="flex-box">
        <li
          v-for="(item, index) in accountMenu"
          :key="index"
          @click="$router.push({ path: item.path })"
          :class="{
            active: currIndex == index,
            'fit-tc-tip': true,
            'active-text': currIndex == index,
          }"
          class="fit-tc-tertiary menuItem"
        >
          <span>{{ currCoinLangFun(item.code) }}</span>
        </li>
      </ul>
    </div>
    <div class="account-container">
      <div class="account-wrapper">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      accountMenu: [
        {
          name: "账户信息", //账户信息
          path: "/account/center/info",
          code: "account_info",
        },
        {
          name: "安全设置", //安全设置
          path: "/account/center/security",
          code: "security_set",
        },
        {
          name: "账户活动", //
          path: "/account/center/device-management",
          code: "account_activity",
        },
        {
          name: "身份认证", //身份认证
          path: "/account/center/kyc",
          code: "identity_certificat",
        },
        {
          name: "代理管理", //代理管理
          path: "/account/center/contractAgents/agentManagement",
          code: "团队管理",
        },
        // {
        //   name: "奖励中心",//奖励中心
        //   path: "/account/center/reward-center",
        // },
      ],
    };
  },
  created() {
    if (this.userInfo.is_merchant == 2) {
      this.accountMenu.push({
        name: "商家管理",
        path: "/account/center/merchant",
        code: "merchant_manage",
      });
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    currIndex() {
      return this.accountMenu.findIndex(
        (item) => item.path == this.$route.fullPath
      );
    },
    showMenu() {
      if (this.$route.path.indexOf("/setting/") != -1) {
        return false;
      }
      return true;
    },
  },
  methods: {
    currCoinLangFun(code, type = "user") {
      return this.coinLangFun(type, code);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-list-box {
  width: 100%;
  border-radius: 0 0 4px 4px;
  .flex-box {
    display: flex;
    align-items: center;
  }

  ul {
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 36px;
    li {
      position: relative;
      text-align: center;
      box-sizing: border-box;
      padding: 24px 0;
      cursor: pointer;
      &.active {
        &::after {
          position: absolute;
          left: 0;
          bottom: 0;
          content: "";
          display: block;
          width: 20px;
          height: 5px;
          left: calc(50% - 10px);
        }
      }
      &:not(:last-of-type) {
        margin-right: 36px;
      }

      span {
        font-size: 18px;
        line-height: 18px;
      }
    }
  }
}

.account-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0 48px;
  position: relative;
  box-sizing: border-box;
  min-height: calc(100vh - 517px);
}
</style>



<style lang="scss" scoped>
.theme-night {
  .menu-list-box {
    .menuItem.active::after {
      background-color: #0020FD;
    }
  }
}

.theme-daytime {
  .menu-list-box {
    .menuItem.active::after {
      background-color: #2954cc;
    }
  }
}
</style>