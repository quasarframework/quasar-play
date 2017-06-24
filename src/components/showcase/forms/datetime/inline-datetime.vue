<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Date
        <br>
        <small class="mat-only">
          <span class="desktop-only">Click</span>
          <span class="mobile-only">Tap</span>
          on header labels to change month, day or year.
        </small>
        <small class="ios-only">
          Set month, day and years by
          <span class="desktop-only">
            clicking. On a mobile device you need to pan to change date or time.
          </span>
          <span class="mobile-only">
            panning. On a desktop device you need to click to change date or time.
          </span>
        </small>
      </p>
      <q-inline-datetime v-model="model" type="date" />

      <p class="caption">
        Time
        <br>
        <small>
          <span class="desktop-only">
            Set hours and minutes by clicking and dragging (or simply clicking)
          </span>
          <span class="mobile-only">
            Set hours and minutes by panning <span class="mat-only">(or simply tapping)</span>
          </span>
          <span class="mat-only">inside of the clock</span>.
        </small>
      </p>
      <q-inline-datetime color="amber" v-model="model" type="time" />

      <p class="caption">Time 24hr format</p>
      <q-inline-datetime color="black" v-model="model" type="time" format24h />

      <p class="caption">Date & Time</p>
      <q-inline-datetime color="secondary" v-model="model" type="datetime" />

      <p class="caption">Monday as first day of week</p>
      <q-inline-datetime color="purple" v-model="model" monday-first type="date" />

      <p class="caption">Saturday as first day of week</p>
      <q-inline-datetime color="purple" v-model="model" saturday-first type="date" />

      <p class="caption">Disabled state</p>
      <q-inline-datetime disable v-model="model" type="datetime" />

      <p class="caption">Readonly state</p>
      <q-inline-datetime color="orange" readonly v-model="model" type="datetime" />

      <p class="caption">Min & max</p>
      <q-inline-datetime color="brown" type="datetime" v-model="minMaxModel" :min="min" :max="max" />
    </div>
  </div>
</template>

<script>
import { QInlineDatetime, date } from 'quasar'
import '../docs-input.styl'

const today = new Date()
const { addToDate, subtractFromDate } = date

export default {
  components: {
    QInlineDatetime
  },
  data () {
    return {
      model: '2016-10-24T10:40:14.674Z',
      minMaxModel: today,
      min: subtractFromDate(today, {days: 5}),
      max: addToDate(today, {days: 4, month: 1, minutes: 10})
    }
  }
}
</script>
