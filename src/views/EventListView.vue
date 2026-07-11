<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventDetail from '@/components/EventDetail.vue';
import type { Event } from '@/types.ts'
import axios from 'axios';
import { ref, onMounted } from 'vue';
const events = ref<Event[] | null>(null);

onMounted(() => {
  axios.get('https://my-json-server.typicode.com/GERRYExpress/demo-web-server/events')
    .then(res => console.log(res))
    .catch(err => console.error('There was an error!', err));
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventDetail v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
