<template>
  <q-tabs
    v-if="pageMeta.tabs.length > 0"
    :class="{'within-iframe-hide': !pageMeta.iframeTabs}"
    :inverted="$q.theme === 'ios'"
    :style="$q.theme === 'ios' ? { background: 'rgba(255,255,255,0.95' } : null"
  >
    <q-route-tab
      v-for="tab in pageMeta.tabs"
      :key="tab.hash"
      slot="title"
      :icon="tab.icon"
      :to="`/showcase${pageMeta.hash}/${tab.hash}`"
      :label="tab.label"
      exact
      replace
      :alert="tab.status !== void 0"
    />
  </q-tabs>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShowcaseTabs',
  computed: mapState('showcase', [
    'pageMeta'
  ])
}
</script>
