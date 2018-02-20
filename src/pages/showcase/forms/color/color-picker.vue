<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div class="row gutter-md" style="max-width: 550px">
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center q-my-xs">Hex model</p>
          <q-color-picker v-model="modelHex" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center q-my-xs">Hex (+ alpha) model</p>
          <q-color-picker v-model="modelHexa" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center q-my-xs">RGB model</p>
          <q-color-picker v-model="modelRgb" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center q-my-xs">RGBA model</p>
          <q-color-picker v-model="modelRgba" />
        </div>
      </div>

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ lazy }}
          </q-chip>
        </span>
      </p>
      <q-color-picker :value="lazy" @change="val => lazy = val" clearable />

      <p class="caption">On Dark Background</p>
      <div class="dark-example bg-black row justify-center">
        <q-color-picker class="q-mt-lg q-ma-md" dark v-model="modelRgba" />
      </div>

      <p class="caption">Inside Field</p>
      <q-field
        label="Car color"
        helper="Touch to select a color"
        icon="brush"
        style="max-width: 530px"
      >
        <q-color-picker v-model="modelRgba" />
      </q-field>

      <p class="caption">Readonly</p>
      <div class="row gutter-md">
        <div class="col-12 col-sm-6 column items-center">
          <q-color-picker v-model="modelHexa" readonly />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <q-color-picker v-model="modelRgb" readonly />
        </div>
      </div>

      <p class="caption">Disable</p>
      <div class="row gutter-md">
        <div class="col-12 col-sm-6 column items-center">
          <q-color-picker v-model="modelHex" disable />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <q-color-picker v-model="modelRgba" disable />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      modelHex: '#C7044B',
      modelHexa: '#F0FF1CBF',
      modelRgb: { r: 112, g: 204, b: 55 },
      modelRgba: { r: 138, g: 36, b: 138, a: 64 },
      lazy: null
    }
  },
  methods: {
    rgb (color) {
      return `rgb${color.a !== void 0 ? 'a' : ''}(${color.r},${color.g},${color.b}${color.a !== void 0 ? `,${color.a / 100}` : ''})`
    }
  }
}
</script>
