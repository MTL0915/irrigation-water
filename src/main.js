import Vue from 'vue'
import App from './App.vue'
import './assets/css/font.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //为了让$bus有Vue原型对象prototype上的$on、$emit、$off等，所以让它等于this，即指向vm
  }
}).$mount('#app')
