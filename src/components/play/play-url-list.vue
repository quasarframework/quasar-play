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

    <div v-else class="list item-delimiter">
      <div class="item" v-for="(id, item) in urls">
        <button
          class="primary clear small-padding"
          @click="deleteURL(id)"
        >
          <i>delete</i>
        </button>
        <div class="item-content">
          <div class="item-label">
            <p class="item-title">{{item.name}}</p>
            <p>{{item.url}}</p>
          </div>
          <div class="item-value">
            <button
              style="margin-right: 5px;"
              class="primary clear small-padding"
              @click="editURL(id)"
            >
              <i>edit</i>
            </button>
            <button
              class="primary clear small-padding"
              @click="play(item.url)"
            >
              <i>ondemand_video</i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <quasar-fab backdrop class="absolute-bottom-right" type="primary" direction="up">
      <quasar-small-fab class="secondary" @click="scanQR">phonelink_ring</quasar-small-fab>
      <quasar-small-fab class="primary clear" @click="addURL">add</quasar-small-fab>
    </quasar-fab>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import store from './play-store'

function addURL (name, url) {
  let id = Math.random().toString(36).substr(2, 9)

  store.set(id, {name, url})

  Toast.create.positive({
    html: 'URL added',
    timeout: 1500
  })
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
            }
          }
        ]
      }).show()
    },
    editURL (id) {
      var item = store.state[id]

      Dialog.create({
        title: 'Edit URL',
        message: '',
        inputs: [
          {
            name: 'name',
            label: 'Name',
            model: item.name
          },
          {
            name: 'url',
            label: 'URL',
            model: item.url
          }
        ],
        buttons: [
          'Cancel',
          {
            label: 'Save',
            handler (data) {
              if (!data[0].value.length || !data[1].value.length) {
                Dialog.create({
                  title: 'Error',
                  message: 'Please fill in both name and URL'
                }).show()
                return
              }

              store.set(id, {
                name: data[0].value,
                url: data[1].value
              })
            }
          }
        ]
      }).show()
    },
    addURL () {
      Dialog.create({
        title: 'Add URL',
        message: '',
        inputs: [
          {
            name: 'name',
            label: 'Name'
          },
          {
            name: 'url',
            label: 'URL'
          }
        ],
        buttons: [
          'Cancel',
          {
            label: 'Add',
            handler (data) {
              if (!data[0].value.length || !data[1].value.length) {
                Dialog.create({
                  title: 'Error',
                  message: 'Please fill in both name and URL'
                }).show()
                return
              }

              addURL(data[0].value, data[1].value)
            }
          }
        ]
      }).show()
    },
    play (url) {
      this.$router.go({
        name: 'play-url', params: {
          url: encodeURIComponent(url)
        }
      })
    },
    scanQR () {
      var play = this.play

      cordova.plugins.barcodeScanner.scan(
        (result) => {
          if (result.cancelled) {
            Toast.create.warning({
              html: 'QR code scanning aborted...',
              timeout: 1500
            })
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
                    inputs: [
                      {
                        name: 'name',
                        label: 'Name'
                      }
                    ],
                    buttons: [
                      'Cancel',
                      {
                        label: 'Add URL',
                        handler (data) {
                          if (!data[0].value.length) {
                            Dialog.create({
                              title: 'Error',
                              message: 'Please fill in a name'
                            }).show()
                            return
                          }

                          addURL(data[0].value, result.text)
                        }
                      }
                    ]
                  }).show()
                }
              },
              {
                label: 'Play',
                handler () {
                  play(result.text)
                }
              }
            ]
          }).show()
        },
        (error) => {
          Dialog.create({
            message: 'Failed to scan the QR code: ' + error
          }).show()
        }
      )
    }
  }
}
</script>

<style scoped>
.small-padding {
  padding: 0;
}
</style>
