<template>
  <q-page padding class="docs-table">
    <p class="caption">Custom table top & bottom</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="primary"
    >
      <div slot="top" slot-scope="props" class="row flex-center fit">
        <img src="~assets/quasar-logo-full.svg">
      </div>
      <div slot="bottom" slot-scope="props" class="row flex-center fit">
        <q-btn
          round dense icon="chevron_left" color="primary" class="q-mr-md"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <q-btn
          round dense icon="chevron_right" color="primary"
          :disable="props.isLastPage"
          @click="props.nextPage"
        />
      </div>
    </q-table>

    <p class="caption">Custom column cell</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="secondary"
    >
      <!-- slot name syntax: body-cell-<column_name> -->
      <q-td slot="body-cell-desc" slot-scope="props" :props="props">
        <q-chip small color="secondary">{{ props.value }}</q-chip>
      </q-td>
    </q-table>

    <p class="caption">Custom rows</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="desc" :props="props">
          <span class="text-italic">{{ props.row.name }}</span>
          <q-tooltip>I'd like to eat "{{ props.row.name }}"</q-tooltip>
        </q-td>
        <q-td key="calories" :props="props">
          <div class="row items-center justify-between no-wrap">
            <q-btn size="sm" round dense color="secondary" icon="remove" @click="props.row.calories--" class="q-mr-xs" />
            <q-btn size="sm" round dense color="tertiary" icon="add" @click="props.row.calories++" class="q-mr-sm" />
            <div>{{ props.row.calories }}</div>
          </div>
        </q-td>
        <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
        <q-td key="carbs" :props="props">
          <q-chip small square color="amber">{{ props.row.carbs }}</q-chip>
        </q-td>
        <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
        <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
        <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
        <q-td key="iron" :props="props">
          {{ props.row.iron }}
        </q-td>
      </q-tr>
    </q-table>

    <p class="caption">Alternative custom rows</p>
    <q-table
      :data="tableData"
      :columns="columns"
      title="Click on a row"
      dark
      class="bg-black"
      color="amber"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          # {{ col.value }} #
        </q-td>
      </q-tr>
    </q-table>

    <p class="caption">Custom header (has tooltips)</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <tr slot="header" slot-scope="props">
        <q-th key="desc" :props="props">
          Dessert
          <q-tooltip>Pick a desert</q-tooltip>
        </q-th>
        <q-th key="calories" :props="props">
          Calories
          <q-tooltip>These are the calories</q-tooltip>
        </q-th>
        <q-th key="fat" :props="props">
          Fat
          <q-tooltip>This is the fat</q-tooltip>
        </q-th>
        <q-th key="carbs" :props="props">
          Carbs
          <q-tooltip>These are the carbohydrates</q-tooltip>
        </q-th>
        <q-th key="protein" :props="props">
          Protein
          <q-tooltip>These are the proteins</q-tooltip>
        </q-th>
        <q-th key="sodium" :props="props">
          Sodium
          <q-tooltip>This is the sodium</q-tooltip>
        </q-th>
        <q-th key="calcium" :props="props">
          Calcium
          <q-tooltip>This is the calcium</q-tooltip>
        </q-th>
        <q-th key="iron" :props="props">
          Iron
          <q-tooltip>This is the iron</q-tooltip>
        </q-th>
      </tr>
    </q-table>

    <p class="caption">Alternative custom header</p>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <q-tr slot="header" slot-scope="props" :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          # {{ col.label }} #
        </q-th>
      </q-tr>
    </q-table>

    <p class="caption">Custom header & rows with selection & expandable rows</p>
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selected"
      row-key="name"
    >
      <q-tr slot="header" slot-scope="props">
        <q-th auto-width>
          <q-checkbox
            v-if="props.multipleSelect"
            v-model="props.selected"
            indeterminate-value="some"
          />
        </q-th>
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>

      <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox color="primary" v-model="props.selected" />
          </q-td>
          <q-td key="desc" :props="props">
            <q-checkbox color="primary" v-model="props.expand" checked-icon="remove" unchecked-icon="add" class="q-mr-md" />
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props">{{ props.row.calories }}</q-td>
          <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
          <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
          <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
          <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
          <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
          <q-td key="iron" :props="props">
            <q-chip small square color="amber">{{ props.row.iron }}</q-chip>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
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

      selected: []
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
    },
    rowClick (row) {
      this.$q.notify({
        color: 'primary',
        icon: 'local_dining',
        message: `Hmm, are you sure? It has ${row.calories} calories.`,
        actions: [{
          label: 'Yes, eat!',
          handler: () => {
            this.$q.notify({ color: 'positive', icon: 'done', message: 'Yummy. Thanks! Now one more.' })
          }
        }]
      })
    }
  }
}
</script>
