<template>
  <p :class="props.class">{{ textDisplay }}<span v-if="cursorVisibility">|</span></p>
</template>

<script setup>
import {ref, defineProps, onMounted} from 'vue';

const props = defineProps({text: String, delay: String, class: String});

const textDisplay = ref('');
const indexLetter = ref(0);
const intervalLetters = ref(null);
const cursorVisibility = ref(true);

const displayText = () => {
  if (indexLetter.value !== props.text.length) {
    textDisplay.value += props.text[indexLetter.value];
    indexLetter.value += 1;
  } else {
    clearInterval(intervalLetters.value);
    cursorVisibility.value = false;
  }
};



onMounted(() => {
  setTimeout(() => {
    intervalLetters.value = setInterval(displayText, props.delay);
  }, 400);

});
</script>

<style scoped>
</style>
