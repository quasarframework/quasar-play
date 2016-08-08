<template>
  <div>
    <div class="layout-padding">
      <h5>
        Basic Slider. No controls. Just swipe between slides or
        use you mouse to drag slides to left or right.
      </h5>
      <quasar-slider class="text-white">
        <div slot="slide" class="bg-primary">
          Slide 1
        </div>
        <div slot="slide" class="bg-secondary">
          Slide 2
        </div>
        <div slot="slide" class="bg-tertiary">
          Slide 3
        </div>
      </quasar-slider>

      <h5>Slider with Arrows, Dots and Fullscreen controls.</h5>
      <quasar-slider arrows dots fullscreen class="text-white">
        <div slot="slide" class="bg-primary">
          <div>Slide 1</div>
          <div v-for="n in 12">Line {{(n+2)}}</div>
        </div>
        <div slot="slide" class="bg-secondary">
          Slide 2
        </div>
        <div slot="slide" class="bg-tertiary">
          Slide 3
        </div>
      </quasar-slider>

      <h5>Slider with Centered Content</h5>
      <quasar-slider arrows dots class="text-white">
        <div slot="slide" class="bg-primary centered">
          Slide 1
        </div>
        <div slot="slide" class="bg-secondary centered">
          Slide 2
        </div>
        <div slot="slide" class="bg-tertiary centered">
          Slide 3
        </div>
      </quasar-slider>

      <h5>Slider with Custom Actions as Controls</h5>
      <quasar-slider arrows dots actions class="text-white">
        <div slot="slide" class="bg-primary">
          <div v-for="n in 20">Slide {{n}}</div>
        </div>
        <div slot="slide" class="bg-secondary">
          Slide 2
        </div>
        <div slot="slide" class="bg-tertiary">
          Slide 3
        </div>
        <i slot="action">camera_enhance</i>
        <i slot="action">bookmark_border</i>
        <i slot="action">add_shopping_cart</i>
      </quasar-slider>

      <h5>Launch Slider on Fullscreen</h5>
      <button class="primary glossy" @click="launchModal()">
        Launch
      </button>
    </div>
  </div>
</template>

<script>
import { Modal } from 'quasar'
import pageSliderModal from 'helpers/page-slider-modal.vue'

export default {
  methods: {
    launchModal () {
      Modal
        .create(pageSliderModal)
        .set({maximized: true})
        .show()
    }
  }
}
</script>
