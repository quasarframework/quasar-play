<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Field components</p>
      <q-field
        :count="10"
        helper="Some helper"
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        :count="10"
        helper="Some helper"
      >
        <q-input v-model="text" float-label="Input float label" />
      </q-field>

      <q-field
        icon="wifi"
        icon-color="amber"
        label="Field label"
        helper="Some helper"
      >
        <q-input v-model="email" type="email" suffix="@email.com" />
      </q-field>

      <br>

      <q-field
        :count="10"
        helper="Some helper"
      >
        <q-input inverted v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        :count="10"
        helper="Some helper"
      >
        <q-input inverted-light color="amber" v-model="text" stack-label="Input stack label" />
      </q-field>

      <q-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
      >
        <q-input inverted color="secondary" v-model="email" type="email" suffix="@email.com" />
      </q-field>

      <p class="caption">Error/warning states</p>
      <q-toggle class="q-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <q-toggle class="q-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <q-field
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input v-model="text" float-label="Input float label" />
      </q-field>

      <q-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input v-model="email" type="email" suffix="@email.com" stack-label="Email address" />
      </q-field>

      <q-field
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input inverted v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input inverted color="purple" v-model="text" stack-label="Input stack label" />
      </q-field>

      <q-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <q-input inverted color="secondary" v-model="email" type="email" suffix="@email.com" float-label="Email address" />
      </q-field>

      <p class="caption">Wrapping form components</p>
      <q-field
        icon="supervisor_account"
        count
        helper="Type names"
      >
        <q-chips-input float-label="Chips Input" v-model="chips" />
      </q-field>

      <q-field
        icon="work"
        label="Employees"
        :count="10"
        helper="Type names"
      >
        <q-chips-input inverted float-label="Chips Input" v-model="chips" />
      </q-field>

      <q-field
        icon="place"
        label="Meeting city"
        helper="Pick a city"
      >
        <q-select
          float-label="Select"
          v-model="select"
          :options="[
            {label: 'Bucharest', value: 'bucharest'},
            {label: 'London', value: 'london'},
            {label: 'Paris', value: 'paris'}
          ]"
        />
      </q-field>

      <q-field
        icon="cake"
        label="Desert flavor"
        helper="Pick a flavor"
      >
        <q-option-group
          color="purple"
          v-model="group"
          :options="[
            {label: 'Cherry', value: 'cherry'},
            {label: 'Pineapple', value: 'pineapple'},
            {label: 'Peach', value: 'peach'}
          ]"
        />
      </q-field>

      <q-field
        icon="access_time"
        label="Meeting time"
        helper="Pick a date"
      >
        <q-datetime
          type="date"
          v-model="date"
          color="secondary"
          float-label="Datetime"
        />
      </q-field>

      <q-field
        icon="rate_review"
        label="Review rating"
        helper="How much do you like the review?"
      >
        <q-rating size="2rem" v-model="rating" color="primary" :max="5" />
      </q-field>

      <q-field
        icon="format_color_fill"
        label="Choose color"
        helper="I'll fill it with this color"
      >
        <q-color v-model="color" color="primary" float-label="Color" />
      </q-field>

      <q-field
        icon="edit_location"
        count
        label="Favorite cities"
        helper="Pick some you want to visit"
      >
        <q-option-group
          type="toggle"
          v-model="group2"
          :options="[
            {label: 'Bucharest', value: 'bucharest'},
            {label: 'London', value: 'london'},
            {label: 'Paris', value: 'paris'}
          ]"
        />
      </q-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-field
          :count="10"
          helper="Some helper"
        >
          <q-input dark color="yellow" v-model="text" />
        </q-field>

        <q-field
          icon="place"
          label="Meeting city"
          helper="Pick a city"
        >
          <q-select
            dark
            float-label="Select"
            color="yellow"
            v-model="select"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </q-field>

        <q-field
          dark
          icon="rate_review"
          label="Review rating"
          helper="How much do you like the review?"
        >
          <q-rating size="2rem" v-model="rating" :max="5" />
        </q-field>
      </div>

      <p class="caption">Orientation</p>
      <div class="dark-example">
        <q-field
          label="Always vertical"
          orientation="vertical"
          :count="10"
          helper="Some helper"
        >
          <q-input dark color="orange" v-model="text" />
        </q-field>

        <q-field
          orientation="vertical"
          icon="edit_location"
          label="Always vertical"
          count
          helper="Pick some you want to visit"
        >
          <q-option-group
            type="toggle"
            dark
            color="orange"
            v-model="group2"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </q-field>

        <q-field
          orientation="horizontal"
          icon="edit_location"
          label="Always horizontal"
          count
          helper="And next go to"
        >
          <q-option-group
            type="radio"
            dark
            color="orange"
            v-model="group3"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </q-field>

        <q-field
          dark
          orientation="horizontal"
          label="Always horizontal"
          :label-width="4"
          helper="How much do you like the review?"
        >
          <q-rating size="2rem" color="orange" v-model="rating" :max="3" />
        </q-field>
      </div>

      <p class="caption">Alignment with inset (view on desktop)</p>
      <q-field
        icon="wifi"
        label="Label"
        helper="No inset"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        inset="label"
        icon="wifi"
        helper="Inset label"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        inset="icon"
        label="Label"
        helper="Icon inset"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        inset="full"
        helper="Full inset"
      >
        <q-input v-model="text2" />
      </q-field>

      <p class="caption">Label width (view on desktop)</p>
      <q-field
        :label-width="3"
        icon="wifi"
        label="Width 3/12"
        helper="Some helper"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        :label-width="5"
        icon="wifi"
        label="Width 5/12"
        helper="Some helper"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        :label-width="8"
        icon="wifi"
        label="Width 8/12"
        helper="Some helper"
      >
        <q-input v-model="text2" />
      </q-field>

      <q-field
        :label-width="12"
        icon="wifi"
        label="Width 12/12"
        helper="Some helper"
      >
        <q-input v-model="text2" />
      </q-field>
    </div>
  </q-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      text: '',
      text2: '',
      email: '',
      select: 'bucharest',
      group: 'pineapple',
      group2: ['paris'],
      group3: 'london',
      chips: ['Jim'],
      color: null,
      date: null,
      rating: 0,

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
