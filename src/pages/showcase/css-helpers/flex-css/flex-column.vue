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

      <q-alert icon="warning" color="yellow" class="q-mb-md">
        <p class="caption no-margin text-black">
          Don't use "column" except for cases where you need to divide vertical space in specific amounts. Otherwise use "row" where more than 12 points wraps the content, generating "columns".
        </p>
      </q-alert>
      <q-alert icon="warning" color="yellow" class="q-mb-md">
        <p class="caption no-margin text-black">
          Specify a height on an element with "column" class (eg. "height: 300px", "height: 100%"). It's needed to know what vertical amount of space should be divided.
        </p>
      </q-alert>
      <q-alert icon="warning" color="yellow" style="margin-bottom: 32px">
        <p class="caption no-margin text-black">
          Make sure your content has enough space to be rendered, otherwise it will overflow and break your UI.
        </p>
      </q-alert>

      <div class="flex-col-docs">
        Utilize breakpoint-specific row classes for equal-width rows. Add any number of unit-less classes for each breakpoint you need and every row will be the same height.

        <h4>Equal-width</h4>
        For example, here are two grid layouts that apply to every device and viewport, from xs to xl.

        <div class="doc-container">
          <div class="column" style="height: 150px">
            <div class="col">
              1 of 2
            </div>
            <div class="col">
              1 of 2
            </div>
          </div>
          <div class="column" style="height: 150px">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              1 of 3
            </div>
          </div>
        </div>

        <h4>Setting one row height</h4>
        Auto-layout for flexbox grid rows also means you can set the height of one row and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline heights. Note that the other rows will resize no matter the height of the center row.

        <div class="doc-container">
          <div class="column" style="height: 150px">
            <div class="col">
              .col
            </div>
            <div class="col-5">
              .col-5
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="column" style="height: 250px">
            <div class="col">
              .col
            </div>
            <div class="col-8">
              .col-8
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>

        <h4>Variable height content</h4>
        Using the col-{breakpoint}-auto classes, rows can size itself based on the natural height of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven row sizes as viewport height changes.

        <div class="doc-container with-bg">
          <div class="column justify-center" style="height: 250px">
            <div class="col col-md-4">
              .col .col-md-4
            </div>
            <div class="col-auto">
              .col-auto (Variable height content)
            </div>
            <div class="col col-md-4">
              .col .col-md-4
            </div>
          </div>
          <div class="column" style="height: 250px">
            <div class="col">
              .col
            </div>
            <div class="col-auto">
              .col-auto (Variable height content)
            </div>
            <div class="col col-md-3">
              .col .col-md-3
            </div>
          </div>
        </div>

        <h3>Responsive classes</h3>
        The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your rows on extra small, small, medium, large, or extra large devices however you see fit.

        <h4>All breakpoints</h4>
        For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized row; otherwise, feel free to stick to .col.

        <div class="doc-container">
          <div class="column" style="height: 150px">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
          </div>
          <div class="column" style="height: 150px">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
          </div>
        </div>

        <h4>Mix and match</h4>
        Don’t want your rows to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.
        <div class="doc-container">
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <div class="column" style="height: 150px">
            <div class="col col-md-8">.col .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          </div>

          <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <div class="column" style="height: 150px">
            <div class="col-4 col-md-6">.col-4 .col-md-6</div>
            <div class="col-4 col-md-6">.col-4 .col-md-6</div>
            <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          </div>

          <!-- Columns are always 50% wide, on mobile and desktop -->
          <div class="column" style="height: 150px">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
          </div>
        </div>

        <h3>Alignment</h3>
        Use flexbox alignment utilities to vertically and horizontally align columns.

        <h4>Horizontal alignment</h4>
        <div class="doc-container minheight-column with-bg">
          <p>Class: items-start</p>
          <div class="column items-start" style="height: 150px">
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: items-center</p>
          <div class="column items-center" style="height: 150px">
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: items-end</p>
          <div class="column items-end" style="height: 150px">
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
            <div class="col">
              One of three rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Self Alignment</p>
          <div class="column" style="height: 150px">
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

        <h4>Vertical alignment</h4>
        <div class="doc-container minheight-column with-bg">
          <p>Class: justify-start</p>
          <div class="column justify-start" style="height: 150px">
            <div class="col-4">
              One of two rows
            </div>
            <div class="col-4">
              One of two rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: justify-center</p>
          <div class="column justify-center" style="height: 150px">
            <div class="col-4">
              One of two rows
            </div>
            <div class="col-4">
              One of two rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: justify-end</p>
          <div class="column justify-end" style="height: 150px">
            <div class="col-4">
              One of two rows
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: justify-around</p>
          <div class="column justify-around" style="height: 150px">
            <div class="col-4">
              One of two rows
            </div>
            <div class="col-4">
              One of two rows
            </div>
          </div>
        </div>

        <div class="doc-container minheight-column with-bg">
          <p>Class: justify-between</p>
          <div class="column justify-between" style="height: 150px">
            <div class="col-4">
              One of two rows
            </div>
            <div class="col-4">
              One of two rows
            </div>
          </div>
        </div>

        <h4>Wrapping</h4>
        If more than 12 rows are placed within a single row, each group of extra rows will, as one unit, wrap onto a new column.
        <br><br>
        Wrapping does not ensure width is contained without overflowing, so make sure your content fits.

        <div class="doc-container">
          <div class="column" style="height: 300px; max-height: 100%">
            <div class="col-9">.col-9</div>
            <div class="col-4">
              .col-4
              <br>Since 9 + 4 = 13 &gt; 12,
              <br>this 4-row-wide div
              <br>gets wrapped onto
              <br>a new line as one
              <br>contiguous unit.
            </div>
            <div class="col-6">
              .col-6
              <br>Subsequent rows
              <br>continue along the
              <br>new line.
            </div>
          </div>
        </div>

        <div class="doc-container">
          <div class="column" style="height: 150px">
            <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
            <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>

            <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
            <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
          </div>
        </div>

        <h3>Reordering</h3>

        <h4>Reverse</h4>

        <div class="doc-container">
          <p>Class: reverse</p>
          <div class="column reverse" style="height: 150px">
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
          <div class="column" style="height: 190px">
            <div class="col order-none">
              First, but unordered
              <br>(.order-none)
            </div>
            <div class="col order-last">
              Second, but last
              <br>(.order-last)
            </div>
            <div class="col order-first">
              Third, but first
              <br>(.order-first)
            </div>
          </div>
        </div>

        <h3>Nesting</h3>
        <div class="doc-container nesting-example">
          <div class="column" style="height: 200px">
            <div class="col-auto">.col-auto</div>
            <div class="col column">
              <div class="col-8 col-sm-6">
                .col-8 .col-sm-6
              </div>
              <div class="col-4 col-sm-6">
                .col-4 .col-sm-6
              </div>
            </div>
          </div>
        </div>

        <div class="doc-container nesting-example">
          <div class="column" style="height: 600px">
            <div class="col-8 column">
              <div class="col-8 column">
                <div class="col-4">&nbsp;</div>
                <div class="col-8 column">
                  <div class="col-7">&nbsp;</div>
                  <div class="col-5">&nbsp;</div>
                </div>
              </div>
              <div class="col-4 column">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
              </div>
            </div>
            <div class="col-4 column">
              <div class="col-5">&nbsp;</div>
              <div class="col-7">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus">
.flex-col-docs
  .doc-container
    padding 15px
  .column > div
    padding 10px 15px
    background rgba(86, 61, 124, .15)
    border 1px solid rgba(86, 61, 124, .2)
  .column + .column
    margin-top 1rem
  .nesting-example
    .column + .column
      margin 0
  .minheight-column .column
    min-width 5rem
  .with-bg .column
    background rgba(255, 0, 0, .1)
</style>
