import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNUTHRIZED = 401
const onUnauthrozied = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNUTHRIZED) return onUnauthrozied()
      throw Error(result)
    })
}

// header값 넣는 작업
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

const {token} = localStorage
if (token) setAuthInHeader(token)

export const board = {
  fetch() {
    return request('get', '/boards')
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}
