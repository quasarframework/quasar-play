<template>
  <div class="index-page bg-grey-2 window-height window-width column items-center no-wrap">
    <div class="banner bg-primary flex flex-center">
      Play
    </div>
    <div class="text-center">
      <div class="card bg-white shadow-4 column no-wrap flex-center group">
        <img src="~assets/quasar-play-logo-full.svg">
        <br>
        <q-btn
          color="primary"
          to="/showcase"
          class="full-width"
          icon="layers"
          no-ripple
          label="Quasar Showcase"
        />

        <q-btn
          color="secondary"
          class="full-width"
          type="a"
          href="https://quasar-framework.org"
          target="_blank"
          icon="launch"
          no-ripple
          label="Quasar Docs"
        />

        <q-btn
          color="grey-7"
          label="Read Privacy Policy"
          @click="viewPrivacyPolicy"
          flat
          rounded
          no-caps
          class="q-mt-sm"
        />

        <privacy-policy ref="privacy" />
      </div>
    </div>
    <a class="ribbon" :title="`Built with Quasar v${$q.version}`">&nbsp;</a>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import PrivacyPolicy from 'components/privacy-policy'

export default {
  components: {
    PrivacyPolicy
  },
  methods: {
    launch () {
      openURL('http://quasar-framework.org')
    },
    viewPrivacyPolicy () {
      this.$refs.privacy.show()
    }
  }
}
</script>

<style lang="stylus">
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
  width 14.1em
  height 14.1em
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
    width 23.38em
    height 1.74em
    top 4.8em
    right -5.8em
    transform rotate(45deg)
</style>
