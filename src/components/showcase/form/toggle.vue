<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{checked}}</em></span>
      </div>

      <p class="caption">Standalone</p>
      <label>
        <quasar-toggle :model.sync="checked"></quasar-toggle>
        Toggle Label
      </label>
      <br><br>
      <label>
        <quasar-toggle :model.sync="checked" class="orange"></quasar-toggle>
        Toggle Label
      </label>
      <br><br>
      <label>
        <quasar-toggle :model.sync="checked" class="teal"></quasar-toggle>
        Toggle Label
      </label>
      <br><br>
      <label>
        <quasar-toggle :model.sync="checked" class="dark"></quasar-toggle>
        Toggle Label
      </label>

      <p class="caption">Inside of a List</p>
      <div class="list inner-delimiter bordered">
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Toggle Label</div>
            <quasar-toggle :model.sync="checked" class="purple"></quasar-toggle>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Toggle Label</div>
            <quasar-toggle :model.sync="checked" class="red"></quasar-toggle>
          </div>
        </label>
      </div>

      <div class="list inner-delimiter bordered">
        <label class="item">
          <quasar-toggle :model.sync="checked"></quasar-toggle>
          <div class="item-content">
            Toggle Label
          </div>
        </label>
        <label class="item">
          <quasar-toggle :model.sync="checked"></quasar-toggle>
          <div class="item-content">
            Toggle Label
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
