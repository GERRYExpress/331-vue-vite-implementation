<script setup lang="ts">
import type { Event } from '@/types';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps<{
    event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const register = () => {
    router.push({ name: 'event-detail-view' })
}
</script>

<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>