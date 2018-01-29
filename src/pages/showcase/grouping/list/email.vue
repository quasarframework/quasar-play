<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list highlight inset-separator>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
          <q-item-side right stamp="1 min" />
        </q-item>
        <q-item multiline>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main
            label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
            label-lines="1"
            sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>1 week ago</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item multiline>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main
            label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
            label-lines="2"
            sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
          />
          <q-item-side right stamp="10 min" />
        </q-item>
        <q-item multiline>
          <q-item-side>
            <q-item-tile avatar>
              <img src="statics/boy-avatar.png">
            </q-item-tile>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Brunch <span>5</span></q-item-tile>
            <q-item-tile sublabel lines="2">
              John Doe John Doe John Doe John Doe John Doe John Doe
              John Doe John Doe John Doe John Doe John Doe John Doe
              John Doe John Doe John Doe John Doe
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile stamp>10 min</q-item-tile>
            <q-item-tile icon="star" color="yellow" />
          </q-item-side>
        </q-item>
        <q-item multiline>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main>
            <q-item-tile label lines="1">Brunch this weekend? Yeah, this weekend. Really. This one.</q-item-tile>
            <q-item-tile sublabel lines="2">
              <span>John Doe</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile stamp>2 years</q-item-tile>
            <q-item-tile icon="mail" color="primary" />
          </q-item-side>
        </q-item>
      </q-list>

      <q-list inset-separator class="q-mt-md">
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-btn flat round dense icon="more_vert">
              <q-popover>
                <q-list link>
                  <q-item v-close-overlay>
                    <q-item-main label="Reply" />
                  </q-item>
                  <q-item v-close-overlay>
                    <q-item-main label="Forward" />
                  </q-item>
                  <q-item v-close-overlay>
                    <q-item-main label="Delete" />
                  </q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-chip square color="primary" class="shadow-2">10k</q-chip>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-item-tile stamp>10 min ago</q-item-tile>
            <span class="text-amber">
              <q-item-tile icon="star" v-for="n in 2" :key="n" />
            </span>
          </q-item-side>
        </q-item>
      </q-list>

      <q-list inset-separator class="q-mt-md dark-example" dark>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-btn flat round dense icon="more_vert" text-color="white">
              <q-popover>
                <q-list link>
                  <q-item v-close-overlay>
                    <q-item-main label="Reply" />
                  </q-item>
                  <q-item v-close-overlay>
                    <q-item-main label="Forward" />
                  </q-item>
                  <q-item v-close-overlay>
                    <q-item-main label="Delete" />
                  </q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-chip square color="secondary" class="shadow-2">10k</q-chip>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/boy-avatar.png" />
          <q-item-main label="Brunch this weekend?" />
          <q-item-side right>
            <q-item-tile stamp>10 min ago</q-item-tile>
            <span class="text-amber">
              <q-item-tile icon="star" v-for="n in 2" :key="n" />
            </span>
          </q-item-side>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
