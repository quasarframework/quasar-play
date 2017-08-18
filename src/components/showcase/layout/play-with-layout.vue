<template>
  <div class="layout-padding">
    <p class="caption text-center iframe-only cordova-only" style="max-width: 80vw">
      Play on a desktop to fully understand Layout.
    </p>
    <div class="flex justify-center">
      <div style="width: 400px; max-width: 90vw">
        <q-card>
          <q-card-title class="text-center">
            Layout View
            <q-chip slot="subtitle" tag color="primary" style="margin-top: 15px">
              view: {{ view }}
            </q-chip>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="doc-layout-grid row justify-center">
              <div class="doc-row-definition row flex-center no-border">
                Header
              </div>
              <div class="col column group flex-center">
                <q-radio color="orange" v-model="topleft" val="l" label="l" />
                <q-radio color="orange" v-model="topleft" val="h" label="h" />
              </div>
              <div class="col column group flex-center">
                <q-radio v-model="topcenter" val="h" label="h" />
                <q-radio v-model="topcenter" val="H" label="H" />
              </div>
              <div class="col column group flex-center">
                <q-radio color="secondary" v-model="topright" val="r" label="r" />
                <q-radio color="secondary" v-model="topright" val="h" label="h" />
              </div>
            </div>

            <div class="doc-layout-grid row justify-center">
              <div class="doc-row-definition row flex-center no-border">
                Middle
              </div>
              <div class="col column group flex-center">
                <q-radio color="orange" v-model="middleleft" val="l" label="l" />
                <q-radio color="orange" v-model="middleleft" val="L" label="L" />
              </div>
              <div class="col column group flex-center">
                <q-radio v-model="middlecenter" val="p" label="p" />
              </div>
              <div class="col column group flex-center">
                <q-radio color="secondary" v-model="middleright" val="r" label="r" />
                <q-radio color="secondary" v-model="middleright" val="R" label="R" />
              </div>
            </div>

            <div class="doc-layout-grid row justify-center">
              <div class="doc-row-definition row flex-center no-border">
                Footer
              </div>
              <div class="col column group flex-center">
                <q-radio color="orange" v-model="bottomleft" val="l" label="l" />
                <q-radio color="orange" v-model="bottomleft" val="f" label="f" />
              </div>
              <div class="col column group flex-center">
                <q-radio v-model="bottomcenter" val="f" label="f" />
                <q-radio v-model="bottomcenter" val="F" label="F" />
              </div>
              <div class="col column group flex-center">
                <q-radio color="secondary" v-model="bottomright" val="r" label="r" />
                <q-radio color="secondary" v-model="bottomright" val="f" label="f" />
              </div>
            </div>

            <div class="doc-layout-grid row justify-center">
              <div class="doc-row-definition no-border">&nbsp;</div>
              <div class="col no-border row justify-center">
                Left
              </div>
              <div class="col no-border row justify-center">
                Center
              </div>
              <div class="col no-border row justify-center">
                Right
              </div>
            </div>
          </q-card-main>
        </q-card>
      </div>

      <div style="width: 400px; max-width: 90vw">
        <q-card>
          <q-card-title class="text-center">
            More Configuration
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-field label="Left Drawer Breakpoint" :label-width="8">
              <q-input
                type="number"
                v-model="layoutStore.leftBreakpoint"
                align="right"
                suffix="px"
              />
            </q-field>
            <q-field label="Right Drawer Breakpoint" :label-width="8">
              <q-input
                type="number"
                v-model="layoutStore.rightBreakpoint"
                align="right"
                suffix="px"
              />
            </q-field>
          </q-card-main>
          <q-card-separator />
          <q-card-main>
            <div class="group column">
              <q-checkbox v-model="pageScroll" label="Add page content so it's scrollable" />
              <q-checkbox color="orange" v-model="layoutStore.leftScroll" label="Add left panel content so it's scrollable" />
              <q-checkbox color="secondary" v-model="layoutStore.rightScroll" label="Add right panel content so it's scrollable" />
            </div>
          </q-card-main>
          <q-card-separator />
          <q-card-main>
            <div class="group column">
              <q-checkbox v-model="layoutStore.hideTabs" label="Hide Tabs so you can see a resize in action" />
              <q-checkbox
                v-model="layoutStore.reveal"
                label="Hide header and when lower on the page, show header with a short scroll up ('reveal' property)"
              />
            </div>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div v-if="pageScroll" class="text-center" style="margin-top: 25px;">
      <p class="caption" v-for="n in 50">
        <em>Page has intended scroll</em>
      </p>
    </div>

    <q-fixed-position corner="top-right" :offset="[18, 18]">
      <q-btn round small color="secondary" icon="mail_outline" class="animate-pop" />
    </q-fixed-position>

    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round small color="secondary" icon="phone" class="animate-pop" />
    </q-fixed-position>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QRadio,
  QCheckbox,
  QChip,
  QField,
  QInput,
  QBtn,
  QFixedPosition
} from 'quasar'

import layoutStore from './layout-store'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QRadio,
    QCheckbox,
    QChip,
    QField,
    QInput,
    QBtn,
    QFixedPosition
  },
  data () {
    const v = layoutStore.view
    return {
      topleft: v[0],
      topcenter: v[1],
      topright: v[2],
      middleleft: v[4],
      middlecenter: v[5],
      middleright: v[6],
      bottomleft: v[8],
      bottomcenter: v[9],
      bottomright: v[10],

      pageScroll: true,
      layoutStore
    }
  },
  computed: {
    view () {
      const
        top = `${this.topleft}${this.topcenter}${this.topright}`,
        middle = `${this.middleleft}${this.middlecenter}${this.middleright}`,
        bottom = `${this.bottomleft}${this.bottomcenter}${this.bottomright}`

      return `${top} ${middle} ${bottom}`
    }
  },
  watch: {
    view (v) {
      layoutStore.view = v
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.doc-layout-grid
  > div
    border 1px solid $grey-4
    border-radius 5px
  .q-radio
    min-width 40px
  > div + div
    margin-left 10px
  & + &
    margin-top 10px
.doc-row-definition
  width 45px
</style>
