<template>
  <q-page padding class="docs-input row justify-center">
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

      <p class="caption">Keep color for unchecked options</p>
      <q-option-group
        inline
        type="checkbox"
        keep-color
        color="orange"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris' }
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

      <p class="caption">Readonly</p>
      <q-option-group
        type="radio"
        readonly
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
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

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-option-group
          dark
          type="radio"
          color="secondary"
          v-model="radio"
          :options="[
            { label: 'Bucharest', value: 'bucharest' },
            { label: 'London', value: 'london' },
            { label: 'Paris', value: 'paris', color: 'red' }
          ]"
          class="q-my-md"
        />

        <q-field
          icon="place"
          label="City of residence"
          helper="Pick the city you live in the most"
        >
          <q-option-group
            dark
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
  </q-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      radio: 'london',
      checkbox: ['bucharest', 'paris'],
      toggle: ['paris']
    }
  }
}
</script>
