<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Right click (or long tap) anywhere on the Page below (not on header though).
      </p>
    </div>

    <quasar-context-menu>
      <div class="list item-delimiter highlight">
        <div class="item item-link" v-for="n in 30">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
      </div>
    </quasar-context-menu>
  </div>
</template>
