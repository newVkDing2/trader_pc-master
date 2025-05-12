<template>
  <div class="article-content-box">
    <div class="content-wrapper">
      <div class="content-other">
        <div class="other-title">{{ currCoinLangFun("other_article") }}</div>
        <div class="other-list">
          <div
            class="item article-background null-background"
            :class="{ active: item.id == richData.id }"
            v-for="item in otherData"
            :key="item.id"
            @click="
              $router.push({
                path: `/article/main/content/${item.article_type}/${item.id}`,
              })
            "
          >
            {{ item.article_title }}
          </div>
        </div>
        <div
          class="article-more"
          @click="
            $router.push({
              path: '/article/main/sections/' + richData.article_type,
            })
          "
          v-if="otherTotal > 10"
        >
          {{ currCoinLangFun("view_more", "all") }}
        </div>
        <div v-if="otherTotal === 0">
          {{ currCoinLangFun("empty_article") }}
        </div>
      </div>
      <div class="content-box">
        <div class="content-title">{{ richData.article_title }}</div>
        <div class="content-rich" v-html="richData.article_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDataApi, getDetailDataApi } from "@/api/system";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      richData: {},
      otherData: [],
      otherTotal: "",
    };
  },
  computed: {
    ...mapGetters(["language"]),
  },
  created() {
    getDetailDataApi("1530431184536666113", this.$route.params.id).then(
      (res) => {
        let data = res.data.data;
        this.richData = data;
        getDataApi("1530431184536666113", {
          article_lang: this.language,
          article_type: data.article_type,
          article_issue: "1",
          pageSize: "10",
        }).then((res) => {
          let data = res.data.data.records;
          let total = res.data.data.total;
          this.otherData = data;
          this.otherTotal = total;
        });
      }
    );
  },
  methods: {
    currCoinLangFun(code, type = "article") {
      return this.coinLangFun(type, code);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-content-box {
  padding-bottom: 80px;
  .content-title {
    font-size: 32px;
    margin-bottom: 20px;
  }
  .content-wrapper {
    padding-top: 40px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    .content-other {
      border: 0;
      flex: 0 0 220px;
      height: auto;
      .other-title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .item {
        border-radius: 4px;
        display: block;
        font-weight: 300;
        margin-bottom: 10px;
        padding: 10px;
        border: none;
        cursor: pointer;
      }
    }
    .content-box {
      flex: 1;
      padding: 0 30px;
    }
  }
  .article-more {
    cursor: pointer;
  }
}
</style>
