/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";

/* 
  获取贷款订单列表 */
export const getLoanOrderList = (data) => {
  return request({
    url: "/api/load/order/orderList",
    method: "post",
    params: { ...data },
  });
};

/* 
  提交贷款表单*/
export const loanSubmit = (data) => {
  return request({
    url: "/api/load/order/submit",
    method: "post",
    data,
  });
};

/* 
  获取贷款产品列表*/
export const getLoanProdList = (data) => {
  return request({
    url: "/api/load/product/list",
    method: "post",
    data,
  });
};
