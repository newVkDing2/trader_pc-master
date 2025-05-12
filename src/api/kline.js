/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";



/**
 * k线历史数据
 */
export const getKlineHistory = (data) => {
    return request({
        url: '/kline',
        method: 'post',
        data
    })
}
