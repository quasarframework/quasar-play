<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail">"<em>{{search}}</em>"</span>
      </div>

      <br><br>

      <quasar-search :model.sync="search"></quasar-search>
      <quasar-search :model.sync="search" class="orange"></quasar-search>
      <quasar-search :model.sync="search" class="secondary"></quasar-search>
      <quasar-search :model.sync="search" class="primary"></quasar-search>
      <quasar-search :model.sync="search" class="dark"></quasar-search>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
