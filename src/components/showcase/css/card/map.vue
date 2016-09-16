<template>
  <div>
    <div class="layout-padding">
      <div class="card" style="max-width: 600px;">
        <div class="card-media">
          <img :src="'statics/map.png'">
          <button class="primary circular"><i>place</i></button>
        </div>
        <div class="card-content list no-border highlight">
          <div class="item two-lines">
            <i class="item-primary">local_bar</i>
            <div class="item-content">
              <div class="item-title">Bar XYZ</div>
              <div>Have a drink.</div>
            </div>
          </div>
          <div class="item two-lines">
            <i class="item-primary">local_gas_station</i>
            <div class="item-content">
              <div class="item-title">Gas Station</div>
              <div>Fill your gas tank.</div>
            </div>
          </div>
          <div class="item two-lines">
            <i class="item-primary">local_movies</i>
            <div class="item-content">
              <div class="item-title">Cinema XYZ</div>
              <div>Watch a movie.</div>
            </div>
          </div>
        </div>
        <div class="card-actions card-no-top-padding">
          <div class="text-lime">
            13 minutes
          </div>
          <div>
            (1 mile)
          </div>
          <div class="auto"></div>
          <button class="primary clear small"><i class="on-left">directions</i> Start</button>
        </div>
      </div>
    </div>
  </div>
</template>
