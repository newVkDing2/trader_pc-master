<template>
  <div class="assets_main">
    <section class="reserves_lp_top">
      <div class="contents_area">
        <div class="text_area">
          <h1>{{ $t('nav_reserves.reserves_1') }}<br>
            {{ $t('nav_reserves.reserves_2') }}<br>
            {{ $t('nav_reserves.reserves_3') }}
          </h1>
          <div class="cta_area">
            <a @click="$router.push({ path: '/user/register' })">
              <button>{{ $t('nav_reserves.reserves_4') }}</button>
            </a>
            <a style="cursor: pointer" @click="$router.push({ path: '/user/login' })"><p>{{ $t('nav_reserves.reserves_5') }}</p></a>
          </div>
        </div>
        <div class="image_area">
          <img src="@/assets/navpage/fv_bitcoin.png" alt="ビットコイン">
        </div>
      </div>
    </section>

    <section class="reserves_lp_about">
      <div class="contents_area">
        <h2>{{ $t('nav_reserves.reserves_6') }}</h2>
        <p>
          {{ $t('nav_reserves.reserves_7') }}<span>{{ $t('nav_reserves.reserves_8') }}</span>{{ $t('nav_reserves.reserves_9') }}<br>
          {{ $t('nav_reserves.reserves_10') }}
        </p>
        <ul class="about_list">
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/about01.svg" alt="貯金箱">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_11') }}<br class="sp">{{ $t('nav_reserves.reserves_12') }}</h3>
              <p>{{ $t('nav_reserves.reserves_13') }}
                <br>{{ $t('nav_reserves.reserves_14') }}
                <span>{{ $t('nav_reserves.reserves_15') }}</span>
                {{ $t('nav_reserves.reserves_16') }}
              </p>
            </div>
          </li>
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/about02.svg" alt="貯金箱">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_17') }}
                <br class="sp">{{ $t('nav_reserves.reserves_18') }}</h3>
              <p>{{ $t('nav_reserves.reserves_19') }}
                <br>{{ $t('nav_reserves.reserves_20') }}
                <span>{{ $t('nav_reserves.reserves_21') }}</span>
              </p>
            </div>
          </li>
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/about03.svg" alt="貯金箱">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_22') }}
                <br class="sp">{{ $t('nav_reserves.reserves_23') }}</h3>
              <p>{{ $t('nav_reserves.reserves_24') }}
                <span>{{ $t('nav_reserves.reserves_25') }}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="reserves_lp_simulation">
      <div class="contents_area">
        <h2>{{ $t('nav_reserves.reserves_26') }}</h2>
<!--        <img class="sp title" src="@/assets/navpage/simulation_title_sp.png" alt="BTCとETHで、それぞれ毎月10,000円を1年半積み立てた場合">-->
        <img class="pc" src="@/assets/navpage/simulation_image_pc.jpg" alt="BTCとETHで、それぞれ毎月10,000円を1年半積み立てた場合">
