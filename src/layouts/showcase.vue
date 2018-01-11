<template>
  <q-layout view="Lhh lpr lFf">
    <q-layout-header reveal>
      <q-toolbar>
        <q-btn flat dense v-go-back.single="pageMeta.backRoute" class="cordova-only electron-only">
          <q-icon name="arrow_back" />
        </q-btn>
        <q-toolbar-title>
          <q-icon
            v-show="pageMeta.icon"
            style="font-size: 2rem; margin-right: 5px;"
            :name="pageMeta.icon"
          />
          {{ pageMeta.title }}
        </q-toolbar-title>
        <app-options />
        <q-btn
          flat
          round
          dense
          class="within-iframe-hide"
          @click="drawerState = !drawerState"
          icon="menu"
        />
      </q-toolbar>

      <q-tabs
        v-if="pageMeta.tabs.length > 0"
        :class="{'within-iframe-hide': !pageMeta.iframeTabs}"
      >
        <q-route-tab
          v-for="tab in pageMeta.tabs"
          :key="tab.hash"
          slot="title"
          :icon="tab.icon"
          :to="`/showcase${pageMeta.hash}/${tab.hash}`"
          :label="tab.label"
          exact
          replace
        />
      </q-tabs>
    </q-layout-header>

    <q-layout-drawer v-model="drawerState">
      <q-scroll-area
        style="width: 100%; height: 100%;"
        class="bg-grey-3"
      >
        <div class="row flex-center bg-white" style="width: 100%; height: 100px;">
          <img src="~assets/quasar-logo.svg" style="height: 75px; width 75px;"/>
          <div style="margin-left: 15px">
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
            <q-item-side right icon="chevron_right" />
          </q-item>
          <q-item-separator />
          <template v-for="category in categories">
            <q-list-header>
              {{ category.title }}
            </q-list-header>
            <q-item
              v-for="feature in category.features"
              :key="feature.hash"
              :to="`/showcase/${category.hash}/${feature.hash}`"
              replace
            >
              <q-item-side :icon="feature.icon" />
              <q-item-main :label="feature.title" />
              <q-item-side right icon="chevron_right" />
            </q-item>
            <q-item-separator />
          </template>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <transition
        enterActiveClass="animated fadeIn"
        leaveActiveClass="animated fadeOut"
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
import { mapState } from 'vuex'
import categories from 'assets/categories'
import AppOptions from 'components/app-options'

export default {
  components: {
    AppOptions
  },
  data () {
    return {
      categories
    }
  },
  watch: {
    lang (lang) {
      import(`quasar-framework/i18n/${lang}`).then(lang => {
        this.$q.i18n.set(lang.default)
      })
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
      'backRoute',
      'pageMeta'
    ])
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>
