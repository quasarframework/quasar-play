<template>
  <q-page padding class="docs-slider row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Standard
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ standard }} (0 to 50)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="standard" :min="0" :max="50" />
      <q-slider v-model="standard" :min="0" :max="50" square />

      <p class="caption">
        With Floating Point Precision
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ precision }} (0.1 to 1.5)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="precision" :min="0.1" :max="1.5" :step="0.1" :decimals="1" color="amber" />

      <p class="caption">
        With Step
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ step }} (0 to 45, step 5)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="step" :min="0" :max="45" :step="5" color="purple" />

      <p class="caption">
        With Label
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="label" :min="-20" :max="20" :step="4" label color="light-green" />

      <p class="caption">
        Snaps to Steps
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ snap }} (0 to 10, step 2)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="snap" :min="0" :max="10" :step="2" label snap color="deep-orange" />

      <p class="caption">
        With Markers. Snaps to Steps
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ marker }} (0 to 10, step 2)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="marker" :min="0" :max="10" :step="2" label snap markers />

      <p class="caption">
        Display Label Always
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </q-chip>
        </span>
      </p>
      <q-slider v-model="label" :min="-20" :max="20" :step="4" label-always color="orange" />

      <p class="caption">
        Custom Label Value
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </q-chip>
        </span>
      </p>
      <q-slider :label-value="`${label}px`" v-model="label" :min="-20" :max="20" :step="4" label-always color="brown" />

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ lazy }}
          </q-chip>
        </span>
      </p>
      <q-slider :value="lazy" @change="val => { lazy = val }" :min="0" :max="45" :step="5" color="purple" label />

      <p class="caption">Readonly State</p>
      <q-slider v-model="standard" color="secondary" :min="0" :max="50" readonly />

      <p class="caption">Disabled State</p>
      <q-slider v-model="standard" color="secondary" :min="0" :max="50" disable />

      <p class="caption">Error/Warning states</p>
      <div class="q-ma-xs q-mb-md">
        <q-toggle class="q-ma-xs" v-model="error" color="negative" label="Toggle error state" />
        <q-toggle class="q-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />
      </div>

      <q-slider :error="error" :warning="warning" v-model="standard" :min="0" :max="50" />
      <q-slider :error="error" :warning="warning" v-model="standard" :min="0" :max="50" label-always />

      <p class="caption">In a Field</p>
      <q-field
        icon="local_atm"
        label="Payment"
        helper="Amount you are willing to spend (in USD)"
      >
        <q-slider class="dark" v-model="standard" :min="0" :max="50" label />
      </q-field>

      <p class="caption">In a List</p>
      <q-list>
        <q-item>
          <q-item-side icon="volume_down" />
          <q-item-main>
            <q-slider color="secondary" v-model="standard" :min="0" :max="50" label />
          </q-item-main>
          <q-item-side right icon="volume_up" />
        </q-item>
        <q-item>
          <q-item-side icon="brightness_low" />
          <q-item-main>
            <q-slider color="orange" v-model="standard" :min="0" :max="50" label />
          </q-item-main>
          <q-item-side right icon="brightness_high" />
        </q-item>
        <q-item>
          <q-item-side icon="mic" />
          <q-item-main>
            <q-slider color="black" v-model="standard" :min="0" :max="50" label />
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import './slider-style.styl'

export default {
  data () {
    return {
      standard: 20,
      precision: 0.4,
      step: 30,
      label: 5,
      snap: 2,
      marker: 6,
      lazy: 6,

      error: true,
      warning: false
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    }
  }
}
</script>
