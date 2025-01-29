<template>
  <div class="container mx-auto">
    <div class="flex items-center gap-x-3">
      <img
        class="object-contain w-16 h-16"
        :src="vendor?.image?.image?.path ?? DEFAULT_IMAGE"
        :title="vendor?.name"
        :alt="vendor?.name"
        @error="setDefaultImgSrc"
        v-lazy-load
        decoding="async"
        loading="lazy"
        width="64"
        height="64"
      />
      <h1 class="font-bold text-2xl">{{ vendor?.name }}</h1>
    </div>
    <div v-if="vendorCategories?.length" class="mt-6">
      <CategoryList :categories="vendorCategories" />
    </div>
    <div v-if="advertisements?.length" class="mt-6">
      <UiH2>Товары бренда</UiH2>
      <CardAdvertisementList :advertisements="advertisements" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";

const route = useRoute();

const vendor = await api.vendors.getByName({
  name: route.params?.name?.toString(),
  params: {
    expand: [
      "image.image",
      "vendorCategories.image.image",
      "vendorCategories.category",
      "advertisements",
    ].join(),
  },
});

const advertisements = await api.advertisements.getAll({
  params: {
    "filter[product.vendor_id]": vendor?.id,
    expand: "mainImage",
  },
});

const vendorCategories = vendor?.vendorCategories?.map((item) => ({
  ...item?.category,
  image: item?.image,
})) as ICategory[];
</script>
