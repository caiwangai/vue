// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new 第三方担惊受恐几点开始*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
