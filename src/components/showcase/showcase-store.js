export default {
  state: {
    backRoute: '/',
    hash: '',
    icon: '',
    title: 'Quasar Framework Showcase',
    tabs: []
  },
  set (newState) {
    this.state.title = newState.title || ''
    this.state.hash = newState.hash || ''
    this.state.icon = newState.icon || ''
    this.state.backRoute = newState.backRoute || '/showcase'
    this.state.tabs = newState.tabs || []
  }
}
