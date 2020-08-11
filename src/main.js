import Vue from 'vue'
import App from './App.vue'
import lwqUi from './packages/index'

Vue.use(lwqUi)  // 作用是自动调用install,执行逻辑
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
