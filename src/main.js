import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
console.log('项目开始启动了');
new Vue({
  render: h => h(App),
}).$mount('#app')
