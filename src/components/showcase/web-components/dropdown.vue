<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Click on buttons and image below to open Dropdowns.</p>

      <div>
        <quasar-dropdown>
          <button slot="target" class="primary">
            <i>menu</i>
          </button>

          <div class="list item-delimiter highlight">
            <div class="item item-link" v-for="n in 20">
              <div class="item-content">
                <div class="item-label">Label</div>
                <div class="item-value">Value</div>
              </div>
            </div>
          </div>
        </quasar-dropdown>

        <quasar-dropdown>
          <button slot="target" class="secondary">
            <i>directions</i>
          </button>

          <img :src="'statics/map.png'" class="responsive">
        </quasar-dropdown>

        <quasar-dropdown>
          <button slot="target" class="tertiary">
            <i>plus_one</i>
          </button>

          <div class="row justify-center">
            <button class="primary clear">
              <i>thumb_up</i>
            </button>
            <button class="primary clear">
              <i>thumb_down</i>
            </button>
            <button class="secondary clear">
              <i>share</i>
            </button>
          </div>
        </quasar-dropdown>
      </div>

      <br><br>
      <div>
        <quasar-dropdown>
          <img slot="target" :src="'statics/map.png'" class="responsive">

          <div class="list item-delimiter highlight">
            <div class="item item-link" v-for="n in 20">
              <i>share</i>
              <div class="item-content">
                Share
              </div>
            </div>
          </div>
        </quasar-dropdown>
      </div>
    </div>
  </div>
</template>
