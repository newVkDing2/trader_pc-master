/**
 *  socket key
 */
const getSocketDict = () => {
    // kLine部分
    let kLineTempList = [
      'subscribe',
      'unsubscribe',
      'DETAIL',
      'KLINE',
      'TRADE',
      'HEARTBEAT',
      'SETTLEMENT',
      'POSITION',
      'USER_STATUS',
      'OWNCOIN'
    ]
  
    let tempList = [...kLineTempList]
    let tempSocketDict = {}
    tempList.forEach((key) => {
      tempSocketDict[key] = key
    })
    Object.freeze(tempSocketDict)
    return tempSocketDict
  }
  /**
   * socket 字典
   */
  export const socketDict = getSocketDict()