<script setup lang="ts">
import type { Event } from '@/types.ts';
import EventDetail from './EventDetail.vue';

defineProps<{
  event: Event
}>();

</script>

<template>
  <RouterLink class="decoration-0 text-[#2c3e50]" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="hover:scale-101 hover:shadow-sp p-[20px] w-[250px] cursor-pointer border border-gray-600 mb-[18px]">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
    <EventDetail :event="event" />
  </RouterLink>
</template>
