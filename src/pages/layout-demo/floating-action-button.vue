<template>
  <q-page padding>
    <p class="caption">
      <span class="desktop-only">Click</span>
      <span class="mobile-only">Tap</span>
      on each inline FABs below.
      The one that opens on the right also has a backdrop.
    </p>

    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" click="notify('mail')" icon="mail" />
        <q-fab-action color="secondary" @click="notify('alarm')" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
        <q-fab-action color="amber" text-color="black" @click="notify('mail')" icon="mail" />
        <q-fab-action color="amber" text-color="black" @click="notify('alarm')" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
        <q-fab-action color="primary" @click="notify('mail')" icon="mail" />
        <q-fab-action color="tertiary" @click="notify('alarm')" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="tertiary" glossy icon="keyboard_arrow_down" direction="down">
        <q-fab-action color="amber" text-color="black" @click="notify('mail')" icon="mail" />
        <q-fab-action color="amber" text-color="black" @click="notify('alarm')" icon="alarm" />
      </q-fab>
    </div>

    <p class="caption" style="margin-bottom: 100px;">
      There's also the absolute positioned one on bottom
      right of screen which maintains position on Page scroll.
      It has a click/tap event injected on itself when expanded.
    </p>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="primary"
      >
        <q-fab-action @click="alert" color="blue" class="white" icon="person add" />
        <q-fab-action @click="notify('mail')" color="blue" class="white" icon="mail" />
      </q-fab>
    </q-page-sticky>

    <div style="height: 1000px" />
  </q-page>
</template>

<script>
export default {
  methods: {
    alert () {
      this.$q.dialog({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    notify (icon) {
      this.$q.notify({
        icon,
        message: 'So you want your ' + icon + 's, huh?'
      })
    }
  }
}
</script>
