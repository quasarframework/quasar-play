<template>
  <q-page padding>
    <p class="caption">
      Notify the user something is going on under the covers.
    </p>
    <div class="group">
      <q-btn push color="secondary" @click="noMessage">
        Show
      </q-btn>
      <q-btn push color="primary" @click="withMessage">
        Show With Message
      </q-btn>
    </div>
    <p class="caption">
      ...with a custom spinner, colors and size.
    </p>
    <q-btn push color="secondary" @click="customLoading">
      Show custom Loading
    </q-btn>
    <p class="caption">
      Change Message while Being Displayed
    </p>
    <q-btn push color="secondary" @click="changeMessage">
      Show & Change
    </q-btn>
  </q-page>
</template>

<script>
import { QSpinnerFacebook, QSpinnerGears } from 'quasar'

export default {
  methods: {
    show (options) {
      this.$q.loading.show(options)

      setTimeout(() => {
        this.$q.loading.hide()
      }, 3000)
    },
    noMessage () {
      this.show()
    },
    customLoading () {
      this.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'amber',
        spinnerSize: 140,
        message: 'Some important process is in progress. Hang on...',
        messageColor: 'orange'
      })
    },
    withMessage () {
      this.show({message: 'Some important process is in progress. Hang on...'})
    },
    changeMessage () {
      this.$q.loading.show({message: 'First message. Gonna change it in 3 seconds...'})
      setTimeout(() => {
        this.show({
          spinner: QSpinnerGears,
          spinnerColor: 'amber',
          message: 'Updated message'
        })
      }, 3000)
    }
  }
}
</script>
