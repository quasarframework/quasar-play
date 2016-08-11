<template>
  <quasar-layout>
    <div slot="header" class="toolbar primary">
      <button v-link="'/'">
        <i>arrow_back</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Play URL
      </quasar-toolbar-title>
    </div>

    <quasar-tabs slot="navigation" class="primary">
      <quasar-tab icon="queue_play_next" v-link="{path: '/play', exact: true}">URL List</quasar-tab>
      <quasar-tab icon="info" v-link="'/play/how-to'">How To</quasar-tab>
    </quasar-tabs>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>
