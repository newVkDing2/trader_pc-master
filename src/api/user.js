/*
  用户相关api
*/
import request from "@/router/axios";
import config from "@/config/index";
import crypto from "@/util/crypto";


/*
  获取代理数据列表  
*/
export const getAgentList = (data) => {
  return request({
    url: `/api/agentActivityInfo/getAgentList`,
    method: "post",
    data
  });
};

/*
  推广中心统计数据  
*/
export const getTeamInfo = () => {
  return request({
    url: `/api/agentActivityInfo/getAgentInfo`,
    method: "post",
  });
};

/*
  取消/添加收藏coin  
*/
export const handleCollectCoin = (data, type) => {
  return request({
    url: `/api/userCoin/${type}`,
    method: "post",
    data,
  });
};

/*
  提交银行卡信息  
*/
export const submitBankInfo = (data) => {
  return request({
    url: "/api/userBank/save",
    method: "post",
    data,
  });
};

/*
  获取银行卡信息  
*/
export const getBankInfo = () => {
  return request({
    url: "/api/userBank/getbank",
    method: "post",
  });
};

/*
  绑定邮箱  
*/
export const bindEmail = (data) => {
  return request({
    url: "/api/user/bindEmail",
    method: "post",
    params: { ...data },
  });
};

/*
  修改资金密码密码  
*/
export const updatePwdApi = (data) => {
  return request({
    url: "/api/user/updatePwd",
    method: "post",
    params: { ...data },
  });
};

/*
  修改登录密码  
*/
export const updateUserLoginPwd = (data) => {
  return request({
    url: "/api/user/updateUserLoginPwd",
    method: "post",
    params: { ...data },
  });
};

/*
  设置资金密码  
*/
export const tardPwdSetApi = (data) => {
  return request({
    url: "/api/user/tardPwdSet",
    method: "post",
    params: { ...data },
  });
};

/*
  个人信息认证  
*/
export const userInfoCerApi = (data) => {
  return request({
    url: "/api/user/uploadKYC",
    method: "post",
    params: { ...data },
  });
};

/*
  获取自选币种  
*/
export const getUserCoinApi = () => {
  return request({
    url: "/api/userCoin/getUserCoin",
    method: "post",
  });
};

/*
  找回密码  
*/
export const findPswApi = (data) => {
  return request({
    url: "/api/user/backPwd",
    method: "post",
    params: { ...data },
  });
};

/*
  注册  
*/
export const regisApi = (data) => {
  return request({
    url: `/api/user/register `,
    method: "post",
    data,
  });
};

/*
  发送邮箱验证码  
*/
export const sendEmailCode = (data) => {
  return request({
    url: `api/user/sendEmailCode`,
    method: "post",
    params: { ...data },
  });
};

/*
  发送手机验证码  
*/
export const sendMobileCode = (data) => {
  return request({
    url: `api/user/sendMobileCode`,
    method: "post",
    params: { ...data },
  });
};

/*
  登录  
*/
export const signIn = (data) => {
  return request({
    url: `/api/user/login`,
    method: "post",
    data,
  });
};

/*
  获取用户信息
*/
export const getUserInfo = (data) => {
  return request({
    url: `/api/user/getInfo`,
    method: "post",
    data,
  });
};

/*
  发送邮件
*/
export const sendEmailApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/send/email`,
    method: "get",
    params,
  });
};
/*
  发送短信
*/
export const sendPhoneSmsApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/send/sms`,
    method: "get",
    params,
  });
};

/*
  登录-注册
*/
// export const userLoginAndRegisterApi = (header, data, meta) => request({
//   url: '/api/blade-auth/oauth/token',
//   method: 'post',
//   headers: {
//     'Tenant-Id': '000000',
//     ...header,
//   },
//   params: {
//     tenantId: '000000',
//     scope: "all",
//     type: 'account',
//     ...data,
//   },
//   meta,
// });

/*
  获取用户信息
*/
// export const getUserInfo = () => {
//   return request({
//     url: `/api/${config.apiRequestHead}/coin/member/getMemberInfo`,
//     method: 'get',
//   })
// }

/*
  获取验证码/绑定手机/邮箱

account	账号
accountType	账号类型
checkType	用途1.校验，2.修改账号
verificationCode	账号验证码
*/
export const accountVerificationBinding = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/accountVerificationBinding`,
    method: "POST",
    data,
  });
};

/*
  登录日志
*/
export const getLoginLogs = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/getLoginLog`,
    method: "get",
  });
};

/*
  设备记录
*/
export const getDeviceLogs = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/getLoginDevice`,
    method: "get",
  });
};

/*
  删除设备记录
*/
export const deleteDevice = (id) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/deleteDevice/${id}`,
    method: "post",
  });
};

