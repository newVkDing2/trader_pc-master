<template>
  <div class="exchange-index fit-tc-primary fit-background-di">
    <div
      class="exchange-full-content fit-background-di"
      :class="{ 'exchange-full-content-pry': dealType == 'pry' }"
    >
      <div class="exchange-header"></div>
      <!-- K线图 -->
      <div class="exchange-kline fit-background">
        <div id="kline_container" class="kline_container"></div>
      </div>
      <!-- 杠杠 -->
      <div
        class="exchange-margin-step fit-background flex-box fit-tc-primary"
        v-if="dealType == 'pry'"
      >
        <span class="title">{{ currCoinLangFun("process") }}</span>
        <span>
          ①
          <span @click="openDialog('isTradeFundsDialog')">{{ currCoinLangFun("transfer") }}</span>
        </span>
        <span class="ellipsis fit-tc-tip">···</span>
        <span>
          ②
          <span @click="openDialog('isBorrowCoinDialog')">{{ currCoinLangFun("borrow_coin") }}</span>
        </span>
        <span class="ellipsis fit-tc-tip">···</span>
        <span>
          ③
          <el-tooltip
            class="item"
            effect="dark"
            :content="currCoinLangFun('borrow_coin_tip')"
            placement="top"
          >
            <span>
              {{
              currCoinLangFun("item_three_child_two_title", "top")
              }}
            </span>
          </el-tooltip>
        </span>
        <span class="ellipsis fit-tc-tip">···</span>
        <span>
          ④
          <span @click="openRepaymentCoinFun()">{{ currCoinLangFun("reimbursement_coin") }}</span>
        </span>
      </div>
      <!-- 深度 -->
      <div class="exchange-depths fit-background">
        <div class="exchange-depth-top flex-box fit-tc-border-color">
          <div class="flex-box">
            <span
              class="depth-type-taps fit-tc-hover"
              @click="depthsType = 'all'"
              :class="{ hover: depthsType == 'all' }"
            >
              <img v-if="themeName == 'theme-daytime'" src="@/assets/svg/icon-depth-light.svg" />
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
          <!-- <el-dropdown @command="depthsHandleCommand">
            <span class="el-dropdown-link fit-tc-tip">
              {{ depthsDecimals }}位小数
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="3">3位小数</el-dropdown-item>
              <el-dropdown-item command="4">4位小数</el-dropdown-item>
              <el-dropdown-item command="5">5位小数</el-dropdown-item>
              <el-dropdown-item command="6">6位小数</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
        </div>
        <div class="exchange-depth-content">
          <div class="depth-row fit-tc-tip">
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_price", "exchange") }}({{
              priceType
              }})
            </span>
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_num", "exchange") }}({{
              currencyType
              }})
            </span>
            <span class="depth-row__item">
              {{ currCoinLangFun("table_coin_combined", "exchange") }}({{
              currencyType
              }})
            </span>
          </div>
          <div class="depth-box depth-rise" :style="depthsStyle" v-if="depthsType != 'buy'">
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
                <span>{{ item.amountText }}</span>
                <span>{{ item.totalText }}</span>
              </li>
            </ul>
          </div>
          <div class="exchange-depth-ticker flex-box fit-tc-border-color">
            <div class="flex-box">
              <span class="flex-box" :class="currCoin.coinMoneyData.closeData.className">
                {{ currCoin.coinMoneyData.closeData.close }}
                <i class="el-icon-caret-top"></i>
              </span>
              <span class="fit-tc-tip">≈ {{ exchangeRateFilter(currCoin.coinMoneyData.close) }}</span>
            </div>
          </div>
          <div class="depth-box depth-fall" v-if="depthsType != 'sell'" :style="depthsStyle">
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
                <span>{{ item.amountText }}</span>
                <span>{{ item.totalText }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 市场 -->
      <div class="exchange-deals fit-background">
        <div class="exchange-deals-top flex-box fit-el-radio-group-text">
          <el-radio-group v-model="dealsType">
            <el-radio-button label="bazaar">{{ currCoinLangFun("deals_market") }}</el-radio-button>
            <el-radio-button label="my">{{ currCoinLangFun("deals_my") }}</el-radio-button>
          </el-radio-group>
        </div>
        <div v-if="dealsType == 'bazaar'" class="exchange-depth-content">
          <el-table :data="dealsBazaarData" :height="dealsStyle">
            <el-table-column
              prop="time"
              :label="currCoinLangFun('table_coin_time', 'exchange')"
              width="100"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <el-table-column
              prop="price"
              :label="currCoinLangFun('table_coin_price', 'exchange')"
              width="90"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="scope">
                <span :class="scope.row.className">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              width="90"
              :label="currCoinLangFun('table_coin_num', 'exchange')"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.amount }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="dealsType == 'my'" class="exchange-depth-content">
          <el-table :data="dealsMyData" :height="dealsStyle">
            <el-table-column
              prop="time"
              :label="currCoinLangFun('table_coin_time', 'exchange')"
              width="100"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <el-table-column
              prop="price"
              :label="currCoinLangFun('table_coin_price', 'exchange')"
              width="90"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="scope">
                <span :class="scope.row.className">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="amount"
              width="90"
              :label="currCoinLangFun('table_coin_num', 'exchange')"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <template slot="empty">
              <div class="table-empty fit-tc-tip">
                <div class="null-login" v-if="!isLogin">
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('login')"
                  >{{ currCoinLangFun("login", "top") }}</span>
                  {{ currCoinLangFun("or", "all") }}
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('register')"
                  >{{ currCoinLangFun("register_now", "all") }}</span>
                </div>
                <div v-else class="is-login">
                  <span class="fit-tc-tip">{{ currCoinLangFun("table_null_data", "all") }}</span>
                </div>
              </div>
            </template>
          </el-table>
        </div>
      </div>
      <!-- 委托 -->
      <div class="exchange-orders fit-background">
        <div class="exchange-orders-top flex-box">
          <div class="flex-box fit-tc-tip fit-tabs">
            <el-tabs v-model="ordersTab">
              <el-tab-pane
                v-for="item in ordersTabList"
                :key="item.value"
                :label="currCoinLangFun(item.code)"
                :name="item.value"
              ></el-tab-pane>
            </el-tabs>
            <span
              v-show="ordersTab != 'zc'"
              style="
                width: 1px;
                height: 16px;
                display: block;
                margin: 0 16px;
                background-color: rgba(123, 123, 147, 0.16);
              "
            ></span>
            <el-dropdown
              v-show="ordersTab != 'zc'"
              style="margin: 0 12px"
              @command="ordersHandleCommand"
            >
              <span class="el-dropdown-link fit-tc-tip" style="white-space: nowrap;">
                {{ ordersDropTitle }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in ordersDropList"
                  :key="item.value"
                  :command="item.value"
                >{{ currCoinLangFun(item.code) }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="flex-box">
            <el-checkbox
              class="fit-tc-tip"
              v-if="!['jbjl', 'zc'].includes(ordersTab)"
              v-model="ordersCoin"
            >{{ currCoinLangFun("orders_show") }}</el-checkbox>
            <span class="box-line"></span>
            <span
              class="fit-tc-primary active-text"
              style="font-size: 12px; cursor: pointer"
              @click="openEntrustFun"
            >
              {{ currCoinLangFun("more", "all") }}
              <i class="el-icon-right"></i>
            </span>
          </div>
        </div>
        <div class="exchange-orders-content fit-tc-primar">
          <el-table
            v-loading="ordersTableloading"
            :cell-style="ordersTableCellStyle"
            size="mini"
            height="256px"
            :data="orderData"
            v-show="ordersTab != 'zc'"
          >
            <div v-for="item in ordersTableColumn" :key="item.prop + '_' + index">
              <el-table-column v-if="item.prop == 'ptwtMeun'" v-bind="item">
                <template slot="header" slot-scope="scope">
                  <span
                    :disabled="orderAllCdLoading || orderData.length <= 0"
                    class="all-repeal fit-tc-primary active-text"
                    @click="ordersCancellationsFun('', 'all')"
                  >
                    <i class="el-icon-loading" v-if="orderAllCdLoading"></i>
                    {{ currCoinLangFun("orders_table_all_cancellations") }}
                  </span>
                </template>
                <template slot-scope="scope">
                  <el-button
                    style="padding: 0px 15px"
                    size="mini"
                    type="text"
                    class="fit-tc-primary active-text"
                    @click="
                      ordersCancellationsFun(scope.row.id, '', scope.$index)
                    "
                    :disabled="scope.row.isLoading || orderAllCdLoading"
                  >
                    <i class="el-icon-loading" v-if="scope.row.isLoading"></i>
                    {{ currCoinLangFun("rders_table_cancellations") }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column v-else-if="item.prop == 'cdMeun'" v-bind="item">
                <template slot-scope="scope">
                  <el-button
                    style="padding: 0px 15px"
                    size="mini"
                    type="text"
                    class="fit-tc-primary active-text"
                    @click="
                      ordersCancellationsFun(scope.row.id, '', scope.$index)
                    "
                    :disabled="scope.row.isLoading"
                  >
                    <i class="el-icon-loading" v-if="scope.row.isLoading"></i>
                    {{ currCoinLangFun("rders_table_cancellations") }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column v-else-if="item.prop == 'xqMeun'" v-bind="item">
                <template slot-scope="scope">
                  <el-button
                    v-if="
                      ['xqMeun'].includes(item.prop) &&
                      scope.row.entrust_status != -1
                    "
                    style="padding: 0px 15px"
                    type="text"
                    icon="el-icon-tickets"
                    size="mini"
                    @click="lookDetailsFun(scope.row)"
                  ></el-button>
                  <div v-else>-</div>
                </template>
              </el-table-column>
              <el-table-column v-else-if="item.prop == 'jkczMeun'" v-bind="item">
                <template slot-scope="scope">
                  <el-button
                    style="padding: 0 15px"
                    type="text"
                    size="mini"
                    @click="openRepaymentCoinFun(scope.row)"
                  >{{ currCoinLangFun("reimbursement") }}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                v-else-if="item.prop == 'coin'"
                v-bind="item"
                :show-overflow-tooltip="true"
              >
                <template slot-scope="scope">
                  <div class="fit-tc-primary">
                    <img style="width: 12px; padding-right: 4px" :src="scope.row.coinImg" />
                    {{ scope.row.coin }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column v-else v-bind="item" :show-overflow-tooltip="true"></el-table-column>
            </div>
            <template slot="empty">
              <div class="table-empty fit-tc-tip">
                <div class="null-login" v-if="!isLogin">
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('login')"
                  >{{ currCoinLangFun("login", "top") }}</span>
                  {{ currCoinLangFun("or", "all") }}
                  <span
                    class="fit-tc-tertiary active-text"
                    @click="skipUserPage('register')"
                  >{{ currCoinLangFun("register_now", "all") }}</span>
                  {{ currCoinLangFun("to_trade") }}
                </div>
                <div v-else class="is-login">
                  <img src="@/assets/svg/icon-Null.svg" alt />
                  <span class="fit-tc-tip">{{ currCoinLangFun("table_null_data", "all") }}</span>
                </div>
              </div>
            </template>
          </el-table>
          <div v-show="ordersTab == 'zc'" v-loading="zcLoading">
            <div class="property-info">
              <div class="flex-box info-header">
                <div class="flex-box">
                  <div class="fit-tc-primary info-symbol">
                    {{
                    tradeType == "zc"
                    ? currCoin.symbol
                    : currCoinLangFun("all_warehouse", "exchange")
                    }}
                  </div>
                  <div
                    class="fit-tc-primary active-text info-times fit-background-di"
                    @click="pryMltipleOpenFun"
                  >
                    {{ pryMultipleInfo.currentLeverageRadio }}X
                    <i
                      v-if="tradeType == 'zc'"
                      class="el-icon-arrow-down"
                    ></i>
                  </div>
                </div>
                <div class="flex-box right">
                  <div class="fit-tc-tip fit-tc-border-color">
                    {{ currCoinLangFun("net_worth") }}
                    <span class="fit-tc-primary">
                      {{ tradeType == "qc" ? " ≈ " : ""
                      }}{{ pryMultipleInfo.netBalance }}
                      {{
                      tradeType == "qc"
                      ? pryMultipleInfo.coin_symbol
                      : currencyType
                      }}
                    </span>
                  </div>
                  <div
                    class="fit-tc-primary active-text"
                    @click="openDialog('isTradeFundsDialog')"
                  >{{ currCoinLangFun("transfer") }}</div>
                  <div
                    class="fit-tc-primary active-text"
                    @click="openDialog('isBorrowCoinDialog')"
                  >{{ currCoinLangFun("borrowing") }}</div>
                  <div
                    class="fit-tc-primary active-text"
                    @click="openRepaymentCoinFun()"
                  >{{ currCoinLangFun("reimbursement") }}</div>
                </div>
              </div>
              <div class="flex-box info-content">
                <div class="risk-box fit-tc-border-color">
                  <div class="flex-box risk-box-top">
                    <div>
                      <div class="fit-tc-tip">{{ currCoinLangFun("risk", "exchange") }}</div>
                      <div class="risk-text" :class="depositRateData.className">
                        {{ pryMultipleInfo.className
                        }}{{ pryMultipleInfo.depositRate == "999" ? ">" : ""
                        }}{{ pryMultipleInfo.depositRate }}% ({{
                        depositRateData.text
                        }})
                      </div>
                    </div>
                    <div class="risk-content flex-box">
                      <div class="fit-tc-tip">{{ `>1.7` }}</div>
                      <div class="risk-img">
                        <img src="@/assets/image/margin_chart_line.png" alt />
                        <img
                          :style="{ transform: depositRateData.rate }"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgB7ZvBTRxBEEWrerHl42TgdgZOwVH4aDsC7ABsrZzAcvDd8gk5C8iAEAiBIwIxRe/CAaahtwcheKD/pNWueuqweqqumf7SuEH59ef/lxhjr/w88fDl793P/wxIMihF3rJ8DeWTwzcikSAFLld/N+JuLA3fr9ZwQDvwbZ6uDPZOAns5tzTUa7c6EgNSYCxqWWkhgd141LLGkMBu3GLoWSPAFOj+vlqzlA0IcwaGV90WVkslAO3Aet65awvPIXeuPTs4gcvVfn7ItecCJ7D1wHxmC9w2xgn0nXSvpJ3Eu5HwBEbk+65d+MUHg4ETOEbjbhu8OzGvAxszMLm2cAcNScDzME5gSo1t6hK4lXKMy43LmoEtrqP8liRctA/rwDrKn0KL9lEC74ry6xrWHEQJjI7YnhbtowR6x2MKLdpnCeyI7WnRPktgx0mDFu2zZuAdUX5VA4v2YR24fb7Ron3aSSQ/Us2TgRE4J64nRfsYgXMekEnRPkZgK8qfQor2OQIbUf4UUrSPETjOietB0T6nA2fMQFK0D3qMmSEFdB7GCGxG+VNA0T5GYDnGfZxRng0C9jWHlwKoA+2gv9aPDAJHoMVhb23505gXbzAC34yne8Xi8dbCUkN67YsTJvz4drIY41NTYrm2qQHhBuTnav9rJNstCfXmzryej+stvu7StWgTQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEOLVcglVaoYItQp5tgAAAABJRU5ErkJggg=="
                          alt
                        />
                      </div>
                      <div class="fit-tc-tip">1.1</div>
                    </div>
                  </div>
                  <div class="flex-box price-box" v-if="tradeType == 'zc'">
                    <div class="fit-tc-tip flex-box price-item">
                      <div>{{ currCoinLangFun("blowing_up_price", "exchange") }}</div>
                      <div>{{ currCoinLangFun("index_price", "exchange") }}</div>
                    </div>
                    <div class="fit-tc-tertiary flex-box price-item">
                      <div>
                        {{
                        pryMultipleInfo.forcePrice != "0" &&
                        pryMultipleInfo.forcePrice
                        ? pryMultipleInfo.forcePrice
                        : "--"
                        }}
                      </div>
                      <div>{{ currCoin.coinMoneyData.close }} {{ priceType }}</div>
                    </div>
                  </div>
                </div>
                <div class="property-box" v-if="tradeType == 'zc'">
                  <div class="flex-box">
                    <span></span>
                    <span class="fit-tc-tip">{{ currencyType }}</span>
                    <span class="fit-tc-tip">{{ priceType }}</span>
                  </div>
                  <div class="flex-box">
                    <span class="fit-tc-tip">{{ currCoinLangFun("entrust_available") }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.coinBalance }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.baseBalance }}</span>
                  </div>
                  <div class="flex-box">
                    <span class="fit-tc-tip">{{ currCoinLangFun("have_borrow") }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.coinBorrowBalance }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.baseBorrowBalance }}</span>
                  </div>
                  <div class="flex-box">
                    <span class="fit-tc-tip">{{ currCoinLangFun("can_borrow") }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.coinCanBalance }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.baseCanBalance }}</span>
                  </div>
                  <div class="flex-box">
                    <span class="fit-tc-tip">{{ currCoinLangFun("orders_table_interest_amount") }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.coinInterestAmount }}</span>
                    <span class="fit-tc-primary">{{ pryMultipleInfo.baseInterestAmount }}</span>
                  </div>
                </div>
                <div class="property-qc-box flex-box" v-else>
                  <div class="item">
                    <div class="fit-tc-tip">{{ currCoinLangFun("total_assets", "user") }}</div>
                    <div class="fit-tc-primary">
                      ≈{{ pryMultipleInfo.zzc }}
                      {{ pryMultipleInfo.coin_symbol }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="fit-tc-tip">{{ currCoinLangFun("should_also") }}</div>
                    <div class="fit-tc-primary">
                      ≈{{ pryMultipleInfo.yhzc }}
                      {{ pryMultipleInfo.coin_symbol }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 买入卖出 -->
      <div class="exchange-trade fit-background">
        <div
          class="exchange-trade-top-nsty flex-box fit-background-di fit-reverse-el-radio-group-text"
        >
          <el-radio-group v-model="tradeType">
            <el-radio-button
              v-for="item in tradeTypeDataCom"
              :key="item.value"
              :label="item.value"
            >{{ item.times ? `${item.label} ${item.times}x` : item.label }}</el-radio-button>
          </el-radio-group>
          <!-- <div class="novice-guide flex-box">
            <i class="el-icon-s-custom"></i>
            <span>新手引导</span>
          </div>-->
        </div>
        <div
          class="exchange-trade-top fit-tc-border-color el-table-border-color flex-box fit-tc-tip fit-tabs"
        >
          <el-tabs v-model="tradeBuyType">
            <el-tab-pane :label="currCoinLangFun('entrust_price')" name="stopProfitLoss"></el-tab-pane>
            <el-tab-pane :label="currCoinLangFun('market_price')" name="marketPrice"></el-tab-pane>
            <el-tab-pane name="selfdefine">
              <span slot="label">
                <el-dropdown @command="tradeHandleCommand">
                  <span class="el-dropdown-link">
                    {{ tradeDecimaTitle }}
                    <i
                      class="el-icon-arrow-down el-icon--right"
                      style="font-size: 12px; margin-left: -3px"
                    ></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="item in tradeDecimalist"
                      :key="item.value"
                      :command="item.value"
                    >{{ currCoinLangFun(item.code) }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </el-tab-pane>
          </el-tabs>
          <div class="strategy_bot fit-tc-border-color">
            <el-checkbox v-if="dealType == 'pry'" size="mini" v-model="pryBorrowing">
              <el-tooltip
                class="item"
                effect="dark"
                :content="currCoinLangFun('automatic_borrowing_tip')"
                placement="top-start"
              >
                <span>{{ currCoinLangFun("automatic_borrowing") }}</span>
              </el-tooltip>
            </el-checkbox>
            <!-- <el-checkbox v-if="dealType=='pry'" size="mini" v-model="pryReimbuy">
              <el-tooltip
                class="item"
                effect="dark"
                content="订单成交后，系统会自动将您所得到的币种进行还款（按利率优先、时间优先的原则）"
                placement="top-start"
              >
                <span>自动还款</span>
              </el-tooltip>
            </el-checkbox>-->
          </div>
        </div>
        <!-- 限价委托 -->
        <div
          v-if="tradeBuyType == 'stopProfitLoss'"
          class="exchange-trade-content flex-box fit-bg-el-radio-group"
        >
          <div class="content content-buy">
            <div class="content-top flex-box">
              <span class="title fit-tc-rise">{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ buyBalance }}
                  {{ priceType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.base_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.buyData.buy"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_buy_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <div
              class="fit-tc-tip style"
              style="line-height: 16px; font-size: 12px; text-align: center"
            >≈ {{ exchangeRateFilter(tradeForm.buyData.buy) }}</div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.buyData.num"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <el-radio-group>
              <el-radio-button
                v-for="item in tradeRadionData"
                :key="item.value"
                @click.native.prevent="
                  setTradeCoinCalculateMoneyFun('buy', item.value)
                "
                :label="item.value"
              >{{ item.label }}</el-radio-button>
            </el-radio-group>
            <el-input
              @input="(e) => tradeInputChengFun(e, 'buyData', 'money')"
              v-model="tradeForm.buyData.money"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_money") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>

            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.buyData.loading"
                @click="tradeSubmitFun('buy')"
              >{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</el-button>
            </div>
          </div>
          <div class="content content-sale">
            <div class="content-top flex-box">
              <span
                class="title fit-tc-fall"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ sellBalance }}
                  {{ currencyType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.coin_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.sellData.buy"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_sell_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <div
              class="fit-tc-tip style"
              style="line-height: 16px; font-size: 12px; text-align: center"
            >≈ {{ exchangeRateFilter(tradeForm.sellData.buy) }}</div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.sellData.num"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <el-radio-group>
              <el-radio-button
                v-for="item in tradeRadionData"
                :key="item.value"
                @click.native.prevent="
                  setTradeCoinCalculateMoneyFun('sell', item.value)
                "
                :label="item.value"
              >{{ item.label }}</el-radio-button>
            </el-radio-group>
            <el-input
              @input="(e) => tradeInputChengFun(e, 'sellData', 'money')"
              v-model="tradeForm.sellData.money"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_money") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.sellData.loading"
                @click="tradeSubmitFun('sell')"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</el-button>
            </div>
          </div>
        </div>
        <!-- 市价委托 -->
        <div
          v-if="tradeBuyType == 'marketPrice'"
          class="exchange-trade-content flex-box fit-bg-el-radio-group"
        >
          <div class="content content-buy">
            <div class="content-top flex-box">
              <span class="title fit-tc-rise">{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ buyBalance }}
                  {{ priceType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.base_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input :value="currCoinLangFun('market_price_buy_tip')" readonly>
              <span slot="prefix">{{ currCoinLangFun("entrust_buy_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="(e) => tradeInputChengFun(e, 'buyData', 'money')"
              v-model="tradeForm.buyData.money"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_money") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>

            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.buyData.loading"
                @click="marketTradeSubmitFun('buy')"
              >{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</el-button>
            </div>
          </div>
          <div class="content content-sale">
            <div class="content-top flex-box">
              <span
                class="title fit-tc-fall"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ sellBalance }}
                  {{ currencyType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.coin_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input :value="currCoinLangFun('market_price_sell_tip')" readonly>
              <span slot="prefix">{{ currCoinLangFun("entrust_sell_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.sellData.num"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.sellData.loading"
                @click="marketTradeSubmitFun('sell')"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</el-button>
            </div>
          </div>
        </div>
        <!-- 止盈止损 -->
        <div
          v-if="tradeBuyType == 'selfdefine' && tradeDecimals == 'zyzs'"
          class="exchange-trade-content flex-box fit-bg-el-radio-group"
        >
          <div class="content content-buy">
            <div class="content-top flex-box">
              <span class="title fit-tc-rise">{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ buyBalance }}
                  {{ priceType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.base_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'triggerMoney',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.buyData.triggerMoney"
            >
              <span slot="prefix">{{ currCoinLangFun("orders_table_trigger") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.buyData.buy"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("orders_table_entrust_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.buyData.num"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <el-radio-group>
              <el-radio-button
                v-for="item in tradeRadionData"
                :key="item.value"
                @click.native.prevent="
                  setTradeCoinCalculateMoneyFun('buy', item.value)
                "
                :label="item.value"
              >{{ item.label }}</el-radio-button>
            </el-radio-group>
            <div class="content-money">
              <span class="fit-tc-tip">{{ currCoinLangFun("entrust_money") }}</span>
              <span>{{ tradeForm.buyData.money }} {{ priceType }}</span>
            </div>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.buyData.loading"
                @click="tradeSubmitFun('buy')"
              >{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</el-button>
            </div>
          </div>
          <div class="content content-sale">
            <div class="content-top flex-box">
              <span
                class="title fit-tc-fall"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span
                  class="fit-tc-primary"
                >{{ sellBalance }} {{ currencyType }}</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.coin_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'triggerMoney',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.sellData.triggerMoney"
            >
              <span slot="prefix">{{ currCoinLangFun("orders_table_trigger") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>

            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.sellData.sell"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("orders_table_entrust_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.sellData.num"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <el-radio-group>
              <el-radio-button
                v-for="item in tradeRadionData"
                :key="item.value"
                @click.native.prevent="
                  setTradeCoinCalculateMoneyFun('sell', item.value)
                "
                :label="item.value"
              >{{ item.label }}</el-radio-button>
            </el-radio-group>
            <div class="content-money">
              <span class="fit-tc-tip">{{ currCoinLangFun("entrust_money") }}</span>
              <span>{{ tradeForm.sellData.money }} {{ priceType }}</span>
            </div>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.sellData.loading"
                @click="tradeSubmitFun('sell')"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</el-button>
            </div>
          </div>
        </div>
        <!-- 动态止盈止损 -->
        <div
          v-if="tradeBuyType == 'selfdefine' && tradeDecimals == 'dtzyzs'"
          class="exchange-trade-content flex-box fit-bg-el-radio-group"
        >
          <div class="content content-buy">
            <div class="content-top flex-box">
              <span class="title fit-tc-rise">{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ buyBalance }}
                  {{ priceType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.base_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.buyData.buy"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_buy_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'buyData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.buyData.num"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <div class="content-full-item flex-box">
              <el-checkbox
                @change="(e) => (e ? '' : (tradeForm.buyData.fullPrice = ''))"
                v-model="tradeForm.buyData.fullCheck"
                class="fit-tc-tip"
              >{{ currCoinLangFun("orders_table_take_profit_price") }}</el-checkbox>
              <el-input
                @input="
                  (e) =>
                    tradeInputChengFun(
                      e,
                      'buyData',
                      'fullPrice',
                      exchangeCoinData.base_coin_scale
                    )
                "
                v-model="tradeForm.buyData.fullPrice"
              >
                <span slot="suffix" class="fit-tc-tip">{{ priceType }}</span>
              </el-input>
            </div>
            <div class="content-full-item flex-box">
              <el-checkbox
                @change="(e) => (e ? '' : (tradeForm.buyData.lossPrice = ''))"
                v-model="tradeForm.buyData.lossCheck"
                class="fit-tc-tip"
              >{{ currCoinLangFun("orders_table_stop_loss_price") }}</el-checkbox>
              <el-input
                @input="
                  (e) =>
                    tradeInputChengFun(
                      e,
                      'buyData',
                      'lossPrice',
                      exchangeCoinData.base_coin_scale
                    )
                "
                v-model="tradeForm.buyData.lossPrice"
              >
                <span slot="suffix" class="fit-tc-tip">{{ priceType }}</span>
              </el-input>
            </div>
            <div class="content-money">
              <span class="fit-tc-tip">{{ currCoinLangFun("entrust_money") }}</span>
              <span>{{ tradeForm.buyData.money }} {{ priceType }}</span>
            </div>
            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.buyData.loading"
                @click="tradeSubmitFun('buy')"
              >{{ currCoinLangFun("entrust_buy") }}{{ currencyType }}</el-button>
            </div>
          </div>
          <div class="content content-sale">
            <div class="content-top flex-box">
              <span
                class="title fit-tc-fall"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</span>
              <span class="text">
                {{ currCoinLangFun("entrust_available") }}
                <span class="fit-tc-primary">
                  {{ sellBalance }}
                  {{ currencyType }}
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="currCoinLangFun('transfer')"
                  placement="top"
                >
                  <i
                    class="fit-tc-primary el-icon-sort"
                    style="transform: rotate(-90deg); font-size: 12px"
                    @click="
                      openDialog(
                        'isTradeFundsDialog',
                        exchangeCoinData.coin_coin_id
                      )
                    "
                  ></i>
                </el-tooltip>
              </span>
            </div>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'buy',
                    exchangeCoinData.base_coin_scale
                  )
              "
              v-model="tradeForm.sellData.buy"
            >
              <span slot="prefix">{{ currCoinLangFun("entrust_sell_price") }}</span>
              <span slot="suffix">{{ priceType }}</span>
            </el-input>
            <el-input
              @input="
                (e) =>
                  tradeInputChengFun(
                    e,
                    'sellData',
                    'num',
                    exchangeCoinData.coin_coin_scale
                  )
              "
              v-model="tradeForm.sellData.num"
              style="margin-top: 8px"
            >
              <span slot="prefix">{{ currCoinLangFun("table_coin_num", "exchange") }}</span>
              <span slot="suffix">{{ currencyType }}</span>
            </el-input>
            <div class="content-full-item flex-box">
              <el-checkbox
                @change="(e) => (e ? '' : (tradeForm.sellData.fullPrice = ''))"
                v-model="tradeForm.sellData.fullCheck"
                class="fit-tc-tip"
              >{{ currCoinLangFun("orders_table_take_profit_price") }}</el-checkbox>
              <el-input
                @input="
                  (e) =>
                    tradeInputChengFun(
                      e,
                      'sellData',
                      'fullPrice',
                      exchangeCoinData.base_coin_scale
                    )
                "
                v-model="tradeForm.sellData.fullPrice"
              >
                <span slot="suffix" class="fit-tc-tip">{{ priceType }}</span>
              </el-input>
            </div>
            <div class="content-full-item flex-box">
              <el-checkbox
                @change="(e) => (e ? '' : (tradeForm.sellData.lossPrice = ''))"
                v-model="tradeForm.sellData.lossCheck"
                class="fit-tc-tip"
              >{{ currCoinLangFun("orders_table_stop_loss_price") }}</el-checkbox>
              <el-input
                @input="
                  (e) =>
                    tradeInputChengFun(
                      e,
                      'sellData',
                      'lossPrice',
                      exchangeCoinData.base_coin_scale
                    )
                "
                v-model="tradeForm.sellData.lossPrice"
              >
                <span slot="suffix" class="fit-tc-tip">{{ priceType }}</span>
              </el-input>
            </div>
            <div class="content-money">
              <span class="fit-tc-tip">{{ currCoinLangFun("entrust_money") }}</span>
              <span>{{ tradeForm.sellData.money }} {{ priceType }}</span>
            </div>

            <div class="null-login" v-if="!isLogin">
              <el-button type="primary" class="fit-tc-background fit-tc-tip">
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('login')"
                >{{ currCoinLangFun("login", "top") }}</span>
                {{ currCoinLangFun("or", "all") }}
                <span
                  class="fit-tc-tertiary active-text"
                  @click="skipUserPage('register')"
                >{{ currCoinLangFun("register_now", "all") }}</span>
                {{ currCoinLangFun("to_trade") }}
              </el-button>
            </div>
            <div class="is-login" v-else>
              <el-button
                type="primary"
                :loading="tradeForm.sellData.loading"
                @click="tradeSubmitFun('sell')"
              >{{ currCoinLangFun("entrust_sell") }}{{ currencyType }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 资金划转 -->
    <fund-transfer
      v-if="isTradeFundsDialog"
      :transferDialog="isTradeFundsDialog"
      :closeDialog="closeDialog.bind(this)"
      :targerWalletKey="targerWalletKey"
    ></fund-transfer>
    <!-- 委托列表详情 -->
    <entrust-details ref="entrustDetails" :orderData="currOrderItem"></entrust-details>
    <!-- 借币 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="`${currCoinLangFun('borrowing', 'full')}`"
      :visible.sync="isBorrowCoinDialog"
      width="560px"
      custom-class="borrow-coin-pry-dialog"
    >
      <div class="borrow-coin-pry-box">
        <div class="flex-box borrow-tab" v-if="tradeType == 'zc'">
          <div
            class="tab-item"
            v-for="(item, index) in pryTabs"
            :key="index"
            :class="{ active: pryType == item.label }"
            @click="pryType = item.label"
          >
            <img :src="exchangeCoinData[`${item.type}_avatar`]" />
            <span class="fit-tc-primary">{{ item.label }}</span>
          </div>
        </div>
        <div class="borrow-select" v-else>
          <el-select
            v-model="warehouseType"
            :placeholder="`${currCoinLangFun('merinfo_qxz', 'center')}`"
          >
            <el-option v-for="item in warehouseTabs" :key="item.coinName" :value="item.coinName">
              <span style="display: flex; align-items: center">
                <img style="width: 20px" :src="item.avatar" />
                <span style="padding-left: 10px">{{ item.coinName }}</span>
              </span>
            </el-option>
          </el-select>
        </div>
        <div v-if="tradeType == 'zc'">
          <div v-for="(item, index) in pryTabs" :key="index" v-show="pryType == item.label">
            <div class="flex-box borrow-info">
              <div class="flex-box">
                <span class="fit-tc-tip">
                  {{
                  currCoinLangFun("can_borrow")
                  }}
                </span>
                <span class="fit-tc-primary">
                  {{ pryMultipleInfo[`${item.type}CanBalance`] }}
                  {{ item.label }}
                </span>
              </div>
              <div class="flex-box">
                <span class="fit-tc-tip">
                  {{
                  currCoinLangFun("have_borrow")
                  }}
                </span>
                <span class="fit-tc-primary">
                  {{ pryMultipleInfo[`${item.type}BorrowBalance`] }}
                  {{ item.label }}
                </span>
              </div>
            </div>
            <div class="borrow-money">
              <el-input
                :placeholder="
                  `${currCoinLangFun('minimum_borrowing_num', 'full')} ` +
                  item.min +
                  item.label
                "
                @input="(e) => borrowChengFun(e, item.type, 'borrowFrom')"
                v-model="borrowFrom[item.type]"
              >
                <div slot="suffix">
                  <span class="text fit-tc-tip">{{ item.label }}</span>
                  <span
                    class="btn fit-tc-primary active-text"
                    @click="
                      borrowFrom[item.type] =
                        pryMultipleInfo[`${item.type}CanBalance`]
                    "
                  >{{ currCoinLangFun("zd_text", "move_contract") }}</span>
                </div>
              </el-input>
            </div>
            <div class="borrow-rate">
              <span class="fit-tc-tip">
                {{
                currCoinLangFun("daily_interest_rate")
                }}
              </span>
              <span class="fit-tc-primary">{{ item.rate }}%</span>
            </div>
            <div class="borrow-btn-box">
              <el-button
                type="primary"
                :disabled="borrowFrom[item.type] < item.min"
                :loading="isBorrowCoinLoading"
                @click="borrowMoneyFun(item.label, item.type)"
              >
                {{ currCoinLangFun("text_borrow", "full") }}
                {{ item.label }}
              </el-button>
            </div>
          </div>
        </div>
        <div v-if="tradeType == 'qc' && warehouseObj[warehouseType]">
          <div class="flex-box borrow-info">
            <div class="flex-box">
              <span class="fit-tc-tip">
                {{
                currCoinLangFun("can_borrow", "full")
                }}
              </span>
              <span class="fit-tc-primary">
                {{ warehouseObj[warehouseType].maxBorrow }}
                {{ warehouseType }}
              </span>
            </div>
            <div class="flex-box">
              <span class="fit-tc-tip">
                {{
                currCoinLangFun("have_borrow")
                }}
              </span>
              <span class="fit-tc-primary">
                {{ warehouseObj[warehouseType].borrowBalance }}
                {{ warehouseType }}
              </span>
            </div>
          </div>
          <div class="borrow-money">
            <el-input
              :placeholder="
                `${currCoinLangFun('minimum_borrowing_num')} ` +
                warehouseObj[warehouseType].borrowMinCou +
                warehouseType
              "
              @input="(e) => borrowChengFun(e, warehouseType, 'borrowFrom')"
              v-model="borrowFrom[warehouseType]"
            >
              <div slot="suffix">
                <span class="text fit-tc-tip">{{ warehouseType }}</span>
                <span
                  class="btn fit-tc-primary active-text"
                  @click="
                    borrowFrom[warehouseType] =
                      warehouseObj[warehouseType].maxBorrow
                  "
                >{{ currCoinLangFun("have_borrow") }}</span>
              </div>
            </el-input>
          </div>
          <div class="borrow-rate">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("daily_interest_rate")
              }}
            </span>
            <span class="fit-tc-primary">{{ warehouseObj[warehouseType].borrwDayRate * 100 }}%</span>
          </div>
          <div class="borrow-btn-box">
            <el-button
              type="primary"
              :disabled="
                borrowFrom[warehouseType] <
                warehouseObj[warehouseType].borrowMinCou
              "
              :loading="isBorrowCoinLoading"
              @click="borrowMoneyFun(warehouseType, warehouseType)"
            >
              {{ currCoinLangFun("text_borrow") }}
              {{ warehouseType }}
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!--  还币付息-->
    <repayment-coin ref="repaymentCoin" :tradeType="tradeType" :orderData="currOrderItem"></repayment-coin>
    <!-- 杠杠逐仓 全仓 借款下单-->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('confirm_order', 'all')"
      :visible.sync="isPlaceOrderDialog"
      width="600px"
      custom-class="warehouse-coin-dialog"
    >
      <div class="warehouse-coin-box">
        <div class="flex-box info-box fit-tc-border-color">
          <span class="btn">
            {{
            borrowCoinType == "buy"
            ? currCoinLangFun("entrust_buy")
            : currCoinLangFun("entrust_sell")
            }}
          </span>
          <img :src="currCoin.bzicon" />
          <span class="coin">{{ currencyType }}</span>
        </div>
        <div class="order-box flex-box fit-tc-border-color">
          <div class="item">
            <div class="fit-tc-tip">
              {{ currCoinLangFun("table_coin_price", "exchange") }}({{
              priceType
              }})
            </div>
            <div class="fit-tc-primary">{{ borrowInfo.price }}</div>
          </div>
          <span class="box-line" style="height: 36px; display: block"></span>
          <div class="item">
            <div class="fit-tc-tip">
              {{ currCoinLangFun("table_coin_num", "exchange") }}({{
              currencyType
              }})
            </div>
            <div class="fit-tc-primary">{{ borrowInfo.amount }}</div>
          </div>
          <div class="item">
            <div class="fit-tc-tip">{{ currCoinLangFun("entrust_money", "full") }}({{ priceType }})</div>
            <div class="fit-tc-primary">{{ borrowInfo.money }}</div>
          </div>
        </div>
        <div class="warehouse-info fit-tc-primary fit-tc-border-color">
          <div class="title">{{ currCoinLangFun("xjzc_text", "move_transaction") }}</div>
          <div class="money">
            {{ borrowInfo.borrwMoney }}
            {{ borrowCoinType == "buy" ? priceType : currencyType }}
          </div>
          <div class="interest">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("borrow_daily_rate")
              }}
            </span>
            {{ borrowInfo.borrwDayRate * 100 }} %
          </div>
        </div>
        <div class="forecast-info fit-tc-border-color">
          <div class="flex-box" v-if="tradeType == 'zc'">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("ygbcj_text", "move_transaction")
              }}
            </span>
            <span class="fit-tc-primary">≈{{ borrowInfo.forcePrice }} {{ priceType }}</span>
          </div>
          <div class="flex-box">
            <span class="fit-tc-tip">
              {{
              currCoinLangFun("ygbzjl_text", "move_transaction")
              }}
            </span>
            <span class="fit-tc-primary">≈{{ borrowInfo.depositRate }}%</span>
          </div>
        </div>
        <div class="btn-box">
          <el-button @click="isPlaceOrderDialog = false">
            {{
            currCoinLangFun("cancel", "all")
            }}
          </el-button>
          <el-button
            type="primary"
            @click="tradeSubmitFun(borrowCoinType, true)"
            :loading="
              this.tradeForm[borrowCoinType + 'Data']
                ? this.tradeForm[borrowCoinType + 'Data'].loading
                : false
            "
          >{{ currCoinLangFun("confirm_place_order") }}</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 杠杠交易--杠杠倍数 -->
    <el-dialog
      :close-on-click-modal="false"
      :title="currCoinLangFun('adjust_leverage_ratio')"
      :visible.sync="isPryMltipleDialog"
      width="480px"
      custom-class="pry-coin-multiple-dialog warehouse-coin-dialog"
    >
      <div class="pry-coin-multiple-box">
        <div class="multiple-text fit-tc-primary">
          {{
          replaceCoinLangFun(currCoinLangFun("gjggjygzts_text"), [
          {
          key: "$[maxNum]",
          value: pryHighBorrow.maxNum,
          },
          {
          key: "$[priceType]",
          value: priceType,
          },
          {
          key: "$[times]",
          value: pryHighBorrow.times,
          },
          ])
          }}
          <!-- 根据杠杆交易规则，您当前账户资金的最大可借额度为{{
            pryHighBorrow.maxNum
          }}{{ priceType }}, 可使用的最大杠杆倍数为 {{ pryHighBorrow.times }} 倍-->
        </div>
        <div class="multiple-lever flex-box">
          <div class="lever-bar">
            <span class="curr-content" :style="{ left: 10 * pryMultipleValue + '%' }"></span>
          </div>
        </div>
        <div class="multiple-big flex-box">
          <div class="big-item-box" v-for="(item, index) in pryMultipleList" :key="index">
            <div
              class="big-item fit-background-di bg-hover fit-tc-tip"
              :class="{ active: pryMultipleValue == item.value }"
              v-if="item.value <= tradePryObj[tradeType]"
              @click="pryMultipleValue = item.value"
            >{{ item.label }}</div>
          </div>
        </div>
        <div
          class="big-borrow-tip fit-tc-tip"
        >{{ currCoinLangFun("max_leverage_ratio_can_borrowed") }}</div>
        <div class="big-borrow-text fit-tc-primary">
          {{ pryHighBorrow.maxbaseNum }} {{ priceType }} 或
          {{ pryHighBorrow.maxCoinNum }} {{ currencyType }}
        </div>
        <div class="btn-box">
          <el-button @click="isPryMltipleDialog = false">
            {{
            currCoinLangFun("cancel", "all")
            }}
          </el-button>
          <el-button
            type="primary"
            :loading="pryMultipleLoading"
            @click="submitPryMultipleFun"
          >{{ currCoinLangFun("confirm_adjustment") }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDataApi } from '@/api/system'
import {
  getCurrCoinMoneyApi,
  buyAndSellCoinApi,
  getOrdersTableDataApi,
  getOrdersCancellationsApi,
  getExchangePriceInfo,
  getBorrowMoneyDataApi,
  getBorrowMoneyDetailsApi,
  borrowMoneyApi,
  repaymentMoneyApi,
  getCurrPropertyApi,
  updatePryMultipleApi,
  getBorrowOrdersTableDataApi,
  getCounterpartyDataApi,
  getPryWarehouseAccountDataApi,
  getSymbolNewDataApi,
  getMyExchangeApi,
  getMqttInitDataApi,
} from '@/api/fullScreen'
import {
  numberFilterFun,
  inputNumberLinmitFun,
  toNorounded,
  getStrDataFunction,
  toNonExponential,
  toThousands,
} from '@/util/util'
import { dateFormat } from '@/util/date'
import $ from 'jquery'
import elementResizeDetectorMaker from 'element-resize-detector'
// import '../../../public/charting_library/charting_library.min.js'
// import Datafeeds from '../../../public/charting_library/datafeed/bitrade'
import mqtt from '@/mixins/mqtt'
import { mapGetters, mapMutations } from 'vuex'
import fundTransfer from '@/components/wallet/fund-transfer.vue'
import entrustDetails from '@/components/full/entrust-details.vue'
import repaymentCoin from '@/components/full/repayment-coin.vue'
export default {
  mixins: [mqtt],
  components: { fundTransfer, entrustDetails, repaymentCoin },
  data() {
    return {
      currCoinPricePrecision: 0, //当前币种价格精度
      orderAllCdLoading: false,
      currOrderItem: {}, //当前订单
      timerInit: null, //初始化账户信息延迟器
      mqttHead: 'xh',
      timerMoney: null,
      timer: null,
      inputNumberLinmitFun: inputNumberLinmitFun,
      currCoinMoneyData: {}, //当前币种的实时数据
      //我的币种钱包信息
      myCoinMoneyData: {
        buy: {
          //买入
          bb_balance: 0, //币币账户
          zc_balance: 0, //逐仓账户
          qc_balance: 0, //全仓账户

          br_zc_balance: 0, //逐仓账户借款
          br_qc_balance: 0, //全仓账户借款
        },
        sell: {
          //卖出
          bb_balance: 0,
          zc_balance: 0,
          qc_balance: 0,

          br_zc_balance: 0,
          br_qc_balance: 0,
        },
      },
      //当前交易对信息
      exchangeCoinData: {
        base_coin_scale: 8, //结算币精度 USDT
        coin_coin_scale: 8, //交易币精度 BTC
      },
      currencyType: '',
      priceType: '',
      /* 深度 */
      depthsHeight: '',
      depthsType: 'all',
      depthsDecimals: '4', //小数位
      depthsBuy: [], //买
      depthsSell: [], //卖
      /* 市场 */
      dealsHeight: '',
      dealsType: 'bazaar', //类型
      dealsBazaarData: [], //市场
      dealsMyData: [], //我的
      /* 委托 */
      orderData: [],
      ordersTab: 'currents',
      ordersCoin: false,
      ordersTableloading: false,
      ordersDrop: 'ptwt',

      /* 买入卖出 */
      tradeType: 'bb', //交易类型 1 币币
      tradeTypeData: [
        {
          label: this.currCoinLangFun('coin', 'all'), //币币
          value: 'bb',
          isShow: true,
        },
        {
          label: this.currCoinLangFun('zc_text', 'move_transaction'), //逐仓
          value: 'zc',
          times: '',
        },
        {
          label: this.currCoinLangFun('all_warehouse', 'exchange'), //全仓
          value: 'qc',
          times: '',
        },
      ],
      tradePryObj: {
        zc: '1',
        qc: '1',
      },
      tradeBuyType: 'stopProfitLoss', //买卖类型
      tradeDecimals: 'zyzs', //其他买卖类型
      tradeForm: {
        //委托数据
        currMoney: '', //当前价格（初始化）
        //限价委托
        buyData: {
          loading: false,
          buy: '', //买价 委托价
          num: '', //数量
          money: '', //金额

          triggerMoney: '', //触发价

          fullPrice: '', //止盈价
          fullCheck: false,
          lossPrice: '', //止损价
          lossCheck: false,
        },
        sellData: {
          loading: false,
          buy: '',
          num: '',
          money: '',

          fullPrice: '', //止盈价
          fullCheck: false,
          lossPrice: '', //止损价
          lossCheck: false,

          triggerMoney: '',
        },
      },
      tradeRadionData: [
        { label: '25%', value: 0.25 },
        { label: '50%', value: 0.5 },
        { label: '75%', value: 0.75 },
        { label: '100%', value: 1 },
      ],
      // 资金划转
      isTradeFundsDialog: false,
      tradeDefaultAccount: '', //默认账户
      //委托列表详情
      isTradeDetailsDialog: false,
      tradeDetails: {},
      tradeDetailsData: [], //委托列表详情 表格数据
      /* k线图 */
      tvWidget: '',
      symbol: '', //当前商品
      datafeed: '', //数据更新
      /* 杠杠相关 */
      pryTabs: [],
      pryType: '',
      warehouseTabs: [],
      warehouseObj: {},
      warehouseType: '',
      //借币
      isBorrowCoinDialog: false,
      isBorrowCoinLoading: false,
      borrowFrom: {
        base: '',
        coin: '',
      },

      borrowInfo: {},
      //还款
      isReturnCoinDialog: false,
      isReturnCoinLoading: false,
      repaymentFrom: {
        base: '',
        coin: '',
      },

      //借款下单
      isPlaceOrderDialog: false,
      borrowCoinType: '',
      placeOrderData: {},

      pryBorrowing: false, //自动借款
      pryReimbuy: false, //自动还款
      //资产
      zcLoading: false,
      pryMultipleList: [], //杠杠倍数调整
      pryMultipleInfo: {},
      pryMultipleValue: 0,
      pryMultipleLoading: false,
      isPryMltipleDialog: false,
    }
  },
  computed: {
    ...mapGetters([
      'themeName',
      'dealType',
      'currCoin',
      'language',
      'defaultLang',
      'isLogin',
      'exchangeCode',
      'exchangeNum',
      'prySelf',
      'userInfo',
    ]),
    depthsStyle() {
      if (!this.depthsHeight) {
        return {}
      }
      let height = 110
      if (this.depthsType == 'all') {
        height = (this.depthsHeight - height) / 2
      } else {
        height = this.depthsHeight - height
      }
      height = height - (height % 20)
      return {
        height: height + 'px',
      }
    },
    dealsStyle() {
      if (!this.dealsHeight) {
        return 285
      }
      let height = 40
      return this.dealsHeight - height
    },
    //深度-买入
    depthsBuyData() {
      if (!this.depthsHeight) {
        return []
      }
      let height = 110
      if (this.depthsType == 'all') {
        height = (this.depthsHeight - height) / 2
      } else {
        height = this.depthsHeight - height
      }
      height = height - (height % 20)
      let num = (height / 20).toFixed(0)
      let data = this.deepClone(this.depthsBuy).splice(0, num)
      let total = 0
      data = data.map((item) => {
        total = Number(total).myAdd(item.amount)
        item.totalText = numberFilterFun(total)
        item.priceText = numberFilterFun(
          item.price,
          true,
          this.currCoinPricePrecision
        )
        item.amountText = numberFilterFun(item.amount)
        return item
      })
      data = data.map((item) => {
        let size = Number(item.amount).myDiv(total).myMul(100)
        item.size = size.toFixed(0)
        return item
      })
      return data
    },
    //深度-卖出
    depthsSellData() {
      if (!this.depthsHeight) {
        return []
      }
      let height = 110
      if (this.depthsType == 'all') {
        height = (this.depthsHeight - height) / 2
      } else {
        height = this.depthsHeight - height
      }
      height = height - (height % 20)
      let num = (height / 20).toFixed(0)
      let data = this.deepClone(this.depthsSell).splice(0, num).reverse()

      let total = 0
      data = data.map((item) => {
        total = Number(total).myAdd(item.amount)
        item.totalText = numberFilterFun(total)
        item.priceText = numberFilterFun(
          item.price,
          true,
          this.currCoinPricePrecision
        )
        item.amountText = numberFilterFun(item.amount)
        return item
      })
      data = data.map((item) => {
        let size = Number(item.amount).myDiv(total).myMul(100)
        item.size = size.toFixed(0)
        return item
      })
      return data
    },
    //委托类型
    ordersTabList() {
      let data = [
        {
          label: this.currCoinLangFun('orders_tabs_curr'), //当前委托
          value: 'currents',
          code: 'orders_tabs_curr',
        },
        {
          label: this.currCoinLangFun('orders_tabs_history'), //历史委托
          value: 'histories',
          code: 'orders_tabs_history',
        },
      ]
      if (this.dealType == 'pry') {
        data = [
          ...data,
          {
            label: this.currCoinLangFun('orders_tabs_borrw_history'), //借币记录
            value: 'jbjl',
            code: 'orders_tabs_borrw_history',
          },
          {
            label: this.currCoinLangFun('orders_tabs_assets'), //资产
            value: 'zc',
            code: 'orders_tabs_assets',
          },
        ]
      }
      return data
    },
    ordersDropList() {
      let data = [
        {
          label: this.currCoinLangFun('entrust_ordinary'), //普通委托
          value: 'ptwt',
          code: 'entrust_ordinary',
        },
        {
          label: this.currCoinLangFun('market_price'), //市价委托
          value: 'sjwt',
          code: 'market_price',
        },
        {
          label: this.currCoinLangFun('entrust_zyzs'), //止盈止损
          value: 'zyzs',
          code: 'entrust_zyzs',
        },
      ]
      // if (this.dealType == 'cash') {
      //   data.push({
      //     label: this.currCoinLangFun('entrust_dtzyzs'), //动态止盈止损
      //     value: 'dtzyzs',
      //     code: 'entrust_dtzyzs',
      //   })
      // }
      if (this.ordersTab == 'jbjl') {
        data = [
          {
            label: this.currCoinLangFun('orders_tabs_borrw_curr'), //当前借币
            value: 'dqjb',
            code: 'orders_tabs_borrw_curr',
          },
          {
            label: this.currCoinLangFun('orders_tabs_borrw_history'), //借币记录
            value: 'jbjl',
            code: 'orders_tabs_borrw_history',
          },
        ]
      }
      return data
    },
    tradeDecimaTitle() {
      let title = ''
      this.tradeDecimalist.forEach((item) => {
        if (item.value == this.tradeDecimals) {
          title = this.currCoinLangFun(item.code)
        }
      })
      return title
    },
    tradeDecimalist() {
      let data = [
        {
          label: this.currCoinLangFun('entrust_zyzs'), //止盈止损
          value: 'zyzs',
          code: 'entrust_zyzs',
        },
      ]
      // if (this.dealType == 'cash') {
      //   data.push({
      //     label: this.currCoinLangFun('entrust_dtzyzs'), //动态止盈止损
      //     value: 'dtzyzs',
      //     code: 'entrust_dtzyzs',
      //   })
      // }
      return data
    },
    ordersDropTitle() {
      let title = ''
      this.ordersDropList.forEach((item) => {
        if (item.value == this.ordersDrop) {
          title = this.currCoinLangFun(item.code)
        }
      })
      return title
    },
    ordersTableColumn() {
      let column = [
        /* {
          label:'',
          width:'',
          align:'',
          prop:'',
        }, */
        {
          label: this.currCoinLangFun('table_coin_trading', 'exchange'), //交易对
          minWidth: '90',
          prop: 'symbol_name',
          align: 'center',
          fixed: 'left',
        },
        {
          label: this.currCoinLangFun('table_coin_time', 'exchange'), //时间
          minWidth: '90',
          prop: 'sj',
          fixed: 'left',
          align: 'center',
        },
        {
          label: this.currCoinLangFun('orders_table_dir'), //方向
          minWidth: '68',
          align: 'left',
          prop: 'directionText',
        },
      ]
      let otherColumn = []

      if (['ptwt', 'sjwt'].includes(this.ordersDrop)) {
        otherColumn = [
          {
            label:
              this.ordersDrop == 'sjwt'
                ? `${this.currCoinLangFun('orders_table_deal_price')}`
                : `${this.currCoinLangFun('entrust')} | ${this.currCoinLangFun(
                    'orders_table_deal_price'
                  )}`, //'委托 | 成交价'
            align: 'right',
            prop: 'wtcjj',
            minWidth: 140,
          },
          {
            label: `${this.currCoinLangFun('entrust')} | ${this.currCoinLangFun(
              'orders_table_dir_amount'
            )}`, // '委托 | 成交量'
            align: 'right',
            prop: 'wtcjl',
            minWidth: 140,
          },
          {
            label: this.currCoinLangFun('orders_table_entrust_money'), //委托金额
            align: 'right',
            prop: 'wtje',
            minWidth: 100,
          },
          {
            label: this.currCoinLangFun('orders_table_deg'), //完成度
            minWidth: '88',
            align: 'right',
            prop: 'wcd',
          },
          {
            label: this.currCoinLangFun('orders_table_entrust_type'), //委托类型
            minWidth: '108',
            align: 'right',
            prop: 'wtlx',
          },
        ]
        if (this.ordersTab == 'currents') {
          otherColumn.push({
            label: this.currCoinLangFun('orders_table_all_cancellations'), //批量撤单
            minWidth: '80',
            align: 'center',
            prop: 'ptwtMeun',
            fixed: 'right',
          })
        }
        if (this.ordersTab == 'histories') {
          otherColumn = [
            ...otherColumn,
            {
              label: this.currCoinLangFun('orders_table_state'), //状态
              minWidth: '80',
              align: 'right',
              prop: 'wtzt',
            },
            {
              label: '',
              minWidth: '80',
              align: 'center',
              prop: 'xqMeun',
              fixed: 'right',
            },
          ]
        }
      }
      if (this.ordersDrop == 'zyzs') {
        otherColumn = [
          {
            label: this.currCoinLangFun('orders_table_trigger'), //触发价
            align: 'right',
            prop: 'trigger_price',
            minWidth: 140,
          },
          {
            label: this.currCoinLangFun('orders_table_entrust_price'), //委托价
            align: 'right',
            prop: 'entrust_price',
            minWidth: 140,
          },
          {
            label: this.currCoinLangFun('orders_table_entrust_balance'), //委托量
            align: 'right',
            prop: 'entrust_balance_text',
            minWidth: 100,
          },
        ]
        if (this.ordersTab == 'currents') {
          otherColumn.push({
            label: this.currCoinLangFun('operation', 'all'), //操作
            minWidth: '80',
            align: 'center',
            prop: 'cdMeun',
            fixed: 'right',
          })
        }
        if (this.ordersTab == 'histories') {
          otherColumn.push({
            label: this.currCoinLangFun('orders_table_state'), //状态
            minWidth: '80',
            align: 'right',
            prop: 'wtzt',
          })
        }
      }
      if (this.ordersDrop == 'dtzyzs') {
        otherColumn = [
          {
            label: `${this.currCoinLangFun('entrust')} | ${this.currCoinLangFun(
              'orders_table_deal_both_price'
            )}`, //委托 | 成交均价
            align: 'right',
            prop: 'wtcjj',
            minWidth: 140,
          },
          {
            label: `${this.currCoinLangFun('entrust')} | ${this.currCoinLangFun(
              'orders_table_dir_amount'
            )}`, //委托 | 成交量
            align: 'right',
            prop: 'wtcjl',
            minWidth: 140,
          },
          {
            label: this.currCoinLangFun('orders_table_take_profit_price'), //止盈价
            align: 'right',
            prop: 'take_profit_price',
            minWidth: 100,
          },
          {
            label: this.currCoinLangFun('orders_table_stop_loss_price'), //止损价
            minWidth: '88',
            align: 'right',
            prop: 'stop_loss_price',
          },
        ]
        if (this.ordersTab == 'currents') {
          otherColumn.push({
            label: this.currCoinLangFun('operation', 'all'), //操作
            minWidth: '80',
            align: 'center',
            prop: 'cdMeun',
            fixed: 'right',
          })
        }
        if (this.ordersTab == 'histories') {
          otherColumn.push({
            label: this.currCoinLangFun('orders_table_state'), //状态
            minWidth: '80',
            align: 'right',
            prop: 'wtzt',
          })
        }
      }
      column = [...column, ...otherColumn]
      if (['dqjb', 'jbjl'].includes(this.ordersDrop)) {
        column = [
          {
            label: this.currCoinLangFun('orders_table_borrow_date'), //借款时间
            align: 'center',
            prop: 'borrowTimeStr',
            minWidth: 90,
            fixed: 'left',
          },
          {
            label: this.currCoinLangFun('orders_table_borrow_code'), //单号
            align: 'left',
            prop: 'borrowCode',
            minWidth: 84,
            fixed: 'left',
          },

          {
            label: this.currCoinLangFun('orders_table_reimbur_date'), //还款时间
            align: 'left',
            prop: 'stillTimeStr',
            minWidth: 108,
          },
          {
            label: this.currCoinLangFun('orders_table_coin'), //币种
            align: 'left',
            prop: 'coin',
            minWidth: 78,
          },
          {
            label: this.currCoinLangFun('orders_table_borrow_amount'), //借款数量
            align: 'right',
            prop: 'borrowAmount',
            minWidth: 108,
          },
          {
            label: this.currCoinLangFun('orders_table_day_rate'), //日费率
            align: 'right',
            prop: 'dayRate',
            minWidth: 108,
          },
          /* {
            label: '利息',
            align: 'right',
            prop: 'lx',
            width: 108,
          }, */
          {
            label: this.currCoinLangFun('orders_table_nopay_amount'), //未归还
            align: 'right',
            prop: 'nopayAmount',
            minWidth: 108,
          },
          {
            label: this.currCoinLangFun('orders_table_state'), //状态
            align: this.ordersDrop == 'jbjl' ? 'center' : 'right',
            prop: 'borrowStatusText',
            minWidth: 128,
          },
          /* {
            label: '操作',
            width: 80,
            align: 'center',
            prop: 'jkczMeun',
            fixed: 'right',
          }, */
        ]
      }
      if (this.ordersDrop == 'dqjb') {
        let column_1 = column.slice(0, 6)
        column_1.push({
          label: this.currCoinLangFun('orders_table_interest_amount'), //利息
          align: 'right',
          prop: 'interestAmount',
          width: 108,
        })
        let column_2 = column.slice(6)
        column_2.push({
          label: this.currCoinLangFun('operation', 'all'), //操作
          width: 80,
          align: 'center',
          prop: 'jkczMeun',
          fixed: 'right',
        })
        column = [...column_1, ...column_2]
      }
      if (this.ordersTab != 'zc') {
        this.getOrderTableDataFun()
        return column
      }

      return []
    },
    //是否出现 逐仓 全仓数据
    tradeTypeDataCom() {
      return this.tradeTypeData.filter((item) => {
        if (!item.isShow) {
          return false
        }
        if (this.dealType == 'cash') {
          return item.value == 'bb'
        } else {
          return item.value != 'bb'
        }
      })
    },
    //可用金额
    buyBalance() {
      if (this.isLogin) {
        let num =
          this.pryBorrowing && this.dealType == 'pry'
            ? this.myCoinMoneyData.buy[`br_${this.tradeType}_balance`]
            : this.myCoinMoneyData.buy[`${this.tradeType}_balance`]
        return toNonExponential(num)
      }
      return '--'
    },
    sellBalance() {
      if (this.isLogin) {
        let num =
          this.pryBorrowing && this.dealType == 'pry'
            ? this.myCoinMoneyData.sell[`br_${this.tradeType}_balance`]
            : this.myCoinMoneyData.sell[`${this.tradeType}_balance`]
        return toNonExponential(num)
      }
      return '--'
    },
    //杠杠资产-当前杠杠最高可借
    pryHighBorrow() {
      if (this.tradeType == 'bb') {
        return {}
      }
      //最大可借数量 = 逐仓杠杆账户内净资产*(最大杠杆倍数-1) - 已借入资产 - 已产生利息
      let {
        netBalance,
        baseBorrowBalance,
        coinBorrowBalance,
        baseInterestAmount,
        coinInterestAmount,
      } = this.pryMultipleInfo
      let close = this.currCoin.coinMoneyData.close
      if (close === undefined) {
        return {}
      }
      netBalance = Number(netBalance).myMul(close)

      let num_1 = Number(netBalance).myMul(this.pryMultipleValue - 1)
      let num_2 = Number(coinBorrowBalance)
        .myMul(close)
        .myAdd(baseBorrowBalance)
      let num_3 = Number(coinInterestAmount)
        .myMul(close)
        .myAdd(baseInterestAmount)
      let maxbaseNum = Number(num_1).mySub(num_2).mySub(num_3)
      let maxCoinNum = Number(maxbaseNum).myDiv(close)
      let times = this.tradePryObj[this.tradeType]
      let maxNum = toNorounded(
        Number(netBalance)
          .myMul(times - 1)
          .mySub(num_2)
          .mySub(num_3),
        this.exchangeCoinData.base_coin_scale
      )
      return {
        times, //最大杠杠倍数
        maxCoinNum: toNorounded(
          maxCoinNum,
          this.exchangeCoinData.coin_coin_scale
        ),
        maxbaseNum: toNorounded(
          maxbaseNum,
          this.exchangeCoinData.base_coin_scale
        ),
        maxNum,
      }
    },
    //风险率
    depositRateData() {
      let min = 65
      let max = -65
      let num = 2.16
      let rate = min - (this.pryMultipleInfo.depositRate - 110) * num
      let text = this.currCoinLangFun('no_risk', 'move_assets') //无风险
      let className = 'fit-success'
      if (rate > min) {
        rate = min
      } else if (rate < max) {
        rate = max
      }
      if (
        this.pryMultipleInfo.depositRate < 150 &&
        this.pryMultipleInfo.depositRate >= 130
      ) {
        text = this.currCoinLangFun('medium_risk', 'move_assets') //中风险
        className = 'fit-warn'
      } else if (this.pryMultipleInfo.depositRate < 130) {
        text = this.currCoinLangFun('high_risk', 'move_assets') //高风险
        className = 'fit-fall'
      }
      return {
        rate: `rotate(${rate}deg)`,
        text,
        className,
      }
    },
  },
  watch: {
    language(newVal) {
      this.getKline()
    },
    themeName(newVal) {
      if (newVal == 'theme-night') {
        this.tvWidget.addCustomCSSFile('bundles/common_night.css')
        this.tvWidget.applyOverrides({
          'paneProperties.background': '#0d1324',
          'mainSeriesProperties.candleStyle.upColor': 'rgb(49, 173, 132)', //涨
          'mainSeriesProperties.candleStyle.downColor': 'rgb(184, 75, 59)', //跌
          'mainSeriesProperties.candleStyle.wickUpColor': 'rgb(49, 173, 132)',
          'mainSeriesProperties.candleStyle.wickDownColor': 'rgb(184, 75, 59)',
          'scalesProperties.lineColor': '#262d38',
          'scalesProperties.textColor': '#688199',
        })
        /* this.tvWidget.applyStudiesOverrides({
          'volume.volume.color.0':'#49272C',
          'volume.volume.color.1': '#1A4946',
        }) */
      } else {
        this.tvWidget.addCustomCSSFile('bundles/common_day.css')
        this.tvWidget.applyOverrides({
          'paneProperties.background': '#fff',
          'mainSeriesProperties.candleStyle.upColor': 'rgb(49, 173, 132)', //涨
          'mainSeriesProperties.candleStyle.downColor': 'rgb(224, 68, 63)', //跌
          'mainSeriesProperties.candleStyle.wickUpColor': 'rgb(49, 173, 132)',
          'mainSeriesProperties.candleStyle.wickDownColor': 'rgb(224, 68, 63)',
          'scalesProperties.lineColor': '#eff0f2',
          'scalesProperties.textColor': '#7e92a6',
        })
        /*  this.tvWidget.applyStudiesOverrides({
          'volume.volume.color.0': '#B7E2D4',
          'volume.volume.color.1': '#F4BEBC',
        }) */
      }
    },
    //  that.tvWidget.addCustomCSSFile("bundles/common_day.css") 动态修改外部样式引入路径
    // that.tvWidget.applyOverrides({"paneProperties.background": "#fff"}) 动态修改overrides相应配置
    currCoinMoneyData(newVal, oldVal) {
      // console.log(newVal.close, numberFilterFun(newVal.close));
      if (!this.tradeForm.currMoney) {
        //设置当前委托价
        this.tradeForm.currMoney = newVal.close
        this.tradeForm.buyData.buy = newVal.close
        this.tradeForm.sellData.buy = newVal.close
      }
      newVal.amountText = `${numberFilterFun(newVal.amount)} ${
        newVal.symbolName.split('/')[0]
      }` //24小时成交量
      newVal.volText = `${numberFilterFun(newVal.vol)} ${
        newVal.symbolName.split('/')[1]
      }` //24小时成交额
      newVal.highText = numberFilterFun(
        newVal.high,
        true,
        this.currCoinPricePrecision
      ) //24小时最高
      newVal.lowText = numberFilterFun(
        newVal.low,
        true,
        this.currCoinPricePrecision
      ) //24小时最低
      //最新成交价

      //修改网页标题
      let newPrice = numberFilterFun(
        newVal.close,
        true,
        this.currCoinPricePrecision
      )
      let exchangeText = this.$route.params.type.replace('_', '/')
      document.title = `${newPrice} ${exchangeText}  BAIYIEX`

      newVal.closeData = {
        close: numberFilterFun(newVal.close, true, this.currCoinPricePrecision),
        className:
          newVal.close - oldVal.close >= 0 ? 'fit-tc-rise' : 'fit-tc-fall',
      }
      //24小时涨跌
      let open = newVal.open
      let close = newVal.close
      let money = toNorounded(
        Number(close).mySub(open),
        this.currCoinPricePrecision
      )
      let percentage = Number(Number(close).mySub(open)).myDiv(open) * 100
      percentage = toNorounded(percentage, 2, false) + '%'

      let className = money >= 0 ? 'fit-tc-rise' : 'fit-tc-fall'
      newVal.riseFallData = {
        money,
        percentage,
        className,
      }
      this.SET_CURR_COIN({
        ...this.currCoin,
        coinMoneyData: newVal,
      })
    },
    tradeBuyType() {
      this.tradeClearFormData()
    },
    dealType(newVal) {
      this.ordersTab = 'currents'
      this.ordersDrop = 'ptwt'
      if (newVal == 'pry') {
        let tradeType = 'zc'
        this.tradeTypeData.forEach((item) => {
          if (item.value == 'zc' && !item.isShow) {
            tradeType = 'qc'
          }
        })
        this.tradeType = tradeType
        this.getMyPrymMltipleFun()
      } else {
        this.tradeType = 'bb'
      }
    },
    tradeType(newVal) {
      if (newVal == 'bb') {
        this.SET_DEAL_TYPE('cash')
      } else {
        this.SET_DEAL_TYPE('pry')
      }
      this.tradeClearFormData()
      this.getOrderTableDataFun()
      this.initAccountInfo()
    },
    ordersTab(newVal, oldVal) {
      if (newVal == 'jbjl') {
        this.ordersDrop = 'dqjb'
      } else if (newVal == 'zc') {
        this.getMyPrymMltipleFun()
      } else if (
        !['currents', 'histories'].includes(oldVal) &&
        ['currents', 'histories'].includes(newVal)
      ) {
        this.ordersDrop = 'ptwt'
      }
    },

    pryBorrowing(newVal) {
      this.SET_PRY_SELF({
        ...this.prySelf,
        pryBorrowing: newVal,
      })
    },
    pryReimbuy(newVal) {
      this.SET_PRY_SELF({
        ...this.prySelf,
        pryReimbuy: newVal,
      })
    },

    warehouseType() {
      for (let key in this.borrowFrom) {
        this.borrowFrom[key] = ''
      }
    },
  },
  async mounted() {
    console.log('dealType=====', this.dealType, this.tradeType)
    let str = this.$route.params.type
    this.currencyType = str.split('_')[0]
    this.priceType = str.split('_')[1]

    //设置借款 还款tabs
    this.pryTabs = [
      {
        label: this.priceType,
        type: 'base',
        min: '',
        rate: '',
      },
      {
        label: this.currencyType,
        type: 'coin',
        min: '',
        rate: '',
      },
    ]
    //借款
    this.borrowInfo = {
      [this.priceType]: {},
      [this.currencyType]: {},
    }
    //还款
    this.returnInfo = {
      [this.priceType]: {},
      [this.currencyType]: {},
    }
    if (this.prySelf.pryBorrowing !== undefined) {
      this.pryBorrowing = this.prySelf.pryBorrowing
    }
    if (this.prySelf.pryReimbuy !== undefined) {
      this.pryReimbuy = this.prySelf.pryReimbuy
    }
    this.pryType = this.priceType
    this.symbol = str.replace('_', '/')
    this.SET_CURR_COIN({
      coinInfo: {},
      coinMoneyData: { closeData: {}, riseFallData: {} },
    })
    this.getCoinInfo(this.currencyType)
    await Promise.all([this.getSymbolNewData(), this.getExchangeCoinFun()])
    this.getMqttInitDataFun()
    this.setMqttFun()
    this.getKline()

    this.getCurrCoinMoneyFun()
    this.getBorrowInfoFun()
    this.getMyExchangeFun()
    //监听深度高度变化
    let depthTimer = null
    let depthErd = elementResizeDetectorMaker()
    depthErd.listenTo($('.exchange-full-content'), (element) => {
      if (depthTimer) {
        clearTimeout(depthTimer)
      }
      depthTimer = setTimeout(() => {
        this.depthsHeight = ''
        this.dealsHeight = ''
        setTimeout(() => {
          this.depthsHeight =
            document.querySelector('.exchange-depths').offsetHeight
          this.dealsHeight =
            document.querySelector('.exchange-deals').offsetHeight
        }, 100)
      }, 200)
    })
  },
  methods: {
    ...mapMutations(['SET_CURR_COIN', 'SET_DEAL_TYPE', 'SET_PRY_SELF']),
    currCoinLangFun(code, type = 'full') {
      return this.coinLangFun(type, code)
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key)
          //while循环替换相同的key
          while (keyIndex >= 0) {
            text = text.replace(item.key, item.value || '')
            keyIndex = text.indexOf(item.key)
          }
        })
      }

      return text
    },
    exchangeRateFilter(val, money) {
      if (!val) {
        return ''
      }
      if (money) {
        val = Number(val).myMul(money)
      }
      return `${this.exchangeCode}${numberFilterFun(
        Number(val).myMul(this.exchangeNum),
        true,
        this.currCoinPricePrecision
      )}`
    },
    //获取币种信息
    async getCoinInfo(coin) {
      if (this.currCoin.symbol && this.currCoin.symbol.split('/')[0] == coin) {
        return false
      }
      let coinData = await getDataApi('1531180815470080002', { symbol: coin })
      coinData = coinData.data.data.records
      this.SET_CURR_COIN({
        ...this.currCoin,
        bzicon: coinData[0].avatar,
        symbol: this.symbol,
      })
      //获取币种详情信息（价格对比）
      let coinInfo = await getExchangePriceInfo(coinData[0].id)
      coinInfo = coinInfo.data.data
      console.log('价格对比======>', coinInfo)
      //获取币种文章信息
      let moreUrl = ''
      if (coinInfo.coinCoin.article_code) {
        let articleData = await getDataApi('1530431184536666113', {
          article_code: coinInfo.coinCoin.article_code,
          pageSize: -521,
        })
        articleData = articleData.data.data.records
        if (articleData && articleData.length > 0) {
          console.log('文章信息', articleData)
          articleData.forEach((item) => {
            if (item.article_lang == this.language) {
              moreUrl = `/article/main/content/${item.article_type}/${item.id}`
            }
          })
        }
      }
      coinInfo.moreUrl = moreUrl
      this.SET_CURR_COIN({
        ...this.currCoin,
        coinInfo,
      })
    },
    //获取当前交易对最新价格
    getSymbolNewData() {
      return new Promise((resolve) => {
        getSymbolNewDataApi([this.symbol], 'xh')
          .then((res) => {
            let data = res.data.data
            //设置当前价格精度
            if (data[this.symbol].close.indexOf('.') != -1) {
              let precision = data[this.symbol].close.split('.')[1]
              if (precision.length > 8) {
                this.currCoinPricePrecision = 8
              } else {
                this.currCoinPricePrecision = precision.length
              }
            } else {
              this.currCoinPricePrecision = 0
            }
            this.currCoinMoneyData = {
              ...data[this.symbol],
              symbolName: this.symbol,
            }
            resolve()
          })
          .catch(() => {
            this.currCoinPricePrecision = 8
            resolve()
          })
      })
    },
    //获取我的成交记录（市场 我的）
    getMyExchangeFun() {
      if (!this.isLogin) {
        return false
      }
      getMyExchangeApi(this.symbol.replace('/', '_')).then((res) => {
        let data = res.data.data
        console.log(data)
        this.dealsMyData = data.map((item) => {
          item.time = dateFormat(
            new Date(item.completed_time),
            'MM-dd hh:mm:ss'
          )
          item.price = numberFilterFun(
            item.success_price,
            true,
            this.currCoinPricePrecision
          )
          item.amount = numberFilterFun(item.balance)
          item.className = item.direction == 1 ? 'fit-tc-rise' : 'fit-tc-fall'
          return item
        })
      })
    },
    //获取交易对信息
    getExchangeCoinFun() {
      return new Promise((resolve) => {
        getCounterpartyDataApi('xh', this.symbol.replace('/', '_'))
          .then((res) => {
            let data = res.data.data
            console.log('=========交易对信息', data)
            this.exchangeCoinData = data
            if (this.exchangeCoinData.base_coin_scale === undefined) {
              this.exchangeCoinData.base_coin_scale = 8
            }
            if (this.exchangeCoinData.coin_coin_scale === undefined) {
              this.exchangeCoinData.coin_coin_scale = 8
            }
            //处理杠杠倍数
            this.pryMultipleList = []
            this.tradeTypeData = this.tradeTypeData.map((item) => {
              if (item.value == 'zc') {
                item.times = this.exchangeCoinData.part_cou
                item.isShow =
                  this.exchangeCoinData.enable_lever == '1' ? true : false
                this.tradePryObj[item.value] = item.times
                if (item.isShow) {
                  for (let index = 2; index <= item.times; index++) {
                    this.pryMultipleList.push({
                      label: index + 'X',
                      value: index,
                    })
                  }
                }
              } else if (item.value == 'qc') {
                item.isShow =
                  this.exchangeCoinData.enable_full_lever == '1' ? true : false
                item.times = this.exchangeCoinData.full_cou
                this.tradePryObj[item.value] = item.times
              }
              return item
            })
            if (this.pryMultipleList.length <= 0) {
              this.pryMultipleList = [
                {
                  label: this.exchangeCoinData.full_cou + 'X',
                  value: this.exchangeCoinData.full_cou,
                },
              ]
            }
            //保存当前是否有杠杠交易
            this.SET_CURR_COIN({
              ...this.currCoin,
              isPry:
                data.enable_lever == '1' || data.enable_full_lever == '1'
                  ? true
                  : false,
            })
            if (this.dealType == 'pry') {
              this.tradeType = data.enable_lever == '1' ? 'zc' : 'qc'
            }
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    },
    //获取当前钱包信息
    getCurrCoinMoneyFun() {
      if (!this.isLogin) {
        return false
      }
      getCurrCoinMoneyApi(
        'spot',
        `${this.currencyType}_${this.priceType}`
      ).then((res) => {
        let data = res.data.data
        console.log('======钱包', data)
        for (let key in data) {
          let type = 'buy'
          let str = key.substring(0, 2)
          if (key.indexOf('Coin') != -1) {
            type = 'sell'
          }
          this.myCoinMoneyData[type][str + '_balance'] = data[key] - 0
        }
        //重新获取借款信息
        this.getBorrowInfoFun()
      })
    },
    //获取借款信息(逐仓 全仓)
    getBorrowInfoFun() {
      if (!this.isLogin || this.dealType != 'pry') {
        return false
      }
      getBorrowMoneyDataApi(
        {
          symbolName: this.symbol,
        },
        this.tradeType
      ).then((res) => {
        let data = res.data.data
        console.log('借款信息', data)
        this.myCoinMoneyData.buy[`br_${this.tradeType}_balance`] = Number(
          data.baseBalance
        ).myAdd(this.myCoinMoneyData.buy[`${this.tradeType}_balance`])
        this.myCoinMoneyData.sell[`br_${this.tradeType}_balance`] = Number(
          data.coinBalance
        ).myAdd(this.myCoinMoneyData.sell[`${this.tradeType}_balance`])
      })
    },
    //借款 还款输入框
    borrowChengFun(value, type, key) {
      this[key][type] = inputNumberLinmitFun(
        value,
        this.exchangeCoinData[`${type}_coin_scale`]
      )
    },
    //借款
    borrowMoneyFun(symbol, type) {
      this.isBorrowCoinLoading = true
      borrowMoneyApi(
        {
          symbolName: this.symbol,
          symbol,
          depositAmount: this.borrowFrom[type],
        },
        this.tradeType
      )
        .then((res) => {
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('borrow_coin_tip'), //借款成功
          })
          this.initAccountInfo()
          this.isBorrowCoinLoading = false
          this.isBorrowCoinDialog = false
        })
        .catch(() => {
          this.isBorrowCoinLoading = false
        })
    },
    //还款
    repaymentMoneyFun(symbol, type) {
      this.isReturnCoinLoading = true
      repaymentMoneyApi(
        {
          symbolName: this.symbol,
          symbol,
          cou: this.repaymentFrom[type],
        },
        this.tradeType
      )
        .then((res) => {
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('repayment_coin_tip'), //还款成功
          })
          this.initAccountInfo()
          this.isReturnCoinLoading = false
          this.isReturnCoinDialog = false
        })
        .catch(() => {
          this.isReturnCoinLoading = false
        })
    },
    //获取全仓账户信息列表（借币 还款）
    getPryWarehouseAccountDataFun() {
      if (!this.isLogin || this.dealType != 'pry') {
        return false
      }
      getPryWarehouseAccountDataApi().then((res) => {
        let data = res.data.data
        data = data.map((item) => {
          item.yh = Number(item.borrowBalance).myAdd(item.interestAmount)
          this.$set(this.borrowFrom, item.coinName, '')
          this.warehouseObj[item.coinName] = item
          return item
        })
        this.warehouseType = data[0].coinName
        this.warehouseTabs = data

        console.log('全仓账户信息列表', data)
      })
    },
    // 市场
    tradeMqttFun(data, bool) {
      data.time = dateFormat(new Date(data.time), 'hh:mm:ss')
      data.price = numberFilterFun(
        data.price,
        true,
        this.currCoinPricePrecision
      )
      data.amount = numberFilterFun(data.amount)
      if (this.dealsBazaarData.length > 0) {
        let oldPrice = this.dealsBazaarData[0].price

        if (data.price == oldPrice) {
          data.direction = this.dealsBazaarData[0].direction
          if (!this.dealsBazaarData[0].className) {
            bool = true
          }
        } else if (data.price > oldPrice) {
          data.direction = 'buy'
        } else {
          data.direction = 'sell'
        }
        console.log(oldPrice, data.price, data.direction)
      } else {
        data.direction == ''
        data.className == ''
      }
      data.className = data.direction == 'buy' ? 'fit-tc-rise' : 'fit-tc-fall'
      if (bool) {
        data.className = ''
      }
      let arrData = [data, ...this.dealsBazaarData]
      this.dealsBazaarData = arrData.splice(0, 30)
    },
    /* mqtt连接 */
    setMqttFun() {
      // 市场
      /* this.initMqtt(`xh_trade_${this.currencyType}/${this.priceType}`, (data) => {
        // console.log("市场", data);
        data.time = dateFormat(new Date(data.time), "hh:mm:ss");
        data.price = numberFilterFun(data.price);
        data.amount = numberFilterFun(data.amount);
        data.className = data.direction == "buy" ? "fit-tc-rise" : "fit-tc-fall";
        let arrData = [data, ...this.dealsBazaarData];
        this.dealsBazaarData = arrData.splice(0, 30);
      }); */
      // 深度
      this.initMqtt(
        `${this.mqttHead}_deptH_${this.currencyType}/${this.priceType}`,
        (data) => {
          this.depthsBuy = data.buyItems
          this.depthsSell = data.sellItems
        }
      )
      //更新用户信息
      if (this.isLogin) {
        this.initMqtt(`refresh_${this.userInfo.id}`, (data) => {
          console.log('更新xxx数据', data, this.dealType)
          if (
            (this.dealType == 'cash' && data.type == 'xh') ||
            (this.dealType == 'pry' && ['ggzc', 'ggqc'].includes(data.type))
          ) {
            this.initAccountInfo()
          }
        })
      }
    },
    //获取mqtt连接初始数据
    getMqttInitDataFun() {
      getMqttInitDataApi(
        `deptH_xh_deptH_${this.currencyType}/${this.priceType}`
      ).then((res) => {
        let data = res.data.data
        if (data.buyItems && data.sellItems) {
          this.depthsBuy = data.buyItems
          this.depthsSell = data.sellItems
        }
      })
      getMqttInitDataApi(
        `tract_xh_trade_${this.currencyType}/${this.priceType}`
      ).then((res) => {
        let data = res.data.data.reverse()
        if (data && data.length > 0) {
          data.forEach((item, index) => {
            this.tradeMqttFun(item, index == 0)
          })
        }
      })
    },
    /* 深度 */
    depthsHandleCommand(command) {
      // 小数切换监听
      console.log(command)
      this.depthsDecimals = command
    },
    /*
      委托
    */
    ordersHandleCommand(command) {
      this.ordersDrop = command
    },
    //获取委托表格数据
    getOrderTableDataFun() {
      if (!this.isLogin) {
        return false
      }
      if (this.ordersTab == 'zc') {
        this.getMyPrymMltipleFun()
        return false
      }
      this.ordersTableloading = true
      let type = ''
      let coin = this.ordersCoin ? this.symbol.replace('/', '_') : 'all'
      if (this.ordersTab == 'currents') {
        type = 'now'
      } else if (this.ordersTab == 'histories') {
        type = 'history'
      }
      if (this.ordersTab == 'jbjl') {
        getBorrowOrdersTableDataApi(
          this.ordersDrop == 'dqjb' ? 'now' : 'history',
          `gg_${this.tradeType}`,
          this.symbol.replace('/', '_')
        ).then((res) => {
          let data = res.data.data
          console.log('====>借币记录', data)
          data = data.map((item) => {
            item.borrowStatusText =
              item.borrowStatus == '1'
                ? this.currCoinLangFun('already_repayment')
                : this.currCoinLangFun('not_repayment') //已还款:未还款
            item.dayRate = item.dayRate - 0
            return item
          })
          this.orderData = data
          this.ordersTableloading = false
        })
        return false
      }
      let ordersDrop = this.ordersDrop
      if (this.dealType == 'pry') {
        ordersDrop = `gg_${this.tradeType}_${this.ordersDrop}`
      }
      getOrdersTableDataApi(type, ordersDrop, coin)
        .then((res) => {
          console.log(
            '============',
            this.currCoinLangFun('portion_transaction')
          )
          let data = res.data.data
          //格式化数据
          data = data.map((item) => {
            item.entrust_price = Number(item.entrust_price)
            item.sj = item.create_time.substring(5).replace('-', '.')
            item.directionText =
              item.direction == '1'
                ? this.currCoinLangFun('entrust_buy')
                : this.currCoinLangFun('entrust_sell') //买入:卖出
            if (['ptwt', 'sjwt', 'dtzyzs'].includes(this.ordersDrop)) {
              item.wtcjj = `${toThousands(item.entrust_price)} | ${toThousands(
                item.success_price
              )}`
              item.wtcjl = `${toThousands(
                item.entrust_balance
              )} | ${toThousands(item.success_balance)}`
              // item.wcd = item.success_price > 0 ? "100%" : "0%";
              item.wtlx = this.ordersDropTitle
              let wcdNum = (
                (item.success_balance / item.entrust_balance) *
                100
              ).toString()
              if (wcdNum == 'NaN' || wcdNum == 'Infinity') {
                wcdNum = '0'
              }
              let wcdIndex = wcdNum.indexOf('.')
              if (wcdIndex != -1) {
                wcdNum = wcdNum.substring(0, wcdIndex + 3) + '%'
              } else {
                wcdNum = wcdNum + '%'
              }
              item.wcd = wcdNum
            }
            if (item.entrust_balance)
              item.entrust_balance_text = toThousands(item.entrust_balance)
            if (item.trigger_price)
              item.trigger_price = toThousands(item.trigger_price)
            if (item.take_profit_price)
              item.take_profit_price = toThousands(item.take_profit_price)
            if (item.stop_loss_price)
              item.stop_loss_price = toThousands(item.stop_loss_price)
            if (item.entrust_status == -1) {
              item.wtzt = this.currCoinLangFun('rescinded') //已撤销
            } else if (item.entrust_status == 1) {
              if (this.ordersDrop == 'zyzs') {
                item.wtzt = this.currCoinLangFun('triggered') //已触发
              } else if (this.ordersDrop == 'dtzyzs') {
                item.wtzt = this.currCoinLangFun('delegation_succeeded') //委托成功
              } else {
                if (this.ordersDrop == 'sjwt' && item.direction == '1') {
                  //市价委托 买入
                  if (
                    Number(item.frozen_total_balance).mySub(
                      item.frozen_balance
                    ) == item.frozen_total_balance
                  ) {
                    item.wtzt = this.currCoinLangFun('complete_transaction') //完全成交
                  } else {
                    item.wtzt = this.currCoinLangFun('portion_transaction') //部分成交
                  }
                } else if (item.success_balance / item.entrust_balance != 1) {
                  item.wtzt = this.currCoinLangFun('portion_transaction') //部分成交
                } else {
                  item.wtzt = this.currCoinLangFun('complete_transaction') //完全成交
                }
              }
            } else if (item.entrust_status == -2) {
              item.wtzt = this.currCoinLangFun('delegation_failed') //委托失败
            }
            item.wtje = toThousands(
              toNorounded(
                Number(item.entrust_price).myMul(item.entrust_balance),
                8
              )
            )
            item.cjje = toThousands(
              toNorounded(
                Number(item.success_price).myMul(item.success_balance),
                8
              )
            )
            if (this.ordersDrop == 'sjwt') {
              item.wtcjj = `${toThousands(item.success_price)}`
              if (Number(item.success_price) <= 0) {
                item.wtcjj = '--'
              }
              if (item.direction == '2') {
                //卖出
                item.wtje = '--'
              } else {
                //买入
                item.wtcjl = `-- | ${toThousands(item.success_balance)}`
                item.wtje = toThousands(item.frozen_total_balance)
                item.wcd = Number(item.frozen_total_balance)
                  .mySub(item.frozen_balance)
                  .myDiv(item.frozen_total_balance)
                  .myMul(100)
                if (item.wcd > 100) {
                  item.wcd = 100
                } else if (item.wcd < 0) {
                  item.wcd = 0
                }
                item.wcd = item.wcd.toString()
                let wcdIndex = item.wcd.indexOf('.')
                if (wcdIndex != -1) {
                  item.wcd = item.wcd.substring(0, wcdIndex + 3) + '%'
                } else {
                  item.wcd = item.wcd + '%'
                }
              }
            }
            return item
          })
          this.orderData = data
          this.ordersTableloading = false
        })
        .catch(() => {
          this.ordersTableloading = false
        })
    },
    //委托表格样式
    ordersTableCellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.property == 'directionText') {
        return {
          color: row.direction == '1' ? '#22a87b' : '#db3a35',
        }
      }
      if (['sj', 'wtzt'].includes(column.property)) {
        return {
          color: this.themeName == 'theme-night' ? '#9bb4cc' : '#4e6073',
        }
      }
      return {}
    },
    //委托撤单
    ordersCancellationsFun(id, type, rowIndex) {
      if (this.orderData.length <= 0 || this.orderAllCdLoading == true) {
        return false
      }
      if (rowIndex !== undefined) {
        this.$set(this.orderData[rowIndex], 'isLoading', true)
      }
      new Promise((resolve, reject) => {
        if (type == 'all') {
          this.$confirm(
            `${this.currCoinLangFun('number_of_cancellations')}：${
              this.orderData.length
            }`,
            this.currCoinLangFun('orders_table_all_cancellations'), // "批量撤单"
            {
              confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
              cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
            }
          )
            .then(() => {
              id = this.orderData.map((item) => {
                return item.id
              })
              resolve()
            })
            .catch(() => {
              reject()
            })
        } else {
          id = [id]
          resolve()
        }
      }).then(() => {
        if (type == 'all') {
          this.orderAllCdLoading = true
        }
        let ordersDrop = this.ordersDrop
        if (this.dealType == 'pry') {
          ordersDrop = `gg_${this.tradeType}_${this.ordersDrop}`
        }
        getOrdersCancellationsApi({
          type: ordersDrop,
          idList: id,
        })
          .then((res) => {
            console.log('撤单', res.data.data)
            if (type == 'all') {
              setTimeout(() => {
                this.orderAllCdLoading = false
              }, 1000)
            }
            this.initAccountInfo()
          })
          .catch(() => {
            if (type == 'all') {
              this.orderAllCdLoading = false
            } else {
              this.$set(this.orderData[rowIndex], 'isLoading', false)
            }
          })
      })
    },
    //委托详情
    lookDetailsFun(row) {
      row = this.deepClone(row)
      this.currOrderItem = row
      this.$refs.entrustDetails.dialog = true
    },
    pryMltipleOpenFun() {
      if (this.tradeType == 'qc') {
        return false
      }
      this.pryMultipleValue = this.pryMultipleInfo.currentLeverageRadio
        ? this.pryMultipleInfo.currentLeverageRadio
        : 0
      this.pryMultipleLoading = false
      this.isPryMltipleDialog = true
    },
    //获取我的杠杠资产
    getMyPrymMltipleFun() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (!this.isLogin) {
          return false
        }
        if (this.dealType != 'pry') {
          return false
        }
        this.zcLoading = true
        getCurrPropertyApi(this.symbol.replace('/', '_'), this.tradeType)
          .then((res) => {
            let data = res.data.data
            if (this.tradeType == 'zc') {
              data.baseAlsoBalance = Number(data.baseBorrowBalance).myAdd(
                data.baseInterestAmount
              )
              data.coinAlsoBalance = Number(data.coinBorrowBalance).myAdd(
                data.coinInterestAmount
              )

              this.pryTabs.map((item) => {
                let type = item.type.replace(
                  item.type[0],
                  item.type[0].toUpperCase()
                )
                item.rate = data[`borrw${type}DayRate`] * 100
                item.min = data[`borrowMin${type}Cou`]
                return item
              })
            } else {
              data.currentLeverageRadio = data.current_leverage_radio
              data.netBalance = data.syzc
            }
            this.pryMultipleInfo = data
            this.zcLoading = false
            console.log('我的资产=====>', data)
          })
          .catch(() => {
            this.zcLoading = false
          })
      }, 300)
    },
    //调整资产-杠杠倍数
    async submitPryMultipleFun() {
      this.pryMultipleLoading = true
      //调整
      await updatePryMultipleApi({
        symbolName: this.symbol,
        cou: this.pryMultipleValue,
      }).catch(() => {
        this.pryMultipleLoading = false
        return false
      })
      //重新获取
      this.initAccountInfo()
      this.pryMultipleLoading = false
      this.isPryMltipleDialog = false
    },
    /* 买入卖出 */
    tradeHandleCommand(command) {
      this.tradeDecimals = command
      this.tradeClearFormData()
    },
    //清除买入卖出输入框数据
    tradeClearFormData() {
      let keyArr = ['buyData', 'sellData']
      keyArr.forEach((item) => {
        for (let key in this.tradeForm[item]) {
          if (key == 'loading') {
            continue
          }
          if (key == 'buy') {
            this.tradeForm[item] = {
              ...this.tradeForm[item],
              [key]: this.tradeForm.currMoney,
            }
            continue
          }
          this.tradeForm[item] = {
            ...this.tradeForm[item],
            [key]: '',
          }
        }
      })
    },
    //买入卖出输入框处理
    tradeInputChengFun(value, type, key, dec = 7) {
      this.tradeForm[type][key] = inputNumberLinmitFun(value, dec)
      if (
        this.tradeForm[type][key] === '' &&
        !['fullPrice', 'lossPrice', 'triggerMoney'].includes(key)
      ) {
        for (let key in this.tradeForm[type]) {
          if (
            ![
              'buy',
              'loading',
              'fullPrice',
              'lossPrice',
              'fullCheck',
              'lossCheck',
            ].includes(key)
          ) {
            if (
              this.tradeDecimals == 'zyzs' &&
              this.tradeBuyType == 'selfdefine' &&
              ['triggerMoney'].includes(key)
            ) {
              return false
            }
            this.tradeForm[type][key] = ''
          }
        }
        return false
      }
      if (key == 'fullPrice') {
        this.tradeForm[type].fullCheck =
          this.tradeForm[type][key] === '' ? false : true
      }
      if (key == 'lossPrice') {
        this.tradeForm[type].lossCheck =
          this.tradeForm[type][key] === '' ? false : true
      }
      if (key == 'buy') {
        let money = toNorounded(
          Number(this.tradeForm[type][key]).myMul(this.tradeForm[type].num),
          this.exchangeCoinData.base_coin_scale
        )
        this.tradeForm[type].money = money
      } else if (key == 'num') {
        let money = toNorounded(
          Number(this.tradeForm[type][key]).myMul(this.tradeForm[type].buy),
          this.exchangeCoinData.base_coin_scale
        )
        this.tradeForm[type].money = money - 0
      } else if (key == 'money') {
        let num = toNorounded(
          Number(this.tradeForm[type].money).myDiv(this.tradeForm[type].buy),
          this.exchangeCoinData.coin_coin_scale
        )
        this.tradeForm[type].num = num - 0
      }
    },
    //设置买卖 百分之几
    setTradeCoinCalculateMoneyFun(moneyType, percent) {
      let money = this.tradeForm[moneyType + 'Data'].buy
      if (money) {
        let myMoney = this[`${moneyType}Balance`]
        if (!myMoney || myMoney=='--') {
          myMoney = 0
        }
        if (this.dealType == 'pry' && percent == 1) {
          //杠杠交易 100% 时先扣除手续费再计算 防止下单失败
          myMoney = Number(myMoney).mySub(
            Number(myMoney).myMul(this.exchangeCoinData[`${moneyType}_fee`])
          )
        }
        let calcNum = 0
        let calcMoney = 0
        if (moneyType == 'buy') {
          calcNum = toNorounded(
            Number(Number(myMoney).myDiv(money)).myMul(percent),
            this.exchangeCoinData.base_coin_scale
          )
          calcMoney = toNorounded(
            Number(money).myMul(calcNum),
            this.exchangeCoinData.coin_coin_scale
          )
        } else if (moneyType == 'sell') {
          calcNum = toNorounded(
            Number(myMoney).myMul(percent),
            this.exchangeCoinData.base_coin_scale
          )
          calcMoney = toNorounded(
            Number(money).myMul(calcNum),
            this.exchangeCoinData.coin_coin_scale
          )
        }
        this.tradeForm[moneyType + 'Data'].num =
          calcNum > 0 ? calcNum - 0 : calcNum
        this.tradeForm[moneyType + 'Data'].money =
          calcMoney > 0 ? calcMoney - 0 : calcMoney
      } else {
        this.tradeForm[moneyType + 'Data'].num = 0
        this.tradeForm[moneyType + 'Data'].money = ''
      }
    },
    //买 卖币种
    async tradeSubmitFun(type, skip = false) {
      if (this.borrowInfo.marketType == 'market') {
        //借款下单市价委托
        this.marketTradeSubmitFun(type, skip)
        return false
      }
      //交易
      this.tradeForm[type + 'Data'].loading = true
      let data = {
        exchangeCoinStr: this.symbol, //交易对
        price: this.tradeForm[type + 'Data'].buy, //委托价
        direction: type == 'buy' ? '1' : '2', //交易方向
        amount: this.tradeForm[type + 'Data'].num, //数量
      }
      let apiType = ''
      if (this.tradeBuyType == 'stopProfitLoss') {
        //限价
        apiType = this.dealType == 'pry' ? `gg_${this.tradeType}_xjwt` : 'xjwt'
      } else if (this.tradeBuyType == 'selfdefine') {
        apiType = this.tradeDecimals
        if (['zyzs', 'dtzyzs'].includes(apiType)) {
          //止盈止损 动态止盈止损
          data.triggerPrice = this.tradeForm[type + 'Data'].triggerMoney
        }
        if (apiType == 'dtzyzs') {
          data.takeProfitPrice = this.tradeForm[type + 'Data'].fullPrice
          data.stopLossPrice = this.tradeForm[type + 'Data'].lossPrice
        }
        apiType =
          this.dealType == 'pry' ? `gg_${this.tradeType}_${apiType}` : apiType
      }

      if (!data.amount) {
        this.$message.error(this.currCoinLangFun('qsrsl_tips', 'popup_tips')) //请输入数量
        this.tradeForm[type + 'Data'].loading = false
        return false
      }
      if (!data.price) {
        this.$message.error(this.currCoinLangFun('enter_commission_price')) //请输入委托价
        this.tradeForm[type + 'Data'].loading = false
        return false
      }
      if (apiType == 'zyzs' && !data.triggerPrice) {
        this.$message.error(this.currCoinLangFun('qsrcfj_tips', 'popup_tips')) //请输入触发价
        this.tradeForm[type + 'Data'].loading = false
        return false
      }
      if (apiType == 'dtzyzs' && !data.takeProfitPrice && !data.stopLossPrice) {
        this.$message.error(this.currCoinLangFun('qsrzyzsj_tips')) //请输入止盈价或止损价
        this.tradeForm[type + 'Data'].loading = false
        return false
      }
      console.log(data)

      //杠杠借款下单
      if (this.dealType == 'pry' && this.pryBorrowing) {
        let pryMoney =
          type == 'buy'
            ? this.tradeForm[type + 'Data'].money
            : this.tradeForm[type + 'Data'].num
        let pryMyMoney = this.myCoinMoneyData[type][`${this.tradeType}_balance`]
        let depositAmount = Number(pryMoney).mySub(pryMyMoney) //需借资产
        if (!skip) {
          if (pryMoney > pryMyMoney) {
            getBorrowMoneyDetailsApi(
              {
                symbolName: this.symbol,
                symbol: type == 'buy' ? this.priceType : this.currencyType,
                depositAmount: depositAmount,
              },
              this.tradeType
            )
              .then((res) => {
                let pryData = res.data.data
                console.log('借款详情=======>', pryData)
                this.borrowInfo = {
                  ...data,
                  money:
                    type == 'buy'
                      ? pryMoney
                      : this.tradeForm[type + 'Data'].money,
                  borrwMoney: depositAmount,
                  ...pryData,
                }
                console.log(this.borrowInfo)
                this.tradeForm[type + 'Data'].loading = false
                this.borrowCoinType = type
                this.isPlaceOrderDialog = true
              })
              .catch(() => {
                this.tradeForm[type + 'Data'].loading = false
              })
            return false
          }
        } else {
          //先借款后下单
          let borrowData = await borrowMoneyApi(
            {
              symbolName: this.symbol,
              symbol: type == 'buy' ? this.priceType : this.currencyType,
              depositAmount: depositAmount,
            },
            this.tradeType
          ).catch((err) => {
            console.log(err)
            return { data: { success: false } }
          })
          if (!borrowData.data.success) {
            this.tradeForm[type + 'Data'].loading = false
            this.isPlaceOrderDialog = false
            this.initAccountInfo()
            return false
          }
        }
      }
      buyAndSellCoinApi(data, apiType)
        .then((res) => {
          let data = res.data.data
          console.log(data)
          this.tradeForm[type + 'Data'].loading = false
          this.isPlaceOrderDialog = false
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('checkout_success', 'popup_tips'), //下单成功
          })
          this.initAccountInfo()
        })
        .catch(() => {
          this.tradeForm[type + 'Data'].loading = false
          this.isPlaceOrderDialog = false
        })
    },
    //市价 买卖币种
    async marketTradeSubmitFun(type, skip = false) {
      this.tradeForm[type + 'Data'].loading = true
      let data = {
        exchangeCoinStr: this.symbol, //交易对
        // price: this.tradeForm[type + 'Data'].buy, //委托价
        direction: type == 'buy' ? '1' : '2', //交易方向
        // amount: this.tradeForm[type + 'Data'].num, //数量
      }
      if (type == 'buy') {
        data.money = this.tradeForm[type + 'Data'].money //金额
      } else {
        data.amount = this.tradeForm[type + 'Data'].num //数量
      }
      if (type == 'buy' && !data.money) {
        this.$message.error(this.currCoinLangFun('qsrje_tips', 'popup_tips')) //请输入金额
        this.tradeForm[type + 'Data'].loading = false
        return false
      }
      if (type == 'sell' && !data.amount) {
        this.$message.error(this.currCoinLangFun('qsrsl_tips', 'popup_tips')) //请输入数量
        this.tradeForm[type + 'Data'].loading = false
        return false
      }

      //杠杠借款下单
      if (this.dealType == 'pry' && this.pryBorrowing) {
        let pryMoney =
          type == 'buy'
            ? this.tradeForm[type + 'Data'].money
            : this.tradeForm[type + 'Data'].num
        let pryMyMoney = this.myCoinMoneyData[type][`${this.tradeType}_balance`]
        let depositAmount = Number(pryMoney).mySub(pryMyMoney) //需借资产
        if (!skip) {
          if (pryMoney > pryMyMoney) {
            getBorrowMoneyDetailsApi(
              {
                symbolName: this.symbol,
                symbol: type == 'buy' ? this.priceType : this.currencyType,
                depositAmount: depositAmount,
              },
              this.tradeType
            )
              .then((res) => {
                let pryData = res.data.data
                console.log('借款详情=======>', pryData)
                this.borrowInfo = {
                  ...data,
                  money:
                    type == 'buy'
                      ? pryMoney
                      : this.tradeForm[type + 'Data'].money,
                  borrwMoney: depositAmount,
                  ...pryData,
                  marketType: 'market',
                  price:
                    type == 'buy'
                      ? this.currCoinLangFun('market_price_buy_tip')
                      : this.currCoinLangFun('market_price_sell_tip'),
                  amount:
                    type == 'buy' ? '--' : this.tradeForm[type + 'Data'].num,
                }
                console.log(this.borrowInfo)
                this.tradeForm[type + 'Data'].loading = false
                this.borrowCoinType = type
                this.isPlaceOrderDialog = true
              })
              .catch(() => {
                this.tradeForm[type + 'Data'].loading = false
              })
            return false
          }
        } else {
          //先借款后下单
          let borrowData = await borrowMoneyApi(
            {
              symbolName: this.symbol,
              symbol: type == 'buy' ? this.priceType : this.currencyType,
              depositAmount: depositAmount,
            },
            this.tradeType
          ).catch((err) => {
            console.log(err)
            return { data: { success: false } }
          })
          if (!borrowData.data.success) {
            this.tradeForm[type + 'Data'].loading = false
            this.isPlaceOrderDialog = false
            this.initAccountInfo()
            return false
          }
        }
      }
      let apiType =
        this.dealType == 'pry' ? `gg_${this.tradeType}_sjwt` : 'sjwt'
      buyAndSellCoinApi(data, apiType)
        .then((res) => {
          let data = res.data.data
          console.log(data)
          this.tradeForm[type + 'Data'].loading = false
          this.isPlaceOrderDialog = false
          this.$message({
            type: 'success',
            message: this.currCoinLangFun('checkout_success', 'popup_tips'), //下单成功
          })
          this.initAccountInfo()
        })
        .catch(() => {
          this.tradeForm[type + 'Data'].loading = false
          this.isPlaceOrderDialog = false
        })
    },
    //初始化账户信息
    initAccountInfo() {
      if (this.timerInit) {
        clearTimeout(this.timerInit)
      }
      this.timerInit = setTimeout(() => {
        //重新获取钱包信息
        this.getCurrCoinMoneyFun()
        //借款信息
        this.getBorrowInfoFun()
        //重新获取委托列表
        this.getOrderTableDataFun()
        //重新获取我的市场
        this.getMyExchangeFun()
        //获取资产信息
        this.getMyPrymMltipleFun()
        //获取全仓账户信息
        this.getPryWarehouseAccountDataFun()
      }, 1000)
    },
    //打开还款
    openRepaymentCoinFun(row = {}) {
      if (!this.isLogin) {
        this.$router.push({ path: '/user/login' })
        return false
      }
      row = this.deepClone(row)
      this.currOrderItem = {
        ...row,
        symbol_name: this.symbol,
      }
      this.$refs.repaymentCoin.dialog = true
    },
    //打开弹窗
    openDialog(key, id) {
      if (!this.isLogin) {
        this.$router.push({ path: '/user/login' })
        return false
      }
      //借款
      if (['isBorrowCoinDialog'].includes(key)) {
        this.borrowFrom = {
          base: '',
          coin: '',
        }
        this.pryType = this.pryTabs[0].label
        this.getMyPrymMltipleFun()
      }
      if (key == 'isTradeFundsDialog' && !id) {
        id = this.exchangeCoinData.coin_coin_id
      }
      if (key == 'isTradeFundsDialog' && id) {
        if (this.dealType != 'pry') {
          this.targerWalletKey = `spot,${id}`
        } else {
          this.targerWalletKey = `marginFixed,${this.exchangeCoinData.id}`
          if (this.tradeType == 'qc') {
            this.targerWalletKey = `marginAll,${id}`
          }
        }
      }
      this[key] = true
    },
    /* k线图 */
    async getKline() {
      /* this.datafeed = new Datafeeds.UDFCompatibleDatafeed(
        'https://demo_feed.tradingview.com', //后台地址
        10000 //轮询时间(毫秒)
      ) */
      let klineData = await getDataApi('1530464853989064705', {
        config_code: 'kline_lang',
      })
      klineData = klineData.data.data.records[0]
      klineData = getStrDataFunction(klineData.config_data)
      let that = this
      let initKlineFun = (minTick) => {
        this.datafeed = new Datafeeds.WebsockFeed(
          '/market',
          this.symbol,
          this,
          5
        )
        let config = {
          autosize: true,
          // height: "100%",
          // fullscreen: true,
          theme: 'Light',
          symbol: this.symbol, //商品
          interval: '60', // 默认K线周期
          timezone: 'Asia/Shanghai', //时区
          // toolbar_bg: "#fff",
          container_id: 'kline_container',
          datafeed: this.datafeed,
          library_path: '/charting_library/',
          locale: klineData[this.language] || this.defaultLang,
          debug: false,
          drawings_access: {
            type: 'black',
            tools: [{ name: 'Regression Trend' }],
          },
          disabled_features: [
            'header_resolutions',
            'timeframes_toolbar',
            'header_symbol_search',
            'header_chart_type',
            'header_compare',
            'header_undo_redo',
            'header_screenshot',
            'header_saveload',
            'use_localstorage_for_settings',
            // 'left_toolbar',
            'volume_force_overlay',
          ],
          enabled_features: [
            'hide_last_na_study_output',
            'move_logo_to_main_pane',
          ],
          custom_css_url: 'bundles/common.css',
          supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
          charts_storage_url: 'http://saveload.tradingview.com',
          charts_storage_api_version: '1.1',
          client_id: 'tradingview.com',
          user_id: 'public_user_id',
          overrides: {
            'paneProperties.background': '#0d1324',
            'paneProperties.vertGridProperties.color': 'rgba(0,0,0,0)', //网格颜色
            'paneProperties.horzGridProperties.color': 'rgba(0,0,0,0)', //网格颜色
            //k线 烛心
            'mainSeriesProperties.candleStyle.upColor': 'rgb(49, 173, 132)', //涨
            'mainSeriesProperties.candleStyle.downColor': 'rgb(184, 75, 59)', //跌
            'mainSeriesProperties.candleStyle.drawBorder': false,
            'mainSeriesProperties.candleStyle.wickUpColor': 'rgb(49, 173, 132)',
            'mainSeriesProperties.candleStyle.wickDownColor':
              'rgb(184, 75, 59)',
            'paneProperties.legendProperties.showLegend': false,

            'mainSeriesProperties.areaStyle.color1': 'rgba(71, 78, 112, 0.5)',
            'mainSeriesProperties.areaStyle.color2': 'rgba(71, 78, 112, 0.5)',
            'mainSeriesProperties.areaStyle.linecolor': '#9194a4',

            //坐标轴
            'scalesProperties.lineColor': '#262d38',
            'scalesProperties.textColor': '#688199',

            volumePaneSize: 'medium', //底部指标高度 large, medium, small, tiny
            //精度
            'mainSeriesProperties.minTick': minTick,
          },
          studies_overrides: {
            'volume.precision': 0,
            // 销量线
            'volume.volume.linewidth.0': 0,
            'volume.volume.color.0': '#31AD84',
            'volume.volume.color.1': '#B84B3B',
            'volume.volume.transparency': 65,
          },
          time_frames: [
            {
              text: '1min',
              resolution: '1',
              description: 'realtime',
              title: '分时',
            },
            { text: '1min', resolution: '1', description: '1min' },
            { text: '5min', resolution: '5', description: '5min' },
            { text: '15min', resolution: '15', description: '15min' },
            { text: '30min', resolution: '30', description: '30min' },
            {
              text: '1hour',
              resolution: '60',
              description: '1hour',
              title: '1hour',
            },
            /*{ text: "4hour", resolution: "240", description: "4hour",title: "4hour" },*/
            {
              text: '1day',
              resolution: '1D',
              description: '1day',
              title: '1day',
            },
            {
              text: '1week',
              resolution: '1W',
              description: '1week',
              title: '1week',
            },
            { text: '1mon', resolution: '1M', description: '1mon' },
          ],
        }
        if (this.themeName === 'theme-daytime') {
          // config.toolbar_bg = "#fff";
          config.custom_css_url = 'bundles/common_day.css'
          config.overrides['paneProperties.background'] = '#fff'
          config.overrides['mainSeriesProperties.candleStyle.upColor'] =
            '#a6d3a5'
          config.overrides['mainSeriesProperties.candleStyle.downColor'] =
            '#ffa5a6'
          config.overrides['mainSeriesProperties.candleStyle.upColor'] =
            'rgb(49, 173, 132)'
          config.overrides['mainSeriesProperties.candleStyle.downColor'] =
            'rgb(224, 68, 63)'
          config.overrides['mainSeriesProperties.candleStyle.wickUpColor'] =
            'rgb(49, 173, 132)'
          config.overrides['mainSeriesProperties.candleStyle.wickDownColor'] =
            'rgb(224, 68, 63)'
          config.overrides['scalesProperties.lineColor'] = '#eff0f2'
          config.overrides['scalesProperties.textColor'] = '#7e92a6'

          /* config.studies_overrides['volume.volume.color.0']='#B7E2D4'
        config.studies_overrides['volume.volume.color.1']='#F4BEBC' */
        }
        this.tvWidget = new TradingView.widget(config)
        //  that.tvWidget.addCustomCSSFile("bundles/common_day.css") 动态修改外部样式引入路径
        // that.tvWidget.applyOverrides({"paneProperties.background": "#fff"}) 动态修改overrides相应配置
        this.tvWidget.onChartReady(function () {
          /* console.log(
          "that.tvWidget",
          this,
          that.tvWidget.applyOverrides({
            "paneProperties.background": "#fff",
          })
        ); */
          that.tvWidget.chart().executeActionById('drawingToolbarAction') //隐藏或显示绘图工具栏
          that.tvWidget
            .chart()
            .createStudy(
              'Moving Average Exponential',
              false,
              false,
              [5],
              null,
              {
                'plot.color': '#EDEDED',
              }
            )
          that.tvWidget
            .chart()
            .createStudy(
              'Moving Average Exponential',
              false,
              false,
              [10],
              null,
              {
                'plot.color': '#ffe000',
              }
            )
          that.tvWidget
            .chart()
            .createStudy(
              'Moving Average Exponential',
              false,
              false,
              [30],
              null,
              {
                'plot.color': '#ce00ff',
              }
            )
          that.tvWidget
            .chart()
            .createStudy(
              'Moving Average Exponential',
              false,
              false,
              [60],
              null,
              {
                'plot.color': '#00adff',
              }
            )
          that.tvWidget
            .createButton()
            .attr('title', 'realtime')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(3)
              that.tvWidget.setSymbol('', '1')
            })
            .append('<span>Time</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'M1')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '1')
            })
            .append('<span>1m</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'M5')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '5')
            })
            .append('<span>5m</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'M15')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '15')
            })
            .append('<span>15m</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'M30')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '30')
            })
            .append('<span>30m</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'H1')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '60')
            })
            .append('<span>1H</span>')
            .addClass('selected')

          that.tvWidget
            .createButton()
            .attr('title', 'D1')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '1D')
            })
            .append('<span>1D</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'W1')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '1W')
            })
            .append('<span>1W</span>')

          that.tvWidget
            .createButton()
            .attr('title', 'M1')
            .on('click', function () {
              if ($(this).hasClass('selected')) return
              $(this)
                .addClass('selected')
                .parent('.group')
                .siblings('.group')
                .find('.button.selected')
                .removeClass('selected')
              that.tvWidget.chart().setChartType(1)
              that.tvWidget.setSymbol('', '1M')
            })
            .append('<span>1M</span>')
        })
      }
      //获取最新价格后再执行k线渲染
      let timer = setInterval(() => {
        if (this.currCoinMoneyData.close) {
          clearInterval(timer)
          //获取当前最小精度
          let close = this.currCoinMoneyData.close.toString()
          let minArr = []
          let min = '1'
          if (close.indexOf('.') != -1) {
            minArr = close.split('.')[1].split('')
          }
          minArr.forEach(() => {
            min = min * 10
          })
          initKlineFun(`${min},1,false`)
        }
      }, 100)
    },
    skipUserPage(type) {
      if (type == 'login') {
        this.$router.push({ path: '/user/login' })
      } else if (type == 'register') {
        this.$router.push({ path: '/user/register' })
      }
    },
    closeDialog(type, isRefresh) {
      if (type == 'transferDialog') {
        this.isTradeFundsDialog = false
        if (isRefresh && isRefresh == 'refresh') {
          this.initAccountInfo()
        }
      }
    },
    openEntrustFun() {
      if (!this.isLogin) {
        this.$router.push({ path: '/user/login' })
        return false
      }
      let url = '/account/entrust/'
      if (this.tradeType == 'zc') {
        url = url + 'margin-fixed'
      } else if (this.tradeType == 'qc') {
        url = url + 'margin-all'
      } else {
        url = url + 'spot'
      }
      let routeUrl = this.$router.resolve({
        path: url,
      })
      window.open(routeUrl.href, '_blank')
    },
    setMoneyFun(data) {
      console.log(data)
      this.tradeForm.buyData.buy = data.price
      this.tradeForm.sellData.buy = data.price
    },
  },
  beforeDestroy() {
    if (this.timerMoney) {
      clearInterval(this.timerMoney)
    }
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
}
</script>

<style lang="scss" scoped>
@import './full-screen.scss';
</style>
<style lang="scss">
@import './full-screen-all.scss';
</style>
