<template>
  <div>
    <div class="layout-padding">
      <h5>List with Radios</h5>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Option 1</div>
            <quasar-radio :model.sync="radioModel" value="opt1"></quasar-radio>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Option 2</div>
            <quasar-radio :model.sync="radioModel" value="opt2"></quasar-radio>
          </div>
        </label>
      </div>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <quasar-radio :model.sync="radioModel" value="opt1"></quasar-radio>
          <div class="item-content">
            Option 1
          </div>
        </label>
        <label class="item">
          <quasar-radio :model.sync="radioModel" value="opt2"></quasar-radio>
          <div class="item-content">
            Option 2
          </div>
        </label>
      </div>

      <h5>List with Checkboxes</h5>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Quasar Framework</div>
            <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Quasar Framework</div>
            <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          </div>
        </label>
      </div>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Quasar Framework
          </div>
        </label>
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Quasar Framework
          </div>
        </label>
      </div>

      <h5>List with Toggles</h5>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Quasar Framework</div>
            <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Quasar Framework</div>
            <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
          </div>
        </label>
      </div>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
          <div class="item-content">
            Quasar Framework
          </div>
        </label>
        <label class="item">
          <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
          <div class="item-content">
            Quasar Framework
          </div>
        </label>
      </div>

      <h5>List with Ranges</h5>

      <div class="list item-delimiter bordered">
        <div class="item">
          <i>volume_up</i>
          <div class="item-content">
            <span class="item-value item-right-margin">1</span>
            <quasar-range :model.sync="rangeModel" :min="1" :max="10"></quasar-range>
            <span class="item-value item-left-margin">10</span>
            <div class="item-left-margin" style="font-weight: bold">{{rangeModel}}</div>
          </div>
        </div>
        <div class="item">
          <i class="item-right-margin">volume_down</i>
          <quasar-range :model.sync="rangeModel" :min="1" :max="10"></quasar-range>
          <i class="item-left-margin">volume_up</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioModel: 'opt1',
      checkboxModel: false,
      toggleModel: false,
      rangeModel: 4
    }
  }
}
</script>
