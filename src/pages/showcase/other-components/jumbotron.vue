<template>
  <q-page padding style="max-width: 800px" class="page-jumbotron">
    <q-jumbotron>
      <div class="q-display-3">Hello, world!</div>
      <div class="q-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="q-hr q-my-lg">
      <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
      <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
    </q-jumbotron>

    <q-jumbotron class="bg-primary" dark>
      <div class="q-display-3">Hello, world!</div>
      <div class="q-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="q-hr q-my-lg">
      <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
      <q-btn color="white" text-color="primary" class="q-py-sm q-px-xl" label="Learn more" />
    </q-jumbotron>

    <q-jumbotron gradient="circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%">
      <div class="q-display-3">Hello, world!</div>
      <div class="q-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="q-hr q-my-lg">
      <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
      <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
    </q-jumbotron>

    <q-jumbotron dark img-src="statics/mountains.jpg">
      <div class="q-display-3">Hello, world!</div>
      <div class="q-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="q-hr q-my-lg">
      <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
      <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
    </q-jumbotron>
  </q-page>
</template>

<style lang="stylus">
.page-jumbotron
  .q-jumbotron + .q-jumbotron
    margin-top 25px
</style>
