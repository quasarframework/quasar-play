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
      <quasar-inline-datetime :model.sync="model" type="date"></quasar-inline-datetime>

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
      <quasar-inline-datetime :model.sync="model" type="time"></quasar-inline-datetime>

      <p class="caption">Date & Time</p>
      <quasar-inline-datetime :model.sync="model" type="datetime"></quasar-inline-datetime>

      <p class="caption">Disabled State</p>
      <quasar-inline-datetime disable :model.sync="model" type="datetime"></quasar-inline-datetime>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: '2016-09-18T10:45:00.000Z'
    }
  }
}
</script>
