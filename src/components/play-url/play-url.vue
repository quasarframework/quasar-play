<template>
  <div class="play-view window-height window-width" style="overflow: hidden">
    <q-toolbar
      class="fixed shadow-1"
      :class="{active: active || !showedToolbar}"
    >
      <q-btn flat small v-go-back="'/play'">
        <q-icon name="close" />
      </q-btn>
      <q-toolbar-title>
        {{url}}
      </q-toolbar-title>
      <q-btn flat small @click="refresh">
        <q-icon name="refresh" />
      </q-btn>
      <div class="toggle absolute-bottom row justify-center">
        <a
          @click="toggle"
          class="bg-white text-primary"
        >
          <q-icon :name="active ? 'remove_circle' : 'add_circle'" />
        </a>
      </div>
    </q-toolbar>
    <div
      class="window-height window-width row flex-center"
      v-show="!iframeLoaded"
    >
      <q-spinner size="80px" />
    </div>
    <iframe
      v-show="iframeLoaded"
      :src="url"
      @load="onload"
      class="full-height full-width"
      style="border: 0;"
    ></iframe>
  </div>
</template>

<script>
import {
  QBtn,
  QToolbar,
  QToolbarTitle,
  QSpinner,
  QIcon,
  GoBack
} from 'quasar'

export default {
  components: {
    QBtn,
    QToolbar,
    QToolbarTitle,
    QSpinner,
    QIcon
  },
  directives: {
    GoBack
  },
  data () {
    let url = decodeURIComponent(this.$route.params.url)
    return {
      url,
      active: true,
      iframeLoaded: false,
      showedToolbar: false
    }
  },
  methods: {
    onload () {
      this.active = false
      this.iframeLoaded = true
    },
    toggle () {
      this.active = !this.active
    },
    refresh () {
      let url = this.url

      setTimeout(() => {
        this.url = ''
        this.iframeLoaded = false
        this.$nextTick(() => {
          this.url = url
        })
      }, 350)

      this.active = false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showedToolbar = true
    }, 1000)
  }
}
</script>

<style lang="stylus">
.play-view
  .toolbar
    left 0
    right 0
    transform translateY(-101%)
    transition all .3s ease
    overflow visible
    &.active
      transform translateX(0)
  .toggle
    transform translateY(100%)
    a
      opacity 0.6
      border-radius 0 0 5px 5px
  .toolbar-title
    font-size 0.8rem
</style>
