
import categories from '~/assets/categories'

const routes = [
  {
    path: '/',
    component: () => import('pages/landing')
  }
]

function component (path, meta) {
  return {
    path,
    meta,
    component: () => import('pages/showcase/' + path)
  }
}

const showcase = {
  path: '/showcase',
  component: () => import('layouts/showcase'),
  children: [
    {
      path: '',
      meta: {
        title: 'Quasar Showcase',
        hash: '/showcase',
        icon: 'layers',
        backRoute: '/'
      },
      component: () => import('pages/showcase/index')
    }
  ]
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
routes.push({ path: '*', component: () => import('pages/error404.vue') })

export default routes
