import { _mul, _sub } from "@/util/decimal";

// 历史委托中的盈亏
// betAmount > rewardAmount    -(betAmount - rewardAmount)
// betAmount = rewardAmount    0.00
// betAmount < rewardAmount   + (rewardAmount - betAmount)
export const profitAndloss = (betAmount, rewardAmount) => {
  if (betAmount > rewardAmount) {
    return "-" + _sub(betAmount, rewardAmount);
  }
  if (betAmount === rewardAmount) {
    return 0;
  }
  if (betAmount < rewardAmount) {
    return "+" + _sub(rewardAmount, betAmount);
  }
};

// 历史委托中的盈亏颜色
export const profitAndlossColor = (betAmount, rewardAmount) => {
  if (betAmount > rewardAmount) {
    return "fall";
  }
  if (betAmount === rewardAmount) {
    return "";
  }
  if (betAmount < rewardAmount) {
    return "rise";
  }
};

/**
 *
 * @param {*} num
 * @returns 倒计时 00:00:00
 */
export const formatTime = (num) => {
  num = Math.round(Number(num));
  const hours = Math.floor(num / 3600);
  const minutes = Math.floor((num - hours * 3600) / 60);
  const seconds = num - hours * 3600 - minutes * 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

/**
 * 
 * @param {*} flag 看涨/看跌
 * @param {*} buyPrice 买的时候的价钱
 * @param {*} latestPrice 最新的价钱
 * @param {*} quantity 买的数量
 * @param {*} odds 利率
 * @returns 计算看涨/看跌的预计盈利
 * 
 * 看涨  openPrice  > close  - quantity * cycleObj.odds   
openPrice  < close  + quantity * cycleObj.odds   
看跌 openPrice  > close    + quantity * cycleObj.odd
看跌 openPrice  < close    -quantity * cycleObj.odd
 */
export const formatExpectedProfit = (
  flag,
  buyPrice,
  latestPrice,
  quantity,
  odds,
  rateFlag
) => {
  buyPrice = Number(buyPrice);
  latestPrice = Number(latestPrice);
  quantity = Number(quantity);
  const price = _mul(quantity, odds);
  if (rateFlag) {
    if (flag) {
      if (buyPrice > latestPrice) {
        return "-" + quantity;
      }
      if (buyPrice === latestPrice) {
        return "0.00";
      }
      if (buyPrice < latestPrice) {
        return "+" + price;
      }
    } else {
      if (buyPrice > latestPrice) {
        return "+" + price;
      }
      if (buyPrice === latestPrice) {
        return "0.00";
      }
      if (buyPrice < latestPrice) {
        return "-" + quantity;
      }
    }
  } else {
    if (flag) {
      if (buyPrice > latestPrice) {
        return "-" + price;
      }
      if (buyPrice === latestPrice) {
        return "0.00";
      }
      if (buyPrice < latestPrice) {
        return "+" + price;
      }
    } else {
      if (buyPrice > latestPrice) {
        return "+" + price;
      }
      if (buyPrice === latestPrice) {
        return "0.00";
      }
      if (buyPrice < latestPrice) {
        return "-" + price;
      }
    }
  }
};
//hightDown 红色 hightUp 蓝色
/**
 *
 * @param {*} flag 看涨/看跌
 * @param {*} buyPrice 买的时候的价钱
 * @param {*} latestPrice 最新的价钱
 * @returns 计算看涨/看跌的预计盈利的颜色hightDown 红色 hightUp 蓝色
 */
export const formatExpectedProfitColor = (flag, buyPrice, latestPrice) => {
  buyPrice = Number(buyPrice);
  latestPrice = Number(latestPrice);
  if (flag) {
    if (buyPrice > latestPrice) {
      return "fall";
    }
    if (buyPrice === latestPrice) {
      return "";
    }
    if (buyPrice < latestPrice) {
      return "rise";
    }
  } else {
    if (buyPrice > latestPrice) {
      return "fall";
    }
    if (buyPrice === latestPrice) {
      return "";
    }
    if (buyPrice < latestPrice) {
      return "rise";
    }
  }
};
