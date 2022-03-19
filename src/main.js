import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    getImgUrl(pic) {
        return require("./assets/" + pic); //globalna funkcija potrebna u vise komponenti, dohvaćanje slike iz state-a//
    }
  }   
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
