<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">
          On a real mobile device DateTime Input opens up a Modal
          instead of a Popover.
        </span>
        <span class="mobile-only">
          On a desktop platform DateTime Input opens up a Popover
          instead of a Modal.
        </span>
      </p>

      <!-- Default: implicit "date" type -->
      <q-datetime v-model="date1" float-label="Date" />
      <q-datetime inverted color="secondary" :first-day-of-week="1" v-model="date1" stack-label="Date (Monday as first day)" />
      <q-datetime inverted color="light-blue" :first-day-of-week="6" v-model="date1" stack-label="Date (Saturday as first day)" />

      <!-- Only Time -->
      <q-datetime inverted-light color="orange" v-model="date2" type="time" float-label="Time" />
      <q-datetime color="brown" v-if="$q.theme === 'mat'" v-model="date2" type="time" format24h float-label="Time (24h) format" />

      <!-- Date & Time -->
      <q-datetime color="purple" v-model="date3" type="datetime" float-label="Date & Time" />

      <template v-if="$q.theme === 'mat'">
        <p class="caption">Minimal Datetime Interface (No header)</p>
        <q-datetime minimal color="purple" v-model="date10" type="datetime" float-label="Date & Time" />

        <p class="caption">Minimal Date Interface (No header)</p>
        <q-datetime minimal color="orange" v-model="date10" type="date" float-label="Date" />
        <q-datetime minimal inverted color="light-blue" v-model="date3" type="date" default-view="year" float-label="Date - Default View Year" />

        <p class="caption">Minimal Time Interface (No header)</p>
        <q-datetime minimal color="primary" v-model="date10" type="time" float-label="Time" />
      </template>

      <p class="caption">
        Lazy input
      </p>
      <span class="chip-container">
        <q-chip square color="secondary">
          Model: {{ lazy }}
        </q-chip>
      </span>
      <q-datetime
        :value="lazy"
        @change="val => lazy = val"
        type="date"
        color="amber"
        clearable
      />

      <p class="caption">Clearable</p>
      <q-datetime
        type="date"
        v-model="today"
        color="amber"
        clearable
      />

      <p class="caption">With default value</p>
      <q-datetime
        :default-value="defaultValue"
        type="datetime"
        v-model="date4"
        color="brown"
        clearable
        float-label="With default value & placeholder"
        placeholder="Start of this year as default"
      />

      <p class="caption">With display value</p>
      <q-datetime
        :display-value="date5 ? 'Picked date. Thanks!' : 'Pick a date, will ya?'"
        type="date"
        v-model="date5"
        inverted
        color="brown"
        stack-label="With display value"
      />

      <p class="caption">With custom format</p>
      <q-datetime
        type="date"
        v-model="date5"
        color="brown"
        format="YYYY-MMMM-dddd Do Qo Q"
      />

      <p v-if="$q.theme === 'mat'" class="caption">With default view</p>
      <q-datetime
        v-if="$q.theme === 'mat'"
        type="date"
        v-model="date4"
        color="brown"
        default-view="month"
      />

      <p class="caption">Force either modal or popover</p>
      <q-datetime v-model="today" modal stack-label="Always open modal" />
      <q-datetime v-model="today" popover stack-label="Always open popover" />

      <p class="caption">Min / max selection</p>
      <q-datetime
        v-model="date7"
        :min="tomorrow"
        stack-label="Pick date starting with tomorrow"
      />
      <q-datetime
        v-model="date8"
        :max="yesterday"
        stack-label="Pick a date in the past"
      />
      <q-datetime
        type="datetime"
        v-model="date9"
        :min="yesterday"
        :max="tomorrow"
        stack-label="Pick a date & time in an interval"
      />

      <p class="caption">Readonly state</p>
      <q-datetime
        readonly
        v-model="state"
      />
      <q-datetime
        readonly
        inverted
        v-model="state"
      />

      <p class="caption">Disable state</p>
      <q-datetime
        disable
        v-model="state"
      />
      <q-datetime
        disable
        inverted
        v-model="state"
      />

      <p class="caption">Error/Warning states</p>
      <q-toggle class="q-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <q-toggle class="q-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <q-datetime
        :error="error"
        :warning="warning"
        float-label="Float label"
        v-model="state"
      />
      <q-datetime
        :error="error"
        :warning="warning"
        inverted
        float-label="Float label"
        v-model="state"
      />

      <p class="caption">Hide underline</p>
      <q-datetime
        hide-underline
        v-model="state"
      />

      <p class="caption">In a Field</p>
      <q-field
        icon="local_movies"
        helper="Pick when to schedule a movie"
      >
        <q-datetime
          v-model="date1"
          :min="today"
          float-label="Pick date"
        />
      </q-field>
      <q-field
        icon="golf_course"
        label="Golf course"
        helper="Pick a date"
      >
        <q-datetime
          inverted
          color="purple"
          v-model="date1"
        />
      </q-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-datetime
          dark
          stack-label="Pick start date & time"
          color="amber"
          v-model="date6"
          type="datetime"
        />
        <q-field
          dark
          icon="school"
          label="Javascript"
          helper="Pick a start time"
        >
          <q-datetime
            dark
            color="secondary"
            v-model="date6"
            type="time"
          />
        </q-field>
      </div>

      <p class="caption">In a List</p>
      <q-list>
        <q-list-header>Date or Time</q-list-header>
        <q-item>
          <q-item-side icon="access_time" />
          <q-item-main>
            <q-datetime class="no-margin" v-model="date1" type="time" />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side icon="update" />
          <q-item-main>
            <q-datetime class="no-margin" v-model="date2" type="date" />
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-list-header>Date & Time</q-list-header>
        <q-item>
          <q-item-side icon="notifications" />
          <q-item-main>
            <q-datetime class="no-margin" v-model="date3" type="datetime" />
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import '../docs-input.styl'

const today = new Date()
const { startOfDate, addToDate, subtractFromDate } = date

export default {
  data () {
    return {
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date8: null,
      date9: null,
      date10: null,
      lazy: null,

      error: true,
      warning: false,
      today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, { days: 1 }),
      state: new Date(),

      defaultValue: startOfDate(today, 'year')
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
    },

    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  }
}
</script>
