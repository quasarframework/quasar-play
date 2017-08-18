<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-item>
          <q-item-side icon="phone" color="primary" />
          <q-item-main>
            <q-item-tile label>(650) 555 - 1234</q-item-tile>
            <q-item-tile sublabel>Mobile</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item>
          <q-item-main inset>
            <q-item-tile label>(650) 555 - 2345</q-item-tile>
            <q-item-tile sublabel>Office</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item>
          <q-item-main inset>
            <q-item-tile label>(650) 555 - 3456</q-item-tile>
            <q-item-tile sublabel>Home</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator inset />
        <q-item>
          <q-item-side icon="mail" color="primary" />
          <q-item-main>
            <q-item-tile label>john@doe.com</q-item-tile>
            <q-item-tile sublabel>Personal</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main inset>
            <q-item-tile label>john.doe@some-company.com</q-item-tile>
            <q-item-tile sublabel>Office</q-item-tile>
          </q-item-main>
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
