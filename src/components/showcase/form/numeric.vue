<template>
  <!-- Place content inside a root node -->
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{number}}</em> &nbsp;&nbsp;(1-7)</span>
      </div>

      <br><br>

      <h5>Standalone</h5>
      <quasar-numeric :model.sync="number" :min="1" :max="17"></quasar-numeric>

      <br><br>
      <h5>Inside of a List</h5>
      <div class="list inner-delimiter bordered">
        <label class="item">
          <div class="item-content">
            <div class="item-label fixed-label">
              Some quasar-numeric
            </div>
            <div class="item-value">
              <quasar-numeric :model.sync="number" :min="1" :max="17"></quasar-numeric>
            </div>
          </div>
        </label>
        <label class="item">
          <div class="item-content">
            <div class="item-label fixed-label">
              Some quasar-numeric
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
