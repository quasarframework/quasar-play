<template>
  <div>
    <div class="layout-padding">
      <p class="caption" style="margin-top: 120px;">
        Click on buttons and image below to open Popovers.
        <br>
        <em>This page has intended scroll so you can see multiple scenarios.</em>
      </p>

      <div>
        <quasar-popover v-ref:popover1>
          <button slot="target" class="primary">
            <i>assignment</i>
          </button>

          <div class="list highlight">
            <div
              class="item item-link two-lines item-delimiter"
              v-for="n in 20"
              @click="showToast(), $refs.popover1.close()"
            >
              <div class="item-content">
                <div>Label</div>
                <div>Value</div>
              </div>
            </div>
          </div>
        </quasar-popover>

        <quasar-popover v-ref:popover2 position="left top">
          <button slot="target" class="positive">
            Forced Position
          </button>

          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="n in 3"
              @click="showToast(), $refs.popover2.close()"
            >
              <div class="item-content">
                Label
              </div>
            </div>
          </div>
        </quasar-popover>

        <quasar-popover v-ref:popover3 class="absolute-top-right" style="top: 10px; right: 10px; right: 16px;">
          <button slot="target" class="secondary">
            <i>directions</i>
          </button>

          <img
            :src="'statics/map.png'"
            style="height: 150px; width: 200px;"
            @click="showToast(), $refs.popover3.close()">
        </quasar-popover>

        <quasar-popover v-ref:popover4 class="absolute-bottom-right" style="bottom: 10px; right: 16px;">
          <button slot="target" class="tertiary">
            <i>plus_one</i>
          </button>

          <div class="group" style="width: 200px; height: 50px; text-align: center;">
            <button class="primary clear" @click="showToast(), $refs.popover4.close()">
              <i>thumb_up</i>
            </button>
            <button class="primary clear" @click="showToast(), $refs.popover4.close()">
              <i>thumb_down</i>
            </button>
            <button class="secondary clear" @click="showToast(), $refs.popover4.close()">
              <i>share</i>
            </button>
          </div>
        </quasar-popover>
      </div>

      <quasar-popover v-ref:popover5 class="absolute-bottom-left" style="bottom: 10px; left: 10px;">
        <button slot="target" class="primary">
          <i>menu</i>
        </button>

        <div class="list highlight">
          <div
            class="item item-link two-lines item-delimiter"
            v-for="n in 20"
            @click="showToast(), $refs.popover5.close()"
          >
            <div class="item-content">
              <div>Label</div>
              <div>Value</div>
            </div>
          </div>
        </div>
      </quasar-popover>

      <br><br>
      <div style="margin-bottom: 700px;">
        <quasar-popover touch-position v-ref:popover6>
          <img slot="target" :src="'statics/map.png'" class="responsive">

          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="n in 20"
              @click="showToast(), $refs.popover6.close()"
            >
              <i class="item-primary">share</i>
              <div class="item-content">
                Share
              </div>
            </div>
          </div>
        </quasar-popover>

        <br><br>
        <quasar-popover v-ref:popover7 disable>
          <button slot="target" class="negative">
            Disabled Popover
          </button>

          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              @click="showToast(), $refs.popover7.close()"
            >
              <div class="item-content">
                Label
              </div>
            </div>
          </div>
        </quasar-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { Platform, Toast } from 'quasar'

export default {
  methods: {
    showToast () {
      Toast.create((Platform.is.desktop ? 'Clicked' : 'Tapped') + ' on a Popover item')
    }
  }
}
</script>
