<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="list-label inset">Folders</div>
        <div class="item two-lines" v-for="n in 3">
          <div class="item-primary bg-grey-6 text-white">
            <i>folder</i>
          </div>
          <div class="item-content has-secondary">
            <div>Photos</div>
            <div>February 22, 2016</div>
          </div>
          <i class="item-secondary">info</i>
        </div>
        <hr class="inset">
        <div class="list-label inset">Files</div>
        <div class="item two-lines" v-for="n in 3">
          <div class="item-primary bg-primary text-white">
            <i>assignment</i>
          </div>
          <div class="item-content has-secondary">
            <div>Vacation</div>
            <div>February 22, 2016</div>
          </div>
          <i class="item-secondary">info</i>
        </div>
      </div>
    </div>
  </div>
</template>
