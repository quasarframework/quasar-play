<template>
  <q-page padding class="docs-progress row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on progress bars to change their binded value.
        <span class="desktop-only">
          On a real mobile device the Progress bars
          are much thinner by default.
        </span>
      </p>

      <h5>Determinate State</h5>
      <q-btn small color="primary" @click="randomize">Change Model</q-btn>
      <q-progress :percentage="progress" />
      <q-progress :percentage="progress" color="positive" />
      <q-progress :percentage="progress" color="info" />
      <q-progress :percentage="progress" color="warning" />
      <q-progress :percentage="progress" color="secondary" />
      <q-progress :percentage="progress" color="tertiary" />
      <q-progress :percentage="progress" color="dark" />
      <q-progress :percentage="progress" color="negative" />

      <h5>Stripe</h5>
      <q-progress :percentage="progress" stripe />
      <q-progress :percentage="progress" stripe color="positive" />
      <q-progress :percentage="progress" stripe color="info" />
      <q-progress :percentage="progress" stripe color="warning" />

      <h5>Stripe and Animate</h5>
      <q-progress :percentage="progress" stripe animate color="secondary" />

      <h5>Buffering</h5>
      <q-btn small color="primary" @click="randomizeBuffer">Change Buffer Model</q-btn>
      <q-progress :percentage="progressBuffer" :buffer="buffer" />
      <q-progress :percentage="progressBuffer" stripe :buffer="buffer" />
      <q-progress :percentage="progressBuffer" stripe animate color="secondary" :buffer="buffer" />

      <h5>Indeterminate State</h5>
      <q-progress indeterminate />
      <q-progress indeterminate color="positive" />
      <q-progress indeterminate color="warning" />
      <q-progress indeterminate color="negative" />
      <q-progress indeterminate color="dark" />

      <h5>Specific Height</h5>
      <q-progress :percentage="progress" stripe animate style="height: 45px" />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      progress: 67,
      progressBuffer: 41,
      buffer: 17
    }
  },
  methods: {
    randomize () {
      this.progress = Math.round(Math.random() * 100)
    },
    randomizeBuffer () {
      this.progressBuffer = Math.round(Math.random() * 51)
      this.buffer = Math.round(Math.random() * 47)
    }
  }
}
</script>

<style lang="stylus">
.docs-progress
  .q-btn + .q-progress
    margin-top 20px
  .q-progress + .q-progress
    margin-top 10px
</style>
