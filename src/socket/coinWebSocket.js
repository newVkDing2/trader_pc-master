import { v4 as uuidv4 } from "uuid";
import PubSub from "pubsub-js";
import { socketDict } from "@/config/dict";
import config from "@/config/index";
export default class CoinWebSocket {
  url = "";
  /**
   * 已发送列表
   */
  hasSendList = [];
  /**
   * 等待发送列表
   */
  waitSendList = [];
  /**
   * socket 实例
   */
  ws = null;

  // 已连接
  WS_READY_STATE_OPEN = 1;

  constructor() {
    let baseUrl = config.socketUrl;
    this.url = `${baseUrl}/ws`;
    this.init();
  }

  init() {
    let url = `${this.url}/${uuidv4()}`;
    this.ws = new WebSocket(url);
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose;
    this.ws.onerror = this.onError;
    if (this.hasSendList.length) {
      this.hasSendList.forEach((text) => {
        if (!this.waitSendList.includes(text)) {
          this.waitSendList.push(text);
        }
      });
      this.hasSendList.length = 0;
    }
  }

  /**
   * 发送
   */
  send = (data) => {
    try {
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      data = JSON.stringify(data);
    } catch (error) {
      data = "";
    }

    if (data) {
      const isWsReady = this.ws?.readyState === this.WS_READY_STATE_OPEN;

      if (isWsReady) {
        this.ws.send(data);
        if (!this.hasSendList.includes(data)) {
          this.hasSendList.push(data);
        }
        this.waitSendList = this.waitSendList.filter((elem) => elem != data);
      } else {
        if (!this.waitSendList.includes(data)) {
          this.waitSendList.push(data);
        }
      }
    }
  };

  /**
   * 已连接
   */
  onOpen = () => {
    this.waitSendList.forEach((text) => this.send(text));
  };

  /**
   * 响应数据
   */
  onMessage = (e) => {
    let data = JSON.parse(e.data);
    if (
      [socketDict.DETAIL, socketDict.KLINE, socketDict.TRADE].includes(
        data.type
      )
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
