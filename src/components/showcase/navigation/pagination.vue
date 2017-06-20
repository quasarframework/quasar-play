<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        You can also
        <span class="desktop-only">click</span>
        <span class="mobile-only">tap</span>
        on the Input box and type out another page number
        then hit &lt;ENTER&gt;
      </p>

      <q-pagination v-model="page" :max="17" />

      <p class="caption">Disabled State</p>
      <q-pagination disable v-model="page" :max="17" />
    </div>
  </div>
</template>

<script>
import { QPagination, QChip } from 'quasar'

export default {
  components: {
    QPagination,
    QChip
  },
  data () {
    return {
      page: 1
    }
  }
}
</script>
