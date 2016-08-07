import Vue from 'vue'
import Error404 from 'src/components/error404'

describe('error404.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><error404></error404></div>',
      components: { Error404 }
    }).$mount()
    expect(vm.$el.querySelector('h1').textContent).to.contain('Oops')
  })
})
