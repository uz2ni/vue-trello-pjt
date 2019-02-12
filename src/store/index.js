import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 브라우저 오픈했을 때 token정보 받고 있으면 로그인 처리 함
const { token } = localStorage
store.commit('LOGIN', token)

export default store
