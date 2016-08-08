<template>
  <div>
    <div class="layout-padding row justify-center">
      <div class="group">
        <button class="light push" @click="showLoading">
          Show
        </button>
        <button class="primary push" @click="showLoadingWithMessage">
          Show with message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from 'quasar'

function show (message) {
  Loading.show({message})

  setTimeout(() => {
    Loading.hide()
  }, 3000)
}

export default {
  methods: {
    showLoading (message) {
      show()
    },
    showLoadingWithMessage () {
      show('Some important process is in progress. Hang on...')
    }
  }
}
</script>
