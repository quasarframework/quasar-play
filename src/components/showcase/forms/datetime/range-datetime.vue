<template>
  <div class="layout-padding docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Date range</p>
      <q-datetime-range v-model="range1" class="full-width" />

      <p class="caption">Time range</p>
      <q-datetime-range color="amber" v-model="range2" type="time" class="full-width" />

      <p class="caption">Date & Time range</p>
      <q-datetime-range inverted color="tertiary" v-model="range3" type="datetime" class="full-width" />

      <p class="caption">24h format, Monday as first day</p>
      <q-datetime-range inverted color="secondary" v-model="range3" format24h monday-first type="datetime" class="full-width" />

      <p class="caption">Limit interval selection</p>
      <q-datetime-range color="orange" v-model="range4" :min="past" :max="future" class="full-width" />

      <p class="caption">Disable / Error states</p>
      <q-datetime-range
        disable
        v-model="range1"
        class="full-width"
      />
      <q-datetime-range
        disable
        inverted
        color="secondary"
        v-model="range1"
        class="full-width"
      />
      <q-datetime-range
        error
        v-model="range1"
        class="full-width"
      />
      <q-datetime-range
        error
        inverted
        v-model="range1"
        class="full-width"
      />

      <p class="caption">In a Field</p>
      <q-field
        icon="school"
        helper="When can we call you?"
      >
        <q-datetime-range
          v-model="range5"
          color="brown"
          :min="today"
          class="full-width"
        />
      </q-field>
      <q-field
        icon="golf_course"
        label="Golf course"
        helper="Pick start and end date"
        :label-width="4"
      >
        <q-datetime-range
          inverted
          color="purple"
          v-model="range6"
          class="full-width"
        />
      </q-field>

      <p class="caption">In a List</p>
      <q-list>
        <q-list-header>Date or Time</q-list-header>
        <q-item>
          <q-item-side icon="access_time" />
          <q-item-main>
            <q-datetime-range class="no-margin" v-model="range7" type="time" />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side icon="update" />
          <q-item-main>
            <q-datetime-range class="no-margin" v-model="range7" type="date" />
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-list-header>Date & Time</q-list-header>
        <q-item>
          <q-item-side icon="notifications" />
          <q-item-main>
            <q-datetime-range class="no-margin" v-model="range7" type="datetime" />
          </q-item-main>
        </q-item>
      </q-list>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-datetime-range
          dark
          color="amber"
          v-model="range8"
          type="time"
        />
        <q-field
          dark
          icon="school"
          label="Javascript"
          helper="Pick a start time"
        >
          <q-datetime-range
            dark
            color="secondary"
            v-model="range8"
            type="time"
          />
        </q-field>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QDatetimeRange,
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

const
  { addToDate, subtractFromDate } = date,
  today = new Date(),
  past = subtractFromDate(today, {days: 5}),
  future = addToDate(today, {days: 3})

export default {
  components: {
    QDatetimeRange,
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
      range1: {
        from: null,
        to: null
      },
      range2: {
        from: null,
        to: null
      },
      range3: {
        from: null,
        to: null
      },
      range4: {
        from: null,
        to: null
      },
      range5: {
        from: null,
        to: null
      },
      range6: {
        from: null,
        to: null
      },
      range7: {
        from: null,
        to: null
      },
      range8: {
        from: null,
        to: null
      },
      today,
      past,
      future
    }
  }
}
</script>
