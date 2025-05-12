<template>
  <div class="article-main">
    <div class="article-main-nav" v-if="$route.path.indexOf('article/main/index') == -1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/article/main/index' }">{{
                  coinLangFun("all", "all")
                  }}</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in currNav" :key="item.id" :to="{ path: item.path }">{{ coinLangFun("article",
                  item.section_code) }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="artivle-main-view">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { setTreeDataUtil } from "@/util/util";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapGetters(["language"]),
    currNav() {
      let currData = [];

      let id = this.$route.params.id;
      if (this.$route.path.indexOf("article/main/content") != -1) {
        id = this.$route.params.type;
      }
      currData = this.findFun(id);
      console.log(currData);
      currData = currData.map((item) => {
        if (item.pid == "0") {
          item.path = `/article/main/categories/${item.id}`;
        } else {
          item.path = `/article/main/sections/${item.id}`;
        }
        return item;
      });
      return currData;
    },
  },
  watch: {
    language() {
      if (this.$route.path.indexOf("article/main/index") == -1) {
        this.$router.replace({ path: "/article/main/index" });
      }
    },
  },
  created() {
    getDataApi("1530393983815823361", {
      pageSize: -521,
    }).then((res) => {
      let data = res.data.data.records;
      this.list = setTreeDataUtil(data);
    });
  },
  methods: {
    findFun(id) {
      let data = [];
      this.list.forEach((item) => {
        if (item.id == id) {
          data.push(item);
          if (item.pid != "0") {
            data = [...this.findFun(item.pid), ...data];
          }
        }
      });
      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
.article-main-nav {
  width: 80%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  align-items: center;

  ::v-deep.el-breadcrumb {
    .el-breadcrumb__item:nth-last-child(1) {
      .el-breadcrumb__inner {
        color: #0020FD !important;
        cursor: pointer !important;
      }
    }
  }
}
</style>
