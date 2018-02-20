<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div style="font-size: 2rem;">
        <q-rating v-model="ratingModel" :max="3" />
        <br>
        <q-rating color="primary" v-model="ratingModel" :max="5" icon="pets" />
        <br>
        <q-rating color="teal" v-model="ratingModel" :max="9" icon="thumb_up" />
      </div>
      <br>
      <q-rating size="3rem" color="red" v-model="ratingModel" :max="6" icon="favorite_border" />

      <p class="caption">Readonly State</p>
      <q-rating size="2rem" color="primary" v-model="ratingModel" :max="6" icon="loyalty" readonly />

      <p class="caption">Disabled State</p>
      <q-rating size="2rem" color="red" v-model="ratingModel" :max="6" icon="create" disable />

      <p class="caption">In a Field</p>
      <q-field
        icon="thumb_up"
        label="Rating"
        helper="How much do you rate this article?"
      >
        <q-rating size="2rem" v-model="ratingModel" :max="5" />
      </q-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-rating color="amber" v-model="ratingModel" :max="5" icon="pets" size="2rem" class="q-my-md" />
        <q-field
          dark
          icon="thumb_up"
          label="Rating"
          helper="How much do you rate this article?"
        >
          <q-rating size="2rem" v-model="ratingModel" :max="5" />
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
      ratingModel: 4
    }
  }
}
</script>
