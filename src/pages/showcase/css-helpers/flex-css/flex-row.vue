<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <div class="row justify-center">
        <q-alert
          color="warning"
          v-if="!$q.platform.is.desktop || $q.platform.within.iframe"
          inline
          class="q-mb-lg"
        >
          Best viewed on a desktop.
        </q-alert>
      </div>

      <div class="flex-row-docs">
        Utilize breakpoint-specific column classes for equal-width columns. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

        <h4>Equal-width</h4>
        For example, here are two grid layouts that apply to every device and viewport, from xs to xl.

        <div class="doc-container">
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>

        <h4>Setting one column width</h4>
        Auto-layout for flexbox grid columns also means you can set the width of one column and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline widths. Note that the other columns will resize no matter the width of the center column.

        <div class="doc-container">
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col-6">
              .col-6 (wider)
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col-5">
              .col-5 (wider)
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>

        <h4>Variable width content</h4>
        Using the col-{breakpoint}-auto classes, columns can size itself based on the natural width of its content. This is super handy with single line content like inputs, numbers, etc (see last example on this page). This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven column sizes as viewport width changes.

        <div class="doc-container with-bg">
          <div class="row justify-center">
            <div class="col-12 col-md-2">
              .col-12 .col-md-2
            </div>
            <div class="col-12 col-md-auto">
              .col-12 .col-md-auto (Variable width content)
            </div>
            <div class="col-12 col-md-2">
              .col-12 .col-md-2
            </div>
          </div>
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col-12 col-md-auto">
              .col-12 .col-md-auto (Variable width content)
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>

        <h3>Responsive classes</h3>
        The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

        <h4>All breakpoints</h4>
        For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.

        <div class="doc-container">
          <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
          </div>
          <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
          </div>
        </div>

        <h4>Stacked to horizontal</h4>
        Using a combination of .col-12 and .col-md-* classes, you can create a basic grid system that starts out stacked on small devices before becoming horizontal on desktop (medium) devices.

        <div class="doc-container">
          <div class="row">
            <div class="col-12 col-md-8">col-12 col-md-8</div>
            <div class="col-12 col-md-4">col-12 col-md-4</div>
          </div>
          <div class="row">
            <div class="col-12 col-md">col-12 col-md</div>
            <div class="col-12 col-md">col-12 col-md</div>
            <div class="col-12 col-md">col-12 col-md</div>
          </div>
        </div>

        <h4>Mix and match</h4>
        Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.
        <div class="doc-container">
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <div class="row">
            <div class="col col-md-8">.col .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          </div>

          <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <div class="row">
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          </div>

          <!-- Columns are always 50% wide, on mobile and desktop -->
          <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
          </div>
        </div>

        <h3>Alignment</h3>
        Use flexbox alignment utilities to vertically and horizontally align columns.

        <h4>Vertical alignment</h4>
        <div class="doc-container minheight-rows with-bg">
          <p>Class: items-start</p>
          <div class="row items-start">
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
          </div>
        </div>
        <div class="doc-container minheight-rows with-bg">
          <p>Class: items-center</p>
          <div class="row items-center">
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
          </div>
        </div>
        <div class="doc-container minheight-rows with-bg">
          <p>Class: items-end</p>
          <div class="row items-end">
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three cols
            </div>
          </div>
        </div>

        <div class="doc-container minheight-rows with-bg">
          <p>Self Alignment</p>
          <div class="row">
            <div class="col self-start">
              .self-start
            </div>
            <div class="col self-center">
              .self-center
            </div>
            <div class="col self-end">
              .self-end
            </div>
          </div>
        </div>

        <h4>Horizontal alignment</h4>

        <div class="doc-container with-bg">
          <p>Class: justify-start</p>
          <div class="row justify-start">
            <div class="col-4">
              One of two cols
            </div>
            <div class="col-4">
              One of two cols
            </div>
          </div>
        </div>
        <div class="doc-container with-bg">
          <p>Class: justify-center</p>
          <div class="row justify-center">
            <div class="col-4">
              One of two cols
            </div>
            <div class="col-4">
              One of two cols
            </div>
          </div>
        </div>
        <div class="doc-container with-bg">
          <p>Class: justify-end</p>
          <div class="row justify-end">
            <div class="col-4">
              One of two cols
            </div>
            <div class="col-4">
              One of two cols
            </div>
          </div>
        </div>
        <div class="doc-container with-bg">
          <p>Class: justify-around</p>
          <div class="row justify-around">
            <div class="col-4">
              One of two cols
            </div>
            <div class="col-4">
              One of two cols
            </div>
          </div>
        </div>
        <div class="doc-container with-bg">
          <p>Class: justify-between</p>
          <div class="row justify-between">
            <div class="col-4">
              One of two cols
            </div>
            <div class="col-4">
              One of two cols
            </div>
          </div>
        </div>

        <h4>Column wrapping</h4>
        If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

        <div class="doc-container with-bg">
          <div class="row">
            <div class="col-9">.col-9</div>
            <div class="col-6">.col-6<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
            <div class="col-5">.col-5<br>Subsequent columns continue along the new line.</div>
          </div>
        </div>

        <div class="doc-container">
          <div class="row">
            <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

            <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
            <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
          </div>
        </div>

        <h3>Reordering</h3>

        <h4>Reverse</h4>

        Class: reverse
        <div class="doc-container">
          <div class="row reverse">
            <div class="col">
              First, but last
            </div>
            <div class="col">
              Second, unchanged
            </div>
            <div class="col">
              Third, but first
            </div>
          </div>
        </div>

        <h4>Flex order</h4>
        Use flexbox utilities for controlling the visual order of your content.

        <div class="doc-container">
          <div class="row">
            <div class="col order-none">
              First, but unordered<br>(.order-none)
            </div>
            <div class="col order-last">
              Second, but last<br>(.order-last)
            </div>
            <div class="col order-first">
              Third, but first<br>(.order-first)
            </div>
          </div>
        </div>

        Or you could add CSS with "order: N" for a specific order.

        <h4>Offsetting columns</h4>
        Move columns to the right using .offset-md-* classes. These classes increase the left margin of a column by * columns. For example, .offset-md-4 moves .col-md-4 over four columns.

        <div class="doc-container with-bg">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
          </div>
          <div class="row">
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
          </div>
        </div>

        <h3>Nesting</h3>
        To nest your content with the default grid, add a new .row and set of .col-sm-* columns within an existing .col-sm-* column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

        <div class="doc-container">
          <div class="row">
            <div class="col-sm-9">
              <p>Level 1: .col-sm-9</p>
              <div class="row">
                <div class="col-8 col-sm-6">
                  Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                  Level 2: .col-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="doc-container doc-container-small-padding">
          <div class="row">
            <div class="col-7">
              <div class="row no-wrap">
                <div class="col-8">
                  <div class="row">
                    <div class="col-4">&nbsp;</div>
                    <div class="col-8">&nbsp;</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="row">
                    <div class="col">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6">&nbsp;</div>
                    <div class="col-4">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus">
@import '~variables'

.flex-row-docs
  h3
    padding-bottom 4px
    border-bottom 1px solid rgba(0, 0, 0, .2)
  .row > div
    padding 10px 15px
    background rgba(86,61,124,.15)
    border 1px solid rgba(86,61,124,.2)
  .row + .row
    margin-top 1rem
  .doc-container
    padding 15px
    max-height 1000px
  .minheight-rows .row
    height 5rem
  .with-bg .row
    background rgba(255,0,0,.1)
  @media (max-width $breakpoint-xs-max)
    .doc-container-small-padding
      .row > div
        padding 8px 3px
</style>
