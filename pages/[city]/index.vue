<template>
  <div class="container mx-auto">
    <div class="flex">
      <Filter v-if="properties" :properties="properties" />
      <!-- <div class="" style="min-width: 400px"></div> -->

      <CardAdvertisementList
        class="grow"
        v-if="newAdvertisements?.length"
        :advertisements="newAdvertisements"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const { data: properties, get: getProperties } = await useApi<IProperty[]>({
  apiName: "properties",
  apiMethod: "getAll",
  params: {
    expand: "productProperties.propertyValue",
    "filter[is_specified]": 1,
  },
  // filters
});

await Promise.all([getNewAdvertisements(), getProperties()]);
</script>
