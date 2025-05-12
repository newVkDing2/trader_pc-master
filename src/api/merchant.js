import request from '@/router/axios';
import config from "@/config/index";




/* 
  商家认证
*/
export const merchantBusinessApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/audit-business`,
    method: 'post',
    params,
  })
}

//新增委托
export const merchantAddEntrustApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/advertise/create`,
    method: 'post',
    data,
  })
}
//编辑委托
export const merchantEditEntrustApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/advertise/modify`,
    method: 'post',
    data,
  })
}

//委托列表
export const getMerchantEntrustListApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/p2p`,
    method: 'get',
    params,
  })
}

/*
获取所有买卖订单
*/
export const getMerchantDealOrder = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/service/order/list`,
    method: 'get',
    params
  })
}

