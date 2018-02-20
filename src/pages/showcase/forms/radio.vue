<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <q-radio v-model="radio1" val="one" />
      <q-radio v-model="radio1" val="two" color="secondary" style="margin-left: 10px" />
      <q-radio v-model="radio1" val="three" color="black" style="margin-left: 10px" />

      <p class="caption">With label</p>
      <q-radio v-model="radio2" val="one" color="secondary" label="One" />
      <q-radio v-model="radio2" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <q-radio v-model="radio2" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">With label on left side</p>
      <q-radio v-model="radio3" val="one" color="secondary" left-label label="One" />
      <q-radio v-model="radio3" val="two" color="amber" left-label label="Two" style="margin-left: 10px" />
      <q-radio v-model="radio3" val="three" color="red" left-label label="Three" style="margin-left: 10px" />

      <p class="caption">Readonly</p>
      <q-radio readonly v-model="radio3" val="one" color="secondary" label="One" />
      <q-radio readonly v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <q-radio readonly v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">Disabled</p>
      <q-radio disable v-model="radio3" val="one" color="secondary" label="One" />
      <q-radio disable v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <q-radio disable v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">As Option Group in a Field</p>
      <q-field
        icon="vibration"
        helper="Pick one notification"
        label="Notifications"
      >
        <q-option-group
          type="radio"
          color="secondary"
          v-model="group"
          :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }
          ]"
        />
      </q-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <div class="q-my-md">
          <q-radio dark v-model="radio3" val="one" color="secondary" label="One" />
          <q-radio dark v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
          <q-radio dark v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />
        </div>

        <q-field
          icon="vibration"
          helper="Pick one notification"
          label="Notifications"
        >
          <q-option-group
            dark
            type="radio"
            color="secondary"
            v-model="group"
            :options="[
              { label: 'Battery too low', value: 'bat' },
              { label: 'Friend request', value: 'friend' },
              { label: 'Picture uploaded', value: 'upload', color: 'red' }
            ]"
          />
        </q-field>
      </div>

      <p class="caption">In a list</p>
      <q-list link>
        <q-item tag="label">
          <q-item-side>
            <q-radio v-model="list" val="one" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Notification</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-radio color="secondary" v-model="list" val="two" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Notification</q-item-tile>
            <q-item-tile sublabel>Allow notification</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item multiline tag="label">
          <q-item-side>
            <q-radio color="negative" v-model="list" val="three" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Notification</q-item-tile>
            <q-item-tile sublabel lines="2">Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      radio1: 'two',
      radio2: 'one',
      radio3: 'three',
      group: 'upload',
      list: ''
    }
  }
}
</script>
