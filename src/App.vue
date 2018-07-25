<template>
  <div id="q-app">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      :duration="300"
      @leave="resetScroll"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  },
  created () {
    this.$q.addressbarColor.set()
  }
}
</script>

<style>
</style>
