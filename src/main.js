import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { routes } from './routes'


Vue.use(VueRouter)

Vue.prototype.$bus = new Vue({});

Vue.config.productionTip = false

export const bus = new Vue();

  const router = new VueRouter({
    mode: 'hash',
    base: "./",
    // base: process.env.BASE_URL,
    routes
  })

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app',)

export {vm}