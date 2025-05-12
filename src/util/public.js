import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// 加载插件
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 截取字符串到指定长度，并在末尾追加省略号（...）如果字符串超出该长度。
 *
 * @param {number} maxLength - 允许显示的最大长度。
 * @param {string} str - 要处理的字符串。
 * @returns {string} - 处理后的字符串，如果超出长度则结尾追加省略号。
 */
export const truncateString = (maxLength, str) => {
  if (typeof str !== "string") {
    throw new TypeError("第二个参数必须是字符串");
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    throw new TypeError("第一个参数必须是非负整数");
  }

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
};

/**
 * 买涨买跌 规则
 * @param {*} open 开盘价
 * @param {*} close 关盘价
 * @param {*} direction 方向 buy 买(默认) sell 卖
 * @param {*} default 默认
 * @returns rise 涨 fall 跌 draw 平
 */
export const _isRFD = (open, close, direction = "buy", def = "draw") => {
  let tempVal = "";
  open = Number(open);
  close = Number(close);
  if (isNaN(open) || isNaN(close)) {
    return "draw";
  }
  if (open < close) {
    // buy 涨 sell 跌D
    if (direction == "buy") {
      tempVal = "rise";
    } else if (direction == "sell") {
      tempVal = "fall";
    }
  } else if (open > close) {
    // buy 跌 sell 涨
    if (direction == "buy") {
      tempVal = "fall";
    } else if (direction == "sell") {
      tempVal = "rise";
    }
  } else if (open == close) {
    // buy sell 平
    tempVal = def;
  }

  return tempVal;
};

/**
 * 涨跌 规则
 * @param {*} price 价格
 * @param {*} direction 方向 buy 买(默认) sell 卖
 * @param {*} default 默认
 * @returns rise 涨 fall 跌 draw 平
 */
export const _isRFDE = (price, direction = "buy", def = "draw") => {
  let tempVal = "";
  price = Number(price);
  if (0 < price) {
    // buy 涨 sell 跌D
    if (direction == "buy") {
      tempVal = "rise";
    } else if (direction == "sell") {
      tempVal = "fall";
    }
  } else if (0 > price) {
    // buy 跌 sell 涨
    if (direction == "buy") {
      tempVal = "fall";
    } else if (direction == "sell") {
      tempVal = "rise";
    }
  } else if (0 == price) {
    // buy sell 平
    tempVal = def;
  }

  return tempVal;
};

/**
 * 数据处理1
 *  usdt->usdt
 *  btc->btcusdt
 */
export const filterCoin = (item) => {
  item = item.toLocaleLowerCase();
  if (item == "usdt") {
    return item;
  } else {
    return item + "usdt";
  }
};
/**
 * 数据处理2
 *  usdt->usdt
 *  btcusdt->btc
 */
export const filterCoin2 = (item) => {
  item = item.toLocaleLowerCase();
  if (item == "usdt") {
    return item;
  } else {
    return item.replace("usdt", "").trim();
  }
};
/**
 * 充值币种处理
 * rechargeBtc->BTC
 * rechargeUsdtTrc->USDT-TRC
 */
export const filterRechargeToAddress = (item) => {
  item = item.toLocaleLowerCase();
  if (item.includes("rechargeusdt")) {
    return item.replace("rechargeusdt", "usdt-").trim().toLocaleUpperCase();
  } else if (item.includes("recharge")) {
    return item.replace("recharge", "").trim().toLocaleUpperCase();
  } else {
    return item.toLocaleUpperCase();
  }
};

export const formatTimestampWithTimezone = (
  time,
  expression = "",
  flag = false,
  timezone = "Asia/Shanghai"
) => {
  let tempExpression = "MM/DD/YYYY";
  if (flag) {
    tempExpression = expression || tempExpression;
  } else {
    tempExpression = tempExpression + ` ${expression || "HH:mm:ss"}`;
  }
  // if (['bitmake'].includes(__config._APP_ENV)) {
  //   tempExpression = tempExpression.replace('YYYY', 'BBBB')
  // }
  // if (PLATFORM_12HOURFORMAT.includes(__config._APP_ENV)) {
  //   tempExpression = tempExpression.replace('HH:mm', 'hh:mm')
  //   tempExpression += ' a'
  // }
  return dayjs(time).tz(timezone).format(tempExpression);
};
