<script setup lang="ts">
import EventService from '@/services/EventService';
import { onMounted, ref } from 'vue';
import type { Event } from '@/types';

const event = ref<Event | null>(null)
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
    EventService.getEvent(Number(props.id))
        .then(res => {
            event.value = res.data
        })
        .catch(err => {
            console.error('There was an error!', err)
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
            <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
            <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
        </nav>
        <RouterView :event="event" />
    </div>
</template>