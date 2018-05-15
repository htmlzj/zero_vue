// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './dist/css/index.css'
import './dist/bootstrap/css/bootstrap.css'
// import $ from 'jquery'
import './dist/bootstrap/js/bootstrap.min'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
