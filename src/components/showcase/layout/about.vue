<template>
  <div>
    <q-card style="margin-top: 25px">
      <q-card-title class="bg-primary text-center">
        <q-btn push color="orange" @click="trigger()">Trigger Event</q-btn>
      </q-card-title>

      <p class="caption text-center">Try out some combinations for Ajax Bar.</p>
      <q-card-main>
        <q-field
          label="Position"
        >
          <div class="flex" style="margin: -5px">
            <div class="column group">
              <q-radio v-model="position" val="top" label="Top" />
              <q-radio v-model="position" val="bottom" label="Bottom" />
            </div>

            <div class="column group">
              <q-radio v-model="position" val="right" label="Right" />
              <q-radio v-model="position" val="left" label="Left" />
            </div>
          </div>
        </q-field>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QBtn,
  QCardMain,
  QRadio,
  QField
} from 'quasar'

export default {
  components: {
    QCard,
    QCardTitle,
    QBtn,
    QCardMain,
    QRadio,
    QField
  },
  data () {
    return {
      position: ''
    }
  }
}
</script>
