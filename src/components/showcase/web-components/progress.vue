<template>
  <div>
    <div class="layout-padding">
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
      <p>
        <quasar-progress :model="progress" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe positive" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe info" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe warning" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe secondary" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe tertiary" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe dark" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe negative" @click="randomize()"></quasar-progress>
        <quasar-progress :model="progress" class="stripe animate" @click="randomize()"></quasar-progress>
      </p>

      <h5>Indeterminate State</h5>
      <p>
        <quasar-progress class="indeterminate"></quasar-progress>
        <quasar-progress class="indeterminate positive"></quasar-progress>
        <quasar-progress class="indeterminate warning"></quasar-progress>
        <quasar-progress class="indeterminate negative"></quasar-progress>
        <quasar-progress class="indeterminate dark"></quasar-progress>
      </p>

      <h5>Specific Height</h5>
      <p>
        <quasar-progress class="indeterminate stripe" style="height: 45px"></quasar-progress>
      </p>

      <h5>Striped</h5>
      <quasar-progress :model="progress" class="stripe" @click="randomize()"></quasar-progress>

      <h5>Striped and Animated</h5>
      <quasar-progress :model="progress" class="stripe animate" @click="randomize()"></quasar-progress>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progress: 81
    }
  },
  methods: {
    randomize () {
      this.progress = Math.round(Math.random() * 100)
    }
  }
}
</script>
