import Vue from 'vue'
import VueResource from 'vue-resource';
import store from './store/index'
import App from './App.vue'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.root = "https://api.trello.com/1/"

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
