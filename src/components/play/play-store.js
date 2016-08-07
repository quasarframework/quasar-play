import Vue from 'vue'
import { LocalStorage } from 'quasar'

export default {
  state: LocalStorage.get.item('playURLs') || {},
  set (id, item) {
    Vue.set(this.state, id, item)
    LocalStorage.set('playURLs', this.state)
  },
  del (id) {
    Vue.delete(this.state, id)
    LocalStorage.set('playURLs', this.state)
  }
}
