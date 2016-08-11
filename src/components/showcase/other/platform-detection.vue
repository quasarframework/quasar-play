<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Based on the device you are using to view this, Quasar detects the following:
      </p>

      <table class="striped">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(prop, value) in platform">
            <td>{{ prop }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Platform } from 'quasar'

export default {
  data () {
    return {
      platform: Platform.is
    }
  }
}
</script>
