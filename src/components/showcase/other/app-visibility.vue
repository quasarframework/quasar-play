<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Switch to another
        <span class="cordova-hide">
          tab in your browser
        </span>
        <span class="cordova-only">
          App
        </span>
        then come back here to see Visibility in action.
      </p>

      <table class="striped" v-if="eventList.length > 0">
        <tbody>
          <tr v-for="evt in eventList" track-by="$index">
            <td>{{ evt.timestamp }}</td>
            <td>{{ evt.label }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Events } from 'quasar'

function pad (number) {
  return (number < 10 ? '0' : '') + number
}

export default {
  data () {
    return {
      eventList: []
    }
  },
  methods: {
    writeVisibilityState (state) {
      const date = new Date()

      this.eventList.unshift({
        timestamp: pad(date.getHours()) + ':' +
            pad(date.getMinutes()) + ':' + pad(date.getSeconds()) + '.' +
            date.getMilliseconds(),
        label: ` App became ${state}`
      })
    }
  },
  ready () {
    Events.on('app:visibility', this.writeVisibilityState)
  },
  destroyed () {
    Events.off('app:visibility', this.writeVisibilityState)
  }
}
</script>
