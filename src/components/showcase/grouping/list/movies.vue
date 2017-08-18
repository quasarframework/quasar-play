<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-list-header>Documentaries</q-list-header>
        <q-item>
          <q-item-side image="statics/mountains.jpg" />
          <q-item-main label="Mountains Documentary" />
          <q-item-side right icon="movie" />
        </q-item>
        <q-item>
          <q-item-side image="statics/quasar.jpg" />
          <q-item-main>
            <q-item-tile label>Quasars</q-item-tile>
            <q-item-tile sublabel>For passionates only</q-item-tile>
          </q-item-main>
          <q-item-side right icon="movie" />
        </q-item>
        <q-item-separator />
        <q-list-header>Movies</q-list-header>
        <q-item multiline>
          <q-item-side image="statics/parallax1.jpg" />
          <q-item-main>
            <q-item-tile label>Must-see places</q-item-tile>
            <q-item-tile sublabel lines="3">
              The world in which we live is full of wonderful places that most of us do not know
              they really exist. Here you can see some of those breathtaking places  around the world.
              Enjoy!
            </q-item-tile>
          </q-item-main>
          <q-item-side right icon="movie" />
        </q-item>
        <q-item multiline>
          <q-item-side image="statics/parallax2.jpg" />
          <q-item-main>
            <q-item-tile label>Building a Bridge</q-item-tile>
            <q-item-tile sublabel lines="5">
              A bridge is one of those things that are often taken for granted until you don’t have one,
              especially if you live on a rural property and there’s a creek between your house and the
              county road. John Doe had plans to build a new bridge along with building a new house on
              his property, but plans for the bridge were made top priority when a wayward truck carried
              too much weight over the old bridge and it collapsed.
            </q-item-tile>
          </q-item-main>
          <q-item-side right icon="movie" />
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import {
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile
} from 'quasar'

export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile
  }
}
</script>
