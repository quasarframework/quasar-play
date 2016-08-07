import Vue from 'vue'
import Index from 'src/components/index'

describe('index.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><index></index></div>',
      components: { Index }
    }).$mount()
    expect(vm.$el.innerHTML).to.contain('Quasar Play')
  })
})
