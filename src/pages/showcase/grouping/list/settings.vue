<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list link>
        <q-list-header>User controls</q-list-header>
        <q-item>
          <q-item-main>
            <q-item-tile label>Content filtering</q-item-tile>
            <q-item-tile sublabel>Set the content filtering level to restrict apps that can be downloaded</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>Password</q-item-tile>
            <q-item-tile sublabel>Require password for purchase or use password to restrict purchase</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-list-header>General</q-list-header>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="checked_one" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Notifications</q-item-tile>
            <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="checked_two" color="secondary" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Sound</q-item-tile>
            <q-item-tile sublabel>Auto-update apps at anytime. Data charges may apply</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="checked_three" color="red" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Auto-add widgets</q-item-tile>
            <q-item-tile sublabel>Automatically add home screen widgets</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>

      <q-list class="q-mt-md">
        <q-list-header>Radios</q-list-header>
        <q-item link tag="label">
          <q-item-side>
            <q-radio v-model="option" val="opt1" />
          </q-item-side>
          <q-item-main label="Option 1" />
        </q-item>
        <q-item link tag="label">
          <q-item-side>
            <q-radio color="secondary" v-model="option" val="opt2" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Option 2</q-item-tile>
            <q-item-tile sublabel>Allows notifications</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item link tag="label">
          <q-item-side>
            <q-radio color="amber" v-model="option" val="opt3" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Option 3</q-item-tile>
            <q-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Toggles</q-list-header>
        <q-item link tag="label">
          <q-item-main label="Events and reminders" />
          <q-item-side right>
            <q-toggle v-model="checked_one" />
          </q-item-side>
        </q-item>
        <q-item link tag="label" multiline>
          <q-item-main>
            <q-item-tile label>Events and reminders</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle v-model="checked_two" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item link tag="label" multiline>
          <q-item-main>
            <q-item-tile label>Events and reminders</q-item-tile>
            <q-item-tile sublabel lines="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle v-model="checked_three" color="amber" />
          </q-item-side>
        </q-item>

        <q-item-separator />

        <q-list-header>Selects</q-list-header>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select hide-underline class="q-ma-none full-width" v-model="select" :options="selectOptions" />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select hide-underline class="q-ma-none full-width" multiple toggle v-model="multipleSelect" :options="selectOptions" />
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Ranges</q-list-header>
        <q-item>
          <q-item-side icon="volume_down" />
          <q-item-main>
            <q-slider v-model="range" :min="0" :max="50" label />
          </q-item-main>
          <q-item-side right icon="volume_up" />
        </q-item>
        <q-item>
          <q-item-side icon="volume_down" />
          <q-item-main>
            <q-slider v-model="range" :min="0" :max="50" label color="amber" />
          </q-item-main>
          <q-item-side right icon="volume_up" />
        </q-item>
        <q-item>
          <q-item-side icon="monetization_on" />
          <q-item-main>
            <q-range v-model="doubleRange" :min="0" :max="50" label color="secondary" />
          </q-item-main>
        </q-item>
      </q-list>

      <q-list class="q-mt-md dark-example" dark>
        <q-list-header>Radios</q-list-header>
        <q-item link tag="label">
          <q-item-side>
            <q-radio dark v-model="option" val="opt1" />
          </q-item-side>
          <q-item-main label="Option 1" />
        </q-item>
        <q-item link tag="label">
          <q-item-side>
            <q-radio dark color="secondary" v-model="option" val="opt2" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Option 2</q-item-tile>
            <q-item-tile sublabel>Allows notifications</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item link tag="label">
          <q-item-side>
            <q-radio dark color="amber" v-model="option" val="opt3" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Option 3</q-item-tile>
            <q-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Toggles</q-list-header>
        <q-item link tag="label">
          <q-item-main label="Events and reminders" />
          <q-item-side right>
            <q-toggle dark v-model="checked_one" color="lime" />
          </q-item-side>
        </q-item>
        <q-item link tag="label" multiline>
          <q-item-main>
            <q-item-tile label>Events and reminders</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle dark v-model="checked_two" color="secondary" />
          </q-item-side>
        </q-item>
        <q-item link tag="label" multiline>
          <q-item-main>
            <q-item-tile label>Events and reminders</q-item-tile>
            <q-item-tile sublabel lines="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle dark v-model="checked_three" color="amber" />
          </q-item-side>
        </q-item>

        <q-item-separator />

        <q-list-header>Selects</q-list-header>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select hide-underline class="q-ma-none full-width" dark v-model="select" :options="selectOptions" />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select hide-underline class="q-ma-none full-width" dark multiple toggle v-model="multipleSelect" :options="selectOptions" />
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Ranges</q-list-header>
        <q-item>
          <q-item-side icon="volume_down" />
          <q-item-main>
            <q-slider v-model="range" :min="0" :max="50" label color="grey" />
          </q-item-main>
          <q-item-side right icon="volume_up" />
        </q-item>
        <q-item>
          <q-item-side icon="volume_down" />
          <q-item-main>
            <q-slider v-model="range" :min="0" :max="50" label color="amber" />
          </q-item-main>
          <q-item-side right icon="volume_up" />
        </q-item>
        <q-item>
          <q-item-side icon="monetization_on" />
          <q-item-main>
            <q-range v-model="doubleRange" :min="0" :max="50" label color="secondary" />
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      checked_one: true,
      checked_two: false,
      checked_three: false,
      option: 'opt1',
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
      range: 20,
      doubleRange: {
        min: 10,
        max: 35
      }
    }
  }
}
</script>
