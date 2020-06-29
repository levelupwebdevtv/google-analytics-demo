import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGtag from "vue-gtag"

Vue.use(VueGtag, {
  config: { id: "UA-171156927-1" }
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
