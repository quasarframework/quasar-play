<template>
  <div class="layout-padding row justify-center flex-gutter-docs">
    <div style="width: 800px; max-width: 90vw;">
      <p class="caption">Prefixes (xs, sm, md, lg, xl) do not refer to device screen size, but to the size of gutter between elements.</p>

      <template v-for="type in ['xs', 'sm', 'md', 'lg', 'xl']">
        <p class="caption">{{type}}-gutter</p>
        <div class="doc-container with-bg">
          <div class="row" :class="`${type}-gutter`">
            <div class="col-4" v-for="n in 5">
              <div class="my-content">&nbsp;</div>
            </div>
          </div>
        </div>
      </template>

      <p class="caption">No vertical gutter</p>
      <div class="doc-container with-bg">
        <div class="row xs-gutter no-vert-gutter">
          <div class="col-4" v-for="n in 5">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">No horizontal gutter</p>
      <div class="doc-container with-bg">
        <div class="row xs-gutter no-horiz-gutter">
          <div class="col-4" v-for="n in 5">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">QInput example (6 rows on xs screens and 4 rows on sm+)</p>
      <div>
        <div class="row sm-gutter">
          <div class="col-12">
            <q-input inverted v-model="model" class="no-margin" float-label="col-12" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 TOP LEFT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 TOP RIGHT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM LEFT" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input inverted v-model="model" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM RIGHT" />
          </div>
          <div class="col-12">
            <q-input inverted v-model="model" class="no-margin" float-label="col-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QInput } from 'quasar'

export default {
  components: {
    QInput
  },
  data () {
    return {
      model: 'Some text'
    }
  }
}
</script>

<style lang="stylus">
.flex-gutter-docs
  .doc-container.with-bg
    background rgba(255,0,0,.1)
    overflow hidden
  .doc-container + .doc-container
    margin-top 25px
  .my-content
    padding 10px 15px
    background rgba(86,61,124,.15)
    border 1px solid rgba(86,61,124,.2)
</style>
