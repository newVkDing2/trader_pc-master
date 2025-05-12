<template>
  <div class="article-categories-box">
    <div class="container">
      <div class="categories-title">{{ titleText }}</div>
      <div class="categories-list">
        <div class="categories-item" v-for="item in categoriesData" :key="item.id">
          <div
            class="title"
            @click="$router.push({ path: '/article/main/sections/' + item.id })"
          >
            {{ currCoinLangFun(item.section_code) }}
          </div>
          <div class="content-list">
            <div
              class="text article-text article-border"
              v-for="data in listData[item.section_code].list"
              :key="data.id"
              @click="
                $router.push({
                  path: `/article/main/content/${data.article_type}/${data.id}`,
                })
              "
            >
              {{ data.article_title }}
            </div>
            <div
              class="article-more"
              v-if="listData[item.section_code].total > listData[item.section_code].list"
              @click="$router.push({ path: '/article/main/sections/' + item.id })"
            >
              {{ currCoinLangFun("view_more", "all") }}
            </div>
            <div
              class="article-tip"
              v-if="listData[item.section_code].total == 0"
              style="font-size: 14px"
            >
              {{ currCoinLangFun("empty_article") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoriesData: [],
      listData: {},
    };
  },
  computed: {
    ...mapGetters(["language"]),
    titleText() {
      let data = {};
      this.$parent.list.forEach((item) => {
        if (item.id == this.$route.params.id) {
          data = item;
        }
      });
      let text = this.currCoinLangFun(data.section_code);
      return text ? text : data.section_name;
    },
  },
  created() {
    //获取文章栏目
    getDataApi("1530393983815823361", {
      pid: this.$route.params.id,
      column: "id",
      order: "asc",
    }).then((res) => {
      let data = res.data.data.records;
      data.forEach((item) => {
        this.listData[item.section_code] = {
          list: [],
          total: 0,
        };
        this.getSectionsDataFun(item.section_code, item.id);
      });
      this.categoriesData = data;
    });
  },
  methods: {
    currCoinLangFun(code, type = "article") {
      return this.coinLangFun(type, code);
    },
    getSectionsDataFun(code, id) {
      getDataApi("1530431184536666113", {
        article_lang: this.language,
        article_type: id,
        article_issue: "1",
        pageSize: "6",
      }).then((res) => {
        let data = res.data.data.records;
        let total = res.data.data.total;
        this.listData = {
          ...this.listData,
          [code]: { list: data, total: total },
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article-categories-box {
  margin: 0 auto;
  padding-bottom: 80px;
  .categories-title {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 30px;
  }
  .categories-list {
    width: 80%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    .categories-item {
      flex: 0 0 45%;
      margin-bottom: 60px;
      .title {
        font-size: 18px;
        font-weight: 600;
        padding: 20px 0;
        cursor: pointer;
      }
      .text {
        font-size: 16px;
        padding: 15px 0;
        cursor: pointer;
      }
    }
    .article-more {
      margin-top: 20px;
      cursor: pointer;
    }
  }
}
</style>
