<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
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

      <table class="q-table striped" v-if="eventList.length > 0">
        <tbody>
          <tr v-for="evt in eventList" :key="evt.timestamp">
            <td>{{ evt.timestamp }}</td>
            <td>{{ evt.label }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
  mounted () {
    this.$nextTick(() => {
      this.$q.events.$on('app:visibility', this.writeVisibilityState)
    })
  },
  beforeDestroy () {
    this.$q.events.$off('app:visibility', this.writeVisibilityState)
  }
}
</script>
