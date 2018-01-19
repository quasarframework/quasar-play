<template>
  <q-page padding>
    <p class="caption">
      QEditor toolbar is configurable. Add only what functionality you need to it.
      <br>The following is an example with most of toolbar buttons provided by default.
    </p>
    <p>
      <q-toggle v-model="readonly" label="Read only" class="q-mr-sm" />
      <q-toggle v-model="disable" label="Disable" />
    </p>
    <q-editor
      v-model="model"
      :readonly="readonly"
      :disable="disable"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.i18n.editor.formatting,
            icon: $q.icon.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
          },
          {
            label: $q.i18n.editor.fontSize,
            icon: $q.icon.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
          },
          {
            label: $q.i18n.editor.defaultFont,
            icon: $q.icon.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
        [
          {
            label: $q.i18n.editor.align,
            icon: $q.icon.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.i18n.editor.align,
            icon: $q.icon.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['undo', 'redo']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />

    <h4 class="q-mt-lg">Let's customize</h4>
    <p class="caption">
      Overriding & extending default toolbar buttons definitions.
      <br>This particular case:
      <ul>
        <li>overrides bold & italic default definitions (label, icon, their tooltips)</li>
        <li>adds a new custom command which basically is same as "italic"</li>
        <li>adds "save", "upload" & "spellcheck" commands</li>
        <li>adds a disabled button</li>
        <li>adds a custom "Import" button</li>
      </ul>
    </p>
    <q-editor
      v-model="model"
      :toolbar="[
        ['bold', 'italic'],
        ['customItalic'],
        ['save', 'upload'],
        ['spellcheck'],
        ['disabledButton'],
        ['custom_btn']
      ]"
      :definitions="{
        bold: {cmd: 'bold', label: 'Bold', icon: null, tip: 'My bold tooltip'},
        italic: {cmd: 'italic', icon: 'border_color', tip: 'My italic tooltip'},
        customItalic: {cmd: 'italic', icon: 'camera_enhance', tip: 'Italic'},
        save: {tip: 'Save your work', icon: 'save', label: 'Save', handler: saveWork},
        upload: {tip: 'Upload to cloud', icon: 'cloud_upload', label: 'Upload', handler: upload},
        spellcheck: {tip: 'Run spell-check', icon: 'spellcheck', handler: spellCheck},
        disabledButton: {tip: 'I am disabled...', disable: true, icon: 'cloud_off'}
      }"
    >
      <q-btn
        slot="custom_btn"
        dense
        color="secondary"
        icon="import_contacts"
        label="Import"
        @click="importSomething"
      />
    </q-editor>

    <h4 class="q-mt-lg">Custom style</h4>
    <q-editor
      v-model="model"
      toolbar-text-color="white"
      toolbar-toggle-color="yellow-8"
      toolbar-flat
      toolbar-bg="primary"
      :toolbar="[
        ['bold', 'italic', 'underline'],
        [{
          label: $q.i18n.editor.formatting,
          icon: $q.icon.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"
    />

    <p class="caption">Types of dropdowns</p>
    <q-editor
      v-model="model"
      :toolbar="[
        [
          {
            label: 'Icons & Label',
            icon: 'filter_1',
            fixedLabel: true,
            fixedIcon: true,
            options: ['bold', 'italic', 'strike', 'underline']
          }
        ],
        [
          {
            label: 'Only label',
            icon: 'filter_2',
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: ['bold', 'italic', 'strike', 'underline']
          }
        ],
        [
          {
            label: 'Only icons',
            icon: 'filter_3',
            fixedLabel: true,
            fixedIcon: true,
            list: 'only-icons',
            options: ['bold', 'italic', 'strike', 'underline']
          }
        ]
      ]"
    />

    <p class="caption">
      Dropdowns with exclusive options (user can pick only one option)
      <ul>
        <li>First has icon and label changing based on current selection</li>
        <li>Second has fixed label but dynamic icon</li>
        <li>Third has fixed icon but dynamic label</li>
      </ul>
    </p>
    <q-editor
      v-model="model"
      :toolbar="[
        [
          {
            label: 'Dynamic label',
            icon: 'help_outline',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        [
          {
            label: 'Static label',
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        [
          {
            label: 'Some label',
            icon: 'account_balance',
            fixedIcon: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ]
      ]"
    />
  </q-page>
</template>

<script>
export default {
  data: () => ({
    readonly: false,
    disable: false,
    model:
      '<h3>Header 3</h3><div>Normal text; <b>bold</b>; <i>italic</i>; <strike>strike-trough</strike>; <u style="font-weight: bold; font-style: italic;">bold, italic and underline</u>;</div><div><u>A <i style="font-weight: bold;">mo</i>re <i style="font-weight: bold;">com</i>plica</u>ted example.</div><div><br></div><div>Link to <a href="http://quasar-framework.org">Quasar Documentation</a></div><div><font face="Courier New">Using "Courier New" font.</font></div><div><ul><li>Vue</li><li>Webpack</li></ul><ol><li>Website</li><li>App</li><ol><li>Mobile (Cordova)</li><li>Electron</li></ol></ol><div style="text-align: center;">Center aligned text</div></div><div style="text-align: right;">Right aligned</div>'
  }),
  methods: {
    saveWork () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: 'I guess something got saved.'
      })
    },
    upload () {
      this.$q.notify({
        icon: 'cloud_upload',
        color: 'secondary',
        message: 'Hmm, will upload at another time, ok?'
      })
    },
    spellCheck () {
      this.$q.notify({
        icon: 'spellcheck',
        color: 'secondary',
        message: `I'll sure run the spellcheck. Later.`
      })
    },
    importSomething () {
      this.$q.notify({
        color: 'tertiary',
        message: `Importing... or not`
      })
    },
    add () {}
  }
}
</script>
