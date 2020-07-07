// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment'

library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.moment = moment
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    formatDate: function (d) {
      return moment(new Date(d)).format('MM/DD/yyyy') + ' ' + moment(new Date(d)).format('h:mm A')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
