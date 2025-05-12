<template>
  <div class="wallet-assets-box">
    <div class="fit-background assets-card">
      <div class="flex-box" style="justify-content: space-between">
        <div>
          <p class="fit-tc-tip flex-box">
            {{ currCoinLangFun("total_assets") }}
            <i class="fa" :class="{
                            'fa-eye-slash': !assetSetting.showAllAssets,
                            'fa-eye': assetSetting.showAllAssets,
                          }" @click="setAssetsConfig"></i>
          </p>
          <p class="fit-tc-primary">
            ≈
            {{ showAssetFun(computeBTC(allAssets.usdt, allAssets.rate)) }}
            BTC
            <span class="fit-tc-tip">
              {{
                            showAssetFun(exchangeRateFilter(allAssets.usdt))
                            }}
            </span>
          </p>
        </div>
        <div class="assets-card-btn">
          <el-button type="primary" size="medium" @click="(transfertargerWalletKey = ''), (transferDialog = true)">{{
                      currCoinLangFun("transfer", "full") }}</el-button>
          <!-- <el-button type="primary" size="medium">转账</el-button> -->
        </div>
      </div>
      <ul class="flex-box tab-ul" :class="{ isWrap: walletData.length >= 7 }">
        <template v-for="item in walletData">
          <li :color-type="item.type" :key="item.type" v-if="item.type != 0" :class="{ active: tabVal == item.type }"
            @click="tabVal = item.type">
            <p class="fit-tc-tip tab-pone">
              <span class="color-box"></span>
              <span class="color-text">{{ item.name }}</span>
            </p>
            <p class="fit-tc-primary tab-ptwo">
              <span>{{ showAssetFun(computeBTC(item.usdt, item.rate)) }}</span>
              BTC
            </p>
            <p class="fit-tc-tip tab-pthree">{{ showAssetFun(exchangeRateFilter(item.usdt)) }}</p>
          </li>
        </template>
      </ul>
    </div>

    <div class="assets-wallet" v-if="
            tabVal == 1 || tabVal == 2 || tabVal == 6 || tabVal == 7 || tabVal == 8
          ">
      <!-- 可用余额 -->
      <div class="margin-card fit-background" v-if="tabVal == 6 || tabVal == 7">
        <div class="flex-box card-bottom" style="margin: 0 !important">
          <div>
            <p class="fit-tc-tip" style="font-size: 12px; margin-bottom: 8px">{{ currCoinLangFun("text_available_balance",
                          "exchange") }}</p>
            <p class="fit-tc-primary" style="font-size: 16px">
              ≈
              {{ showAssetFun(availableBalanceFun()) }}
              BTC
              <span class="fit-tc-tip" style="font-size: 12px; margin-left: 4px">
                {{ exchangeCode
                                }}{{
                                showAssetFun(
                                exchangeRateFilter(
                                walletData.filter((i) => i.type == tabVal)[0].balanceUsdt
                                ).slice(1)
                                )
                                }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- 可用余额 -->
      <div class="fit-background search-box flex-box">
        <div class="search-input flex-box">
          <el-input :placeholder="currCoinLangFun('table_coin_name', 'exchange')" v-model="tableSearchData.coin_name"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="flex-box control-box">
          <div class="amount-checkbox">
            <el-dropdown class="fit-tc-primary" @command="changeValuationType">
              <span class="el-dropdown-link">
                {{ currCoinLangFun("valuation", "move_assets") }}
                {{ tableSearchData.valuation_type
                                }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in coinRateList" :key="item.symbol" :command="item">{{ item.symbol
                                  }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!-- <ul class="flex-box operation-ul">
            <li class="fit-tc-primary hover-text">
              <i></i>
              算力购买
            </li>
            <span class="box-line"></span>
            <li class="fit-tc-primary hover-text">
              <i></i>
              放贷
            </li>
            <span class="box-line"></span>
            <li class="fit-tc-primary hover-text">
              <i></i>
              下线资产提现
            </li>
            <span class="box-line"></span>
            <li class="fit-tc-primary hover-text">
              <i></i>
              提现白名单
            </li>
            <span class="box-line"></span>
            <li class="fit-tc-primary hover-text">
              <i></i>
              小额币
            </li>
          </ul>-->
        </div>
      </div>
      <div class="assets-table fit-background">
        <el-table :data="filterValuationData" style="width: 100%" v-loading="request">
          <el-table-column :show-overflow-tooltip="true" prop="symbol" :label="currCoinLangFun('menu_bz', 'move_index')"
            min-width="195">
            <div slot-scope="scope" class="flex-box">
              <img :src="scope.row.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
              <div>
                <p style="line-height: 16px">{{ scope.row.symbol }}</p>
                <p>
                  <el-tooltip class="item" effect="dark" placement="top-start" popper-class="coin-info-box">
                    <div slot="content">
                      <div class="content-box">
                        <div class="flex-box name">
                          <img :src="scope.row.avatar" />
                          <span class="fit-tc-primary">
                            {{
                                                        scope.row.symbol
                                                        }}
                          </span>
                          <span class="fit-tc-tip">
                            {{
                                                        scope.row.full_name
                                                        }}
                          </span>
                        </div>
                        <div class="number-about number-about1 flex-box">
                          <div>
                            <p class="fit-tc-tip">
                              {{
                                                            currCoinLangFun(
                                                            "lntroduction_circulation",
                                                            "exchange"
                                                            )
                                                            }}
                            </p>
                            <p class="fit-tc-primary">
                              {{ scope.row.circulate_cou || "--" }}
                              {{ ` ${scope.row.symbol}` }}
                            </p>
                          </div>
                          <span class="box-line fit-tc-primary"></span>
                          <div>
                            <p class="fit-tc-tip">
                              {{
                                                            currCoinLangFun(
                                                            "lntroduction_total",
                                                            "exchange"
                                                            )
                                                            }}
                            </p>
                            <p class="fit-tc-primary">
                              {{ scope.row.total_cou || "--" }}
                              {{ ` ${scope.row.symbol}` }}
                            </p>
                          </div>
                        </div>
                        <div class="number-about number-about2 flex-box">
                          <div>
                            <p class="fit-tc-tip">
                              {{
                                                            currCoinLangFun(
                                                            "lntroduction_price",
                                                            "exchange"
                                                            )
                                                            }}
                            </p>
                            <p class="fit-tc-primary">{{ scope.row.cost || "--" }}</p>
                          </div>
                          <span class="box-line fit-tc-primary"></span>
                          <div>
                            <p class="fit-tc-tip">
                              {{
                                                            currCoinLangFun("lntroduction_date", "exchange")
                                                            }}
                            </p>
                            <p class="fit-tc-primary">
                              {{
                                                            scope.row.publish_time
                                                            ? scope.row.publish_time.split(" ")[0]
                                                            : "--"
                                                            }}
                            </p>
                          </div>
                        </div>
                        <p class="tip">{{ currCoinLangFun("lntroduction_info", "exchange") }}</p>
                        <p class="detail">{{ dataCoinLangFun("information", scope.row) }}</p>
                        <span class="a-theme fit-tc-tertiary active-text" v-if="scope.row.article_code"
                          @click="textClickFun(scope.row.article_code)">
                          {{ currCoinLangFun("view_more", "all") }}
                          <i class="el-icon-top-right"></i>
                        </span>
                      </div>
                    </div>
                    <p class="fit-tc-tip" style="
                        font-size: 12px;
                        line-height: 16px;
                        cursor: pointer;
                      ">{{ scope.row.full_name }}</p>
                  </el-tooltip>
                </p>
              </div>
            </div>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="total" sortable
            :label="currCoinLangFun('text_total_ze', 'exchange')" min-width="163" align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.total)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="balance" sortable
            :label="currCoinLangFun('entrust_available', 'full')" min-width="174" align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.balance)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="frozen_balance" sortable :label="currCoinLangFun('frozen')"
            min-width="186" align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.frozen_balance)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="usdt" :label="`${currCoinLangFun('valuation', 'move_assets')}${
                        tableSearchData.valuation_type
                      }`" min-width="186" align="right" v-if="coinRateList.length">
            <p slot-scope="scope">
              {{ showAssetFun(valuationOther(scope.row.usdt)) }}
              {{ tableSearchData.valuation_type }}
            </p>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" class-name="control-column" min-width="256">
            <template slot-scope="scope">
              <el-button type="text" v-if="tabVal == 1" @click="czBtnFun(scope.$index, scope.row)">{{
                              currCoinLangFun("menu_cz", "move_index") }}</el-button>
              <el-button type="text" v-if="tabVal == 1" @click="txBtnFun(scope.$index, scope.row)">{{
                              currCoinLangFun("menu_tx", "move_index") }}</el-button>
              <el-button type="text" @click="hzBtnFun(scope.$index, scope.row)">{{ currCoinLangFun("transfer_text", "all")
                              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="assets-wallet" v-if="tabVal == 3">
      <div class="margin-card fit-background">
        <div style="display: inline-block" class="card-top">
          <div class="flex-box margin-select">
            <div class="active fit-tc-tip" :class="{ 'bg-active': fixedIndex == 1 }" @click="fixedIndex = 1">{{
                          currCoinLangFun("zc_text", "move_transaction") }}</div>
            <div class="active fit-tc-tip" :class="{ 'bg-active': fixedIndex == 2 }" @click="fixedIndex = 2">{{
                          currCoinLangFun("all_warehouse", "exchange") }}</div>
          </div>
        </div>
        <div class="flex-box card-bottom">
          <div>
            <p class="fit-tc-tip" style="font-size: 12px; margin-bottom: 8px">{{ currCoinLangFun("net_asset_valuation") }}
            </p>
            <p class="fit-tc-primary" style="font-size: 16px">
              ≈
              {{
                            showAssetFun(
                            removeZero(
                            fixedIndex == 1
                            ? fixedTotal.valuationBTC
                            : allTotal.valuationBTC
                            )
                            )
                            }}
              BTC
              <span class="fit-tc-tip" style="font-size: 12px; margin-left: 4px">
                {{ exchangeCode
                                }}{{
                                showAssetFun(
                                exchangeRateFilter(
                                fixedIndex == 1
                                ? fixedTotal.valuation
                                : allTotal.valuation
                                ).slice(1)
                                )
                                }}
              </span>
            </p>
          </div>
          <span class="box-line"></span>
          <div>
            <p class="fit-tc-tip" style="font-size: 12px; margin-bottom: 8px">{{ currCoinLangFun("zzcgz_text",
                          "move_assets") }}</p>
            <p class="fit-tc-primary" style="font-size: 16px">
              ≈
              {{
                            showAssetFun(
                            removeZero(
                            fixedIndex == 1 ? fixedTotal.totalBTC : allTotal.totalBTC
                            )
                            )
                            }}
              BTC
              <span class="fit-tc-tip" style="font-size: 12px; margin-left: 4px">
                {{ exchangeCode
                                }}{{
                                showAssetFun(
                                exchangeRateFilter(
                                fixedIndex == 1
                                ? fixedTotal.valuation
                                : allTotal.valuation,
                                fixedIndex == 1 ? fixedTotal.totalBTC : allTotal.totalBTC
                                ).slice(1)
                                )
                                }}
              </span>
            </p>
          </div>
          <span class="box-line"></span>
          <div>
            <p class="fit-tc-tip" style="font-size: 12px; margin-bottom: 8px">{{ currCoinLangFun("already_borrow") }}</p>
            <p class="fit-tc-primary" style="font-size: 16px">
              ≈
              {{
                            showAssetFun(
                            removeZero(
                            fixedIndex == 1 ? fixedTotal.borrowBTC : allTotal.borrowBTC
                            )
                            )
                            }}
              BTC
            </p>
          </div>
          <span class="box-line"></span>
          <div>
            <p class="fit-tc-tip" style="font-size: 12px; margin-bottom: 8px">{{ currCoinLangFun("Interest_repaid") }}</p>
            <p class="fit-tc-primary" style="font-size: 16px">
              ≈
              {{
                            showAssetFun(
                            removeZero(
                            fixedIndex == 1
                            ? fixedTotal.interestBTC
                            : allTotal.interestBTC
                            )
                            )
                            }}
              BTC
            </p>
          </div>
          <span class="box-line" v-if="fixedIndex == 2"></span>
          <div>
            <div class="risk-box" v-if="fixedIndex == 2">
              <div class="flex-box risk-box-top">
                <div class="risk-content flex-box">
                  <div class="fit-tc-tip">{{ `>1.7` }}</div>
                  <div class="risk-img">
                    <img src="@/assets/image/margin_chart_line.png" />
                    <img :style="{ transform: depositRateData().rate }"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgB7ZvBTRxBEEWrerHl42TgdgZOwVH4aDsC7ABsrZzAcvDd8gk5C8iAEAiBIwIxRe/CAaahtwcheKD/pNWueuqweqqumf7SuEH59ef/lxhjr/w88fDl793P/wxIMihF3rJ8DeWTwzcikSAFLld/N+JuLA3fr9ZwQDvwbZ6uDPZOAns5tzTUa7c6EgNSYCxqWWkhgd141LLGkMBu3GLoWSPAFOj+vlqzlA0IcwaGV90WVkslAO3Aet65awvPIXeuPTs4gcvVfn7ItecCJ7D1wHxmC9w2xgn0nXSvpJ3Eu5HwBEbk+65d+MUHg4ETOEbjbhu8OzGvAxszMLm2cAcNScDzME5gSo1t6hK4lXKMy43LmoEtrqP8liRctA/rwDrKn0KL9lEC74ry6xrWHEQJjI7YnhbtowR6x2MKLdpnCeyI7WnRPktgx0mDFu2zZuAdUX5VA4v2YR24fb7Ron3aSSQ/Us2TgRE4J64nRfsYgXMekEnRPkZgK8qfQor2OQIbUf4UUrSPETjOietB0T6nA2fMQFK0D3qMmSEFdB7GCGxG+VNA0T5GYDnGfZxRng0C9jWHlwKoA+2gv9aPDAJHoMVhb23505gXbzAC34yne8Xi8dbCUkN67YsTJvz4drIY41NTYrm2qQHhBuTnav9rJNstCfXmzryej+stvu7StWgTQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEOLVcglVaoYItQp5tgAAAABJRU5ErkJggg==" />
                  </div>
                  <div class="fit-tc-tip">1.1</div>
                </div>
                <div class="fxl">
                  <div class="fit-tc-tip">{{ currCoinLangFun("risk", "exchange") }}</div>
                  <div class="risk-text" :class="depositRateData().className">{{ depositRateData().text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="assets-table fit-background">
        <el-table :data="valuationData" style="width: 100%" v-loading="request" v-if="fixedIndex == 1">
          <el-table-column :show-overflow-tooltip="true" prop="symbol"
            :label="currCoinLangFun('orders_table_coin', 'full')" min-width="157">
            <div slot-scope="scope" class="flex-box">
              <img :src="scope.row.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
              <div>
                <p style="line-height: 16px">{{ scope.row.symbol }}</p>
              </div>
            </div>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('entrust_available', 'full')"
            min-width="140" align="right">
            <span slot-scope="scope">
              <p style="white-space: nowrap">
                {{ showAssetFun(removeZero(scope.row.baseBalance)) }}
                {{ scope.row.base_symbol }}
              </p>
              <p>
                {{ showAssetFun(removeZero(scope.row.balance)) }}
                {{ scope.row.coin_symbol }}
              </p>
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('frozen')" min-width="140" align="right">
            <span slot-scope="scope">
              <p>
                {{ showAssetFun(removeZero(scope.row.baseFrozen)) }}
                {{ scope.row.base_symbol }}
              </p>
              <p>
                {{ showAssetFun(removeZero(scope.row.frozen_balance)) }}
                {{ scope.row.coin_symbol }}
              </p>
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('have_borrow', 'full')" min-width="140"
            align="right">
            <span slot-scope="scope">
              <p>
                {{ showAssetFun(removeZero(scope.row.baseBorrow)) }}
                {{ scope.row.base_symbol }}
              </p>
              <p>
                {{ showAssetFun(removeZero(scope.row.borrow_balance)) }}
                {{ scope.row.coin_symbol }}
              </p>
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('loan_interest')" min-width="140"
            align="right">
            <span slot-scope="scope">
              <p>
                {{ showAssetFun(removeZero(scope.row.baseInterest)) }}
                {{ scope.row.base_symbol }}
              </p>
              <p>
                {{ showAssetFun(removeZero(scope.row.coinInterest)) }}
                {{ scope.row.coin_symbol }}
              </p>
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="fixedDepositRate"
            :label="currCoinLangFun('risk', 'exchange')" min-width="151" align="right">
            <span slot-scope="scope">
              {{
                            scope.row.fixedDepositRate == "999"
                            ? "-"
                            : `${
                            scope.row.fixedDepositRate
                            ? scope.row.fixedDepositRate + "%"
                            : "--"
                            }`
                            }}
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="force_price"
            :label="currCoinLangFun('blowing_up_price', 'exchange')" min-width="151" align="right">
            <span slot-scope="scope">
              {{
                            removeZero(scope.row.force_price) == "0"
                            ? "-"
                            : removeZero(scope.row.force_price)
                            }}
            </span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" class-name="control-column" min-width="150">
            <template slot-scope="scope">
              <el-button type="text" @click="ghBtnFun(scope.$index, scope.row)">
                {{
                                currCoinLangFun("orders_table_pay_amount", "exchange")
                                }}
              </el-button>
              <!-- <el-button type="text" @click="jyBtnFun(scope.$index, scope.row)"
                >交易</el-button
              >-->
              <el-button type="text" @click="hzBtnFun(scope.$index, scope.row)">{{ currCoinLangFun("transfer_text", "all")
                              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-table :data="valuationData" style="width: 100%" v-loading="request" v-if="fixedIndex == 2">
          <el-table-column :show-overflow-tooltip="true" prop="symbol" :label="currCoinLangFun('menu_bz', 'move_index')"
            min-width="208">
            <div slot-scope="scope" class="flex-box">
              <img :src="scope.row.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
              <div>
                <p style="line-height: 16px">{{ scope.row.coin_symbol }}</p>
              </div>
            </div>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('entrust_available', 'full')"
            min-width="170" align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.balance)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('frozen')" min-width="170" align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.frozen_balance)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('have_borrow', 'full')" min-width="170"
            align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.borrow)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" :label="currCoinLangFun('loan_interest')" min-width="170"
            align="right">
            <span slot-scope="scope">{{ showAssetFun(removeZero(scope.row.interest)) }}</span>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" class-name="control-column" min-width="232">
            <template slot-scope="scope">
              <el-button type="text" @click="ghBtnFun(scope.$index, scope.row)">
                {{
                                currCoinLangFun("orders_table_pay_amount", "exchange")
                                }}
              </el-button>
              <el-button type="text" @click="hzBtnFun(scope.$index, scope.row)">{{ currCoinLangFun("transfer_text", "all")
                              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="assets-wallet" v-if="tabVal == 4">
      <div class="assets-table fit-background">
        <el-table :data="valuationData" style="width: 100%" v-loading="request">
          <el-table-column :show-overflow-tooltip="true" prop="symbol" :label="currCoinLangFun('menu_bz', 'move_index')"
            min-width="124">
            <div slot-scope="scope" class="flex-box">
              <img :src="scope.row.avatar" style="width: 20px; height: 20px; margin-right: 8px" />
              <div>
                <p style="line-height: 16px">{{ scope.row.symbol }}</p>
                <p class="fit-tc-tip" style="font-size: 12px; line-height: 16px; cursor: pointer">{{ scope.row.full_name
                                  }}</p>
              </div>
            </div>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="balance"
            :label="currCoinLangFun('entrust_available', 'full')" min-width="152" align="right">
            <template slot-scope="scope">
              <span>{{ showAssetFun(removeZero(scope.row.balance)) }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="balance" :label="currCoinLangFun('frozen')" min-width="152"
            align="right">
            <template slot-scope="scope">
              <span>{{ showAssetFun(removeZero(scope.row.frozen_balance || 0)) }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="unprofit"
            :label="currCoinLangFun('wsxyk_text', 'move_assets')" min-width="152" align="right">
            <template slot-scope="scope">
              <span :style="{ color: scope.row.profit < 0 ? '#db3a35' : '#22a87b' }">{{
                              showAssetFun(removeZero(scope.row.unprofit || 0)) }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="profit"
            :label="currCoinLangFun('ysxyk_text', 'move_assets')" min-width="152" align="right">
            <template slot-scope="scope">
              <span :style="{ color: scope.row.profit < 0 ? '#db3a35' : '#22a87b' }">{{
                              showAssetFun(removeZero(scope.row.profit || 0)) }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="btc"
            :label="`${currCoinLangFun('valuation', 'move_assets')} BTC`" min-width="172" align="right"
            v-if="coinRateList.length">
            <p slot-scope="scope">{{ showAssetFun(removeZero(scope.row.btc || 0)) }}</p>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" class-name="control-column" min-width="270">
            <template slot-scope="scope">
              <!-- <el-button type="text" @click="jyBtnFun(scope.$index, scope.row)"
                >交易</el-button
              >-->
              <el-button type="text" @click="hzBtnFun(scope.$index, scope.row)">{{ currCoinLangFun("transfer_text", "all")
                              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="fit-background assets-bot" v-if="tabVal == 5">
      <div class="fit-tc-border-color assets-bot-top flex-box">
        <span class="box-switch-green" :class="{ active: usedBix }" @click="usedBix = !usedBix">
          <span class="box-switch_label" v-if="usedBix">NO</span>
          <span class="box-switch_content" :class="{ active: usedBix }"></span>
        </span>
        <span class="fit-tc-primary text">自动划转 CIX 支付手续费</span>
        <span class="tip">75折</span>
      </div>

      <div class="assets-table">
        <el-table :data="quantiData" style="width: 100%">
          <el-table-column :show-overflow-tooltip="true" prop="name" label="策略名称" min-width="240"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="valuation1" label="当前资产估值[CNY]" min-width="320"
            align="right"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="valuation2" label="当前资产估值[BTC]" min-width="320"
            align="right"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" min-width="320" class-name="control-column">
            <template slot-scope="scope" v-if="scope.row.name == '网格交易'">
              <el-button type="text" @click="detailBtnFun(scope.$index, scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-dialog title="网格交易资产持有详情" :visible.sync="quantiDialog" min-width="600px">
      <div class="fit-background assets-table">
        <el-table :data="gridData">
          <el-table-column :show-overflow-tooltip="true" property="coin_name" label="币种"
            min-width="150"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" property="currHad" label="当前持有"
            min-width="200"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" property="valuation" label="估值CNY"></el-table-column>
        </el-table>
      </div>
    </el-dialog>

    <!-- 划转弹框 -->
    <fund-transfer v-if="transferDialog" :transferDialog="transferDialog" :closeDialog="closeDialog.bind(this)"
      :targerWalletKey="transfertargerWalletKey"></fund-transfer>
    <!--  还币付息-->
    <repayment-coin ref="repaymentCoin" :tradeType="fixedIndex == 1 ? 'zc' : 'qc'"
      :orderData="currOrderItem"></repayment-coin>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getWalletAccount, getCurrencyAccount, getCoinRate } from '@/api/user'
import { numberFilterFun, toThousands, toNorounded } from '@/util/util'
import { getAllDepositRateApi } from '@/api/fullScreen'
import { getDataApi } from '@/api/system'

import fundTransfer from '@/components/wallet/fund-transfer.vue'
import repaymentCoin from '@/components/full/repayment-coin.vue'

export default {
  components: { fundTransfer, repaymentCoin },
  beforeRouteLeave(to, from, next) {
    next()
    //重置显示的钱包类型
    this.SET_ASSETS_SETTING({
      ...this.assetSetting,
      type: 1,
    })
  },
  watch: {
    tabVal() {
      //清空搜索框
      this.tableSearchData = {
        coin_name: '',
        hide_type: '0',
        $hide_type: this.currCoinLangFun('text_all', 'all'), //全部
        valuation_type: 'BTC',
        valuation_rate: '1',
        divide: 0,
      }

      if (
        this.tabVal == 1 ||
        this.tabVal == 2 ||
        this.tabVal == 6 ||
        this.tabVal == 7 ||
        this.tabVal == 8
      ) {
        //获取兑率
        this.getCoinRateFun()
      } else if (this.tabVal == 3) {
        this.fixedIndex = 1
      }
      this.getCurrencyAccountFun()
    },
    fixedIndex() {
      this.setFixedTableData()
    },
    'assetSetting.type'(newVal) {
      if (newVal) {
        this.tabVal = newVal
      }
    },
  },
  data() {
    return {
      currOrderItem: {},
      transferDialog: false, //划转
      transfertargerWalletKey: '', //划转目标钱包key
      request: false, //类型 1 2
      quantiDialog: false, //网格交易资产持有详情
      usedBix: true, //使用BIX支付手续费
      tabVal: 1, //账户tabs
      fixedIndex: 1, //全仓逐仓tabs
      tableSearchData: {
        coin_name: '',
        hide_type: '0',
        $hide_type: this.currCoinLangFun('text_all', 'all'), //全部
        valuation_type: 'BTC',
        valuation_rate: '1',
        divide: 0,
      },
      valuationData: [],
      zcData: [], //逐仓账户
      qcData: [], //全仓账户
      fixedTotal: {}, //逐仓统计
      allTotal: {}, //全仓统计
      quantiData: [
        {
          name: '网格交易',
          valuation1: 1,
          valuation2: 10000,
        },
        {
          name: 'CTA账户',
          valuation1: 1000,
          valuation2: 1,
        },
      ],
      total: 300,
      pageSize: 20,
      currPage: 1,
      allAssets: {
        usdt: 0,
        rate: 1,
      }, //总资产
      walletData: [], //账户
      coinRateList: [], //估值列表

      isSkipArticle: false,
    }
  },
  created() {
    //初始化显示钱包类型
    if (this.assetSetting.type) {
      this.tabVal = this.assetSetting.type
    } else {
      this.tabVal = 1
    }

    this.getWalletAccountFun()
    this.getCurrencyAccountFun()
    this.getCoinRateFun()
  },
  methods: {
    ...mapMutations(['SET_ASSETS_SETTING']),
    currCoinLangFun(code, type = 'assets') {
      return this.coinLangFun(type, code)
    },
    setAssetsConfig() {
      this.SET_ASSETS_SETTING({
        ...this.assetSetting,
        showAllAssets: !this.assetSetting.showAllAssets,
      })
    },
    //控制所有资产显示隐藏
    showAssetFun(value) {
      return this.assetSetting.showAllAssets ? value : '***'
    },
    //获取钱包资产
    getWalletAccountFun() {
      getWalletAccount().then((res) => {
        let dataRes = res.data.data

        let allAssetsData = dataRes.filter((item) => item.type == '0')
        this.allAssets = allAssetsData[0]
        this.walletData = dataRes.filter((item) => {
          if (
            item.type == '8' &&
            this.userInfo.is_merchant != 2 &&
            item.balanceUsdt == '0'
          ) {
            return false
          }
          return true
        })
        console.log(this.walletData, 'his.walletData')
      })
    },
    //获取估值列表汇率
    getCoinRateFun() {
      getCoinRate().then((res) => {
        this.coinRateList = res.data.data
        if (this.coinRateList.length) {
          this.tableSearchData.valuation_rate = this.coinRateList[0].rate
          this.tableSearchData.valuation_type = this.coinRateList[0].symbol
          this.tableSearchData.divide = this.coinRateList[0].divide || 0
        }
      })
    },
    //获取所有币种资产
    getCurrencyAccountFun() {
      this.request = true

      this.valuationData = []
      getCurrencyAccount({ type: this.tabVal })
        .then((res) => {
          if (this.tabVal != 3) {
            this.valuationData = res.data.data.map((item) => {
              item.total = Number(item.total == undefined ? 0 : item.total)
              item.balance = Number(
                item.balance == undefined ? 0 : item.balance
              )
              item.frozen_balance = Number(
                item.frozen_balance == undefined ? 0 : item.frozen_balance
              )
              return item
            })
          } else {
            this.zcData = res.data.data[0].fixed
            this.qcData = res.data.data[0].all
            this.fixedTotal = res.data.data[0].fixedTotal
            this.allTotal = res.data.data[0].allTotal
            this.setFixedTableData()
            //查询全仓风险率
            this.getCurrPropertyFun()
          }

          this.request = false
        })
        .catch(() => {
          this.request = false
        })
    },
    //合约风险率
    getCurrPropertyFun() {
      getAllDepositRateApi()
        .then((res) => {
          let data = res.data.data
          this.allTotal = {
            ...this.allTotal,
            depositRate: data,
          }
        })
        .catch(() => {})
    },
    //计算风险率
    depositRateData() {
      let min = 65
      let max = -65
      let num = 2.16
      let rate = min - (this.allTotal.depositRate - 110) * num
      let text = this.currCoinLangFun('no_risk', 'move_assets') //无风险
      let className = 'fit-success'
      if (rate > min) {
        rate = min
      } else if (rate < max) {
        rate = max
      }
      if (this.allTotal.depositRate < 150 && this.allTotal.depositRate >= 130) {
        text = this.currCoinLangFun('medium_risk', 'move_assets') //中风险
        className = 'fit-warn'
      } else if (this.allTotal.depositRate < 130) {
        text = this.currCoinLangFun('high_risk', 'move_assets') //高风险
        className = 'fit-fall'
      }
      return {
        rate: `rotate(${rate}deg)`,
        text,
        className,
      }
    },
    // 判断当前是逐仓还是全仓
    setFixedTableData() {
      if (this.fixedIndex == 1) {
        this.valuationData = this.zcData
      } else if (this.fixedIndex == 2) {
        this.valuationData = this.qcData
      }
    },
    computeBTC(usdt, rate) {
      if (usdt && rate) {
        return `${toThousands(
          toNorounded(Number(usdt).myDiv(Number(rate)), 9)
        )}`
      } else {
        return '0'
      }
    },
    removeZero(value) {
      if (value) {
        return `  ${toThousands(Number(value))}`
      } else {
        return '0'
      }
    },
    //估值其它货币
    valuationOther(value) {
      if (value && this.tableSearchData.valuation_rate) {
        if (this.tableSearchData.divide == 1) {
          return `${toThousands(
            toNorounded(
              Number(value).myDiv(Number(this.tableSearchData.valuation_rate)),
              8
            )
          )}`
        } else {
          return `${toThousands(
            toNorounded(
              Number(value).myMul(Number(this.tableSearchData.valuation_rate)),
              8
            )
          )}`
        }
      } else {
        return '0'
      }
    },
    availableBalanceFun() {
      let currData = this.walletData.filter(
        (item) => item.type == this.tabVal
      )[0]
      if (this.tabVal == 6) {
        return toThousands(Number(currData.balanceUsdt).myDiv(currData.rate))
      } else if (this.tabVal == 7) {
        return toThousands(Number(currData.balanceUsdt).myDiv(currData.rate))
      }
    },
    exchangeRateFilter(val, money) {
      if (!val) {
        return '0'
      }
      if (money) {
        val = Number(val).myMul(money)
      }
      return `${this.exchangeCode}${toThousands(
        Number(val).myMul(this.exchangeNum)
      )}`
    },
    closeDialog(type, isRefresh) {
      if (type == 'transferDialog') {
        this.transferDialog = false
        if (isRefresh && isRefresh == 'refresh') {
          this.getWalletAccountFun()
          this.getCurrencyAccountFun()
        }
      }
    },
    changeHideType(obj) {
      this.tableSearchData.hide_type = obj.value
      this.tableSearchData.$hide_type = obj.label
    },
    changeValuationType(obj) {
      this.tableSearchData.valuation_rate = obj.rate
      this.tableSearchData.valuation_type = obj.symbol
      this.tableSearchData.divide = obj.divide || 0
    },
    detailBtnFun() {
      this.quantiDialog = true
    },
    //充值按钮
    czBtnFun(index, row) {
      // console.log(row);
      this.$confirm(
        this.currCoinLangFun('if_go_recharge_page'), // "是否前往充值页面?"
        this.currCoinLangFun('tips', 'all'), //"提示"
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'info',
        }
      ).then(() => {
        this.$router.push({
          path: `/account/wallet/deposit`,
        })
      })
    },
    //提现按钮
    txBtnFun(index, row) {
      // console.log(row);

      this.$confirm(
        this.currCoinLangFun('if_go_Withdrawal_page'), // "是否前往提现页面?"
        this.currCoinLangFun('tips', 'all'), //"提示"
        {
          confirmButtonText: this.currCoinLangFun('confirm', 'all'), //确定
          cancelButtonText: this.currCoinLangFun('cancel', 'all'), //取消
          type: 'info',
        }
      ).then(() => {
        this.$router.push({
          path: `/account/wallet/withdrawal`,
        })
      })
    },
    //划转按钮
    hzBtnFun(index, row) {
      // console.log(row, "hz");
      if (this.tabVal == '1') {
        this.transfertargerWalletKey = 'wallet' //钱包账户
      } else if (this.tabVal == '2') {
        this.transfertargerWalletKey = 'spot' //币币账户
      } else if (this.tabVal == '3' && this.fixedIndex == '1') {
        this.transfertargerWalletKey = `marginFixed,${row.id}` //杠杆账户-逐仓
      } else if (this.tabVal == '3' && this.fixedIndex == '2') {
        this.transfertargerWalletKey = `marginAll,${row.base_coin_id}` //杠杠账户-全仓
      } else if (this.tabVal == '4') {
        this.transfertargerWalletKey = 'contract' //合约账户
      } else if (this.tabVal == '5') {
        // "量化账户"
      } else if (this.tabVal == '6') {
        this.transfertargerWalletKey = 'market' //市值账户
      } else if (this.tabVal == '7') {
        this.transfertargerWalletKey = 'wealth' //理财账户
      }

      this.transferDialog = true
    },
    ghBtnFun(index, row) {
      console.log(row)
      row = this.deepClone(row)
      this.currOrderItem = {
        ...row,
        symbol_name: row.symbol,
      }
      this.$refs.repaymentCoin.dialog = true
    },
    textClickFun(article_code) {
      if (this.isSkipArticle) {
        return false
      }
      this.isSkipArticle = true
      //跳转文章
      getDataApi('1530431184536666113', {
        article_code: article_code,
        article_lang: this.language,
      })
        .then((res) => {
          this.isSkipArticle = false
          let data = res.data.data.records
          if (res.data.data.records.length > 0) {
            data = data[0]
            let routeData = this.$router.resolve({
              path: `/article/main/content/${data.article_type}/${data.id}`,
            })
            window.open(routeData.href, '_blank')
          }
        })
        .catch(() => {
          this.isSkipArticle = false
        })
    },
  },
  computed: {
    ...mapGetters([
      'language',
      'exchange',
      'exchangeName',
      'exchangeNum',
      'exchangeCode',
      'assetSetting',
      'userInfo',
    ]),
    filterValuationData: function () {
      //匹配过滤数据，忽略大小写
      let reg = new RegExp(this.tableSearchData.coin_name, 'i')

      if (this.tableSearchData.coin_name) {
        return this.valuationData.filter((item) => item.symbol.match(reg))
      } else {
        return this.valuationData
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.coin-info-box {
  .content-box {
    padding: 24px;
    width: 432px;

    .name {
      img {
        width: 24px;
        height: 24px;
      }

      span {
        line-height: 24px;
        font-size: 20px !important;
        margin-left: 8px !important;
      }
    }

    .number-about {
      border-bottom: 1px solid;
      border-color: rgba(123, 123, 147, 0.16);

      &>div {
        flex: 1;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
      }

      .box-line {
        width: 1px;
        height: 56px;
        display: block;
        margin-left: 16px !important;
        margin-right: 16px !important;
      }
    }

    .number-about1 {
      border-top: 1px solid;
      border-color: rgba(123, 123, 147, 0.16);
      margin-top: 24px !important;
    }

    .number-about2 {}

    .tip {
      line-height: 16px;
      margin-top: 24px !important;
      font-weight: 400;
    }

    .detail {
      line-height: 20px;
      font-size: 14px !important;
      margin-bottom: 24px !important;
      margin-top: 8px !important;
    }

    .a-theme {
      text-decoration: none;
      cursor: pointer;
      line-height: 20px;
      font-size: 14px !important;
    }
  }
}

.wallet-assets-box {
  min-height: 800px;

  .flex-box {
    display: flex;
    align-items: center;
  }

  .assets-card {
    padding: 24px;

    &>div:first-child {
      &>div:first-child {
        &>p:first-child {
          line-height: 20px;
          font-size: 14px !important;

          i {
            cursor: pointer;
            font-size: 14px !important;
            margin-left: 12px !important;
          }
        }

        &>p:last-child {
          font-size: 24px !important;

          span {
            font-size: 16px !important;
            margin-left: 4px !important;
          }
        }
      }

      .assets-card-btn {
        position: relative;
        bottom: 8px;

        button {
          border-radius: 2px;
          background-color: #0020FD;
          border-color: #0020FD;

          &:not(:first-child) {
            margin-left: 16px;
          }
        }
      }
    }

    .tab-ul {
      position: relative;
      margin-top: 24px !important;
      justify-content: space-between;

      &.isWrap {
        flex-wrap: wrap;

        &>li {
          flex: 0 0 364px;
          margin-bottom: 20px;

          &:not(:first-child) {
            margin-left: 0px !important;
          }
        }
      }

      li {
        flex: 1;
        height: 96px;
        padding: 12px;
        border: 2px solid transparent;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;

        &:not(:first-child) {
          margin-left: 16px !important;
        }

        &[color-type='1'] {
          &.active {
            p {
              color: #0020FD !important;
            }
          }

          &:hover {
            p {
              color: #0020FD !important;
            }
          }

          .color-box {
            background-color: #0020FD;
          }
        }

        &[color-type='2'] {
          &.active {
            p {
              color: #13c2c2 !important;
            }
          }

          &:hover {
            p {
              color: #13c2c2 !important;
            }
          }

          .color-box {
            background-color: #13c2c2;
          }
        }

        &[color-type='3'] {
          &.active {
            p {
              color: #e8694a !important;
            }
          }

          &:hover {
            p {
              color: #e8694a !important;
            }
          }

          .color-box {
            background-color: #e8694a;
          }
        }

        &[color-type='4'] {
          &.active {
            p {
              color: #ff8533 !important;
            }
          }

          &:hover {
            p {
              color: #ff8533 !important;
            }
          }

          .color-box {
            background-color: #ff8533;
          }
        }

        &[color-type='5'] {
          &.active {
            p {
              color: #f6bd15 !important;
            }
          }

          &:hover {
            p {
              color: #f6bd15 !important;
            }
          }

          .color-box {
            background-color: #f6bd15;
          }
        }

        &[color-type='6'] {
          &.active {
            p {
              color: #18dcff !important;
            }
          }

          &:hover {
            p {
              color: #18dcff !important;
            }
          }

          .color-box {
            background-color: #18dcff;
          }
        }

        &[color-type='7'] {
          &.active {
            p {
              color: #f6bd15 !important;
            }
          }

          &:hover {
            p {
              color: #f6bd15 !important;
            }
          }

          .color-box {
            background-color: #f6bd15;
          }
        }

        &[color-type='8'] {
          &.active {
            p {
              color: #77dfa2 !important;
            }
          }

          &:hover {
            p {
              color: #77dfa2 !important;
            }
          }

          .color-box {
            background-color: #77dfa2;
          }
        }

        .tab-pone {
          display: flex;
          align-items: center;
          line-height: 20px;
          font-size: 14px !important;

          .color-box {
            width: 7px;
            height: 7px;
            margin-right: 8px;
            display: inline-block;
          }

          .color-text {
            white-space: nowrap;
          }
        }

        .tab-ptwo {
          line-height: 20px;
          font-weight: 500;
          font-size: 14px !important;
          margin-top: 4px !important;

          span {
            line-height: 24px;
            font-size: 20px !important;
          }
        }

        .tab-pthree {
          font-weight: 500;
          line-height: 20px;
          font-size: 14px !important;
        }
      }
    }
  }

  .assets-wallet {
    box-sizing: border-box;
    margin-top: 8px !important;

    .search-box {
      border-bottom: 1px solid;
      border-radius: 4px 4px 0 0;

      .search-input {
        position: relative;
        max-width: 120px;
        box-sizing: border-box;
        margin-left: 24px !important;
        padding-right: 12px !important;

        ::v-deep.el-input {
          input.el-input__inner {
            border: 0;
            width: 100%;
            border-width: 0;
            box-sizing: border-box;
            padding-left: 20px !important;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            margin: 21px auto;
            border-bottom: 1px solid;
            border-radius: 0;

            &::-webkit-input-placeholder {
              color: #7d92a8;
            }
          }

          .el-input__prefix {
            left: 0;
            top: 12px;

            i {
              width: 20px;
              height: 20px;
              position: absolute;
              color: #7d92a8;
            }
          }
        }
      }

      .control-box {
        flex: 1;
        justify-content: space-between;
        padding-right: 16px !important;
        padding-left: 12px !important;

        .amount-checkbox {
          .el-dropdown {
            display: inline-block;
            position: relative;
            font-size: 14px;
            margin-left: 12px !important;
          }
        }

        .operation-ul {
          li {
            position: relative;
            cursor: pointer;
            line-height: 20px;
            font-size: 14px !important;
          }

          .box-line {
            margin-left: 12px !important;
            margin-right: 12px !important;
            width: 1px;
            height: 16px;
            display: block;
          }
        }
      }
    }

    .margin-card {
      padding: 24px;
      margin-bottom: 8px;

      .card-top {
        .margin-select {
          cursor: pointer;
          font-size: 18px !important;
          padding: 2px;

          div {
            padding: 10px 24px;
          }
        }
      }

      .card-bottom {
        margin-top: 24px !important;

        &>div {
          flex: 1;

          .risk-box {
            .risk-box-top {
              .fxl {
                margin-left: 20px !important;
              }
            }

            .risk-text {
              font-size: 14px;
            }

            .risk-img {
              position: relative;
              margin: 0 12px;

              img {
                &:nth-child(1) {
                  width: 64px;
                  height: 27px;
                }

                &:nth-child(2) {
                  position: absolute;
                  z-index: 1;
                  width: 40px;
                  height: 40px;
                  left: 50%;
                  margin-left: -20px;
                  top: 18px;
                  transition: all 0.3s linear;
                }
              }

              .fit-tc-tip {
                font-size: 12px;
                line-height: 16px;
              }
            }

            .price-box {
              margin-top: 16px;
              justify-content: space-between;
            }

            .price-item {
              flex-direction: column;

              div {
                text-align: right;

                &:nth-child(1) {
                  text-align: left;
                }
              }
            }
          }
        }

        &>span {
          width: 1px;
          height: 56px;
          display: block;
          background-color: rgba(123, 123, 147, 0.16);
          margin-right: 24px !important;
        }
      }
    }
  }

  ::v-deep.assets-table {
    .control-column {
      padding-right: 12px;
      text-align: right;

      .cell {
        box-sizing: border-box;
        justify-content: flex-end;
      }
    }

    .el-table__header {
      thead tr th .cell {
        font-size: 12px;
      }
    }

    .el-pagination {
      display: flex;
      justify-content: center;
      padding-top: 24px !important;
      padding-bottom: 24px !important;

      button {
        background-color: transparent;
      }

      ul li {
        background-color: transparent;
      }
    }
  }

  .assets-bot {
    margin-top: 8px;

    .assets-bot-top {
      padding: 24px;
      border-bottom: 1px solid;

      .box-switch-green {
        width: 26px;
        height: 12px;
        box-sizing: border-box;
        border: 1px solid;
        border-radius: 2px;
        position: relative;
        z-index: 0;
        display: inline-block;
        cursor: pointer;
        margin-right: 12px !important;

        &.active {
          background: linear-gradient(270deg,
              #53e6b4 39.74%,
              hsla(0, 0%, 100%, 0));
        }

        .box-switch_label {
          font-size: 16px;
          line-height: 8px;
          transform: scale(0.5);
          display: inline-block;
          position: absolute;
          z-index: 0;
          top: 1px;
          left: -3px;
        }

        .box-switch_content {
          border-color: #384252;
          width: 14px;
          height: 16px;
          box-shadow: 0 4px 12px -2px rgba(56, 68, 108, 0.08);
          border-radius: 4px;
          position: absolute;
          z-index: 1;
          left: -7px;
          top: -4px;
          transition: all 0.3s;
          border: 1px solid;

          &.active {
            left: 17px;
          }
        }
      }

      .text {
        font-size: 14px !important;
        line-height: 20px;
        margin-left: 8px !important;
      }

      .tip {
        background-color: #31ad84;
        border-radius: 2px 8px 0 2px;
        padding: 0 4px;
        color: #f5faff;
        margin-left: 4px !important;
        font-size: 12px !important;
        line-height: 16px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.theme-night {
  .wallet-assets-box {
    .assets-card {
      &>div:first-child {
        &>div:first-child {
          &>p:first-child {
            i {
              cursor: pointer;

              &:hover {
                color: #3a7ee6;
              }
            }
          }
        }
      }

      .tab-ul {
        li {
          background: rgba(225, 228, 235, 0.06);
        }
      }
    }

    .assets-wallet {
      .search-box {
        border-color: #151d29;

        .search-input {
          ::v-deep.el-input {
            input.el-input__inner {
              border-color: rgb(56, 66, 82);
            }
          }
        }
      }

      .margin-card {
        .card-top {
          .margin-select {
            background-color: #151d29;
          }
        }
      }
    }

    ::v-deep.assets-table {
      .el-table__header {
        thead tr th .cell {
          color: #9bb4cc;

          .ascending {
            border-bottom-color: #9bb4cc;
          }

          .descending {
            border-top-color: #9bb4cc;
          }
        }

        thead tr th.ascending {
          .ascending {
            border-bottom-color: #0020FD !important;
          }
        }

        thead tr th.descending {
          .descending {
            border-top-color: #0020FD !important;
          }
        }
      }

      .el-pagination {
        button {
          color: #dde3e6 !important;

          &[disabled] {
            color: #688199 !important;
          }
        }

        ul.el-pager li {
          &.number {
            color: #dde3e6 !important;
          }

          &.number.active {
            color: #0020FD !important;
          }
        }
      }
    }
  }

  .assets-bot {
    .assets-bot-top {
      .box-switch-green {
        border-color: #262d38;
        background: linear-gradient(270deg, transparent, #636363);

        .box-switch_content {
          background-color: #384252;
          border-color: #384252;
        }
      }
    }
  }
}

.theme-daytime {
  .wallet-assets-box {
    .assets-card {
      &>div:first-child {
        &>div:first-child {
          &>p:first-child {
            i {
              cursor: pointer;

              &:hover {
                color: #1e64cc;
              }
            }
          }
        }
      }

      .tab-ul {
        li {
          background: rgba(225, 228, 235, 0.16);
        }
      }
    }

    .assets-wallet {
      .search-box {
        border-color: #fff;

        .search-input {
          ::v-deep.el-input {
            input.el-input__inner {
              border-color: rgb(216, 223, 235);
            }
          }
        }
      }

      .margin-card {
        .card-top {
          .margin-select {
            background-color: #f5f6fa;
          }
        }
      }
    }
  }

  ::v-deep.assets-table {
    .el-table__header {
      thead tr th .cell {
        color: #4e6073;

        .ascending {
          border-bottom-color: #4e6073;
        }

        .descending {
          border-top-color: #4e6073;
        }
      }

      thead tr th.ascending {
        .ascending {
          border-bottom-color: #2271e6 !important;
        }
      }

      thead tr th.descending {
        .descending {
          border-top-color: #2271e6 !important;
        }
      }
    }

    .el-pagination {
      button {
        color: #10171f !important;

        &[disabled] {
          color: #7e92a6 !important;
        }
      }

      ul li {
        &.number {
          color: #10171f !important;
        }

        &.number.active {
          color: #2271e6 !important;
        }
      }
    }
  }

  .assets-bot {
    .assets-bot-top {
      .box-switch-green {
        background: linear-gradient(270deg, transparent, #384252);
        border-color: #384252;

        .box-switch_content {
          background-color: #fff;
          border-color: #384252;
        }
      }
    }
  }
}

.assets-table {
  padding: 0 20px 20px;
  box-sizing: border-box;
}
</style>