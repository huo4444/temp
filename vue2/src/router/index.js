import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Hello1 from '@/components/Hello1'

let Hello1= ()=> import(/* webpackChunkName: "Hello1" */ '@/components/Hello1');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello1',
      name: 'Hello1',
      component: Hello1
    }
  ]
})
