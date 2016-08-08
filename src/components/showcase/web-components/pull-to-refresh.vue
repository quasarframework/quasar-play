<template>
  <div>
    <div class="layout-padding">
      <quasar-pull-to-refresh :handler="refresher">
        <h5>
          Pull down to refresh on the content below.
          On desktop it works by dragging the content down.
        </h5>

        <br>
        <p v-for="item in items" class="caption highlight-and-fade">
          <span class="label bg-secondary text-white shadow-1">
            {{ items.length - $index }}
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </quasar-pull-to-refresh>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    refresher (done) {
      setTimeout(() => {
        done()
        this.items.unshift({})
      }, 3000)
    }
  }
}
</script>
