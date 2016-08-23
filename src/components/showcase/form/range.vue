<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{number}}</em> &nbsp;&nbsp;({{min}}-{{max}})</span>
      </div>

      <p class="caption">Standalone</p>
      <quasar-range :model.sync="number" :min="min" :max="max"></quasar-range>
      <p class="caption">With step:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step"></quasar-range>
      <p class="caption">With label:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step" label></quasar-range>
      <p class="caption">Snaps to steps:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step" label snap></quasar-range>

      <p class="caption">Inside of a List</p>
      <div class="list bordered inner-delimiter">
        <div class="item">
          <i class="item-right-margin">volume_down</i>
          <quasar-range :model.sync="number" :min="min" :max="max"></quasar-range>
          <i class="item-left-margin">volume_up</i>
        </div>
        <div class="item">
          <i class="item-right-margin">volume_down</i>
          <quasar-range :model.sync="number" :min="min" :max="max"></quasar-range>
          <i class="item-left-margin">volume_up</i>
        </div>
      </div>

      <p class="caption">Coloring</p>
      <quasar-range class="secondary" :model.sync="number" :min="min" :max="max" label></quasar-range>
      <quasar-range class="orange" :model.sync="number" :min="min" :max="max" label></quasar-range>
      <quasar-range class="dark" :model.sync="number" :min="min" :max="max" label></quasar-range>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 20,
      min: 0,
      max: 50,
      step: 5
    }
  }
}
</script>

<style scoped>
p.caption {
  margin: 10px 0 0;
}
</style>
