<template>
  <LazyAdvertisementCategories
    v-if="!categoryId"
    :categories="categories"
    @setCategory="(val) => (categoryId = val)"
  />
  <LazyAdvertisementCreate v-else :categoryId="categoryId" />
</template>

<script lang="ts" setup>
const { data: categories, get: getCategories } = await useApi<ICategory[]>({
  apiName: "categories",
  apiMethod: "getAll",
  params: {
    expand: "categoriesCount",
    "filter[category_id]": "NULL",
  },
});

await getCategories();

const categoryId = ref(null);

useHead({
  title: "Добавление объявления",
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
