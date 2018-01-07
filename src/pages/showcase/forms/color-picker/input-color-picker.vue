<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-color v-model="modelHex" />
      <q-color v-model="modelRgb" placeholder="Placeholder" />
      <q-color v-model="modelHex" stack-label="Stack label" />
      <q-color v-model="modelHex" float-label="Float label" />
      <q-color v-model="modelHexa" type="email" float-label="Car color" suffix="Vauxhall" clearable />
      <q-color v-model="modelRgba" float-label="Clearable" clearable />

      <p class="caption">Inverted</p>
      <q-color v-model="modelHexa" inverted />
      <q-color v-model="modelRgba" inverted color="secondary" suffix="Suffix" />
      <q-color v-model="modelHex" inverted color="amber" clearable />
      <q-color v-model="modelHex" align="right" suffix="(no alpha)" inverted color="brown" stack-label="Color aligned to right" />

      <p class="caption">Before/after icons</p>
      <q-color v-model="modelHex" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="Toyota" />
      <q-color v-model="modelRgb" clearable float-label="Icon dissapears on empty input" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-color v-model="modelHexa" inverted color="secondary" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-color v-model="modelRgba" float-label="Color to paint walls" inverted color="amber" clearable :after="[{icon: 'done', condition: modelRgba, handler () {}}]" />
      <q-color v-model="modelHex" inverted color="brown" :before="[{icon: 'brush', handler () {}}]" />

      <p class="caption">Read-only</p>
      <q-color v-model="modelHex" readonly float-label="Read-only color input" />
      <q-color v-model="modelHex" readonly inverted color="secondary" float-label="Read-only & inverted" />

      <p class="caption">Disabled</p>
      <q-color v-model="modelHex" disable float-label="Disabled color input" />
      <q-color v-model="modelHex" disable inverted color="primary" float-label="Disabled & inverted" />

      <p class="caption">With loading state</p>
      <q-toggle v-model="loading" label="Toggle loading state" />
      <q-color :loading="loading" v-model="modelRgba" />
      <q-color :loading="loading" v-model="modelRgba" stack-label="Loading or not?" />
      <q-color :loading="loading" inverted v-model="modelRgba" />
      <q-color :loading="loading" inverted color="secondary" v-model="modelRgba" stack-label="Loading or not?" />

      <p class="caption">In a Field</p>
      <q-toggle v-model="error" color="negative" label="Toggle error state" />

      <br><br>
      <q-field
        :error="error"
        helper="What's your favourite name?"
        error-label="Hey, we got an error"
      >
        <q-color v-model="modelHex" />
      </q-field>

      <q-field
        icon="camera_alt"
        helper="Your awesome helper"
        :error="error"
        error-label="We got an error"
      >
        <q-color v-model="modelHexa" float-label="Float Label" />
      </q-field>
      <br>

      <q-field
        icon="important_devices"
        label="Playstation color"
        :count="15"
        helper="Some helper"
        :error="error"
        error-label="Wait, wait. Error!"
      >
        <q-color v-model="modelHex" inverted placeholder="On Field" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="place"
        label="Floor color"
        helper="Some helper"
        :error="error"
        error-label="Some error"
      >
        <q-color v-model="modelHex" color="amber" inverted stack-label="Stack Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="color_lens"
        label="Wall color"
        helper="This color will be used on the living room"
        :error="error"
        error-label="That's not a valid color"
      >
        <q-color v-model="modelHex" color="amber" :inverted="error" float-label="Float Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-color v-model="modelHexa" float-label="Colored" dark color="yellow" prefix="$" suffix="TSP" />
        <q-color v-model="modelHexa" float-label="Colored" dark color="secondary" prefix="$" suffix="TSP" />

        <q-field
          icon="wifi"
          label="Wifi network"
          helper="We need this for connecting you"
        >
          <q-color
            v-model="modelHex"
            dark
            color="yellow"
            float-label="Wifi name"
          />
        </q-field>
      </div>
    </div>
  </q-page>
</template>

<script>
import '../docs-input.styl'

export default {
  data () {
    return {
      error: true,
      loading: true,
      modelHex: '#C7044B',
      modelHexa: '#F0FF1CBF',
      modelRgb: { r: 112, g: 204, b: 55 },
      modelRgba: { r: 138, g: 36, b: 138, a: 64 }
    }
  }
}
</script>
