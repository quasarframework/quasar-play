<template>
  <div class="layout-padding">
    <q-list link item-inset-delimiter style="max-width: 500px">
      <template v-for="category in categories">
        <q-list-header>
          {{ category.title }}
        </q-list-header>
        <q-item
          v-for="feature in category.features"
          :key="feature"
          @click="$router.push(`/showcase/${category.hash}/${feature.hash}`)"
        >
          <q-item-side :icon="feature.icon" />
          <q-item-main :label="feature.title" />
          <q-item-side right icon="chevron_right" />
        </q-item>
        <q-item-delimiter />
      </template>
    </q-list>
  </div>
</template>

<script>
import categories from './categories'
import {
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemDelimiter
} from 'quasar'

export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemDelimiter
  },
  data () {
    return {
      categories
    }
  }
}
</script>