/*
  修改密码
*/
export const updatePwd = (params) => {
  return request({
    url: `/api/blade-user/update-password`,
    method: "post",
    params,
  });
};

/*
  重置密码
*/
export const resetPwdApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/reset-password`,
    method: "post",
    data,
  });
};

/*
  免认证状态
*/
export const updateDeviceAulh = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/updateDevice`,
    method: "post",
    data,
  });
};

/*
  实名认证提交
*/
export const submitAuthentication = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/verified`,
    method: "post",
    data,
  });
};

/*
  获取认证信息
*/
export const getVerifiedInfo = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/getMemberOtherData/yhrzxx`,
    method: "get",
  });
};

/*
  获取后端生成唯一值
*/
export const getUUID = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getUUID`,
    method: "get",
  });
};

/*
  获取账号是否绑定某个认证
*/
export const getAuthentication = (account) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/getAuthentication?account=${account}`,
    method: "get",
  });
};

/*
  充值记录
*/
export const getRechargeLog = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getRechargeLog`,
    method: "POST",
    data: {
      ...data,
      type: "1",
    },
  });
};

/*
  提现记录
*/
export const getWithdrawalLog = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getWithdrawalLog`,
    method: "POST",
    data,
  });
};

/*
  谷歌验证码
*/
export const getGoogleVerification = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/getGoogleVerification/${type}`,
    method: "get",
  });
};

/*
  Google验证绑定-重置
*/
export const googleVerificationBindingOrReset = (code, type) => {
  return request({
    url: `/api/${
      config.apiRequestHead
    }/coin/member/googleVerificationBindingOrReset/${code}/${type || "2"}`,
    method: "get",
  });
};

/*
  资金密码绑定-重置
*/
export const setTradePwd = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/tradePwd`,
    method: "post",
    data,
  });
};

/*
  资金密码绑定-重置
*/
export const setAntiCode = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/antiCode`,
    method: "post",
    data,
  });
};

/*
  设置/删除 收款信息
*/
export const settingPayMent = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/payment`,
    method: "post",
    data,
  });
};

/*
  资产-钱包账户
*/
export const getWalletAccount = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getWalletAccount`,
    method: "get",
  });
};

/*
  资产-我的账单
*/
export const getMyBill = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getMyBill`,
    method: "POST",
    data,
  });
};

/*
  资产-币种金额
*/
export const getCurrencyAccount = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getCurrencyAccount`,
    method: "POST",
    data,
  });
};

/*
  资产-币种估值
*/
export const getCoinRate = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getCoinRate`,
    method: "get",
  });
};

/*
  设置收付款方式
*/

export const getPayment = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/getPayment`,
    method: "get",
  });
};

/*
  委托-委托记录
*/
export const getEntrustLogCurrency = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/entrust/getEntrustLogCurrency`,
    method: "POST",
    data,
  });
};

/*
获取所有现货交易对
*/
export const geyAllTransaction = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/transaction/xh/all`,
    method: "GET",
  });
};

/*
我的账单，u本位 币本位交易对
*/
export const getBillTransaction = (type, symbolName) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/transaction/${type}/${symbolName}`,
    method: "GET",
  });
};

/*
划转
*/
export const walletTrans = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/wallet/trans`,
    method: "GET",
    params,
  });
};

/*
划转-钱包余额
*/
export const getMyBalance = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getMyBalance?type=${type}`,
    method: "GET",
  });
};

/*
资产-充值-币
*/
export const getRechargeCurrency = () => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getRechargeCurrency`,
    method: "GET",
  });
};

/*
资产-充币地址
*/
export const getDepositAddress = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/assets/getDepositAddress/${type}`,
    method: "GET",
  });
};

/*
资产-提现
*/
export const withdrawalApi = (data) => {
  //加密
  data = crypto.encrypt(JSON.stringify(data));
  return request({
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    url: `/api/${config.apiRequestHead}/coin/assets/withdrawal`,
    method: "POST",
    data,
  });
};

/*
客服-发送聊天
*/
export const sendServiceChatApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/sendChatRecord`,
    method: "POST",
    data,
  });
};

/*
获取客服聊天数据
*/
export const getServeChatRecord = (data, orderId) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/buy/getChatRecord/${orderId}`,
    method: "POST",
    data,
  });
};

/*
查看做市商信息
*/
export const getZssApiInfoApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/apis`,
    method: "get",
    params,
  });
};

/*
  成为做市商
*/
export const becomeZssApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/api`,
    method: "POST",
    data,
  });
};

/*
  删除做市商
*/
export const delZssApi = (params) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/member/api/del`,
    method: "get",
    params,
  });
};
