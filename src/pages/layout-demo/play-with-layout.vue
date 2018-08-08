<template>
  <q-page padding>
    <div class="row no-wrap justify-center">
      <div class="gutter-xs q-pr-xs" style="max-width: 180px;">
        <div>
          <q-toggle v-model="header" label="Header" />
        </div>
        <div>
          <q-toggle v-model="headerReveal" label="Header Reveal" />
        </div>
        <div class="q-mt-sm">
          <q-toggle v-model="left" label="Left Drawer" />
        </div>
        <div>
          <q-toggle v-model="leftOverlay" label="Left as Overlay" />
        </div>
      </div>
      <div class="gutter-xs" style="max-width: 180px;">
        <div>
          <q-toggle v-model="footer" label="Footer" />
        </div>
        <div>
          <q-toggle v-model="footerReveal" label="Footer Reveal" />
        </div>
        <div class="q-mt-sm">
          <q-toggle v-model="right" label="Right Drawer" />
        </div>
        <div>
          <q-toggle v-model="rightOverlay" label="Right as Overlay" />
        </div>
      </div>
    </div>

    <div class="row no-wrap justify-center q-mt-sm">
      <div class="gutter-xs q-pr-xs" style="max-width: 180px;">
        <div>
          <q-select v-model="leftBehavior" :options="drawerBehaviorOptions" class="no-margin" />
        </div>
        <div>
          <q-input type="number" align="right" prefix="Bkpt" placeholder="Bkpt" :value="leftBreakpoint" @change="v => leftBreakpoint = v" class="no-margin" />
        </div>
      </div>
      <div class="gutter-xs" style="max-width: 180px;">
        <div>
          <q-select v-model="rightBehavior" :options="drawerBehaviorOptions" class="no-margin" />
        </div>
        <div>
          <q-input type="number" align="right" prefix="Bkpt" placeholder="Bkpt" :value="rightBreakpoint" @change="v => rightBreakpoint = v" class="no-margin" />
        </div>
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <q-toggle v-model="scrolling" label="Extra content for scrolling" />
    </div>
    <div class="row justify-center q-mt-lg">
      <q-chip color="primary" square detail icon="widgets">
        view: {{ view }}
      </q-chip>
    </div>

    <div class="flex justify-center q-mt-lg">
      <div style="width: 360px">
        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row flex-center no-border">
            Header
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="orange" v-model="topleft" val="l" label="l" />
              <q-radio color="orange" v-model="topleft" val="h" label="h" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio v-model="topcenter" val="h" label="h" />
              <q-radio v-model="topcenter" val="H" label="H" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="secondary" v-model="topright" val="r" label="r" />
              <q-radio color="secondary" v-model="topright" val="h" label="h" />
            </div>
          </div>
        </div>
        <q-card-separator />

        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row flex-center no-border">
            Middle
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="orange" v-model="middleleft" val="l" label="l" />
              <q-radio color="orange" v-model="middleleft" val="L" label="L" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio v-model="middlecenter" val="p" label="p" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="secondary" v-model="middleright" val="r" label="r" />
              <q-radio color="secondary" v-model="middleright" val="R" label="R" />
            </div>
          </div>
        </div>
        <q-card-separator />

        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row flex-center no-border">
            Footer
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="orange" v-model="bottomleft" val="l" label="l" />
              <q-radio color="orange" v-model="bottomleft" val="f" label="f" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio v-model="bottomcenter" val="f" label="f" />
              <q-radio v-model="bottomcenter" val="F" label="F" />
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="column group" style="max-width: 40px">
              <q-radio color="secondary" v-model="bottomright" val="r" label="r" />
              <q-radio color="secondary" v-model="bottomright" val="f" label="f" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="scrolling" class="text-center" style="margin-top: 25px;">
      <p class="caption" v-for="n in 50" :key="n">
        <em>Page has intended scroll</em>
      </p>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="secondary" icon="phone" class="animate-pop" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      drawerBehaviorOptions: [
        { label: 'Behave Normal', value: 'default' },
        { label: 'Behave Mobile', value: 'mobile' },
        { label: 'Behave Desktop', value: 'desktop' }
      ]
    }
  },
  computed: {
    ...mapGetters('layoutDemo', [ 'view' ]),

    header: {
      get () { return this.$store.state.layoutDemo.header },
      set (val) { this.$store.commit('layoutDemo/setHeader', val) }
    },
    headerReveal: {
      get () { return this.$store.state.layoutDemo.headerReveal },
      set (val) { this.$store.commit('layoutDemo/setHeaderReveal', val) }
    },
    footer: {
      get () { return this.$store.state.layoutDemo.footer },
      set (val) { this.$store.commit('layoutDemo/setFooter', val) }
    },
    footerReveal: {
      get () { return this.$store.state.layoutDemo.footerReveal },
      set (val) { this.$store.commit('layoutDemo/setFooterReveal', val) }
    },

    left: {
      get () { return this.$store.state.layoutDemo.left },
      set (val) { this.$store.commit('layoutDemo/setLeft', val) }
    },
    leftOverlay: {
      get () { return this.$store.state.layoutDemo.leftOverlay },
      set (val) { this.$store.commit('layoutDemo/setLeftOverlay', val) }
    },
    leftBreakpoint: {
      get () { return this.$store.state.layoutDemo.leftBreakpoint },
      set (val) { this.$store.commit('layoutDemo/setLeftBreakpoint', val) }
    },
    leftBehavior: {
      get () { return this.$store.state.layoutDemo.leftBehavior },
      set (val) { this.$store.commit('layoutDemo/setLeftBehavior', val) }
    },

    right: {
      get () { return this.$store.state.layoutDemo.right },
      set (val) { this.$store.commit('layoutDemo/setRight', val) }
    },
    rightOverlay: {
      get () { return this.$store.state.layoutDemo.rightOverlay },
      set (val) { this.$store.commit('layoutDemo/setRightOverlay', val) }
    },
    rightBreakpoint: {
      get () { return this.$store.state.layoutDemo.rightBreakpoint },
      set (val) { this.$store.commit('layoutDemo/setRightBreakpoint', val) }
    },
    rightBehavior: {
      get () { return this.$store.state.layoutDemo.rightBehavior },
      set (val) { this.$store.commit('layoutDemo/setRightBehavior', val) }
    },

    topleft: {
      get () { return this.$store.state.layoutDemo.topleft },
      set (val) { this.$store.commit('layoutDemo/setTopLeft', val) }
    },
    topcenter: {
      get () { return this.$store.state.layoutDemo.topcenter },
      set (val) { this.$store.commit('layoutDemo/setTopCenter', val) }
    },
    topright: {
      get () { return this.$store.state.layoutDemo.topright },
      set (val) { this.$store.commit('layoutDemo/setTopRight', val) }
    },
    middleleft: {
      get () { return this.$store.state.layoutDemo.middleleft },
      set (val) { this.$store.commit('layoutDemo/setMiddleLeft', val) }
    },
    middlecenter: {
      get () { return this.$store.state.layoutDemo.middlecenter },
      set (val) { this.$store.commit('layoutDemo/setMiddleCenter', val) }
    },
    middleright: {
      get () { return this.$store.state.layoutDemo.middleright },
      set (val) { this.$store.commit('layoutDemo/setMiddleRight', val) }
    },
    bottomleft: {
      get () { return this.$store.state.layoutDemo.bottomleft },
      set (val) { this.$store.commit('layoutDemo/setBottomLeft', val) }
    },
    bottomcenter: {
      get () { return this.$store.state.layoutDemo.bottomcenter },
      set (val) { this.$store.commit('layoutDemo/setBottomCenter', val) }
    },
    bottomright: {
      get () { return this.$store.state.layoutDemo.bottomright },
      set (val) { this.$store.commit('layoutDemo/setBottomRight', val) }
    },

    scrolling: {
      get () { return this.$store.state.layoutDemo.scrolling },
      set (val) { this.$store.commit('layoutDemo/setScrolling', val) }
    }
  }
}
</script>
