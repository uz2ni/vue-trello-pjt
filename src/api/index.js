import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNUTHRIZED = 401
const NOTFOUND = 404
const onUnauthrozied = () => {
  router.push('/login')
}
const onNotfound = () => router.push('/') // 404

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNUTHRIZED) return onUnauthrozied()
      else if (status === NOTFOUND) return onNotfound()
      throw Error(result)
    })
}

// header값 넣는 작업
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const board = {
  fetch(id) {
    return id ? request('get', `/boards/${id}`) : request('get', '/boards')
  },
  // add board api
  create(title) {
    return request('post', '/boards', {title})
  },
  // delete boards
  destroy(id) {
    return request('delete', `/boards/${id}`)
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}

export const card = {
  create(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  fetch(id) {
    return request('get', `/cards/${id}`)
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  },
  destroy(id) {
    return request('delete', `/cards/${id}`)
  }
}
