import Vue from 'vue'
import VueRouter from 'vue-router'
import categories from './components/showcase/categories'
import showcaseStore from './components/showcase/showcase-store'
Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

let routes = {
  '/': {component: load('index')},
  '/play': {
    component: load('play/layout-play'),
    subRoutes: {
      '/': {component: load('play/play-url-list')},
      '/how-to': {component: load('play/play-how-to')}
    }
  },
  '/play-url/:url': {
    name: 'play-url',
    component: load('play-url/play-url')
  },
  '/showcase': {
    component: load('showcase/layout-showcase'),
    subRoutes: {
      '/': {component: load('showcase/showcase')}
    }
  },
  '*': {
    component: load('error404')
  }
}

function component (path, config) {
  return {
    component: $.extend(
      {},
      load('showcase' + path),
      {
        route: {
          activate ({next}) {
            showcaseStore.set(config)
            next()
          }
        }
      }
    )
  }
}

let router = new VueRouter()

categories.forEach(category => {
  category.features.forEach(feature => {
    let path = '/' + category.hash + '/' + feature.hash

    if (!feature.tabs) {
      routes['/showcase'].subRoutes[path] = component(path, feature)
      return
    }

    feature.tabs.forEach(tab => {
      let subpath = path + '/' + tab.hash
      routes['/showcase'].subRoutes[subpath] = component(subpath, {
        title: tab.title,
        hash: path,
        icon: feature.icon,
        tabs: feature.tabs
      })
    })

    router.redirect({
      ['/showcase' + path]: '/showcase' + path + '/' + feature.tabs[0].hash
    })
  })
})

router.map(routes)
export default router
