import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import msToMm from '@/filters/ms-to-mm'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)

const router = new VueRouter({ routes, mode: 'history' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
