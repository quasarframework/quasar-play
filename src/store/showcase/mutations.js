export const updateDrawerState = (state, opened) => {
  state.drawerState = opened
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
