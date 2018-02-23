<template>
  <q-tabs
    color="primary"
    :inverted="$q.theme === 'ios'"
    :style="$q.theme === 'ios' ? { background: 'rgba(255,255,255,0.95' } : null"
  >
    <q-route-tab slot="title" icon="play_circle_outline" to="/showcase/layout-demo/play-with-layout" replace label="Play with Layout" />
    <q-route-tab slot="title" icon="view_array" to="/showcase/layout-demo/drawer-panels" replace label="Drawer Panels" />
    <q-route-tab slot="title" icon="pin_drop" to="/showcase/layout-demo/page-sticky" replace label="Page Sticky" />
    <q-route-tab slot="title" icon="play_for_work" to="/showcase/layout-demo/floating-action-button" replace label="Floating Action Button" />
  </q-tabs>
</template>

<script>
export default {
  name: 'demo-tabs'
}
</script>
