<template>
  <div class="flex items-center m-2 p-2 justify-center rounded-full bg-black bg-opacity-90 w-[50px] h-[50px] overflow-hidden border border-color-accent hover:shadow">
    <img class="w-[90%] h-auto" :src="'/images/svg/' + langage.toLocaleLowerCase()+'.svg'" :alt="langage">
  </div>
</template>

<script setup>
  defineProps({langage: String})
</script>