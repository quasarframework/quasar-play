<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Standalone
        <span class="label inline bg-secondary text-white">
          Model <span class="right-detail"><em>{{standaloneMin}} to {{standaloneMax}}</em> &nbsp;&nbsp;(0 to 50)</span>
        </span>
      </p>
      <quasar-double-range :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50"></quasar-double-range>

      <p class="caption">
        With Step
        <span class="label inline bg-secondary text-white">
          Model <span class="right-detail"><em>{{stepMin}} to {{stepMax}}</em> &nbsp;&nbsp;(0 to 45, step 5)</span>
        </span>
      </p>
      <quasar-double-range :model-min.sync="stepMin" :model-max.sync="stepMax" :min="0" :max="45" :step="5"></quasar-double-range>

      <p class="caption">
        With Label
        <span class="label inline bg-secondary text-white">
          Model <span class="right-detail"><em>{{labelMin}} to {{labelMax}}</em> &nbsp;&nbsp;(-20 to 20, step 4)</span>
        </span>
      </p>
      <quasar-double-range :model-min.sync="labelMin" :model-max.sync="labelMax" :min="-20" :max="20" :step="4" label></quasar-double-range>

      <p class="caption">
        Snaps to Steps
        <span class="label inline bg-secondary text-white">
          Model <span class="right-detail"><em>{{snapMin}} to {{snapMax}}</em> &nbsp;&nbsp;(0 to 10, step 2)</span>
        </span>
      </p>
      <quasar-double-range :model-min.sync="snapMin" :model-max.sync="snapMax" :min="0" :max="10" :step="2" label snap></quasar-double-range>

      <p class="caption">
        With Markers. Snaps to Steps
        <span class="label inline bg-secondary text-white">
          Model <span class="right-detail"><em>{{markerMin}} to {{markerMax}}</em> &nbsp;&nbsp;(-6 to 10, step 2)</span>
        </span>
      </p>
      <quasar-double-range :model-min.sync="markerMin" :model-max.sync="markerMax" :min="-6" :max="10" :step="2" label snap markers></quasar-double-range>

      <p class="caption">Disabled State</p>
      <quasar-double-range :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" disable></quasar-double-range>

      <p class="caption">Coloring</p>
      <quasar-double-range class="secondary" :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" label></quasar-double-range>
      <quasar-double-range class="orange" :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" label></quasar-double-range>
      <quasar-double-range class="dark" :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" label></quasar-double-range>

      <p class="caption">Inside of a List</p>
      <div class="list">
        <div class="item two-lines">
          <i class="item-primary">local_atm</i>
          <div class="item-content">
            <quasar-double-range :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" label></quasar-double-range>
          </div>
        </div>
        <div class="item two-lines">
          <i class="item-primary">euro_symbol</i>
          <div class="item-content">
            <quasar-double-range :model-min.sync="standaloneMin" :model-max.sync="standaloneMax" :min="0" :max="50" label></quasar-double-range>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      standaloneMin: 10,
      standaloneMax: 35,

      stepMin: 10,
      stepMax: 20,

      labelMin: -12,
      labelMax: 8,

      snapMin: 2,
      snapMax: 6,

      markerMin: 6,
      markerMax: 8
    }
  }
}
</script>
