<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
      </p>

      <div class="list" style="max-width: 600px;">
        <div
          class="item item-link"
          v-for="modal in types"
          @click="modal.handler()"
        >
          <i class="item-primary">open_in_new</i>
          <div class="item-content has-secondary">
            <div>{{modal.label}}</div>
          </div>
          <i class="item-secondary">keyboard_arrow_right</i>
        </div>
      </div>
    </div>

    <quasar-modal :set="{minimized: true}" :css="{minWidth: '30vw', minHeight: '30vh'}" v-ref:modal>
      <div style="padding: 50px">
        <h4>Template Inline Modal</h4>
        <p>Variable from parent Vue scope: {{ modalVariable }}</p>
        <br><br>
        <button class="primary" @click="$refs.modal.close()">Close</button>
      </div>
    </quasar-modal>
  </div>
</template>

<script>
import { Modal, Toast } from 'quasar'
import modalTemplate from 'helpers/modal-template.html'

export default {
  data () {
    return {
      modalVariable: 5,
      types: [
        {
          label: 'Basic',
          handler: () => { this.openBasicModal() }
        },
        {
          label: 'Basic with Events',
          handler: () => { this.openBasicModalWithEvents() }
        },
        {
          label: 'With Layout',
          handler: () => { this.openLayoutModal() }
        },
        {
          label: 'Always Minimized',
          handler: () => { this.openMinimizedModal() }
        },
        {
          label: 'Always Maximized',
          handler: () => { this.openMaximizedModal() }
        },
        {
          label: 'Template Inline Modal',
          handler: () => { this.openInlineModal() }
        }
      ]
    }
  },
  methods: {
    openInlineModal () {
      this.$refs.modal.show()
    },

    openBasicModal () {
      Modal.create({
        template: '<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'
      })
      .css({
        padding: '50px',
        minWidth: '50vw'
      })
      .show()
    },

    openBasicModalWithEvents () {
      Modal.create({
        template: '<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'
      })
      .onShow(() => {
        Toast.create('onShow triggered')
      })
      .onClose(() => {
        Toast.create('onClose triggered')
      })
      .css({
        padding: '50px',
        minWidth: '50vw'
      })
      .show()
    },

    openLayoutModal () {
      Modal.create({
        template: modalTemplate,
        methods: {
          openModal: () => { this.openLayoutModal() }
        }
      }).css({
        minWidth: '80vw',
        minHeight: '80vh'
      }).show()
    },

    openMinimizedModal () {
      Modal.create({
        template: '<h4>Minimized Modal</h4><p>This one has backdrop on small screens too.</p>' +
                  '<button class="tertiary" @click="close()">Close Me</button>'
      }).set({
        minimized: true
      }).css({
        padding: '50px'
      }).show()
    },

    openMaximizedModal () {
      Modal.create({
        template: '<h4>Maximized Modal</h4><p>This one is maximized on bigger screens too.</p>' +
                  '<button class="tertiary" @click="close()">Close Me</button>'
      }).set({
        maximized: true
      }).css({
        padding: '50px'
      }).show()
    }
  }
}
</script>
