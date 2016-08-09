<template>
  <div>
    <div class="layout-padding">
      <div class="card" style="max-width: 600px;">
        <div class="card-media">
          <img :src="'statics/map.png'">
          <button class="primary circular"><i>place</i></button>
        </div>
        <div class="card-content">
          <div class="item">
            <i>local_bar</i>
            <div class="item-content">
              <div class="item-label">
                <p class="item-title">Bar XYZ</p>
                <p>Have a drink.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <i>local_gas_station</i>
            <div class="item-content">
              <div class="item-label">
                <p class="item-title">Gas Station</p>
                <p>Fill your gas tank.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <i>local_movies</i>
            <div class="item-content">
              <div class="item-label">
                <p class="item-title">Cinema XYZ</p>
                <p>Watch a movie.</p>
              </div>
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
