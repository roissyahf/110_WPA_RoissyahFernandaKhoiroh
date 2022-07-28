import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

createApp(App).use(router).mount('#app')
