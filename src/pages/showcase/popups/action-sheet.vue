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
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
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
            handler: () => {
              this.$q.notify('Deleted Article')
            }
          },
          {
            label: 'Share',
            icon: 'share',
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
          {
            label: 'Favorite',
            icon: 'favorite',
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
        ],
        dismiss: {
          label: 'Cancel',
          handler: () => {
            this.$q.notify('Cancelled...')
          }
        }
      })
    }
  }
}
</script>
