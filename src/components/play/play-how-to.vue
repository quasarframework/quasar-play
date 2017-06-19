<template>
  <div class="layout-padding">
    <p class="light-paragraph">
      Develop your App right on your mobile phone with hot-reload with the following steps:
    </p>

    <q-list>
      <q-collapsible icon="phonelink_ring" label="Register App URL">
        <p>From inside your App's folder in the console use Quasar CLI:</p>
        <code><pre>$ quasar dev --play</pre></code>
        <p>
          This will start a webserver equipped with hot-reload and display a QR code
          that points to that server. Use Quasar Play app to scan the QR code by tapping
          on the FAB (<i>add</i>) button and
          then on (<i>phonelink_ring</i>).
        </p>
        <p>
          If your development machine has multiple IPs then Quasar CLI will
          ask you to select one. Make sure that your phone and dev machine are on the
          same network and can ping themselves and so select correct IP interface.
          Manually add URL by tapping on the FAB
          (<i>add</i>) button and then on (<i>add</i>).
        </p>
        <blockquote>
          <small>
            You can skip generating a QR code and manually add the development URL
            (displayed in the console) to Quasar Play app.
          </small>
        </blockquote>
      </q-collapsible>
      <q-item-separator />
      <q-collapsible icon="queue_play_next" label="Play URL">
        <p>
          Now that you have your URL, you can play with your App on your mobile phone by
          tapping on the (<i>ondemand_video</i>) button.
        </p>
        <p>
          Whenever you change your code the App is updated (quite fast). Due to hot-reload,
          your App's state will be preserved between updates which makes development
          a breeze.
        </p>
        <blockquote>
          <small>
            Unfortunately Cordova proprietary code will not be loaded as it currently
            has a bug that generates a Java exception and halts your App.
          </small>
        </blockquote>
      </q-collapsible>
      <q-item-separator />
      <q-collapsible icon="bug_report" label="Debugging your App">
        <p>
          There is a way to debug directly on your phone. Use Chrome Developer Tools to
          see things like console.log() messages or inspect DOM tree.
        </p>
        <p>
          For this you need to connect your phone through a USB cable to the development
          machine. And also Google Chrome browser. Read the complete guide
          <a @click="openURL">here</a>.
        </p>
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
import {
  QCollapsible,
  QList,
  QItemSeparator,
  openURL
} from 'quasar'

export default {
  components: {
    QCollapsible,
    QList,
    QItemSeparator
  },
  methods: {
    openURL () {
      openURL('https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en')
    }
  }
}
</script>
