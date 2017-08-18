<template>
  <div class="layout-padding play-cards">
    <blockquote v-if="!hasURLs">
      <small>
        Register your first URL by tapping on the FAB button on the lower
        right corner of this screen.
        You can either scan a QR code (<i>phonelink_ring</i>) or manually add a URL
        (<i>add</i>).
      </small>
    </blockquote>

    <div class="row">
      <div
        v-for="(item, id) in urls"
        :key="item"
        class="col-xs-12 col-sm-6 col-lg-4 col-xl-3"
      >
        <q-card>
          <q-card-title>
            <div class="ellipsis-2-lines">{{item.name}}</div>
            <div slot="subtitle" class="ellipsis-3-lines">{{item.url}}</div>
          </q-card-title>
          <q-card-separator />
          <q-card-actions>
            <q-btn flat color="tertiary" icon="ondemand_video" @click="play(item.url)">Play</q-btn>
            <div class="col"></div>
            <q-btn flat color="secondary" @click="editURL(id)">
              <q-icon name="edit" />
            </q-btn>
            <q-btn flat color="secondary" @click="deleteURL(id)">
              <q-icon name="delete" />
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-fixed-position corner="bottom-right" :offset="[16, 16]">
      <q-fab
        v-if="$q.platform.is.cordova"
        color="primary"
        direction="up"
      >
        <q-fab-action color="secondary" @click.native="scanQR()" icon="phonelink_ring" />
        <q-fab-action color="primary" @click.native="addURL()" icon="add" />
      </q-fab>

      <q-btn
        v-else
        color="primary"
        round
        glossy
        class="cordova-hide absolute-bottom-right shadow-4"
        @click="addURL()"
        style="right: 16px; bottom: 16px;"
      >
        <q-icon name="add" />
      </q-btn>
    </q-fixed-position>
  </div>
</template>

<script>
import store from './play-store'
import {
  Dialog,
  Toast,
  QBtn,
  QFab,
  QFabAction,
  QCard,
  QCardTitle,
  QCardActions,
  QCardSeparator,
  QIcon,
  QPopover,
  QFixedPosition
} from 'quasar'

function addURL (name, url) {
  let id = Math.random().toString(36).substr(2, 9)

  store.set(id, {name, url})
  Toast.create.positive('URL added')
}

export default {
  components: {
    QBtn,
    QFab,
    QFabAction,
    QCard,
    QCardTitle,
    QCardActions,
    QCardSeparator,
    QIcon,
    QPopover,
    QFixedPosition
  },
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
        form: {
          name: {
            type: 'text',
            label: 'Name',
            model: item.name
          },
          url: {
            type: 'text',
            label: 'URL',
            model: item.url
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Save',
            preventClose: true,
            handler (data, close) {
              if (!data.name.length) {
                Toast.create.warning('Please fill in a name')
                return
              }
              if (!data.url.length) {
                Toast.create.warning('Please fill in a URL')
                return
              }

              close()
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
            type: 'text',
            label: 'Name',
            model: ''
          },
          url: {
            type: 'text',
            label: 'URL',
            model: 'http://'
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Add',
            preventClose: true,
            handler (data, close) {
              if (!data.name.length) {
                Toast.create.warning('Please fill in a name')
                return
              }
              if (!data.url.length || data.url === 'http://') {
                Toast.create.warning('Please fill in a URL')
                return
              }

              close()
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
                        preventClose: true,
                        handler (data, close) {
                          if (!data.name.length) {
                            Toast.create('Please fill in a name')
                            return
                          }

                          close()
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

<style lang="stylus">
.play-cards
  padding-bottom 90px
  .q-card-title
    font-size 18px
    line-height 20px
    margin-bottom 8px
</style>
