import Vue from 'vue'
import Vuex from 'vuex'

import showcase from './showcase'
import layoutDemo from './layoutDemo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    showcase,
    layoutDemo
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./showcase'], () => {
    const newShowcase = require('./showcase').default
    store.hotUpdate({ modules: { showcase: newShowcase } })
  })
  module.hot.accept(['./layoutDemo'], () => {
    const newLayoutDemo = require('./layoutDemo').default
    store.hotUpdate({ modules: { layoutDemo: newLayoutDemo } })
  })
}

export default store
