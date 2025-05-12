/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";



/* 
  获取规则内容*/
export const getRulesList = (data) => {
    return request({
        url: '/api/option/rules/list',
        method: 'post',
        params: { ...data }
    })
}
