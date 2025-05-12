<template>
  <div class="trade_all">
    <div class="trade_main container_box1560">
      <!-- 上面显示效果和操作 -->
      <div class="content_box flex-between">
        <!-- 左边 -->
        <div class="content_l">
          <!-- 上面币种信息 -->
          <div class="coin_header flex-start">
            <div class="coin_nam num_Heavy flex-center">
              {{ coinSymbolInfo.showSymbol }}
            </div>
            <div class="gap_line_box flex-center">
              <div class="gap_liine"></div>
            </div>
            <div class="coin_detail flex-start">
              <div class="coin_detail_item c3 flex-colum-between">
                <p
                  class="e2"
                  :class="[
                    _isRFD(
                      coinPriceInfo.open,
                      coinPriceInfo.close,
                      'buy',
                      'rise'
                    ),
                    ' fw-num',
                  ]"
                >
                  {{ coinPriceInfo.close }}
                </p>
                <p>={{ coinPriceInfo.close }}</p>
              </div>
              <div class="coin_detail_item c3 flex-colum-between">
                <p>{{ $t("trade.hourRiseFall") }}</p>
                <p
                  :class="[
                    _isRFD(
                      coinPriceInfo.openPrice,
                      coinPriceInfo.close,
                      'buy',
                      'rise'
                    ),
                    ' rfd-sign secondLeftB fw-num ',
                  ]"
                >
                  {{ coinPriceInfo.priceChangePercent }}%
                </p>
              </div>
              <div class="coin_detail_item c3 flex-colum-between">
                <p>{{ $t("trade.highestPrice") }}</p>
                <p>{{ formatPrice(coinPriceInfo.high24) }}</p>
              </div>
              <div class="coin_detail_item c3 flex-colum-between">
                <p>{{ $t("trade.lowestPrice") }}</p>
                <p>{{ formatPrice(coinPriceInfo.low24) }}</p>
              </div>
              <div class="coin_detail_item c3 flex-colum-between">
                <p>
                  {{ $t("trade.volume") }}({{ coinSymbolInfo.coinUpperCase }})
                </p>
                <p>{{ formatCount(coinPriceInfo.volume24) }}</p>
              </div>
            </div>
          </div>
          <div class="coin_bottom flex-between">
            <!-- 左边跳动实时成交价 -->
            <div class="left_container">
              <div class="exchange-depths ">
                <div class="exchange-depth-top flex-box">
                  <div class="flex-box">
                    <span
                      class="depth-type-taps "
                      @click="depthsType = 'all'"
                      :class="{ hover: depthsType == 'all' }"
                    >
                      <img src="@/assets/svg/icon-depth-light.svg" />
                    </span>
                    <span
                      class="depth-type-taps flex-box "
                      @click="depthsType = 'buy'"
                      :class="{ hover: depthsType == 'buy' }"
                    >
                      <img src="@/assets/svg/icon-buy.svg" />
                    </span>
                    <span
                      class="depth-type-taps flex-box "
                      @click="depthsType = 'sell'"
                      :class="{ hover: depthsType == 'sell' }"
                    >
                      <img src="@/assets/svg/icon-sell.svg" />
                    </span>
                  </div>
                  <el-dropdown>
                    <span class="el-dropdown-link ">
                      {{ depthsDecimals }}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-for="item in showDepthList"
                        :key="item.value"
                        :command="item.value"
                        v-my-click="item"
                      >
                        {{ item.label }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="exchange-depth-content">
                  <div class="depth-row ">
                    <span class="depth-row__item">
                      {{ $t("trade.price") }}(USDT)
                    </span>
                    <span class="depth-row__item">
                      {{ $t("trade.dealPrice") }}
                    </span>
                  </div>
                  <div
                    class="depth-box depth-rise"
                    :style="depthsStyle"
                    v-if="depthsType != 'buy'"
                  >
                    <ul class="el-scrollbar__view">
                      <!-- :style="{
                          backgroundSize:
                            handleBgSize(asksList[index].count, maxAskCount) +
                            '%',
                        }" -->
                      <li
                        v-for="(item, index) in relRows"
                        :key="index"
                        @click="setMoneyFun(item)"
                         v-if="asksList[index]"
                        :style="{
                          backgroundSize:
                            handleBgSize(asksList[index].count, maxAskCount) +
                            '%',
                        }"
                      >
                        <span>
                          <span class="">{{
                            formatPrice(asksList[index].price)
                          }}</span>
                        </span>
                        <span>{{ formatCount(asksList[index].count) }}</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="exchange-depth-ticker flex-center "
                    v-show="depthsType == 'all'"
                  >
                    <div class="flex-center">
                      <span
                        class="flex-box"
                        :class="[
                          _isRFD(
                            coinPriceInfo.open,
                            coinPriceInfo.close,
                            'buy',
                            'rise'
                          ),
                          'fw-num centername',
                        ]"
                      >
                        {{ formatPrice(coinPriceInfo.close) }}
                        <i class="el-icon-caret-top"></i>
                      </span>
                      <span class=""
                        >≈ {{ formatPrice(coinPriceInfo.close) }}</span
                      >
                    </div>
                  </div>
                  <div
                    class="depth-box depth-fall"
                    v-if="depthsType != 'sell'"
                    :style="depthsStyle"
                  >
                    <ul class="el-scrollbar__view">
                      <!-- :style="{
                          backgroundSize:
                            handleBgSize(bidsList[index].count, maxAskCount) +
                            '%',
                        }" -->
                      <li
                        v-for="(item, index) in relRows"
                        :key="index"
                        @click="setMoneyFun(item)"
                         v-if="bidsList[index]"
                        :style="{
                          backgroundSize:
                            handleBgSize(bidsList[index].count, maxAskCount) +
                            '%',
                        }"
                      >
                        <span>
                          <span class="fit-tc-rise">{{
                            formatPrice(bidsList[index].price)
                          }}</span>
                        </span>
                        <span v-if="Object.keys(bidsList[index]).length > 0">{{
                          formatCount(bidsList[index].count)
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右边k线加操作 -->
            <div class="right_container">
              <!-- K线图 -->
              <div class="kline_box">
                <div class="exchange-kline">
                  <Candlestick
                    :coinInfo="coinSymbolInfo"
                    :type="type"
                  ></Candlestick>
                </div>
              </div>
              <!-- 下边具体操作 -->
              <!-- 秒合约 -->
              <div class="operate_box" v-if="queryType == 'sec'">
                <!-- 上面秒数选择 -->
                <div class="top_seconds">
                  <div class="el-scrollbar__view flex-between">
                    <!-- {{ cycleList.length }}--kkk -->
                    <div v-for="(item, index) in cycleList">
                      <ul :key="index" class="flex-between">
                        <li
                          :class="{
                            active_second: activeSecond === item.id,
                          }"
                          class="flex-colum-evenly"
                          @click="setSeconds(item)"
                        >
                          <p style="font-size:16px;"  class="flex-center" >{{ item.period }}</p>
                          <p style="font-size:12px;"  class="flex-center">
                            {{ (parseFloat(item.odds) * 100).toFixed(0) + "%" }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bottom_input flex-between">
                  <div class="bottom_input_item l_rise">
                    <div class="input_header">
                      <el-input
                        :placeholder="$t('trade.min') + placeRise + 'USDT'"
                        v-model="riseInput"
                      >
                        <template slot="append">USDT</template>
                      </el-input>
                    </div>
                    <div class="select_box flex-between">
                      <div v-for="item in riseList">
                        <div class="flex-between select_box_inner">
                          <div
                            class="select_box_item flex-center"
                            :class="{ active_rise: activeRise == item }"
                            @click="
                              activeRise = item;
                              riseInput = item == 1 ? availableBalance : item;
                            "
                          >
                            {{ item == 1 ? $t("trade.totol") : item }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>{{ availableBalance }} USDT</p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>
                    <div class="seeRise_box btn_box cur_d">
                      <div class="position-view" v-loading="showLoadingOne1">
                        <div
                          class="btn_box_item seeRise_box_btn flex-center cur_d"
                          style="cursor: pointer;"
                          @click="createSecondContractOrder(1)"
                        >
                          {{ $t("trade.seeRise") }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_input_item l_fall">
                    <div class="input_header">
                      <el-input
                        :placeholder="$t('trade.min') + placeFall + 'USDT'"
                        v-model="fallInput"
                      >
                        <template slot="append">USDT</template>
                      </el-input>
                    </div>
                    <div class="select_box flex-between">
                      <div v-for="item in fallList">
                        <div class="flex-between select_box_inner">
                          <div
                            class="select_box_item flex-center"
                            :class="{ active_fall: activeFall == item }"
                            @click="
                              activeFall = item;
                              fallInput = item == 1 ? availableBalance : item;
                            "
                          >
                            {{ item == 1 ? $t("trade.totol") : item }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>{{ availableBalance }} USDT</p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>
                    <div class="btn_box seeFall_box cur_d">
                      <div class="position-view" v-loading="showLoadingOne2">
                        <div
                          class="btn_box_item seeFall_box_btn flex-center cur_d"
                          style="cursor: pointer"
                          @click="createSecondContractOrder(0)"
                        >
                          {{ $t("trade.seeFall") }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 币币交易 -->
              <div class="operate_box" v-else-if="queryType == 'spot'">
                <!-- 这是币币交易操作 -->
                <el-tabs v-model="spotTabValue" @tab-click="clickSpotTab">
                  <el-tab-pane :label="$t('trade.limitOrder')" name="first">
                  </el-tab-pane>
                  <el-tab-pane
                    :label="$t('trade.marketOrder')"
                    name="second"
                  ></el-tab-pane>
                </el-tabs>
                <div class="spot_content flex-between" style="margin-top: 15px">
                  <div class="l_content_item">
                    <el-input
                      v-model="spotBuyCoinForm.price"
                      v-show="spotTabValue == 'first'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>

                    <el-input
                      :readonly="true"
                      v-show="spotTabValue == 'second'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">{{
                        $t("trade.tradeOptimalprice")
                      }}</template>
                    </el-input>

                    <el-input placeholder="" v-model="spotBuyCoinForm.num">
                      <template slot="prefix">{{ $t("trade.num") }}</template>
                      <template slot="suffix">{{
                        coinSymbolInfo.coinUpperCase
                      }}</template>
                    </el-input>
                    <el-slider
                      v-model="spotBuySlider"
                      show-tooltip
                      @change="changeBuySider"
                    >
                    </el-slider>
                    <el-input placeholder="" v-model="spotBuyCoinForm.amount">
                      <template slot="prefix">{{
                        $t("trade.amount")
                      }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>
                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>{{ availableBalance }} USDT</p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>
                    <div class="seeRise_box btn_box">
                      <div class="position-view" v-loading="showLoadingTwo1">
                        <div
                          class="btn_box_item seeRise_box_btn flex-center cur_p"
                          @click="submitOrderCurrencyApi('buy')"
                        >
                          {{ $t("trade.purchase")
                          }}{{ coinSymbolInfo.coinUpperCase }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="r_content_item">
                    <el-input
                      v-model="spotSellCoinForm.price"
                      v-show="spotTabValue == 'first'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>

                    <el-input
                      :readonly="true"
                      v-show="spotTabValue == 'second'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">{{
                        $t("trade.tradeOptimalprice")
                      }}</template>
                    </el-input>

                    <el-input placeholder="" v-model="spotSellCoinForm.num">
                      <template slot="prefix">{{ $t("trade.num") }}</template>
                      <template slot="suffix">{{
                        coinSymbolInfo.coinUpperCase
                      }}</template>
                    </el-input>
                    <el-slider
                      v-model="spotSellSlider"
                      show-tooltip
                      @change="changeSellSider"
                    >
                    </el-slider>
                    <el-input placeholder="" v-model="spotSellCoinForm.amount">
                      <template slot="prefix">{{
                        $t("trade.amount")
                      }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>
                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>
                          {{ avaiSpotBalance }}
                          {{ coinSymbolInfo.coinUpperCase }}
                        </p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>
                    <div class="seeFall_box btn_box">
                      <div class="position-view" v-loading="showLoadingTwo2">
                        <div
                          class="btn_box_item seeFall_box_btn flex-center cur_p"
                          @click="submitOrderCurrencyApi('sell')"
                        >
                          {{ $t("trade.sellOut")
                          }}{{ coinSymbolInfo.coinUpperCase }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- u本位合约 -->
              <div class="operate_box" v-else="queryType == 'usta'">
                <!-- 这是u本位合约交易操作 -->
                <div class="tab_box flex-between">
                  <el-tabs v-model="ustaTabValue" @tab-click="clickUstaTab">
                    <el-tab-pane :label="$t('trade.limitOrder')" name="first">
                    </el-tab-pane>
                    <el-tab-pane
                      :label="$t('trade.marketOrder')"
                      name="second"
                    ></el-tab-pane>
                  </el-tabs>

                  <el-select
                    v-model="transactionNum"
                    :placeholder="$t('utils.plsSelect')"
                    @change="changeNum"
                  >
                    <el-option
                      v-for="item in numList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name"
                    >
                    </el-option>
                  </el-select>
                </div>

                <div class="spot_content flex-between">
                  <div class="l_content_item">
                    <el-input
                      v-model="ustaBuyCoinForm.price"
                      v-if="ustaTabValue == 'first'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>

                    <el-input :readonly="true" v-else>
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">{{
                        $t("trade.tradeOptimalprice")
                      }}</template>
                    </el-input>

                    <el-input placeholder="" v-model="ustaBuyCoinForm.num">
                      <template slot="prefix">{{ $t("trade.num") }}</template>
                      <template slot="suffix">{{ $t("trade.hand") }}</template>
                    </el-input>
                    <el-slider
                      v-model="ustaBuySlider"
                      show-tooltip
                      @change="changeUstaBuySider"
                    >
                    </el-slider>

                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>{{ avaiUstaBalance }} USDT</p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>
                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canDoMore") }}</p>
                        <p>
                          {{ formatFixed(bearableValue) }}
                          {{ coinSymbolInfo.coinUpperCase }}
                        </p>
                      </div>
                    </div>
                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.bond") }}</p>
                        <p>{{ formatFixed(marginValue) }} USDT</p>
                      </div>
                    </div>
                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.contractValue") }}</p>
                        <p>
                          {{ coinSymbolInfo.shareNumber }}
                          {{
                            coinSymbolInfo.coinUpperCase +
                            "/" +
                            $t("trade.hand")
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="seeRise_box btn_box" style="margin-top: 5px">
                      <div class="position-view" v-loading="showLoadingThree1">
                        <div
                          class="btn_box_item seeRise_box_btn flex-center cur_p"
                          @click="submitUcontract(0)"
                        >
                          {{ $t("trade.purchase") }} ({{ $t("trade.goingLong") }})
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="r_content_item">
                    <el-input
                      v-model="ustaSellCoinForm.price"
                      v-if="ustaTabValue == 'first'"
                    >
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">USDT</template>
                    </el-input>

                    <el-input :readonly="true" v-else>
                      <template slot="prefix">{{ $t("trade.price") }}</template>
                      <template slot="suffix">{{
                        $t("trade.tradeOptimalprice")
                      }}</template>
                    </el-input>

                    <el-input placeholder="" v-model="ustaSellCoinForm.num">
                      <template slot="prefix">{{ $t("trade.num") }}</template>
                      <template slot="suffix">{{ $t("trade.hand") }}</template>
                    </el-input>
                    <el-slider
                      v-model="ustaSellSlider"
                      show-tooltip
                      @change="changeUstaSellSider"
                    >
                    </el-slider>

                    <div class="canUse_box flex-between">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canUse") }}</p>
                        <p>{{ avaiUstaBalance }} USDT</p>
                      </div>
                      <div class="canUse_r">
                        <img
                          src="@/assets/image/change_arrow.png"
                          width="20px"
                          alt=""
                          @click="openTransfer = true"
                        />
                      </div>
                    </div>

                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.canDoMore") }}</p>
                        <p>
                          {{ formatFixed(bearableSellValue) }}
                          {{ coinSymbolInfo.coinUpperCase }}
                        </p>
                      </div>
                    </div>
                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.bond") }}</p>
                        <p>{{ formatFixed(marginSellValue) }} USDT</p>
                      </div>
                    </div>
                    <div class="canUse_box flex-start">
                      <div class="canUse_l flex-start">
                        <p>{{ $t("trade.contractValue") }}</p>
                        <p>
                          {{ coinSymbolInfo.shareNumber }}
                          {{
                            coinSymbolInfo.coinUpperCase +
                            "/" +
                            $t("trade.hand")
                          }}
                        </p>
                      </div>
                    </div>

                    <div class="seeFall_box btn_box" style="margin-top: 5px">
                      <div class="position-view" v-loading="showLoadingThree2">
                        <div
                          class="btn_box_item seeFall_box_btn flex-center cur_p"
                          @click="submitUcontract(1)"
                        >
                          {{ $t("trade.sellOut") }} ({{ $t("trade.openAir") }})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边 -->
        <div class="content_r">
          <!-- 行情 -->
          <div class="top_quotes">
            <div class="header_search flex-center">
              <el-input
                :placeholder="$t('trade.plsInputContent')"
                v-model="inputCoin"
                @input="searchCoin"
              >
                <template slot="prepend"
                  ><i class="el-icon-search"></i
                ></template>
              </el-input>
            </div>
            <div class="quotes_box">
              <div class="content-tabs">
                <el-tabs
                  class="fit-tc-tip"
                  v-model="tabsValue"
                  @tab-click="tabsClick"
                >
                  <el-tab-pane
                    v-for="item in tabsData"
                    :key="item.value"
                    :label="$t(item.label)"
                    :name="item.value"
                  ></el-tab-pane>
                </el-tabs>
              </div>

              <div class="content-data">
                <ul class="el-scrollbar__view">
                  <li
                    v-for="(item, index) in tableList"
                    :key="index"
                    class="flex-between"
                  >
                    <!-- <div class="cur_d"> -->
                    <div class="cur_d" @click="clickCur(item)">
                      <div class="flex-between" style="gap: 10px">
                        <img
                          :src="item.logo"
                          alt
                          class="leftImg"
                          width="25px"
                        />
                        <div class="fw-bold">
                          <p>{{ item.showSymbol }}</p>
                          <p>{{ item.coinUpperCase }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="cur_d" @click="clickCur(item)">
                      <div>{{ allCoinPriceInfo[item.coin].close }}</div>
                      <div
                        :class="[
                          _isRFD(
                            allCoinPriceInfo[item.coin].openPrice,
                            allCoinPriceInfo[item.coin].close
                          ),
                          'rfd-sign rightNum fw-num num_Bold',
                        ]"
                      >
                        {{ allCoinPriceInfo[item.coin].priceChangePercent }}%
                      </div>
                    </div>
                    <!-- </div> -->
                  </li>
                  <el-empty
                    v-if="!tableList.length"
                    :description="$t('utils.noData')"
                  >
                    <template #image>
                      <img
                        :src="require('@/assets/image/noData.png')"
                        alt="Empty Image"
                      />
                    </template>
                  </el-empty>
                </ul>
              </div>
            </div>
          </div>
          <!-- 成交 -->
          <div class="bottom_deal">
            <div class="title">{{ $t("trade.realTimetrans") }}</div>
            <div class="tabs_box flex-between c3">
              <span> {{ $t("trade.time") }} </span>
              <span>{{ $t("trade.direction") }}</span>
              <span style="margin-right: 20px"
                >{{ $t("trade.price") }}(USDT)</span
              >
              <span
                >{{ $t("trade.num") }}({{ coinSymbolInfo.coinUpperCase }})</span
              >
            </div>
            <div class="deal_list">
              <ul class="el-scrollbar__view">
                <li
                  v-for="(item, index) in dealList"
                  :key="index"
                  class="flex-between"
                >
                  <div class="time fw-num flex-start">
                    <!-- {{ _timeFormat(item.ts, "HH:mm:ss", true) }} -->
                    {{ formatTimestampWithTimezone(item.ts, "HH:mm:ss", true) }}
                  </div>
                  <!-- 卖出 -->
                  <div
                    class="fall direction fw-bold"
                    v-show="item.direction == 'sell'"
                  >
                    {{ $t("trade.sellOut") }}
                  </div>
                  <!-- 买入 -->
                  <div
                    class="rise direction fw-bold"
                    v-show="item.direction == 'buy'"
                  >
                    {{ $t("trade.purchase") }}
                  </div>
                  <div class="price fw-num">{{ formatPrice(item.price) }}</div>
                  <div class="count fw-num">
                    {{ formatCountDiv(item.amount, item.price) }}
                  </div>
                </li>

                <el-empty
                  v-if="!dealList.length"
                  :description="$t('utils.noData')"
                >
                  <template #image>
                    <img
                      :src="require('@/assets/image/noData.png')"
                      alt="Empty Image"
                    />
                  </template>
                </el-empty>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 下面订单详情 -->
      <div class="order_details_box">
        <secOrderList
          v-show="queryType == 'sec'"
          :curOrderTableData="curOrderTableData"
          :hisOrderTableData="hisOrderTableData"
          :coinInfo="coinSymbolInfo"
          @getSecondContractOrder="getSecondContractOrder"
          @filterSecData="filterSecData"
          :coinPriceInfo="coinPriceInfo"
          :countDown="countDown"
        ></secOrderList>

        <spotOrderList
          v-show="queryType == 'spot'"
          :curSpotList="curSpotList"
          :hisSpotList="hisSpotList"
          :curSpotLen="curSpotLen"
          :hisSpotLen="hisSpotLen"
          @getSpotContractOrder="getSpotContractOrder"
          @filterSpotData="filterSpotData"
          s
          :allCoinPriceInfo="allCoinPriceInfo"
          @cancelSpotOrder="cancelSpotOrder"
        ></spotOrderList>

        <ustaOrderList
          v-show="queryType == 'usta'"
          :ustaCurOrderList="ustaCurOrderList"
          :ustaOrderLen1="ustaOrderLen1"
          :ustaHisOrderList="ustaHisOrderList"
          :ustaOrderLen2="ustaOrderLen2"
          :positionList="positionList"
          :ustaOrderLen3="ustaOrderLen3"
          :ustaLossList="ustaLossList"
          :ustaOrderLen4="ustaOrderLen4"
          @contractHistoryList="contractHistoryList"
          @getUstaContractOrder="getUstaContractOrder"
          @contractLossList="contractLossList"
          @filterUstaData="filterUstaData"
          :coinPriceInfo="coinPriceInfo"
          @cancelUstaOrder="cancelUstaOrder"
          @stoplossBullshit="stoplossBullshit"
          :availableBalance="avaiUstaBalance"
          @stopOrder="stopOrder"
          :contractCoinList="contractCoinList"
          @upDateUser="upDateUser"
        ></ustaOrderList>
        <!-- <div class="inner_box">
          <div class="in_tabs_box">
            <div class="in_tabs_inner">
              <el-tabs v-model="orderTabsValue" @tab-click="orderTabsClick">
                <el-tab-pane
                  :key="item.name"
                  :label="$t(item.label)"
                  v-for="item in orderList"
                  :name="item.name"
                >
                </el-tab-pane>
                <div>
                  <el-checkbox v-model="checked" @change="clickCheckBox">{{
                    $t("assets.hideOtherPairs")
                  }}</el-checkbox>
                  <i class="el-icon-refresh-right"></i>
                </div>
              </el-tabs>
            </div>
          </div>
          <div class="table_content">
            <el-table :data="orderTableData" style="width: 100%">
              <el-table-column :label="$t('assets.transacPairs')" align="left">
                <template slot-scope="scope">
                  <span
                    >{{ scope.row.coinSymbol.toUpperCase() }}/{{
                      scope.row.baseSymbol.toUpperCase()
                    }}
                  </span>
                  <span v-if="scope.row.status == 1" style="color: green"
                    >买涨</span
                  >
                  <span v-else style="color: red"> 买跌 </span>
                </template>
              </el-table-column>
              <el-table-column
                prop="openPrice"
                :label="$t('assets.openPrice')"
                align="center"
              >
              </el-table-column>

              <el-table-column
                v-show="orderTabsValue != 'hiswei'"
                prop="betAmount"
                :label="$t('assets.curPrice')"
                align="center"
              >
              </el-table-column>
              <el-table-column :label="$t('assets.num')" align="center">
                <template slot-scope="scope">
                  <span>{{
                    (
                      parseFloat(scope.row.rewardAmount) -
                      parseFloat(scope.row.betAmount)
                    ).toFixed(2)
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('assets.profitAndLoss')"
                align="center"
              >
                <template slot-scope="scope">
                  <span>{{ scope.row.params.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="type"
                :label="$t('assets.createTime')"
                align="right"
              >
              </el-table-column>
              <el-table-column
                prop="closeTime"
                :label="$t('assets.time')"
                align="right"
              >
              </el-table-column>
              <el-table-column
                prop="closePrice"
                :label="$t('assets.countdown')"
                align="right"
              >
              </el-table-column>
            </el-table>
          </div>

        </div> -->
      </div>
    </div>
    <!-- 倒计时弹框 -->
    <el-dialog
      :title="coinSymbolInfo.coinUpperCase"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span> -->

      <div
        v-if="showCountdown && queryType == 'sec'"
        class="flex-center"
        style="position: relative"
      >
        <el-progress
          type="circle"
          :percentage="countDownPercent"
          :show-text="false"
        ></el-progress>
        <div
          class="time"
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
        >
          <p>{{ $t("trade.countDown") }} {{ countDown }}</p>
        </div>
      </div>
      <div class="flex-center" style="margin-top: 20px">
        <p>{{ $t("assets.cycle") }}: {{ cycleObj.period }}s</p>
      </div>
      <div class="flex-center" style="margin-top: 20px">
        <p>
          {{ $t("trade.direction") }}:
          <span :class="titleFlag ? 'rise' : 'fall'">
            {{ titleFlag ? $t("trade.buyRise") : $t("trade.buyFall") }}
          </span>
        </p>
      </div>
      <div class="flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.num") }}: {{ secInvestNum }}</p>
      </div>

      <div
        class="flex-center"
        style="margin-top: 20px"
        v-if="queryType == 'sec'"
      >
        <p>
          {{ $t("trade.expectedProfit") }}:
          <span
            :class="
              formatExpectedProfitColor(
                titleFlag,
                buyPrice,
                coinPriceInfo.close
              )
            "
            v-if="titleFlag&&buyPrice&&coinPriceInfo.close&&secInvestNum&&cycleObj.odds&&cycleObj.flag"
          >
            {{
              formatExpectedProfit(
                titleFlag,
                buyPrice,
                coinPriceInfo.close,
                secInvestNum,
                cycleObj.odds,
                cycleObj.flag
              )
            }}USDT
          </span>
        </p>
      </div>
      <div class="buyPrice flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.buyPrice") }} {{ buyPrice }}</p>
      </div>

      <div class="flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.countDownTip") }}</p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{
          $t("utils.cancel")
        }}</el-button>
        <el-button type="primary" @click="dialogVisible = false">{{
          $t("utils.confirm")
        }}</el-button>
      </span>
    </el-dialog>
    <!-- 倒计时结束 -->
    <el-dialog
      v-if="!showCountdown && queryType == 'sec'"
      :title="coinSymbolInfo.coinUpperCase"
      :visible.sync="cutdownCloseVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div
        class="flex-center"
        style="margin-top: 20px"
        v-if="queryType == 'sec' && Object.keys(orderObj).length > 0"
      >
        <span
          :class="profitAndlossColor(orderObj.betAmount, orderObj.rewardAmount)"
          style="font-size: 24px"
        >
          {{ profitAndloss(orderObj.betAmount, orderObj.rewardAmount) }}
        </span>
        <span>USDT</span>
      </div>

      <div class="flex-center">
        <p>{{ $t("trade.countDownEndTip") }}</p>
      </div>

      <!-- <div class="flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.nowPrice") }}: {{ orderObj.closePrice }}</p>
      </div> -->

      <div class="flex-center" style="margin-top: 20px">
        <p>
          {{ $t("trade.direction") }}:
          <span :class="titleFlag ? 'rise' : 'fall'">
            {{ titleFlag ? $t("trade.buyRise") : $t("trade.buyFall") }}
          </span>
        </p>
      </div>
      <div class="buyPrice flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.price") }} {{ buyPrice }}</p>
      </div>

      <div class="flex-center" style="margin-top: 20px">
        <p>{{ $t("trade.countDownTip") }}</p>
      </div>
    </el-dialog>

    <!-- 资金划转弹框 -->
    <el-dialog
      :title="$t('trade.fundTransfer')"
      width="60"
      :visible.sync="openTransfer"
      custom-class="transfer-box"
      :center="true"
    >
      <Transfer
        :textInfo="textInfo2"
        :optionArr="transOpArr"
        :canUseAmount="canUseAmount"
        @getCanUseAmount="getCanUseAmount"
        @closeDialog="openTransfer = false"
        @upDateUser="upDateUser"
      ></Transfer>
    </el-dialog>
  </div>
