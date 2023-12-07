<template>
  <div class="w-screen font-Cormorant-Garamond text-text-primary">
    <div class="w-screen h-screen fixed top-0 -z-10 backdrop-blur brightness-50"></div>
    <HomeView/>
    <BarSection/>
    <Suspense>
      <ProjectsSection/>
    </Suspense>
    <BarSection/>
    <PresentationSection/>
    <BarSection/>
    <CompetencesSection/>
    <BarSection/>
    <ContactSection/>
    <p class="relative left-0.5 bottom-0.5 my-1">&copy; Adrien Podsiadly 2023</p>
  </div>
</template>

<script setup>
import HomeView from "@/views/HomeView.vue";
import BarSection from "@/components/BarSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import PresentationSection from "@/components/PresentationSection.vue";
import CompetencesSection from "@/components/CompetencesSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>
