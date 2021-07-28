import Vue from 'vue';
import VFormbase from 'vuetify-form-base';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.component('VFormbase', VFormbase);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
