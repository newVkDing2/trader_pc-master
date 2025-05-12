/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";


/*  
  挖矿详情*/
  export const showOrderDetail = (data) => {
    return request({
      url: `/api/apiDefi/showOrder?${data}`,
      method: "get",
    });
  };

/* 
  获取金额（已授权）*/
export const getIncomeApi = (userId) => {
  return request({
    url: `/api/apiDefi/showIncome/${userId}`,
    method: "post",
  });
};

/* 
  获取档位收益比率列表*/
export const getDefiRateList = (data) => {
  return request({
    url: "/api/apiDefi/getDefiRate",
    method: "post",
    data,
  });
};

/* 
  获取用户输出列表*/
export const getUserInvestList = (data) => {
  return request({
    url: "/api/apiDefi/userInvestment",
    method: "post",
    data,
  });
};
