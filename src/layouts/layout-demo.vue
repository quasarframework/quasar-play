<template>
  <q-layout :view="view">
    <q-layout-header v-model="header" :reveal="headerReveal">
      <q-toolbar :inverted="$q.theme === 'ios'">
        <q-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <q-toolbar-title>
          Header
          <span slot="subtitle">Header Subtitle</span>
        </q-toolbar-title>
        <q-btn flat dense v-if="!$q.platform.within.iframe" class="q-mr-sm" label="Go to Showcase" @click="$router.replace('/showcase')" />
        <q-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </q-toolbar>
      <demo-tabs v-if="$q.theme === 'mat'" />
    </q-layout-header>

    <q-layout-footer v-model="footer" :reveal="footerReveal">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-toolbar :inverted="$q.theme === 'ios'">
        <q-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </q-toolbar>
    </q-layout-footer>

    <q-layout-drawer
      side="left"
      v-model="left"
      :overlay="leftOverlay"
      :behavior="leftBehavior"
      :breakpoint="leftBreakpoint"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
    >
      <q-scroll-area class="fit">
        <q-list-header>Left Panel</q-list-header>
        <q-item to="/showcase/layout-demo/play-with-layout">
          <q-item-side icon="account circle" />
          <q-item-main label="Play with Layout" sublabel="Learn more about it" />
          <q-item-side right icon="thumb_up" />
        </q-item>
        <q-item to="/showcase/layout-demo/drawer-panels">
          <q-item-side icon="view_array" />
          <q-item-main label="Drawer Panels" sublabel="Layout left/right sides" />
        </q-item>
        <q-item to="/showcase/layout-demo/page-sticky">
          <q-item-side icon="pin_drop" />
          <q-item-main label="Page Sticky" sublabel="...on a Layout" />
        </q-item>
        <q-item to="/showcase/layout-demo/floating-action-button">
          <q-item-side icon="play_for_work" />
          <q-item-main label="Floating Action Button" sublabel="For Page actions" />
        </q-item>

        <div v-if="scrolling" style="padding: 25px 16px 16px;">
          <p class="caption" v-for="n in 50" :key="`left-${n}`">
            <em>Left Panel has intended scroll</em>
          </p>
        </div>
      </q-scroll-area>
    </q-layout-drawer>

    <q-layout-drawer
      side="right"
      v-model="right"
      :overlay="rightOverlay"
      :behavior="rightBehavior"
      :breakpoint="rightBreakpoint"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
      :content-style="{fontSize: '16px'}"
    >
      <q-list-header>Right Panel</q-list-header>
      <div v-if="scrolling" style="padding: 25px 16px 16px;">
        <p class="caption" v-for="n in 50" :key="`right-${n}`">
          <em>Right Panel has intended scroll</em>
        </p>
      </div>
    </q-layout-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import DemoTabs from 'components/demo-tabs'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    DemoTabs
  },
  computed: {
    header: {
      get () { return this.$store.state.layoutDemo.header },
      set (val) { this.$store.commit('layoutDemo/setHeader', val) }
    },
    footer: {
      get () { return this.$store.state.layoutDemo.footer },
      set (val) { this.$store.commit('layoutDemo/setFooter', val) }
    },
    left: {
      get () { return this.$store.state.layoutDemo.left },
      set (val) { this.$store.commit('layoutDemo/setLeft', val) }
    },
    right: {
      get () { return this.$store.state.layoutDemo.right },
      set (val) { this.$store.commit('layoutDemo/setRight', val) }
    },

    ...mapGetters('layoutDemo', ['view']),
    ...mapState('layoutDemo', [
      'headerReveal', 'footerReveal',
      'leftOverlay', 'leftBehavior', 'leftBreakpoint',
      'rightOverlay', 'rightBehavior', 'rightBreakpoint',
      'scrolling'
    ])
  }
}
</script>
