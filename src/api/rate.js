/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";

// 合约交易手续费
export const getExchangeContractFee = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getExchangeContractFee?type=${type}`,
    method: "get",
  });
};

// 现货手续费接口
export const getExchangeSpotFee = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getExchangeSpotFee`,
    method: "get",
  });
};

// 提现手续费
export const getWithdrawFee = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getWithdrawFee`,
    method: "get",
  });
};
