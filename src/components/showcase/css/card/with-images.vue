<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <img :src="'statics/mountains.jpg'">
        <div class="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Card with Parallax
        </div>
        <quasar-parallax :src="'statics/parallax2.jpg'" :height="150">
          <div slot="loading">Loading...</div>
        </quasar-parallax>
        <div class="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
</template>
