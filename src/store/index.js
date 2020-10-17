import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
// import {
//   resolve,
//   reject
// } from 'core-js/fn/promise'

export default new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCount(state, payload) {
      payload.count.oldProduct.num += payload.count.payload.num
    },
    addToCar(state, payload) {
      state.carList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.carList.find(item => item.id === payload.id)

        if (oldProduct) {
          context.commit({
            type: 'addCount',
            count: {
              oldProduct,
              payload
            }
          })
          resolve('购物车已拥有')
        } else {
          context.commit('addToCar', payload)
          resolve('添加成功')
        }
      })

    }
  },
  modules: {},
  getters
})
