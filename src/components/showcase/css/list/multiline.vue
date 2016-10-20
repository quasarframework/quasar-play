<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Multiple line items are usually for some Form components that exceed the height of
        a predefined one, two or three lines item.
      </p>

      <div class="list" style="max-width: 400px">
        <div class="item">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            One line item
          </div>
          <div class="item-secondary stamp">
            1 week
          </div>
        </div>
        <hr>
        <div class="item two-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Two line item</div>
            <div>Second line</div>
          </div>
          <div class="item-secondary stamp">
            10 min
          </div>
        </div>
        <hr>
        <div class="item three-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Three line item</div>
            <div>
              <span>Second & Third line</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </div>
          </div>
          <div class="item-secondary stamp">
            2 years
          </div>
          <i class="item-secondary">mail</i>
        </div>
        <hr>
        <div class="item multiple-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Multiple lines item</div>
            <div class="item-label item-smaller">Second line</div>
            <div class="item-label item-smaller">Third line</div>
            <div class="item-label item-smaller">Fourth line</div>
            <div class="item-label item-smaller">...as many as you need!</div>
          </div>
          <div class="item-secondary">
            <quasar-popover ref="popover">
              <i slot="target">
                more_vert
              </i>

              <div class="list">
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Reply</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Forward</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Delete</div>
                </div>
              </div>
            </quasar-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
