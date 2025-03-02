<template>
  <template v-if="categories">
    <LazyAdvertisementCategories
      v-if="!categoryId"
      :categories="categories"
      @setCategory="setCategory"
    />
    <LazyAdvertisementCreate v-else :categoryId="categoryId" />
  </template>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const { data: categories, get: getCategories } = await useApi<ICategory[]>({
  apiName: "categories",
  apiMethod: "getAll",
  params: {
    expand: "categoriesCount",
    "filter[category_id]": "NULL",
  },
});

await getCategories();

const categoryId = ref<number | null>(
  route.query?.category_id && !isNaN(+route.query?.category_id)
    ? +route.query.category_id
    : null
);

useHead({
  title: "Добавление объявления",
});

const setCategory = (id: number) => {
  categoryId.value = id;
  router.replace({
    query: {
      category_id: id,
    },
  });
};

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
