<template>
  <q-page padding class="docs-input row justify-center">
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
      <q-datetime-picker v-model="model" type="date" />

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
      <q-datetime-picker color="amber" v-model="model" type="time" />

      <p class="caption">Time 24hr format</p>
      <q-datetime-picker color="black" v-model="model" type="time" format24h />

      <p class="caption">Date & Time</p>
      <q-datetime-picker color="secondary" v-model="model" type="datetime" />

      <template v-if="$q.theme === 'mat'">
        <p class="caption">Minimal Datetime Interface (No header)</p>
        <q-datetime-picker minimal color="purple" v-model="dateMinimal" type="datetime" />

        <p class="caption">Minimal Date Interface (No header)</p>
        <q-datetime-picker minimal color="orange" v-model="dateMinimal" type="date" />

        <p class="caption">Minimal Date Interface - Default View Year (No header)</p>
        <q-datetime-picker minimal inverted color="light-blue" v-model="dateMinimal" type="date" default-view="year" />

        <p class="caption">Minimal Time Interface (No header)</p>
        <q-datetime-picker minimal color="primary" v-model="dateMinimal" type="time" />
      </template>

      <p class="caption">On a dark background</p>
      <q-datetime-picker dark color="secondary" v-model="model" type="datetime" />

      <p class="caption">Forcing Monday as first day of week (Changing Quasar I18n automatically configures first day of the week)</p>
      <q-datetime-picker color="purple" v-model="model" :first-day-of-week="1" type="date" />

      <p class="caption">Forcing Saturday as first day of week (Changing Quasar I18n automatically configures first day of the week)</p>
      <q-datetime-picker color="purple" v-model="model" :first-day-of-week="6" type="date" />

      <p class="caption">Disabled state</p>
      <q-datetime-picker disable v-model="model" type="datetime" />

      <p class="caption">Readonly state</p>
      <q-datetime-picker color="orange" readonly v-model="model" type="datetime" />

      <p class="caption">Min & max</p>
      <q-datetime-picker color="brown" type="datetime" v-model="minMaxModel" :min="min" :max="max" />
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import '../docs-input.styl'

const today = new Date()
const { addToDate, subtractFromDate } = date

export default {
  data () {
    return {
      model: '2016-10-24T10:40:14.674Z',
      dateMinimal: null,
      minMaxModel: today,
      min: subtractFromDate(today, {days: 5}),
      max: addToDate(today, {days: 4, month: 1, minutes: 10})
    }
  }
}
</script>
