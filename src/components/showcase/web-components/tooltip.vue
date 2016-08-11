<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">
          Move mouse over the elements below. On a mobile device,
          you need to tap the elements.
        </span>
        <span class="mobile-only">
          Tap on elements below. On desktop you can move the mouse
          over the elements.
        </span>
      </p>

      <div v-tooltip.literal="Quasar Rulz!" style="margin-top: 40px;width: 200px; height: 70px;background-color: #26A69A;">
        &nbsp;
      </div>
      <br><br>
      <div class="group">
        <button class="indigo" v-tooltip.wrap.inline.literal="Tooltip">Hover</button>
        <button class="red" v-tooltip.wrap.inline.literal="Tooltip for the user">Over</button>
        <button class="purple" v-tooltip.wrap.inline.literal="Lorem Ipsum... Some long tooltip...">These</button>
        <button class="amber" v-tooltip.wrap.inline.literal="Lorem Ipsum...">Buttons</button>
      </div>
    </div>
  </div>
</template>
