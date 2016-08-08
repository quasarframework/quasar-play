<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{checked}}</em></span>
      </div>

      <br><br>

      <h5>Standalone</h5>
      <label>
        <quasar-checkbox :model.sync="checked"></quasar-checkbox>
        Checkbox Label
      </label>
      <br>
      <label>
        <quasar-checkbox :model.sync="checked" class="teal"></quasar-checkbox>
        Checkbox Label
      </label>
      <br>
      <label>
        <quasar-checkbox :model.sync="checked" class="orange"></quasar-checkbox>
        Checkbox Label
      </label>
      <br>
      <label>
        <quasar-checkbox :model.sync="checked" class="dark"></quasar-checkbox>
        Checkbox Label
      </label>

      <br><br>
      <h5>Inside of a List</h5>
      <div class="list bordered inner-delimiter">
        <label class="item">
          <quasar-checkbox :model.sync="checked"></quasar-checkbox>
          <div class="item-content">
            Checkbox Label
          </div>
        </label>
        <label class="item">
          <quasar-checkbox :model.sync="checked"></quasar-checkbox>
          <div class="item-content">
            Checkbox Label
          </div>
        </label>
      </div>
      <div class="list bordered inner-delimiter">
        <label class="item">
          <div class="item-content">
            <div class="item-label">
              Checkbox Label
            </div>
            <quasar-checkbox :model.sync="checked"></quasar-checkbox>
          </div>
        </label>
        <label class="item">
          <div class="item-content">
            <div class="item-label">
              Checkbox Label
            </div>
            <quasar-checkbox :model.sync="checked"></quasar-checkbox>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
