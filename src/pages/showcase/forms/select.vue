<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Single selection</p>
      <q-select
        v-model="select"
        :options="options"
      />
      <q-select
        stack-label="Delimited options"
        inverted
        color="amber"
        separator
        v-model="select"
        :options="options"
      />
      <q-select
        color="secondary"
        float-label="List with float label"
        v-model="select"
        :options="listOptions"
      />
      <q-select
        color="amber"
        stack-label="List with stack label"
        v-model="select"
        :options="options"
      />
      <q-select
        radio
        color="secondary"
        float-label="With Radio"
        v-model="select"
        :options="listOptions"
      />

      <p class="caption">Multiple selection</p>
      <q-select
        multiple
        color="indigo"
        v-model="multipleSelect"
        :options="options"
      />
      <q-select
        multiple
        inverted
        color="dark"
        stack-label="Delimited options"
        separator
        v-model="multipleSelect"
        :options="options"
      />
      <q-select
        multiple
        toggle
        inverted
        color="orange"
        float-label="List with float label & toggles"
        v-model="multipleSelect"
        :options="listOptions"
      />
      <q-select
        multiple
        chips
        color="purple"
        float-label="With chips"
        v-model="multipleSelect"
        :options="listOptions"
      />
      <q-select
        multiple
        float-label="With custom display value"
        :display-value="`${multipleSelect.length} companies selected`"
        v-model="multipleSelect"
        :options="listOptions"
      />

      <p class="caption">
        Lazy input
      </p>
      <span class="chip-container">
        <q-chip square color="secondary">
          Model: {{ lazy }}
        </q-chip>
      </span>
      <q-select
        :value="lazy"
        @change="val => lazy = val"
        multiple
        inverted
        color="tertiary"
        :options="options"
      />

      <p class="caption">With filter / search</p>
      <q-select
        filter
        v-model="select"
        :options="options"
      />
      <q-select
        multiple
        filter
        inverted
        color="secondary"
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">Readonly state</p>
      <q-select
        readonly
        v-model="select"
        :options="options"
      />
      <q-select
        readonly
        inverted
        v-model="select"
        :options="options"
      />

      <p class="caption">Disable state</p>
      <q-select
        disable
        v-model="select"
        :options="options"
      />
      <q-select
        disable
        inverted
        v-model="select"
        :options="options"
      />

      <p class="caption">Error state</p>
      <q-select
        error
        float-label="Hey, an error!"
        v-model="select"
        :options="options"
      />
      <q-select
        error
        inverted
        multiple
        float-label="Look, look. An error."
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">Warning state</p>
      <q-select
        warning
        float-label="Hey, an warning!"
        v-model="select"
        :options="options"
      />
      <q-select
        warning
        inverted
        multiple
        float-label="Look, look. An warning."
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">Hide underline</p>
      <q-select
        multiple
        hide-underline
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">In a Field</p>
      <q-field
        icon="public"
        label="Pick employers"
        helper="Pick company names"
      >
        <q-select
          multiple
          v-model="multipleSelect"
          :options="options"
        />
      </q-field>
      <q-field
        icon="public"
        :count="5"
        label="Pick employers"
        helper="Pick company names"
      >
        <q-select
          inverted
          chips
          color="black"
          frame-color="amber"
          multiple
          v-model="multipleSelect"
          :options="options"
        />
      </q-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <q-select
          dark
          stack-label="Delimited options"
          color="amber"
          separator
          v-model="select"
          :options="options"
        />
        <q-field
          dark
          icon="school"
          label="Company"
        >
          <q-select
            dark
            stack-label="Stack label"
            color="lime"
            v-model="select"
            :options="options"
          />
        </q-field>
      </div>
    </div>
  </q-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      lazy: [],
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      options: [
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
      listOptions: [
        {
          label: 'Google',
          icon: 'email',
          value: 'goog'
        },
        {
          label: 'Facebook',
          icon: 'chat',
          description: 'Enables communication',
          value: 'fb'
        },
        {
          label: 'Twitter',
          inset: true,
          rightIcon: 'live_help',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          inset: true,
          stamp: '10 min',
          value: 'appl'
        },
        {
          label: 'Oracle',
          description: 'Some Java for today?',
          icon: 'unarchive',
          rightIcon: 'widgets',
          value: 'ora'
        }
      ]
    }
  }
}
</script>
