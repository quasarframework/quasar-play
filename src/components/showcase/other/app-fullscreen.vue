<template>
  <div>
    <div class="layout-padding">
      <h5>Click/Tap to switch between fullscreen mode and default mode.</h5>

      <p>
        <button
          class="secondary"
          @click="toggleFullscreen()"
        >
          <i class="on-left">zoom_out_map</i>
          Toggle Fullscreen
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { AppFullscreen } from 'quasar'

export default {
  methods: {
    toggleFullscreen () {
      AppFullscreen.toggle()
    }
  }
}
</script>
