<template>
  <div class="min-h otc-order-wrapper" :class="{ 'merchant-order-wrapper': isMerchant }">
    <div class="fit-background otc-order-box">
      <div class="back" v-if="!isMerchant">
        <span @click="$router.go(-1)">
          <i class="el-icon-back"></i>{{ currCoinLangFun("text_back", "all") }}
        </span>
      </div>
      <div class="article-border searchBox">
        <div class="searchItem">
          <span class="fit-tc-tip label">{{
                      currCoinLangFun("orders_table_borrow_code", "full")
                      }}</span>
          <el-input v-model="tableSearchData.orderCode" @keydown.enter.native="getCommonOrderFun"></el-input>
        </div>
        <div class="searchItem">
          <span class="fit-tc-tip label">{{
                      currCoinLangFun("orders_table_state", "full")
                      }}</span>
          <el-select v-model="tableSearchData.status" :placeholder="currCoinLangFun('text_all', 'all')" class="status"
            popper-class="fit-background-select">
            <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
      <div class="assets-table">
        <el-table v-loading="requestStatus" :data="orderData" style="width: 100%" :cell-class-name="setTypeColor">
          <el-table-column prop="order_code" :label="currCoinLangFun('order_code')" width="160"></el-table-column>
          <el-table-column prop="order_time" :label="currCoinLangFun('order_create_time')" width="150"></el-table-column>
          <el-table-column prop="type" :label="currCoinLangFun('text_type', 'all')" width="70" align="center">
            <template slot-scope="scope">
              <span>{{ showType(scope.row.type) }}</span>
            </template>
          </el-table-column>
          <el-table-column v-if="!isMerchant" prop="pay_service" :label="currCoinLangFun('text_service_provider')"
            min-width="100" align="right" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="pay_type" :label="currCoinLangFun('order_payment_method')" min-width="100"
            align="center"></el-table-column>
          <el-table-column prop="coin_cou" :label="currCoinLangFun('order_coin_num')" min-width="108"
            :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>{{ Number(scope.row.coin_cou) || 0 }}
                {{ scope.row.coin_symbol }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="coin_symbol" label="币种" width="90"></el-table-column> -->
          <el-table-column prop="fiat_currency_amount" :label="currCoinLangFun('order_coin_amount')" min-width="108"
            align="right" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>{{ Number(scope.row.fiat_currency_amount) || 0 }}
                {{ scope.row.fiat_currency }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="fiat_currency" label="法币" width="90"></el-table-column> -->
          <el-table-column prop="order_status" :label="currCoinLangFun('orders_table_state', 'full')" width="85"
            align="right">
            <template slot-scope="scope">
              <div>
                <span>{{ showStatus(scope.row) }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column :label="currCoinLangFun('operation', 'all')" width="100" align="center">
            <template slot-scope="scope">
              <div>
                <el-button type="text" @click="getServicePaymentFun(scope.row.id)">{{
                                  currCoinLangFun("text_communication", "all") }}</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :page-size="pageSize" :pager-count="7" layout="prev, pager, next" :total="total"
          :current-page.sync="currPage" @current-change="pageChange"></el-pagination>
      </div>
    </div>

    <business-chat-box v-if="businessChatDialog" ref="businessChatBox" :businessChatDialog="businessChatDialog"
      :closeDialog="closeDialog.bind(this)" :userInfo="userInfo" :orderData="currOrderData" :isMerchant="isMerchant"
      :serviceType="serviceType || $route.query.serviceType"></business-chat-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getDicTableData } from "@/api/system.js";
import { getCommonOrder } from "@/api/otc.js";
import { getMerchantDealOrder } from "@/api/merchant";
import { getServicePayment } from "@/api/otc.js";
import businessChatBox from "@/components/chat/business-chat-box.vue";
import mqtt from "@/mixins/mqtt.js";
export default {
  components: { businessChatBox },
  mixins: [mqtt],
  props: {
    serviceType: String,
    isMerchant: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requestStatus: false, //请求状态
      tableSearchData: {
        status: "",
        serviceType: "",
        orderCode: "",
      },
      orderData: [],
      currOrderData: [],
      total: 1,
      pageSize: 10,
      currPage: 1,
      businessChatDialog: false,
      status: [], //状态
      chatMqtt: null,
      currOpenOrderId: "", //当前打开的订单id
    };
  },
  created() {
    if (this.$route.query.serviceType) {
      this.tableSearchData.serviceType = this.$route.query.serviceType;
    } else {
      this.tableSearchData.serviceType = this.serviceType;
    }

    this.tableSearchData = {
      ...this.tableSearchData,
      ...this.$route.params,
    };

    console.log(this.tableSearchData, "this.tableSearchData");

    this.status = [
      {
        label: this.currCoinLangFun("text_all", "all"), //全部
        value: "",
      },
    ];
    this.getCommonOrderFun();
    getDicTableData("otc_order_status").then((res) => {
      this.status = this.status.concat(res.data.data);
    });

    // this.initMqtt(`refresh_${this.userInfo.id}`, (data) => {
    //   console.log("更新订单数据", data);
    //   if (data.type == "otc") {
    //     this.getCommonOrderFun();
    //   }
    // });
  },
  computed: {
    ...mapGetters(["userInfo", "userVariation", "merchantVariation"]),
    copyTableSearchData() {
      return JSON.parse(JSON.stringify(this.tableSearchData));
    },
  },
  watch: {
    copyTableSearchData: {
      handler(newVal, oldVal) {
        let bool = true;

        //输入框的搜索由enter键触发
        for (let key in newVal) {
          if (key == "orderCode" && newVal[key] !== oldVal[key]) {
            bool = false;
          }
        }

        if (bool) {
          this.getCommonOrderFun();
        }
      },
      deep: true,
    },
    userVariation: {
      handler(data) {
        if (data.type == "otc" && data.order == this.currOpenOrderId) {
          //更新当前聊天弹窗状态
          this.upDataBusinessChatBoxFun(data);
        }
        if (data.type == "otc") {
          this.getCommonOrderFun();
        }
      },
      deep: true,
    },
    merchantVariation: {
      handler(data) {
        if (data.type == "otc" && data.order == this.currOpenOrderId) {
          //更新当前聊天弹窗状态
          this.upDataBusinessChatBoxFun(data);
        }
        if (data.type == "otc") {
          this.getCommonOrderFun();
        }
      },
      deep: true,
    },
  },
  methods: {
    currCoinLangFun(code, type = "order") {
      return this.coinLangFun(type, code);
    },
    //更新聊天窗口信息
    upDataBusinessChatBoxFun(data) {
      getServicePayment({ orderId: this.currOpenOrderId }).then((res) => {
        this.currOrderData = {
          id: this.currOpenOrderId,
          ...res.data.data,
        };
        setTimeout(() => {
          this.$refs.businessChatBox.countDownFun(data);
        }, 0);
      });
    },
    setTypeColor(obj) {
      if (obj.row.type == 1) {
        if (obj.columnIndex == 2) {
          return "success-cell";
        }
      } else if (obj.row.type == 2) {
        if (obj.columnIndex == 2) {
          return "error-cell";
        }
      } else {
        return "";
      }
    },
    pageChange(page) {
      // 切换分页
      this.currPage = page;
      this.getCommonOrderFun();
    },
    showType(value) {
      if (value == 1) {
        return this.currCoinLangFun("entrust_buy", "full"); //买入
      } else if (value == 2) {
        return this.currCoinLangFun("entrust_sell", "full"); //卖出
      } else {
        return value;
      }
    },
    showStatus(obj) {
      let value = obj.order_status;
      let type = obj.type;
      if (value == 1 && type == 1) {
        return this.currCoinLangFun("order_wait_pay"); //待付款
      } else if (value == 1 && type == 2) {
        return this.currCoinLangFun("order_collecte_pay"); //待收款
      } else {
        let filterArr = this.status.filter((item) => item.value == value);
        if (filterArr[0]) {
          return filterArr[0].label;
        } else {
          return value;
        }
      }
    },
    getCommonOrderFun() {
      this.requestStatus = true;
      if (this.isMerchant) {
        getMerchantDealOrder({
          current: this.currPage,
          size: this.pageSize,
          ...this.tableSearchData,
        })
          .then((res) => {
            this.orderData = res.data.data.records;
            this.total = res.data.data.total;
            this.requestStatus = false;
          })
          .catch(() => {
            this.requestStatus = false;
          });
      } else {
        getCommonOrder({
          current: this.currPage,
          size: this.pageSize,
          ...this.tableSearchData,
        })
          .then((res) => {
            this.orderData = res.data.data.records;
            this.total = res.data.data.total;
            this.requestStatus = false;
          })
          .catch(() => {
            this.requestStatus = false;
          });
      }
    },
    getServicePaymentFun(orderId) {
      this.requestStatus = true;
      this.currOpenOrderId = orderId;
      getServicePayment({ orderId })
        .then((res) => {
          this.currOrderData = {
            id: orderId,
            ...res.data.data,
          };
          this.businessChatDialog = true;
          this.requestStatus = false;
        })
        .catch(() => {
          this.requestStatus = true;
        });
    },
    closeDialog(type, data) {
      if (type == "businessChatDialog") {
        this.currOpenOrderId = "";
        this.businessChatDialog = false;
        if (data && data.isRefresh) {
          this.getCommonOrderFun();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-select-dropdown.option-coin-name {
  .el-select-dropdown__item {
    padding: 0 20px !important;
    width: 331px !important;

    &>div {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-right: 8px !important;
      }

      span:nth-child(2) {
        font-weight: 500;
        margin-right: 8px !important;
      }

      span:nth-child(2) {
        font-weight: 400;
        margin-right: 8px !important;
      }
    }
  }
}

.otc-order-wrapper {
  padding: 40px 0;
  min-height: calc(100vh - 517px);
  box-sizing: border-box;
}

.otc-order-box {
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 24px 0;

  .back {
    padding-left: 24px !important;
    padding-right: 24px !important;
    margin-bottom: 24px !important;

    span {
      cursor: pointer;
    }
  }

  &.min-h {
    min-height: calc(100vh - 517px);
    box-sizing: border-box;
  }

  .searchBox {
    margin: 0 12px;
    padding-bottom: 16px !important;
    display: flex;
    align-items: center;

    .searchItem {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        margin-left: 20px;
      }

      .label {
        font-size: 14px;
        margin-right: 8px;
        padding-left: 12px !important;
        min-width: 30px;
      }

      ::v-deep.el-select {
        box-sizing: border-box;

        input.el-input__inner {
          height: 36px !important;
        }

        &.status {
          width: 197px;
          margin-left: 8px !important;

          .el-input__suffix {
            display: flex;
            align-items: center;
            transition: all 0.3s;
            pointer-events: none;

            .el-input__suffix-inner {
              display: inline-block;
              line-height: 36px;

              i {
                line-height: 40px !important;
              }
            }
          }
        }
      }
    }
  }

  ::v-deep.assets-table {
    padding: 0 12px;

    .control-column {
      padding-right: 12px;
      text-align: right;

      .cell {
        box-sizing: border-box;
        justify-content: flex-end;
      }
    }

    .el-table__header {
      thead tr th .cell {
        font-size: 12px;
      }
    }

    .el-pagination {
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
}

//商家
.merchant-order-wrapper {
  padding: 0;
}
</style>


<style lang="scss" scoped>
.theme-night {
  .otc-order-wrapper {
    background-color: #151d29;
  }

  .otc-order-box {
    ::v-deep.assets-table {
      .el-table__header {
        thead tr th .cell {
          color: #9bb4cc;

          .ascending {
            border-bottom-color: #9bb4cc;
          }

          .descending {
            border-top-color: #9bb4cc;
          }
        }

        thead tr th.ascending {
          .ascending {
            border-bottom-color: #0020FD !important;
          }
        }

        thead tr th.descending {
          .descending {
            border-top-color: #0020FD !important;
          }
        }
      }

      tbody {
        .el-table__row {
          .success-cell .cell {
            color: #31ad84;
          }

          .error-cell .cell {
            color: #e04d43;
          }
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
            color: #0020FD !important;
          }
        }
      }
    }

    .back {
      color: #0020FD;

      &:hover {
        color: #3a7ee6;
      }
    }
  }

  .assets-bot {
    .assets-bot-top {
      .box-switch-green {
        border-color: #262d38;
        background: linear-gradient(270deg, transparent, #636363);

        .box-switch_content {
          background-color: #384252;
          border-color: #384252;
        }
      }
    }
  }
}

.theme-daytime {
  .otc-order-wrapper {
    background-color: #f5f6fa;
  }

  .otc-order-box {
    ::v-deep.assets-table {
      .el-table__header {
        thead tr th .cell {
          color: #4e6073;

          .ascending {
            border-bottom-color: #4e6073;
          }

          .descending {
            border-top-color: #4e6073;
          }
        }

        thead tr th.ascending {
          .ascending {
            border-bottom-color: #2271e6 !important;
          }
        }

        thead tr th.descending {
          .descending {
            border-top-color: #2271e6 !important;
          }
        }
      }

      tbody {
        .el-table__row {
          .success-cell .cell {
            color: #31ad84;
          }

          .error-cell .cell {
            color: #e04d43;
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

    .back {
      color: #2954cc;

      &:hover {
        color: #1e64cc;
      }
    }
  }
}
</style>
