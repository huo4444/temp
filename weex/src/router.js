/**
 * Created by Administrator on 2017/8/15 0015.
 */
import Router from 'vue-router'
import foo from './foo.vue'
let foo2=()=>import(/* webpackChunkName: "foo2" */ './foo2.vue');

import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: foo
        },
        {
            path: '/Hello1',
            name: 'Hello1',
            component: foo2
        }
    ]
})