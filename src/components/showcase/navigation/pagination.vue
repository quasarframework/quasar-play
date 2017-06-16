<template>
  <div class="layout-padding">
    <p class="caption">
      <q-chip color="secondary" square>
        Model: {{page}}
      </q-chip>
    </p>

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
