<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="item two-lines" v-for="n in 3">
          <i class="item-primary" v-if="n === 0">phone</i>
          <div class="item-content inset has-secondary">
            <div>(650) 555 - 1234</div>
            <div>Mobile</div>
          </div>
          <i class="item-secondary">chat_bubble</i>
        </div>
        <hr class="inset">
        <div class="item two-lines" v-for="n in 3">
          <i class="item-primary">mail</i>
          <div class="item-content">
            <div>john@doe.com</div>
            <div>Personal</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
