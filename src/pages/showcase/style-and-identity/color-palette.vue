<template>
  <q-page padding id="view-colors">
    <p class="caption">Main Colors</p>
    <div
      class="main-color shadow-1 row inline flex-center text-white"
      v-for="color in mainColors"
      :key="color"
      :class="`bg-${color}`"
    >
      {{ color }}
    </div>
    <div
      class="main-color shadow-1 row inline flex-center text-dark"
      v-for="color in mainLightColors"
      :key="color"
      :class="`bg-${color}`"
    >
      {{ color }}
    </div>

    <p class="caption">Full Palette</p>
    <div class="detail" v-for="color in colors" :key="color">
      <h5 class="detailed-color shadow-1 column flex-center text-white" :class="`bg-${color}`">{{ color }}</h5>
      <div class="detailed-color column flex-center" v-for="n in 14" :key="n" :class="`bg-${color}-${n}`">{{ color }}-{{ n }}</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      mainColors: ['primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'faded', 'dark', 'black'],
      mainLightColors: ['white', 'light'],
      colors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
    }
  }
}
</script>

<style lang="stylus">
#view-colors
  div.main-color
    width 110px
    margin 5px
    height 40px

  .detailed-color
    width 100%

  div.detailed-color
    height 55px

  div.detail
    margin-bottom 25px
    max-width 400px
    min-width 135px
    display inline-block
    margin-right 5px

  h5
    margin-bottom 5px
    padding 10px 5px
</style>
