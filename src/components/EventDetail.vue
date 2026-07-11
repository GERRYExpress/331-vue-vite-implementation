<script setup lang="ts">
import type { Event } from '@/types';
defineProps<{
    event: Event
}>();
</script>

<template>
    <div class="event-detail">
        <p>Category: {{ event.category }}</p>
        <p>Organizer: {{ event.organizer }}</p>
    </div>
</template>

<style scoped>
.event-detail {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    text-align: right;
    font-size: 20px;
    margin: 12px 0;
    border: 1px solid rebeccapurple;
    padding: 20px;
    max-width: 275px;
    width: 100%;
}
</style>