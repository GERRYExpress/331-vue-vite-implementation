<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
import type { Event } from '@/types.ts'
import { ref, computed, watchEffect, onMounted } from 'vue';
const events = ref<Event[] | null>(null);
const totalEvents = ref(0);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / /* props.totalPage */ 3)
  return page.value < totalPages
})

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  totalPage: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)
onMounted(() => {
  events.value = null
  watchEffect(() => {
    EventService.getEvents(/* props.totalPage */ 3, page.value)
      .then(res => {
        events.value = res.data;
        totalEvents.value = res.headers['x-total-count']
      })
      .catch(err => console.error('There was an error!', err))
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink id="page-prev" :to="{ name: 'event-list-view', query: { page: page - 1, _limit: totalPage } }"
        rel="prev" v-if="page != 1">
        Prev Page
      </RouterLink>
      <RouterLink id="page-next" :to="{ name: 'event-list-view', query: { page: page + 1, _limit: totalPage } }"
        rel="next" v-if="hasNextPage">
        Next Page
      </RouterLink>
    </div>
  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
