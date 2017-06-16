<template>
  <div class="layout-padding">
    <h5>"Slide" Transition</h5>

    <p class="caption">
      <span class="desktop-only">Click</span>
      <span class="mobile-only">Tap</span>
      on the Toggle below to see the transition in action.
    </p>
    <p>
      <q-toggle v-model="visible" label="Visible image" />
    </p>

    <q-slide-transition>
      <p v-show="visible" style="margin: 0; max-width: 500px">
        <img
          class="responsive"
          src="~assets/quasar.jpg"
        >
      </p>
    </q-slide-transition>
  </div>
</template>

<script>
import {
  QSlideTransition,
  QToggle
} from 'quasar'

export default {
  components: {
    QSlideTransition,
    QToggle
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>
