<template>
  <div class="index-page bg-grey-2 window-height window-width column items-center no-wrap">
    <div class="banner bg-primary flex flex-center">
      Play
    </div>
    <div class="text-center">
      <div class="card bg-white shadow-4 column no-wrap flex-center group">
        <img src="statics/quasar-play-logo-full.svg">
        <br>
        <q-btn
          v-if="$q.platform.is.cordova"
          color="primary"
          push
          class="full-width"
          @click="$router.push('/play')"
          icon="play_circle_outline"
        >
          Play URL
        </q-btn>
        <q-btn
          color="primary"
          push
          @click="$router.push('/showcase')"
          class="full-width"
          icon="layers"
        >
          Quasar Showcase
        </q-btn>

        <q-btn
          color="secondary"
          push
          class="full-width"
          @click="launch"
          icon="launch"
        >
          Quasar Docs
        </q-btn>

        <a
          class="row flex-center text-secondary"
          @click="viewPrivacyPolicy"
          style="margin-top: 15px; font-size: .75rem"
        >
          <div>Read Privacy Policy</div>
        </a>

        <privacy-policy ref="privacy" />
      </div>
    </div>
    <a class="ribbon" :title="`Built with Quasar v${$q.version}`"></a>
  </div>
</template>

<script>
import { QBtn, openURL } from 'quasar'
import PrivacyPolicy from './privacy-policy'

export default {
  components: {
    QBtn,
    PrivacyPolicy
  },
  methods: {
    launch () {
      openURL('http://beta.quasar-framework.org')
    },
    viewPrivacyPolicy () {
      this.$refs.privacy.show()
    }
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
    padding 10px 25px
    margin-top -90px
    border-radius 2px
    img
      height 140px
      width 140px

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
