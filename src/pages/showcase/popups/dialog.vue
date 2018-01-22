<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
      </p>

      <q-list style="max-width: 600px;">
        <q-item
          link
          v-for="dialog in types"
          :key="dialog.label"
          @click.native="dialog.handler()"
          v-ripple.mat
        >
          <q-item-side :icon="dialog.icon" />
          <q-item-main :label="dialog.label" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
        <q-item-separator />
        <q-list-header>Options</q-list-header>
        <q-item
          link
          v-for="dialog in options"
          :key="dialog.label"
          @click.native="dialog.handler()"
          v-ripple.mat
        >
          <q-item-side :icon="dialog.icon" />
          <q-item-main :label="dialog.label" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
        <q-item-separator />
        <q-list-header>Appear from Edges</q-list-header>
        <q-item
          link
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
          @click.native="openSpecialPosition(position)"
          v-ripple.mat
        >
          <q-item-side :icon="positionalIcon[position]" />
          <q-item-main :label="`Dialog from ${position}`" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
      </q-list>

      <p class="caption">
        For complex cases where you need a certain content (like different form components),
        you can use the Dialog as a component. This way you can also add your custom logic
        for content validation.
      </p>
      <q-btn color="primary" @click="customDialogModel = true" label="Show Dialog" />

      <q-dialog
        v-model="customDialogModel"
        ref="dialog"
        title="Custom title"
        message="Custom message"
        :stack-buttons="stackButtons"
        @cancel="onCancel"
        @ok="onOk"
        @show="onShow"
        @hide="onHide"
      >
        <q-toggle v-model="stackButtons" label="Stack Buttons" />
        <template slot="buttons" slot-scope="props">
          <q-btn flat label="Cancel" @click="props.cancel()" />
          <q-btn flat label="OK" @click="props.ok()" />
        </template>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    openSpecialPosition (position) {
      this.$q.dialog({
        title: 'Positioned',
        message: `This dialog appears from ${position}.`,
        position
      })
    },
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    }
  },
  data () {
    return {
      stackButtons: false,
      customDialogModel: false,
      positionalIcon: {
        top: 'arrow_upward',
        right: 'arrow_forward',
        bottom: 'arrow_downward',
        left: 'arrow_back'
      },
      types: [
        {
          label: 'Alert',
          icon: 'warning',
          handler: () => {
            this.$q.dialog({
              title: 'Alert',
              message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
            })
          }
        },
        {
          label: 'Confirm',
          icon: 'done_all',
          handler: () => {
            this.$q.dialog({
              title: 'Confirm',
              message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
              ok: 'Agree',
              cancel: 'Disagree'
            }).then(() => {
              this.$q.notify('Agreed!')
            }).catch(() => {
              this.$q.notify('Disagreed...')
            })
          }
        },
        {
          label: 'Prompt',
          icon: 'help',
          handler: () => {
            this.$q.dialog({
              title: 'Prompt',
              message: 'Modern front-end framework on steroids.',
              prompt: {
                model: '',
                type: 'text' // optional
              },
              cancel: true,
              color: 'secondary'
            }).then(data => {
              this.$q.notify(`You typed: "${data}"`)
            }).catch(() => {
              this.$q.notify('Ok, no mood for talking, right?')
            })
          }
        },
        {
          label: 'Single Choice Selection',
          icon: 'radio_button_checked',
          handler: () => {
            this.$q.dialog({
              title: 'Options',
              message: 'Modern front-end framework on steroids.',
              options: {
                type: 'radio',
                model: 'opt2',
                items: [
                  {label: 'Option 1', value: 'opt1', color: 'secondary'},
                  {label: 'Option 2', value: 'opt2'},
                  {label: 'Option 3', value: 'opt3'}
                ]
              },
              cancel: true,
              preventClose: true,
              color: 'secondary'
            }).then(data => {
              this.$q.notify(`You selected: ${data}`)
            })
          }
        },
        {
          label: 'Multiple Choice Selection',
          icon: 'check_box',
          handler: () => {
            this.$q.dialog({
              title: 'Options',
              message: 'Modern front-end framework on steroids.',
              options: {
                type: 'checkbox',
                model: [],
                items: [
                  {label: 'Option 1', value: 'opt1', color: 'secondary'},
                  {label: 'Option 2', value: 'opt2'},
                  {label: 'Option 3', value: 'opt3'}
                ]
              },
              cancel: true,
              preventClose: true,
              color: 'secondary'
            }).then(data => {
              this.$q.notify(`You selected: ${JSON.stringify(data)}`)
            })
          }
        }
      ],
      options: [
        {
          label: 'Stack Buttons',
          icon: 'dns',
          handler: () => {
            this.$q.dialog({
              title: 'Stacked buttons',
              message: 'Go to a movie.',
              ok: 'Yes, please!',
              cancel: 'Uhm, nope',
              stackButtons: true
            }).then(() => {
              this.$q.notify('Agreed!')
            }).catch(() => {
              this.$q.notify('Disagreed...')
            })
          }
        },
        {
          label: 'Prevent accidental close',
          icon: 'done_all',
          handler: () => {
            this.$q.dialog({
              title: 'Prevent close',
              message: 'This dialog cannot be dismissed by clicking/tapping on the background overlay.',
              ok: true,
              cancel: true,
              preventClose: true
            }).then(() => {
              this.$q.notify('You said OK!')
            }).catch(() => {
              this.$q.notify(`You didn't agree`)
            })
          }
        }
      ]
    }
  }
}
</script>
