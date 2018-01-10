<template>
  <q-page padding class="text-center">
    <p class="caption" style="margin-top: 72px">
      Notice the four buttons positioned in each corner of the page.
      <br>
      If you will play with the Layout, you'll see that their position
      changes to accomodate page resize, drawer panels appearing / dissapearing,
      or header/footer going in & out of view or changing its size.
    </p>

    <q-page-sticky position="top-right" :offset="[18, 18]">
      <q-btn fab-mini color="secondary" icon="mail_outline" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab-mini color="secondary" icon="phone" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn fab-mini color="secondary" icon="thumb_up" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn fab-mini color="secondary" icon="location_on" class="animate-pop" />
    </q-page-sticky>
  </q-page>
</template>
