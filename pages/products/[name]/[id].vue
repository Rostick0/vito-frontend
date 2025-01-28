<template>
  <div class="container mx-auto">
    <div class="">
      <UiH1>{{ product?.name }}</UiH1>
      <div class="flex flex-col gap-y-4">
        <div class="" v-for="propertyGroup in groupBy">
          <UiH3>{{ propertyGroup.group }}</UiH3>
          <div class="grid gap-2 sm:grid-cols-2">
            <AdvertisementParamsItem
              v-for="productProperties in propertyGroup.value"
              :key="productProperties?.id"
              :title="productProperties?.property?.name"
            >
              {{ getPropertyValue(productProperties) }}
            </AdvertisementParamsItem>
          </div>
        </div>
      </div>
    </div>
    <div v-if="advertisements?.length" class="mt-8">
      <UiH2>Предложения продавцов</UiH2>
      <CardAdvertisementList :advertisements="advertisements" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";

const route = useRoute();

const product = await api.products.get({
  id: route.params?.id?.toString(),
  params: {
    expand: [
      "images.image",
      "productProperties.property.propertyType",
      "productProperties.property.propertyValues",
      "productProperties.propertyValue",
    ].join(","),
  },
});

const groupBy = groupByInArray(
  product?.productProperties,
  "property.propertyType.name"
);

const { data: advertisements, get: getAdvertisements } = await useApi<
  IAdvertisement[]
>({
  apiName: "advertisements",
  apiMethod: "getAll",
  params: {
    expand: "mainImage",
    "filter[product_id]": product?.id,
  },
});
await getAdvertisements();
</script>
