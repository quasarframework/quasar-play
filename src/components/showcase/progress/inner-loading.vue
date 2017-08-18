<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Click or tap below, to see the innerLoading component work with a div.
        It is simulating a delay from a server reply.
      </p>
      <q-btn color="primary" @click="showTextLoading()">
        Show Text Loading
      </q-btn>

      <div class="row justify-center" style="margin-top: 40px">
        <q-card style="width: 288px; height: 262px;" color="grey-2" class="text-dark relative-position">
          <q-card-title>
            Lorem Ipsum
          </q-card-title>
          <q-card-main>
            <q-transition
              appear
              enter="fadeIn"
              leave="fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
              </div>
            </q-transition>
          </q-card-main>
          <q-inner-loading :visible="visible">
            <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
          </q-inner-loading>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QInnerLoading,
  QTransition,
  QBtn,
  QCard,
  QCardTitle,
  QCardMain,
  QSpinnerGears
} from 'quasar'

// Don't forget to also load animations
// import 'quasar-extras/animate/fadeIn.css'
// import 'quasar-extras/animate/fadeOut.css'

export default {
  components: {
    QInnerLoading,
    QTransition,
    QBtn,
    QCard,
    QCardTitle,
    QCardMain,
    QSpinnerGears
  },
  data () {
    return {
      visible: false,
      showSimulatedReturnData: false
    }
  },
  methods: {
    showTextLoading () {
      this.show()
    },
    show () {
      this.visible = true
      this.showSimulatedReturnData = false

      setTimeout(() => {
        this.visible = false
        this.showSimulatedReturnData = true
      }, 3000)
    }
  }
}
</script>
