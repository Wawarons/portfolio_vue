<template>
  <div class="p-4 flex flex-col flex-1 md:items-start items-center mt-20 mb-10 mx-auto w-fit">
    <a href="https://github.com/Wawarons" target="_blank" rel="noreferrer noopener">
      <i class="text-2xl absolute top-1.5 right-5 fa-brands fa-github hover:text-color-accent cursor-pointer"></i>
    </a>
    <h1 class="text-5xl md:text-7xl px-5 text-center">Développeur <span class="text-color-accent">web</span></h1>
    <WriteText text="Adrien Podsiadly" delay="100" class="px-5 pt-1 text-3xl md:text-5xl max-sm:text-center mt-1"/>
  </div>
</template>

<script setup>
import WriteText from "@/components/WriteText.vue";
</script>
