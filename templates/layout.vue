<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <!-- opens drawer below
      <button class="left-drawer-opener">
        <i>menu</i>
      </button>
      -->
      <quasar-toolbar-title :padding="1">
        Title
      </quasar-toolbar-title>
    </div>

    <!-- Navigation Tabs
    <quasar-tabs slot="navigation">
      <quasar-tab icon="mail" v-link="{path: '/layout', exact: true}">Mails</quasar-tab>
      <quasar-tab icon="alarm" v-link="'/layout/alarm'">Alarms</quasar-tab>
      <quasar-tab icon="help" v-link="'/layout/help'">Help</quasar-tab>
    </quasar-tabs>
    -->

    <!-- Drawer
    <quasar-drawer>
      <div class="toolbar">
        <quasar-toolbar-title>
          Drawer Title
        </quasar-toolbar-title>
      </div>

      <div class="list platform-delimiter">
        <quasar-drawer-link v-link="{path: '/', exact: true}" icon="mail">
          Link
        </quasar-drawer-link>
      </div>
    </quasar-drawer>
    -->

    <router-view class="layout-view"></router-view>

    <!-- Footer
    <div slot="footer" class="toolbar"></div>
    -->
  </quasar-layout>
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
