import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
export default new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = state.carList.find(item => item.id === payload.id)
      // let oldProduct = null
      // for (let item of state.carList) {
      //   if (item.id === payload.id) {
      //     oldProduct = item
      //   }
      // }

      if (oldProduct) {
        oldProduct.num += payload.num
      } else {
        state.carList.push(payload)
      }
    }

  },
  actions: {},
  modules: {},
  getters
})
