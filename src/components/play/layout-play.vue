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
      <quasar-tab route="/play" exact replace icon="queue_play_next">URL List</quasar-tab>
      <quasar-tab route="/play/how-to" replace icon="info">How To</quasar-tab>
    </quasar-tabs>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>
