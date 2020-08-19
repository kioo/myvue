import Vue from 'vue'
import App from './App'
import router from './router' // 1. 引入 index.js 文件（vue 会自动找该文件夹下的路由文件）

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // 2. 将引入的 router 放到 vue 的属性中
  components: { App },
  template: '<App/>'
})
