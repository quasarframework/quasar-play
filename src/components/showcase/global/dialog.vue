<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Click/Tap on each type to see it in action.
      </p>

      <div class="list item-delimiter highlight" style="max-width: 600px;">
        <div
          class="item item-link"
          v-for="dialog in types"
          @click="dialog.handler()"
        >
          <i class="text-primary">{{dialog.icon}}</i>
          <div class="item-content">
            <div class="item-label">{{dialog.label}}</div>
            <i>keyboard_arrow_right</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'

export default {
  data () {
    return {
      types: [
        {
          label: 'Alert',
          icon: 'warning',
          handler () {
            Dialog.create({
              title: 'Alert',
              message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
            }).show()
          }
        },
        {
          label: 'Prompt',
          icon: 'help',
          handler () {
            Dialog.create({
              title: 'Prompt',
              message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
              inputs: [
                {
                  name: 'input1',
                  label: 'Placeholder 1'
                },
                {
                  name: 'input2',
                  label: 'Placeholder 2'
                }
              ],
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Confirm',
          icon: 'done_all',
          handler () {
            Dialog.create({
              title: 'Confirm',
              message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
              buttons: [
                {
                  label: 'Disagree',
                  handler () {
                    Toast.create('Disagreed...')
                  }
                },
                {
                  label: 'Agree',
                  handler () {
                    Toast.create('Agreed!')
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Determined Progress',
          icon: 'hourglass_empty',
          handler () {
            var progress = {
              model: 25
            }

            var dialog = Dialog.create({
              title: 'Progress',
              message: 'Computing...',
              progress: progress,
              buttons: [
                {
                  label: 'Cancel',
                  handler (data) {
                    clearInterval(timeout)
                    Toast.create('Canceled on progress ' + data)
                  }
                }
              ]
            }).show()

            var timeout = setInterval(() => {
              progress.model++
              if (progress.model === 50) {
                clearInterval(timeout)
                dialog.close()
              }
            }, 1000)
          }
        },
        {
          label: 'Indeterminate Progress',
          icon: 'hourglass_full',
          handler () {
            var dialog = Dialog.create({
              title: 'Progress',
              message: 'Computing...',
              progress: {
                indeterminate: true
              },
              buttons: [
                {
                  label: 'Cancel',
                  handler (data) {
                    clearTimeout(timeout)
                    Toast.create('Canceled...')
                  }
                }
              ]
            }).show()

            var timeout = setTimeout(() => {
              clearInterval(timeout)
              dialog.close()
            }, 3000)
          }
        },
        {
          label: 'Pick One Option',
          icon: 'warning',
          handler () {
            Dialog.create({
              title: 'Radios',
              message: 'Message can be used for all types of Dialogs.',
              radios: [
                {
                  label: 'Option 1',
                  value: 'opt1'
                },
                {
                  label: 'Option 2',
                  value: 'opt2',
                  selected: true
                },
                {
                  label: 'Option 3',
                  value: 'opt3'
                },
                {
                  label: 'Option 4',
                  value: 'opt4'
                },
                {
                  label: 'Option 5',
                  value: 'opt5'
                }
              ],
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Pick Multiple Options',
          icon: 'playlist_add_check',
          handler () {
            Dialog.create({
              title: 'Checkboxes',
              checkboxes: [
                {
                  label: 'Option 1',
                  value: 'opt1',
                  checked: true
                },
                {
                  label: 'Option 2',
                  value: 'opt2'
                },
                {
                  label: 'Option 3',
                  value: 'opt3'
                },
                {
                  label: 'Option 4',
                  value: 'opt4'
                },
                {
                  label: 'Option 5',
                  value: 'opt5'
                }
              ],
              buttons: [
                {
                  label: 'Cancel',
                  handler () {}
                },
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Pick Multiple Options #2',
          icon: 'playlist_add_check',
          handler () {
            Dialog.create({
              title: 'Toggles',
              toggles: [
                {
                  label: 'Option 1',
                  value: 'opt1',
                  checked: true
                },
                {
                  label: 'Option 2',
                  value: 'opt2'
                },
                {
                  label: 'Option 3',
                  value: 'opt3'
                },
                {
                  label: 'Option 4',
                  value: 'opt4'
                },
                {
                  label: 'Option 5',
                  value: 'opt5'
                }
              ],
              buttons: [
                {
                  label: 'Cancel',
                  handler () {}
                },
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Pick Range',
          icon: 'warning',
          handler () {
            Dialog.create({
              title: 'Ranges',
              ranges: [
                {
                  label: 'Volume',
                  min: 1,
                  max: 5,
                  iconMin: 'volume_down',
                  iconMax: 'volume_up'
                },
                {
                  label: 'Brightness',
                  min: 1,
                  max: 5,
                  value: 2
                },
                {
                  label: 'Speed',
                  min: 1,
                  max: 10,
                  value: 6
                },
                {
                  label: 'Noise Level',
                  min: 4,
                  max: 15
                }
              ],
              buttons: [
                'Cancel',
                {
                  label: 'Change',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            }).show()
          }
        },
        {
          label: 'Stacked Buttons Example',
          icon: 'reorder',
          handler () {
            Dialog.create({
              title: 'Confirm',
              message: 'Quasar Framework is performance optimized by default, but you can use a speed boost by disabling some of its features.',
              stackButtons: true,
              buttons: [
                {
                  label: 'Turn on speed boost',
                  handler () {
                    console.log('Turning on speed boost.')
                  }
                },
                {
                  label: 'No Thanks',
                  handler () {
                    console.log('Ok, no speed boost.')
                  }
                }
              ]
            }).show()
          }
        }
      ]
    }
  }
}
</script>
