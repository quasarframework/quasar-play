<template>
  <div>
    <div class="layout-padding">
      <div class="list">
        <div class="list-label">Recent chats</div>
        <div class="item" v-for="n in 3">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            John Doe
          </div>
          <i class="item-secondary">
            chat_bubble
          </i>
        </div>
        <hr>
        <div class="list-label">Previous chats</div>
        <div class="item" v-for="n in 3">
          <img class="item-primary" :src="'statics/guy-avatar.png'">
          <div class="item-content">
            Jack Doe
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
