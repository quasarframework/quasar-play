<template>
  <div>
    <div class="layout-padding">
      <p>Basic Toasts</p>
      <p class="group">
        <button class="primary" @click="basicToast()">
          Basic Toast
        </button>

        <button class="primary" @click="basicToastWithLongMessage()">
          Basic Toast with Long Message
        </button>
      </p>

      <p>Types of Toasts</p>
      <p class="group">
        <button
          v-for="type in types"
          :class="type"
          @click="toastWithType(type)"
        >
          {{type | capitalize}} Toast
        </button>
      </p>

      <p>Toasts with Options</p>
      <p class="group">
        <button class="primary" @click="noTimeoutToast()">
          Basic Toast with No Timeout
        </button>

        <button class="primary" @click="toastWithIcon()">
          Toast With an Icon
        </button>

        <button class="primary" @click="toastWithButton()">
          Toast With a Button
        </button>
      </p>

      <p>Controlling Toasts</p>
      <p class="group">
        <button
          class="secondary"
          @click="showToast()"
          :class="{disabled: toastShowing}"
        >
          Show Toast
        </button>
        <button
          class="secondary"
          @click="dismissToast()"
          :class="{disabled: !toastShowing}"
        >
          Dismiss Toast
        </button>
      </p>

      <p>Simultaneous Multiple Toasts</p>
      <p class="group">
        <button class="primary" @click="showMultipleToasts()">
          Show Multiple Toasts
        </button>
      </p>

      <p>Custom Colors</p>
      <p class="group">
        <button class="orange" @click="showColorToast('orange')">
          Orange
        </button>
        <button class="purple" @click="showColorToast('purple')">
          Purple
        </button>
        <button class="brown" @click="showColorToast('brown')">
          Brown
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'quasar'

export default {
  data () {
    return {
      types: ['positive', 'negative', 'info', 'warning'],
      toastShowing: false
    }
  },
  methods: {
    basicToast () {
      Toast.create('Basic toast. Can be dismissed by swiping it left or right.')
    },
    basicToastWithLongMessage () {
      Toast.create('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    },
    toastWithType (type) {
      Toast.create[type]({
        html: type.charAt(0).toUpperCase() + type.slice(1) + ' toast'
      })
    },
    noTimeoutToast () {
      Toast.create({
        html: 'This toast won\'t timeout. User must acknowledge it.',
        timeout: 0
      })
    },
    toastWithIcon () {
      Toast.create({
        html: 'Toast with an icon',
        icon: 'camera_enhance'
      })
    },
    toastWithButton () {
      Toast.create({
        html: 'Toast with an action button',
        button: {
          label: 'Undo',
          handler () {
            Toast.create.positive('Undone!')
          }
        }
      })
    },
    showToast () {
      if (this.toastShowing) {
        return
      }

      var self = this

      this.toast = Toast.create({
        html: 'Dismiss this toast with nearby "Dismiss Toast" button',
        timeout: 0,
        onDismiss () {
          self.toastShowing = false
        }
      })
      this.toastShowing = true
    },
    dismissToast () {
      if (!this.toastShowing) {
        return
      }

      this.toast.dismiss()
      this.toastShowing = false
    },
    showMultipleToasts () {
      this.types.forEach((type) => {
        this.toastWithType(type)
      })
    },
    showColorToast (color) {
      Toast.create({
        html: `Some ${color} toast.`,
        color
      })
    }
  }
}
</script>
