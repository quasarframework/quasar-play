<template>
  <q-page padding>
    <blockquote>
      <small>
        This view contains two drawer panels. One on left and one on right.
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span> on menu buttons from top-left
        or top-right corners of the screen, or swipe the
        Drawers into view from the left or right edge of screen.
      </small>
    </blockquote>
    <p class="caption">
      The Drawer Panel (also known as a Sidebar) is the element on the left
      side (or right side) of your screen, usually used for Navigation, which gets
      hidden on smaller screens and is shown alongside the Page content on wide
      enough screens. Breakpoints are configurable in JS.
    </p>
    <p class="caption">
      Drawer Panels can use a QScrollArea for enhancing design and behavior of
      scrollbar. Furthermore, due to some Layout features, they can scroll along
      the content should you wish to. Play with the Layout to see this in effect.
    </p>
    <p class="caption">
      Drawers can be activated by swiping them into view from the edge of the screen
      or by clicking/tapping on menu buttons. Their position is based on how you
      structure the layout template. You can, for instance, display a Drawer on right
      side of screen on big screens but swipe them from left on smaller screens.
      It's up to you and where you place the Drawer HTML tag.
    </p>
  </q-page>
</template>
