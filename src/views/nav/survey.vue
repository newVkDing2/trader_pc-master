<template>
  <div class="survey_lp_wrapper">
    <main>
      <div class="main_wrapper">
        <section class="main_contents">
          <h1 class="h1">{{ $t('survey.mainTitle') }}<br>{{ $t('survey.mainTitle2') }}<br>{{ $t('survey.mainTitle3') }}</h1>
          <a @click="$router.push({ path: '/user/register' })" class="form">{{ $t('survey.register') }}</a>
        </section>
      </div>
    </main>

    <section>
      <div class="peculiarity_wrapper">
        <h2>{{ $t('survey.features') }}</h2>
        <ul>
          <li>
            <figure><img src="@/assets/navpage/icon_feature_01.svg" alt="peculiarity01"></figure>
            <h4>{{ $t('survey.feature1.title') }}</h4>
            <p>{{ $t('survey.feature1.desc') }}</p>
          </li>
          <li>
            <figure><img src="@/assets/navpage/icon_feature_02.svg" alt="peculiarity02"></figure>
            <h4>{{ $t('survey.feature2.title') }}</h4>
            <p>{{ $t('survey.feature2.desc') }}</p>
          </li>
          <li>
            <figure><img src="@/assets/navpage/icon_feature_03.svg" alt="peculiarity03"></figure>
            <h4>{{ $t('survey.feature3.title') }}</h4>
            <p>{{ $t('survey.feature3.desc') }}</p>
          </li>
          <li>
            <figure><img src="@/assets/navpage/icon_feature_04.svg" alt="peculiarity04"></figure>
            <h4>{{ $t('survey.feature4.title') }}</h4>
            <p>{{ $t('survey.feature4.desc') }}</p>
          </li>
        </ul>
      </div>
    </section>

    <article>
      <section class="quality_area quality contents_wrapper">
        <h2>{{ $t('survey.mechanism') }}</h2>
        <figure>
          <img src="@/assets/navpage/img_description_01.svg" alt="description">
        </figure>
      </section>
    </article>

    <article>
      <section class="flow contents_wrapper">
        <h2>{{ $t('survey.flow') }}</h2>

        <div class="flow_list">
          <h3>{{ $t('survey.flow1.title') }}</h3>
          <div class="flow-div">
            <p>{{ $t('survey.flow1.desc1') }}</p>
            <p>{{ $t('survey.flow1.desc2') }}</p>
          </div>
        </div>
        <div class="flow_list">
          <h3>{{ $t('survey.flow2.title') }}</h3>
          <div class="flow-div">
          </div>
          <a  @click.prevent="handleMacromillRegister">{{ $t('survey.flow2.register') }}</a>
        </div>

        <div class="flow_list">
          <h3>{{ $t('survey.flow3.title') }}</h3>
          <div class="flow-div">
            <p>{{ $t('survey.flow3.desc') }}</p>
          </div>
        </div>

        <div class="flow_list">
          <h3>{{ $t('survey.flow4.title') }}</h3>
          <div class="flow-div">
            <p>{{ $t('survey.flow4.desc') }}</p>
          </div>
        </div>

        <div class="flow_list">
          <h3>{{ $t('survey.flow5.title') }}</h3>
          <div class="flow-div">
            <p>{{ $t('survey.flow5.desc') }}</p>
          </div>
        </div>
      </section>
    </article>

    <article>
      <section class="flow contents_wrapper">
        <h2>{{ $t('survey.exchange') }}</h2>
        <div class="flow_list">
          <h3>{{ $t('survey.exchangeTitle') }}</h3>
          <div class="flow-div">
            <p>{{ $t('survey.exchangeDesc') }}</p>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">

export default {
  components: {

  },
  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },
  watch: {

  },
  async mounted() {

  },
  methods: {
    handleRegister() {
      this.$message({
        message: this.$t('trade.downApp'),
        type: "success",
      });
    },
    handleMacromillRegister() {
      this.$message({
        message: this.$t('trade.downApp'),
        type: "success",
      });
    }
  },
};
</script>

