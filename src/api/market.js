import request from '@/router/axios';
import config from "@/config/index";

/* 
  获取市值商品
*/
export const getMarketGoodsApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/market/goods`,
    method: 'get',
    params:{},
  })
}

/* 
  市值下单
*/
export const marketPlaceOrderApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/market/createOrder`,
    method: 'post',
    data,
  })
}

/* 
  获取市值记录
*/
export const getMarketOrderDataApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/market/orderlist/${type}`,
    method: 'get',
    params:{},
  })
}

/* 
  修改市值订单自动续约
*/
export const updataeOrderContractApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/market/updaeOrder`,
    method: 'post',
    params,
  })
}

/* 
  获取维护收益列表
*/
export const getMarketYieldListApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/market/walletHistory`,
    method: 'get',
    params:{},
  })
}
/* 
  获取维护收益信息
*/
export const getMarketYieldInfoApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/market/getTodayProfit`,
    method: 'get',
    params:{},
  })
  
}