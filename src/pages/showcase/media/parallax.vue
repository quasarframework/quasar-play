<template>
  <q-page padding class="view-parallax">
    <div class="q-mx-xl q-mb-xs q-mt-md">
      <p class="caption">
        Scroll down (best using scrollbar instead of mouse scroll
        if on desktop) to see Parallax in action.
      </p>

      <p v-for="n in 3" :key="`a-${n}`" class="par-text">{{ loremipsum }}</p>
    </div>

    <q-parallax src="statics/parallax2.jpg">
      <h1>Image</h1>
    </q-parallax>

    <div class="q-mx-xl q-my-md">
      <p class="par-text">{{ loremipsum }}</p>
    </div>

    <q-parallax :height="150">
      <video slot="media" poster="http://www.markhillard.com/sandbox/media/polina.jpg" autoplay loop muted>
        <source type="video/webm" src="http://www.markhillard.com/sandbox/media/polina.webm">
        <source type="video/mp4" src="http://www.markhillard.com/sandbox/media/polina.mp4">
      </video>

      <h1>Video</h1>
    </q-parallax>

    <div class="q-mx-xl q-my-md">
      <p class="par-text">{{ loremipsum }}</p>
    </div>

    <q-parallax src="statics/parallax1.jpg" :height="200">
      <h1>Title</h1>
    </q-parallax>

    <div class="q-mx-xl q-my-md">
      <p v-for="n in 3" :key="`e-${n}`" class="par-text">{{ loremipsum }}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>
