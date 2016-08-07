<template>
  <quasar-layout>
    <div slot="header" class="toolbar primary shadow-1">
      <button v-link="'/'">
        <i>arrow_back</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Quasar Framework Showcase
      </quasar-toolbar-title>
    </div>

    <div class="layout-view">
      <router-view class="layout-scroll-area"></router-view>
    </div>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
