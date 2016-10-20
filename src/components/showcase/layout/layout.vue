<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Quasar Layout
      </quasar-toolbar-title>
      <button @click="$refs.rightDrawer.open()">
        <i>assignment</i>
      </button>
    </div>

    <div slot="header" class="toolbar primary">
      <quasar-search :model.sync="search" class="primary"></quasar-search>
    </div>

    <quasar-tabs slot="navigation">
      <quasar-tab icon="view_quilt" route="/showcase/layout" exact replace>About</quasar-tab>
      <quasar-tab icon="view_day" route="/showcase/layout/toolbar" replace>Toolbar</quasar-tab>
      <quasar-tab icon="view_day" route="/showcase/layout/tabs" replace>Tabs</quasar-tab>
      <quasar-tab icon="input" route="/showcase/layout/drawer" replace>Drawer</quasar-tab>
    </quasar-tabs>

    <quasar-drawer ref="leftDrawer">
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Drawer
        </quasar-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <router-link to="/showcase/layout" exact>
          <quasar-drawer-link icon="view_quilt">
            About Layout
          </quasar-drawer-link>
        </router-link>
        <hr>
        <div class="list-label">Layout Components</div>
        <router-link to="/showcase/layout/drawer" exact>
          <quasar-drawer-link icon="compare_arrows">
            Layout Drawer
          </quasar-drawer-link>
        </router-link>
        <router-link to="/showcase/layout/toolbar" exact>
          <quasar-drawer-link icon="build">
            Toolbar
          </quasar-drawer-link>
        </router-link>
        <router-link to="/showcase/layout/tabs" exact>
          <quasar-drawer-link icon="tab">
            Tabs
          </quasar-drawer-link>
        </router-link>
      </div>
    </quasar-drawer>

    <router-view class="layout-view"></router-view>

    <quasar-drawer right-side swipe-only ref="rightDrawer">
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
      <div class="auto flex justify-center within-iframe-hide">
        <button v-go-back="'/showcase'">
          <i class="on-left blink">
            replay
          </i>
          Back to Showcase
        </button>
      </div>
      <quasar-toolbar-title :padding="0" class="within-iframe-only">
        Footer
      </quasar-toolbar-title>
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
