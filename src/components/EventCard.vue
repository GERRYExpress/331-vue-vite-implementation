<script setup lang="ts">
import type { Event } from '@/types.ts';
import EventDetail from './EventDetail.vue';

defineProps<{
  event: Event
}>();

</script>

<template>
  <div class="event-class">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
    <EventDetail :event="event" />
  </div>
</template>

<style scoped>
.event-class {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
