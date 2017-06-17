<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <!--
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on Chips Textbox below to start adding or removing Chips.
        <br>
        The Backspace key removes previously entered Chip if textfield is empty.
      </p>
      <q-chips-input
        color="secondary"
        float-label="Float Label"
        v-model="chips1"
        placeholder="Some placeholder"
      />
      <q-chips-input
        inverted
        color="dark"
        frame-color="amber"
        float-label="Float Label"
        v-model="chips2"
        placeholder="Some placeholder"
      />

      <div class="bg-grey-9" style="padding: 15px">
        <q-chips-input dark color="amber" float-label="Float Label" v-model="model" placeholder="Some placeholder" />
      </div>

      <p class="caption">Disabled State</p>
      <q-chips-input v-model="model" disable/>

      <p class="caption">Error State</p>
      <q-chips-input v-model="model" error/>

      <p class="caption">Inside Field</p>
      <q-field
        icon="account_box"
        label="Birthday"
        :count="10"
        helper="Some helper here"
        :label-width="3"
      >
        <q-chips-input float-label="Float Label" v-model="model" :count="10"/>
      </q-field>

      <p class="caption">Inside of a List</p>
      <q-list>
        <q-item multiline>
          <q-item-side icon="edit" />
          <q-item-main>
            <q-chips-input v-model="model" class="no-margin" placeholder="Type names"/>
          </q-item-main>
        </q-item>
      </q-list>
      -->
    </div>
  </div>
</template>

<script>
import {
  QChipsInput,
  QField,
  QList,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QChipsInput,
    QField,
    QList,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      model: [],
      chips1: ['Joe'],
      chips2: ['Jack', 'Jim']
    }
  }
}
</script>
