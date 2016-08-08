<template>
  <div>
    <div class="layout-padding">
      <h2>"Slide" Transition</h2>

      <p>
        Click/Tap on the Toggle below to see the transition in action.
      </p>
      <p>
        <label>
          <quasar-toggle :model.sync="visible"></quasar-toggle>
          Visible image
        </label>
      </p>

      <p>
        <img
          class="responsive"
          v-show="visible"
          transition="slide"
          :src="'statics/quasar.jpg'"
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>
