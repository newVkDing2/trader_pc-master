<template>
  <div class="fit-background-di wallet-main">
    <div class="fit-background menu-list-box">
      <ul class="flex-box">
        <li
          v-for="(item, index) in walletMenu"
          :key="index"
          @click="$router.push({ path: item.path })"
          :class="{
            active: currIndex == index,
            'fit-tc-tip': true,
            'active-text': currIndex == index,
          }"
          class="fit-tc-tertiary menuItem"
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
          name: this.currCoinLangFun("coin", "article"), //币币交易
          path: "/account/entrust/spot",
        },
        {
          path: "/account/entrust/margin-all",
          name: this.currCoinLangFun("lever_transaction_full"), //杠杆交易-全仓
        },
        {
          path: "/account/entrust/margin-fixed",
          name: this.currCoinLangFun("lever_transaction_fixed"), //杠杆交易-逐仓
        },
        {
          path: "/account/entrust/future/u",
          name: this.currCoinLangFun("item_four_child_one_title", "top"), //U本位永续合约
        },
        {
          path: "/account/entrust/future/coin",
          name: this.currCoinLangFun("item_four_child_two_title", "top"), //币本位永续合约
        },
      ],
    };
  },
  computed: {
    currIndex() {
      return this.walletMenu.findIndex(
        (item) => item.path == this.$route.fullPath
      );
    },
  },
  methods: {
    currCoinLangFun(code, type = "entrust") {
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