import $, { data } from "jquery";
// import "../../../public/charting_library/charting_library.min.js";
// import Datafeeds from "../../../public/charting_library/datafeed/bitrade";
import {
  numberFilterFun,
  toNorounded,
  getStrDataFunction,
  toThousands,
} from "@/util/util";
import {
  getExchangegetContractApi,
  getExchangeOptionalApi,
  getExchangeAddOptionalApi,
  getExchangeClearOptionalApi,
} from "@/api/fullScreen";
import { getDataApi } from "@/api/system.js";
export default {
  data() {
    return {
      numberFilterFun: numberFilterFun,
      toNorounded: toNorounded,
      marketsTabsList: [
        {
          label: this.currCoinLangFun("nav_zx", "move_quotation"), //自选
          value: "zx",
        },
        {
          label: this.currCoinLangFun("nav_ubwyx", "move_contract"), //U本位永续
          value: "ubw",
        },
        {
          label: this.currCoinLangFun("nav_bbwyx", "move_quotation"), //币本位永续
          value: "bbw",
        },
      ],
      tradeShipping: [
        {
          label: this.currCoinLangFun("kaicang_text", "move_contract"), //开仓
          value: "kc",
        },
        {
          label: this.currCoinLangFun("pingcang_text", "move_contract"), //平仓
          value: "pc",
        },
      ],
      tradeEntrust: [
        {
          label: this.currCoinLangFun("entrust_ordinary", "full"), //普通委托
          value: "ptwt",
        },
        {
          label: this.currCoinLangFun("entrust_market", "full"), // 市价
          value: "sjwt",
        },
        {
          label: this.currCoinLangFun("plan_delegation", "entrust"), //计划委托
          value: "jhwt",
        },
        /* {
          label: '跟踪委托',
          value: 'gzwt',
        }, */
      ],
      orderList: [
        {
          label: this.currCoinLangFun("cw_text", "move_contract"), //仓位
          value: "cw",
        },
        {
          label: this.currCoinLangFun("orders_tabs_curr", "full"), //当前委托
          value: "dqwt",
        },
        {
          label: this.currCoinLangFun("plan_delegation", "entrust"), //计划委托
          value: "jhwt",
        },
        {
          label: this.currCoinLangFun("select_zyzs", "move_transaction"), //止盈止损
          value: "zyzs",
        },
        /* {
          label: '跟踪委托',
          value: 'gzwt',
        }, */
        {
          label: this.currCoinLangFun("orders_tabs_history"), //历史委托
          value: "lswt",
        },
        {
          label: this.currCoinLangFun("transaction_record", "entrust"), //成交记录
          value: "cjjl",
        },
      ],
      order_cw: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          width: "210",
          prop: "hy",
          align: "left",
          fixed: "left",
        },
        {
          label: this.currCoinLangFun("kcjj_text", "move_contract"), //开仓均价
          minWidth: "88",
          prop: "avg_price",
          align: "left",
        },
        {
          label: this.currCoinLangFun("bjjg_text", "move_contract"), //标记价格
          minWidth: "88",
          prop: "bjjg",
          align: "right",
        },
        {
          label: this.currCoinLangFun("qpjg_text", "move_contract"), //强平价格
          minWidth: "88",
          prop: "forcePrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("bzj_text", "move_contract"), //保证金
          minWidth: "144",
          prop: "principal_amount",
          align: "right",
        },
        {
          label: this.currCoinLangFun("sy_text", "move_contract"), //收益
          minWidth: "188",
          prop: "sy",
          align: "right",
        },
        {
          label: this.currCoinLangFun("ccf_text", "move_contract"), //持仓费
          minWidth: "144",
          prop: "night_amount",
          align: "right",
        },
        {
          label: `${this.currCoinLangFun(
            "cw_text",
            "move_contract"
          )} | ${this.currCoinLangFun("kp_text", "move_contract")}`, //仓位 | 可平
          minWidth: "200",
          prop: "balanceText",
          align: "right",
        },
        /*  {
           label: this.currCoinLangFun('bin_id', 'entrust'),  //仓位ID
           minWidth: '150',
           prop: 'order_code',
           align: 'right',
         }, */
        {
          label: this.currCoinLangFun("pcjg_text", "move_contract"), //平仓价格
          width: "104",
          prop: "pcjg",
          align: "right",
          fixed: "right",
        },
        {
          label: this.currCoinLangFun("table_coin_num", "exchange"), //数量
          width: "230",
          prop: "pcsl",
          align: "right",
          fixed: "right",
        },
        {
          label: this.currCoinLangFun("zy_zs_c", "move_contract"), //止盈/止损
          width: "76",
          prop: "zyzs",
          align: "right",
          fixed: "right",
        },
      ],
      order_dqwt: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "145",
          prop: "hy",
          align: "left",
        },
        {
          label: `${this.currCoinLangFun("entrust")} | ${this.currCoinLangFun(
            "orders_table_dir_amount"
          )}`, //委托 | 成交量
          minWidth: "196",
          prop: "cjl",
          align: "right",
        },
        {
          label: `${this.currCoinLangFun(
            "entrust",
            "full"
          )} | ${this.currCoinLangFun("orders_table_deal_both_price", "full")}`, //委托 | 成交均价
          minWidth: "196",
          prop: "cjjj",
          align: "right",
        },
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          minWidth: "196",
          prop: "createTime",
          align: "right",
        },
        /*  {
           label: '委托类型',
           minWidth: '149',
           prop: 'wtlx',
           align: 'right',
         }, */
        /* {
          label: '仓位ID',
          minWidth: '196',
          prop: 'entrust_code',
          align: 'right',
        }, */
        {
          label: this.currCoinLangFun("orders_table_state"), //状态
          minWidth: "126",
          prop: "zt",
          align: "right",
        },
        {
          label: this.currCoinLangFun("quanche_text"), //全撤
          minWidth: "92",
          prop: "dqwtMeun",
          align: "right",
        },
      ],
      order_jhwt: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "134",
          prop: "hy",
          align: "left",
        },
        {
          label: this.currCoinLangFun("text_cfjg", "move_transaction"), //触发价格
          minWidth: "141",
          prop: "triggerPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_entrust_price"), //委托价
          minWidth: "141",
          prop: "entrustPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_entrust_balance"), //委托量
          minWidth: "141",
          prop: "entrustBalance",
          align: "right",
        },
        {
          label: this.currCoinLangFun("create_time", "entrust"), //创建时间
          minWidth: "207",
          prop: "createTime",
          align: "right",
        },
        {
          label: this.currCoinLangFun("trigger_time", "entrust"), //触发时间
          minWidth: "207",
          prop: "completedTime",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_state"), //状态
          minWidth: "185",
          prop: "zt",
          align: "right",
        },
        {
          label: this.currCoinLangFun("operation", "all"), //操作
          minWidth: "140",
          prop: "dqwtMeun",
          align: "right",
        },
      ],
      order_zyzs: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "134",
          prop: "hy",
          align: "left",
        },
        {
          label: this.currCoinLangFun("text_cfjg", "move_transaction"), //触发价格
          minWidth: "141",
          prop: "triggerPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_entrust_price"), //委托价
          minWidth: "141",
          prop: "entrustPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_entrust_balance"), //委托量
          minWidth: "141",
          prop: "entrustBalance",
          align: "right",
        },
        {
          label: this.currCoinLangFun("create_time", "entrust"), //创建时间
          minWidth: "207",
          prop: "createTime",
          align: "right",
        },
        {
          label: this.currCoinLangFun("trigger_time", "entrust"), //触发时间
          minWidth: "207",
          prop: "completedTime",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_state"), //状态
          minWidth: "185",
          prop: "zt",
          align: "right",
        },
        {
          label: this.currCoinLangFun("operation", "all"), //操作
          minWidth: "140",
          prop: "dqwtMeun",
          align: "right",
        },
      ],
      order_gzwt: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "143",
          prop: "hy",
          align: "left",
        },
        {
          label: this.currCoinLangFun("jhj_text", "move_contract"), //激活价
          minWidth: "198",
          prop: "",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_entrust_balance"), //委托量
          minWidth: "198",
          prop: "",
          align: "right",
        },
        {
          label: this.currCoinLangFun("htfd_text", "move_contract"), //回调幅度
          minWidth: "198",
          prop: "",
          align: "right",
        },
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          minWidth: "221",
          prop: "",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_state"), //状态
          minWidth: "198",
          prop: "",
          align: "right",
        },
        {
          label: this.currCoinLangFun("operation", "all"), //操作
          minWidth: "140",
          prop: "",
          align: "right",
        },
      ],
      order_lswt: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "146",
          prop: "hy",
          align: "left",
        },
        {
          label: `${this.currCoinLangFun("entrust")} | ${this.currCoinLangFun(
            "orders_table_dir_amount"
          )}`, //委托 | 成交量
          minWidth: "168",
          prop: "cjl",
          align: "right",
        },
        {
          label: `${this.currCoinLangFun(
            "entrust",
            "full"
          )} | ${this.currCoinLangFun("orders_table_deal_both_price", "full")}`, //委托 | 成交均价
          minWidth: "168",
          prop: "cjjj",
          align: "right",
        },
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          minWidth: "202",
          prop: "createTime",
          align: "right",
        },
        /* {
          label: '委托类型',
          minWidth: '154',
          prop: '',
          align: 'right',
        }, */
        /* {
          label: '仓位ID',
          minWidth: '216',
          prop: '',
          align: 'right',
        }, */
        {
          label: this.currCoinLangFun("orders_table_state"), //状态
          minWidth: "154",
          prop: "zt",
          align: "right",
        },
        {
          label: "",
          minWidth: "88",
          prop: "lswtMeun",
          align: "right",
        },
      ],
      order_cjjl: [
        {
          label: this.currCoinLangFun("item_four", "top"), //合约
          minWidth: "120",
          prop: "hy",
          align: "left",
        },
        {
          label: this.currCoinLangFun("orders_table_dir_amount"), //成交量
          minWidth: "148",
          prop: "cj_cjl",
          align: "right",
        },
        {
          label: this.currCoinLangFun("orders_table_deal_both_price", "full"), //成交均价
          minWidth: "168",
          prop: "successPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("kcjj_text", "move_contract"), //开仓均价
          minWidth: "168",
          prop: "openPrice",
          align: "right",
        },
        {
          label: this.currCoinLangFun("profit", "entrust"), //盈利
          minWidth: "168",
          prop: "profitText",
          align: "right",
        },
        {
          label: this.currCoinLangFun("service_charge", "all"), //手续费
          minWidth: "168",
          prop: "feeText",
          align: "right",
        },
        /* {
          label: '仓位ID',
          minWidth: '180',
          prop: 'order_code',
          align: 'right',
        }, */
        {
          label: this.currCoinLangFun("table_coin_time", "exchange"), //时间
          minWidth: "180",
          prop: "completedTime",
          align: "right",
        },
      ],
      orderNumList: [
        {
          label: "10%",
          value: "10",
        },
        {
          label: "20%",
          value: "20",
        },
        {
          label: "50%",
          value: "50",
        },
        {
          label: "100%",
          value: "100",
        },
      ],
    };
  },
  watch: {
    "checkFullStopData.competitors": function (value) {
      if (value) {
        this.$set(
          this.checkFullStopData,
          "entrust",
          this.currCoinLangFun("duisshoujia_text", "move_contract")
        ); //对手价
      } else {
        this.$set(this.checkFullStopData, "entrust", "");
        console.log("sz1");
      }
    },
  },
  computed: {
    /* 深度 */
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
    //深度-买入
    depthsBuyData() {
      if (!this.depthsHeight) {
        return [];
      }
      let height = 101;
      if (this.depthsType == "all") {
        height = (this.depthsHeight - height) / 2;
      } else {
        height = this.depthsHeight - height;
      }
      height = height - (height % 20);
      let num = (height / 20).toFixed(0);
      let data = this.deepClone(this.depthsBuy).splice(0, num);
      let total = 0;
      data = data.map((item) => {
        item.amount = toNorounded(item.amount, 8);
        total = toNorounded(Number(total).myAdd(item.amount), 8);
        // item.totalText = numberFilterFun(total)
        item.total = total;
        item.priceText = numberFilterFun(
          item.price,
          true,
          this.currCoinPricePrecision
        );
        // item.amountText = numberFilterFun(item.amount)
        return item;
      });
      data = data.map((item) => {
        let size = Number(item.amount).myDiv(total).myMul(100);
        item.size = size.toFixed(0);
        return item;
      });

      return data;
    },
    //深度-卖出
    depthsSellData() {
      if (!this.depthsHeight) {
        return [];
      }
      let height = 101;
      if (this.depthsType == "all") {
        height = (this.depthsHeight - height) / 2;
      } else {
        height = this.depthsHeight - height;
      }
      height = height - (height % 20);
      let num = (height / 20).toFixed(0);
      let data = this.deepClone(this.depthsSell).splice(0, num).reverse();

      let total = 0;
      data = data.map((item) => {
        item.amount = toNorounded(item.amount, 8);
        total = toNorounded(Number(total).myAdd(item.amount), 8);
        item.total = total;
        // item.totalText = numberFilterFun(total)
        item.priceText = numberFilterFun(
          item.price,
          true,
          this.currCoinPricePrecision
        );
        // item.amountText = numberFilterFun(item.amount)
        return item;
      });
      data = data.map((item) => {
        let size = Number(item.amount).myDiv(total).myMul(100);
        item.size = size.toFixed(0);
        return item;
      });
      return data;
    },
    //保证金弹窗当前可用
    marginAvailable() {
      if (this.marginMoneyData.type == "add") {
        return this.contractType == "ubw"
          ? this.myMoneyData.hyBaseBalance
          : this.myMoneyData.hyCoinBalance;
      } else {
        let { curr_money, curr_positions, curr_average } = this.marginMoneyData;
        //当前仓位保证金-（仓位*开仓均价/当前用户杠杠倍数）
        let auailable = Number(curr_money).mySub(
          Number(curr_positions)
            .myMul(curr_average)
            .myDiv(this.myMoneyData.leverage)
        );
        return auailable > 0
          ? toNorounded(auailable, this.exchangeCoinData.base_coin_scale)
          : 0;
      }
    },
    //保证金弹窗占用保证金和爆仓价
    marginMoney() {
      let { num, curr_money, cuur_direction, curr_positions, curr_average } =
        this.marginMoneyData;
      if (!num) {
        return {
          num: "--",
          price: "--",
        };
      }
      let price = 0;
      if (this.marginMoneyData.type == "add") {
        num = Number(num).myAdd(curr_money);
      } else {
        num = Number(curr_money).mySub(num);
      }
      if (this.contractType == "ubw") {
        //维持保证金：仓位*均价*（维持保证金率+手续费率）
        let wcbzj = Number(curr_positions)
          .myMul(curr_average)
          .myMul(
            Number(this.exchangeCoinData.close_fee).myAdd(
              this.exchangeCoinData.maintenance_margin_rate
            )
          );
        if (cuur_direction == "1") {
          //开多 爆仓价 : （维持保证金-保证金+均价*仓位）/仓位
          price = Number(wcbzj)
            .mySub(num)
            .myAdd(Number(curr_average).myMul(curr_positions))
            .myDiv(curr_positions);
        } else {
          //开空 爆仓价 : （保证金+均价*仓位-维持保证金）/仓位
          price = Number(num)
            .myAdd(Number(curr_average).myMul(curr_positions))
            .mySub(wcbzj)
            .myDiv(curr_positions);
        }
      } else {
        let cwjz = Number(curr_positions).myMul(curr_average);
        let wcbzj = Number(curr_positions).myMul(
          Number(this.exchangeCoinData.close_fee).myAdd(
            this.exchangeCoinData.maintenance_margin_rate
          )
        );
        if (cuur_direction == "1") {
          //开多：仓位*均价/(仓位+当前仓位保证金 - 仓位*(维持保证金率+手续费率))
          price = Number(cwjz).myDiv(
            Number(curr_positions).myAdd(num).mySub(wcbzj)
          );
        } else {
          //开空：仓位*均价/(仓位-当前仓位保证金 - 仓位*(维持保证金率+手续费率))
          price = Number(cwjz).myDiv(
            Number(curr_positions).mySub(num).mySub(wcbzj)
          );
        }
      }

      if (price < 0) {
        price = 0;
      }
      return {
        num: numberFilterFun(num), //占用保证金
        price: numberFilterFun(price), //爆仓价
      };
    },
    //止盈止损弹窗tip
    checkFullStopTip() {
      let triggerType = "tip";
      let text = "";
      let triggerClass = "fit-tc-fall";
      if (this.checkFullStopData.tabValue == "zy") {
        if (this.checkFullStopData.trigger > this.checkFullStopData.bjjg) {
          triggerType = "text";
        } else {
          text = this.currCoinLangFun("zycfjxdyzxcjj_text", "move_contract"); //止盈触发价需大于最新成交价
        }
      } else {
        if (this.checkFullStopData.trigger < this.checkFullStopData.bjjg) {
          triggerType = "text";
        } else {
          text = this.currCoinLangFun("zscfjxxyzxcjj_text", "move_contract"); //止损触发价需小于最新成交价
        }
      }
      if (triggerType == "text") {
        let num = toNorounded(
          Number(this.checkFullStopData.trigger)
            .mySub(this.checkFullStopData.avg_price)
            .myDiv(this.checkFullStopData.avg_price)
            .myMul(100),
          2
        );
        if (num >= 0) {
          text = `${this.currCoinLangFun(
            "shgnazhang_text",
            "move_contract"
          )} ${num}%`; //上涨
          triggerClass = "fit-tc-rise";
        } else {
          text = `${this.currCoinLangFun(
            "xiadie_text",
            "move_contract"
          )} ${num}%`; //下跌
        }
      }

      let entrustText = this.currCoinLangFun("zyzs_yjyl", "move_contract"); //预计盈利
      let entrustSy = 0;
      let entrustClass = "fit-tc-rise";
      console.log(this.checkFullStopData.competitors);
      if (this.checkFullStopData.direction == 1) {
        //做多收益=（当前价格-均价）*仓位
        entrustSy = Number(
          this.checkFullStopData.competitors
            ? this.checkFullStopData.trigger
            : this.checkFullStopData.entrust
        )
          .mySub(this.checkFullStopData.avg_price)
          .myMul(this.checkFullStopData.surplus);
      } else if (this.checkFullStopData.direction == 2) {
        //做空收益=（均价-当前价格）*仓位
        entrustSy = Number(this.checkFullStopData.avg_price)
          .mySub(
            this.checkFullStopData.competitors
              ? this.checkFullStopData.trigger
              : this.checkFullStopData.entrust
          )
          .myMul(this.checkFullStopData.surplus);
      }
      if (this.contractType == "bbw") {
        entrustSy = Number(entrustSy).myDiv(this.checkFullStopData.avg_price);
      }
      if (entrustSy < 0) {
        entrustText = this.currCoinLangFun("yjks_text", "move_contract"); //预计亏损
        entrustClass = "fit-tc-fall";
      }

      let entrustNum = numberFilterFun(entrustSy);
      let entrustBl =
        toNorounded(
          Number(entrustSy).myDiv(this.checkFullStopData.principal_amount),
          2
        ) + "%";
      return {
        triggerType,
        triggerClass,
        triggerTip: text,
        bool: triggerType == "text",
        entrustText,
        entrustNum,
        entrustBl,
        entrustClass,
      };
    },
  },
  methods: {
    currCoinLangFun(code, type = "full") {
      return this.coinLangFun(type, code);
    },
    replaceCoinLangFun(text, arr) {
      //翻译--可替换多个值
      if (arr.length && text) {
        arr.forEach((item) => {
          let keyIndex = text.indexOf(item.key);
          //while循环替换相同的key
          while (keyIndex >= 0) {
            text = text.replace(item.key, item.value || "");
            keyIndex = text.indexOf(item.key);
          }
        });
      }

      return text;
    },
    exchangeRateFilter(val, money) {
      if (!val) {
        return "";
      }
      if (money) {
        val = Number(val).myMul(money);
      }
      return `${this.exchangeCode}${numberFilterFun(
        Number(val).myMul(this.exchangeNum)
      )}`;
    },
    //格式化深度  数量 合计
    formattDepth(item, key) {
      let money = Number(item[key]).myMul(this.depthsConversion);
      if (this.contractType == "ubw") {
        // money 是 币
        if (this.contractUnit == "coin") {
          return numberFilterFun(money);
        } else {
          return numberFilterFun(Number(money).myMul(item.price));
        }
      } else {
        // money 是 USD
        if (this.contractUnit == "coin") {
          return numberFilterFun(Number(money).myDiv(item.price));
        } else {
          return numberFilterFun(money);
        }
      }
    },
    tableRowClassName({ row }) {
      if (
        this.contractType == this.marketsTabs &&
        row.symbol_name == this.symbol
      ) {
        return "markets-table-active-item";
      }
      return "";
    },
    //切换搜索状态
    marketsSearchClear() {
      this.marketsSearchValue = "";
      this.isMarketsSearch = false;
    },
    //设置计价单位
    setTradeSettingFun(type, unit) {
      this.tradeSetting.type = type;
      this.tradeSetting.curr_unit = unit;
    },
    //获取合约行情数据
    getMarketsContractDataFun() {
      getExchangegetContractApi().then((res) => {
        let data = res.data.data;
        data = data.map((item) => {
          item.zdf = item.zdf - 0;
          item.close = Number(item.close);
          item.closeText = numberFilterFun(item.close);
          return item;
        });
        this.marketsObj.ubw = data.filter((item) => item.contract_type == 1);
        this.marketsObj.bbw = data.filter((item) => item.contract_type == 2);
      });
    },
    //获取自选行情数据
    getMarketsOptionalDataFun() {
      if (this.isLogin) {
        getExchangeOptionalApi().then((res) => {
          let data = res.data.data;
          data = data.filter((item) => item.optional == "hy");
          data = data.map((item) => {
            item.zdf = item.zdf - 0;
            item.close = Number(item.close);
            item.closeText = numberFilterFun(item.close);
            item.collect = 1;
            return item;
          });
          this.marketsObj.zx = data;
        });
      }
    },
    //收藏-取消收藏
    setOptionalFun(type, data) {
      if (!this.isLogin) {
        this.$router.push({ path: "/user/login" });
        return false;
      }
      if (this.throttle) {
        return false;
      }
      this.throttle = true;
      if (type == "add") {
        getExchangeAddOptionalApi(data.id, "2")
          .then((res) => {
            this.throttle = false;
            console.log("自选设置成功===", res.data.data);
            let tabsValue = data.contract_type == "1" ? "ubw" : "bbw";
            this.marketsObj[tabsValue] = this.marketsObj[tabsValue].map(
              (item) => {
                if (data.id == item.id) {
                  item.collect = 1;
                }
                return item;
              }
            );
            //重新获取自选数据
            this.getMarketsOptionalDataFun();
          })
          .catch(() => {
            this.throttle = false;
          });
      } else {
        let tabsValue = data.type;
        let id = data.c_id;
        if (this.marketsTabs != "zx") {
          tabsValue = "2";
          id = data.id;
        }
        getExchangeClearOptionalApi(id, tabsValue)
          .then((res) => {
            this.throttle = false;
            console.log("取消自选成功===", res.data.data, data);
            this.marketsObj.zx = this.marketsObj.zx.filter((item) => {
              if (id == item.c_id) {
                return false;
              }
              return true;
            });
            let optional = data.contract_type == "1" ? "ubw" : "bbw";
            this.marketsObj[optional] = this.marketsObj[optional].map(
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
    /* k线图 */
    async getKline() {
      /* this.datafeed = new Datafeeds.UDFCompatibleDatafeed(
        'https://demo_feed.tradingview.com', //后台地址
        10000 //轮询时间(毫秒)
      ) */
      let klineData = await getDataApi("1530464853989064705", {
        config_code: "kline_lang",
      });
      klineData = klineData.data.data.records[0];
      klineData = getStrDataFunction(klineData.config_data);

      let that = this;
      let initKlineFun = (minTick) => {
        this.datafeed = new Datafeeds.WebsockFeed(
          "/market",
          this.symbol,
          this,
          5
        );
        let config = {
          autosize: true,
          theme: "Light",
          symbol: this.symbol, //商品
          interval: "60", // 默认K线周期
          timezone: "Asia/Shanghai", //时区
          container_id: "kline_container",
          datafeed: this.datafeed,
          library_path: "/charting_library/",
          locale: klineData[this.language] || this.defaultLang,
          debug: false,
          drawings_access: {
            type: "black",
            tools: [{ name: "Regression Trend" }],
          },
          disabled_features: [
            "header_resolutions",
            "timeframes_toolbar",
            "header_symbol_search",
            "header_chart_type",
            "header_compare",
            "header_undo_redo",
            "header_screenshot",
            "header_saveload",
            "use_localstorage_for_settings",
            // 'left_toolbar',
            // 'hide_left_toolbar_by_default',
            "volume_force_overlay",
          ],
          enabled_features: [
            "hide_last_na_study_output",
            "move_logo_to_main_pane",
          ],
          custom_css_url: "bundles/common.css",
          supported_resolutions: ["1", "5", "15", "30", "60", "1D", "1W", "1M"],
          charts_storage_url: "http://saveload.tradingview.com",
          charts_storage_api_version: "1.1",
          client_id: "tradingview.com",
          user_id: "public_user_id",
          overrides: {
            "paneProperties.background": "#0d1324",
            "paneProperties.vertGridProperties.color": "rgba(0,0,0,0)", //网格颜色
            "paneProperties.horzGridProperties.color": "rgba(0,0,0,0)", //网格颜色
            //k线 烛心
            "mainSeriesProperties.candleStyle.upColor": "rgb(49, 173, 132)", //涨
            "mainSeriesProperties.candleStyle.downColor": "rgb(184, 75, 59)", //跌
            "mainSeriesProperties.candleStyle.drawBorder": false,
            "mainSeriesProperties.candleStyle.wickUpColor": "rgb(49, 173, 132)",
            "mainSeriesProperties.candleStyle.wickDownColor":
              "rgb(184, 75, 59)",
            "paneProperties.legendProperties.showLegend": false,

            "mainSeriesProperties.areaStyle.color1": "rgba(71, 78, 112, 0.5)",
            "mainSeriesProperties.areaStyle.color2": "rgba(71, 78, 112, 0.5)",
            "mainSeriesProperties.areaStyle.linecolor": "#9194a4",

            //坐标轴
            "scalesProperties.lineColor": "#262d38",
            "scalesProperties.textColor": "#688199",

            volumePaneSize: "medium", //底部指标高度 large, medium, small, tiny
            //精度
            "mainSeriesProperties.minTick": minTick,
          },
          studies_overrides: {
            "volume.precision": 0,
            // 销量线
            "volume.volume.linewidth.0": 0,
            "volume.volume.color.0": "#31AD84",
            "volume.volume.color.1": "#B84B3B",
            "volume.volume.transparency": 65,
          },
          time_frames: [
            {
              text: "1min",
              resolution: "1",
              description: "realtime",
              title: "分时",
            },
            { text: "1min", resolution: "1", description: "1min" },
            { text: "5min", resolution: "5", description: "5min" },
            { text: "15min", resolution: "15", description: "15min" },
            { text: "30min", resolution: "30", description: "30min" },
            {
              text: "1hour",
              resolution: "60",
              description: "1hour",
              title: "1hour",
            },
            {
              text: "1day",
              resolution: "1D",
              description: "1day",
              title: "1day",
            },
            {
              text: "1week",
              resolution: "1W",
              description: "1week",
              title: "1week",
            },
            { text: "1mon", resolution: "1M", description: "1mon" },
          ],
        };
        if (this.themeName === "theme-daytime") {
          config.custom_css_url = "bundles/common_day.css";
          config.overrides["paneProperties.background"] = "#fff";
          config.overrides["mainSeriesProperties.candleStyle.upColor"] =
            "#a6d3a5";
          config.overrides["mainSeriesProperties.candleStyle.downColor"] =
            "#ffa5a6";
          config.overrides["mainSeriesProperties.candleStyle.upColor"] =
            "rgb(49, 173, 132)";
          config.overrides["mainSeriesProperties.candleStyle.downColor"] =
            "rgb(224, 68, 63)";
          config.overrides["mainSeriesProperties.candleStyle.wickUpColor"] =
            "rgb(49, 173, 132)";
          config.overrides["mainSeriesProperties.candleStyle.wickDownColor"] =
            "rgb(224, 68, 63)";
          config.overrides["scalesProperties.lineColor"] = "#eff0f2";
          config.overrides["scalesProperties.textColor"] = "#7e92a6";
        }
        this.tvWidget = new TradingView.widget(config);
        this.tvWidget.onChartReady(function () {
          that.tvWidget.chart().executeActionById("drawingToolbarAction"); //隐藏或显示绘图工具栏
          that.tvWidget
            .chart()
            .createStudy(
              "Moving Average Exponential",
              false,
              false,
              [5],
              null,
              {
                "plot.color": "#EDEDED",
              }
            );
          that.tvWidget
            .chart()
            .createStudy(
              "Moving Average Exponential",
              false,
              false,
              [10],
              null,
              {
                "plot.color": "#ffe000",
              }
            );
          that.tvWidget
            .chart()
            .createStudy(
              "Moving Average Exponential",
              false,
              false,
              [30],
              null,
              {
                "plot.color": "#ce00ff",
              }
            );
          that.tvWidget
            .chart()
            .createStudy(
              "Moving Average Exponential",
              false,
              false,
              [60],
              null,
              {
                "plot.color": "#00adff",
              }
            );
          that.tvWidget
            .createButton()
            .attr("title", "realtime")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(3);
              that.tvWidget.setSymbol("", "1");
            })
            .append("<span>Time</span>");

          that.tvWidget
            .createButton()
            .attr("title", "M1")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "1");
            })
            .append("<span>1m</span>");

          that.tvWidget
            .createButton()
            .attr("title", "M5")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "5");
            })
            .append("<span>5m</span>");

          that.tvWidget
            .createButton()
            .attr("title", "M15")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "15");
            })
            .append("<span>15m</span>");

          that.tvWidget
            .createButton()
            .attr("title", "M30")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "30");
            })
            .append("<span>30m</span>");

          that.tvWidget
            .createButton()
            .attr("title", "H1")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "60");
            })
            .append("<span>1H</span>")
            .addClass("selected");

          that.tvWidget
            .createButton()
            .attr("title", "D1")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "1D");
            })
            .append("<span>1D</span>");

          that.tvWidget
            .createButton()
            .attr("title", "W1")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "1W");
            })
            .append("<span>1W</span>");

          that.tvWidget
            .createButton()
            .attr("title", "M1")
            .on("click", function () {
              if ($(this).hasClass("selected")) return;
              $(this)
                .addClass("selected")
                .parent(".group")
                .siblings(".group")
                .find(".button.selected")
                .removeClass("selected");
              that.tvWidget.chart().setChartType(1);
              that.tvWidget.setSymbol("", "1M");
            })
            .append("<span>1M</span>");
        });
      };
      //获取最新价格后再执行k线渲染
      let timer = setInterval(() => {
        if (this.currCoinMoneyData.close) {
          clearInterval(timer);
          //获取当前最小精度
          let close = this.currCoinMoneyData.close.toString();
          let minArr = [];
          let min = "1";
          if (close.indexOf(".") != -1) {
            minArr = close.split(".")[1].split("");
          }
          minArr.forEach(() => {
            min = min * 10;
          });
          initKlineFun(`${min},1,false`);
        }
      }, 100);
    },
    //打开仓位模式设置
    setCurrTradeModel() {
      this.tradeModel.mainType = this.myMoneyData.pattern;
      this.tradeModel.subType = this.myMoneyData.patternType;
      this.tradeModel.num = this.myMoneyData.leverage;
      this.tradeModel.dialog = true;
    },
    //清空输入框滑动值
    tradeFormNumFocusFun() {
      if (this.tradeForm.num + "".indexOf("%") != -1) {
        this.tradeForm.slider = 0;
      }
    },
    //设置保证金tab
    setMarginMoneyDataFun(type) {
      this.marginMoneyData.num = "";
      this.marginMoneyData.type = type;
    },
    //打开设置保证金弹窗
    openMarginDialogFun(data) {
      this.marginMoneyData = {
        ...this.marginMoneyData,
        dialog: true,
        type: "add",
        num: "",
        curr_contract_type: data.contract_type, //合约类型
        curr_symbol: data.symbol,
        curr_money_symbol: data.principal_symbol,
        curr_money: data.principal_amount, //当前保证金
        curr_price: data.forcePrice, //当前爆仓价
        curr_positions: data.balance, //当前仓位
        curr_average: data.avg_price, //开仓均价
        cuur_direction: data.direction, //方向 1多 2空
        id: data.id,
      };
      console.log(this.marginMoneyData);
    },
    //打开闪电平仓
    openLightningDialogFun(data) {
      this.orderLightningData = {
        ...this.orderLightningData,
        ...data,
        dialog: true,
      };
    },
    //打开反向开仓
    openReversePositionsDialogFun(data) {
      this.reversePositionsData = {
        ...this.reversePositionsData,
        ...data,
        dialog: true,
      };
    },
    //打开止盈止损
    openCheckFullStopDialogFun(data) {
      console.log(data);
      data.base_type = data.symbol_name.split("/")[1];
      this.checkFullStopData = {
        ...this.checkFullStopData,
        ...data,
        dialog: true,
        competitors: true,
        entrust: this.currCoinLangFun("duisshoujia_text", "move_contract"), //对手价
        surplus: data.balance,
      };
      this.checkFullStopData.yield = "";
      this.checkFullStopInputChengFun(
        data.bjjg,
        "trigger",
        this.exchangeCoinData.base_coin_scale
      );
    },
    //止盈止损委托价格
    checkFullStopfocusFun() {
      this.checkFullStopData = {
        ...this.checkFullStopData,
        competitors: false,
      };
    },
    //打开历史委托详情
    openOrderHistroyFun(data) {
      this.orderHistoryData = {
        ...this.orderHistoryData,
        dialog: true,
        symbol: data.symbol,
        directionText: data.directionText,
        className: data.className.replace("-bg", ""),
        zt: data.zt,
        completedTime: data.completedTime,
        coin_cj_cjl: data.coin_cj_cjl,
        base_cj_cjl: data.base_cj_cjl,
        successPrice: data.successPrice,
        frozen_symbol: data.frozen_symbol,
        tableData: [],
      };
      if (data.entrust_status != -1) {
        this.orderHistoryData.tableData = [
          {
            completedTime: data.completedTime,
            successPrice: data.successPrice,
            coin_cj_cjl: data.coin_cj_cjl,
            base_cj_cjl: data.base_cj_cjl,
            fee_balance: toThousands(data.fee_balance) + " " + data.fee_symbol,
          },
        ];
      }
      this.$refs.contractDetails.dialog = true;
    },
    skipUserPage(type) {
      if (type == "login") {
        this.$router.push({ path: "/user/login" });
      } else if (type == "register") {
        this.$router.push({ path: "/user/register" });
      }
    },
    //打开划转
    openTransFun() {
      this.tradeDefaultAccount = `contract,${
        this.contractType == "ubw"
          ? this.exchangeCoinData.base_coin_id
          : this.exchangeCoinData.coin_coin_id
      }`;
      this.isTradeFundsDialog = true;
    },
    transCloseDialogFun(type, isRefresh) {
      if (type == "transferDialog") {
        this.isTradeFundsDialog = false;
        if (isRefresh && isRefresh == "refresh") {
          this.initAccountInfo();
        }
      }
    },
  },
};
