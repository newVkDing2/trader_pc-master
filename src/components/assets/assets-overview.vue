<template>
  <div class="assets_overview_box">
    <div
      class="content_box flex-colum-evenly"
      v-show="overViewTabIndex == 0 || overViewTabIndex == 9"
    >
      <div class="text">{{ title }}</div>
      <div class="num num_Bold"><strong >{{ myAmount }}</strong>   <strong style="color:#919191" >USDT</strong>  </div>
    </div>

    <!-- 推广数据 -->
    <div class="content_box flex-between" v-show="overViewTabIndex == 1">
      <div class="content_box_item flex-around">
        <!-- {{ userInfo.user }} -->
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.promoteTotolNum") }}</p>
          <p v-if="teamInfo">
            {{ teamInfo.sumCount || 0 }}
          </p>
        </div>

        <div class="detail flex-colum-between">
          <p>{{ $t("assets.accumRevenue") }}</p>
          <p v-if="teamInfo">{{ teamInfo.sumAmount || "0.00" }}</p>
        </div>
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.inviteCode") }}</p>
          <p>
            {{ shareCode }}
            <img
              :src="require('@/assets/image/copy.png')"
              alt=""
              width="30px"
              class="copy_icon"
              @click="copy(shareCode)"
            />
          </p>
        </div>
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.promoteLink") }}</p>
          <p>
            {{ truncateString(13, shareLink) }}
            <img
              :src="require('@/assets/image/copy.png')"
              alt=""
              width="30px"
              class="copy_icon"
              @click="copy(shareLink)"
            />
          </p>
        </div>
        <!-- <div v-for="item in 4">
          <div class="detail flex-colum-between">
            <p>111</p>
            <p>555555</p>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 立即邀请按钮 -->
    <div class="invite_box flex-center" v-show="overViewTabIndex == 1">
      <button class="commonBtn_bg" @click="openInviteDialog = true">
        {{ $t("assets.inviteNow") }}
      </button>
    </div>

    <!-- 代理表格 -->
    <div class="agentInfo_box" v-show="overViewTabIndex == 1">
      <div class="tabs">
        <el-tabs v-model="tabsValue" @tab-click="tabsClick">
          <el-tab-pane
            :key="item.name"
            :label="item.label"
            v-for="item in tabsList"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="table">
        <el-table :data="agentData" style="width: 100%">
          <el-table-column
            prop="fromId"
            :label="$t('assets.user') + 'id'"
            align="left"
          >
          </el-table-column>
          <el-table-column
            prop="sumAmount"
            :label="$t('assets.rebateAmount')"
            align="center"
          >
          </el-table-column>
          <el-table-column :label="$t('assets.regisTime')" align="right">
            <template slot-scope="scope">
              <span>
                {{ formatTimestampWithTimezone(scope.row.params.createTime) }}
              </span>
            </template>
          </el-table-column>
          <template #empty>
            <div style="margin-top: 10px">
              <img
                :src="require('@/assets/image/noData.png')"
                alt="Empty Image"
                width="140"
              />
              <p>{{ $t("utils.noData") }}</p>
            </div>
          </template>
        </el-table>
      </div>
    </div>

    <!-- 推广规则 -->
    <div class="extension_rule" v-show="overViewTabIndex == 1">
      <div v-if="extensionRule" v-html="extensionRule"></div>
    </div>

    <!-- 我的投资数据 -->
    <div class="content_box flex-between" v-show="overViewTabIndex == 2">
      <div class="content_box_item flex-around">
        <!-- {{ userInfo.user }} -->
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.totolInvestValue") }}(USDT)</p>
          <p v-if="personIncome">
            {{ personIncome.sumAmount || 0 }}
          </p>
        </div>

        <div class="detail flex-colum-between">
          <p>{{ $t("assets.todayEarnReward") }}(USDT)</p>
          <p v-if="personIncome">{{ personIncome.commission || 0 }}</p>
        </div>
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.accumRevenue") }}(USDT)</p>
          <p v-if="personIncome">
            {{ personIncome.sumEarn || 0 }}
          </p>
        </div>
        <div class="detail flex-colum-between">
          <p>{{ $t("assets.positionQuant") }}</p>
          <p v-if="personIncome">
            {{ personIncome.position || 0 }}
          </p>
        </div>
      </div>
    </div>

    <div class="invest_table" v-show="overViewTabIndex == 2">
      <el-table :data="personalOrderList" style="width: 100%">
        <el-table-column prop="fromId" :label="$t('assets.name')" align="left">
        </el-table-column>
        <el-table-column
          prop="sumAmount"
          :label="$t('assets.dayProfitRate')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sumAmount"
          :label="$t('assets.investAmount')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sumAmount"
          :label="$t('assets.estimatedRevenue')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sumAmount"
          :label="$t('assets.paymentDate')"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sumAmount"
          :label="$t('assets.status')"
          align="center"
        >
        </el-table-column>

        <template #empty>
          <div style="margin-top: 10px">
            <img
              :src="require('@/assets/image/noData.png')"
              alt="Empty Image"
              width="140"
            />
            <p>{{ $t("utils.noData") }}</p>
          </div>
        </template>
      </el-table>
    </div>

    <!-- 邀请二维码弹框 -->
    <el-dialog
      title=" "
      width="25%"
      :visible.sync="openInviteDialog"
      center
      custom-class="inviteDialog"
    >
      <div class="imgBox flex-center">
        <!-- <img src="@/assets/image/qrcode.png" alt="" /> -->
        <qrcode :address="shareLink" :width="imgWidth"></qrcode>
      </div>
      <div class="btn_box flex-center">
        <button class="commonBtn_bg">{{ $t("assets.shareQrcode") }}</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import qrcode from "@/components/common/qrcode.vue";
