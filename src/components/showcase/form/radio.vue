<template>
  <div>
    <div class="layout-padding">
      <div class="label bg-secondary text-white">
        Model <span class="right-detail"><em>{{option}}</em></span>
      </div>

      <br><br>

      <h5>Standalone</h5>
      <div class="column">
        <label>
          <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
          Option 1
        </label>
        <label>
          <quasar-radio :model.sync="option" value="opt2" class="teal"></quasar-radio>
          Option 2
        </label>
        <label>
          <quasar-radio :model.sync="option" value="opt3" class="orange"></quasar-radio>
          Option 3
        </label>
      </div>

      <br>
      <h5>Inside of a List</h5>
      <div class="list bordered inner-delimiter">
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Option 1</div>
            <quasar-radio :model.sync="option" value="opt1" class="teal"></quasar-radio>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Option 2</div>
            <quasar-radio :model.sync="option" value="opt2" class="teal"></quasar-radio>
          </div>
        </label>
        <label class="item">
          <i>mail</i>
          <div class="item-content">
            <div class="item-label">Option 3</div>
            <quasar-radio :model.sync="option" value="opt3" class="teal"></quasar-radio>
          </div>
        </label>
      </div>
      <div class="list bordered inner-delimiter">
        <label class="item">
          <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
          <div class="item-content">
              Option 1
          </div>
        </label>
        <label class="item">
          <quasar-radio :model.sync="option" value="opt2"></quasar-radio>
          <div class="item-content">
              Option 2
          </div>
        </label>
        <label class="item">
          <quasar-radio :model.sync="option" value="opt3"></quasar-radio>
          <div class="item-content">
              Option 3
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
      option: 'opt1'
    }
  }
}
</script>

<style>
</style>
