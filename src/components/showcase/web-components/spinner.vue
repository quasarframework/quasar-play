<template>
  <div>
    <div class="layout-padding">
      <h5>Configure them</h5>

      <div class="list item-delimiter bordered">
        <div class="item">
          <i>format_size</i>
          <div class="item-content">
            <quasar-range :model.sync="size" min="20" max="256"></quasar-range>
            <div class="item-left-margin item-value" style="font-weight: bold">{{size}}px</div>
          </div>
        </div>
        <div class="item fixed-label">
          <i>palette</i>
          <div class="item-content">
            <label for="color-spinner" class="item-label">Color</label>
            <input id="color-spinner" v-model="color">
            <quasar-select :model.sync="color" :options="colorOptions" ok-label="Pick" title="Spinner Color"></quasar-select>
          </div>
        </div>
      </div>

      <h5>Hover over them to see their names</h5>

      <div style="margin-top: 20px" class="group">
        <spinner
          v-for="spinner in spinners"
          v-tooltip.inline="spinner"
          :name="spinner"
          :color="color"
          :size="size"
        ></spinner>
      </div>

      <h5>
        Default Theme Spinner:
        <spinner :color="color" :size="size"></spinner>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 36,
      color: '#000000',
      spinners: [
        'audio', 'ball', 'bars', 'circles', 'dots',
        'facebook', 'gears', 'grid', 'hearts',
        'hourglass', 'infinity', 'ios', 'oval',
        'pie', 'puff', 'radio', 'rings', 'tail'
      ],
      colorOptions: [
        {
          label: 'Black',
          value: '#000000'
        },
        {
          label: 'Red',
          value: '#ff0000'
        },
        {
          label: 'Green',
          value: '#00ff00'
        },
        {
          label: 'Blue',
          value: '#0000ff'
        }
      ]
    }
  }
}
</script>

<style>
</style>
