/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";

/* 
  获取我的投资订单列表
*/
export const getPersonalOrderList = (data) => {
  return request({
    url: `/api/order/list`,
    method: "post",
    params: { ...data },
  });
};

/* 
  我的投资数据*/
export const getPersonalIncome = () => {
  return request({
    url: `/api/financial/personalIncome`,
    method: "post",
  });
};

/* 
  资金划转接口*/
export const transferFunds = (data) => {
  return request({
    url: "/api/asset/transferFunds",
    method: "post",
    data,
  });
};

/* 
  闪兑接口*/
export const currencyExchange = (data) => {
  return request({
    url: "/api/texchange/currencyExchange",
    method: "post",
    data,
  });
};

/* 
  获取货币之间汇率*/
export const getCurrencyRate = (data) => {
  return request({
    url: "/api/texchange/getCurrencyPrice",
    method: "post",
    params: { ...data },
  });
};

/* 
  确定提现*/
export const withdrawSubmit = (params) => {
  return request({
    url: `/api/withdraw/submit?${params}`,
    method: "post",
  });
};

/* 
  确定充值*/
export const rechargeSubmit = (data) => {
  return request({
    url: "/api/recharge/submit",
    method: "post",
    data,
  });
};

/* 
  获取充值(提现)记录列表*/
export const getRecordList = (data, key) => {
  // console.log("key==>key===>",key);
  return request({
    url: `/api/${key}/list`,
    method: "post",
    params: { ...data },
  });
};
