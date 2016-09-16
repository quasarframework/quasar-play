<template>
  <div class="play-view window-height window-width" style="overflow: hidden">
    <div
      class="toolbar primary fixed shadow-1"
      :class="{active: active || !showedToolbar}"
    >
      <button v-go-back="'/play'">
        <i>close</i>
      </button>
      <quasar-toolbar-title :padding="1">
        {{url}}
      </quasar-toolbar-title>
      <button @click="refresh">
        <i>refresh</i>
      </button>
      <div class="toggle absolute-bottom row justify-center">
        <a @click="toggle" class="bg-white text-primary">
          <i v-show="!active">add_circle</i>
          <i v-else>remove_circle</i>
        </a>
      </div>
    </div>
    <div
      class="window-height window-width row items-center justify-center"
      v-show="!iframeLoaded"
    >
      <spinner></spinner>
    </div>
    <iframe
      v-else
      :src="url"
      @load="onload"
      class="full-height full-width"
      style="border: 0;"
    ></iframe>
  </div>
</template>

<script>
export default {
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
  ready () {
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
