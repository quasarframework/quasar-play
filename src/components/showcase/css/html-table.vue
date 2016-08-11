<template>
  <!-- Place content inside a root node -->
  <div>
    <div class="layout-padding">
      <div v-for="style in styles" style="margin-bottom: 30px; max-width: 400px;">
        <div class="label bg-secondary text-white">
          Class <span class="right-detail"><em>{{style ? style : '*none*'}}</em></span>
        </div>

        <br><br>

        <table :class="style">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>In Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Item #1</td>
              <td>$10.11</td>
              <td>101</td>
            </tr>
            <tr>
              <td>Item #2</td>
              <td>$8.88</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Item #3</td>
              <td>$0.15</td>
              <td>1670</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styles: [
        '',
        'inner-delimiter',
        'bordered',
        'striped',
        'highlight',
        'centered',
        'compact'
      ]
    }
  }
}
</script>

<style>
</style>
