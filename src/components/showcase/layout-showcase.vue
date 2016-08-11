<template>
  <quasar-layout>
    <div slot="header" class="toolbar primary shadow-1">
      <button v-link="store.backRoute">
        <i>arrow_back</i>
      </button>
      <quasar-toolbar-title :padding="1">
        <i
          v-show="store.icon"
          style="font-size: 2rem; margin-right: 5px;"
        >
          {{ store.icon }}
        </i>
        {{ store.title }}
      </quasar-toolbar-title>
      <button class="left-drawer-opener">
        <i>menu</i>
      </button>
    </div>

    <quasar-tabs v-if="store.tabs.length > 0" slot="navigation" class="primary">
      <quasar-tab
        v-for="tab in store.tabs"
        :icon="tab.icon"
        v-link="{path: '/showcase' + store.hash + '/' + tab.hash, exact: true}"
      >
        {{ tab.label }}
      </quasar-tab>
    </quasar-tabs>

    <quasar-drawer swipe-only>
      <div class="list bordered inner-delimiter highlight">
        <template v-for="category in categories">
          <div class="list-header">
            {{ category.title }}
          </div>
          <quasar-drawer-link
            v-for="feature in category.features"
            v-link="'/showcase/' + category.hash + '/' + feature.hash"
            :icon="feature.icon"
          >
            {{ feature.title }}
          </quasar-drawer-link>
        </template>
      </div>
    </quasar-drawer>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>

<script>
import store from './showcase-store'
import categories from './categories'

export default {
  data () {
    return {
      store: store.state,
      categories
    }
  }
}
</script>
