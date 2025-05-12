import request from '@/router/axios';
import config from "@/config/index";

/* 
  获取app应用链接
*/
export const getAppApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/get/download/url?type=${type}`,
    method: 'get',
  })
}

