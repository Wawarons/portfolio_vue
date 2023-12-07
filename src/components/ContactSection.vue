<template>
  <div class="w-8/12 mx-auto flex flex-col items-center">
    <h2 class="text-center text-5xl my-10 text-color-accent">Contact</h2>
    <p v-if="successSend" class="text-green-400 text-center bg-green-700 p-2 border border-white font-bold shadow rounded">Message envoyé</p>
    <form class="w-96 my-10 flex flex-col items-center" ref="form" @submit.prevent="submit">
      <input v-model="name" type="text" name="user_name" id="" placeholder="Name"
             class="w-3/4 bg-transparent appearance-none border-b border-b-color-accent p-4 focus:outline-0">
      <p v-if="errors.name && name" class="text-red-500 pt-1">{{ errors.name }}</p>

      <input v-model="email" type="text" name="user_email" id="" placeholder="Email"
             class="w-3/4 bg-transparent appearance-none border-b border-b-color-accent p-4 focus:outline-0" required>
      <p v-if="errors.email && email" class="text-red-500 pt-1">{{ errors.email }}</p>

      <textarea v-model="message"
                class="w-3/4 bg-transparent appearance-none border-b border-b-color-accent px-4 pt-8 focus:outline-0"
                name="message" placeholder="Message"></textarea>
      <p v-if="errors.message && message" class="text-red-500 pt-1">{{ errors.message }}</p>

      <input type="submit" value="Send"
             class="p-1 mt-5 bg-color-accent text-black hover:text-white rounded cursor-pointer">

    </form>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import {onMounted, ref} from "vue";
import {useForm} from 'vee-validate';
import * as yup from 'yup';

const successSend = ref(false);
const formData = ref(null);

onMounted(() => {
  formData .value = {
    name,
    email,
    message
  }
})


const {values, errors, defineField} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(3).required(),
    message: yup.string().min(5).required()
  }),
});

const [email, emailProps]= defineField('email');
const [name, nameProps] = defineField("name");
const [message, messageProps] = defineField("message");

const form = ref(null);

const submit = () => {
  console.log(Object.keys(errors.value), values)
  if (!Object.keys(errors.value).length && values.name && values.email && values.message) {
    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.value, import.meta.env.VITE_EMAIL_PUBLIC_API_KEY)
        .then(() => {
          successSend.value = true;
        }, (error) => {
          console.error(error.text);
        });

    setTimeout(() => {
      name.value = '';
      email.value = ''
      message.value = ''
      successSend.value = false;
    }, 3000);

  }
}
</script>