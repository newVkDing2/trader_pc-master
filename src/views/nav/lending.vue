<template>
  <!--  -->
  <div class="lending-lp">
    <main>
      <div class="main_wrapper">
        <div id="main-top" class="main_container">
          <div class="maximum_wrapper">
            <div class="maximum_rate">
              <p>Maximum interest rate</p>
              <p><span>5</span>%</p>
            </div>
          </div>
          <h1>Earn extra cryptos just by lending it.</h1>
          <h1>Coincheckusa Lending</h1>
          <div class="create-user">
            <div class="area-register-login">
              <div class="area-columns">
                <a class="register" style="cursor: pointer"  @click="$router.push({ path: '/user/register' })">Register now</a>
                <a class="login" style="cursor: pointer" @click="$router.push({ path: '/user/login' })">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="howtouse-wrapper">
      <div class="howtouse-about">
        <div class="howtouse-about-title">
          <h3>How to use</h3>
          <p>What is Coincheckusa Lending?</p>
        </div>
        <div class="howtouse-about-text">
          <p>Coincheckusa lending is cryptocurrency lending service where a user can lend cryptocurrency for a certain
            period to Coincheckusa by agreeing on the loan contract agreement. Upon expiration or termination of the
            agreement, Coincheckusa will return cryptocurrency with annual % rate on top of it.</p>
        </div>
      </div>
      <div class="howtouse-contents01 skew1">
        <div class="skew-wrapper">
          <div class="skew1-contents">
            <img src="@/assets/navpage/icon_timer.svg" alt="Timer" class="icon">
            <div class="skew-text">
              <h3>Maximum 5.0% interest rate. You can earn interest rate just by lending cryptocurrency to
                Coincheckusa.</h3>
              <p class="center">Do you have spare cryptocurrency that is not used?</p>
              <p class="center">Open Coincheckusa Lending account, and lend your cryptocurrency.</p>
              <p class="center">You can earn interest rate (Maximum 5.0%)!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="howtouse-contents02 skew2">
        <div class="skew-wrapper">
          <div class="skew2-contents">
            <img src="@/assets/navpage/icon_btc.svg" alt="BTC" class="icon">
            <div class="skew-text">
              <h3>You can lend all kinds of cryptocurrencies</h3>
              <p>You can lend not only Bitcoin, but also Ethereum, Ripple, NEM, and any other crypto assets available in
                Coincheckusa.</p>
              <p>To find out more, please log in to your Coincheckusa account and check out <a class="link"
                                                                                               @click="handleClick">this
                page</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="howtouse-contents03 skew1">
        <div class="skew-wrapper">
          <div class="skew1-contents">
            <img src="@/assets/navpage/icon_cc.svg" alt="Coincheckusa" class="icon">
            <div class="skew-text">
              <h3>If you already have an account with Coincheckusa, you are almost ready to start Coincheckusa
                Lending.</h3>
              <p>Start Coincheckusa Lending just by submitting a simple</p>
              <p>With Coincheckusa Lending you can increase your assets just by lending your spare cryptocurrencies to
                Coincheckusa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="button-wrapper">
      <a href="#main-top" class="app-button">Apply here</a>
    </div>

    <section class="about-wrapper">
      <div class="about-container">
        <h3>Overview</h3>
        <ul>
          <li>Coincheckusa will pay usage fee according to the amount of cryptocurrency you lent.</li>
        </ul>
        <h3>Starting day of deposit</h3>
        <ul>
          <li>Lending will be available after Coincheckusa verifies the lending application. Coincheckusa may disapprove
            an application depending on amount and term of deposit.
          </li>
        </ul>
        <h3>The day you earn interest</h3>
        <ul>
          <li>The usage fee is paid to user's account when Coincheckusa returns cryptocurrency.</li>
        </ul>
        <h3>Notice</h3>
        <ul class="decoration">
          <li>Coincheckusa Lending is not subject to Payment Services Act. Hence, lent cryptocurrencies are not managed
            as segregated funds.
          </li>
          <li>The price of cryptocurrency is always fluctuating. The price when you lent cryptocurrency and price when
            you sell is different. Please be aware there's always a risk.
          </li>
          <li>To use Coincheckusa Lending, please note that user must agree with the consumption loan agreement, which
            is an unsecured contract. Hence, users have a risk not being able to receive lent cryptocurrencies in a case
            when Coincheckusa bankrupt.
          </li>
          <li>Users are prohibited from selling or sending lent cryptocurrencies until the end of a term or when
            Coincheckusa decides to return it.
          </li>
          <li>This service is not a deposit item, it is not subject to deposit insurance.</li>
        </ul>
        <h3>Example</h3>
        <ul>
          <li>
            e.g.) When you lend Bitcoin at an annual interest rate of 3.0% for 90 days.<br>[10BTC] × [3.0%] ÷ 365 ×
            [90days] = 0.07398 BTC will be paid as a usage fee.
          </li>
        </ul>
      </div>
    </section>

    <section class="Simulator" id="SimulatorCtrl" data-v-app="">
      <div class="Simulator-about">
        <div class="Simulator-about-title"><h3>Simulator</h3>
          <p>Interest rate simulator</p></div>
      </div>
      <table class="Simulator-wrapper-table">
        <tbody>
        <tr>
          <th>Amount of deposit</th>
          <td><input tyle="text" name="name" v-model="money"></td>
        </tr>
        <tr>
          <th>Term of deposit</th>
          <td>
            <select name="number" v-model="day">
              <option value="14">14days</option>
              <option value="30">30days</option>
              <option value="90">90days</option>
              <option value="180">180days</option>
              <option value="365">365days</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Simulation result</th>
          <td><input tyle="text" name="name" :value="resultMoney"></td>
        </tr>
        </tbody>
      </table>
      <p>※The simulator value and the actual interest may not match due to the calculation after the decimal point.</p>
    </section>

    <section class="footer-create">
      <div class="create-about">
        <div class="Simulator-about-title">
          <h3>Application</h3>
          <p>Apply</p>
        </div>
      </div>
      <div class="create-user">
        <div class="area-register-login bottom">
          <div class="area-columns">
            <a class="register" style="cursor: pointer" @click="$router.push({ path: '/user/register' })">Register now</a>
            <a class="login" style="cursor: pointer" @click="$router.push({ path: '/user/login' })">Sign in</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import BigNumber from "bignumber.js/bignumber";

