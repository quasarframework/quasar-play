<template>
  <div>
    <div class="layout-padding">
      <h5>
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        to switch between fullscreen mode and default mode.
      </h5>

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
