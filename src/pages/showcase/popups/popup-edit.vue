<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Click on names & calories cells.</p>
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
        </q-tr>
      </q-table>
    </div>
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
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true }
      ]
    }
  }
}
</script>
