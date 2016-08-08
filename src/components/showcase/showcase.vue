<template>
  <div>
    <div class="layout-padding">
      <div class="list bordered inner-delimiter highlight">
        <template v-for="category in categories">
          <div class="list-header">
            {{ category.title }}
          </div>
          <div class="item" v-for="feature in category.features">
            <i>{{ feature.icon }}</i>
            <div class="item-content cursor-pointer" v-link="'/showcase/' + category.hash + '/' + feature.hash">
              <div class="item-label">{{ feature.title }}</div>
              <i>chevron_right</i>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import store from './showcase-store'
import categories from './categories'

export default {
  data () {
    return {
      categories
    }
  },
  beforeCompile () {
    store.set({
      title: 'Quasar Framework Showcase',
      icon: 'layers',
      backRoute: '/'
    })
  }
}
</script>
