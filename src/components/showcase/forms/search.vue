<template>
  <div class="layout-padding docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Works great with Autocomplete so you might want to check its page.</p>
      <br>

      <q-search v-model="model" />
      <q-search icon="place" color="amber" v-model="model" stack-label="Seach for a place" />
      <q-search icon="local_airport" color="secondary" v-model="model" float-label="Search for an airport" suffix="@ nearby" />

      <q-search icon="local_dining" inverted v-model="model" placeholder="Search for a nearby restaurant" />
      <q-search icon="ev_station" inverted color="amber" v-model="model" stack-label="Seach for an ev station" placeholder="Type a name"/>
      <q-search icon="hotel" inverted color="secondary" v-model="model" float-label="Search for a hotel" />

      <q-search icon="local_movies" inverted color="black" loading v-model="model" />

      <p class="caption">In a Field</p>
      <q-field
        icon="local_hospital"
        label="Local hospital"
        :count="15"
        helper="Type a name"
      >
        <q-search v-model="model2" />
      </q-field>
      <q-field
        icon="local_car_wash"
        label="Car wash"
        :count="12"
        helper="Type a name"
      >
        <q-search inverted v-model="model2" />
      </q-field>

      <p class="caption">Disable / Error state</p>
      <q-search disable icon="local_dining" color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />
      <q-search disable icon="local_dining" inverted color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />
      <q-search error icon="ev_station" color="secondary" v-model="model2" stack-label="Seach for an ev station" placeholder="Type a name"/>
      <q-search error icon="ev_station" inverted color="secondary" v-model="model2" stack-label="Seach for an ev station" placeholder="Type a name"/>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-search dark icon="local_airport" color="secondary" v-model="model" stack-label="Search for an airport" />
        <q-field
          dark
          icon="local_car_wash"
          label="Car wash"
          count
          helper="Type a name"
        >
          <q-search dark color="yellow" v-model="model2" />
        </q-field>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QSearch,
  QField
} from 'quasar'

import './docs-input.styl'

export default {
  components: {
    QSearch,
    QField
  },
  data () {
    return {
      model: '',
      model2: ''
    }
  }
}
</script>
