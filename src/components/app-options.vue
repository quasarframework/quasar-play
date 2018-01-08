<template>
  <div class="row no-wrap">
    <q-select
      color="amber"
      v-model="lang"
      :options="langOptions"
      dark
      hide-underline
      class="q-mr-sm"
    />
    <q-select
      color="amber"
      v-model="iconSet"
      :options="iconOptions"
      dark
      hide-underline
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: this.$q.i18n.lang,
      langOptions: [
        { label: 'English (US)', value: 'en-us' },
        { label: 'English (UK)', value: 'en-uk' },
        { label: 'Romanian', value: 'ro' },
        { label: 'Chinese (Simplified)', value: 'zh-hans' },
        { label: 'Italian', value: 'it' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'German', value: 'de' },
        { label: 'Indonezian', value: 'id' },
        { label: 'Croatian', value: 'hr' },
        { label: 'Russian', value: 'ru' },
        { label: 'Ukrainian', value: 'uk' },
        { label: 'Polish', value: 'pl' }
      ],

      iconSet: this.$q.icon.name,
      iconOptions: [
        { label: 'Material', value: 'material' },
        { label: 'MDI', value: 'mdi' },
        { label: 'Ionicons', value: 'ionicons' },
        { label: 'Fontawesome', value: 'fontawesome' }
      ]
    }
  },
  watch: {
    lang (lang) {
      import(`quasar-framework/i18n/${lang}`).then(lang => {
        this.$q.i18n.set(lang.default)
      })
    },
    iconSet (set) {
      import(`quasar-framework/icons/${set}`).then(iconSet => {
        this.$q.icon.set(iconSet.default)
      })
    }
  }
}
</script>
