import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from './components/login.vue'
import Dashboard from './components/dashboard.vue'

Vue.use(Router)

const routes = [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' }
  ]

export default new Router({
    mode:'history',
    routes
  })
