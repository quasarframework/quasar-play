<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Examples of group buttons</p>
      <q-btn-group push>
        <q-btn push label="First" icon="timeline" />
        <q-btn push label="Second" icon="visibility" />
        <q-btn push label="Third" icon="update" />
      </q-btn-group>

      <br><br>
      <q-btn-group flat>
        <q-btn flat color="brown-5" label="First" />
        <q-btn flat color="brown-5" label="Second" />
      </q-btn-group>

      <br><br>
      <q-btn-group push>
        <q-btn color="yellow" text-color="black" push label="First" icon="verified_user" />
        <q-btn color="amber" text-color="black" push label="Second" />
        <q-btn color="orange" text-color="black" push label="Third" />
      </q-btn-group>

      <br><br>
      <q-btn-group outline>
        <q-btn outline color="primary" label="First" />
        <q-btn outline color="primary" label="Second" icon-right="watch_later" />
        <q-btn outline color="primary" label="Third" />
      </q-btn-group>

      <br><br>
      <q-btn-group>
        <q-btn color="secondary" label="First" />
        <q-btn color="secondary" label="Second" />
        <q-btn color="secondary" label="Third" />
        <q-btn color="secondary" label="Fourth" />
      </q-btn-group>

      <br><br>
      <q-btn-group>
        <q-btn color="tertiary" icon="timeline" />
        <q-btn color="tertiary" icon="visibility" />
        <q-btn color="tertiary" icon="update" />
      </q-btn-group>
    </div>
  </q-page>
</template>
