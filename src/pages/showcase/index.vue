<template>
  <q-page padding class="page-showcase">
    <div class="showcase-top text-center">
      <img src="~assets/quasar-logo.svg">

      <p class="caption">
        Use sidebar to browse through demos, which showcase only a few of the Quasar components and features.
        <br>
        For a full list, visit the documentation website.
      </p>
    </div>

    <div class="row justify-center">
      <div style="width: 850px; max-width: 90vw;" class="row">
        <div
          v-for="category in list"
          :key="category.hash"
          class="col-xs-6 col-sm-4 col-lg-3"
        >
          <div class="card text-center category-link text-primary" @click="show(category)">
            <q-icon :name="category.icon" />
            <p class="caption">{{ category.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <q-page-sticky v-show="category" position="bottom-right" :offset="[18, 18]">
      <q-btn round color="secondary" @click="category = false" class="animate-pop">
        <q-icon name="keyboard_backspace" />
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
import categories from '../../assets/categories'

export default {
  data () {
    return {
      category: false
    }
  },
  computed: {
    list () {
      return this.category || categories
    }
  },
  methods: {
    show (link) {
      if (link.features) {
        this.category = link.features
        this.hash = link.hash
        return
      }
      this.$router.push(`/showcase/${this.hash}/${link.hash}`)
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.page-showcase
  img
    width 100px
    height 100px
    margin-bottom 15px
  .showcase-top
    margin-bottom 35px
    .q-alert
      max-width 500px
  .card
    cursor pointer
    position relative
    padding 16px
    .q-icon
      font-size 56px
    p
      color rgba(0, 0, 0, .87)
      margin 15px 0 0 0 !important
    &:before
      content ''
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      border-radius 2px
      opacity 0
      transition opacity .2s
      background currentColor
    &:hover:before
      opacity .4
</style>
