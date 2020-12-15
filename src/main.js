import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端300ms延迟点击
import FastClick from 'fastclick'

// 图片懒加载
import LazyLoad from 'vue-lazyload'
// 自定义插件
import toast from './components/common/toast'

import './assets/icon/iconfont.css'
Vue.use(toast)

FastClick.attach(document.body)

Vue.use(LazyLoad, {
  // loading: require('./assets/img/common/imgload.png')
})


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
