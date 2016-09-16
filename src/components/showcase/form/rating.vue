<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{ratingModel}}</em></span>
      </div>

      <div style="font-size: 2rem; margin-top: 20px;">
        <quasar-rating :model.sync="ratingModel" :max-grade="3"></quasar-rating>
        <quasar-rating class="primary" :model.sync="ratingModel" :max-grade="5" icon="pets"></quasar-rating>
        <quasar-rating class="orange" :model.sync="ratingModel" :max-grade="9" icon="thumb_up"></quasar-rating>
        <quasar-rating style="font-size: 3rem" class="teal" :model.sync="ratingModel" :max-grade="6" icon="home"></quasar-rating>
      </div>

      <p class="caption">Disabled State</p>
      <quasar-rating style="font-size: 2rem" class="primary" :model.sync="ratingModel" :max-grade="6" icon="create" disable></quasar-rating>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratingModel: 1
    }
  }
}
</script>
