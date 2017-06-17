<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each inline FABs below.
        The one that opens on the right also has a backdrop.
      </p>

      <div class="column items-center" style="margin-top: 140px; margin-bottom: 100px;">
        <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
          <q-fab-action color="lime" @click="toast('mail')" icon="mail" />
          <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm" />
        </q-fab>

        <br>

        <q-fab color="indigo" icon="keyboard_arrow_left" direction="left">
          <q-fab-action color="indigo" @click="toast('mail')" icon="mail" />
          <q-fab-action color="indigo" @click="toast('alarm')" icon="alarm" />
        </q-fab>

        <br>

        <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
          <q-fab-action color="amber" glossy @click="toast('mail')" icon="mail" />
          <q-fab-action color="orange" glossy @click="toast('alarm')" icon="alarm" />
        </q-fab>

        <br>

        <q-fab color="tertiary" glossy icon="keyboard_arrow_down" direction="down">
          <q-fab-action color="primary" @click="toast('mail')" icon="mail" />
          <q-fab-action color="primary" @click="toast('alarm')" icon="alarm" />
        </q-fab>
      </div>

      <p class="caption" style="margin-top: 140px; margin-bottom: 100px;">
        There's also the absolute positioned one on bottom
        right of screen which maintains position on Page scroll.
        It has a click/tap event injected on itself when expanded.
        You can close it by clicking/tapping on the whitey backdrop.
      </p>

      <p class="caption">
        <em>
          Intended scroll to highlight bottom right fixed positioned FAB.
        </em>
      </p>

      <q-fixed-position corner="bottom-right" :offset="[16, 16]">
        <q-fab
          color="primary"
          active-icon="alarm"
          direction="up"
          class="animate-pop"
        >
          <q-fab-action color="purple" @click="toast('mail')" icon="mail">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
          </q-fab-action>
          <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-fixed-position>

      <div style="height: 1000px">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import {
  QFab,
  QFabAction,
  QTooltip,
  QBtn,
  QFixedPosition,
  Dialog,
  Toast
} from 'quasar'

export default {
  components: {
    QFab,
    QFabAction,
    QTooltip,
    QBtn,
    QFixedPosition
  },
  methods: {
    alert () {
      Dialog.create({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    toast (icon) {
      Toast.create({
        icon,
        html: 'So you want your ' + icon + 's, huh?'
      })
    }
  }
}
</script>
