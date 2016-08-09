<template>
  <div>
    <div class="layout-padding">
      <h5>List with Avatars</h5>
      <div class="list inner-delimiter">
        <div class="item">
          <img class="avatar" :src="'statics/linux-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Jack</p>
              <p>Linux Lover</p>
            </div>
          </div>
        </div>
        <div class="list-header">Header</div>
        <div class="item">
          <img class="avatar" :src="'statics/guy-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">John</p>
              <p>Web Developer</p>
              <p>Quasar Framework enthusiast</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
        <div class="item">
          <img class="avatar" :src="'statics/boy-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Joe</p>
              <p>Newbie</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
        <div class="item">
          <img class="avatar" :src="'statics/linux-avatar-2.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Linux Lover</p>
              <p>Linux rulz!</p>
              <p>Quasar rulz!</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
      </div>

      <h5>List with Thumbnails</h5>
      <div class="list inner-delimiter">
        <div class="item">
          <img class="thumbnail" :src="'statics/linux-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Jack</p>
              <p>Linux Lover</p>
            </div>
          </div>
        </div>
        <div class="list-header">Header</div>
        <div class="item">
          <img class="thumbnail" :src="'statics/guy-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">John</p>
              <p>Web Developer</p>
              <p>Quasar Framework enthusiast</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
        <div class="item">
          <img class="thumbnail" :src="'statics/boy-avatar.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Joe</p>
              <p>Newbie</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
        <div class="item">
          <img class="thumbnail" :src="'statics/linux-avatar-2.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Linux Lover</p>
              <p>Linux rulz!</p>
              <p>Quasar rulz!</p>
            </div>
            <i>supervisor_account</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
