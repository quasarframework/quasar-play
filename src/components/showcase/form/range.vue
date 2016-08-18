<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{number}}</em> &nbsp;&nbsp;({{min}}-{{max}})</span>
      </div>

      <br><br>

      <h5>Standalone</h5>
      <quasar-range :model.sync="number" :min="min" :max="max"></quasar-range>
      <p class="caption">With step:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step"></quasar-range>
      <p class="caption">With label:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step" label></quasar-range>
      <p class="caption">Snaps to steps:</p>
      <quasar-range :model.sync="number" :min="min" :max="max" :step="step" label snap></quasar-range>

      <h5>Inside of a List</h5>
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

      <h5>Coloring</h5>
      <quasar-range class="secondary" :model.sync="number" :min="min" :max="max" :step="step" label snap></quasar-range>
      <quasar-range class="orange" :model.sync="number" :min="min" :max="max" :step="step" label snap></quasar-range>
      <quasar-range class="dark" :model.sync="number" :min="min" :max="max" :step="step" label snap></quasar-range>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 3,
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
