<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{page}}</em></span>
      </div>

      <br><br><br>

      <quasar-pagination :model.sync="page" :max="17"></quasar-pagination>

      <br><br>
      <h5>
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on the Input box and type out another page number
        then hit &lt;ENTER&gt;
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  }
}
</script>
