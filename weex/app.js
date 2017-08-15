import foo from './src/foo.vue'
import App from './src/App1.vue'

import router from './src/router'

App.el = '#root'
App.router=router;
export default new Vue(App);
// new Vue({
//     el: '#root',
//     router,
//     template: '<App/>',
//     components: { App }
// })
