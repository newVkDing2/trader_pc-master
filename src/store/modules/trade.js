import { getCoinListApi, getMt5Amount } from '@/api/trade';
import { socketDict } from '@/config/dict';
import { _div, _sub, _mul, priceFormat, _toFixed } from '@/util/decimal';
import { _coinWebSocket } from '@/socket/index'

const trade = {
    state: {
        /**
         * 币种价格列表（所有）
        */
        allCoinPriceInfo: {},
        /**
          秒合约 币种列表
        */
        secondContractCoinList: [],
        /**
          币币 币种列表
        */
        spotCoinList: [],
        /**
         U本位 币种列表
       */
        contractCoinList: [],
        /**
        * 当前币种
        */
        currentCoinList: [],
        /**
        * 24小时成交
        */
        klineTicker: {}
    },
    mutations: {
        // 相当于 Vue 3 中的 setKlineTicker
        SET_KLINE_TICKER(state, klineTicker) {
            Vue.set(state, 'klineTicker', klineTicker);
        },
        SET_CURRENT_COIN_LIST(state, { val, type }) {
            if (type === 'remove') {
                state.currentCoinList = state.currentCoinList.filter(elem => elem !== val);
            } else if (!state.currentCoinList.includes(val)) {
                state.currentCoinList.push(val);
            }
        },
        SET_COIN_LISTS(state, { key, list }) {
            // 这里直接设置key对应的状态为list，不需要使用Vue.set
            state[key] = list;
        },
        UPDATE_ALL_COIN_PRICE_INFO(state, tempAllCoinPriceInfo) {
            state.allCoinPriceInfo = { ...state.allCoinPriceInfo, ...tempAllCoinPriceInfo };
        },
        UPDATE_COIN_INFO(state, { symbol, tempObj }) {
            if (!state.allCoinPriceInfo[symbol]) {
                // 如果该币种还没有任何信息，则先初始化为一个空对象
                Vue.set(state.allCoinPriceInfo, symbol, {});
            }

            Object.keys(tempObj).forEach(key => {
                // 为symbol对应的对象中的每个键更新或设置新值
                Vue.set(state.allCoinPriceInfo[symbol], key, tempObj[key]);
            });
        },
    },
    actions: {
        async getCoinList({ state, commit }) {
            try {
                const res = await getCoinListApi();
                let keyMap = {
                    coinList: 'secondContractCoinList',
                    currencyList: 'spotCoinList',
                    contractList: 'contractCoinList'
                };
                let tempAllCoinPriceInfo = {};

                commit('SET_COIN_LISTS', { key: 'secondContractCoinList', list: [] });
                commit('SET_COIN_LISTS', { key: 'spotCoinList', list: [] });
                commit('SET_COIN_LISTS', { key: 'contractCoinList', list: [] });

                for (const key in keyMap) {

                    if (Object.prototype.hasOwnProperty.call(res.data.data, key)) {
                        const tempList = res.data.data[key];

                        // 首先，在循环外初始化一个临时数组
                        const tempListArray = [];

                        tempList.forEach((elem) => {
                            elem.baseCoinUpperCase = elem.baseCoin.toUpperCase();
                            elem.coinUpperCase = elem.coin.toUpperCase();
                            // customizeFlag   1否 2是
                            elem.symbolUpperCase = elem.customizeFlag === 2 ? elem.showSymbol : elem.symbol.toUpperCase();
                            if (elem.market !== 'mt5') {
                                elem.coin = elem.coin.toLowerCase();
                            }
                            // 在这里不是commit，只是添加elem到数组中
                            tempListArray.push(elem);



                            let change = '0.00';
                            try {
                                if (elem.amount > 0 && elem.open > 0) {
                                    change = _toFixed(Math.abs(_mul(_div(_sub(elem.amount, elem.open), elem.open), 100)), 2);
                                }
                            } catch (error) { }

                            tempAllCoinPriceInfo[elem.coin] = {
                                close: priceFormat(elem.amount),
                                openPrice: priceFormat(elem.open),
                                change: change,
                                priceChangePercent: change
                                // volume24: '0.00',
                                // high24: '0.00',
                                // low24: '0.00'
                            };

                            // 国际黄金白银
                            if (elem.coinType === 3) {
                                getMt5Amount(elem.coin).then((res) => {
                                    if (res.data.code === '200') {
                                        tempObj['volume2'] = res.data;
                                    }
                                });
                            }
                        });
                        // 循环结束后，使用一次commit，把整个数组设置到对应的状态中
                        commit('SET_COIN_LISTS', { key: keyMap[key], list: tempListArray });
                    }
                }
                commit('UPDATE_ALL_COIN_PRICE_INFO', tempAllCoinPriceInfo);


                if (Object.keys(state.allCoinPriceInfo).length) {
                    // 当存在币种进行 socket 订阅
                    _coinWebSocket.send({
                        op: socketDict.subscribe,
                        type: socketDict.DETAIL
                    })

                    this.detailSubId = PubSub.subscribe(socketDict.DETAIL, function (key, data) {
                        // 处理接收到的数据
                        let tempData = data.data.tick || data.data

                        if (data.symbol === 'XAU') {
                            data.symbol = 'xau'
                        }
                        // detail 数据
                        let tempObj = {
                            open: priceFormat(tempData.open),
                            close: priceFormat(tempData.close),
                            low: tempData.low,
                            high: tempData.high,
                            volume: tempData.vol
                        }

                        // if (state.currentCoinList.includes(data.symbol) && data.origin != 'kline') {
                        //   console.log('detail', tempData, data)
                        //   return
                        // }

                        if (state.allCoinPriceInfo[data.symbol] && state.allCoinPriceInfo[data.symbol].volume2) {
                            tempObj.volume = state.allCoinPriceInfo[data.symbol].volume2
                            tempObj.volume24 = state.allCoinPriceInfo[data.symbol].volume2
                        }

                        // 当天开盘价
                        if (!data.origin && Number(tempObj.openPrice) <= 0) {
                            tempObj.openPrice = tempObj.open
                            // 提交mutation，传递币种symbol和要更新的数据
                            commit('UPDATE_COIN_INFO', { symbol: data.symbol, tempObj: { openPrice: tempObj.open } });
                        }

                        if (!['kline'].includes(data.origin)) {
                            tempObj.openPrice = tempObj.open
                            tempObj.volume24 = tempData.vol
                            tempObj.high24 = tempData.high
                            tempObj.low24 = tempData.low
                        }

                        if (tempObj.close > 0 && tempObj.open > 0) {
                            if (tempObj.openPrice) {
                                // 24小时change
                                let priceChangePercent = _toFixed(
                                    Math.abs(
                                        _mul(_div(_sub(tempObj.close, tempObj.openPrice), tempObj.openPrice), 100)
                                    ),
                                    2
                                )
                                tempObj.priceChangePercent =
                                    Math.abs(priceChangePercent) < 0.01 ? '0.01' : priceChangePercent
                                // console.log('24小时change', data.symbol, tempObj.open, tempObj.priceChangePercent)
                            }
                            // 实时change
                            let tempChange = _toFixed(
                                Math.abs(_mul(_div(_sub(tempObj.close, tempObj.open), tempObj.open), 100)),
                                2
                            )
                            tempObj.change = Math.abs(tempChange) < 0.01 ? '0.01' : tempChange
                            if (state.allCoinPriceInfo[data.symbol]) {
                                commit('UPDATE_COIN_INFO', { symbol: data.symbol, tempObj });
                                // console.log("更新数据...........");
                                // for (const key in tempObj) {
                                //     // 直接调用mutation更新数据
                                //     commit('UPDATE_COIN_INFO', { symbol: data.symbol, tempObj });
                                // }
                            }
                        }
                    })
                }
            } catch (error) {
                // 处理错误
            }
        }
    },
};

export default trade