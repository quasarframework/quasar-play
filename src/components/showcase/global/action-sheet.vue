<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see an Action Sheet in action.
      </p>

      <div class="list item-delimiter highlight">
        <div
          class="item item-link"
          v-for="dialog in types"
          @click="dialog.handler()"
        >
          <i class="text-primary">settings</i>
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
import { ActionSheet, Toast } from 'quasar'

function showActionSheetWithIcons (gallery) {
  ActionSheet.create({
    title: 'Article Actions',
    gallery: gallery,
    buttons: [
      {
        label: 'Delete',
        icon: 'delete',
        handler () {
          Toast.create.positive('Deleted Article')
        }
      },
      {
        label: 'Share',
        icon: 'share',
        handler () {
          Toast.create.positive('Shared!')
        }
      },
      {
        label: 'Play',
        icon: 'gamepad',
        handler () {
          Toast.create.positive('Launched Game')
        }
      },
      {
        label: 'Favorite',
        icon: 'favorite',
        handler () {
          Toast.create.positive('Added to favorites')
        }
      },
      {
        label: 'Cancel',
        icon: 'cancel',
        classes: 'text-primary',
        handler () {}
      }
    ]
  }).show()
}

function showActionSheetWithAvatar (gallery) {
  ActionSheet.create({
    title: 'Share to',
    gallery: gallery,
    buttons: [
      {
        label: 'Joe',
        avatar: 'statics/linux-avatar.png',
        handler () {
          Toast.create.positive('Shared to Joe!')
        }
      },
      {
        label: 'John',
        avatar: 'statics/boy-avatar.png',
        handler () {
          Toast.create.positive('Shared to John!')
        }
      },
      {
        label: 'Jim',
        avatar: 'statics/linux-avatar.png',
        handler () {
          Toast.create.positive('Shared to Jim!')
        }
      },
      {
        label: 'Jack',
        avatar: 'statics/guy-avatar.png',
        handler () {
          Toast.create.positive('Shared to Jack!')
        }
      },
      {
        label: 'Cancel',
        icon: 'cancel',
        classes: 'text-primary',
        handler () {}
      }
    ]
  }).show()
}

export default {
  data () {
    return {
      types: [
        {
          label: 'List with Icons',
          handler () {
            showActionSheetWithIcons()
          }
        },
        {
          label: 'Gallery with Icons',
          handler () {
            showActionSheetWithIcons(true)
          }
        },
        {
          label: 'List with Avatars',
          handler () {
            showActionSheetWithAvatar()
          }
        },
        {
          label: 'Gallery with Avatars',
          handler () {
            showActionSheetWithAvatar(true)
          }
        }
      ]
    }
  }
}
</script>
