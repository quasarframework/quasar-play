<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list highlight>
        <q-list-header>Recent chats</q-list-header>
        <q-item>
          <q-item-side>
            <q-item-tile avatar>
              <img src="~assets/boy-avatar.png">
            </q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/linux-avatar.png" />
          <q-item-main label="Jim Doe" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator />
        <q-list-header>Previous chats</q-list-header>
        <q-item>
          <q-item-side avatar="statics/guy-avatar.png" />
          <q-item-main label="Jack Doe" />
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
