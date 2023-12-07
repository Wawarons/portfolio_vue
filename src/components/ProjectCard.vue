<template>
  <div class="max-sm:w-80 max-md:h-[200px]  min-w-[300px] h-[300px] rounded-lg overflow-hidden shadow cursor-pointer slide-animation opacity-0"
       :style="{background: 'url(' + project.image_url + ') center no-repeat', backgroundSize: 'cover'}"
       @mouseenter="showInfoProject = true" @mouseleave="showInfoProject = false">

    <div class="flex flex-row h-full">
      <!-- Description section (Left) -->
      <div class="flex flex-col justify-around relative top-0 h-full w-1/2 p-2 text-black -left-full bg-color-accent duration-150"
           :class="showInfoProject ? 'show-description':'hide-description'">
        <h2 class="sm:text-2xl text-xl text-center ">{{ project.title }}</h2>
        <p class="font-Shippori-Mincho-B1  max-sm:text-xs text-center py-2">{{ project.description.fr }}</p>
        <div class="flex flex-row w-1/2 justify-around mx-auto text-xl">
          <a class="p-1 bg-color-accent text-black rounded-lg hover:text-white duration-75" title="Github" :href="project.githubLink" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="p-1 bg-color-accent text-black rounded-lg hover:text-white duration-75" title="Visiter" :href="project.url" target="_blank" rel="noreferrer noopener">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <!-- Languages section (Right)-->
      <div class="flex flex-row justify-center flex-wrap relative self-center w-1/2 items-center -right-full mx-auto duration-150"
           :class="showInfoProject ? 'show-languages':'hide-languages'">
        <LangageItem :langage="language" :key="index" v-for="(language, index) in project.languages"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue';
import LangageItem from "@/components/LangageItem.vue";

defineProps({project: Object})
const showInfoProject = ref(false)
</script>

<style scoped>

.hide-description {
  left: -100%;
}

.show-description {
  left: 0;
}

.hide-languages {
  right: -100%;
}

.show-languages {
  right: 0;
}

.slide-animation {
  animation: slideAnimation .8s ease-in-out forwards;
}


@keyframes slideAnimation {
  to {
    opacity: 1;
  }

}

</style>