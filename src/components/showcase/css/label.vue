<template>
  <!-- Place content inside a root node -->
  <div>
    <div class="layout-padding">
      <h5>Basic Labels</h5>
      <p>
        <span class="label bg-primary text-white">label</span>
        <span class="label bg-secondary text-white shadow-1">10k</span>
      </p>
      <br>

      <h5>Floating Labels</h5>
      <p>
        <button class="light relative-position">
          Inbox
          <span class="floating label circular bg-primary text-white">22</span>
        </button>
        &nbsp;&nbsp;
        <button class="red relative-position">
          Inbox
          <span class="floating label bg-dark">22</span>
        </button>
      </p>
      <br>

      <h5>Tag Labels</h5>
      <p>
        <span class="tag label tag bg-light">New <i class="on-right">mail</i></span>
      </p>
      <p>
        <span class="tag label bg-red text-white">Upcoming</span>
      </p>
      <p>
        <span class="tag label bg-primary text-white">Featured</span>
      </p>
      <br>

      <h5>Pointing Labels</h5>
      <p>
        <span class="label pointing-up bg-primary text-white">up</span>
        <span class="label pointing-down bg-primary text-white">down</span>
        <span class="label pointing-right bg-primary text-white">right</span>
        <span class="label pointing-left bg-primary text-white">left</span>
      </p>
      <br>

      <h5>With Icons</h5>
      <p>
        <span class="label bg-primary text-white">
          <i class="on-left">mail</i>
          10
        </span>
        <span class="label bg-tertiary text-white">
          10
          <i class="on-right">mail</i>
        </span>
      </p>
      <br>

      <h5>With Text or Icon Detail</h5>
      <p>
        <span class="label bg-amber">
          <span class="left-detail">Left</span> Detail
        </span>
        <span class="label bg-secondary text-white">
          Right <span class="right-detail">Detail</span>
        </span>
      </p>
      <p>
        <span class="label bg-orange text-white">
          <i class="left-detail">mail</i> 10
        </span>
        <span class="label bg-orange text-white">
          10 <i class="right-detail">mail</i>
        </span>
      </p>
      <br>

      <h5>Circular/Oval Labels</h5>
      <p>
        <span class="label circular bg-primary text-white">2</span>
        <span class="label circular bg-secondary text-white shadow-1">10k</span>
      </p>
    </div>
  </div>
</template>
