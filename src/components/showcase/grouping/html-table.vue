<template>
  <div class="layout-padding row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-card>
        <q-card-title>
          Configure
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field
            label="Separators"
            :label-width="4"
            style="margin-top: 0"
          >
            <q-option-group
              v-model="separator"
              inline
              type="radio"
              :options="[
                {value: 'none', label: 'No separator'},
                {value: 'horizontal', label: 'Horizontal separator'},
                {value: 'vertical', label: 'Vertical separator'},
                {value: 'cell', label: 'Cell separator'}
              ]"
            />
          </q-field>

          <q-field
            label="Stripes"
            :label-width="4"
          >
            <q-option-group
              v-model="stripe"
              inline
              type="radio"
              :options="[
                {value: 'none', label: 'No Stripe'},
                {value: 'odd', label: 'Striped Odd'},
                {value: 'even', label: 'Striped Even'}
              ]"
            />
          </q-field>

          <q-field
            label="Layout Type"
            :label-width="4"
          >
            <q-option-group
              v-model="type"
              inline
              type="radio"
              :options="[
                {value: 'none', label: 'Standard'},
                {value: 'flipped', label: 'Flipped'},
                {value: 'responsive', label: 'Responsive'}
              ]"
            />
          </q-field>

          <q-field
            label="Gutter"
            :label-width="4"
          >
            <q-option-group
              v-model="gutter"
              inline
              type="radio"
              :options="[
                {value: 'none', label: 'Standard'},
                {value: 'compact', label: 'Compact'},
                {value: 'loose', label: 'Loose'}
              ]"
            />
          </q-field>

          <q-field
            label="Misc"
            :label-width="4"
          >
            <q-option-group
              v-model="misc"
              inline
              type="checkbox"
              :options="[
                {value: 'bordered', label: 'Bordered'},
                {value: 'highlight', label: 'Highlight'}
              ]"
            />
          </q-field>

          <template v-if="computedClasses.length > 0">
            <q-card-separator style="margin-top: 16px; margin-bottom: 16px;" />

            <q-field
              label="Applying CSS classes"
              :label-width="4"
            >
              <div class="group" style="margin: -5px">
                <q-chip
                  v-for="cls in computedClasses"
                  :key="cls"
                  color="secondary"
                  square
                >
                  {{cls}}
                </q-chip>
              </div>
            </q-field>
          </template>
        </q-card-main>
      </q-card>

      <div class="row justify-center">
        <table style="margin-top: 30px;" class="q-table" :class="computedClasses">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-right">Price</th>
              <th class="text-right">In Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td data-th="Name" class="text-left">Item #1</td>
              <td data-th="Price" class="text-right">$10.11</td>
              <td data-th="In Stock" class="text-right">101</td>
            </tr>
            <tr>
              <td data-th="Name" class="text-left">Item #2</td>
              <td data-th="Price" class="text-right">$8.88</td>
              <td data-th="In Stock" class="text-right">34</td>
            </tr>
            <tr>
              <td data-th="Name" class="text-left">Item #3</td>
              <td data-th="Price" class="text-right">$0.15</td>
              <td data-th="In Stock" class="text-right">1670</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCheckbox,
  QOptionGroup,
  QChip,
  QField,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator
} from 'quasar'

export default {
  components: {
    QCheckbox,
    QOptionGroup,
    QChip,
    QField,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator
  },
  data () {
    return {
      styles: [
        '',
        'bordered',
        'horizontal-separator',
        'vertical-separator',
        'cell-separator',
        'striped-odd',
        'striped-even',
        'highlight',
        'compact',
        'loose',
        'flipped'
      ],
      misc: [],
      separator: 'none',
      stripe: 'none',
      type: 'none',
      gutter: 'none'
    }
  },
  computed: {
    computedClasses () {
      let classes = []

      if (this.misc.includes('bordered')) {
        classes.push('bordered')
      }
      if (this.misc.includes('highlight')) {
        classes.push('highlight')
      }
      if (this.separator !== 'none') {
        classes.push(this.separator + '-separator')
      }
      if (this.stripe !== 'none') {
        classes.push('striped-' + this.stripe)
      }
      if (this.type !== 'none') {
        classes.push(this.type)
      }
      if (this.gutter !== 'none') {
        classes.push(this.gutter)
      }

      return classes
    }
  }
}
</script>
