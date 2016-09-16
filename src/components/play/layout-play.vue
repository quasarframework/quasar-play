<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button v-go-back="'/'">
        <i>arrow_back</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Play URL
      </quasar-toolbar-title>
    </div>

    <quasar-tabs slot="navigation">
      <quasar-tab icon="queue_play_next" v-link="{path: '/play', exact: true, replace: true}">URL List</quasar-tab>
      <quasar-tab icon="info" v-link="{path: '/play/how-to', replace: true}">How To</quasar-tab>
    </quasar-tabs>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>
