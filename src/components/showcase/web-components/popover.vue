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
            <i>menu</i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              v-for="n in 20"
              @click="showToast(), $refs.popover1.close()"
            >
              <div class="item-content">
                <div class="item-label">Label</div>
                <div class="item-value">Value</div>
              </div>
            </div>
          </div>
        </quasar-popover>

        <quasar-popover v-ref:popover2 class="absolute-top-right" style="top: 10px; right: 10px; z-index: 49;">
          <button slot="target" class="secondary">
            <i>directions</i>
          </button>

          <img
            :src="'statics/map.png'"
            style="height: 150px; width: 200px;"
            @click="showToast(), $refs.popover2.close()">
        </quasar-popover>

        <quasar-popover v-ref:popover3 class="absolute-bottom-right" style="bottom: 10px; right: 10px; z-index: 49;">
          <button slot="target" class="tertiary">
            <i>plus_one</i>
          </button>

          <div class="group">
            <button class="primary clear" @click="showToast(), $refs.popover3.close()">
              <i>thumb_up</i>
            </button>
            <button class="primary clear" @click="showToast(), $refs.popover3.close()">
              <i>thumb_down</i>
            </button>
            <button class="secondary clear" @click="showToast(), $refs.popover3.close()">
              <i>share</i>
            </button>
          </div>
        </quasar-popover>
      </div>

      <quasar-popover v-ref:popover4 class="absolute-bottom-left" style="bottom: 10px; left: 10px; z-index: 49;">
        <button slot="target" class="primary">
          <i>menu</i>
        </button>

        <div class="list item-delimiter highlight">
          <div
            class="item item-link"
            v-for="n in 20"
            @click="showToast(), $refs.popover4.close()"
          >
            <div class="item-content">
              <div class="item-label">Label</div>
              <div class="item-value">Value</div>
            </div>
          </div>
        </div>
      </quasar-popover>

      <br><br>
      <div style="margin-bottom: 200px; z-index: 49;">
        <quasar-popover touch-position v-ref:popover5>
          <img slot="target" :src="'statics/map.png'" class="responsive">

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              v-for="n in 20"
              @click="showToast(), $refs.popover5.close()"
            >
              <i>share</i>
              <div class="item-content">
                Share
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
