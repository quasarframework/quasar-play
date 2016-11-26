<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button v-go-back="'/'">
        <i>arrow_back</i>
      </button>
      <q-toolbar-title :padding="1">
        Play URL
      </q-toolbar-title>
    </div>

    <q-tabs slot="navigation">
      <q-tab route="/play" exact replace icon="queue_play_next">URL List</q-tab>
      <q-tab route="/play/how-to" replace icon="info">How To</q-tab>
    </q-tabs>

    <router-view class="layout-view"></router-view>
  </q-layout>
</template>
