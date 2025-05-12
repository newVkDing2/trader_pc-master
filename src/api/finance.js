import request from '@/router/axios';
import config from "@/config/index";




/* 
  获取理财产品详情*/
  export const getFinanDetail = (data) => {
    console.log("data==>",data);
    return request({
      url: `/api/financial/${data.id}`,
      method: 'post'
    })
  }


/* 
  获取不同类型理财列表*/
export const getFinanList = (data) => {
  return request({
    url: '/api/financial/list',
    method: 'post',
    data,
  })
}



/* 
  获取存币当前计划列表
*/
export const getCbsxNowApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/wealth/cbsx/now`,
    method: 'get',
    params: {},
  })
}


/* 
  获取存币往期计划列表
*/
export const getCbsxHistoryApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/wealth/cbsx/history`,
    method: 'get',
    params: {},
  })
}


/* 
  获取存币项目详情
*/
export const getGoodsInfoApi = (id) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/wealth/cbsx/goodsInfo?goodsId=${id}`,
    method: 'get',
    params: {},
  })
}

/* 
  获取钱包余额
*/
export const getWealthApi = (symbol) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/get/wealth/${symbol}`,
    method: 'get',
    params: {},
  })
}

/* 
  抢购
*/
export const buyCoinApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wealth/wealth/cbsx/buy`,
    method: 'post',
    data,
  })
}


/* 
存币宝-锁定记录
*/
export const getWealthCbjlListApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wealth/getWealthCbjlList`,
    method: 'post',
    data
  })
}


