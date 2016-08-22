<template>
  <!-- Place content inside a root node -->
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{number}}</em> &nbsp;&nbsp;(1-17)</span>
      </div>

      <p class="caption">Standalone</p>
      <quasar-numeric :model.sync="number" :min="1" :max="17"></quasar-numeric>

      <p class="caption">Inside of a List</p>
      <div class="list inner-delimiter bordered">
        <label class="item">
          <div class="item-content">
            <div class="item-label fixed-label">
              Some number
            </div>
            <div class="item-value">
              <quasar-numeric :model.sync="number" :min="1" :max="17"></quasar-numeric>
            </div>
          </div>
        </label>
        <label class="item">
          <div class="item-content">
            <div class="item-label fixed-label">
              Some number
            </div>
            <div class="item-value">
              <quasar-numeric :model.sync="number" :min="1" :max="17"></quasar-numeric>
            </div>
          </div>
        </label>
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
