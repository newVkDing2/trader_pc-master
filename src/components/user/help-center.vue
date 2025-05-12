<template>
  <div class="help_main">
    <div class="help_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("user.helper") }}</p>
        </div>
      </div>
    </div>
    <div class="content_box flex-between">
      <div class="artic_left">
        <div class="title">
          <p>{{ $t(title) }}</p>
          <p class="c3" style="margin-top: 10px">
            {{ contentInfo.createTime }}
          </p>
        </div>
        <div class="l_content">
          <div v-html="contentInfo.content"></div>
          <el-empty
            v-if="!contentInfo.content"
            :description="$t('utils.noData')"
          >
            <template #image>
              <img
                :src="require('@/assets/image/noData.png')"
                alt="Empty Image"
              />
            </template>
          </el-empty>
        </div>
      </div>
      <div class="nav_right">
        <section v-for="(section, index) in navData" :key="index">
          <div class="title flex-start">{{ $t(section.title) }}</div>
          <div class="section_item flex-colum-evenly">
            <p
              v-for="item in section.items"
              :key="item.id"
              :class="{ active: type == item.id }"
              @click="getContent(item)"
            >
              {{ $t(item.text) }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentInfo: Object,
  },
  data() {
    return {
      navData: [
        {
          title: "user.hotIssue",
          items: [
            { id: 3, text: "user.issue1" },
            { id: 2, text: "user.issue2" },
            { id: 1, text: "user.issue3" },
          ],
        },
        {
          title: "user.newMustRead",
          items: [
            { id: 5, text: "user.read1" },
            { id: 4, text: "user.read2" },
          ],
        },
      ],
      type: 3,
      title: "user.issue1",
    };
  },
  methods: {
    getContent(item) {
      this.type = item.id;
      this.title = item.text;
      this.$emit("getContentInfo", item.id);
    },
  },
};
</script>

<style scoped lang="scss">
.help_main {
  width: 100%;
  // height: 154px;
  //   margin-top: 65px;
  .help_header_box {
    width: 100%;
    height: 125px;
    background: #dddddd;

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
  .content_box {
    width: 1200px;
    margin: 50px auto;
    gap: 40px;
    .artic_left {
      flex: 3;
      align-self: flex-start;
      //background: red;
      .title {
        height: 50px;
        font-size: 24px;
      }

      .l_content {
        margin-top: 30px;
        font-size: 12px;
      }
    }
    .nav_right {
      flex: 2;
      align-self: flex-start;
      section {
        .title {
          height: 50px;
          font-size: 24px;
        }
        .section_item {
          height: 190px;
          padding: 0 10px;
          p {
            font-size: 14px;
            height: 45px;
            padding: 8px;
            box-sizing: border-box;
            // margin-bottom: 40px;
          }
          .active {
            background: black;
            color: #fff;
          }
          &:nth-child(2) {
            height: 150px;
          }
        }
      }
    }
  }
}
</style>
