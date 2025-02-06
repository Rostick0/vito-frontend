<template>
  <div class="container mx-auto">
    <VendorList v-if="vendors?.length" class="mb-8" :vendors="vendors" />
    <div v-if="newAdvertisements?.length" class="">
      <UiH2>Новинки</UiH2>
      <CardAdvertisementList :advertisements="newAdvertisements" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: vendors, get: getVendors } = await useApi<IVendor[]>({
  apiMethod: "getAll",
  apiName: "vendors",
  params: {
    expand: "image.image",
  },
});

const { data: newAdvertisements, get: getNewAdvertisements } = await useApi<
  IAdvertisement[]
>({
  apiMethod: "getAll",
  apiName: "advertisements",
  params: {
    expand: "mainImage",
    sort: "-id",
    // limit:
  },
});

await Promise.all([getVendors(), getNewAdvertisements()]);
</script>
