<template>
  <div class="exchange-box fit-background-di">
    <!-- <div class="exchange-top-chart"></div> -->
    <div class="exchange_header_box flex-center">
      <div class="header_inner flex-start">
        <div class="title num_Bold">
          <p>{{ $t("quotes.title") }}</p>
        </div>
      </div>
    </div>
    <div class="exchange-content">
      <!-- <div class="content-title-box flex-box">
        <h2 class="title fit-tc-primary">{{ currCoinLangFun("item_two", "top") }}</h2>
        <div class="search-box">
          <el-input :placeholder="currCoinLangFun('search', 'all')" prefix-icon="el-icon-search"
            v-model="searchValue"></el-input>
        </div>
      </div>-->
      <div class="content-tabs flex-between">
        <el-tabs class="fit-tc-tip" v-model="tabsValue" @tab-click="tabsClick">
          <el-tab-pane
            v-for="item in tabsData"
            :key="item.value"
            :label="$t(item.label)"
            :name="item.value"
          ></el-tab-pane>
        </el-tabs>
        <div class="flex-box search_box">
          <el-input
            v-model="input"
            @input="searchCoin"
            :placeholder="$t('quotes.searchCoin')"
          ></el-input>
          <el-button type="primary">{{ $t("quotes.search") }}</el-button>
        </div>
      </div>
      <!-- <div class="content-type fit-background">
        <div class="type-xh" v-if="tabsValue == 'xh'">
          <div class="area-tabs">
            <div class="tabs-item fit-ta-border-color fit-background-di fit-tc-tertiary"
              :class="[{ active: item.value == areaTabsValue }]" v-for="item in areaTabs" :key="item.value"
              @click="areaThemeHandleCommand(item.value, 'theme')">{{ currCoinLangFun("coin_plate_" + item.value) }}
            </div>
            <div class="tabs-dropdown">
              <el-dropdown @command="areaThemeHandleCommand">
                <div class="tabs-item fit-ta-border-color fit-background-di fit-tc-tertiary"
                  :class="[{ active: areaThemeDrop }]">
                  {{ areaThemeDropTitle }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in areaTheme" :key="item.value" :command="item.value">
                    {{
                      currCoinLangFun("coin_plate_" + item.value)
                    }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="type-coin" v-if="areaCoin.length > 0">
            <div class="coin-item fit-tc-tertiary" v-for="item in areaCoin" :key="item"
              :class="{ 'active-text': item == areaCoinValue }" @click="areaCoinValue = item">{{ item }}</div>
          </div>
          <div class="type-pry">
            <el-checkbox size="mini" class="fit-tc-tertiary" v-model="isPry">
              {{
                currCoinLangFun("pry_support")
              }}
            </el-checkbox>
          </div>
        </div>
        <div class="type-hy" v-if="tabsValue == 'hy'">
          <div class="area-tabs">
            <div class="tabs-item fit-ta-border-color fit-background-di fit-tc-tertiary"
              :class="[{ active: item.value == contractType }]" v-for="item in contractTabs" :key="item.value"
              @click="areaThemeHandleCommand(item.value, 'hy')">{{ currCoinLangFun(item.code) }}</div>
          </div>
        </div>
      </div>-->

      <div class="content-table">
        <el-table
          :data="tableList"
          style="width: 100%"
          @sort-change="tableSort"
        >
          <el-table-column
            prop="showSymbol"
            :label="$t('quotes.coinType')"
            align="left"
            width="350"
            sortable
          >
            <template slot-scope="scope">
              <div class="flex-start" style="gap: 10px">
                <img
                  :src="
                    scope.row.isCollect == 1
                      ? require(`@/assets/image/have_collect.png`)
                      : require(`@/assets/image/no_collect.png`)
                  "
                  alt
                  width="18px"
                  v-if="tabsValue != 'zx'"
                  @click="handleCollect(scope.row)"
                  class="cur_p"
                />
                <img :src="scope.row.logo" alt class="leftImg" width="20px" />
                <div class="fw-bold e2">{{ scope.row.showSymbol }}</div>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('quotes.newPrice')"
            width="370"
            prop="close"
            sortable="custom"
          >
            <template slot-scope="scope">
              <div>{{ allCoinPriceInfo[scope.row.coin].close }}</div>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('quotes.riseFallRange')"
            prop="priceChangePercent"
            sortable="custom"
          >
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
          <el-table-column
            prop="menu"
            :label="$t('quotes.operate')"
            align="right"
            sortable
          >
            <template slot-scope="scope">
              <span
                class="table-btn"
                @click="goDealFun(scope.row, scope.row.coin)"
                >{{ $t("quotes.transaction") }}</span
              >
            </template>
          </el-table-column>
          <!-- 自定义空状态 -->
          <template v-slot:empty v-if="tabsValue == 'zx'" >
            <el-empty
              v-if="tableList.length == 0"
              :description="$t('utils.noData')"
            >
              <template #image>
                <img
                  :src="require('@/assets/image/noData.png')"
                  alt="Empty Image"
                />
              </template>
              <div>
                <el-button type="primary" @click="addSelfCoin"
                  >{{$t('quotes.addSelfChoose')}}</el-button
                >
              </div>
            </el-empty>
          </template>
        </el-table>
        <!-- <el-table :data="tableData" style="width: 100%" size="mini">
          <el-table-column prop="symbol_name" width="100" sortable label="币种" align="left">
            <template slot-scope="scope">
              <div class="table-bzmc">
                <div class="collect-star">
                  <i class="fa fa-star-o fit-tc-primary" @click="setOptionalFun('add', scope.row)"
                    v-if="!scope.row.collect"></i>
                  <i class="fa fa-star" style="color: #ffa033" @click="setOptionalFun('cancel', scope.row)" v-else></i>
                </div>
                <img :src="scope.row.avatar" />
                <div class="title fit-tc-primary">
                  {{
                  tabsValue != "hy"
                  ? tabsValue == "zx" && scope.row.contract_type != "0"
                  ? scope.row.symbol_name.replace("/", "")
                  : scope.row.coin_symbol
                  : scope.row.symbol_name.replace("/", "")
                  }}
                </div>
                <div class="pry" v-if="scope.row.isCou">{{ scope.row.cou }}x</div>
              </div>
            </template>
        </el-table-column>-->
        <!-- <el-table-column prop="close" min-width="190" sortable :label="currCoinLangFun('table_coin_close')"
            align="right">
            <template slot-scope="scope">
              <div class="table-zxcjj">
                <span class="fit-tc-primary">{{ scope.row.closeText }}</span>
                <span class="fit-tc-tip">/{{ rateFilter(scope.row.close) }}</span>
              </div>
            </template>
        </el-table-column>-->
        <!-- <el-table-column prop="zdf" min-width="111" sortable label="最新价" align="right">
            <template slot-scope="scope">
              <span class="fit-tc-primary" :class="{
                'fit-tc-fall': scope.row.zdf < 0,
                'fit-tc-rise': scope.row.zdf >= 0,
              }">
                {{ scope.row.zdf
                }}{{ scope.row.zdf !== undefined ? "%" : "" }}
              </span>
            </template>
        </el-table-column>-->
        <!-- <el-table-column prop="highText" min-width="109" sortable sort-by="high"
            :label="currCoinLangFun('table_coin_high')" align="right"></el-table-column>
          <el-table-column prop="lowText" min-width="109" sortable sort-by="low"
        :label="currCoinLangFun('table_coin_low')" align="right"></el-table-column>-->
        <!-- <el-table-column prop="amountText" sortable sort-by="amount" label="最新价" align="right"></el-table-column>
          <el-table-column prop="vol" sortable label="涨跌幅" align="right">
            <template slot-scope="scope">
              <span class="fit-tc-primary">
                {{
                rateFilter(scope.row.vol)
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="menu" label="操作" align="right">
            <template slot-scope="scope">
              <span class="table-btn" @click="goDealFun(scope.row, scope.row.symbol_name)">
                {{ currCoinLangFun("deal",
                "all") }}
              </span>
            </template>
          </el-table-column>
        </el-table>-->
      </div>
    </div>
  </div>
</template>

<script>
import { getDicTableData } from "@/api/system";
import { getUserCoinApi, handleCollectCoin } from "@/api/user";
import {
  getExchangeOptionalApi,
  getExchangeCashApi,
  getExchangegetContractApi,
  getExchangeAddOptionalApi,
  getExchangeClearOptionalApi,
} from "@/api/fullScreen";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { numberFilterFun } from "@/util/util";
//import { ParentType } from "public/charting_library/charting_library.min";
// import mqtt from "@/mixins/mqtt";
export default {
  // mixins: [mqtt],
  data() {
    return {
      throttle: false,
      searchValue: "",
      tabsValue: "miao",
      tabsData: [
        {
          label: "quotes.selfChoose", //自选
          value: "zx",
          code: "optional",
        },
        {
          label: "quotes.secondContract", //现货
          value: "miao",
          code: "spot_goods",
        },
        {
          label: "quotes.spotContract", //现货
          value: "bb",
          code: "spot_goods",
        },
        {
          label: "quotes.uContract", //合约
          value: "uyue",
          code: "contract",
        },
      ],
      areaTabs: [],
      areaTabsValue: "",
      areaTheme: [],
      areaThemeDrop: "",
      areaCoin: [],
      areaCoinValue: "",
      contractTabs: [
        {
          label: "USDT永续", //USDT永续
          value: "ubw",
          code: "table_contract_ub",
        },
        {
          label: "币本位永续", //币本位永续
          value: "bbw",
          code: "table_contract_bb",
        },
      ],
      contractType: "ubw",
      isPry: false,
      cashTableData: [], //现货数据
      optionalTableData: [], //自选数据
      tableDataObj: {
        zx: [],
        xh: [], //现货
        ubw: [], //u本位
        bbw: [], //币本位
      },
      currCoinData: {},
      selfChooseCoinData: [],
      tableList: [],
      input: "",
      emptyData: [],
    };
  },
  computed: {
    ...mapGetters([
      "isLogin",
      "exchangeNum",
      "exchangeCode",
      "allCoinPriceInfo",
      "secondContractCoinList",
      "spotCoinList",
      "contractCoinList",
    ]),
    areaThemeDropTitle() {
      let title = this.currCoinLangFun("coin_plate_theme");
      if (this.areaThemeDrop) {
        this.areaTheme.forEach((item) => {
          if (item.value == this.areaThemeDrop) {
            title = this.currCoinLangFun("coin_plate_" + item.value);
          }
        });
      }

      return title;
    },
    // allCoinPriceInfo() {
    //   return this.$store.state.allCoinPriceInfo;
    // },
    // getData() {
    //    console.log("allCoinPriceInfo====>", this.allCoinPriceInfo);
    // }
    // tableData() {
    //   let data = this.contractCoinList;
    //   console.log("秒合约列表数据====>", data);
    //   return data;
    // },

    // tableData() {
    //   let baseCoin = {};
    //   let tabsType = this.tabsValue;
    //   if (tabsType == "hy") {
    //     tabsType = this.contractType;
    //   }
    //   let data = this.tableDataObj[tabsType].filter(item => {
    //     //区分是否包含杠杠交易
    //     if (this.isPry && item.full_cou <= 1 && item.part_cou <= 1) {
    //       return false;
    //     }
    //     //现货
    //     if (this.tabsValue == "xh" && item) {
    //       let plate = "";
    //       if (item.plate) {
    //         plate = item.plate.split(",");
    //       }
    //       //现货 区分板块
    //       if (
    //         !plate.includes(this.areaTabsValue) &&
    //         !plate.includes(this.areaThemeDrop)
    //       ) {
    //         return false;
    //       }
    //       //设置当前结算币
    //       if (!this.areaCoinValue) {
    //         this.areaCoinValue = item.base_symbol;
    //       }
    //       //区分 结算币
    //       baseCoin[item.base_symbol] = "";

    //       if (item.base_symbol != this.areaCoinValue) {
    //         return false;
    //       }
    //     }
    //     //合约
    //     if (this.tabsValue == "hy") {
    //       /* if (item.type != this.contractType) {
    //         return false
    //       } */
    //     }

    //     //是否搜索
    //     if (
    //       this.searchValue &&
    //       item.symbol_name
    //         .split("/")[0]
    //         .toLowerCase()
    //         .indexOf(this.searchValue.toLowerCase()) == -1
    //     ) {
    //       return false;
    //     }

    //     return true;
    //   });
    //   this.setAreaCoinFun(baseCoin);
    //   return data;
    // }
  },
  created() {},
  mounted() {
    // this.getUserCoinApi();

    this.getCoinList();
    this.tableList = this.secondContractCoinList;
    if (this.$route.query && this.$route.query.text) {
      this.input = this.$route.query.text;
      this.searchCoin(this.input);
    }
    console.log("allCoinPriceInfo====>", this.allCoinPriceInfo);
    console.log("秒合约列表数据====>", this.secondContractCoinList);
    //获取类型字典
    // this.getAreaTabsDataFun()
    //获取自选
    // this.getOptionalDataFun()
    //获取现货
    // this.getCashDataFun()
    //获取合约
    // this.getContractDataFun()
    //建立mqtt连接
    // this.initMqtt("all_symbol_detail", data => {
    //   let exchangeData = {
    //     symbol: data.symbolName,
    //     closeText: numberFilterFun(data.close), //最新成交价
    //     close: Number(data.close),
    //     zdf: data.zdf, //涨跌幅
    //     high: numberFilterFun(data.high), //24小时最高
    //     low: numberFilterFun(data.low), //24小时最低
    //     amount: Number(data.amount),
    //     amountText: `${numberFilterFun(data.amount)} ${data.symbolName.split("/")[0]
    //       }`, //24小时成交量
    //     vol: data.vol //24小时成交额
    //   };
    //   //更新现货合约
    //   let type = data.type;
    //   this.tableDataObj[type] = this.tableDataObj[type].map(item => {
    //     if (item.symbol_name == exchangeData.symbol) {
    //       item = {
    //         ...item,
    //         ...exchangeData
    //       };
    //     }
    //     return item;
    //   });
    //   //更新自选数据
    //   this.tableDataObj.zx = this.tableDataObj.zx.map(item => {
    //     if (item.symbol_name == exchangeData.symbol) {
    //       if (
    //         (type == "xh" && item.contract_type != "0") ||
    //         !item.contract_type
    //       ) {
    //         return item;
    //       }
    //       if (type == "ubw" && item.contract_type != "1") {
    //         return item;
    //       }
    //       if (type == "bbw" && item.contract_type != "2") {
    //         return item;
    //       }
    //       item = {
    //         ...item,
    //         ...exchangeData
    //       };
    //     }
    //     return item;
    //   });
    // });
  },
  methods: {
    ...mapActions(["getCoinList"]),
    ...mapMutations(["SET_DEAL_TYPE", "SET_CONTRACT_TYPE"]),
    currCoinLangFun(code, type = "exchange") {
      return this.coinLangFun(type, code);
    },
    handleCollect(item) {
      let type = item.isCollect == 1 ? "removeByCoin" : "save";
      handleCollectCoin(
        {
          coin: item.coin,
          icon: item.logo,
        },
        type
      ).then((res) => {
        if (res.data.code == 200) {
          this.getCoinList();
          setTimeout(() => {
            this.initALLQuotesData();
          }, 500);
          this.$message({
            message: this.$t("utils.operateSuccess"),
            type: "success",
          });
        }
      });
    },
    addSelfCoin() {
      this.tabsValue = "miao";
      this.tableList = this.secondContractCoinList;
    },
    searchCoin(value) {
      // console.log("value==input===>", value);
      this.initALLQuotesData();
      if (value) {
        this.tableList = this.tableList.filter((item) => {
          return item.coin.includes(value.toLowerCase());
        });
      }
    },
    initALLQuotesData() {
      if (this.tabsValue == "zx") {
        this.getUserCoinApi();
      } else if (this.tabsValue == "miao") {
        this.tableList = this.secondContractCoinList;
      } else if (this.tabsValue == "bb") {
        this.tableList = this.spotCoinList;
      } else {
        this.tableList = this.contractCoinList;
      }
    },
    tableSort({ column, prop, order }) {
      // 输出排序的属性和列
      // console.log("排序的属性：", prop);
      // console.log("排序的列：", column);

      // 根据需要选择排序的属性
      let finalProp;
      if (prop === "close") {
        finalProp = "close";
      } else {
        finalProp = "priceChangePercent";
      }

      // 使用选择的属性进行排序
      this.tableList.sort((a, b) => {
        const sortA = this.allCoinPriceInfo[a.coin][finalProp];
        const sortB = this.allCoinPriceInfo[b.coin][finalProp];

        // 根据排序顺序进行比较
        if (order === "ascending") {
          return sortA - sortB;
        } else {
          return sortB - sortA;
        }
      });
    },
    tabsClick(e) {
      console.log("e====>", e);
      this.tabsValue = e.name;
      this.tableList = [];
      if (e.name == "zx") {
        this.getUserCoinApi();
      } else if (e.name == "miao") {
        this.tableList = this.secondContractCoinList;
      } else if (e.name == "bb") {
        this.tableList = this.spotCoinList;
      } else {
        this.tableList = this.contractCoinList;
      }
    },
    //获取自选币种信息
    getUserCoinApi() {
      this.tableList = [];
      getUserCoinApi().then((res) => {
        console.log("自选币种信息===>", res.data);
        this.selfChooseCoinData = res.data.data;
        this.selfChooseCoinData.forEach((item) => {
          this.tableList.push({
            logo: item.icon,
            showSymbol: item.coin.toUpperCase(),
            coin: item.coin,
            id: item.id,
          });
        });
        console.log("tableList===>", this.tableList);
      });
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
    goDealFun(row, symbol) {
      // console.log("row===>", row);
      // console.log("symbol===>", symbol);
      // 在需要的地方调用这个函数
      // let type = this.getType(this.tabsValue);
      this.$router.push({
        path: "/trade/index",
        query: {
          type: "sec",
          symbol,
        },
      });
      // if (row.contract_type && row.contract_type != "0") {
      //   if (row.contract_type == "1") {
      //     this.SET_CONTRACT_TYPE("ubw");
      //     this.$router.push({
      //       path: "/exchange/full-contract/" + symbol.replace("/", "_"),
      //     });
      //   } else {
      //     this.SET_CONTRACT_TYPE("bbw");
      //     this.$router.push({
      //       path: "/exchange/full-contract/" + symbol.replace("/", "_"),
      //     });
      //   }
      // } else {
      //   this.SET_DEAL_TYPE("cash");
      //   this.$router.push({
      //     path: "/exchange/full-screen/" + symbol.replace("/", "_"),
      //   });
      // }
    },
    rateFilter(val) {
      if (val) {
        return `${this.exchangeCode} ${numberFilterFun(
          Number(val).myMul(this.exchangeNum)
        )}`;
      } else {
        return `${this.exchangeCode} 0`;
      }
    },
    //获取主题字典数据
    getAreaTabsDataFun() {
      getDicTableData("coin_plate").then((res) => {
        let data = res.data.data;
        this.areaTheme = data.filter((item) => {
          if (["zbq", "cxq"].includes(item.value)) {
            this.areaTabs.push(item);
            return false;
          }
          return true;
        });
        this.areaTabsValue = this.areaTabs[0].value;
      });
    },
    //设置当前tabs
    areaThemeHandleCommand(command, type) {
      if (type == "theme") {
        this.areaThemeDrop = "";
        this.areaTabsValue = command;
      } else if (type == "hy") {
        this.contractType = command;
      } else {
        console.log(command);
        this.areaThemeDrop = command;
        this.areaTabsValue = "";
      }
      this.areaCoinValue = "";
    },
    //获取自选数据
    getOptionalDataFun() {
      if (!this.isLogin) {
        return false;
      }
      getExchangeOptionalApi().then((res) => {
        let data = res.data.data;
        data = data.map((item) => {
          item.close = Number(item.close);
          item.closeText = numberFilterFun(item.close);
          item.coin_symbol = item.symbol_name.split("/")[0];
          if (item.high) {
            item.high = Number(item.high); //24小时最高
            item.highText = numberFilterFun(item.high); //24小时最高
          }
          if (item.low) {
            item.low = Number(item.low); //24小时最低
            item.lowText = numberFilterFun(item.low); //24小时最低
          }
          if (item.amount) {
            item.amount = Number(item.amount);
            item.amountText = `${numberFilterFun(item.amount)} ${
              item.coin_symbol
            }`; //24小时成交量
          }
          item.vol = Number(item.vol);
          item.zdf = item.zdf - 0;
          item.collect = 1;
          item.cou = item.part_cou;
          item.isCou = true;
          if (item.part_cou <= 1) {
            item.cou = item.full_cou;
          }
          if (item.part_cou <= 1 && item.full_cou <= 1) {
            item.isCou = false;
          }
          return item;
        });
        this.tableDataObj.zx = data;
        console.log("自选===", data);
      });
    },
    //设置结算币
    setAreaCoinFun(data) {
      this.areaCoin = Object.keys(data);
      if (!this.areaCoinValue) {
        this.areaCoinValue = this.areaCoin[0];
      }
    },
    //获取现货
    getCashDataFun() {
      getExchangeCashApi().then((res) => {
        let data = res.data.data;
        data = data.map((item) => {
          item.zdf = item.zdf - 0;
          item.close = Number(item.close);
          item.closeText = numberFilterFun(item.close);
          item.coin_symbol = item.symbol_name.split("/")[0];
          if (item.high) {
            item.high = Number(item.high);
            item.highText = numberFilterFun(item.high); //24小时最高
          }
          if (item.low) {
            item.low = Number(item.low);
            item.lowText = numberFilterFun(item.low); //24小时最低
          }
          if (item.amount) {
            item.amount = Number(item.amount);
            item.amountText = `${numberFilterFun(item.amount)} ${
              item.coin_symbol
            }`; //24小时成交量
          }
          item.vol = Number(item.vol);
          item.cou = item.part_cou;
          item.isCou = true;
          if (item.part_cou <= 1) {
            item.cou = item.full_cou;
          }
          if (item.part_cou <= 1 && item.full_cou <= 1) {
            item.isCou = false;
          }
          return item;
        });
        this.tableDataObj.xh = data;
        console.log("现货===", data);
      });
    },
    //获取合约
    getContractDataFun() {
      getExchangegetContractApi().then((res) => {
        let data = res.data.data;
        data = data.map((item) => {
          item.close = Number(item.close);
          item.zdf = item.zdf - 0;
          item.closeText = numberFilterFun(item.close);
          item.coin_symbol = item.symbol_name.split("/")[0];
          if (item.high) {
            item.high = Number(item.high);
            item.highText = numberFilterFun(item.high); //24小时最高
          }
          if (item.low) {
            item.low = Number(item.low);
            item.lowText = numberFilterFun(item.low); //24小时最低
          }
          if (item.amount) {
            item.amount = Number(item.amount);
            item.amountText = `${numberFilterFun(item.amount)} ${
              item.coin_symbol
            }`; //24小时成交量
          }
          item.vol = Number(item.vol);
          return item;
        });
        this.tableDataObj.ubw = data.filter((item) => item.contract_type == 1);
        this.tableDataObj.bbw = data.filter((item) => item.contract_type == 2);
        console.log("合约===", data);
      });
    },

    //设置自选
    setOptionalFun(type, data) {
      console.log(data);
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }
      if (this.throttle) {
        return false;
      }
      this.throttle = true;
      if (type == "add") {
        getExchangeAddOptionalApi(data.id, this.tabsValue == "xh" ? "1" : "2")
          .then((res) => {
            this.throttle = false;
            console.log("自选设置成功===", res.data.data);
            let tabsValue = this.tabsValue;
            if (tabsValue == "hy") {
              tabsValue = this.contractType;
            }
            this.tableDataObj[tabsValue] = this.tableDataObj[tabsValue].map(
              (item) => {
                if (data.id == item.id) {
                  item.collect = 1;
                }
                return item;
              }
            );
            //重新获取自选数据
            this.getOptionalDataFun();
          })
          .catch(() => {
            this.throttle = false;
          });
      } else {
        let tabsValue = data.type;
        let id = data.c_id;
        if (this.tabsValue != "zx") {
          tabsValue = this.tabsValue == "xh" ? "1" : "2";
          id = data.id;
        }
        getExchangeClearOptionalApi(id, tabsValue)
          .then((res) => {
            this.throttle = false;
            console.log("取消自选成功===", res.data.data, data);
            this.tableDataObj.zx = this.tableDataObj.zx.filter((item) => {
              if (id == item.c_id) {
                return false;
              }
              return true;
            });
            let optional = data.optional ? data.optional : this.tabsValue;
            console.log(optional, id);
            if (optional == "hy") {
              optional = this.contractType;
            }
            this.tableDataObj[optional] = this.tableDataObj[optional].map(
              (item) => {
                if (id == item.id) {
                  item.collect = 0;
                }
                return item;
              }
            );
          })
          .catch(() => {
            this.throttle = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.exchange-box {
  width: 100%;
  margin-top: 0;
}

.exchange_header_box {
  width: 100%;
  height: 60px;
  background: rgb(238, 241, 246);

  .header_inner {
    width: 1200px;
    height: 100%;
    margin: auto;

    .title {
      p {
        font-size: 36px;
      }
    }
  }
}

.exchange-content {
  width: 1200px;
  margin: 0 auto;
  background: #fafbfe;
  // padding-bottom: 50px;

  .content-title-box {
    justify-content: space-between;
    // padding: 20px 0;

    h2 {
      font-size: 48px;
      font-weight: 400;
      padding-left: 36px;
    }

    .search-box {
      width: 360px;

      ::v-deep.el-input__inner {
        height: 46px;
        font-size: 16px;
        line-height: 36px;
      }
    }
  }

  .content-tabs {
    .search_box {
      gap: 20px;
    }

    ::v-deep.el-tabs {
      .el-tabs__header {
        border: none;

        &::before {
          height: 1px;
        }
      }

      .el-tabs__nav {
        border: none;
      }

      .el-tabs__item {
        font-size: 16px;
        line-height: 18px;
        padding: 24px 12px 28px;
        height: 70px;
        border: none;

        &.is-active::after {
          width: 20px;
          height: 5px;
        }
      }

      .el-tabs__nav-wrap::after {
        height: 1px;
      }
    }
  }

  .content-type {
    padding: 0 36px;

    .type-xh,
    .type-hy {
      .area-tabs {
        display: flex;
        align-items: center;
        padding-bottom: 16px;

        .tabs-item {
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          border-radius: 2px;
          font-weight: 400;
          padding: 0 12px;
          margin-right: 16px;
          border: 1px solid;
          cursor: pointer;

          &:hover {
            color: #0020fd;
          }

          &.active {
            background-color: #0020fd;
            color: #fff;
            border-color: #0020fd;
          }
        }
      }

      .type-coin {
        display: flex;
        align-items: center;
        padding-bottom: 16px;

        .coin-item {
          padding: 0 14px;
          line-height: 20px;
          font-size: 12px;
          cursor: pointer;
          font-weight: bold;

          &:nth-child(1) {
            padding-left: 0px;
          }
        }
      }

      .type-pry {
        padding-bottom: 16px;
      }
    }
  }

  .content-table {
    // padding: 0 36px 30px;

    ::v-deep.el-table {
      background: #fafbfe;

      th.el-table__cell {
        background: #fafbfe;
      }

      .el-table__header-wrapper {
        th {
          font-weight: 400;
        }
      }

      .el-table__body-wrapper {
        td {
          padding: 16px 0;
          font-size: 14px;
        }
      }
    }

    .table-bzmc {
      display: flex;
      align-items: center;

      .collect-star {
        margin-right: 12px;
        font-size: 16px;
        cursor: pointer;
      }

      img {
        width: 16px;
        height: 16px;
      }

      .title {
        font-weight: bold;
        font-size: 14px;
        margin: 0 4px;
      }

      .pry {
        padding: 2px 4px;
        box-sizing: border-box;
        border-radius: 2px;
        display: inline-flex;
        font-weight: 500;
        line-height: 14px;
        background: rgba(36, 123, 255, 0.1);
        color: #0020fd;
        border: 1px solid #0020fd;
      }
    }

    .table-btn {
      // color: #f5faff;
      // background-color: #0020fd;
      color: #0020fd;
      font-size: 14px;
      padding: 4px 12px;
      line-height: 18px;
      border-radius: 2px;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
