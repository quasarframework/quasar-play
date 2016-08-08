<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Click/Tap on progress bars to change their value
      </p>

      <h5>Determinate State</h5>
      <p>
        <quasar-progress-bar :model="progress" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe positive" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe info" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe warning" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe secondary" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe tertiary" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe dark" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe negative" @click="randomize()"></quasar-progress-bar>
        <quasar-progress-bar :model="progress" class="stripe animate" @click="randomize()"></quasar-progress-bar>
      </p>

      <h5>Indeterminate State</h5>
      <p>
        <quasar-progress-bar class="indeterminate"></quasar-progress-bar>
        <quasar-progress-bar class="indeterminate positive"></quasar-progress-bar>
        <quasar-progress-bar class="indeterminate warning"></quasar-progress-bar>
        <quasar-progress-bar class="indeterminate negative"></quasar-progress-bar>
        <quasar-progress-bar class="indeterminate dark"></quasar-progress-bar>
      </p>

      <h5>Specific Height</h5>
      <p>
        <quasar-progress-bar class="indeterminate stripe" style="height: 45px"></quasar-progress-bar>
      </p>

      <h5>Striped</h5>
      <quasar-progress-bar :model="progress" class="stripe" @click="randomize()"></quasar-progress-bar>

      <h5>Striped and Animated</h5>
      <quasar-progress-bar :model="progress" class="stripe animate" @click="randomize()"></quasar-progress-bar>
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
