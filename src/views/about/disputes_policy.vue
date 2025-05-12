<template>
  <div class="wrap-view">
    <div class="docs-about docs-disputes rsv-container">
      <h1 class="title"><i class="fa fa-globe"></i>{{ $t('disputesPolicy.title') }}</h1>
      <p>{{ $t('disputesPolicy.content1') }}</p>
      <h2 class="subtitle">{{ $t('disputesPolicy.subtitle1') }}</h2>
      <p>{{ $t('disputesPolicy.content2') }}</p>
      <p>{{ $t('disputesPolicy.content3') }}</p>
      <p>{{ $t('disputesPolicy.content4') }}
        <a class="link" @click="handleClick" target="_blank">{{ $t('disputesPolicy.link1') }}</a>
        {{ $t('disputesPolicy.content5') }}
      </p>
      <h3 class="subsubtitle">{{ $t('disputesPolicy.subtitle2') }}</h3>
      <p class="bold">{{ $t('disputesPolicy.bold1') }}</p>
      <p><a @click="handleClick" class="link">{{ $t('disputesPolicy.link2') }}</a></p>
      <p>{{ $t('disputesPolicy.content6') }}</p>
      <h3 class="subsubtitle">{{ $t('disputesPolicy.subtitle3') }}</h3>
      <p>{{ $t('disputesPolicy.content7') }}</p>
      <p>{{ $t('disputesPolicy.phone1') }}</p>
      <p>{{ $t('disputesPolicy.content8') }}</p>
      <h2 class="subtitle">{{ $t('disputesPolicy.subtitle4') }}</h2>
      <p>{{ $t('disputesPolicy.content9') }}</p>
      <br>
      <p>{{ $t('disputesPolicy.address1') }}</p>
      <p class="big">{{ $t('disputesPolicy.org1') }}</p>
      <p>{{ $t('disputesPolicy.phone2') }}</p>
      <p class="big">{{ $t('disputesPolicy.org2') }}</p>
      <p>{{ $t('disputesPolicy.phone3') }}</p>
      <p class="big">{{ $t('disputesPolicy.org3') }}</p>
      <p>{{ $t('disputesPolicy.phone4') }}</p>
      <br>
      <br>
      <p>{{ $t('disputesPolicy.content10') }}</p>
      <p class="big">{{ $t('disputesPolicy.org4') }}</p>
      <p>{{ $t('disputesPolicy.content11') }}<a class="link" @click="handleClick">{{ $t('disputesPolicy.link3') }}</a></p>
      <p>{{ $t('disputesPolicy.phone5') }}</p>
      <p>{{ $t('disputesPolicy.content12') }}</p>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: {},
  data() {
    return {};
  },
  created() {

  },
  computed: {},
  watch: {},
  async mounted() {

  },
  methods: {

    handleClick() {
      this.$message({ message: this.$t('trade.downApp'), type: "success" });
    }
  },
};
</script>

<style lang="scss" scoped>