<!--        <img class="sp" src="@/assets/navpage/simulation_image_sp.jpg" alt="BTCとETHで、それぞれ毎月10,000円を1年半積み立てた場合">-->
        <div class="notes">
          <p>{{ $t('nav_reserves.reserves_27') }}</p>
          <p>{{ $t('nav_reserves.reserves_28') }}</p>
          <p>{{ $t('nav_reserves.reserves_29') }}</p>
        </div>
        <div class="cta_area">
          <div>{{ $t('nav_reserves.reserves_30') }}</div>
          <a  @click="$router.push({ path: '/user/register' })">
            <button>{{ $t('nav_reserves.reserves_31') }}</button>
          </a>
          <a style="cursor: pointer" @click="$router.push({ path: '/user/login' })" @click.prevent="showMessage"><p>{{ $t('nav_reserves.reserves_32') }}</p></a>
        </div>
      </div>
    </section>

    <section class="reserves_lp_reason">
      <div class="contents_area">
        <h2>{{ $t('nav_reserves.reserves_33') }}<br class="sp">{{ $t('nav_reserves.reserves_34') }}</h2>
        <p>
          {{ $t('nav_reserves.reserves_35') }}
          <span>{{ $t('nav_reserves.reserves_36') }}</span>
        </p>
        <ul class="reason_list">
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/reason01.svg" alt="リップル、イーサリアム、ビットコインのロゴ">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_37') }}<br>{{ $t('nav_reserves.reserves_38') }}</h3>
              <p>{{ $t('nav_reserves.reserves_39') }}</p>
              <p class="notes">{{ $t('nav_reserves.reserves_40') }}</p>
            </div>
          </li>
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/reason02.svg" alt="口座振替手数料無料">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_4_1') }}<br>{{ $t('nav_reserves.reserves_41') }}</h3>
              <p>{{ $t('nav_reserves.reserves_42') }}</p>
            </div>
          </li>
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/reason03.svg" alt="コインチェック1年半で約32倍に">
            </div>
            <div class="text_area">
              <h3>{{ $t('nav_reserves.reserves_43') }}<br>{{ $t('nav_reserves.reserves_44') }}</h3>
              <p>{{ $t('nav_reserves.reserves_45') }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="reserves_lp_plan">
      <div class="contents_area">
        <h2>{{ $t('nav_reserves.reserves_46') }}</h2>
        <ul class="plan_menu">
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/plan_daily.svg" alt="24時間アイコン">
            </div>
            <div class="text_area">
              <h4><span>{{ $t('nav_reserves.reserves_47') }}</span>{{ $t('nav_reserves.reserves_48') }}</h4>
              <p>{{ $t('nav_reserves.reserves_49') }}</p>
            </div>
          </li>
          <li>
            <div class="image_area">
              <img src="@/assets/navpage/plan_monthly.svg" alt="24時間アイコン">
            </div>
            <div class="text_area">
              <h4><span>{{ $t('nav_reserves.reserves_50') }}</span>{{ $t('nav_reserves.reserves_51') }}</h4>
              <p>{{ $t('nav_reserves.reserves_52') }}</p>
            </div>
          </li>
        </ul>
        <h3>{{ $t('nav_reserves.reserves_53') }}</h3>
        <dl class="plan_overview">
          <dt>{{ $t('nav_reserves.reserves_54') }}</dt>
          <dd>{{ $t('nav_reserves.reserves_55') }}</dd>
          <dt>{{ $t('nav_reserves.reserves_56') }}</dt>
          <dd>BTC, ETH, ETC, LSK, XRP, XEM, LTC, BCH, MONA, XLM, QTUM, BAT, IOST, ENJ, SAND, DOT, CHZ, LINK, MKR, MATIC, APE, AXS, IMX, WBTC, SHIB, AVAX, DOGE
            {{ $t('nav_reserves.reserves_57') }}
            <span>{{ $t('nav_reserves.reserves_58') }}</span></dd>
          <dt>{{ $t('nav_reserves.reserves_59') }}</dt>
          <dd>{{ $t('nav_reserves.reserves_60') }}</dd>
          <dt>{{ $t('nav_reserves.reserves_61') }}</dt>
          <dd>{{ $t('nav_reserves.reserves_62') }}
            <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_63') }}</a>
            {{ $t('nav_reserves.reserves_64') }}</dd>
          <dt>{{ $t('nav_reserves.reserves_65') }}</dt>
          <dd>{{ $t('nav_reserves.reserves_66') }}</dd>
          <dt>{{ $t('nav_reserves.reserves_67') }}</dt>
          <dd>
            {{ $t('nav_reserves.reserves_68') }}<br>
            <span>{{ $t('nav_reserves.reserves_69') }}</span>
          </dd>
          <dt>{{ $t('nav_reserves.reserves_70') }}</dt>
          <dd>
            {{ $t('nav_reserves.reserves_71') }}<br>

            {{ $t('nav_reserves.reserves_72') }}
          </dd>
        </dl>
        <div class="cta_area">
          <div>{{ $t('nav_reserves.reserves_73') }}</div>
          <a @click="$router.push({ path: '/user/register' })">
            <button>{{ $t('nav_reserves.reserves_74') }}</button>
          </a>
          <a style="cursor: pointer" @click="$router.push({ path: '/user/login' })"><p>{{ $t('nav_reserves.reserves_75') }}</p></a>
        </div>
      </div>
    </section>

    <section class="reserves_lp_faq">
      <div class="contents_area">
        <h2>{{ $t('nav_reserves.reserves_76') }}</h2>
        <div class="accordion_list">
          <ul class="accordion_one">
            <li :class="['accordion_header', showLi1? 'open': '']" @click="liClick(1)">
              <p>{{ $t('nav_reserves.reserves_77') }}</p>
              <i></i>
            </li>
            <li ref="liRef" class="accordion_inner" :style="{height: showLi1? '158px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_78') }}</p>
              <ul>
                <li>{{ $t('nav_reserves.reserves_79') }}</li>
                <li>{{ $t('nav_reserves.reserves_80') }}</li>
                <li>{{ $t('nav_reserves.reserves_81') }}</li>
              </ul>
              <p>{{ $t('nav_reserves.reserves_82') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_83') }}</a>
                {{ $t('nav_reserves.reserves_84') }}</p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi2? 'open': '']"  @click="liClick(2)">
              <p>{{ $t('nav_reserves.reserves_85') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi2? '52px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_86') }}</p>
              <p>{{ $t('nav_reserves.reserves_87') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_88') }}</a>
                {{ $t('nav_reserves.reserves_89') }}</p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi3? 'open': '']"  @click="liClick(3)">
              <p>{{ $t('nav_reserves.reserves_90') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi3? '52px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_91') }}</p>
              <p>{{ $t('nav_reserves.reserves_92') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_93') }}</a>
                {{ $t('nav_reserves.reserves_94') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_95') }}</a>
                {{ $t('nav_reserves.reserves_96') }}</p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi4? 'open': '']"  @click="liClick(4)">
              <p>{{ $t('nav_reserves.reserves_97') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi4? '26px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_98') }}</p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi5? 'open': '']"  @click="liClick(5)">
              <p>{{ $t('nav_reserves.reserves_99') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi5? '52px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_100') }}</p>
              <p>{{ $t('nav_reserves.reserves_101') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_102') }}</a>
                {{ $t('nav_reserves.reserves_103') }}</p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi6? 'open': '']"  @click="liClick(6)">
              <p>{{ $t('nav_reserves.reserves_104') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi6? '52px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_105') }}<br>
                <span>{{ $t('nav_reserves.reserves_106') }}</span></p>
            </li>
          </ul>
          <ul class="accordion_one">
            <li class="accordion_header" :class="['accordion_header', showLi7? 'open': '']"  @click="liClick(7)">
              <p>{{ $t('nav_reserves.reserves_107') }}</p>
              <i></i>
            </li>
            <li class="accordion_inner" :style="{height: showLi7? '52px': '0px'}">
              <p>{{ $t('nav_reserves.reserves_108') }}</p>
              <p>{{ $t('nav_reserves.reserves_109') }}
                <a @click.prevent="showMessage">{{ $t('nav_reserves.reserves_110') }}</a>
                {{ $t('nav_reserves.reserves_111') }}</p>
            </li>
          </ul>
        </div>
        <div class="helpcenter">
          <p>{{ $t('nav_reserves.reserves_112') }}</p>
          <a @click.prevent="showMessage">
            <button>{{ $t('nav_reserves.reserves_113') }}</button>
          </a>
        </div>
      </div>
    </section>

    <section class="reserves_lp_attention">
      <div class="contents_area">
        <div class="attention_box">
          <p class="title">{{ $t('nav_reserves.reserves_114') }}</p>
          <p class="text">
            {{ $t('nav_reserves.reserves_115') }}<br>
            {{ $t('nav_reserves.reserves_116') }}<br>
            {{ $t('nav_reserves.reserves_117') }}<br>
            {{ $t('nav_reserves.reserves_118') }}
          </p>
        </div>
        <div class="notes">
          {{ $t('nav_reserves.reserves_119') }}<br>
          {{ $t('nav_reserves.reserves_120') }}<br>
          {{ $t('nav_reserves.reserves_121') }}<br>
          <br>
          {{ $t('nav_reserves.reserves_122') }}<br>
          {{ $t('nav_reserves.reserves_123') }}<br>
          {{ $t('nav_reserves.reserves_124') }}<br>
          {{ $t('nav_reserves.reserves_125') }}<br>
          {{ $t('nav_reserves.reserves_126') }}<br>
          {{ $t('nav_reserves.reserves_127') }}<br>
          {{ $t('nav_reserves.reserves_128') }}<br>

          {{ $t('nav_reserves.reserves_129') }}<br>
          <br>
          <b>{{ $t('nav_reserves.reserves_130') }}</b><br>
          <a @click.prevent="showMessage">https://coincheckusa.com/ja/info/help_contact</a><br>
          <br>
          <b>{{ $t('nav_reserves.reserves_131') }}</b><br>
          <a @click.prevent="showMessage">https://coincheckusa.com/ja/info/fee</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      showLi1: false,
      showLi2: false,
      showLi3: false,
      showLi4: false,
      showLi5: false,
      showLi6: false,
      showLi7: false,
      showLi8: false,
      liHeight: '0',
      liRef: null
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
    showMessage() {
      this.$message({
        message: this.$t('trade.downApp'),
        type: "success",
      });
    },
    liClick(index) {
      // switch (index) {
      //   case 1:
      //     return this.showLi1 = !this.showLi1
      // }
      for (let i = 1; i < 9; i++) {
        if (i !== index) {
          this[`showLi${i}`] = false
        }
      }
      this[`showLi${index}`] = !this[`showLi${index}`]
    }
  },
};
</script>

