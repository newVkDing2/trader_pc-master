<template>
  <div class="defis_main">
    <div class="defis_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("rules.title") }}</p>
        </div>
      </div>
    </div>

    <div class="article_container">
      <div class="left">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.type"
            class="flex-between"
            @click="showArticle(item)"
            :class="{ active: type == item.type }"
          >
            <span>{{ $t(item.label) }}</span>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="r_titl">- {{ $t(title) }} -</div>
        <div class="r_content">
          <div
            v-if="articleInfo.length > 0"
            v-html="articleInfo[0].content"
          ></div>

          <!-- 
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p>
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p>
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p>
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p>
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p>
                    <p>交易时间： 秒合约的交易时间非常短，您需要在极短的时间内进行交易决策和操作。</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRulesList } from "@/api/rule.js";
export default {
  data() {
    return {
      type: "PERIOD_EXPLAIN",
      menuItems: [
        { type: "PERIOD_EXPLAIN", label: "rules.secondRules" },
        { type: "COIN_EXPLAIN", label: "rules.spotRules" },
        { type: "U_STANDARD_EXPLAIN", label: "rules.uRules" },
        { type: "LOANS_RULE", label: "rules.loanRules" },
        // 其他菜单项...
      ],
      articleInfo: [],
      title: "",
    };
  },
  mounted() {
    this.getDataList(this.type);
    this.title = this.menuItems[0].label;
  },
  beforeDestroy() {},
  methods: {
    showArticle(item) {
      this.type = item.type;
      this.getDataList(item.type);
      this.title = item.label;
    },
    getDataList(type) {
      getRulesList({
        key: type,
      }).then((res) => {
        this.articleInfo = res.data.data;
        //console.log("文章详情=====》", res.data.data[0]);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.defis_main {
  width: 100%;
  // height: 154px;
  margin-top: 65px;

  .defis_header_box {
    width: 100%;
    height: 154px;
    background: #f1f1f1;

    .header_inner {
      width: 1200px;
      height: 100%;
      margin: auto;

      .title {
        p {
          font-size: 36px;
        }
      }
    }
  }

  .article_container {
    width: 1200px;
    min-height: 870px;
    margin: auto;
    display: flex;

    .left {
      flex: 1.1;
      border: 1px solid #f1f1f1;

      ul {
        li {
          font-size: 14px;
          height: 62px;
          padding: 0 10px;
          border-bottom: 1px solid #f1f1f1;
        }

        li:hover {
          background: #f1f1f1;
        }

        .active {
          background: #f1f1f1;
        }
      }
    }

    .right {
      flex: 4;
      padding: 40px;
      // background: red;

      .r_titl {
        font-size: 20px;
        text-align: center;
      }

      .r_content {
        margin-top: 50px;
        font-size: 12px;

        // P {
        //     font-size: 12px;
        //     margin-bottom: 15px;
        // }
      }
    }
  }
}
</style>
