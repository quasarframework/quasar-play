export default {
  state: {
    backRoute: '/',
    icon: '',
    title: 'Quasar Framework Showcase',
    tabs: []
  },
  set (newState) {
    this.state.title = newState.title || ''
    this.state.icon = newState.icon || ''
    this.state.backRoute = newState.backRoute || '/showcase'
    this.state.tabs = newState.tabs || []
  }
}
