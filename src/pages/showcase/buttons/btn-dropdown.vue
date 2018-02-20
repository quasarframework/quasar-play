<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">These are just a few examples</p>
      <q-btn-dropdown
        color="primary"
        label="Standard"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`1.${n}`" v-close-overlay @click.native="showNotification">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Split with Glossy effect</p>
      <q-btn-dropdown
        split
        color="secondary"
        glossy
        label="Click me"
        @click="splitClick"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`2.${n}`" v-close-overlay @click.native="showNotification">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Outline</p>
      <q-btn-dropdown
        split
        color="black"
        outline
        label="Get directions"
        icon="map"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`3.${n}`" v-close-overlay @click.native="showNotification">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Push type with icon and v-model</p>
      <q-btn-dropdown
        split
        v-model="dropdown"
        color="purple"
        push
        label="Get directions"
        icon="map"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`4.${n}`" @click.native="showNotification(), dropdown = false">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item @click.native="showNotification(), dropdown = false">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Push type with icon and v-model</p>
      <q-btn-dropdown
        split
        color="red"
        rounded
        label="Get directions"
        icon="map"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`5.${n}`" v-close-overlay @click.native="showNotification()">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item v-close-overlay @click.native="showNotification()">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    dropdown: false
  }),
  methods: {
    splitClick () {
      this.$q.notify({
        position: 'right',
        message: 'Hey, why did you click on me?'
      })
    },
    showNotification () {
      this.$q.notify('Option selected & closed dropdown')
    }
  }
}
</script>
