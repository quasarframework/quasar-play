<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
      />
      <q-knob
        color="secondary"
        v-model="model"
        :min="min"
        :max="max"
      />

      <p class="caption">With Step</p>
      <div class="group">
        <q-knob
          v-model="model"
          :min="min"
          :max="max"
          :step="10"
        />

        <p class="caption">Styling</p>
        <q-knob
          v-model="model"
          size="150px"
          color="red"
          line-width="2px"
          track-color="white"
          :min="min"
          :max="max"
        >
          $ {{ model }}
        </q-knob>

        <q-knob
          v-model="model"
          style="font-size: 3rem"
          color="amber-7"
          :min="min"
          :max="max"
          :step="5"
        />

        <q-knob
          v-model="model"
          size="120px"
          style="font-size: 1.5rem"
          color="secondary"
          track-color="yellow-3"
          line-width="5px"
          :min="min"
          :max="max"
          :step="5"
        >
          {{ model }} <q-icon class="q-ml-xs" name="euro_symbol" />
        </q-knob>
      </div>

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <q-chip square color="secondary">
            Model: {{ lazy }}
          </q-chip>
        </span>
      </p>
      <q-knob
        :value="lazy"
        @change="val => { lazy = val }"
        color="purple"
        :min="min"
        :max="max"
      />

      <p class="caption">Readonly state</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
        color="primary"
        readonly
      >
        <q-icon class="q-mr-xs" name="volume_up" /> {{ model }}
      </q-knob>

      <p class="caption">Disabled state</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
        disable
      >
        <q-icon class="q-mr-xs" name="volume_up" /> {{ model }}%
      </q-knob>

      <p class="caption">Inside Field</p>
      <q-field
        label="Amount to spend"
        helper="Touch to select an amount (USD)"
        icon="local_atm"
      >
        <q-knob
          v-model="model"
          :min="min"
          :max="max"
        />
      </q-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-knob
          color="orange"
          track-color="grey-8"
          v-model="model"
          :min="min"
          :max="max"
          class="q-my-md"
        />
        <q-field
          dark
          icon="thumb_up"
          label="Rating"
          helper="How much do you rate this article?"
        >
          <q-knob
            color="orange"
            track-color="grey-8"
            v-model="model"
            :min="min"
            :max="max"
            class="q-my-md"
          />
        </q-field>
      </div>
    </div>
  </q-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      model: 30,
      min: 0,
      max: 50,

      lazy: 30
    }
  }
}
</script>
