<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import api from "~/api";

const route = useRoute();

const vendor = await api.vendors.getByName({
  name: route.params?.name?.toString(),
});

console.log(vendor);
</script>
