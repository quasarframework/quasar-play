<template>
  <q-page padding class="docs-table">
    <p class="caption">Basic example</p>
    <q-table
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />

    <p class="caption">Filter, Column selection, Separators</p>
    <q-table
      :data="tableData"
      :columns="columns"
      :filter="filter"
      :visible-columns="visibleColumns"
      :separator="separator"
      row-key="name"
      color="secondary"
    >
      <template slot="top-left" slot-scope="props">
        <q-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
        />
      </template>
      <template slot="top-right" slot-scope="props">
        <q-table-columns
          color="secondary"
          class="q-mr-sm"
          v-model="visibleColumns"
          :columns="columns"
        />
        <q-select
          color="secondary"
          v-model="separator"
          :options="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' }
          ]"
          hide-underline
        />
      </template>
    </q-table>

    <p class="caption">Row selection, Extra top/bottom rows, Loading state</p>
    <q-table
      :data="tableData"
      :columns="columns"
      :selection="selection"
      :selected.sync="selected"
      :loader="loader"
      :dark="dark"
      row-key="name"
      color="secondary"
      :class="tableClass"
    >
      <q-tr slot="top-row" slot-scope="props" :props="props">
        <q-td colspan="100%">
          <strong>Extra top row</strong>
        </q-td>
      </q-tr>

      <q-tr slot="bottom-row" slot-scope="props" :props="props">
        <q-td colspan="100%">
          <strong>Extra bottom row</strong>
        </q-td>
      </q-tr>

      <template slot="top-left" slot-scope="props">
        <q-select
          v-model="selection"
          stack-label="Selection"
          hide-underline
          :options="[
            { label: 'Single', value: 'single' },
            { label: 'Multiple', value: 'multiple' },
            { label: 'None', value: 'none' }
          ]"
          color="secondary"
          :dark="dark"
          style="min-width: 100px"
        />
      </template>
      <div slot="top-right" slot-scope="props" class="column">
        <q-toggle
          v-model="loader"
          label="Loading state"
          color="secondary"
          :dark="dark"
          class="q-mb-sm"
        />
        <q-toggle
          v-model="dark"
          label="On dark background"
          color="secondary"
          :dark="dark"
        />
      </div>
    </q-table>

    <p class="caption">Row selection actions</p>
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedSecond"
      row-key="name"
      color="secondary"
      title="Select some rows"
    >
      <template slot="top-selection" slot-scope="props">
        <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
        <q-btn color="secondary" flat label="Action 2" />
        <div class="col"></div>
        <q-btn color="negative" flat round delete icon="delete" @click="deleteRow" />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import tableData from 'assets/table-data'

export default {
  data () {
    return {
      tableData,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],

      filter: '',
      visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
      separator: 'horizontal',
      selection: 'multiple',
      selected: [
        // initial selection
        { name: 'Ice cream sandwich' }
      ],
      loader: false,
      dark: true,
      selectedSecond: [
        { name: 'Eclair' }
      ]
    }
  },
  computed: {
    tableClass () {
      if (this.dark) {
        return 'bg-black'
      }
    }
  },
  methods: {
    deleteRow () {
      this.$q.notify({
        color: 'secondary',
        icon: 'delete',
        message: `Will delete the selected row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
      })
    }
  }
}
</script>
