<template>
  <q-page padding class="row justify-center docs-tree">
    <div style="width: 700px; max-width: 90vw;">
      <p class="caption">Simplest Tree</p>
      <q-tree
        :nodes="simple"
        node-key="label"
      />

      <p class="caption">Node icon/avatar/image, controlling expansion and colored</p>
      <q-btn size="sm" color="secondary" @click="togglePropsGoodServiceExpand" label="Toggle 'Good service' expansion" class="q-mb-sm" />
      <q-tree
        :nodes="props"
        :expanded.sync="propsExpanded"
        color="red"
        node-key="label"
      />

      <p class="caption">Customizing nodes (header and body slots)</p>
      <q-tree
        :nodes="customize"
        node-key="label"
        default-expand-all
      >
        <div slot="header-root" slot-scope="prop" class="row items-center">
          <img src="~assets/quasar-logo.svg" class="avatar q-mr-sm">
          <div>
            {{ prop.node.label }} <q-chip color="orange" small>New!</q-chip>
          </div>
        </div>

        <div slot="header-generic" slot-scope="prop" class="row items-center">
          <q-icon :name="prop.node.icon || 'star'" color="orange" size="28px" class="q-mr-sm" />
          <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
        </div>

        <div slot="body-story" slot-scope="prop">
          <span class="text-weight-thin">The story is:</span> {{ prop.node.story }}
        </div>

        <div slot="body-toggle" slot-scope="prop">
          <p class="caption">{{ prop.node.caption }}</p>
          <q-toggle v-model="prop.node.enabled" label="I agree to the terms and conditions" />
        </div>
      </q-tree>

      <p class="caption">Applying a default header and body slot</p>
      <q-tree
        :nodes="customize"
        node-key="label"
        default-expand-all
      >
        <div slot="default-header" slot-scope="prop" class="row items-center">
          <q-icon :name="prop.node.icon || 'share'" color="orange" size="28px" class="q-mr-sm" />
          <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
        </div>

        <div slot="default-body" slot-scope="prop">
          <div v-if="prop.node.story">
            <span class="text-weight-thin">This node has a story</span>: {{ prop.node.story }}
          </div>
          <span v-else class="text-weight-thin">This is some default content.</span>
        </div>
      </q-tree>

      <p class="caption">Filtering nodes</p>
      <q-input
        v-model="filter"
        stack-label="Filter"
        clearable
        class="q-mb-sm"
      />
      <q-tree
        :nodes="simple"
        :filter="filter"
        default-expand-all
        node-key="label"
      />

      <p class="caption">Accordion mode (sibling nodes get contracted when one gets expanded)</p>
      <q-tree
        :nodes="simple"
        accordion
        :expanded.sync="accordionExpanded"
        node-key="label"
      />

      <p class="caption">Selectable nodes <q-chip small>{{ selected || 'No selection' }}</q-chip></p>
      <div class="q-mb-sm">
        <q-btn size="sm" color="primary" @click="selectGoodService" label="Select 'Good service'" />
        <q-btn class="q-ml-sm" v-if="selected" size="sm" color="red" @click="unselectNode" label="Unselect node" />
      </div>
      <q-tree
        :nodes="props"
        default-expand-all
        :selected.sync="selected"
        node-key="label"
      />

      <p class="caption">Tickable nodes & strategies</p>
      <div class="q-mb-sm row no-wrap items-center">
        <q-select
          v-model="tickStrategy"
          color="secondary"
          stack-label="Tick Strategy"
          :options="[
            {label: 'None', value: 'none'},
            {label: 'Leaf', value: 'leaf'},
            {label: 'Leaf Filtered', value: 'leaf-filtered'},
            {label: 'Strict', value: 'strict'}
          ]"
          class="q-ma-none q-mr-sm"
          style="width: 150px"
        />
        <q-input
          v-if="tickStrategy === 'leaf-filtered'"
          color="secondary"
          stack-label="Filter"
          v-model="tickFilter"
          class="q-ma-none"
          clearable
        />
      </div>
      <q-tree
        :nodes="tickable"
        color="secondary"
        default-expand-all
        :ticked.sync="ticked"
        :tick-strategy="tickStrategy"
        :filter="tickFilter"
        node-key="label"
      />

      <p class="caption">Lazy loading nodes (try expanding)</p>
      <q-tree
        :nodes="lazy"
        default-expand-all
        node-key="label"
        @lazy-load="onLazyLoad"
      />

      <p class="caption">On a dark background</p>
      <div class="bg-black q-pa-md" style="border-radius: 5px">
        <q-tree
          dark
          :nodes="props"
          default-expand-all
          node-key="label"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    simple: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ],

    props: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ],
    propsExpanded: ['Satisfied customers', 'Pleasant surroundings'],

    customize: [
      {
        label: 'Satisfied customers',
        header: 'root',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            header: 'generic',
            children: [
              {
                label: 'Quality ingredients',
                header: 'generic',
                body: 'story',
                story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt exercitationem quam est ea optio, rem placeat veritatis commodi dignissimos aspernatur labore, asperiores facilis dicta. Veniam enim molestiae odit obcaecati eum.'
              },
              {
                label: 'Good recipe',
                body: 'story',
                story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
              }
            ]
          },
          {
            label: 'Good service',
            header: 'generic',
            body: 'toggle',
            caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
            enabled: false,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation', header: 'generic' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ],

    filter: 'quality',
    accordionExpanded: ['Satisfied customers', 'Good service'],
    selected: 'Happy atmosphere',

    tickable: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere (not tickable)',
                tickable: false,
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation (disabled node)',
                disabled: true,
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          },
          {
            label: 'Extra information (has no tick)',
            noTick: true,
            icon: 'photo'
          },
          {
            label: 'Forced tick strategy (to "strict" in this case)',
            tickStrategy: 'strict',
            icon: 'school',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Very pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ],
    ticked: [],
    tickStrategy: 'leaf',
    tickFilter: null,

    lazy: [
      {
        label: 'Node 1',
        children: [
          { label: 'Node 1.1', lazy: true },
          { label: 'Node 1.2', lazy: true }
        ]
      },
      {
        label: 'Node 2',
        lazy: true
      },
      {
        label: 'Lazy load empty',
        lazy: true
      },
      {
        label: 'Node is not expandable',
        expandable: false,
        children: [
          { label: 'Some node' }
        ]
      }
    ]
  }),
  methods: {
    togglePropsGoodServiceExpand () {
      const index = this.propsExpanded.indexOf('Good service')
      if (index > -1) {
        this.propsExpanded.splice(index, 1)
      }
      else {
        this.propsExpanded.push('Good service')
      }
    },
    selectGoodService () {
      if (this.selected !== 'Good service') {
        this.selected = 'Good service'
      }
    },
    unselectNode () {
      this.selected = null
    },
    onLazyLoad ({ node, key, done, fail }) {
      // call fail() if any error occurs

      setTimeout(() => {
        // simulate loading and setting an empty node
        if (key.indexOf('Lazy load empty') > -1) {
          done([])
          return
        }

        const label = node.label
        done([
          { label: `${label}.1` },
          { label: `${label}.2`, lazy: true },
          {
            label: `${label}.3`,
            children: [
              { label: `${label}.3.1`, lazy: true },
              { label: `${label}.3.2`, lazy: true }
            ]
          }
        ])
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
.docs-tree p.caption:not(:first-of-type)
  margin-top 38px
</style>
