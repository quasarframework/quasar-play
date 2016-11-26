<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{model}}</em></span>
      </div>

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
      <q-inline-datetime v-model="model" type="date"></q-inline-datetime>

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
      <q-inline-datetime v-model="model" type="time"></q-inline-datetime>

      <p class="caption">Date & Time</p>
      <q-inline-datetime v-model="model" type="datetime"></q-inline-datetime>

      <p class="caption">Disabled State</p>
      <q-inline-datetime disable v-model="model" type="datetime"></q-inline-datetime>

      <p class="caption">Readonly State</p>
      <q-inline-datetime readonly v-model="model" type="datetime"></q-inline-datetime>

      <p class="caption">Min & Max</p>
      <q-inline-datetime type="datetime" v-model="minMaxModel" :min="min" :max="max"></q-inline-datetime>

      <p class="caption">Range</p>
      <q-inline-datetime type="datetime" v-model="range.start" :min="range.min" :max="range.end"></q-inline-datetime>
      <q-inline-datetime type="datetime" v-model="range.end" :min="range.start" :max="range.max"></q-inline-datetime>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      model: '',
      minMaxModel: '2016-10-24T10:40:14.674Z',
      min: moment('2016-10-24T10:40:14.674Z').subtract(5, 'days').format(),
      max: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').format(),
      range: {
        start: moment('2016-10-24T10:40:14.674Z').subtract(3, 'days').format(),
        end: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').add(1, 'month').format(),
        min: moment('2016-10-24T10:40:14.674Z').subtract(3, 'days').format(),
        max: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').add(1, 'month').format()// .add(1, 'month').add(1, 'year')
      }
    }
  }
}
</script>
