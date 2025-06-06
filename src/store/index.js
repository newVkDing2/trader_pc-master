import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import trade from './modules/trade'
// console.log("trade===>", trade);

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    common,
    trade
  },
  getters,
})
