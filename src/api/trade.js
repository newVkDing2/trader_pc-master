/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";




// 获取U本位委托订单列表 0 当前委托 1历史委托
export const getUstaContractOrder = (data) => {
    return request({
        url: '/api/contract/order/list',
        method: 'POST',
        params:{...data}
    });
};




// 获取币币交易订单列表
export const getSpotContractOrder = (data) => {
    return request({
        url: '/api/currency/order/orderList',
        method: 'POST',
        params:{...data}
    });
};


// 获取秒合约订单列表
export const getSecondContractOrder = (data) => {
    return request({
        url: '/api/secondContractOrder/selectOrderList',
        method: 'POST',
        data
    });
};


/**
 * 获取所有币种列表 type 1 秒合约 2 币币 3 U本位 4 期权  5 外汇（待定）
 * @returns
 */
export const getCoinListApi = () => {
    return request({
        url: '/api/common/getCoinList',
        method: 'POST'
    });
};

/**
 * 币币买入卖出
 * @returns
 */

export const submitOrderCurrencyApi = (data) => {
    return request({
        url: '/api/currency/order/submit',
        method: 'POST',
        data
    });
};
/**
 * 币币撤销订单
 * @returns
 */
export const cancelOrderCurrencyApi = (id) => {
    return request({
        url: `/api/currency/order/cancelOrder?id=${id}`,
        method: 'POST'
    });
};
/**
 * 获取币币列表
 * @returns
 */
export const getOrderListCurrencyApi = (data) => {
    return request({
        url: `/api/currency/order/orderList`,
        method: 'POST',
        data
    });
};
/**
 *
 * @param {*} data
 * @returns 查看币种周期配置
 */
export const getPeriodList = (data) => {
    return request({
        url: '/api/period/list',
        method: 'POST',
        data
    });
};
/**
 *
 * @param {*} data
 * @returns 新增秒合约订单
 */
export const createSecondContractOrder = (data) => {
    return request({
        url: '/api/secondContractOrder/createSecondContractOrder',
        method: 'POST',
        data
    });
};
/**
 *
 * @param {*} data
 * @returns 当前/历史委托  秒合约
 */
export const secondContractOrderselectOrderList = (data) => {
    return request({
        url: '/api/secondContractOrder/selectOrderList',
        method: 'POST',
        data
    });
};
/**
 *
 * @param {*} data
 * @returns 提交本位
 */
export const submitUcontract = (data) => {
    return request({
        url: '/api/contract/order/submit',
        method: 'POST',
        data
    });
};
/**
 *
 * @param {*} status  0 当前持仓 1.历史持仓
 * @returns 持仓列表
 */
export const contractHistoryList = (data) => {
    return request({
        url: `/api/contract/position/list`,
        method: 'POST',
        params:{...data}
    });
};
/**
 *
 * @param {*} data
 * @returns 极速平仓
 */
export const stopOrder = (data) => {
    return request({
        url: `/api/contract/position/stopOrder?id=${data.id}`,
        method: 'POST'
    });
};
/**
 *
 * @param {*} data
 * @returns 调整保证金
 */
export const adjustAmount = (data) => {
    return request({
        url: `/api/contract/position/adjustAmount?id=${data.id}&money=${data.money}&flag=${data.flag}`,
        method: 'POST'
    });
};
/**
 *
 * @returns 止盈止损列表
 */
export const contractLossList = (data) => {
    return request({
        url: `/api/contract/loss/list`,
        method: 'POST',
        params:{...data}
    });
};
/**
 *
 * @param {*} data
 * @returns 止盈止损设置
 */
export const settLoss = (data) => {
    return request({
        url: `/api/contract/loss/sett`,
        method: 'POST',
        data,
    });
};
/**
 *
 * @param {*} data
 * @returns 取消止盈止损
 */
export const cancelLoss = (id) => {
    return request({
        url: `/api/contract/loss/cancel?id=${id}`,
        method: 'POST'
    });
};

/**
 *
 * @param {*} id
 * @returns 当前委托扯单
 */
export const canCelOrder = (id) => {
    return request({
        url: `/api/contract/order/canCelOrder?id=${id}`,
        method: 'POST'
    });
};
/**
 * 收藏币种
 */
export const setCollect = (data) => {
    return request({
        url: `/api/userCoin/save`,
        method: 'POST',
        data,
    });
};
/**
 * rxce平仓
 */
export const stopPosition = (data) => {
    return request({
        url: `/api/contract/position/stopPosition?id=${data.id}`,
        method: 'POST'
    });
};


/**
 * 追加保证金  
 */

export const adjustPositionMargn = (data) => {
    return request({
        url: `/api/contract/position/adjustPositionMargn?id=${data.id}&money=${data.money}`,
        method: 'POST'
    });
};
/**
 * 追加本金
 */
export const adjustPositionAmout = (data) => {
    return request({
        url: `/api/contract/position/adjustPositionAmout?id=${data.id}&money=${data.money}`,
        method: 'POST'
    });
};
/**
 * 获取自选列表
 */
export const getCollect = (data) => {
    return request({
        url: `/api/userCoin/getUserCoin`,
        method: 'POST',
        data
    });
};
/**
 * 批量添加收藏
 */
export const setCollectAdds = (data) => {
    return request({
        url: `/api/userCoin/addBath`,
        method: 'POST',
        data
    });
};
/**
 * 批量取消收藏
 */
export const removeCollectRemoves = (ids) => {
    return request({
        url: `/api/userCoin/remove/${ids}`,
        method: 'POST'
    });
};
/**
 * 秒合约黄金白银假数据
 */
export const getMt5Amount = (coin) => {
    return request({
        url: `/api/common/getMt5Amount?coin=${coin}`,
        method: 'POST'
    });
};