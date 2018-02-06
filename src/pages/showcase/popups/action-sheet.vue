<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see an Action Sheet in action.
      </p>

      <q-list style="max-width: 600px;">
        <q-item
          link
          v-for="dialog in types"
          :key="dialog.title"
          @click.native="dialog.handler()"
          v-ripple.mat
        >
          <q-item-side icon="settings" />
          <q-item-main :label="dialog.label" />
          <q-item-side right icon="keyboard_arrow_right" />
        </q-item>

        <q-item-separator />
      </q-list>

      <p class="caption">Action Sheet as a component defined in template</p>
      <q-btn
        color="secondary"
        @click="actionSheet = true"
        label="Show me"
      />

      <q-action-sheet
        v-model="actionSheet"
        title="Action Sheet"
        @ok="onOk"
        @cancel="onCancel"
        :actions="[
          {
            label: 'Delete',
            icon: 'delete',
            color: 'red',
            handler: deleteAction
          },
          {
            label: 'Share',
            icon: 'share',
            color: 'primary'
          },
          {
            label: 'Play',
            icon: 'gamepad'
          },
          {
            label: 'Favorite',
            icon: 'favorite'
          }
        ]"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      actionSheet: false,
      types: [
        {
          label: 'List with Icons',
          handler: () => {
            this.showActionSheetWithIcons()
          }
        },
        {
          label: 'Grid with Icons',
          handler: () => {
            this.showActionSheetWithIcons(true)
          }
        },
        {
          label: 'List with Avatars',
          handler: () => {
            this.showActionSheetWithAvatar()
          }
        },
        {
          label: 'Grid with Avatars',
          handler: () => {
            this.showActionSheetWithAvatar(true)
          }
        }
      ]
    }
  },
  methods: {
    showActionSheetWithIcons (grid) {
      this.$q.actionSheet({
        title: 'Article Actions',
        grid: grid,
        actions: [
          {
            label: 'Delete',
            icon: 'delete',
            color: 'negative',
            handler: () => {
              this.$q.notify('Deleted Article')
            }
          },
          {
            label: 'Share',
            icon: 'share',
            color: 'blue',
            handler: () => {
              this.$q.notify('Shared!')
            }
          },
          {
            label: 'Play',
            icon: 'gamepad',
            handler: () => {
              this.$q.notify('Launched Game')
            }
          },
          {}, // separator
          {
            label: 'Favorite',
            icon: 'favorite',
            color: 'secondary',
            handler: () => {
              this.$q.notify('Added to favorites')
            }
          }
        ],
        dismiss: {
          label: 'Cancel',
          handler: () => {
            this.$q.notify('Cancelled...')
          }
        }
      })
    },

    showActionSheetWithAvatar (grid) {
      this.$q.actionSheet({
        title: 'Share to',
        grid: grid,
        actions: [
          {
            label: 'Joe',
            avatar: 'statics/linux-avatar.png',
            handler: () => {
              this.$q.notify('Shared to Joe!')
            }
          },
          {}, // separator
          {
            label: 'John',
            avatar: 'statics/boy-avatar.png',
            handler: () => {
              this.$q.notify('Shared to John!')
            }
          },
          {
            label: 'Jim',
            avatar: 'statics/linux-avatar.png',
            handler: () => {
              this.$q.notify('Shared to Jim!')
            }
          },
          {
            label: 'Jack',
            avatar: 'statics/guy-avatar.png',
            handler: () => {
              this.$q.notify('Shared to Jack!')
            }
          }
        ]
      }).then(action => {
        // user picked an action
      }).catch(() => {
        // user dismissed
      })
    },
    deleteAction () {
      this.$q.notify('Deleting...')
    },
    onOk (item) {
      if (item.handler) {
        // if we've already triggered a handler
        return
      }
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${item.label}"`
      })
    },
    onCancel () {
      this.$q.notify({
        color: 'tertiary',
        icon: 'done',
        message: 'Action Sheet was dismissed'
      })
    }
  }
}
</script>
