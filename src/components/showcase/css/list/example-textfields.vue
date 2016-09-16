<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="list-label">Textboxes</div>
        <div class="item two-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <input class="full-width">
          </div>
        </div>

        <hr>
        <div class="item two-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <input placeholder="Placeholder" class="full-width">
          </div>
        </div>

        <hr>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content row items-center wrap">
            <div style="margin-right: 10px;" class="item-label">Label:</div>
            <input class="auto">
          </div>
        </div>

        <hr>
        <div class="item three-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <div class="stacked-label">
              <input class="full-width">
              <label>Stacked Label</label>
            </div>
          </div>
        </div>

        <hr>
        <div class="item three-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <div class="floating-label">
              <input required class="full-width">
              <label>Floating Label</label>
            </div>
          </div>
        </div>

        <hr>
        <div class="list-label">Textareas</div>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <textarea class="full-width"></textarea>
          </div>
        </div>

        <hr>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <div style="margin-right: 10px;" class="item-label">Label:</div>
            <textarea class="full-width"></textarea>
          </div>
        </div>

        <hr>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <div class="stacked-label">
              <textarea class="full-width"></textarea>
              <label>Stacked Label</label>
            </div>
          </div>
        </div>

        <hr>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <div class="floating-label">
              <textarea required class="full-width"></textarea>
              <label>Floating Label</label>
            </div>
          </div>
        </div>

        <hr>

        <div class="list-label">Numeric</div>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <span class="item-label">Number:</span>
            <quasar-numeric :model.sync="number"></quasar-numeric>
          </div>
        </div>
        <hr class="inset">
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <span class="item-label">Number:</span>
            <quasar-numeric :model.sync="number"></quasar-numeric>
          </div>
        </div>

        <hr>

        <div class="list-label">Chips Textbox</div>
        <div class="item multiple-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <quasar-chips :model.sync="chips" placeholder="Type names"></quasar-chips>
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
      number: 123,
      chips: ['Joe']
    }
  }
}
</script>
