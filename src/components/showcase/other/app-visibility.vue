<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Switch to another
        <span class="cordova-hide">
          tab in your browser
        </span>
        <span class="cordova-only">
          App
        </span>
        then come back here to see Visibility in action.
      </p>

      <p v-el:visibility></p>
    </div>
  </div>
</template>

<script>
import { Events } from 'quasar'

function pad (number) {
  return (number < 10 ? '0' : '') + number
}

export default {
  methods: {
    writeVisibilityState (state) {
      const date = new Date()

      this.$els.visibility.innerHTML =
        `${pad(date.getHours())}:
         ${pad(date.getMinutes())}:
         ${pad(date.getSeconds())}.
         ${date.getMilliseconds()}
         App became ${state}.<br>` +
         this.$els.visibility.innerHTML
    }
  },
  ready () {
    Events.on('app:visibility', this.writeVisibilityState)
  },
  destroyed () {
    Events.off('app:visibility', this.writeVisibilityState)
  }
}
</script>
