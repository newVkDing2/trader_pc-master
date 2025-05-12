/*

*/
import request from "@/router/axios";
import config from "@/config/index";

/*
  获取k线图历史数据
*/
export const getKlineHistoryApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/get/kline/history`,
    method: "get",
    params,
  });
};
/*
  获取当前币种钱包金额
*/
export const getCurrCoinMoneyApi = (type, symbol) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/get/${type}/${symbol}`,
    method: "get",
    params: {},
  });
};

/*
  获取交易对信息
*/
export const getCounterpartyDataApi = (type, symbolName) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/transaction/${type}/${symbolName}`,
    method: "get",
    data: {},
  });
};
/* 获取我的成交记录 （市场） */
export const getMyExchangeApi = (symbolName) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/get/myExchangeLog/${symbolName}`,
    method: "get",
    params: {},
  });
};
/*
  买卖币种
*/
export const buyAndSellCoinApi = (data, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/exchange/${type}`,
    method: "post",
    data,
  });
};

/*
  获取委托列表数据
*/
export const getOrdersTableDataApi = (type, meth, coin) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/entrustlog/${type}/${meth}/${coin}`,
    method: "get",
    data: {},
  });
};

/*
  委托列表 撤单
*/
export const getOrdersCancellationsApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/cancel/entrust`,
    method: "post",
    data,
  });
};

/*
  委托详情
*/
export const getOrdersDetailsApi = (id) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/transaction/details/${id}`,
    method: "get",
    params: {},
  });
};

/*
  交易-价格对比
*/
export const getExchangePriceInfo = (id) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getPriceComparison/${id}`,
    method: "get",
    params: {},
  });
};

/*
  获取最大可借数量（逐仓 全仓）
*/
export const getBorrowMoneyDataApi = (data, type) => {
  //type  逐仓:zc 全仓:qc
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/${
      type == "qc" ? "all" : "fixed"
    }/getCanborrow`,
    method: "post",
    data,
  });
};
/*
  借款详情（逐仓 全仓）
*/
export const getBorrowMoneyDetailsApi = (data, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/${
      type == "qc" ? "all" : "fixed"
    }/preborrow`,
    method: "post",
    data,
  });
};

/*
  借款（逐仓 全仓）
*/
export const borrowMoneyApi = (data, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/${
      type == "qc" ? "all" : "fixed"
    }/borrow`,
    method: "post",
    data,
  });
};

/*
  还款
*/
export const repaymentMoneyApi = (data, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/still/${
      type == "qc" ? "all" : "fixed"
    }`,
    method: "post",
    data,
  });
};

/*
  获取当前资产数据
*/
export const getCurrPropertyApi = (symbolName, type) => {
  let url = `/api/${config.apiRequestHead}/coin/wallet/fixed/marginProperty/${symbolName}`;
  if (type == "qc") {
    url = `/api/${config.apiRequestHead}/coin/wallet/all/marginProperty`;
  }
  return request({
    url,
    method: "get",
    data: {},
  });
};

/*
  获取全仓账户信息列表（借币 还款）
*/
export const getPryWarehouseAccountDataApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/all/getCanborrowList`,
    method: "get",
    data: {},
  });
};

/*
  获取全仓风险率
*/
export const getAllDepositRateApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/all/getDepositRate`,
    method: "get",
    data: {},
  });
};

/*
  修改杠杠倍数
*/
export const updatePryMultipleApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/fixed/updateLeverageRadio`,
    method: "post",
    data,
  });
};

/*
  获取借币记录
*/
export const getBorrowOrdersTableDataApi = (
  entrustType,
  entrustFlag,
  symbolName
) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/borrowOrder/${entrustType}/${entrustFlag}/${symbolName}`,
    method: "get",
    data: {},
  });
};

/*
  获取行情自选
*/
export const getExchangeOptionalApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/quotes/getOptional`,
    method: "get",
    data: {},
  });
};
/*
  获取行情现货
*/
export const getExchangeCashApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getSpotGoods`,
    method: "get",
    data: {},
  });
};

/*
  获取行情合约
*/
export const getExchangegetContractApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getContract`,
    method: "get",
    data: {},
  });
};

/*
  行情-添加自选
*/
export const getExchangeAddOptionalApi = (id, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/quotes/addOptional/${id}/${type}`,
    method: "get",
    data: {},
  });
};
/*
  行情-取消自选
*/
export const getExchangeClearOptionalApi = (id, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/quotes/cancelOptional/${id}/${type}`,
    method: "get",
    data: {},
  });
};

//获取当前交易对最新价信息 type: xh  ubw bbw
export const getSymbolNewDataApi = (symbolList, type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/get/contractDetail`,
    method: "post",
    data: {
      symbolNameList: symbolList,
      type,
    },
  });
};

/* 合约 */
// 下单 type:委托类型  ptwt  jhwt
export const contractPlaceOrderApi = (data, type) => {
  let direction = data.direction > 2 ? "close" : "open";
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/contract/${direction}/${type}`,
    method: "post",
    data,
  });
};
// 订单-仓位 type:ubw bbw
export const getContractPositionsApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/get/myPosition/${type}`,
    method: "get",
    data: {},
  });
};

//修改当前币种仓位模式
export const contractUpdatePositionsApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/contract/updateLeverageRadio`,
    method: "post",
    data,
  });
};

//修改当前仓位保证金
export const contractUpdateMarginApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/contract/updateBond`,
    method: "post",
    data,
  });
};

//获取订单列表
export const getContractOrderDataApi = (
  contractTypeStr,
  entrustTypeStr,
  symbol
) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/entrustlogContract/${contractTypeStr}/${entrustTypeStr}/${symbol}`,
    method: "get",
    params: {},
  });
};

//一键平仓
export const contractaKeyUnwindApi = (symbolList, contractType) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/contract/close/onekey`,
    method: "post",
    data: {
      oneKeySymbolNameList: symbolList,
      contractType,
    },
  });
};

//获取各种mqtt连接回来的起始数据
/*
type值：
  deptH_xh_deptH_ETH/USD
  deptH_ubw_deptH_ETH/USD
  deptH_bbw_deptH_ETH/USD

  tract_xh_trade_SHIB/USDT
  tract_ubw_trade_SHIB/USDT
  tract_bbw_trade_SHIB/USDT

  index
*/
export const getMqttInitDataApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/market/initData`,
    method: "get",
    params: {
      type,
    },
  });
};

// 获取资金费率
export const getFundingRate = (symbolName) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getFundingRate`,
    method: "get",
    params: {
      symbolName,
    },
  });
};

// U本位维系保证金
export const getUbwMaintenanceMargin = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/get/getUbwMaintenanceMargin`,
    method: "get",
  });
};

// 币本位维系保证金
export const getBbwMaintenanceMargin = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/get/getBbwMaintenanceMargin/${type}`,
    method: "get",
  });
};
