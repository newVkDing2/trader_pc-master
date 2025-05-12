<template>
  <div class="newhome-box">
    <!-- banner -->
    <div class="newhome-banner-box">
      <!-- <el-image class="banner-img" v-show="themeName != 'theme-night'"
        :src="getImgUrlFun('index_banner_content.banner_code', 'white')"></el-image>
      <el-image class="banner-img" v-show="themeName == 'theme-night'"
      :src="getImgUrlFun('index_banner_content.banner_code', 'black')"></el-image>-->

      <div class="banner-content flex-between">
        <div class="b-left flex-start">
          <div class="banner-title title-color">
            <p>{{ $t("home.welcUse") }}</p>
            <p class="logo_color">Coincheckusa</p>
            <p>{{ $t("home.platform") }}</p>
          </div>
          <div class="banner-register" v-if="isLogin">
            <avue-input
              v-model="index_value"
              :placeholder="$t('home.searchCoin')"
            ></avue-input>
            <div
              class="btn"
              @click="
                $router.push({
                  path: '/quotes/index',
                  query: { text: index_value },
                })
              "
            >
              {{ $t("home.search") }}
              <!-- {{ currCoinLangFun("register") }} -->
            </div>
          </div>
        </div>
        <div class="b-right flex-end">
          <el-image
            class="banner-img"
            :src="require('@/assets/image/banner.png')"
          ></el-image>
        </div>
        <!-- <div class="banner-gn flex-box">
          <div
            class="gn-item"
            v-for="(item,index) in getConfigFun('index_banner_content.icon_list',[])"
            :key="index"
          >
            <div class="item-img">
              <el-image :src="getImgUrlFun(item.img_code)" />
            </div>
            <div class="item-title">{{currCoinLangFun(item.title_code)}}</div>
            <div class="item-tip">{{currCoinLangFun(item.tip_code)}}</div>
          </div>
        </div>-->
      </div>
    </div>
    <!-- 公告 -->
    <div class="advertise_box flex-center">
      <div class="advertise_inner flex-between">
        <div class="ad_left flex-between">
          <img :src="require('@/assets/svg/notice.svg')" alt="SVG Icon" />
          <P>{{ noticeContent }}</P>
        </div>
        <div class="ad_right cur_p" @click="openAnnoDialog = true">
          {{ $t("home.seeMore") + ">" }}
        </div>
      </div>
    </div>
    <!-- {{secondContractCoinList}}--secondContractCoinList -->
    <!-- 货币走马灯 -->
    <div class="coinInfo_box container_box" ref="wrapper">
      <div class="inner-container" ref="innerContainer">
        <div
          class="item flex-colum-evenly"
          v-for="(item, index) in secondContractCoinList"
          :key="index"
        >
          <div class="logo">
            <img :src="item.logo" alt width="40px" />
          </div>
          <div class="title num_Heavy">{{ item.showSymbol }}</div>
          <div class="content flex-between">
            <p
              :class="[
                _isRFD(
                  allCoinPriceInfo[item.coin].openPrice,
                  allCoinPriceInfo[item.coin].close
                ),
              ]"
            >
              {{ allCoinPriceInfo[item.coin].close }}
            </p>
            <p
              :class="[
                _isRFD(
                  allCoinPriceInfo[item.coin].openPrice,
                  allCoinPriceInfo[item.coin].close
                ),
                'rfd-sign rightNum fw-num ',
              ]"
            >
              {{ allCoinPriceInfo[item.coin].priceChangePercent + "%" }}
            </p>
          </div>
          <div
            class="btn_box"
            @click="
              $router.push({
                path: '/trade/index',
                query: { type: 'sec', symbol: item.coin },
              })
            "
          >
            <div class="crycle">{{ ">" }}</div>
            <!-- <img
            :src="isHover ? require('@/assets/svg/arrow-right-hover.svg') : require('@/assets/svg/arrow-right.svg')"   /> -->
            <!-- <img
              @click="
                $router.push({
                  path: '/trade/index',
                  query: { type: 'sec', symbol: item.coin },
                })
              "
              :src="require('@/assets/svg/arrow-right.svg')"
            /> -->
          </div>
        </div>
      </div>
    </div>

    <!-- 热门币种 -->
    <div class="hot_coinType container_box">
      <div class="coin_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('home.hotCoin')" name="hot">
            <el-table :data="secondContractCoinList" style="width: 100%">
              <el-table-column
                prop="showSymbol"
                :label="$t('home.name')"
                align="left"
                width="350"
              >
                <template slot-scope="scope">
                  <div class="flex-start" style="gap: 15px">
                    <img
                      :src="scope.row.logo"
                      alt
                      class="leftImg"
                      width="20px"
                    />
                    <div class="fw-bold">{{ scope.row.showSymbol }}</div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column :label="$t('home.newPrice')" width="370">
                <template slot-scope="scope">
                  <div>{{ allCoinPriceInfo[scope.row.coin].close }}</div>
                </template>
              </el-table-column>

              <el-table-column :label="$t('home.riseFallRange')">
                <template slot-scope="scope">
                  <div
                    :class="[
                      _isRFD(
                        allCoinPriceInfo[scope.row.coin].openPrice,
                        allCoinPriceInfo[scope.row.coin].close
                      ),
                      'rfd-sign rightNum fw-num num_Bold',
                    ]"
                  >
                    {{ allCoinPriceInfo[scope.row.coin].priceChangePercent }}%
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="menu" label=" " align="right">
                <template #default="scope">
                  <span
                    class="table-btn"
                    @click="navigateToTrade(scope.row.coin)"
                  >
                    {{ $t("home.buy") }}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.foreignCoin')" name="wai">{{
            $t("home.foreignCoin")
          }}</el-tab-pane>
          <el-tab-pane :label="$t('home.interGold')" name="guo">{{
            $t("home.interGold")
          }}</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- EXFT精选 -->
    <div class="selected_box container_box flex-colum-around">
      <div class="title">
        <p class="a1 num_Bold">EXFT{{ $t("home.selected") }}</p>
        <p class="help">{{ $t("home.helpEarnMoney") }}</p>
      </div>
      <div class="content flex-between">
        <div v-for="(item, index) in 3" :key="index">
          <div class="select_item flex-colum-between">
            <div class="imgBox flex-center">
              <img src="@/assets/image/selection_a.png" alt />
            </div>
            <div class="textBox flex-colum-between">
              <p class="c2">{{ $t("home.howToJoin") }}</p>
              <p class="c3">
                {{ $t("home.howToJoinTip") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下载部分 -->
    <div class="download_box container_box flex-colum-between">
      <div class="title">
        <p class="a1 num_Bold">{{ $t("home.capaAssis") }}</p>
        <p class="a1">{{ $t("home.capaAssisTip") }}</p>
      </div>
      <div class="content flex-between">
        <div class="down_left flex-colum-evenly">
          <div class="title flex-colum-between">
            <p class="c1 num_Bold">{{ $t("home.openTransaction") }}</p>
            <p class="c2">{{ $t("home.openTransactionTip") }}</p>
          </div>
          <div class="btn_box flex-start" style="gap: 20px">
            <a
              v-for="(item, index) in downloadArr"
              :key="index"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <el-button type="primary" v-show="item.isOpen">{{
                item.name
              }}</el-button>
            </a>
          </div>
        </div>
        <div class="down_right flex-end">
          <el-image
            class="banner_img"
            :src="require('@/assets/image/banner.png')"
          ></el-image>
        </div>
      </div>
    </div>

    <!-- 投资指南 -->
    <div class="invest_box container_box flex-colum-between">
      <div class="title">
        <p class="a1 num_Bold">{{ $t("home.investGuild") }}</p>
        <p class="p2">{{ $t("home.investGuildTip") }}</p>
      </div>
      <div class="content flex-between">
        <div class="content_left flex-center">
          <div class="content_left_inner flex-colum-evenly">
            <div class="content_left_item flex-between">
              <div class="imgBox flex-center">
                <el-image
                  class="banner_img"
                  :src="require('@/assets/image/invest.png')"
                ></el-image>
              </div>
              <div class="textBox">
                <p class="e1 num_Bold">{{ $t("home.investGuild") }}</p>
                <p class="e2">{{ $t("home.investGuildTip") }}</p>
              </div>
            </div>
            <div class="content_left_item flex-between">
              <div class="imgBox flex-center">
                <el-image
                  class="banner_img"
                  :src="require('@/assets/image/invest.png')"
                ></el-image>
              </div>
              <div class="textBox">
                <p class="e1 num_Bold">{{ $t("home.investGuild") }}</p>
                <p class="e2">{{ $t("home.investGuildTip") }}</p>
              </div>
            </div>
            <div class="content_left_item flex-between">
              <div class="imgBox flex-center">
                <el-image
                  class="banner_img"
                  :src="require('@/assets/image/invest.png')"
                ></el-image>
              </div>
              <div class="textBox">
                <p class="e1 num_Bold">{{ $t("home.investGuild") }}</p>
                <p class="e2">{{ $t("home.investGuildTip") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content_right flex-end">
          <el-image
            class="banner_img flex-end"
            :src="require('@/assets/image/banner.png')"
          ></el-image>
        </div>
      </div>
    </div>

    <!-- 信赖的 -->
    <div class="trust_box container_box flex-colum-between">
      <div class="title">
        <p class="a1 num_Bold">{{ $t("home.trustExchange") }}</p>
        <p class="a2">
          {{ $t("home.trustExchangeTip") }}
        </p>
      </div>
      <div class="content flex-between">
        <div v-for="(item, index) in 6" :key="index">
          <div class="content_item flex-colum-evenly">
            <div class="imgBox flex-center">
              <img src="@/assets/image/invest.png" alt />
            </div>
            <div class="textBox flex-center">
              <p class="e1 num_Bold">{{ $t("home.finanSecur") }}</p>
              <p class="e2">
                {{ $t("home.finanSecurTip") }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_content flex-between">
        <div v-for="(item, index) in 4" :key="index">
          <div class="content_item flex-colum-evenly">
            <div class="imgBox flex-center">
              <img src="@/assets/image/selection_a.png" alt />
            </div>
            <div class="textBox">
              <p class="d1">{{ $t("home.standardAccount") }}</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
              <p class="d2">{{ $t("home.lowestPrice") }} 5000</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 立即赚取收益 -->
    <div class="earn_money">
      <div class="earn_money_inner flex-colum-evenly">
        <div>
          <p class="a1">{{ $t("home.earnIncome") }}</p>
        </div>
        <div class="flex-center">
          <el-button
            type="primary"
            @click="
              $router.push({
                path: '/assets/index',
                query: { key: 'recharge' },
              })
            "
            >{{ $t("home.quickRecharge") }}
          </el-button>
        </div>
      </div>
    </div>


    <!-- 客服 -->
    <el-dialog
      :title="$t('home.onlineCustomer')"
      :visible.sync="showDialog"
      width="532px"
      :modal-append-to-body="false"
      :append-to-body="true"
    >
      <span slot="title">
        <div class="dialogTitle">
          <div class="box-tabs">
            <p class="box-tabs-item flex-center">
              {{ $t("home.onlineCustomer") }}
            </p>
          </div>
        </div>
      </span>

      <div class="bottom_content">
        <p>
          {{ $t("home.customerTip1") }}
        </p>
        <p>{{ $t("home.customerTip2") }}</p>
      </div>
    </el-dialog>
    <!-- 公告 -->
    <el-dialog
      :title="$t('user.annoTitle')"
      :visible.sync="openAnnoDialog"
      width="60%"
      center
    >
      <span>{{ noticeContent }}</span>
    </el-dialog>

    <!-- 新闻 -->
    <!-- <div class="newhome-content newhome-news-box">
      <div class="news-top flex-box">
        <el-image v-show="themeName != 'theme-night'" :src="getImgUrlFun('index_news.img_code', 'white')"></el-image>
        <el-image v-show="themeName == 'theme-night'" :src="getImgUrlFun('index_news.img_code', 'black')"></el-image>
        <div class="top-title">NEWS</div>
        <div class="gg-carousel-box">
          <el-carousel height="24px" :autoplay="true" direction="vertical" indicator-position="none">
            <el-carousel-item v-for="item in gg_newsData" :key="item">
              <div class="top-text title-color" @click="
                $router.push({
                  path: `/article/main/content/${item.article_type}/${item.id}`,
                })
                ">{{ item.article_title }}</div>
              <div class="top-date">{{ item.article_time }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="top-more flex-box">
          <span @click="
            $router.push({ path: getConfigFun('index_news.more_path') })
            ">{{ currCoinLangFun("view_more", "all") }}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="news-list">
        <div class="list-item" v-for="(item, index) in hd_newsData" :key="index">
          <el-image :src="item.article_img" @click="
            $router.push({
              path: `/article/main/content/${item.article_type}/${item.id}`,
            })
            ">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
    </div> -->
    <!-- 行情 -->
    <!-- <div class="newhome-content market-container">
      <div class="market-wrapper">
        <div class="market-title content-title">
          <div class="title-txt title-color">{{ currCoinLangFun("market_title") }}</div>
        </div>
        <div class="market-nav flex-box">
          <ul class="flex-box">
            <li v-for="item in getConfigFun('index_market.market_list', [])" :key="item.value"
              :class="{ active: marketActive == item.value }" @click="marketActive = item.value">
              <span>
                {{
                  currCoinLangFun(
                    item.label_code,
                    item.label_path ? item.label_path : "home_index"
                  )
                }}
              </span>
            </li>
          </ul>
        </div>
        <div class="market-table background-color">
          <el-table class="none-boder background-color" :data="currMarketTable" style="width: 1240px" height="386px">
            <el-table-column width="234">
              <template slot="header" slot-scope="scope">
                <span>
                  {{
                    currCoinLangFun("table_coin_name", "exchange")
                  }}
                </span>
              </template>
              <template slot-scope="scope">
                <div class="flex-box table-bzmc">
                  <el-image v-if="scope.row.bzicon" style="
                      width: 24px;
                      height: 24px;
                      margin-right: 4px;
                      margin-left: 20px;
                    " :src="scope.row.bzicon" lazy></el-image>
                  <span class="fit-tc-primary">{{ scope.row.bzmc }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column width="252" align="right" :label="currCoinLangFun('table_coin_price', 'exchange')">
              <template slot-scope="scope">
                <div class="fit-tc-primary">
                  {{ scope.row.close }} /
                  <span class="fit-tc-tertiary">{{ exchangeFilter("close", scope.row) }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column width="135" align="right" :label="currCoinLangFun('table_coin_zdf', 'exchange')">
              <template slot-scope="scope">
                <span :style="{
                  color: scope.row.zdf >= 0 ? '#27c28e' : '#e04d43',
                }">{{ scope.row.zdf | dzfFilter }}</span>
              </template>
            </el-table-column>
            <el-table-column width="232" align="right" :label="currCoinLangFun('orders_table_dir_amount', 'full')">
              <template slot-scope="scope">
                <span class="fit-tc-primary">
                  {{
                    scope.row.cjl | toThousandsFilter
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column width="252" align="right" :label="currCoinLangFun('menu_cje', 'move_index')">
              <template slot-scope="scope">
                <span class="fit-tc-primary">{{ exchangeFilter("cje", scope.row) }}</span>
              </template>
            </el-table-column>
            <el-table-column width="135" align="right" label>
              <template slot-scope="scope">
                <el-button class="amount-btn" style="
                    background: none;
                    font-size: 18px;
                    padding: 8px 12px;
                    margin-right: 20px;
                  " @click="openDealFun(scope.row)">{{ currCoinLangFun("item_three", "top") }}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="market-more flex-box">
          <span @click="
            $router.push({ path: getConfigFun('index_market.more_path') })
            ">{{ currCoinLangFun("view_more", "all") }}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div> -->
    <!-- 介绍 -->
    <!-- <div class="newhome-content newhome-introduce-box">
      <div class="introduce-item" v-for="(item, index) in getConfigFun('index_js_content.data_list', [])" :key="index">
        <div class="item-type item-type-1" v-if="item.style_type == '1'">
          <div class="type-title-box">
            <div class="title title-color">{{ currCoinLangFun(item.title_code) }}</div>
            <div class="tip title-color">{{ currCoinLangFun(item.tip_code) }}</div>
          </div>
          <div class="img">
            <el-image :src="getImgUrlFun(item.img_code)" style="margin-top: 30px"></el-image>
          </div>
        </div>
        <div class="item-type item-type-2" v-else-if="item.style_type == '2'">
          <div class="title title-color">{{ currCoinLangFun(item.title_code) }}</div>
          <div class="tip title-color">{{ currCoinLangFun(item.tip_code) }}</div>
          <div class="icon-list">
            <div class="icon-item" v-for="(child, i) in item.icon_list" :key="i">
              <div class="icon-item-img">
                <el-image v-show="themeName != 'theme-night'" :src="getImgUrlFun(child.img_code, 'white')"></el-image>
                <el-image v-show="themeName == 'theme-night'" :src="getImgUrlFun(child.img_code, 'black')"></el-image>
              </div>
              <div class="icon-item-title title-color">
                {{
                  child.title_code
                    ? currCoinLangFun(child.title_code)
                    : child.title_text
                }}
              </div>
              <div class="icon-item-tip title-color">{{ currCoinLangFun(child.tip_code) }}</div>
            </div>
          </div>
        </div>
        <div class="item-type item-type-3" v-else-if="item.style_type == '3'">
          <el-image :src="getImgUrlFun(item.img_code)"></el-image>
        </div>
        <div class="item-type item-type-4" v-else-if="item.style_type == '4'">
          <div class="title title-color">{{ currCoinLangFun(item.title_code) }}</div>
          <el-image :src="getImgUrlFun(item.img_code)"></el-image>
        </div>
        <div class="item-type-5" v-else-if="item.style_type == '5'">
          <div class="ewm-box">
            <div class="ewm">
              <div class="qrcode-img" id="qrcode_Ios" ref="qrcode_Ios" v-show="appType == 'ios'"></div>
              <div class="qrcode-img" id="qrcode_Android" ref="qrcode_Android" v-show="appType == 'android'"></div>
              <div class="qrcode-img icon-box" v-show="(appType == 'ios' && !appIosUrl) ||
                (appType == 'android' && !appAndroidUrl)
                ">
                <i class="el-icon-picture-outline"></i>
              </div>
            </div>
            <div class="text">
              <div class="text-download title-color">{{ currCoinLangFun("index_ewm_download") }}</div>
              <div class="text-type title-color">
                <span @click="appType = 'ios'" :class="{ active: appType == 'ios' }">ios</span>
                &
                <span @click="appType = 'android'" :class="{ active: appType == 'android' }">Android</span>
              </div>
            </div>
          </div>
          <div class="icon-list">
            <div class="icon-item" v-for="(child, i) in item.icon_list" :key="i" @click="openUrlFun(child.path_url)">
              <div class="icon-item-img">
                <el-image v-show="themeName != 'theme-night'" :src="getImgUrlFun(child.img_code, 'white')"></el-image>
                <el-image v-show="themeName == 'theme-night'" :src="getImgUrlFun(child.img_code, 'black')"></el-image>
              </div>
              <div class="icon-item-text title-color">{{ child.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 学院 -->
    <!-- <div class="newhome-content newhome-college">
      <div class="college-title">
        <div class="title content-title title-color">{{ currCoinLangFun("college") }}</div>
        <div class="more" @click="
          $router.push({ path: getConfigFun('index_college.more_path') })
          ">
          <span>{{ currCoinLangFun("more", "all") }}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="college-list">
        <div class="list-item" v-for="(item, index) in collegeData" :key="index" @click="
          $router.push({
            path: `/article/main/content/${item.article_type}/${item.id}`,
          })
          ">
          <div class="item-img">
            <el-image :src="item.article_img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <div class="item-text">{{ item.article_title }}</div>
        </div>
      </div>
    </div> -->
    <!-- 货币之旅 -->
    <!-- <div class="newhome-tour">
      <el-image v-show="themeName != 'theme-night'" :src="getImgUrlFun('index_tour.img_code', 'white')"></el-image>
      <el-image v-show="themeName == 'theme-night'" :src="getImgUrlFun('index_tour.img_code', 'black')"></el-image>
      <div class="tour-content">
        <div class="title title-color">{{ currCoinLangFun("index_tour.title_code") }}</div>
        <div class="btn-box" v-if="!isLogin">
          <div class="btn" @click="$router.push({ path: '/user/login' })">{{ currCoinLangFun("register") }}</div>
          <div class="btn" @click="$router.push({ path: '/user/register' })">{{ currCoinLangFun("login", "top") }}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getDataApi } from "@/api/system";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { getMqttInitDataApi, getExchangeOptionalApi } from "@/api/fullScreen";
import { getAppApi } from "@/api/application";
import { getNoticeList } from "@/api/common";
import { analysisFunction, toThousands, numberFilterFun } from "@/util/util";
import QRCode from "qrcodejs2";
import mqtt from "@/mixins/mqtt";
import BScroll from "better-scroll";
export default {
  mixins: [mqtt],
  data() {
    return {
      window: "",
      index_config: {}, //首页配置
      index_value: "",
      //新闻
      gg_newsData: [],
      hd_newsData: [],
      // 行情
      allMarketData: {},
      marketTabs: [], //行情分类数据
      marketSearch: "",
      marketActive: "", //当前选择的行情分类
      marketMqtt: null,
      marketZxData: [], //自选数据
      // 介绍
      appType: "ios",
      appIosUrl: false,
      appAndroidUrl: false,
      // 学院
      collegeData: [],
      activeName: "hot",
      showDialog: true,
      noticeContent: "", //公告内容
      downloadArr: [], //下载
      scroll: "",
      openAnnoDialog: false,
    };
  },
  created() {
    this.getCoinList();
    // this.scrollTo2();
  },
  mounted() {
    // console.log("settingConfig==>",this.settingConfig);
    this.downloadArr = this.settingConfig.DOWNLOAD_SETTING;
    this.getNoticeList("ROLL_NOTICE");
    // this.scrollTo2();
    setTimeout(() => {
      this.scrollTo2();
    }, 10);

    // this.scrollTo();
  },
  computed: {
    ...mapGetters([
      "allImgUrl",
      "isLogin",
      "themeName",
      "language",
      "exchangeCode",
      "exchange",
      "allCoinPriceInfo",
      "secondContractCoinList",
      "exchangeNum",
      "settingConfig",
    ]),
    currMarketTable() {
      let data = [];
      if (this.marketActive != "zx") {
        data = this.deepClone(
          this.allMarketData[this.marketActive]
            ? this.allMarketData[this.marketActive]
            : []
        );
      } else {
        data = this.marketZxData;
      }

      if (this.marketSearch) {
        data = data.filter(
          (item) =>
            item.bzmc.toLowerCase().indexOf(this.marketSearch.toLowerCase()) !=
            -1
        );
      }
      return data;
    },
  },
  watch: {
    language(newLang, oldLang) {
      // console.log("oldLang==>", oldLang);
      // console.log("newLang==>", newLang);
      // this.selectLangInit();
      this.getNoticeList("ROLL_NOTICE");
    },
    // secondContractCoinList(newValue, oldValue) {
    //   // 当列表更新时，根据需要更新hoverStates
    //   newValue.forEach((item, index) => {
    //     // 初始化新增项目的hover状态
    //     if (!(index in this.hoverStates)) {
    //       this.$set(this.hoverStates, index, false);
    //     }
    //   });
    //   // 清理已经不存在的项目的hover状态
    //   for (let key in this.hoverStates) {
    //     if (!newValue[key]) {
    //       this.$delete(this.hoverStates, key);
    //     }
    //   }
    // }
  },
  filters: {
    toThousandsFilter(value) {
      return toThousands(value);
    },
    dzfFilter(value) {
      if (value >= 0) {
        return `+${value}%`;
      } else {
        return `${value}%`;
      }
    },
  },
  methods: {
    ...mapActions(["getCoinList"]),
    ...mapMutations(["SET_CURR_COIN", "SET_DEAL_TYPE"]),
    scrollTo2() {
      if (this.secondContractCoinList.length > 0) {
        let width = this.secondContractCoinList.length * 300;
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
      }
    },
    scrollTo() {
      let startX;
      let currentX = 0;
      let moving = false;
      let velocity = 0;
      const container = this.$refs.innerContainer;
      const maxScrollWidth =
        container.offsetWidth - container.parentElement.offsetWidth;

      const startSliding = (event) => {
        moving = true;
        velocity = 0;
        startX = event.type.includes("mouse")
          ? event.pageX
          : event.touches[0].clientX;
        container.style.transition = "none";
      };

      const sliding = (event) => {
        if (!moving) return;
        const x = event.type.includes("mouse")
          ? event.pageX
          : event.touches[0].clientX;
        const diffX = x - startX;
        velocity = diffX; // 更新速度
        currentX += diffX;
        currentX = Math.min(currentX, 0); // 防止向右滑动过度
        currentX = Math.max(currentX, -maxScrollWidth); // 条件滑动超出左边

        container.style.transform = `translateX(${currentX}px)`;
        startX = x;
      };

      const stopSliding = () => {
        moving = false;
        const inertiaMove = currentX + velocity * 10; // 根据速度进行惯性滑动
        currentX = Math.round(inertiaMove / (80 + 20)) * (80 + 20); // 这里的(80+20)是一个item的宽加间距
        currentX = Math.min(currentX, 0); // 防止向右滑动过度
        currentX = Math.max(currentX, -maxScrollWidth); // 防止向左滑动过度
        container.style.transition =
          "transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)"; // 在这里也添加 cubic-bezier
        container.style.transform = `translateX(${currentX}px)`;
      };

      container.addEventListener("mousedown", startSliding);
      document.addEventListener("mousemove", sliding);
      document.addEventListener("mouseup", stopSliding);
      container.addEventListener("touchstart", startSliding);
      document.addEventListener("touchmove", sliding);
      document.addEventListener("touchend", stopSliding);
    },
    initFun() {
      this.init = true;
      this.selectLangInit();
      this.getMarketIndexData();
      this.getAppFun();
      this.getOptionalDataFun();
      //连接首页行情mqtt
      this.marketMqtt = this.initMqtt("index", (data) => {
        this.allMarketData = data;
      });
      //连接行情mqtt 更新自选
      if (this.isLogin) {
        this.initMqtt("all_symbol_detail", (data) => {
          let exchangeData = {
            close: Number(data.close),
            zdf: data.zdf - 0, //涨跌幅
            cjl: Number(data.amount),
            cje: Number(data.vol), //24小时成交额
          };
          //更新自选数据
          let type = data.type;
          this.marketZxData = this.marketZxData.map((item) => {
            if (item.symbol_name == data.symbolName) {
              if (
                (type == "xh" && item.contract_type != "0") ||
                !item.contract_type
              ) {
                return item;
              }
              if (type == "ubw" && item.contract_type != "1") {
                return item;
              }
              if (type == "bbw" && item.contract_type != "2") {
                return item;
              }
              item = {
                ...item,
                ...exchangeData,
              };
            }
            return item;
          });
        });
      }
    },
    navigateToTrade(coin) {
      this.$router.push({
        path: "/trade/index",
        query: { type: "sec", symbol: coin },
      });
    },
    //获取公告信息
    getNoticeList(key) {
      getNoticeList({
        key,
      }).then((res) => {
        console.log("公告信息====>", res.data);
        this.noticeContent = res.data.data[0].noticeContent;
      });
    },
    //获取自选数据
    getOptionalDataFun() {
      if (!this.isLogin) {
        return false;
      }
      getExchangeOptionalApi().then((res) => {
        let data = res.data.data.filter((item) => item.contract_type == "0");
        data = data.map((item) => {
          item.bzicon = item.avatar;
          item.bzmc = item.symbol_name;
          item.close = Number(item.close);
          item.cjl = Number(item.amount);
          item.cje = Number(item.vol);
          item.zdf = item.zdf - 0;
          return item;
        });
        this.marketZxData = data;
      });
    },
    //获取app链接
    getAppFun() {
      let arr = ["Android", "Ios"];
      let promiseArr = [];

      arr.forEach((item) => {
        promiseArr.push(
          new Promise((resolve, reject) => {
            getAppApi(item)
              .then((res) => {
                resolve({ type: item, url: res.data.data });
              })
              .catch(() => {
                reject();
              });
          })
        );
      });

      Promise.all(promiseArr).then((res) => {
        this.appUrlList = res;
        this.appUrlList.forEach((item) => {
          if (item.url) {
            this.setQrCodeFun(item.type, item.url);
            if (item.type == "Android") {
              this.appAndroidUrl = item.url;
            } else if (item.type == "Ios") {
              this.appIosUrl = item.url;
            }
          }
        });
        if (!this.appIosUrl) {
          this.appType = "android";
        }
      });
    },
    //生成二维码
    setQrCodeFun(type, url) {
      setTimeout(() => {
        console.log(this.$refs);
        this.$refs[`qrcode_${type}`][0].innerHTML = "";
        new QRCode(`qrcode_${type}`, {
          width: 120,
          height: 120,
          text: url,
          render: "canvas",
          correctLevel: QRCode.CorrectLevel.L,
        });
      }, 0);
    },
    selectLangInit() {
      this.getNewsDataFun();
      this.getCollegeDataFun();
    },
    //获取行情基础数据
    getMarketIndexData() {
      getMqttInitDataApi("index").then((res) => {
        let data = res.data.data;
        let keys = Object.keys(data);
        if (keys.length <= 0) {
          return false;
        }
        for (let key in data) {
          data[key] = data[key].map((item) => {
            item.zdf = Number(item.zdf);
            return item;
          });
        }
        this.allMarketData = data;
      });
    },
    //获取新闻列表
    getNewsDataFun() {
      //公告
      getDataApi("1530431184536666113", {
        ...this.index_config.index_news.gg_search_params,
        article_lang: this.language,
      }).then((res) => {
        let data = res.data.data.records;
        this.gg_newsData = data.map((item) => {
          item.article_time = item.article_time.split(
            `${new Date().getFullYear()}-`
          )[1];
          return item;
        });
      });
      //活动
      getDataApi("1530431184536666113", {
        ...this.index_config.index_news.hd_search_params,
        article_lang: this.language,
      }).then((res) => {
        let data = res.data.data.records;
        this.hd_newsData = data;
      });
    },
    //获取学院列表
    getCollegeDataFun() {
      getDataApi("1530431184536666113", {
        ...this.index_config.index_college.search_params,
        article_lang: this.language,
      }).then((res) => {
        let data = res.data.data.records;
        this.collegeData = data;
      });
    },
    getConfigFun(key, nullValue) {
      let keyArr = key.split(".");
      let data = this.index_config;
      let bool = true;
      keyArr.forEach((item) => {
        if (data[item] !== undefined && bool) {
          data = data[item];
        } else {
          bool = false;
        }
      });
      if (!bool) {
        return nullValue ? nullValue : "";
      }
      if (key == "index_market.market_list") {
        //添加自选
        data = [
          {
            label_code: "optional",
            label_path: "exchange",
            value: "zx",
          },
          ...data,
        ];
      }
      return data;
    },
    getImgUrlFun(code, type) {
      if (typeof code == "string" && code.indexOf(".") != -1) {
        code = this.getConfigFun(code);
      }
      if (type) {
        code = code[type];
      }
      return this.allImgUrl[code] ? this.allImgUrl[code] : "";
    },
    currCoinLangFun(code, type = "home_index") {
      // if (code && code.indexOf(".") != -1) {
      //   code = this.getConfigFun(code);
      // }
      // return this.coinLangFun(type, code);
    },
    openUrlFun(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    exchangeFilter(type, data) {
      let money = data[type];
      return `${this.exchangeCode}${numberFilterFun(
        Number(money).myMul(this.exchangeNum)
      )}`;
    },
    openDealFun(row) {
      this.SET_DEAL_TYPE("cash");
      this.SET_CURR_COIN({
        ...row,
        coinInfo: {},
        coinMoneyData: { closeData: {}, riseFallData: {} },
      });
      let path = `/exchange/full-screen/${row.symbolName.replace("/", "_")}`;
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
.newhome-box {
  margin-top: 65px;
  background: #fafbfe;

  .newhome-content {
    width: 1260px;
    margin: 0 auto;
    // background: #FAFBFE;
  }

  .content-title {
    font-size: 40px;
    font-weight: bold;
    margin: 56px 0 40px 0;
  }
}

.newhome-banner-box {
  width: 1260px;
  height: 604px;
  //background: red;
  margin: auto;
  // position: relative;

  .banner-content {
    width: 100%;
    height: 100%;

    // position: absolute;
    // left: 10%;
    // top: 50%;
    // transform: translateY(-50%);
    // width: 45%;
    .b-left {
      flex: 1.5;
      height: 100%;
      //background: blue;
    }

    .b-right {
      flex: 2;
      height: 100%;

      //background: yellow;
      .banner-img {
        width: 80%;
      }
    }

    .banner-title {
      font-size: 50px;
      padding-bottom: 24px;

      p {
        margin-bottom: 12px;
      }
    }

    .banner-tip {
      font-size: 24px;
      padding-bottom: 24px;
    }

    .banner-register {
      display: flex;
      align-items: center;

      ::v-deep.el-input {
        width: 220px;

        .el-input__inner {
          width: 220px;
          height: 46px;
          background-color: #fff;
        }
      }

      .btn {
        margin-left: 24px;
        width: 98px;
        height: 46px;
        background-color: #0020fd;
        border-radius: 4px 4px 4px 4px;
        font-size: 16px;
        text-align: center;
        line-height: 46px;
        color: #fff;
        cursor: pointer;
      }
    }

    .banner-gn {
      justify-content: space-between;
      width: 552px;
      margin-top: 40px;

      .gn-item {
        width: 120px;

        .item-img {
          margin-bottom: 12px;
          display: flex;
          justify-content: center;

          img {
            width: 80px;
            height: 80px;
          }
        }

        .item-title {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .item-tip {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}

// 公告
.advertise_box {
  width: 100%;
  height: 60px;
  background: #fff;

  .advertise_inner {
    width: 1260px;
    height: 100%;
    font-size: 14px;

    //background: red;
    .ad_left {
      gap: 20px;
      // width: 230px;

      img {
        width: 22px;
      }
    }

    .ad_right {
    }
  }
}

//货币走马灯
.coinInfo_box {
  height: 343px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  //background: red;

  .inner-container {
    display: inline-flex;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: absolute;
    bottom: 10px;
  }

  .item {
    width: 220px;
    height: 234px;

    cursor: pointer;
    margin-right: 25px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    // padding: 5px 50px;
    box-sizing: border-box;
    background-color: #fff;

    .title {
      font-size: 24px;
    }

    .content {
      font-size: 16px;

      p {
        flex: 1;

        &:nth-child(1) {
          border-right: 1px solid #f1f1f1;
        }
      }
    }

    .btn_box {
      .crycle {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        border: 3px solid #ccc;
        color: #ccc;
        font-weight: bold;
        margin: auto;
        font-size: 14px;
        &:hover {
          background: #09BA85;
          color: #fff;
        }
      }
      // img {
      //   width: 40px;
      // }
    }

    // border: 1px solid #ddd;
    // display: inline-flex;
    // justify-content: center;
    // align-items: center;
    &:hover {
      background: #f1f1f1;
    }
  }

  .item:last-child {
    margin-right: 0;
  }
}

//热门币种
.hot_coinType {
  margin-top: 80px;

  ::v-deep.el-tabs {
    .el-tabs__active-bar {
      background: none;
    }

    .el-tabs__nav-wrap::after {
      background: none;
    }

    .el-tabs__item {
      font-size: 24px;
      height: 50px;
    }

    .table-btn {
      padding: 20px 20px;
      background: #f1f1f1;
      &:hover {
        background: #09BA85;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

//EXFT精选
.selected_box {
  margin-top: 70px;
  height: 553px;

  .title {
    .a1 {
      font-size: 40px;
    }

    .help {
      font-size: 16px;
    }

    p {
      margin-top: 20px;
    }
  }

  .content {
    gap: 20px;

    > div {
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
      background: #fff;
    }

    .select_item {
      // flex: 1;
      height: 333px;

      .imgBox {
        width: 100%;
        height: 217px;

        img {
          width: 90%;
        }
      }

      .textBox {
        height: 70px;
        // margin-top: 50px;
        // margin-top:30px;
      }
    }
  }
}

//下载部分
.download_box {
  height: 573px;
  margin-top: 70px;

  .title {
    font-size: 30px;
    height: 80px;
  }

  .content {
    height: 448px;

    .down_left {
      flex: 1.5;
      height: 200px;
    }

    .down_right {
      flex: 2;

      .banner_img {
        width: 70%;
      }
    }
  }
}

//投资指南
.invest_box {
  height: 630px;
  margin-top: 70px;

  .title {
    font-size: 30px;
    height: 80px;

    .a1 {
      font-size: 40px;
    }

    .p2 {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  .content {
    height: 448px;

    .content_left {
      flex: 2.4;
      // height: 200px;
      // background: green;

      .content_left_inner {
        // width: 500px;
        height: 600px;

        .content_left_item {
          gap: 30px;

          .imgBox {
            //background: yellow;

            .banner_img {
              width: 100px;
              // background: red;
            }
          }

          .textBox {
            .e1 {
              margin-bottom: 10px;
            }
          }
        }
      }
    }

    .content_right {
      flex: 2;

      .banner_img {
        width: 90%;
      }
    }
  }
}

//信赖的
.trust_box {
  margin-top: 70px;
  height: 1567px;
  gap: 20px;
  //background: red;

  .title {
    .a1 {
      font-size: 40px;
    }
  }

  .content {
    // height: 723px;
    flex: 2.4;
    gap: 20px;
    //background: yellow;

    > div {
      width: 400px;
      height: 362px;
      padding: 20px 60px;
      // flex: 1;
      // padding: 20px;
      box-sizing: border-box;
      //background: #fff;
    }

    .content_item {
      // flex: 1;
      height: 333px;

      .imgBox {
        width: 100%;
        height: 143px;

        img {
          width: 143px;
        }
      }

      .textBox {
        // height: 70px;

        // margin-top: 50px;
        // margin-top:30px;
        p {
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }

  .bottom_content {
    // height: 504px;
    flex: 2;
    // gap: 20px;
    //background: yellow;

    > div {
      width: 302px;
      height: 504px;
      border-radius: 5px;
      border: 1px solid #40464d;
      //padding: 20px 60px;
      // flex: 1;
      // padding: 20px;
      //box-sizing: border-box;
      //background: #fff;
    }

    .content_item {
      width: 300px;
      //flex: 1;
      // height: 333px;

      .imgBox {
        width: 100%;
        height: 200px;

        img {
          width: 100%;
        }
      }

      .textBox {
        padding: 10px;
        // height: 70px;

        // margin-top: 50px;
        // margin-top:30px;
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}

//立即赚取收益
.earn_money {
  width: 100%;
  height: 356px;
  margin-top: 70px;
  background: #fff;
  .earn_money_inner {
    width: 1260px;
    height: 100%;
    margin: auto;
    text-align: center;
    .a1 {
      font-size: 40px;
    }
    .el-button {
      width: 200px;
      height: 50px;
      background: #09BA85;
      font-size: 16px;
    }
  }
}

.newhome-news-box {
  .news-top {
    margin-bottom: 46px;
    margin-top: 40px;
    font-size: 14px;

    img {
      width: 24px;
      height: 24px;
    }

    .top-title {
      color: #0020fd;
      padding: 0 24px 0 4px;
      font-weight: 400;
      height: 24px;
      line-height: 24px;
    }

    .gg-carousel-box {
      width: 100%;

      ::v-deep.el-carousel__container {
        border-right: 1px solid #b3b3b3;
      }

      .el-carousel__item {
        display: flex;
      }
    }

    .top-text {
      height: 24px;
      line-height: 24px;
      cursor: pointer;
    }

    .top-date {
      padding-left: 24px;
      color: #b3b3b3;
      padding-right: 12px;
      font-weight: 400;
      height: 24px;
      line-height: 24px;
    }

    .top-more {
      flex: 0 0 100px;
      color: #0020fd;
      padding-left: 12px;
      cursor: pointer;

      span {
        display: inline-block;
        padding-right: 4px;
        height: 24px;
        line-height: 24px;
      }

      i {
        height: 24px;
        line-height: 26px;
      }
    }
  }

  .news-list {
    display: grid;
    grid-template-columns: repeat(4, 295px);
    justify-content: space-between;

    .list-item {
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;

      ::v-deep.el-image__inner {
        width: 295px;
        height: 170px;
      }

      ::v-deep.image-slot {
        width: 295px;
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #f1f1f1;
        box-sizing: border-box;

        i {
          font-size: 60px;
          color: #f1f1f1;
        }
      }
    }
  }
}

.market-container {
  width: 100%;
  height: auto;
  padding-bottom: 96px;
  display: flex;
  justify-content: center;

  .market-wrapper {
    width: 1200px;

    .market-title {
      padding: 0;
      height: auto;
      overflow: hidden;

      .title-txt {
        text-align: left;
        line-height: 56px;
        font-weight: 400;
        font-size: 40px !important;
        margin-bottom: 24px !important;
      }
    }

    .market-nav {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      ul {
        li {
          padding: 0 0 14px;
          margin-right: 36px;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: flex-end;
          border-bottom: 2px solid transparent;

          &.active {
            color: #0020fd;
            border-color: #0020fd;

            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 5px;
              position: absolute;
              bottom: 0;
            }
          }
        }
      }

      .market-search {
        .el-input {
          font-size: 14px;
        }
      }
    }

    .market-table {
      margin: 0 -20px;

      ::v-deep.el-table {
        &::before {
          height: 0;
        }
      }

      ::v-deep.el-table__header-wrapper {
        thead {
          font-weight: 400;

          tr {
            background: none !important;

            th {
              font-size: 14px;
              font-weight: 400;
              border: none !important;
              padding: 24px 0 0;
              line-height: 14px;
              height: 16px;
              background: none !important;

              span {
                margin-left: 20px !important;
              }
            }
          }
        }
      }

      ::v-deep.el-table__body-wrapper {
        .el-table__body {
          margin-top: 8px;
          display: block;

          tr {
            background: none !important;
            font-size: 18px;

            td {
              border-bottom: 0;
              padding: 0;
              height: 72px;
            }
          }

          tr:hover > td.el-table__cell {
            background-color: #0020fd;

            .fit-tc-primary {
              color: #fff !important;
            }
          }

          .amount-btn {
            background-color: #fff !important;
            border-color: #0020fd;
            color: #0020fd;
          }
        }
      }
    }

    .market-more {
      height: 20px;
      justify-content: center;
      margin-top: 32px;
      font-size: 14px;
      cursor: pointer;
      color: #0020fd;

      span {
        display: inline-block;
        height: 24px;
        line-height: 22px;
      }

      i {
        line-height: 26px;
      }
    }
  }
}

.newhome-introduce-box {
  display: grid;
  grid-template-columns: repeat(2, 45%);
  justify-content: space-between;
  grid-row-gap: 40px;

  .introduce-item {
    position: relative;

    .type-title-box {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }

    .item-type {
      .title {
        font-size: 40px;
        font-weight: bold;
        padding-bottom: 24px;
      }

      .tip {
        font-size: 20px;
      }
    }

    .item-type-2 {
      .icon-list {
        margin-top: 40px;
        display: flex;
        // flex-wrap: wrap;
        grid-column-gap: 100px;

        .icon-item {
          .icon-item-img {
            margin-bottom: 24px;

            ::v-deepimg {
              width: 48px;
              height: 48px;
            }
          }

          .icon-item-title {
            margin-bottom: 12px;
            font-size: 20px;
            font-weight: bold;
          }

          .icon-item-tip {
            font-size: 16px;
          }
        }
      }
    }

    .item-type-4 {
      .title {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
      }
    }

    .item-type-5 {
      .ewm-box {
        background-color: #f7f7f7;
        display: flex;
        align-items: center;

        .ewm {
          padding: 24px 0 14px 19px;
        }

        .qrcode-img {
          width: 140px;
          height: 140px;

          ::v-deepimg {
            padding: 5px;
            box-sizing: border-box;
            background-color: #fff;
          }

          i {
            font-size: 32px;
          }
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #fff;
          border-radius: 4px;
          box-sizing: border-box;
          width: 130px;
          height: 130px;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .text {
          margin-left: 32px;

          .text-download {
            font-size: 24px;
            font-weight: bold;
            padding-bottom: 24px;
          }

          .text-type {
            font-size: 18px;

            span {
              cursor: pointer;
              text-decoration: underline;

              &.active {
                color: #0020fd;
              }
            }
          }
        }
      }

      .icon-list {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        grid-column-gap: 24px;

        .icon-item {
          // background-color: #F4F6FF;
          cursor: pointer;
          padding: 5px 10px;

          .icon-item-img {
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;

            ::v-deepimg {
              width: 40px;
              height: 40px;
            }
          }

          .icon-item-text {
            font-size: 16px;
            text-align: center;
          }
        }
      }
    }
  }
}

.newhome-college {
  margin-bottom: 100px !important;

  .college-title {
    display: flex;
    align-items: center;

    .title {
      flex: 1;
    }

    .more {
      color: #0020fd;
      cursor: pointer;
    }
  }

  .college-list {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 295px);
    justify-content: space-between;

    .list-item {
      width: 295px;
      cursor: pointer;

      .item-img {
        border-radius: 4px;
        overflow: hidden;

        ::v-deep.el-image__inner {
          width: 295px;
          height: 170px;
        }

        ::v-deep.image-slot {
          width: 295px;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #f1f1f1;
          box-sizing: border-box;

          i {
            font-size: 60px;
            color: #f1f1f1;
          }
        }
      }

      .item-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 12px;
        font-weight: bold;
      }
    }
  }
}

.newhome-tour {
  position: relative;

  .tour-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    .title {
      font-size: 56px;
      font-weight: bold;
      padding-bottom: 60px;
    }

    .btn-box {
      display: flex;
      grid-column-gap: 24px;

      .btn {
        flex: 1;
        height: 59px;
        border-radius: 4px 4px 4px 4px;
        box-sizing: border-box;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:nth-child(1) {
          background: #0020fd;
          color: #fff;
        }

        &:nth-child(2) {
          background: #fff;
          border: 1px solid #0020fd;
          color: #0020fd;
        }
      }
    }
  }
}

.theme-daytime {
  .background-color {
    background-color: #ffffff;
  }

  .title-color {
    color: #1a1a1a;
  }
}

.theme-night {
  .background-color {
    background-color: #0c1117;
  }

  .title-color {
    color: #ffffff;
  }

  .item-type-5 {
    .ewm-box {
      background: linear-gradient(90deg, #0c1117 0%, #0020fd 100%);
    }
  }
}
</style>
