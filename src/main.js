import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'


import 'material-icons/iconfont/material-icons.css';


import vuetify from './plugins/vuetify';


Vue.use(Vuesax)

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

import axios from 'axios';

Vue.use(axios)


// login & register import './service/axios'
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')