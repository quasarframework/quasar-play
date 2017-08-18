<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <q-checkbox v-model="check1" />

      <p class="caption">With label</p>
      <q-checkbox v-model="check2" color="secondary" label="Tick me" />

      <p class="caption">With label on left side</p>
      <q-checkbox v-model="check3" color="amber" label="Tick me" left-label />

      <p class="caption">With custom icons</p>
      <q-checkbox
        v-model="check4"
        checked-icon="sentiment very satisfied"
        unchecked-icon="sentiment very dissatisfied"
      />
      <q-checkbox
        v-model="check5"
        checked-icon="visibility"
        unchecked-icon="visibility_off"
        style="margin-left: 25px"
      />

      <p class="caption">With Array as model</p>
      <q-chip square color="secondary">Model: {{checkArray}}</q-chip>
      <br><br>
      <q-checkbox v-model="checkArray" label="One" color="yellow" val="one" />
      <q-checkbox v-model="checkArray" label="Two" val="two" color="secondary" style="margin-left: 10px" />
      <q-checkbox v-model="checkArray" label="Three" val="three" color="red" style="margin-left: 10px" />

      <p class="caption">Disabled</p>
      <q-checkbox disable v-model="check1" label="Disabled" />

      <p class="caption">As Option Group in a Field</p>
      <q-field
        icon="vibration"
        helper="Select which notifications you want to receive"
        label="Notifications"
      >
        <q-option-group
          type="checkbox"
          color="secondary"
          v-model="group"
          :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }
          ]"
        />
      </q-field>

      <p class="caption">In a list</p>
      <q-list link>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="list1" />
          </q-item-side>
          <q-item-main>
            <q-item-tile title>Notification</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox color="secondary" v-model="list2" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Notification</q-item-tile>
            <q-item-tile sublabel>Allow notification</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item multiline tag="label">
          <q-item-side>
            <q-checkbox color="amber" v-model="list3" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Notification</q-item-tile>
            <q-item-tile sublabel lines="2">Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import {
  QCheckbox,
  QChip,
  QField,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QOptionGroup
} from 'quasar'

export default {
  components: {
    QCheckbox,
    QChip,
    QField,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QOptionGroup
  },
  data () {
    return {
      check1: false,
      check2: true,
      check3: true,
      check4: true,
      check5: false,
      checkArray: ['one'],
      check6: true,
      group: ['upload'],
      list1: false,
      list2: true,
      list3: true
    }
  }
}
</script>
