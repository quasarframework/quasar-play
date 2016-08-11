<template>
  <quasar-slider arrows dots class="text-white full-height">
    <div slot="slide" class="bg-primary centered">
      <h1>Slide 1</h1>
      <button class="dark glossy" @click="close()">Close Me</button>
    </div>
    <div slot="slide" class="bg-secondary centered">
      <h1>Slide 2</h1>
      <button class="dark glossy" @click="close()">Close Me</button>
    </div>
    <div slot="slide" class="bg-tertiary centered">
      <h1>Slide 3</h1>
      <button class="dark glossy" @click="close()">Close Me</button>
    </div>
  </quasar-slider>
</template>
