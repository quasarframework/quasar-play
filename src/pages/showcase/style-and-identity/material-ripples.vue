<template>
  <q-page padding class="docs-ripple row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on the area below to see it in action.
      </p>

      <div v-ripple class="relative-position" :class="classes" />
    </div>
  </q-page>
</template>

<script>
const colors = ['primary', 'amber', 'secondary', 'orange', 'tertiary', 'lime', 'cyan', 'purple', 'brown', 'blue']

export default {
  data () {
    return {
      color: colors[0],
      index: 0
    }
  },
  computed: {
    classes () {
      return `bg-${this.color}`
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % colors.length
      this.color = colors[this.index]
    }, 3000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="stylus">
@import '~variables'

.docs-ripple > div > .relative-position
  height 150px
  border-radius 3px
  cursor pointer
  color white
  transition background 1.5s
  box-shadow $shadow-2
</style>
