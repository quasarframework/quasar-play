<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">These are just a few examples</p>
      <q-btn-dropdown v-model="first" color="primary" label="Standard">
        <q-list link>
          <q-item v-for="n in 2" :key="`1.${n}`" @click.native="first = false">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item @click.native="first = false">
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
        v-model="second"
        color="secondary"
        glossy
        label="Click me"
        @click="splitClick"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`2.${n}`" @click.native="second = false">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item @click.native="second = false">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Outline type of small size</p>
      <q-btn-dropdown
        split
        size="sm"
        v-model="third"
        color="primary"
        outline
        label="Get directions"
        icon="map"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`2.${n}`" @click.native="third = false">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item @click.native="third = false">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <p class="caption">Push type with icon</p>
      <q-btn-dropdown
        split
        v-model="fourth"
        color="orange"
        text-color="black"
        push
        label="Get directions"
        icon="map"
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`2.${n}`" @click.native="fourth = false">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item @click.native="fourth = false">
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
    first: false,
    second: false,
    third: false,
    fourth: false
  }),
  methods: {
    splitClick () {
      this.$q.notify({
        position: 'right',
        message: 'Hey, why did you click on me?'
      })
    }
  }
}
</script>
