<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Scroll down <q-icon style="font-size: 3rem" class="animate-bounce" name="keyboard_arrow_down" />
      </p>
      <p class="caption">
        A circular button is set to appear after scrolling 500px.
        <br>
        After another 500px another element will appear on the left.
      </p>

      <q-fixed-position corner="bottom-right" :offset="[18, 18]">
        <q-btn
          color="primary"
          round
          v-back-to-top.animate="{offset: 500, duration: 200}"
          class="animate-pop"
        >
          <q-icon name="keyboard_arrow_up" />
        </q-btn>
      </q-fixed-position>

      <q-fixed-position corner="top-left" :offset="[0, 100]">
        <a
          v-back-to-top.animate="1000"
          class="animate-pop play-backtotop non-selectable"
          v-ripple.mat
        >
          Back to top
        </a>
      </q-fixed-position>

      <p class="caption" v-for="n in 50">Keep scrolling...</p>
    </div>
  </div>
</template>

<script>
import {
  BackToTop,
  Ripple,
  QBtn,
  QIcon,
  QFixedPosition
} from 'quasar'

export default {
  components: {
    QBtn,
    QIcon,
    QFixedPosition
  },
  directives: {
    BackToTop,
    Ripple
  }
}
</script>

<style lang="styl">
@import '~variables'

.play-backtotop
  color white
  position fixed
  left 0
  top 30%
  padding 15px
  width 90px
  background-color $secondary
  border-radius 0 15px 15px 0
  &:hover
    color $grey-4
</style>
