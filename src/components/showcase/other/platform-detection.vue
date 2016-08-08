<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Based on the device you are using to view this, Quasar detects the following:
      </p>

      <pre>{{ platform | json 2 }}</pre>
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
