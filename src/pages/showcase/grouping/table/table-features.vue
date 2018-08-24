<template>
  <q-page padding class="docs-table">
    <p class="caption">Basic example</p>
    <q-table
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />

    <div class="caption" style="margin: 20px 0 16px">
      Grid mode (v0.17+) - click on items.
      <br class="desktop-hide">
      <span class="desktop-hide">Best viewed on a desktop view.</span>
    </div>
    <q-table
      grid
      hide-header
      :data="tableData"
      :columns="columns"
      :filter="filter"
      :selection="selection"
      :selected.sync="selected"
      :visible-columns="visibleColumns"
      row-key="name"
    >
      <template slot="top-right" slot-scope="props">
        <q-search hide-underline clearable v-model="filter" />
      </template>

      <div
        slot="item"
        slot-scope="props"
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 transition-generic"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
      >
        <q-card
          class="transition-generic cursor-pointer"
          :class="props.selected ? 'bg-grey-2' : ''"
          @click.native="props.selected = !props.selected"
        >
          <q-card-title class="relative-position">
            {{ props.row.name }}
          </q-card-title>
          <q-card-separator />
          <q-card-main class="q-pa-none">
            <q-list no-border>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-main>
                  <q-item-tile label>{{ col.label }}</q-item-tile>
                </q-item-main>
                <q-item-side right>
                  <q-item-tile>{{ col.value }}</q-item-tile>
                </q-item-side>
              </q-item>
            </q-list>
          </q-card-main>
        </q-card>
      </div>
    </q-table>

    <p class="caption">Force dense mode (see on wide windows)</p>
    <q-table
      dense
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />

    <p class="caption">Filter, Column selection, Separators, Toggle fullscreen</p>
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
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>
    </q-table>

    <p class="caption">Row selection, Extra top/bottom rows, Loading state</p>
    <q-table
      :data="tableData"
      :columns="columns"
      :selection="selection"
      :selected.sync="selected"
      :loading="loading"
      :dark="dark"
      row-key="name"
      color="secondary"
      :class="tableClass"
    >
      <q-tr slot="top-row" slot-scope="props">
        <q-td colspan="100%">
          <strong>Extra top row</strong>
        </q-td>
      </q-tr>

      <q-tr slot="bottom-row" slot-scope="props">
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
          v-model="loading"
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

    <p class="caption">Controlling pagination, custom controls & watching for page navigation</p>
    <q-table
      :data="tableData"
      :columns="columns"
      :pagination.sync="paginationControl"
      row-key="name"
      color="primary"
    >
      <div slot="pagination" slot-scope="props" class="row flex-center q-py-sm">
        <q-btn
          round dense size="sm" icon="undo" color="secondary" class="q-mr-sm"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <div class="q-mr-sm" style="font-size: small">Page {{ props.pagination.page }} / {{ props.pagesNumber }}</div>
        <q-btn
          round dense size="sm" icon="redo" color="secondary"
          :disable="props.isLastPage"
          @click="props.nextPage"
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
        <div class="col" />
        <q-btn color="negative" flat round icon="delete" @click="deleteRow" />
      </template>
    </q-table>

    <p class="caption">Popup editing. Click on names & calories cells.</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="desc" :props="props">
          {{ props.row.name }}
          <q-popup-edit v-model="props.row.name">
            <q-field count>
              <q-input v-model="props.row.name" />
            </q-field>
          </q-popup-edit>
        </q-td>
        <q-td key="calories" :props="props">
          {{ props.row.calories }}
          <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
            <q-input type="number" v-model="props.row.calories" />
          </q-popup-edit>
        </q-td>
        <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
        <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
        <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
        <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
        <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
        <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
      </q-tr>
    </q-table>

    <p class="caption">Hide header & bottom</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="primary"
      hide-header
      hide-bottom
    />
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
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      dark: true,
      selectedSecond: [
        { name: 'Eclair' }
      ]
    }
  },
  watch: {
    'paginationControl.page' (page) {
      this.$q.notify({
        color: 'secondary',
        message: `Navigated to page ${page}`,
        actions: page < 4
          ? [{
            label: 'Go to last page',
            handler: () => {
              this.paginationControl.page = 4
            }
          }]
          : null
      })
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
