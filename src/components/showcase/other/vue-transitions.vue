<template>
  <div>
    <div class="layout-padding">
      <h5>"Slide" Transition</h5>

      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on the Toggle below to see the transition in action.
      </p>
      <p>
        <label>
          <quasar-toggle :model.sync="visible"></quasar-toggle>
          Visible image
        </label>
      </p>

      <p
        v-show="visible"
        transition="slide"
      >
        <img
          class="responsive"
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
