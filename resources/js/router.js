import Vue from 'vue'
import Router from 'vue-router'

const Foo = { template: "<v-alert type='error'>I'm Foo Component</v-alert>" }
const Bar = { template: "<v-alert type='error'>I'm Bar Component</v-alert>" }
const User = { template: "<v-alert type='info'>I'm {{ $route.params.name }}</v-alert>" }

Vue.use(Router)

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:name', component: User }
  ]

export default new Router({
    mode:'history',
    routes
  })
