import Vue from 'vue'
import VueTouch from 'vue-touch'
import Quasar from 'quasar'
import Router from './router'

// require('./themes/app.' + __THEME + '.styl')
require('quasar/dist/quasar.' + __THEME + '.css')
Quasar.theme.set(__THEME)

Vue.use(VueTouch)
Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  Router.start(Vue.extend({}), '#quasar-app')
})
