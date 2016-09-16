<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="item" v-for="n in 3">
          <i class="item-primary" v-if="n === 0">star</i>
          <div class="item-content inset has-secondary">
            John Joe
          </div>
          <img class="item-secondary" :src="'statics/boy-avatar.png'">
        </div>
        <hr class="inset">
        <div class="item" v-for="n in 3">
          <div class="item-primary" v-if="n === 0">A</div>
          <div class="item-content inset has-secondary">
            John Joe
          </div>
          <img class="item-secondary" :src="'statics/boy-avatar.png'">
        </div>
      </div>
    </div>
  </div>
</template>
