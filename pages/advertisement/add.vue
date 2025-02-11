<template>
  <AdvertisementCreate :categoryId="categoryId" />
</template>

<script lang="ts" setup>
const categoryId = ref(1);

useHead({
  title: "Добавление объявления",
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