</template>

<script>
import Candlestick from "./components/candlestick.vue";
import secOrderList from "./components/orderList/secOrderList.vue";
import spotOrderList from "./components/orderList/spotOrderList.vue";
import ustaOrderList from "./components/orderList/ustaOrderList.vue";
import Transfer from "./components/transfer.vue";
import { socketDict } from "@/config/dict";
import PubSub from "pubsub-js";
import { mapActions, mapGetters, mapMutations } from "vuex";
import _ from "lodash";
import { debounce, throttle } from "lodash";
import {
  getPeriodList,
  createSecondContractOrder,
  getSecondContractOrder,
  getSpotContractOrder,
  submitOrderCurrencyApi,
  submitUcontract,
  getUstaContractOrder, //委托订单列表
  contractHistoryList, //持仓列表
  contractLossList, //止盈止损列表
  cancelOrderCurrencyApi,
  canCelOrder,
  cancelLoss,
  stopOrder,
} from "@/api/trade";
import {
  countFormat,
  priceFormat,
  _add,
  _sub,
  _div,
  _toFixed,
  _mul,
} from "@/util/decimal";
import BScroll from "better-scroll";
export default {
  props: {
    /**
     * 行数 最大30 默认4
     */
    rows: {
      type: Number,
      default: 13,
    },
    dealRows: {
      type: Number,
      default: 20,
    },
  },
  components: {
    Candlestick,
    secOrderList,
    spotOrderList,
    ustaOrderList,
    Transfer,
  },
  data() {
    return {
      showLoadingOne1: false,
      showLoadingOne2: false,
      showLoadingTwo1: false,
      showLoadingTwo2: false,
      showLoadingThree1: false,
      showLoadingThree2: false,
      orderObj: {},
      cutdownCloseVisible: false,
      titleFlag: 1,
      secInvestNum: 0,
      openTransfer: false,
      canUseAmount: "0",
      textInfo2: {
        title: "assets.amountTransfer",
        label: "assets.transferAmount",
        butText: "assets.transferAll",
      },
      transOpArr: [
        { label: "assets.platformAssets", value: 1 },
        { label: "assets.financeAssets", value: 2 },
        { label: "assets.contractAssets", value: 3 },
      ],
      queryType: "",
      type: "",
      symbol: "",
      coinSymbolInfo: {},
      depthsType: "all",
      depthsDecimals: "",
      depthsHeight: "",
      subKey: "",
      showDepthList: [],
      /**
       * 当前显示类型
       */
      showDepth: {},
      showDepthListDict: [
        { label: "0.00000001", value: 0, min: 0.00000001 },
        { label: "0.0000001", value: 1, min: 0.0000001 },
        { label: "0.000001", value: 2, min: 0.000001 },
        { label: "0.00001", value: 3, min: 0.00001 },
        { label: "0.0001", value: 4, min: 0.0001 },
        { label: "0.001", value: 5, min: 0.001 },
        { label: "0.01", value: 6, min: 0.01 },
        { label: "0.1", value: 7, min: 0.1 },
        { label: "1", value: 8, min: 10 },
        { label: "10", value: 9, min: 100 },
        { label: "100", value: 10, min: 1000 },
      ],
      maxAskCount: 0, // 最大卖出数量
      maxBidCount: 0, //最大买入数量
      bidsList: [], //买入列表
      asksList: [], //卖出列表
      tabsValue: "miao",
      tabsData: [
        {
          label: "user.secondContract", //现货
          value: "miao",
          code: "spot_goods",
        },
        {
          label: "user.spotContract", //现货
          value: "bb",
          code: "spot_goods",
        },
        {
          label: "user.uContract", //合约
          value: "uyue",
          code: "contract",
        },
      ],
      tableList: [], //行情
      currentCoinInfo: {}, //当前订阅币种
      subscribeClientList: [], //订阅客户端列表
      dealList: [], //数据列表
      // orderList: [
      //   {
      //     label: "assets.curCommis",
      //     name: "cuwei",
      //   },
      //   {
      //     label: "assets.historyCommis",
      //     name: "hiswei",
      //   },
      // ], //订单tab
      // orderTabsValue: "cuwei", //订单默认tab值
      // checked: false, //是否隐藏其他交易队单选框
      curOrderTableData: [], //秒合约当前委托订单详情列表
      hisOrderTableData: [], //秒合约历史委托订单详情列表
      secondsData: [
        {
          seconds: "30s",
          percent: "7%",
          minInput: 1,
          status: 0,
        },
        {
          seconds: "60s",
          percent: "12%",
          minInput: 20000,
          status: 1,
        },
        {
          seconds: "120s",
          percent: "20%",
          minInput: 50000,
          status: 2,
        },
        {
          seconds: "180s",
          percent: "30%",
          minInput: 100000,
          status: 3,
        },
        {
          seconds: "240s",
          percent: "40%",
          minInput: 300000,
          status: 4,
        },
        {
          seconds: "300s",
          percent: "50%",
          minInput: 600000,
          status: 5,
        },
      ], //秒合约
      activeSecond: 0, //选中秒合约
      riseList: [10, 20, 50, 100, 500, 1000, 2000, 1], //看涨列表
      activeRise: 0, //选中看涨
      fallList: [10, 20, 50, 100, 500, 1000, 2000, 1], //看跌列表
      activeFall: 0, //选中看跌
      riseInput: "", //看涨输入框
      placeRise: 1, //看涨提示
      fallInput: "", //看跌输入框
      placeFall: 1, //看跌提示
      cycleList: [], //周期列表
      cycleObj: {}, //周期对象
      orderId: "", //秒合约生产订单id
      showCountdown: false, //是否开始倒计时
      buyPrice: "", //买入价格
      countDown: 0, //倒计时时间
      countDownAll: 0, //倒计时总时间
      dialogVisible: false, //倒计时弹框
      countDownPercent: 100, //秒合约倒计时进度条
      spotTabValue: "first", //币币交易操作tab默认值
      spotBuyCoinForm: {
        price: "",
        num: "",
        amount: "",
      }, //币币交易买入币种form
      spotSellCoinForm: {
        price: "",
        num: "",
        amount: "",
      }, //币币交易卖出币种form
      spotBuySlider: 0,
      spotSellSlider: 0,
      curSpotList: [], //币币交易订单列表当前
      hisSpotList: [], //币币交易订单列表历史
      curSpotLen: "",
      hisSpotLen: "",
      ustaTabValue: "first",
      ustaBuyCoinForm: {
        price: "",
        num: "",
      },
      ustaSellCoinForm: {
        price: "",
        num: "",
      },
      ustaBuySlider: 0,
      ustaSellSlider: 0,
      numList: [], //存放usta的杠杆下拉
      transactionNum: null, //usta的倍数
      marginValue: "0", //usta的保证金买入
      marginSellValue: "0", //usta的保证金卖出
      ustaCurOrderList: [], //usta的当前委托订单详情列表
      ustaOrderLen1: "", //usta的当前委托订单详情列表长度
      ustaHisOrderList: [], //usta的历史委托订单详情列表
      ustaOrderLen2: "", //usta的历史委托订单详情列表长度
      positionList: [], //usta的持仓列表
      ustaOrderLen3: "", //usta的持仓列表长度
      ustaLossList: [], //usta的亏损列表
      ustaOrderLen4: "", //usta的亏损列表长度
      inputCoin: "",
    };
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "isLogin",
      "allCoinPriceInfo",
      "secondContractCoinList",
      "spotCoinList",
      "contractCoinList",
    ]),
    // 可做多=可用/价格*杠杆倍数
    // das可开空=合约面值*手/价格*杠杆 卖出
    bearableSellValue() {
      let price =
        this.ustaTabValue == "second"
          ? this.coinPriceInfo.close
          : this.ustaSellCoinForm.price;
      if (price) {
        var typeId = "";
        this.numList.forEach((element) => {
          if (element.name == this.transactionNum) {
            return (typeId = element.id);
          }
        });
        let result;
        result = _mul(_div(this.avaiUstaBalance, price), typeId);

        return result;
      } else {
        return 0;
      }
    },
    // 可做多=可用/价格*杠杆倍数
    // das可开空=合约面值*手/价格*杠杆 买入
    bearableValue() {
      let price =
        this.ustaTabValue == "second"
          ? this.coinPriceInfo.close
          : this.ustaBuyCoinForm.price;
      if (price) {
        var typeId = "";
        this.numList.forEach((element) => {
          if (element.name == this.transactionNum) {
            return (typeId = element.id);
          }
        });
        let result;
        result = _mul(_div(this.avaiUstaBalance, price), typeId);

        return result;
      } else {
        return 0;
      }
    },
    //获取当前可用usdt货币数量--usta
    avaiUstaBalance() {
      if (this.userInfo && this.userInfo.asset && this.userInfo.asset.length > 0) {
        var cur = this.userInfo.asset.filter((item) => {
          return item.type == 3;
        });
        if (cur.length > 0) {
          return cur[0].availableAmount;
        } else {
          return "";
        }
      }
    },
    //获取当前可用usdt货币数量
    availableBalance() {
      // console.log("this.userInfo",this.userInfo);
      if (this.userInfo && this.userInfo.asset && this.userInfo.asset.length > 0) {
        return (
          this.userInfo.asset.filter((item) => item.symbol == "usdt")[0]
            ?.availableAmount || 0
        );
      }
    },
    //币币交易 获取当前可用（query--symbol）货币数量
    avaiSpotBalance() {
      if (this.userInfo && this.userInfo.asset && this.userInfo.asset.length > 0) {
        return (
          this.userInfo.asset.filter(
            (item) => item.symbol == this.coinSymbolInfo.coin
          )[0]?.availableAmount || 0
        );
      }
    },
    coinPriceInfo() {
      return this.allCoinPriceInfo[this.coinSymbolInfo.coin] || {};

      // this.generSubKey();
    },
    depthsStyle() {
      if (!this.depthsHeight) {
        return {};
      }
      let height = 110;
      if (this.depthsType == "all") {
        height = (this.depthsHeight - height) / 2;
      } else {
        height = this.depthsHeight - height;
      }
      height = height - (height % 20);
      return {
        height: height + "px",
      };
    },
    relRows() {
      if (this.depthsType != "all") {
        return this.rows * 2;
      } else {
        return this.rows;
      }
    },
  },
  created() {
    this.getUserInfo();
    this.generSubKey();
    if (this.secondContractCoinList.length > 0) {
      this.tableList = this.secondContractCoinList;
    }
  },
  watch: {
    countDown(val) {
      if (val) {
        if (val > 0) {
          this.countDownPercent = (val / this.countDownAll).toFixed(2) * 100; //计算圆环百分比
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        }
        if (val == 1) {
          this.getSecondContractOrder(0);
          this.cutdownCloseVisible = true;
          this.getUserInfo();
          this.dialogVisible = false;
          this.showCountdown = false;
        }
      }
    },
    //usta  买入监听数量，计算保证金
    "ustaBuyCoinForm.num": function (newNum, oldNum) {
      if (newNum) {
        const regex = /^[1-9]\d*$/;
        if (!regex.test(newNum)) {
          // 数量只能输入整数
          return this.$message.error(this.$t("utils.numCanBeInt"));
        } else {
          var typeId = "";
          this.numList.forEach((element) => {
            if (element.name == this.transactionNum) {
              return (typeId = element.id);
            }
          });
          this.marginValue = _toFixed(
            _div(
              _mul(
                _mul(this.coinPriceInfo.close, newNum),
                this.coinSymbolInfo.shareNumber
              ),
              typeId
            ),
            6
          );
        }
      } else {
        this.marginValue = "0";
      }
    },
    //usta  卖出监听数量，计算保证金
    "ustaSellCoinForm.num": function (newNum, oldNum) {
      if (newNum) {
        const regex = /^[1-9]\d*$/;
        if (!regex.test(newNum)) {
          // 数量只能输入整数
          return this.$message.error(this.$t("trade.numCanBeInt"));
        } else {
          var typeId = "";
          this.numList.forEach((element) => {
            if (element.name == this.transactionNum) {
              return (typeId = element.id);
            }
          });
          this.marginSellValue = _toFixed(
            _div(
              _mul(
                _mul(this.coinPriceInfo.close, newNum),
                this.coinSymbolInfo.shareNumber
              ),
              typeId
            ),
            6
          );
        }
      } else {
        this.marginSellValue = "0";
      }
    },
    //币币交易 监听买入币种输入的值
    "spotBuyCoinForm.price": function (newPrice, oldPrice) {
      this.calculateAmount("spotBuyCoinForm", this.spotTabValue);
    },
    "spotBuyCoinForm.num": function (newNum, oldNum) {
      this.calculateAmount("spotBuyCoinForm", this.spotTabValue);
    },
    "spotBuyCoinForm.amount": function (newAmount, oldAmount) {
      this.calculatePriceOrNum("spotBuyCoinForm", this.spotTabValue);
    },
    //币币交易 监听卖出币种输入的值
    "spotSellCoinForm.price": function (newPrice, oldPrice) {
      this.calculateAmount("spotSellCoinForm", this.spotTabValue);
    },
    "spotSellCoinForm.num": function (newNum, oldNum) {
      this.calculateAmount("spotSellCoinForm", this.spotTabValue);
    },
    "spotSellCoinForm.amount": function (newAmount, oldAmount) {
      this.calculatePriceOrNum("spotSellCoinForm", this.spotTabValue);
    },
    spotTabValue: function (newTabValue, oldTabValue) {
      if (newTabValue) {
        const forms = ["spotBuyCoinForm", "spotSellCoinForm"];
        this.spotBuySlider = 0;
        this.spotSellSlider = 0;
        forms.forEach((form) => {
          this[form].price = "";
          this[form].num = "";
          this[form].amount = "";
        });
      }
    },
    ustaTabValue: function (newTabValue, oldTabValue) {
      if (newTabValue) {
        const forms = ["ustaBuyCoinForm", "ustaSellCoinForm"];
        this.ustaBuySlider = 0;
        this.ustaSellSlider = 0;
        forms.forEach((form) => {
          this[form].price = "";
          this[form].num = "";
        });
      }
    },
    // "$route.query.symbol"(newSymbol) {
    //   console.log("newSymbol====>", newSymbol);
    //   this.initCoinInfo(this.$route.query.type);
    // },
  },
  mounted() {
    this.symbol = this.$route.query.symbol;
    this.queryType = this.$route.query.type;
    this.initCoinInfo(this.$route.query.type);
    Object.assign(this.currentCoinInfo, this.coinSymbolInfo);
    this.subscribeTrades(this.currentCoinInfo);
    document.addEventListener(
      "event_tradeSymbolChange",
      this.eventTradeSymbolChange
    );
    this.getCanUseAmount({
      param1: "USDT",
      param2: 1,
    });
    // this.getCycleList();
  },
  beforeDestroy() {
    this.subKey && PubSub.unsubscribe(this.subKey);
    document.removeEventListener(
      "event_tradeSymbolChange",
      this.eventTradeSymbolChange
    );

    this.subscribeClientList.forEach((subKey2) => {
      subKey2 && PubSub.unsubscribe(subKey2);
    });
  },
  directives: {
    "my-click": {
      bind(el, binding, vnode) {
        const item = binding.value;
        el.addEventListener("click", () => {
          vnode.context._checkedShowDepth(item);
        });
      },
    },
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    upDateUser() {
      this.getUserInfo();
    },
    // 封装映射逻辑到一个函数中
    getType(tabsValue) {
      const typeMapping = {
        miao: "sec",
        bb: "spot",
        uyue: "usta",
      };
      // 使用函数内部的默认值，确保了函数的独立性和可重用性
      const defaultType = "sec";
      return typeMapping[tabsValue] || defaultType;
    },
    clickCur(item) {
      let type = this.getType(this.tabsValue);
      this.$router.push({
        path: "/trade/index",
        query: {
          type,
          symbol: item.coin,
        },
      });
    },
    initType(type) {
      if (type == "sec") {
        this.type = "secondContract";
      } else {
        this.type = "detail";
      }
    },
    initCoinInfo(type) {
      let typeCoinList;
      if (type == "sec") {
        this.getSecondContractOrder(0);
        this.getSecondContractOrder(1);

        typeCoinList = "secondContractCoinList";
      } else {
        if (type == "spot") {
          typeCoinList = "spotCoinList";
          this.tabsValue = "bb";
          this.tableList = this.spotCoinList;
          this.getSpotContractOrder(0);
          this.getSpotContractOrder(1);
        } else {
          typeCoinList = "contractCoinList";
          this.tabsValue = "uyue";
          this.getUstaContractOrder(0);
          // this.getUstaContractOrder(1);
          this.contractHistoryList(0);
          this.contractHistoryList(1);
          this.contractLossList();
        }
      }

      //存本地
      if (typeCoinList) {
        localStorage.setItem(
          "tradeInfo",
          JSON.stringify({
            typeCoinList,
            symbol: this.symbol,
          })
        );
      }

      // 使用 find 方法来查找匹配的项
      let matchedItem = this[typeCoinList].find(
        (item) => item.coin == this.symbol
      );

      // 如果找不到匹配的项，则使用默认值 "btc"
      this.coinSymbolInfo = matchedItem
        ? matchedItem
        : this[typeCoinList].find((item) => item.coin == "btc");
      console.log("coinSymbolInfo====>", this.coinSymbolInfo);
      let newcoin = this.coinSymbolInfo;
      if (type == "sec") {
        //获取秒合约秒数周期列表
        this.getCycleList(this.coinSymbolInfo.id);
      } else if (type == "usta") {
        if (newcoin.leverage) {
          newcoin.leverage.split(",").forEach((ele) => {
            this.numList.push({
              name: ele + "X",
              id: ele,
            });
          });

          this.transactionNum = this.numList[0].name;
        }
      }
      this.initType(type);
    },
    handleBgSize(count, maxCount) {
      return _toFixed(_mul(_div(count || 0, maxCount), 100), 2);
    },
    formatFixed(value) {
      return _toFixed(value, 4);
    },
    formatPrice(value) {
      return priceFormat(value);
    },
    formatCount(value) {
      return countFormat(value);
    },
    formatCountDiv(amount, price) {
      return countFormat(_div(amount, price));
    },
    //获取当前可用货币余额（common）
    getCanUseAmount(param) {
      // console.log("asset====>", this.userInfo.asset);
      // console.log("param.param2====>", param.param2);
      const overvTableData = this.userInfo.asset.filter((item) => {
        return item.type == param.param2;
      });
      const filteredData = overvTableData.filter((dataItem) => {
        return param.param1.includes(dataItem.symbol.toUpperCase());
      });
      console.log("filteredData====>", filteredData);
      if (filteredData.length > 0 && filteredData[0].hasOwnProperty("amout")) {
        this.canUseAmount = filteredData[0].amout;
      } else {
        // 处理无法找到匹配项或匹配项缺少属性的情况
        this.canUseAmount = 0; // 或者设定其他默认值
      }
      //console.log("this.canUseAmount", this.canUseAmount);
      // console.log("this.canUseAmount==tyep", typeof this.canUseAmount);
    },
    //左边深度相关
    _checkedShowDepth(item) {
      // console.log("887777777");
      this.depthsDecimals = item.label;
      if (item.value != this.showDepth) {
        Object.assign(this.showDepth, item);
      }
    },
    setMoneyFun() {},
    generSubKey() {
      //console.log("0000000");
      this.subKey = PubSub.subscribe(socketDict.DETAIL, (key, data) => {
        // console.log("data==========>", data);
        if (data.symbol && data.symbol == this.coinSymbolInfo.coin) {
          if (this.coinPriceInfo.close && this.showDepthList.length) {
            // console.log("11111111111111");
            this.getMockDataListThrottle();
          } else {
            this.showDepthList = this.showDepthListDict
              .filter((elem) => elem.min * 30 < this.coinPriceInfo.close)
              .slice(-4);
            this.depthsDecimals = this.showDepthList[0].label;
            Object.assign(this.showDepth, this.showDepthList[0]);
            //console.log("222222222");
            this.getMockDataList();
          }
        }
      });
    },
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getIntegerPart(number) {
      var integerPart = Math.floor(number); // 获取整数部分
      let temp = Math.pow(10, integerPart.toString().length - 1);
      if (integerPart < 10) {
        temp = Math.pow(10, 5 - number.toString().split(".")[1].length);
      }
      return temp;
    },
    getMockDataListThrottle: _.throttle(function () {
      this.getMockDataList();
    }, 1000),
    getMockDataList() {
      setTimeout(
        this.getMockDataListThrottle,
        this.getRandomInteger(900, 1600)
      );
      let price = this.coinPriceInfo.close;
      //console.log("price=====>", price);
      let coefficient = 1 / this.getIntegerPart(price);
      let aggregationFactor = this.showDepth.min;
      let countFactor = aggregationFactor * 1000;
      if (price < 1000) {
        countFactor = aggregationFactor * 10 ** (`${price}`.length - 1);
      }
      if (!price || !Number(aggregationFactor)) {
        this.maxAskCount = 0;
        this.maxBidCount = 0;
        //console.log("222222222");
        Object.assign(
          this.asksList,
          this.asksList.map((elem) => {
            elem.close = 0;
            elem.count = 0;
            return elem;
          })
        );
        Object.assign(
          this.bidsList,
          this.asksList.map((elem) => {
            elem.price = 0;
            elem.count = 0;
            return elem;
          })
        );
        return;
      }

      // 生成数量 大 -> 小
      let tempAsksList = [];
      let tempBidsList = [];
      let hashCount = _mul(_mul(Math.random(), coefficient), countFactor);
      if (price < 10) {
        hashCount = _mul(_mul(Math.random(), coefficient), countFactor);
      }

      for (let i = 1; i <= this.rows * 2; i++) {
        let randomCount =
          _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient);
        let tempObj = {
          price: _add(_add(price, i * aggregationFactor), 0),
          count: randomCount,
        };
        tempAsksList.push(tempObj);
        tempAsksList = tempAsksList.sort((a, b) => a.price - b.price);
      }

      for (let i = 1; i <= this.rows * 2; i++) {
        let randomCount =
          _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient);

        let tempObj = {
          price: _sub(_sub(price, i * aggregationFactor), 0),
          count: randomCount,
        };
        tempBidsList.push(tempObj);
        tempBidsList = tempBidsList.sort((a, b) => b.price - a.price);
      }
      this.maxAskCount = Math.max(
        ...tempAsksList.filter((e, i) => i < this.rows).map((e) => e.count)
      );
      this.maxBidCount = Math.max(
        ...tempBidsList.filter((e, i) => i < this.rows).map((e) => e.count)
      );
      Object.assign(this.asksList, tempAsksList);
      Object.assign(this.bidsList, tempBidsList);
    },
    searchCoin(value) {
      this.initALLQuotesData();
      if (value) {
        this.tableList = this.tableList.filter((item) => {
          return item.coin.includes(value.toLowerCase());
        });
      }
    },
    initALLQuotesData() {
      if (this.tabsValue == "miao") {
        this.tableList = this.secondContractCoinList;
      } else if (this.tabsValue == "bb") {
        this.tableList = this.spotCoinList;
      } else {
        this.tableList = this.contractCoinList;
      }
    },
    //行情
    tabsClick(e) {
      // console.log("e====>", e);
      this.tableList = [];
      if (e.name == "miao") {
        this.$router.push({
          path: "/trade/index",
          query: {
            type: "sec",
          },
        });
        this.tableList = this.secondContractCoinList;
      } else if (e.name == "bb") {
        this.tableList = this.spotCoinList;
        this.$router.push({
          path: "/trade/index",
          query: {
            type: "spot",
          },
        });
      } else {
        this.tableList = this.contractCoinList;
        this.$router.push({
          path: "/trade/index",
          query: {
            type: "usta",
          },
        });
      }
    },
    //成交
    async subscribeTrades(params) {
      let marketTradeKey = PubSub.subscribe(socketDict.TRADE, (key, data) => {
        // console.log('实时成交', data, data.data.tick.data[0].price)
        // 实时成交
        if (data.symbol == params.coin && data.data.tick.data) {
          let tempDataList = data.data.tick.data;
          if (tempDataList.length >= this.dealRows) {
            Object.assign(this.dealList, tempDataList);
          } else {
            this.dealList.splice(this.dealRows - tempDataList.length);
            this.dealList.unshift(...tempDataList);
          }
        }
      });
      this.subscribeClientList.push(marketTradeKey);
    },
    /**
     * 交易对监听
     */
    eventTradeSymbolChange: debounce(function (e) {
      // 监听币种切换
      // console.log("监听币种切换", e.detail.coinInfo);
      let tempCoinInfo = e.detail.coinInfo;
      Object.assign(this.currentCoinInfo, tempCoinInfo);
      this.subscribeTrades(this.currentCoinInfo);
      this.dataList.length = 0;
    }, 200),
    //U本位合约操作
    clickUstaTab(e) {
      this.ustaTabValue = e.name;
    },
    //委托订单列表
    getUstaContractOrder(status) {
      getUstaContractOrder({
        status,
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          this.ustaCurOrderList = res.data.rows;
          this.ustaOrderLen1 = res.data.total;
          // if (status == 0) {
          // } else {
          //   this.ustaHisOrderList = res.data.rows;
          //   this.ustaOrderLen2 = res.data.total;
          // }
        }
      });
    },
    //持仓列表
    contractHistoryList(status) {
      contractHistoryList({
        status,
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          if (status == 0) {
            this.positionList = res.data.rows;
            // console.log("positionList====>",res.data);
            this.ustaOrderLen3 = res.data.total;
          } else {
            this.ustaHisOrderList = res.data.rows;
            this.ustaOrderLen2 = res.data.total;
          }
        }
      });
    },

    //止盈止损列表
    contractLossList() {
      contractLossList({
        pageNum: 1,
        pageSize: 10,
      }).then((res) => {
        if (res.data.code == 200) {
          this.ustaLossList = res.data.rows;
          this.ustaOrderLen4 = res.data.total;
        }
      });
    },

    //U本位下单操作
    submitUcontract(type) {
      // this.$message({
      //   message: this.$t('trade.downApp'),
      //   type: "success",
      // })
      // return
      const delegateType = this.ustaTabValue == "first" ? 0 : 1;
      if (type == 0) {
        this.showLoadingThree1 = true
      } else {
        this.showLoadingThree2 = true
      }
      const delegatePrice =
        type == 0 ? this.ustaBuyCoinForm.price : this.ustaSellCoinForm.price;
      const delegateTotal =
        type == 0 ? this.ustaBuyCoinForm.num : this.ustaSellCoinForm.num;
      submitUcontract({
        symbol: this.coinSymbolInfo.coin,
        leverage: this.transactionNum.substr(0, this.transactionNum.length - 1),
        delegatePrice,
        delegateTotal,
        type,
        delegateType,
      }).then((res) => {
        this.showLoadingThree1 = false
        this.showLoadingThree2 = false
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          // 调用U本位订单列表接口
          this.contractHistoryList(0);
          this.contractHistoryList(1);
        }
      }).catch(() => {
        this.showLoadingThree1 = false
        this.showLoadingThree2 = false
      })
    },
    //极速平仓
    stopOrder(id) {
      stopOrder({
        id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.contractHistoryList(0);
        }
      });
    },
    //U本位订单--取消
    cancelUstaOrder(id) {
      canCelOrder(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.getUstaContractOrder(0);
        }
      });
    },
    //止盈止损撤单
    stoplossBullshit(id) {
      cancelLoss(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.contractLossList();
        }
      });
    },
    filterUstaData(value) {
      console.log("value===>", value);
      if (value == "curPosition") {
        this.positionList = this.positionList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      } else if (value == "cuwei") {
        this.ustaCurOrderList = this.ustaCurOrderList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      } else if (value == "loss") {
        this.ustaLossList = this.ustaLossList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      } else {
        this.ustaHisOrderList = this.ustaHisOrderList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      }
    },
    changeNum(e) {
      this.transactionNum = e;
    },
    changeUstaBuySider(value) {
      // this.ustaBuySider = value;
      let priceNew;
      if (this.ustaTabValue == "second") {
        // 市价委托
        priceNew = this.coinPriceInfo.close;
      } else {
        // 限价委托
        priceNew = this.ustaBuyCoinForm.price;
      }
      if (!priceNew) {
        this.ustaBuySlider = 0;
        return;
      }
      let numberSlider;
      // 可用余额/合约面值
      // availableBalance/shareNumber
      // 可用余额/合约面值
      // availableBalance/shareNumber

      numberSlider = _div(
        _div(
          _mul(
            this.avaiUstaBalance,
            this.transactionNum.substr(0, this.transactionNum.length - 1)
          ),
          priceNew
        ),
        this.coinSymbolInfo.shareNumber
      );

      // 向下取整
      this.ustaBuyCoinForm.num = Math.floor(
        _mul(numberSlider, _div(value, 100))
      );
    },
    changeUstaSellSider(value) {
      // this.ustaSellSlider = value;
      let priceNew;
      if (this.ustaTabValue == "second") {
        // 市价委托
        priceNew = this.coinPriceInfo.close;
      } else {
        // 限价委托
        priceNew = this.ustaSellCoinForm.price;
      }
      if (!priceNew) {
        this.ustaSellSlider = 0;
        return;
      }
      let numberSlider;
      // 可用余额/合约面值
      // availableBalance/shareNumber
      // 可用余额/合约面值
      // availableBalance/shareNumber
      numberSlider = _div(
        _div(
          _mul(
            this.avaiUstaBalance,
            this.transactionNum.substr(0, this.transactionNum.length - 1)
          ),
          priceNew
        ),
        this.coinSymbolInfo.shareNumber
      );

      // 向下取整
      this.ustaSellCoinForm.num = Math.floor(
        _mul(numberSlider, _div(value, 100))
      );
    },

    //币币交易操作
    clickSpotTab(e) {
      this.spotTabValue = e.name;
    },
    //币币交易下单操作
    submitOrderCurrencyApi(type) {
      // this.$message({
      //   message: this.$t('trade.downApp'),
      //   type: "success",
      // })
      // return
      if (type == 'buy') {
        this.showLoadingTwo1 = true
      } else {
        this.showLoadingTwo2 = true
      }
      const delegateTotal =
        type == "buy"
          ? this.spotBuyCoinForm.amount
          : this.spotSellCoinForm.amount;
      const delegatePrice =
        type == "buy"
          ? this.spotBuyCoinForm.price
          : this.spotSellCoinForm.price;
      const delegateValue =
        type == "buy" ? this.spotBuyCoinForm.num : this.spotSellCoinForm.num;
      const delegateType = this.spotTabValue == "first" ? 0 : 1;
      const operateType = type == "buy" ? 0 : 1;
      submitOrderCurrencyApi({
        symbol: this.coinSymbolInfo.coin,
        coin: "usdt",
        delegateTotal,
        delegatePrice,
        delegateValue,
        delegateType,
        type: operateType,
      }).then((res) => {
        this.showLoadingTwo1 = false
        this.showLoadingTwo2 = false
        if (res.data.code == 200) {
          this.getUserInfo();
          //获取币币交易订单列表
          // console.log("币币交易====》", res.data.data);
          this.$message.success(res.data.msg);
          this.getSpotContractOrder(0);
        }
      }).catch(() => {
        this.showLoadingTwo1 = false
        this.showLoadingTwo2 = false
      })
    },
    // 撤单--spot
    cancelSpotOrder(id) {
      cancelOrderCurrencyApi(id).then((res) => {
        if (res.data.code == 200) {
          this.getUserInfo();
          this.$message.success(res.data.msg);
          this.getSpotContractOrder(0);
        }
      });
    },
    //币币交易订单列表   status: 0 当前委托 1 历史委托
    getSpotContractOrder(status) {
      getSpotContractOrder({
        isAsc: "desc",
        orderByColumn: "updateTime",
        status,
        pageSize: 10,
        pageNum: 1,
      }).then((res) => {
        if (res.data.code == 200) {
          // this.spotOrderList=res.data.rows;
          if (status == 0) {
            this.curSpotLen = res.data.total;
            this.curSpotList = res.data.rows;
          } else {
            this.hisSpotLen = res.data.total;
            this.hisSpotList = res.data.rows;
          }

          //console.log("this.spotOrderObj===>",this.spotOrderObj);
        }
      });
    },
    filterSpotData(value) {
      // console.log("value===>", value);
      if (value == "cuwei") {
        this.curSpotList = this.curSpotList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      } else {
        this.hisSpotList = this.hisSpotList.filter((item) => {
          return item.symbol == this.coinSymbolInfo.coin;
        });
      }
    },
    //拖动buySider值
    changeBuySider(value) {
      // console.log("changeBuySider====>", value);
      if (
        !this.spotBuyCoinForm.num &&
        !this.spotBuyCoinForm.price &&
        this.spotTabValue == "first"
      ) {
        this.spotBuySlider = 0;
      } else {
        if (this.availableBalance > 0) {
          if (this.spotTabValue == "first") {
            this.spotBuyCoinForm.num = (
              (this.availableBalance / this.spotBuyCoinForm.price) *
              (value / 100)
            ).toFixed(4);
          } else {
            this.spotBuyCoinForm.price = "";
            this.spotBuyCoinForm.amount = this.availableBalance * (value / 100);
          }
        } else {
          this.spotBuyCoinForm.num = 0;
        }
      }
    },
    changeSellSider(value) {
      if (
        !this.spotSellCoinForm.num &&
        !this.spotSellCoinForm.price &&
        this.spotTabValue == "first"
      ) {
        this.spotSellSlider = 0;
      } else {
        if (this.avaiSpotBalance > 0) {
          if (this.spotTabValue == "first") {
            this.spotSellCoinForm.num = (
              (this.avaiSpotBalance / this.spotSellCoinForm.price) *
              (value / 100)
            ).toFixed(4);
          } else {
            this.spotSellCoinForm.price = "";
            this.spotSellCoinForm.amount = this.avaiSpotBalance * (value / 100);
          }
        } else {
          this.spotSellCoinForm.num = 0;
        }
      }
    },
    // 计算数量
    calculateAmount(type, tabValue) {
      if (tabValue == "first") {
        if (this[type].price && this[type].num) {
          this[type].amount = (this[type].price * this[type].num).toFixed(4);
        } else {
          // Check if this[type].num is empty or undefined
          if (!this[type].num) {
            this[type].amount = 0;
          }
        }
      } else {
        //console.log("num====>", this[type].num);
        if (this.coinPriceInfo.close && this[type].num) {
          this[type].amount = this.coinPriceInfo.close * this[type].num;
        } else {
          // Check if this[type].num is empty or undefined
          if (!this[type].num) {
            this[type].amount = 0;
          }
        }
      }
    },
    // 计算价格
    calculatePriceOrNum(type, tabValue) {
      if (tabValue == "first") {
        if (this[type].price && this[type].amount) {
          this[type].num = this[type].amount / this[type].price;
        } else if (this[type].num && this[type].amount) {
          this[type].price = this[type].amount / this[type].num;
        }
      } else {
        if (this.coinPriceInfo.close && this[type].amount) {
          this[type].num = this[type].amount / this.coinPriceInfo.close;
        } else if (this[type].num && this[type].amount) {
          this.coinPriceInfo.close = this[type].amount / this[type].num;
        }
      }
    },
    //秒合约操作
    setSeconds(item) {
      this.activeSecond = item.id;
      this.placeRise = item.minAmount;
      this.placeFall = item.minAmount;
      this.cycleObj = item;
    },
    scrollTo2() {
      let width = this.cycleList.length * 200;
      this.$refs.innerContainer.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
            // preventDefault: false,
            // bounce: false,
            // probeType: 3,
            // mouseWheel: {
            //   speed: 20,
            // },
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    /** 获取周期 */
    getCycleList(secondId) {
      getPeriodList({
        secondId,
      }).then((res) => {
        if (res.data.code == 200) {
          //console.log("周期列表====>", res.data.data);
          this.cycleList = res.data.data;
          this.cycleObj = this.cycleList[0];
          this.activeSecond = this.cycleObj.id;
          // this.scrollTo2();
        }
      });
    },
    //秒合约下单 status   1是买入 else是卖出
    createSecondContractOrder(status) {
      this.titleFlag = status;
      this.secInvestNum = status == 1 ? this.riseInput : this.fallInput;
      // this.$message({
      //   message: this.$t('trade.downApp'),
      //   type: "success",
      // })
      // return
      if (status == 1) {
        this.showLoadingOne1 = true
      } else {
        this.showLoadingOne2 = true
      }
      createSecondContractOrder({
        betContent: status,
        betAmount: this.secInvestNum,
        openPrice: this.coinPriceInfo.close,
        symbol: this.coinSymbolInfo.symbol,
        coinSymbol: this.coinSymbolInfo.coin,
        baseSymbol: "usdt",
        periodId: this.cycleObj.id,
      }).then((res) => {
        this.showLoadingOne1 = false
        this.showLoadingOne2 = false
        if (res.data.code == 200) {
          this.orderId = res.data.data.id;
          this.getSecondContractOrder(0, true);
          setTimeout(() => {
            this.showCountdown = true;
            this.buyPrice = res.data.data.openPrice;
            this.countDown = Number(this.cycleObj.period);
            this.countDownAll = Number(this.cycleObj.period);
            this.dialogVisible = true;
            //console.log("关闭倒计时");
          }, 1000);
          this.$message({
            message: res.data.msg,
            type: "success",
          });
        }
      }).catch(() => {
        this.showLoadingOne1 = false
        this.showLoadingOne2 = false
      })
    },
    //订单详情
    //秒合约切换tab
    // orderTabsClick(e) {
    //   this.orderTabsValue = e.name;
    //   if (e.name == "cuwei") {
    //     this.getSecondContractOrder(0);
    //   } else {
    //     this.getSecondContractOrder(1);
    //   }
    // },
    //秒合约订单列表 status 0 是当前委托  1是历史委托
    getSecondContractOrder(status, countdownEnd) {
      // console.log("countdownEnd===>", countdownEnd);
      getSecondContractOrder({
        status,
      }).then((res) => {
        if (res.data.code == 200) {
          if (status == 0) {
            this.curOrderTableData = res.data.data;
            if (res.data.data.length > 0 && countdownEnd) {
              // console.log("orderObj00000000===>", res.data.data[0]);
              this.orderObj = res.data.data[0];
            }
          } else {
            this.hisOrderTableData = res.data.data;
          }
        }
      });
    },
    filterSecData(value) {
      // console.log("value===>", value);
      if (value == "cuwei") {
        this.curOrderTableData = this.curOrderTableData.filter((item) => {
          return item.coinSymbol == this.coinSymbolInfo.coin;
        });
      } else {
        this.hisOrderTableData = this.hisOrderTableData.filter((item) => {
          return item.coinSymbol == this.coinSymbolInfo.coin;
        });
      }
    },
    // clickCheckBox(e) {
    //   if (e) {
    //     this.orderTableData = this.orderTableData.filter((item) => {
    //       return item.coinSymbol == "adb";
    //     });
    //   } else {
    //     // console.log("orderTabsValue===>", this.orderTabsValue);
    //     if (this.orderTabsValue == "cuwei") {
    //       this.getSecondContractOrder(0);
    //     } else {
    //       this.getSecondContractOrder(1);
    //     }
    //   }
    // },
  },
};
</script>

<style lang="sass" scoped>
@import './index.scss'

</style>
