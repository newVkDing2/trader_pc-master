import request from "@/router/axios";
import config from "@/config/index";

/*
  代理端成员管理信息
*/
export const contractProxyInfo = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/getInfo`,
    method: "get",
    params: {},
  });
};

//代理端成员管理信息团队数据

export const contractProxyGetChild = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/getChild`,
    method: "get",
    params,
  });
};

// 设置下级返佣比例
export const contractProxyProxy = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/proxy`,
    method: "post",
    data,
  });
};

// 申请成为代理
export const contractProxyAgent = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/agent`,
    method: "post",
    data,
  });
};

/*
  合约订单明细
*/
export const contractProxyGetOrders = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/contract/orders`,
    method: "get",
    params,
  });
};

/*
  合约订单分佣明细
*/
export const contractProxyGetCommission = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/contract/commission`,
    method: "get",
    params,
  });
};

/*
  下级当前持仓
*/
export const contractProxyGetPosition = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/contract/position`,
    method: "get",
    params,
  });
};

/*
  佣金分发记录
*/
export const contractProxyGetHistory = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/commission/history`,
    method: "get",
    params,
  });
};

// 申请代理
export const applyAgent = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/commission/applyProxy`,
    method: "get",
    data,
  });
};

// 获取当前代理信息
export const applyAgentInfo = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/contract-proxy/commission/getProxyInfo`,
    method: "get",
    data,
  });
};
