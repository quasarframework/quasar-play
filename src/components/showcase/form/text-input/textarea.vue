<template>
  <div>
    <div class="layout-padding">
      <p>Model: '<em>{{message}}</em>'</p>
      <textarea v-model="message" placeholder="Textarea Label"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>
