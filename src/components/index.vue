<template>
  <div class="index-page bg-white window-height window-width column items-center">
    <div class="banner bg-primary flex items-center justify-center">
      Play
    </div>
    <div class="text-center">
      <div class="card bg-grey-2 shadow-3 column items-center justify-center group">
        <h1 class="text-primary">Quasar</h1>
        <img :src="'statics/logo.png'">
        <br>
        <router-link to="/play" tag="button" class="full-width primary push">
          <i class="on-left">play_circle_outline</i>
          Play URL
        </router-link>
        <router-link to="/showcase" tag="button" class="full-width primary push">
          <i class="on-left">layers</i>
          Quasar Showcase
        </router-link>

        <button class="full-width secondary push" @click="launch">
          <i class="on-left">launch</i>
          Quasar Docs
        </button>

        <a
          class="row items-center justify-center text-secondary"
          @click="viewPrivacyPolicy"
          style="margin-top: 15px; font-size: .75rem"
        >
          <i class="on-left" style="font-size: 150%">info_outline</i>
          <div>Read Privacy Policy</div>
        </a>

        <privacy-policy ref="privacy" />
      </div>
    </div>
    <a class="ribbon" :title="'Built with Quasar v' + version"></a>
  </div>
</template>

<script>
import Quasar, { Utils } from 'quasar'
import PrivacyPolicy from './privacy-policy'

export default {
  data () {
    return {
      version: Quasar.version
    }
  },
  methods: {
    launch () {
      Utils.openURL('http://quasar-framework.org')
    },
    viewPrivacyPolicy () {
      this.$refs.privacy.show()
    }
  },
  components: {
    PrivacyPolicy
  }
}
</script>

<style lang="styl">
.index-page
  .banner
    height 50vh
    width 100%
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .card
    width 80vw
    max-width 500px
    padding 25px
    margin-top -35px
    img
      height 62px
      width 62px

.ribbon
  width 12.1em
  height 12.1em
  position absolute
  overflow hidden
  top 0
  right 0
  z-index 39
  pointer-events none
  font-size 15px
  text-decoration none
  text-indent -999999px
  opacity 0.7
  &.fixed
    position fixed
  &:before
    content ''
    padding .38em 0
    background-color white
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .15))
    box-shadow 0 .15em .23em 0 rgba(0, 0, 0, .5)
    pointer-events auto
  &:after
    content attr(title)
    color #027be3
    line-height 1.54em
    text-decoration none
    text-align center
    text-indent 0
    padding .15em 0
    margin .15em 0

  &:before, &:after
    position absolute
    display block
    width 15.38em
    height 1.74em
    top 3.23em
    right -3.23em
    transform rotate(45deg)
</style>
