// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

//import Vue I18n
import VueI18n from 'vue-i18n'


// Import de Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
// Import des style de boostrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import de vue-moment
import VueMoment from 'vue-moment'

Vue.use(VueAxios, axios)

Vue.use(VueI18n)

// Utilisation de Bootstrap-vue
Vue.use(BootstrapVue);

// Utilisation de moment-vue
Vue.use(VueMoment);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
