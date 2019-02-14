import * as api from '../api'

const actions = {
  ADD_BOARD(_, {title}) { // context안써서 _, title이라는 객체를 받음
      return api.board.create(title).then(data => data.item)
  },
  // board list 보여줌
  FETCH_BOARDS ({commit}) {
    return api.board.fetch().then(data => {
      commit('SET_BOARDS', data.list)
    })
  },
  LOGIN ({commit}, {email, password}) {
    return api.auth.login(email, password) //promise 호출
    .then(({accessToken}) => commit('LOGIN', accessToken))
  },
  // board item 보여줌
  FETCH_BOARD ({commit}, {id}) {
    return api.board.fetch(id).then(data => commit('SET_BOARD', data.item))
  }
}

export default actions
