<template>
  <div class="my_order_main">
    <div class="title bold flex-start">{{ $t("assets.myOrder") }}</div>
    <div class="inner_box">
      <!-- {{coinPriceInfo}}--coinPriceInfo -->
      <!-- 第一个tab -->
      <div class="out_tabs_box">
        <div class="out_tabs_inner">
          <el-tabs v-model="tabsValue" @tab-click="tabsClick">
            <el-tab-pane
              :key="item.id"
              :label="$t(item.label)"
              v-for="item in tabsList"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 第二个tab -->
      <div class="in_tabs_box">
        <div class="in_tabs_inner">
          <!-- 秒合约tabs -->
          <el-tabs
            v-model="tabsValue2"
            v-show="tabsValue == 'miao'"
            @tab-click="tabsClick2"
          >
            <el-tab-pane
              :key="item.name"
              :label="item.label"
              v-for="item in secTabsList"
              :name="item.name"
            >
            </el-tab-pane>
            <div>
              <el-checkbox v-model="checked1" @change="clickCheckBox1">{{
                $t("assets.hideOtherPairs")
              }}</el-checkbox>
              <i class="el-icon-refresh-right"></i>
            </div>
          </el-tabs>

          <!-- 币币交易tabs -->
          <el-tabs
            v-model="tabsValue3"
            v-show="tabsValue == 'bb'"
            @tab-click="tabsClick3"
          >
            <el-tab-pane
              :key="item.name"
              :label="item.label"
              v-for="item in spotTabsList"
              :name="item.name"
            >
            </el-tab-pane>
            <div>
              <el-checkbox v-model="checked2" @change="clickCheckBox2">{{
                $t("assets.hideOtherPairs")
              }}</el-checkbox>
              <i class="el-icon-refresh-right"></i>
            </div>
          </el-tabs>

          <!--u本位合约 tabs -->
          <el-tabs
            v-model="tabsValue4"
            v-show="tabsValue == 'uben'"
            @tab-click="tabsClick4"
          >
            <el-tab-pane
              :key="item.name"
              :label="item.label"
              v-for="item in ustaTabsList"
              :name="item.name"
            >
            </el-tab-pane>
            <div>
              <el-checkbox v-model="checked3" @change="clickCheckBox3">{{
                $t("assets.hideOtherPairs")
              }}</el-checkbox>
              <i class="el-icon-refresh-right"></i>
            </div>
          </el-tabs>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search_section flex-start">
        <el-select
          v-model="searchValue"
          :placeholder="$t('assets.transacPairs')"
          clearable
        >
          <el-option
            v-for="option in tabsValue == 'miao'
              ? secCoinOption
              : tabsValue == 'bb'
              ? spotCoinOption
              : ustaCoinOption"
            :key="option.id"
            :label="option.showSymbol"
            :value="option.showSymbol"
          ></el-option>
        </el-select>
        <el-button type="primary" @click="serchCoin">{{
          $t("assets.search")
        }}</el-button>
        <el-button style="background: #000; color: #fff" @click="resetTable">{{
          $t("assets.reset")
        }}</el-button>
      </div>

      <!-- 秒合约 -->
      <div v-show="tabsValue == 'miao'">
        <!-- 当前委托 -->
        <div class="table_content" v-if="tabsValue2 == 'cuwei'">
          <el-table :data="secCurOrderList" style="width: 100%">
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.coinSymbol.toUpperCase() }}/{{
                    scope.row.baseSymbol.toUpperCase()
                  }}
                </span>
                <span v-if="Number(scope.row.betContent)" class="rise">{{
                  $t("trade.buyRise")
                }}</span>
                <span v-else class="fall"> {{ $t("trade.buyFall") }} </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('assets.openPrice')"
              align="center"
            >
            </el-table-column>

            <el-table-column :label="$t('assets.curPrice')" align="center">
              <template slot-scope="scope">
                <span>
                  {{ coinPriceInfo.close }}
                  {{
                    scope.row.baseSymbol
                      ? scope.row.baseSymbol.toUpperCase()
                      : ""
                  }}</span
                >
              </template>
            </el-table-column>

            <el-table-column :label="$t('assets.num')" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.betAmount }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.profitAndLoss')" align="center">
              <template slot-scope="scope">
                <span
                  :class="
                    profitAndlossColor(
                      scope.row.betAmount,
                      scope.row.rewardAmount
                    )
                  "
                  >{{
                    (
                      parseFloat(scope.row.rewardAmount) -
                      parseFloat(scope.row.betAmount)
                    ).toFixed(2)
                  }}
                  {{ scope.row.baseSymbol.toUpperCase() }}</span
                >
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.createTime')" align="center">
              <template slot-scope="scope">
                <span>{{
                  formatTimestampWithTimezone(
                    scope.row.params.createTime,
                    "DD/MM/YYYY HH:mm",
                    true
                  )
                }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.time')" align="right">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}s</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.countdown')" align="right">
              <template slot-scope="scope">
                <span>{{
                  formatTime(formatCountDownTime(scope.row.type))
                }}</span>
              </template>
            </el-table-column>

            <!-- <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.coinSymbol.toUpperCase() }}/{{
                    scope.row.baseSymbol.toUpperCase()
                  }}
                </span>
                <span v-if="scope.row.status == 1" style="color: green">{{
                  $t("trade.buyRise")
                }}</span>
                <span v-else style="color: red">
                  {{ $t("trade.buyFall") }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('assets.openPrice')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="curPrice"
              :label="$t('assets.curPrice')"
              align="center"
            >
            </el-table-column>

            <el-table-column :label="$t('assets.num')" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.betAmount }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.profitAndLoss')">
              <template slot-scope="scope">
                <span
                  :class="
                    profitAndlossColor(
                      scope.row.rewardAmount,
                      scope.row.betAmount
                    )
                  "
                  >{{
                    (
                      parseFloat(scope.row.rewardAmount) -
                      parseFloat(scope.row.betAmount)
                    ).toFixed(2)
                  }}
                  {{ scope.row.baseSymbol.toUpperCase() }}</span
                >
              </template>
            </el-table-column>

            <el-table-column :label="$t('assets.createTime')" align="right">
              <template slot-scope="scope">
                <span>{{
                  formatTimestampWithTimezone(
                    scope.row.params.createTime,
                    "DD/MM/YYYY HH:mm",
                    true
                  )
                }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.time')" align="right">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}s</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="closeTime"
              :label="$t('assets.countdown')"
              align="right"
            >
            </el-table-column> -->
            <!-- <template #empty>
              <div style="margin-top: 10px">
                <img
                  :src="require('@/assets/image/noData.png')"
                  alt="Empty Image"
                  width="140"
                />
                <p>{{ $t("utils.noData") }}</p>
              </div>
            </template> -->
          </el-table>
        </div>
        <!-- 历史委托 -->
        <div class="table_content" v-else>
          <tableData :data="secHisOrderList"></tableData>
          <!-- <el-table :data="secHisOrderList" style="width: 100%">
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.coinSymbol.toUpperCase() }}/{{
                    scope.row.baseSymbol.toUpperCase()
                  }}
                </span>
                <span v-if="scope.row.status == 1" style="color: green">
                  {{ $t("trade.buyRise") }}</span
                >
                <span v-else style="color: red">
                  {{ $t("trade.buyFall") }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('assets.openPrice')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              :label="$t('assets.num')"
              align="center"
              prop="betAmount"
            >
            </el-table-column>

            <el-table-column :label="$t('assets.profitAndLoss')">
              <template slot-scope="scope">
                <span
                  :class="
                    profitAndlossColor(
                      scope.row.rewardAmount,
                      scope.row.betAmount
                    )
                  "
                  >{{
                    (
                      parseFloat(scope.row.rewardAmount) -
                      parseFloat(scope.row.betAmount)
                    ).toFixed(2)
                  }}
                  {{ scope.row.baseSymbol.toUpperCase() }}</span
                >
              </template>
            </el-table-column>

            <el-table-column :label="$t('assets.createTime')" align="right">
              <template slot-scope="scope">
                <span>{{
                  formatTimestampWithTimezone(
                    scope.row.params.createTime,
                    "DD/MM/YYYY HH:mm",
                    true
                  )
                }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('assets.time')" align="right">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}s</span>
              </template>
            </el-table-column>

            <el-table-column
              :label="$t('trade.closeTime')"
              prop="closeTime"
              align="right"
            >
              <template slot-scope="scope">
                <span>{{
                  formatTimestampWithTimezone(
                    scope.row.closeTime,
                    "DD/MM/YYYY HH:mm",
                    true
                  )
                }}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="closePrice"
              :label="$t('trade.closePrice')"
              align="right"
            >
            </el-table-column>
          </el-table> -->
        </div>
      </div>

      <!-- 币币交易 -->
      <div v-show="tabsValue == 'bb'">
        <div class="table_content">
          <el-table
            :data="tabsValue3 == 'cuwei' ? curSpotList : hisSpotList"
            style="width: 100%"
          >
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.symbol.toUpperCase() }}/{{
                    scope.row.coin.toUpperCase()
                  }}
                </span>
                <span v-if="scope.row.type == 1" style="color: red">{{
                  $t("trade.sell")
                }}</span>
                <span v-else style="color: green"> {{ $t("trade.buy") }} </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="createTime"
              :label="$t('assets.time')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.commissPrice')"
              align="center"
              prop="delegatePrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.commissNum')"
              align="center"
              prop="dealNum"
            >
            </el-table-column>
            <el-table-column
              :label="$t('assets.num')"
              align="center"
              prop="delegateTotal"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.dealPrice')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column :label="$t('trade.newestPrice')" align="center">
              <template slot-scope="scope">
                <span>{{ allCoinPriceInfo[scope.row.symbol].close }}</span>
              </template>
            </el-table-column>

            <el-table-column
              :label="$t('trade.profitRate')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.profit')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.operate')"
              align="center"
              v-if="tabsValue3 == 'cuwei'"
            >
              <template slot-scope="scope" v-if="scope.row.status == 0">
                <span>
                  <el-button
                    type="primary"
                    @click="$emit('cancelSpotOrder', scope.row.id)"
                    >{{ $t("trade.cancelOrder") }}</el-button
                  >
                </span>
              </template>
            </el-table-column>
          </el-table>
          <!-- <el-table
            :data="tabsValue3 == 'cuwei' ? curSpotList : hisSpotList"
            style="width: 100%"
          >
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.symbol.toUpperCase() }}/{{
                    scope.row.coin.toUpperCase()
                  }}
                </span>
                <span v-if="scope.row.type == 1" style="color: red">{{
                  $t("trade.sell")
                }}</span>
                <span v-else style="color: green"> {{ $t("trade.buy") }} </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="createTime"
              :label="$t('trade.time')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.commissPrice')"
              align="center"
              prop="delegatePrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.commissNum')"
              align="center"
              prop="dealNum"
            >
            </el-table-column>
            <el-table-column
              :label="$t('trade.num')"
              align="center"
              prop="delegateTotal"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.dealPrice')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column :label="$t('trade.newestPrice')" align="center">
              <template slot-scope="scope">
                <span>{{ allCoinPriceInfo[scope.row.symbol].close }}</span>
              </template>
            </el-table-column>

            <el-table-column
              :label="$t('trade.profitRate')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.profit')"
              align="center"
              prop="dealPrice"
            >
            </el-table-column>

            <el-table-column
              :label="$t('trade.operate')"
              align="center"
              prop="dealPrice"
              v-if="tabsValue2 == 'cuwei'"
            >
            </el-table-column>
          </el-table> -->
        </div>
      </div>

      <!-- U本位合约 -->
      <div v-show="tabsValue == 'uben'">
        <!-- 当前持仓 -->
        <div class="table_content" v-show="tabsValue4 == 'curPosition'">
          <!-- <el-table :data="positionList" style="width: 100%">
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.coinSymbol.toUpperCase() }}/{{
                    scope.row.baseSymbol.toUpperCase()
                  }}
                </span>
                <span v-if="scope.row.status == 1" style="color: green">{{
                  $t("trade.buy")
                }}</span>
                <span v-else style="color: red"> {{ $t("trade.sell") }} </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('trade.openInterest')"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('trade.holdCollateralAssets')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="openPrice"
              :label="$t('trade.positionMargin')"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('trade.guarAssetRatio')"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('trade.averOpenPrice')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="openPrice"
              :label="$t('trade.newestPrice')"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="openPrice"
              :label="$t('trade.expectedStrongParity')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="openPrice"
              :label="$t('trade.profitRate')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="openPrice"
              :label="$t('trade.profit')"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="openPrice"
              :label="$t('trade.operate')"
              align="center"
            >
            </el-table-column>
          </el-table> -->
          <el-table :data="positionList" style="width: 100%">
            <el-table-column :label="$t('assets.transacPairs')" align="left">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.symbol.toUpperCase() }}/{{
                    scope.row.baseSymbol
                      ? scope.row.baseSymbol.toUpperCase()
                      : "USDT"
                  }}
                </span>
                <span v-if="!scope.row.type" class="rise">{{
                  $t("trade.goingLong")
                }}</span>
                <span v-else class="fall"> {{ $t("trade.openAir") }} </span>
                <span> {{ scope.row.leverage }}x</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('trade.openInterest')" align="center">
              <template slot-scope="scope">
                <span
                  >{{ scope.row.openNum }} {{ scope.row.symbol.toUpperCase() }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('trade.holdCollateralAssets')"
              align="center"
            >
              <template slot-scope="scope">
                <span> {{ scope.row.adjustAmount }} USDT </span>
              </template>
            </el-table-column>

            <el-table-column :label="$t('trade.positionMargin')" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.remainMargin }} USDT </span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('trade.guarAssetRatio')" align="center">
              <template slot-scope="scope">
                <span>{{ guaranteePrice(scope.row) }}% </span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('trade.averOpenPrice')" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.openPrice }} USDT </span>
              </template>
            </el-table-column>

            <el-table-column :label="$t('trade.newestPrice')" align="center">
              <template slot-scope="scope">
                <span>{{ coinPriceInfo.close }} USDT </span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('trade.expectedStrongParity')"
              align="center"
            >
              <template slot-scope="scope">
                <span>
                  {{ scope.row.closePrice <= 0 ? "--" : scope.row.closePrice }}
                  USDT
                </span>
              </template>
            </el-table-column>

            <el-table-column :label="$t('trade.profitRate')" align="center">
              <template slot-scope="scope">
                <span :class="[_isRFDE(yieldValue(scope.row))]">
                  {{ yieldValue(scope.row) }}%
                </span>
              </template>
            </el-table-column>

            <el-table-column :label="$t('trade.profit')" align="center">
              <template slot-scope="scope">
                <span :class="[_isRFDE(incomeValue(scope.row))]">
                  {{ incomeValue(scope.row) }} USDT
                </span>
              </template>
            </el-table-column>

            <el-table-column
              :label="$t('trade.operate')"
              align="center"
              width="230"
            >
              <template slot-scope="scope">
                <el-button
                  class="cur_p"
                  @click="$emit('stopOrder', scope.row.id)"
                  >{{ $t("trade.closePosition") }}
                </el-button>
                <el-button class="cur_p" @click="openAdjustDialog(scope.row)"
                  >{{ $t("trade.adjustPromiseMoney") }}
                </el-button>
                <el-button
                  class="cur_p"
                  @click="openProfitLossDialog(scope.row, 0)"
                  >{{ $t("trade.stopProfit") }}
                </el-button>
                <el-button
                  class="cur_p"
                  @click="openProfitLossDialog(scope.row, 1)"
                  >{{ $t("trade.stopLoss") }}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 当前委托 -->
        <div class="table_content" v-show="tabsValue4 == 'cuwei'">
          <ustaTable1
            :data="ustaCurOrderList"
            @cancelUstaOrder="cancelUstaOrder"
          ></ustaTable1>
        </div>

        <!-- 止盈止损 -->
        <div class="table_content" v-show="tabsValue4 == 'loss'">
          <ustaTable2
            :data="ustaLossList"
            @stoplossBullshit="stoplossBullshit"
          ></ustaTable2>
        </div>

        <!-- 历史委托 -->
        <div class="table_content" v-show="tabsValue4 == 'hiswei'">
          <ustaTable3 :data="ustaHisOrderList"></ustaTable3>
        </div>
      </div>

      <!-- <el-empty v-if="tableData2.length == 0" :description="$t('utils.noData')">
        <template #image>
          <img :src="require('@/assets/image/noData.png')" alt="Empty Image" />
        </template>
      </el-empty> -->
    </div>

    <!-- 调整保证金 -->
    <el-dialog
      :visible.sync="showMargin"
      :title="$t('trade.adjustPromiseMoney')"
      width="40%"
      :close-on-click-modal="false"
      @close="showMargin = false"
    >
      <el-tabs v-model="margin" @tab-click="handleTabClick">
        <el-tab-pane :label="$t('trade.addMargin')" name="add"> </el-tab-pane>
        <el-tab-pane :label="$t('trade.reduceMargin')" name="reduce">
        </el-tab-pane>

        <div class="popupContent">
          <div class="popupInput">
            <el-input :placeholder="$t('utils.plsInput')" v-model="money">
              <template slot="append">USDT</template>
            </el-input>
          </div>
          <div class="rightFourth">
            <el-slider
              v-model="sliderValue"
              @change="changeAdjustSider"
              :min="0"
              :max="100"
            ></el-slider>
          </div>
          <div class="popupLr flex-start">
            <div>
              {{
                margin == "add" ? $t("trade.maxAdd") : $t("trade.maxReduce")
              }}：
            </div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ atMostValue(adjustObj) }} USDT
            </div>
          </div>
          <div class="popupLr flex-start">
            <div>
              {{
                margin == "add"
                  ? $t("trade.addPriceLabel")
                  : $t("trade.reducePriceLabel")
              }}：
            </div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ qiangpingPrice(adjustObj) }} USDT
            </div>
          </div>
          <div class="determine">
            <el-button
              class="commonBtn_bg"
              type="primary"
              @click="adjustMargin"
              >{{ $t("utils.confirm") }}</el-button
            >
          </div>
        </div>
      </el-tabs>
    </el-dialog>
    <!-- 止赢止损 -->
    <el-dialog
      :visible.sync="showTermination"
      :title="!stopName ? $t('trade.stopProfit') : $t('trade.stopLoss')"
      width="40%"
      :close-on-click-modal="false"
      @close="showTermination = false"
    >
      <el-tabs v-model="margin1" @tab-click="handleTabClick1">
        <el-tab-pane :label="$t('trade.marketPrice')" name="city">
        </el-tab-pane>
        <el-tab-pane :label="$t('trade.limitPrice')" name="limit">
        </el-tab-pane>
        <!-- 止盈触发价格/止损出发价格 -->

        <div class="popupContent">
          <div class="popupName">
            {{
              !stopName
                ? $t("trade.stopProfitTriPrice")
                : $t("trade.stopLossTriPrice")
            }}
          </div>
          <div class="popupInput">
            <el-input
              :placeholder="$t('utils.plsInput')"
              v-model="earnPriceValue"
            >
              <template slot="append">USDT</template>
            </el-input>
          </div>

          <!-- 止盈委托/止损委托 -->
          <div class="popupName">
            {{
              !stopName
                ? $t("trade.stopProfitCommiss")
                : $t("trade.stopLossCommiss")
            }}
          </div>
          <!-- 止盈市价 -->
          <div class="popupInput" v-if="margin1 == 'city'">
            <el-input :readonly="true" class="readInput">
              <template slot="suffix">{{
                $t("trade.tradeOptimalprice")
              }}</template>
            </el-input>
          </div>

          <!-- 止盈限价 -->
          <div class="popupInput" v-if="margin1 == 'limit'">
            <el-input
              type="number"
              v-model="earnDelegatePriceValue"
              :placeholder="$t('utils.plsInput')"
            >
              <template slot="append">USDT</template>
            </el-input>
          </div>

          <!-- 持仓量 -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.openInterest") }}：</div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ adjustObj.openNum }}
              {{
                adjustObj.showCoin
                  ? adjustObj.showCoin
                  : adjustObj.symbol.toUpperCase()
              }}
            </div>
          </div>

          <!-- 平仓均价： -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.closingAverPrice") }}：</div>
            <div
              class="fw-num popupLrNum"
              v-if="Object.keys(adjustObj).length > 0"
            >
              {{ adjustObj.openPrice }} USDT
            </div>
          </div>

          <!-- 最新成交价： -->
          <div class="popupLr flex-start">
            <div>{{ $t("trade.newestDealPrice") }}：</div>
            <div class="fw-num popupLrNum">{{ coinPriceInfo.close }} USDT</div>
          </div>

          <!-- 止盈 -->
          <div class="stopBottom" v-if="margin1 == 'city'">
            <!-- 市场价格至 -->
            {{ $t("trade.marketPriceTo") }}
            <span class="stopBottomSpan fw-num"
              >{{ coinPriceInfo.close }} USDT</span
            >
            <!-- 时将触发止盈委托，成交后预计盈利 -->
            {{ $t("trade.marketPriceToTip") }}
            <span
              class="stopBottomSpan fw-num"
              v-if="Object.keys(adjustObj).length > 0"
              >{{ incomeValue(adjustObj) }} USDT</span
            >
          </div>

          <div class="determine">
            <el-button
              class="commonBtn_bg"
              type="primary"
              @click="stopWinAndLosing(adjustObj)"
              >{{ $t("utils.confirm") }}</el-button
            >
          </div>
        </div>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import tableData from "../../views/trade/components/tableData.vue";
