import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Welcome from './components/welcome.vue'
import Login from './components/login.vue'
import Dashboard from './components/dashboard.vue'
import Roles from './components/roles.vue'

Vue.use(Router)

const routes = [
    { path: '/', component: Welcome, name: 'Welcome' },
    { path: '/login', component: Login, name: 'Login' },

    { path: '/dashboard', component: Dashboard, name: 'Dashboard',
    children: [
        { path: 'userroles', component: Roles, name: 'Roles' },
    ],

    // beforeEnter: (to, from, next) => {
    //     if(localStorage.getItem('token')){
    //         next();
    //     }else{
    //         next('/login');
    //     }
    //   }
    }
  ]

const router = new Router({routes})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token') || null
    window.axios.defaults.headers['Authorization'] = 'Bearer ' + token;
    next();
  })

export default new Router({
    mode:'history',
    routes,
    router
  })
