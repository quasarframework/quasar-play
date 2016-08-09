<template>
  <div>
    <div class="layout-padding">
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
    </div>
  </div>
</template>

<script>
import { Modal } from 'quasar'
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
      let self = this

      Modal.create({
        template: `
<div class="list platform-delimiter">
  <div class="list-header">
    Selection
  </div>
  <label class="item item-link">
    <i>view_module</i>
    <div class="item-content">
      <div class="item-label">No Selection</div>
      <quasar-radio :model.sync="grid.selection" class="secondary" value="none"></quasar-radio>
    </div>
  </label>
  <label class="item item-link">
    <i>done</i>
    <div class="item-content">
      <div class="item-label">Single</div>
      <quasar-radio :model.sync="grid.selection" value="single"></quasar-radio>
    </div>
  </label>
  <label class="item item-link">
    <i>done_all</i>
    <div class="item-content">
      <div class="item-label">Multiple</div>
      <quasar-radio :model.sync="grid.selection" value="multiple"></quasar-radio>
    </div>
  </label>
  <div class="list-header">
    Other Options
  </div>
  <label class="item item-link">
    <i>swap_vert</i>
    <div class="item-content">
      <div class="item-label">Sortable Columns</div>
      <quasar-checkbox :model.sync="grid.sortable" class="secondary"></quasar-checkbox>
    </div>
  </label>
</div>
<div class="row justify-end" style="margin-top: 25px;">
  <button class="primary clear" @click="close()">Close</button>
</div>
        `,
        data () {
          return {
            grid: self.grid
          }
        }
      }).set({
        minimized: true
      }).css({
        padding: '20px'
      }).show()
    }
  }
}
</script>
