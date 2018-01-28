<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-uploader color="amber" placeholder="Placeholder" :url="url" />
      <q-uploader color="amber" stack-label="Stack Label" :url="url" />
      <q-uploader color="amber" float-label="Float Label" :url="url" />
      <q-uploader color="amber" stack-label="Stack Label" :url="url" />
      <q-uploader color="amber" stack-label="Stack Label" :url="url" />
      <q-uploader color="amber" stack-label="Stack Label" :url="url" />

      <q-input v-model="text" placeholder="Placeholder" />
      <q-input v-model="text" stack-label="Stack label" />
      <q-input v-model="text" float-label="Float label" />
      <q-input v-model="text" float-label="Float label & placeholder" placeholder="Placeholder" />
      <q-input v-model="text" placeholder="Clearable" clearable />

      <p class="caption">Inverted</p>
      <q-input v-model="text" inverted />
      <q-input v-model="email" type="email" inverted color="secondary" suffix="@gmail.com" />
      <q-input v-model="password" type="password" inverted color="amber" clearable />
      <q-input v-model="num" type="number" align="right" suffix="EUR" inverted color="brown" stack-label="Number aligned to right" />

      <p class="caption">Hide the underline</p>
      <q-input v-model="textUnderline" hide-underline />

      <p class="caption">Before/after icons</p>
      <q-input v-model="email" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <q-input v-model="text" inverted float-label="Icon when input has content" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-input v-model="text" inverted color="secondary" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-input v-model="password" float-label="Minimum 5 characters password" inverted color="amber" type="password" :after="[{icon: 'done', condition: password.length >= 5, handler () {}}]" />
      <q-input v-model="email" inverted color="brown" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <q-input v-model="num" inverted type="number" :before="[{icon: 'monetization_on', handler () {}}]" />

      <p class="caption">Error/warning states</p>
      <q-toggle class="q-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <q-toggle class="q-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <q-input v-model="texterr" :error="error" :warning="warning" />
      <q-input v-model="texterr" :error="error" :warning="warning" float-label="Float label" />
      <q-input v-model="texterr" :error="error" :warning="warning" inverted />
      <q-input
        v-model="texterr" :error="error" :warning="warning" inverted
        :float-label="error ? 'We got an error' : 'Everything fine now'"
        :after="[
          {icon: 'warning', error: true, handler () {}},
          {icon: 'priority_high', warning: true, handler () {}}
        ]"
      />

      <p class="caption">Read only</p>
      <q-input v-model="text" readonly float-label="Read only text input" />
      <q-input v-model="text" readonly inverted color="amber" float-label="Read only & inverted" />
      <q-input :min-rows="5" v-model="area" readonly type="textarea" float-label="Read only textarea" />
      <q-input :min-rows="5" v-model="area" readonly inverted type="textarea" float-label="Read only & inverted textarea" />

      <p class="caption">Disabled</p>
      <q-input v-model="text" disable float-label="Disabled text input" />
      <q-input v-model="text" disable inverted color="amber" float-label="Disabled & inverted" />
      <q-input :min-rows="5" v-model="area" disable type="textarea" float-label="Disabled textarea" />
      <q-input :min-rows="5" v-model="area" disable inverted type="textarea" float-label="Disabled & inverted textarea" />

      <p class="caption">In a Field</p>
      <q-toggle class="q-ma-xs" v-model="error2" color="negative" label="Toggle error state" />
      <q-toggle class="q-ma-xs" v-model="warning2" color="warning" label="Toggle warning state" />

      <br><br>
      <q-field
        :count="7"
        helper="What's your account name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        helper="Your awesome helper"
        :error="error2"
        error-label="We got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" float-label="Textfield" />
      </q-field>

      <q-field
        icon="account_circle"
        label="Account"
        :count="7"
        helper="What's your account name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="card_travel"
        label="Travel card"
        helper="Some helper"
        :error="error2"
        error-label="Wait, wait. Error!"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" float-label="Float label" />
      </q-field>

      <q-field
        icon="important_devices"
        label="Device name"
        :count="15"
        helper="Some helper"
        :error="error2"
        error-label="Wait, wait. Error!"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" inverted placeholder="On Field" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="place"
        label="Your destination"
        helper="Some helper"
        :error="error2"
        error-label="Some error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" color="secondary" inverted stack-label="Stack Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="wifi"
        label="Wifi network"
        helper="We need your wifi id"
        :error="error2"
        error-label="That's not a valid id number"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <q-input v-model="text" color="secondary" :inverted="error" float-label="Float Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-input v-model="num" type="number" float-label="Colored" dark color="yellow" prefix="$" suffix="TSP" />
        <q-input v-model="num" type="number" float-label="Colored" dark color="secondary" prefix="$" suffix="TSP" />

        <q-field
          icon="wifi"
          label="Wifi network"
          :count="10"
          helper="We need this for connecting you"
        >
          <q-input
            v-model="text"
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
import './docs-input.styl'

export default {
  data () {
    return {
      url: 'http://1.1.1.195/upload.php',

      text: '',
      textUnderline: 'Quasar',
      upper: 'UP',
      num: 5,
      floatNum: 2.34,
      lazy: 'Lazy update - on blur',
      email: 'email',
      password: 'password',
      area: 'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.',
      areaMax: '',
      texterr: 'Quasar rulz',

      error: true,
      warning: false,

      error2: false,
      warning2: false,

      loading: true
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    },

    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  }
}
</script>