<style lang="scss" scoped>

section.reserves_lp_top{
  height: 650px;
  background-color: #F8FFFD;
  background-image: url('/assets/navpage/top_bg_pc.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 100%;
}
section div.contents_area{
  margin: 0 auto;
  width: 960px;
  height: 100%;
}
section.reserves_lp_top div.contents_area{
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
section.reserves_lp_top div.contents_area div.text_area{
  width: 50%;
}
section.reserves_lp_top div.contents_area div.text_area h1{
  font-size: 56px;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: 0.1rem;
}
section.reserves_lp_top div.contents_area div.cta_area{
  text-align: left;
  margin: 4rem 0 0;
}
section.reserves_lp_top div.contents_area div.text_area button{
  font-size: 24px;
  padding: 1rem 5rem;
  margin-top: 1rem;
}
div.cta_area button{
  background: -webkit-linear-gradient(198.84deg, #2CD9BA 22.56%, #0DCB91 67.91%);
  background: linear-gradient(251.16deg, #2CD9BA 22.56%, #0DCB91 67.91%);
  color: #FFFFFF;
  font-weight: 400;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 60px;
  padding: 1rem 3.5rem;
  margin: 2.5rem 0 1rem;
  -webkit-transition: .3s;
  transition: .3s;
}
section.reserves_lp_top div.contents_area div.cta_area p{
  text-align: left;
  margin-left: 3.5rem;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-decoration-line: underline;
}
section.reserves_lp_top div.contents_area div.image_area{
  width: 50%;
}
section.reserves_lp_top div.contents_area div.image_area img{
  width: 100%;
  max-width: 100%;
}

section.reserves_lp_about ul.about_list{
  list-style: none;
}

section.reserves_lp_about{
  padding: 4rem 0;
  background-color: #E4F9F2;
  div.contents_area{
    margin: 0 auto;
    width: 960px;
    height: 100%;
  }
  h2{
    position: relative;
    color: #09BA85;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 3rem;
  }
  h2::after{
    content: '';
    width: 64px;
    height: 6px;
    display: inline-block;
    background-color: #09BA85;
    border-radius: 5px;
    position: absolute;
    bottom: -15px;
    left: calc(50% - 30px);
  }
  p{
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.05em;
    text-align: center;
  }
  p span{
    color: #09BA85;
  }
  h3{
    font-size: 20px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0.05em;
    margin-bottom: 0.7rem;
  }
}
section.reserves_lp_about ul.about_list li{
  background-color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  padding: 2.5rem 2rem;
  margin: 2rem 0;
}
section.reserves_lp_about ul.about_list li div.image_area{
  width: 20%;
  text-align: center;
}
section.reserves_lp_about ul.about_list li div.text_area{
  width: 80%;
}
section.reserves_lp_about ul.about_list li div.text_area p{
  font-weight: 400;
  text-align: justify;
}


h2{
  position: relative;
  color: #09BA85;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 3rem;
}
h2::after{
  content: '';
  width: 64px;
  height: 6px;
  display: inline-block;
  background-color: #09BA85;
  border-radius: 5px;
  position: absolute;
  bottom: -15px;
  left: calc(50% - 30px);
}
p{
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.05em;
  text-align: center;
}
p span{
  color: #09BA85;
}
img{
  max-width: 100%;
}

section.reserves_lp_simulation{
  padding: 4rem 0;
  background-color: #F8F9FB;
}
section div.contents_area{
  margin: 0 auto;
  width: 960px;
  height: 100%;
}
h2{
  position: relative;
  color: #09BA85;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 3rem;
}
section.reserves_lp_simulation img.title{
  margin: 0 auto;
  width: 95%;
  margin-bottom: 2rem;
}
section.reserves_lp_simulation img{
  width: 100%;
}
section.reserves_lp_simulation img{
  width: 100%;
}
section.reserves_lp_simulation div.notes{
  margin: 1rem 0;
}
section div.contents_area div.cta_area{
  text-align: center;
  margin: 4rem 0 0;
}
section.reserves_lp_simulation div.notes p{
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-align: left;
  margin-bottom: 0.5rem;
}
section.reserves_lp_simulation div.notes p:last-child{
  margin-bottom: 0;
}
section div.contents_area div.cta_area{
  text-align: center;
  margin: 4rem 0 0;
}
section div.contents_area div.cta_area div{
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #09BA85;
}
section div.contents_area div.cta_area p{
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-left: 0;
  text-align: center;
  text-decoration-line: underline;
}
//------------------------











* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch
}

.pc {
  display: block
}

@media (max-width: 960px) {
  .pc {
    display:block
  }
}

@media (max-width: 480px) {
  .pc {
    display:none
  }
}

.sp {
  display: none
}

@media (max-width: 960px) {
  .sp {
    display:none
  }
}

@media (max-width: 480px) {
  .sp {
    display:block
  }
}

a {
  color: inherit;
  text-decoration: none
}

body {
  margin: 0 auto;
  color: #194035;
  background-color: #F8F9FB;
  font-family: 'Hiragino Kaku Gothic Pro',"メイリオ",Meiryo,"ＭＳ Ｐゴシック",sans-serif
}

div.cta_area button {
  background: -webkit-linear-gradient(198.84deg, #2CD9BA 22.56%, #0DCB91 67.91%);
  background: linear-gradient(251.16deg, #2CD9BA 22.56%, #0DCB91 67.91%);
  color: #FFFFFF;
  font-weight: 400;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 60px;
  padding: 1rem 3.5rem;
  margin: 2.5rem 0 1rem;
  -webkit-transition: .3s;
  transition: .3s
}

div.cta_area button:hover {
  opacity: 0.7
}

div.cta_area p {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-align: left;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  margin-left: 2.2rem
}

@media (max-width: 960px) {
  div.cta_area p {
    margin-left:0;
    text-align: center
  }
}

h2 {
  position: relative;
  color: #09BA85;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 3rem
}

@media (max-width: 960px) {
  h2 {
    font-size:24px
  }
}

h2::after {
  content: '';
  width: 64px;
  height: 6px;
  display: inline-block;
  background-color: #09BA85;
  border-radius: 5px;
  position: absolute;
  bottom: -15px;
  left: calc(50% - 30px)
}

h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.05em;
  margin-bottom: 0.7rem
}

@media (max-width: 960px) {
  h3 {
    margin-bottom:1rem
  }
}

p {
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.05em;
  text-align: center
}

p span {
  color: #09BA85;
}

header {
  background-color: #F8FFFD
}

header div.logo {
  width: 270px;
  padding: 19px
}

header div.logo img {
  width: 100%
}

section div.contents_area {
  margin: 0 auto;
  width: 960px;
  height: 100%
}

@media (max-width: 960px) {
  section div.contents_area {
    width:90%
  }
}

section div.contents_area div.cta_area {
  text-align: center;
  margin: 4rem 0 0
}

section div.contents_area div.cta_area div {
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #09BA85
}

@media (max-width: 960px) {
  section div.contents_area div.cta_area div {
    font-size:20px
  }
}

section div.contents_area div.cta_area button {
  font-size: 22px;
  padding: 1rem 5rem;
  margin-top: 1rem
}

@media (max-width: 960px) {
  section div.contents_area div.cta_area button {
    font-size:18px;
    padding: 1rem 3rem
  }
}

section div.contents_area div.cta_area p {
  margin-left: 0;
  text-align: center
}

section.reserves_lp_top {
  height: 650px;
  background-color: #F8FFFD;
  background-image: url("/assets/navpage/top_bg_pc.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 100%
}

@media (max-width: 480px) {
  section.reserves_lp_top {
    height:644px;
    background-image: url("/assets/navpage/top_bg_sp.svg");
    background-size: cover
  }
}

section.reserves_lp_top div.contents_area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area {
    display:-webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
}

section.reserves_lp_top div.contents_area div.cta_area {
  text-align: left
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.cta_area {
    text-align:center
  }
}

section.reserves_lp_top div.contents_area div.cta_area p {
  text-align: left;
  margin-left: 3.5rem
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.cta_area p {
    text-align:center;
    margin-left: 0
  }
}

section.reserves_lp_top div.contents_area div.text_area {
  width: 50%
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.text_area {
    width:100%
  }
}

section.reserves_lp_top div.contents_area div.text_area h1 {
  font-size: 56px;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: 0.1rem
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.text_area h1 {
    font-size:32px;
    line-height: 48px;
    letter-spacing: 0.1em;
    margin-top: 1rem
  }
}

section.reserves_lp_top div.contents_area div.text_area button {
  font-size: 24px
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.text_area button {
    font-size:20px
  }
}

section.reserves_lp_top div.contents_area div.image_area {
  width: 50%
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.image_area {
    width:100%
  }
}

section.reserves_lp_top div.contents_area div.image_area img {
  width: 100%
}

@media (max-width: 960px) {
  section.reserves_lp_top div.contents_area div.image_area img {
    width:245px
  }
}

section.reserves_lp_campaign {
  padding: 4rem 0;
  background-color: #E4F9F2
}

section.reserves_lp_campaign div.contents_area img {
  width: 100%
}

section.reserves_lp_about {
  padding: 4rem 0;
  background-color: #E4F9F2
}

@media (max-width: 480px) {
  section.reserves_lp_about p {
    text-align:left
  }
}

section.reserves_lp_about ul.about_list {
  list-style: none
}

section.reserves_lp_about ul.about_list li {
  background-color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  padding: 2.5rem 2rem;
  margin: 2rem 0
}

@media (max-width: 960px) {
  section.reserves_lp_about ul.about_list li {
    display:block
  }
}

section.reserves_lp_about ul.about_list li div.image_area {
  width: 20%;
  text-align: center
}

@media (max-width: 960px) {
  section.reserves_lp_about ul.about_list li div.image_area {
    width:100%;
    margin-bottom: 1rem
  }
}

section.reserves_lp_about ul.about_list li div.text_area {
  width: 80%
}

@media (max-width: 960px) {
  section.reserves_lp_about ul.about_list li div.text_area {
    width:100%;
    text-align: center
  }
}

section.reserves_lp_about ul.about_list li div.text_area p {
  font-weight: 400;
  text-align: justify
}

section.reserves_lp_simulation {
  padding: 4rem 0;
  background-color: #F8F9FB
}

section.reserves_lp_simulation img {
  width: 100%;
  /* display: none; */
}

section.reserves_lp_simulation img.title {
  margin: 0 auto;
  width: 95%;
  margin-bottom: 2rem;
  display: none;
}

section.reserves_lp_simulation div.notes {
  margin: 1rem 0
}

section.reserves_lp_simulation div.notes p {
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-align: left;
  margin-bottom: 0.5rem
}

section.reserves_lp_simulation div.notes p:last-child {
  margin-bottom: 0
}

section.reserves_lp_reason {
  padding: 4rem 0;
  background-color: #E4F9F2
}

@media (max-width: 480px) {
  section.reserves_lp_reason p {
    text-align:left
  }
}

section.reserves_lp_reason ul.reason_list {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list {
    display:block
  }
}

section.reserves_lp_reason ul.reason_list li {
  width: 32%;
  background-color: #FFFFFF;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  padding: 1.5rem 0.5rem 1.5rem;
  margin: 2rem 0
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li {
    display:block;
    width: 100%
  }
}

section.reserves_lp_reason ul.reason_list li div.image_area {
  text-align: center
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li div.image_area {
    width:100%;
    margin-bottom: 1rem
  }
}

section.reserves_lp_reason ul.reason_list li div.image_area img {
  height: 130px;
  padding-bottom: 1rem
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li div.image_area img {
    width:50%;
    padding-bottom: 0.5rem
  }
}

@media (max-width: 480px) {
  section.reserves_lp_reason ul.reason_list li div.image_area img {
    width:90%
  }
}

section.reserves_lp_reason ul.reason_list li div.text_area {
  width: 100%;
  text-align: center
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li div.text_area {
    width:100%;
    text-align: center
  }
}

section.reserves_lp_reason ul.reason_list li div.text_area h3 {
  font-size: 18px
}

section.reserves_lp_reason ul.reason_list li div.text_area p {
  font-weight: 400;
  text-align: justify;
  padding: 0 1rem 0
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li div.text_area p {
    text-align:center
  }
}

@media (max-width: 480px) {
  section.reserves_lp_reason ul.reason_list li div.text_area p {
    text-align:justify
  }
}

section.reserves_lp_reason ul.reason_list li div.text_area p.notes {
  padding-top: 1rem;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-align: justify;
  line-height: 20px;
  letter-spacing: 0.05em
}

@media (max-width: 960px) {
  section.reserves_lp_reason ul.reason_list li div.text_area p.notes {
    text-align:center
  }
}

@media (max-width: 480px) {
  section.reserves_lp_reason ul.reason_list li div.text_area p.notes {
    text-align:justify
  }
}

section.reserves_lp_plan {
  padding: 4rem 0;
  background-color: #F8F9FB
}

section.reserves_lp_plan h3 {
  text-align: center;
  font-size: 24px;
  color: #09BA85
}

@media (max-width: 960px) {
  section.reserves_lp_plan h3 {
    font-size:20px
  }
}

section.reserves_lp_plan ul.plan_menu {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

@media (max-width: 960px) {
  section.reserves_lp_plan ul.plan_menu {
    display:block
  }
}

section.reserves_lp_plan ul.plan_menu li {
  width: 49%;
  background-color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  padding: 2.5rem;
  margin: 2rem 0
}

@media (max-width: 960px) {
  section.reserves_lp_plan ul.plan_menu li {
    display:-webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 1.5rem 1rem
  }
}

section.reserves_lp_plan ul.plan_menu li div.image_area {
  width: 30%
}

@media (max-width: 960px) {
  section.reserves_lp_plan ul.plan_menu li div.image_area {
    text-align:center
  }
}

@media (max-width: 480px) {
  section.reserves_lp_plan ul.plan_menu li div.image_area {
    width:35%;
    text-align: left
  }
}

section.reserves_lp_plan ul.plan_menu li div.text_area {
  width: 70%
}

@media (max-width: 480px) {
  section.reserves_lp_plan ul.plan_menu li div.text_area {
    width:65%
  }
}

section.reserves_lp_plan ul.plan_menu li div.text_area h4 {
  font-size: 18px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.05em;
  margin-bottom: 0.7rem
}

@media (max-width: 960px) {
  section.reserves_lp_plan ul.plan_menu li div.text_area h4 {
    margin-bottom:1rem
  }
}

section.reserves_lp_plan ul.plan_menu li div.text_area h4 span {
  color: #09BA85
}

section.reserves_lp_plan ul.plan_menu li div.text_area p {
  font-weight: 400;
  text-align: justify
}

section.reserves_lp_plan dl.plan_overview {
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 2.5rem;
  margin: 2rem 0;
  font-size: 14px
}

@media (max-width: 480px) {
  section.reserves_lp_plan dl.plan_overview {
    padding:2.5rem 1.5rem
  }
}

section.reserves_lp_plan dl.plan_overview dt {
  font-weight: 600;
  color: #09BA85;
  margin-bottom: 0.5rem
}

section.reserves_lp_plan dl.plan_overview dd {
  letter-spacing: 0.05em;
  padding-bottom: 1rem;
  border-bottom: 1px solid #D8EDE6;
  margin-bottom: 1rem;
  text-align: justify
}

section.reserves_lp_plan dl.plan_overview dd span {
  color: #879490
}

section.reserves_lp_plan dl.plan_overview dd a {
  text-decoration: underline;
  color: #09BA85
}

section.reserves_lp_plan dl.plan_overview dd:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0
}

section.reserves_lp_faq {
  padding: 4rem 0;
  background-color: #E4F9F2
}

section.reserves_lp_faq div.accordion_list ul.accordion_one {
  list-style: none;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 2.5rem 1.5rem;
  margin: 2rem 0
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header p {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: left
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header p {
    margin-left:1.5rem;
    width: 80%
  }
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header p::before {
  content: 'Q';
  font-family: Avenir Next;
  font-size: 20px;
  font-weight: 600;
  color: #09BA85;
  padding-right: 0.5rem
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header p::before {
    margin-left:-1.5rem;
    padding-right: 0.4rem
  }
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header i {
  display: block;
  position: relative
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header i::before,section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header i::after {
  content: '';
  display: block;
  width: 19px;
  height: 3px;
  border-radius: 5px;
  background: #09BA85;
  position: relative;
  right: 0;
  top: 18px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header i::after {
  top: 15px;
  background: #09BA85;
  -webkit-transform: translateY(-50%) rotate(90deg);
  -ms-transform: translateY(-50%) rotate(90deg);
  transform: translateY(-50%) rotate(90deg);
  -webkit-transition: 0.5s;
  transition: 0.5s
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_header i::after {
    top:15px
  }
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.open i::after {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  height: 0
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner {
  display: block;
  height: 0;
  -webkit-transition: height 400ms ease;
  transition: height 400ms ease;
  overflow: hidden;
  margin: 1rem 0 0 2rem;
  text-align: justify;
}

@media (max-width: 960px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner {
    margin:1rem 0 0
  }
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner p {
  font-weight: 400;
  text-align: left
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner p span {
  color: #879490
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner p a {
  text-decoration: underline;
  color: #09BA85
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner ul {
  list-style: none
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner li {
  position: relative;
  margin: 0.7rem 0
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner li {
    margin-left:1rem
  }
}

section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner li::before {
  position: relative;
  top: -3px;
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  background: #3CD3A5;
  margin-right: 0.5rem
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.accordion_list ul.accordion_one li.accordion_inner li::before {
    margin-left:-1rem;
    margin-right: 0.5rem
  }
}

section.reserves_lp_faq div.helpcenter {
  text-align: center;
  margin: 3rem 0 0
}

section.reserves_lp_faq div.helpcenter p {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.05em;
  margin: 0 0 1rem
}

section.reserves_lp_faq div.helpcenter button {
  border: 2px solid #3CD3A5;
  background: #FFFFFF;
  border-radius: 50px;
  color: #3CD3A5;
  padding: 1.2rem 3.5rem;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 100%;
  cursor: pointer
}

@media (max-width: 480px) {
  section.reserves_lp_faq div.helpcenter button {
    padding:1.2rem 2.5rem
  }
}

section.reserves_lp_attention {
  padding: 4rem 0;
  background-color: #F8F9FB
}

section.reserves_lp_attention div.attention_box {
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 2.5rem 2rem;
  margin: 2rem 0
}

@media (max-width: 480px) {
  section.reserves_lp_attention div.attention_box {
    padding:2.5rem 1.5rem
  }
}

section.reserves_lp_attention div.attention_box p.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 2rem
}

@media (max-width: 480px) {
  section.reserves_lp_attention div.attention_box p.title {
    font-size:20px
  }
}

section.reserves_lp_attention div.attention_box p.text {
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.05em;
  text-align: left
}

@media (max-width: 480px) {
  section.reserves_lp_attention div.attention_box p.text {
    font-size:14px
  }
}

section.reserves_lp_attention div.notes {
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.05em
}

section.reserves_lp_attention div.notes a {
  color: #09BA85
}

</style>
