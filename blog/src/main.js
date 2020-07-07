// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

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
