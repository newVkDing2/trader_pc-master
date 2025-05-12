import CoinWebSocket from './coinWebSocket.js'
// import ClientWebSocket from './webSocket.js'
import ClientWebSocket from './webSocket.js'
export let _coinWebSocket = null
/**
 * 初始化 CoinWebSocket
 * 币币
 */
export const _initCoinWebSocket = () => {
    if (!_coinWebSocket) {
        _coinWebSocket = new CoinWebSocket()
    }
}

export let _WebSocket = null
/**
 * 初始化 _WebSocket
 * 消息通知
 */
export const initWebSocket = (userId) => {
    if (!_WebSocket && userId) {
        _WebSocket = new ClientWebSocket(userId)
    }
}
