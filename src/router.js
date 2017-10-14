import Vue from 'vue'
import VueRouter from 'vue-router'
import { Platform } from 'quasar'

import categories from '@/showcase/categories'
import showcaseStore from '@/showcase/showcase-store'

Vue.use(VueRouter)

function load (component) {
  return () => import(`@/${component}.vue`)
}

let routes = [
  {path: '/', component: load('index')},
  {
    path: '/showcase/layout',
    component: load('showcase/layout/layout'),
    children: [
      {path: 'play-with-layout', component: load('showcase/layout/play-with-layout')},
      {path: 'drawer-panels', component: load('showcase/layout/drawer-panels')},
      {path: 'fixed-positioning', component: load('showcase/layout/fixed-positioning')},
      {path: 'floating-action-button', component: load('showcase/layout/floating-action-button')}
    ]
  }
]

if (Platform.is.cordova) {
  routes.push({
    path: '/play',
    component: load('play/layout-play'),
    children: [
      {path: '', component: load('play/play-url-list')},
      {path: 'how-to', component: load('play/play-how-to')}
    ]
  })
  routes.push({
    path: '/play-url/:url',
    name: 'play-url',
    component: load('play-url/play-url')
  })
}

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
        iframeTabs: feature.iframeTabs,
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

const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) => {
  if (to.meta) {
    showcaseStore.set(to.meta)
  }
  next()
})

export default Router
