<template>
  <div>
    <div class="layout-padding">
      <h5>On desktop: drag label to the left with your mouse.</h5>
      <h5>On touch capable screens, pan the label to the left.</h5>
      <br>
      <div class="list bordered">
        <div class="item">
          <i>explore</i>
          <div class="item-swipe">
            <button class="primary">More</button>
            <button class="secondary">Text</button>
            <button class="tertiary">Call</button>
          </div>
          <div class="item-content" v-swipe-item>
            <div class="item-label">Item Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
        <div class="list-divider"></div>
        <div class="item">
          <i>perm_identity</i>
          <div class="item-swipe">
            <button class="primary">More</button>
            <button class="secondary">Text</button>
          </div>
          <div class="item-content" v-swipe-item>
            <div class="item-label">Item Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
        <div class="list-divider"></div>
        <div class="item">
          <i>query_builder</i>
          <div class="item-swipe">
            <button class="tertiary">Call</button>
          </div>
          <div class="item-content" v-swipe-item>
            <div class="item-label">Item Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
