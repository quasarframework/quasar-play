<template>
  <q-page padding>
    <p class="caption">Basic</p>
    <q-breadcrumbs>
      <q-breadcrumb-el label="Home" icon="home" />
      <q-breadcrumb-el label="Showcase" icon="widgets" />
      <q-breadcrumb-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>
    <p class="caption">Router enabled</p>
    <q-breadcrumbs icon-separator="chevron_right" active-color="secondary" color="light">
      <q-breadcrumb-el label="Home" to="/" />
      <q-breadcrumb-el label="Showcase" to="/showcase" />
      <q-breadcrumb-el label="Breadcrumbs" to="/showcase/breadcrumbs" />
    </q-breadcrumbs>
    <p class="caption">Different Alignment</p>
    <q-breadcrumbs align="center">
      <q-icon name="trending_flat" slot="separator" />
      <q-breadcrumb-el active>Home</q-breadcrumb-el>
      <q-breadcrumb-el>Showcase</q-breadcrumb-el>
      <q-breadcrumb-el>Breadcrumbs</q-breadcrumb-el>
    </q-breadcrumbs>
    <br><br>
    <q-breadcrumbs align="justify" style="max-width: 700px">
      <q-icon name="label_outline" slot="separator" />
      <q-breadcrumb-el>Home</q-breadcrumb-el>
      <q-breadcrumb-el>Showcase</q-breadcrumb-el>
      <q-breadcrumb-el>Breadcrumbs</q-breadcrumb-el>
    </q-breadcrumbs>
  </q-page>
</template>
