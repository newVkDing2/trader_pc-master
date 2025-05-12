<template>
  <div class="article-sections-box">
    <div class="sections-title">{{currCoinLangFun(currData.section_code)}}</div>
    <div class="sections-list">
      <div class="text article-text article-border" v-for="item in listData" :key="item.id" @click="$router.push({
                  path: `/article/main/content/${item.article_type}/${item.id}`,
                })">{{item.article_title}}</div>
    </div>
    <div class="article-page">
      <el-pagination :page-size="pageData.size" :current-page="pageData.page" @current-change="currentChangeFun" layout="prev, pager, next" :total="pageData.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import { getDataApi, getDetailDataApi } from '@/api/system'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currData:{},
      listData: [],
      pageData: {
        size: 10,
        curr: 1,
        total:0,
      },
    }
  },
  computed: {
    ...mapGetters(['language']),
  },
  mounted(){
    getDetailDataApi('1530393983815823361',this.$route.params.id).then(res=>{
      this.currData=res.data.data
    })
 this.getSectionsDataFun()
  },
  methods: {
    currCoinLangFun(code, type = 'article') {
      return this.coinLangFun(type, code)
    },
    currentChangeFun(page){
      this.pageData.curr=page
      this.getSectionsDataFun()
    },
    getSectionsDataFun() {
      getDataApi("1530431184536666113", {
        article_lang: this.language,
        article_type: this.$route.params.id,
        article_issue: "1",
        pageSize: this.pageData.size,
        pageNo:this.pageData.curr,
      }).then((res) => {
        let data=res.data.data
        this.listData=data.records
        this.pageData.total=data.total
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.article-sections-box {
  padding-bottom: 80px;
  .sections-title {
    padding: 40px 0 30px;
    text-align: center;
    font-size: 32px;
  }
  .sections-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
      font-size: 16px;
      padding: 15px 0;
      cursor: pointer;
    }
  }
  .article-page {
    text-align: center;
    padding: 30px;
  }
}
</style>
