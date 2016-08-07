import Vue from 'vue'
import VueTouch from 'vue-touch'
import Quasar from 'quasar'
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import Router from './router'

Vue.use(VueTouch)
Vue.use(Quasar) // Install Quasar Framework

// require('./themes/app.' + __THEME + '.styl')
require('quasar/dist/quasar.' + __THEME + '.css')

Quasar.theme.set(__THEME)
Quasar.start(() => {
  Router.start(Vue.extend({}), '#quasar-app')
})
