<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">With Component</p>
      <q-video
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />

      <p class="caption">With HTML Markup</p>
      <div class="q-video">
        <iframe
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { QVideo } from 'quasar'

export default {
  components: {
    QVideo
  }
}
</script>
