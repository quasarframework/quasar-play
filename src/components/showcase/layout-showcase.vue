<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button v-go-back="store.backRoute" class="within-iframe-hide">
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

    <quasar-tabs slot="navigation" v-if="store.tabs.length > 0" class="within-iframe-hide">
      <quasar-tab
        v-for="tab in store.tabs"
        :icon="tab.icon"
        :route="'/showcase' + store.hash + '/' + tab.hash" exact replace
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
