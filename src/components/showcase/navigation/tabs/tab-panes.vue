<template>
  <div class="layout-padding docs-tab-pane row justify-center">
    <div style="width: 400px; max-width: 90vw;">
      <p class="caption">Tab Panes below</p>
      <q-tabs color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes below (inverted)</p>
      <q-tabs inverted color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes above</p>
      <q-tabs position="bottom" color="amber" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes above (inverted)</p>
      <q-tabs inverted position="bottom" color="amber" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>
    </div>
  </div>
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane,
  QOptionGroup
} from 'quasar'

export default {
  components: {
    QTabs,
    QTab,
    QTabPane,
    QOptionGroup
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style lang="stylus">
.docs-tab-pane
  .q-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
</style>
