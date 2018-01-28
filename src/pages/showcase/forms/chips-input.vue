<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on Chips Textbox below to start adding or removing Chips.
        <br>
        The Backspace key removes previously entered Chip if textfield is empty.
      </p>
      <br>

      <q-chips-input
        v-model="chips1"
        placeholder="Type some names"
      />
      <q-chips-input
        color="secondary"
        v-model="chips2"
        placeholder="Type some names"
        float-label="Float label"
      />
      <q-chips-input
        color="secondary"
        v-model="chips2"
        add-icon="done"
        float-label="Custom add icon (type something)"
      />
      <q-chips-input
        inverted
        color="dark"
        frame-color="amber"
        v-model="chips3"
        placeholder="Type some names"
        stack-label="Stack label & inverted"
      />
      <q-chips-input
        inverted
        color="orange"
        frame-color="brown"
        float-label="Float Label"
        v-model="chips4"
        placeholder="Some placeholder"
      />

      <p class="caption">
        Lazy input
      </p>
      <span class="chip-container">
        <q-chip square color="secondary">
          Model: {{ lazy }}
        </q-chip>
      </span>
      <q-chips-input
        :value="lazy"
        @change="val => lazy = val"
        placeholder="Type some names"
      />

      <p class="caption">Hide underline</p>
      <q-chips-input v-model="chips6" hide-underline />

      <p class="caption">Read only</p>
      <q-chips-input v-model="chips6" readonly placeholder="Read only" />
      <q-chips-input v-model="chips6" readonly inverted color="tertiary" frame-color="amber" placeholder="Read only" />

      <p class="caption">Disabled</p>
      <q-chips-input v-model="chips6" disable placeholder="Disabled" />
      <q-chips-input v-model="chips6" disable inverted color="tertiary" frame-color="amber" placeholder="Disabled" />

      <p class="caption">Error/Warning states</p>
      <q-chips-input v-model="chips6" error float-label="Signaling error" />
      <q-chips-input v-model="chips6" error inverted color="tertiary" frame-color="amber" float-label="Signaling error" />
      <q-chips-input v-model="chips6" warning float-label="Signaling warning" />
      <q-chips-input v-model="chips6" warning inverted color="tertiary" frame-color="amber" float-label="Signaling warning" />

      <p class="caption">In a Field</p>
      <q-field
        icon="supervisor_account"
        label="Employees"
        :count="10"
        helper="Type some names"
        :label-width="3"
      >
        <q-chips-input v-model="chips6" :count="10"/>
      </q-field>

      <p class="caption">In a List</p>
      <q-list>
        <q-item multiline>
          <q-item-side icon="edit" />
          <q-item-main>
            <q-chips-input v-model="chips6" class="no-margin" placeholder="Type names"/>
          </q-item-main>
        </q-item>
      </q-list>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-chips-input
          dark
          color="amber"
          float-label="Float Label"
          v-model="chips5"
          placeholder="Some placeholder"
        />

        <q-field
          dark
          icon="supervisor_account"
          label="Employees"
          :count="10"
          helper="Type some names"
          :label-width="3"
        >
          <q-chips-input dark color="secondary" v-model="chips6" />
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
      chips1: ['Joe'],
      chips2: ['Jack', 'Jim'],
      chips3: ['Jim'],
      chips4: ['Joe'],
      chips5: ['Jim'],
      chips6: ['Jack', 'Jim'],
      lazy: ['Joe']
    }
  }
}
</script>
