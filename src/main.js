import Vue from 'vue'
import router from './router'
import App from './App.vue'

// 루트 컴포넌트 (Vue 인스턴스)
new Vue({
  el: '#app',
  router,
  render: h => h(App) // App 컴포넌트를 부른다.
})
