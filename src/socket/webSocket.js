import { socketDict } from "@/config/dict";
import PubSub from "pubsub-js";
import config from "@/config/index";
export default class ClientWebSocket {
  // ws 最终链接
  url = "";

  /**
   * socket 实例
   */
  ws = null;

  // 已连接
  WS_READY_STATE_OPEN = 1;

  constructor(userId) {
    // 初始化
    let baseUrl = config.socketUrl;
    this.url = `${baseUrl}/ws/coin/${userId}`;
    this.init();
  }

  // 初始化socket
  init() {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose;
    this.ws.onerror = this.onError;
  }

  /**
   * 发送
   */
  send = (data) => {
    if (typeof data === "string") {
      this.ws.send(data);
    }
  };

  /**
   * 已连接
   */
  onOpen = () => {};

  /**
   * 响应数据
   */
  onMessage = (e) => {
    console.log("响应数据", e.data);
    let data = JSON.parse(e.data);
    if ([socketDict.HEARTBEAT].includes(data.type)) {
      this.send("ping");
    } else if (
      [
        socketDict.USER_STATUS,
        socketDict.SETTLEMENT,
        socketDict.POSITION,
        socketDict.OWNCOIN,
      ].includes(data.type)
    ) {
      PubSub.publish(data.type, data);
    }
  };

  /**
   * 关闭
   */
  close = () => {
    this.ws?.close();
  };

  /**
   * 连接异常
   */
  onError = () => {
    this.reconnect();
  };

  /**
   * 连接关闭
   */
  onClose = () => {};

  /**
   * 重新连接
   */
  reconnect = () => {
    setTimeout(this.init.apply(this), 3 * 1000);
  };
}
