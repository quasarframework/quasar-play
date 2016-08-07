<template>
  <quasar-layout>
    <div slot="header" class="toolbar primary">
      <button v-link="'/'">
        <i>arrow_back</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Play URL
      </quasar-toolbar-title>
      <button v-link="'/showcase'">
        Showcase
        <i class="on-right">layers</i>
      </button>
    </div>

    <quasar-tabs slot="navigation" class="primary">
      <quasar-tab icon="queue_play_next" v-link="{path: '/play', exact: true}">URL List</quasar-tab>
      <quasar-tab icon="info" v-link="'/play/how-to'">How To</quasar-tab>
    </quasar-tabs>

    <div class="layout-view">
      <router-view class="layout-scroll-area"></router-view>
    </div>
  </quasar-layout>
</template>
