<template>
  <div class="info-fee rsv-container" style="margin-bottom: 50px">
    <div class="info-fee-inner">
      <h1 class="title"><i class="fa fa-volume-down"></i>{{$t('info.fee.fee0')}}</h1>
      <h2 class="subtitle">{{$t('info.fee.fee1')}}</h2>
      <p class="text">
      
      {{$t('info.fee.fee4')}}
        <a class="link" style="cursor: pointer" @click="handleClick">
          {{$t('info.fee.fee5')}}
          </a>.
      </p>

      <h2 class="subtitle">{{$t('info.fee.fee6')}}</h2>
      <table class="table">
        <tbody>
        <tr>
          <td class="is-narrow">{{$t('info.fee.fee7')}}</td>
          <td class="">{{$t('info.fee.fee0')}}</td>
        </tr>
        <tr>
          <td class="is-narrow">
          {{$t('info.fee.fee8')}}
          </td>
          <td class="">
          0.1〜5.0% 
          ({{$t('info.fee.fee9')}})
          <br><span
            class="is-gray">
            * 
            {{$t('info.fee.fee10')}}
            .</span>
          </td>
        </tr>
        </tbody>
      </table>

      <h2 class="subtitle">{{$t('info.fee.fee11')}}</h2>
      <table class="table">
        <tbody>
        <tr>
          <td class="left">
          {{$t('info.fee.fee12')}}({{$t('info.fee.fee2')}})</td>
          <td class="left" colspan="2">
          {{$t('info.fee.fee0')}}
          ({{$t('info.fee.fee13')}}.)</td>
        </tr>
        <tr>
          <td rowspan="2" class="payment"><br>
            <p>Convenience Store Payment</p>
            ({{$t('info.fee.fee14')}}.)
          </td>
          <td>~ 29,999 {{$t('info.fee.fee2')}}</td>
          <td class="right">770 {{$t('info.fee.fee2')}}</td>
        </tr>
        <tr>
          <td>30,000 ~ 300,000 {{$t('info.fee.fee2')}}</td>
          <td class="right">1018 {{$t('info.fee.fee2')}}</td>
        </tr>
        <tr>
          <td rowspan="3" class="payment"><br><br><br>
            <p>Quick Deposit</p>
            ({{$t('info.fee.fee14')}}.)
          </td>
          <td>~ 29,999 {{$t('info.fee.fee2')}}</td>
          <td class="right">770 {{$t('info.fee.fee2')}}</td>
        </tr>
        <tr>
          <td>30,000 ~ 499,999 {{$t('info.fee.fee2')}}</td>
          <td class="right">1018 {{$t('info.fee.fee2')}}</td>
        </tr>
        <tr>
          <td>500,000 {{$t('info.fee.fee2')}} ~</td>
          <td>
          {{$t('info.fee.fee15')}} × 0.11％ + 495 {{$t('info.fee.fee2')}}</td>
        </tr>
        <tr>
          <td class="left">{{$t('info.fee.fee2')}} 
          
          {{$t('info.fee.fee16')}}</td>
          <td class="right" colspan="2">407 {{$t('info.fee.fee2')}}</td>
        </tr>
        </tbody>
      </table>
      <br>
      <h2 class="subtitle">{{$t('info.fee.fee17')}}</h2>
      <table class="table">
        <tbody>
        <tr>
          <td>{{$t('info.fee.fee18')}}</td>
          <td class="right">{{$t('info.fee.fee0')}}</td>
        </tr>
        </tbody>
      </table>
      <br>
      <h2 class="subtitle">{{$t('info.fee.fee19')}}</h2>
      <table class="table">
        <tbody>
        <tr>
          <td>BTC</td>
          <td class="right">0.0005 BTC</td>
        </tr>
        <tr>
          <td>ETH</td>
          <td class="right">0.005 ETH</td>
        </tr>
        <tr>
          <td>ETC</td>
          <td class="right">0.01 ETC</td>
        </tr>
        <tr>
          <td>LSK</td>
          <td class="right">0.1 LSK</td>
        </tr>
        <tr>
          <td>XRP</td>
          <td class="right">0.15 XRP</td>
        </tr>
        <tr>
          <td>XEM</td>
          <td class="right">0.5 XEM</td>
        </tr>
        <tr>
          <td>LTC</td>
          <td class="right">0.001 LTC</td>
        </tr>
        <tr>
          <td>BCH</td>
          <td class="right">0.001 BCH</td>
        </tr>
        <tr>
          <td>MONA</td>
          <td class="right">0.001 MONA</td>
        </tr>
        <tr>
          <td>XLM</td>
          <td class="right">0.01 XLM</td>
        </tr>
        <tr>
          <td>QTUM</td>
          <td class="right">0.01 QTUM</td>
        </tr>
        <tr>
          <td>BAT</td>
          <td class="right">279.0 BAT</td>
        </tr>
        <tr>
          <td>IOST</td>
          <td class="right">1.0 IOST</td>
        </tr>
        <tr>
          <td>ENJ</td>
          <td class="right">216.0 ENJ</td>
        </tr>
        <tr>
          <td>SAND</td>
          <td class="right">77.0 SAND</td>
        </tr>
        <tr>
          <td>XYM</td>
          <td class="right">1.0 XYM</td>
        </tr>
        <tr>
          <td>DOT</td>
          <td class="right">0.1 DOT</td>
        </tr>
        <tr>
          <td>FLR</td>
          <td class="right">0.1 FLR</td>
        </tr>
        <tr>
          <td>FNCT</td>
          <td class="right">17994.0 FNCT</td>
        </tr>
        <tr>
          <td>CHZ</td>
          <td class="right">473.0 CHZ</td>
        </tr>
        <tr>
          <td>LINK</td>
          <td class="right">3.0 LINK</td>
        </tr>
        <tr>
          <td>DAI</td>
          <td class="right">23.0 DAI</td>
        </tr>
        <tr>
          <td>MKR</td>
          <td class="right">0.0 MKR</td>
        </tr>
        <tr>
          <td>MATIC</td>
          <td class="right">0.1 MATIC</td>
        </tr>
        <tr>
          <td>APE</td>
          <td class="right">39.0 APE</td>
        </tr>
        <tr>
          <td>AXS</td>
          <td class="right">10.0 AXS</td>
        </tr>
        <tr>
          <td>IMX</td>
          <td class="right">33.0 IMX</td>
        </tr>
        <tr>
          <td>WBTC</td>
          <td class="right">0.0 WBTC</td>
        </tr>
        <tr>
          <td>SHIB</td>
          <td class="right">2857220.0 SHIB</td>
        </tr>
        <tr>
          <td>AVAX</td>
          <td class="right">0.1 AVAX</td>
        </tr>
        <tr>
          <td>BRIL</td>
          <td class="right">1.5 BRIL</td>
        </tr>
        <tr>
          <td>BC</td>
          <td class="right">13.0 BC</td>
        </tr>
        <tr>
          <td>DOGE</td>
          <td class="right">5.0 DOGE</td>
        </tr>
        </tbody>
      </table>
      <br>
      <p class="text">
      {{$t('info.fee.fee20')}}.</p>
      <h2 class="subtitle">
      {{$t('info.fee.fee21')}}BTC/ETH/ERC20
      </h2>
      <table class="table">
        <tbody>
        <tr>
          <td rowspan="8" width="30%">BTC</td>
          <td colspan="2">
          
            {{$t('info.fee.fee22')}}
          </td>
        </tr>
        <tr>
          <td>{{$t('info.fee.fee23')}}</td>
          <td>{{$t('info.fee.fee24')}}</td>
        </tr>
        <tr>
          <td>0.0005 BTC</td>
          <td class="left">{{$t('info.fee.fee25')}} 0.0005 BTC</td>
        </tr>
        <tr>
          <td>0.001 BTC</td>
          <td class="left">{{$t('info.fee.fee26')}} 0.0005 BTC {{$t('info.fee.fee3')}} 0.001 BTC</td>
        </tr>
        <tr>
          <td>0.002 BTC</td>
          <td class="left">{{$t('info.fee.fee26')}} 0.001 BTC {{$t('info.fee.fee3')}} 0.002 BTC</td>
        </tr>
        <tr>
          <td>0.004 BTC</td>
          <td class="left">{{$t('info.fee.fee26')}} 0.002 BTC {{$t('info.fee.fee3')}} 0.004 BTC</td>
        </tr>
        <tr>
          <td>0.008 BTC</td>
          <td class="left">{{$t('info.fee.fee26')}} 0.004 BTC {{$t('info.fee.fee3')}} 0.008 BTC</td>
        </tr>
        <tr>
          <td>0.016 BTC</td>
          <td class="left">0.008 BTC{{$t('info.fee.fee27')}}</td>
        </tr>
        <tr>
          <td rowspan="8" width="20%">ETH</td>
          <td colspan="2">
            {{$t('info.fee.fee28')}}
          </td>
        </tr>
        <tr>
          <td>{{$t('info.fee.fee29')}}</td>
          <td>{{$t('info.fee.fee30')}}</td>
        </tr>
        <tr>
          <td>0.005 ETH</td>
          <td>Less than 0.005 ETH</td>
        </tr>
        <tr>
          <td>0.01 ETH</td>
          <td>Above 0.005 ETH {{$t('info.fee.fee3')}} 0.01 ETH</td>
        </tr>
        <tr>
          <td>0.02 ETH</td>
          <td>Above 0.01 ETH {{$t('info.fee.fee3')}} 0.02 ETH</td>
        </tr>
        <tr>
          <td>0.04 ETH</td>
          <td>Above 0.02 ETH {{$t('info.fee.fee3')}} 0.04 ETH</td>
        </tr>
        <tr>
          <td>0.08 ETH</td>
          <td>Above 0.04 ETH {{$t('info.fee.fee3')}} 0.08 ETH</td>
        </tr>
        <tr>
          <td>0.16 ETH</td>
          <td>0.08 ETH {{$t('info.fee.fee31')}}</td>
        </tr>
        <tr>
          <td>BAT</td>
          <td colspan="2">
          
            {{$t('info.fee.fee32')}}.
            <br><span class="is-gray">
            ※
            {{$t('info.fee.fee33')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee34')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee35')}}
              </span></td>
        </tr>
        <tr>
          <td>ENJ</td>
          <td colspan="2">
            {{$t('info.fee.fee36')}}
            .<br><span class="is-gray">
            ※
            {{$t('info.fee.fee37')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee38')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee39')}}
              </span></td>
        </tr>
        <tr>
          <td>SAND</td>
          <td colspan="2">
            {{$t('info.fee.fee40')}}
            .<br><span class="is-gray">
            ※
            {{$t('info.fee.fee41')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee42')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee43')}}
              </span></td>
        </tr>
        <tr>
          <td>FNCT</td>
          <td colspan="2">
            {{$t('info.fee.fee44')}}
            .<br><span class="is-gray">
            ※
            {{$t('info.fee.fee45')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee46')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee47')}}
              </span></td>
        </tr>
        <tr>
          <td>CHZ</td>
          <td colspan="2">
          
            {{$t('info.fee.fee48')}}
            .<br><span class="is-gray">
            ※
            {{$t('info.fee.fee49')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee50')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee51')}}
              </span></td>
        </tr>
        <tr>
          <td>LINK</td>
          <td colspan="2">
          
            {{$t('info.fee.fee52')}}
            .<br><span class="is-gray"
            >
            ※
            {{$t('info.fee.fee53')}}
            </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee54')}}
              </span><br><span
              class="is-gray">
              ※
              {{$t('info.fee.fee55')}}
              </span></td>
        </tr>
        <tr>
          <td>DAI</td>
          <td colspan="2">
          
            {{$t('info.fee.fee56')}}
            .<br><span class="is-gray">
            ※
            {{$t('info.fee.fee57')}}
            </span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee58')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee59')}}</span></td>
        </tr>
        <tr>
          <td>MKR</td>
          <td colspan="2">
          
            {{$t('info.fee.fee60')}}
            .<br><span class="is-gray">
            {{$t('info.fee.fee61')}}
            ※{{$t('info.fee.fee61')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee62')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee63')}}</span></td>
        </tr>
        <tr>
          <td>APE</td>
          <td colspan="2">
          
            {{$t('info.fee.fee64')}}
            .<br><span class="is-gray">
            
            ※{{$t('info.fee.fee65')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee66')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee67')}}</span></td>
        </tr>
        <tr>
          <td>AXS</td>
          <td colspan="2">
            {{$t('info.fee.fee68')}}
            .<br><span class="is-gray">
            
            ※{{$t('info.fee.fee69')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee70')}}</span><br><span
              class="is-gray">
              
              ※{{$t('info.fee.fee71')}}</span></td>
        </tr>
        <tr>
          <td>IMX</td>
          <td colspan="2">
          
            {{$t('info.fee.fee72')}}
            .<br><span class="is-gray">
            
            ※{{$t('info.fee.fee73')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee74')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee75')}}</span></td>
        </tr>
        <tr>
          <td>WBTC</td>
          <td colspan="2">
          
            {{$t('info.fee.fee76')}}
            .<br><span class="is-gray">
            
            ※{{$t('info.fee.fee77')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee78')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee79')}}</span></td>
        </tr>
        <tr>
          <td>SHIB</td>
          <td colspan="2">
          
            {{$t('info.fee.fee80')}}
            .<br><span class="is-gray">
            ※{{$t('info.fee.fee81')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee82')}}</span><br><span
              class="is-gray">
              ※{{$t('info.fee.fee83')}}</span></td>
        </tr>
        </tbody>
      </table>
      <br>
      <p class="text">"{{$t('info.fee.fee84')}}"： 
      
      The applicable handling fee will change in the event that
        any of the following conditions are fulfilled.
        <br>
        {{$t('info.fee.fee85')}}
        .
        <br>
        {{$t('info.fee.fee86')}}
        .
        <br>
        {{$t('info.fee.fee87')}}
        
        .<br>


        ※
        {{$t('info.fee.fee88')}}
        .
        </p>
      <h2 class="subtitle">
      {{$t('info.fee.fee89')}}
      </h2>
      <table class="table">
        <tbody>
        <tr>
          <td class="is-narrow">{{$t('info.fee.fee90')}}</td>
          <td>Free</td>
        </tr>
        <tr>
          <td class="is-narrow">{{$t('info.fee.fee91')}}</td>
          <td>Free</td>
        </tr>
        <tr>
          <td class="is-narrow">
          
          {{$t('info.fee.fee92')}}
          </td>
          <td>0.1〜4.0% ({{$t('info.fee.fee93')}})
          
          <br><span class="is-gray">
          * 
          {{$t('info.fee.fee94')}}
          .</span>
          </td>
        </tr>
        </tbody>
      </table>
      <h2 class="subtitle">{{$t('info.fee.fee95')}}</h2>
      <h3 class="h3title">1. {{$t('info.fee.fee96')}}</h3>
      <div class="text">
        <p>{{$t('info.fee.fee97')}}.
          
          </p>
        <ol class="mt5">
          <li>(1) “{{$t('info.fee.fee98')}}”.

            
          </li>
          <li>(2) 

            {{$t('info.fee.fee99')}}
          </li>
          <li>(3) {{$t('info.fee.fee100')}}.</li>
          <li>(4) 
            {{$t('info.fee.fee101')}}
            .
            <ol class="ml30">
              <li>(ⅰ)<span class="ml10"></span>
              
                {{$t('info.fee.fee102')}}
                .
              </li>
              <li>(ⅱ)
              <span class="ml10"></span>
                {{$t('info.fee.fee103')}}
                .
              </li>
              <li>(ⅲ)<span class="ml10"></span>
                {{$t('info.fee.fee104')}}
                .
              </li>
              <li>(ⅳ)<span class="ml10"></span>
                {{$t('info.fee.fee105')}}
                .
              </li>
              <li>(ⅴ)<span class="ml10"></span>
              
                {{$t('info.fee.fee106')}}
                .
              </li>
            </ol>
          </li>
          <li>(5) {{$t('info.fee.fee107')}}.</li>
          <li>(6) 
          {{$t('info.fee.fee108')}}
          <br> <span class="ml35"></span>
          (Total
            
            {{$t('info.fee.fee109')}}
            <br> <span class="ml45">
            </span> 
            
            {{$t('info.fee.fee110')}}
            .
          </li>
          <li>(7) 
            {{$t('info.fee.fee111')}}
            .
          </li>
          <li>(8) 
          {{$t('info.fee.fee112')}}
          .</li>
          <li>(9) 
            {{$t('info.fee.fee113')}}
            .
          </li>
          <li>(10) 
            {{$t('info.fee.fee114')}}
            .
          </li>
        </ol>
      </div>
      <h3 class="h3title">2. 
      {{$t('info.fee.fee115')}}
      </h3>
      <div class="text">
        <p>
          {{$t('info.fee.fee116')}}
          <br> <span class="ml35"></span>
          
          {{$t('info.fee.fee117')}}
          </p>
      </div>
      <h3 class="h3title">3. {{$t('info.fee.fee118')}}</h3>
      <div class="text">
        <p>
          {{$t('info.fee.fee119')}}
          .
          
          <br><span class="ml35"></span>

          

          {{$t('info.fee.fee120')}}
          </p>
      </div>

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
      this.$message({message: this.$t('trade.downApp'), type: "success"});
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

.lp_download_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: white;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 100px;
  border: 1px solid #b5c6c1;
  border-radius: 0.5rem
}

@media (max-width: 767px) {
  .lp_download_box {
    padding: 50px 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 0
  }
}

.lp_download_box .text {
  width: 40%;
  font-size: 16px;
  text-align: center;
  font-weight: 700
}

@media (max-width: 767px) {
  .lp_download_box .text {
    width: 100%;
    margin-bottom: 50px;
    font-size: 15px
  }
}

.lp_download_box .download_link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 400px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

@media (max-width: 767px) {
  .lp_download_box .download_link {
    max-width: 100%;
    -ms-flex-pack: distribute;
    justify-content: space-around
  }
}

.lp_download_box .download_link .button {
  height: 40px
}

.lp_download_box .download_link .qr_code {
  margin: 0;
  height: 80px
}

@media (max-width: 767px) {
  .lp_download_box .download_link .qr_code {
    display: none
  }
}

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

.color1 {
  color: #17ca94
}

.color2 {
  color: #1ABC9C
}

.color3 {
  color: #01a4de
}

.color4 {
  color: #BF0000
}

.mark1 {
  background: -webkit-linear-gradient(transparent 40%, #ffde21 40%);
  background: linear-gradient(transparent 40%, #ffde21 40%)
}

.articles-index, .articles-show {
  background-color: white;
  min-height: 300px;
  width: 1120px;
  margin: 30px auto;
  padding: 6rem 3rem;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow: hidden
}

.articles-index.top-margin, .articles-show.top-margin {
  margin-top: 100px
}

.articles-index .banners {
  margin-bottom: 40px
}

.articles-index .banners a:hover {
  opacity: 0.7
}

.articles-show {
  position: relative
}

.articles-show h1, .articles-show h2, .articles-show h3, .articles-show h4, .articles-show h5, .articles-show h6 {
  font-weight: bold;
  color: #333;
  line-height: 1.3
}

.articles-show h1 {
  font-size: 28px
}

@media (max-width: 767px) {
  .articles-show h1 {
    margin: 4rem 0
  }
}

.articles-show a {
  color: #008670
}

.articles-show .navigation {
  margin-bottom: 40px;
  color: #999
}

.articles-show .navigation ul, .articles-show .navigation li {
  display: inline
}

.articles-show .navigation a {
  font-weight: bold;
  color: #008670
}

@media (max-width: 767px) {
  .articles-show .navigation a {
    font-weight: bold
  }
}

.articles-show .navigation a:hover {
  color: #0fa98f
}

.articles-show .card-link {
  position: relative;
  border: 2px solid rgba(183, 183, 183, 0.2);
  border-radius: 5px;
  overflow: hidden
}

.articles-show .card-link + .card-link {
  margin-top: 1em
}

.articles-show .card-link:hover {
  opacity: 0.7
}

.articles-show .card-link a {
  display: block;
  position: relative;
  padding: 10px;
  overflow: hidden
}

.articles-show .card-link img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100px;
  height: 100px;
  float: left
}

@media (max-width: 767px) {
  .articles-show .card-link img {
    width: 90px;
    height: 90px
  }
}

.articles-show .card-link .title {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  padding: 0.75em 0 2em 0.75em;
  display: table-cell;
  clear: both;
  font-weight: 700
}

@media (max-width: 767px) {
  .articles-show .card-link .title {
    font-size: 14px
  }
}

.articles-show .card-link .cc-logo {
  display: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px
}

.articles-show .card-link .cc-logo .text {
  color: #333;
  letter-spacing: 3px;
  font-size: 15px;
  margin-left: 5px;
  padding-top: 1px
}

.articles-show .card-link .cc-logo img {
  -o-object-fit: fill;
  object-fit: fill;
  height: 24px;
  width: 128px
}

@media (max-width: 767px) {
  .articles-show .card-link .cc-logo img {
    height: 24px;
    width: 100px
  }
}

.articles-show .toc {
  font-size: 16px;
  padding: 30px;
  position: relative;
  width: 100%;
  margin: 60px 0;
  border-top: solid 5px #11C1A4;
  background-color: #f9f9f9
}

.articles-show .toc .toc-title {
  font-weight: bold;
  color: #11C1A4;
  font-size: 22px !important;
  margin: 0 !important
}

.articles-show .toc .toc-title .fa {
  margin-right: 0.5em;
  width: 1em;
  display: inline-block
}

.articles-show .toc > ul {
  padding-bottom: 0 !important
}

.articles-show .toc li {
  font-weight: bold
}

.articles-show .toc li li {
  font-weight: normal
}

.articles-show .toc li a {
  color: #333
}

.articles-show .profile-box.writer {
  margin: 40px 0;
  padding: 24px;
  background-color: #FFF;
  border: solid 2px #88e0d1;
  border-radius: 5px
}

@media (max-width: 767px) {
  .articles-show .profile-box.writer {
    padding: 18px
  }
}

.articles-show .profile-box.writer .left-box .icon {
  border-radius: 50%;
  border: solid 1px #eee;
  padding: 10px
}

.articles-show .profile-box.writer .left-box .icon img {
  display: inline;
  max-width: 100%;
  margin: 0
}

.articles-show .profile-box.writer .detail .title {
  margin-top: 0
}

.articles-show .profile-box.writer .detail .title + p {
  margin-bottom: 0
}

.articles-show .profile-box.supervisor {
  margin: 40px 0;
  padding: 24px;
  background-color: #FFF;
  border: solid 2px #88e0d1;
  border-radius: 5px
}

@media (max-width: 767px) {
  .articles-show .profile-box.supervisor {
    padding: 18px
  }
}

.articles-show .profile-box.supervisor .left-box img {
  max-width: 100%;
  margin: 0px
}

.articles-show .profile-box.supervisor .detail {
  margin-left: 110px
}

@media (max-width: 767px) {
  .articles-show .profile-box.supervisor .detail {
    margin-left: 0;
    font-size: 12px
  }
}

.articles-show .profile-box.supervisor .detail p {
  line-height: 1.5 !important;
  margin-top: 0 !important;
  margin-bottom: 0.5em
}

.articles-show .profile-box.supervisor .detail .books ul {
  line-height: 1.5;
  margin: 0;
  padding: 0
}

.articles-show .profile-box.supervisor .detail .books ul li {
  list-style: none;
  margin: 0
}

.articles-show .profile-box .left-box {
  float: left
}

@media (max-width: 767px) {
  .articles-show .profile-box .left-box {
    float: none;
    margin-bottom: 10px
  }
}

.articles-show .profile-box .left-box .icon {
  width: 90px;
  height: 90px
}

@media (max-width: 767px) {
  .articles-show .profile-box .left-box .icon {
    margin: auto
  }
}

.articles-show .profile-box .left-box .icon img {
  width: 100%;
  height: auto;
  border-radius: 100px
}

.articles-show .profile-box .left-box .sns-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 5px
}

.articles-show .profile-box .left-box .sns-links.jc-fe {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.articles-show .profile-box .left-box .sns-links.jc-ce {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.articles-show .profile-box .left-box .sns-links.jc-sa {
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.articles-show .profile-box .left-box .sns-links.jc-sb {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.articles-show .profile-box .left-box .sns-links.ai-fe {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end
}

.articles-show .profile-box .left-box .sns-links.ai-ce {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

@media (max-width: 767px) {
  .articles-show .profile-box .left-box .sns-links {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
}

.articles-show .profile-box .left-box .sns-links .link {
  box-sizing: border-box;
  width: 30px
}

@media (max-width: 767px) {
  .articles-show .profile-box .left-box .sns-links .link {
    width: 48px
  }

  .articles-show .profile-box .left-box .sns-links .link:not(:last-child) {
    margin-right: 10px
  }
}

.articles-show .profile-box .left-box .sns-links .link img {
  width: 100%;
  height: auto
}

.articles-show .profile-box .left-box .sns-links .link.fb {
  padding: 5px
}

@media (max-width: 767px) {
  .articles-show .profile-box .left-box .sns-links .link.fb {
    padding: 10px
  }
}

.articles-show .profile-box .detail {
  margin-left: 110px
}

@media (max-width: 767px) {
  .articles-show .profile-box .detail {
    margin-left: 0;
    font-size: 12px
  }
}

.articles-show .profile-box .detail p {
  line-height: 1.5 !important;
  margin-bottom: 0.5em
}

.articles-show .profile-box .detail .books {
  line-height: 1.5
}

.articles-show .profile-box .detail .title {
  margin-bottom: 0;
  font-size: 15px
}

@media (max-width: 767px) {
  .articles-show .profile-box .detail .title {
    text-align: center
  }
}

.articles-show .profile-box .detail .title .name {
  font-size: 20px;
  font-weight: bold;
  padding-left: 0.5em
}

.articles-show .profile-box .detail .organization {
  margin-bottom: 1em
}

@media (max-width: 767px) {
  .articles-show .profile-box .detail .organization {
    text-align: center
  }
}

.articles-show .scroll-back-button {
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 400ms ease;
  transition: opacity 400ms ease;
  position: fixed;
  width: 60px;
  height: 60px;
  right: 50px;
  bottom: 50px;
  z-index: 2000
}

.articles-show .scroll-back-button.active {
  opacity: 1;
  pointer-events: auto
}

@media (max-width: 767px) {
  .articles-show .scroll-back-button {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 10px
  }
}

.articles-show .scroll-back-button .text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 12px;
  width: 100%;
  height: 100%;
  color: #11C1A4;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.8);
  border: solid 2px #11C1A4;
  text-align: center;
  cursor: pointer
}

.articles-show .scroll-back-button .text .fa {
  font-size: 20px
}

@media all and (max-width: 1119px) {
  .articles-index {
    width: 95%;
    padding: 6rem 3rem
  }
}

@media all and (max-width: 767px) {
  .articles-index {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto 30px;
    padding: 1rem
  }
}

.articles-index a {
  color: #11C1A4
}

.articles-index h1 {
  color: #333;
  font-size: 1.867rem;
  font-weight: bold;
  margin: 0 0 4rem
}

@media all and (max-width: 767px) {
  .articles-index h1 {
    margin: 4rem 0
  }
}

.articles-index h2 {
  color: #333;
  font-size: 1.467rem;
  font-weight: bold;
  margin: 0 0 4rem
}

.articles-index .articles-index-h1 {
  text-align: center;
  font-size: 3rem;
  letter-spacing: .1rem;
  color: #12575F;
  margin: 0 0 5rem;
  line-height: 0.6
}

.articles-index .articles-index-h1 .ruby {
  font-size: 1rem
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-h1 {
    margin: 4rem 0;
    font-size: 2rem
  }
}

@media all and (max-width: 320px) {
  .articles-index .articles-index-h1 {
    font-size: 1.8rem;
    line-height: .8
  }
}

.articles-index .articles-index-h1:hover {
  opacity: 0.6
}

.articles-index .breadcrumbs {
  margin: 0 0 30px
}

.articles-index .breadcrumbs a {
  color: #008670
}

.articles-index .breadcrumbs .breadcrumbs-inner {
  width: 100%;
  line-height: 1.5
}

.articles-index .breadcrumbs .breadcrumbs-inner li {
  font-size: 1rem
}

.articles-index .articles-index-inner {
  width: 700px;
  float: left;
  box-sizing: border-box
}

@media all and (max-width: 1119px) {
  .articles-index .articles-index-inner {
    width: 67%
  }
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner {
    width: 100%;
    box-sizing: border-box;
    float: none;
    margin: 0 0 4rem
  }
}

.articles-index .articles-index-inner .description {
  line-height: 1.5em;
  margin-bottom: 20px
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content {
    margin: 0 0 4rem
  }
}

.articles-index .articles-index-inner .content .article {
  position: relative;
  min-height: 160px;
  margin: 0 0 20px;
  padding: 0 0 20px 200px;
  overflow: hidden;
  border-bottom: 1px solid #ddd
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .article {
    min-height: 6rem;
    margin: 0 0 1rem;
    padding: 0 0 1rem 8.75rem
  }
}

.articles-index .articles-index-inner .content .article:first-child {
  border-top: 1px solid #ddd;
  padding: 20px 0 20px 200px
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .article:first-child {
    min-height: 6rem;
    margin: 0 0 1rem;
    padding: 1rem 0 1rem 8.75rem
  }
}

.articles-index .articles-index-inner .content .article:first-child .article-image-link {
  top: 20px
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .article:first-child .article-image-link {
    top: 1rem
  }
}

.articles-index .articles-index-inner .content .subject {
  margin-bottom: 10px
}

.articles-index .articles-index-inner .content .subject a {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  line-height: 1.4
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .subject a {
    font-size: 1rem;
    text-align: justify
  }
}

.articles-index .articles-index-inner .content .subject a:hover {
  color: #008670
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .subject {
    margin: 0 0 .5rem
  }
}

.articles-index .articles-index-inner .content .meta {
  margin-bottom: 10px;
  color: #999
}

.articles-index .articles-index-inner .content .meta a {
  color: #008670
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .meta a {
    font-weight: bold
  }
}

.articles-index .articles-index-inner .content .meta a:hover {
  color: #0fa98f
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .meta {
    font-size: .8rem;
    margin: 0
  }
}

.articles-index .articles-index-inner .content .body {
  line-height: 1.5em
}

.articles-index .articles-index-inner .content .body p {
  height: 5.6em;
  overflow: hidden
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .body {
    display: none
  }
}

.articles-index .articles-index-inner .content .article-image-link {
  position: absolute;
  top: 0;
  left: 0
}

.articles-index .articles-index-inner .content .article-image {
  -o-object-fit: cover;
  object-fit: cover;
  width: 180px;
  height: 170px;
  margin: 0
}

@media all and (max-width: 767px) {
  .articles-index .articles-index-inner .content .article-image {
    width: 8rem;
    height: 6rem
  }
}

.articles-index .articles-index-inner .pagenator {
  text-align: center;
  padding: 1rem 0
}

.articles-index .articles-index-inner .pagenator span {
  border: 1px solid #11C1A4;
  margin: 0 0 0 -1px;
  display: inline-block;
  background: #fff;
  height: 2.1rem
}

.articles-index .articles-index-inner .pagenator span:first-child {
  border-radius: .4rem 0 0 .4rem
}

.articles-index .articles-index-inner .pagenator span:last-child {
  border-radius: 0 .4rem .4rem 0
}

.articles-index .articles-index-inner .pagenator span:hover {
  background: #dbf5f0
}

.articles-index .articles-index-inner .pagenator span a {
  padding: .6rem;
  line-height: 2
}

.articles-index .articles-index-inner .pagenator .gap {
  padding: 0 .6rem;
  line-height: 2
}

.articles-index .articles-index-inner .pagenator .gap:hover {
  background: inherit
}

.articles-index .articles-index-inner .pagenator .current {
  color: #11c5a4;
  background: #dbf5f0;
  padding: 0 .6rem;
  line-height: 2
}

@media all and (max-width: 1119px) {
  .articles-show {
    width: 95%;
    padding: 30px
  }
}

@media all and (max-width: 767px) {
  .articles-show {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto 30px;
    padding: 1rem 1rem 4rem
  }
}

.articles-show .breadcrumbs {
  margin: 0 0 30px;
  overflow: hidden
}

.articles-show .breadcrumbs .breadcrumbs-inner {
  width: 100%;
  line-height: 1.5
}

.articles-show .breadcrumbs .breadcrumbs-inner ul {
  margin-bottom: 20px
}

.articles-show .breadcrumbs .breadcrumbs-inner li {
  font-size: 1rem
}

.articles-show .articles-show-inner {
  width: 700px;
  float: left;
  box-sizing: border-box
}

@media all and (max-width: 1119px) {
  .articles-show .articles-show-inner {
    width: 67%
  }
}

@media all and (max-width: 767px) {
  .articles-show .articles-show-inner {
    width: 100%;
    box-sizing: border-box;
    float: none
  }
}

.articles-show .articles-show-inner .article-header .title {
  margin: 0 auto 20px auto
}

.articles-show .articles-show-inner .article-body {
  font-size: 14px;
  line-height: 1.5em
}

.articles-show .articles-show-inner .article-body h1 {
  margin-top: 3rem;
  margin-bottom: 2.2rem;
  border-bottom-color: #11C1A4;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  padding-bottom: 0.5em
}

.articles-show .articles-show-inner .article-body h2 {
  font-size: 24px;
  margin-top: 3rem;
  margin-bottom: 2.2rem;
  border-bottom-color: #11C1A4;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  padding-bottom: 1.2rem
}

.articles-show .articles-show-inner .article-body h3 {
  font-size: 18px;
  margin-top: 3rem;
  margin-bottom: 15px;
  background: rgba(147, 216, 207, 0.17);
  padding: 1rem;
  border-radius: .5rem
}

.articles-show .articles-show-inner .article-body h4 {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 0 0 0 1rem
}

.articles-show .articles-show-inner .article-body h4:before {
  position: absolute;
  display: block;
  content: '';
  width: 4px;
  height: 1.4rem;
  background: #008670;
  border-radius: 3px;
  margin: 0 0 0 -1rem
}

.articles-show .articles-show-inner .article-body h5 {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 15px
}

.articles-show .articles-show-inner .article-body h6 {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 15px
}

.articles-show .articles-show-inner .article-body img {
  display: block;
  max-width: 90%;
  margin: 30px auto
}

.articles-show .articles-show-inner .article-body em {
  font-weight: bold
}

.articles-show .articles-show-inner .article-body strong {
  font-weight: bold
}

.articles-show .articles-show-inner .article-body p {
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify
}

.articles-show .articles-show-inner .article-body hr {
  border-color: #EEE;
  border-bottom-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  display: block
}

.articles-show .articles-show-inner .article-body a:hover {
  text-decoration: underline
}

.articles-show .articles-show-inner .article-body ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-top: 0.5em;
  padding-bottom: 1em;
  padding-left: 1.5em;
  text-indent: -1.5em
}

.articles-show .articles-show-inner .article-body ul li {
  list-style-type: disc;
  list-style-position: outside;
  text-indent: 0px;
  margin-top: 5px;
  margin-bottom: 5px
}

.articles-show .articles-show-inner .article-body ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-top: 0.5em;
  padding-bottom: 1em;
  padding-left: 1.5em;
  text-indent: -1.5em
}

.articles-show .articles-show-inner .article-body ol li {
  list-style-type: decimal;
  list-style-position: inside;
  margin-top: 5px;
  margin-bottom: 5px
}

.articles-show .articles-show-inner .article-body table {
  table-layout: fixed;
  width: 100%;
  word-wrap: break-word;
  display: block;
  overflow-x: auto;
  border-collapse: separate
}

.articles-show .articles-show-inner .article-body table tr {
  line-height: 1.4
}

.articles-show .articles-show-inner .article-body table tr td, .articles-show .articles-show-inner .article-body table tr th {
  border-color: #ddd;
  border-style: solid;
  border-width: 1px;
  border-left-width: 0;
  border-top-width: 0;
  padding: 0.5em;
  min-width: 30px;
  text-wrap: nowrap;
  font-size: 10px
}

.articles-show .articles-show-inner .article-body table tr td.long-text, .articles-show .articles-show-inner .article-body table tr th.long-text {
  text-wrap: wrap
}

.articles-show .articles-show-inner .article-body table tr td.long-text-100, .articles-show .articles-show-inner .article-body table tr th.long-text-100 {
  text-wrap: wrap;
  min-width: 100px
}

.articles-show .articles-show-inner .article-body table tr td.long-text-200, .articles-show .articles-show-inner .article-body table tr th.long-text-200 {
  text-wrap: wrap;
  min-width: 200px
}

.articles-show .articles-show-inner .article-body table tr td.long-text-300, .articles-show .articles-show-inner .article-body table tr th.long-text-300 {
  text-wrap: wrap;
  min-width: 300px
}

.articles-show .articles-show-inner .article-body table tr td.long-text-400, .articles-show .articles-show-inner .article-body table tr th.long-text-400 {
  text-wrap: wrap;
  min-width: 400px
}

.articles-show .articles-show-inner .article-body table tr td.long-text-500, .articles-show .articles-show-inner .article-body table tr th.long-text-500 {
  text-wrap: wrap;
  min-width: 500px
}

.articles-show .articles-show-inner .article-body table tr td.long-text-600, .articles-show .articles-show-inner .article-body table tr th.long-text-600 {
  text-wrap: wrap;
  min-width: 600px
}

.articles-show .articles-show-inner .article-body table tr td {
  text-align: left
}

.articles-show .articles-show-inner .article-body table tr th {
  text-align: center;
  font-weight: bold;
  background-color: #f4f4f4
}

.articles-show .articles-show-inner .article-body table tr td:first-child, .articles-show .articles-show-inner .article-body table tr th:first-child {
  border-left-width: 1px
}

.articles-show .articles-show-inner .article-body table thead:first-child tr:first-child th, .articles-show .articles-show-inner .article-body table thead:first-child tr:first-child td, .articles-show .articles-show-inner .article-body table tbody:first-child tr:first-child th, .articles-show .articles-show-inner .article-body table tbody:first-child tr:first-child td {
  border-top-width: 1px
}

.articles-show .articles-show-inner .article-body table tbody tr th:first-child {
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  left: 0
}

.articles-show .articles-show-inner .article-body table.no-scroll tr td, .articles-show .articles-show-inner .article-body table.no-scroll tr th {
  text-wrap: wrap
}

.articles-show .articles-show-inner .article-body blockquote {
  border-left-color: #ddd;
  border-left-style: solid;
  border-left-width: 3.5px;
  box-sizing: border-box;
  color: #666;
  display: block;
  line-height: 21px;
  margin-bottom: 20px;
  padding-left: 1em
}

.articles-show .articles-show-inner .article-body code {
  background-color: #F6F8FA;
  padding: 3px;
  line-height: 1.5em
}

.articles-show .articles-show-inner .article-body .card-link + .card-link {
  margin-top: 1em
}

.articles-show .articles-show-inner .article-body .card-link:last-of-type {
  margin-bottom: 1em
}

.articles-show .articles-show-inner .article-body .card-link img {
  margin: 0
}

.articles-show .articles-show-inner .article-body .card-link a:hover {
  text-decoration: none
}

.articles-show .articles-show-inner .article-body .ccc_article_index {
  border: 2px solid #17ca94;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem
}

.articles-show .articles-show-inner .article-body .ccc_article_index p.ccc_article_index_title {
  margin: 1rem;
  background: #17ca94;
  padding: 0.5rem;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  border-radius: 0.3rem;
  font-size: 16px
}

.articles-show .articles-show-inner .article-body .ccc_article_index ul.ccc_article_index_list li {
  margin: 0.8rem;
  font-size: 16px
}

.articles-show .articles-show-inner .article-body .ccc_article_box {
  border: 2px solid #17ca94;
  border-radius: 0.5rem;
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem
}

.articles-show .articles-show-inner .article-body .ccc_article_box p.ccc_article_box_title {
  position: absolute;
  top: -0.6rem;
  display: inline-block;
  background: #17ca94;
  padding: 0.5rem 1.5rem;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  border-radius: 0.5rem 0 0.3rem 0;
  font-size: 14px
}

.articles-show .articles-show-inner .article-body .ccc_article_box p.ccc_article_box_text {
  margin: 3rem 1rem 1rem;
  line-height: 1.8rem
}

.articles-show .articles-show-inner .article-body .ccc_article_comment {
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_box {
  background: #edf1f0;
  color: #194035;
  font-size: 14px;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.3rem
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_container {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  text-align: left;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_container img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center;
  display: inline-block;
  background-size: contain
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_container .aboutspeaker {
  line-height: 0.4rem;
  margin-left: 0.5rem
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_container .aboutspeaker p.company {
  font-size: 12px;
  font-weight: bold
}

.articles-show .articles-show-inner .article-body .ccc_article_comment .ccc_article_comment_container .aboutspeaker p.name {
  font-size: 14px
}

.articles-show .articles-show-inner .references-link {
  color: #B5C6C1
}

.articles-show .articles-show-inner .references-link h6 {
  font-size: 0.7rem;
  margin: 0;
  color: inherit
}

.articles-show .articles-show-inner .references-link ul {
  list-style-type: none;
  margin-top: 0
}

.articles-show .articles-show-inner .references-link ul li {
  counter-increment: li;
  margin: 0
}

.articles-show .articles-show-inner .references-link ul li::marker {
  content: "[" counter(li) "]";
  display: list-item
}

.articles-show .articles-show-inner .references-link ul li a {
  text-decoration: underline;
  color: inherit
}

.articles-show .articles-show-inner .reaction {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 2em
}

.articles-show .articles-show-inner .reaction.is-article-footer {
  margin-top: 2em;
  border-top: solid 1px #eee
}

.articles-show .articles-show-inner .button {
  border: 0;
  background: #11C1A4;
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
  padding: 1rem 1.4rem;
  margin-top: 20px;
  font-weight: bold
}

.articles-show .articles-show-inner .button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.articles-show .articles-show-inner .button.disabled, .articles-show .articles-show-inner .button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.articles-show .articles-show-inner .button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #49efd4
}

.articles-show .articles-show-inner .button.is-orange {
  background: orange
}

@media all and (min-width: 767px) {
  .articles-show .articles-show-inner .button.is-mobile-app-btn {
    display: none
  }
}

@media all and (max-width: 767px) {
  .articles-show .articles-show-inner .button.is-mobile-app-btn {
    display: block;
    position: fixed;
    bottom: 10px;
    z-index: 1000;
    padding: .6rem 1rem
  }
}

.articles-show .articles-show-inner .check-list ul {
  padding: 0.5em
}

.articles-show .articles-show-inner .check-list ul li {
  position: relative;
  padding: 0.5em 1em 0.5em 2.3em;
  margin-bottom: 5px;
  border-bottom: 1px solid #11c1a4;
  list-style-type: none
}

.articles-show .articles-show-inner .check-list ul li:after, .articles-show .articles-show-inner .check-list ul li:before {
  content: '';
  position: absolute;
  border-radius: 50%
}

.articles-show .articles-show-inner .check-list ul li:before {
  top: 50%;
  left: 0.2em;
  width: 17px;
  height: 17px;
  background: #11c1a4;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}

.articles-show .articles-show-inner .check-list ul li:after {
  top: 1.1em;
  left: 0.7em;
  width: 14px;
  height: 14px;
  background: rgba(17, 193, 164, 0.5)
}

.articles-show .articles-show-inner .merit ul {
  padding: 0.5em
}

.articles-show .articles-show-inner .merit ul li {
  position: relative;
  padding: 0.5em 1em 0.5em 2.3em;
  margin-bottom: 5px;
  border-bottom: 1px solid #ffa031;
  list-style-type: none
}

.articles-show .articles-show-inner .merit ul li:after, .articles-show .articles-show-inner .merit ul li:before {
  content: '';
  position: absolute;
  border-radius: 50%
}

.articles-show .articles-show-inner .merit ul li:before {
  top: 50%;
  left: 0.2em;
  width: 17px;
  height: 17px;
  background: #ffa031;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}

.articles-show .articles-show-inner .merit ul li:after {
  top: 1.1em;
  left: 0.7em;
  width: 14px;
  height: 14px;
  background: rgba(255, 160, 49, 0.5)
}

.articles-show .articles-show-inner .demerit ul {
  padding: 0.5em
}

.articles-show .articles-show-inner .demerit ul li {
  position: relative;
  padding: 0.5em 1em 0.5em 2.3em;
  margin-bottom: 5px;
  border-bottom: 1px solid #3498db;
  list-style-type: none
}

.articles-show .articles-show-inner .demerit ul li:after, .articles-show .articles-show-inner .demerit ul li:before {
  content: '';
  position: absolute;
  border-radius: 50%
}

.articles-show .articles-show-inner .demerit ul li:before {
  top: 50%;
  left: 0.2em;
  width: 17px;
  height: 17px;
  background: #3498db;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}

.articles-show .articles-show-inner .demerit ul li:after {
  top: 1.1em;
  left: 0.7em;
  width: 14px;
  height: 14px;
  background: rgba(52, 152, 219, 0.5)
}

.articles-show .related-articles {
  margin-top: 40px
}

@media all and (max-width: 767px) {
  .articles-show .related-articles {
    margin-bottom: 3rem
  }
}

.articles-show .related-articles .card-link:not(:last-child) {
  margin-bottom: 10px
}

.articles-show .related-articles h2 {
  font-size: 18px;
  margin-bottom: 1.4em
}

.articles-show .link-copy-target {
  display: none
}

.articles-show .articles-share-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.articles-show .articles-share-top li {
  margin-left: 7px;
  height: 28px
}

.articles-show .articles-share-top li:hover {
  opacity: 0.7
}

.articles-show .articles-share-top li:first-child {
  border-radius: 6px;
  background-color: #1378f2
}

.articles-show .articles-share-top li:nth-child(2) {
  border-radius: 6px;
  background-color: #000000
}

.articles-show .articles-share-top li:nth-child(3) {
  border-radius: 6px;
  background-color: #01a4de
}

.articles-show .articles-share-top li:nth-child(4) {
  border-radius: 6px;
  background-color: #08bb00
}

.articles-show .articles-share-top li:last-child {
  cursor: pointer;
  border-radius: 6px;
  background-color: #dcdcdc
}

.articles-show .articles-share-text {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold
}

.articles-show .articles-share-bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.articles-show .articles-share-bottom li {
  margin-left: 10px
}

.articles-show .articles-share-bottom li:hover {
  opacity: 0.7
}

.articles-show .articles-share-bottom li:last-child {
  cursor: pointer;
  border-radius: 50%;
  background-color: #dcdcdc
}

.articles-show #tv_chart_container {
  margin: 20px 0 30px 0;
  height: 400px;
  background-color: #e7ebee;
  padding: 5px
}

.sidebar {
  width: 20rem;
  float: right;
  box-sizing: border-box
}

@media all and (max-width: 1119px) {
  .sidebar {
    width: 30%
  }
}

@media all and (max-width: 767px) {
  .sidebar {
    width: 100%
  }
}

.sidebar ul {
  list-style: none
}

.sidebar li {
  position: relative;
  margin: 0 0 1rem
}

@media all and (max-width: 767px) {
  .sidebar li {
    margin: 0 0 1.4rem
  }
}

.sidebar li a {
  color: #008670
}

.sidebar li a:hover {
  text-decoration: underline
}

.sidebar .searchbox {
  position: relative;
  border: solid;
  border-width: 1px;
  border-color: #C3C3C3;
  border-radius: 25px;
  padding: 5px 10px;
  margin: 0 0 40px
}

.sidebar .searchbox i {
  padding: 0 10px;
  cursor: pointer;
  position: absolute;
  top: 15px
}

.sidebar .searchbox input[type="text"] {
  display: block;
  width: 100%;
  height: 35px;
  margin: 0;
  padding: 0;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 16px
}

.sidebar .widget-title {
  margin-bottom: 1em;
  font-size: 1.2rem
}

.note {
  color: rgba(15, 92, 101, 0.6);
  font-size: 11px;
  line-height: 1.5;
  margin: 3rem 0 3rem
}

.note a {
  color: rgba(15, 92, 101, 0.6);
  text-decoration: none
}

.note ul {
  margin-bottom: 2em
}

.fb-note {
  color: #666;
  font-size: 11px;
  line-height: 1.5;
  margin-top: 10px
}

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

.deposit-request {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .deposit-request {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .deposit-request {
    padding: 10px
  }
}

.deposit-request .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .deposit-request .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.deposit-request .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.deposit-request .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.deposit-request .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.deposit-request .title .svg-icon-menu path {
  fill: #20C2D3
}

.deposit-request .link {
  color: #2980B9;
  text-decoration: none
}

.deposit-request .link:hover {
  color: #34495E
}

.deposit-request .faq {
  line-height: 30px
}

@media all and (max-width: 767px) {
  .deposit-request .deposit-request-inner {
    padding: 30px 10px;
    width: 100%;
    margin: 0 auto 30px
  }
}

.deposit-request .deposit-request-notice {
  padding: 0 0 20px;
  line-height: 22px;
  font-size: 14px
}

.deposit-request .alert {
  padding: 20px;
  background-color: #FFB0A8
}

.deposit-request .alert .alert-title {
  font-weight: bold;
  font-size: 18px
}

.deposit-request .text {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px
}

.deposit-request .explanation {
  margin-bottom: 20px
}

.deposit-request .notice {
  color: #E74C3C;
  font-weight: bold
}

.deposit-request .list-desc, .deposit-request .sent-deposit-request {
  border-bottom: solid 1px #ddd;
  padding-bottom: 12px
}

.deposit-request .sent-deposit-request {
  margin-bottom: 20px
}

.deposit-request .sent-deposit-request .row .key {
  font-weight: bold;
  display: inline-block;
  width: 140px
}

.deposit-request .sent-deposit-request .row .value {
  display: inline-block
}

.deposit-request .form {
  margin-top: 12px
}

.deposit-request .form .star {
  color: #C0392B;
  font-size: 20px;
  height: 15px;
  display: inline-block;
  vertical-align: top;
  margin-right: 3px
}

.deposit-request .form label {
  display: inline-block;
  margin-bottom: 10px;
  max-width: 100%
}

.deposit-request .form input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 30px;
  padding: 8px 10px;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  font: inherit
}

.deposit-request .form select {
  display: block;
  margin-bottom: 30px;
  border: none;
  height: 40px;
  background-color: #EEE;
  font-size: 15px
}

.deposit-request .form textarea {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px
}

.deposit-request .form .submit {
  border: 0;
  background: #1ABC9C;
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
  position: relative
}

.deposit-request .form .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.deposit-request .form .submit.disabled, .deposit-request .form .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.deposit-request .form .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #55e7ca
}

.deposit-request.top-margin {
  margin-top: 100px
}

.deposit-request .over_limit_notice {
  margin: 30px 50px;
  padding: 18px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  border: solid 3px #FF0000
}

.deposit-request .suggest {
  display: block;
  position: absolute;
  z-index: 201;
  width: 100vw
}

.deposit-request .suggest .suggest-list {
  background-color: #ECF0F1;
  position: absolute;
  top: -20px;
  width: 320px;
  max-height: 300px;
  overflow: scroll
}

@media all and (max-width: 767px) {
  .deposit-request .suggest .suggest-list {
    width: 95vw;
    max-height: 200px
  }
}

.deposit-request .suggest .suggest-list .suggest-item {
  background-color: #ECF0F1;
  padding: 10px 0px 10px 10px
}

.deposit-request .suggest .suggest-list .suggest-item:hover {
  background-color: #DDDDDD;
  cursor: pointer
}

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

dialog.sms-authenticate-ctrl[open] {
  margin: 100px auto;
  padding: 0;
  overflow: auto;
  outline: none;
  border: none;
  border-radius: 2px;
  background-color: #fff
}

@media all and (max-width: 767px) {
  dialog.sms-authenticate-ctrl[open] {
    min-width: 100vw
  }
}

dialog.sms-authenticate-ctrl[open] .modal_box {
  width: 560px
}

@media all and (max-width: 767px) {
  dialog.sms-authenticate-ctrl[open] .modal_box {
    width: 100%
  }
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-header .close {
  cursor: pointer;
  background: transparent;
  border: 0;
  float: right;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.5
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-body {
  padding: 15px
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-body input.input-password {
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  outline: none
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer {
  border-top: 1px solid #eee;
  padding-top: 10px
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .error {
  background: #f9e5e5;
  color: #DA4C4C;
  border-radius: 2px;
  border: 1px solid transparent;
  margin: 10px;
  padding: 10px
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .error li {
  list-style: none
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .accept-button {
  border: 0;
  background: #20C2D3;
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
  width: 120px;
  display: block;
  margin: 10px auto;
  position: static
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .accept-button.disabled, dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .help-link {
  margin: 20px 10px
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .help-link p {
  text-align: center
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .help-link p .link {
  color: #2980B9;
  text-decoration: none
}

dialog.sms-authenticate-ctrl[open] .modal_box .modal-footer .help-link p .link:hover {
  color: #34495E
}

dialog.sms-authenticate-ctrl[open]::-webkit-backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

dialog.sms-authenticate-ctrl[open]::backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

dialog.two-factor-authenticate-ctrl[open] {
  margin: 100px auto;
  padding: 0;
  overflow: auto;
  outline: none;
  border: none;
  border-radius: 2px;
  background-color: #fff
}

@media all and (max-width: 767px) {
  dialog.two-factor-authenticate-ctrl[open] {
    min-width: 100vw
  }
}

dialog.two-factor-authenticate-ctrl[open] .modal_box {
  width: 560px
}

@media all and (max-width: 767px) {
  dialog.two-factor-authenticate-ctrl[open] .modal_box {
    width: 100%
  }
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-header .close {
  cursor: pointer;
  background: transparent;
  border: 0;
  float: right;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.5
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-body {
  padding: 15px
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-body input.input-password {
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  outline: none
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer {
  border-top: 1px solid #eee;
  padding-top: 10px
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .error {
  background: #f9e5e5;
  color: #DA4C4C;
  border-radius: 2px;
  border: 1px solid transparent;
  margin: 10px;
  padding: 10px
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .error li {
  list-style: none
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .accept-button {
  border: 0;
  background: #20C2D3;
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
  width: 120px;
  display: block;
  margin: 10px auto;
  position: static
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .accept-button.disabled, dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

dialog.two-factor-authenticate-ctrl[open] .modal_box .modal-footer .accept-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

dialog.two-factor-authenticate-ctrl[open]::-webkit-backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

dialog.two-factor-authenticate-ctrl[open]::backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

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

.error-404 {
  padding: 100px 0
}

.error-404 .title {
  text-align: center;
  font-size: 30px;
  color: #555;
  margin-bottom: 30px
}

.error-404 .text {
  text-align: center;
  font-size: 20px;
  color: #555
}

@media all and (min-width: 768px) {
  .error-404 {
    margin-top: 70px
  }
}

.error-403 {
  padding: 100px 0
}

.error-403 .title {
  text-align: center;
  font-size: 30px;
  color: #555;
  margin-bottom: 30px
}

.error-403 .text {
  text-align: center;
  font-size: 20px;
  color: #555
}

@media all and (min-width: 768px) {
  .error-403 {
    margin-top: 70px
  }
}

.error-expired-token {
  padding: 100px 0
}

.error-expired-token .text {
  text-align: center;
  font-size: 20px;
  color: #555;
  line-height: 130%
}

.error-expired-token .link {
  color: #2980B9;
  text-decoration: none
}

.error-expired-token .link:hover {
  color: #34495E
}

@media all and (min-width: 768px) {
  .error-expired-token {
    margin-top: 70px
  }
}

/*!
 *  Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
@font-face {
  font-family: 'FontAwesome';
  src: url(https://assets.coincheck.com/assets/fonts/fontawesome-webfont-e511891d3e01b0b27aed51a219ced5119e2c3d0460465af8242e9bff4cb61b77.eot?v=4.2.0);
  src: url(https://assets.coincheck.com/assets/fonts/fontawesome-webfont-e511891d3e01b0b27aed51a219ced5119e2c3d0460465af8242e9bff4cb61b77.eot?#iefix&v=4.2.0) format("embedded-opentype"), url(https://assets.coincheck.com/assets/fonts/fontawesome-webfont-199411f659f41aaccb959bacb1b0de30e54f244352a48c6f9894e65ae0f8a9a1.woff?v=4.2.0) format("woff"), url(https://assets.coincheck.com/assets/fonts/fontawesome-webfont-4d6eb9e9d852a2a6f74e7c428456a2f07fc63a1613d10192d8ed3401d9da5ffa.ttf?v=4.2.0) format("truetype"), url(https://assets.coincheck.com/assets/fonts/fontawesome-webfont-d5b5636ebb2e124810436200086b74a60dff9e8a8be7f4a1088bf5d3458bc3c8.svg?v=4.2.0#fontawesomeregular) format("svg");
  font-weight: normal;
  font-style: normal
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%
}

.fa-2x {
  font-size: 2em
}

.fa-3x {
  font-size: 3em
}

.fa-4x {
  font-size: 4em
}

.fa-5x {
  font-size: 5em
}

.fa-fw {
  width: 1.28571429em;
  text-align: center
}

.fa-ul {
  padding-left: 0;
  margin-left: 2.14285714em;
  list-style-type: none
}

.fa-ul > li {
  position: relative
}

.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center
}

.fa-li.fa-lg {
  left: -1.85714286em
}

.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eeeeee;
  border-radius: .1em
}

.pull-right {
  float: right
}

.pull-left {
  float: left
}

.fa.pull-left {
  margin-right: .3em
}

.fa.pull-right {
  margin-left: .3em
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
  animation: fa-spin 2s infinite linear
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}

.fa-rotate-90 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg)
}

.fa-rotate-180 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg)
}

.fa-rotate-270 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg)
}

.fa-flip-horizontal {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
  -webkit-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1)
}

.fa-flip-vertical {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1)
}

:root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical {
  -webkit-filter: none;
  filter: none
}

.fa-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: middle
}

.fa-stack-1x, .fa-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center
}

.fa-stack-1x {
  line-height: inherit
}

.fa-stack-2x {
  font-size: 2em
}

.fa-inverse {
  color: #ffffff
}

.fa-glass:before {
  content: "\f000"
}

.fa-music:before {
  content: "\f001"
}

.fa-search:before {
  content: "\f002"
}

.fa-envelope-o:before {
  content: "\f003"
}

.fa-heart:before {
  content: "\f004"
}

.fa-star:before {
  content: "\f005"
}

.fa-star-o:before {
  content: "\f006"
}

.fa-user:before {
  content: "\f007"
}

.fa-film:before {
  content: "\f008"
}

.fa-th-large:before {
  content: "\f009"
}

.fa-th:before {
  content: "\f00a"
}

.fa-th-list:before {
  content: "\f00b"
}

.fa-check:before {
  content: "\f00c"
}

.fa-remove:before, .fa-close:before, .fa-times:before {
  content: "\f00d"
}

.fa-search-plus:before {
  content: "\f00e"
}

.fa-search-minus:before {
  content: "\f010"
}

.fa-power-off:before {
  content: "\f011"
}

.fa-signal:before {
  content: "\f012"
}

.fa-gear:before, .fa-cog:before {
  content: "\f013"
}

.fa-trash-o:before {
  content: "\f014"
}

.fa-home:before {
  content: "\f015"
}

.fa-file-o:before {
  content: "\f016"
}

.fa-clock-o:before {
  content: "\f017"
}

.fa-road:before {
  content: "\f018"
}

.fa-download:before {
  content: "\f019"
}

.fa-arrow-circle-o-down:before {
  content: "\f01a"
}

.fa-arrow-circle-o-up:before {
  content: "\f01b"
}

.fa-inbox:before {
  content: "\f01c"
}

.fa-play-circle-o:before {
  content: "\f01d"
}

.fa-rotate-right:before, .fa-repeat:before {
  content: "\f01e"
}

.fa-refresh:before {
  content: "\f021"
}

.fa-list-alt:before {
  content: "\f022"
}

.fa-lock:before {
  content: "\f023"
}

.fa-flag:before {
  content: "\f024"
}

.fa-headphones:before {
  content: "\f025"
}

.fa-volume-off:before {
  content: "\f026"
}

.fa-volume-down:before {
  content: "\f027"
}

.fa-volume-up:before {
  content: "\f028"
}

.fa-qrcode:before {
  content: "\f029"
}

.fa-barcode:before {
  content: "\f02a"
}

.fa-tag:before {
  content: "\f02b"
}

.fa-tags:before {
  content: "\f02c"
}

.fa-book:before {
  content: "\f02d"
}

.fa-bookmark:before {
  content: "\f02e"
}

.fa-print:before {
  content: "\f02f"
}

.fa-camera:before {
  content: "\f030"
}

.fa-font:before {
  content: "\f031"
}

.fa-bold:before {
  content: "\f032"
}

.fa-italic:before {
  content: "\f033"
}

.fa-text-height:before {
  content: "\f034"
}

.fa-text-width:before {
  content: "\f035"
}

.fa-align-left:before {
  content: "\f036"
}

.fa-align-center:before {
  content: "\f037"
}

.fa-align-right:before {
  content: "\f038"
}

.fa-align-justify:before {
  content: "\f039"
}

.fa-list:before {
  content: "\f03a"
}

.fa-dedent:before, .fa-outdent:before {
  content: "\f03b"
}

.fa-indent:before {
  content: "\f03c"
}

.fa-video-camera:before {
  content: "\f03d"
}

.fa-photo:before, .fa-image:before, .fa-picture-o:before {
  content: "\f03e"
}

.fa-pencil:before {
  content: "\f040"
}

.fa-map-marker:before {
  content: "\f041"
}

.fa-adjust:before {
  content: "\f042"
}

.fa-tint:before {
  content: "\f043"
}

.fa-edit:before, .fa-pencil-square-o:before {
  content: "\f044"
}

.fa-share-square-o:before {
  content: "\f045"
}

.fa-check-square-o:before {
  content: "\f046"
}

.fa-arrows:before {
  content: "\f047"
}

.fa-step-backward:before {
  content: "\f048"
}

.fa-fast-backward:before {
  content: "\f049"
}

.fa-backward:before {
  content: "\f04a"
}

.fa-play:before {
  content: "\f04b"
}

.fa-pause:before {
  content: "\f04c"
}

.fa-stop:before {
  content: "\f04d"
}

.fa-forward:before {
  content: "\f04e"
}

.fa-fast-forward:before {
  content: "\f050"
}

.fa-step-forward:before {
  content: "\f051"
}

.fa-eject:before {
  content: "\f052"
}

.fa-chevron-left:before {
  content: "\f053"
}

.fa-chevron-right:before {
  content: "\f054"
}

.fa-plus-circle:before {
  content: "\f055"
}

.fa-minus-circle:before {
  content: "\f056"
}

.fa-times-circle:before {
  content: "\f057"
}

.fa-check-circle:before {
  content: "\f058"
}

.fa-question-circle:before {
  content: "\f059"
}

.fa-info-circle:before {
  content: "\f05a"
}

.fa-crosshairs:before {
  content: "\f05b"
}

.fa-times-circle-o:before {
  content: "\f05c"
}

.fa-check-circle-o:before {
  content: "\f05d"
}

.fa-ban:before {
  content: "\f05e"
}

.fa-arrow-left:before {
  content: "\f060"
}

.fa-arrow-right:before {
  content: "\f061"
}

.fa-arrow-up:before {
  content: "\f062"
}

.fa-arrow-down:before {
  content: "\f063"
}

.fa-mail-forward:before, .fa-share:before {
  content: "\f064"
}

.fa-expand:before {
  content: "\f065"
}

.fa-compress:before {
  content: "\f066"
}

.fa-plus:before {
  content: "\f067"
}

.fa-minus:before {
  content: "\f068"
}

.fa-asterisk:before {
  content: "\f069"
}

.fa-exclamation-circle:before {
  content: "\f06a"
}

.fa-gift:before {
  content: "\f06b"
}

.fa-leaf:before {
  content: "\f06c"
}

.fa-fire:before {
  content: "\f06d"
}

.fa-eye:before {
  content: "\f06e"
}

.fa-eye-slash:before {
  content: "\f070"
}

.fa-warning:before, .fa-exclamation-triangle:before {
  content: "\f071"
}

.fa-plane:before {
  content: "\f072"
}

.fa-calendar:before {
  content: "\f073"
}

.fa-random:before {
  content: "\f074"
}

.fa-comment:before {
  content: "\f075"
}

.fa-magnet:before {
  content: "\f076"
}

.fa-chevron-up:before {
  content: "\f077"
}

.fa-chevron-down:before {
  content: "\f078"
}

.fa-retweet:before {
  content: "\f079"
}

.fa-shopping-cart:before {
  content: "\f07a"
}

.fa-folder:before {
  content: "\f07b"
}

.fa-folder-open:before {
  content: "\f07c"
}

.fa-arrows-v:before {
  content: "\f07d"
}

.fa-arrows-h:before {
  content: "\f07e"
}

.fa-bar-chart-o:before, .fa-bar-chart:before {
  content: "\f080"
}

.fa-twitter-square:before {
  content: "\f081"
}

.fa-facebook-square:before {
  content: "\f082"
}

.fa-camera-retro:before {
  content: "\f083"
}

.fa-key:before {
  content: "\f084"
}

.fa-gears:before, .fa-cogs:before {
  content: "\f085"
}

.fa-comments:before {
  content: "\f086"
}

.fa-thumbs-o-up:before {
  content: "\f087"
}

.fa-thumbs-o-down:before {
  content: "\f088"
}

.fa-star-half:before {
  content: "\f089"
}

.fa-heart-o:before {
  content: "\f08a"
}

.fa-sign-out:before {
  content: "\f08b"
}

.fa-linkedin-square:before {
  content: "\f08c"
}

.fa-thumb-tack:before {
  content: "\f08d"
}

.fa-external-link:before {
  content: "\f08e"
}

.fa-sign-in:before {
  content: "\f090"
}

.fa-trophy:before {
  content: "\f091"
}

.fa-github-square:before {
  content: "\f092"
}

.fa-upload:before {
  content: "\f093"
}

.fa-lemon-o:before {
  content: "\f094"
}

.fa-phone:before {
  content: "\f095"
}

.fa-square-o:before {
  content: "\f096"
}

.fa-bookmark-o:before {
  content: "\f097"
}

.fa-phone-square:before {
  content: "\f098"
}

.fa-twitter:before {
  content: "\f099"
}

.fa-facebook:before {
  content: "\f09a"
}

.fa-github:before {
  content: "\f09b"
}

.fa-unlock:before {
  content: "\f09c"
}

.fa-credit-card:before {
  content: "\f09d"
}

.fa-rss:before {
  content: "\f09e"
}

.fa-hdd-o:before {
  content: "\f0a0"
}

.fa-bullhorn:before {
  content: "\f0a1"
}

.fa-bell:before {
  content: "\f0f3"
}

.fa-certificate:before {
  content: "\f0a3"
}

.fa-hand-o-right:before {
  content: "\f0a4"
}

.fa-hand-o-left:before {
  content: "\f0a5"
}

.fa-hand-o-up:before {
  content: "\f0a6"
}

.fa-hand-o-down:before {
  content: "\f0a7"
}

.fa-arrow-circle-left:before {
  content: "\f0a8"
}

.fa-arrow-circle-right:before {
  content: "\f0a9"
}

.fa-arrow-circle-up:before {
  content: "\f0aa"
}

.fa-arrow-circle-down:before {
  content: "\f0ab"
}

.fa-globe:before {
  content: "\f0ac"
}

.fa-wrench:before {
  content: "\f0ad"
}

.fa-tasks:before {
  content: "\f0ae"
}

.fa-filter:before {
  content: "\f0b0"
}

.fa-briefcase:before {
  content: "\f0b1"
}

.fa-arrows-alt:before {
  content: "\f0b2"
}

.fa-group:before, .fa-users:before {
  content: "\f0c0"
}

.fa-chain:before, .fa-link:before {
  content: "\f0c1"
}

.fa-cloud:before {
  content: "\f0c2"
}

.fa-flask:before {
  content: "\f0c3"
}

.fa-cut:before, .fa-scissors:before {
  content: "\f0c4"
}

.fa-copy:before, .fa-files-o:before {
  content: "\f0c5"
}

.fa-paperclip:before {
  content: "\f0c6"
}

.fa-save:before, .fa-floppy-o:before {
  content: "\f0c7"
}

.fa-square:before {
  content: "\f0c8"
}

.fa-navicon:before, .fa-reorder:before, .fa-bars:before, .fa-bars-lending:before {
  content: "\f0c9"
}

.fa-list-ul:before {
  content: "\f0ca"
}

.fa-list-ol:before {
  content: "\f0cb"
}

.fa-strikethrough:before {
  content: "\f0cc"
}

.fa-underline:before {
  content: "\f0cd"
}

.fa-table:before {
  content: "\f0ce"
}

.fa-magic:before {
  content: "\f0d0"
}

.fa-truck:before {
  content: "\f0d1"
}

.fa-pinterest:before {
  content: "\f0d2"
}

.fa-pinterest-square:before {
  content: "\f0d3"
}

.fa-google-plus-square:before {
  content: "\f0d4"
}

.fa-google-plus:before {
  content: "\f0d5"
}

.fa-money:before {
  content: "\f0d6"
}

.fa-caret-down:before {
  content: "\f0d7"
}

.fa-caret-up:before {
  content: "\f0d8"
}

.fa-caret-left:before {
  content: "\f0d9"
}

.fa-caret-right:before {
  content: "\f0da"
}

.fa-columns:before {
  content: "\f0db"
}

.fa-unsorted:before, .fa-sort:before {
  content: "\f0dc"
}

.fa-sort-down:before, .fa-sort-desc:before {
  content: "\f0dd"
}

.fa-sort-up:before, .fa-sort-asc:before {
  content: "\f0de"
}

.fa-envelope:before {
  content: "\f0e0"
}

.fa-linkedin:before {
  content: "\f0e1"
}

.fa-rotate-left:before, .fa-undo:before {
  content: "\f0e2"
}

.fa-legal:before, .fa-gavel:before {
  content: "\f0e3"
}

.fa-dashboard:before, .fa-tachometer:before {
  content: "\f0e4"
}

.fa-comment-o:before {
  content: "\f0e5"
}

.fa-comments-o:before {
  content: "\f0e6"
}

.fa-flash:before, .fa-bolt:before {
  content: "\f0e7"
}

.fa-sitemap:before {
  content: "\f0e8"
}

.fa-umbrella:before {
  content: "\f0e9"
}

.fa-paste:before, .fa-clipboard:before {
  content: "\f0ea"
}

.fa-lightbulb-o:before {
  content: "\f0eb"
}

.fa-exchange:before {
  content: "\f0ec"
}

.fa-cloud-download:before {
  content: "\f0ed"
}

.fa-cloud-upload:before {
  content: "\f0ee"
}

.fa-user-md:before {
  content: "\f0f0"
}

.fa-stethoscope:before {
  content: "\f0f1"
}

.fa-suitcase:before {
  content: "\f0f2"
}

.fa-bell-o:before {
  content: "\f0a2"
}

.fa-coffee:before {
  content: "\f0f4"
}

.fa-cutlery:before {
  content: "\f0f5"
}

.fa-file-text-o:before {
  content: "\f0f6"
}

.fa-building-o:before {
  content: "\f0f7"
}

.fa-hospital-o:before {
  content: "\f0f8"
}

.fa-ambulance:before {
  content: "\f0f9"
}

.fa-medkit:before {
  content: "\f0fa"
}

.fa-fighter-jet:before {
  content: "\f0fb"
}

.fa-beer:before {
  content: "\f0fc"
}

.fa-h-square:before {
  content: "\f0fd"
}

.fa-plus-square:before {
  content: "\f0fe"
}

.fa-angle-double-left:before {
  content: "\f100"
}

.fa-angle-double-right:before {
  content: "\f101"
}

.fa-angle-double-up:before {
  content: "\f102"
}

.fa-angle-double-down:before {
  content: "\f103"
}

.fa-angle-left:before {
  content: "\f104"
}

.fa-angle-right:before {
  content: "\f105"
}

.fa-angle-up:before {
  content: "\f106"
}

.fa-angle-down:before {
  content: "\f107"
}

.fa-desktop:before {
  content: "\f108"
}

.fa-laptop:before {
  content: "\f109"
}

.fa-tablet:before {
  content: "\f10a"
}

.fa-mobile-phone:before, .fa-mobile:before {
  content: "\f10b"
}

.fa-circle-o:before {
  content: "\f10c"
}

.fa-quote-left:before {
  content: "\f10d"
}

.fa-quote-right:before {
  content: "\f10e"
}

.fa-spinner:before {
  content: "\f110"
}

.fa-circle:before {
  content: "\f111"
}

.fa-mail-reply:before, .fa-reply:before {
  content: "\f112"
}

.fa-github-alt:before {
  content: "\f113"
}

.fa-folder-o:before {
  content: "\f114"
}

.fa-folder-open-o:before {
  content: "\f115"
}

.fa-smile-o:before {
  content: "\f118"
}

.fa-frown-o:before {
  content: "\f119"
}

.fa-meh-o:before {
  content: "\f11a"
}

.fa-gamepad:before {
  content: "\f11b"
}

.fa-keyboard-o:before {
  content: "\f11c"
}

.fa-flag-o:before {
  content: "\f11d"
}

.fa-flag-checkered:before {
  content: "\f11e"
}

.fa-terminal:before {
  content: "\f120"
}

.fa-code:before {
  content: "\f121"
}

.fa-mail-reply-all:before, .fa-reply-all:before {
  content: "\f122"
}

.fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {
  content: "\f123"
}

.fa-location-arrow:before {
  content: "\f124"
}

.fa-crop:before {
  content: "\f125"
}

.fa-code-fork:before {
  content: "\f126"
}

.fa-unlink:before, .fa-chain-broken:before {
  content: "\f127"
}

.fa-question:before {
  content: "\f128"
}

.fa-info:before {
  content: "\f129"
}

.fa-exclamation:before {
  content: "\f12a"
}

.fa-superscript:before {
  content: "\f12b"
}

.fa-subscript:before {
  content: "\f12c"
}

.fa-eraser:before {
  content: "\f12d"
}

.fa-puzzle-piece:before {
  content: "\f12e"
}

.fa-microphone:before {
  content: "\f130"
}

.fa-microphone-slash:before {
  content: "\f131"
}

.fa-shield:before {
  content: "\f132"
}

.fa-calendar-o:before {
  content: "\f133"
}

.fa-fire-extinguisher:before {
  content: "\f134"
}

.fa-rocket:before {
  content: "\f135"
}

.fa-maxcdn:before {
  content: "\f136"
}

.fa-chevron-circle-left:before {
  content: "\f137"
}

.fa-chevron-circle-right:before {
  content: "\f138"
}

.fa-chevron-circle-up:before {
  content: "\f139"
}

.fa-chevron-circle-down:before {
  content: "\f13a"
}

.fa-html5:before {
  content: "\f13b"
}

.fa-css3:before {
  content: "\f13c"
}

.fa-anchor:before {
  content: "\f13d"
}

.fa-unlock-alt:before {
  content: "\f13e"
}

.fa-bullseye:before {
  content: "\f140"
}

.fa-ellipsis-h:before {
  content: "\f141"
}

.fa-ellipsis-v:before {
  content: "\f142"
}

.fa-rss-square:before {
  content: "\f143"
}

.fa-play-circle:before {
  content: "\f144"
}

.fa-ticket:before {
  content: "\f145"
}

.fa-minus-square:before {
  content: "\f146"
}

.fa-minus-square-o:before {
  content: "\f147"
}

.fa-level-up:before {
  content: "\f148"
}

.fa-level-down:before {
  content: "\f149"
}

.fa-check-square:before {
  content: "\f14a"
}

.fa-pencil-square:before {
  content: "\f14b"
}

.fa-external-link-square:before {
  content: "\f14c"
}

.fa-share-square:before {
  content: "\f14d"
}

.fa-compass:before {
  content: "\f14e"
}

.fa-toggle-down:before, .fa-caret-square-o-down:before {
  content: "\f150"
}

.fa-toggle-up:before, .fa-caret-square-o-up:before {
  content: "\f151"
}

.fa-toggle-right:before, .fa-caret-square-o-right:before {
  content: "\f152"
}

.fa-euro:before, .fa-eur:before {
  content: "\f153"
}

.fa-gbp:before {
  content: "\f154"
}

.fa-dollar:before, .fa-usd:before {
  content: "\f155"
}

.fa-rupee:before, .fa-inr:before {
  content: "\f156"
}

.fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {
  content: "\f157"
}

.fa-ruble:before, .fa-rouble:before, .fa-rub:before {
  content: "\f158"
}

.fa-won:before, .fa-krw:before {
  content: "\f159"
}

.fa-bitcoin:before, .fa-btc:before {
  content: "\f15a"
}

.fa-file:before {
  content: "\f15b"
}

.fa-file-text:before {
  content: "\f15c"
}

.fa-sort-alpha-asc:before {
  content: "\f15d"
}

.fa-sort-alpha-desc:before {
  content: "\f15e"
}

.fa-sort-amount-asc:before {
  content: "\f160"
}

.fa-sort-amount-desc:before {
  content: "\f161"
}

.fa-sort-numeric-asc:before {
  content: "\f162"
}

.fa-sort-numeric-desc:before {
  content: "\f163"
}

.fa-thumbs-up:before {
  content: "\f164"
}

.fa-thumbs-down:before {
  content: "\f165"
}

.fa-youtube-square:before {
  content: "\f166"
}

.fa-youtube:before {
  content: "\f167"
}

.fa-xing:before {
  content: "\f168"
}

.fa-xing-square:before {
  content: "\f169"
}

.fa-youtube-play:before {
  content: "\f16a"
}

.fa-dropbox:before {
  content: "\f16b"
}

.fa-stack-overflow:before {
  content: "\f16c"
}

.fa-instagram:before {
  content: "\f16d"
}

.fa-flickr:before {
  content: "\f16e"
}

.fa-adn:before {
  content: "\f170"
}

.fa-bitbucket:before {
  content: "\f171"
}

.fa-bitbucket-square:before {
  content: "\f172"
}

.fa-tumblr:before {
  content: "\f173"
}

.fa-tumblr-square:before {
  content: "\f174"
}

.fa-long-arrow-down:before {
  content: "\f175"
}

.fa-long-arrow-up:before {
  content: "\f176"
}

.fa-long-arrow-left:before {
  content: "\f177"
}

.fa-long-arrow-right:before {
  content: "\f178"
}

.fa-apple:before {
  content: "\f179"
}

.fa-windows:before {
  content: "\f17a"
}

.fa-android:before {
  content: "\f17b"
}

.fa-linux:before {
  content: "\f17c"
}

.fa-dribbble:before {
  content: "\f17d"
}

.fa-skype:before {
  content: "\f17e"
}

.fa-foursquare:before {
  content: "\f180"
}

.fa-trello:before {
  content: "\f181"
}

.fa-female:before {
  content: "\f182"
}

.fa-male:before {
  content: "\f183"
}

.fa-gittip:before {
  content: "\f184"
}

.fa-sun-o:before {
  content: "\f185"
}

.fa-moon-o:before {
  content: "\f186"
}

.fa-archive:before {
  content: "\f187"
}

.fa-bug:before {
  content: "\f188"
}

.fa-vk:before {
  content: "\f189"
}

.fa-weibo:before {
  content: "\f18a"
}

.fa-renren:before {
  content: "\f18b"
}

.fa-pagelines:before {
  content: "\f18c"
}

.fa-stack-exchange:before {
  content: "\f18d"
}

.fa-arrow-circle-o-right:before {
  content: "\f18e"
}

.fa-arrow-circle-o-left:before {
  content: "\f190"
}

.fa-toggle-left:before, .fa-caret-square-o-left:before {
  content: "\f191"
}

.fa-dot-circle-o:before {
  content: "\f192"
}

.fa-wheelchair:before {
  content: "\f193"
}

.fa-vimeo-square:before {
  content: "\f194"
}

.fa-turkish-lira:before, .fa-try:before {
  content: "\f195"
}

.fa-plus-square-o:before {
  content: "\f196"
}

.fa-space-shuttle:before {
  content: "\f197"
}

.fa-slack:before {
  content: "\f198"
}

.fa-envelope-square:before {
  content: "\f199"
}

.fa-wordpress:before {
  content: "\f19a"
}

.fa-openid:before {
  content: "\f19b"
}

.fa-institution:before, .fa-bank:before, .fa-university:before {
  content: "\f19c"
}

.fa-mortar-board:before, .fa-graduation-cap:before {
  content: "\f19d"
}

.fa-yahoo:before {
  content: "\f19e"
}

.fa-google:before {
  content: "\f1a0"
}

.fa-reddit:before {
  content: "\f1a1"
}

.fa-reddit-square:before {
  content: "\f1a2"
}

.fa-stumbleupon-circle:before {
  content: "\f1a3"
}

.fa-stumbleupon:before {
  content: "\f1a4"
}

.fa-delicious:before {
  content: "\f1a5"
}

.fa-digg:before {
  content: "\f1a6"
}

.fa-pied-piper:before {
  content: "\f1a7"
}

.fa-pied-piper-alt:before {
  content: "\f1a8"
}

.fa-drupal:before {
  content: "\f1a9"
}

.fa-joomla:before {
  content: "\f1aa"
}

.fa-language:before {
  content: "\f1ab"
}

.fa-fax:before {
  content: "\f1ac"
}

.fa-building:before {
  content: "\f1ad"
}

.fa-child:before {
  content: "\f1ae"
}

.fa-paw:before {
  content: "\f1b0"
}

.fa-spoon:before {
  content: "\f1b1"
}

.fa-cube:before {
  content: "\f1b2"
}

.fa-cubes:before {
  content: "\f1b3"
}

.fa-behance:before {
  content: "\f1b4"
}

.fa-behance-square:before {
  content: "\f1b5"
}

.fa-steam:before {
  content: "\f1b6"
}

.fa-steam-square:before {
  content: "\f1b7"
}

.fa-recycle:before {
  content: "\f1b8"
}

.fa-automobile:before, .fa-car:before {
  content: "\f1b9"
}

.fa-cab:before, .fa-taxi:before {
  content: "\f1ba"
}

.fa-tree:before {
  content: "\f1bb"
}

.fa-spotify:before {
  content: "\f1bc"
}

.fa-deviantart:before {
  content: "\f1bd"
}

.fa-soundcloud:before {
  content: "\f1be"
}

.fa-database:before {
  content: "\f1c0"
}

.fa-file-pdf-o:before {
  content: "\f1c1"
}

.fa-file-word-o:before {
  content: "\f1c2"
}

.fa-file-excel-o:before {
  content: "\f1c3"
}

.fa-file-powerpoint-o:before {
  content: "\f1c4"
}

.fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {
  content: "\f1c5"
}

.fa-file-zip-o:before, .fa-file-archive-o:before {
  content: "\f1c6"
}

.fa-file-sound-o:before, .fa-file-audio-o:before {
  content: "\f1c7"
}

.fa-file-movie-o:before, .fa-file-video-o:before {
  content: "\f1c8"
}

.fa-file-code-o:before {
  content: "\f1c9"
}

.fa-vine:before {
  content: "\f1ca"
}

.fa-codepen:before {
  content: "\f1cb"
}

.fa-jsfiddle:before {
  content: "\f1cc"
}

.fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {
  content: "\f1cd"
}

.fa-circle-o-notch:before {
  content: "\f1ce"
}

.fa-ra:before, .fa-rebel:before {
  content: "\f1d0"
}

.fa-ge:before, .fa-empire:before {
  content: "\f1d1"
}

.fa-git-square:before {
  content: "\f1d2"
}

.fa-git:before {
  content: "\f1d3"
}

.fa-hacker-news:before {
  content: "\f1d4"
}

.fa-tencent-weibo:before {
  content: "\f1d5"
}

.fa-qq:before {
  content: "\f1d6"
}

.fa-wechat:before, .fa-weixin:before {
  content: "\f1d7"
}

.fa-send:before, .fa-paper-plane:before {
  content: "\f1d8"
}

.fa-send-o:before, .fa-paper-plane-o:before {
  content: "\f1d9"
}

.fa-history:before {
  content: "\f1da"
}

.fa-circle-thin:before {
  content: "\f1db"
}

.fa-header:before {
  content: "\f1dc"
}

.fa-paragraph:before {
  content: "\f1dd"
}

.fa-sliders:before {
  content: "\f1de"
}

.fa-share-alt:before {
  content: "\f1e0"
}

.fa-share-alt-square:before {
  content: "\f1e1"
}

.fa-bomb:before {
  content: "\f1e2"
}

.fa-soccer-ball-o:before, .fa-futbol-o:before {
  content: "\f1e3"
}

.fa-tty:before {
  content: "\f1e4"
}

.fa-binoculars:before {
  content: "\f1e5"
}

.fa-plug:before {
  content: "\f1e6"
}

.fa-slideshare:before {
  content: "\f1e7"
}

.fa-twitch:before {
  content: "\f1e8"
}

.fa-yelp:before {
  content: "\f1e9"
}

.fa-newspaper-o:before {
  content: "\f1ea"
}

.fa-wifi:before {
  content: "\f1eb"
}

.fa-calculator:before {
  content: "\f1ec"
}

.fa-paypal:before {
  content: "\f1ed"
}

.fa-google-wallet:before {
  content: "\f1ee"
}

.fa-cc-visa:before {
  content: "\f1f0"
}

.fa-cc-mastercard:before {
  content: "\f1f1"
}

.fa-cc-discover:before {
  content: "\f1f2"
}

.fa-cc-amex:before {
  content: "\f1f3"
}

.fa-cc-paypal:before {
  content: "\f1f4"
}

.fa-cc-stripe:before {
  content: "\f1f5"
}

.fa-bell-slash:before {
  content: "\f1f6"
}

.fa-bell-slash-o:before {
  content: "\f1f7"
}

.fa-trash:before {
  content: "\f1f8"
}

.fa-copyright:before {
  content: "\f1f9"
}

.fa-at:before {
  content: "\f1fa"
}

.fa-eyedropper:before {
  content: "\f1fb"
}

.fa-paint-brush:before {
  content: "\f1fc"
}

.fa-birthday-cake:before {
  content: "\f1fd"
}

.fa-area-chart:before {
  content: "\f1fe"
}

.fa-pie-chart:before {
  content: "\f200"
}

.fa-line-chart:before {
  content: "\f201"
}

.fa-lastfm:before {
  content: "\f202"
}

.fa-lastfm-square:before {
  content: "\f203"
}

.fa-toggle-off:before {
  content: "\f204"
}

.fa-toggle-on:before {
  content: "\f205"
}

.fa-bicycle:before {
  content: "\f206"
}

.fa-bus:before {
  content: "\f207"
}

.fa-ioxhost:before {
  content: "\f208"
}

.fa-angellist:before {
  content: "\f209"
}

.fa-cc:before {
  content: "\f20a"
}

.fa-shekel:before, .fa-sheqel:before, .fa-ils:before {
  content: "\f20b"
}

.fa-meanpath:before {
  content: "\f20c"
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block
}

body {
  line-height: 1
}

ol, ul {
  list-style: none
}

blockquote, q {
  quotes: none
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

.clearfix {
  zoom: 1
}

.clearfix:before, .clearfix:after {
  display: block;
  height: 0;
  visibility: hidden;
  content: "\0020"
}

.clearfix:after {
  clear: both
}

html {
  font-family: 'Helvetica', 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", YuGothic, Meiryo, 'MS PGothic', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: #1f263e;
  -webkit-font-smoothing: antialiased
}

.niconne {
  font-family: 'Niconne', cursive
}

.raleway {
  font-family: 'Raleway', sans-serif;
  font-weight: 300
}

.oxygen {
  font-family: 'Oxygen', sans-serif
}

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

.footer {
  margin-bottom: 30px;
  border-top: solid 1px #dde4e6;
  clear: both
}

@media (max-width: 767px) {
  .footer {
    border-top: none;
    padding: 0 1.2rem
  }
}

.footer .job {
  border-bottom: solid 1px #dde4e6
}

@media all and (max-width: 767px) {
  .footer .job {
    margin-top: 30px;
    border-top: solid 1px #dde4e6
  }
}

.footer .job .job-inner {
  padding: 20px 0
}

.footer .job .job-inner .text {
  text-align: center
}

.footer .job .job-inner .text .link {
  font-size: 18px;
  font-weight: bold;
  color: #ea6153
}

.footer .job .job-inner .text .link:hover {
  color: #e43725
}

@media all and (max-width: 767px) {
  .footer .job .job-inner .text .link {
    font-size: 14px
  }
}

.footer .menus {
  padding: 30px 0 0 0;
  overflow: hidden
}

@media (max-width: 767px) {
  .footer .menus {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px
  }
}

.footer .menu {
  width: 14.5%;
  margin-left: 2%;
  color: #12575F
}

.footer .menu:first-child {
  width: 17.5%;
  margin-left: 0
}

@media (max-width: 767px) {
  .footer .menu:first-child {
    width: 100%
  }
}

.footer .menu .footer-title {
  margin: 0 0 1rem;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  text-align: left;
  opacity: .5
}

.footer .menu .footer-title-ec:after {
  background: #24DDB9
}

.footer .menu .logo {
  padding: 0 1rem .8rem 0;
  box-sizing: border-box;
  max-width: 300px
}

@media (max-width: 599px) {
  .footer .menu .logo {
    width: 14rem
  }
}

.footer .menu a {
  line-height: 1.8;
  font-size: 12px;
  text-align: left
}

.footer .menu a:hover {
  text-decoration: underline
}

@media (max-width: 767px) {
  .footer .menu {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px
  }
}

@media (max-width: 767px) {
  .footer .menu nav {
    padding: 0 0 0 1rem
  }

  .footer .menu nav a {
    font-size: 1rem;
    line-height: 2.5
  }
}

.footer .menu a[target="_blank"]::after {
  font-family: "FontAwesome";
  content: '\f08e';
  text-decoration: none;
  display: inline-block;
  margin-left: 3px
}

@media all and (max-width: 767px) {
  .footer .menu2 {
    width: 100%;
    text-align: center;
    margin-bottom: 15px
  }
}

.footer .left {
  float: left
}

.footer .right {
  float: right
}

.footer .trade-name {
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 0 .6rem
}

.footer .member {
  font-size: .8rem;
  padding: 0 0 1rem;
  line-height: 1.5
}

.footer .number {
  font-size: .8rem;
  padding: 0 0 1rem;
  line-height: 1.5
}

.footer .language {
  margin-top: 30px;
  color: #12575F
}

.footer .language label {
  margin: 0 .5rem 0 0
}

.footer .language select {
  font-size: .8rem;
  height: 2rem;
  background: #fff;
  border: 1px solid rgba(23, 88, 96, 0.29)
}

.footer .logo {
  color: #20C2D3;
  font-size: 30px
}

.footer .logo-ec {
  color: #24DDB9;
  font-size: 30px
}

@media all and (max-width: 767px) {
  .footer .logo-ec {
    font-size: 30px
  }
}

.footer .logo-ec .small {
  margin-left: 10px;
  font-size: 0.7em
}

.footer .padding-top {
  padding-top: 20px
}

input[type='text'], input[type='email'], input[type='password'], input[type='number'], textarea {
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  outline: none
}

input.error[type='text'], input.error[type='email'], input.error[type='password'], input.error[type='number'], textarea.error {
  border: 1px solid #EC7063 !important
}

input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0
}

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

.header.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30
}

.header .icon-font {
  font-family: "cc-icon" !important;
  font-size: 20px;
  height: 20px
}

.header .svg-icon-menu {
  color: #333
}

.header .no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.header .arrow-down {
  display: inline;
  width: 15px;
  height: 20px;
  vertical-align: middle
}

.header .arrow-down > .cc-icon_down {
  font-family: "cc-icon" !important;
  font-size: 15px;
  height: 15px;
  position: relative;
  top: 2px
}

.header .arrow-down > .cc-icon_down::before {
  color: #1f263e
}

.header .periodic-risk-deadline {
  border-radius: 3px;
  color: #E54B27;
  display: inline-block;
  font-size: 13px;
  text-align: center
}

.header .periodic-risk-deadline .days-remaining {
  background: #FEF7F5;
  padding: 12px
}

.header .periodic-risk-deadline .expired {
  font-weight: bold;
  border: solid 1px;
  border-radius: 3px;
  padding: 11px
}

.header .periodic-risk-deadline .expired > .fill {
  padding-left: 4px
}

@media all and (max-width: 767px) {
  .header .periodic-risk-deadline {
    float: left;
    font-size: 12px;
    margin: 10px 0;
    max-width: 210px;
    line-height: 1rem
  }

  .header .periodic-risk-deadline .days-remaining {
    padding: 8px 12px
  }

  .header .periodic-risk-deadline .expired {
    padding: 8px 11px
  }
}

@media all and (max-width: 359px) {
  .header .periodic-risk-deadline {
    display: none
  }
}

.header .desktop .hoge {
  background-color: #333;
  color: white
}

.header .desktop .hoge .test1 {
  display: inline-block;
  width: 90px;
  text-align: center;
  line-height: 30px;
  border-left: 1px solid #999;
  cursor: pointer
}

.header .desktop .hoge .test1:last-child {
  border-right: 1px solid #999
}

.header .desktop .header-inner {
  height: 70px;
  padding: 8px 0 10px;
  color: #1f263e;
  position: relative;
  box-sizing: border-box;
  background-color: #FFF;
  box-shadow: 0 8px 28px 0 rgba(72, 89, 102, 0.1)
}

.header .desktop .header-inner.ec-header {
  color: #fff;
  box-shadow: none;
  background-color: #24DDB9
}

.header .desktop .header-inner.ec-header .logo {
  width: 311px;
  margin-top: 11px
}

.header .desktop .header-inner.ec-header .account-info {
  float: right
}

.header .desktop .header-inner.lending-header {
  box-shadow: none;
  background-color: #ffffff
}

.header .desktop .header-inner.lending-header .logo {
  margin-top: 10px
}

.header .desktop .header-inner.lending-header .account-info {
  float: right
}

.header .desktop .header-inner.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3)
}

.header .desktop .header-inner .account-type .top-alert {
  font-size: 12px;
  color: white;
  position: absolute;
  top: 0;
  right: 20px;
  background-color: #f00;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  display: inline-block;
  border-radius: 50%
}

.header .desktop .logo {
  width: 200px;
  margin-top: 7px;
  float: left
}

.header .desktop .logo.img {
  width: 100%
}

.header .desktop .logo > .title {
  float: left;
  font-size: 25px;
  padding: 7px 0;
  margin-left: 10px
}

.header .desktop .logo.raleway > .title {
  letter-spacing: 3px
}

@media all and (max-width: 767px) {
  .header .desktop .logo {
    font-size: 30px
  }
}

.header .desktop .logo .small {
  margin-left: 10px;
  font-size: 0.7em
}

@media all and (max-width: 767px) {
  .header .desktop .logo .small {
    margin-left: 10px;
    font-size: 20px
  }
}

.header .desktop .header-item {
  float: left;
  display: block;
  font-size: 13px;
  line-height: 40px;
  font-weight: bold;
  margin: 7px 0 5px 23px;
  border-radius: 3px;
  padding: 0 10px;
  min-width: 60px;
  text-align: center
}

.header .desktop .header-item:hover, .header .desktop .header-item.selected {
  background-color: rgba(255, 255, 255, 0.3)
}

.header .desktop .popup-box {
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  line-height: 3;
  font-weight: normal;
  margin: 5px 0;
  display: inline-block;
  padding: 0 10px;
  border-radius: 3px;
  position: relative
}

.header .desktop .popup-box:hover {
  background-color: rgba(255, 255, 255, 0.3)
}

.header .desktop .popup-box.open .popup-menu {
  display: block
}

.header .desktop .balance-box {
  width: 20px;
  height: 20px;
  vertical-align: middle
}

.header .desktop .separator {
  height: 24px;
  width: 1px;
  background-color: rgba(31, 38, 62, 0.4);
  display: inline-block;
  margin: 0 5px;
  vertical-align: middle
}

.header .desktop .for-non-login .right {
  float: right
}

.header .desktop .for-non-login .right > a {
  color: inherit;
  text-decoration: none;
  font-size: 15px;
  line-height: 40px;
  font-weight: bold;
  margin: 7px 0 5px;
  display: inline-block;
  padding: 0 10px;
  border-radius: 3px;
  vertical-align: middle
}

.header .desktop .for-non-login .right > a:hover {
  background-color: rgba(255, 255, 255, 0.3)
}

.header .desktop .for-non-login .right .contact {
  margin: 7px 0 5px;
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  font-weight: bold;
  text-align: center
}

.header .desktop .for-non-login .right .contact .contact-link {
  display: block;
  border-radius: 3px;
  padding: 6px 0;
  margin: -6px 0 2px
}

.header .desktop .for-non-login .right .contact .contact-link:hover {
  background-color: rgba(255, 255, 255, 0.3)
}

.header .desktop .for-login .right {
  float: right
}

.header .desktop .for-login .popup-box .row {
  vertical-align: middle
}

.header .desktop .for-login .popup-box .num {
  font-size: 15px
}

.header .desktop .for-login .popup-box .fa-caret-down {
  position: absolute;
  right: 0;
  top: 20px;
  font-size: 17px
}

.header .desktop .for-login .popup-box.open .balance-detail {
  display: block
}

.header .desktop .for-login .balance-wrap {
  background-color: #f8f9fb;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  line-height: 1;
  display: inline-block;
  padding: 7px 8px 7px 15px
}

.header .desktop .for-login .balance-wrap:not(.show-balance) {
  padding: 7px 0 7px 7px;
  background-color: transparent
}

.header .desktop .for-login .balance-wrap:not(.show-balance) > .num, .header .desktop .for-login .balance-wrap:not(.show-balance) > .arrow-down {
  display: none
}

.header .desktop .for-login .balance-wrap .num {
  margin-left: 8px;
  vertical-align: middle
}

.header .desktop .for-login .balance-ec {
  display: inline-block;
  vertical-align: middle;
  float: right;
  padding-top: 5px;
  position: relative;
  padding-right: 20px
}

.header .desktop .for-login .balance-ec .row {
  text-align: right;
  margin-bottom: 7px
}

.header .desktop .for-login .balance-ec .row .num {
  font-size: 19px;
  vertical-align: bottom;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 18px;
  display: inline-block
}

.header .desktop .for-login .balance-ec .row .unit {
  font-size: 16px;
  vertical-align: bottom;
  width: 35px;
  display: inline-block;
  text-align: right;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
}

.header .desktop .for-login .account-info {
  width: 140px;
  text-align: right;
  position: relative;
  display: inline-block
}

.header .desktop .for-login .account-info .top-alert {
  font-size: 12px;
  color: white;
  position: absolute;
  top: 12px;
  right: 8px;
  background-color: #f00;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  display: inline-block;
  border-radius: 50%
}

.header .desktop .for-login .account-info .alert {
  color: #ff5454
}

.header .desktop .for-login .account-info .account-type {
  line-height: 56px;
  font-weight: bold;
  display: inline-block
}

.header .desktop .for-login .account-info .fa-caret-down {
  font-size: 17px
}

.header .desktop .for-login .account-info.open .account-info-menu {
  display: block
}

.header .desktop .dummy-header {
  height: 70px
}

.header .mobile .mobile-menu {
  padding: 10px 0;
  position: absolute;
  right: 0;
  top: 0
}

.header .mobile .balance-wrap {
  float: left;
  padding: 15px 16px 15px 19px
}

.header .mobile .balance-wrap .close-balance-dummy {
  display: none;
  opacity: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0
}

.header .mobile .balance-wrap.show-balance .close-balance-dummy {
  display: block
}

.header .mobile .balance-wrap .net-assets-title {
  font-size: 13px;
  margin-top: 3px;
  cursor: pointer
}

.header .mobile .balance-detail-wrap.open .balance-detail {
  display: block
}

.header .mobile .balance-detail {
  border-radius: 0;
  margin-top: 0;
  position: fixed;
  top: 70px;
  width: 100%
}

.header .mobile .balance-detail .balance-box {
  float: none;
  vertical-align: middle
}

.header .mobile .balance-detail .market .toggle-state-wrap {
  display: none
}

.header .mobile .balance-detail.overflow-scroll {
  height: calc(100% - 70px)
}

.header .mobile .popup-box {
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  line-height: 3;
  font-weight: normal;
  margin: 5px 0;
  display: inline-block;
  padding: 0 10px;
  border-radius: 3px;
  vertical-align: middle;
  position: relative;
  z-index: 4
}

.header .mobile .popup-box.open .popup-menu, .header .mobile .popup-box.open .close-account-menu-dummy {
  display: block
}

.header .mobile .separator {
  float: left;
  height: 24px;
  width: 1px;
  background-color: rgba(31, 38, 62, 0.4);
  display: inline-block;
  margin: 13px 5px;
  vertical-align: middle
}

.header .mobile .mobile-inner {
  box-shadow: 0 8px 28px 0 rgba(72, 89, 102, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  color: #1f263e;
  z-index: 5000
}

.header .mobile .mobile-inner.ec, .header .mobile .mobile-inner.lending {
  color: #fff;
  height: 48px
}

.header .mobile .consumer-header, .header .mobile .ec-header, .header .mobile .lending-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}

.header .mobile .consumer-header {
  background-color: #fff
}

.header .mobile .consumer-header .logo {
  position: absolute;
  padding: 14px 20px
}

.header .mobile .consumer-header .logo > img {
  height: 40px;
  width: 40px
}

.header .mobile .consumer-header .logo .small {
  margin-left: 10px;
  font-size: 0.7em
}

.header .mobile .ec-header {
  background-color: #24DDB9
}

.header .mobile .ec-header .logo {
  width: 252px;
  margin-top: 10px;
  padding-left: 10px
}

.header .mobile .lending-header {
  background-color: #ffffff
}

.header .mobile .lending-header .logo {
  width: 136px;
  padding-left: 10px;
  margin-top: 12px
}

.header .mobile .account-type .top-alert {
  font-size: 12px;
  color: white;
  position: absolute;
  top: 0;
  right: 20px;
  background-color: #f00;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  display: inline-block;
  border-radius: 50%
}

.header .mobile .burger {
  display: none;
  float: right;
  right: 0;
  top: 0;
  padding: 15px 20px 15px 0;
  position: relative;
  z-index: 5;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

@media all and (max-width: 767px) {
  .header .mobile .burger {
    display: block
  }
}

.header .mobile .burger .fa-bars {
  font-size: 16px;
  border: 2px solid #FFF;
  width: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%
}

.header .mobile .burger .fa-bars-lending {
  font-size: 16px;
  border: 2px solid;
  width: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%
}

.header .mobile .burger.ec-lending {
  color: #fff;
  position: absolute;
  padding: 8px 10px
}

.header .mobile .burger.ec-lending .fa-bars {
  width: 32px
}

.header .mobile .burger.lending {
  color: #000000
}

.header .mobile .burger.lending .fa-bars-lending {
  width: 32px
}

.header .mobile .dummy-header {
  height: 70px
}

.header .mobile .dummy-header.is-ec-lending {
  height: 48px
}

.header .mobile-side-menu {
  position: fixed;
  top: 0;
  left: 100vw;
  bottom: 0;
  z-index: -1;
  color: white;
  z-index: 5000;
  width: 100%;
  -webkit-transition: all ease-in-out .3s;
  transition: all ease-in-out .3s
}

.header .mobile-side-menu.open {
  left: 0
}

.header .mobile-side-menu .dark-background {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}

.header .mobile-side-menu .menu-content {
  background-color: #444;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.2);
  width: auto
}

@media (max-width: 1200px) {
  .header .mobile-side-menu .menu-content {
    width: auto
  }
}

@media (max-width: 979px) {
  .header .mobile-side-menu .menu-content {
    width: 300px
  }
}

@media (max-width: 767px) {
  .header .mobile-side-menu .menu-content {
    width: 90%
  }
}

.header .mobile-side-menu .menu-content .menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 12px 0
}

.header .mobile-side-menu .menu-content .menu .fa {
  font-size: 20px;
  margin-right: 10px;
  width: 30px;
  text-align: center
}

.header .mobile-side-menu .menu-content .menu .id {
  font-size: 20px
}

.header .mobile-side-menu .menu-content .menu .icon {
  margin-left: 5px
}

.header .mobile-side-menu .menu-content .menu .svg-icon-menu {
  color: #fff;
  margin-right: 8px
}

.header .mobile-side-menu .menu-content .agreements, .header .mobile-side-menu .menu-content .two_factor_auth {
  color: #ff5454
}

.header .mobile-side-menu .menu-content .agreements .svg-icon-menu, .header .mobile-side-menu .menu-content .two_factor_auth .svg-icon-menu {
  fill: #ff5454
}

.header .mobile-side-menu .menu-content .border {
  border-bottom: 1px solid #ffffff;
  margin-bottom: 10px;
  padding-bottom: 20px
}

.header .mobile-side-menu .menu-content .balance {
  margin: 0 5px 10px
}

.header .mobile-side-menu .menu-content .balance .num {
  font-size: 25px
}

.header .mobile-side-menu .menu-content .balance .unit {
  display: inline-block;
  width: 30px;
  text-align: center;
  margin-left: 5px;
  font-size: 17px
}

.header .mobile-side-menu .dark-background {
  -webkit-transition: opacity ease-in-out .2s;
  transition: opacity ease-in-out .2s
}

.header .mobile-side-menu .dark-background.ng-hide-add {
  opacity: 1
}

.header .mobile-side-menu .dark-background.ng-hide-add-active {
  opacity: 0
}

.header .mobile-side-menu .dark-background.ng-hide-remove {
  opacity: 0
}

.header .mobile-side-menu .dark-background.ng-hide-remove-active {
  opacity: 1
}

.header .balance-detail {
  position: absolute;
  display: none;
  background-color: #FFF;
  right: 0;
  color: #1f263e;
  cursor: initial;
  z-index: 1;
  width: 400px;
  font-size: 14px;
  margin-top: 8px;
  padding: .5rem 0 0;
  border-radius: 6px;
  box-shadow: 0 13px 33px 0 rgba(28, 42, 69, 0.25)
}

.header .balance-detail .row {
  height: 40px;
  line-height: 39px;
  box-sizing: border-box
}

.header .balance-detail .row-border {
  border-bottom: 0.4px solid rgba(31, 38, 62, 0.15)
}

.header .balance-detail .toggle-state {
  cursor: pointer;
  height: 14px;
  width: 24px;
  border: 1px solid rgba(31, 38, 62, 0.4);
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px
}

.header .balance-detail .toggle-state .toggle-switch {
  height: 10px;
  width: 10px;
  background-color: rgba(31, 38, 62, 0.4);
  border-radius: 2px;
  margin: 1px
}

.header .balance-detail .toggle-state.enable {
  border: 1px solid #53B5E6
}

.header .balance-detail .toggle-state.enable .toggle-switch {
  background-color: #53B5E6;
  margin: 1px 1px 1px 11px
}

.header .balance-detail.overflow-scroll {
  overflow: auto;
  height: 577px
}

.header .balance-detail .markets {
  margin-bottom: 40px
}

.header .balance-detail .market .assets {
  width: 93px
}

.header .balance-detail .market .title {
  color: #1f263e;
  font-size: 15px
}

.header .balance-detail .market .label {
  display: inline-block;
  font-size: 13px
}

.header .balance-detail .market .label.currency-name {
  width: 55px
}

.header .balance-detail .market .column {
  display: inline-block;
  text-align: right
}

.header .balance-detail .market .column.gray {
  color: rgba(31, 38, 62, 0.6);
  font-size: 11px
}

.header .balance-detail .market .column .num {
  font-size: 13px
}

.header .balance-detail .market .column .num.large-digits {
  font-size: 10px
}

.header .balance-detail .market .bold {
  font-weight: bold
}

.header .balance-detail .market .label {
  width: 82px
}

.header .balance-detail .market .column {
  width: 93px
}

.header .balance-detail .market .column.wide {
  width: 139px
}

.header .balance-detail .market .column.with-symbol {
  width: auto
}

.header .balance-detail .market .head, .header .balance-detail .market .header-row, .header .balance-detail .market .assets-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 20px
}

.header .balance-detail .market .head.row {
  height: 30px;
  font-size: 11px
}

.header .balance-detail .market .header-row {
  border-bottom: 2px solid rgba(31, 38, 62, 0.08)
}

.header .balance-detail .market .header-row > * {
  width: 180px
}

.header .balance-detail .market .header-row .num {
  line-height: 1.6
}

.header .balance-detail .market .assets-row #old-icon {
  height: 40px
}

.header .balance-detail .market .assets-row .currency-icon {
  width: 20px;
  margin-right: 5px
}

.header .account-info-menu {
  position: absolute;
  display: none;
  background-color: #F5F5F5;
  right: 0;
  border: 1px solid #CCC;
  padding: 10px 0;
  color: #333;
  cursor: initial;
  z-index: 2;
  font-size: 14px;
  text-align: left;
  width: 190px
}

.header .account-info-menu:after, .header .account-info-menu:before {
  bottom: 100%;
  right: 0;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.header .account-info-menu:after {
  border-bottom-color: #F5F5F5;
  border-width: 8px;
  margin-right: 16px
}

.header .account-info-menu:before {
  border-bottom-color: #CCC;
  border-width: 9px;
  margin-right: 15px
}

.header .account-info-menu .row {
  line-height: 37px;
  font-weight: bold;
  padding: 0 20px;
  display: block
}

.header .account-info-menu .row:hover {
  background-color: rgba(0, 0, 0, 0.1)
}

.header .popup-menu {
  position: absolute;
  display: none;
  background-color: #ffffff;
  right: 0;
  color: #000a12;
  cursor: initial;
  z-index: 2;
  font-size: 13px;
  text-align: left;
  width: 210px;
  border-radius: 6px;
  box-shadow: 0 13px 33px 0 rgba(28, 42, 69, 0.25)
}

.header .popup-menu .row {
  height: 40px;
  padding: 0 0 0 20px;
  display: block;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal
}

.header .popup-menu .row:hover {
  background-color: #F8F9FB
}

.header .popup-menu .row:first-of-type:hover {
  border-radius: 6px 6px 0 0
}

.header .popup-menu .row:last-of-type:hover {
  border-radius: 0 0 6px 6px
}

.header .popup-menu .row.identity.alert {
  color: #ff5454;
  font-weight: bold
}

.header .popup-menu.login, .header .popup-menu.register {
  width: 165px
}

.header .popup-menu.notification {
  width: 320px
}

.header .popup-menu.notification .row {
  height: auto;
  min-height: 40px
}

.header .popup-menu.notification .row.border {
  border-bottom: 0.4px solid rgba(31, 38, 62, 0.15)
}

.header .popup-menu.notification .row.notification-header {
  pointer-events: none;
  font-weight: bold
}

.header .popup-menu.notification .row:not(.notification-header):not(.all-notifications) {
  padding: 12px 30px 7px 50px;
  position: relative;
  height: 100%;
  line-height: 1.15
}

.header .popup-menu.notification .row.all-notifications {
  display: inherit;
  text-align: center;
  line-height: inherit;
  padding: 0
}

.header .popup-menu.notification .row .notification-article {
  margin-bottom: 5px;
  word-break: break-all
}

.header .popup-menu.notification .row .timestamp {
  font-size: 10px
}

.header .popup-menu.notification .row .timestamp.date {
  margin-right: 5px
}

.header .popup-menu.notification .notification-icon {
  position: absolute;
  top: 12px;
  left: 17px
}

.header .popup-menu.notification .notification-icon.cc-icon_writing::before {
  color: #F7931A
}

.header .popup-menu.notification .notification-icon.cc-icon_notice::before {
  color: #EE2E6B
}

.header .popup-menu.notification .notification-icon.cc-icon_maintenance::before {
  color: #21DDB8
}

.header .popup-menu.loading .spinner {
  line-height: 1;
  margin-top: 50px;
  text-align: center
}

.header .popup-menu.loading .spinner svg {
  -webkit-animation-name: spin;
  animation-name: spin;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

.header .popup-menu.loading .message {
  line-height: 1;
  margin-top: 20px;
  margin-bottom: 95px;
  text-align: center
}

.header .popup-menu.lang {
  width: 120px
}

.header .popup-menu.lang .lang-icon {
  position: relative;
  top: 5px;
  left: -10px
}

.header .close-account-menu-dummy {
  display: none;
  opacity: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2
}

.header .register-wrap {
  line-height: 34px;
  height: 34px;
  background-color: #09BA85;
  border-radius: 5px;
  color: #FFF;
  padding: 0 10px;
  text-align: center
}

.header .register-wrap .arrow-down > .cc-icon_down::before {
  color: #fff
}

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

.home-layout {
  margin: 30px auto 70px;
  width: 1120px
}

@media all and (max-width: 1200px) {
  .home-layout {
    width: 960px
  }
}

@media all and (max-width: 979px) {
  .home-layout {
    width: 744px
  }
}

@media all and (max-width: 767px) {
  .home-layout {
    width: auto;
    margin-top: 0;
    margin-bottom: 0
  }
}

.home-layout .menus {
  float: left;
  width: 248px;
  background-color: white
}

@media all and (max-width: 979px) {
  .home-layout .menus {
    width: 200px;
    font-size: 14px
  }
}

@media all and (max-width: 767px) {
  .home-layout .menus {
    display: none
  }
}

.home-layout .menus .menu {
  line-height: 50px;
  padding: 0 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
  text-decoration: none
}

.home-layout .menus .menu .svg-icon-menu {
  margin-right: 8px
}

.home-layout .menus .menu:hover, .home-layout .menus .menu.selected {
  color: #1ABC9C;
  cursor: pointer
}

.home-layout .menus .menu:hover .fa, .home-layout .menus .menu.selected .fa {
  color: inherit
}

.home-layout .menus .menu:hover .svg-icon-menu, .home-layout .menus .menu.selected .svg-icon-menu {
  fill: #1ABC9C
}

.home-layout .menus .menu.account {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.home-layout .menus .menu .fa {
  font-size: 19px;
  margin-right: 10px;
  width: 18px;
  text-align: center;
  color: #666
}

.home-layout .menus .submenu {
  text-align: right;
  margin: 0 20px 10px
}

.home-layout .menus .submenu .num {
  font-size: 15px;
  color: #1ABC9C
}

.home-layout .menus .submenu .unit {
  display: inline-block;
  width: 30px;
  text-align: center;
  margin-left: 5px
}

.home-layout .trade-restricted {
  float: right;
  width: 824px;
  background-color: white;
  margin-bottom: 20px
}

@media all and (max-width: 1200px) {
  .home-layout .trade-restricted {
    width: 664px
  }
}

@media all and (max-width: 979px) {
  .home-layout .trade-restricted {
    width: 536px
  }
}

@media all and (max-width: 767px) {
  .home-layout .trade-restricted {
    width: 100%;
    float: none
  }
}

.home-layout .trade-restricted .inner {
  padding: 30px
}

@media all and (max-width: 767px) {
  .home-layout .trade-restricted .inner {
    padding: 30px 10px
  }
}

.home-layout .trade-restricted .inner .title {
  font-size: 17px;
  margin: 10px 0 30px
}

.home-layout .trade-restricted .inner .fa {
  font-size: 19px;
  margin-right: 10px;
  width: 18px;
  text-align: center;
  color: #20C2D3
}

.home-layout .trade-restricted .inner .text {
  line-height: 23px;
  padding: 0 5px
}

.home-layout .trade-restricted .inner .text .link {
  color: #2980B9;
  text-decoration: none
}

.home-layout .trade-restricted .inner .text .link:hover {
  color: #34495E
}

.home-layout .trade-restricted .inner .button {
  border: 0;
  background: #57ad68;
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
  margin-top: 20px
}

.home-layout .trade-restricted .inner .button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-layout .trade-restricted .inner .button.disabled, .home-layout .trade-restricted .inner .button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-layout .trade-restricted .inner .button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #9ccea6
}

.home-layout .trade-restricted .inner .about-allowed-function .label {
  font-weight: bold;
  margin-top: 20px
}

.home-layout .trade-restricted .inner .about-allowed-function .fa-exclamation-circle {
  color: #E74C3C;
  margin-right: 5px
}

.home-layout .trade-restricted .inner .about-allowed-function .table {
  width: 95%;
  border: 1px solid #CCC;
  margin: 10px 0;
  float: initial
}

@media all and (max-width: 767px) {
  .home-layout .trade-restricted .inner .about-allowed-function .table {
    margin: 10px 0 10px;
    width: 100%
  }
}

.home-layout .trade-restricted .inner .about-allowed-function .table td {
  border: 1px solid #CCC;
  padding: 12px;
  vertical-align: middle
}

.home-layout .trade-restricted .inner .about-allowed-function .table td.right {
  text-align: right
}

.home-layout .trade-restricted .inner .about-allowed-function .table td.center {
  text-align: center
}

.home-layout .trade-restricted .inner .about-allowed-function .table td .num {
  font-weight: bold;
  color: #555
}

.home-layout .home-layout-inner {
  float: right;
  width: 824px;
  background-color: white
}

@media all and (max-width: 1200px) {
  .home-layout .home-layout-inner {
    width: 664px
  }
}

@media all and (max-width: 979px) {
  .home-layout .home-layout-inner {
    width: 536px
  }
}

@media all and (max-width: 767px) {
  .home-layout .home-layout-inner {
    width: 100%;
    float: none
  }
}

.home-layout .home-layout-inner.hide-nav-if-ios-payment-app {
  width: 100%
}

.home-layout .home-layout-inner-app {
  width: 100%;
  background-color: white
}

.home-layout .home-layout-inner-app.hide-nav-if-ios-payment-app {
  width: 100%
}

.home-layout.top-margin {
  margin-top: 100px
}

.home-index {
  padding: 30px;
  background-color: white
}

@media (max-width: 1200px) {
  .home-index {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .home-index {
    padding: 10px
  }
}

.home-index .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .home-index .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.home-index .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.home-index .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.home-index .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.home-index .title .svg-icon-menu path {
  fill: #20C2D3
}

.home-index .assets-table {
  white-space: nowrap;
  padding: 15px 0 0;
  width: 100%;
  overflow-x: scroll
}

.home-index .assets-table .bold {
  font-weight: bold
}

.home-index .assets-table .head .label-column, .home-index .assets-table .row .label-column {
  width: 50px;
  padding: 0 6px
}

.home-index .assets-table .head .digit-column, .home-index .assets-table .row .digit-column {
  width: 140px;
  padding-left: 6px;
  padding-right: 6px;
  text-align: right
}

.home-index .assets-table .head .balance, .home-index .assets-table .head .in_use, .home-index .assets-table .row .balance, .home-index .assets-table .row .in_use {
  color: #1ABC9C;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold
}

.home-index .assets-table .head .debt, .home-index .assets-table .row .debt {
  color: #E74C3C;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold
}

.home-index .assets-table .head .column, .home-index .assets-table .row .column {
  display: inline-block;
  padding: 12px 0 4px
}

.home-index .assets .row .left {
  float: left
}

.home-index .assets .row .right {
  text-align: right
}

.home-index .assets .row .right .digit {
  display: inline-block;
  font-weight: 200;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.01em;
  min-height: 40px
}

.home-index .assets .row .right .currency {
  display: inline-block;
  text-align: left;
  width: 30px
}

.home-index .assets .total {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #CCC
}

.home-index .assets .total .label {
  font-size: 17px;
  margin-top: 10px
}

.home-index .assets .total .digit {
  font-size: 40px;
  color: #1ABC9C
}

.home-index .rate {
  margin-bottom: 10px
}

.home-index .rate .chart {
  margin-top: 30px
}

.home-index .rate .num {
  color: #1ABC9C;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 200
}

.home-index .rate .to-exchange {
  border: 0;
  background: #E67E22;
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
  display: block;
  width: 250px;
  margin-top: 30px;
  font-weight: bold
}

.home-index .rate .to-exchange:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-index .rate .to-exchange.disabled, .home-index .rate .to-exchange:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-index .rate .to-exchange:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f0b37e
}

.home-index .tutorial {
  margin-bottom: 50px
}

.home-index .tutorial .text2 {
  font-weight: bold;
  color: #555;
  margin-bottom: 30px;
  line-height: 23px
}

.home-index .tutorial .text2 .fa {
  color: #E74C3C;
  font-size: 25px;
  vertical-align: middle;
  margin-right: 10px
}

.home-index .tutorial .fa {
  box-sizing: content-box
}

.home-index .tutorial .row {
  padding: 14px 0;
  display: block;
  min-height: 68px
}

.home-index .tutorial .row .fa {
  display: inline-block;
  border: 1px solid #666;
  padding: 13px;
  border-radius: 50%;
  font-size: 35px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  color: #666;
  vertical-align: middle;
  margin-right: 10px
}

@media all and (max-width: 767px) {
  .home-index .tutorial .row .fa {
    position: absolute;
    width: 30px;
    line-height: 30px;
    font-size: 30px
  }
}

.home-index .tutorial .row .text {
  display: inline-block;
  width: 515px;
  vertical-align: middle
}

@media all and (max-width: 767px) {
  .home-index .tutorial .row .text {
    margin-left: 75px;
    width: auto
  }
}

.home-index .tutorial .row .text .tutorial-title {
  font-size: 19px;
  margin-bottom: 9px
}

.home-index .tutorial .row .text .time {
  display: inline;
  font-size: 15px;
  margin-left: 17px;
  color: #1ABC9C
}

.home-index .tutorial .row .text .desc {
  font-size: 14px;
  color: #444;
  line-height: 18px
}

.home-index .tutorial .row.done {
  color: #999
}

.home-index .tutorial .row.done .fa {
  border-color: #CCC;
  color: #CCC
}

.home-index .tutorial .row.done .desc {
  color: #999
}

.home-index .tutorial .row.selectable:hover {
  color: #20C2D3
}

.home-index .tutorial .row.selectable:hover .fa {
  border-color: #20C2D3;
  color: inherit
}

.home-index .tutorial .row.selectable:hover .desc {
  color: inherit
}

.home-index .tutorial .row.selectable:hover .time {
  color: inherit
}

.home-index .activity-table .activities {
  margin-top: -15px
}

.home-index .activity-table .activity {
  padding: 15px 0
}

@media all and (max-width: 767px) {
  .home-index .activity-table .activity {
    border-bottom: 1px solid #CCC
  }
}

.home-index .activity-table .activity .time {
  display: inline-block;
  font-size: 13px;
  color: #666;
  width: 145px
}

@media all and (max-width: 1200px) {
  .home-index .activity-table .activity .time {
    width: 120px
  }
}

@media all and (max-width: 767px) {
  .home-index .activity-table .activity .time {
    display: block;
    width: auto;
    margin-bottom: 10px
  }
}

@media all and (max-width: 1200px) {
  .home-index .activity-table .activity .time .datetime {
    display: none
  }
}

.home-index .activity-table .activity .desc {
  display: inline-block;
  width: 385px
}

@media all and (max-width: 1200px) {
  .home-index .activity-table .activity .desc {
    width: 249px
  }
}

@media all and (max-width: 980px) {
  .home-index .activity-table .activity .desc {
    width: 140px
  }
}

@media all and (max-width: 767px) {
  .home-index .activity-table .activity .desc {
    display: block;
    width: auto;
    margin-bottom: 10px
  }
}

.home-index .activity-table .activity .desc .fa-bitcoin {
  color: #555
}

.home-index .activity-table .activity .amount {
  display: inline-block;
  width: 220px;
  text-align: right;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
}

@media all and (max-width: 980px) {
  .home-index .activity-table .activity .amount {
    width: 205px
  }
}

@media all and (max-width: 767px) {
  .home-index .activity-table .activity .amount {
    text-align: left;
    font-size: 15px;
    display: block;
    width: auto;
    margin-bottom: 10px
  }
}

.home-index .activity-table .activity .amount .negative {
  color: #E74C3C
}

.home-index .activity-table .activity .amount .positive {
  color: #1ABC9C
}

.home-index .activity-table .loading {
  text-align: center
}

.home-index .activity-table .loading .fa-spin {
  font-size: 26px;
  vertical-align: middle;
  margin-right: 10px
}

.home-index .activity-table .load-more-button {
  border: 0;
  background: #3498DB;
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
  display: block;
  width: 200px;
  margin-top: 20px
}

.home-index .activity-table .load-more-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-index .activity-table .load-more-button.disabled, .home-index .activity-table .load-more-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-index .activity-table .load-more-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8bc4ea
}

.home-corporate .top-section {
  background-image: url(/images/lp/desk_work.jpg);
  background-size: cover;
  background-position: 50%;
  height: 500px;
  position: relative;
  box-sizing: border-box;
  padding-top: 80px
}

.home-corporate .top-section .photo-cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(22, 44, 62, 0.3);
  z-index: 0
}

.home-corporate .top-section .title {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 41px;
  position: relative
}

@media all and (max-width: 767px) {
  .home-corporate .top-section .title {
    font-size: 26px
  }
}

.home-corporate .top-section .subtitle {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  position: relative;
  margin-top: 20px;
  line-height: 25px
}

@media all and (max-width: 767px) {
  .home-corporate .top-section .subtitle {
    font-size: 16px
  }
}

.home-corporate .top-section .black-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding-top: 20px;
  box-sizing: border-box
}

.home-corporate .top-section .black-bar .register-button {
  border: 0;
  background: #E67E22;
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
  box-shadow: 0px 3px 0px 0px #924d10;
  margin-bottom: 20px;
  font-size: 23px;
  padding: 17px 100px;
  position: relative
}

.home-corporate .top-section .black-bar .register-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-corporate .top-section .black-bar .register-button.disabled, .home-corporate .top-section .black-bar .register-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-corporate .top-section .black-bar .register-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f0b37e
}

.home-corporate .top-section .black-bar .register-button:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.home-corporate .top-section .black-bar .register-button.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .home-corporate .top-section .black-bar .register-button {
    display: block;
    padding: 17px 0;
    margin: 0 10px 10px
  }
}

.home-corporate .top-section .black-bar .register-button .fa-angle-right {
  position: absolute;
  right: 15px;
  margin-top: -6px;
  font-size: 30px
}

.home-corporate .top-section .black-bar .phone {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  text-align: center;
  margin-bottom: 10px
}

.home-corporate .top-section .black-bar .contact {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  color: #60C2FF;
  text-align: center
}

.home-corporate .top-section .black-bar .contact:hover {
  color: white
}

.home-corporate .detail-section {
  padding: 50px 0
}

.home-corporate .detail-section .detail {
  width: 980px;
  margin: 0 auto;
  padding: 30px 0
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail {
    width: auto;
    padding: 20px 0
  }
}

.home-corporate .detail-section .detail .icon {
  width: 400px;
  text-align: center
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail .icon {
    width: auto
  }
}

.home-corporate .detail-section .detail .icon .fa {
  font-size: 100px
}

.home-corporate .detail-section .detail .icon img {
  width: 200px;
  margin-bottom: 10px
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail .icon img {
    width: 150px
  }
}

.home-corporate .detail-section .detail .text-box {
  width: 480px
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail .text-box {
    width: auto;
    text-align: center
  }
}

.home-corporate .detail-section .detail .text-box .subtitle {
  font-size: 25px;
  margin-bottom: 10px
}

.home-corporate .detail-section .detail .text-box .text {
  line-height: 23px;
  padding: 0 5px
}

.home-corporate .detail-section .detail-left .icon {
  float: left
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail-left .icon {
    float: none
  }
}

.home-corporate .detail-section .detail-left .text-box {
  float: left
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail-left .text-box {
    float: none
  }
}

.home-corporate .detail-section .detail-right .icon {
  float: right
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail-right .icon {
    float: none
  }
}

.home-corporate .detail-section .detail-right .text-box {
  float: right
}

@media all and (max-width: 767px) {
  .home-corporate .detail-section .detail-right .text-box {
    float: none
  }
}

.home-corporate .register-section {
  text-align: center;
  margin-bottom: 100px
}

.home-corporate .register-section .register-button {
  border: 0;
  background: #E67E22;
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
  box-shadow: 0px 3px 0px 0px #924d10;
  margin-bottom: 20px;
  font-size: 23px;
  padding: 17px 100px;
  position: relative
}

.home-corporate .register-section .register-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-corporate .register-section .register-button.disabled, .home-corporate .register-section .register-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-corporate .register-section .register-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f0b37e
}

.home-corporate .register-section .register-button:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.home-corporate .register-section .register-button.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .home-corporate .register-section .register-button {
    display: block;
    padding: 17px 0;
    margin: 0 10px 10px
  }
}

.home-corporate .register-section .register-button .fa-angle-right {
  position: absolute;
  right: 15px;
  margin-top: -6px;
  font-size: 30px
}

.home-corporate .register-section .phone {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  margin-bottom: 10px;
  color: #666
}

.home-corporate .register-section .contact {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  color: #60C2FF
}

.home-corporate .register-section .contact:hover {
  color: #666
}

.home-transfer .top-section {
  background-image: url(/images/lp/transfer_background.png);
  background-size: cover;
  background-position: 50%;
  height: 500px;
  position: relative;
  box-sizing: border-box;
  padding-top: 80px
}

.home-transfer .top-section .photo-cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(22, 44, 62, 0.3);
  z-index: 0
}

.home-transfer .top-section .photo-cover .contact {
  color: #60C2FF
}

.home-transfer .top-section .title {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 41px;
  position: relative
}

@media all and (max-width: 767px) {
  .home-transfer .top-section .title {
    font-size: 26px
  }
}

.home-transfer .top-section .subtitle {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  position: relative;
  margin-top: 20px;
  line-height: 25px
}

@media all and (max-width: 767px) {
  .home-transfer .top-section .subtitle {
    font-size: 16px
  }
}

.home-transfer .top-section .subtitle .link {
  color: #60C2FF
}

.home-transfer .top-section .subtitle .link:hover {
  color: white
}

.home-transfer .top-section .black-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding-top: 20px;
  box-sizing: border-box
}

.home-transfer .top-section .black-bar .register-button {
  border: 0;
  background: #E67E22;
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
  box-shadow: 0px 3px 0px 0px #924d10;
  margin-bottom: 20px;
  font-size: 23px;
  padding: 17px 100px;
  position: relative
}

.home-transfer .top-section .black-bar .register-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-transfer .top-section .black-bar .register-button.disabled, .home-transfer .top-section .black-bar .register-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-transfer .top-section .black-bar .register-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f0b37e
}

.home-transfer .top-section .black-bar .register-button:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.home-transfer .top-section .black-bar .register-button.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .home-transfer .top-section .black-bar .register-button {
    display: block;
    padding: 17px 0;
    margin: 0 10px 10px
  }
}

.home-transfer .top-section .black-bar .register-button .fa-angle-right {
  position: absolute;
  right: 15px;
  margin-top: -6px;
  font-size: 30px
}

.home-transfer .top-section .black-bar .phone {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  text-align: center;
  margin-bottom: 10px
}

.home-transfer .top-section .black-bar .contact {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  color: #60C2FF;
  text-align: center
}

.home-transfer .top-section .black-bar .contact:hover {
  color: white
}

.home-transfer .detail-section {
  padding: 50px 0 25px
}

.home-transfer .detail-section .detail {
  width: 980px;
  margin: 0 auto;
  padding: 30px 0
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail {
    width: auto;
    padding: 20px 0
  }
}

.home-transfer .detail-section .detail .icon {
  width: 400px;
  text-align: center
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail .icon {
    width: auto
  }
}

.home-transfer .detail-section .detail .icon .fa {
  font-size: 100px
}

.home-transfer .detail-section .detail .icon img {
  width: 200px;
  margin-bottom: 10px
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail .icon img {
    width: 150px
  }
}

.home-transfer .detail-section .detail .text-box {
  width: 480px
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail .text-box {
    width: auto;
    text-align: center
  }
}

.home-transfer .detail-section .detail .text-box .subtitle {
  font-size: 25px;
  margin-bottom: 10px
}

.home-transfer .detail-section .detail .text-box .text {
  line-height: 23px;
  padding: 0 5px
}

.home-transfer .detail-section .detail-left .icon {
  float: left
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail-left .icon {
    float: none
  }
}

.home-transfer .detail-section .detail-left .text-box {
  float: left
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail-left .text-box {
    float: none
  }
}

.home-transfer .detail-section .detail-right .icon {
  float: right
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail-right .icon {
    float: none
  }
}

.home-transfer .detail-section .detail-right .text-box {
  float: right
}

@media all and (max-width: 767px) {
  .home-transfer .detail-section .detail-right .text-box {
    float: none
  }
}

.home-transfer .comparison-section {
  width: 980px;
  margin: 0 auto;
  text-align: center;
  padding: 25px 0
}

@media all and (max-width: 767px) {
  .home-transfer .comparison-section {
    width: 100%
  }
}

.home-transfer .comparison-section .text-box .subtitle {
  font-size: 25px;
  margin-bottom: 10px
}

.home-transfer .comparison-section .text-box .text {
  line-height: 23px;
  padding: 0 5px
}

.home-transfer .comparison-section .table {
  width: 100%;
  margin-top: 30px;
  border: 1px solid #ccc
}

.home-transfer .comparison-section .table td, .home-transfer .comparison-section .table th {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: left
}

.home-transfer .howto-section {
  text-align: center;
  padding: 25px 0 50px
}

.home-transfer .howto-section .subtitle {
  font-size: 25px;
  margin: 20px 0 10px
}

@media all and (max-width: 767px) {
  .home-transfer .howto-section .subtitle {
    font-size: 16px
  }
}

.home-transfer .howto-section .text {
  line-height: 23px;
  padding: 0 5px
}

.home-transfer .howto-section .text .link {
  color: #2980B9;
  text-decoration: none
}

.home-transfer .howto-section .text .link:hover {
  color: #34495E
}

.home-transfer .register-section {
  text-align: center;
  margin-bottom: 100px
}

.home-transfer .register-section .register-button {
  border: 0;
  background: #E67E22;
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
  box-shadow: 0px 3px 0px 0px #924d10;
  margin-bottom: 20px;
  font-size: 23px;
  padding: 17px 100px;
  position: relative
}

.home-transfer .register-section .register-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.home-transfer .register-section .register-button.disabled, .home-transfer .register-section .register-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.home-transfer .register-section .register-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f0b37e
}

.home-transfer .register-section .register-button:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.home-transfer .register-section .register-button.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .home-transfer .register-section .register-button {
    display: block;
    padding: 17px 0;
    margin: 0 10px 10px
  }
}

.home-transfer .register-section .register-button .fa-angle-right {
  position: absolute;
  right: 15px;
  margin-top: -6px;
  font-size: 30px
}

.home-transfer .register-section .phone {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  margin-bottom: 10px;
  color: #666
}

.home-transfer .register-section .contact {
  font-weight: bold;
  font-size: 17px;
  display: inline-block;
  color: #60C2FF
}

.home-transfer .register-section .contact:hover {
  color: #666
}

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

.iam-reset-password {
  width: 500px;
  margin: 50px auto;
  background-color: #FFF;
  box-sizing: border-box
}

@media all and (max-width: 767px) {
  .iam-reset-password {
    width: auto;
    margin: 50px 10px
  }
}

.iam-reset-password .top-message {
  background-color: #34495E;
  color: #FFF;
  padding: 15px;
  text-align: center
}

.iam-reset-password .box-inner {
  padding: 40px 60px
}

@media all and (max-width: 767px) {
  .iam-reset-password .box-inner {
    padding: 30px 10px
  }
}

.iam-reset-password .message {
  line-height: 20px
}

.iam-reset-password .submit {
  border: 0;
  background: #2ECC71;
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
  display: block;
  margin-top: 20px;
  width: 200px
}

.iam-reset-password .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.iam-reset-password .submit.disabled, .iam-reset-password .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.iam-reset-password .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #7ee2a8
}

.iam-reset-password label {
  margin-bottom: 5px;
  display: inline-block;
  width: 200px
}

.iam-reset-password input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  line-height: 17px;
  width: 100%;
  box-sizing: border-box
}

.iam-reset-password.top-margin {
  margin-top: 100px
}

.iam-reset-password strong {
  font-weight: bold
}

.iam-reset-password-auth {
  width: 500px;
  margin: 50px auto;
  background-color: #FFF;
  box-sizing: border-box
}

@media all and (max-width: 767px) {
  .iam-reset-password-auth {
    width: auto;
    margin: 50px 10px
  }
}

.iam-reset-password-auth .top-message {
  background-color: #34495E;
  color: #FFF;
  padding: 15px;
  text-align: center
}

.iam-reset-password-auth .box-inner {
  padding: 40px 60px
}

@media all and (max-width: 767px) {
  .iam-reset-password-auth .box-inner {
    padding: 30px 10px
  }
}

.iam-reset-password-auth .message {
  line-height: 20px;
  margin-bottom: 40px
}

.iam-reset-password-auth .subtitle {
  text-align: center;
  line-height: 20px;
  margin-bottom: 24px;
  font-weight: 700
}

.iam-reset-password-auth .submit {
  border: 0;
  background: #2ECC71;
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
  display: block;
  margin-top: 60px;
  width: 200px
}

.iam-reset-password-auth .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.iam-reset-password-auth .submit.disabled, .iam-reset-password-auth .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.iam-reset-password-auth .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #7ee2a8
}

.iam-reset-password-auth .resend {
  border: 0;
  background: #2ECC71;
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
  display: block;
  margin-top: 24px;
  width: 200px
}

.iam-reset-password-auth .resend:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.iam-reset-password-auth .resend.disabled, .iam-reset-password-auth .resend:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.iam-reset-password-auth .resend:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #7ee2a8
}

.iam-reset-password-auth label {
  margin-bottom: 5px;
  display: inline-block;
  width: 100%;
  margin-bottom: 8px
}

.iam-reset-password-auth input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  line-height: 17px;
  width: 100%;
  box-sizing: border-box
}

.iam-reset-password-auth.top-margin {
  margin-top: 100px
}

.iam-reset-password-auth .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px
}

.iam-reset-password-auth .text {
  text-align: center;
  margin-bottom: 12px;
  line-height: 23px
}

.iam-reset-email-auth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-reset-email-auth .container {
  box-sizing: border-box;
  padding: 40px 40px 48px;
  color: #194035;
  background: #F3FCF9;
  border-radius: 24px;
  max-width: 426px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-reset-email-auth .container .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 22px
}

.iam-reset-email-auth .container .text {
  line-height: 180%;
  font-size: 14px
}

.iam-reset-email-auth .container .text b {
  font-weight: 700
}

.iam-reset-email-auth .logo {
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

.iam-reset-email-auth .container-from-app {
  box-sizing: border-box;
  color: #194035;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-reset-email-auth .container-from-app .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 16px
}

.iam-reset-email-auth .container-from-app .button {
  max-width: 343px;
  height: 50px;
  line-height: 50px;
  background: #17CA94;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.405714px;
  color: #FFFFFF;
  width: 100%;
  margin: 18px 0px
}

.iam-reset-email-auth .container-from-app .info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #F3FCF9;
  border-radius: 8px;
  padding: 16px 32px
}

.iam-reset-email-auth .container-from-app .info-icon {
  margin-right: 12px
}

.iam-reset-email-auth .container-from-app .info-title {
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 140%
}

.iam-reset-email-auth .container-from-app .info-text {
  font-size: 11px;
  line-height: 140%
}

.iam-reset-email-auth .logo-from-app {
  position: absolute;
  bottom: 8px;
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

.iam-reset-email-auth.top-margin {
  margin-top: 100px
}

.iam-reset-totp {
  border-radius: 3px;
  width: 420px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  padding: 40px
}

@media all and (max-width: 767px) {
  .iam-reset-totp {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.iam-reset-totp .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold
}

.iam-reset-totp .sub_title {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold
}

.iam-reset-totp .sub_text {
  text-align: left;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 23px
}

.iam-reset-totp .link {
  color: #2980B9;
  text-decoration: none
}

.iam-reset-totp .link:hover {
  color: #34495E
}

.iam-reset-totp.top-margin {
  margin-top: 100px
}

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

.iam-sessions-signup-auth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-sessions-signup-auth .panel {
  width: 680px;
  padding: 42px;
  gap: 6px;
  border-radius: 3px;
  margin: 20px auto 48px;
  background-color: white;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 320px
}

@media all and (max-width: 767px) {
  .iam-sessions-signup-auth .panel {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.iam-sessions-signup-auth .panel .init-text {
  margin: auto;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px
}

.iam-sessions-signup-auth .panel .title {
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #262B3F
}

.iam-sessions-signup-auth .panel .subtitle {
  margin-top: 32px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #262B3F;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.iam-sessions-signup-auth .panel .subtitle .subtitle-index {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #09BA85;
  margin-right: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  text-align: center
}

.iam-sessions-signup-auth .panel .subtitle-description {
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #262B3F
}

.iam-sessions-signup-auth .panel .input-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 6px 0px
}

.iam-sessions-signup-auth .panel .input-row label {
  width: 240px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #262B3F
}

.iam-sessions-signup-auth .panel .input-row input {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 48px;
  border: 1px solid #BEC2D6;
  border-radius: 4px;
  padding: 8px 16px
}

.iam-sessions-signup-auth .panel .additional-description {
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
  color: #535E82
}

.iam-sessions-signup-auth .panel .button-row {
  margin: 48px 0px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.iam-sessions-signup-auth .panel .button-row .submit {
  padding: 14px 48px;
  height: 54px;
  background: #09BA85;
  border-radius: 4px;
  border-style: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #FFFFFF
}

.iam-sessions-signup-auth .panel .invalid-text {
  margin: auto;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px
}

.iam-sessions-signup-auth .panel .complete-text {
  margin: auto;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px
}

.iam-sessions-signup-auth.top-margin {
  margin-top: 100px
}

.iam-sessions-signin .panel {
  width: 420px;
  padding: 40px;
  border-radius: 3px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

@media all and (max-width: 767px) {
  .iam-sessions-signin .panel {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.iam-sessions-signin .email-auth-panel {
  width: 500px;
  padding: 20px 20px 40px;
  border-radius: 3px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

@media all and (max-width: 767px) {
  .iam-sessions-signin .email-auth-panel {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.iam-sessions-signin .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold
}

.iam-sessions-signin .text {
  text-align: center;
  margin-bottom: 30px;
  line-height: 23px
}

.iam-sessions-signin .help {
  text-align: left;
  line-height: 23px;
  font-size: 13px
}

.iam-sessions-signin .link {
  color: #2980B9;
  text-decoration: none;
  margin: 10px 0
}

.iam-sessions-signin .link:hover {
  color: #34495E
}

.iam-sessions-signin .form {
  width: 100%;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

@media all and (max-width: 767px) {
  .iam-sessions-signin .form {
    width: auto
  }
}

.iam-sessions-signin .form input {
  border: 1px solid #CCC;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  box-sizing: border-box
}

.iam-sessions-signin .submit {
  border: 0;
  background: #3498DB;
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
  margin: 10px auto;
  display: block;
  font-weight: bold;
  padding: 13px;
  width: 100%;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

.iam-sessions-signin .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.iam-sessions-signin .submit.disabled, .iam-sessions-signin .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.iam-sessions-signin .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8bc4ea
}

.iam-sessions-signin .note {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  padding: 10px 0
}

.iam-sessions-signin .hr {
  display: block;
  margin: 31px 0 -33px;
  border-bottom: 1px solid #ddd
}

.iam-sessions-signin .or {
  background: #fff;
  text-align: center;
  margin: 26px auto;
  width: 60px;
  color: #666666
}

@media all and (max-width: 767px) {
  .iam-sessions-signin .or {
    background-color: #ECF0F1
  }
}

.iam-sessions-signin label {
  margin: 5px 0;
  display: inline-block;
  font-size: 12px
}

.iam-sessions-signin .signin_link {
  color: #2980B9;
  text-decoration: none;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin: 5px 0;
  font-size: 12px
}

.iam-sessions-signin .signin_link:hover {
  color: #34495E
}

.iam-sessions-signin .notice {
  border: solid #E74C3C 1px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  margin-top: 15px;
  text-align: left;
  padding: 4px;
  margin-bottom: 15px
}

.iam-sessions-signin .notice b {
  font-weight: bold
}

.iam-sessions-signin .email_auth_title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px
}

.iam-sessions-signin .email_auth_text {
  margin-bottom: 30px;
  line-height: 23px
}

.iam-sessions-signin .email_auth_link {
  color: #2980B9;
  text-decoration: none;
  text-align: center
}

.iam-sessions-signin .email_auth_link:hover {
  color: #34495E
}

.iam-sessions-signin.top-margin {
  margin-top: 100px
}

.iam-sessions-signout {
  padding: 30px;
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box
}

@media (max-width: 1200px) {
  .iam-sessions-signout {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .iam-sessions-signout {
    padding: 10px
  }
}

@media (max-width: 767px) {
  .iam-sessions-signout {
    padding: 30px 0
  }
}

.iam-sessions-signout .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em;
  margin: 0 0 0.5em;
  padding-bottom: 0;
  font-weight: bold;
  color: #666
}

@media (max-width: 767px) {
  .iam-sessions-signout .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.iam-sessions-signout .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.iam-sessions-signout .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.iam-sessions-signout .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.iam-sessions-signout .title .svg-icon-menu path {
  fill: #20C2D3
}

.iam-sessions-signout .desc {
  font-size: 16px;
  line-height: 1.4;
  padding-bottom: 1em;
  text-align: center;
  width: 285px
}

@media (max-width: 767px) {
  .iam-sessions-signout .desc {
    font-size: 14px;
    line-height: 1.2
  }
}

.iam-sessions-signout .signout {
  border: 0;
  background: #E74C3C;
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
  margin: 0 auto;
  display: block;
  width: 200px
}

.iam-sessions-signout .signout:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.iam-sessions-signout .signout.disabled, .iam-sessions-signout .signout:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.iam-sessions-signout .signout:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #f29f97
}

.iam-sessions-signout .banners {
  margin-top: 100px;
  text-align: center
}

.iam-sessions-signout .banners img {
  padding: 16px
}

.iam-session-signin-auth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-session-signin-auth .container {
  box-sizing: border-box;
  padding: 40px 40px 48px;
  color: #194035;
  background: #F3FCF9;
  border-radius: 24px;
  max-width: 426px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-session-signin-auth .container .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 22px
}

.iam-session-signin-auth .container .text {
  line-height: 180%;
  font-size: 14px
}

.iam-session-signin-auth .container .text b {
  font-weight: 700
}

.iam-session-signin-auth .logo {
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

.iam-session-signin-auth.top-margin {
  margin-top: 100px
}

.iam-session-signin-deny {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-session-signin-deny .container {
  box-sizing: border-box;
  padding: 40px 40px 48px;
  color: #194035;
  background: #F3FCF9;
  border-radius: 24px;
  max-width: 426px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.iam-session-signin-deny .container .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 22px
}

.iam-session-signin-deny .container .text {
  line-height: 180%;
  font-size: 14px
}

.iam-session-signin-deny .container .text b {
  font-weight: 700
}

.iam-session-signin-deny .logo {
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

.iam-session-signin-deny.top-margin {
  margin-top: 100px
}

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

.info-terms {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-terms {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-terms {
    padding: 10px
  }
}

.info-terms .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-terms .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-terms .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-terms .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-terms .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-terms .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-terms .subtitle {
  font-size: 17px;
  margin: 30px 0 10px;
  font-weight: bold
}

.info-terms ul {
  list-style: decimal
}

.info-terms .text {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-terms .text .link {
  color: #2980B9;
  text-decoration: none
}

.info-terms .text .link:hover {
  color: #34495E
}

.info-terms .tagline {
  line-height: 22px;
  margin-bottom: 5px
}

.info-terms .date {
  margin-top: 30px
}

.info-terms .revised {
  margin: 30px 0 10px;
  list-style: none
}

.info-terms .revised .text {
  text-align: right
}

.info-terms .datetime {
  text-align: right;
  margin-bottom: 10px
}

.info-terms .corporate_name {
  text-align: right
}

.info-terms .link {
  color: #2980B9;
  text-decoration: none;
  cursor: pointer
}

.info-terms .link:hover {
  color: #34495E
}

.info-terms .warning-message {
  color: #E74C3C;
  margin-bottom: 36px
}

.info-terms2 {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-terms2 {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-terms2 {
    padding: 10px
  }
}

.info-terms2 .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-terms2 .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-terms2 .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-terms2 .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-terms2 .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-terms2 .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-terms2 .subtitle {
  font-size: 17px;
  margin: 30px 0 10px;
  font-weight: bold
}

.info-terms2 ul {
  list-style: square;
  padding-left: 20px
}

.info-terms2 .text {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-terms2 .text .link {
  color: #2980B9;
  text-decoration: none
}

.info-terms2 .text .link:hover {
  color: #34495E
}

.info-terms2 .tagline {
  line-height: 22px;
  margin-bottom: 5px
}

.info-terms2 .date {
  margin-top: 30px
}

.info-terms2 .revised {
  margin: 30px 0 10px;
  list-style: none
}

.info-terms2 .revised .text {
  text-align: right
}

.info-terms2 .datetime {
  text-align: right;
  margin-bottom: 10px
}

.info-terms2 .corporate_name {
  text-align: right
}

.info-terms2 .link {
  color: #2980B9;
  text-decoration: none;
  cursor: pointer
}

.info-terms2 .link:hover {
  color: #34495E
}

.info-terms2 .warning-message {
  color: #E74C3C;
  margin-bottom: 36px
}

.info-staking {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-staking {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-staking {
    padding: 10px
  }
}

.info-staking .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-staking .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-staking .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-staking .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-staking .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-staking .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-staking .subtitle {
  font-size: 18px;
  margin: 30px 0 16px;
  font-weight: bold
}

.info-staking .topic-title {
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  color: #666
}

.info-staking .text {
  line-height: 22px;
  margin-bottom: 5px
}

.info-staking .text .link {
  color: #2980B9;
  text-decoration: none
}

.info-staking .text .link:hover {
  color: #34495E
}

.info-staking .important-announce {
  margin-top: 16px;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #E74C3C;
  color: #E74C3C;
  font-weight: 700
}

.info-staking .important-announce .fa-exclamation-triangle {
  margin-right: 8px
}

.info-staking .boxed {
  margin-top: 16px;
  padding: 12px;
  border-radius: 5px;
  background-color: #ECF0F1
}

.info-staking .final-line {
  margin-bottom: 32px
}

.info-staking .tagline {
  line-height: 22px;
  margin-bottom: 5px
}

.info-staking .foot-notes {
  font-size: 12px
}

.info-staking .foot-notes .item {
  line-height: 14px;
  margin-bottom: 4px
}

.info-staking li {
  margin-left: 32px
}

.info-staking ul.numbers {
  list-style: decimal
}

.info-staking ul.dots {
  list-style: circle
}

.info-staking ul.foot-notes {
  list-style: none;
  counter-reset: notes-counter;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  padding: 0
}

.info-staking ul.foot-notes li {
  counter-increment: notes-counter;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.8rem;
  width: 90%;
  margin-bottom: 0.5rem;
  margin-left: 16px;
  line-height: 0.25rem
}

.info-staking ul.foot-notes li:before {
  content: "※" counter(notes-counter);
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 0.5rem
}

.info-staking .contact {
  margin-top: 32px
}

.info-antisocial {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-antisocial {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-antisocial {
    padding: 10px
  }
}

.info-antisocial .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-antisocial .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-antisocial .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-antisocial .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-antisocial .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-antisocial .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-antisocial .subtitle {
  font-size: 17px;
  margin: 30px 0 10px;
  font-weight: bold
}

.info-antisocial ul {
  list-style: decimal
}

.info-antisocial .text {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-antisocial .text .link {
  color: #2980B9;
  text-decoration: none
}

.info-antisocial .text .link:hover {
  color: #34495E
}

.info-antisocial .tagline {
  line-height: 22px;
  margin-bottom: 5px
}

.info-antisocial .datetime {
  text-align: right;
  margin: 10px 0
}

.info-antisocial .corporate_name {
  text-align: right
}

.info-security-policy {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-security-policy {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-security-policy {
    padding: 10px
  }
}

.info-security-policy .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-security-policy .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-security-policy .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-security-policy .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-security-policy .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-security-policy .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-security-policy .subtitle {
  font-size: 17px;
  margin: 30px 0 10px;
  font-weight: bold
}

.info-security-policy ul {
  list-style: decimal
}

.info-security-policy .text {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-security-policy .text .link {
  color: #2980B9;
  text-decoration: none
}

.info-security-policy .text .link:hover {
  color: #34495E
}

.info-security-policy .tagline {
  line-height: 22px;
  margin-bottom: 5px
}

.info-security-policy .datetime {
  text-align: right;
  margin: 10px 0
}

.info-security-policy .corporate_name {
  text-align: right
}

.info-fee {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-fee {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-fee {
    padding: 10px
  }
}

.info-fee .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-fee .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-fee .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-fee .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-fee .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-fee .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-fee .caution_subtitle {
  font-size: 17px;
  margin: 0 0 15px;
  font-weight: bold;
  color: #666
}

.info-fee .subtitle {
  font-size: 17px;
  margin: 30px 0 15px;
  font-weight: bold;
  color: #666
}

.info-fee .text {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-fee .link {
  color: #2980B9;
  text-decoration: none
}

.info-fee .link:hover {
  color: #34495E
}

.info-fee .table {
  width: 100%;
  border: 1px solid #e6e6e6
}

.info-fee .table td {
  border: 1px solid #e6e6e6;
  padding: 12px;
  line-height: 22px
}

.info-fee .table td.right {
  text-align: right
}

.info-fee .table td .is-gray {
  color: #666
}

.info-fee .table td.is-narrow {
  width: 12em
}

@media (max-width: 767px) {
  .info-fee .table td.is-narrow {
    width: 8em
  }
}

.info-fee .list {
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 23px
}

.info-fee .h3title {
  font-weight: bold;
  margin: 30px 0 15px
}

.info-fee .mt5 li {
  margin-top: 5px
}

.info-fee .mt30 {
  margin-top: 30px
}

.info-fee .mb7 {
  margin-bottom: 7px
}

.info-fee .ml10 {
  margin-left: 10px
}

.info-fee .ml15 {
  margin-left: 15px
}

.info-fee .ml25 {
  margin-left: 25px
}

.info-fee .ml30 {
  margin-left: 30px
}

.info-fee .ml35 {
  margin-left: 35px
}

.info-fee .ml45 {
  margin-left: 45px
}

.info-test {
  background-color: #EEE;
  padding-top: 50px;
  padding-bottom: 300px;
  text-align: center
}

.info-test .image {
  display: block;
  margin: 0 auto;
  width: 175px
}

.info-test .form {
  margin: 0 auto;
  border: 1px solid #CCC;
  padding: 3px 10px;
  width: 300px;
  background-color: white;
  margin-top: 50px;
  border-radius: 3px
}

.info-test .form input {
  padding: 5px;
  display: block;
  width: 290px;
  line-height: 27px;
  border-radius: 0
}

.info-test .form .email {
  border-bottom: 1px solid #DDD;
  margin-bottom: 5px
}

.info-test .form .password {
  margin-top: 5px
}

.info-test .submit {
  border: 0;
  background: #20C2D3;
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
  width: 320px;
  display: block;
  margin: 10px auto;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px
}

.info-test .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-test .submit.disabled, .info-test .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-test .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-test .login-link {
  text-align: center;
  margin-top: 30px;
  color: #2980B9;
  text-decoration: none
}

.info-test .login-link:hover {
  color: #34495E
}

.info-test .logo {
  text-align: center;
  margin-top: 330px;
  color: #20C2D3;
  font-size: 50px
}

.info-help {
  padding: 30px;
  background-color: white;
  min-height: 300px;
  margin: 100px auto 15px auto;
  color: #666666
}

@media (max-width: 1200px) {
  .info-help {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-help {
    padding: 10px
  }
}

.info-help .info-help-inner {
  width: 800px;
  margin-left: auto;
  margin-right: auto
}

@media all and (max-width: 1119px) {
  .info-help .info-help-inner {
    width: 85%
  }
}

@media all and (max-width: 767px) {
  .info-help .info-help-inner {
    width: 100%;
    box-sizing: border-box
  }
}

.info-help .info-help-inner .help-svg {
  display: block;
  width: 280px;
  margin: 32px auto 0 auto;
  fill: #254451
}

.info-help .info-help-inner .help-svg:hover {
  opacity: 0.6
}

.info-help .info-help-inner .top-link {
  color: #2980B9;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5rem;
  margin: 30px auto
}

.info-help .info-help-inner .top-link:hover {
  color: #34495E
}

.info-help .info-help-inner .top-link:hover {
  text-decoration: underline
}

.info-help .info-help-inner .top-link-box {
  margin-top: 40px
}

.info-help .info-help-inner h1 {
  text-align: center;
  margin-top: 25px
}

.info-help .info-help-inner .info-compensation {
  width: 100%;
  box-sizing: border-box;
  line-height: 1.75
}

.info-help .info-help-inner .info-compensation h1 {
  font-size: 2rem;
  font-weight: bold
}

.info-help .info-help-inner .info-compensation dl {
  width: 100%;
  box-sizing: border-box;
  padding: 32px 0;
  border-top: 1px solid #CCC
}

.info-help .info-help-inner .info-compensation dl h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #20C2D3;
  padding: 2px 0 2px 16px;
  border-left: 4px solid #20C2D3
}

.info-help .info-help-inner .info-compensation dl dt {
  width: 100%;
  box-sizing: border-box;
  background: #f1f4f8;
  padding: 16px;
  margin-top: 40px;
  color: #306597;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.info-help .info-help-inner .info-compensation dl dt .question {
  font-size: 1.5rem;
  margin-right: 12px
}

.info-help .info-help-inner .info-compensation dl dt .question-text {
  width: 100%;
  box-sizing: border-box
}

@media all and (max-width: 599px) {
  .info-help .info-help-inner .info-compensation dl dt {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
}

.info-help .info-help-inner .info-compensation dl dd {
  box-sizing: border-box;
  border: 1px solid #CCC;
  padding: 16px;
  margin-top: 8px;
  margin-left: 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.info-help .info-help-inner .info-compensation dl dd .answer {
  color: #b51913;
  font-size: 1.5rem;
  margin-right: 12px
}

.info-help .info-help-inner .info-compensation dl dd .answer-text {
  width: 100%;
  box-sizing: border-box
}

.info-help .info-help-inner .info-compensation dl dd .answer-text p {
  margin-bottom: 16px
}

.info-help .info-help-inner .info-compensation dl dd .answer-text p:last-of-type {
  margin-bottom: 0
}

@media all and (max-width: 599px) {
  .info-help .info-help-inner .info-compensation dl dd {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 0
  }
}

.info-help .info-help-inner .info-compensation dl .svg-icons {
  width: 24px;
  height: auto;
  fill: #f1f4f8
}

.info-help .info-help-inner .info-compensation .compensation-fragment {
  margin: 32px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.info-help .info-help-inner .info-compensation .compensation-fragment a {
  color: #2980B9;
  text-decoration: none;
  font-size: 1.3rem
}

.info-help .info-help-inner .info-compensation .compensation-fragment a:hover {
  color: #34495E
}

.info-help .info-help-inner .info-compensation .compensation-fragment a:hover {
  text-decoration: underline
}

@media all and (max-width: 599px) {
  .info-help .info-help-inner .info-compensation .compensation-fragment a {
    width: 100%;
    box-sizing: border-box
  }
}

.info-help .info-help-inner .info-compensation .compensation-fragment li {
  width: 49%;
  padding: 0
}

@media all and (max-width: 599px) {
  .info-help .info-help-inner .info-compensation .compensation-fragment {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
}

.info-help a {
  color: #1ABC9C
}

.info-help a:hover {
  text-decoration: underline
}

.info-help li {
  padding: 12px 0
}

.info-help .title {
  width: 100%;
  margin: 40px 0
}

.info-help .title:hover {
  opacity: 0.5
}

@media all and (max-width: 767px) {
  .info-help .title {
    margin: 0
  }
}

.info-help .subtitle {
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin: 40px 0 20px;
  font-weight: bold
}

.info-help .tel-inquiry {
  font-size: 17px;
  margin: 40px 0 20px;
  line-height: 1.6
}

.info-help .tel-inquiry p {
  margin-bottom: 10px
}

.info-help .tel-inquiry .red {
  color: #E74C3C
}

.info-help .tel-inquiry .tel-connection {
  margin-bottom: 30px
}

.info-help .searchbox {
  position: relative;
  border: solid;
  border-width: 1px;
  border-color: #C3C3C3;
  border-radius: 30px;
  padding: 5px 10px;
  margin: 30px 0 15px
}

.info-help .searchbox i {
  padding: 0 10px;
  cursor: pointer;
  position: absolute;
  top: 18px
}

.info-help .searchbox input[type="text"] {
  display: block;
  width: 100%;
  height: 44px;
  margin: 0;
  padding: 0;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 16px
}

.info-help .search-advice {
  margin: 5px 0px 0px 40px;
  line-height: 1.5em
}

@media all and (max-width: 767px) {
  .info-help .search-advice {
    margin-left: 0;
    text-align: center
  }
}

.info-help .search-advice .link {
  color: #2980B9;
  text-decoration: none
}

.info-help .search-advice .link:hover {
  color: #34495E
}

.info-help .suggests {
  margin-top: 60px
}

.info-help .suggests .subtitle {
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin-bottom: 50px
}

.info-help .suggests .suggest {
  float: left;
  width: 50%;
  margin: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle
}

@media all and (max-width: 767px) {
  .info-help .suggests .suggest {
    float: none;
    width: 100%;
    margin: 20px 0
  }
}

.info-help .suggests .suggest .icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: middle
}

.info-help .not-found {
  margin: 100px 0;
  text-align: center;
  font-size: 25px
}

.info-help .results {
  margin-top: 50px
}

.info-help .results .content {
  margin-bottom: 30px;
  margin-left: 10px
}

.info-help .results .content a {
  display: block
}

.info-help .results .content .header {
  margin-bottom: 10px
}

.info-help .results .content .body a {
  font-size: 14px;
  color: #999999;
  height: 4.5em;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em
}

.info-help .results .content .body a:hover {
  text-decoration: none
}

.info-help .results .content .body strong {
  font-weight: bold;
  color: #666666
}

.info-help .results .more {
  text-align: center
}

.info-help .results .more i {
  font-size: 20px;
  margin-right: 5px
}

.info-help .results .button .submit {
  position: absolute;
  width: 200px;
  left: 0;
  right: 0;
  border: 0;
  background: #1ABC9C;
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
  position: relative
}

.info-help .results .button .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-help .results .button .submit.disabled, .info-help .results .button .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-help .results .button .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #55e7ca
}

.info-help .pagenator {
  text-align: center
}

.info-help .reaction {
  margin-top: 50px;
  padding-top: 20px;
  border-top-style: solid;
  border-top-color: #EEEEEE;
  border-top-width: 1px
}

.info-help .reaction h2 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px
}

.info-help .reaction .row {
  width: 100%;
  text-align: center
}

.info-help .reaction .row .search {
  border: 0;
  background: #20C2D3;
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
  width: 200px;
  margin-top: 20px
}

.info-help .reaction .row .search:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-help .reaction .row .search.disabled, .info-help .reaction .row .search:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-help .reaction .row .search:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-help .reaction .row .post-contact {
  border: 0;
  background: #20C2D3;
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
  width: 200px;
  margin-top: 20px
}

.info-help .reaction .row .post-contact:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-help .reaction .row .post-contact.disabled, .info-help .reaction .row .post-contact:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-help .reaction .row .post-contact:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-help .breadcrumbs {
  width: 800px;
  margin: 30px auto 15px;
  box-sizing: border-box
}

@media all and (max-width: 1119px) {
  .info-help .breadcrumbs {
    width: 100%
  }
}

.info-help .help-accordion {
  margin-top: 70px;
  color: #333333
}

.info-help .help-accordion h2 {
  font-size: 1.5rem;
  margin-bottom: 24px
}

.info-help .help-accordion .content {
  background-color: #e9fffb;
  border-left: 1px solid #C3C3C3;
  border-right: 1px solid #C3C3C3;
  border-bottom: 1px solid #C3C3C3;
  width: 100%;
  box-sizing: border-box
}

.info-help .help-accordion .content:first-of-type {
  border-top: 1px solid #C3C3C3
}

.info-help .help-accordion .content .header {
  background-color: #FFFFFF;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.info-help .help-accordion .content .header i {
  font-size: 25px;
  margin: 0 20px;
  vertical-align: middle
}

.info-help .help-accordion .content .header span {
  vertical-align: middle
}

.info-help .help-accordion .content .header:hover {
  background-color: #EEEEEE
}

.info-help .help-accordion .content .body {
  border-top: 1px solid #C3C3C3;
  width: 100%;
  box-sizing: border-box
}

.info-help .help-accordion .content .body ul li a {
  display: block;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333333;
  width: auto;
  height: auto
}

@media all and (max-width: 767px) {
  .info-help .help-accordion .content .body ul li a {
    padding-left: 20px
  }
}

.info-help .help-accordion .content .body ul li:hover {
  text-decoration: underline;
  background: #86ffe7
}

.info-help-contact {
  padding: 30px;
  background-color: white;
  margin-top: 100px
}

@media (max-width: 1200px) {
  .info-help-contact {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .info-help-contact {
    padding: 10px
  }
}

.info-help-contact .title {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em
}

@media (max-width: 767px) {
  .info-help-contact .title {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.info-help-contact .title:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.info-help-contact .title .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.info-help-contact .title .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.info-help-contact .title .svg-icon-menu path {
  fill: #20C2D3
}

.info-help-contact .link {
  color: #2980B9;
  text-decoration: none;
  font-weight: 600
}

.info-help-contact .link:hover {
  color: #34495E
}

.info-help-contact .subtitle {
  font-size: 20px;
  margin-bottom: 1em
}

.info-help-contact .subtitle:not(:first-of-type) {
  margin-top: 3em
}

.info-help-contact .before-login .subtitle {
  margin-top: 3em
}

.info-help-contact .form {
  margin-top: 20px
}

.info-help-contact .form .form-notice {
  padding: 0 0 5px;
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 20px
}

.info-help-contact .form .form-notice.deposits-top {
  margin-bottom: 5px
}

.info-help-contact .form .alert {
  padding: 20px;
  background-color: #FFB0A8
}

.info-help-contact .form .alert .text {
  font-size: 14px;
  line-height: 20px
}

.info-help-contact .form .login {
  margin: 20px 0 40px
}

.info-help-contact .form .login .button {
  border: 0;
  background: #20C2D3;
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
  position: relative
}

.info-help-contact .form .login .button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-help-contact .form .login .button.disabled, .info-help-contact .form .login .button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-help-contact .form .login .button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-help-contact .form .info-box {
  margin: 15px 0
}

.info-help-contact .form .star {
  color: #C0392B;
  font-size: 16px;
  height: 15px;
  display: inline-block;
  vertical-align: top;
  margin-right: 3px
}

.info-help-contact .form .user-info {
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 15px;
  font-weight: bold
}

.info-help-contact .form .email-warning {
  color: #C0392B;
  margin-bottom: 10px
}

.info-help-contact .form .spam-warning {
  color: #C0392B;
  margin-bottom: 30px
}

.info-help-contact .form label {
  display: inline-block;
  margin-bottom: 10px;
  max-width: 100%;
  font-size: 16px
}

.info-help-contact .form input:not([type="radio"]) {
  border: 1px solid #CCC;
  margin-bottom: 15px;
  display: block;
  padding: 8px 10px;
  width: 350px;
  max-width: 100%;
  box-sizing: border-box
}

.info-help-contact .form textarea {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px
}

.info-help-contact .form birthday-select-box {
  display: block;
  border: none;
  font-size: 15px;
  height: 25px;
  margin-bottom: 15px;
  padding: 3px 10px
}

.info-help-contact .form .birthday-select-box {
  display: block;
  border: none;
  font-size: 15px;
  height: 25px;
  margin-bottom: 15px;
  padding: 3px 10px
}

.info-help-contact .form .common-select {
  border: 1px solid #CCC;
  padding: 8px 10px;
  margin-bottom: 15px;
  width: 300px;
  max-width: 100%;
  display: block;
  box-sizing: border-box
}

.info-help-contact .form .values {
  padding: 4px 10px;
  width: 300px;
  max-width: 100%
}

.info-help-contact .form .category {
  display: block;
  margin-bottom: 15px;
  border: none;
  height: 40px;
  background-color: #EEE;
  font-size: 15px;
  padding: 0 5px;
  border-radius: 2px
}

.info-help-contact .form .description {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 22px
}

.info-help-contact .form .description .link {
  color: #2980B9;
  text-decoration: none;
  font-weight: 600
}

.info-help-contact .form .description .link:hover {
  color: #34495E
}

.info-help-contact .form .label-note {
  font-size: 14px;
  color: #666;
  margin-top: -5px;
  margin-bottom: 10px
}

.info-help-contact .form .explanation {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 22px
}

.info-help-contact .form .explanation .link {
  color: #2980B9;
  text-decoration: none;
  font-weight: 600
}

.info-help-contact .form .explanation .link:hover {
  color: #34495E
}

.info-help-contact .form .explanation .block {
  margin: 5px 0
}

.info-help-contact .form .explanation .important {
  color: #E74C3C
}

.info-help-contact .form .subject {
  width: 100%
}

.info-help-contact .form .submit {
  border: 0;
  background: #1ABC9C;
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
  position: relative
}

.info-help-contact .form .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-help-contact .form .submit.disabled, .info-help-contact .form .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-help-contact .form .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #55e7ca
}

.info-help-contact .form .tel-notice {
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 10px
}

.info-help-contact .form .tel-notice .important {
  color: #E74C3C
}

.info-help-contact .form .mail-setting-warning {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  line-height: normal;
  background-color: #EEEEEE
}

.info-help-contact .form .g-recaptcha {
  margin-bottom: 20px
}

.info-help-contact .form .privacy-policy {
  margin: 10px 0 0 5px
}

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

.info-faq-posts-show {
  background-color: white;
  min-height: 300px;
  width: 1120px;
  margin: 30px auto;
  padding: 30px;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow: hidden
}

@media (max-width: 1200px) {
  .info-faq-posts-show {
    width: 95%;
    padding: 30px
  }
}

@media (max-width: 767px) {
  .info-faq-posts-show {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto 30px
  }
}

.info-faq-posts-show a {
  color: #158EC2
}

.info-faq-posts-show .info-faq-posts-show-inner {
  width: 700px;
  float: left;
  box-sizing: border-box
}

@media all and (max-width: 1119px) {
  .info-faq-posts-show .info-faq-posts-show-inner {
    width: 67%
  }
}

@media all and (max-width: 767px) {
  .info-faq-posts-show .info-faq-posts-show-inner {
    width: 100%;
    box-sizing: border-box;
    float: none
  }
}

.info-faq-posts-show .info-faq-posts-show-inner .content h1 {
  color: #666666;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .breadcrumbs {
  font-size: 12px;
  margin-bottom: 10px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .date {
  margin-bottom: 40px;
  color: #CCCCCC;
  font-size: 12px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body {
  font-size: 14px;
  line-height: 1.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h1 {
  color: #666666;
  font-size: 22px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 15px;
  border-bottom-color: #EEEEEE;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 0.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h2 {
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom-color: #EEEEEE;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 0.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h3 {
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h4 {
  color: #666666;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h5 {
  color: #666666;
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body h6 {
  color: #666666;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body em {
  font-weight: bold
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body strong {
  font-weight: bold
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body p {
  margin-top: 0.5em;
  margin-bottom: 1em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body hr {
  border-color: #EEEEEE;
  border-bottom-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  display: block
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body a:hover {
  text-decoration: underline
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body img {
  display: block;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-top: 0.5em;
  padding-bottom: 1em;
  padding-left: 1.5em;
  text-indent: -1.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body ul li {
  list-style-type: disc;
  list-style-position: outside;
  text-indent: 0px;
  margin-top: 5px;
  margin-bottom: 5px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-top: 0.5em;
  padding-bottom: 1em;
  padding-left: 1.5em;
  text-indent: -1.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body ol li {
  list-style-type: decimal;
  list-style-position: inside;
  margin-top: 5px;
  margin-bottom: 5px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body table {
  table-layout: fixed;
  width: 100%;
  word-wrap: break-word
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body table tr {
  line-height: 3em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body table tr th {
  font-weight: bold;
  text-align: left;
  border-color: #DDDDDD;
  border-style: solid;
  border-width: 1px;
  padding-left: 0.5em;
  min-width: 30px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body table tr td {
  text-align: left;
  border-color: #DDDDDD;
  border-style: solid;
  border-width: 1px;
  padding-left: 0.5em;
  min-width: 30px
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body blockquote {
  border-left-color: #DDDDDD;
  border-left-style: solid;
  border-left-width: 3.5px;
  box-sizing: border-box;
  color: #666666;
  display: block;
  line-height: 21px;
  margin-bottom: 20px;
  padding-left: 1em
}

.info-faq-posts-show .info-faq-posts-show-inner .content .body code {
  background-color: #F6F8FA;
  padding: 3px;
  line-height: 1.5em
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction {
  margin-top: 50px;
  padding-top: 20px;
  border-top-style: solid;
  border-top-color: #EEEEEE;
  border-top-width: 1px
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction h2 {
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row {
  width: 100%;
  text-align: center
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .search {
  border: 0;
  background: #20C2D3;
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
  width: 200px;
  margin-top: 20px
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .search:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .search.disabled, .info-faq-posts-show .info-faq-posts-show-inner .reaction .row .search:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .search:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .post-contact {
  border: 0;
  background: #20C2D3;
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
  width: 200px;
  margin-top: 20px
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .post-contact:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .post-contact.disabled, .info-faq-posts-show .info-faq-posts-show-inner .reaction .row .post-contact:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.info-faq-posts-show .info-faq-posts-show-inner .reaction .row .post-contact:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.info-faq-posts-show .help-accordion {
  width: 330px;
  float: right;
  margin-top: 0;
  box-sizing: border-box
}

.info-faq-posts-show .help-accordion .content {
  background-color: #e9fffb;
  border-left: 1px solid #C3C3C3;
  border-right: 1px solid #C3C3C3;
  border-bottom: 1px solid #C3C3C3;
  width: 100%;
  box-sizing: border-box
}

.info-faq-posts-show .help-accordion .content:first-of-type {
  border-top: 1px solid #C3C3C3
}

.info-faq-posts-show .help-accordion .content .header {
  background-color: #FFFFFF;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.info-faq-posts-show .help-accordion .content .header i {
  font-size: 25px;
  margin: 0 20px;
  vertical-align: middle
}

.info-faq-posts-show .help-accordion .content .header span {
  vertical-align: middle
}

.info-faq-posts-show .help-accordion .content .header:hover {
  background-color: #EEEEEE
}

.info-faq-posts-show .help-accordion .content .body {
  border-top: 1px solid #C3C3C3;
  width: 100%;
  box-sizing: border-box
}

.info-faq-posts-show .help-accordion .content .body ul li {
  padding: 8px 0
}

.info-faq-posts-show .help-accordion .content .body ul li a {
  display: block;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333333;
  width: auto;
  height: auto
}

@media all and (max-width: 767px) {
  .info-faq-posts-show .help-accordion .content .body ul li a {
    padding-left: 20px
  }
}

.info-faq-posts-show .help-accordion .content .body ul li:hover {
  text-decoration: underline;
  background: #86ffe7
}

@media all and (max-width: 1119px) {
  .info-faq-posts-show .help-accordion {
    width: 30%
  }
}

@media all and (max-width: 767px) {
  .info-faq-posts-show .help-accordion {
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
    float: none
  }
}

.info-faq-posts-show.top-margin {
  margin-top: 100px
}

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

.invite-join {
  margin-bottom: 50px
}

.invite-join .form {
  background-color: white;
  padding: 30px 40px 50px;
  border-radius: 3px;
  max-width: 400px;
  margin: 30px auto
}

@media all and (max-width: 767px) {
  .invite-join .form {
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px
  }
}

.invite-join .form .logo {
  text-align: center;
  margin-bottom: 30px
}

.invite-join .form .text {
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
  color: #F39C12
}

.invite-join .form .notice {
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
  color: #e74c3c
}

.invite-join .form .facebook {
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

.invite-join .form .facebook:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.invite-join .form .facebook.disabled, .invite-join .form .facebook:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.invite-join .form .facebook:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8c9eca
}

.invite-join .form .facebook:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.invite-join .form .facebook.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .invite-join .form .facebook {
    font-size: 16px
  }
}

.invite-join .form .facebook .fa-facebook {
  font-size: 25px;
  position: absolute;
  left: 30px
}

.invite-join .form .facebook .fa-angle-right {
  font-size: 35px;
  position: absolute;
  right: 10px;
  top: 12px
}

.invite-join .form .facebook .big {
  font-size: 1.2em
}

.invite-join .form .or {
  text-align: center;
  margin-bottom: 15px
}

.invite-join .form label {
  margin-bottom: 10px;
  display: inline-block
}

.invite-join .form input {
  display: block;
  border: 1px solid #CCC;
  margin: 0 auto 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  line-height: 25px
}

.invite-join .form .create {
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

.invite-join .form .create:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.invite-join .form .create.disabled, .invite-join .form .create:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.invite-join .form .create:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.invite-join .form .create:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.invite-join .form .create.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

.invite-join .form .create .fa-angle-right {
  font-size: 20px;
  padding-left: 10px;
  vertical-align: bottom
}

.invite-join .form .link {
  color: #2980B9;
  text-decoration: none;
  display: block;
  margin: 20px 0 auto;
  text-align: center
}

.invite-join .form .link:hover {
  color: #34495E
}

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

.header-lp-wrapper {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 0;
  z-index: 9999;
  position: relative
}

.header-lp-wrapper .bg-white {
  background: #fff;
  height: 74px;
  position: absolute;
  width: 100%;
  z-index: -9999;
  top: -12px
}

.header-lp-wrapper .header-lp-contents {
  width: 1120px;
  margin: 0 auto;
  color: #fff
}

.header-lp-wrapper .header-lp-contents .logo {
  width: 170px;
  float: left;
  margin-top: 3px
}

.header-lp-wrapper .header-lp-contents .header_login {
  float: right;
  text-align: center
}

.header-lp-wrapper .header-lp-contents .header_login a {
  display: block
}

.header-lp-wrapper .header-lp-contents .header_login .exchange_link {
  color: #12575F;
  font-size: .85rem;
  cursor: pointer;
  border-right: 1px solid #12575F
}

.header-lp-wrapper .header-lp-contents .header_login .login-wrapper.open .account-menu {
  display: block
}

.header-lp-wrapper .header-lp-contents .header_login .login-wrapper.sp .account-menu {
  width: 170px
}

.header-lp-wrapper .header-lp-contents .header_login .login {
  padding: 12px 0;
  color: #12575F;
  font-size: .85rem;
  cursor: pointer
}

.header-lp-wrapper .header-lp-contents .header_login li {
  display: inline-block;
  font-weight: bold;
  position: relative;
  z-index: 9998;
  width: 144px
}

.header-lp-wrapper .header-lp-contents .header_login li ul {
  width: 100%;
  box-sizing: border-box;
  display: none;
  position: absolute;
  z-index: 9999;
  top: 100%;
  right: 0;
  margin: 0;
  padding: .6rem .4rem;
  border: 1px solid #cbd8ec;
  text-align: left;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0, 59, 121, 0.1)
}

.header-lp-wrapper .header-lp-contents .header_login li ul li {
  color: #11C1A4;
  font-size: 0.75rem;
  width: 100%
}

.header-lp-wrapper .header-lp-contents .header_login li ul li:hover {
  background: rgba(26, 188, 156, 0.1)
}

.header-lp-wrapper .header-lp-contents .header_login li ul li a {
  padding: .75rem .5rem
}

.header-lp-wrapper .header-lp-contents .header_login li ul li p {
  color: #12575F
}

.header-lp-wrapper .header-lp-contents .header_login .regist {
  padding: .75rem 0 .75rem .5rem;
  background: #09BA85;
  border-radius: 8px;
  font-size: .85rem;
  cursor: pointer
}

.header-lp-wrapper .header-lp-contents .header_login .regist:hover {
  background: #8BE5C9;
  -webkit-transition-duration: .3s;
  transition-duration: .3s
}

@media all and (max-width: 1199px) {
  .header-lp-wrapper .header-lp-contents {
    width: 95%
  }
}

@media all and (max-width: 645px) {
  .header-lp-wrapper .header-lp-contents .header_login .exchange_link {
    display: none
  }
}

@media all and (max-width: 599px) {
  .header-lp-wrapper {
    top: 0;
    padding: 0;
    background: ffffff;
    position: relative
  }

  .header-lp-wrapper .header-lp-contents {
    width: 100%;
    margin: 0;
    padding-top: 0
  }

  .header-lp-wrapper .header-lp-contents .logo {
    padding: .65rem;
    margin: 0;
    width: 40%
  }

  .header-lp-wrapper .header-lp-contents .header_login {
    width: 50%;
    padding: .65rem .5rem 0 0;
    box-sizing: border-box
  }

  .header-lp-wrapper .header-lp-contents .header_login .login {
    padding: .75rem 0;
    color: #12575F
  }

  .header-lp-wrapper .header-lp-contents .header_login .exchange_link {
    display: none
  }

  .header-lp-wrapper .header-lp-contents .header_login li {
    width: 50%;
    float: left
  }

  .header-lp-wrapper .header-lp-contents .header_login li ul li {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    font-size: 0.9rem;
    display: table
  }

  .header-lp-wrapper .header-lp-contents .header_login li ul li a {
    padding: 1rem .5rem
  }

  .header-lp-wrapper .header-lp-contents .header_login li ul li img {
    width: 14%;
    margin-right: 3px
  }

  .header-lp-wrapper .header-lp-contents .header_login li:hover ul {
    width: 200%
  }

  .header-lp-wrapper .header-lp-contents .header_login .regist {
    padding: .75rem 0
  }
}

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

.modal_scroll {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto
}

.modal_scroll .modal_box {
  margin: 100px auto;
  border-radius: 2px;
  overflow: auto;
  width: 560px;
  background-color: #fff
}

@media all and (max-width: 767px) {
  .modal_scroll .modal_box {
    width: 100%
  }
}

.modal_scroll .modal_box .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5
}

.modal_scroll .modal_box .modal-header .close {
  cursor: pointer;
  background: transparent;
  border: 0;
  float: right;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.5
}

.modal_scroll .modal_box .modal-body {
  padding: 15px
}

.modal_scroll .modal_box .modal-body .control-group p {
  margin: 0 0 20px
}

.modal_scroll .modal_box .modal-body .control-group .control-label {
  float: left;
  padding-top: 10px;
  width: 160px
}

.modal_scroll .modal_box .modal-body .control-group .controls input {
  border: 1px solid #ccc;
  height: 20px;
  padding: 9px 9px;
  border-color: #ddd
}

.modal_scroll .modal_box .modal-body .canvas {
  width: 100%;
  border: 1px solid #eee
}

.modal_scroll .modal_box .modal-body input.input-password[type='tel'] {
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  outline: none
}

.modal_scroll .modal_box .modal-footer {
  border-top: 1px solid #eee;
  padding-top: 10px
}

.modal_scroll .modal_box .modal-footer .ok-button {
  border: 0;
  background: #20C2D3;
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
  width: 80px;
  float: right;
  margin: 10px 20px 20px 20px
}

.modal_scroll .modal_box .modal-footer .ok-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.modal_scroll .modal_box .modal-footer .ok-button.disabled, .modal_scroll .modal_box .modal-footer .ok-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.modal_scroll .modal_box .modal-footer .ok-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.modal_scroll .modal_box .modal-footer .take-button {
  border: 0;
  background: #20C2D3;
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
  width: 240px;
  margin: 10px 20px 20px 158px
}

.modal_scroll .modal_box .modal-footer .take-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.modal_scroll .modal_box .modal-footer .take-button.disabled, .modal_scroll .modal_box .modal-footer .take-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.modal_scroll .modal_box .modal-footer .take-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.modal_scroll .modal_box .modal-footer .retry-button {
  border: 0;
  background: #95A5A6;
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
  width: 120px;
  margin: 10px 5px 10px 150px
}

.modal_scroll .modal_box .modal-footer .retry-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.modal_scroll .modal_box .modal-footer .retry-button.disabled, .modal_scroll .modal_box .modal-footer .retry-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.modal_scroll .modal_box .modal-footer .retry-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #ccd4d5
}

.modal_scroll .modal_box .modal-footer .accept-button {
  border: 0;
  background: #20C2D3;
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
  width: 120px;
  margin: 10px 10px 10px 5px
}

.modal_scroll .modal_box .modal-footer .accept-button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.modal_scroll .modal_box .modal-footer .accept-button.disabled, .modal_scroll .modal_box .modal-footer .accept-button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.modal_scroll .modal_box .modal-footer .accept-button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #70dee9
}

.modal_scroll .modal_box .modal-footer .error {
  background: #f9e5e5;
  color: #DA4C4C;
  border-color: #e9a5a5;
  border-radius: 2px;
  border: 1px solid transparent;
  margin: 10px;
  padding: 10px
}

.modal_scroll .modal_box .modal-footer .error li {
  list-style: none
}

.modal_scroll .modal_box .modal-footer .help-link {
  margin: 20px 10px
}

.modal_scroll .modal_box .modal-footer .help-link p {
  text-align: center
}

.modal_scroll .modal_box .modal-footer .help-link p .link {
  color: #2980B9;
  text-decoration: none
}

.modal_scroll .modal_box .modal-footer .help-link p .link:hover {
  color: #34495E
}

.modal_scroll .modal_box .modal-footer .warning {
  margin: 15px;
  padding: 15px;
  line-height: 1.5;
  border: 1px solid #DA4C4C
}

.modal_scroll .clickableArea {
  width: 100%;
  height: 100%
}

.permission-panel legend {
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  padding-bottom: 0.5em;
  line-height: 18px
}

.permission-panel .link-to-document {
  margin-bottom: 25px
}

.permission-panel .link-to-document .link {
  color: #2980B9;
  text-decoration: none
}

.permission-panel .link-to-document .link:hover {
  color: #34495E
}

.permission-panel .set-permission {
  margin-top: 5px;
  margin-bottom: 20px
}

.permission-panel .set-permission .permission {
  display: inline-block;
  line-height: 35px
}

.permission-panel .set-permission label {
  display: inline-block;
  margin-right: 10px
}

.permission-panel .controls {
  margin-top: 10px;
  margin-bottom: 27px
}

.permission-panel .foreign-exchange-law-agreement .notification-wrapper {
  padding: 12px;
  line-height: 1.2
}

.permission-panel .foreign-exchange-law-agreement .link {
  color: #2980B9;
  text-decoration: none
}

.permission-panel .foreign-exchange-law-agreement .link:hover {
  color: #34495E
}

.input-password {
  width: 100%
}

.submit-button {
  text-align: center
}

.qr-modal {
  text-align: center;
  padding: 20px;
  width: 444px
}

.qr-modal .close {
  text-align: right
}

.qr-modal .title {
  font-size: 24px;
  margin-bottom: 35px
}

.qr-modal .body {
  font-size: 16px;
  line-height: 1.7rem;
  margin: 0 auto 20px;
  width: 364px
}

.qr-modal .annotation {
  font-size: 11px;
  line-height: 1.3rem;
  margin: 0 auto 10px;
  width: 364px
}

.waiting-time-modal {
  text-align: center;
  padding: 20px;
  width: 444px !important
}

.waiting-time-modal .close {
  text-align: right
}

.waiting-time-modal > .title {
  font-size: 24px;
  margin-bottom: 35px
}

.waiting-time-modal .attention {
  border: #B5C6C1 solid 1px;
  padding: 18px;
  margin: 10px auto;
  width: 360px
}

.waiting-time-modal .attention .title {
  font-size: 16px;
  margin-bottom: 16px
}

.waiting-time-modal .attention .status {
  color: #B5C6C1;
  font-size: 31px;
  font-weight: bold;
  margin-bottom: 16px
}

.waiting-time-modal .attention .annotation {
  font-size: 11px
}

.waiting-time-modal .attention .waiting_time_annotation {
  color: #DA4C4C;
  font-weight: bold
}

.waiting-time-modal > .body {
  font-size: 11px;
  line-height: 1.2rem;
  margin: 20px auto;
  text-align: left;
  width: 364px
}

.waiting-time-modal > .annotation {
  font-size: 11px;
  line-height: 1.3rem;
  margin: 0 auto 10px;
  width: 364px
}

.waiting-time-modal .button {
  width: 226px;
  margin: 0 auto 20px;
  background-color: #3498DB;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 16px;
  border: 0
}

.waiting-time-modal .button-disabled {
  opacity: 50%
}

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

.new_header-lp-wrapper {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  z-index: 9999;
  position: relative
}

.new_header-lp-wrapper .bg-white {
  background: #fff;
  height: 74px;
  position: absolute;
  width: 100%;
  z-index: -9999;
  top: -12px
}

.new_header-lp-wrapper .new_header-lp-contents {
  max-width: 1430px;
  margin: 0 auto;
  color: #fff
}

.new_header-lp-wrapper .new_header-lp-contents.sp {
  display: none
}

.new_header-lp-wrapper .new_header-lp-contents .logo {
  width: 170px;
  float: left;
  margin-left: 15px
}

.new_header-lp-wrapper .new_header-lp-contents .header_login {
  float: right;
  text-align: center
}

.new_header-lp-wrapper .new_header-lp-contents .header_login a {
  display: block
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .header_link {
  color: #fff;
  font-size: .85rem;
  cursor: pointer
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper .service-menu {
  width: 100%;
  box-sizing: border-box;
  display: none;
  position: absolute;
  z-index: 9999;
  top: 100%;
  right: -150%;
  margin: 0;
  width: 200px;
  padding: 20px;
  text-align: left;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0, 59, 121, 0.1)
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper .service-menu li {
  color: #11C1A4;
  font-size: 0.75rem;
  width: 100%
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper .service-menu li:hover {
  background: rgba(26, 188, 156, 0.1)
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper .service-menu li a {
  padding: .75rem .5rem
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper .service-menu li p {
  color: #12575F
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper.open .service-menu {
  display: block
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper.open .service-menu li {
  margin: auto
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .service-wrapper.sp .service-menu {
  width: 170px
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper .account-menu {
  width: 100%;
  box-sizing: border-box;
  display: none;
  position: absolute;
  z-index: 9999;
  top: 100%;
  right: -90%;
  margin: 0;
  width: 170px;
  padding: 20px;
  text-align: left;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0, 59, 121, 0.1)
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper .account-menu li {
  color: #11C1A4;
  font-size: 0.75rem;
  width: 100%
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper .account-menu li:hover {
  background: rgba(26, 188, 156, 0.1)
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper .account-menu li a {
  padding: .75rem .5rem
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper .account-menu li p {
  color: #12575F
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper.open .account-menu {
  display: block
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper.open .account-menu li {
  margin: auto
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login-wrapper.sp .account-menu {
  width: 170px
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .login {
  padding: 12px 0;
  color: #fff;
  font-size: .85rem;
  cursor: pointer
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .services {
  color: #fff;
  font-size: .85rem;
  cursor: pointer
}

.new_header-lp-wrapper .new_header-lp-contents .header_login li {
  display: inline-block;
  font-weight: bold;
  position: relative;
  z-index: 9998;
  margin: 0 20px
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .regist {
  padding: .75rem 0 .75rem 0;
  background: #09BA85;
  border-radius: 8px;
  font-size: .85rem;
  cursor: pointer;
  width: 100px
}

.new_header-lp-wrapper .new_header-lp-contents .header_login .regist:hover {
  background: #8BE5C9;
  -webkit-transition-duration: .3s;
  transition-duration: .3s
}

@media screen and (max-width: 767px) {
  .new_header-lp-wrapper .new_header-lp-contents {
    width: 100%;
    margin: 0 auto;
    color: #fff
  }

  .new_header-lp-wrapper .new_header-lp-contents.pc {
    display: none
  }

  .new_header-lp-wrapper .new_header-lp-contents.sp {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .new_header-lp-wrapper .new_header-lp-contents.sp .logo {
    margin-left: 16px
  }

  .new_header-lp-wrapper .new_header-lp-contents.sp .humburger {
    z-index: 90;
    color: #12575F;
    font-size: 25px;
    margin-right: 15px;
    width: 32px
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%;
    z-index: 80;
    background-color: #F6F6F6;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 20px
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content.open {
    left: 0
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content ul {
    padding: 130px 0 0
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content ul li {
    list-style: none
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content ul li a {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    box-sizing: border-box;
    color: #12575F;
    text-decoration: none;
    padding-bottom: 25px;
    position: relative
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .detail {
    padding: 0 20px
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .detail li {
    list-style: none
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .detail li a {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: normal;
    box-sizing: border-box;
    color: #12575F;
    text-decoration: none;
    padding-bottom: 25px;
    position: relative
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .detail li a .fa-chevron-right {
    margin-right: 5px
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .registration {
    text-align: center
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .registration .button {
    color: #fff;
    background: #09BA85;
    border-radius: .5rem;
    border: none;
    padding: .8rem 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: .05rem;
    width: 100%;
    display: inline-block
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .registration .button:hover {
    box-shadow: inset 0 0 0 2px #eef1f6;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s
  }

  .new_header-lp-wrapper .new_header-lp-contents .menu-content .registration .button:focus, .new_header-lp-wrapper .new_header-lp-contents .menu-content .registration .button:active {
    background: #00a288;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s
  }
}

@media screen and (max-width: 767px) {
  .new_header-lp-wrapper {
    padding: 12px 0
  }
}

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

.create-user {
  margin-bottom: 50px
}

.create-user .form {
  background-color: white;
  padding: 40px 40px 20px;
  border-radius: 3px;
  max-width: 400px;
  margin: 0 auto
}

@media all and (max-width: 979px) {
  .create-user .form {
    padding: 30px 30px 20px
  }
}

.create-user .form .logo {
  text-align: center;
  margin-bottom: 30px
}

.create-user .form .text {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center
}

.create-user .form .text i {
  color: #20C2D3;
  font-size: 30px;
  margin-right: 10px
}

.create-user .form .notice {
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
  color: #e74c3c
}

.create-user .form .facebook {
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
  margin-bottom: 20px;
  display: block;
  box-sizing: border-box;
  box-shadow: none;
  font-weight: bold;
  padding: 12px 0 13px;
  font-size: 14px
}

.create-user .form .facebook:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.create-user .form .facebook.disabled, .create-user .form .facebook:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.create-user .form .facebook:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8c9eca
}

.create-user .form .facebook:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.create-user .form .facebook.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .create-user .form .facebook {
    font-size: 14px
  }
}

.create-user .form .facebook .fa-facebook {
  font-size: 25px;
  position: absolute;
  left: 30px
}

.create-user .form .facebook .fa-angle-right {
  font-size: 23px;
  padding-left: 10px;
  position: absolute;
  top: 10px
}

.create-user .form .facebook .big {
  font-size: 1.2em
}

.create-user .form .hr {
  display: block;
  margin: 20px 0 -22px;
  border-bottom: 1px solid #ddd
}

.create-user .form .or {
  background: #fff;
  text-align: center;
  margin: 15px auto;
  width: 60px
}

.create-user .form label {
  margin: 5px 0;
  display: inline-block;
  font-size: 12px
}

.create-user .form input {
  border-radius: 3px;
  display: block;
  border: 1px solid #CCC;
  font-size: 14px;
  margin: 0 0 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  line-height: 22px
}

.create-user .form .create {
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
  box-shadow: none;
  display: block;
  font-weight: bold;
  padding: 12px;
  margin-top: 20px;
  width: 100%
}

.create-user .form .create:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.create-user .form .create.disabled, .create-user .form .create:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.create-user .form .create:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #ffcf97
}

.create-user .form .create:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.create-user .form .create.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

.create-user .form .create .fa-angle-right {
  font-size: 20px;
  padding-left: 10px;
  vertical-align: bottom
}

.create-user .form .link {
  color: #2980B9;
  text-decoration: none;
  display: block;
  margin: 20px 0 auto;
  text-align: center
}

.create-user .form .link:hover {
  color: #34495E
}

.create-user .notice {
  background-color: white;
  padding: 30px 20px 50px;
  border-radius: 3px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left
}

.registration-wrapper {
  width: 800px;
  box-sizing: border-box;
  margin: auto
}

@media all and (max-width: 799px) {
  .registration-wrapper {
    width: 100%;
    box-sizing: border-box
  }
}

.new_registration_form {
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 4px;
  overflow: hidden;
  margin: 20px auto;
  color: #333333;
  text-align: center;
  font-weight: bold
}

.new_registration_form h1, .new_registration_form h2, .new_registration_form h3, .new_registration_form h4, .new_registration_form h5, .new_registration_form h6 {
  font-weight: normal
}

.new_registration_form h3 {
  padding-bottom: 10px
}

.new_registration_form a, .new_registration_form button, .new_registration_form .facebook_btnwrap {
  outline: none
}

.new_registration_form a:hover, .new_registration_form button:hover, .new_registration_form .facebook_btnwrap:hover {
  opacity: 0.6;
  cursor: pointer
}

.new_registration_form a .facebook_btn:hover, .new_registration_form button .facebook_btn:hover, .new_registration_form .facebook_btnwrap .facebook_btn:hover {
  opacity: 1
}

.new_registration_form .left {
  float: left
}

.new_registration_form .right {
  float: right
}

.new_registration_form .clear {
  clear: both
}

.new_registration_form .center {
  margin: 0 auto
}

.new_registration_form .link {
  color: #2980B9;
  text-decoration: underline
}

.new_registration_form .user-title {
  font-weight: bold;
  font-size: 1.4rem
}

@media all and (max-width: 799px) {
  .new_registration_form {
    width: 100%;
    box-sizing: border-box;
    padding: 16px
  }

  .new_registration_form .left, .new_registration_form .right {
    float: none
  }
}

.new_registration_form .registration-wrapper {
  width: 100%;
  box-sizing: border-box;
  display: table
}

.new_registration_form .registration-wrapper .facebook_btnwrap {
  width: 100%;
  box-sizing: border-box;
  background: #1b54b4;
  background: -webkit-linear-gradient(-45deg, #1b54b4 0%, #368cf5 100%);
  background: -webkit-linear-gradient(315deg, #1b54b4 0%, #368cf5 100%);
  background: linear-gradient(135deg, #1b54b4 0%, #368cf5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1b54b4', endColorstr='#368cf5', GradientType=1);
  box-shadow: 0 3px 0 #003B89;
  color: #ffffff;
  margin-top: 34px;
  text-align: center;
  display: table;
  height: 55px;
  border-radius: 55px
}

.new_registration_form .registration-wrapper .facebook_btnwrap .facebook_btn {
  display: table-cell;
  vertical-align: middle;
  background: url(/images/icons/facebook_white.svg) left 20px center no-repeat, url(/images/icons/arrow_white.svg) right 20px center no-repeat;
  background-size: 30px 30px, 15px 15px
}

.new_registration_form .registration-wrapper .facebook_btnwrap .facebook_btn span {
  font-size: 1.8rem
}

@media all and (max-width: 599px) {
  .new_registration_form .registration-wrapper .facebook_btnwrap .facebook_btn {
    background: none
  }
}

.new_registration_form .registration-wrapper .facebook_btnwrap:active {
  box-shadow: none;
  margin-top: 37px;
  margin-bottom: -3px
}

@media all and (max-width: 799px) {
  .new_registration_form .registration-wrapper .facebook_btnwrap {
    margin-top: 0
  }

  .new_registration_form .registration-wrapper .facebook_btnwrap:active {
    margin-top: 3px;
    margin-bottom: -3px;
    box-shadow: none
  }
}

.new_registration_form .registration-wrapper .account_formwrap {
  width: 100%;
  box-sizing: border-box
}

.new_registration_form .registration-wrapper .account_formwrap input {
  box-sizing: border-box;
  padding: 16px;
  border: #C9C9C9 1px solid;
  background: #FFFBDE;
  border-radius: 4px
}

.new_registration_form .registration-wrapper .account_formwrap .email {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px
}

.new_registration_form .registration-wrapper .account_formwrap .password {
  width: 60%;
  box-sizing: border-box;
  float: left
}

.new_registration_form .registration-wrapper .account_formwrap .create {
  background: #ffca03;
  background: -webkit-linear-gradient(-45deg, #ffca03 0%, #ff5001 100%);
  background: -webkit-linear-gradient(315deg, #ffca03 0%, #ff5001 100%);
  background: linear-gradient(135deg, #ffca03 0%, #ff5001 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffca03', endColorstr='#ff5001', GradientType=1);
  box-shadow: 0 3px 0 #641F00;
  border: none;
  color: #ffffff;
  font-weight: bold;
  width: 35%;
  box-sizing: border-box;
  float: right;
  font-size: 1.1rem;
  font-weight: bold;
  height: 4.5rem;
  border-radius: 52px
}

.new_registration_form .registration-wrapper .account_formwrap .create:active {
  box-shadow: none;
  margin-top: 3px;
  margin-bottom: -3px
}

.new_registration_form .registration-wrapper .account_formwrap .rc-anchor-pt {
  font-size: 1.5rem !important
}

.new_registration_form .registration-wrapper .account_formwrap .recaptcha_container {
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  margin-top: 16px
}

@media all and (max-width: 340px) {
  .new_registration_form .registration-wrapper .account_formwrap .recaptcha_container div, .new_registration_form .registration-wrapper .account_formwrap .recaptcha_container iframe {
    width: 100% !important;
    box-sizing: border-box;
    text-align: left
  }
}

@media all and (max-width: 599px) {
  .new_registration_form .registration-wrapper .account_formwrap .password {
    width: 100%;
    box-sizing: border-box;
    float: none;
    margin-bottom: 16px
  }

  .new_registration_form .registration-wrapper .account_formwrap .create {
    width: 100%;
    box-sizing: border-box;
    float: none
  }
}

.new_registration_form .registration-wrapper .form_container_wrap {
  width: 48%;
  box-sizing: border-box
}

@media all and (max-width: 799px) {
  .new_registration_form .registration-wrapper .form_container_wrap {
    width: 100%;
    box-sizing: border-box
  }

  .new_registration_form .registration-wrapper .form_container_wrap:first-of-type {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #666666
  }
}

.new_registration_form .login-wrapper {
  display: block;
  text-align: center;
  margin-top: 16px
}

.new_registration_form .login-wrapper .login-contents {
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.2rem;
  color: #ffffff;
  background: #20C2D3;
  border-radius: 4px
}

@media all and (max-width: 340px) {
  .new_registration_form .login-wrapper .login-contents {
    width: 100%;
    box-sizing: border-box;
    font-size: 0.9rem;
    padding: 10px
  }
}

.new_registration_form .notice {
  border: solid #E74C3C 1px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px
}

.registration_form_top {
  width: 300px;
  box-sizing: border-box
}

.registration_form_top h1, .registration_form_top h2, .registration_form_top h3, .registration_form_top h4, .registration_form_top h5, .registration_form_top h6 {
  font-weight: normal
}

.registration_form_top h3 {
  padding-bottom: 10px
}

.registration_form_top a, .registration_form_top button {
  outline: none;
  font-family: inherit
}

.registration_form_top a:hover, .registration_form_top button:hover {
  cursor: pointer
}

.registration_form_top .facebook_btn {
  color: #008670;
  font-weight: bold;
  font-family: inherit;
  padding: 1rem 0
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap {
  width: 100%;
  box-sizing: border-box
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn:before {
  content: '';
  width: 1rem;
  height: 1rem;
  display: inline-block;
  margin: 0 .4rem -2px 0;
  background: url(/images/icons/facebook.svg) left center no-repeat;
  background-size: cover
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn:after {
  content: '';
  width: 10px;
  height: 13px;
  background: url(/images/lp/mainpage/icon_arrow.svg) no-repeat center;
  display: inline-block;
  margin: 0 0 -1px .5rem
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn:hover {
  color: #0fa98f;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn:hover:after {
  margin: 0 0 -1px 1rem;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s
}

.registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn span {
  font-size: 1.8rem
}

@media all and (max-width: 599px) {
  .registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap .facebook_btn {
    background: none
  }
}

@media all and (max-width: 799px) {
  .registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap {
    margin-top: 0
  }

  .registration_form_top .registration_form_top_user_wrapper .facebook_btnwrap:active {
    margin-top: 3px;
    margin-bottom: -3px;
    box-shadow: none
  }
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap {
  width: 100%;
  box-sizing: border-box
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap input {
  box-sizing: border-box;
  padding: 1rem;
  border: #C2DADD 1px solid;
  border-radius: .5rem
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .email {
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 .25rem;
  font-family: inherit
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .password {
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 1rem;
  font-family: inherit
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .create {
  color: #fff;
  background: #11C1A4;
  border-radius: .5rem;
  border: none;
  padding: .8rem 1.4rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 1rem;
  letter-spacing: .05rem;
  width: 100%
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .create:hover {
  box-shadow: inset 0 0 0 2px #eef1f6;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .create:focus, .registration_form_top .registration_form_top_user_wrapper .account_formwrap .create:active {
  background: #00a288;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .login-link {
  font-size: 12px;
  margin: 0 0 2rem
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .login-link .link {
  color: #2980B9;
  text-decoration: none
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .login-link .link:hover {
  color: #34495E
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .error {
  color: #E74C3C;
  font-size: 12px;
  padding-bottom: 1rem
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .rc-anchor-pt {
  font-size: 1.5rem !important
}

.registration_form_top .registration_form_top_user_wrapper .account_formwrap .recaptcha_container {
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  margin: 0 0 1rem
}

@media all and (max-width: 340px) {
  .registration_form_top .registration_form_top_user_wrapper .account_formwrap .recaptcha_container div, .registration_form_top .registration_form_top_user_wrapper .account_formwrap .recaptcha_container iframe {
    width: 100% !important;
    box-sizing: border-box;
    text-align: left
  }
}

@media all and (max-width: 599px) {
  .registration_form_top .registration_form_top_user_wrapper .account_formwrap .password {
    width: 100%;
    box-sizing: border-box;
    float: none;
    margin-bottom: 1rem
  }

  .registration_form_top .registration_form_top_user_wrapper .account_formwrap .create {
    width: 100%;
    box-sizing: border-box;
    float: none
  }
}

@media all and (max-width: 799px) {
  .registration_form_top .registration_form_top_user_wrapper .form_container_wrap {
    width: 100%;
    box-sizing: border-box
  }
}

.registration_form_top .login-wrapper {
  display: block;
  text-align: center;
  margin-top: 16px
}

.registration_form_top .login-wrapper .login-contents {
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.2rem;
  color: #ffffff;
  background: #20C2D3;
  border-radius: 4px
}

@media all and (max-width: 340px) {
  .registration_form_top .login-wrapper .login-contents {
    width: 100%;
    box-sizing: border-box;
    font-size: 0.9rem;
    padding: 10px
  }
}

.registration_form_top .notice {
  border: solid #E74C3C 1px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px
}

.registration_top {
  width: 440px;
  box-sizing: border-box
}

.registration_top .account_wrap {
  width: 100%;
  box-sizing: border-box
}

.registration_top .account_wrap .create {
  color: #fff;
  background: #09BA85;
  border-radius: .5rem;
  border: none;
  padding: .8rem 1.4rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 1rem;
  letter-spacing: .05rem;
  width: 200px;
  display: inline-block;
  text-align: center
}

.registration_top .account_wrap .create:hover {
  background: #8BE5C9
}

.registration_top .account_wrap .login-link {
  font-size: 12px;
  margin-left: 32px
}

.registration_top .account_wrap .login-link .link {
  color: #2980B9;
  text-decoration: none
}

.registration_top .account_wrap .login-link .link:hover {
  color: #34495E
}

.registration_top .account_wrap .login-link .here-is-login:after {
  content: '';
  width: 10px;
  height: 13px;
  background: url(/images/lp/mainpage/icon_arrow.svg) no-repeat center;
  display: inline-block;
  margin: 0 0 -2px .3rem
}

@media all and (max-width: 599px) {
  .registration_top .account_wrap .create {
    width: 100%;
    box-sizing: border-box;
    float: none
  }
}

.terms-explanation {
  margin-top: 32px;
  font-size: 12px;
  text-align: left
}

.terms-explanation .links {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85
}

.terms-explanation .links:hover {
  color: #34495E
}

.terms-explanation .links:hover {
  color: #8BE5C9
}

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

.registrations-pending-confirmation {
  background-color: #FFF;
  box-sizing: border-box;
  margin: 100px auto 50px
}

@media all and (min-width: 768px) {
  .registrations-pending-confirmation {
    width: 530px
  }

  .registrations-pending-confirmation .flexbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
  }

  .registrations-pending-confirmation .flex-item {
    width: 130px
  }

  .registrations-pending-confirmation .arrow-right {
    margin-top: 28px;
    margin-left: 14px;
    margin-right: 14px
  }

  .registrations-pending-confirmation .for-sp {
    display: none
  }

  .registrations-pending-confirmation .caption {
    text-align: left
  }
}

@media all and (max-width: 767px) {
  .registrations-pending-confirmation {
    width: 364px
  }

  .registrations-pending-confirmation .flexbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 10px
  }

  .registrations-pending-confirmation .flex-item {
    width: auto;
    margin-bottom: 10px
  }

  .registrations-pending-confirmation .arrow-down {
    margin: 0 auto 12px
  }

  .registrations-pending-confirmation .for-pc {
    display: none
  }
}

.registrations-pending-confirmation .top-message {
  background-color: #34495E;
  color: #FFF;
  font-size: 15px;
  padding: 15px
}

.registrations-pending-confirmation .box-inner {
  padding: 40px 30px 50px;
  text-align: center
}

.registrations-pending-confirmation .message {
  line-height: 20px;
  margin-bottom: 10px;
  text-align: left
}

.registrations-pending-confirmation strong {
  font-weight: bold
}

.registrations-pending-confirmation .send {
  cursor: pointer;
  border: none;
  background: none;
  color: #007AFF;
  font-size: 15px;
  display: inline-block;
  margin-top: 20px
}

.registrations-pending-confirmation .confirm_process {
  margin-top: 10px;
  margin-bottom: 30px
}

.registrations-pending-confirmation .step {
  border-top-color: #DEE3E2;
  border-top-width: thin;
  border-top-style: solid;
  margin-top: 20px;
  padding-top: 35px
}

.registrations-pending-confirmation .links {
  color: #007AFF
}

.registrations-pending-confirmation .text {
  margin-top: 10px;
  font-size: 13px;
  line-height: 18px
}

.registrations-pending-confirmation .caption {
  margin-top: 10px;
  font-size: 10px;
  color: #535E82;
  line-height: 16px
}

.registrations-pending-confirmation .last-image {
  margin-top: 20px
}

.registration-index {
  margin-bottom: 50px
}

.registration-index .form {
  background-color: white;
  border-radius: 3px;
  padding: 40px;
  width: 420px;
  box-sizing: border-box;
  margin: 30px auto
}

@media all and (max-width: 767px) {
  .registration-index .form {
    background: none;
    border-width: 1px;
    padding: 30px 30px 100px;
    width: 100%
  }
}

.registration-index .form .h1 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 30px
}

.registration-index .form .facebook {
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
  margin-bottom: 16px;
  display: block;
  box-sizing: border-box;
  font-weight: bold;
  padding: 12px 0 13px;
  box-shadow: none
}

.registration-index .form .facebook:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.registration-index .form .facebook.disabled, .registration-index .form .facebook:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.registration-index .form .facebook:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8c9eca
}

.registration-index .form .facebook:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.registration-index .form .facebook.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

@media all and (max-width: 767px) {
  .registration-index .form .facebook {
    font-size: 14px
  }
}

.registration-index .form .facebook .fa-facebook {
  font-size: 25px;
  position: absolute;
  left: 30px
}

.registration-index .form .facebook .fa-angle-right {
  font-size: 20px;
  padding-left: 10px;
  vertical-align: bottom;
  position: absolute
}

.registration-index .form .facebook .big {
  font-size: 1.2em
}

.registration-index .form .hr {
  display: block;
  margin: 31px 0 -33px;
  border-bottom: 1px solid #ddd
}

.registration-index .form .or {
  background: #fff;
  text-align: center;
  margin: 26px auto;
  width: 60px;
  color: #666666
}

@media all and (max-width: 767px) {
  .registration-index .form .or {
    background-color: #ECF0F1
  }
}

.registration-index .form label {
  margin: 5px 0;
  display: inline-block;
  font-size: 12px
}

.registration-index .form .email, .registration-index .form .password, .registration-index .form .name {
  border: 1px solid #CCC;
  display: block;
  font-size: 14px;
  margin: 0 0 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  line-height: 22px
}

.registration-index .form .create {
  border: 0;
  background: #09BA85;
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
  box-shadow: 0px 3px 0px 0px #04593f;
  box-shadow: none;
  margin: 20px 0;
  width: 100%;
  display: block;
  font-weight: bold;
  padding: 13px
}

.registration-index .form .create:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.registration-index .form .create.disabled, .registration-index .form .create:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.registration-index .form .create:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #34f5bb
}

.registration-index .form .create:active {
  box-shadow: none;
  position: relative;
  top: 3px
}

.registration-index .form .create.disabled {
  box-shadow: none;
  position: relative;
  top: 0px
}

.registration-index .form .signup {
  text-align: center;
  margin-top: 40px
}

@media all and (min-width: 767px) {
  .registration-index .form .sp-only {
    display: none
  }
}

.registration-index .form .link {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85;
  margin-left: 10px
}

.registration-index .form .link:hover {
  color: #34495E
}

.registration-index .form .link:hover {
  color: #8BE5C9
}

@media all and (max-width: 767px) {
  .registration-index .form .link {
    display: block;
    margin: 20px 0 0
  }
}

.registration-index .notice {
  border: solid #E74C3C 1px;
  font-size: 12.5px;
  text-align: left;
  padding: 4px
}

.registration-index .notice_link {
  color: #2980B9;
  text-decoration: none;
  margin-left: 0px
}

.registration-index .notice_link:hover {
  color: #34495E
}

.registration-index.top-margin {
  margin-top: 100px
}

.registration-index .g-recaptcha {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.registration-index #invalid-invitation-dialog[open] {
  padding: 0;
  outline: none;
  border: none;
  border-radius: 6px;
  width: 560px
}

@media (max-width: 767px) {
  .registration-index #invalid-invitation-dialog[open] {
    max-width: 90%
  }
}

.registration-index #invalid-invitation-dialog[open] .dialog-body {
  padding: 60px;
  text-align: center
}

@media (max-width: 767px) {
  .registration-index #invalid-invitation-dialog[open] .dialog-body {
    padding: 40px
  }
}

.registration-index #invalid-invitation-dialog[open] .dialog-body .fa-exclamation-circle {
  font-size: 48px;
  color: #F67D62
}

.registration-index #invalid-invitation-dialog[open] .dialog-body .title {
  font-size: 22px;
  font-weight: bold;
  color: #1F263E;
  margin-top: 25px
}

.registration-index #invalid-invitation-dialog::-webkit-backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

.registration-index #invalid-invitation-dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5)
}

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

.registration-accounts-index {
  margin-bottom: 50px
}

.registration-accounts-index .center-box {
  background-color: white;
  padding: 30px 40px 50px;
  border-radius: 3px;
  max-width: 400px;
  margin: 30px auto
}

@media all and (max-width: 767px) {
  .registration-accounts-index .center-box {
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px
  }
}

.registration-accounts-index .center-box .logo {
  color: #20C2D3;
  text-align: center;
  font-size: 47px;
  margin-bottom: 30px
}

.registration-accounts-index .center-box .text {
  margin-bottom: 30px;
  font-size: 17px;
  text-align: center;
  line-height: 30px
}

.registration-accounts-index .center-box .text .type {
  font-weight: bold
}

.registration-accounts-index .center-box .wrap {
  display: inline-block
}

.registration-accounts-index .center-box .wrap .text {
  margin-bottom: 30px;
  font-size: 17px;
  text-align: center;
  line-height: 30px
}

.registration-accounts-index .center-box .wrap .text .type {
  font-weight: bold
}

.registration-accounts-index .center-box .files {
  margin-bottom: 15px
}

.registration-accounts-index .center-box .files .file {
  color: #2980B9;
  text-decoration: none;
  display: block;
  line-height: 25px
}

.registration-accounts-index .center-box .files .file:hover {
  color: #34495E
}

.registration-accounts-index .center-box .label2 {
  cursor: pointer;
  line-height: 25px
}

.registration-accounts-index .center-box .submit {
  border: 0;
  background: #57ad68;
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
  display: block;
  width: 80%;
  margin: 20px auto;
  font-weight: bold
}

.registration-accounts-index .center-box .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.registration-accounts-index .center-box .submit.disabled, .registration-accounts-index .center-box .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.registration-accounts-index .center-box .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #9ccea6
}

.registration-accounts-index .center-box .notice {
  background-color: white;
  padding: 30px 20px 50px;
  border-radius: 3px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left
}

.registration-accounts-index .center-box .notice-text {
  font-size: 16px;
  line-height: 1.8rem;
  margin: 10px
}

.registration-accounts-index .center-box .has-account {
  text-align: center
}

.registration-accounts-index .center-box .has-account .submit-link {
  border: 0;
  background: #57ad68;
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
  font-weight: bold
}

.registration-accounts-index .center-box .has-account .submit-link:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.registration-accounts-index .center-box .has-account .submit-link.disabled, .registration-accounts-index .center-box .has-account .submit-link:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.registration-accounts-index .center-box .has-account .submit-link:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #9ccea6
}

.registration-accounts-index.top-margin {
  margin-top: 100px
}

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

.accounts-reset-two-factor-auth {
  border-radius: 3px;
  width: 420px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  padding: 40px
}

@media all and (max-width: 767px) {
  .accounts-reset-two-factor-auth {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.accounts-reset-two-factor-auth .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold
}

.accounts-reset-two-factor-auth .text {
  text-align: left;
  margin-bottom: 40px;
  line-height: 23px
}

.accounts-reset-two-factor-auth .sub_title {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold
}

.accounts-reset-two-factor-auth .sub_text {
  text-align: left;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 23px
}

.accounts-reset-two-factor-auth .link {
  color: #2980B9;
  text-decoration: none
}

.accounts-reset-two-factor-auth .link:hover {
  color: #34495E
}

.accounts-reset-two-factor-auth .error {
  padding: 10px;
  border: 1px solid red
}

.accounts-reset-two-factor-auth .form {
  width: 100%;
  margin: 0 auto 40px
}

@media all and (max-width: 767px) {
  .accounts-reset-two-factor-auth .form {
    width: auto
  }
}

.accounts-reset-two-factor-auth .form input {
  border: 1px solid #CCC;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  box-sizing: border-box
}

.accounts-reset-two-factor-auth .form .submit {
  border: 0;
  background: #3498DB;
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
  margin: 0px auto;
  display: block;
  font-weight: bold;
  padding: 13px;
  width: 100%
}

.accounts-reset-two-factor-auth .form .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.accounts-reset-two-factor-auth .form .submit.disabled, .accounts-reset-two-factor-auth .form .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.accounts-reset-two-factor-auth .form .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8bc4ea
}

.accounts-reset-two-factor-auth .login {
  border: 0;
  background: #3498DB;
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
  margin: 30px auto 0;
  display: block;
  font-weight: bold;
  padding: 13px
}

.accounts-reset-two-factor-auth .login:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.accounts-reset-two-factor-auth .login.disabled, .accounts-reset-two-factor-auth .login:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.accounts-reset-two-factor-auth .login:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8bc4ea
}

.accounts-reset-two-factor-auth .note {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  padding: 10px 0
}

.accounts-reset-two-factor-auth .hr {
  display: block;
  margin: 20px 0 30px
}

.accounts-reset-two-factor-auth .or {
  background: #fff;
  text-align: center;
  margin: 15px auto;
  width: 60px
}

@media all and (max-width: 767px) {
  .accounts-reset-two-factor-auth .or {
    background-color: #ECF0F1
  }
}

.accounts-reset-two-factor-auth .facebook {
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
  font-weight: bold;
  padding: 12px;
  width: 100%;
  box-sizing: border-box
}

.accounts-reset-two-factor-auth .facebook:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.accounts-reset-two-factor-auth .facebook.disabled, .accounts-reset-two-factor-auth .facebook:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.accounts-reset-two-factor-auth .facebook:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #8c9eca
}

.accounts-reset-two-factor-auth .facebook .fa-facebook {
  padding-right: 10px;
  font-size: 20px;
  vertical-align: bottom
}

.accounts-reset-two-factor-auth .facebook .fa-angle-right {
  font-size: 20px;
  padding-left: 10px;
  vertical-align: bottom
}

.accounts-reset-two-factor-auth label {
  margin: 5px 0;
  display: inline-block;
  font-size: 12px
}

.accounts-reset-two-factor-auth .password-reset {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85;
  display: block;
  text-align: right;
  margin-top: 10px;
  font-size: 12px
}

.accounts-reset-two-factor-auth .password-reset:hover {
  color: #34495E
}

.accounts-reset-two-factor-auth .password-reset:hover {
  color: #8BE5C9
}

.accounts-reset-two-factor-auth .signup {
  text-align: center
}

.accounts-reset-two-factor-auth .signup .link {
  color: #09BA85;
  margin-left: 10px
}

@media all and (max-width: 767px) {
  .accounts-reset-two-factor-auth .signup .link {
    display: block;
    margin: 20px 0
  }
}

@media all and (min-width: 767px) {
  .accounts-reset-two-factor-auth .signup .sp-only {
    display: none
  }
}

.accounts-reset-two-factor-auth .notice {
  border: solid #E74C3C 1px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  padding: 10px 0;
  margin-top: 15px;
  text-align: left;
  padding: 4px
}

.accounts-reset-two-factor-auth strong {
  font-weight: bold
}

.accounts-reset-two-factor-auth .message {
  line-height: 20px;
  margin-bottom: 10px
}

.accounts-reset-two-factor-auth .message li {
  margin-bottom: 10px
}

.accounts-reset-two-factor-auth .warning {
  font-weight: bold;
  color: #ff0000;
  line-height: 1.5;
  padding: 10px 0
}

@media all and (min-width: 768px) {
  .accounts-reset-two-factor-auth {
    margin-top: 100px
  }
}

.rsv-container {
  width: 1120px;
  margin-left: auto;
  margin-right: auto
}

@media all and (max-width: 1200px) {
  .rsv-container {
    width: 960px
  }
}

@media all and (max-width: 979px) {
  .rsv-container {
    width: 785px
  }
}

@media all and (max-width: 767px) {
  .rsv-container {
    width: auto;
    margin: 0
  }
}

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

.security-email-token-auth {
  width: 500px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 20px 40px
}

@media all and (max-width: 767px) {
  .security-email-token-auth {
    width: 300px
  }
}

.security-email-token-auth .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px
}

.security-email-token-auth .text {
  margin-bottom: 30px;
  line-height: 23px
}

.security-email-token-auth .link {
  color: #2980B9;
  text-decoration: none;
  text-align: center
}

.security-email-token-auth .link:hover {
  color: #34495E
}

@media all and (min-width: 768px) {
  .security-email-token-auth {
    margin-top: 100px
  }
}

.security-email-token-authed {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.security-email-token-authed .container {
  box-sizing: border-box;
  padding: 40px 40px 48px;
  color: #194035;
  background: #F3FCF9;
  border-radius: 24px;
  max-width: 426px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.security-email-token-authed .container .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 22px
}

.security-email-token-authed .container .text {
  line-height: 180%;
  font-size: 14px
}

.security-email-token-authed .container .text b {
  font-weight: 700
}

.security-email-token-authed .logo {
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

.security-email-token-authed .container-from-app {
  box-sizing: border-box;
  color: #194035;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 14px 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.security-email-token-authed .container-from-app .title {
  line-height: 180%;
  text-align: center;
  font-weight: 700;
  font-size: 16px
}

.security-email-token-authed .container-from-app .button {
  max-width: 343px;
  height: 50px;
  line-height: 50px;
  background: #17CA94;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.405714px;
  color: #FFFFFF;
  width: 100%;
  margin: 18px 0px
}

.security-email-token-authed .container-from-app .info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #F3FCF9;
  border-radius: 8px;
  padding: 16px 32px
}

.security-email-token-authed .container-from-app .info-icon {
  margin-right: 12px
}

.security-email-token-authed .container-from-app .info-title {
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 140%
}

.security-email-token-authed .container-from-app .info-text {
  font-size: 11px;
  line-height: 140%
}

.security-email-token-authed .logo-from-app {
  position: absolute;
  bottom: 8px;
  box-sizing: border-box;
  padding: 20px;
  width: 184px
}

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

.sessions-signin {
  border-radius: 3px;
  width: 420px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  padding: 40px
}

@media all and (max-width: 767px) {
  .sessions-signin {
    background: none;
    padding: 30px 30px 100px;
    margin: 30px 0 0;
    width: 100%
  }
}

.sessions-signin .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold
}

.sessions-signin .text {
  text-align: center;
  margin-bottom: 30px;
  line-height: 23px
}

.sessions-signin .help {
  text-align: left;
  line-height: 23px;
  font-size: 13px
}

.sessions-signin .link {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85
}

.sessions-signin .link:hover {
  color: #34495E
}

.sessions-signin .link:hover {
  color: #8BE5C9
}

.sessions-signin .form {
  width: 100%;
  margin: 0 auto
}

@media all and (max-width: 767px) {
  .sessions-signin .form {
    width: auto
  }
}

.sessions-signin .form input {
  border: 1px solid #CCC;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  box-sizing: border-box
}

.sessions-signin .form .submit {
  border: 0;
  background: #09BA85;
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
  margin: 20px auto;
  display: block;
  font-weight: bold;
  padding: 13px;
  width: 100%
}

.sessions-signin .form .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.sessions-signin .form .submit.disabled, .sessions-signin .form .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.sessions-signin .form .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #34f5bb
}

.sessions-signin .form .submit.secondary {
  border: 0;
  background: #FFFFFF;
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
  margin: 20px auto;
  display: block;
  font-weight: bold;
  padding: 13px;
  width: 100%;
  border: 1px solid #09BA85;
  color: #09BA85
}

.sessions-signin .form .submit.secondary:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.sessions-signin .form .submit.secondary.disabled, .sessions-signin .form .submit.secondary:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.sessions-signin .form .submit.secondary:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px white
}

.sessions-signin .note {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  padding: 10px 0
}

.sessions-signin .hr {
  display: block;
  margin: 31px 0 -33px;
  border-bottom: 1px solid #ddd
}

.sessions-signin .or {
  background: #fff;
  text-align: center;
  margin: 26px auto;
  width: 60px;
  color: #666666
}

@media all and (max-width: 767px) {
  .sessions-signin .or {
    background-color: #ECF0F1
  }
}

.sessions-signin label {
  margin: 5px 0;
  display: inline-block;
  font-size: 12px
}

.sessions-signin .password-reset {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85;
  display: block;
  text-align: right;
  margin: 10px 0;
  font-size: 12px
}

.sessions-signin .password-reset:hover {
  color: #34495E
}

.sessions-signin .password-reset:hover {
  color: #8BE5C9
}

.sessions-signin .login-faq {
  color: #2980B9;
  text-decoration: none;
  color: #09BA85;
  display: block;
  text-align: right;
  margin: 10px 0;
  font-size: 12px
}

.sessions-signin .login-faq:hover {
  color: #34495E
}

.sessions-signin .login-faq:hover {
  color: #8BE5C9
}

.sessions-signin .signup {
  text-align: center
}

.sessions-signin .signup .link {
  color: #09BA85;
  margin-left: 10px
}

.sessions-signin .signup .link:hover {
  color: #8BE5C9
}

@media all and (max-width: 767px) {
  .sessions-signin .signup .link {
    display: block;
    margin: 20px 0
  }
}

@media all and (min-width: 767px) {
  .sessions-signin .signup .sp-only {
    display: none
  }
}

@media all and (min-width: 768px) {
  .sessions-signin {
    margin-top: 100px
  }
}

.sessions-signin .notice {
  border: solid #E74C3C 1px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  margin-top: 15px;
  text-align: left;
  padding: 4px;
  margin-bottom: 15px
}

.sessions-signin .notice b {
  font-weight: bold
}

.sessions-signin .g-recaptcha {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.sessions-signin .webauthn-text-email {
  padding: 10px 0
}

.sessions-signin .webauthn-text {
  padding: 20px 0;
  line-height: 1.5em
}

.sessions-signin .webauthn-image {
  display: block;
  margin: 0 auto;
  padding: 20px 0
}

.sessions-signin button#authenticate {
  border: 0;
  background: #57ad68;
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
  width: 100%;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 4px;
  background-color: #09BA85;
  color: #fff
}

.sessions-signin button#authenticate:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.sessions-signin button#authenticate.disabled, .sessions-signin button#authenticate:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.sessions-signin button#authenticate:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #9ccea6
}

.sessions-signin a.webauthn-link {
  color: #09BA85;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  display: block
}

.sessions-signin a.webauthn-link:hover {
  color: #34495E
}

.sessions-signout {
  padding: 30px;
  background-color: white;
  border: 1px solid #e8e8eb;
  border-radius: 6px;
  font-family: Oxygen
}

@media (max-width: 1200px) {
  .sessions-signout {
    padding: 20px
  }
}

@media (max-width: 767px) {
  .sessions-signout {
    padding: 10px
  }
}

@media (max-width: 767px) {
  .sessions-signout {
    padding: 20px
  }
}

.sessions-signout .header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 24px
}

.sessions-signout .header .title {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold
}

.sessions-signout .body .notice {
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 0.5em;
  margin: 0 0 1em;
  font-weight: bold
}

@media (max-width: 767px) {
  .sessions-signout .body .notice {
    font-size: 20px;
    line-height: 1.2;
    padding: 0 0 1.5em 0
  }
}

.sessions-signout .body .notice:not(:first-child) {
  margin: 3em 0 0.5em 0
}

.sessions-signout .body .notice .fa {
  color: #20C2D3;
  margin-right: 0.5em
}

.sessions-signout .body .notice .svg-icon-menu {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  padding-right: 0.25em
}

.sessions-signout .body .notice .svg-icon-menu path {
  fill: #20C2D3
}

.sessions-signout .body .desc {
  font-size: 16px;
  line-height: 1.4;
  padding-bottom: 1em
}

@media (max-width: 767px) {
  .sessions-signout .body .desc {
    font-size: 14px;
    line-height: 1.2
  }
}

.sessions-signout .body .button {
  border: 0;
  background: #f56c6c;
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
  position: relative
}

.sessions-signout .body .button:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.sessions-signout .body .button.disabled, .sessions-signout .body .button:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.sessions-signout .body .button:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #fbcccc
}

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

.token-authenticate {
  width: 500px;
  margin: 30px auto;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 20px 40px
}

@media all and (max-width: 767px) {
  .token-authenticate {
    width: 300px
  }
}

.token-authenticate .title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px
}

.token-authenticate .text {
  margin-bottom: 30px;
  line-height: 23px
}

.token-authenticate .link {
  color: #2980B9;
  text-decoration: none
}

.token-authenticate .link:hover {
  color: #34495E
}

@media all and (min-width: 768px) {
  .token-authenticate {
    margin-top: 100px
  }
}

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

.user-password-reset-with-code {
  width: 500px;
  margin: 50px auto;
  background-color: #FFF;
  box-sizing: border-box
}

@media all and (max-width: 767px) {
  .user-password-reset-with-code {
    width: auto;
    margin: 50px 10px
  }
}

.user-password-reset-with-code .top-message {
  background-color: #34495E;
  color: #FFF;
  padding: 15px;
  text-align: center
}

.user-password-reset-with-code .box-inner {
  padding: 40px 60px
}

@media all and (max-width: 767px) {
  .user-password-reset-with-code .box-inner {
    padding: 30px 10px
  }
}

.user-password-reset-with-code .message {
  line-height: 20px;
  margin-bottom: 40px
}

.user-password-reset-with-code .submit {
  border: 0;
  background: #2ECC71;
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
  display: block;
  margin-top: 60px;
  width: 200px
}

.user-password-reset-with-code .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.user-password-reset-with-code .submit.disabled, .user-password-reset-with-code .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.user-password-reset-with-code .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #7ee2a8
}

.user-password-reset-with-code label {
  margin-bottom: 5px;
  display: inline-block;
  width: 200px
}

.user-password-reset-with-code input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  line-height: 17px;
  width: 100%;
  box-sizing: border-box
}

@media all and (min-width: 767px) {
  .user-password-reset-with-code {
    margin-top: 100px
  }
}

.user-password-reset {
  width: 500px;
  margin: 50px auto;
  background-color: #FFF;
  box-sizing: border-box
}

@media all and (max-width: 767px) {
  .user-password-reset {
    width: auto;
    margin: 50px 10px
  }
}

.user-password-reset .top-message {
  background-color: #34495E;
  color: #FFF;
  padding: 15px;
  text-align: center
}

.user-password-reset .box-inner {
  padding: 40px 60px
}

@media all and (max-width: 767px) {
  .user-password-reset .box-inner {
    padding: 30px 10px
  }
}

.user-password-reset .message {
  line-height: 20px
}

.user-password-reset .submit {
  border: 0;
  background: #09BA85;
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
  display: block;
  margin-top: 20px;
  width: 200px
}

.user-password-reset .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.user-password-reset .submit.disabled, .user-password-reset .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.user-password-reset .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #34f5bb
}

.user-password-reset label {
  margin-bottom: 5px;
  display: inline-block;
  width: 200px
}

.user-password-reset input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  line-height: 17px;
  width: 100%;
  box-sizing: border-box
}

.user-password-reset.top-margin {
  margin-top: 100px
}

.user-password-reset strong {
  font-weight: bold
}

.user-create-with-code {
  width: 500px;
  margin: 50px auto;
  background-color: #FFF;
  box-sizing: border-box
}

@media all and (max-width: 767px) {
  .user-create-with-code {
    width: auto;
    margin: 50px 10px
  }
}

.user-create-with-code .top-message {
  background-color: #34495E;
  color: #FFF;
  padding: 15px;
  text-align: center
}

.user-create-with-code .box-inner {
  padding: 40px 60px
}

@media all and (max-width: 767px) {
  .user-create-with-code .box-inner {
    padding: 30px 10px
  }
}

.user-create-with-code .message {
  line-height: 20px;
  margin-bottom: 40px
}

.user-create-with-code .submit {
  border: 0;
  background: #2ECC71;
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
  display: block;
  margin-top: 60px;
  width: 200px
}

.user-create-with-code .submit:hover {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))
}

.user-create-with-code .submit.disabled, .user-create-with-code .submit:disabled {
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  cursor: default
}

.user-create-with-code .submit:focus {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 0 3px 3px #7ee2a8
}

.user-create-with-code label {
  margin-bottom: 5px;
  display: inline-block;
  width: 200px
}

.user-create-with-code input {
  border: 1px solid #CCC;
  display: block;
  margin-bottom: 20px;
  padding: 8px 10px;
  line-height: 17px;
  width: 100%;
  box-sizing: border-box
}

@media all and (min-width: 768px) {
  .user-create-with-code {
    margin-top: 100px
  }
}

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

*, *:before, *:after {
  box-sizing: border-box
}

body.gray {
  background-color: #eef1f6
}

body.gray-if-not-mobile {
  background-color: #eef1f6
}

@media all and (max-width: 767px) {
  body.gray-if-not-mobile {
    background-color: white
  }
}

body.midnight {
  background-color: #2C3E50
}

body.coin-blue {
  background-color: #20C2D3
}

body.white {
  background-color: #F6F6F6
}

body > .notice {
  position: fixed;
  z-index: 10000;
  top: -63px;
  text-align: center;
  left: 0;
  right: 0;
  pointer-events: none;
  -webkit-transition: ease-in-out .2s all;
  transition: ease-in-out .2s all;
  opacity: 0;
  border-radius: 3px
}

body > .notice.show {
  top: 48px;
  opacity: 1
}

body > .notice .inner {
  background-color: #09BA85;
  margin: 0 auto;
  display: inline-block;
  pointer-events: all;
  padding: 14px 30px;
  max-width: 500px;
  border-radius: 3px;
  min-width: 200px;
  color: #FFF;
  font-size: 12px;
  min-height: 15px
}

body > .notice.error .inner {
  background-color: #FE7250
}

body > .notice.tradeview-notice .inner {
  background: #BFF7ED;
  color: #187363
}

body > .notice.tradeview-error .inner {
  background: #F7BCCD;
  color: #730F2D
}

body > #LangWarningCtrl {
  z-index: 12000
}

body > #LangWarningCtrl > .lang-warning {
  position: fixed;
  z-index: 12000;
  text-align: center;
  left: 0;
  right: 0;
  top: 10px;
  pointer-events: none
}

body > #LangWarningCtrl > .lang-warning .inner {
  background-color: white;
  margin: 0 auto;
  display: inline-block;
  pointer-events: all;
  border-radius: 3px;
  border: 1px solid #CCC;
  padding: 30px
}

body > #LangWarningCtrl > .lang-warning .text {
  margin-bottom: 10px
}

body > #LangWarningCtrl > .lang-warning .link {
  color: #2980B9;
  text-decoration: none;
  cursor: pointer
}

body > #LangWarningCtrl > .lang-warning .link:hover {
  color: #34495E
}

body > .modal-view {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3000;
  overflow: auto;
  display: none
}

body.noscroll {
  overflow: hidden
}

[ng-cloak], [v-cloak], .ng-cloak {
  display: none !important
}

@media all and (max-width: 767px) {
  [ng-if='!isPhone'], [v-if='!isPhone'] {
    display: none !important
  }
}

a {
  color: inherit;
  text-decoration: none
}

img {
  max-width: 100%
}

input:required {
  box-shadow: none
}

.svg-icon-menu {
  color: #333;
  display: inline-block;
  fill: currentColor;
  height: 20px;
  width: 20px
}

.svg-icon-menu path {
  fill: currentColor
}

.switching-button + .switching-button {
  float: right
}

.switching-button .button {
  float: left;
  padding: 0 10px;
  min-width: 80px;
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  line-height: 38px;
  border-radius: 3px
}

@media (max-width: 767px) {
  .switching-button .button {
    font-size: 12px;
    padding: 0 5px;
    min-width: 64px;
    margin-bottom: 10px
  }
}

.switching-button .button:first-child {
  margin-left: 0px
}

.switching-button .button:hover {
  background-color: rgba(52, 152, 219, 0.47);
  color: white
}

.switching-button .button.selected {
  background-color: #3498DB;
  color: white
}

.switching-button .button.right {
  float: right
}

.breadcrumbs {
  margin: 20px 0 0 0
}

.breadcrumbs:only-child {
  margin-bottom: 20px
}

@media (max-width: 767px) {
  .breadcrumbs {
    margin: 10px
  }
}

.breadcrumbs .breadcrumbs-inner {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box
}

.breadcrumbs .breadcrumbs-inner ul {
  max-width: 100%
}

.breadcrumbs .breadcrumbs-inner ul li {
  display: inline-block;
  font-size: 14px
}

@media all and (max-width: 767px) {
  .breadcrumbs .breadcrumbs-inner ul li {
    line-height: 20px
  }
}

.breadcrumbs .breadcrumbs-inner ul li:before {
  content: ">";
  padding: 0 5px 0 3px;
  font-weight: normal
}

.breadcrumbs .breadcrumbs-inner ul li:first-child:before {
  content: "";
  padding: 0
}

.breadcrumbs .breadcrumbs-inner ul li a:hover {
  text-decoration: underline
}

.breadcrumbs .breadcrumbs-inner ul .current {
  font-weight: bold
}

.vfarp-notice {
  position: fixed;
  z-index: 10000;
  top: -63px;
  text-align: center;
  left: 0;
  right: 0;
  pointer-events: none;
  -webkit-transition: ease-in-out .2s all;
  transition: ease-in-out .2s all;
  opacity: 0
}

.vfarp-notice.show {
  top: 48px;
  opacity: 1
}

.vfarp-notice .inner {
  background-color: #3498DB;
  margin: 0 auto;
  display: inline-block;
  pointer-events: all;
  padding: 14px 40px;
  max-width: 300px;
  border-radius: 3px;
  min-width: 200px;
  color: #FFF;
  font-size: 15px;
  min-height: 15px
}

.vfarp-notice.error .inner {
  background-color: #E74C3C
}

.cc-hide {
  display: none !important
}

.inline-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  width: -webkit-max-content !important;
  width: -moz-max-content !important;
  width: max-content !important
}

</style>
