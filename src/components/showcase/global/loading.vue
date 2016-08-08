<template>
  <div class="row items-center justify-center">
    <button class="primary outline" @click="showLoading">
      Show Background Progress
    </button>
  </div>
</template>

<script>
import { Loading } from 'quasar'

export default {
  methods: {
    showLoading () {
      Loading.show()

      setTimeout(() => {
        Loading.hide()
      }, 3000)
    }
  }
}
</script>
