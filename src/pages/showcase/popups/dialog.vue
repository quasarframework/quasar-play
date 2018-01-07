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
        <q-list-header>Using QDialog component</q-list-header>
        <q-item
          link
          v-for="dialog in component"
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
          v-for="position in ['top', 'bottom', 'left', 'right']"
          :key="position"
          :position="position"
          @click.native="showFromEdge(position)"
          v-ripple.mat
        >
          <q-item-side icon="open_with" />
          <q-item-main :label="`Dialog from ${position}`" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>
      </q-list>

      <p class="caption">Form components can be combined and named however you wish. Check source code.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    showFromEdge (position) {
      this.$q.dialog({
        title: 'Positioned',
        message: `This dialog appears from ${position}.`,
        position
      })
    }
  },
  data () {
    return {
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
      component: [
        {
          label: 'TODO Custom CSS classes & style to buttons',
          icon: 'format_color_fill',
          handler: () => {
            this.$q.dialog({
              title: 'Confirm',
              message: 'Customized buttons.',
              color: 'secondary',
              ok: 'Agree',
              cancel: 'Disagree'
            })
          }
        },
        {
          label: 'TODO Stacked Buttons Example',
          icon: 'reorder',
          handler: () => {
            this.$q.dialog({
              title: 'Favorite Superhero',
              message: 'What is your superhero of choice?',
              stackButtons: true,
              buttons: [
                {
                  label: 'Choose Superman',
                  handler: () => {
                    console.log('Superman.')
                  }
                },
                {
                  label: 'Choose Batman',
                  handler: () => {
                    console.log('Batman.')
                  }
                },
                {
                  label: 'Choose Spiderman',
                  handler: () => {
                    console.log('Spiderman.')
                  }
                },
                {
                  label: 'No Thanks',
                  color: 'primary',
                  raised: true,
                  handler: () => {
                    console.log('Ok, no superhero.')
                  }
                }
              ]
            })
          }
        },
        {
          label: 'TODO Prevent Close on Button',
          icon: 'clear',
          handler: () => {
            this.$q.dialog({
              title: 'Prevent Close',
              message: 'Having "Prevent" checkbox ticked and then hitting "Try to Close" button will prevent the dialog from closing.',
              options: {
                type: 'checkbox',
                model: ['prevent'],
                items: [
                  {label: 'Prevent dialog close', value: 'prevent'}
                ]
              },
              ok: 'Try to Close',
              preventClose: true
            }).then((data, close) => {
              if (data[0] === 'prevent') {
                this.$q.notify('Untick "Prevent" checkbox to be able to close the Dialog.')
                return
              }
              close().then(() => {
                this.$q.notify(`Finally. It's closed now.`)
              })
            })
          }
        }
      ]
    }
  }
}
</script>
