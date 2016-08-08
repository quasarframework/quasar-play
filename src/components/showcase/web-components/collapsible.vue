<template>
  <div>
    <div class="layout-padding" style="max-width: 600px;">
      <h5>Accordion</h5>
      <ul v-collapsible>
        <li>
          <div><i>assignment_ind</i>First</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li>
          <div><i>explore</i>Second</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li>
          <div><i>shopping_cart</i>Third</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
      </ul>

      <h5>Popout</h5>
      <ul class="popout" v-collapsible>
        <li>
          <div><i>room</i>First</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li>
          <div><i>shopping_basket</i>Second</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li>
          <div><i>loyalty</i>Third</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
      </ul>

      <h5>Ubiquity. Using Cards as content.</h5>
      <ul v-collapsible>
        <li>
          <div><i>assignment_ind</i>First Card</div>
          <div class="card bg-primary text-white">
            <div class="card-title">
              Card Title
            </div>
            <div class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </li>
        <li>
          <div><i>explore</i>Second Card</div>
          <div class="card">
            <img :src="'statics/mountains.jpg'">
            <div class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </li>
        <li>
          <div><i>shopping_cart</i>Third Card</div>
          <div class="card">
            <div class="card-media">
              <img :src="'statics/map.png'">
              <button class="primary circular"><i>explore</i></button>
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
              <button class="primary clear small">
                <i class="on-left">directions</i>
                Start
              </button>
            </div>
          </div>
        </li>
      </ul>

      <h5>Freely - Can open multiple items simultaneously</h5>
      <ul v-collapsible="true">
        <li>
          <div><i>assignment_ind</i>First</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li>
          <div><i>explore</i>Second</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li>
          <div><i>shopping_cart</i>Third</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
