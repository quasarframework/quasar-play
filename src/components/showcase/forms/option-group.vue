<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Radio group</p>
      <q-option-group
        type="radio"
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">Checkbox group</p>
      <q-option-group
        type="checkbox"
        color="amber"
        v-model="checkbox"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'primary' }
        ]"
      />

      <p class="caption">Toggle group</p>
      <q-option-group
        type="toggle"
        color="purple"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">Inline options</p>
      <q-option-group
        inline
        type="toggle"
        color="secondary"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'orange' }
        ]"
      />

      <p class="caption">Labels on left side</p>
      <q-option-group
        left-label
        inline
        type="checkbox"
        color="secondary"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'orange' }
        ]"
      />

      <p class="caption">Disabled</p>
      <q-option-group
        type="radio"
        disable
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">In a Field</p>
      <q-field
        icon="place"
        label="City of residence"
        helper="Pick the city you live in the most"
      >
        <q-option-group
          type="radio"
          v-model="radio"
          :options="[
            { label: 'Bucharest', value: 'bucharest', color: 'amber' },
            { label: 'London', value: 'london', color: 'secondary' },
            { label: 'Paris', value: 'paris', color: 'primary' }
          ]"
        />
      </q-field>
    </div>
  </div>
</template>

<script>
import {
  QOptionGroup,
  QField
} from 'quasar'

export default {
  components: {
    QOptionGroup,
    QField
  },
  data () {
    return {
      radio: 'london',
      checkbox: ['bucharest', 'paris'],
      toggle: ['paris']
    }
  }
}
</script>
