<template>
  <div>
    <div class="layout-padding">
      <h5>Hover the elements below.</h5>
      <div v-tooltip.literal="Quasar Rulz!" style="width: 200px; height: 70px;background-color: #26A69A;">
        &nbsp;
      </div>
      <br><br>
      <button class="indigo" v-tooltip.wrap.inline.literal="Tooltip">Hover</button>
      <button class="red" v-tooltip.wrap.inline.literal="Tooltip for the user">Over</button>
      <button class="purple" v-tooltip.wrap.inline.literal="Lorem Ipsum... Some long tooltip...">These</button>
      <button class="amber" v-tooltip.wrap.inline.literal="Lorem Ipsum...">Buttons</button>
    </div>
  </div>
</template>
