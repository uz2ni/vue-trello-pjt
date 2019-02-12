import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 상태
    isAddBoard: false,
    boards: [], // 보드 목록
    token: null // 인증 토큰
  },
  getters: { // getter는 isAuth 함수지만 변수처럼 사용 가능
    isAuth (state) { // 로그인여부확인
      return !!state.token
    }
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS (state, boards) {
      state.boards = boards
    },
    LOGIN (state, token) {
      if(!token) return
      state.token = token
      localStorage.setItem('token', token)
      api.setAuthInHeader(token)
    },
    LOGOUT (state) {
      state.token = null
      delete localStorage.token
      api.setAuthInHeader(null)
    }
  },
  actions: {
    ADD_BOARD(_, {title}) { // context안써서 _, title이라는 객체를 받음
        return api.board.create(title)
    },
    FETCH_BOARDS ({commit}) {
      return api.board.fetch().then(data => {
        commit('SET_BOARDS', data.list)
      })
    },
    LOGIN ({commit}, {email, password}) {
      return api.auth.login(email, password) //promise 호출
      .then(({accessToken}) => commit('LOGIN', accessToken))
    }
  }
})

// 브라우저 오픈했을 때 token정보 받고 있으면 로그인 처리 함
const { token } = localStorage
store.commit('LOGIN', token)

export default store
