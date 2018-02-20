<template>
  <q-page padding class="docs-table">
    <p class="caption">Pagination, sorting & filtering happens on the server</p>
    <q-table
      ref="table"
      color="primary"
      title="Server-side Pagination"
      :data="serverData"
      :columns="columns"
      :filter="filter"
      selection="multiple"
      :selected.sync="selected"
      row-key="name"
      :pagination.sync="serverPagination"
      @request="request"
      :loading="loading"
    >
      <template slot="top-right" slot-scope="props">
        <q-search hide-underline v-model="filter" />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import tableData from 'assets/table-data'

export default {
  data () {
    return {
      serverData: [],
      serverPagination: {
        page: 1,
        rowsNumber: 10 // specifying this determines pagination is server-side
      },
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
      selected: [
        // initial selection
        { name: 'Ice cream sandwich' }
      ],
      loading: false
    }
  },
  methods: {
    request (props) {
      this.loading = true
      setTimeout(() => {
        this.serverPagination = props.pagination

        let
          table = this.$refs.table,
          rows = tableData.slice(),
          { page, rowsPerPage, sortBy, descending } = props.pagination

        if (props.filter) {
          rows = table.filterMethod(rows, props.filter)
        }

        if (sortBy) {
          rows = table.sortMethod(rows, sortBy, descending)
        }

        this.serverPagination.rowsNumber = rows.length

        if (rowsPerPage) {
          rows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        this.serverData = rows
        this.loading = false
      }, 1500)
    }
  },
  mounted () {
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>
