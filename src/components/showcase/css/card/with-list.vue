<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title">
          Card with List
        </div>
        <div class="list bordered inner-delimiter highlight">
          <div class="item" v-for="n in 4">
            <i>mail</i>
            <div class="item-content">
              <div class="item-label">Quasar Framework</div>
              <button class="item-value"><i>keyboard_arrow_right</i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
