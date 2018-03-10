<template>
  <q-page padding class="docs-tab row justify-center">
    <div style="width: 400px; max-width: 90vw;">
      <p class="caption desktop-only">
        On a real mobile device Tabs look a little different
        in the sense that arrows won't be shown since user can
        pan (touch action) through the menu.
      </p>
      <p class="caption cordova-only">
        On a desktop the device Tabs display clickable arrows on left
        and right side when not enough screen real estate is available
        to show them all.
      </p>
      <p class="caption">
        Note that for effect reasons, the following tabs have a
        shaddow attached, which is not a default option.
      </p>
      <br>

      <q-tabs class="shadow-2">
        <q-tab slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab slot="title" icon="movie" label="Movies" />
        <q-tab slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab slot="title" icon="movie" label="Movies" />
        <q-tab slot="title" icon="mail" label="Mails" />
      </q-tabs>

      <p class="caption">Different Types</p>
      <q-tabs class="shadow-2">
        <q-tab slot="title" label="Mails" />
        <q-tab slot="title" label="Alarms" />
        <q-tab slot="title" label="Movies" />
      </q-tabs>
      <q-tabs class="shadow-2">
        <q-tab slot="title" icon="mail" />
        <q-tab slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>

      <p class="caption">They come in all colors</p>
      <q-tabs
        v-for="color in ['secondary', 'purple', 'red']"
        :key="color"
        :color="color"
        class="shadow-2"
        align="justify"
      >
        <q-tab slot="title" icon="mail" />
        <q-tab slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>
      <q-tabs
        color="amber"
        text-color="dark"
        class="shadow-2"
        align="justify"
      >
        <q-tab slot="title" icon="mail" />
        <q-tab slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>
      <q-tabs
        color="negative"
        text-color="black"
        class="shadow-2"
        align="justify"
      >
        <q-tab slot="title" icon="mail" />
        <q-tab slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>

      <p class="caption">Glossy</p>
      <q-tabs glossy class="shadow-2" align="justify">
        <q-tab slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab slot="title" icon="movie" label="Movies" />
      </q-tabs>

      <p class="caption">With two lines label</p>
      <q-tabs two-lines color="brown" class="shadow-2" align="justify">
        <q-tab slot="title" icon="mail" label="Unread Emails" />
        <q-tab slot="title" icon="alarm" label="My Alarms" />
        <q-tab slot="title" icon="movie" label="Movie List Nearby" />
      </q-tabs>

      <p class="caption">With animated bar at top</p>
      <q-tabs position="bottom" class="shadow-up-2" align="justify">
        <q-tab slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab slot="title" icon="movie" label="Movies" />
      </q-tabs>

      <p class="caption">With alerts and counter</p>
      <q-tabs class="shadow-2" align="justify">
        <q-tab alert slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab count="5" slot="title" icon="movie" label="Movies" />
      </q-tabs>

      <p class="caption">Also "inverted"</p>
      <q-tabs
        inverted
        v-for="color in ['secondary', 'amber', 'purple']"
        :key="'other-' + color"
        :color="color"
        align="justify"
      >
        <q-tab slot="title" icon="mail" label="Mails" />
        <q-tab slot="title" icon="alarm" label="Alarms" />
        <q-tab slot="title" icon="movie" label="Movies" />
      </q-tabs>

      <p class="caption">Individual Tab colors</p>
      <q-tabs inverted align="justify">
        <q-tab color="secondary" slot="title" icon="mail" label="Mails" />
        <q-tab color="amber" slot="title" icon="alarm" label="Alarms" />
        <q-tab color="purple" slot="title" icon="movie" label="Movies" />
      </q-tabs>

      <p class="caption">Different alignments (view on a desktop)</p>
      <q-tabs
        v-for="align in ['left', 'center', 'right', 'justify']"
        :key="align"
        :align="align"
        class="shadow-2"
      >
        <q-tab slot="title" icon="mail" />
        <q-tab slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>

      <p class="caption">Selecting a default tab</p>
      <q-tabs class="shadow-2" align="justify">
        <q-tab slot="title" icon="mail" />
        <q-tab default slot="title" icon="alarm" />
        <q-tab slot="title" icon="movie" />
      </q-tabs>

      <p class="caption">Controlling selected tab</p>
      <q-option-group
        inline
        v-model="tab"
        :options="[
          {label: 'None', value: '', color: 'secondary'},
          {label: 'Mails', value: 'mails'},
          {label: 'Alarms', value: 'alarms'},
          {label: 'Movies', value: 'movies'}
        ]"
      />
      <br>
      <q-tabs v-model="tab" align="justify" class="shadow-2">
        <q-tab name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style lang="stylus">
.docs-tab .q-tabs
  margin-bottom 15px
</style>
