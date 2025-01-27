<template>
  <div class="">{{ product }}</div>
</template>

<script lang="ts" setup>
import api from "~/api";

const route = useRoute();

const product = await api.products.get({
  id: route.params?.id?.toString(),
  params: {
    expand: ["images.image", "productProperties"].join(","),
  },
});
</script>
