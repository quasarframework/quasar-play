<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Based on the device you are using to view this, Quasar detects the following:
      </p>

      <table class="q-table striped">
        <thead>
          <tr>
            <th class="text-left">Property</th>
            <th class="text-left">Value</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(value, prop) in $q.platform.is" :key="prop">
            <td>{{ prop }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>

      <p class="caption">
        Your device <strong>{{ touch }}</strong> touch capability.
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    touch () {
      return this.$q.platform.has.touch ? 'has' : 'does not have'
    }
  }
}
</script>
