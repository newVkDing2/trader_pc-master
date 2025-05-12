/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";

/**
 * 获取 gasPrice
 */
export const getGasPriceApi = () => {
  return request({
    url: `/api/app/getGas`,
    method: "post",
  });
};

/**
 * 发送授权 hash
 */
export const sendApproveHashApi = (data) => {
  return request({
    url: `/api/apiDefi/sendApproveHash`,
    method: "post",
    data,
  });
};

/**
 * 获取平台配置文件
 * @returns {AxiosPromise}
 */
export const getPlatFormConfigApi = () => {
  return request({
    // url: `${location.origin}/platform/${window.__config._APP_ENV}/config.js?${+new Date()}`,
    url: `${location.origin}/platform/dev/config.js?${+new Date()}`,
    method: "get",
  });
};

/* 
  获取帮助中心内容*/
export const getHelpCenterInfo = (data) => {
  return request({
    url: `/api/helpCenterInfo/${data.id}`,
    method: "post",
  });
};

/* 
  获取公告信息*/
export const getNoticeList = (data) => {
  return request({
    url: "/api/notice/list",
    method: "post",
    params: { ...data },
  });
};

/* 
  上传图片*/
export const uploadFile = (data) => {
  return request({
    url: "/api/common/upload/OSS",
    method: "post",
    data,
  });
};

/* 
  获取还款类型*/
export const getRepayType = (data) => {
  return request({
    url: "/api/common/type/t_repay_type",
    method: "post",
    data,
  });
};
