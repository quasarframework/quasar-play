<template>
  <q-page padding class="docs-touch row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click and hold with your mouse</span>
        <span class="mobile-only">Touch and hold</span>
        on the area below to see it in action.
      </p>

      <div
        v-touch-hold="handleHold"
        class="custom-area row flex-center"
      >
        <pre v-if="info">{{ info }}</pre>
        <div v-else class="text-center">
          Click/touch and hold for at least 800ms.
        </div>
      </div>

      <p class="caption">Configuring to trigger after custom time (in this case 3s):</p>
      <div
        v-touch-hold:3000="holdExtended"
        class="custom-area row flex-center"
      >
        <div v-if="hold">
          <q-icon name="done" size="48px" />
          <q-btn flat label="Reset" @click="hold = false" />
        </div>
        <div v-else>Click/touch and hold for 3 seconds</div>
      </div>

      <div
        ref="test"
        class="custom-area row flex-center q-mt-md"
      >
        TEST left/middle/right click here
      </div>
    </div>
  </q-page>
</template>

<script>
import './touch-style.styl'
import { event } from 'quasar'
const { leftClick, middleClick, rightClick } = event

export default {
  data () {
    return {
      info: null,
      hold: false
    }
  },
  methods: {
    handleHold ({ position, duration, evt }) {
      this.info = { position, duration }

      // native Javascript event
      console.log(evt)
    },
    holdExtended () {
      this.hold = true
    }
  },
  mounted () {
    this.$refs.test.addEventListener('mousedown', (e) => {
      if (leftClick(e)) {
        console.log('left click')
      }
      if (middleClick(e)) {
        console.log('middle click')
      }
      if (rightClick(e)) {
        console.log('right click')
      }
    })
  }
}
</script>
