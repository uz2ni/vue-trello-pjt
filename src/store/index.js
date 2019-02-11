import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 상태
    isAddBoard: false
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    }
  },
  actions: {
    ADD_BOARD(_, {title}) { // context안써서 _, title이라는 객체를 받음
        return api.board.create(title)
    }
  }
})

export default store
