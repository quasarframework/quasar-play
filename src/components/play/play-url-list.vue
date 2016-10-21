<template>
  <div class="layout-padding">
    <blockquote v-if="!hasURLs">
      <small>
        Register your first URL by tapping on the FAB button on the lower
        right corner of this screen.
        You can either scan a QR code (<i>phonelink_ring</i>) or manually add a URL
        (<i>add</i>).
      </small>
    </blockquote>

    <div v-else class="list no-border">
      <div class="item two-lines item-delimiter" v-for="(item, id) in urls">
        <i
          class="item-primary cursor-pointer"
          @click="play(item.url)"
        >
          ondemand_video
        </i>
        <div class="item-content has-secondary">
          <div>{{item.name}}</div>
          <div class="text-primary cursor-pointer" @click="play(item.url)">{{item.url}}</div>
        </div>
        <div class="item-secondary">
          <quasar-popover :ref="'popover' + id">
            <i slot="target">
              more_vert
            </i>

            <div class="list">
              <div class="item item-link" @click="$refs['popover' + id][0].close(), editURL(id)">
                <i class="item-primary">edit</i>
                <div class="item-content">Edit</div>
              </div>
              <div class="item item-link" @click="$refs['popover' + id][0].close(), deleteURL(id)">
                <i class="item-primary">delete</i>
                <div class="item-content">Delete</div>
              </div>
            </div>
          </quasar-popover>
        </div>
      </div>
    </div>

    <quasar-fab class="cordova-only absolute-bottom-right" classNames="primary" direction="up">
      <quasar-small-fab class="secondary" @click.native="scanQR()">phonelink_ring</quasar-small-fab>
      <quasar-small-fab class="primary clear" @click.native="addURL()">add</quasar-small-fab>
    </quasar-fab>

    <button
      class="cordova-hide circular primary absolute-bottom-right"
      @click="addURL()"
      style="right: 16px; bottom: 16px;"
    >
      <i>add</i>
    </button>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import store from './play-store'

function addURL (name, url) {
  let id = Math.random().toString(36).substr(2, 9)

  store.set(id, {name, url})
  Toast.create.positive('URL added')
}

export default {
  data () {
    return {
      urls: store.state
    }
  },
  computed: {
    hasURLs () {
      return Object.keys(this.urls).length > 0
    }
  },
  methods: {
    deleteURL (id) {
      Dialog.create({
        title: 'Confirm',
        message: `
          Are you sure you want to delete the following entry?<br><br>
          <strong>${this.urls[id].name}</strong> - <em>${this.urls[id].url}</em>
        `,
        buttons: [
          'Cancel',
          {
            label: 'Delete',
            handler () {
              store.del(id)
              Toast.create.positive('URL removed')
            }
          }
        ]
      })
    },
    editURL (id) {
      var item = store.state[id]

      Dialog.create({
        title: 'Edit URL',
        message: '',
        form: {
          name: {
            type: 'textbox',
            label: 'Name',
            model: item.name
          },
          url: {
            type: 'textbox',
            label: 'URL',
            model: item.url
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Save',
            handler (data) {
              if (!data.name.length || !data.url.length) {
                Dialog.create({
                  title: 'Error',
                  message: 'Please fill in both name and URL'
                })
                return
              }

              store.set(id, {
                name: data.name,
                url: data.url
              })
            }
          }
        ]
      })
    },
    addURL () {
      Dialog.create({
        title: 'Add URL',
        message: '',
        form: {
          name: {
            type: 'textbox',
            label: 'Name',
            model: ''
          },
          url: {
            type: 'textbox',
            label: 'URL',
            model: 'http://'
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Add',
            handler (data) {
              if (!data.name.length && (!data.url.length || data.url === 'http://')) {
                Toast.create.warning('Please fill in both name and URL.')
                return
              }
              if (!data.name.length) {
                Toast.create.warning('Please fill in a name for your URL.')
                return
              }
              if (!data.url.length || data.url === 'http://') {
                Toast.create.warning('Please fill in the URL.')
                return
              }

              addURL(data.name, data.url)
            }
          }
        ]
      })
    },
    play (url) {
      this.$router.push({
        name: 'play-url',
        params: {
          url: encodeURIComponent(url)
        }
      })
    },
    scanQR () {
      var play = this.play

      cordova.plugins.barcodeScanner.scan(
        result => {
          if (result.cancelled) {
            Toast.create('QR code scanning aborted...')
            return
          }

          Dialog.create({
            title: 'QR Scanned',
            message: `
              What would you like to do with the URL?<br><br>
              <strong>${result.text}</strong>
            `,
            buttons: [
              'Cancel',
              {
                label: 'Save',
                handler () {
                  Dialog.create({
                    title: 'New URL',
                    message: `Set a name for your URL (${result.text}):`,
                    form: {
                      name: {
                        type: 'textbox',
                        label: 'Name'
                      }
                    },
                    buttons: [
                      'Cancel',
                      {
                        label: 'Add URL',
                        handler (data) {
                          if (!data.name.length) {
                            Dialog.create({
                              title: 'Error',
                              message: 'Please fill in a name'
                            })
                            return
                          }

                          addURL(data.name, result.text)
                        }
                      }
                    ]
                  })
                }
              },
              {
                label: 'Play',
                handler () {
                  play(result.text)
                }
              }
            ]
          })
        },
        error => {
          Dialog.create({
            message: 'Failed to scan the QR code: ' + error
          })
        }
      )
    }
  }
}
</script>
