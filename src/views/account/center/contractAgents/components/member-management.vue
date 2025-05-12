<template>
  <div class="member-management">
    <div class="top_box">
      <div class="left flex-box">
        <img class="img" src="https://miniopic.baiyiex.com/baiyiex/public/common/cny.png" alt="" />
        <span class="proportion">{{ currCoinLangFun("jyyjbl_text") }}：</span>
        <span class="value">{{ teamManagement.commission_rate * 100 }}%</span>
      </div>
      <div class="right">
        <div class="total">
          {{ currCoinLangFun("tdjyzl_text") }}：{{
                    numberFilterFun(toNonExponential(teamManagement.transaction_amount))
                    }}
          USDT
        </div>
        <!-- <div class="btn">充值地址查询</div> -->
        <el-button style="margin-top: 10px" type="primary fit-tc-button" @click="onShowApplyDialog">
          {{ currCoinLangFun("申请代理") }}
        </el-button>
      </div>
    </div>
    <div class="title">{{ currCoinLangFun("团队管理", "user") }}</div>
    <div class="headTable">
      <table>
        <tbody>
          <tr>
            <td>{{ currCoinLangFun("邀请类型") }}</td>
            <td>{{ currCoinLangFun("直接邀请") }}</td>
            <td>{{ currCoinLangFun("间接邀请") }}</td>
          </tr>
          <tr>
            <td>{{ currCoinLangFun("人数") }}</td>
            <td>{{ teamManagement.direct_count }}</td>
            <td>{{ teamManagement.indirect_count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="title">{{ currCoinLangFun("团队数据") }}</div>
    <div class="condition_box">
      <div style="width: 180px; margin-right: 16px">
        <el-input v-model="uid" placeholder="UID"></el-input>
      </div>
      <!-- 日期选择 -->
      <el-date-picker v-model="dateValue" type="daterange" align="right" unlink-panels range-separator="-"
        start-placeholder end-placeholder :clearable="false" :picker-options="pickerOptions"
        popper-class="fit-background-picker"></el-date-picker>

      <div class="btn" @click="getChildFun(true)">
        {{ currCoinLangFun("info_query_text") }}
      </div>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%" v-loading="requestStatus">
        <template v-for="(item, index) in tableDataHead">
          <el-table-column :key="index" :show-overflow-tooltip="true" v-bind="item" v-if="item.prop == 'cz'">
            <template slot-scope="scope">
              <span v-show="teamManagement.is_agent" style="color: #409eff; cursor: pointer" @click="setProxy(scope.row)">
                {{
                                scope.row.is_agent === "1"
                                ? currCoinLangFun("setup", "all")
                                : currCoinLangFun("申请代理")
                                }}
                <!--                {{ currCoinLangFun("setup", "all") }}-->
              </span>
              <!--              <span-->
              <!--                v-show="!isAgent(scope.row)"-->
              <!--                style="color: #409eff; cursor: pointer"-->
              <!--                :style="{color:scope.row.is_agent==='2'?'#999':'#409eff'}"-->
              <!--                @click="sqdlFun(scope.row)"-->
              <!--              >-->
              <!--                {{ currCoinLangFun("申请代理") }}</span>-->
            </template>
          </el-table-column>
          <el-table-column :key="index" v-else :show-overflow-tooltip="true" v-bind="item"></el-table-column>
        </template>
      </el-table>
      <el-pagination :page-size="size" :pager-count="7" layout="prev, pager, next" :total="total"
        :current-page.sync="current" @current-change="getChildFun()"></el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="currCoinLangFun('设置下级返佣比例')" :visible.sync="dialogVisible" width="500px"
      :before-close="handleClose">
      <div class="popup_box">
        <div style="flex: 1; margin-right: 16px; position: relative">
          <avue-input-number style="width: 100%" v-model="pupipInput" :placeholder="currCoinLangFun('小于自己的返佣比')"
            :minRows="0" precision="2" :step="0.1">
          </avue-input-number>
          <!--          :maxRows="Number(teamManagement.commission_rate - 0.01)"-->
          <!--          <div v-show="!com_disabled" style="color:red;font-size: 12px;position: absolute;left: 0;bottom: -20px">{{ currCoinLangFun('小于自己的返佣比') }}</div>-->
        </div>
        <el-button class="btn" type="primary" :loading="btnLoading" @click="isAgent() ? submitProxy() : sqdlFun()">{{
                  currCoinLangFun("confirm", "all") }}
        </el-button>
      </div>
    </el-dialog>

    <!--申请代理弹框 -->
    <el-dialog :title="currCoinLangFun('申请代理')" :visible.sync="showApplyDialog" width="500px"
      :before-close="() => (showApplyDialog = false)">
      <div class="apply-popup">
        <div class="apply-popup__num">
          <div class="apply-popup__num__item">
            <div class="apply-popup__num__item__val">
              {{ applyInfo.teamCount || 0 }}
            </div>
            <div class="apply-popup__num__item__title">当前分享人数</div>
          </div>
          <div class="apply-popup__num__item">
            <div class="apply-popup__num__item__val">
              {{ applyInfo.rechargeAmount || 0 }}
            </div>
            <div class="apply-popup__num__item__title">交易量</div>
          </div>
        </div>
        <div class="apply-popup__title">确定要申请代理？</div>
        <div style="text-align: right" class="apply-popup__foot">
          <el-button class="btn" type="primary" :loading="applyLoading" @click="onApplySubmit">{{
                      currCoinLangFun("confirm", "all") }}
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  contractProxyInfo,
  contractProxyGetChild,
  contractProxyProxy,
  applyAgent,
  applyAgentInfo,
} from "@/api/contractAgents.js";
import { dateFormat } from "@/util/date.js";

import { numberFilterFun, toNonExponential } from "@/util/util";

export default {
  data() {
    return {
      total: 1,
      current: 1,
      size: 10,
      requestStatus: false,
      dialogVisible: false,
      btnLoading: false,
      toNonExponential,
      numberFilterFun,
      teamManagement: {
        direct_count: 0,
        indirect_count: 0,
        commission_rate: 0,
        transaction_amount: 0,
        is_agent: false,
      },
      uid: "",
      pupipInput: "",
      dateValue: [],
      pickerOptions: {
        shortcuts: [
          {
            text: this.currCoinLangFun("within_a_week", "order"), //一周内
            onClick(picker) {
              let start = new Date(
                new Date(new Date().toLocaleDateString()).getTime() -
                  7 * 24 * 3600 * 1000
              );
              picker.$emit("pick", [start, new Date()]);
            },
          },
          {
            text: this.currCoinLangFun("last_month", "order"), //最近一个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 1);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_three_months", "order"), //最近三个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.currCoinLangFun("last_six_months", "order"), //最近六个月
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      tableDataHead: [
        {
          label: "UID",
          prop: "UID",
          align: "center",
        },
        {
          label: this.currCoinLangFun("register_email", "home_index"),
          prop: "mailbox",
          align: "center",
        },
        {
          label: this.currCoinLangFun("register_phone", "home_index"),
          prop: "phone",
          align: "center",
        },
        {
          label: this.currCoinLangFun("等级"),
          prop: "level",
          align: "center",
        },
        {
          label: this.currCoinLangFun("合约分佣比例"),
          prop: "hyfybl",
          align: "center",
        },
        {
          label: this.currCoinLangFun("上级UID"),
          prop: "sjUID",
          align: "center",
        },
        {
          label: this.currCoinLangFun("tdjyzl_text"),
          prop: "tdjyzl",
          align: "center",
        },
        {
          label: this.currCoinLangFun("直接邀请"),
          prop: "direct_count",
          align: "center",
        },
        {
          label: this.currCoinLangFun("间接邀请"),
          prop: "indirect_count",
          align: "center",
        },
        {
          label: this.currCoinLangFun("返佣金额"),
          prop: "fyje",
          align: "center",
        },
        {
          label: this.currCoinLangFun("merinfo_zcsj"),
          prop: "zcsj",
          align: "center",
        },
        {
          label: this.currCoinLangFun("orders_table_state", "full"),
          prop: "status",
          align: "center",
        },
        {
          label: this.currCoinLangFun("reason"),
          prop: "reason",
          align: "center",
        },
        {
          label: this.currCoinLangFun("operation", "all"),
          prop: "cz",
          align: "center",
          width: 120,
        },
      ],
      tableData: [],
      currentProxy: {},
      showApplyDialog: false,
      applyLoading: false,
      applyInfo: {
        rechargeAmount: 0,
        teamCount: 0,
      },
    };
  },
  computed: {
    com_disabled() {
      if (
        Number(this.pupipInput) > 0 &&
        Number(this.pupipInput) < Number(this.teamManagement.commission_rate)
      ) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    contractProxyInfo().then((res) => {
      this.teamManagement = {
        ...this.teamManagement,
        ...res.data.data,
      };
    });
    this.getChildFun();
  },
  methods: {
    onApplySubmit() {
      this.applyLoading = true;
      applyAgent()
        .then(() => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("申请代理成功"),
          });
          this.applyLoading = false;
          this.showApplyDialog = false;
        })
        .catch(() => {
          this.applyLoading = false;
        });
    },
    onShowApplyDialog() {
      applyAgentInfo().then((res) => {
        this.applyInfo = res.data.data;
        this.showApplyDialog = true;
      });
    },
    currCoinLangFun(code, type = "center") {
      return this.coinLangFun(type, code);
    },
    isAgent() {
      return this.currentProxy.is_agent === "1";
    },
    setProxy(item) {
      this.dialogVisible = true;
      this.currentProxy = item;
    },
    sqdlFun() {
      this.$confirm(
        this.currCoinLangFun("是否确认申请该用户成为代理"),
        this.currCoinLangFun("tips", "all"),
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"),
          cancelButtonText: this.currCoinLangFun("cancel", "all"),
          type: "warning",
        }
      )
        .then(() => {
          this.requestStatus = true;
          contractProxyProxy({
            memberId: this.currentProxy.id,
            commissionRate: this.pupipInput,
          }).then(() => {
            this.$message({
              type: "success",
              message: this.currCoinLangFun("申请代理成功"),
            });
            this.requestStatus = false;
            this.dialogVisible = false;
            this.btnLoading = false;
            this.getChildFun();
          });
        })
        .catch(() => {
          this.btnLoading = false;
        });
    },
    submitProxy() {
      // if (!this.com_disabled) {
      //   return false
      // }

      this.btnLoading = true;
      contractProxyProxy({
        memberId: this.currentProxy.id,
        commissionRate: this.pupipInput,
      })
        .then((res) => {
          this.btnLoading = false;
          this.dialogVisible = false;
          this.getChildFun();
        })
        .catch((err) => {
          this.btnLoading = false;
        });
    },
    handleClose() {
      this.dialogVisible = false;
    },
    getChildFun(isReset = false) {
      if (this.requestStatus) {
        return;
      }
      this.requestStatus = true;
      this.tableData = [];
      if (isReset) {
        this.current = 1;
      }
      contractProxyGetChild({
        UID: this.uid || "",
        current: this.current,
        size: this.size,
        startDate: this.dateValue[0]
          ? dateFormat(new Date(this.dateValue[0]), "yyyy-MM-dd")
          : "",
        endDate: this.dateValue[1]
          ? dateFormat(new Date(this.dateValue[1]), "yyyy-MM-dd")
          : "",
      })
        .then((res) => {
          this.requestStatus = false;
          this.total = res.data.data.total;
          this.tableData = res.data.data.records.map((item) => {
            return {
              ...item,
              UID: item.uid,
              mailbox: item.email,
              phone: item.phone,
              level: item.level,
              hyfybl: (item.commission_rate || 0) * 100 + "%",
              sjUID: item.puid,
              tdjyzl: numberFilterFun(item.transaction_amount) + "USDT",
              direct_count: item.direct_count,
              indirect_count: item.indirect_count,
              fyje: numberFilterFun(item.commission) + "USDT",
              zcsj: item.register_time,
              status: item.status,
              reason: item.reason,
              cz: "",
            };
          });
        })
        .catch(() => {
          this.requestStatus = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.member-management {
  ::v-deep.el-dialog__body {
    color: inherit;
  }

  .apply-popup {
    &__num {
      display: flex;

      &__item {
        flex: 1;
        text-align: center;

        &__val {
          font-size: 24px;
          font-weight: bold;
        }

        &__title {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }

    &__title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin: 50px 0;
    }

    .btn {
      text-align: right;
    }
  }

  .top_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 30px 0;

    .left {
      font-size: 22px;

      .img {
        width: 60px;
        height: 60px;
      }

      .proportion {
        margin-left: 20px;
      }

      .value {
        color: #4ea89e;
      }
    }

    .right {
      font-size: 14px;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: flex-end;

      .total {}

      .btn {
        margin-left: 10px;
        padding: 0 10px;
        cursor: pointer;
        border-radius: 4px;
        line-height: 30px;
      }
    }
  }

  .title {
    font-size: 22px;
    padding-bottom: 20px;
  }

  .headTable {
    margin-bottom: 20px;

    tbody {
      tr>td:nth-child(1) {
        background: #f5f5f4;
      }

      td {
        width: 240px;
        text-align: center;
        padding: 10px;
        font-size: 12px;
      }
    }
  }

  .condition_box {
    padding: 16px 12px;
    display: flex;

    .btn {
      font-size: 14px;
      margin-left: 16px;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 4px;
      background: #4fa99e;
      color: #fff;
      line-height: 32px;
    }

    ::v-deep .el-input {
      .el-input__inner {
        height: 32px;
        line-height: 32px;
      }
    }
  }

  .popup_box {
    display: flex;

    .btn {
      font-size: 14px;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 4px;
      background: #4fa99e;
      color: #fff;
    }

    ::v-deep .el-input__inner {
      text-align: center;
    }
  }

  ::v-deep .el-pagination {
    display: flex;
    justify-content: center;
    padding-top: 24px !important;
    padding-bottom: 24px !important;

    button {
      background-color: transparent;
    }

    ul li {
      background-color: transparent;
    }
  }
}

.theme-night {
  .condition_box {
    border-bottom: 1px solid #262d38;
  }

  .el-date-editor--daterange {
    width: 210px;
    height: 32px;

    ::v-deep .el-icon-date {
      line-height: 25px;
    }

    ::v-deep .el-range-input {
      background-color: #151d29;
    }

    ::v-deep .el-range-input {
      color: #fff;
    }

    ::v-deep .el-range-separator {
      color: #fff;
    }

    ::v-deep .el-range__close-icon {
      display: none;
    }
  }
}

.theme-daytime {
  .condition_box {
    border-bottom: 1px solid #ddd;
  }

  .el-date-editor--daterange {
    width: 210px;
    height: 32px;

    ::v-deep .el-icon-date {
      line-height: 25px;
    }

    ::v-deep .el-range-input {
      background-color: #fff;
    }

    ::v-deep .el-range__close-icon {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.theme-night {
  .member-management {
    .top_box {
      .left {
        .img {}

        .proportion {
          color: #fff;
        }
      }

      .right {
        .total {
          color: #9bb4cc;
        }

        .btn {
          background: #54aba1;
          border: 1px solid #54aba1;
          color: #fff;
        }
      }
    }

    .title {
      color: #fff;
    }

    .headTable {
      tbody {
        border-top: 1px solid #262d38;
        border-left: 1px solid #262d38;

        tr>td:nth-child(1) {
          background: #151d29;
        }

        td {
          border-bottom: 1px solid #262d38;
          border-right: 1px solid #262d38;
          color: #9bb4cc;
        }
      }
    }

    .condition_box {
      background: #151d29;
    }
  }

  .el-pagination {
    button {
      color: #dde3e6 !important;

      &[disabled] {
        color: #688199 !important;
      }
    }

    ul.el-pager li {
      &.number {
        color: #dde3e6 !important;
      }

      &.number.active {
        color: #0020fd !important;
      }
    }
  }

  .fit-background-picker {
    background-color: #151d29 !important;
    border-color: #262d38;

    .el-picker-panel__body {
      .el-picker-panel__icon-btn {
        color: #fff;
      }

      .el-date-range-picker__header {
        div {
          color: #fff;
        }
      }

      .el-picker-panel__content {
        table {
          tbody {
            tr {
              th {
                color: #fff;
              }

              .available {
                color: #fff;
              }

              .prev-month {
                color: #688199;
              }

              .in-range {
                div {
                  background-color: rgba(123, 123, 147, 0.24);
                }
              }

              .start-date span,
              .end-date span {
                color: #000;
              }
            }
          }
        }
      }
    }

    .el-picker-panel__sidebar {
      background-color: #151d29 !important;

      .el-picker-panel__shortcut {
        color: #fff;
      }
    }
  }

  .el-table__header {
    thead {
      tr {
        th {
          div {
            color: #9bb4cc;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.theme-daytime {
  .member-management {
    .top_box {
      .left {
        .img {}

        .proportion {
          color: #717e94;
        }
      }

      .right {
        .total {}

        .btn {
          background: #eaf6f5;
          border: 1px solid #54aba1;
          color: #54aba1;
        }
      }
    }

    .title {
      color: #717e94;
    }

    .headTable {
      tbody {
        border-top: 1px solid #eaecef;
        border-left: 1px solid #eaecef;

        td {
          border-bottom: 1px solid #eaecef;
          border-right: 1px solid #eaecef;
          color: #7f8b9e;
        }
      }
    }
  }

  .fit-background-picker {
    .el-picker-panel__body {
      tr {
        .in-range {
          div {
            background-color: #dfdfe5;
          }
        }
      }
    }
  }

  .el-table__header {
    thead {
      tr {
        th {
          div {
            color: #4e6073;
            font-size: 12px;
          }
        }
      }
    }
  }

  .el-pagination {
    button {
      color: #10171f !important;

      &[disabled] {
        color: #7e92a6 !important;
      }
    }

    ul li {
      &.number {
        color: #10171f !important;
      }

      &.number.active {
        color: #2271e6 !important;
      }
    }
  }
}
</style>
