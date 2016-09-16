<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Grid Component is displayed as a table on wide enough windows and as a list on
        narrow windows.
      </p>

      <quasar-grid
        :columns="columns"
        :data="data"
        :rows-per-page="5"
        :selection-mode="grid.selection"
        :selection-actions="selectionActions"
        :sortable="grid.sortable"
        id-property="unique_id"
      ></quasar-grid>

      <button
        class="circular primary push absolute-bottom-right"
        style="margin: 10px;"
        @click="openSettings()"
      >
        <i>settings</i>
      </button>

      <quasar-modal v-ref:grid-modal :set="{minimized: true}" :css="{padding: '5px'}">
        <div class="list no-border">
          <div class="list-label">
            Selection
          </div>
          <label class="item item-link">
            <div class="item-primary">
              <quasar-radio :model.sync="grid.selection" class="secondary" value="none"></quasar-radio>
            </div>
            <div class="item-content">
              <i>view_module</i>
              No Selection
            </div>
          </label>
          <label class="item item-link">
            <div class="item-primary">
              <quasar-radio :model.sync="grid.selection" value="single"></quasar-radio>
            </div>
            <div class="item-content">
              <i>done</i>
              Single
            </div>
          </label>
          <label class="item item-link">
            <div class="item-primary">
              <quasar-radio :model.sync="grid.selection" value="multiple"></quasar-radio>
            </div>
            <div class="item-content">
              <i>done_all</i>
              Multiple
            </div>
          </label>
          <div class="list-label">
            Other Options
          </div>
          <label class="item item-link">
            <div class="item-primary">
              <quasar-checkbox :model.sync="grid.sortable" class="secondary"></quasar-checkbox>
            </div>
            <div class="item-content">
              <i>swap_vert</i>
              Sortable Columns
            </div>
          </label>
        </div>
        <div class="row justify-end" style="margin-top: 25px;">
          <button class="primary clear" @click="$refs.gridModal.close()">Close</button>
        </div>
      </quasar-modal>
    </div>
  </div>
</template>

<script>
import gridData from '../grid-data.json'

export default {
  data () {
    return {
      data: gridData,
      grid: {
        sortable: true,
        selection: 'none'
      },
      columns: [
        {
          label: 'Date',
          field: 'isodate',
          style: 'width: 100px',
          formatter (value) {
            return new Date(value).toLocaleString()
          }
        },
        {
          label: 'Source',
          field: 'source',
          style: 'width: 100px'
        },
        {
          label: 'Service',
          field: 'serviceable',
          formatter (value) {
            if (value === 'Informational') {
              return '<i>info</i>'
            }
            return value
          },
          style: 'color: green; width: 100px',
          classes: 'text-center'
        },
        {
          label: 'Log Number',
          field: 'log_number',
          style: 'width: 100px'
        },
        {
          label: 'Message',
          field: 'message',
          style: 'width: 700px'
        }
      ],
      selectionActions: [
        {
          label: 'View 1',
          handler (selectedRows) {
            console.dir(selectedRows)
          }
        },
        {
          label: 'View 2',
          handler (selectedRows) {
            console.dir(selectedRows)
          }
        }
      ]
    }
  },
  methods: {
    openSettings () {
      this.$refs.gridModal.show()
    }
  }
}
</script>
