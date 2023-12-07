<template>
  <div>
    <h2 class="text-center text-5xl my-10 text-color-accent">Compétences</h2>
    <div class="md:w-4/12 w-3/4 backdrop-blur-2xl rounded-lg p-5 mx-auto my-10">
      <div class="flex flex-row flex-1 mx-auto justify-around items-center">
        <h2 class="text-3xl text-center pb-4 w-full">Front</h2>
        <h2 class="text-3xl text-center pb-4 w-full border-l border-color-accent">Back</h2>
      </div>
      <div
          class="flex flex-row flex-1 justify-center items-center">
        <div class="flex flex-row  flex-wrap justify-center w-1/2 p-2">
          <LangageItem langage="vuejs"/>
          <LangageItem langage="tailwindcss"/>
        </div>
        <div class="flex flex-row flex-wrap justify-center items-center w-1/2 border-l border-l-color-accent p-2">
          <LangageItem langage="sqlite"/>
          <LangageItem langage="postgresql"/>
          <LangageItem langage="nodejs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import LangageItem from "@/components/LangageItem.vue";
</script>

<style lang="scss" scoped>

</style>