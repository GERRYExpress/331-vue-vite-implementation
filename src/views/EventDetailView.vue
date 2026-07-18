<script setup lang="ts">
import EventService from '@/services/EventService';
import type { Event } from '@/types';
import { onMounted, ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const event = ref<Event | null>(null);
onMounted(() => {
    EventService.getEvent(Number(props.id))
        .then(res => event.value = res.data)
        .catch(error => {
            console.error('There was an error!', error)
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>