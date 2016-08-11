<template>
  <div>
    <div class="layout-padding">
      <h5>
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each inline FABs below.
        The one that opens on the right also has a backdrop.
      </h5>

      <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
        <quasar-fab type="purple" icon="keyboard_arrow_up" direction="up">
          <quasar-small-fab>mail</quasar-small-fab>
          <quasar-small-fab>alarm</quasar-small-fab>
        </quasar-fab>

        <quasar-fab icon="keyboard_arrow_left" direction="left">
          <quasar-small-fab>mail</quasar-small-fab>
          <quasar-small-fab>alarm</quasar-small-fab>
        </quasar-fab>

        <quasar-fab backdrop type="secondary push" icon="keyboard_arrow_right" direction="right">
          <quasar-small-fab class="primary">mail</quasar-small-fab>
          <quasar-small-fab>alarm</quasar-small-fab>
        </quasar-fab>

        <quasar-fab :type="['tertiary', 'glossy']" icon="keyboard_arrow_down" direction="down">
          <quasar-small-fab>mail</quasar-small-fab>
          <quasar-small-fab>alarm</quasar-small-fab>
        </quasar-fab>
      </div>

      <h5 style="margin-bottom: 100px;">
        There's also the absolute positioned one on bottom
        right of screen which maintains position on Page scroll.
        It has a click/tap event injected on itself when expanded.
        You can close it by clicking/tapping on the whitey backdrop.
      </h5>

      <quasar-fab
        class="absolute-bottom-right"
        :click="alert"
        type="primary"
        active-icon="alarm"
        direction="up"
        style="right: 18px; bottom: 18px;"
      >
        <quasar-small-fab class="purple">mail</quasar-small-fab>
        <quasar-small-fab class="secondary">alarm</quasar-small-fab>
      </quasar-fab>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'quasar'

export default {
  methods: {
    alert () {
      Dialog.create({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      }).show()
    }
  }
}
</script>
