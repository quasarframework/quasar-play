<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Configure them</p>

      <div class="list item-delimiter bordered">
        <div class="item">
          <i>format_size</i>
          <div class="item-content">
            <quasar-range :model.sync="size" min="20" max="256"></quasar-range>
            <div class="item-left-margin">{{size}}px</div>
          </div>
        </div>
        <div class="item">
          <i>palette</i>
          <label for="color-spinner" class="item-label">Color</label>
          <div class="item-content">
            <input id="color-spinner" v-model="color" style="width: 80px;">
            <quasar-select :model.sync="color" :options="colorOptions" ok-label="Pick" title="Spinner Color"></quasar-select>
          </div>
        </div>
      </div>

      <p class="caption">
        Hover over them to see their names
      </p>

      <div style="margin-top: 20px" class="group">
        <spinner
          v-for="spinner in spinners"
          v-tooltip.inline="spinner"
          :name="spinner"
          :color="color"
          :size="size"
        ></spinner>
      </div>

      <p class="caption">
        Default Theme Spinner:
        <spinner :color="color" :size="size" style="margin-left: 1rem;"></spinner>
      </p>
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
