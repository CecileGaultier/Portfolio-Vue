// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Import de Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
// Import des styles de boostrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import de vue-moment
import VueMoment from 'vue-moment'

//Import Open street Map Leaflet 
import { Icon } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

//Import threejs
// import VueThreejs from 'vue-threejs'


Vue.use(VueAxios, axios)

// Utilisation de Bootstrap-vue
Vue.use(BootstrapVue);

// Utilisation de moment-vue
Vue.use(VueMoment);

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
