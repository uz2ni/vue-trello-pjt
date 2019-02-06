import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../Components/Home.vue'
import Login from '../Components/Login.vue'
import Board from '../Components/Board.vue'
import Card from '../Components/Card.vue'
import NotFound from '../Components/NotFound.vue'


Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token');
  const loginPath = `/login?Path = ${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
      { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
    ] },
    { path: '*', component: NotFound }
  ]
})

export default router
