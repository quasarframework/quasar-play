<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="item">
          <img class="avatar" :src="'statics/linux-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Joe</p>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
        <img :src="'statics/mountains.jpg'">
        <div class="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="card-actions">
          <div class="text-primary">
            <i>thumb_up</i> 11k likes
          </div>
          <div class="text-primary">
            <i>mode_comment</i> 8 comments
          </div>
          <div class="auto"></div>
          <div class="text-grey-6">
            23 minutes ago.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
