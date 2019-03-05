import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueLazyload from 'vue-lazyload'
import './styles/reset.sass'

Vue.use(VueLazyload, {
  loading: require('./assets/微信图片_20190305111641.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
