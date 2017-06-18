<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
      />
      <q-knob
        class="text-primary"
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
          $ {{model}}
        </q-knob>

        <q-knob
          v-model="model"
          style="font-size: 3rem"
          color="amber-7"
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>

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
          <q-icon class="on-left" name="euro_symbol" /> {{model}}
        </q-knob>
      </div>

      <p class="caption">Readonly state</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
        color="primary"
        readonly
      >
        <q-icon class="on-left" name="volume_up" /> {{model}}
      </q-knob>

      <p class="caption">Disabled state</p>
      <q-knob
        v-model="model"
        :min="min"
        :max="max"
        disable
      >
        <q-icon class="on-left" name="volume_up" /> {{model}}
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
    </div>
  </div>
</template>

<script>
import {
  QKnob,
  QIcon,
  QField
} from 'quasar'

export default {
  components: {
    QKnob,
    QIcon,
    QField
  },
  data () {
    return {
      model: 30,
      min: 0,
      max: 50
    }
  }
}
</script>
