<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Standalone</p>
      <input v-model="username">

      <p class="caption">Inside of a List</p>
      <div class="list inner-delimiter bordered">
        <div class="list-header">Fixed Label</div>
        <div class="item fixed-label">
          <div class="item-content">
            <label for="user1" class="item-label">Username</label>
            <input id="user1" v-model="username">
          </div>
        </div>
        <div class="item fixed-label">
          <div class="item-content">
            <label for="pass1" class="item-label">Password</label>
            <input id="pass1" v-model="password" type="password">
          </div>
        </div>
      </div>

      <div class="list inner-delimiter bordered">
        <div class="list-header">Floating Label</div>
        <div class="item floating-label">
          <div class="item-content">
            <input v-model="username" required>
            <label>Username</label>
          </div>
        </div>
        <div class="item floating-label">
          <div class="item-content">
            <input v-model="password" type="password" required>
            <label>Password</label>
          </div>
        </div>
      </div>

      <div class="list inner-delimiter bordered">
        <div class="list-header">Inline Label</div>
        <div class="item inline-label">
          <label class="item-content">
            Username
            <input v-model="username">
          </label>
        </div>
        <div class="item inline-label">
          <label class="item-content">
            Password
            <input v-model="password" type="password">
          </label>
        </div>
      </div>

      <div class="list inner-delimiter bordered">
        <div class="list-header">Placeholder Label</div>
        <div class="item">
          <div class="item-content">
            <input v-model="username" placeholder="Username">
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <input v-model="password" type="password" placeholder="Password">
          </div>
        </div>
      </div>

      <div class="list inner-delimiter bordered">
        <div class="list-header">Stacked Label</div>
        <div class="item stacked-label">
          <div class="item-content">
            <input id="user4" v-model="username" required>
            <label for="user4">Username</label>
          </div>
        </div>
        <div class="item stacked-label">
          <div class="item-content">
            <input id="pass4" v-model="password" type="password" required>
            <label for="pass4">Password</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.list {
  margin-bottom: 25px;
}
</style>
