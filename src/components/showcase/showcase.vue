<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <template v-for="category in categories">
          <div class="list-label">
            {{ category.title }}
          </div>
          <div
            class="item item-link item-inset-delimiter"
            v-for="feature in category.features"
            v-link="'/showcase/' + category.hash + '/' + feature.hash"
          >
            <i class="item-primary">{{ feature.icon }}</i>
            <div class="item-content has-secondary">
              <div>{{ feature.title }}</div>
            </div>
            <i class="item-secondary">chevron_right</i>
          </div>
          <hr>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import categories from './categories'

export default {
  data () {
    return {
      categories
    }
  }
}
</script>
