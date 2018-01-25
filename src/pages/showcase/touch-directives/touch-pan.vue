<template>
  <q-page padding class="docs-touch row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click then pan in a direction with your mouse</span>
        <span class="mobile-only">Touch and pan in a direction</span>
        on the area below to see it in action.
      </p>
      <div
        v-touch-pan="handlePan"
        class="custom-area row flex-center relative-position"
        style="height: 350px"
        ref="area"
      >
        <pre v-if="info">{{ info }}</pre>
        <div v-else class="text-center">
          <q-icon name="arrow_upward" />
          <div class="row items-center">
            <q-icon name="arrow_back" />
            <div>Pan in any direction</div>
            <q-icon name="arrow_forward" />
          </div>
          <q-icon name="arrow_downward" />
        </div>

        <div v-if="panning" class="touch-signal">
          <q-icon name="touch_app" />
        </div>
      </div>

      <p class="caption">
        Panning works both with a mouse or a native touch action.
        <br>You can also capture pan to certain directions (any) only as you'll see below.
      </p>

      <p class="caption">Example on capturing only horizontal panning:</p>
      <div
        v-touch-pan.horizontal="panHorizontally"
        class="custom-area row flex-center"
      >
        <div v-if="pannedHorizontally" class="q-ma-none">
          <q-icon name="done" size="48px" />
          <q-btn flat label="Reset" @click="pannedHorizontally = false" />
        </div>
        <div v-else class="row items-center">
          <q-icon name="arrow_back" />
          <div>Pan to left or right only</div>
          <q-icon name="arrow_forward" />
        </div>
      </div>

      <p class="caption">Example on capturing only vertically panning:</p>
      <div
        v-touch-pan.vertical="panVertically"
        class="custom-area row flex-center"
      >
        <div v-if="pannedVertically" class="q-ma-none">
          <q-icon name="done" size="48px" />
          <q-btn flat label="Reset" @click="pannedVertically = false" />
        </div>
        <div v-else class="text-center">
          <q-icon name="arrow_upward" />
          <div>
            Pan to up or down only
          </div>
          <q-icon name="arrow_downward" />
        </div>
      </div>

      <p class="caption">For desktops, you can configure to avoid capturing mouse pans if you wish.</p>
    </div>
  </q-page>
</template>

<script>
import './touch-style.styl'

export default {
  data () {
    return {
      info: null,
      panning: false,
      pannedHorizontally: false,
      pannedVertically: false
    }
  },
  methods: {
    handlePan ({ position, direction, duration, distance, delta, isFirst, isFinal, evt }) {
      this.info = { position, direction, duration, distance, delta, isFirst, isFinal }

      // native Javascript event
      // console.log(evt)

      if (isFirst) {
        this.panning = true
      }
      else if (isFinal) {
        this.panning = false
      }
    },
    panHorizontally () {
      if (this.pannedHorizontally !== true) {
        this.pannedHorizontally = true
      }
    },
    panVertically () {
      if (this.pannedVertically !== true) {
        this.pannedVertically = true
      }
    }
  }
}
</script>
