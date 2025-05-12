<template>
  <div class="common_head_main flex-center">
    <div class="content_box flex-start">
      <div class="avatar_box flex-start">
        <img :src="require('@/assets/image/invest.png')" alt="" />
      </div>
      <!-- {{ userInfo.detail }}-userInfo -->
      <div class="info_box flex-between">
        <div class="flex-colum-evenly">
          <p>UID</p>
          <p>{{ userInfo.detail.userId }}</p>
        </div>
        <div class="flex-colum-evenly">
          <p>{{ $t("user.creditScore") }}</p>
          <p>{{ userInfo.detail.credits }}</p>
        </div>
        <div class="flex-colum-evenly">
          <p>{{ $t("user.userCer") }}</p>
          <p>
            {{
              userInfo.detail.auditStatusPrimary == 1
                ? $t("user.vipUser")
                : $t("user.normalUser")
            }}
          </p>
        </div>
        <div class="flex-colum-evenly">
          <p>{{ $t("user.walletAddress") }}</p>
          <p>{{ userInfo.user.address || "--" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.common_head_main {
  width: 100%;
  height: 124px;
  background: #ddd;

  .content_box {
    width: 1200px;
    //  margin: auto;
    height: 70px;

    // background: red;
    .avatar_box {
      width: 100px;
      height: 100%;

      //   flex: 1;
      img {
        width: 70px;
      }
    }

    .info_box {
      //   flex: 3;
      height: 100%;
      gap: 40px;

      > div {
        height: 100%;
        //background: blue;
        font-size: 12px;

        p:nth-child(1) {
          color: #333;
          /* 设置颜色 */
          margin-bottom: 10px;
          /* 设置下边距 */
          font-weight: bold;
          /* 设置粗体 */
          /* 其他样式 */
        }

        // p:nth-child(2) {
        // }
      }
    }
  }
}
</style>
