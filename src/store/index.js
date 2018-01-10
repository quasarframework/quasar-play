import Vue from 'vue'
import Vuex from 'vuex'

import showcase from './modules/showcase'
import layoutDemo from './modules/layoutDemo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    showcase,
    layoutDemo
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./modules/showcase'], () => {
    const newShowcase = require('./modules/showcase').default
    store.hotUpdate({
      modules: {
        showcase: newShowcase
      }
    })
  })
  module.hot.accept(['./modules/layoutDemo'], () => {
    const newLayoutDemo = require('./modules/layoutDemo').default
    store.hotUpdate({
      modules: {
        layoutDemo: newLayoutDemo
      }
    })
  })
}

export default store