.rsv-container{
  width: 1122px;
}
.wrap-view{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

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
  background: linear-gradient(135deg, #50dcdc 0%, #50ffbe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50dcdc', endColorstr='#50ffbe',GradientType=1 )
}

.gradient02 {
  background: #ffca03;
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
  background: linear-gradient(135deg, #d8f100 0%, #21b000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8f100', endColorstr='#21b000',GradientType=1 )
}

.docs-about {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .docs-about {
    padding:20px
  }
}

@media (max-width: 767px) {
  .docs-about {
    padding:10px
  }
}

.docs-about .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .docs-about .title {
    font-size:20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.docs-about .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.docs-about .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.docs-about .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.docs-about .title .svg-icon-menu path {
  fill: #20C2D3
}

.docs-about .warning-message {
  color: #E74C3C
}

.docs-about .text {
  line-height: 25px;
  margin-bottom: 10px
}

.docs-about .bold {
  font-weight: bold
}

.docs-about .big {
  font-size: 18px
}

.docs-about .link {
  color: #2980B9;
  text-decoration: none
}

.docs-about .link:hover {
  color: #34495E
}

.docs-about .link .image:hover {
  opacity: 0.6
}

.docs-about .link.disclosure {
  line-height: 2
}

.docs-about .figure {
  margin-bottom: 30px
}

.docs-about .figure .image {
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  display: block;
  background-color: #EEE
}

.docs-about .figure .caption {
  text-align: center
}

.docs-about .subtitle {
  font-size: 20px;
  margin: 50px 0 20px;
  border-left: 5px solid #20C2D3;
  padding-left: 10px;
  line-height: 30px;
  font-weight: bold;
  color: #444
}

.docs-about .subsubtitle {
  font-size: 17px;
  margin: 50px 0 15px;
  font-weight: bold;
  color: #555
}

.docs-about .code {
  background-color: rgba(0,0,0,0.04);
  padding: 0px 10px;
  font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
  font-size: 13px;
  border: 1px solid #CCC;
  display: inline-block;
  margin-bottom: 2px
}

.docs-about strong {
  font-weight: bold
}

.docs-about .purchase {
  text-align: center
}

.docs-about .purchase .link {
  border: 0;
  background: #ffa031;
  color: white;
  padding: 11px 20px;
  line-height: 18px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  margin: 20px 10px 20px 0;
  font-weight: bold;
  padding: 11px 70px
}

.docs-about .purchase .link:hover {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05))
}

.docs-about .purchase .link.disabled,.docs-about .purchase .link:disabled {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  cursor: default
}

.docs-about .purchase .link:focus {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.docs-about .purchase .link .fa {
  font-size: 1.17em;
  line-height: 20px;
  vertical-align: bottom;
  margin-left: 15px;
  margin-right: 2px
}

.docs-about .table {
  width: 100%
}

.docs-about .table thead:first-child tr:first-child th,.docs-about .table thead:first-child tr:first-child {
  border-top: 0
}

.docs-about .table th,.docs-about .table td {
  padding: 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #DDD;
  font-size: 14px
}

@media all and (min-width: 768px) {
  .docs-about {
    margin-top:0px
  }
}

.docs-disputes {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .docs-disputes {
    padding:20px
  }
}

@media (max-width: 767px) {
  .docs-disputes {
    padding:10px
  }
}

.docs-disputes p {
  line-height: 25px;
  margin-bottom: 10px
}

.docs-fast-bitcoin-deposit {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .docs-fast-bitcoin-deposit {
    padding:20px
  }
}

@media (max-width: 767px) {
  .docs-fast-bitcoin-deposit {
    padding:10px
  }
}

.docs-fast-bitcoin-deposit .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .docs-fast-bitcoin-deposit .title {
    font-size:20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.docs-fast-bitcoin-deposit .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.docs-fast-bitcoin-deposit .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.docs-fast-bitcoin-deposit .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.docs-fast-bitcoin-deposit .title .svg-icon-menu path {
  fill: #20C2D3
}

.docs-fast-bitcoin-deposit .text {
  line-height: 25px;
  margin-bottom: 10px
}

.docs-fast-bitcoin-deposit .link {
  color: #2980B9;
  text-decoration: none
}

.docs-fast-bitcoin-deposit .link:hover {
  color: #34495E
}

.docs-fast-bitcoin-deposit .link .image:hover {
  opacity: 0.6
}

.docs-fast-bitcoin-deposit .figure {
  margin-bottom: 30px
}

.docs-fast-bitcoin-deposit .figure .image {
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  display: block;
  background-color: #EEE
}

.docs-fast-bitcoin-deposit .figure .caption {
  text-align: center
}

.docs-fast-bitcoin-deposit .subtitle {
  font-size: 20px;
  margin: 50px 0 20px;
  border-left: 5px solid #20C2D3;
  padding-left: 10px;
  line-height: 30px;
  font-weight: bold;
  color: #444
}

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
  background: linear-gradient(135deg, #50dcdc 0%, #50ffbe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50dcdc', endColorstr='#50ffbe',GradientType=1 )
}

.gradient02 {
  background: #ffca03;
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
  background: linear-gradient(135deg, #d8f100 0%, #21b000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8f100', endColorstr='#21b000',GradientType=1 )
}

.docs-howto {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .docs-howto {
    padding:20px
  }
}

@media (max-width: 767px) {
  .docs-howto {
    padding:10px
  }
}

.docs-howto .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .docs-howto .title {
    font-size:20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.docs-howto .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.docs-howto .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.docs-howto .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.docs-howto .title .svg-icon-menu path {
  fill: #20C2D3
}

.docs-howto .text {
  line-height: 25px;
  margin-bottom: 10px
}

.docs-howto .link {
  color: #2980B9;
  text-decoration: none
}

.docs-howto .link:hover {
  color: #34495E
}

.docs-howto .link .image:hover {
  opacity: 0.6
}

.docs-howto .contents {
  padding-left: 20px
}

.docs-howto .contents .contents-list {
  margin-bottom: 10px;
  list-style-type: disc
}

.docs-howto .figure {
  margin-bottom: 30px
}

.docs-howto .figure .image {
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  display: block;
  background-color: #EEE
}

.docs-howto .figure .caption {
  text-align: center
}

.docs-howto .subtitle {
  font-size: 20px;
  margin: 50px 0 20px;
  border-left: 5px solid #20C2D3;
  padding-left: 10px;
  line-height: 30px;
  font-weight: bold;
  color: #444
}

.docs-howto .subsubtitle {
  font-size: 17px;
  margin: 50px 0 15px;
  font-weight: bold;
  color: #555
}

.docs-howto .code {
  background-color: rgba(0,0,0,0.04);
  padding: 0px 10px;
  font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
  font-size: 13px;
  border: 1px solid #CCC;
  display: inline-block;
  margin-bottom: 2px
}

.docs-howto strong {
  font-weight: bold
}

.docs-howto .purchase {
  text-align: center
}

.docs-howto .purchase .link {
  border: 0;
  background: #ffa031;
  color: white;
  padding: 11px 20px;
  line-height: 18px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  margin: 20px 10px 20px 0;
  font-weight: bold;
  padding: 11px 70px
}

.docs-howto .purchase .link:hover {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05))
}

.docs-howto .purchase .link.disabled,.docs-howto .purchase .link:disabled {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  cursor: default
}

.docs-howto .purchase .link:focus {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.docs-howto .purchase .link .fa {
  font-size: 1.17em;
  line-height: 20px;
  vertical-align: bottom;
  margin-left: 15px;
  margin-right: 2px
}

.docs2-layout .docs2-layout-inner {
  background-color: white;
  width: 1120px;
  margin: 0 auto
}

@media all and (max-width: 1200px) {
  .docs2-layout .docs2-layout-inner {
    width:960px
  }
}

@media all and (max-width: 979px) {
  .docs2-layout .docs2-layout-inner {
    width:auto
  }
}

.docs2-layout .docs2-layout-inner .docs2-layout-inner-left {
  float: left;
  width: 840px
}

@media all and (max-width: 1200px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-left {
    width:720px
  }
}

@media all and (max-width: 979px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-left {
    width:auto
  }
}

.docs2-layout .docs2-layout-inner .docs2-layout-inner-left-full-width {
  float: left;
  width: 100%
}

@media all and (max-width: 1200px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-left-full-width {
    width:720px
  }
}

@media all and (max-width: 979px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-left-full-width {
    width:auto
  }
}

.docs2-layout .docs2-layout-inner .docs2-layout-inner-right {
  float: right;
  width: 270px;
  margin-top: 60px
}

@media all and (max-width: 1200px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-right {
    width:230px
  }
}

@media all and (max-width: 979px) {
  .docs2-layout .docs2-layout-inner .docs2-layout-inner-right {
    display:none
  }
}

.docs2-layout .docs2-layout-inner .docs2-layout-inner-right .menu {
  margin: 30px 30px 20px;
  font-weight: bold;
  display: block
}

.docs2-layout .docs2-layout-inner .docs2-layout-inner-right .menu:hover {
  color: #20C2D3
}

.docs2-layout .docs2-layout-inner .clear {
  clear: both
}

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
  background: linear-gradient(135deg, #50dcdc 0%, #50ffbe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50dcdc', endColorstr='#50ffbe',GradientType=1 )
}

.gradient02 {
  background: #ffca03;
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
  background: linear-gradient(135deg, #d8f100 0%, #21b000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8f100', endColorstr='#21b000',GradientType=1 )
}

.doc-ex-api {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
}

.doc-ex-api .page-wrapper {
  margin-left: 300px
}

.doc-ex-api .left-menu {
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  width: 300px;
  background-color: white;
  overflow-y: auto;
  padding-bottom: 30px
}

.doc-ex-api .left-menu .spacer {
  border-top: 1px solid #DDD;
  padding-top: 5px;
  margin: 5px 20px 0
}

.doc-ex-api .left-menu .menu-item {
  display: block;
  line-height: 35px;
  padding-left: 20px
}

.doc-ex-api .left-menu .menu-item.bold {
  font-weight: bold
}

.doc-ex-api .left-menu .menu-item.selected {
  color: #1ABC9C;
  font-weight: bold
}

.doc-ex-api .left-menu .menu-item.sub {
  padding-left: 40px
}

.doc-ex-api .left-menu .menu-item:hover {
  color: #1ABC9C
}

.doc-ex-api .content h1 {
  font-size: 30px;
  padding: 80px 25px 30px;
  max-width: 700px;
  margin: 0 auto
}

.doc-ex-api .content h2 {
  font-size: 20px;
  margin: 40px auto 10px;
  color: #444;
  max-width: 700px;
  padding: 0 25px
}

.doc-ex-api .content h3 {
  font-weight: bold;
  margin: 20px auto 10px;
  color: #444;
  max-width: 700px;
  padding: 0 25px
}

.doc-ex-api .content .text {
  padding: 0 25px;
  line-height: 23px;
  max-width: 700px;
  margin: 0 auto 10px
}

.doc-ex-api .content .section {
  border-top: 3px solid white;
  padding-bottom: 30px
}

.doc-ex-api .content .section:first-child {
  border-top: none
}

.doc-ex-api .content .link {
  color: #2980B9;
  text-decoration: none
}

.doc-ex-api .content .link:hover {
  color: #34495E
}

.doc-ex-api .content code {
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif
}

.doc-ex-api .content code.url {
  font-weight: bold;
  color: #34495E
}

.doc-ex-api .content .bash {
  margin: 0 auto 10px;
  max-width: 700px;
  background-color: rgba(0,0,0,0.05);
  padding: 0.5em;
  box-sizing: border-box;
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  line-height: 1.5;
  font-size: 13px
}

.doc-ex-api .content .json-code {
  margin: 0 auto 10px;
  max-width: 700px;
  background-color: rgba(0,0,0,0.05);
  padding: 20px;
  box-sizing: border-box;
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  line-height: 1.5;
  font-size: 13px
}

.doc-ex-api .content .json-code .number {
  color: #16A085
}

.doc-ex-api .content .json-code .string {
  color: #E67E22
}

.doc-ex-api .content ul {
  margin: 0 auto 10px;
  max-width: 700px;
  padding: 0 25px
}

.doc-ex-api .content ul li {
  line-height: 23px
}

.doc-ex-api .content ul li .key {
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  font-weight: bold;
  margin-right: 10px;
  font-size: 14px;
  color: #34495E
}

.doc-ex-api .content ul li .star {
  color: #E74C3C;
  font-size: 11px;
  margin-right: 5px;
  vertical-align: top
}

.doc-ex-api .content strong {
  font-weight: bold
}

.doc-ex-api .content .code-sample {
  margin: 0 auto 10px;
  max-width: 700px;
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  background-color: rgba(0,0,0,0.05);
  padding: 20px;
  box-sizing: border-box;
  word-break: break-all;
  white-space: pre-wrap
}

.doc-ex-api .content .inline-code {
  font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  font-size: 14px;
  color: #34495E;
  font-weight: bold
}

.doc-ex-api .content .footer .menus {
  padding: 40px 20px 0
}

.doc-ex-api .content .footer .rsv-container {
  max-width: 100%;
  padding: 40px 20px 0;
  box-sizing: border-box
}

.doc-ex-api .content .footer .padding-top {
  padding-top: 20px
}

@media all and (max-width: 1307px) {
  .doc-ex-api .content .footer .menu {
    width:100%;
    margin-left: 0;
    margin-bottom: 20px
  }
}

.doc-ex-api .content .footer .menu ul {
  margin: 0;
  padding: 0
}

@media all and (max-width: 1307px) {
  .doc-ex-api .content .footer .menu2 {
    width:100%;
    text-align: center;
    margin-bottom: 15px
  }
}

.doc-ex-api .content .figure {
  margin-bottom: 30px
}

.doc-ex-api .content .figure .image {
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  display: block;
  background-color: #EEE
}

.doc-ex-api .content .figure .caption {
  text-align: center
}

.doc-ex-api.top-margin {
  margin-top: 70px
}

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
  background: linear-gradient(135deg, #50dcdc 0%, #50ffbe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50dcdc', endColorstr='#50ffbe',GradientType=1 )
}

.gradient02 {
  background: #ffca03;
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
  background: linear-gradient(135deg, #d8f100 0%, #21b000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8f100', endColorstr='#21b000',GradientType=1 )
}

.docs-transfer {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .docs-transfer {
    padding:20px
  }
}

@media (max-width: 767px) {
  .docs-transfer {
    padding:10px
  }
}

.docs-transfer .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .docs-transfer .title {
    font-size:20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.docs-transfer .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.docs-transfer .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.docs-transfer .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.docs-transfer .title .svg-icon-menu path {
  fill: #20C2D3
}

.docs-transfer .subtitle {
  font-size: 20px;
  margin: 50px 0 20px;
  border-left: 5px solid #20C2D3;
  padding-left: 10px;
  line-height: 30px;
  font-weight: bold;
  color: #444
}

.docs-transfer .subsubtitle {
  font-size: 17px;
  margin: 50px 0 15px;
  font-weight: bold;
  color: #555
}

.docs-transfer .text {
  line-height: 25px;
  margin-bottom: 10px
}

.docs-transfer .link {
  color: #2980B9;
  text-decoration: none
}

.docs-transfer .link:hover {
  color: #34495E
}

.docs-transfer .link .image:hover {
  opacity: 0.6
}

.docs-transfer .figure {
  margin-bottom: 30px
}

.docs-transfer .figure .image {
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  display: block;
  background-color: #EEE
}

.docs-transfer .figure .caption {
  text-align: center
}

.docs-transfer .purchase {
  text-align: center
}

.docs-transfer .purchase .link {
  border: 0;
  background: #ffa031;
  color: white;
  padding: 11px 20px;
  line-height: 18px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  margin: 30px 10px 20px 0;
  font-weight: bold;
  padding: 11px 70px
}

.docs-transfer .purchase .link:hover {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05))
}

.docs-transfer .purchase .link.disabled,.docs-transfer .purchase .link:disabled {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  cursor: default
}

.docs-transfer .purchase .link:focus {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.docs-transfer .purchase .link .fa {
  font-size: 1.17em;
  line-height: 20px;
  vertical-align: bottom;
  margin-left: 15px;
  margin-right: 2px
}

.docs-transfer .register-section .form-container {
  margin-top: 50px
}

.docs-transfer .register-section .form-container .form {
  background-color: #ECF0F1;
  padding: 30px 40px 50px;
  border-radius: 3px;
  max-width: 400px;
  margin: 0 auto
}

@media all and (max-width: 767px) {
  .docs-transfer .register-section .form-container .form {
    border-width:1px;
    padding-left: 10px;
    padding-right: 10px
  }
}

.docs-transfer .register-section .form-container .form .text {
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center
}

.docs-transfer .register-section .form-container .form .text .fa {
  color: #20C2D3;
  vertical-align: middle;
  font-size: 30px;
  margin-right: 10px
}

.docs-transfer .register-section .form-container .form .facebook {
  border: 0;
  background: #4c66a4;
  color: white;
  padding: 11px 20px;
  line-height: 18px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  box-shadow: 0px 3px 0px 0px #2c3b5e;
  margin-bottom: 30px;
  display: block;
  box-sizing: border-box;
  font-weight: bold;
  padding: 20px 0;
  font-size: 18px
}

.docs-transfer .register-section .form-container .form .facebook:hover {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05))
}

.docs-transfer .register-section .form-container .form .facebook.disabled,.docs-transfer .register-section .form-container .form .facebook:disabled {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  cursor: default
}

.docs-transfer .register-section .form-container .form .facebook:focus {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
  box-shadow: 0 0 3px 3px #8c9eca
}

.docs-transfer .register-section .form-container .form .facebook:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.docs-transfer .register-section .form-container .form .facebook.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .docs-transfer .register-section .form-container .form .facebook {
    font-size:16px
  }
}

.docs-transfer .register-section .form-container .form .facebook .fa-angle-right {
  font-size: 35px;
  position: absolute;
  right: 10px;
  top: 12px
}

.docs-transfer .register-section .form-container .form .facebook .big {
  font-size: 1.2em
}

.docs-transfer .register-section .form-container .form .or {
  text-align: center;
  margin-bottom: 15px
}

.docs-transfer .register-section .form-container .form label {
  margin-bottom: 10px;
  display: inline-block
}

.docs-transfer .register-section .form-container .form input {
  display: block;
  border: 1px solid #CCC;
  margin: 0 auto 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  line-height: 25px
}

.docs-transfer .register-section .form-container .form .create {
  border: 0;
  background: #ffa031;
  color: white;
  padding: 11px 20px;
  line-height: 18px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  box-shadow: 0px 3px 0px 0px #ca6d00;
  margin-top: 20px;
  width: 270px;
  display: block;
  font-weight: bold
}

.docs-transfer .register-section .form-container .form .create:hover {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05))
}

.docs-transfer .register-section .form-container .form .create.disabled,.docs-transfer .register-section .form-container .form .create:disabled {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  cursor: default
}

.docs-transfer .register-section .form-container .form .create:focus {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.docs-transfer .register-section .form-container .form .create:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.docs-transfer .register-section .form-container .form .create.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

.docs-transfer .register-section .form-container .form .create .fa-angle-right {
  font-size: 20px;
  padding-left: 10px;
  vertical-align: bottom
}

.docs-transfer .register-section .form-container .form .link {
  color: #2980B9;
  text-decoration: none;
  display: block;
  margin: 20px 0 auto;
  text-align: center
}

.docs-transfer .register-section .form-container .form .link:hover {
  color: #34495E
}

</style>
