<template>
  <div>
    <div class="layout-padding">
      <p class="light-paragraph">
        You'll learn the <strong>List Item elements</strong> here then you can jump to the other sections
        to see how you can beatifully combine the List elements and List Item elements.
      </p>

      <blockquote>
        <small>
          List Item elements are:
          <em>Primary</em>,
          <em>Secondary</em>,
          <em>Content</em> and <em>Stamp</em>.
          <br>
          Primary and Secondary should only contain one image, one icon, one character or some of the form components. Nothing else.
        </small>
      </blockquote>

      <p class="caption">Primary</p>
      <div class="list item-inset-delimiter">
        <div class="item">
          <i class="item-primary">assignment_ind</i>
          <div class="item-content">Icon as Primary</div>
        </div>
        <div class="item">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content">Avatar as Primary</div>
        </div>
        <div class="item">
          <img class="item-primary thumbnail" :src="'statics/mountains.jpg'">
          <div class="item-content">Thumbnail as Primary</div>
        </div>
        <div class="item">
          <div class="item-primary">Q</div>
          <div class="item-content">One character as Primary</div>
        </div>
      </div>

      <p class="caption">Secondary</p>
      <div class="list">
        <div class="item">
          <div class="item-content has-secondary">Icon as Secondary</div>
          <i class="item-secondary">info</i>
        </div>
        <hr>
        <div class="item">
          <div class="item-content has-secondary">Avatar as Secondary</div>
          <img class="item-secondary" :src="'statics/boy-avatar.png'">
        </div>
        <hr>
        <div class="item">
          <div class="item-content has-secondary">Thumbnail as Secondary</div>
          <img class="item-secondary thumbnail" :src="'statics/mountains.jpg'">
        </div>
        <hr>
        <div class="item">
          <div class="item-content has-secondary">One character as Secondary</div>
          <div class="item-secondary">Q</div>
        </div>
      </div>

      <p class="caption">Example Items with Primary and Secondary</p>
      <div class="list item-inset-delimiter">
        <div class="item">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">Jack</div>
          <i class="item-secondary">chat_bubble</i>
        </div>
        <div class="item">
          <img class="item-primary" :src="'statics/linux-avatar.png'">
          <div class="item-content has-secondary">Jim's Photos</div>
          <img class="item-secondary thumbnail" :src="'statics/mountains.jpg'">
        </div>
        <div class="item">
          <i class="item-primary">voice_chat</i>
          <div class="item-content has-secondary">Voice Chat with Joe</div>
          <img class="item-secondary" :src="'statics/boy-avatar.png'">
        </div>
        <div class="item">
          <div class="item-primary">J</div>
          <div class="item-content has-secondary">John Doe</div>
          <img class="item-secondary" :src="'statics/guy-avatar.png'">
        </div>
      </div>

      <p class="caption">Stamp and Truncated Content</p>
      <div class="list" style="max-width: 400px">
        <div class="item">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Brunch this weekend? Brunch this weekend? Brunch this weekend?</div>
          </div>
          <div class="item-secondary stamp">
            1 week
          </div>
        </div>
        <div class="item two-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Brunch this weekend? Brunch this weekend? Brunch this weekend?</div>
            <div>John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe </div>
          </div>
          <div class="item-secondary stamp">
            10 min
          </div>
        </div>
        <div class="item three-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Brunch this weekend? Brunch this weekend? Brunch this weekend?</div>
            <div>
              <span>John Doe</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </div>
          </div>
          <div class="item-secondary stamp">
            2 years
          </div>
          <i class="item-secondary">mail</i>
        </div>
        <div class="item three-lines">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Brunch this weekend? Brunch this weekend? Brunch this weekend?</div>
            <div>
              <span>John Doe</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </div>
          </div>
          <div class="item-secondary stamp">
            1 week ago
          </div>
          <i class="item-secondary">mail</i>
        </div>
      </div>

      <p class="caption">Item with Actions</p>
      <div class="list">
        <div class="item">
          <img class="item-primary" :src="'statics/boy-avatar.png'">
          <div class="item-content has-secondary">
            <div>Brunch this weekend?</div>
          </div>
          <div class="item-secondary">
            <i ref="target">
              more_vert
            </i>
          </div>
        </div>
      </div>
      <q-popover ref="popover" anchor-ref="target">
        <div class="list">
          <div class="item item-link" @click="$refs.popover.close()">
            <div class="item-content">Reply</div>
          </div>
          <div class="item item-link" @click="$refs.popover.close()">
            <div class="item-content">Forward</div>
          </div>
          <div class="item item-link" @click="$refs.popover.close()">
            <div class="item-content">Delete</div>
          </div>
        </div>
      </q-popover>
    </div>
  </div>
</template>
