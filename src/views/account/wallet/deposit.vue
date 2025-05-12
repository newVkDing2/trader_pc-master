<template>
  <div class="deposit-box">
    <div class="fit-background assets-box">
      <div class="safe-title">
        <h2 class="fit-tc-primary" style="font-weight: 600">
          {{ currCoinLangFun("menu_cz", "move_index") }}
        </h2>
      </div>
      <div class="flex-box select-symbol-box">
        <el-select v-model="formData.symbol" filterable class="coinName"
          popper-class="fit-background-select option-coin-name" @change="chooseCoinFun">
          <template #prefix>
            <div style="padding-left: 5px; width: 24px; height: 24px">
              <img v-if="currCoinObj.avatar" style="width: 100%; height: 100%" :src="currCoinObj.avatar" />
            </div>
          </template>
          <el-option v-for="item in coinData" :key="item.symbol" :label="item.symbol" :value="item.symbol">
            <div style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                height: 36px;
                line-height: 36px;
              ">
              <div style="display: flex; align-items: center">
                <img :src="item.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
                <span style="margin-right: 8px">{{ item.symbol }}</span>
                <span class="article-tip">{{ item.full_name }}</span>
              </div>
              <div class="fit-tc-tip">
                {{ currCoinLangFun("entrust_available", "full") }}：{{
                                removeZero(item.balance || 0)
                                }}
              </div>
            </div>
          </el-option>
        </el-select>
        <ul class="flex-box">
          <li>
            <p class="article-tip">
              {{ currCoinLangFun("total_assets", "user") }}
            </p>
            <p class="fit-tc-primary">
              {{ removeZero(currCoinObj.total || 0) }} {{ currCoinObj.symbol }}
            </p>
          </li>
          <span class="box-line"> </span>
          <li>
            <p class="article-tip">
              {{ currCoinLangFun("entrust_available", "full") }}
            </p>
            <p class="fit-tc-primary">
              {{ removeZero(currCoinObj.balance || 0) }}
              {{ currCoinObj.symbol }}
            </p>
          </li>
          <span class="box-line"> </span>
          <li>
            <p class="article-tip">{{ currCoinLangFun("order_freezing") }}</p>
            <p class="fit-tc-primary">
              {{ removeZero(currCoinObj.frozen_balance || 0) }}
              {{ currCoinObj.symbol }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="fit-background code-box">
      <div class="left">
        <div class="flex-box left-top">
          <div>
            {{ currCoinLangFun("ruzhangzhanghu_text", "buy_coins_relevant") }}：
          </div>
          <div class="commom-che flex-box">
            <div class="flex-box">
              <span :class="{
                                'fit-tc-tertiary active-text': true,
                                'fit-tc-tip': false,
                              }">{{ currCoinLangFun("wallet_account") }}</span>
            </div>
          </div>
        </div>
        <div class="deposit-card">
          <div class="line-type">
            <ul>
              <li v-for="item in networkList" :key="item.chain_type"
                :class="{ isSelect: formData.network == item.chain_type }" @click="chooseNetworkFun(item)">
                {{ item.chain_type }}
              </li>
            </ul>
          </div>
          <div v-loading="requestAddress">
            <div class="qrcode">
              <div class="qrcode-normal" ref="qrcode" id="qrcode"></div>
            </div>
            <div class="left-bottom">
              <div class="tips fit-tc-tip">
                <span>{{
                                  currCoinLangFun("cbdz_text", "buy_coins_relevant")
                                  }}</span>
                <el-tooltip class="item" effect="dark" placement="top">
                  <div slot="content">
                    <div style="padding: 16px; width: 268px" class="fit-tc-primary">
                      <div style="font-weight: 700; font-size: 16px">
                        {{ currCoinLangFun("cbdz_text", "buy_coins_relevant") }}
                      </div>
                      <p style="
                          font-size: 12px;
                          margin-top: 8px;
                          line-height: 20px;
                        ">
                        {{
                                                currCoinLangFun("text_cbdzbz", "buy_coins_relevant")
                                                }}
                      </p>
                    </div>
                  </div>
                  <i class="el-icon-info" style="cursor: pointer"></i>
                </el-tooltip>
              </div>
              <div class="address flex-box">
                <span>{{ formData.address }}</span>
                <i class="copy el-icon-copy-document a-theme" style="margin-left: 4px; font-size: 24px; cursor: pointer"
                  @click="copy(formData.address)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right symbol-info-box flex-box">
        <div class="deposit-explain">
          <ul class="explain-wrap" style="font-size: 12px">
            <li class="fit-tc-tip" style="margin-left: 16px">
              <p style="margin-top: 4px">
                {{
                                replaceCoinLangFun(
                                currCoinLangFun("dqdzwldz_text", "buy_coins_relevant"),
                                [
                                {
                                key: "$[chain_type]",
                                value: currNetworkObj.chain_type,
                                },
                                ]
                                )
                                }}
              </p>
              <p style="margin-top: 4px">
                {{
                                currCoinLangFun(
                                "qzxhdhcz_ymzczcds_text",
                                "buy_coins_relevant"
                                )
                                }}
              </p>
            </li>
            <li style="margin-top: 12px">
              <i class="el-icon-warning fit-fall"></i>
              <span>
                {{
                                replaceCoinLangFun(
                                currCoinLangFun("gbzzxczslw_text", "buy_coins_relevant"),
                                [
                                {
                                key: "$[deposit_min]",
                                value: currNetworkObj.deposit_min,
                                },
                                {
                                key: "$[coin_name]",
                                value: currCoinObj.symbol,
                                },
                                ]
                                )
                                }}
              </span>
            </li>
            <li style="margin-top: 12px">
              <i class="el-icon-warning fit-fall"></i>
              <span>
                {{
                                replaceCoinLangFun(
                                currCoinLangFun("qzxqfxydwl_text", "buy_coins_relevant"),
                                [
                                {
                                key: "$[coin_name]",
                                value: currCoinObj.symbol,
                                },
                                ]
                                )
                                }}
              </span>
            </li>
            <li style="margin-top: 12px">
              <i class="el-icon-warning fit-fall"></i>
              <span>
                {{
                                replaceCoinLangFun(
                                currCoinLangFun("cdzzkjsldtk_text", "buy_coins_relevant"),
                                [
                                {
                                key: "$[chain_type]",
                                value: currNetworkObj.chain_type,
                                },
                                {
                                key: "$[coin_name]",
                                value: currCoinObj.symbol,
                                },
                                ]
                                )
                                }}
              </span>
            </li>
            <li class="fit-tc-tip" style="padding-left: 16px; margin-top: 12px">
              {{
                            replaceCoinLangFun(
                            currCoinLangFun("jzxdzczczwdzc_text", "buy_coins_relevant"),
                            [
                            {
                            key: "$[chain_type]",
                            value: currNetworkObj.chain_type,
                            },
                            ]
                            )
                            }}
            </li>
            <li class="fit-tc-tip" style="padding-left: 16px">
              {{
                            currCoinLangFun("qbytgznhydzqkjlcz_text", "buy_coins_relevant")
                            }}
            </li>
            <li class="fit-tc-tip" style="padding-left: 16px">
              {{
                            replaceCoinLangFun(
                            currCoinLangFun(
                            "sydzczxygwlqrcndz_text",
                            "buy_coins_relevant"
                            ),
                            [
                            {
                            key: "$[chain_type]",
                            value: currNetworkObj.chain_type,
                            },
                            {
                            key: "$[confirm_count]",
                            value: currNetworkObj.confirm_count,
                            },
                            ]
                            )
                            }}
            </li>
            <li class="fit-tc-tip" style="padding-left: 16px">
              {{
                            currCoinLangFun(
                            "czwchnkyjrczjlymgzjd_text",
                            "buy_coins_relevant"
                            )
                            }}
              <!-- 充值完成后，您可以进入<span
                class="a-theme"
                style="cursor: pointer"
                @click="
                  $router.push({ path: '/account/wallet/history-deposit' })
                "
                >充值记录</span
              >页面跟踪进度。 -->
            </li>
            <li class="fit-tc-tip" style="padding-left: 16px">
              {{
                            currCoinLangFun("dzsjryswldsdyxzcyc_text", "buy_coins_relevant")
                            }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fit-background symbol-history-box">
      <div class="table-header" style="margin: 0 20px">
        <div class="fit-tc-primary" style="font-size: 18px">
          {{ currCoinLangFun("last_20_recharge_records") }}
        </div>
        <div>
          <span class="a-theme" style="font-size: 14px; cursor: pointer"
            @click="$router.push({ path: '/account/wallet/history-deposit' })">
            {{ currCoinLangFun("check_all_recharge_records") }}
            <i class="el-icon-right"></i>
          </span>
        </div>
      </div>
      <div class="assets-table" style="padding: 0 20px 20px">
        <el-table v-loading="requestStatus" :data="valuationData" style="width: 100%">
          <el-table-column :show-overflow-tooltip="true" prop="chain_type"
            :label="currCoinLangFun('chain_type_unsupport')" width="90">
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="coin_symbol"
            :label="currCoinLangFun('orders_table_coin', 'full')" width="80">
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="amount" :label="currCoinLangFun('entrust_money', 'full')"
            min-width="60" align="right">
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="completion_time"
            :label="currCoinLangFun('receipt_amount_date')" width="150" align="right">
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="block_num" :label="currCoinLangFun('block_height')"
            width="120" align="right">
          </el-table-column>
          <el-table-column prop="address" :label="currCoinLangFun('address', 'all')" align="left" min-width="150">
            <template slot-scope="scope">
              <div v-if="scope.row.address">
                <span>{{ scope.row.address }}</span>
                <!-- <i
                  class="el-icon-link a-theme"
                  style="font-size: 14px; cursor: pointer; padding: 0 4px"
                ></i> -->
                <i class="el-icon-copy-document a-theme" style="font-size: 14px; cursor: pointer; padding: 0 4px"
                  @click="copy(scope.row.address)"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="hash" :label="currCoinLangFun('hash')" align="left" min-width="150">
            <template slot-scope="scope">
              <div v-if="scope.row.hash">
                <span>{{ scope.row.hash }}</span>
                <!-- <i
                  class="el-icon-link a-theme"
                  style="font-size: 14px; cursor: pointer; padding: 0 4px"
                ></i> -->
                <i class="el-icon-copy-document a-theme" style="font-size: 14px; cursor: pointer; padding: 0 4px"
                  @click="copy(scope.row.hash)"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="log_status"
            :label="currCoinLangFun('orders_table_state', 'full')" width="60" align="center">
            <template slot-scope="scope">
              <div>
                <span>{{ showStatus(scope.row.log_status) }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRechargeLog,
  getRechargeCurrency,
  getDepositAddress,
} from "@/api/user.js";
import { getDicTableData } from "@/api/system.js";
import { toThousands,toNonExponential } from "@/util/util";
import QRCode from "qrcodejs2";
import crypto from '@/util/crypto';

export default {
  data() {
    return {
      requestStatus: false, //table请求状态
      requestAddress: false,
      valuationData: [],
      coinData: [], //币种
      coinObj: {},
      networkList: [], //链路名称
      formData: {
        symbol: "",
        network: "",
        address: "",
      },
      currCoinObj: {
        avatar: "",
        symbol: "",
        full_name: "",
        balance: "0",
        total: "0",
      }, //当前币种
      currNetworkObj: {}, //当前网络
      status: [
        {
          value: "",
          label: this.currCoinLangFun("orders_table_all_state", "full"), //全部状态
        },
      ], //状态
    };
  },
  created() {
    this.getRechargeLogFun();
    // 获取充值记录状态
    getDicTableData("wallet_history_status").then((res) => {
      this.status = this.status.concat(res.data.data);
    });
    //获取币种
    getRechargeCurrency().then((res) => {
      this.coinData = res.data.data.map(item=>{
        if(item.frozen_balance!=undefined){
          item.frozen_balance=toNonExponential(item.frozen_balance - 0,'string')
        }
        return item
      })
      this.coinObj = {};
      this.coinData.forEach((item) => {
        this.coinObj[item.symbol] = item;
      });
      if (this.coinData.length) {
        this.formData.symbol = this.coinData[0].symbol;
        this.currCoinObj = this.coinData[0];
        if (
          this.currCoinObj.networkList &&
          this.currCoinObj.networkList.length
        ) {
          this.networkList = this.currCoinObj.networkList;
          this.formData.network = this.networkList[0].chain_type;

          this.chooseNetworkFun(this.networkList[0]);
        } else {
          this.networkList = [];
        }
      }
    });
  },
  methods: {
    currCoinLangFun(code, type = "order") {
      return this.coinLangFun(type, code);
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key);
          //while循环替换相同的key
          while (keyIndex >= 0) {
            text = text.replace(item.key, item.value || "");
            keyIndex = text.indexOf(item.key);
          }
        });
      }

      return text;
    },
    //切换币种
    chooseCoinFun(value) {
      if (this.coinObj[value]) {
        this.currCoinObj = this.coinObj[value];
        this.networkList = this.currCoinObj.networkList;
        if (this.networkList.length > 0) {
          this.chooseNetworkFun(this.networkList[0]);
        }
      }
    },
    //切换链路
    chooseNetworkFun(obj) {
      this.currNetworkObj = obj;
      this.formData.network = obj.chain_type;
      this.getDepositAddressFun();
    },
    //回显状态
    showStatus(value) {
      if (value) {
        let filterArr = this.status.filter((item) => item.value == value);
        if (filterArr.length) {
          return filterArr[0].label;
        } else {
          return value;
        }
      } else {
        return "";
      }
    },
    //获取链地址，生成二维码
    getDepositAddressFun() {
      this.$refs.qrcode.innerHTML = "";
      this.requestAddress = true;
      getDepositAddress(this.currNetworkObj.chain_type)
        .then((res) => {
          res.data=crypto.decrypt(res.data)
          res.data=JSON.parse(res.data)
          console.log(res)
          this.formData.address = res.data.data.address;
          this.$refs.qrcode.innerHTML = "";
          let qrcode = new QRCode("qrcode", {
            width: 140,
            height: 140,
            text: this.formData.address,
            render: "canvas",
          });
          this.requestAddress = false;
        })
        .catch(() => {
          this.requestAddress = false;
        });
    },
    //历史记录
    getRechargeLogFun() {
      this.requestStatus = true;
      getRechargeLog({
        current: 1,
        size: 20,
      })
        .then((res) => {
          this.valuationData = res.data.data.records.map((item) => {
            item.amount = toThousands(item.amount);
            return item;
          });
          this.total = res.data.data.total;
          this.requestStatus = false;
        })
        .catch(() => {
          this.requestStatus = false;
        });
    },
    removeZero(value) {
      if (value) {
        return `${toThousands(Number(value))}`;
      } else {
        return "0";
      }
    },
    copy(text) {
      // 模拟 输入框
      let cInput = document.createElement("input");
      cInput.value = text;
      document.body.appendChild(cInput);
      // 选取文本框内容
      cInput.select();

      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand("copy");

      this.$message({
        type: "success",
        message: this.currCoinLangFun("text_fzcg", "all"),
      }); //复制成功
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput);
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.deposit-box {
  .assets-box {
    padding: 24px;
    margin-bottom: 8px !important;

    .select-symbol-box {
      margin-top: 16px;
      height: 48px;

      ::v-deep.el-select.coinName {
        .el-input__inner {
          padding-left: 46px;
          width: 480px;
          height: 48px;
          line-height: 48px;
          font-size: 20px;
          font-weight: 500;
        }

        .el-input__prefix {
          display: flex;
          align-items: center;
        }
      }

      &>ul {
        flex: 1;
        font-size: 12px !important;

        li {
          flex: 1;
          padding-left: 24px;
        }

        .box-line {
          width: 1px;
          height: 48px;
          display: block;
          background-color: rgba(123, 123, 147, 0.16);
        }
      }
    }
  }

  .code-box {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 24px;

    .left {
      min-width: 560px;
      flex: 1;

      .left-top {
        margin-bottom: 24px !important;

        .commom-che {
          div {
            font-size: 14px !important;
            padding: 0 12px;
            position: relative;
            cursor: pointer;

            span {
              margin-left: 4px !important;
            }
          }
        }
      }

      .deposit-card {
        flex: 1;

        .line-type {
          ul {
            line-height: 20px;
            font-size: 14px !important;

            li {
              padding: 4px 12px;
              border-radius: 2px;
              margin-right: 12px;
              margin-bottom: 8px;
              display: inline-block;
              cursor: pointer;

              &.isSelect {
                color: #f5faff !important;
                background-color: #0020FD !important;
              }
            }
          }
        }

        .qrcode {
          text-align: center;
          margin-top: 12px !important;

          .qrcode-normal {
            display: inline-flex;
            width: 148px;
            height: 148px;
            padding: 4px;
            border: 0px;
            background-color: #fff;
            box-sizing: border-box;
          }
        }
      }

      .left-bottom {
        text-align: left !important;
        width: 100%;
        margin-top: 24px !important;

        .address {
          span {
            max-width: 240px;
            word-wrap: break-word;
            padding-right: 12px !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
        }
      }
    }

    .right.symbol-info-box {
      align-items: flex-start;
      justify-content: space-between;

      .deposit-explain {
        width: 452px;
        padding: 24px;
      }
    }
  }

  .symbol-history-box {
    margin-top: 24px !important;

    .table-header {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
      border-bottom: 1px solid;

      div {
        margin-left: 24px !important;
      }
    }
  }

  ::v-deep.assets-table {
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
</style>

<style lang="scss" scoped>
.theme-daytime {
  .deposit-box {
    .deposit-card {
      .line-type {
        ul {
          li {
            background-color: #f5f6fa;
            color: #4e6073;
          }
        }
      }
    }

    .symbol-info-box {
      .deposit-explain {
        background: rgba(225, 228, 235, 0.16078);
      }
    }

    .symbol-history-box {
      .table-header {
        border-bottom-color: #dddddd;
      }

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
      }
    }
  }
}

.theme-night {
  .deposit-box {
    .deposit-card {
      .line-type {
        ul {
          li {
            background-color: #151d29;
            color: #9bb4cc;
          }
        }
      }
    }

    .symbol-info-box {
      .deposit-explain {
        background: rgba(225, 228, 235, 0.05882);
      }
    }

    .symbol-history-box {
      .table-header {
        border-bottom-color: #262d38;
      }

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
      }
    }
  }
}
</style>
