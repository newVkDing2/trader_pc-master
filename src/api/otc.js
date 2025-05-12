/*
  买币相关api
*/
import request from '@/router/axios';
import config from "@/config/index";

/*
  获取服务商列表
*/
export const getFiatCurrency = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getFiatCurrency`,
    method: 'get',
  })
}


/*
  法币兑换换算
*/
export const getQuotedPrice = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/common/quotedPrice`,
    method: 'post',
    data
  })
}


/*
 获取法币及对应的支付方式和服务商
*/
export const getSupportService = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getSupportService`,
    method: 'get',
    params
  })
}


/*
普通买币，获取所有订单
*/
export const getCommonOrder = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/list`,
    method: 'post',
    data
  })
}


/*
普通买币，一键买卖 下单
*/
export const newCommonOrder = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/submit_order`,
    method: 'post',
    data
  })
}

/*
获取承兑商收款信息
*/
export const getServicePayment = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/getServicePayment`,
    method: 'GET',
    params
  })
}

/*
获取订单聊天数据
*/
export const getOrderChatRecord = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/getOrderChatRecord/${orderId}`,
    method: 'GET',
  })
}


/*
发送订单聊天数据
*/
export const sendOrderChatRecord = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/sendOrderChatRecord`,
    method: 'post',
    data
  })
}

/*
订单取消
*/
export const cancelCommonOrder = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/cancel/${orderId}`,
    method: 'post',
  })
}

/* 
订单已支付
*/
export const payCommonOrder = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/pay/${orderId}`,
    method: 'post',
  })
}

/* 
订单已收款
*/
export const cancelCompleteOrder = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/complete/${orderId}`,
    method: 'post',
  })
}

/* 
获取一键买卖币种信息
*/
export const getCoinCurrencyApi = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getCoinCurrency`,
    method: 'get',
  })
}


/* 
获取一键买卖支付方式
*/
export const getOneClickPayment = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/one-click`,
    method: 'get',
  })
}


/* 
获取一键买卖汇率
*/
export const getOneClickRate = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/one-click/rate`,
    method: 'get',
    params
  })
}

/* 
提交申诉
*/
export const appealFun = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/appeal`,
    method: 'post',
    data: {
      ...data
    }
  })
}

/* 
//当前审核信息
*/
export const getAppealOrder = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/getAppealOrder?orderId=${orderId}`,
    method: 'get',
  })
}

/* 
//撤销申诉
*/
export const appealCancelFun = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/appeal/cancel/${orderId}`,
    method: 'get',
  })
}

//申诉进度

export const appealOrderFun = (orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/appeal/order/${orderId}`,
    method: 'get',
  })
}


//下单时校验资金密码
export const verifyMoneyPassApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/tradePwd/validated`,
    method: 'post',
    data,
  })
}
