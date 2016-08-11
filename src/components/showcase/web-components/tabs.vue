<template>
  <div>
    <div class="layout-padding">
      <p class="caption desktop-only">
        On a real mobile device Tabs look a little different
        in the sense that arrows won't be shown since user can
        pan (touch action) through the menu.
      </p>

      <h5>They come in colors</h5>
      <div class="group">
        <quasar-tabs class="primary">
          <quasar-tab icon="mail">Mails</quasar-tab>
          <quasar-tab icon="alarm">Alarms</quasar-tab>
          <quasar-tab icon="movie">Movies</quasar-tab>
        </quasar-tabs>
        <quasar-tabs class="amber clear">
          <quasar-tab icon="mail">Mails</quasar-tab>
          <quasar-tab icon="alarm">Alarms</quasar-tab>
          <quasar-tab icon="movie">Movies</quasar-tab>
        </quasar-tabs>
        <quasar-tabs class="secondary">
          <quasar-tab icon="mail">Mails</quasar-tab>
          <quasar-tab icon="alarm">Alarms</quasar-tab>
          <quasar-tab icon="movie">Movies</quasar-tab>
        </quasar-tabs>
      </div>

      <br>
      <h5>
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on Tabs from below.
      </h5>

      <quasar-tabs>
        <quasar-tab
          v-for="tab in tabs"
          :hidden="tab.hidden"
          :disabled="tab.disabled"
          :icon="tab.icon"
          :target="tab.target"
        >
          {{tab.label}}
        </quasar-tab>
      </quasar-tabs>

      <div id="tab-1">
        <div v-for="n in 5">Tab 1</div>
      </div>
      <div id="tab-2">
        <div v-for="n in 10">Tab 2</div>
      </div>
      <div id="tab-3">
        <div v-for="n in 7">Tab 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          label: 'Tab 1',
          icon: 'message',
          target: '#tab-1',
          active: true
        },
        {
          label: 'Disabled',
          icon: 'fingerprint',
          disabled: true
        },
        {
          label: 'Tab 2',
          icon: 'alarm',
          target: '#tab-2'
        },
        {
          label: 'Tab 3',
          icon: 'accessibility',
          target: '#tab-3'
        },
        {
          label: 'Tab 4',
          icon: 'accessibility',
          target: '#tab-4',
          hidden: true
        }
      ]
    }
  }
}
</script>

<style scoped>
div[id^='tab-'] {
  margin-top: 20px;
}
</style>
