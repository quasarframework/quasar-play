<template>
  <div class="full-height full-width column items-center justify-center bg-primary text-white">
    <h1 class="text-center">Quasar Play</h1>
    <small>for Quasar Framework</small>
    <br><br>
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

<style scoped>
button {
  margin-top: 10px;
}
</style>