export default {
  components: {},
  data() {
    return {
      money: '',
      day: '',
    };
  },
  created() {

  },
  computed: {
    resultMoney() {
      console.log(this.day)
      let day = this.day + ''
      let money = new BigNumber(this.money)
      switch (day) {
        case '14':
          return money.times(0.0003836)
        case '30':
          return money.times(0.0016439999)
        case '90':
          return money.times(0.007398)
        case '180':
          return money.times(0.0197262)
        case '365':
          return money.times(0.0500013499)
        default:
          return ''
      }
    }
  },
  watch: {},
  async mounted() {

  },
  methods: {
    handleClick() {
      this.$message({
        message: this.$t('trade.downApp'),
        type: "success",
      })
    }
  },
};
</script>

<style lang="scss" scoped>


@font-face {
  font-family: "cc-icon";
  src: url(https://assets.coincheck.com/assets/cc-icon-38da96f578d3e82cc82b5b1e1e24c6b873bcb4d6b9a055abde5a54be60f184eb.eot?d56cq3);
  src: url(https://assets.coincheck.com/assets/cc-icon-38da96f578d3e82cc82b5b1e1e24c6b873bcb4d6b9a055abde5a54be60f184eb.eot?d56cq3#iefix) format("embedded-opentype"), url(https://assets.coincheck.com/assets/cc-icon-cd5c9211a125e6fb9343c0afdb9748974b345c6a896ccd604d13c8dda69b9633.ttf?d56cq3) format("truetype"), url(https://assets.coincheck.com/assets/cc-icon-17ac210e64eb9585b7b9a8201e6f6258956565a8352516a289e9720e3fb61a8c.woff?d56cq3) format("woff"), url(https://assets.coincheck.com/assets/cc-icon-7856374acc547b9ca8fdcb3404c37099cc92fc290737e60e4057e98bac0613e5.svg?d56cq3#cc-icon) format("svg");
  font-weight: normal;
  font-style: normal
}

i {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.cc-icon_product:before {
  content: "";
  color: #6e7282
}

.cc-icon_language:before {
  content: "";
  color: #6e7282
}

.cc-icon_account_circle:before {
  content: "";
  color: #6e7282
}

.cc-icon_add_circle:before {
  content: "";
  color: #6e7282
}

.cc-icon_add:before {
  content: "";
  color: #6e7282
}

.cc-icon_burger:before {
  content: "";
  color: #6e7282
}

.cc-icon_organisation:before {
  content: "";
  color: #6e7282
}

.cc-icon_left:before {
  content: "";
  color: #6e7282
}

.cc-icon_right:before {
  content: "";
  color: #6e7282
}

.cc-icon_up:before {
  content: "";
  color: #6e7282
}

.cc-icon_down:before {
  content: "";
  color: #6e7282
}

.cc-icon_docs:before {
  content: "";
  color: #6e7282
}

.cc-icon_group:before {
  content: "";
  color: #6e7282
}

.cc-icon_checked:before {
  content: "";
  color: #6e7282
}

.cc-icon_download:before {
  content: "";
  color: #6e7282
}

.cc-icon_exchange:before {
  content: "";
  color: #6e7282
}

.cc-icon_loading:before {
  content: "";
  color: #50b8e4
}

.cc-icon_security-checked:before {
  content: "";
  color: #6e7282
}

.cc-icon_calendar:before {
  content: "";
  color: #6e7282
}

.cc-icon_shoppingcart:before {
  content: "";
  color: #6e7282
}

.cc-icon_minus:before {
  content: "";
  color: #6e7282
}

.cc-icon_no:before {
  content: "";
  color: #6e7282
}

.cc-icon_maintenance:before {
  content: "";
  color: #6e7282
}

.cc-icon_point-down:before {
  content: "";
  color: #6e7282
}

.cc-icon_hide:before {
  content: "";
  color: #6e7282
}

.cc-icon_upload:before {
  content: "";
  color: #6e7282
}

.cc-icon_trade:before {
  content: "";
  color: #6e7282
}

.cc-icon_writing:before {
  content: "";
  color: #6e7282
}

.cc-icon_borrow.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_account.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_account:before {
  content: "";
  color: #6e7282
}

.cc-icon_account-verified.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_account-verified:before {
  content: "";
  color: #6e7282
}

.cc-icon_add-account.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_add-account:before {
  content: "";
  color: #6e7282
}

.cc-icon_bank.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_bank:before {
  content: "";
  color: #6e7282
}

.cc-icon_bell.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_bell:before {
  content: "";
  color: #6e7282
}

.cc-icon_box.selected:before {
  content: "";
  color: #21ddb8
}

.cc-icon_box:before {
  content: "";
  color: #6e7282
}

.cc-icon_bubble.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_bubble:before {
  content: "";
  color: #6e7282
}

.cc-icon_buy-coin.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_buy-coin:before {
  content: "";
  color: #6e7282
}

.cc-icon_calculator.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_calculator:before {
  content: "";
  color: #6e7282
}

.cc-icon_chart.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_chart:before {
  content: "";
  color: #6e7282
}

.cc-icon_checklist.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_checklist:before {
  content: "";
  color: #6e7282
}

.cc-icon_download-report.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_download-report:before {
  content: "";
  color: #6e7282
}

.cc-icon_gift.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_gift:before {
  content: "";
  color: #6e7282
}

.cc-icon_heart.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_heart:before {
  content: "";
  color: #6e7282
}

.cc-icon_home.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_home:before {
  content: "";
  color: #6e7282
}

.cc-icon_key.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_key:before {
  content: "";
  color: #6e7282
}

.cc-icon_lightbulb.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_lightbulb:before {
  content: "";
  color: #6e7282
}

.cc-icon_list.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_list:before {
  content: "";
  color: #6e7282
}

.cc-icon_logout.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_logout:before {
  content: "";
  color: #6e7282
}

.cc-icon_menu-button.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_menu-button:before {
  content: "";
  color: #6e7282
}

.cc-icon_mobile.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_mobile:before {
  content: "";
  color: #6e7282
}

.cc-icon_notice_selected .path1:before {
  content: "";
  color: #50b8e4
}

.cc-icon_notice_selected .path2:before {
  content: "";
  margin-left: -1em;
  color: white
}

.cc-icon_notice:before {
  content: "";
  color: #6e7282
}

.cc-icon_question.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_question:before {
  content: "";
  color: #6e7282
}

.cc-icon_receive-coin.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_receive-coin:before {
  content: "";
  color: #6e7282
}

.cc-icon_report.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_report:before {
  content: "";
  color: #6e7282
}

.cc-icon_search.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_search:before {
  content: "";
  color: #6e7282
}

.cc-icon_security.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_security:before {
  content: "";
  color: #6e7282
}

.cc-icon_sell-coin.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_sell-coin:before {
  content: "";
  color: #6e7282
}

.cc-icon_send-coin.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_send-coin:before {
  content: "";
  color: #6e7282
}

.cc-icon_setting.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_setting:before {
  content: "";
  color: #6e7282
}

.cc-icon_shopping.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_shopping:before {
  content: "";
  color: #6e7282
}

.cc-icon_show-all.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_show_all:before {
  content: "";
  color: #6e7282
}

.cc-icon_speaker.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_speaker:before {
  content: "";
  color: #6e7282
}

.cc-icon_tradeview.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_tradeview:before {
  content: "";
  color: #6e7282
}

.cc-icon_transfer.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_transfer:before {
  content: "";
  color: #6e7282
}

.cc-icon_wallet.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_wallet:before {
  content: "";
  color: #6e7282
}

.cc-icon_wrench.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_wrench:before {
  content: "";
  color: #6e7282
}

.cc-icon_otc.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_otc:before {
  content: "";
  color: #6e7282
}

.cc-icon_gas.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_gas:before {
  content: "";
  color: #6e7282
}

.cc-icon_reserves.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_reserves:before {
  content: "";
  color: #6e7282
}

.cc-icon_nft.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_nft:before {
  content: "";
  color: #6e7282
}

.cc-icon_ieo.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_ieo:before {
  content: "";
  color: #6e7282
}

.cc-icon_iam_user.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_iam_user:before {
  content: "";
  color: #6e7282
}

.cc-icon_iam_exchange.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_iam_exchange:before {
  content: "";
  color: #6e7282
}

.cc-icon_trading_settings.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon_trading_settings:before {
  content: "";
  color: #6e7282
}

.cc-icon_passkey:before {
  content: "";
  color: #6e7282
}

.cc-icon_passkey.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon-staking.selected:before {
  content: "";
  color: #50b8e4
}

.cc-icon-staking:before {
  content: "";
  color: #6e7282
}

.gradient01 {
  background: #50dcdc;
  background: -webkit-linear-gradient(-45deg, #50dcdc 0%, #50ffbe 100%);
  background: -webkit-linear-gradient(315deg, #50dcdc 0%, #50ffbe 100%);
  background: linear-gradient(135deg, #50dcdc 0%, #50ffbe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#50dcdc', endColorstr='#50ffbe', GradientType=1)
}

.gradient02 {
  background: #ffca03;
  background: -webkit-linear-gradient(-45deg, #ffca03 0%, #ff5001 100%);
  background: -webkit-linear-gradient(315deg, #ffca03 0%, #ff5001 100%);
  background: linear-gradient(135deg, #ffca03 0%, #ff5001 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffca03', endColorstr='#ff5001', GradientType=1);
  box-shadow: 0 3px 0 #641F00;
  border: none;
  color: #ffffff;
  font-weight: bold;
  box-shadow: none
}

.gradient03 {
  background: #d8f100;
  background: -webkit-linear-gradient(-45deg, #d8f100 0%, #21b000 100%);
  background: -webkit-linear-gradient(315deg, #d8f100 0%, #21b000 100%);
  background: linear-gradient(135deg, #d8f100 0%, #21b000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#d8f100', endColorstr='#21b000', GradientType=1)
}

.lending-lp {
  background: #ffffff
}

.lending-lp a {
  text-decoration: none
}

.lending-lp a:hover {
  opacity: 0.6
}

.lending-lp a.link {
  color: #2980B9
}

.lending-lp h1, .lending-lp h2, .lending-lp h3, .lending-lp h4, .lending-lp h5, .lending-lp h6 {
  font-weight: 200
}

.lending-lp figure {
  margin: 0;
  padding: 0
}

.lending-lp img {
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: block
}

.lending-lp p {
  line-height: 1.5rem;
  margin-bottom: 10px
}

.lending-lp p:last-of-type {
  margin: 0
}

.lending-lp form p {
  line-height: inherit
}

.lending-lp section {
  display: block;
  padding: 50px 0
}

.lending-lp .left {
  float: left
}

.lending-lp .right {
  float: right
}

.lending-lp .clear {
  clear: both
}

.lending-lp .arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto
}

.lending-lp .arrow_contents {
  display: inline-block;
  margin-left: 5px
}

.lending-lp .skew-wrapper {
  width: 100%;
  box-sizing: border-box;
  background: rgba(9, 184, 215, 0.6);
  color: #ffffff;
  text-align: center;
  padding: 50px 0 90px 0;
  position: relative;
  top: 20px
}

.lending-lp .skew-wrapper .icon {
  width: 70px;
  display: inline-block;
  margin-bottom: 20px
}

.lending-lp .skew-wrapper .skew-text {
  width: 100%;
  box-sizing: border-box;
  border-left: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
  padding: 0 30px
}

.lending-lp .skew-wrapper .skew-text h3 {
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 30px
}

.lending-lp .skew-wrapper .skew-text p {
  text-align: left
}

.lending-lp .skew-wrapper .skew-text .center {
  text-align: center
}

.lending-lp .skew1 {
  width: 100%;
  box-sizing: border-box;
  -webkit-transform: skew(0deg, -3deg);
  -ms-transform: skew(0deg, -3deg);
  transform: skew(0deg, -3deg);
  margin: 120px auto
}

.lending-lp .skew1:last-of-type {
  margin: 120px auto 40px auto
}

.lending-lp .skew1-contents {
  width: 840px;
  box-sizing: border-box;
  -webkit-transform: skew(0deg, 3deg);
  -ms-transform: skew(0deg, 3deg);
  transform: skew(0deg, 3deg);
  margin: 0 auto
}

.lending-lp .skew2 {
  width: 100%;
  box-sizing: border-box;
  -webkit-transform: skew(0deg, 3deg);
  -ms-transform: skew(0deg, 3deg);
  transform: skew(0deg, 3deg);
  margin: 120px auto
}

.lending-lp .skew2-contents {
  width: 840px;
  box-sizing: border-box;
  -webkit-transform: skew(0deg, -3deg);
  -ms-transform: skew(0deg, -3deg);
  transform: skew(0deg, -3deg);
  margin: 0 auto
}

.lending-lp .button-wrapper {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 50px
}

.lending-lp .button-wrapper .app-button {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
  padding: 15px 30px;
  background: #09B8D7;
  box-shadow: 0 4px 0 #006779;
  border-radius: 50px
}

.lending-lp .button-wrapper .app-button:active {
  margin: 4px 0 -4px 0;
  box-shadow: none
}

.lending-lp .button-wrapper .app-button:hover {
  opacity: 0.7
}

.lending-lp .create-user {
  width: 640px;
  margin: 20px auto;
  overflow: hidden
}

.lending-lp .create-user .area-register-login {
  background: rgba(255, 255, 255, 0.4);
  padding: 30px;
  max-width: none;
  width: 100%;
  box-sizing: border-box
}

.lending-lp .create-user .area-register-login.bottom {
  background-color: #ccf0f6
}

.lending-lp .create-user .area-register-login .area-columns {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start
}

.lending-lp .create-user .area-register-login .area-columns .register {
  color: #fff;
  background: #86c599;
  border-radius: .5rem;
  border: none;
  padding: .8rem 1.4rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 1rem;
  letter-spacing: .05rem;
  width: 300px;
  display: inline-block;
  text-align: center
}

.lending-lp .create-user .area-register-login .area-columns .login {
  color: #86c599
}

.lending-lp .create-user .form {
  background: rgba(255, 255, 255, 0.4);
  padding: 30px;
  max-width: none;
  width: 100%;
  box-sizing: border-box
}

.lending-lp .create-user .form h2 {
  font-weight: bold
}

.lending-lp .create-user .form #email, .lending-lp .create-user .form #password {
  width: 48%;
  display: inline-block;
  border: none;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  border-radius: 50px
}

.lending-lp .create-user .form .lending-create {
  background: #ffca03;
  background: -webkit-linear-gradient(-45deg, #ffca03 0%, #ff5001 100%);
  background: -webkit-linear-gradient(315deg, #ffca03 0%, #ff5001 100%);
  background: linear-gradient(135deg, #ffca03 0%, #ff5001 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffca03', endColorstr='#ff5001', GradientType=1);
  box-shadow: 0 3px 0 #641F00;
  border: none;
  color: #ffffff;
  font-weight: bold;
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: bold;
  outline: none
}

.lending-lp .create-user .form .lending-create:active {
  box-shadow: none;
  margin-top: 3px;
  margin-bottom: -3px
}

.lending-lp .create-user .form .lending-create:hover {
  opacity: 0.6
}

.lending-lp .create-user .form .lending-create:disabled {
  opacity: 0.5
}

.lending-lp main {
  width: 100%;
  box-sizing: border-box;
  display: block;
  position: relative;
  //background-image: url('@assets/navpage/lending_top.jpg');
  background-image: url("./../../assets/navpage/lending_top.jpg");
  background-size: 100%;
  color: #ffffff
}

.lending-lp main .main_wrapper {
  width: 800px;
  box-sizing: border-box;
  display: table;
  margin: 0 auto;
  height: 100vh;
  padding: 120px 0;
  text-align: center;
  overflow: auto;
  height: 80vh;
  padding: 120px 0 0
}

@media all and (max-width: 799px) {
  .lending-lp main .main_wrapper {
    width: 95%
  }
}

@media all and (max-width: 599px) {
  .lending-lp main .main_wrapper {
    position: static;
    height: auto;
    padding: 60px 0
  }
}

.lending-lp main .main_wrapper .main_container {
  width: 100%;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  position: relative
}

.lending-lp main .main_wrapper .main_container .maximum_wrapper {
  width: 450px;
  margin: 0 auto 8px auto;
  text-align: right
}

.lending-lp main .main_wrapper .main_container .maximum_wrapper .maximum_rate {
  width: 160px;
  background-image: url('./../../assets/navpage/maximum_01.svg') left bottom no-repeat, url('./../../assets/navpage/maximum_02.svg') right bottom no-repeat;
  background-size: 38px, 38px;
  text-align: center;
  display: inline-block;
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg)
}

.lending-lp main .main_wrapper .main_container .maximum_wrapper .maximum_rate span {
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 5px
}

.lending-lp main .main_wrapper .main_container .recaptcha_container {
  display: inline-block;
  margin-bottom: 20px
}

@media all and (max-width: 340px) {
  .lending-lp main .main_wrapper .main_container .recaptcha_container div, .lending-lp main .main_wrapper .main_container .recaptcha_container iframe {
    width: 100% !important;
    box-sizing: border-box;
    text-align: left
  }
}

.lending-lp main .main_wrapper .main_container h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.3
}

.lending-lp .howtouse-wrapper {
  width: 100%;
  box-sizing: border-box
}

.lending-lp .howtouse-wrapper .howtouse-about {
  width: 840px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  margin-bottom: -40px
}

.lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-title {
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 3px solid #333333
}

.lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-title h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 5px
}

.lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-text {
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  margin-top: 20px
}

.lending-lp .howtouse-wrapper .howtouse-contents01 {
  background-image: url('./../../assets/navpage/lending_howbg01.jpg');
  background-size: 100%;
}

.lending-lp .howtouse-wrapper .howtouse-contents02 {
  background-image: url('./../../assets/navpage/lending_howbg02.jpg');
  background-size: 100%;
}

.lending-lp .howtouse-wrapper .howtouse-contents03 {
  background-image: url('./../../assets/navpage/lending_howbg03.jpg');
  background-size: cover
}

.lending-lp .about-wrapper {
  width: 840px;
  margin: 0 auto
}

.lending-lp .about-wrapper .about-container {
  width: 100%;
  box-sizing: border-box
}

.lending-lp .about-wrapper .about-container h3 {
  box-sizing: border-box;
  padding: 10px;
  font-size: 1.5rem;
  border-left: 3px solid #333333;
  border-bottom: 3px solid #333333
}

.lending-lp .about-wrapper .about-container ul {
  box-sizing: border-box;
  border-right: 3px solid #333333;
  border-bottom: 3px solid #333333;
  margin-bottom: 60px;
  line-height: 1.5;
  background-image: url('./../../assets/navpage/try.svg') right bottom no-repeat;
  background-size: 25px
}

.lending-lp .about-wrapper .about-container ul li {
  box-sizing: border-box;
  padding: 15px
}

.lending-lp .about-wrapper .about-container ul:last-of-type {
  margin-bottom: 0
}

.lending-lp .about-wrapper .about-container .decoration {
  list-style-type: disc
}

.lending-lp .about-wrapper .about-container .decoration li {
  padding-left: 0;
  margin-left: 30px
}

.lending-lp .Simulator {
  width: 840px;
  margin: 0 auto
}

.lending-lp .Simulator .Simulator-about {
  width: 100%;
  box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px
}

.lending-lp .Simulator .Simulator-about .Simulator-about-title {
  color: #09B8D7;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 3px solid #09B8D7
}

.lending-lp .Simulator .Simulator-about .Simulator-about-title h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 5px
}

.lending-lp .Simulator .Simulator-wrapper-table {
  width: 840px;
  margin: 0 auto;
  border: 1px solid #939393
}

.lending-lp .Simulator .Simulator-wrapper-table tr {
  background: #D9D9D9;
  margin-bottom: 10px;
  border-bottom: 1px solid #939393
}

.lending-lp .Simulator .Simulator-wrapper-table tr:last-of-type {
  border-bottom: none
}

.lending-lp .Simulator .Simulator-wrapper-table th {
  display: table-cell;
  vertical-align: middle;
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  background: #D9D9D9;
  text-align: left
}

.lending-lp .Simulator .Simulator-wrapper-table td {
  display: table-cell;
  vertical-align: middle;
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff
}

.lending-lp .footer-create {
  width: 840px;
  margin: 0 auto;
  text-align: center
}

.lending-lp .footer-create .create-about {
  width: 100%;
  box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px
}

.lending-lp .footer-create .create-about .Simulator-about-title {
  color: #09B8D7;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 3px solid #09B8D7
}

.lending-lp .footer-create .create-about .Simulator-about-title h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 5px
}

.lending-lp .footer-create .form {
  background: #ccf0f6
}

.lending-lp .footer-create .form .recaptcha_container {
  display: inline-block;
  margin-bottom: 20px
}

@media all and (max-width: 340px) {
  .lending-lp .footer-create .form .recaptcha_container div, .lending-lp .footer-create .form .recaptcha_container iframe {
    width: 100% !important;
    box-sizing: border-box;
    text-align: left
  }
}

@media screen and (max-width: 1200px) {
  .lending-lp .header_wrapper .header_contents {
    width: 95%
  }

  .lending-lp .header_wrapper .header_contents .header_login {
    margin-right: 0
  }

  .lending-lp main .main_wrapper {
    width: 95%
  }
}

@media screen and (max-width: 840px) {
  .lending-lp .skew1-contents, .lending-lp .skew2-contents {
    width: 95%
  }

  .lending-lp .howtouse-wrapper .howtouse-about {
    width: 95%;
    box-sizing: border-box
  }

  .lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-title {
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 3px solid #333333
  }

  .lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-title h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px
  }

  .lending-lp .howtouse-wrapper .howtouse-about .howtouse-about-text {
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin-top: 20px
  }

  .lending-lp .about-wrapper {
    width: 95%
  }

  .lending-lp .Simulator {
    width: 95%
  }

  .lending-lp .Simulator .Simulator-wrapper-table {
    width: 100%;
    box-sizing: border-box
  }

  .lending-lp .footer-create {
    width: 95%
  }
}

@media screen and (max-width: 700px) {
  .lending-lp .left, .lending-lp .right {
    float: none
  }

  .lending-lp .create-user {
    width: 95%
  }

  .lending-lp .create-user .form #email, .lending-lp .create-user .form #password {
    width: 80%;
    margin: 20px auto
  }

  .lending-lp .create-user .form .lending-registration-p {
    width: 100%;
    box-sizing: border-box
  }

  .lending-lp .create-user .form .lending-registration-p input {
    display: inline-block;
    width: auto;
    margin: 0 auto
  }

  .lending-lp .create-user .form .lending-registration-p a {
    text-decoration: underline
  }

  .lending-lp main {
    height: auto
  }

  .lending-lp main .main_wrapper .main_container h1 {
    font-size: 1.5rem
  }
}

@media screen and (max-width: 600px) {
  .lending-lp section {
    padding: 30px 0
  }

  .lending-lp .sp_none {
    display: none
  }

  .lending-lp .pc_none {
    display: block
  }

  .lending-lp .main_logo {
    width: 250px;
    margin: 0 auto;
    padding-top: 100px
  }

  .lending-lp .header_wrapper {
    position: static
  }

  .lending-lp .header_wrapper .header_contents {
    width: 100%;
    margin: 0;
    padding-top: 0;
    position: fixed;
    z-index: 9999;
    top: 0
  }

  .lending-lp .header_wrapper .header_contents .header_login {
    float: none;
    width: 100%;
    box-sizing: border-box;
    display: table
  }

  .lending-lp .header_wrapper .header_contents .header_login .login {
    padding: 15px 0;
    color: #333
  }

  .lending-lp .header_wrapper .header_contents .header_login li {
    width: 50%;
    background: #ffffff
  }

  .lending-lp .header_wrapper .header_contents .header_login li ul {
    border: none
  }

  .lending-lp .header_wrapper .header_contents .header_login li ul li {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    background: #f5f5f5;
    color: #333;
    font-size: 0.9rem;
    display: table
  }

  .lending-lp .header_wrapper .header_contents .header_login li .regist {
    border-radius: 0px;
    padding: 15px 0
  }

  .lending-lp .header_wrapper .header_contents .header_login .more_list {
    width: 100%;
    box-sizing: border-box
  }

  .lending-lp .header_wrapper .header_contents .header_login .more_list .more {
    border-radius: 0px;
    padding: 15px 0
  }

  .lending-lp .header_wrapper .header_contents .header_login .more_list ul li {
    text-align: center
  }

  .lending-lp .header_wrapper .header_contents .header_login .more_list ul li p {
    width: auto
  }

  .lending-lp .skew-wrapper {
    padding: 50px 0;
    top: 0
  }

  .lending-lp .skew-wrapper .skew-text {
    padding: 0 15px;
    border: none
  }

  .lending-lp .skew-wrapper .skew-text h3 {
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: 20px
  }

  .lending-lp .skew1, .lending-lp .skew2 {
    -webkit-transform: skew(0deg, 0deg);
    -ms-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin: 40px auto
  }

  .lending-lp .skew1:last-of-type, .lending-lp .skew2:last-of-type {
    margin: 40px auto
  }

  .lending-lp .skew1-contents, .lending-lp .skew2-contents {
    -webkit-transform: skew(0deg, 0deg);
    -ms-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin: 0 auto
  }

  .lending-lp main .main_wrapper {
    padding: 120px 0
  }

  .lending-lp main .main_wrapper .main_container .maximum_wrapper {
    width: 95%
  }

  .lending-lp .howtouse-wrapper .howtouse-about {
    margin-bottom: 0
  }
}


</style>
