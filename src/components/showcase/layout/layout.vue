<template>
  <q-layout ref="layout" view="hHr LpR lFf" v-model="sides" :right-breakpoint="900">
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Quasar Layout
        <span slot="subtitle">Empowering your app</span>
      </q-toolbar-title>
      <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/showcase/layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/showcase/layout/drawer-panel" replace hide="icon" label="Drawer / Panel" />
      <q-route-tab slot="title" icon="view_day" to="/showcase/layout/fixed-positioning" replace label="Fixed Positioning" />
      <q-route-tab slot="title" icon="input" to="/showcase/layout/floating-action-button" replace label="Floating Action Button" />
    </q-tabs>

    <div slot="left">
      <q-list-header>Left Panel</q-list-header>
      <q-side-link item to="/showcase/layout/about">
        <q-item-side icon="account circle" />
        <q-item-main label="About" sublabel="What about it?" />
        <q-item-side right stamp="New" />
      </q-side-link>
      <q-side-link item to="/showcase/layout/drawer-panel">Drawer / Panel</q-side-link>
      <q-side-link item to="/showcase/layout/fixed-positioning">Fixed Positioning</q-side-link>
      <q-side-link item to="/showcase/layout/floating-action-button">Floating Action Button</q-side-link>
      <div v-for="n in 60">left{{n}}</div>
    </div>

    <div slot="right">
      <q-list-header>Right Panel</q-list-header>
      <q-side-link item to="/showcase/layout/about">About</q-side-link>
      <span id="gigi" class="bg-white text-black"></span>
      <span id="gogu"></span>
    </div>

    <router-view />

    <q-toolbar slot="footer">
      <q-btn flat @click="$router.replace('/showcase')" icon="keyboard arrow left">
        Back to Showcase
      </q-btn>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader
  },
  data () {
    return {
      search: '',
      right: true,
      todo: true,
      gigi: '',
      sides: {
        left: false,
        right: true
      }
    }
  },
  methods: {
    alertMe () {
      console.log('clicked')
    }
  }
}
</script>
