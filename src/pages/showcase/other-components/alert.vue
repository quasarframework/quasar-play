<template>
  <q-page padding>
    <q-toggle v-model="visible" label="Show/hide next one" />
    <br><br>
    <q-transition
      enter="bounceInLeft"
      leave="bounceOutRight"
      appear
    >
      <q-alert
        v-if="visible"
        color="brown"
        icon="cloud"
        style="margin-bottom: 1.5rem"
      >
        Lorem ipsum dolor sit amet.
      </q-alert>
    </q-transition>

    <q-toggle v-model="visible2" label="Show/hide next one" />
    <br><br>

    <q-transition
      enter="flipInX"
      leave="flipOutX"
    >
      <q-alert
        v-if="visible2"
        type="negative"
        style="margin-bottom: 1.5rem"
        :actions="[{label: 'Snooze', handler () {}}]"
      >
        Lorem ipsum dolor sit amet.
      </q-alert>
    </q-transition>

    <br>
    <q-alert icon="map" color="primary">Learn how you can get there</q-alert>
    <br>
    <q-alert
      icon="map"
      color="primary"
      :actions="[ { label: 'Dismiss', handler: () => {} } ]"
    >Learn how you can get there</q-alert>
    <br>
    <q-alert
      icon="map"
      color="primary"
      :actions="[ { label: 'Reply', icon: 'map', handler: () => {} }, { label: 'Dismiss', handler: () => {} } ]"
    >Learn how you can get there</q-alert>
    <br>
    <q-alert
      icon="map"
      color="primary"
      :actions="[ { label: 'Reply', icon: 'map', handler: () => {} }, { label: 'Reply', icon: 'map', handler: () => {} }, { label: 'Dismiss', handler: () => {} } ]"
    >Learn how you can get there</q-alert>
    <br>
    <q-alert
      avatar="statics/boy-avatar.png"
      color="dark"
      :actions="[ { label: 'Reply', icon: 'map', handler: () => {} }, { label: 'Dismiss', handler: () => {} } ]"
    >Your friend just pinged you</q-alert>
    <br>
    <q-alert
      avatar="statics/boy-avatar.png"
      color="amber"
      text-color="black"
      message="Title"
      detail="Learn how you can get there"
    />
    <br>
    <q-alert
      avatar="statics/boy-avatar.png"
      color="amber"
      text-color="black"
      :actions="[ { label: 'Dismiss', handler: () => {} } ]"
    >
      Your friend just pinged you
    </q-alert>
    <br>

    <q-alert
      v-for="type in ['positive', 'info', 'negative', 'warning']"
      :key="type"
      :type="type"
      style="margin-bottom: 1.5rem"
    >
      Lorem ipsum dolor sit amet.
    </q-alert>

    <q-alert
      v-for="type in ['positive', 'info', 'negative', 'warning']"
      :key="`sec${type}`"
      :type="type"
      style="margin-bottom: 1.5rem"
    >
      Non dismissible. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </q-alert>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      visible2: true
    }
  }
}
</script>
