<template>
  <div>
    <h2 class="text-5xl text-color-accent mx-auto w-fit my-10">Projets</h2>
    <Transition>
    <div v-if="isSlideVisible" class="flex flex-col flex-wrap lg:flex-row lg:w-5/6 justify-around items-center md:w-3/4 mx-auto">
      <div class="p-2 my-10 lg:mx-10 sm:w-3/5 lg:w-1/3" v-for="(project, index) in projectsData.projects" :key="index">
        <ProjectCard :project="project"/>
      </div>
    </div>
    </Transition>
  </div>

</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import projects from '@/projects.json';
import {onMounted, ref} from 'vue';

const isSlideVisible = ref(false);

onMounted(() => isSlideVisible.value = true)

const projectsData = projects;
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>