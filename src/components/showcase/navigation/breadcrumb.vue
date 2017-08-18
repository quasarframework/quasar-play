<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Breadcrumbs are great for navigation.
        <br>
        If window is wide enough then labels are also displayed.
      </p>
      <ul class="breadcrumb">
        <li>
          <a>
            <q-icon name="home" />
          </a>
        </li>

        <li>
          <a>
            <q-icon name="mail" /> Quasar
          </a>
        </li>

        <li>
          <a>
            <q-icon name="cloud" /> Breadcrumb
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { QIcon } from 'quasar'

export default {
  components: {
    QIcon
  }
}
</script>
