<template>
  <router-view />
</template>
<script setup lang="ts">
import autofit from "autofit.js";

onMounted(() => {
  autofit.init({
    dw: 1920,
    dh: 929,
    el: "#app",
    resize: true,
  });
});
</script>
