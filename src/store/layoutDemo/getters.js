export const view = state => {
  const
    top = `${state.topleft}${state.topcenter}${state.topright}`,
    middle = `${state.middleleft}${state.middlecenter}${state.middleright}`,
    bottom = `${state.bottomleft}${state.bottomcenter}${state.bottomright}`

  return `${top} ${middle} ${bottom}`
}
