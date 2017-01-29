<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Click on Buttons below to see them in action.</p>

      <p class="caption">Determined Progress</p>
      <div class="group">
        <q-progress-button
          class="yellow"
          :percentage="progressBtn"
          @click.native="workButton()"
          dark-filler
        >
          Work it!
        </q-progress-button>
        <q-progress-button
          class="dark"
          :percentage="progressBtn"
          @click.native="workButton()"
        >
          Work it!
        </q-progress-button>
      </div>

      <p class="caption">Indetermined Progress</p>
      <div class="group">
        <q-progress-button
          class="primary"
          indeterminate
          :percentage="progressBtn"
          @click.native="workButton()"
        >
          Work it!
        </q-progress-button>
        <q-progress-button
          class="negative"
          indeterminate
          :percentage="progressBtn"
          @click.native="workButton()"
        >
          Work it!
        </q-progress-button>
      </div>

      <p class="caption">Control Progress with Buttons below</p>
      <div class="group">
        <button class="secondary clear" @click="stopWorkButton()">
          Stop
        </button>
        <button class="secondary clear" @click="stopWorkButton(-1)">
          Error
        </button>
        <button class="secondary clear" @click="stopWorkButton(100)">
          Success
        </button>
        <button class="secondary clear" @click="stopWorkButton(0)">
          Reset
        </button>
        <div class="label tag bg-light">{{ progressBtn }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progressBtn: 0
    }
  },
  methods: {
    workButton () {
      this.stopWorkButton()

      this.progressBtn = 15
      this.workingButton = setInterval(() => {
        this.progressBtn += parseInt(Math.random() * 12, 10)
        if (this.progressBtn >= 100) {
          this.stopWorkButton()
        }
      }, 500)
    },
    stopWorkButton (index) {
      if (this.workingButton) {
        clearInterval(this.workingButton)
        this.workingButton = null
      }
      if (typeof index !== 'undefined') {
        this.progressBtn = index
      }
    }
  },
  beforeDestroy () {
    this.stopWorkButton()
  }
}
</script>
