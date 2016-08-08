<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{number}}</em> &nbsp;&nbsp;(1-7)</span>
      </div>

      <br><br>

      <h5>Standalone</h5>
      <quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>

      <h5>Inside of a List</h5>
      <div class="list bordered inner-delimiter">
        <div class="item">
          <i class="item-right-margin">volume_down</i>
          <quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
          <i class="item-left-margin">volume_up</i>
        </div>
        <div class="item">
          <i class="item-right-margin">volume_down</i>
          <quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
          <i class="item-left-margin">volume_up</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 3
    }
  }
}
</script>
