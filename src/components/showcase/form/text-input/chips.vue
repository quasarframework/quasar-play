<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model:
      </div>
      <div
        class="label chip"
        v-for="chip in model"
        track-by="$index"
      >{{ chip }}</div>

      <br><br><br>
      <quasar-chips :model.sync="model"></quasar-chips>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: ['Joe', 'Jim']
    }
  }
}
</script>
