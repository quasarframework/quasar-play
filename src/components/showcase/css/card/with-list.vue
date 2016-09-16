<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title">
          Card with List
        </div>
        <div class="list no-border">
          <div class="item item-link" v-for="n in 4">
            <i class="item-primary">mail</i>
            <div class="item-content has-secondary">
              Quasar Framework
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Card with List
        </div>
        <div class="list item-delimiter">
          <div class="item item-link" v-for="n in 4">
            <i class="item-primary">mail</i>
            <div class="item-content has-secondary">
              Quasar Framework
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Card with List
        </div>
        <div class="list item-inset-delimiter">
          <div class="item item-link" v-for="n in 4">
            <i class="item-primary">mail</i>
            <div class="item-content has-secondary">
              Quasar Framework
            </div>
            <i class="item-secondary">keyboard_arrow_right</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
