<template>
  <q-page padding>
    <p class="caption">Basic</p>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>

    <p class="caption">With links and custom icon separator</p>
    <q-breadcrumbs separator=">" active-color="secondary" color="light">
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Components" to="/components" />
      <q-breadcrumbs-el label="Breadcrumbs" to="/components/breadcrums" />
      <q-breadcrumbs-el label="Bogus" to="/components/breadcrums/bogus" />
    </q-breadcrumbs>

    <p class="caption">With separator as scoped slot</p>
    <q-breadcrumbs>
      <q-icon name="trending_flat" slot="separator" slot-scope="props" />
      <q-breadcrumbs-el active>Home</q-breadcrumbs-el>
      <q-breadcrumbs-el>Components</q-breadcrumbs-el>
      <q-breadcrumbs-el>Breadcrumbs</q-breadcrumbs-el>
    </q-breadcrumbs>

    <p class="caption">With different alignment</p>
    <q-breadcrumbs align="center" style="max-width: 700px">
      <q-icon name="arrow_forward" slot="separator" slot-scope="props" />
      <q-breadcrumbs-el>Home</q-breadcrumbs-el>
      <q-breadcrumbs-el>Components</q-breadcrumbs-el>
      <q-breadcrumbs-el>Breadcrumbs</q-breadcrumbs-el>
    </q-breadcrumbs>
  </q-page>
</template>
