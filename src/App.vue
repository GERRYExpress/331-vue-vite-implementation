<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const totalPages = ref(3); // Change total list per page here
const router = useRouter();
const store = useMessageStore()
const { message } = storeToRefs(store)
watch(() => totalPages.value, () => {
  router.push({
    query: { _limit: totalPages.value }
  })
})
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div id="flashMessage" v-if="message">
        <h4> {{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink>
          |
          <RouterLink :to="{ name: 'student-list-view' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <select name="page" id="total-page" v-model="totalPages">
      <option v-for="page in [1, 2, 3, 4, 5, 6]" :key="page" :value="page">{{ page }}</option>
    </select>
    <RouterView />
  </div>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellowFade {
  from {
    background-color: yellow;
  }

  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellowFade 3s ease-in-out;
}
</style>
