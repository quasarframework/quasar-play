<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <!-- opens drawer below
      <button class="left-drawer-opener">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title :padding="1">
        Title
      </q-toolbar-title>
    </div>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
      <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
      <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
    </q-tabs>
    -->

    <!-- Drawer
    <q-drawer>
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>

      <div class="list">
        <q-drawer-link to="/" exact icon="mail">
          Link
        </q-drawer-link>
      </div>
    </q-drawer>
    -->

    <router-view class="layout-view"></router-view>

    <!-- Footer
    <div slot="footer" class="toolbar"></div>
    -->
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
