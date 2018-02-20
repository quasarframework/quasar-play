<template>
  <q-page padding class="text-center">
    <p class="caption" style="margin-top: 72px">
      Notice the eight buttons positioned along the border of the page.
      <br>
      If you will play with the Layout, you'll see that their position
      changes to accomodate page resize, drawer panels appearing / dissapearing,
      or header/footer going in & out of view or changing its size.
    </p>

    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn fab-mini color="secondary" icon="location_on" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="top" :offset="[18, 18]">
      <q-btn fab-mini color="purple" icon="camera_enhance" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="top-right" :offset="[18, 18]">
      <q-btn fab-mini color="orange" icon="mail_outline" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="right" :offset="[18, 18]">
      <q-btn fab-mini color="red" icon="feedback" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab-mini color="brown-5" icon="phone" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="bottom" :offset="[18, 18]">
      <q-btn fab-mini color="primary" icon="g_translate" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn fab-mini color="lime" text-color="black" icon="thumb_up" class="animate-pop" />
    </q-page-sticky>

    <q-page-sticky position="left" :offset="[18, 18]">
      <q-btn fab-mini color="grey-3" text-color="dark" icon="loyalty" class="animate-pop" />
    </q-page-sticky>

    <div style="padding: 25px 16px 16px;">
      <p class="caption" v-for="n in 50" :key="`sticky-${n}`">
        <em>Page has intended scroll</em>
      </p>
    </div>
  </q-page>
</template>
