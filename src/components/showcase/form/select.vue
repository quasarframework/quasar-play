<template>
  <div>
    <div class="layout-padding">
      <h5>Standalone</h5>
      <quasar-select :model.sync="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></quasar-select>

      <h5>Inside of a List</h5>
      <div class="list item-delimiter bordered">
        <div class="list-header">Single Selection: <em>{{select}}</em></div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Company</div>
            <quasar-select :model.sync="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></quasar-select>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Company</div>
            <quasar-select :model.sync="select" :options="selectOptions" ok-label="Pick"></quasar-select>
          </div>
        </div>
        <div class="list-header">Multiple Selection: <em>{{multipleSelect}}</em></div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Companies</div>
            <quasar-select multiple :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></quasar-select>
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <div class="item-label">Companies</div>
            <quasar-select multiple :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></quasar-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
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
      ]
    }
  }
}
</script>
