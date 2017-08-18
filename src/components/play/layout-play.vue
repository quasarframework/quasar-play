<template>
  <q-layout view="Hhh lpr fff">
    <q-toolbar slot="header">
      <q-btn flat v-go-back="'/'">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-toolbar-title>
        Play URL
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs slot="navigation">
      <q-route-tab slot="title" to="/play" exact replace icon="queue_play_next" label="URL List" />
      <q-route-tab slot="title" to="/play/how-to" replace icon="info" label="How To" />
    </q-tabs>

    <router-view />
  </q-layout>
</template>

<script>
import {
  QLayout,
  QBtn,
  QIcon,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  GoBack
} from 'quasar'

export default {
  components: {
    QLayout,
    QIcon,
    QBtn,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab
  },
  directives: {
    GoBack
  }
}
</script>
