<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;" class="column items-center">
      <q-scroll-area style="width: 400px; max-width: 85vw; height: 470px; max-height: 70vh;" class="bg-grey-3 round-borders shadow-2">
        <div style="margin-bottom: 25px; padding: 15px;" v-for="n in number" :key="n">
          {{ n }}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-scroll-area>

      <br>
      <div>
        <q-btn color="secondary" @click="number--">Less content</q-btn>
        <q-btn class="q-ml-sm" color="secondary" @click="number++">More content</q-btn>
      </div>

      <div style="height: 100px" />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      number: 10
    }
  }
}
</script>
