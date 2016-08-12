<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button class="left-drawer-opener">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Quasar Layout
      </quasar-toolbar-title>
      <button class="right-drawer-opener">
        <i>assignment</i>
      </button>
    </div>

    <div slot="header" class="toolbar primary">
      <quasar-search :model.sync="search" class="primary"></quasar-search>
    </div>

    <quasar-tabs slot="navigation">
      <quasar-tab icon="view_quilt" v-link="{path: '/showcase/layout', exact: true}">About</quasar-tab>
      <quasar-tab icon="view_day" v-link="'/showcase/layout/toolbar'">Toolbar</quasar-tab>
      <quasar-tab icon="view_day" v-link="'/showcase/layout/tabs'">Tabs</quasar-tab>
      <quasar-tab icon="input" v-link="'/showcase/layout/drawer'">Drawer</quasar-tab>
    </quasar-tabs>

    <quasar-drawer>
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Drawer
        </quasar-toolbar-title>
      </div>

      <div class="list platform-delimiter">
        <quasar-drawer-link v-link="{path: '/showcase/layout', exact: true}" icon="view_quilt">
          About Layout
        </quasar-drawer-link>
        <quasar-drawer-link v-link="{path: '/showcase/layout/drawer', exact: true}" icon="view_quilt">
          Layout Drawer
        </quasar-drawer-link>
      </div>
    </quasar-drawer>

    <router-view class="layout-view"></router-view>

    <quasar-drawer right-side swipe-only>
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Right-side Drawer
        </quasar-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        This is yet another Drawer that does not gets displayed alongside content on
        bigger screens.
      </p>
    </quasar-drawer>

    <div slot="footer" class="toolbar">
      <div class="auto flex justify-center">
        <button v-link="{path: '/showcase', exact: true}">
          <i class="on-left blink">
            replay
          </i>
          Back to Showcase
        </button>
      </div>
    </div>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
