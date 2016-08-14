<template>
  <div class="full-height full-width column items-center justify-center bg-light">
    <h1 class="text-center">Quasar Play</h1>
    <button class="secondary clear" @click="launch()">
      <i class="on-left">launch</i>
      Quasar Framework Documentation
    </button>
    <br>
    <button class="secondary push" v-link="'/play'">
      <i class="on-left">play_circle_outline</i>
      Play URL
    </button>
    <button class="secondary push" v-link="'/showcase'">
      <i class="on-left">layers</i>
      Quasar Showcase
    </button>
  </div>
</template>

<script>
import { Utils } from 'quasar'

export default {
  methods: {
    launch () {
      Utils.openURL('http://quasar-framework.org')
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
button {
  margin-top: 10px;
}
</style>
