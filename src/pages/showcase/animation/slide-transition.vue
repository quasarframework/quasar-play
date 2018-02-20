<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">"Slide" Transition</p>

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
  </q-page>
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
