<template>
  <q-page padding class="docs-btn row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard Button</p>
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />

      <p class="caption">Custom Color Examples</p>
      <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
      <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
      <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
      <q-btn outline style="color: goldenrod;" label="Goldenrod" />

      <p class="caption">Button with icons</p>
      <q-btn color="primary" icon="mail" label="On Left" />
      <q-btn color="secondary" icon-right="mail" label="On Right" />
      <q-btn color="info" icon="mail" icon-right="send" label="On Left and Right" />

      <p class="caption">Round Button</p>
      <q-btn round color="primary" icon="shopping_cart" />
      <q-btn round color="secondary" icon="navigation" />
      <q-btn round color="amber" icon="layers_clear" />
      <q-btn round color="brown-5" icon="directions" />
      <q-btn round color="deep-orange" icon="edit_location" />
      <q-btn round color="purple" icon="local_grocery_store" />
      <q-btn round color="black" icon="my_location" />

      <p class="caption">Button sizes ({{sizes.join(', ')}})</p>
      <q-btn v-for="size in sizes" :key="`btn_size_sq_${size}`"
        color="primary"
        :size="size"
        :label="`Size ${size}`"
      />
      <br>
      <q-btn v-for="size in sizes" :key="`btn_size_rd_${size}`"
        rounded
        color="primary"
        :size="size"
        :label="`Size ${size}`"
      />
      <br>
      <q-btn v-for="(size, i) in sizes" :key="`btn_size_round_${size}`"
        round
        color="primary"
        :size="size"
        :icon="icons[i]"
      />

      <p class="caption">Button sizes (dense) ({{sizes.join(', ')}})</p>
      <q-btn v-for="size in sizes" :key="`btn_size_dense_sq_${size}`"
        dense
        color="primary"
        :size="size"
        :label="`Size ${size}`"
      />
      <br>
      <q-btn v-for="size in sizes" :key="`btn_size_dense_rd_${size}`"
        rounded
        dense
        color="primary"
        :size="size"
        :label="`Size ${size}`"
      />
      <br>
      <q-btn v-for="(size, i) in sizes" :key="`btn_size_dense_round_${size}`"
        round
        dense
        color="primary"
        :size="size"
        :icon="icons[i]"
      />

      <p class="caption">Filled button</p>
      <q-btn color="primary" label="Standard" />
      <q-btn rounded color="primary" label="Standard Rounded" />
      <q-btn round color="primary" icon="card_giftcard" />

      <p class="caption">Flat button</p>
      <q-btn flat color="primary" label="Flat" />
      <q-btn flat rounded color="primary" label="Flat Rounded" />
      <q-btn flat round color="primary" icon="card_giftcard" />

      <p class="caption">Outline buttons</p>
      <q-btn outline color="primary" label="Outline" />
      <q-btn outline rounded color="primary" label="Outline Rounded" />
      <q-btn outline round color="primary" icon="card_giftcard" />

      <p class="caption">Push button</p>
      <q-btn push color="primary" label="Push" />
      <q-btn push rounded color="primary" label="Push Rounded" />
      <q-btn push round color="primary" icon="card_giftcard" />

      <p class="caption">Glossy button</p>
      <q-btn glossy color="primary" label="Glossy" />
      <q-btn glossy color="secondary" label="Glossy" />
      <q-btn glossy color="deep-orange" label="Glossy" />
      <q-btn glossy rounded color="primary" label="Glossy Rounded" />
      <q-btn glossy rounded color="secondary" label="Glossy Rounded" />
      <q-btn glossy rounded color="deep-orange" label="Glossy Rounded" />
      <q-btn glossy round color="primary" icon="card_giftcard" />
      <q-btn glossy round color="secondary" icon="local_florist" />
      <q-btn glossy round color="deep-orange" icon="local_activity" />

      <p class="caption">Disabled button</p>
      <q-btn color="primary" disable label="Disabled" />
      <q-btn round color="primary" disable icon="card_giftcard" />
      <q-btn flat color="primary" disable label="Disabled" />
      <q-btn flat round color="primary" disable icon="card_giftcard" />
      <q-btn outline color="primary" disable label="Disabled" />
      <q-btn outline round color="primary" disable icon="card_giftcard" />
      <q-btn push color="primary" disable label="Disabled" />
      <q-btn push round color="primary" disable icon="card_giftcard" />
      <q-btn glossy color="primary" disable label="Disabled" />
      <q-btn glossy round color="primary" disable icon="card_giftcard" />

      <p class="caption">Block button</p>
      <q-btn color="primary" class="block" icon="alarm" label="Block" />
      <q-btn color="secondary" class="block" label="Block" />

      <p class="caption">Full width button</p>
      <q-btn color="primary" class="full-width" label="Full-width" />
      <q-btn color="secondary" class="full-width" label="Full-width" />

      <p class="caption">Button with progress</p>
      <q-btn loader color="secondary" @click="simulateProgress" label="Button" />
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
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      progress: false,
      percentage1: 0,
      percentage2: 0,
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ]
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
