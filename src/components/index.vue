<template>
  <div class="window-height window-width column items-center justify-center bg-light">
    <small>
      Presenting only Material theme
    </small>

    <h1 class="text-center">Quasar Play</h1>
    <button class="secondary push" v-link="'/play'">
      <i class="on-left">play_circle_outline</i>
      Play URL
    </button>
    <button class="secondary push" v-link="'/showcase'">
      <i class="on-left">layers</i>
      Quasar Showcase
    </button>

    <br>
    <button class="secondary clear" @click="launch()">
      <i class="on-left">launch</i>
      Quasar Documentation
    </button>

    <a class="ribbon" :title="'Built with Quasar v' + version"></a>
  </div>
</template>

<script>
import Quasar, { Utils } from 'quasar'

export default {
  data () {
    return {
      version: Quasar.version
    }
  },
  methods: {
    launch () {
      Utils.openURL('http://quasar-framework.org')
    }
  }
}
</script>

<style lang="styl" scoped>
p
  margin-bottom 0
button
  margin-top 10px
.ribbon
  width 12.1em
  height 12.1em
  position absolute
  overflow hidden
  top 0
  right 0
  z-index 9999
  pointer-events none
  font-size 15px
  text-decoration none
  text-indent -999999px
  &.fixed
    position fixed
  &:before
    content ''
    padding .38em 0
    background-color #1e857b
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .15))
    box-shadow 0 .15em .23em 0 rgba(0, 0, 0, .5)
    pointer-events auto
  &:after
    content attr(title)
    color white
    font-weight 700
    line-height 1.54em
    text-decoration none
    text-shadow 0 -.08em rgba(0, 0, 0, .5)
    text-align center
    text-indent 0
    padding .15em 0
    margin .15em 0
    border-width .08em 0
    border-style dotted
    border-color rgba(255, 255, 255, .7)

  &:before, &:after
    position absolute
    display block
    width 15.38em
    height 1.74em
    top 3.23em
    right -3.23em
    transform rotate(45deg)
</style>
