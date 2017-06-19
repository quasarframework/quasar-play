<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-card class="bigger" style="margin: 0 0 1.5rem">
        <q-card-separator />
        <q-card-main class="group">
          <q-card-title>
            Alerts with Animation
          </q-card-title>
          <q-alert
            color="brown"
            icon="cloud"
            enter="bounceInLeft"
            leave="bounceOutRight"
            appear
            v-model="visible"
            dismissible
          >
            Lorem ipsum dolor sit amet.
          </q-alert>

          <q-alert
            type="negative"
            ref="destroyableAlert"
            enter="bounceInRight"
            leave="bounceOutLeft"
            v-model="visible2"
            dismissible
            :actions="[{label: 'Snooze', handler () {}}]"
          >
            Lorem ipsum dolor sit amet.
          </q-alert>
        </q-card-main>
        <q-card-separator v-if="!visible || !visible2"/>
        <q-card-actions>
          <q-btn v-if="!visible || !visible2" flat @click="reset">Reset</q-btn>
        </q-card-actions>
      </q-card>

      <q-card style="margin: 0 0 1.5rem">
        <q-card-main class="group">
          <q-card-title>
            Alerts as Methods - Static Positioning
          </q-card-title>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat color="primary" @click="alertAsMethod('top-right', 'warning', 'You need to know about this!', 'warning')">
            Top Right
          </q-btn>
          <q-btn flat color="primary" @click="alertAsMethod('top-left', 'error', 'Woah! Danger! You are getting good at this!', 'report_problem')">
            Top Left
          <br /></q-btn>
          <q-btn flat color="primary" @click="alertAsMethod('bottom-right', 'primary', 'Wow! Nice job!', 'wifi')">
            Bottom Right
          </q-btn>
          <q-btn flat color="primary" @click="alertAsMethod('bottom-left', 'secondary', 'Quasar is cool! Right?', 'wifi')">
            Bottom Left
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-alert
        v-for="type in ['positive', 'info', 'negative', 'warning']"
        :key="type"
        :color="type"
        dismissible
        style="margin-bottom: 1.5rem"
      >
        Lorem ipsum dolor sit amet.
      </q-alert>

      <q-alert
        v-for="type in ['positive', 'info', 'negative', 'warning']"
        :key="type"
        :color="type"
        style="margin-bottom: 1.5rem"
      >
        Non dismissible. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </q-alert>
    </div>
  </div>
</template>

<script>
import {
  Alert,
  QAlert,
  QBtn,
  QCard,
  QCardMain,
  QCardActions,
  QCardSeparator
} from 'quasar'

// Don't forget to import the animations you are using
// import 'quasar-extras/animate/bounceInLeft.css'
// import 'quasar-extras/animate/bounceInRight.css'
// import 'quasar-extras/animate/bounceOutRight.css'

export default {
  components: {
    QAlert,
    QBtn,
    QCard,
    QCardMain,
    QCardActions,
    QCardSeparator
  },
  data () {
    return {
      visible: true,
      visible2: true
    }
  },
  mounted () {
    Alert.create({
      html: 'Warning, warning, Will Robinson!',
      enter: 'bounceInRight',
      leave: 'bounceOutRight'
    })
  },
  methods: {
    alertAsMethod (position, color, text, icon) {
      Alert.create({
        enter: 'bounceInRight',
        leave: 'bounceOutRight',
        color: color,
        icon: icon,
        html: text,
        position: position,
        actions: [
          {
            label: 'Snooze',
            handler () {
              console.log('acting')
            }
          },
          {
            label: 'Abort',
            handler () {
              console.log('aborting')
            }
          }
        ]
      })
    },
    reset () {
      this.visible = true
      this.visible2 = true
    }
  }
}
</script>
