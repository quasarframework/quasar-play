<template>
  <div class="column items-center">
    <q-card style="margin-top: 25px; width: 700px; max-width: 100%;">
      <q-card-title class="text-center">
        Configure Layout View
        <q-chip slot="subtitle" tag color="primary" style="margin-top: 15px">
          view: {{ view }}
        </q-chip>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row items-center justify-center no-border">
            Header
          </div>
          <div class="col column group items-center justify-center">
            <q-radio v-model="topleft" val="l" label="l" />
            <q-radio v-model="topleft" val="L" label="L" />
            <q-radio v-model="topleft" val="h" label="h" />
            <q-radio v-model="topleft" val="H" label="H" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio v-model="topcenter" val="h" label="h" />
            <q-radio v-model="topcenter" val="H" label="H" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio v-model="topright" val="r" label="r" />
            <q-radio v-model="topright" val="R" label="R" />
            <q-radio v-model="topright" val="h" label="h" />
            <q-radio v-model="topright" val="H" label="H" />
          </div>
        </div>

        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row items-center justify-center no-border">
            Middle
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="orange" v-model="middleleft" val="l" label="l" />
            <q-radio color="orange" v-model="middleleft" val="L" label="L" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="orange" v-model="middlecenter" val="p" label="p" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="orange" v-model="middleright" val="r" label="r" />
            <q-radio color="orange" v-model="middleright" val="R" label="R" />
          </div>
        </div>

        <div class="doc-layout-grid row justify-center">
          <div class="doc-row-definition row items-center justify-center no-border">
            Footer
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="secondary" v-model="bottomleft" val="l" label="l" />
            <q-radio color="secondary" v-model="bottomleft" val="L" label="L" />
            <q-radio color="secondary" v-model="bottomleft" val="f" label="f" />
            <q-radio color="secondary" v-model="bottomleft" val="F" label="F" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="secondary" v-model="bottomcenter" val="f" label="f" />
            <q-radio color="secondary" v-model="bottomcenter" val="F" label="F" />
          </div>
          <div class="col column group items-center justify-center">
            <q-radio color="secondary" v-model="bottomright" val="r" label="r" />
            <q-radio color="secondary" v-model="bottomright" val="R" label="R" />
            <q-radio color="secondary" v-model="bottomright" val="f" label="f" />
            <q-radio color="secondary" v-model="bottomright" val="F" label="F" />
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

    <q-card style="margin-top: 25px; width: 700px; max-width: 100%;">
      <q-card-title class="text-center">
        Configure Layout Content
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="group column">
          <q-checkbox v-model="pageScroll" label="Add page content so it's scrollable" />
          <q-checkbox v-model="leftScroll" label="Add left panel content so it's scrollable" />
          <q-checkbox v-model="rightScroll" label="Add right panel content so it's scrollable" />
        </div>
      </q-card-main>
    </q-card>

    <div v-if="pageScroll" style="margin-top: 25px;">
      <p class="caption" v-for="n in 50">
        <em>Page has intended scroll</em>
      </p>
    </div>
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
  QChip
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
    QChip
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
      leftScroll: true,
      rightScroll: true
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
