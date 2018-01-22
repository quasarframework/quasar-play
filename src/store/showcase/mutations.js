export const updateDrawerState = (state, opened) => {
  state.drawerState = opened
}

export const updateOptionsState = (state, opened) => {
  state.optionsState = opened
}

export const updatePageMeta = (state, meta) => {
  state.pageMeta = {
    title: '',
    hash: '',
    icon: '',
    iframeTabs: false,
    backRoute: '/showcase',
    tabs: [],
    ...meta
  }
}
