<template>
  <q-page padding class="row justify-center">
    <div class="column flex-center" style="width: 500px; max-width: 90vw;">
      <div class="row group">
        <div>
          <q-btn round color="secondary" @click="showNotification('top-left')">
            <q-icon name="arrow_back" class="rotate-45" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="tertiary" @click="showNotification('top')">
            <q-icon name="arrow_upward" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="secondary" @click="showNotification('top-right')">
            <q-icon name="arrow_upward" class="rotate-45" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <q-btn round color="tertiary" @click="showNotification('left')">
            <q-icon name="arrow_back" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="tertiary" @click="showNotification('center')">
            <q-icon name="fullscreen_exit" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="tertiary" @click="showNotification('right')">
            <q-icon name="arrow_forward" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <q-btn round color="secondary" @click="showNotification('bottom-left')">
            <q-icon name="arrow_forward" class="rotate-135" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="tertiary" @click="showNotification('bottom')">
            <q-icon name="arrow_downward" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="secondary" @click="showNotification('bottom-right')">
            <q-icon name="arrow_forward" class="rotate-45" />
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const alerts = [
  { color: 'negative', message: 'Danger, Will Robinson! Danger!', icon: 'warning' },
  { color: 'blue', message: 'Woah! Cool! You are getting good at this!', icon: 'thumb_up' },
  { color: 'pink', message: 'You need to know about this!', icon: 'warning' },
  { color: 'orange', textColor: 'black', message: 'Wow! Nice job!', icon: 'thumb_up' },
  { color: 'secondary', message: 'Quasar is cool! Right?', icon: 'tag_faces' },
  { color: 'tertiary', message: 'Jim just pinged you', avatar: 'statics/boy-avatar.png' }
]

export default {
  data () {
    return {
      visible: true,
      visible2: true
    }
  },
  methods: {
    showNotification (position) {
      const { color, textColor, icon, message, avatar } = alerts[ Math.floor(Math.random(5) * 10) % 5 ]

      this.$q.notify({
        color,
        textColor,
        icon,
        message,
        position,
        avatar,
        actions: Math.random() * 100 > 50
          ? [ { label: 'Reply', handler: () => console.log('Clicked on a notification handler') } ]
          : null,
        timeout: Math.random() * 5000 + 3000
      })
    }
  }
}
</script>
