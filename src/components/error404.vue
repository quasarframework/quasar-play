<template>
  <div class="full-height full-width text-white bg-primary column items-center justify-center">
    <h1>Quasar Play</h1>
    <h5>
      Oops. Nothing to see here...
    </h5>
    <p>
      <button v-if="canGoBack" class="secondary push" @click="goBack">
        <i class="on-left">keyboard_arrow_left</i>
        Go back
      </button>
      <span v-if="canGoBack" style="margin: 0 10px;">or</span>
      <button class="secondary push" v-link="'/'">
        Go home
        <i class="on-right">home</i>
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>
