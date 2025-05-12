/*
  全局配置文件
*/
export default {
  key: "coin_web", //用于存储
  // apiRequestHead: 'mjkj-web',
  apiRequestHead: "mjkj-web",
  langHeader: "mj-lang",
  tokenTime: 604800, //一个星期
  cookieTime: 7, //一个星期
  tokenHeader: "Blade-Auth",
  clientId: "saber", // 客户端id
  clientSecret: "saber_secret", // 客户端密钥
  mqttUserName: "admin", // rabbitmq连接用户名
  mqttPassword: "password", // rabbitmq连接密码
  mqttMy:
    process.env.NODE_ENV === "production"
      ? "mqtts://message.baiyiex.com/ws"
      : "mqtts://message.baiyiex.com/ws", // mica-mqtt服务地址
  //白名单
  statusWhiteList: [],
  descriptionWhiteList: ["步骤1登录成功"],

  exchangeTime: 1000 * 60 * 5, //更新汇率时间
  /**
   * 开发服
   * baseUrl: 'https://webapi.moex.com.pl',//接口请求头部
   * socketUrl: 'wss://webapi.moex.com.pl',//socket请求头部
   *
   * 正式服
   * baseUrl: 'https://webapi.moex.lol',//接口请求头部
   * socketUrl: 'wss://webapi.moex.lol',//socket请求头部
   */
  // baseUrl: "https://webapi.moex.com.pl",
  // socketUrl: "wss://webapi.moex.com.pl",

  // baseUrl: "https://webapi.moex.lol",
  // socketUrl: "wss://webapi.moex.lol",

  baseUrl: "https://webapi.coincheckusa.com",
  socketUrl: "wss://webapi.coincheckusa.com",

  //时区字典
  TIMEZONE_DICT: [
    { timezone: "Etc/UTC-12", offset: -12 }, // 对应国际日期变更线
    { timezone: "Etc/GMT", offset: 0 }, // 对应UTC
    { timezone: "Pacific/Midway", offset: -11 },
    { timezone: "Pacific/Honolulu", offset: -10 },
    { timezone: "Pacific/Marquesas", offset: -9.3 },
    { timezone: "America/Anchorage", offset: -9 },

    { timezone: "America/Vancouver", offset: -8 },
    { timezone: "America/Phoenix", offset: -7 },
    { timezone: "America/Chicago", offset: -6 },
    { timezone: "America/New_York", offset: -5 },
    { timezone: "America/Anguilla", offset: -4 },
    { timezone: "America/St_Johns", offset: -3.3 },
    { timezone: "America/Sao_Paulo", offset: -3 },
    { timezone: "America/Noronha", offset: -2 },
    { timezone: "America/Scoresbysund", offset: -1 },
    { timezone: "Europe/London", offset: 1 },
    { timezone: "Europe/Berlin", offset: 2 },
    { timezone: "Europe/Moscow", offset: 3 },
    { timezone: "Asia/Tehran", offset: 3.3 },
    { timezone: "Asia/Dubai", offset: 4 },
    { timezone: "Asia/Kabul", offset: 4.3 },
    { timezone: "Asia/Aqtau", offset: 5 },
    { timezone: "Asia/Kolkata", offset: 5.3 },
    { timezone: "Asia/Kathmandu", offset: 5.45 },
    { timezone: "Asia/Almaty", offset: 6 },
    { timezone: "Asia/Yangon", offset: 6.3 },
    { timezone: "Asia/Bangkok", offset: 7 },
    { timezone: "Asia/Hong_Kong", offset: 8 },
    { timezone: "Australia/Eucla", offset: 8.45 },
    { timezone: "Asia/Tokyo", offset: 9 },
    { timezone: "Australia/Adelaide", offset: 9.3 },
    { timezone: "Australia/Sydney", offset: 10 },
    { timezone: "Australia/Lord_Howe", offset: 10.3 },
    { timezone: "Asia/Magadan", offset: 11 },
    { timezone: "Pacific/Auckland", offset: 12 },
    { timezone: "Pacific/Chatham", offset: 12.45 },
    { timezone: "Pacific/Fakaofo", offset: 13 },
    { timezone: "Pacific/Kiritimati", offset: 14 },
  ],
};
