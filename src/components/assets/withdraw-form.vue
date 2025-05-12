<template>
  <div class="recharge_form_box">
    <div class="recharge_inner flex-between">
      <div class="left-form">
        <div class="top_box flex-between">
          <div class="title bold">{{ $t("assets.withdraw") }}</div>
          <div
            class="bindCard bold cur_p"
            @click="
              $router.push({
                path: '/user/index',
                query: { key: 'bank' },
              })
            "
          >
            {{ $t("assets.bindBankCard") }}>
          </div>
        </div>
        <div class="recharge_form">
          <el-form
            :model="withdrawForm"
            ref="form"
            label-width="90px"
            label-position="left"
            hide-required-asterisk="true"
          >
            <el-form-item :label="$t('assets.withdrawWay')">
              <el-select
                v-model="withdrawForm.coinType"
                :placeholder="$t('assets.plsSelectWithdrawWay')"
                clearable
                @change="changeCoin"
              >
                <el-option
                  v-for="(item, index) in data"
                  :key="index"
                  :label="item.title"
                  :value="item.title"
                ></el-option>
                <!-- <el-option label="USDT-ERC" value="USDT-ERC"></el-option>
                <el-option label="USDT-TRC" value="USDT-TRC"></el-option>
                <el-option label="ETH" value="ETH"></el-option>
                <el-option label="BTC" value="BTC"></el-option>
                <el-option
                  :label="$t('assets.bankCardWithdraw')"
                  value="USDT"
                ></el-option> -->
              </el-select>
            </el-form-item>
            <!-- {{withdrawInfo}}--withdrawInfo -->
            <el-form-item
              :label="$t('assets.withdrawCoinType')"
              v-show="withdrawInfo.icon == 'card'"
            >
              <el-input
                :disabled="!curBank.coin"
                :placeholder="$t('utils.plsInput')"
                :value="curBank && curBank.coin ? curBank.coin : ''"
              ></el-input>
            </el-form-item>
            <el-form-item
              :label="$t('assets.bankCard')"
              v-show="withdrawInfo.icon == 'card'"
            >
              <!-- <el-input v-model="withdrawForm.bankCard"></el-input> -->
              <el-select
                v-model="curBank.id"
                :placeholder="$t('utils.plsSelect')"
                clearable
                @change="changeBank"
              >
                <el-option
                  v-if="withdrawBankList.length > 0"
                  v-for="(item, index) in withdrawBankList"
                  :key="index"
                  :label="item.bankName + item.coin + cardNumber"
                  :value="item.id"
                ></el-option>
                <!-- <p class="bankName">
            {{ item?.bankName }} <span class="scl" v-if="item?.coin">（{{ item?.coin }}）</span>
          </p>
          <p class="cardNumber fw-num">{{ hideBank(item?.cardNumber) }}</p> -->
                <!-- <el-option label="USDT-ERC" value="1"></el-option>
                <el-option label="USDT-TRC" value="2"></el-option>
                <el-option label="ETH" value="3"></el-option>
                <el-option label="BTC" value="4"></el-option>
                <el-option label="ddd" value="5"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item
              :label="$t('assets.withdrawAddress')"
              prop="address"
              :rules="[
                {
                  required: true,
                  message: $t('assets.plsSelectWithdrawAddress'),
                  trigger: 'blur',
                },
              ]"
            >
              <el-input v-model="withdrawForm.address"></el-input>
            </el-form-item>

            <el-form-item
              :label="$t('assets.withdrawMoney')"
              prop="amount"
              :rules="[
                {
                  required: true,
                  message: $t('assets.plsInputWithdrawMoney'),
                  trigger: 'blur',
                },
                { type: 'number', message: $t('assets.mustNumber') },
              ]"
            >
              <el-input v-model="withdrawForm.amount">
                <template slot="append">
                  <div class="all_btn cur_p" @click="initAllNum">
                    {{ $t("assets.allProposed") }}
                  </div>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label=" ">
              {{ $t("utils.canUseBalance") }}: {{ withdrawInfo.canUseAmount }}
              {{ withdrawInfo.icon == "card" ? "USDT" : withdrawForm.coinType }}
            </el-form-item>
            <el-form-item :label="$t('assets.withdrawPsw')" prop="psw">
              <!-- suffix-icon="el-icon-view" -->
              <el-input show-password type="number" v-model="withdrawForm.psw">
              </el-input>
            </el-form-item>

            <el-form-item label="">
              <div class="confirm_btn cur_d">
                <div v-loading="showLoading">
                  <div @click="submit" class="cur_d">
                    {{ $t("assets.confirmWithdraw") }}
                  </div></div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="right_tip">
        <div class="title bold">{{ $t("assets.warmTip") }}</div>
        <div class="content flex-colum-evenly">
          <p>{{ $t("assets.handlingFees") }} {{ withdrawInfo.ratio }}%</p>
          <p>
            {{ $t("assets.warmTipContent") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { withdrawSubmit } from "@/api/assets";
import { priceFormat } from "@/util/decimal.js";
export default {
  props: {
    data: Array,
    withdrawInfo: Object, //提现信息
    withdrawBankList: Array, //银行卡列表
    curBank: Object, //当前选中的银行卡
    userInfo: Object,
  },
  data() {
    return {
      withdrawForm: {
        coinType: "USDT-ERC",
        coin: "usdt",
        bankName: "",
        bankBranch: "",
        bankUserName: "",
        address: "",
        address2: "",
        amount: "",
        psw: "",
        bankId: "",
      },
      showLoading: false
    };
  },
  mounted() {
    // this.changeCoin(this.withdrawForm.coinType);
  },
  methods: {
    submit() {
      this.withdrawSubmit();
    },
    commonEmitGetCanUse(icon) {
      this.$emit("getWithdrawInfo", {
        param1: icon,
        param2: 1,
      });
    },
    changeBank(value) {
      this.$emit("getCurBankInfo", {
        param1: value,
      });
    },
    //切换不同提现方式时
    changeCoin(e) {
      // console.log("e===888===>", e);
      let item = this.data.find((dataItem) => dataItem.title == e);
      // console.log("item==>", item);
      // this.selectWidthdrawInfo=item;

      this.commonEmitGetCanUse(item.icon);
      if (this.withdrawForm.amount.length > 0) {
        this.initAllNum();
      }
    },
    withdrawSubmit() {
      if (this.userInfo.detail.userTardPwd == null) {
        // showToast('请设置资金密码')
        this.$message({
          message: this.$t("assets.plsSetAssetsPsw"),
          type: "warning",
        });
        setTimeout(() => {
          this.$router.push({
            path: "/user/index",
            query: { key: "tardPwd" },
          });
        }, 800);
        return;
      }
      let params = "";
      if (this.withdrawInfo.icon == "card") {
        params = `amount=${priceFormat(
          this.withdrawForm.amount
        )}&coinType=BANK&pwd=${this.withdrawForm.psw}&adress=${
          this.curBank.cardNumber
        }&coin=${this.withdrawInfo.card.toLowerCase()}&bankName=${
          this.curBank.bankName
        }&bankUserName=${this.curBank.userName}&bankBranch=${
          this.curBank.bankBranch
        }`;
      } else {
        params = `amount=${priceFormat(this.withdrawForm.amount)}&coinType=${
          this.withdrawInfo.title
        }&pwd=${this.withdrawForm.psw}&adress=${
          this.withdrawForm.address
        }&coin=${this.withdrawInfo.icon}`;
      }
      this.showLoading = true
      // this.$emit("getWithdrawRecord");
      withdrawSubmit(params).then((res) => {
        this.showLoading = false
        if (res.data.code==200) {
          this.$message.success(res.data.msg);
          this.withdrawForm.amount='';
          this.withdrawForm.address='';
          this.$emit("getWithdrawRecord");
        }
      }).finally(() => {
        this.showLoading = false
      })
    },
    initAllNum() {
      this.withdrawForm.amount = this.canUseAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.recharge_form_box {
  width: 1200px;
  padding: 40px 0;
  // background: red;
  margin: auto;

  .recharge_inner {
    width: 100%;
    gap: 100px;

    .left-form {
      //   width: 750px;
      flex: 3;

      .top_box {
        .title {
          font-size: 36px;
          color: #1e2329;
        }

        .bindCard {
          font-size: 14px;
          color: #1e2329;
        }
      }

      .recharge_form {
        margin-top: 50px;
      }

      ::v-deep.el-form {
        .el-select {
          width: 100%;
        }

        .el-form-item__label {
          font-size: 16px;
          line-height: 30px;
        }

        .el-input__icon {
          line-height: 40px;
        }

        .confirm_btn {
          margin-top: 40px;

          > div {
            width: 600px;
            height: 48px;
            line-height: 48px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            background: #09BA85;
          }
        }
      }
    }

    .right_tip {
      //   width: 360px;
      flex: 1.6;
      //background: red;
      align-self: flex-start;

      .title {
        font-size: 34px;
        color: #1e2329;
      }

      .content {
        width: 100%;
        height: 250px;
        margin-top: 50px;
        border-radius: 10px;
        padding: 15px 20px;
        box-sizing: border-box;
        background: #f1f1f1;
        font-size: 14px;

        p:nth-child(2) {
          line-height: 30px;
        }
      }
    }
  }
}
</style>
