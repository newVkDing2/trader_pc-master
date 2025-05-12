<template>
  <div class="article-index-hero">
    <div class="hero-top-search" :style="{
            backgroundImage: `url(${require('@/assets/image/article_index_banner.jpeg')})`,
          }">
      <div class="hero-inner">
        <el-input :placeholder="currCoinLangFun('search','all')" prefix-icon="el-icon-search"
          v-model="searchValue"></el-input>
      </div>
    </div>
    <div class="hero-container">
      <div class="type-blocks-list">
        <ul class="blocks-list">
          <li class="blocks-item article-background" v-for="item in typeData" :key="item.id"
            @click="$router.push({ path: '/article/main/categories/' + item.id })">
            {{ currCoinLangFun(item.section_code) }}
          </li>
        </ul>
      </div>
    </div>
    <div class="hero-recommend hero-container">
      <div class="title">{{currCoinLangFun('main_recommended')}}</div>
      <ul>
        <li class="article-text article-border" v-for="item in recomData" :key="item.id" @click="
                    $router.push({
                      path: `/article/main/content/${item.article_type}/${item.id}`,
                    })
                  ">
          {{ item.article_title }}
        </li>
      </ul>
    </div>
    <div class="hero-active hero-container">
      <div class="title">{{currCoinLangFun('main_new_activity')}}</div>
      <ul>
        <li class="article-border" v-for="item in newData" :key="item.id" @click="
                    $router.push({
                      path: `/article/main/content/${item.article_type}/${item.id}`,
                    })
                  ">
          <div class="content article-text">{{ item.article_title }}</div>
          <div class="time article-tip">{{currCoinLangFun('main_create')}} {{ item.article_time }}</div>
        </li>
      </ul>
      <div class="more article-more" v-if="newPage.total > newData.length" @click="loadingNewDataFun">
        {{currCoinLangFun('view_more','all')}}
      </div>
      <div class="article-tip" v-else>{{currCoinLangFun('main_no_data')}}</div>
    </div>
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
      typeData: [],
      newData: [],
      recomData: [],
      newPage: {
        pageSize: "10",
        pageNo: 1,
        total: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["language"]),
  },
  watch:{
    language(){
      this.init()
    }
  },
  created() {
   this.init()
  },
  methods: {
    init(){
       //获取文章栏目
    getDataApi("1530393983815823361", {
      pid: "0",
      column: "id",
      order: "asc",
    }).then((res) => {
      let data = res.data.data.records;
      this.typeData = data;
    });
    //获取推荐文章
    getDataApi("1530431184536666113", {
      article_lang: this.language,
      article_recommend: "1",
      article_issue: "1",
      pageSize: 10,
    }).then((res) => {
      let data = res.data.data.records;
      this.recomData = data;
    });
    this.getNewArticleDataFun();
    },
    currCoinLangFun(code, type = "article") {
      return this.coinLangFun(type, code);
    },
    loadingNewDataFun() {
      this.pageNo = this.pageNo + 1;
      this.getNewArticleDataFun();
    },
    getNewArticleDataFun() {
      getDataApi("1530431184536666113", {
        article_lang: this.language,
        article_issue: "1",
        pageSize: this.newPage.pageSize,
        pageNo: this.newPage.pageNo,
      }).then((res) => {
        let data = res.data.data.records;
        this.newPage.total = res.data.data.total;
        this.newData = data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article-index-hero {
  padding-bottom: 80px;

  .hero-top-search {
    margin-bottom: 60px;
    background-position: center;
    background-size: cover;
    height: 300px;
    padding: 0 20px;
    text-align: center;
    width: 100%;

    .hero-inner {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      max-width: 610px;
      margin: 0 auto;

      ::v-deepinput {
        border-radius: 30px;
      }
    }
  }

  .hero-container {
    width: 90%;
    max-width: 1160px;
    margin: 0 auto;

    .type-blocks-list {
      margin-bottom: 20px;

      .blocks-list {
        margin: 0 -15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
      }

      .blocks-item {
        font-size: 16px;
        font-weight: 400;
        margin: 0 15px 30px;
        border-radius: 4px;
        box-sizing: border-box;
        display: flex;
        flex: 0 0 340px;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
        text-align: center;
        padding: 20px 30px;
        cursor: pointer;
      }
    }
  }

  .hero-recommend {
    margin-bottom: 60px;

    .title {
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 18px;
    }

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      li {
        flex: 1 0 auto;
        display: block;
        padding: 15px 0;
        text-align: left;
        cursor: pointer;
      }
    }
  }

  .hero-active {
    .title {
      margin-bottom: 10px;
      text-align: center;
      font-size: 22px;
    }

    li {
      overflow: auto;
      padding: 30px 0 10px;
      display: flex;
      cursor: pointer;
    }

    .content {
      flex: 1;
      font-size: 16px;
      font-weight: 300;
      text-align: left;
    }

    .time {
      font-size: 13px;
      font-weight: 300;
    }

    .more {
      margin-top: 14px;
      text-align: left;
      cursor: pointer;
    }

    .article-tip {
      font-size: 12px;
      margin-top: 14px;
    }
  }
}
</style>
