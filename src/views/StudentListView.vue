<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import StudentService from '@/services/StudentService';
import type { Student } from '@/types';
import { onMounted, ref } from 'vue';

const students = ref<Student[] | null>(null);

onMounted(() => {
  StudentService.getStudentInfo()
    .then(res => students.value = res.data)
    .catch(err => console.error('An error ocurred!', err))
})
</script>

<template>
  <div class="student-class">
    <h1>A site for events to better the world.</h1>
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.student-class {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
