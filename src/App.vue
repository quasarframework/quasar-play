<template>
  <div class="q-app">
    <transition
      enterActiveClass="animated fadeIn"
      leaveActiveClass="animated fadeOut"
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
  name: 'app',
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>

<style>
</style>
