<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
      </p>

      <div class="list item-delimiter highlight">
        <div
          class="item cursor-pointer"
          v-for="modal in types"
          @click="modal.handler()"
        >
          <i class="text-primary">open_in_new</i>
          <div class="item-content">
            <div class="item-label">{{modal.label}}</div>
            <i>keyboard_arrow_right</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, Toast } from 'quasar'
import modalTemplate from 'helpers/modal-template.html'

let number = 0

function openBasicModal () {
  Modal.create({
    template: '<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'
  })
  .css({
    padding: '50px',
    minWidth: '50vw'
  })
  .show()
}

function openBasicModalWithEvents () {
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
}

function openLayoutModal () {
  Modal.create({
    template: modalTemplate,
    data: {
      number: ++number
    },
    methods: {
      openModal: openLayoutModal
    }
  }).css({
    minWidth: '80vw',
    minHeight: '80vh'
  }).show()
}

function openMinimizedModal () {
  Modal.create({
    template: '<h4>Minimized Modal</h4><p>This one has backdrop on small screens too.</p>' +
              '<button class="tertiary" @click="close()">Close Me</button>'
  }).set({
    minimized: true
  }).css({
    padding: '50px'
  }).show()
}

function openMaximizedModal () {
  Modal.create({
    template: '<h4>Maximized Modal</h4><p>This one is maximized on bigger screens too.</p>' +
              '<button class="tertiary" @click="close()">Close Me</button>'
  }).set({
    maximized: true
  }).css({
    padding: '50px'
  }).show()
}

export default {
  data () {
    return {
      types: [
        {
          label: 'Basic Modal',
          handler: openBasicModal
        },
        {
          label: 'Basic Modal with Events',
          handler: openBasicModalWithEvents
        },
        {
          label: 'Layout Modal',
          handler: openLayoutModal
        },
        {
          label: 'Always Minimized Modal',
          handler: openMinimizedModal
        },
        {
          label: 'Always Maximized Modal',
          handler: openMaximizedModal
        }
      ]
    }
  }
}
</script>
