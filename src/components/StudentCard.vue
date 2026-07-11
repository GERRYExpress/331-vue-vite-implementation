<script setup lang="ts">
import type { Student } from '@/types';

defineProps<{
    student: Student
}>()

</script>

<template>
    <div class="student-card">
        <h1>{{ student.name }} {{ student.surname }}</h1>
        <h2>GPA: {{ student.gpa }}</h2>
    </div>
</template>