<style lang="scss" scoped>



@font-face {
  font-family: "cc-icon";
  src: url(https://assets.coincheck.com/assets/cc-icon-38da96f578d3e82cc82b5b1e1e24c6b873bcb4d6b9a055abde5a54be60f184eb.eot?d56cq3);
  src: url(https://assets.coincheck.com/assets/cc-icon-38da96f578d3e82cc82b5b1e1e24c6b873bcb4d6b9a055abde5a54be60f184eb.eot?d56cq3#iefix) format("embedded-opentype"),url(https://assets.coincheck.com/assets/cc-icon-cd5c9211a125e6fb9343c0afdb9748974b345c6a896ccd604d13c8dda69b9633.ttf?d56cq3) format("truetype"),url(https://assets.coincheck.com/assets/cc-icon-17ac210e64eb9585b7b9a8201e6f6258956565a8352516a289e9720e3fb61a8c.woff?d56cq3) format("woff"),url(https://assets.coincheck.com/assets/cc-icon-7856374acc547b9ca8fdcb3404c37099cc92fc290737e60e4057e98bac0613e5.svg?d56cq3#cc-icon) format("svg");
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50dcdc', endColorstr='#50ffbe',GradientType=1 )
}

.gradient02 {
  background: #ffca03;
  background: -webkit-linear-gradient(-45deg, #ffca03 0%, #ff5001 100%);
  background: -webkit-linear-gradient(315deg, #ffca03 0%, #ff5001 100%);
  background: linear-gradient(135deg, #ffca03 0%, #ff5001 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffca03', endColorstr='#ff5001',GradientType=1 );
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8f100', endColorstr='#21b000',GradientType=1 )
}

.survey_lp_wrapper {
  color: #12575f;
  line-height: 1.3;
  background: #FFFAE6;
  padding: 0 0 2rem
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper {
    font-size:0.9rem
  }
}

.survey_lp_wrapper h1 {
  font-size: 2.5rem;
  margin-bottom: 10px
}

.survey_lp_wrapper h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem
}

.survey_lp_wrapper p {
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.6
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper p {
    font-size:1rem;
    line-height: 1.5
  }
}

.survey_lp_wrapper strong {
  font-weight: bold;
  font-size: 20px
}

.survey_lp_wrapper img {
  display: block;
  max-width: 100%;
  width: 100%
}

.survey_lp_wrapper article {
  margin: 0 0 12rem
}

.survey_lp_wrapper .contents_wrapper {
  width: 800px;
  box-sizing: border-box;
  margin: 0 auto
}

.survey_lp_wrapper a:hover,.survey_lp_wrapper button:hover {
  opacity: 0.6;
  cursor: pointer
}

.survey_lp_wrapper .back_color {
  background: #fffb96
}

.survey_lp_wrapper .bold {
  font-weight: bold
}

@media all and (max-width: 799px) {
  .survey_lp_wrapper h1 {
    font-size:2rem
  }

  .survey_lp_wrapper h2 {
    font-size: 1.5rem
  }

  .survey_lp_wrapper article {
    padding: 0;
    margin: 0 0 12rem
  }

  .survey_lp_wrapper .contents_wrapper {
    width: 600px
  }

  .survey_lp_wrapper .contents_wrapper h2 {
    margin-bottom: 4rem
  }
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper h1 {
    font-size:1.2rem;
    margin-bottom: 10px
  }

  .survey_lp_wrapper h2 {
    font-size: 1.5rem
  }

  .survey_lp_wrapper .contents_wrapper {
    width: 90%;
    margin: 0 auto
  }
}

.survey_lp_wrapper header {
  width: 100%;
  height: 5rem;
  overflow: auto;
  max-width: 1400px;
  margin: 0 auto
}

.survey_lp_wrapper header .h1 {
  font-size: 1.5rem;
  padding: 1.2rem 1.5rem 1rem;
  margin: 0;
  float: left;
  line-height: 1.85;
  color: #003c3c
}

.survey_lp_wrapper header .h1 .logo {
  float: left
}

.survey_lp_wrapper header .h1 .logo-img {
  height: 2.5rem;
  width: auto;
  margin: 0 1rem 0 0
}

.survey_lp_wrapper header .header_btn {
  float: right;
  line-height: 5rem;
  padding: 0 2rem;
  font-weight: bold;
  font-size: 1rem;
  color: #12575f
}

.survey_lp_wrapper header .header_btn:hover {
  background: #E7EFF0
}

.survey_lp_wrapper header .simulation {
  -webkit-appearance: button;
  background: none;
  border: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #12575f;
  cursor: pointer;
  padding: 0
}

.survey_lp_wrapper header .blank:after {
  content: '';
  background: url(/images/lp/denki/icon_blank.svg) no-repeat center;
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: contain
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper header {
    height:4rem;
    overflow: hidden
  }

  .survey_lp_wrapper header .h1 {
    font-size: 1.25rem;
    height: 4rem;
    padding: 0 1rem
  }

  .survey_lp_wrapper header .h1 .logo-img {
    width: 10rem;
    height: 4rem;
    margin: 0 .5rem 0 0
  }

  .survey_lp_wrapper header .header_btn {
    line-height: 4rem;
    padding: 0 1rem
  }
}

.survey_lp_wrapper main {
  width: 100%;
  box-sizing: border-box;
  display: block;
  text-align: left;
  height: 100vh;
  max-height: 720px;
  background: #FFF5CC
}

.survey_lp_wrapper main .main_wrapper {
  width: 800px;
  box-sizing: border-box;
  display: table;
  margin: 0 auto;
  height: 100vh;
  padding: 120px 0;
  width: 1024px;
  max-height: 720px;
  background: url('./../../assets/navpage/main_img.svg') no-repeat right center;
  background-size: 50%
}

@media all and (max-width: 799px) {
  .survey_lp_wrapper main .main_wrapper {
    width:95%
  }
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper main .main_wrapper {
    position:static;
    height: auto;
    padding: 60px 0
  }
}

.survey_lp_wrapper main .main_wrapper .main_contents {
  width: 100%;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle
}

.survey_lp_wrapper main .main_wrapper .main_contents .h1 {
  font-weight: bold;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  line-height: 1.6
}

.survey_lp_wrapper main .main_wrapper .main_contents .form {
  font-size: 1.2rem;
  display: block;
  width: 30%;
  padding: 15px;
  text-align: center;
  background: #11C1A4;
  color: #fff;
  font-weight: bold;
  border-radius: .5rem
}

@media (max-width: 1024px) {
  .survey_lp_wrapper main {
    max-height:600px
  }

  .survey_lp_wrapper main .main_wrapper {
    padding: 4rem;
    max-height: 600px
  }

  .survey_lp_wrapper main .main_wrapper .main_contents {
    vertical-align: middle
  }
}

@media (max-width: 768px) {
  .survey_lp_wrapper main .main_wrapper {
    background-size:50%;
    padding: 2rem
  }

  .survey_lp_wrapper main .main_wrapper .main_contents .h1 {
    font-size: 1.5rem
  }

  .survey_lp_wrapper main .main_wrapper .main_contents .form {
    width: 40%
  }
}

@media (max-width: 599px) {
  .survey_lp_wrapper main {
    height:inherit;
    max-height: 1000px
  }

  .survey_lp_wrapper main .main_wrapper {
    background-position: 50% 2rem;
    background-size: 90%;
    padding: 95% 2rem 4rem;
    width: 100%
  }

  .survey_lp_wrapper main .main_wrapper .main_contents .h1 {
    font-size: 2rem
  }

  .survey_lp_wrapper main .main_wrapper .main_contents .registration_form_top {
    width: 100%
  }

  .survey_lp_wrapper main .main_wrapper .main_contents .form {
    width: 100%
  }
}

.survey_lp_wrapper .peculiarity_wrapper {
  width: 1200px;
  margin: 6rem auto 12rem;
  text-align: center;
  box-sizing: border-box
}

.survey_lp_wrapper .peculiarity_wrapper ul {
  width: 100%;
  box-sizing: border-box;
  display: table;
  margin: 20px auto 0 auto
}

.survey_lp_wrapper .peculiarity_wrapper ul li {
  width: 25%;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: top;
  padding: 10px 30px;
  text-align: center
}

.survey_lp_wrapper .peculiarity_wrapper ul li figure {
  width: 70%;
  margin: 0 auto
}

.survey_lp_wrapper .peculiarity_wrapper ul li h4 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 1rem
}

@media all and (max-width: 1119px) {
  .survey_lp_wrapper .peculiarity_wrapper {
    width:100%;
    box-sizing: border-box
  }

  .survey_lp_wrapper .peculiarity_wrapper ul {
    width: 100%;
    box-sizing: border-box;
    display: table;
    margin-top: 20px
  }

  .survey_lp_wrapper .peculiarity_wrapper ul li {
    padding: 10px
  }
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper .peculiarity_wrapper {
    margin:6rem auto 12rem
  }

  .survey_lp_wrapper .peculiarity_wrapper ul {
    width: 95%;
    display: block
  }

  .survey_lp_wrapper .peculiarity_wrapper ul li {
    width: 100%;
    box-sizing: border-box;
    display: block;
    padding: 0;
    margin: 0 auto 2rem
  }

  .survey_lp_wrapper .peculiarity_wrapper ul li figure {
    width: 40%
  }
}

.survey_lp_wrapper .quality_area figure {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin: 30px auto;
  width: 80%
}

.survey_lp_wrapper .quality_area p {
  margin: 30px 0
}

.survey_lp_wrapper .quality_area:last-of-type {
  border-bottom: none
}

.survey_lp_wrapper .quality_area .ens {
  width: 50%
}

@media all and (max-width: 599px) {
  .survey_lp_wrapper .quality_area figure {
    width:100%
  }
}

.survey_lp_wrapper .flow .flow_list {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 30px 40px;
  margin: 0 auto 1rem;
  max-width: 560px;
  position: relative;
  border-radius: 1.5rem
}

.survey_lp_wrapper .flow .flow_list h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem
}

.survey_lp_wrapper .flow .flow_list strong {
  font-size: 28px
}

.survey_lp_wrapper .flow .flow_list small {
  font-size: 18px
}

.survey_lp_wrapper .flow .flow_list ul {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #12575f
}

.survey_lp_wrapper .flow .flow_list ul li {
  display: table-cell;
  box-sizing: border-box;
  padding: 15px;
  border-right: 1px solid #12575f;
  vertical-align: middle
}

.survey_lp_wrapper .flow .flow_list ul li a {
  margin-right: 20px;
  text-decoration: underline;
  word-break: keep-all
}

.survey_lp_wrapper .flow .flow_list ul li a:last-of-type {
  margin-right: 0
}

.survey_lp_wrapper .flow .flow_list ul li p {
  margin-bottom: 5px
}

.survey_lp_wrapper .flow .flow_list ul li:first-of-type {
  width: 17%;
  text-align: center
}

.survey_lp_wrapper .flow .flow_list ul li:last-of-type {
  border-right: none
}

.survey_lp_wrapper .flow .flow_list .form {
  margin: 30px auto 0;
  font-size: 1.2rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  background: #11C1A4;
  color: #fff;
  font-weight: bold;
  border-radius: .5rem
}

.survey_lp_wrapper .flow .arrow {
  width: 23px;
  margin: 0 auto
}

@media all and (max-width: 799px) {
  .survey_lp_wrapper .flow .flow_list {
    padding:2rem
  }

  .survey_lp_wrapper .flow .flow_list h3 {
    font-size: 1.2rem
  }

  .survey_lp_wrapper .flow .flow_list .form {
    margin: 20px auto 0;
    font-size: 1rem
  }
}


</style>
