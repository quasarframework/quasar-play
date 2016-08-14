<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button v-link="store.backRoute" class="cordova-only">
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

    <quasar-tabs slot="navigation" v-if="store.tabs.length > 0" class="cordova-only">
      <quasar-tab
        v-for="tab in store.tabs"
        :icon="tab.icon"
        v-link="{path: '/showcase' + store.hash + '/' + tab.hash, exact: true}"
      >
        {{ tab.label }}
      </quasar-tab>
    </quasar-tabs>

    <router-view class="layout-view"></router-view>
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
