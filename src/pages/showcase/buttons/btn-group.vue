<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Examples of group buttons. Endless possibilities.</p>
      <q-btn-group push>
        <q-btn push label="First" icon="timeline" />
        <q-btn push label="Second" icon="visibility" />
        <q-btn push label="Third" icon="update" />
      </q-btn-group>

      <br><br>
      <q-btn-group push>
        <q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
        <q-btn color="amber" glossy text-color="black" push label="Second" />
        <q-btn color="orange" glossy text-color="black" push label="Third" />
      </q-btn-group>

      <br><br>
      <q-btn-group outline>
        <q-btn outline color="brown" label="First" />
        <q-btn outline color="brown" label="Second" icon-right="watch_later" />
        <q-btn outline color="brown" label="Third" />
      </q-btn-group>

      <br><br>
      <q-btn-group>
        <q-btn color="secondary" glossy label="First" />
        <q-btn color="secondary" glossy label="Second" />
        <q-btn color="secondary" glossy label="Third" />
        <q-btn color="secondary" glossy label="Fourth" />
      </q-btn-group>

      <br><br>
      <q-btn-group>
        <q-btn color="tertiary" icon="timeline" />
        <q-btn color="tertiary" icon="visibility" />
        <q-btn color="tertiary" icon="update" />
      </q-btn-group>

      <br><br>
      <q-btn-group rounded>
        <q-btn color="amber" rounded glossy icon="timeline" />
        <q-btn color="amber" rounded glossy icon="visibility" />
        <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
      </q-btn-group>

      <br><br>
      <q-btn-group rounded>
        <q-btn rounded color="primary" label="One" />
        <q-btn rounded color="primary" label="Two" />
        <q-btn-dropdown rounded color="primary" label="Three" split>
          <!-- dropdown content goes here -->
          <q-list link>
            <q-item v-close-overlay>
              <q-item-side icon="folder" inverted color="primary" />
              <q-item-main>
                <q-item-tile label>Photos</q-item-tile>
                <q-item-tile sublabel>February 22, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" color="amber" />
            </q-item>
            <q-item-separator inset />
            <q-list-header inset>Files</q-list-header>
            <q-item v-close-overlay>
              <q-item-side icon="assignment" inverted />
              <q-item-main>
                <q-item-tile label>Vacation</q-item-tile>
                <q-item-tile sublabel>February 22, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" color="amber" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>
    </div>
  </q-page>
</template>
