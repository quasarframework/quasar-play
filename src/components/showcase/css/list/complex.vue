<template>
  <div>
    <div class="layout-padding">
      <h5>List with Item Label and Item Value</h5>
      <p>
        Item Values can be anything from text to icons,
        buttons, web components.
      </p>
      <div class="list">
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">
              <i>pages</i>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">
              <i>perm_identity</i>
            </div>
          </div>
        </div>
      </div>

      <h5>List with Inner Delimiters</h5>
      <div class="list inner-delimiter">
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">Value</div>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <div class="item-value">
              <button class="primary clear">View</button>
            </div>
          </div>
        </div>
      </div>

      <h5>List with Icons</h5>

      <div class="list bordered inner-delimiter">
        <div class="item">
          <i>mail</i>
          <div class="item-content">
            Quasar Framework
          </div>
        </div>
        <div class="item">
          <i>perm_identity</i>
          <div class="item-content">
            Quasar Framework
          </div>
        </div>
        <div class="item">
          <i>query_builder</i>
          <div class="item-content">
            <div class="item-label">Quasar Framework</div>
            <div class="item-value">
              <button class="primary clear">View</button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="list bordered inner-delimiter">
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <i>explore</i>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <i>alarm</i>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Label</div>
            <i>shopping_cart</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
