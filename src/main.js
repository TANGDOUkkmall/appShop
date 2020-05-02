import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//
import FastClick from 'fastclick'

if('addEventListener in document'){
  document.addEventListener('DOMContentLoaded',function(){
    FastClick.attach(document.body);
  },false)
}
import '@/style/common.less'
// 引入
import '@/plugins/vant'
import '@/config/rem.js'
import './config/filter'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
