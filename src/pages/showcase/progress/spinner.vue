<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-field
        icon="format size"
        :label="`Size: ${size}px`"
      >
        <q-slider v-model="size" :min="20" :max="256" />
      </q-field>

      <q-field
        icon="palette"
        label="Color"
      >
        <q-color v-model="color" />
      </q-field>

      <p class="caption">
        Hover over them to see their names
      </p>

      <div style="margin-top: 20px">
        <div v-for="spinner in spinners" :key="spinner" class="inline-block q-ma-sm">
          <component
            :is="`q-spinner-${spinner}`"
            :size="size"
            :style="spinnerStyle"
          />
          <q-tooltip :offset="[0, 8]">{{ spinner }}</q-tooltip>
        </div>
      </div>

      <p class="caption">
        Default Theme Spinner:
        <q-spinner color="primary" :size="size" style="margin-left: 1rem;" />
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      size: 36,
      color: '#027be3ff',
      spinners: [
        'audio', 'ball', 'bars', 'circles', 'comment',
        'cube', 'dots', 'facebook', 'gears', 'grid', 'hearts',
        'hourglass', 'infinity', 'ios', 'mat', 'oval',
        'pie', 'puff', 'radio', 'rings', 'tail'
      ]
    }
  },
  computed: {
    spinnerStyle () {
      return `color: ${this.color}`
    }
  }
}
</script>
