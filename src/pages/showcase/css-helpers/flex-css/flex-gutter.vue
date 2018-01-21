<template>
  <q-page padding class="row justify-center flex-gutter-docs">
    <div style="width: 800px; max-width: 90vw;">
      <p class="caption">Suffixes (none, xs, sm, md, lg, xl) do not refer to device screen size, but to the size of gutter between elements.</p>

      <div class="doc-container with-bg" v-for="type in ['none', 'xs', 'sm', 'md', 'lg', 'xl']" :key="`gutter-${type}`">
        <p class="caption">gutter-{{ type }}</p>
        <div class="row" :class="`gutter-${type}`">
          <div class="col-4" v-for="n in 5" :key="`gutter-${n}`">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">Horizontal classes available. Example: 'gutter-x-sm':</p>
      <div class="doc-container with-bg">
        <div class="row gutter-x-sm">
          <div class="col-4" v-for="n in 5" :key="`gutter-x-${n}`">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">Vertical classes available. Example: 'gutter-y-sm':</p>
      <div class="doc-container with-bg">
        <div class="row gutter-y-sm">
          <div class="col-4" v-for="n in 5" :key="`gutter-y-${n}`">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">Mix and match. Example: 'gutter-x-lg gutter-y-sm':</p>
      <div class="doc-container with-bg">
        <div class="row gutter-x-lg gutter-y-sm">
          <div class="col-4" v-for="n in 5" :key="`gutter-xy-${n}`">
            <div class="my-content">&nbsp;</div>
          </div>
        </div>
      </div>

      <p class="caption">QInput example (6 rows on xs screens and 4 rows on sm+)</p>
      <div>
        <div class="row gutter-sm">
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
  </q-page>
</template>

<script>
export default {
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
