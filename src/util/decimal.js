import Decimal from 'decimal.js'

/**
 * 加
 */
export const _add = (a, b) => {
  if (!`${a}` || !`${b}`) {
    return 0
  }
  return Decimal(a).add(Decimal(b)).toNumber()
}
/**
 * 减
 */
export const _sub = (a, b) => {
  if (!`${a}` || !`${b}`) {
    return 0
  }
  return Decimal(a).sub(Decimal(b)).toNumber()
}
/**
 * 乘
 */
export const _mul = (a, b) => {
  if (!`${a}` || !`${b}`) {
    return 0
  }
  return Decimal(a).mul(Decimal(b)).toNumber()
}
/**
 * 除
 */
export const _div = (a, b) => {
  if (!`${a}` || !`${b}`) {
    return 0
  }
  return Decimal(a).div(Decimal(b)).toNumber()
}
/**
 * 保留*位数
 */
export const _toPrecision = (a, b) => {
  if (!`${a}`) {
    return '0.00'
  }
  return Decimal(a).toPrecision(b)
}
/**
 * 保留*位数
 */
export const _toFixed = (a, b = 4, round = 'down') => {
  if (!`${a}` || !`${b}`) {
    return 0
  }
  let tempRound = ''
  if (round == 'up') {
    tempRound = Decimal.ROUND_UP
  } else {
    tempRound = Decimal.ROUND_DOWN
  }
  return Decimal(a).toFixed(b, tempRound)
}

/**
 * 科学计数法2小数
 * @param {*} val
 * @returns
 */
export const _SN2D = (val) => {
  const e = String(val)
  let rex = /^([0-9])\.?([0-9]*)e-([0-9]*)/
  if (!rex.test(e)) return val
  const numArr = e.match(rex)
  const n = Number('' + numArr[1] + (numArr[2] || ''))
  const num = '0.' + String(Math.pow(10, Number(numArr[3]) - 1)).substring(1) + n
  return num.replace(/0*$/, '')
}
/**
 * 数量格式化
 * @param {*} val
 * @returns
 */
export const countFormat = (val) => {
  if (!val) {
    return 0
  }
  let temp = 0
  // 数量
  if (val > 1000000000000) {
    // T 1兆
    temp = `${_toFixed(_div(val, 1000000000000), 2)}T`
  } else if (val > 1000000000) {
    // B 十亿
    temp = `${_toFixed(_div(val, 1000000000), 2)}B`
  } else if (val > 1000000) {
    // M 百万
    temp = `${_toFixed(_div(val, 1000000), 2)}M`
  } else if (val > 1000) {
    // M 千
    temp = `${_toFixed(_div(val, 1000), 2)}K`
  } else if (val > 100) {
    temp = _toFixed(val, 2)
  } else if (val < 0.00001) {
    temp = _toPrecision(val, 6)
  } else if (val < 0.0001) {
    temp = _toPrecision(val, 5)
  } else if (val < 0.001) {
    temp = _toPrecision(val, 4)
  } else {
    temp = _toFixed(val, 4)
  }
  if (`${temp}`.indexOf('e') > -1) {
    temp = _SN2D(temp)
  }
  return temp
}

/**
 * 价格格式化
 * @param {*} val
 * @returns
 */
export const priceFormat = (val, num = 0) => {
  if (!val) {
    return '0.00'
  }
  let temp = 0

  if (num) {
    temp = _toFixed(val, num)
  } else {
    // 金额
    if (val < 0.00001) {
      temp = _toPrecision(val, 6)
    } else if (val < 0.0001) {
      temp = _toPrecision(val, 4)
    } else if (val < 0.001) {
      temp = _toPrecision(val, 2)
    } else if (val < 10) {
      temp = _toFixed(val, 6)
    } else if (val < 100) {
      temp = _toFixed(val, 4)
    } else {
      temp = _toFixed(val, 2)
    }
  }

  // 检测计算值
  if (`${temp}`.indexOf('e') > -1) {
    temp = _SN2D(`${temp}`)
  }
  return temp
}

/**
 * 国际货币计量单位 格式化
 */
export const currencyFormat = (val, num) => {
  if (!val) {
    return 0
  }
  let temp = 0
  if (num) {
    temp = _toFixed(val, num)
  } else {
    if (val > 1000000000) {
      temp = _div(val, 1000000000).toFixed(2)
      temp += ' B'
    } else if (val > 1000000) {
      temp = _div(val, 1000000).toFixed(2)
      temp += ' M'
    } else if (val > 1000) {
      temp = _div(val, 1000).toFixed(2)
      temp += ' K'
    } else {
      temp = _div(val, 1000).toFixed(4)
    }
  }
  if (temp.indexOf('e') && val < 1000) {
    return _SN2D(temp)
  } else {
    return temp
  }
}

/**
 * 保留2位小数
 */
export const _toFixed2 = (num) => {
  return _toFixed(num, 2)
}
