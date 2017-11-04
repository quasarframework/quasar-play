<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" class="demo-site">
    <q-transition enter="fadeIn" leave="fadeOut" mode="out-in" :duration="300" @leave="resetScroll">
      <router-view />
    </q-transition>
  </div>
</template>

<script>
import { QTransition } from 'quasar'

export default {
  components: {
    QTransition
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>
