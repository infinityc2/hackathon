import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login'
import Register from './components/Register'
import Menu from './components/Menu'
import Authorize from './components/Authorize'
import Guarantee from './components/Guarantee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/menu',
      component: Menu,
      children: [
        {
          path: '',
          redirect: 'authorize'
        },
        {
          path: 'guarantee',
          component: Guarantee
        },
        {
          path: 'authorize',
          component: Authorize
        }
      ]
    }
  ]
})
