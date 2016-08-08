<template>
  <div>
    <div class="layout-padding">
      <div class="row justify-center" style="margin-top: 20px;">
        <quasar-state :model.sync="state">
          <div slot="active">
            <spinner name="hourglass" :size="40" color="#90caf9"></spinner>
            &nbsp;&nbsp;&nbsp;Active State
          </div>

          <button class="primary" @click="changeState()">
            Default State - Hit me!
          </button>
        </quasar-state>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: false
    }
  },
  methods: {
    changeState () {
      this.state = true
      setTimeout(() => {
        this.state = false
      }, 2000)
    }
  }
}
</script>
