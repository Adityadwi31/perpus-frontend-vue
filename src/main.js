import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import store from './store'

Vue.config.productionTip = false

Vue.component('navbar-component', require('./components/template/VueNavbar.vue').default);
Vue.component('sidebar-component', require('./components/template/VueSidebar.vue').default);

new Vue({
  router,
  store,

  // store,
  render: h => h(App)
}).$mount('#app')

