<template>
  <q-modal ref="modal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-toolbar-title class="text-center">
          Quasar Play Privacy Policy
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar slot="footer">
        <q-btn @click="$refs.modal.close()" class="full-width" flat>
          Close
        </q-btn>
      </q-toolbar>

      <div class="layout-padding privacy-policy">
        <p class="caption">
          We value your privacy, and our Privacy Policy aims to explain how your privacy is
          protected while using the Quasar Play app.
        </p>

        <h6>What personal information is collected from people using Quasar Play?</h6>
        <p class="caption">
          None, period. We don't collect, transmit or store any personal information or any other
          data. Quasar Play is fully functional without requiring any information about the user.
        </p>

        <h6>What information about my device is collected when I use Quasar Play?</h6>
        <p class="caption">
          It is not required to grant the app any device permissions in order to use Quasar Play,
          however use of the QR code-scanning option requires allowing the app access your device's
          camera. This is the only device permission the app will ever request, and it is the only
          purpose for which the device's camera will ever be used by Quasar Play.
        </p>

        <h6>Third-party disclosure</h6>
        <p class="caption">
          We do not sell, trade, or otherwise transfer any data to outside parties, nor do we include
          any commercial offers for third-party products or services at any time.
        </p>

        <h6>Changes to Privacy Policy</h6>
        <p class="caption">
          This Privacy Policy may be updated from time to time for any reason. You should check this
          Privacy Policy periodically for any changes, as continued use is deemed approval of all changes.
        </p>

        <h6>Contact Us</h6>
        <p class="caption">
          If you have any questions about this Privacy Policy, please contact us at
          <a href="mailto:razvan.stoenescu@gmail.com">razvan.stoenescu@gmail.com</a>.
        </p>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import {
  QBtn,
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QIcon
} from 'quasar'

export default {
  components: {
    QBtn,
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QIcon
  },
  methods: {
    show () {
      this.$refs.modal.open()
    }
  }
}
</script>

<style lang="styl">
.privacy-policy
  h6
    margin-top 25px
    margin-bottom 10px
  p.caption
    margin-top 0
    &:first-child
      margin-bottom 35px
</style>
