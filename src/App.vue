<template>
  <HeaderSection />

  <RouterView /><br>
  <FooterSection />
</template>


<script setup>
import FooterSection from "./components/FooterSection.vue";
 import HeaderSection from "./components/headerSection.vue";


</script>