export default {
  components: {
    qrcode,
  },
  props: {
    overViewTabIndex: {
      type: Number,
      default: 9,
    },
    extensionRule: {
      type: String,
      default: "",
    },
    agentData: {
      type: Array,
      default: [],
    },
    teamInfo: Object,
    personIncome: Object,
    personalOrderList: {
      type: Array,
      default: [],
    },
    myAmount: String,
    title: String,
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin", "language"]),
    shareLink() {
      // 确保 userInfo 和 userInfo.user 都存在
      if (
        this.userInfo &&
        this.userInfo.user &&
        this.userInfo.user.activeCode
      ) {
        return `${location.origin}/#/i&${this.userInfo.user.activeCode}`;
      } else {
        return `${location.origin}/#/i`; // 处理 userInfo 或 activeCode 不存在的情况
      }
    },

    shareCode() {
      // 确保 userInfo 和 userInfo.user 都存在
      if (
        this.userInfo &&
        this.userInfo.user &&
        this.userInfo.user.activeCode
      ) {
        return this.userInfo.user.activeCode;
      } else {
        return ""; // 处理 userInfo 或 activeCode 不存在的情况
      }
    },
    tabsList() {
      return [
        {
          label: this.$t("assets.total"),
          name: "0",
        },
        {
          label: this.$t("assets.oneGenerate"),
          name: "1",
        },
        {
          label: this.$t("assets.twoGenerate"),
          name: "2",
        },
        {
          label: this.$t("assets.threeGenerate"),
          name: "3",
        },
      ];
    },
  },
  watch: {
    language(newLang, oldLang) {
      if (newLang) {
        this.$emit("getRulesList", "PROMOTION_CENTER_EXPLAIN");
      }
    },
  },
  data() {
    return {
      openInviteDialog: false,
      imgWidth: "240px",
      tabsValue: "0",
      // tabsList: [
      //   {
      //     label: this.$t('assets.total'),
      //     name: "0",
      //   },
      //   {
      //     label: this.$t('assets.oneGenerate'),
      //     name: "1",
      //   },
      //   {
      //     label: this.$t('assets.twoGenerate'),
      //     name: "2",
      //   },
      //   {
      //     label: this.$t('assets.threeGenerate'),
      //     name: "3",
      //   },
      // ],
    };
  },
  methods: {
    tabsClick(tab) {
      this.$emit("getAgentData", tab.name);
    },
    copy(text) {
      this.$copyText(text)
        .then(() => {
          this.$message.success(this.$t("utils.copySuccess"));
        })
        .catch(() => {
          this.$message.warning(this.$t("utils.copyFail"));
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
::v-deep .el-dialog__wrapper .el-dialog .el-dialog__header {
  border-bottom: 0;
}
.content_box {
  width: 1200px;
  height: 180px;
  font-size: 20px;
  margin: auto;
  border-bottom: 1px solid #f1f1f1;
  .num {
    font-size: 34px;
  }
  .content_box_item {
    width: 100%;
    .detail {
      height: 110px;
      p:nth-child(1) {
        font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 36px;
        font-weight: bold;
      }
    }
  }
}

.invite_box {
  width: 1200px;
  height: 160px;
  margin: auto;
  button {
    width: 200px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    border: none;
    &:hover {
      background: #4d4d4d;
    }
  }
}
.agentInfo_box {
  width: 1200px;
  margin: auto;
  margin-top: 20px;
}
.extension_rule {
  width: 1200px;
  // margin: auto;
  margin: 40px auto;
  font-size: 14px;
  ::v-deep p {
    margin-bottom: 10px !important;
    // background: red;
  }
}

.invest_table {
  width: 1200px;
  margin: auto;
  margin-top: 50px;
}
.inviteDialog {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  // align-items: center;
  // text-align: center;
  // width: 400px;
  // height: 540px;
  border-radius: 20px;
  .imgBox {
    width: 100%;
    height: 240px;
    margin-top: 40px;
    img {
      max-width: 60%;
      // height: 240px;
    }
  }
  .btn_box {
    width: 100%;
    height: 50px;
    margin: 60px auto;

    button {
      width: 270px;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      color: #fff;
      border: none;
    }
  }
}
</style>
