<template>
  <div>
    <div class="layout-padding">
      <p class="light-paragraph">
        You'll learn the <strong>List basics</strong> here then you can jump to the other sections
        to see how you can beatifully combine the List elements.
      </p>

      <p class="caption">Basic List</p>
      <div class="list">
        <div class="item" v-for="n in 2">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">No Border</p>
      <div class="list no-border">
        <div class="item" v-for="n in 2">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Striped</p>
      <div class="list striped">
        <div class="item" v-for="n in 6">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Delimiter Between Items</p>
      <div class="list">
        <div class="item">
          <div class="item-content">
            List Item
          </div>
        </div>
        <hr>
        <div class="item">
          <div class="item-content">
            List Item
          </div>
        </div>
        <hr>
        <div class="item">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Delimiter within Items</p>
      <div class="list item-delimiter">
        <div class="item" v-for="n in 3">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Platform Delimiter - changes based on Theme</p>
      <div class="list platform-delimiter">
        <div class="item" v-for="n in 3">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Inset Delimiter within Items</p>
      <div class="list item-inset-delimiter">
        <div class="item" v-for="n in 3">
          <div class="item-content inset">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">List Labels</p>
      <div class="list">
        <div class="list-label">List Label</div>
        <div class="item" v-for="n in 2">
          <div class="item-content">
            List Item
          </div>
        </div>
        <hr>
        <div class="list-label">Another List Label</div>
        <div class="item" v-for="n in 3">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">Inset: Items, Delimiters and Labels</p>
      <div class="list">
        <div class="item">
          <div class="item-content inset">
            List Item
          </div>
        </div>
        <hr class="inset">
        <div class="list-label inset">Inset List Label</div>
        <div class="item" v-for="n in 2">
          <div class="item-content inset">
            List Item
          </div>
        </div>
        <hr class="inset">
        <div class="item">
          <div class="item-content inset">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">
        Highlight (Desktop only)
        <small>
          <br>
          <span class="mobile-only">
            On desktop, hovering the list items will change their background color temporarily.
          </span>
          <span class="desktop-only">
            Hover the list items to change their background color temporarily.
          </span>
        </small>
      </p>
      <div class="list highlight">
        <div class="item" v-for="n in 2">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>

      <p class="caption">
        Link Items (Desktop only)
        <small>
          <br>
          <span class="mobile-only">
            On desktop, hovering the list items will change their background color temporarily and the cursor will be a pointer.
          </span>
          <span class="desktop-only">
            Hover the list items to change their background color temporarily and change cursor to pointer.
          </span>
        </small>
      </p>
      <div class="list">
        <div class="item item-link" v-for="n in 2">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
