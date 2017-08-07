<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Alerts with Animation</p>
      <q-card>
        <q-card-main class="group">
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
        <template v-if="!visible || !visible2">
          <q-card-separator />
          <q-card-actions>
            <q-btn flat @click="reset">Reset</q-btn>
          </q-card-actions>
        </template>
      </q-card>

      <p class="caption">Alerts as Methods</p>
      <div class="row group">
        <div>
          <q-btn round small color="secondary" @click="alertAsMethod('top-left')">
            <q-icon name="arrow_back" class="rotate-45" />
          </q-btn>
        </div>
        <div>
          <q-btn round small color="tertiary" @click="alertAsMethod('top-center')">
            <q-icon name="arrow_upward" />
          </q-btn>
          <q-btn round small color="tertiary" @click="alertAsMethod('top')">
            <q-icon name="vertical_align_top" />
          </q-btn>
        </div>
        <div>
          <q-btn round small color="secondary" @click="alertAsMethod('top-right')">
            <q-icon name="arrow_upward" class="rotate-45" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <q-btn round small color="tertiary" @click="alertAsMethod('left')">
            <q-icon name="arrow_back" />
          </q-btn>
        </div>
        <div class="invisible" v-for="n in 2">
          <q-btn round small />
        </div>
        <div>
          <q-btn round small color="tertiary" @click="alertAsMethod('right')">
            <q-icon name="arrow_forward" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <q-btn round small color="secondary" @click="alertAsMethod('bottom-left')">
            <q-icon name="arrow_forward" class="rotate-135" />
          </q-btn>
        </div>
        <div>
          <q-btn round small color="tertiary" @click="alertAsMethod('bottom-center')">
            <q-icon name="arrow_downward" />
          </q-btn>
          <q-btn round small color="tertiary" @click="alertAsMethod('bottom')">
            <q-icon name="vertical_align_bottom" />
          </q-btn>
        </div>
        <div>
          <q-btn round small color="secondary" @click="alertAsMethod('bottom-right')">
            <q-icon name="arrow_forward" class="rotate-45" />
          </q-btn>
        </div>
      </div>

      <p class="caption">More examples</p>
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
  QIcon,
  QCard,
  QCardMain,
  QCardActions,
  QCardSeparator
} from 'quasar'

// Don't forget to import the animations you are using
// Examples:
// import 'quasar-extras/animate/bounceInLeft.css'
// import 'quasar-extras/animate/bounceInRight.css'
// import 'quasar-extras/animate/bounceOutRight.css'

const alerts = [
  { color: 'error', html: 'Woah! Danger! You are getting good at this!', icon: 'report_problem' },
  { color: 'warning', html: 'You need to know about this!', icon: 'warning' },
  { color: 'amber', html: 'Wow! Nice job!', icon: 'thumb_up' },
  { color: 'secondary', html: 'Quasar is cool! Right?', icon: 'tag_faces' }
]

const anim = {
  'top': ['bounceInDown', 'bounceOutUp'],
  'right': ['bounceInRight', 'bounceOutRight'],
  'bottom': ['bounceInUp', 'bounceOutDown'],
  'left': ['bounceInLeft', 'bounceOutLeft']
}

function getAnimations (pos) {
  if (pos.indexOf('left') > -1) {
    return anim.left
  }
  if (pos.indexOf('right') > -1) {
    return anim.right
  }
  if (pos.indexOf('-center') > -1) {
    return anim[pos.split('-')[0]]
  }
  return anim[pos]
}

export default {
  components: {
    QAlert,
    QBtn,
    QIcon,
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
    alertAsMethod (position) {
      const { color, icon, html } = alerts[Math.floor(Math.random(5) * 10) % 4]
      const [ enter, leave ] = getAnimations(position)

      Alert.create({
        enter,
        leave,
        color,
        icon,
        html,
        position: position
      })
    },
    reset () {
      this.visible = true
      this.visible2 = true
    }
  }
}
</script>
