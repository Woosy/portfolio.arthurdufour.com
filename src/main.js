import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
// import './assets/vendor/nucleo/css/nucleo.css'
// import './assets/vendor/font-awesome/css/font-awesome.css'
// import './assets/scss/argon.scss'

Vue.config.productionTip = true

Vue.use(Argon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
