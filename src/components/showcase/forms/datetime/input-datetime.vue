<template>
  <div class="layout-padding docs-input row justify-center">
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
      <q-datetime inverted color="secondary" monday-first v-model="date1" stack-label="Date (Monday as first day)" />
      <q-datetime inverted color="light-blue" saturday-first v-model="date1" stack-label="Date (Saturday as first day)" />

      <!-- Only Time -->
      <q-datetime inverted color="orange" v-model="date2" type="time" float-label="Time" />
      <q-datetime color="brown" v-if="$q.theme === 'mat'" v-model="date2" type="time" format24h float-label="Time (24h) format" />

      <!-- Date & Time -->
      <q-datetime color="purple" v-model="date3" type="datetime" float-label="Date & Time" />

      <br><br>

      <q-datetime
        :default-selection="defaultSelection"
        type="datetime"
        v-model="date4"
        color="brown"
        float-label="With default selection & placeholder"
        placeholder="Start of this year as default"
      />

      <q-datetime
        :display-value="date5 ? 'Picked date. Thanks!' : 'Pick a date, will ya?'"
        type="date"
        v-model="date5"
        inverted
        color="brown"
        stack-label="With display value"
      />

      <q-datetime
        type="date"
        v-model="today"
        color="amber"
        stack-label="No 'Clear' button"
        no-clear
      />

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

      <p class="caption">Disable / Error states</p>
      <q-datetime
        disable
        v-model="state"
      />
      <q-datetime
        disable
        inverted
        v-model="state"
      />
      <q-datetime
        error
        float-label="Hey, an error!"
        v-model="state"
      />
      <q-datetime
        error
        inverted
        float-label="Look, look. An error."
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

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-datetime
          dark
          stack-label="Pick start time"
          color="amber"
          v-model="date6"
          type="time"
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
    </div>
  </div>
</template>

<script>
import {
  QDatetime,
  QField,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QListHeader,
  date
} from 'quasar'

import '../docs-input.styl'

const today = new Date()
const { startOfDate, addToDate, subtractFromDate } = date

export default {
  components: {
    QDatetime,
    QField,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QItemSeparator,
    QListHeader
  },
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
      today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, { days: 1 }),
      state: new Date(),

      defaultSelection: startOfDate(today, 'year')
    }
  }
}
</script>