// import { mapGetters } from "vuex";
import {
  countFormat,
  priceFormat,
  _add,
  _sub,
  _div,
  _toFixed,
  _mul,
} from "@/util/decimal";
import { adjustAmount, settLoss } from "@/api/trade.js";
import ustaTable1 from "../../views/trade/components/ustaTable1.vue"; //当前委托
import ustaTable2 from "../../views/trade/components/ustaTable2.vue"; //止盈止损
import ustaTable3 from "../../views/trade/components/ustaTable3.vue"; //历史委托
export default {
  props: {
    secCurOrderList: Array, // 秒合约当前订单列表
    secHisOrderList: Array, // 秒合约历史订单列表
    curSpotList: Array, // 币币交易当前订单列表
    hisSpotList: Array, // 币币交易历史订单列表
    curSpotLen: String, //币币交易当前订单列表长度
    hisSpotLen: String, //币币交易历史订单列表长度
    ustaCurOrderList: Array,
    ustaHisOrderList: Array,
    positionList: Array,
    ustaLossList: Array,
    ustaOrderLen1: String,
    ustaOrderLen2: String,
    ustaOrderLen3: String,
    ustaOrderLen4: String,
    secCoinOption: Array,
    spotCoinOption: Array,
    ustaCoinOption: Array,
    allCoinPriceInfo: Object,
    coinPriceInfo: Object,
    contractCoinList: Array,
    availableBalance: String,
  },
  components: { tableData, ustaTable1, ustaTable2, ustaTable3 },
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      searchValue: "",
      tabsValue: "miao",
      tabsValue2: "cuwei",
      tabsValue3: "cuwei",
      tabsValue4: "curPosition",
      tabsList: [
        {
          label: "assets.secondContract",
          name: "miao",
          id: 1,
        },
        {
          label: "assets.spotContract",
          name: "bb",
          id: 2,
        },
        {
          label: "assets.uContract",
          name: "uben",
          id: 3,
        },
      ],
      // tabsList2: [
      //   {
      //     label: "assets.curCommis",
      //     name: "cuwei",
      //   },
      //   {
      //     label: "assets.historyCommis",
      //     name: "hiswei",
      //   },
      // ],
      tableData2: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      // countDown: 0,
      countdowns: {}, // 用来存储各个倒计时的对象
      margin: "add",
      showMargin: false,
      money: "",
      sliderValue: 0,
      showTermination: false,
      stopName: 0,
      margin1: "city",
      earnPriceValue: "",
      earnDelegatePriceValue: "",
      adjustObj: {},
    };
  },
  computed: {
    secTabsList() {
      return [
        {
          label:
            this.$t("assets.curCommis") +
            "(" +
            this.secCurOrderList.length +
            ")",
          name: "cuwei",
        },
        {
          label:
            this.$t("assets.historyCommis") +
            "(" +
            this.secHisOrderList.length +
            ")",
          name: "hiswei",
        },
      ]; //秒合约订单tab
    },
    spotTabsList() {
      return [
        {
          label: this.$t("assets.curCommis") + "(" + this.curSpotLen + ")",
          name: "cuwei",
        },
        {
          label: this.$t("assets.historyCommis") + "(" + this.hisSpotLen + ")",
          name: "hiswei",
        },
      ]; //币币交易订单tab
    },
    ustaTabsList() {
      return [
        {
          label:
            this.$t("trade.currentPosition") + "(" + this.ustaOrderLen3 + ")",
          name: "curPosition",
        },
        {
          label: this.$t("assets.curCommis") + "(" + this.ustaOrderLen1 + ")",
          name: "cuwei",
        },
        {
          label:
            this.$t("trade.stopProfitStopLoss") +
            "(" +
            this.ustaOrderLen4 +
            ")",
          name: "loss",
        },
        {
          label:
            this.$t("assets.historyCommis") + "(" + this.ustaOrderLen2 + ")",
          name: "hiswei",
        },
      ]; //U本位合约tab
    },
    // 最多/最少增加
    atMostValue() {
      return function (item) {
        let price;
        // 最多增加
        if (this.margin == "add") {
          // type  0 买入 1 卖出
          if (item.type) {
            // openPrice   + adjustAmount / openNum  卖出
            price = _add(item.openPrice, _div(item.adjustAmount, item.openNum));
            price = price > 0 ? price : 0;
          } else {
            price = _sub(item.openPrice, _div(item.adjustAmount, item.openNum));
            price = price > 0 ? price : 0;
          }
        } else {
          // 最多减少
          // adjustAmount -amount   >  adjustAmount -amount  : 0
          price = _sub(item.adjustAmount, item.amount);
          price = price > 0 ? price : 0;
        }

        return price;
      };
    },
    // 强平价格
    qiangpingPrice() {
      return function (item) {
        var price;
        var closeFee = 0;
        if (this.contractCoinList.length > 0) {
          this.contractCoinList.forEach((element) => {
            if (element.coin == item.symbol) {
              closeFee = element.closeFee;
            }
          });
        }
        // adjustAmount + 当前输入的值   ） / 持仓数量（openNum）
        let position;
        if (this.margin == "add") {
          position = _div(
            _add(item.adjustAmount, this.money ? this.money : 0),
            item.openNum
          );
        } else {
          position = _div(
            _sub(item.adjustAmount, this.money ? this.money : 0),
            item.openNum
          );
        }
        // 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
        let commission = _mul(
          _add(item.adjustAmount, this.money ? this.money : 0),
          closeFee
        );
        // 判断type 0  1
        if (item.type == 0) {
          // 开盘价（openPrice） - （adjustAmount + 当前输入的值   ） / 持仓数量（openNum） + 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
          price = _add(_sub(item.openPrice, position), commission);
        } else if (item.type == 1) {
          // （adjustAmount + 当前输入的值   ） / 持仓数量（openNum）  +   开盘价（openPrice）   -  手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
          price = _sub(_add(position, item.openPrice), commission);
        }
        price = price <= 0 ? 0 : price;
        return _toFixed(price, 2);
      };
    },

    // (现金+信用账户内证券市值)/(融资买入金额+融券卖出证券数量*市价+利息及费用)
    // （账户余额+ （当前价*数量openNum） ） / （购买金额（adjustAmount）+ 数量openNum*当前+  利息openFee  ）
    guaranteePrice() {
      return function (item) {
        // console.log("this.coinPriceInfo", this.coinPriceInfo);
        // console.log("availableBalance===>", this.availableBalance);
        if (this.coinPriceInfo.close) {
          let price = _div(
            _add(
              this.availableBalance,
              _mul(this.coinPriceInfo.close, item.openNum)
            ),
            _add(
              _add(
                item.adjustAmount,
                _mul(item.openNum, this.coinPriceInfo.close)
              ),
              item.openFee
            )
          );
          return _toFixed(price);
        }
      };
    },
    /**
     * 收益率
     */
    yieldValue() {
      return function (item) {
        if (this.coinPriceInfo.close) {
          //之前的 收益率：最新价 当买多时 最新价-开仓价均价（openPrice） /开仓价（openPrice） *100
          /**新改的
           * 收益率=(最新价-开仓价)*杠杆倍数/开仓价
           * 最新价coinPriceInfo.value.close
           * 开仓价props.recordListItem.openPrice
           * 杠杆倍数props.recordListItem.leverage
           */
          if (!item.type) {
            let price = _mul(
              _mul(
                _div(
                  _sub(this.coinPriceInfo.close, item.openPrice),
                  item.openPrice
                ),
                100
              ),
              item.leverage
            );
            // rxce 收益率 = ((开盘价-关盘价)*数量)/保证金/杠杆倍数
            if (false) {
              price = _div(
                _div(
                  _mul(
                    _mul(
                      _sub(this.coinPriceInfo.close, item.openPrice),
                      item.openNum
                    ),
                    100
                  ),
                  item.entrustmentValue
                ),
                item.leverage
              );
            }
            return _toFixed(price, 4);
          } else {
            var price = _mul(
              _mul(
                _div(
                  _sub(item.openPrice, this.coinPriceInfo.close),
                  item.openPrice
                ),
                100
              ),
              item.leverage
            );
            /* if (['rxce'].includes(__config._APP_ENV)) {
        price = _div(price, props.recordListItem.leverage)
      } */
            return _toFixed(price, 4);
          }
        }
      };
    },
    /**
     * 收益
     */
    incomeValue() {
      return function (item) {
        if (this.coinPriceInfo.close) {
          // 最新价 当买多时 最新价-开仓价均价（openPrice） * 持仓数量（openNum）
          if (!item.type) {
            var price = _mul(
              _sub(this.coinPriceInfo.close, item.openPrice),
              item.openNum
            );
            return _toFixed(price, 4);
          } else {
            // 卖出  开仓-最新 * 持仓
            var price = _mul(
              _sub(item.openPrice, this.coinPriceInfo.close),
              item.openNum
            );
            return _toFixed(price, 4);
          }
        }
      };
    },
  },
  watch: {
    // countDown(val) {
    //   if (val) {
    //     if (val > 0) {
    //       setTimeout(() => {
    //         this.countDown--;
    //       }, 1000);
    //     }
    //     if (val == 1) {
    //       this.$emit("getSecondContractOrder", 0);
    //       // this.getUserInfo();
    //     }
    //   }
    // },
  },
  mounted() {
    // 在目标页面中访问传递过来的参数对象
    this.tabsValue = "miao";
    // console.log("tt=====>", tt); // 输出 { key: 'value' }
  },
  methods: {
    profitAndlossColor(betAmount, rewardAmount) {
      const a = parseFloat(betAmount);
      const b = parseFloat(rewardAmount);
      if (a > b) {
        return "rise";
      }
      if (a === b) {
        return "";
      }
      if (a < b) {
        return "fall";
      }
    },
    stopWinAndLosing(item) {
      var data = {};
      if (!this.stopName) {
        data = {
          positionId: item.id,
          earnPrice: this.earnPriceValue,
          earnNumber: item.openNum,
          // 0 止盈 1止损
          lossType: 0,
          // 委托类型（0 限价 1 市价）
          delegateType: this.margin1 == "limit" ? 0 : 1,
        };
        if (!data.delegateType) {
          data.earnDelegatePrice = this.earnDelegatePriceValue;
        }
      } else {
        data = {
          positionId: item.id,
          losePrice: this.earnPriceValue,
          loseNumber: this.openNum,
          // 0 止盈 1止损
          lossType: 1,
          // 委托类型（0 限价 1 市价）
          delegateType: this.margin1 == "limit" ? 0 : 1,
        };
        if (!data.delegateType) {
          data.loseDelegatePrice = this.earnDelegatePriceValue;
        }
      }
      if (!data.delegateType) {
        if (this.earnPriceValue && this.earnDelegatePriceValue) {
          settLoss(data).then((res) => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg);
              this.showTermination = false;
              this.$emit("upDateUser");
              this.$emit("contractLossList");
            }
          });
        }
      } else {
        if (this.earnPriceValue) {
          settLoss(data).then((res) => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg);
              this.showTermination = false;
              this.$emit("upDateUser");
              this.$emit("contractLossList");
            }
          });
        }
      }
    },
    handleTabClick1(e) {
      this.margin1 = e.name;
    },
    openProfitLossDialog(item, value) {
      this.showTermination = true;
      this.stopName = value;
      this.adjustObj = item;
    },
    openAdjustDialog(item) {
      this.showMargin = true;
      this.adjustObj = item;
    },
    handleTabClick(e) {
      this.margin = e.name;
      this.money = "";
      this.sliderValue = 0;
    },
    stoplossBullshit(id) {
      this.$emit("stoplossBullshit", id);
    },
    cancelUstaOrder(id) {
      this.$emit("cancelUstaOrder", id);
    },
    formatFixed(value) {
      return _toFixed(value, 4);
    },
    adjustMargin() {
      let data = {
        id: this.adjustObj.id,
        money: this.money,
        // 0 增加保证金 1 减少保证金
        flag: this.margin == "add" ? 0 : 1,
      };
      if (Number(this.money)) {
        adjustAmount(data).then((res) => {
          if (res.data.code == 200) {
            // data.flag 追加成功 : 减少成功
            // showToast(`${!data.flag ? _showName(`additional_success`) : _showName(`reduce_success`)}`)
            this.$message.success(res.data.msg);
            this.showMargin = false;
            this.$emit("upDateUser");
            this.$emit("contractHistoryList", 0);
          }
        });
      }
    },
    changeAdjustSider(value) {
      if (value) {
        let rate = _div(value, 100);
        this.money = _mul(this.availableBalance, rate);
      } else {
        this.money = "";
      }
    },
    startCountdown(type) {
      if (this.countdowns[type]) return; // 如果已经存在倒计时，则不重复启动

      // 初始化倒计时的总秒数，假设为 30 秒
      this.$set(this.countdowns, type, 30);

      this.countdowns[type + "_interval"] = setInterval(() => {
        // 每秒减少1秒
        this.$set(this.countdowns, type, this.countdowns[type] - 1);
        if (this.countdowns[type] == 1) {
          clearInterval(this.countdowns[type + "_interval"]);
          delete this.countdowns[type]; // 倒计时结束后删除对象
          this.$emit("getSecondContractOrder", 0);
          this.$emit("getSecondContractOrder", 1);
          // this.getUserInfo();
        }
      }, 1000);
    },
    formatCountDownTime(type) {
      if (!this.countdowns[type]) {
        // 如果倒计时不存在或已经结束，开始新的倒计时
        this.startCountdown(type);
      }
      return this.countdowns[type];
    },
    serchCoin() {
      // this.resetTable();
      // console.log("searchValue==>",this.searchValue);
      if (this.tabsValue == "miao") {
        this.emitEvent(this.tabsValue2, 0);
      } else if (this.tabsValue == "bb") {
        this.emitEvent(this.tabsValue3, 1);
      } else {
        this.emitEvent(this.tabsValue4, 2);
      }
    },
    resetTable() {
      if (this.tabsValue == "miao") {
        if (this.tabsValue2 == "cuwei") {
          this.$emit("getSecondContractOrder", 0);
        } else {
          this.$emit("getSecondContractOrder", 1);
        }
      } else if (this.tabsValue == "bb") {
        if (this.tabsValue3 == "cuwei") {
          this.$emit("getSpotContractOrder", 0);
        } else {
          this.$emit("getSpotContractOrder", 1);
        }
      } else {
        if (this.tabsValue4 == "curPosition") {
          this.$emit("contractHistoryList", 0);
        } else if (this.orderTabsValue == "cuwei") {
          this.$emit("getUstaContractOrder", 0);
        } else if (this.orderTabsValue == "loss") {
          this.$emit("contractLossList");
        } else {
          this.$emit("contractHistoryList", 1);
        }
      }
    },
    emitEvent(tab, type) {
      this.$emit("searchData", {
        tab,
        searchCoin: this.searchValue,
        type,
      });
    },
    clickCheckBox1(e) {
      if (e) {
        this.$emit("filterSecData", this.tabsValue2);
      } else {
        // console.log("orderTabsValue===>", this.orderTabsValue);
        if (this.tabsValue2 == "cuwei") {
          this.$emit("getSecondContractOrder", 0);
        } else {
          this.$emit("getSecondContractOrder", 1);
        }
      }
    },
    clickCheckBox2(e) {
      if (e) {
        this.$emit("filterSpotData", this.tabsValue3);
      } else {
        // console.log("orderTabsValue===>", this.orderTabsValue);
        if (this.tabsValue3 == "cuwei") {
          this.$emit("getSpotContractOrder", 0);
        } else {
          this.$emit("getSpotContractOrder", 1);
        }
      }
    },
    clickCheckBox3(e) {
      if (e) {
        this.$emit("filterUstaData", this.tabsValue4);
      } else {
        if (this.tabsValue4 == "curPosition") {
          this.$emit("contractHistoryList", 0);
        } else if (this.orderTabsValue == "cuwei") {
          this.$emit("getUstaContractOrder", 0);
        } else if (this.orderTabsValue == "loss") {
          this.$emit("contractLossList");
        } else {
          this.$emit("contractHistoryList", 1);
        }
      }
    },
    tabsClick(tab) {
      this.tabsValue = tab.name;
    },
    tabsClick2(tab) {
      this.tabsValue2 = tab.name;
    },
    tabsClick3(tab) {
      this.tabsValue3 = tab.name;
    },
    tabsClick4(tab) {
      this.tabsValue4 = tab.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
::v-deep.el-table {
  font-size: 12px;
}
::v-deep.el-tabs {
  .el-tabs__nav-wrap::after {
    // height: 0;
  }
  .el-tabs__item {
    height: 55px;
    font-size: 16px;
    line-height: 55px;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__active-bar {
    height: 2px;
  }
}
::v-deep.el-table {
  .el-table__empty-block {
    display: none;
  }
}
.my_order_main {
  width: 1200px;
  margin: auto;
  .title {
    font-size: 36px;
    height: 152px;
    color: #1e2329;
    border-bottom: 1px solid #f1f1f1;
  }
  .inner_box {
    // margin-top: 50px;
    .out_tabs_box {
      .out_tabs_inner {
      }
    }
    .in_tabs_box {
      margin-top: 10px;
      .in_tabs_inner {
        ::v-deep.el-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .el-tabs__nav-wrap::after {
            height: 0;
          }
          .el-tabs__active-bar {
            display: none;
          }
        }
      }
    }
    .search_section {
      // margin-top: 10px;
      gap: 10px;
      ::v-deep.el-select {
        width: 250px;
        .el-input__icon {
          display: none;
        }
      }
    }
    .table_content {
      margin: 30px auto 60px;
    }
  }
}
::v-deep.el-dialog__wrapper .el-dialog .el-dialog__body{
  padding-top: 0 !important;
}

.popupLr,
.determine {
  margin-top: 15px;
}
.determine {
  .el-button {
    width: 100%;
  }
}
.popupName {
  margin-top: 10px;
}
.popupInput {
  margin-top: 10px;
}
.stopBottom {
  margin-top: 15px;
}
::v-deep.el-input {
  .el-input__suffix {
    height: 42px;
    line-height: 42px;
  }
}
::v-deep.readInput .el-input__inner {
  background: #f1f1f1;
}
</style>
