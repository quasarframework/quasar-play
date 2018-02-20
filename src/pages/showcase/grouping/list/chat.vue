<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list highlight>
        <q-list-header>Recent chats</q-list-header>
        <q-item>
          <q-item-side>
            <q-item-tile avatar>
              <img src="statics/boy-avatar.png">
            </q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/linux-avatar.png" />
          <q-item-main label="Jim Doe" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator />
        <q-list-header>Previous chats</q-list-header>
        <q-item>
          <q-item-side avatar="statics/guy-avatar.png" />
          <q-item-main label="Jack Doe" />
        </q-item>
      </q-list>

      <q-list inset-separator class="q-mt-md">
        <q-item>
          <q-item-side icon="voice_chat" color="secondary" />
          <q-item-main label="Voice Chat with Joe" />
          <q-item-side right icon="voice_chat" color="secondary" />
        </q-item>
        <q-item>
          <q-item-side inverted icon="voice_chat" color="secondary" />
          <q-item-main label="Voice Chat with Joe" />
          <q-item-side right inverted icon="voice_chat" color="secondary" />
        </q-item>
        <q-item>
          <q-item-side inverted icon="voice_chat" color="amber" text-color="black" />
          <q-item-main label="Voice Chat with Joe" />
          <q-item-side right inverted icon="voice_chat" color="amber" text-color="black" />
        </q-item>
        <q-item>
          <q-item-side letter="J" color="secondary" />
          <q-item-main label="John Doe" />
          <q-item-side right letter="J" color="secondary" />
        </q-item>
        <q-item>
          <q-item-side inverted letter="J" color="secondary" />
          <q-item-main label="John Doe" />
          <q-item-side right inverted letter="J" color="secondary" />
        </q-item>
        <q-item>
          <q-item-side inverted letter="J" color="amber" text-color="black" />
          <q-item-main label="John Doe" />
          <q-item-side right inverted letter="J" color="amber" text-color="black" />
        </q-item>
      </q-list>

      <q-list inset-separator class="q-mt-md">
        <q-item>
          <q-item-side>
            <q-item-tile letter color="secondary">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile letter color="secondary">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted letter color="secondary">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted letter color="secondary">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted letter color="amber" text-color="black">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted letter color="amber" text-color="black">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile stamp color="secondary">Stamp</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile stamp color="secondary">Stamp</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile icon="map" color="secondary" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile icon="map" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted icon="map" color="secondary" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted icon="map" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted icon="map" color="amber" text-color="black" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted icon="map" color="amber" text-color="black" />
          </q-item-side>
        </q-item>
      </q-list>

      <q-list inset-separator class="q-mt-md dark-example" dark>
        <q-item>
          <q-item-side>
            <q-item-tile letter color="secondary">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile letter color="secondary">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted letter color="secondary">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted letter color="secondary">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted letter color="amber" text-color="black">Q</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted letter color="amber" text-color="black">Q</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile stamp color="secondary">Stamp</q-item-tile>
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile stamp color="secondary">Stamp</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile icon="map" color="secondary" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile icon="map" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted icon="map" color="secondary" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted icon="map" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile inverted icon="map" color="amber" text-color="black" />
          </q-item-side>
          <q-item-main label="John Doe" />
          <q-item-side right>
            <q-item-tile inverted icon="map" color="amber" text-color="black" />
          </q-item-side>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
