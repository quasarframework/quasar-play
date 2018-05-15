<template>
  <q-layout view="Lhh lpr lFf">
    <q-layout-header reveal>
      <q-toolbar :inverted="$q.theme === 'ios'">
        <q-btn
          flat
          round
          dense
          v-go-back.single="pageMeta.backRoute"
          class="cordova-only electron-only"
          icon="arrow_back"
          aria-label="Go back"
        />
        <q-toolbar-title>
          <q-icon
            v-show="pageMeta.icon"
            style="font-size: 2rem; margin-right: 5px;"
            :name="pageMeta.icon"
          />
          {{ pageMeta.title }}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          class="within-iframe-hide"
          @click="drawerState = !drawerState"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>

      <showcase-tabs v-if="$q.theme === 'mat'" />
    </q-layout-header>

    <q-layout-footer reveal v-if="$q.theme === 'ios'">
      <showcase-tabs />
    </q-layout-footer>

    <q-layout-drawer v-model="drawerState" ref="x">
      <q-scroll-area
        style="width: 100%; height: 100%;"
        :class="$q.theme === 'mat' ? 'bg-grey-3' : null"
      >
        <div class="row flex-center bg-white" style="height: 115px">
          <img alt="Quasar logo" src="~assets/quasar-logo.svg" style="height: 75px; width 75px;">
          <div class="caption q-ml-md">
            Quasar v{{ $q.version }}
          </div>
        </div>
        <q-list no-border>
          <q-item
            to="/showcase"
            exact
            replace
          >
            <q-item-side icon="home" />
            <q-item-main label="Showcase home" />
          </q-item>
          <q-item-separator />
          <template v-for="category in categories">
            <q-list-header :key="`header-${category.title}`">
              {{ category.title }}
            </q-list-header>
            <q-item
              v-for="feature in category.features"
              :key="feature.hash"
              :to="`/showcase/${category.hash}/${feature.hash}`"
              :replace="!category.extract"
            >
              <q-item-side :icon="feature.icon" />
              <q-item-main :label="feature.title" />
              <!--
              <q-item-side right v-if="feature.status">
                <q-chip dense color="faded">{{ feature.status }}</q-chip>
              </q-item-side>
              -->
            </q-item>
            <q-item-separator :key="`separator-${category.title}`" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        :duration="300"
        @leave="resetScroll"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import ShowcaseTabs from 'components/showcase-tabs'
import { mapState } from 'vuex'
import categories from 'assets/categories'

export default {
  components: {
    ShowcaseTabs
  },
  data () {
    return {
      categories
    }
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    },
    ...mapState('showcase', [
      'pageMeta'
    ])
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  },
  mounted () {
    if (this.$q.platform.is.desktop && !this.drawerState) {
      this.drawerState = true
    }
  }
}
</script>
