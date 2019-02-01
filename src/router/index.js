import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../Components/Home.vue'
import Login from '../Components/Login.vue'
import Board from '../Components/Board.vue'
import Card from '../Components/Card.vue'
import NotFound from '../Components/NotFound.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, children: [
      { path: 'c/:cid', component: Card }
    ] },
    { path: '*', component: NotFound }
  ]
})

export default router
