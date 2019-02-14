const getters = { // getter는 isAuth 함수지만 변수처럼 사용 가능
  isAuth (state) { // 로그인여부확인
    return !!state.token
  }
}

export default getters
