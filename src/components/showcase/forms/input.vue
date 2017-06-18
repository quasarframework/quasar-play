<template>
  <div class="layout-padding docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-input v-model="text" />
      <q-input v-model="text" placeholder="Placeholder" />
      <q-input v-model="text" stack-label="Stack label" />
      <q-input v-model="text" float-label="Float label" />
      <q-input v-model="text" float-label="Float label & placeholder" />
      <q-input v-model="email" type="email" float-label="Email" suffix="@gmail.com" clearable />
      <q-input v-model="password" type="password" float-label="Password" />
      <q-input v-model="text" float-label="Clearable" clearable />
      <q-input v-model="num" type="number" prefix="$" float-label="Number with prefix" />
      <q-input v-model="num" type="number" float-label="Number with prefix, suffix, clearable" prefix="$" suffix="TSP" clearable />

      <p class="caption">Inverted</p>
      <q-input v-model="text" inverted />
      <q-input v-model="email" type="email" inverted color="secondary" suffix="@gmail.com" />
      <q-input v-model="password" type="password" inverted color="amber" clearable />
      <q-input v-model="num" type="number" align="right" suffix="EUR" inverted color="brown" stack-label="Number aligned to right" />

      <p class="caption">Before/after icons</p>
      <q-input v-model="email" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <q-input v-model="text" inverted float-label="Icon dissapears on empty input" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-input v-model="text" inverted color="secondary" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <q-input v-model="password" float-label="Minimum 5 characters password" inverted color="amber" type="password" :after="[{icon: 'done', condition: password.length >= 5, handler () {}}]" />
      <q-input v-model="email" inverted color="brown" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <q-input v-model="num" inverted type="number" :before="[{icon: 'monetization_on', handler () {}}]" />

      <p class="caption">Textarea (auto-grows)</p>
      <q-input v-model="area" type="textarea" />
      <q-input v-model="area" inverted color="secondary" float-label="Inverted textarea" type="textarea" />
      <q-input v-model="area" inverted color="purple" :min-rows="5" float-label="Inverted textarea" type="textarea" />

      <p class="caption">Error state</p>
      <q-input v-model="text" error float-label="Has always error" />
      <q-toggle v-model="error" color="negative" label="Toggle error state" style="margin-top: 16px" />
      <q-input v-model="texterr" :error="error" />
      <q-input v-model="texterr" :error="error" float-label="Signaling error" />
      <q-input v-model="texterr" :error="error" inverted />
      <q-input v-model="texterr" :error="error" inverted :float-label="error ? 'We got an error' : 'Everything fine now'" :after="[{icon: 'warning', error: true, handler () {}}]" />

      <p class="caption">Disabled</p>
      <q-input v-model="text" disable float-label="Disabled text input" />
      <q-input v-model="text" disable inverted color="amber" float-label="Disabled & inverted" />
      <q-input :min-rows="5" v-model="area" disable type="textarea" float-label="Disabled textarea" />
      <q-input :min-rows="5" v-model="area" disable inverted type="textarea" float-label="Disabled & inverted textarea" />

      <p class="caption">With loading state</p>
      <q-toggle v-model="loading" label="Toggle loading state" />
      <q-input :loading="loading" v-model="text" />
      <q-input :loading="loading" v-model="text" stack-label="Loading or not?" />
      <q-input :loading="loading" inverted v-model="text" />
      <q-input :loading="loading" inverted color="secondary" v-model="text" stack-label="Loading or not?" />

      <p class="caption">In a Field</p>
      <q-toggle v-model="error2" color="negative" label="Toggle error state" />

      <br><br>
      <q-field
        :count="7"
        :error="error2"
        helper="What's your account name?"
        error-label="Hey, we got an error"
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="wifi"
        helper="Your awesome helper"
        :error="error2"
        error-label="We got an error"
      >
        <q-input v-model="text" float-label="Textfield" />
      </q-field>
      <br>

      <q-field
        icon="account_circle"
        label="Account"
        :count="7"
        :error="error2"
        helper="What's your account name?"
        error-label="Hey, we got an error"
      >
        <q-input v-model="text" />
      </q-field>

      <q-field
        icon="card_travel"
        label="Travel card"
        :error="error2"
        helper="Some helper"
        error-label="Wait, wait. Error!"
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
      >
        <q-input v-model="text" inverted placeholder="On Field" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="place"
        label="Your destination"
        helper="Some helper"
        :error="error2"
        error-label="Some error"
      >
        <q-input v-model="text" color="amber" inverted stack-label="Stack Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </q-field>

      <q-field
        icon="wifi"
        label="Wifi network"
        helper="We need your wifi id"
        :error="error2"
        error-label="That's not a valid id number"
      >
        <q-input v-model="text" color="amber" :inverted="error" float-label="Float Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
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

      <p class="caption">With tooltip/popover</p>
      <q-input v-model="text" float-label="Tooltip">
        <q-tooltip>Some tooltip</q-tooltip>
      </q-input>
      <q-input v-model="text" float-label="Popover">
        <q-popover fit :offset="[0, 10]">
          <div class="bg-primary text-white" style="padding: 10px">
            Some popover content
          </div>
        </q-popover>
      </q-input>
    </div>
  </div>
</template>

<script>
import {
  QInput,
  QToggle,
  QIcon,
  QField,
  QTooltip,
  QPopover
} from 'quasar'

import './docs-input.styl'

export default {
  components: {
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QPopover
  },
  data () {
    return {
      text: 'text',
      num: 5,
      email: 'email',
      password: 'password',
      area: 'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.',
      texterr: 'Quasar rulz',

      error: true,
      error2: false,
      loading: true
    }
  }
}
</script>
