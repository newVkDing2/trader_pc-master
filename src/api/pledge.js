/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";

/* 
  赎回*/
export const redemption = (data) => {
  return request({
    url: "/api/mingOrder/redemption",
    method: "post",
    data,
  });
};

/* 
  购买挖矿产品*/
export const mineSubmit = (data) => {
  return request({
    url: "/api/mingOrder/submit",
    method: "post",
    data,
  });
};

/* 
  获取挖矿说明*/
export const getMineIntro = (data) => {
  return request({
    url: "/api/option/rules/list",
    method: "post",
    params: { ...data },
  });
};

/* 
  质押挖矿  收益显示*/
export const getPledgeShowInfo = () => {
  return request({
    url: "/api/mingOrder/show",
    method: "post",
  });
};

/* 
  获取质押挖矿列表*/
export const getMineList = () => {
  return request({
    url: "/api/mingProduct/list",
    method: "post",
  });
};
