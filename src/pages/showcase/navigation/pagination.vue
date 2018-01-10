<template>
  <q-page padding>
    <div class="label bg-secondary text-white">
      Model <span class="right-detail"><em>{{page}}</em></span>
    </div>

    <p class="caption">Page buttons</p>
    <q-pagination v-model="page" color="red"
      :min="min"
      :max="max"
      :boundaryLinks="boundaryLinks"
      :boundaryNumbers="boundaryNumbers"
      :directionLinks="directionLinks"
      :ellipses="ellipses"
      :maxPages="maxPages"
    />

    <p class="caption">Page buttons - disabled</p>
    <q-pagination v-model="page" color="red" disable
      :min="min"
      :max="max"
      :boundaryLinks="boundaryLinks"
      :boundaryNumbers="boundaryNumbers"
      :directionLinks="directionLinks"
      :ellipses="ellipses"
      :maxPages="maxPages"
    />

    <p class="caption">
      Input field<br/>
      <small>
        You can also
        <span class="desktop-only">click</span>
        <span class="mobile-only">tap</span>
        on the Input box and type out another page number
        then hit &lt;ENTER&gt;
      </small>
    </p>

    <q-pagination v-model="page" input
      :min="min"
      :max="max"
      :boundaryLinks="boundaryLinks"
      :directionLinks="directionLinks"
      :ellipses="ellipses"
      :maxPages="maxPages"
    />

    <p class="caption">Input field - disabled</p>
    <q-pagination v-model="page" input disable
      :min="min"
      :max="max"
      :boundaryLinks="boundaryLinks"
      :directionLinks="directionLinks"
      :ellipses="ellipses"
      :maxPages="maxPages"
    />

    <p class="caption">Configuration</p>
    <div class="row gutter-sm items-center">
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-input type="number" v-model="min" stack-label="Minimum page number" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-input type="number" v-model="max" :min="min" stack-label="Maximum page number" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-input type="number" v-model="maxPages" stack-label="Maximum number of page buttons" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-checkbox v-model="boundaryLinks" toggleIndeterminate label="Show boundary buttons" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-checkbox v-model="directionLinks" toggleIndeterminate label="Show direction buttons" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-checkbox v-model="boundaryNumbers" toggleIndeterminate label="Always show first and last page" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <q-checkbox v-model="ellipses" toggleIndeterminate label="Show ellipses" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      page: 5,
      min: 1,
      max: 17,
      boundaryLinks: null,
      boundaryNumbers: null,
      directionLinks: null,
      ellipses: null,
      maxPages: 7
    }
  }
}
</script>
