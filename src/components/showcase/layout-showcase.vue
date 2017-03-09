<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button v-go-back.single="store.backRoute" class="within-iframe-hide">
        <i>arrow_back</i>
      </button>
      <q-toolbar-title :padding="1">
        <i
          v-show="store.icon"
          style="font-size: 2rem; margin-right: 5px;"
        >
          {{ store.icon }}
        </i>
        {{ store.title }}
      </q-toolbar-title>
    </div>

    <q-tabs
      slot="navigation"
      v-if="store.tabs.length > 0"
      class="within-iframe-hide"
    >
      <q-tab
        v-for="tab in store.tabs"
        :key="tab"
        :icon="tab.icon"
        :route="'/showcase' + store.hash + '/' + tab.hash" exact replace
      >
        {{ tab.label }}
      </q-tab>
    </q-tabs>

    <router-view class="layout-view"></router-view>
  </q-layout>
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
