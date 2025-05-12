<template>
  <div class="fit-background-di wallet-main">
    <div class="fit-background menu-list-box">
      <ul class="flex-box">
        <li
          v-for="(item, index) in walletMenu"
          :key="item.path"
          @click="$router.push({ path: item.path })"
          :class="{
            active: currIndex == index,
            'fit-tc-tip': true,
            'active-text': currIndex == index,
            'fit-tc-tertiary': currIndex == index,
          }"
          class="menuItem"
        >
          <span> {{ item.name }}</span>
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
export default {
  data() {
    return {
      walletMenu: [
        {
          name: this.currCoinLangFun("assets", "user"), //资产
          path: "/account/wallet/assets",
        },
        {
          name: this.currCoinLangFun("menu_cz", "move_index"), //充值
          path: "/account/wallet/deposit",
        },
        {
          name: this.currCoinLangFun("menu_tx", "move_index"), //提现
          path: "/account/wallet/withdrawal",
        },
        {
          name: this.currCoinLangFun("recharge_record"), //充值记录
          path: "/account/wallet/history-deposit",
        },
        {
          name: this.currCoinLangFun("withdrawal_record"), //提现记录
          path: "/account/wallet/history-withdrawal",
        },
        {
          name: this.currCoinLangFun("my_bill"), //我的账单
          path: "/account/wallet/bills",
        },
      ],
    };
  },
  methods: {
    currCoinLangFun(code, type = "assets") {
      return this.coinLangFun(type, code);
    },
  },
  computed: {
    currIndex() {
      return this.walletMenu.findIndex(
        (item) => item.path == this.$route.fullPath
      );
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