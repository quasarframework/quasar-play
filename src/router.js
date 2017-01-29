import Vue from 'vue'
import VueRouter from 'vue-router'

import categories from './components/showcase/categories'
import showcaseStore from './components/showcase/showcase-store'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

let routes = [
  {path: '/', component: load('index')},
  {
    path: '/play',
    component: load('play/layout-play'),
    children: [
      {path: '', component: load('play/play-url-list')},
      {path: 'how-to', component: load('play/play-how-to')}
    ]
  },
  {
    path: '/play-url/:url',
    name: 'play-url',
    component: load('play-url/play-url')
  },
  {
    path: '/showcase/layout',
    component: load('showcase/layout/layout'),
    children: [
      {path: '', component: load('showcase/layout/about')},
      {path: 'toolbar', component: load('showcase/layout/toolbar')},
      {path: 'tabs', component: load('showcase/layout/tabs')},
      {path: 'drawer', component: load('showcase/layout/drawer')}
    ]
  }
]

let showcase = {
  path: '/showcase',
  component: load('showcase/layout-showcase'),
  children: [
    {
      path: '',
      component: load('showcase/showcase'),
      meta: {
        title: 'Quasar Showcase',
        hash: '/showcase',
        icon: 'layers',
        backRoute: '/'
      }
    }
  ]
}

function component (path, config) {
  return {
    path,
    meta: config,
    component: load('showcase/' + path)
  }
}

categories.forEach(category => {
  if (category.extract) {
    return
  }
  category.features.forEach(feature => {
    let path = category.hash + '/' + feature.hash

    if (!feature.tabs) {
      showcase.children.push(component(path, feature))
      return
    }

    feature.tabs.forEach(tab => {
      let subpath = path + '/' + tab.hash
      showcase.children.push(component(subpath, {
        title: tab.title,
        hash: '/' + path,
        icon: feature.icon,
        tabs: feature.tabs
      }))
    })

    routes.push({
      path: '/showcase/' + path,
      redirect: '/showcase/' + path + '/' + feature.tabs[0].hash
    })
  })
})

routes.push(showcase)
routes.push({path: '*', component: load('error404')})

const Router = new VueRouter({routes})

Router.beforeEach((to, from, next) => {
  if (to.meta) {
    showcaseStore.set(to.meta)
  }
  next()
})

export default Router
