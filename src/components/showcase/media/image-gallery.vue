<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Gallery</p>
      <q-gallery :src="gallery"></q-gallery>

      <p class="caption">Gallery Carousel</p>
      <q-gallery-carousel :src="slider"></q-gallery-carousel>

      <p class="caption">Gallery Carousel</p>
      <q-gallery-carousel :src="slider" horizontal-quick-view></q-gallery-carousel>

      <p class="caption">Gallery Carousel with Infinite Scroll & Autoplay</p>
      <q-gallery-carousel dots infinite autoplay :src="secondSlider"></q-gallery-carousel>
    </div>
  </div>
</template>

<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'

export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      gallery: [
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg'
      ],
      slider: [
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg',
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg'
      ],
      secondSlider: [
        'statics/mountains.jpg',
        'statics/parallax1.jpg',
        'statics/parallax2.jpg'
      ]
    }
  }
}
</script>
