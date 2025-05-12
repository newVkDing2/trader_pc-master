<template>
  <div class="full-contract-box fit-tc-primary fit-background-di">
    <div class="exchange-futures-content fit-background-di">
      <!-- 合约类型 -->
      <div class="futures-markets fit-background">
        <div class="futures-markets-top">
          <div class="futures-markets-search">
            <div
              class="exchange-txt-img flex-box fit-tc-tertiary fit-background-di"
              @click="isMarketsSearch = true"
              v-show="!isMarketsSearch"
            >
              <i class="el-icon-search"></i>
              <span>{{ currCoinLangFun("search", "all") }}</span>
            </div>
            <el-input
              v-show="isMarketsSearch"
              class="search-input-box fit-background-di el-input-bg"
              size="mini"
              :placeholder="currCoinLangFun('qingshuruneirong_text', 'center')"
              v-model="marketsSearchValue"
            >
              <i slot="prefix" class="el-icon-search"></i>
              <i
                slot="suffix"
                class="el-icon-close"
                @click="marketsSearchClear"
              ></i>
            </el-input>
          </div>
          <div
            class="futures-filter-tabs fit-tc-border-color el-table-border-color fit-tc-tip fit-tabs"
            v-show="!isMarketsSearch"
          >
            <el-tabs size="mini" v-model="marketsTabs">
              <el-tab-pane
                v-for="item in marketsTabsList"
                :key="item.value"
                :label="item.label"
                :name="item.value"
              ></el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="futures-markets-content fit-background table-border-null">
          <el-table
            size="mini"
            :data="marketsData"
            height="667px"
            :row-class-name="tableRowClassName"
            @row-click="marketsTableRowClickFun"
          >
            <el-table-column prop="date" align="left" label="合约" width="90">
              <template slot-scope="scope">
                <div>
                  <i
                    style="cursor: pointer"
                    class="fa fa-star-o fit-tc-primary fit-tc-tertiary"
                    @click.stop="setOptionalFun('add', scope.row)"
                    v-if="!scope.row.collect"
                  ></i>
                  <i
                    class="fa fa-star"
                    style="color: #2271e6; cursor: pointer"
                    @click.stop="setOptionalFun('cancel', scope.row)"
                    v-else
                  ></i>
                  <span style="margin-left: 2px" class="text fit-tc-primary">
                    {{ scope.row.symbol_name.replace("/", "") }}
                  </span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="closeText"
              sort-by="close"
              :label="currCoinLangFun('table_coin_price', 'exchange')"
              align="center"
              sortable
              width="66"
            ></el-table-column>
            <el-table-column
              prop="zdf"
              width="f90"
              align="center"
              sortable
              :label="currCoinLangFun('text_zdf', 'move_contract')"
            >
              <template slot-scope="scope">
                <span
                  :class="{
                    'fit-tc-rise': scope.row.zdf >= 0,
                    'fit-tc-fall': scope.row.zdf < 0,
                  }"
                  >{{ scope.row.zdf }}%</span
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 合约信息 -->
      <div class="futures-ticker fit-background flex-box">
        <img :src="exchangeCoinData.coin_avatar" />
        <span class="coin-title fit-tc-primary">
          {{ currencyType }}{{ priceType }}
          {{ currCoinLangFun("nav_yx", "move_quotation") }}
        </span>
        <div class="money-content" :style="tickerStyle">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("table_coin_close", "exchange") }}
                </div>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="'≈ ' + exchangeRateFilter(coinMoneyData.close)"
                  placement="bottom-start"
                >
                  <div
                    class="item-tip line"
                    :class="[coinMoneyData.closeData.className]"
                  >
                    {{ coinMoneyData.closeData.close }}
                  </div>
                </el-tooltip>
              </span>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("zd_text") }}
                </div>
                <div
                  class="item-tip"
                  :class="[coinMoneyData.riseFallData.className]"
                >
                  {{ coinMoneyData.riseFallData.percentage }} ({{
                    coinMoneyData.riseFallData.money
                  }})
                </div>
              </span>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("table_coin_high", "exchange") }}
                </div>
                <div class="item-tip fit-tc-primary">
                  {{ coinMoneyData.highText }}
                </div>
              </span>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("table_coin_low", "exchange") }}
                </div>
                <div class="item-tip fit-tc-primary">
                  {{ coinMoneyData.lowText }}
                </div>
              </span>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("table_coin_amount", "exchange") }}
                </div>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="
                    '≈' + exchangeRateFilter(coinMoneyData.tradeTurnover)
                  "
                  placement="bottom-start"
                >
                  <div class="item-tip line fit-tc-primary">
                    {{ coinMoneyData.amountText }} {{ currencyType }}
                  </div>
                </el-tooltip>
              </span>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">
                  {{ currCoinLangFun("table_coin_vol", "exchange") }}
                </div>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="
                    '≈' + exchangeRateFilter(coinMoneyData.tradeTurnover)
                  "
                  placement="bottom-start"
                >
                  <div class="item-tip line fit-tc-primary">
                    {{ coinMoneyData.turnoverText }} {{ priceType }}
                  </div>
                </el-tooltip>
              </span>
            </el-tab-pane>
            <!-- 隐藏 不需要弄 -->
            <el-tab-pane v-if="true">
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">资金费率</div>
                <!-- <el-tooltip effect="dark" placement="bottom-start">
                  <div
                    slot="content"
                    class="ticker-item-tooltip-content fit-tc-primary"
                  >
                    <div class="box-title">本期资金费率</div>
                    <div class="box-text">
                      最近一次资金结算时间点2022.07.01 16:00 (UTC+8)的资金费率
                    </div>
                    <div class="box-text">
                      资金费率为正时, 多仓将支付给空仓; 资金费率为负时,
                      空仓将支付给多仓。
                    </div>
                    <div class="box-details fit-tc-primary active-text">
                      查看详情
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="item-tip line fit-tc-primary">
                    {{ exchangeCoinData.coinRate }}% ({{ rateCountdownText }})
                  </div>
                </el-tooltip> -->
                <div class="item-tip fit-tc-primary">
                  {{ exchangeCoinData.coinRate || 0 }}% ({{
                    rateCountdownText
                  }})
                </div>
              </span>
            </el-tab-pane>
            <el-tab-pane v-if="false">
              <span slot="label" class="content-item">
                <div class="item-title fit-tc-tertiary">预测资金费率</div>
                <el-tooltip
                  effect="dark"
                  placement="bottom-start"
                  class="ticker-item-tooltip-box"
                >
                  <div
                    slot="content"
                    class="ticker-item-tooltip-content fit-tc-primary"
                  >
                    <div class="box-title">预测资金费率</div>
                    <div class="box-text">
                      下次资金结算时间点 2022.07.02 00:00 (UTC+8)
                      资金费率的预测值。(此值实时更新, 仅供参考)
                    </div>
                    <div class="box-text">
                      资金费率为正时, 多仓将支付给空仓; 资金费率为负时,
                      空仓将支付给多仓。
                    </div>
                    <div class="box-details fit-tc-primary active-text">
                      查看详情
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="item-tip line fit-tc-primary">0.01%</div>
                </el-tooltip>
              </span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- k线图 -->
      <div class="futures-kline fit-background">
        <div id="kline_container" class="kline_container"></div>
      </div>
      <!-- 买卖 -->
      <div class="futures-trade fit-background-di">
        <div class="leverage-container fit-background flex-box" v-if="isLogin">
          <div
            class="leverage-info fit-tc-tertiary active-text border-color"
            @click="setCurrTradeModel"
          >
            {{ leverageInfoText }}
          </div>
          <div class="leverage-icon">
            <i class="el-icon-setting" @click="tradeSetting.dialog = true"></i>
          </div>
        </div>
        <div class="info-container-new fit-background">
          <ul class="info-tab flex-box">
            <li
              v-for="item in tradeShipping"
              :key="item.value"
              @click="tradeShippingType = item.value"
              class="fit-background-di fit-tc-tip"
              :class="{ active: item.value == tradeShippingType }"
            >
              {{ item.label }}
            </li>
          </ul>

          <div class="info-subTab flex-box">
            <div class="flex-box subTab-box">
              <div
                v-for="item in tradeEntrust"
                :key="item.value"
                @click="tradeEntrustType = item.value"
                class="fit-tc-tertiary"
                :class="{ 'active-text': item.value == tradeEntrustType }"
                v-show="!(item.value == 'jhwt' && tradeShippingType == 'pc')"
              >
                {{ item.label }}
              </div>
            </div>
            <!-- <div class="subTab-icon">
              <i class="fa fa-calculator fit-tc-tertiary"></i>
            </div> -->
          </div>
          <div class="info-cont">
            <!-- 普通委托 | 市价委托-->
            <div
              class="ptwt-info-cont"
              v-show="tradeEntrustType == 'ptwt' || tradeEntrustType == 'sjwt'"
            >
              <div class="input-item-cont" v-show="tradeEntrustType == 'ptwt'">
                <div class="input-label flex-box">
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_price", "exchange") }}
                  </div>
                  <!-- <el-tooltip
                    class="item"
                    effect="dark"
                    placement="top-start"
                    popper-class="ptwt-info-cont-tooltip"
                  >
                    <div slot="content">
                      <div class="tooltip-title">对手价</div>
                      <div class="tooltip-text">以当前最优的价格去成交，未成交完成部分继续以当前最优的价格去成交，直到所有委托量被完成</div>
                    </div>
                    <div class="fit-tc-tertiary active-text">对手价</div>
                  </el-tooltip>-->
                </div>
                <div class="input-fixed-bar-wrap">
                  <el-input
                    v-model="tradeForm.price"
                    @input="
                      (e) =>
                        tradeInputChengFun(
                          e,
                          'price',
                          exchangeCoinData.base_coin_scale
                        )
                    "
                  ></el-input>
                </div>
              </div>
              <div class="input-item-cont">
                <div class="input-label flex-box">
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_num", "exchange") }}
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("zx_text", "move_contract") }}
                    {{ minNumText }}
                  </div>
                </div>
                <div class="input-fixed-bar-wrap">
                  <el-input
                    ref="tradeFormNum"
                    v-model="tradeForm.num"
                    @focus="tradeFormNumFocusFun"
                    @input="
                      (e) =>
                        tradeInputChengFun(
                          e,
                          'num',
                          contractUnit == 'coin'
                            ? exchangeCoinData.coin_coin_scale
                            : exchangeCoinData.base_coin_scale
                        )
                    "
                  >
                    <span slot="suffix" class="fit-tc-tertiary">
                      {{ tradeSetting.unit }}
                    </span>
                  </el-input>
                </div>
                <el-slider
                  class="cont-slider"
                  v-model="tradeForm.slider"
                  :show-tooltip="false"
                  :marks="tradeForm.sliderMarks"
                ></el-slider>
                <div class="cont-money flex-box fit-tc-tip">
                  <span>
                    {{ currCoinLangFun("entrust_buy") }} {{ ptwtNumText.buy }}
                    {{ tradeSetting.unit }}
                  </span>
                  <span>
                    {{ currCoinLangFun("entrust_sell") }}
                    {{ ptwtNumText.sell }} {{ tradeSetting.unit }}
                  </span>
                </div>
                <div class="cont-zyzs" v-if="tradeShippingType == 'kc'">
                  <el-checkbox v-model="tradeForm.isZyzs">
                    {{ currCoinLangFun("entrust_zyzs") }}
                  </el-checkbox>
                  <div class="zyzs-input" v-if="tradeForm.isZyzs">
                    <el-input v-model="tradeForm.zyPrice">
                      <span slot="prefix">
                        {{ currCoinLangFun("orders_table_take_profit_price") }}
                      </span>
                    </el-input>
                  </div>
                  <div class="zyzs-input" v-if="tradeForm.isZyzs">
                    <el-input v-model="tradeForm.zsPrice">
                      <span slot="prefix">
                        {{ currCoinLangFun("orders_table_stop_loss_price") }}
                      </span>
                    </el-input>
                  </div>
                </div>
              </div>
            </div>
            <!-- 计划委托 -->
            <div class="jhwt-info-cont" v-show="tradeEntrustType == 'jhwt'">
              <div class="input-item-cont">
                <div class="input-label flex-box">
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("orders_table_trigger") }}
                  </div>
                </div>
                <div class="input-fixed-bar-wrap">
                  <el-input
                    v-model="tradeForm.triggerPrice"
                    @input="
                      (e) =>
                        tradeInputChengFun(
                          e,
                          'triggerPrice',
                          exchangeCoinData.base_coin_scale
                        )
                    "
                  ></el-input>
                </div>
              </div>
              <div class="input-item-cont">
                <div class="input-label flex-box">
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_price", "exchange") }}
                  </div>
                  <!-- <el-tooltip
                    class="item"
                    effect="dark"
                    placement="top-start"
                    popper-class="ptwt-info-cont-tooltip"
                  >
                    <div slot="content">
                      <div class="tooltip-title">对手价</div>
                      <div class="tooltip-text">以当前最优的价格去成交，未成交完成部分继续以当前最优的价格去成交，直到所有委托量被完成</div>
                    </div>
                    <div class="fit-tc-tertiary active-text">对手价</div>
                  </el-tooltip>-->
                </div>
                <div class="input-fixed-bar-wrap">
                  <el-input
                    v-model="tradeForm.price"
                    @input="
                      (e) =>
                        tradeInputChengFun(
                          e,
                          'price',
                          exchangeCoinData.base_coin_scale
                        )
                    "
                  ></el-input>
                </div>
              </div>
              <div class="input-item-cont">
                <div class="input-label flex-box">
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_num", "exchange") }}
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("zx_text", "move_contract") }}
                    {{ minNumText }}
                  </div>
                </div>
                <div class="input-fixed-bar-wrap">
                  <el-input
                    ref="tradeFormNum"
                    v-model="tradeForm.num"
                    @focus="tradeFormNumFocusFun"
                    @input="
                      (e) =>
                        tradeInputChengFun(
                          e,
                          'num',
                          contractUnit == 'coin'
                            ? exchangeCoinData.coin_coin_scale
                            : exchangeCoinData.base_coin_scale
                        )
                    "
                  >
                    <span slot="suffix" class="fit-tc-tertiary">
                      {{ tradeSetting.unit }}
                    </span>
                  </el-input>
                </div>
              </div>
            </div>
            <div class="info-buy-cont" v-if="isLogin">
              <div class="buy-cont-btn flex-box">
                <el-button
                  @click="
                    tradePlaceFunFun(tradeShippingType == 'kc' ? '1' : '4')
                  "
                >
                  {{
                    tradeShippingType == "kc"
                      ? currCoinLangFun("kaiduo_text", "move_contract")
                      : currCoinLangFun("pingkong_text", "move_contract")
                  }}
                </el-button>
                <el-button
                  @click="
                    tradePlaceFunFun(tradeShippingType == 'kc' ? '2' : '3')
                  "
                >
                  {{
                    tradeShippingType == "kc"
                      ? currCoinLangFun("kaiKong_text", "move_contract")
                      : currCoinLangFun("pingduo_text", "move_contract")
                  }}
                </el-button>
              </div>
              <div class="buy-cont-money flex-box fit-tc-tip">
                <span>
                  {{
                    tradeShippingType == "kc"
                      ? currCoinLangFun("k_buy_text", "move_contract")
                      : currCoinLangFun("kp_text", "move_contract")
                  }}
                  {{ maxNumText.buy }} {{ tradeSetting.unit }}
                </span>
                <span>
                  {{
                    tradeShippingType == "kc"
                      ? currCoinLangFun("k_sell_text", "move_contract")
                      : currCoinLangFun("kp_text", "move_contract")
                  }}
                  {{ maxNumText.sell }} {{ tradeSetting.unit }}
                </span>
              </div>
              <!-- <div class="buy-cont-type">
                     <el-radio-group v-model="tradeForm.buyType">
    <el-radio label="maker">只做Maker</el-radio>
    <el-radio label="ioc">IOC</el-radio>
    <el-radio label="fok">FOK</el-radio>
  </el-radio-group>
              </div>-->
            </div>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                  >{{ currCoinLangFun("login", "top") }}</span
                >
                {{ currCoinLangFun("or_text", "user") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                  >{{ currCoinLangFun("register_now", "all") }}</span
                >
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
          </div>
          <div class="assets-container fit-tc-border-color" v-if="isLogin">
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">保证金比率</span>
              <span class="fit-tc-primary"
                >{{ contractAssets.bzjl || 0 }}%</span
              >
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">维持保证金</span>
              <span class="fit-tc-primary">
                {{ contractAssets.wcbzj }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
          </div>
          <div class="assets-container fit-tc-border-color" v-if="isLogin">
            <div class="assets-title flex-box">
              <div class="title fit-tc-tertiary">
                {{ currCoinLangFun("text_hyzc", "assets") }}
              </div>
              <div class="right-cont flex-box">
                <span
                  class="fit-tc-primary active-text"
                  @click="openTransFun"
                  >{{ currCoinLangFun("transfer_text", "all") }}</span
                >
                <span class="box-line"></span>
                <span
                  class="fit-tc-primary active-text"
                  @click="$router.push({ path: '/otc/ordinary' })"
                  >{{ currCoinLangFun("item_one", "top") }}</span
                >
              </div>
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("zhqy_text", "move_assets") }}
              </span>
              <span class="fit-tc-primary">
                {{ contractAssets.zhqy }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("wsxyk_text", "move_assets") }}
              </span>
              <span class="fit-tc-primary">
                {{ contractAssets.wsxyk }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("kybzj_text", "move_assets") }}
              </span>
              <span class="fit-tc-primary">
                {{ contractAssets.kybzj }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("text_ccbzj", "exchange") }}
              </span>
              <span class="fit-tc-primary">
                {{ contractAssets.ccbzj }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
            <div class="assets-item flex-box">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("djbzj_text", "move_assets") }}
              </span>
              <span class="fit-tc-primary">
                {{ contractAssets.djbzj }}
                <span class="fit-tc-tip">
                  {{ contractType == "ubw" ? priceType : currencyType }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 深度 -->
      <div class="futures-depth fit-background">
        <div class="exchange-depth-top flex-box fit-tc-border-color">
          <div class="flex-box">
            <span
              class="depth-type-taps fit-tc-hover"
              @click="depthsType = 'all'"
              :class="{ hover: depthsType == 'all' }"
            >
              <img
                v-if="themeName == 'theme-daytime'"
                src="@/assets/svg/icon-depth-light.svg"
              />
              <img v-else src="@/assets/svg/icon-depth-dark.svg" />
            </span>
            <span
              class="depth-type-taps flex-box fit-tc-hover"
              @click="depthsType = 'buy'"
              :class="{ hover: depthsType == 'buy' }"
            >
              <img src="@/assets/svg/icon-buy.svg" />
            </span>
            <span
              class="depth-type-taps flex-box fit-tc-hover"
              @click="depthsType = 'sell'"
              :class="{ hover: depthsType == 'sell' }"
            >
              <img src="@/assets/svg/icon-sell.svg" />
            </span>
          </div>
        </div>
        <div class="exchange-depth-content">
          <div class="depth-row fit-tc-tip">
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_price", "exchange") }}
            </span>
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_num", "exchange") }}({{
                contractUnit == "coin" ? currencyType : priceType
              }})
            </span>
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_combined", "exchange") }}({{
                contractUnit == "coin" ? currencyType : priceType
              }})
            </span>
          </div>
          <div
            class="depth-box depth-rise"
            :style="depthsStyle"
            v-if="depthsType != 'buy'"
          >
            <ul class="el-scrollbar__view">
              <li
                v-for="(item, index) in depthsSellData"
                :key="index"
                :style="{ backgroundSize: item.size + '%' }"
                @click="setMoneyFun(item)"
              >
                <span>
                  <span class="fit-tc-fall">{{ item.priceText }}</span>
                </span>
                <span>{{ formattDepth(item, "amount") }}</span>
                <span>{{ formattDepth(item, "total") }}</span>
              </li>
            </ul>
          </div>
          <div class="exchange-depth-ticker flex-box fit-tc-border-color">
            <div class="flex-box">
              <span class="flex-box" :class="coinMoneyData.closeData.className">
                {{ coinMoneyData.closeData.close }}
                <i class="el-icon-caret-top"></i>
              </span>
              <span class="fit-tc-tip"
                >≈ {{ exchangeRateFilter(coinMoneyData.close) }}</span
              >
            </div>
          </div>
          <div
            class="depth-box depth-fall"
            v-if="depthsType != 'sell'"
            :style="depthsStyle"
          >
            <ul class="el-scrollbar__view">
              <li
                v-for="(item, index) in depthsBuyData"
                :key="index"
                :style="{ backgroundSize: item.size + '%' }"
                @click="setMoneyFun(item)"
              >
                <span>
                  <span class="fit-tc-rise">{{ item.priceText }}</span>
                </span>
                <span>{{ formattDepth(item, "amount") }}</span>
                <span>{{ formattDepth(item, "total") }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 交易量 -->
      <div class="futures-deals fit-background">
        <div class="deals-title">{{ currCoinLangFun("zxcj_text") }}</div>
        <div class="exchange-depth-content">
          <el-table :data="dealsBazaarData" size="mini" height="144px">
            <el-table-column
              prop="time"
              :label="currCoinLangFun('table_coin_time', 'exchange')"
              width="68"
            >
              <template slot-scope="scope">
                <span class="fit-tc-tip">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="priceText"
              :label="currCoinLangFun('table_coin_price', 'exchange')"
              width="80"
            >
              <template slot-scope="scope">
                <span :class="scope.row.className">{{
                  scope.row.priceText
                }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              width="100"
              :label="`${currCoinLangFun('table_coin_num', 'exchange')} (${
                contractUnit == 'coin' ? currencyType : priceType
              })`"
            >
              <template slot-scope="scope">
                <span>{{ formattDepth(scope.row, "amount") }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 订单 -->
      <div class="futures-orders fit-background">
        <div class="futures-orders-top fit-tc-border-color flex-box">
          <div class="fit-tc-tip fit-tabs">
            <el-tabs v-model="orderType">
              <el-tab-pane
                v-for="item in orderList"
                :key="item.value"
                :label="item.label"
                :name="item.value"
              ></el-tab-pane>
            </el-tabs>
          </div>
          <div class="flex-box operation-box">
            <div
              class="unwind-btn fit-background-di fit-tc-tip"
              @click="aKeyUnwindData.dialog = true"
              v-if="isLogin && orderCwData.length > 0"
            >
              {{ currCoinLangFun("yjpc_btn_text", "move_contract") }}
            </div>
            <el-checkbox v-model="orderFilter" class="fit-tc-tip">
              {{ currCoinLangFun("zxsdqhy_text") }}
            </el-checkbox>
            <span class="box-line"></span>
            <div
              class="more fit-tc-primary active-text"
              @click="openEntrustFun"
            >
              {{ currCoinLangFun("more", "all") }}
              <i class="el-icon-right"></i>
            </div>
          </div>
        </div>
        <div
          class="futures-orders-content table-border-header-null"
          :class="{ 'null-table-hover': orderType == 'cw' }"
        >
          <el-table
            :row-style="orderRowStyle"
            :data="orderData"
            style="width: 100%"
            size="mini"
            height="230"
            v-loading="orderLoading"
          >
            <el-table-column
              v-for="(item, index) in orderTable"
              :key="item.id + '_' + index"
              v-bind="item"
              :show-overflow-tooltip="true"
            >
              <template slot="header" slot-scope="scope">
                <div
                  style="color: #688199"
                  :style="{ textAlign: scope.column.align }"
                >
                  <div v-if="scope.column.property == 'dqwtMeun'">
                    <div
                      class="fit-tc-primary active-text"
                      :class="{ 'order-meun-null': orderAllLoadin }"
                      style="cursor: pointer"
                      @click="orderCancellationsFun({}, true)"
                    >
                      <i v-if="orderAllLoadin" class="el-icon-loading"></i>
                      <span style="padding-left: 4px">
                        {{ currCoinLangFun("quanche_text") }}
                      </span>
                    </div>
                  </div>
                  <span v-else>{{ scope.column.label }}</span>
                </div>
              </template>
              <template slot-scope="scope">
                <div
                  class="fit-tc-tip"
                  :style="{ textAlign: scope.column.align }"
                >
                  <!-- 合约 -->
                  <!-- fit-tc-fall-bg -->
                  <div v-if="item.prop == 'hy'">
                    <span
                      v-if="orderType != 'cw'"
                      class="order-type"
                      :class="scope.row.className"
                      >{{ scope.row.directionText }}</span
                    >
                    <span
                      v-else
                      class="order-type"
                      :class="scope.row.bgClassName"
                      >{{ scope.row.cwType }}</span
                    >
                    <span class="fit-tc-primary">{{ scope.row.symbol }}</span>
                    <span
                      v-if="orderType == 'cw'"
                      class="order-info fit-background-di fit-tc-rise"
                    >
                      {{ scope.row.cwMain }}/{{ scope.row.cwSub }}
                      {{ scope.row.leverage }}
                    </span>
                  </div>
                  <!-- 委托 | 成交量 -->
                  <div v-else-if="item.prop == 'cjl'">
                    <span class="fit-tc-primary">
                      {{
                        contractUnit == "coin"
                          ? scope.row.coin_cjl
                          : scope.row.base_cjl
                      }}
                    </span>
                  </div>
                  <!-- 委托 | 成交均价 -->
                  <div v-else-if="item.prop == 'cjjj'">
                    <span class="fit-tc-primary">{{ scope.row.cjjj }}</span>
                  </div>
                  <!-- 成交记录 - 成交量 -->
                  <div v-else-if="item.prop == 'cj_cjl'">
                    <span class="fit-tc-primary">
                      {{
                        contractUnit == "coin"
                          ? scope.row.coin_cj_cjl
                          : scope.row.base_cj_cjl
                      }}
                    </span>
                  </div>
                  <!-- 保证金 -->
                  <div v-else-if="item.prop == 'principal_amount'">
                    <span
                      v-if="scope.row.pattern == 1"
                      @click="openMarginDialogFun(scope.row)"
                      style="
                        color: #2954cc;
                        padding-right: 5px;
                        font-size: 14px;
                        cursor: pointer;
                      "
                      >±</span
                    >
                    <span>{{ scope.row.principalAmount }}</span>
                  </div>
                  <!-- 收益 -->
                  <div v-else-if="item.prop == 'sy'">
                    <div :class="scope.row.sy_className" v-show="scope.row.sy">
                      <span>
                        {{ scope.row.sy }}
                        {{ scope.row.principal_symbol }}
                      </span>
                      <span>{{ scope.row.syl }}</span>
                    </div>
                  </div>
                  <!-- 持仓费 -->
                  <div v-else-if="item.prop == 'night_amount'">
                    <span>{{ scope.row.nightAmount }}</span>
                  </div>
                  <!-- 盈利 -->
                  <div v-else-if="item.prop == 'profitText'">
                    <span
                      :class="{
                        'fit-tc-rise': scope.row.profit > 0,
                        'fit-tc-fall': scope.row.profit < 0,
                      }"
                      >{{ scope.row.profitText }}</span
                    >
                  </div>
                  <!-- 平仓价格 -->
                  <div v-else-if="item.prop == 'pcjg'" class="table-pcjg-input">
                    <el-input
                      v-if="!scope.row.loading"
                      size="mini"
                      v-model="orderTableData[scope.row.$index].pcjg"
                      @input="
                        (e) =>
                          orderTableInputChengFun(
                            e,
                            'pcjg',
                            scope.row.$index,
                            scope.row.base_scale
                          )
                      "
                    ></el-input>
                  </div>
                  <!-- 数量 -->
                  <div v-else-if="item.prop == 'pcsl'">
                    <div
                      class="table-pcjg-input table-pcsl-input"
                      v-if="!scope.row.loading"
                    >
                      <el-input
                        size="mini"
                        v-model="orderTableData[scope.row.$index].pcsl"
                        @input="
                          (e) =>
                            orderTableInputChengFun(
                              e,
                              'pcsl',
                              scope.row.$index,
                              scope.row.coin_scale
                            )
                        "
                        @focus="
                          orderTableData[scope.row.$index].pcsl &&
                          orderTableData[scope.row.$index].pcsl.indexOf('%') !=
                            -1
                            ? $set(orderTableData[scope.row.$index], 'pcsl', '')
                            : ''
                        "
                      >
                        <div slot="suffix">
                          <el-dropdown
                            szie="mini"
                            @command="orderNubHandleCommand"
                          >
                            <span class="el-dropdown-link">
                              <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item
                                v-for="item in orderNumList"
                                :key="item.value"
                                :command="{
                                  value: item.label,
                                  key: 'pcsl',
                                  index: scope.row.$index,
                                }"
                                >{{ item.label }}</el-dropdown-item
                              >
                            </el-dropdown-menu>
                          </el-dropdown>
                        </div>
                      </el-input>
                      <button
                        type="button"
                        class="pcsl-button"
                        :class="{
                          'fit-tc-fall-bg': scope.row.direction == 1,
                          'fit-tc-rise-bg': scope.row.direction == 2,
                        }"
                        @click="orderTablePcFun(scope.row)"
                      >
                        <span>
                          {{
                            scope.row.direction == 1
                              ? currCoinLangFun("pingduo_text", "move_contract")
                              : currCoinLangFun(
                                  "pingkong_text",
                                  "move_contract"
                                )
                          }}
                        </span>
                      </button>
                      <span
                        class="box-line"
                        style="width: 1px; display: block"
                      ></span>
                      <i
                        class="fa fa-bolt fit-background-di i-pcsl"
                        @click="openLightningDialogFun(scope.row)"
                      ></i>
                      <i
                        class="fa fa-reply fit-background-di i-pcsl"
                        @click="openReversePositionsDialogFun(scope.row)"
                      ></i>
                    </div>
                    <div
                      style="width: 100%; text-align: center"
                      v-if="scope.row.loading"
                    >
                      <i class="el-icon-loading"></i>
                      {{ currCoinLangFun("zxz_text") }}
                    </div>
                  </div>
                  <!-- 止盈/止损 -->
                  <div v-else-if="item.prop == 'zyzs'" class="fit-tc-primary">
                    <div
                      class="table-zyzs-text fit-background-di"
                      v-if="!scope.row.loading"
                      @click="openCheckFullStopDialogFun(scope.row)"
                    >
                      {{ currCoinLangFun("zy_zs_c", "move_contract") }}
                    </div>
                  </div>
                  <div v-else-if="item.prop == 'dqwtMeun'">
                    <div
                      class="fit-tc-primary active-text"
                      :class="{
                        'order-meun-null': scope.row.loading || orderAllLoadin,
                      }"
                      style="cursor: pointer"
                      v-if="scope.row.entrust_status === 0"
                    >
                      <span @click="orderCancellationsFun(scope.row)">
                        <i
                          v-if="scope.row.loading"
                          style="padding-right: 4px"
                          class="el-icon-loading"
                        ></i>
                        {{ currCoinLangFun("rders_table_cancellations") }}
                      </span>
                    </div>
                  </div>
                  <div v-else-if="item.prop == 'lswtMeun'">
                    <div
                      class="fit-tc-primary active-text"
                      @click="openOrderHistroyFun(scope.row)"
                      style="cursor: pointer"
                    >
                      <i class="el-icon-tickets"></i>
                    </div>
                  </div>
                  <div v-else>
                    <span class="fit-tc-tip">{{ scope.row[item.prop] }}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <template slot="empty">
              <div class="table-empty fit-tc-tip">
                <div class="null-login" v-if="!isLogin">
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('login')"
                    >{{ currCoinLangFun("login", "top") }}</span
                  >
                  {{ currCoinLangFun("or", "all") }}
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('register')"
                    >{{ currCoinLangFun("register_now", "all") }}</span
                  >
                  {{ currCoinLangFun("to_trade") }}
                </div>
                <div v-else class="is-login">
                  <img src="@/assets/svg/icon-Null.svg" alt />
                  <span class="fit-tc-tip">
                    {{ currCoinLangFun("table_null_data", "all") }}
                  </span>
                </div>
              </div>
            </template>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 仓位设置 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="`${currCoinLangFun('text_dqcwms')}： ${leverageInfoText}`"
      :visible.sync="tradeModel.dialog"
      width="480px"
      custom-class="general-dialog trade-model-dialog"
    >
      <div class="trade-model-box">
        <div class="model-tab-cont">
          <div class="tab-cont-main flex-box">
            <div
              class="cont-item"
              :class="{
                'fit-background': tradeModel.mainType != 'zc',
                'fit-background-di': tradeModel.mainType == 'zc',
              }"
            >
              <el-button
                :type="tradeModel.mainType == 'zc' ? 'primary' : ''"
                @click="tradeModel.mainType = 'zc'"
                >{{ currCoinLangFun("zc_text", "move_transaction") }}</el-button
              >
            </div>
            <div
              class="cont-item el-btn"
              :class="{
                'fit-background': tradeModel.mainType != 'qc',
                'fit-background-di': tradeModel.mainType == 'qc',
              }"
            >
              <el-button
                :type="tradeModel.mainType == 'qc' ? 'primary' : ''"
                @click="tradeModel.mainType = 'qc'"
                >{{ currCoinLangFun("all_warehouse", "exchange") }}</el-button
              >
            </div>
          </div>
          <div class="tab-cont-sub flex-box fit-background-di el-btn">
            <div class="cont-item">
              <el-button
                :type="tradeModel.subType == 'bc' ? 'primary' : ''"
                @click="tradeModel.subType = 'bc'"
                >{{ currCoinLangFun("bc_text", "move_contract") }}</el-button
              >
            </div>
            <div class="cont-item">
              <el-button
                :type="tradeModel.subType == 'fc' ? 'primary' : ''"
                @click="tradeModel.subType = 'fc'"
                >{{ currCoinLangFun("fc_text", "move_contract") }}</el-button
              >
            </div>
          </div>
        </div>
        <div class="change-title fit-tc-primary">
          {{ currCoinLangFun("dqggbs_title", "move_contract") }}
        </div>
        <div class="change-leverage">
          <el-input-number
            v-model="tradeModel.num"
            :min="tradeModel.min"
            :max="tradeModel.max"
          ></el-input-number>
          <el-slider
            class="cont-slider"
            v-model="tradeModel.num"
            :show-tooltip="false"
            :marks="modalSliderMarks"
            :min="5"
            :max="this.tradeModel.max"
          ></el-slider>
        </div>
        <!-- <div class="change-max-money fit-tc-tip">
          最高可开
          <span class="fit-tc-primary">100BTC</span>
        </div>-->
        <div
          class="change-max-tip fit-warn"
          v-if="tradeModel.num == tradeModel.max"
        >
          {{ currCoinLangFun("cw_model_tip", "move_contract") }}
        </div>
        <div class="btn-box" style="margin-top: 30px">
          <el-button @click="tradeModel.dialog = false">
            {{ currCoinLangFun("cancel", "all") }}
          </el-button>
          <el-button
            type="primary"
            :loading="tradeModel.loading"
            @click="setTradeModelFun"
            >{{ currCoinLangFun("confirm_adjustment") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 合约设置 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('hysz_text')"
      :visible.sync="tradeSetting.dialog"
      width="480px"
      custom-class="general-dialog trade-setting-dialog"
    >
      <div class="trade-setting-box">
        <div class="flex-box unit-box">
          <div class="unit-title fit-tc-primary">
            {{ currCoinLangFun("jjdw_text") }}
          </div>
          <div class="unit-tabs flex-box">
            <div
              class="tabs-item fit-background-di fit-tc-tertiary"
              :class="{ active: tradeSetting.type == 'coin' }"
              @click="setTradeSettingFun('coin', currencyType)"
            >
              {{ currencyType }}
            </div>
            <div
              class="tabs-item fit-background-di fit-tc-tertiary"
              :class="{ active: tradeSetting.type == 'base' }"
              @click="setTradeSettingFun('base', priceType)"
            >
              {{ priceType }}
            </div>
          </div>
        </div>
        <!-- <div class="flex-box confirm-box">
          <div class="confirm-title fit-tc-primary">下单二次确认</div>
          <div class="confirm-switch flex-box">
            <el-switch v-model="tradeSetting.confirm"></el-switch>
          </div>
        </div>-->
        <div class="btn-box">
          <el-button @click="tradeSetting.dialog = false">
            {{ currCoinLangFun("cancel", "all") }}
          </el-button>
          <el-button
            type="primary"
            :loading="tradeSetting.loading"
            @click="saveTradeSettingFun"
            >{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 确认下单 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('confirm_order', 'all')"
      :visible.sync="tradeForm.dialog"
      width="600px"
      custom-class="general-dialog trade-place-dialog"
    >
      <div class="trade-place-box fit-tc-primary">
        <div class="flex-box info-cont fit-tc-border-color">
          <div
            class="type"
            :class="{
              'fit-tc-rise':
                tradeForm.placeType == '1' || tradeForm.placeType == '4',
              'fit-tc-fall':
                tradeForm.placeType == '2' || tradeForm.placeType == '3',
            }"
          >
            {{
              tradeShippingType == "kc"
                ? tradeForm.placeType == "1"
                  ? currCoinLangFun("kaiduo_text", "move_contract")
                  : currCoinLangFun("kaiKong_text", "move_contract")
                : tradeForm.placeType == "4"
                ? currCoinLangFun("pingkong_text", "move_contract")
                : currCoinLangFun("pingduo_text", "move_contract")
            }}
          </div>
          <div class="line-item"></div>
          <div class="coin-box flex-box">
            <img :src="exchangeCoinData.coin_avatar" />
            <span>{{ currencyType }}{{ priceType }}</span>
          </div>
        </div>
        <div
          class="box-cont fit-tc-border-color"
          v-show="tradeEntrustType == 'ptwt'"
        >
          <div class="flex-box">
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("text_wtjg", "move_transaction") }}
              </div>
              <div class="text">{{ tradeForm.price }}</div>
            </div>
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("text_wtsl", "move_transaction") }}
              </div>
              <div class="text">
                {{ tradeForm.num }}
                {{
                  (tradeForm.num + "").indexOf("%") != -1
                    ? ""
                    : contractUnit == "coin"
                    ? currencyType
                    : priceType
                }}
              </div>
            </div>
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("jiazhi_text") }}
              </div>
              <div class="text">{{ placeMoneyText }} {{ priceType }}</div>
            </div>
          </div>
          <div class="cont-zyzs" v-if="tradeForm.isZyzs">
            <span class="fit-tc-tip">
              {{ currCoinLangFun("orders_table_take_profit_price") }}
            </span>
            <span>{{ tradeForm.zyPrice }} /</span>
            <span class="fit-tc-tip">
              {{ currCoinLangFun("orders_table_stop_loss_price") }}
            </span>
            <span>{{ tradeForm.zsPrice }}</span>
          </div>
        </div>
        <div
          class="box-cont fit-tc-border-color"
          v-show="tradeEntrustType == 'jhwt'"
        >
          <div class="cont-text fit-tc-primary">
            <span v-if="contractUnit == 'coin'">
              {{
                replaceCoinLangFun(
                  currCoinLangFun("zxcjjddzdjg_text", "move_contract"),
                  [
                    { key: "$[triggerPrice]", value: tradeForm.triggerPrice },
                    { key: "$[priceType]", value: priceType },
                    { key: "$[price]", value: tradeForm.price },
                    { key: "$[num]", value: tradeForm.num },
                    { key: "$[currencyType]", value: currencyType },
                    { key: "$[totolPrice]", value: tradeForm.totolPrice },
                  ]
                )
              }}
            </span>
            <span v-else>
              {{
                replaceCoinLangFun(
                  currCoinLangFun("zxcjjddzdjg_text", "move_contract"),
                  [
                    { key: "$[triggerPrice]", value: tradeForm.triggerPrice },
                    { key: "$[priceType]", value: priceType },
                    { key: "$[price]", value: tradeForm.price },
                    { key: "$[num]", value: tradeForm.buyFullNum },
                    { key: "$[currencyType]", value: currencyType },
                    { key: "$[totolPrice]", value: tradeForm.num },
                  ]
                )
              }}
            </span>
            <!--
            当最新成交价达到
            <span>{{ tradeForm.triggerPrice }} {{ priceType }}</span> 系统将按照
            <span>{{ tradeForm.price }} {{ priceType }}</span> 价格买入
            <span v-if="contractUnit == 'coin'"
              >{{ tradeForm.num }} {{ currencyType }}（{{
                tradeForm.totolPrice
              }}
              {{ priceType }}）</span
            >
            <span v-else
              >{{ tradeForm.buyFullNum }} {{ currencyType }}（{{
                tradeForm.num
              }}
              {{ priceType }}）</span
            >-->
          </div>
          <div class="cont-tip fit-tc-tip">
            {{ currCoinLangFun("jhwt_explain", "entrust") }}
          </div>
        </div>

        <div class="btn-box">
          <el-button @click="tradeForm.dialog = false">
            {{ currCoinLangFun("cancel", "all") }}
          </el-button>
          <el-button
            type="primary"
            :loading="tradeForm.loading"
            @click="tradeConfirmPlaceFun"
            >{{ currCoinLangFun("confirm_order", "all") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 保证金 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('text_tzbzj', 'move_contract')"
      :visible.sync="marginMoneyData.dialog"
      width="480px"
      custom-class="margin-money-dialog"
    >
      <div class="change-margin_main">
        <div class="tab-box flex-box fit-tc-tip">
          <div
            class="tab-item flex-box"
            @click="setMarginMoneyDataFun('add')"
            :class="{ 'fit-tc-primary active': marginMoneyData.type == 'add' }"
          >
            <img src="@/assets/svg/icon-CashAdd.svg" />
            {{ currCoinLangFun("zjbzj_nav", "move_contract") }}
          </div>
          <div
            class="tab-item flex-box"
            @click="setMarginMoneyDataFun('sub')"
            :class="{ 'fit-tc-primary active': marginMoneyData.type == 'sub' }"
          >
            <img src="@/assets/svg/icon-CashCut.svg" />
            {{ currCoinLangFun("jsbzj_text", "move_contract") }}
          </div>
        </div>
        <div class="input-box">
          <el-input
            :placeholder="currCoinLangFun('qsrsl_tips', 'popup_tips')"
            v-model="marginMoneyData.num"
            size="small"
          >
            <div slot="suffix" class="flex-box">
              <span class="fit-tc-primary">
                {{ marginMoneyData.curr_money_symbol }}
              </span>
              <span class="box-line"></span>
              <span
                class="fit-tc-primary active-text"
                @click="marginMoneyData.num = marginAvailable"
                >All</span
              >
            </div>
          </el-input>
        </div>
        <div class="money_ky fit-tc-tip">
          {{ currCoinLangFun("entrust_available") }} {{ marginAvailable }}
          {{ marginMoneyData.curr_money_symbol }}
        </div>
        <div class="change-margin_list">
          <div class="list-item flex-box">
            <span class="fit-tc-primary" style="font-weight: 700">
              {{ marginMoneyData.symbol }}
            </span>
            <span class="fit-tc-tip">
              {{
                replaceCoinLangFun(
                  currCoinLangFun("zybhj_num_text", "move_contract"),
                  [
                    {
                      key: "$[num]",
                      value: marginMoneyData.curr_money_symbol,
                    },
                  ]
                )
              }}
            </span>
            <span class="fit-tc-tip">
              {{ currCoinLangFun("blowing_up_price", "exchange") }}
            </span>
          </div>
          <div class="list-item flex-box">
            <span class="fit-tc-tip">
              {{ currCoinLangFun("bzj_dq", "move_contract") }}
            </span>
            <span class="fit-tc-primary">{{ marginMoneyData.curr_money }}</span>
            <span class="fit-tc-primary">{{ marginMoneyData.curr_price }}</span>
          </div>
          <div
            class="list-item flex-box"
            :class="{
              'fit-tc-rise': marginMoneyData.type == 'add',
              'fit-tc-fall': marginMoneyData.type != 'add',
            }"
          >
            <span class="fit-tc-tip">
              {{
                marginMoneyData.type == "add"
                  ? currCoinLangFun("zjh_text", "move_contract")
                  : currCoinLangFun("jsh_text", "move_contract")
              }}
            </span>
            <span
              :class="{
                'fit-tc-rise': marginMoneyData.type == 'add',
                'fit-tc-fall': marginMoneyData.type != 'add',
              }"
              >{{ marginMoney.num }}</span
            >
            <span
              :class="{
                'fit-tc-rise': marginMoneyData.type == 'add',
                'fit-tc-fall': marginMoneyData.type != 'add',
              }"
              >{{ marginMoney.price }}</span
            >
          </div>
        </div>
        <el-button
          type="primary"
          :disabled="!marginMoneyData.num"
          @click="updateMarginFun"
        >
          {{
            marginMoneyData.type == "add"
              ? currCoinLangFun("zjbzj_nav", "move_contract")
              : currCoinLangFun("jsbzj_text", "move_contract")
          }}
        </el-button>
      </div>
    </el-dialog>
    <!-- 闪电平仓 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('sdpc_text', 'move_contract')"
      :visible.sync="orderLightningData.dialog"
      width="600px"
      custom-class="general-dialog trade-place-dialog"
    >
      <div class="trade-place-box fit-tc-primary">
        <div class="flex-box info-cont fit-tc-border-color">
          <div>
            <span
              :class="{
                'fit-tc-rise-bg': orderLightningData.direction == 1,
                'fit-tc-fall-bg': orderLightningData.direction != 1,
              }"
              style="
                margin-right: 8px;
                color: #fff;
                padding: 2px;
                font-size: 12px;
                display: inline-block;
                border-radius: 2px;
              "
            >
              {{
                orderLightningData.direction == 2
                  ? currCoinLangFun("k_text", "move_contract")
                  : currCoinLangFun("d_text", "move_contract")
              }}
            </span>
            <span
              class="fit-tc-primary"
              style="font-size: 16px; font-weight: 700; line-height: 24px"
              >{{ orderLightningData.symbol }}</span
            >
          </div>
          <div class="line-item"></div>
          <div
            class="fit-tc-primary"
            style="font-size: 16px; font-weight: 700; line-height: 24px"
          >
            {{
              this.orderLightningData.pattern == 1
                ? currCoinLangFun("zc_text", "move_contract")
                : currCoinLangFun("all_warehouse", "exchange")
            }}/{{
              this.orderLightningData.pattern_type == 1
                ? currCoinLangFun("bc_text", "move_contract")
                : currCoinLangFun("fc_text", "move_contract")
            }}
            {{ this.orderLightningData.leverage }}
          </div>
          <div class="line-item"></div>
          <div
            class="type"
            :class="{
              'fit-tc-rise': orderLightningData.direction == 2,
              'fit-tc-fall': orderLightningData.direction != 2,
            }"
          >
            {{
              orderLightningData.direction == "1"
                ? currCoinLangFun("pingduo_text", "move_contract")
                : currCoinLangFun("pingkong_text", "move_contract")
            }}
          </div>
        </div>
        <div
          class="box-cont fit-tc-border-color"
          style="font-size: 16px; font-weight: 700; line-height: 24px"
        >
          <span style="font-weight: 500">
            {{ currCoinLangFun("kpcsl_text", "move_contract") }}
          </span>
          {{ orderLightningData.balance
          }}{{ orderLightningData.balance_symbol }}
        </div>

        <div class="btn-box">
          <el-button @click="orderLightningData.dialog = false">
            {{ currCoinLangFun("cancel", "all") }}
          </el-button>
          <el-button
            type="primary"
            :loading="orderLightningData.loading"
            @click="setLightningFun"
            >{{ currCoinLangFun("sdpc_text", "move_contract") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 反向开仓 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('fxkc_text', 'move_contract')"
      :visible.sync="reversePositionsData.dialog"
      width="600px"
      custom-class="general-dialog trade-place-dialog"
    >
      <div class="trade-place-box fit-tc-primary">
        <div class="flex-box info-cont fit-tc-border-color">
          <div
            class="type"
            :class="{
              'fit-tc-rise': reversePositionsData.direction == 2,
              'fit-tc-fall': reversePositionsData.direction == 1,
            }"
          >
            {{
              reversePositionsData.direction == 2
                ? currCoinLangFun("kaiduo_text", "move_contract")
                : currCoinLangFun("kaiKong_text", "move_contract")
            }}
          </div>
          <div class="line-item"></div>
          <div class="coin-box flex-box">
            <img :src="reversePositionsData.avatar" />
            <span>{{ reversePositionsData.symbol }}</span>
          </div>
        </div>
        <div class="box-cont fit-tc-border-color">
          <div class="flex-box">
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("text_wtjg", "move_transaction") }}
              </div>
              <div class="text">
                {{ currCoinLangFun("duisshoujia_text", "move_contract") }}
              </div>
            </div>
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("text_wtsl", "move_transaction") }}
              </div>
              <div class="text">
                {{ reversePositionsData.balance }}
                {{ reversePositionsData.balance_symbol }}
              </div>
            </div>
            <div class="cont-item">
              <div class="tip fit-tc-tip">
                {{ currCoinLangFun("jiazhi_text") }}
              </div>
              <div class="text">
                {{
                  toNorounded(
                    Number(reversePositionsData.avg_price).myMul(
                      reversePositionsData.balance
                    ),
                    2
                  )
                }}
                {{ priceType }}
              </div>
            </div>
          </div>
        </div>
        <div class="box-cont fit-tc-border-color">
          <p style="color: #e0443f; line-height: 16px; font-size: 12px">
            {{ currCoinLangFun("fxkczzxsx_text", "move_contract") }}
          </p>
          <p
            style="
              color: #e0443f;
              line-height: 16px;
              font-size: 12px;
              padding-top: 4px;
            "
          >
            {{ currCoinLangFun("qqbyecz_text", "move_contract") }}
          </p>
        </div>
        <div class="btn-box">
          <el-button @click="reversePositionsData.dialog = false">{{
            currCoinLangFun("cancel", "all")
          }}</el-button>
          <el-button
            type="primary"
            :loading="reversePositionsData.loading"
            @click="setReversePositionsFun"
            >{{ currCoinLangFun("confirm_order", "all") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 止盈止损 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('entrust_zyzs')"
      :visible.sync="checkFullStopData.dialog"
      width="580px"
      custom-class="order-zyzs-dialog"
    >
      <div class="order-zyzs-box">
        <div class="check-data fit-background-di">
          <div class="flex-box" style="justify-content: space-between">
            <div class="flex-box data-info">
              <!-- fit-tc-fall -->
              <div :class="checkFullStopData.bgClassName">
                {{ checkFullStopData.cwType }}
              </div>
              <img :src="checkFullStopData.avatar" />
              <div class="text fit-tc-primary">
                {{ checkFullStopData.symbol }}
              </div>
              <div class="box-line"></div>
              <div class="text fit-tc-primary">
                {{ checkFullStopData.leverage }}
              </div>
            </div>
            <div class="data-sy">
              <span class="fit-tc-tip">
                {{ currCoinLangFun("syl_text", "move_contract") }}
              </span>
              <span class="num" :class="checkFullStopData.sy_className">
                {{ checkFullStopData.stopSyl }}
              </span>
            </div>
          </div>
          <div class="data-preic flex-box">
            <div class="data-item flex-box">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("kcjj_text", "move_contract") }}
              </div>
              <div class="item-valur fit-tc-primary">
                {{ checkFullStopData.avg_price }}
              </div>
            </div>
            <div class="data-item flex-box">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("table_coin_close", "exchange") }}
              </div>
              <div class="item-valur fit-tc-primary">
                {{ checkFullStopData.bjjg }}
              </div>
            </div>
            <div class="data-item flex-box">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("kp_text", "move_contract") }}
              </div>
              <div class="item-valur fit-tc-primary">
                {{ checkFullStopData.balance }}
                {{ checkFullStopData.balance_symbol }}
              </div>
            </div>
          </div>
        </div>
        <div class="tab-box fit-background-di">
          <div class="tab-posi flex-box">
            <div class="tab-btn" @click="checkFullStopData.tabValue = 'zy'">
              {{ currCoinLangFun("zy_nav", "move_contract") }}
            </div>
            <div class="tab-btn" @click="checkFullStopData.tabValue = 'zs'">
              {{ currCoinLangFun("zs_nav", "move_contract") }}
            </div>
            <div
              class="tab-active active-tab-bg"
              :class="{
                'fit-tc-rise': checkFullStopData.tabValue == 'zy',
                'fit-tc-fall': checkFullStopData.tabValue != 'zy',
              }"
              :style="{
                left: checkFullStopData.tabValue == 'zy' ? '0' : '50%',
              }"
            >
              {{
                checkFullStopData.tabValue == "zy"
                  ? currCoinLangFun("zy_nav", "move_contract")
                  : currCoinLangFun("zs_nav", "move_contract")
              }}
            </div>
          </div>
        </div>
        <div class="form-box">
          <div class="input-box flex-box">
            <div class="input-item">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("orders_table_trigger") }}
              </div>
              <el-input
                size="medium"
                v-model="checkFullStopData.trigger"
                @input="
                  (e) =>
                    checkFullStopInputChengFun(
                      e,
                      'trigger',
                      exchangeCoinData.base_coin_scale
                    )
                "
              >
                <div slot="suffix">
                  {{
                    contractType == "ubw"
                      ? checkFullStopData.principal_symbol
                      : checkFullStopData.base_type
                  }}
                </div>
              </el-input>
            </div>
            <div class="input-item">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("syl_text", "move_contract") }}
              </div>
              <el-input
                size="medium"
                v-model="checkFullStopData.yield"
                @input="(e) => checkFullStopInputChengFun(e, 'yield', 2)"
              >
                <div slot="suffix">%</div>
              </el-input>
            </div>
          </div>
          <div class="input-tip">
            <span
              class="fit-tc-fall"
              v-if="checkFullStopTip.triggerType == 'tip'"
              >{{ checkFullStopTip.triggerTip }}</span
            >
            <span
              v-if="checkFullStopTip.triggerType == 'text'"
              class="fit-tc-tip"
              >{{ currCoinLangFun("zyzs_jzxcjj_text", "move_contract") }}</span
            >
            <span
              v-if="checkFullStopTip.triggerType == 'text'"
              :class="checkFullStopTip.triggerClass"
              >{{ checkFullStopTip.triggerTip }}</span
            >
          </div>
          <div class="input-box flex-box">
            <div class="input-item">
              <div class="item-label fit-tc-tip">
                {{ currCoinLangFun("text_wtjg", "move_transaction") }}
              </div>
              <el-input
                size="medium"
                v-model="checkFullStopData.entrust"
                @input="
                  (e) =>
                    checkFullStopInputChengFun(
                      e,
                      'entrust',
                      exchangeCoinData.base_coin_scale
                    )
                "
                @focus="checkFullStopfocusFun"
              >
                <div slot="suffix">
                  {{
                    contractType == "ubw"
                      ? checkFullStopData.principal_symbol
                      : checkFullStopData.base_type
                  }}
                </div>
              </el-input>
            </div>
            <div class="input-btn">
              <el-button
                class="my-button-default fit-tc-tip"
                @click="checkFullStopData.competitors = true"
              >
                {{ currCoinLangFun("duisshoujia_text", "move_contract") }}
              </el-button>
            </div>
          </div>
          <div class="input-box flex-box" style="margin-top: 10px">
            <div class="input-item input-wtjg">
              <div class="item-label fit-tc-tip">
                {{
                  checkFullStopData.tabValue == "zy"
                    ? currCoinLangFun("zyb_text", "move_contract")
                    : currCoinLangFun("zsb_text", "move_contract")
                }}
              </div>
              <el-input
                size="medium"
                v-model="checkFullStopData.surplus"
                @input="
                  (e) =>
                    checkFullStopInputChengFun(
                      e,
                      'surplus',
                      exchangeCoinData.coin_coin_scale
                    )
                "
              >
                <div slot="suffix">
                  <span>{{ checkFullStopData.balance_symbol }}</span>
                  <span class="box-line"></span>
                  <span
                    class="btn"
                    @click="
                      checkFullStopData.surplus = toNorounded(
                        Number(checkFullStopData.balance).myMul(0.25),
                        exchangeCoinData.coin_coin_scale
                      )
                    "
                    >25%</span
                  >
                  <span
                    class="btn"
                    @click="
                      checkFullStopData.surplus = toNorounded(
                        Number(checkFullStopData.balance).myMul(0.5),
                        exchangeCoinData.coin_coin_scale
                      )
                    "
                    >50%</span
                  >
                  <span
                    class="btn"
                    @click="
                      checkFullStopData.surplus = toNorounded(
                        Number(checkFullStopData.balance).myMul(0.75),
                        exchangeCoinData.coin_coin_scale
                      )
                    "
                    >75%</span
                  >
                  <span
                    class="btn"
                    @click="
                      checkFullStopData.surplus = checkFullStopData.balance
                    "
                    >100%</span
                  >
                </div>
              </el-input>
            </div>
          </div>
          <div class="input-tip">
            <span class="fit-tc-tip" style="padding-right: 4px">
              {{ checkFullStopTip.entrustText }}
            </span>
            <span :class="checkFullStopTip.entrustClass">
              {{ checkFullStopTip.entrustNum }}
              {{ checkFullStopData.principal_symbol }}
            </span>
            <span style="padding-left: 4px" class="fit-tc-tip">
              {{ checkFullStopTip.entrustBl }}
            </span>
          </div>
          <div class="form-tip fit-tc-tip">
            {{
              checkFullStopData.competitors == true
                ? currCoinLangFun("dzxjddzyzsj_text", "move_contract")
                : currCoinLangFun("dzxjddcfj_text", "move_contract")
            }}
          </div>
          <div class="form-btn">
            <el-button
              type="primary"
              :disabled="
                !checkFullStopData.trigger ||
                !checkFullStopData.surplus ||
                !checkFullStopData.entrust ||
                !checkFullStopTip.bool
              "
              @click="setCheckFullStopFun"
              :loading="checkFullStopData.loading"
              >{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
    <contract-details
      ref="contractDetails"
      :contractUnit="contractUnit"
      :orderHistoryData="orderHistoryData"
    ></contract-details>
    <!-- 确认下单 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('confirm_order', 'all')"
      :visible.sync="aKeyUnwindData.dialog"
      width="400px"
      custom-class="general-dialog unwind-dialog"
    >
      <div class="unwind-box fit-tc-primary">
        <div
          class="fit-tc-primary"
          style="line-height: 20px; font-weight: 400; font-size: 14px"
        >
          {{
            orderFilter
              ? currCoinLangFun("qrydsjqbpc_text", "move_contract")
              : currCoinLangFun("qrydsljqpdqhycw_text", "move_contract")
          }}
        </div>
        <div class="btn-box">
          <el-button @click="aKeyUnwindData.dialog = false">
            {{ currCoinLangFun("cancel", "all") }}
          </el-button>
          <el-button
            type="primary"
            :loading="aKeyUnwindData.loading"
            @click="aKeyUnwindFun"
            >{{ currCoinLangFun("text_qr", "popup_tips") }}</el-button
          >
        </div>
      </div>
    </el-dialog>
    <!-- 资金划转 -->
    <fund-transfer
      v-if="isTradeFundsDialog"
      :transferDialog="isTradeFundsDialog"
      :closeDialog="transCloseDialogFun.bind(this)"
      :targerWalletKey="tradeDefaultAccount"
    ></fund-transfer>
  </div>
</template>

<script>
import contract from "./contract";
import $ from "jquery";
import elementResizeDetectorMaker from "element-resize-detector";
import {
  numberFilterFun,
  inputNumberLinmitFun,
  toNorounded,
  toThousands,
} from "@/util/util";
import fundTransfer from "@/components/wallet/fund-transfer.vue";
import contractDetails from "@/components/full/contract-details.vue";
import {
  getCounterpartyDataApi,
  getCurrCoinMoneyApi,
  contractPlaceOrderApi,
  getContractPositionsApi,
  contractUpdatePositionsApi,
  contractUpdateMarginApi,
  getContractOrderDataApi,
  getOrdersCancellationsApi,
  getSymbolNewDataApi,
  contractaKeyUnwindApi,
  getMqttInitDataApi,
  getFundingRate,
  getUbwMaintenanceMargin,
  getBbwMaintenanceMargin,
} from "@/api/fullScreen";
import { mapGetters, mapMutations } from "vuex";
import { dateFormat } from "@/util/date";
import mqtt from "@/mixins/mqtt";

export default {
  mixins: [contract, mqtt],
  components: { fundTransfer, contractDetails },
  data() {
    return {
      currCoinPricePrecision: 8,
      timerInit: false,
      currencyType: "",
      priceType: "",
      mqttHead: "ubw",
      currCoinMoneyData: {}, //当前合约的实时数据
      coinMoneyData: {
        closeData: {},
        riseFallData: {},
      }, //处理后的合约数据
      exchangeCoinData: {
        base_coin_scale: 8,
        coin_coin_scale: 8,
      }, //交易对信息
      myMoneyData: {}, //钱包信息
      /* 合约类型 markets*/
      isMarketsSearch: false,
      marketsSearchValue: "",
      marketsTabs: "ubw",
      marketsObj: {
        zx: [],
        ubw: [],
        bbw: [],
      },
      throttle: false,
      /* 合约信息 ticker*/
      tickerStyle: { width: "200px" },
      // 资金划转
      isTradeFundsDialog: false,
      tradeDefaultAccount: "contract", //默认账户
      /* 深度 */
      depthsType: "all",
      depthsHeight: "",
      depthsBuy: [], //买
      depthsSell: [], //卖
      depthsConversion: 1, //换算值
      /* 交易量 */
      dealsBazaarData: [], //交易量表格数据

      /* 买卖 */
      tradeForm: {
        dialog: false,
        loading: false,

        placeType: "1", //买卖类型  1=开仓-开多  2=开仓-开空 3=平仓-平多 4=平仓-平空

        price: "", //价格
        num: "", //数量
        buyFullNum: 0, //实际买入金额或币种数量
        sellFullNum: 0, //实际卖出金额或币种数量
        isZyzs: false, //是否开启止盈止损
        zyPrice: "", //止盈价
        zsPrice: "", //止损价
        triggerPrice: "", //触发价
        totolPrice: "", //总价（计划委托用）
        buyType: "maker",
        slider: "0",
        sliderMoney: 0,
        sliderMarks: {
          0: "0%",
          25: "25%",
          50: "50%",
          75: "75%",
          100: "100%",
        },
        oldData: {},
      },

      tradeShippingType: "kc",

      tradeEntrustType: "ptwt",
      //调整仓位模式
      tradeModel: {
        dialog: false,
        loading: false,
        num: 5,
        mainType: "zc",
        subType: "fc",
        min: 5,
        max: 100,
      },
      //合约设置
      tradeSetting: {
        dialog: false,
        loading: false,
        unit: "",
        curr_unit: "",
        confirm: false,
        type: "coin", //币种类型 coin BTC   base USDT
      },
      /* 订单 */
      orderType: "cw",
      orderLoading: false,
      orderAllLoadin: false,
      orderCwData: [], //仓位数据
      orderCwKeyArr: [], //仓位合约数组
      orderTableData: [], //表格数据
      orderFilter: false, //只显示当前合约
      //闪电平仓
      orderLightningData: {
        dialog: false,
        loading: false,
      },
      // 保证金弹窗
      marginMoneyData: {
        loading: false,
        dialog: false,
        type: "add",
        num: "",
        curr_contract_type: 1, //合约类型
        curr_symbol: "BTCUSDT",
        curr_money_symbol: "USDT",
        curr_money: 0, //当前保证金
        curr_price: 0, //当前爆仓价
        curr_positions: 0, //当前仓位
        curr_average: 0, //开仓均价
        cuur_direction: 1, //方向 1多 2空
      },
      //反向开仓弹窗
      reversePositionsData: {
        loading: false,
        dialog: false,
      },
      //止盈止损弹窗
      checkFullStopData: {
        loading: false,
        dialog: false,
        competitors: true,
        tabValue: "zy",
        trigger: "", //触发价
        yield: "", //收益率
        entrust: this.currCoinLangFun("duisshoujia_text", "move_contract"), // 对手价//委托价格
        surplus: "", //止盈比
      },
      //历史委托 详情
      orderHistoryData: {
        dialog: false,

        tableData: [],
      },
      //一键平仓
      aKeyUnwindData: {
        loading: false,
        dialog: false,
      },
      /* k线图 */
      tvWidget: "",
      symbol: "", //当前商品
      datafeed: "", //数据更新
      // 资金费率倒计时
      rateCountdownText: "00:00:00",
      rateCoundDownTimer: null,
    };
  },
  computed: {
    ...mapGetters([
      "themeName",
      "exchangeCode",
      "exchangeNum",
      "contractType",
      "contractUnit",
      "isLogin",
      "language",
      "defaultLang",
      "userInfo",
    ]),
    /* 合约类型 */
    marketsData() {
      if (this.isMarketsSearch) {
        let data = this.marketsObj[this.marketsTabs].filter((item) => {
          if (this.marketsSearchValue) {
            let search = this.marketsSearchValue.toLocaleUpperCase();
            let symbol = item.symbol;
            if ((this.marketsTabs == "zx" || !symbol) && item.symbol_name) {
              symbol = item.symbol_name.replace("/", "");
            }
            if (symbol && symbol.indexOf(search) == -1) {
              return false;
            }
            return true;
          } else {
            return true;
          }
        });
        return data;
      }
      return this.marketsObj[this.marketsTabs];
    },
    //订单表格配置
    orderTable() {
      return this[`order_${this.orderType}`];
    },
    modalSliderMarks() {
      let arr = [this.tradeModel.min];
      let num = this.tradeModel.max / 5;
      for (let index = 1; index <= 5; index++) {
        arr.push(index * num);
      }
      let obj = {};
      arr.forEach((item) => {
        obj[item] = item + "x";
      });
      return obj;
    },
    //当前仓位模式 杠杠倍数
    leverageInfoText() {
      let main =
        this.myMoneyData.pattern == "zc"
          ? this.currCoinLangFun("zc_text", "move_transaction")
          : this.currCoinLangFun("all_warehouse", "exchange"); //"逐仓" : "全仓"
      let sub =
        this.myMoneyData.patternType == "bc"
          ? this.currCoinLangFun("bc_text", "move_transaction")
          : this.currCoinLangFun("fc_text", "move_transaction"); //"并仓" : "分仓"
      let leverage = this.myMoneyData.leverage ? this.myMoneyData.leverage : "";
      return `${main}/${sub} ${leverage}X`;
    },
    //下单时弹窗的价值字段
    placeMoneyText() {
      let price = this.tradeForm.price;
      let num =
        this.tradeForm.placeType == "1" || this.tradeForm.placeType == "4"
          ? this.tradeForm.buyFullNum
          : this.tradeForm.sellFullNum;
      let text = "";
      if (
        this.contractUnit != "coin" &&
        this.tradeForm.num.toString().indexOf("%") == -1
      ) {
        text = this.tradeForm.num;
      } else {
        text = toNorounded(
          Number(price).myMul(num),
          this.exchangeCoinData.base_coin_scale
        );
      }

      return text;
    },
    //最小交易数量
    minNumText() {
      if (this.contractUnit == "coin") {
        return this.exchangeCoinData.min_share - 0;
      }
      let price = this.tradeForm.price
        ? this.tradeForm.price
        : this.coinMoneyData.close;
      if (!price) {
        return "";
      }
      if (this.contractType == "ubw") {
        let num = toNorounded(
          Number(this.exchangeCoinData.min_share).myMul(price),
          2
        );
        num = num.toString();
        if (num && num.indexOf(".") != -1) {
          let length = num.split(".")[1].length;
          let min = 1;
          for (let index = 0; index < length; index++) {
            min = min / 10;
          }
          num = Number(num).myAdd(min);
        }
        return num;
      }
      return "--";
    },
    //最大可交易数量
    maxNumText() {
      if (!this.isLogin) {
        return {
          buy: 0, //展示
          sell: 0, //展示
          actualBuy: 0, //实际
          actualSell: 0, //实际
        };
      }
      let price = this.tradeForm.price
        ? this.tradeForm.price
        : this.coinMoneyData.close;
      let max_buy_money = 0;
      let max_sell_money = 0;
      if (this.tradeShippingType == "kc") {
        max_buy_money = this.myMoneyData.kc_max_money;
        max_sell_money = this.myMoneyData.kc_max_money;
      } else {
        max_buy_money = this.myMoneyData.pc_pk_max_money;
        max_sell_money = this.myMoneyData.pc_pd_max_money;
      }
      if (!price) {
        return {
          buy: 0,
          sell: 0,
          actualBuy: 0,
          actualSell: 0,
        };
      }
      let maxBuy = 0;
      let maxSell = 0;
      if (this.contractType == "ubw") {
        if (this.tradeShippingType == "kc") {
          maxBuy = toNorounded(
            Number(max_buy_money).myDiv(price),
            this.exchangeCoinData.coin_coin_scale
          );
          maxSell = toNorounded(
            Number(max_sell_money).myDiv(price),
            this.exchangeCoinData.coin_coin_scale
          );
        } else {
          maxBuy = toNorounded(
            max_buy_money,
            this.exchangeCoinData.coin_coin_scale
          );
          maxSell = toNorounded(
            max_sell_money,
            this.exchangeCoinData.coin_coin_scale
          );
        }
      } else {
        maxBuy = toNorounded(
          max_buy_money,
          this.exchangeCoinData.coin_coin_scale
        );
        maxSell = toNorounded(
          max_sell_money,
          this.exchangeCoinData.coin_coin_scale
        );
      }
      if (this.contractUnit == "coin") {
        return {
          buy: maxBuy,
          sell: maxSell,
          actualBuy: maxBuy,
          actualSell: maxSell,
        };
      } else {
        return {
          buy: toNorounded(Number(this.coinMoneyData.close).myMul(maxBuy), 2),
          sell: toNorounded(Number(this.coinMoneyData.close).myMul(maxSell), 2),
          actualBuy: maxBuy,
          actualSell: maxSell,
        };
      }
    },
    //普通委托 买入 卖出数量显示值
    ptwtNumText() {
      if (this.tradeForm.slider <= 0 || !this.isLogin) {
        return {
          buy: 0,
          sell: 0,
        };
      }
      let price = this.tradeForm.price
        ? this.tradeForm.price
        : this.coinMoneyData.close;
      let max_buy_money = 0;
      let max_sell_money = 0;
      if (this.tradeShippingType == "kc") {
        max_buy_money = this.myMoneyData.kc_max_money;
        max_sell_money = this.myMoneyData.kc_max_money;
      } else {
        max_buy_money = this.myMoneyData.pc_pk_max_money;
        max_sell_money = this.myMoneyData.pc_pd_max_money;
      }
      console.log(price, max_buy_money, max_sell_money);
      if (!price) {
        return {
          buy: 0,
          sell: 0,
        };
      }
      //最大币数
      let maxBuy = 0;
      let maxSell = 0;
      if (this.contractType == "ubw") {
        if (this.tradeShippingType == "kc") {
          //开仓
          maxBuy = toNorounded(
            Number(max_buy_money).myDiv(price),
            this.exchangeCoinData.coin_coin_scale
          );
          maxSell = toNorounded(
            Number(max_sell_money).myDiv(price),
            this.exchangeCoinData.coin_coin_scale
          );
        } else {
          //平仓
          maxBuy = toNorounded(
            max_buy_money,
            this.exchangeCoinData.coin_coin_scale
          );
          maxSell = toNorounded(
            max_sell_money,
            this.exchangeCoinData.coin_coin_scale
          );
        }
      } else {
        maxBuy = toNorounded(
          max_buy_money,
          this.exchangeCoinData.coin_coin_scale
        );
        maxSell = toNorounded(
          max_sell_money,
          this.exchangeCoinData.coin_coin_scale
        );
      }
      if (this.contractUnit == "coin") {
        return {
          buy: toNorounded(
            Number(maxBuy).myMul(this.tradeForm.slider / 100),
            this.exchangeCoinData.coin_coin_scale
          ),
          sell: toNorounded(
            Number(maxSell).myMul(this.tradeForm.slider / 100),
            this.exchangeCoinData.coin_coin_scale
          ),
        };
      }
      return {
        buy: toNorounded(
          Number(maxBuy)
            .myMul(price)
            .myMul(this.tradeForm.slider / 100),
          2
        ),
        sell: toNorounded(
          Number(maxSell)
            .myMul(price)
            .myMul(this.tradeForm.slider / 100),
          2
        ),
      };
    },
    //合约资产
    contractAssets() {
      //持仓保证金
      let ccbzj = 0;
      //冻结保证金
      let djbzj =
        this.contractType == "ubw"
          ? this.myMoneyData.hyBaseFrozenBalance
          : this.myMoneyData.hyCoinFrozenBalance;
      djbzj = djbzj ? djbzj : 0;
      //可用保证金
      let kybzj =
        this.contractType == "ubw"
          ? this.myMoneyData.hyBaseBalance
          : this.myMoneyData.hyCoinBalance;
      kybzj = kybzj ? kybzj : 0;
      let zcsy = 0; //逐仓收益
      let qcsy = 0; //全仓收益
      let iszc = false; //是否有逐仓
      let isqc = false; //是否有全仓
      let zhqy = 0; //用户权益
      let wcbzj = +this.myMoneyData.wcbzj || 0;
      this.orderCwData.forEach((item) => {
        ccbzj = Number(ccbzj).myAdd(item.principal_amount);
        if (item.sy_num && item.pattern == "1") {
          iszc = true;
          if (this.contractType == "ubw") {
            zcsy = Number(zcsy).myAdd(item.sy_num);
          } else {
            zcsy = Number(zcsy).myAdd(item.sy_num).myDiv(item.avg_price);
          }
        } else if (item.sy_num && item.pattern == "2") {
          isqc = true;
          if (this.contractType == "ubw") {
            qcsy = Number(qcsy).myAdd(item.sy_num);
          } else {
            qcsy = Number(qcsy).myAdd(item.sy_num).myDiv(item.avg_price);
          }
        }
      });
      ccbzj = toNorounded(ccbzj, 4);
      if (!iszc && !isqc) {
        this.tradeModel.mainType == "zc" ? (iszc = true) : (isqc = true);
      }
      if ((iszc && !isqc) || (iszc && isqc)) {
        //只有逐仓 或者 都有
        //可用余额+仓位保证金+未实现盈亏+冻结余额
        zhqy = Number(kybzj).myAdd(ccbzj).myAdd(zcsy).myAdd(djbzj);
      } else if (!iszc && isqc) {
        //只有全仓
        //可用余额+仓位保证金+冻结保证金
        zhqy = Number(kybzj).myAdd(ccbzj).myAdd(djbzj);
      }
      return {
        bzjl: toNorounded(wcbzj > 0 ? (zhqy / wcbzj) * 100 : 0, 4), //保证金率
        wcbzj: toNorounded(wcbzj, 4), // 维持保证金
        ccbzj, //持仓保证金
        djbzj: toNorounded(djbzj, 4), //冻结保证金
        kybzj: toNorounded(kybzj, 4), //可用保证金
        wsxyk: toNorounded(Number(zcsy).myAdd(qcsy), 4), //未实现盈亏
        zhqy: toNorounded(zhqy, 4), //账户权益
      };
    },
    //订单表格数据
    orderData() {
      if (this.orderFilter) {
        return this.orderTableData.filter((item) => {
          if (item.symbol_name == this.symbol) {
            return true;
          }
          return false;
        });
      } else {
        return this.orderTableData;
      }
    },
  },
  watch: {
    language(newVal) {
      this.getKline();
    },
    contractType(value) {
      this.mqttHead = value;
    },
    themeName(newVal) {
      if (newVal == "theme-night") {
        this.tvWidget.addCustomCSSFile("bundles/common_night.css");
        this.tvWidget.applyOverrides({
          "paneProperties.background": "#0d1324",
          "mainSeriesProperties.candleStyle.upColor": "rgb(49, 173, 132)", //涨
          "mainSeriesProperties.candleStyle.downColor": "rgb(184, 75, 59)", //跌
          "mainSeriesProperties.candleStyle.wickUpColor": "rgb(49, 173, 132)",
          "mainSeriesProperties.candleStyle.wickDownColor": "rgb(184, 75, 59)",
          "scalesProperties.lineColor": "#262d38",
          "scalesProperties.textColor": "#688199",
        });
      } else {
        this.tvWidget.addCustomCSSFile("bundles/common_day.css");
        this.tvWidget.applyOverrides({
          "paneProperties.background": "#fff",
          "mainSeriesProperties.candleStyle.upColor": "rgb(49, 173, 132)", //涨
          "mainSeriesProperties.candleStyle.downColor": "rgb(224, 68, 63)", //跌
          "mainSeriesProperties.candleStyle.wickUpColor": "rgb(49, 173, 132)",
          "mainSeriesProperties.candleStyle.wickDownColor": "rgb(224, 68, 63)",
          "scalesProperties.lineColor": "#eff0f2",
          "scalesProperties.textColor": "#7e92a6",
        });
      }
    },
    currCoinMoneyData(newVal, oldVal) {
      if (!this.tradeForm.oldPrice) {
        //设置当前委托价
        this.tradeForm.price = newVal.close;
        this.tradeForm.oldPrice = newVal.close;
      }
      newVal.amountText = numberFilterFun(newVal.amount); //24小时成交量
      if (this.contractType == "bbw") {
        newVal.tradeTurnover = Number(newVal.vol).myMul(this.depthsConversion);
      }
      newVal.turnoverText = numberFilterFun(newVal.tradeTurnover); //24小时成交额
      newVal.highText = numberFilterFun(
        newVal.high,
        true,
        this.currCoinPricePrecision
      ); //24小时最高
      newVal.lowText = numberFilterFun(
        newVal.low,
        true,
        this.currCoinPricePrecision
      ); //24小时最低

      //修改网页标题
      let newPrice = numberFilterFun(
        newVal.close,
        true,
        this.currCoinPricePrecision
      );
      let exchangeText = this.$route.params.type.replace("_", "");
      document.title = `${newPrice} ${exchangeText}  BAIYIEX`;

      //最新成交价
      newVal.closeData = {
        close: numberFilterFun(newVal.close, true, this.currCoinPricePrecision),
        className:
          newVal.close - oldVal.close >= 0 ? "fit-tc-rise" : "fit-tc-fall",
      };
      //24小时涨跌
      let open = newVal.open;
      let close = newVal.close;
      let money = toNorounded(
        Number(close).mySub(open),
        this.currCoinPricePrecision
      );
      let percentage = Number(Number(close).mySub(open)).myDiv(open) * 100;
      percentage = toNorounded(percentage, 2, false) + "%";
      let className = money >= 0 ? "fit-tc-rise" : "fit-tc-fall";
      newVal.riseFallData = {
        money,
        percentage,
        className,
      };
      this.coinMoneyData = newVal;
    },
    tradeShippingType(newVal) {
      if (newVal == "pc" && this.tradeEntrustType == "jhwt") {
        this.tradeEntrustType = "ptwt";
      }
    },
    "tradeForm.slider": function (val) {
      let obj = {
        0: 0,
        20: 1,
        40: 2,
        60: 3,
        80: 4,
        90: 5,
      };
      let arr = [];
      for (let key in obj) {
        if (val >= key) {
          arr.push(obj[key]);
        }
      }
      document
        .querySelectorAll(".futures-trade .cont-slider .el-slider__stop")
        .forEach((item, index) => {
          if (arr.includes(index)) {
            item.classList.add("stop-active");
          } else {
            item.classList.remove("stop-active");
          }
        });
      if (val != 0) {
        this.tradeForm.num = val + "%";
        this.$refs.tradeFormNum.blur();
        let buyFullNum = toNorounded(
          Number(val).myDiv(100).myMul(this.maxNumText.actualBuy),
          this.exchangeCoinData.coin_coin_scale
        );
        let sellFullNum = toNorounded(
          Number(val).myDiv(100).myMul(this.maxNumText.actualSell),
          this.exchangeCoinData.coin_coin_scale
        );
        this.tradeForm.buyFullNum = buyFullNum;
        this.tradeForm.sellFullNum = sellFullNum;
      } else {
        this.tradeForm.num = "";
        this.tradeForm.buyFullNum = 0;
        this.tradeForm.sellFullNum = 0;
      }
    },
    "tradeModel.num": function (val) {
      let obj = {};
      let num = 0;
      for (let key in this.modalSliderMarks) {
        obj[key] = num;
        num++;
      }
      let arr = [];
      for (let key in obj) {
        if (val >= key) {
          arr.push(obj[key]);
        }
      }
      document
        .querySelectorAll(".trade-model-dialog .cont-slider .el-slider__stop")
        .forEach((item, index) => {
          if (arr.includes(index)) {
            item.classList.add("stop-active");
          } else {
            item.classList.remove("stop-active");
          }
        });
    },
    "tradeForm.isZyzs": function (val) {
      if (!val) {
        this.tradeForm.zyPrice = "";
        this.tradeForm.zsPrice = "";
      }
    },
    tradeEntrustType(newVal, oldVal) {
      //处理表单
      this.tradeForm.oldData[oldVal] = {
        price: this.tradeForm.price,
        num: this.tradeForm.num,
        buyFullNum: this.tradeForm.buyFullNum,
        sellFullNum: this.tradeForm.sellFullNum,
      };
      if (oldVal == "jhwt") {
        this.tradeForm.oldData[oldVal].triggerPrice =
          this.tradeForm.triggerPrice;
      }
      if (this.tradeForm.oldData[newVal]) {
        for (let key in this.tradeForm.oldData[newVal]) {
          this.tradeForm[key] = this.tradeForm.oldData[newVal][key];
        }
      } else {
        this.tradeForm.price = this.tradeForm.oldPrice;
        this.tradeForm.num = "";
        this.tradeForm.buyFullNum = 0;
        this.tradeForm.sellFullNum = 0;
      }
      console.log(this.tradeForm);
    },
    "maxNumText.actualBuy": function (val) {
      if (this.tradeForm.slider != 0) {
        this.tradeForm.buyFullNum = toNorounded(
          Number(this.tradeForm.slider).myDiv(100).myMul(val),
          this.exchangeCoinData.coin_coin_scale
        );
      }
    },
    "maxNumText.actualSell": function (val) {
      if (this.tradeForm.slider != 0) {
        this.tradeForm.sellFullNum = toNorounded(
          Number(this.tradeForm.slider).myDiv(100).myMul(val),
          this.exchangeCoinData.coin_coin_scale
        );
      }
    },
    orderType(val) {
      if (val == "cw") {
        this.orderTableData = this.orderCwData;
        this.getPositionsData();
      } else {
        this.getOrderData();
      }
    },
    orderFilter() {
      if (this.orderType != "cw") {
        this.getOrderData();
      }
    },
  },
  mounted() {
    let str = this.$route.params.type;
    this.currencyType = str.split("_")[0];
    this.priceType = str.split("_")[1];
    this.symbol = str.replace("_", "/");
    if (this.priceType == "USDT") {
      this.SET_CONTRACT_TYPE("ubw");
    } else {
      this.SET_CONTRACT_TYPE("bbw");
    }
    if (!this.contractUnit) {
      this.SET_CONTRACT_UNIT(this.tradeSetting.type);
    } else {
      this.tradeSetting.type = this.contractUnit;
    }

    let ticker = elementResizeDetectorMaker();
    ticker.listenTo($(".futures-ticker"), (element) => {
      let tickerWidth = element.offsetWidth;
      let titleWidth =
        document.querySelector(".futures-ticker .coin-title").offsetWidth + 50;
      this.tickerStyle = {
        width: tickerWidth - titleWidth + "px",
      };
    });
    //监听深度高度变化
    let depthTimer = null;
    let depthErd = elementResizeDetectorMaker();
    depthErd.listenTo($(".exchange-futures-content"), (element) => {
      if (depthTimer) {
        clearTimeout(depthTimer);
      }
      depthTimer = setTimeout(() => {
        this.depthsHeight = "";
        setTimeout(() => {
          this.depthsHeight =
            document.querySelector(".futures-depth").offsetHeight;
        }, 100);
      }, 200);
    });

    setTimeout(async () => {
      this.marketsTabs = this.contractType;
      this.mqttHead = this.contractType;
      this.tradeSetting.unit =
        this.tradeSetting.type == "coin" ? this.currencyType : this.priceType;
      this.tradeSetting.curr_unit = this.tradeSetting.unit;

      await Promise.all([
        this.getSymbolNewData("curr"),
        this.getExchangeCoinFun(),
      ]);
      this.getRate();
      this.getMqttInitDataFun();
      this.setMqttFun();
      this.getKline();

      this.getCurrCoinMoneyFun();
      this.getMarketsContractDataFun();
      this.getMarketsOptionalDataFun();
      this.getPositionsData();
    }, 0);
  },
  unmounted() {
    clearTimeout(this.rateCoundDownTimer);
  },
  methods: {
    ...mapMutations(["SET_CONTRACT_TYPE", "SET_CONTRACT_UNIT"]),
    onRateCountdown() {
      const intervalSeconds = 8 * 3600;
      const nowTime = parseInt(new Date().getTime() / 1000);
      const diffTime = nowTime % intervalSeconds;
      const remainder = intervalSeconds - diffTime;
      const h = String(parseInt(remainder / 3600));
      const m = String(parseInt((remainder % 3600) / 60));
      const s = String(remainder % 60);
      this.rateCountdownText = `${h.padStart(2, "0")}:${m.padStart(
        2,
        "0"
      )}:${s.padStart(2, "0")}`;
      if (remainder <= 0) {
        clearTimeout(this.rateCoundDownTimer);
        this.getRate();
        return;
      }
      this.rateCoundDownTimer = setTimeout(this.onRateCountdown, 1000);
    },
    // 获取资金费率
    getRate() {
      getFundingRate(this.symbol).then((res) => {
        this.exchangeCoinData = {
          ...this.exchangeCoinData,
          coinRate: (res.data.data * 100).toFixed(4),
        };
        this.onRateCountdown();
      });
    },
    // 交易量
    tradeMqttFun(data) {
      data.time = dateFormat(new Date(data.time), "hh:mm:ss");
      data.priceText = numberFilterFun(data.price);
      data.amount = numberFilterFun(data.amount);
      data.className = data.direction == "buy" ? "fit-tc-rise" : "fit-tc-fall";
      let arrData = [data, ...this.dealsBazaarData];
      this.dealsBazaarData = arrData.splice(0, 30);
    },
    //初始化信息
    initAccountInfo() {
      if (this.timerInit) {
        clearTimeout(this.timerInit);
      }
      this.timerInit = setTimeout(() => {
        //获取钱包
        this.getCurrCoinMoneyFun();
        //获取仓位
        this.getPositionsData();
        //获取委托列表
        this.getOrderData();
      }, 1000);
    },
    //获取当前交易对最新价格
    getSymbolNewData(type) {
      return new Promise((resolve) => {
        let list = [];
        if (type == "curr") {
          list.push(this.symbol);
        } else {
          list = this.orderCwKeyArr;
        }
        getSymbolNewDataApi(list, this.contractType)
          .then((res) => {
            let data = res.data.data;
            if (type == "curr") {
              //设置当前价格精度
              if (data[this.symbol].close.indexOf(".") != -1) {
                let precision = data[this.symbol].close.split(".")[1];
                if (precision.length > 8) {
                  this.currCoinPricePrecision = 8;
                } else {
                  this.currCoinPricePrecision = precision.length;
                }
              } else {
                this.currCoinPricePrecision = 0;
              }
              this.currCoinMoneyData = {
                ...data[this.symbol],
                symbol: this.symbol,
              };
              if (data[this.symbol].contractSize) {
                this.depthsConversion = Number(data[this.symbol].contractSize);
              }
            } else {
              //处理仓位数据
              for (let key in data) {
                this.updateOrderCwDataFun({
                  ...data[key],
                  symbol: key,
                  symbolName: key,
                });
              }
            }
            resolve();
          })
          .catch(() => {
            resolve();
          });
      });
    },
    //获取交易对信息
    getExchangeCoinFun() {
      return new Promise((resolve) => {
        getCounterpartyDataApi(this.contractType, this.symbol.replace("/", "_"))
          .then((res) => {
            let data = res.data.data;
            console.log("=========交易对信息", data);
            this.exchangeCoinData = data;
            if (this.exchangeCoinData.base_coin_scale === undefined) {
              this.exchangeCoinData.base_coin_scale = 8;
            }
            this.exchangeCoinData.coin_coin_scale =
              this.exchangeCoinData.coin_scale;
            if (this.exchangeCoinData.coin_coin_scale === undefined) {
              this.exchangeCoinData.coin_coin_scale = 8;
            }
            this.tradeModel.max = data.leverage;
            resolve();
          })
          .catch(() => {
            resolve();
          });
      });
    },
    //获取当前钱包信息
    getCurrCoinMoneyFun() {
      if (!this.isLogin) {
        return false;
      }
      getCurrCoinMoneyApi(
        "contract",
        `${this.currencyType}_${this.priceType}`
      ).then((res) => {
        let data = res.data.data;
        if (this.contractType == "ubw") {
          data.kc_max_money = Number(data.hyBaseBalance).myMul(data.leverage); //开仓
        } else {
          data.kc_max_money = Number(data.hyCoinBalance).myMul(data.leverage); //开仓
        }
        data.pc_pk_max_money = 0;
        data.pc_pd_max_money = 0;
        if (data.pattern == "1") {
          this.tradeModel.mainType = "zc";
          data.pattern = "zc";
        } else {
          this.tradeModel.mainType = "qc";
          data.pattern = "qc";
        }
        if (data.patternType == "1") {
          this.tradeModel.subType = "bc";
          data.patternType = "bc";
        } else {
          this.tradeModel.subType = "fc";
          data.patternType = "fc";
        }
        this.tradeModel.num = data.leverage;
        this.myMoneyData = { ...this.myMoneyData, ...data };
        console.log("======钱包", data);
      });

      // 获取维持保证金
      if (this.contractType === "ubw") {
        getUbwMaintenanceMargin().then((res) => {
          this.myMoneyData = { ...this.myMoneyData, wcbzj: res.data.data };
        });
      } else {
        getBbwMaintenanceMargin(this.symbol.replace("/", "_")).then((res) => {
          this.myMoneyData = { ...this.myMoneyData, wcbzj: res.data.data };
        });
      }
    },
    /* mqtt连接 */
    setMqttFun() {
      //行情
      this.initMqtt("all_symbol_detail", (data) => {
        let exchangeData = {
          symbol: data.symbolName,
          close: Number(data.close),
          closeText: numberFilterFun(data.close), //最新成交价
          zdf: data.zdf - 0, //涨跌幅
        };
        if (data.type == "ubw" || data.type == "bbw") {
          //更新合约
          this.marketsObj[data.type] = this.marketsObj[data.type].map(
            (item) => {
              if (item.symbol_name == exchangeData.symbol) {
                item = {
                  ...item,
                  ...exchangeData,
                };
              }
              return item;
            }
          );
          //更新自选
          this.marketsObj.zx = this.marketsObj.zx.map((item) => {
            if (item.symbol_name == exchangeData.symbol) {
              if (data.type == "ubw" && item.contract_type != "1") {
                return item;
              }
              if (data.type == "bbw" && item.contract_type != "2") {
                return item;
              }
              item = {
                ...item,
                ...exchangeData,
              };
            }
            return item;
          });
          //更新仓位数据
          if (
            this.contractType == data.type &&
            this.orderCwKeyArr.includes(data.symbolName)
          ) {
            this.updateOrderCwDataFun(data);
          }
        }
      });
      // 深度
      this.initMqtt(
        `${this.mqttHead}_deptH_${this.currencyType}/${this.priceType}`,
        (data) => {
          this.depthsBuy = data.buyItems;
          this.depthsSell = data.sellItems;
        }
      );
      //更新用户信息
      if (this.isLogin) {
        this.initMqtt(`refresh_${this.userInfo.id}`, (data) => {
          console.log("更新xxx数据", data, this.contractType);
          if (this.contractType == data.type) {
            this.initAccountInfo();
          }
        });
      }
    },
    //获取mqtt连接初始数据
    getMqttInitDataFun() {
      getMqttInitDataApi(
        `deptH_${this.contractType}_deptH_${this.currencyType}/${this.priceType}`
      ).then((res) => {
        let data = res.data.data;
        if (data.buyItems && data.sellItems) {
          this.depthsBuy = data.buyItems;
          this.depthsSell = data.sellItems;
        }
      });
      getMqttInitDataApi(
        `tract_${this.contractType}_trade_${this.currencyType}/${this.priceType}`
      ).then((res) => {
        let data = res.data.data;
        if (data && data.length > 0) {
          data.forEach((item) => {
            this.tradeMqttFun(item);
          });
        }
      });
    },
    /* 合约类型 */
    //行情行点击
    marketsTableRowClickFun(row) {
      let symbol = row.symbol_name.replace("/", "_");
      if (row.contract_type == "1") {
        this.SET_CONTRACT_TYPE("ubw");
      } else {
        this.SET_CONTRACT_TYPE("bbw");
      }
      this.$router.replace({
        path: `/exchange/full-contract/${symbol}`,
      });
    },
    /* 买卖 */

    //设置输入框的值
    tradeInputChengFun(value, key, dec) {
      console.log(value, key, dec);
      this.tradeForm[key] = inputNumberLinmitFun(value, dec);
      if (key == "num") {
        let value = this.tradeForm[key];
        if (this.contractUnit != "coin") {
          value = toNorounded(
            Number(this.tradeForm[key]).myDiv(this.tradeForm.price),
            this.exchangeCoinData.coin_coin_scale
          );
        }
        this.tradeForm.buyFullNum = value;
        this.tradeForm.sellFullNum = value;
      }
    },
    //调整仓位、杠杠
    setTradeModelFun() {
      let data = {
        pattern: this.tradeModel.mainType == "zc" ? 1 : 2, //1 逐仓  2全仓
        patternType: this.tradeModel.subType == "bc" ? 1 : 2, //1并仓 2分仓
        symbol: this.currencyType, //币种 BTC
        type: this.contractType, //合约类型
        cou: this.tradeModel.num, //杠杠倍数
      };
      this.tradeModel.loading = true;
      contractUpdatePositionsApi(data)
        .then((res) => {
          this.tradeModel.loading = false;
          this.tradeModel.dialog = false;
          this.initAccountInfo();
        })
        .catch(() => {
          this.tradeModel.loading = false;
        });
    },
    //合约设置
    saveTradeSettingFun() {
      this.SET_CONTRACT_UNIT(this.tradeSetting.type);
      this.tradeSetting.unit = this.tradeSetting.curr_unit;
      this.tradeForm.num = "";
      this.tradeForm.buyFullNum = 0;
      this.tradeForm.sellFullNum = 0;
      this.tradeSetting.dialog = false;
    },
    //下单
    tradePlaceFunFun(type) {
      if (this.tradeModel.subType == "fc" && type != "1" && type != "2") {
        this.$message.error(
          this.currCoinLangFun("fcmsxqqwcclbpc_tips", "move_contract")
        ); //分仓模式下请前往持仓列表平仓
        return false;
      }
      if (!this.tradeForm.price && this.tradeEntrustType != "sjwt") {
        this.$message.error(this.currCoinLangFun("qsrjg_tips", "popup_tips")); //请输入价格
        return false;
      }
      if (this.tradeForm.num === "") {
        this.$message.error(this.currCoinLangFun("qsrcw_tips", "popup_tips")); //请输入仓位
        return false;
      }
      console.log(this.tradeForm);
      let full = false;
      let currFullNum = 0;
      if (type == "1" || type == "4") {
        currFullNum = this.tradeForm.buyFullNum;
      } else {
        currFullNum = this.tradeForm.sellFullNum;
      }
      if (this.contractUnit == "coin") {
        if (currFullNum < this.minNumText) {
          full = true;
        }
      } else {
        if (this.tradeForm.num < this.minNumText) {
          full = true;
        }
      }
      if (full) {
        this.$message.error(
          `最小 ${this.minNumText} ${this.tradeSetting.unit}`
        );
        return false;
      }
      if (
        this.tradeEntrustType == "ptwt" &&
        this.tradeShippingType == "kc" &&
        this.tradeForm.isZyzs &&
        (this.tradeForm.zyPrice || this.tradeForm.zsPrice)
      ) {
        if (type == "1") {
          //开空
          if (
            Number(this.tradeForm.zyPrice) < Number(this.tradeForm.price) ||
            Number(this.tradeForm.zsPrice) > Number(this.tradeForm.price)
          ) {
            this.$message.error(
              this.currCoinLangFun("zyzsjgszbhl_tips", "move_contract")
            ); //止盈/止损价格设置不合理
            return false;
          }
        } else if (type == "2") {
          console.log(
            this.tradeForm.zyPrice,
            this.tradeForm.zsPrice,
            this.tradeForm.price
          );
          //开多
          if (
            Number(this.tradeForm.zyPrice) > Number(this.tradeForm.price) ||
            Number(this.tradeForm.zsPrice) < Number(this.tradeForm.price)
          ) {
            this.$message.error(
              this.currCoinLangFun("zyzsjgszbhl_tips", "move_contract")
            ); //止盈/止损价格设置不合理
            return false;
          }
        }
      }
      if (this.tradeEntrustType == "jhwt" && !this.tradeForm.triggerPrice) {
        this.$message.error(
          this.currCoinLangFun("qsrcfjg_text", "move_contract")
        ); //请输入触发价格
        return false;
      }
      this.tradeForm.placeType = type;
      if (this.tradeEntrustType == "jhwt") {
        if (this.contractUnit == "coin") {
          this.tradeForm.totolPrice = Number(this.tradeForm.price).myMul(
            this.tradeForm.num
          );
        }
      }
      this.tradeForm.dialog = true;
    },
    //确认下单
    tradeConfirmPlaceFun() {
      let data = {
        exchangeCoinStr: this.symbol, //交易对
        price: this.tradeForm.price, //委托价
        amount:
          this.tradeForm.placeType == "1" || this.tradeForm.placeType == "4"
            ? this.tradeForm.buyFullNum
            : this.tradeForm.sellFullNum, //数量
        //1=开仓-开多  2=开仓-开空 3=平仓-平多 4=平仓-平空
        direction: this.tradeForm.placeType, //方向
        pattern: this.tradeModel.mainType == "zc" ? 1 : 2, //逐仓=1，全仓=2
        patternType: this.tradeModel.subType == "bc" ? 1 : 2, //并仓=1，分仓=2
        contractType: this.contractType == "ubw" ? "1" : "2", //合约类型
      };
      //普通委托
      if (
        this.tradeEntrustType == "ptwt" &&
        this.tradeForm.isZyzs &&
        this.tradeShippingType == "kc"
      ) {
        data.takeProfitPrice = this.tradeForm.zyPrice; //止盈
        data.stopLossPrice = this.tradeForm.zsPrice; //止损
      }
      if (this.tradeEntrustType == "jhwt") {
        data.triggerPrice = this.tradeForm.triggerPrice; //触发
      }
      this.tradeForm.loading = true;
      contractPlaceOrderApi(data, this.tradeEntrustType)
        .then((res) => {
          this.tradeForm.loading = false;
          this.tradeForm.dialog = false;
          console.log(res.data.data);
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.initAccountInfo();
        })
        .catch(() => {
          this.tradeForm.loading = false;
        });
    },
    /* 订单 */
    orderRowStyle({ row }) {
      if (this.orderType == "lswt" && row.zt == "3") {
        return {
          opacity: "0.5",
        };
      }
      return {};
    },
    //设置输入框的值
    orderTableInputChengFun(value, key, index, dec) {
      console.log(value, key, index, dec);
      this.$set(
        this.orderTableData[index],
        key,
        inputNumberLinmitFun(value, dec)
      );
    },
    orderNubHandleCommand(command) {
      let { value, key, index } = command;
      this.$set(this.orderTableData[index], key, value);
    },
    //委托平仓处理
    orderTablePcFun(row) {
      console.log(row);
      if (!row.pcjg) {
        this.$message.error(this.currCoinLangFun("qsrjg_tips", "popup_tips")); //请输入价格
        return false;
      }
      if (!row.pcsl) {
        this.$message.error(this.currCoinLangFun("qsrcw_tips", "popup_tips")); //请输入仓位
        return false;
      }
      let pcsl = row.pcsl;
      if (pcsl.indexOf("%") != -1) {
        let num = pcsl.replace("%", "");
        pcsl = Number(num).myDiv(100).myMul(row.balance);
      }
      let data = {
        exchangeCoinStr: row.symbol_name,
        price: row.pcjg, //委托价
        amount: pcsl, //数量
        // 3=平仓-平多 4=平仓-平空
        direction: row.direction == 1 ? 3 : 4, //方向
        pattern: row.pattern, //逐仓=1，全仓=2
        patternType: row.pattern_type, //并仓=1，分仓=2
        contractType: row.contract_type, //合约类型
        closeLogContractOrderCode: row.order_code, //合约code
      };
      this.orderTableData[row.$index].loading = true;
      contractPlaceOrderApi(data, "ptwt")
        .then((res) => {
          this.orderTableData[row.$index].pcjg = "";
          this.orderTableData[row.$index].pcsl = "";
          this.orderTableData[row.$index].loading = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.initAccountInfo();
        })
        .catch(() => {
          this.orderTableData[row.$index].loading = false;
        });
    },
    //获取仓位数据
    getPositionsData() {
      if (!this.isLogin) {
        return false;
      }
      getContractPositionsApi(this.contractType).then((res) => {
        let data = res.data.data;
        this.orderCwKeyArr = [];
        console.log("=========当前仓位", data);
        let cwObj = {};
        this.orderCwData.forEach((item) => {
          cwObj[item.order_code] = item;
        });
        let pc_pk_max_money = 0; //最大平空
        let pc_pd_max_money = 0; //最大平多
        let currSymbol = "";
        this.orderCwData = data.map((item, index) => {
          item.$index = index;
          item.avg_price = item.avg_price - 0; //均价
          item.principalAmount = numberFilterFun(
            toNorounded(item.principal_amount, 4)
          ); //保证金
          if (item.night_amount) {
            item.nightAmount = numberFilterFun(
              toNorounded(item.night_amount, 8)
            ); //持仓费
          } else {
            item.nightAmount = 0;
          }

          if (this.contractType == "bbw") {
            item.principalAmount =
              item.principalAmount + " " + item.principal_symbol;
            item.nightAmount = item.nightAmount + " " + item.principal_symbol;
          }
          item.balance = item.balance - 0; //可平仓位
          item.balanceText = `${Number(item.balance).myAdd(
            item.frozen_balance
          )} | ${item.balance} ${item.balance_symbol}`;
          item.forcePrice = numberFilterFun(item.forcePrice); //强平
          item.cwMain = this.currCoinLangFun("all_warehouse", "exchange"); //全仓
          if (item.pattern == 1) {
            item.cwMain = this.currCoinLangFun("zc_text", "move_transaction"); //逐仓
          }
          item.cwSub = this.currCoinLangFun("fc_text", "move_contract"); //分仓
          if (item.pattern_type == 1) {
            item.cwSub = this.currCoinLangFun("bc_text", "move_contract"); //并仓
          }
          item.symbol = item.symbol_name.replace("/", "");
          item.className = item.direction == 2 ? "fit-tc-fall" : "fit-tc-rise";
          item.bgClassName =
            item.direction == 2 ? "fit-tc-fall-bg" : "fit-tc-rise-bg";
          item.cwType =
            item.direction == 2
              ? this.currCoinLangFun("k_text", "move_contract")
              : this.currCoinLangFun("d_text", "move_contract"); //"空" : "多"
          if (this.symbol == item.symbol_name && this.currCoinMoneyData.close) {
            item.bjjg = this.currCoinMoneyData.close;
            currSymbol = {
              symbol: this.symbol,
              close: item.bjjg,
            };
          } else if (!cwObj[item.order_code]) {
            item.bjjg = "";
          }
          if (!this.orderCwKeyArr.includes(item.symbol_name)) {
            this.orderCwKeyArr.push(item.symbol_name);
          }
          if (cwObj[item.order_code]) {
            item = {
              ...cwObj[item.order_code],
              ...item,
            };
          }

          // 处理最大可平数量
          if (this.symbol == item.symbol_name) {
            if (item.direction == 2) {
              pc_pk_max_money = pc_pk_max_money + item.balance;
            } else {
              pc_pd_max_money = pc_pd_max_money + item.balance;
            }
          }

          return item;
        });
        this.myMoneyData.pc_pk_max_money = pc_pk_max_money;
        this.myMoneyData.pc_pd_max_money = pc_pd_max_money;
        if (this.orderType == "cw") {
          this.orderTableData = this.orderCwData;
        }
        if (this.orderCwKeyArr.length > 0) {
          this.getSymbolNewData("");
        }
        if (currSymbol) {
          this.updateOrderCwDataFun(currSymbol);
        }
      });
    },
    //更新仓位数据
    updateOrderCwDataFun(data) {
      this.orderCwData = this.orderCwData.map((item) => {
        if (item.symbol_name != data.symbolName) {
          return item;
        }
        item.base_scale = data.base_coin_scale;
        item.coin_scale = data.coin_scale;
        item.bjjg = data.close;
        let cw = Number(item.balance).myAdd(item.frozen_balance);
        if (item.direction == 1) {
          //做多收益=（当前价格-均价）*仓位
          item.sy_num = Number(data.close).mySub(item.avg_price).myMul(cw);
        } else if (item.direction == 2) {
          //做空收益=（均价-当前价格）*仓位
          item.sy_num = Number(item.avg_price).mySub(data.close).myMul(cw);
        }
        if (this.contractType == "ubw") {
          item.sy = toNorounded(item.sy_num, item.base_scale);
        } else {
          item.sy = toNorounded(
            Number(item.sy_num).myDiv(item.avg_price),
            item.coin_scale
          );
          item.sy_num = Number(item.sy_num).myDiv(item.avg_price);
        }
        item.sy = numberFilterFun(item.sy);
        //收益率=收益/当前保证金*100
        item.syl =
          " (" +
          toNorounded(
            Number(item.sy_num).myDiv(item.principal_amount).myMul(100),
            2,
            false
          ) +
          "%)";
        item.sy_className = item.sy_num > 0 ? "fit-tc-rise" : "fit-tc-fall";
        item.stopSyl =
          toNorounded(
            Number(item.sy_num).myDiv(item.principal_amount).myMul(100),
            2,
            false
          ) + " %";
        if (item.order_code == this.checkFullStopData.order_code) {
          this.checkFullStopData = {
            ...this.checkFullStopData,
            ...item,
          };
        }
        return item;
      });
      //防止未页面未修改
      this.orderTableData = this.orderTableData.filter(() => true);
    },
    //获取委托数据
    getOrderData() {
      if (!this.isLogin || this.orderType == "cw") {
        return false;
      }
      this.orderTableData = [];
      this.orderLoading = true;
      let type = this.orderFilter ? this.symbol.replace("/", "_") : "all";
      getContractOrderDataApi(this.contractType, this.orderType, type)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          this.orderTableData = data.map((item, index) => {
            item.$index = index;
            item.loading = false;
            item.symbol = item.symbol_name.replace("/", "");
            //direction  1:开多 2:开空 3:平多 4:平空
            if (item.direction == "1" || item.direction == "4") {
              item.className = "fit-tc-rise-bg";
              item.directionText =
                item.direction == "1"
                  ? this.currCoinLangFun("kaiduo_text", "move_contract")
                  : this.currCoinLangFun("pingkong_text", "move_contract"); //"开多" : "平空"
            } else {
              item.className = "fit-tc-fall-bg";
              item.directionText =
                item.direction == "2"
                  ? this.currCoinLangFun("kaiKong_text", "move_contract")
                  : this.currCoinLangFun("pingduo_text", "move_contract"); // "开空" : "平多"
            }
            if (this.orderType == "zyzs") {
              item.directionText = `${item.directionText}/${
                item.zyzs_type == 1
                  ? this.currCoinLangFun("zy_nav", "move_contract")
                  : this.currCoinLangFun("zs_nav", "move_contract")
              }`; //"止盈" : "止损"
            }
            item.base_cjl = `${toThousands(
              Number(item.entrust_balance).myMul(item.entrust_price)
            )} | ${toThousands(
              Number(item.success_balance).myMul(item.entrust_price)
            )} ${item.symbol_name.split("/")[1]}`;
            item.coin_cjl = `${toThousands(
              item.entrust_balance
            )} | ${toThousands(item.success_balance)} ${item.entrust_symbol}`;
            item.cjjj = `${toThousands(item.entrust_price)} | ${toThousands(
              item.success_price
            )}`;
            item.createTime = dateFormat(
              new Date(item.create_time),
              "MM-dd hh:mm:ss"
            );
            if (item.completed_time) {
              item.completedTime = dateFormat(
                new Date(item.completed_time),
                "MM-dd hh:mm:ss"
              );
            } else {
              item.completedTime = "-";
            }
            // 计划委托
            item.triggerPrice = toThousands(item.trigger_price);
            item.entrustPrice = toThousands(item.entrust_price);
            item.entrustBalance = toThousands(item.entrust_balance);
            //成交记录
            item.base_type = item.symbol_name.split("/")[1];
            item.base_cj_cjl = `${toThousands(
              Number(item.entrust_balance - 0).myMul(item.success_price)
            )} ${
              this.contractType == "ubw" ? item.fee_symbol : item.base_type
            }`;
            console.log(
              item.entrust_balance,
              item.success_price,
              item.base_cj_cjl
            );
            item.coin_cj_cjl = `${toThousands(item.entrust_balance)} ${
              item.entrust_symbol
            }`;
            item.successPrice = toThousands(item.success_price);
            item.openPrice = toThousands(item.open_price);
            item.profitText =
              toThousands(item.profit) + " " + item.profit_symbol;
            item.feeText =
              "-" + toThousands(item.fee_balance) + " " + item.fee_symbol;

            if (item.entrust_status == -1) {
              item.zt = this.currCoinLangFun("canceled_text", "all"); //已取消
            } else if (item.entrust_status == 0) {
              item.zt = this.currCoinLangFun("entrusting", "entrust"); //委托中
            } else {
              item.zt = ["jhwt", "zyzs"].includes(this.orderType)
                ? this.currCoinLangFun("triggered")
                : this.currCoinLangFun("completed_text", "all"); //"已触发" : "已完成"
            }

            return item;
          });
          this.orderLoading = false;
        })
        .catch(() => {
          this.orderLoading = false;
        });
    },
    //委托撤单
    orderCancellationsFun(data, isAll) {
      if (data.loading || this.orderAllLoadin) {
        return false;
      }
      let id = [];
      if (isAll) {
        this.orderData.forEach((item) => {
          id.push(item.id);
        });
      } else {
        id = [data.id];
      }
      if (!isAll) {
        this.orderTableData[data.$index].loading = true;
      } else {
        this.orderAllLoadin = true;
      }
      let type = `contract_${this.orderType}`;
      getOrdersCancellationsApi({
        type,
        idList: id,
      })
        .then((res) => {
          if (!isAll) {
            this.orderTableData[data.$index].loading = false;
          } else {
            this.orderAllLoadin = false;
          }
          this.getOrderData();
          this.initAccountInfo();
        })
        .catch(() => {
          if (!isAll) {
            this.orderTableData[data.$index].loading = false;
          } else {
            this.orderAllLoadin = false;
          }
        });
    },
    //修改保证金
    updateMarginFun() {
      let data = {
        logContractId: this.marginMoneyData.id,
        type: this.marginMoneyData.type,
        amount: this.marginMoneyData.num,
      };
      this.marginMoneyData.loading = true;
      contractUpdateMarginApi(data)
        .then((res) => {
          this.marginMoneyData.loading = false;
          this.marginMoneyData.dialog = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("tzcg_text"), //调整成功
          });
          this.initAccountInfo();
        })
        .catch(() => {
          this.marginMoneyData.loading = false;
        });
    },
    //闪电平仓
    setLightningFun() {
      let data = {
        exchangeCoinStr: this.orderLightningData.symbol_name,
        price: this.orderLightningData.avg_price, //委托价
        amount: this.orderLightningData.balance, //数量
        // 3=平仓-平多 4=平仓-平空
        direction: this.orderLightningData.direction == 1 ? 3 : 4, //方向
        pattern: this.orderLightningData.pattern, //逐仓=1，全仓=2
        patternType: this.orderLightningData.pattern_type, //并仓=1，分仓=2
        contractType: this.orderLightningData.contract_type, //合约类型
        closeLogContractOrderCode: this.orderLightningData.order_code, //订单号
      };
      console.log(data);
      this.orderLightningData.loading = true;
      contractPlaceOrderApi(data, "quick")
        .then((res) => {
          this.orderLightningData.loading = false;
          this.orderLightningData.dialog = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.initAccountInfo();
        })
        .catch(() => {
          this.orderLightningData.loading = false;
        });
    },
    //反向开仓
    setReversePositionsFun() {
      let data = {
        exchangeCoinStr: this.reversePositionsData.symbol_name,
        price: this.reversePositionsData.avg_price, //委托价
        amount: this.reversePositionsData.balance, //数量
        // 3=平仓-平多 4=平仓-平空
        direction: this.reversePositionsData.direction == 1 ? 3 : 4, //方向
        pattern: this.reversePositionsData.pattern, //逐仓=1，全仓=2
        patternType: this.reversePositionsData.pattern_type, //并仓=1，分仓=2
        contractType: this.reversePositionsData.contract_type, //合约类型
        closeLogContractOrderCode: this.reversePositionsData.order_code, //订单号
      };
      this.reversePositionsData.loading = true;
      contractPlaceOrderApi(data, "reverse")
        .then((res) => {
          this.reversePositionsData.loading = false;
          this.reversePositionsData.dialog = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.initAccountInfo();
        })
        .catch(() => {
          this.reversePositionsData.loading = false;
        });
    },
    //一键平仓
    aKeyUnwindFun() {
      this.aKeyUnwindData.loading = true;
      let symbolList = [];
      if (this.orderFilter) {
        symbolList = [this.symbol];
      } else {
        symbolList = this.orderCwKeyArr;
      }
      contractaKeyUnwindApi(symbolList, this.contractType == "ubw" ? "1" : "2")
        .then((res) => {
          let data = res.data.data;
          this.aKeyUnwindData.loading = false;
          this.aKeyUnwindData.dialog = false;
          this.$message({
            type: "success",
            message: this.currCoinLangFun("yjpccg_text"), //一键平仓成功
          });
        })
        .catch(() => {
          this.aKeyUnwindData.loading = false;
        });
    },
    //止盈止损
    //设置输入框的值
    checkFullStopInputChengFun(value, key, dec) {
      this.checkFullStopData[key] = inputNumberLinmitFun(value, dec);
      if (["yield", "trigger"].includes(key) && value == "") {
        this.checkFullStopData.yield = "";
        this.checkFullStopData.trigger = "";
        return false;
      }
      //仓位
      let cw = Number(this.checkFullStopData.balance).myAdd(
        this.checkFullStopData.frozen_balance
      );
      if (key == "trigger") {
        let sy = 0;
        if (this.checkFullStopData.direction == 1) {
          //做多收益=（当前价格-均价）*仓位
          sy = Number(value).mySub(this.checkFullStopData.avg_price).myMul(cw);
        } else if (this.checkFullStopData.direction == 2) {
          //做空收益=（均价-当前价格）*仓位
          sy = Number(this.checkFullStopData.avg_price).mySub(value).myMul(cw);
        }
        if (this.contractType == "bbw") {
          //币本位 收益需要/均价
          sy = sy.myDiv(this.checkFullStopData.avg_price);
        }
        //收益率=收益/当前保证金*100
        this.checkFullStopData.yield = toNorounded(
          Number(sy).myDiv(this.checkFullStopData.principal_amount).myMul(100),
          2,
          false
        );
      } else if (key == "yield") {
        //收益=收益率/100*当前保证金
        let sy = Number(value)
          .myDiv(100)
          .myMul(this.checkFullStopData.principal_amount);
        if (this.contractType == "bbw") {
          //币本位 收益=收益率/100*当前保证金*均价
          sy = Number(sy).myMul(this.checkFullStopData.avg_price);
        }
        let trigger = 0;
        if (this.checkFullStopData.direction == 1) {
          //触发价=收益/仓位+均价
          trigger = Number(sy)
            .myDiv(cw)
            .myAdd(this.checkFullStopData.avg_price);
        } else if (this.checkFullStopData.direction == 2) {
          //触发价=均价-收益/仓位
          trigger = Number(this.checkFullStopData.avg_price).mySub(
            Number(sy).myDiv(cw)
          );
        }
        this.checkFullStopData.trigger = toNorounded(
          trigger,
          this.exchangeCoinData.base_coin_scale
        );
      }
    },
    //止盈止损确认下单
    setCheckFullStopFun() {
      if (this.checkFullStopData.surplus > this.checkFullStopData.balance) {
        this.$message({
          type: "success",
          message: `${
            this.checkFullStopData.tabValue == "zy"
              ? this.currCoinLangFun("kzyslbz_text", "move_contract")
              : this.currCoinLangFun("kzsslbz_text", "move_contract")
          }`, // "可止盈数量不足" : "可止损数量不足"
        });
        return false;
      }
      this.checkFullStopData.loading = true;
      let data = {
        closeLogContractOrderCode: this.checkFullStopData.order_code, //平仓号
        triggerPrice: this.checkFullStopData.trigger, // 触发价
        price:
          this.checkFullStopData.entrust > 0
            ? this.checkFullStopData.entrust
            : this.checkFullStopData.bjjg, //委托价
        amount: this.checkFullStopData.surplus, //委托量
        zyzsType: this.checkFullStopData.tabValue == "zy" ? 1 : 2, //1=止盈，2=止损
        direction: this.orderLightningData.direction == 1 ? 3 : 4, //方向
      };
      contractPlaceOrderApi(data, "zyzs")
        .then((res) => {
          this.$message({
            type: "success",
            message: this.currCoinLangFun("checkout_success", "popup_tips"), //下单成功
          });
          this.checkFullStopData.loading = false;
          this.checkFullStopData.dialog = false;
          this.initAccountInfo();
        })
        .catch(() => {
          this.checkFullStopData.loading = false;
        });
    },

    openEntrustFun() {
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }
      let url = "/account/entrust/future/";
      if (this.contractType == "bbw") {
        url = url + "coin";
      } else {
        url = url + "u";
      }
      let routeUrl = this.$router.resolve({
        path: url,
      });
      window.open(routeUrl.href, "_blank");
    },
    setMoneyFun(data) {
      console.log(data);
      this.tradeForm.price = data.price;
      this.tradeForm.price = data.price;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./full-contract.scss";
</style>
<style lang="scss">
@import "./full-contract-all.scss";
</style>
