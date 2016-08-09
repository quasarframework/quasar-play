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

    <div class="layout-view">
      <router-view class="layout-scroll-area"></router-view>
    </div>
  </quasar-layout>
</template>

<script>
import store from './showcase-store'

export default {
  data () {
    return {
      store: store.state
    }
  }
}
</script>
