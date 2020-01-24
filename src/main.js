import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

// load prism somewhere
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// vue-prism-editor dependency
import 'vue-prism-editor/dist/VuePrismEditor.css'
import 'prismjs/components/prism-ruby.min'
import 'prismjs/components/prism-java.min'
import 'prismjs/components/prism-c.min'

Vue.config.productionTip = false

const token = localStorage.getItem('token')

if (token) {
  axios.defaults.headers.common['AUTHORIZATION'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
