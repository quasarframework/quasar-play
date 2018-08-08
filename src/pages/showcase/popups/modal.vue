<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
        <span class="desktop-only iframe-hide">And resize your browser window.</span>
      </p>

      <q-list style="max-width: 600px;">
        <q-item
          link
          v-for="modal in types"
          :key="modal.label"
          @click.native="modal.show()"
          v-ripple.mat
        >
          <q-item-side icon="open_in_new" />
          <q-item-main :label="modal.label" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
      </q-list>

      <p class="caption">Appear from Edges</p>
      <q-list style="max-width: 600px;">
        <q-item
          link
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
          @click.native="openSpecialPosition(position)"
          v-ripple.mat
        >
          <q-item-side :icon="positionalIcon[position]" />
          <q-item-main :label="`Modal from ${position}`" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
      </q-list>

      <p class="caption">Using Vue reference and async/await. Opens then closes immediately.</p>
      <q-btn color="primary" @click="showByReference" label="Show" />
    </div>

    <q-modal v-model="basicModal" :content-css="{minWidth: '50vw'}">
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Basic Modal</div>
        <p v-for="n in 25" :key="`a-${n}`">Scroll down to close</p>
        <q-btn color="primary" @click="basicModal = false" label="Close" />
      </div>
    </q-modal>

    <q-modal
      v-model="eventsModal"
      @show="notify('show')"
      @escape-key="notify('escape-key')"
      @hide="notify('hide')"
      :content-css="{minWidth: '50vw'}"
    >
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Modal with Events</div>
        <p v-for="n in 25" :key="`b-${n}`">Scroll down to close</p>
        <q-btn color="primary" @click="eventsModal = false" label="Close" />
      </div>
    </q-modal>

    <q-modal v-model="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            @click="layoutModal = false"
            icon="reply"
          />
          <q-toolbar-title>
            Header
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar slot="header">
          <q-search class="full-width" inverted v-model="search" color="none" />
        </q-toolbar>

        <q-toolbar slot="footer">
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-btn color="primary" @click="layoutModal = false" label="Close" />
          <p class="caption" v-for="n in 15" :key="`c-${n}`">This is a Modal presenting a Layout.</p>
        </div>
      </q-modal-layout>
    </q-modal>

    <!-- specifying Vue ref for last example only -->
    <q-modal v-model="minimizedModal" minimized ref="modalRef">
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Minimized Modal</div>
        <p>This one has backdrop on small screens too.</p>
        <q-btn color="red" v-close-overlay label="Close" />
      </div>
    </q-modal>

    <q-modal v-model="maximizedModal" maximized>
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Maximized Modal</div><p>This one is maximized on bigger screens too.</p>
        <q-btn color="tertiary" @click="maximizedModal = false" label="Close" />
      </div>
    </q-modal>

    <q-modal v-model="positionModal" :position="position">
      <div style="padding: 20px">
        <div class="q-display-1 q-mb-md">Modal</div><p>This one gets displayed from {{ position }}.</p>
        <q-btn color="orange" @click="positionModal = false" label="Close" />
      </div>
    </q-modal>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      basicModal: false,
      eventsModal: false,
      layoutModal: false,
      minimizedModal: false,
      maximizedModal: false,
      positionModal: false,
      types: [
        {
          label: 'Basic',
          show: () => { this.basicModal = true }
        },
        {
          label: 'Basic with Events',
          show: () => { this.eventsModal = true }
        },
        {
          label: 'With Modal Layout',
          show: () => { this.layoutModal = true }
        },
        {
          label: 'Always Minimized',
          show: () => { this.minimizedModal = true }
        },
        {
          label: 'Always Maximized',
          show: () => { this.maximizedModal = true }
        }
      ],
      position: 'bottom',
      positionalIcon: {
        top: 'arrow_upward',
        right: 'arrow_forward',
        bottom: 'arrow_downward',
        left: 'arrow_back'
      }
    }
  },
  methods: {
    notify (eventName) {
      this.$q.notify(`Event "${eventName}" was triggered.`)
    },
    openSpecialPosition (position) {
      this.position = position
      this.$nextTick(() => {
        this.positionModal = true
      })
    },
    async showByReference () {
      await this.$refs.modalRef.show()
      await this.$refs.modalRef.hide()
      this.$q.notify({
        color: 'secondary',
        message: 'Done opening and closing'
      })
    }
  }
}
</script>
