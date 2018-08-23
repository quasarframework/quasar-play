<template>
  <q-page padding class="docs-tab-pane row justify-center">
    <div style="width: 400px; max-width: 90vw;">
      <p class="caption">Tab Panes below (shadow, animated, swipeable)</p>
      <q-tabs class="shadow-1" animated swipeable color="secondary" glossy align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes below (inverted)</p>
      <q-tabs animated swipeable inverted color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes above</p>
      <q-tabs animated swipeable position="bottom" color="amber" text-color="dark" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes above (inverted)</p>
      <q-tabs class="shadow-1" animated swipeable inverted position="bottom" color="purple" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" />
        <q-tab name="alarms" slot="title" icon="alarm" />
        <q-tab name="movies" slot="title" icon="movie" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Keeping tabs alive (Vue won't destroy content on Tab selection change)</p>
      <q-tabs class="shadow-1" animated swipeable color="tertiary" glossy align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane keep-alive name="mails">Emails tab</q-tab-pane>
        <q-tab-pane keep-alive name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane keep-alive name="movies">Movies tab</q-tab-pane>
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style lang="stylus">
.docs-tab-pane
  .q-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
</style>
