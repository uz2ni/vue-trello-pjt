import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 상태
    isAddBoard: false
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    }
  }
})

export default store
