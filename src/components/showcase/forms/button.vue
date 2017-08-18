<template>
  <div class="layout-padding docs-btn row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard Button</p>
      <q-btn color="white" class="text-black">Standard</q-btn>
      <q-btn color="primary">Primary</q-btn>
      <q-btn color="secondary">Secondary</q-btn>
      <q-btn color="amber">Amber</q-btn>
      <q-btn color="brown-5">Brown 5</q-btn>
      <q-btn color="deep-orange">Deep Orange</q-btn>
      <q-btn color="purple">Purple</q-btn>
      <q-btn color="black">Black</q-btn>

      <p class="caption">Custom Color Examples</p>
      <q-btn style="background: #FF0080; color: white">Fuchsia</q-btn>
      <q-btn flat style="color: #FF0080">Fuchsia Flat</q-btn>
      <q-btn style="background: goldenrod; color: white">Goldenrod</q-btn>
      <q-btn outline style="color: goldenrod;">Goldenrod</q-btn>

      <p class="caption">Button with icons</p>
      <q-btn color="primary" icon="mail">
        On Left
      </q-btn>
      <q-btn color="secondary" icon-right="mail">
        On Right
      </q-btn>

      <p class="caption">Round Button</p>
      <q-btn round color="primary" icon="shopping_cart" />
      <q-btn round color="secondary" icon="navigation" />
      <q-btn round color="amber" icon="layers_clear" />
      <q-btn round color="brown-5" icon="directions" />
      <q-btn round color="deep-orange" icon="edit_location" />
      <q-btn round color="purple" icon="local_grocery_store" />
      <q-btn round color="black" icon="my_location" />

      <p class="caption">Button sizes (small, standard, big)</p>
      <q-btn color="primary" small>Small</q-btn>
      <q-btn color="primary">Standard</q-btn>
      <q-btn color="primary" big>Big</q-btn>
      <br>
      <q-btn round icon="add_a_photo" color="primary" small />
      <q-btn round icon="camera" color="primary" />
      <q-btn round icon="camera_front" color="primary" big />

      <p class="caption">Flat button</p>
      <q-btn flat color="primary">Flat</q-btn>
      <q-btn flat round color="primary">
        <q-icon name="card_giftcard" />
      </q-btn>

      <p class="caption">Outline buttons</p>
      <q-btn outline color="primary">Outline</q-btn>
      <q-btn round outline color="primary">
        <q-icon name="card_giftcard" />
      </q-btn>

      <p class="caption">Push button</p>
      <q-btn push color="primary">Push</q-btn>
      <q-btn push color="primary" round>
        <q-icon name="card_giftcard" />
      </q-btn>

      <p class="caption">Disabled button</p>
      <q-btn color="primary" disable>Disabled</q-btn>
      <q-btn color="primary" round disable>
        <q-icon name="card_giftcard" />
      </q-btn>

      <p class="caption">Glossy button</p>
      <q-btn color="primary" glossy>Glossy</q-btn>
      <q-btn color="secondary" glossy>Glossy</q-btn>
      <q-btn color="deep-orange" glossy>Glossy</q-btn>
      <q-btn round color="primary" glossy>
        <q-icon name="card_giftcard" />
      </q-btn>
      <q-btn round color="secondary" glossy>
        <q-icon name="local_florist" />
      </q-btn>
      <q-btn round color="deep-orange" glossy>
        <q-icon name="local_activity" />
      </q-btn>

      <p class="caption">Block button</p>
      <q-btn color="primary" class="block" icon="alarm">Block</q-btn>
      <q-btn color="secondary" class="block">Block</q-btn>

      <p class="caption">Full width button</p>
      <q-btn color="primary" class="full-width">Full-width</q-btn>
      <q-btn color="secondary" class="full-width">Full-width</q-btn>

      <p class="caption">Button with progress</p>
      <q-btn loader color="secondary" @click="simulateProgress">Button</q-btn>
      <q-btn loader color="red" @click="simulateProgress">
        Button
        <span slot="loading">Loading...</span>
      </q-btn>
      <q-btn loader color="purple" @click="simulateProgress">
        Button
        <q-spinner-radio slot="loading" />
      </q-btn>
      <q-btn loader color="primary" @click="simulateProgress">
        Button
        <span slot="loading">
          <q-spinner-hourglass class="on-left" />
          Loading...
        </span>
      </q-btn>
      <br>
      <q-btn round loader color="brown" @click="simulateProgress" icon="camera_front">
        <q-spinner-facebook slot="loading" />
      </q-btn>
      <q-btn round loader color="black" @click="simulateProgress" icon="camera_rear">
        <q-spinner-gears slot="loading" />
      </q-btn>
      <br>
      <q-btn v-model="progress" loader color="primary">
        Controlled with v-model
        <span slot="loading">
          <q-spinner-radio class="on-left" />
          Click "Stop" Button
        </span>
      </q-btn>
      <q-btn :disable="!progress" color="negative" @click="stopProgress">Stop</q-btn>

      <p class="caption">Button with deterministic progress</p>
      <q-btn loader :percentage="percentage1" color="primary" @click="startComputing1">
        Compute PI
        <span slot="loading">
          <q-spinner-gears class="on-left" />
          Computing...
        </span>
      </q-btn>

      <q-btn
        loader
        :percentage="percentage2"
        round
        color="secondary"
        @click="startComputing2"
        icon="cloud_upload"
      />
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QIcon,
  QSpinnerRadio,
  QSpinnerHourglass,
  QSpinnerFacebook,
  QSpinnerGears
} from 'quasar'

export default {
  components: {
    QBtn,
    QIcon,
    QSpinnerRadio,
    QSpinnerHourglass,
    QSpinnerFacebook,
    QSpinnerGears
  },
  data () {
    return {
      progress: false,
      percentage1: 0,
      percentage2: 0
    }
  },
  methods: {
    simulateProgress (e, done) {
      // simulate a delay
      setTimeout(done, 3000)
    },
    stopProgress () {
      this.progress = false
    },
    startComputing1 (e, done) {
      this.percentage1 = 0
      this.interval1 = setInterval(() => {
        this.percentage1 += Math.floor(Math.random() * 8 + 10)
        if (this.percentage1 >= 100) {
          clearInterval(this.interval1)
          done()
        }
      }, 700)
    },
    startComputing2 (e, done) {
      this.percentage2 = 0
      this.interval2 = setInterval(() => {
        this.percentage2 += Math.floor(Math.random() * 8 + 10)
        if (this.percentage2 >= 100) {
          clearInterval(this.interval2)
          done()
        }
      }, 700)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval1)
    clearInterval(this.interval2)
  }
}
</script>

<style lang="stylus">
.docs-btn .q-btn
  margin 5px
</style>
