<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Simplest example, with a label only.</p>
      <q-alert color="primary">With label only</q-alert>

      <p class="caption">With label and icon</p>
      <q-alert icon="map" color="orange">With label and icon</q-alert>

      <p class="caption">With avatar</p>
      <q-alert avatar="statics/boy-avatar.png" color="secondary">
        With label and icon
      </q-alert>

      <p class="caption">Using props, with subtitle.</p>
      <q-alert
        avatar="statics/boy-avatar.png"
        color="primary"
        message="Jack"
        detail="Your friend just pinged you"
      />

      <p class="caption">With Action(s)</p>
      <q-alert
        icon="alarm"
        color="tertiary"
        :actions="[
          { label: 'Snooze', handler: () => { this.$q.notify('Snoozed') } }
        ]"
        class="q-mb-sm"
      >
        It's time to take a break
      </q-alert>
      <q-alert
        icon="assignment"
        color="brown-5"
        :actions="[
          { label: 'Snooze', icon: 'alarm', handler: () => { this.$q.notify('Snoozed') } },
          { label: 'Dismiss', icon: 'done', handler: () => { this.$q.notify('Dismissed') } }
        ]"
        class="q-mb-sm"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ducimus voluptas recusandae numquam repellendus blanditiis aperiam unde. Mollitia sunt, ex distinctio eum debitis pariatur omnis ducimus molestiae optio quis eos.
      </q-alert>
      <q-alert
        color="primary"
        :actions="[
          { label: 'OK', icon: 'watch_later', handler: () => { this.$q.notify('So please take that break') } }
        ]"
      >
        It's time to take a break
      </q-alert>

      <p class="caption">
        Combining alerts with animations.
        <q-btn
          v-if="!visible || !visible2"
          flat rounded
          color="primary"
          @click="() => { visible = visible2 = true }"
          label="Reset"
        />
      </p>

      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight"
        appear
      >
        <q-alert
          v-if="visible"
          color="secondary"
          icon="cloud"
          appear
          :actions="[{ label: 'Dismiss', handler: () => { visible = false } }]"
          class="q-mb-sm"
        >
          Lorem ipsum dolor sit amet.
        </q-alert>
      </transition>

      <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        appear
      >
        <q-alert
          v-if="visible2"
          type="negative"
          :actions="[{ label: 'Snooze', icon: 'alarm', handler: () => { visible2 = false } }]"
        >
          Lorem ipsum dolor sit amet.
        </q-alert>
      </transition>

      <p class="caption">Default types of alerts</p>
      <q-alert
        v-for="type in ['positive', 'info', 'negative', 'warning']"
        :key="type"
        :type="type"
        class="q-mb-sm"
      >
        Alert type: "{{ type }}"
      </q-alert>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      visible2: true
    }
  }
}
</script>
