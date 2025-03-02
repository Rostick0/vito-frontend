<template>
  <div class="container mx-auto">
    <div class="bg-white rounded-xl flex p-4">
      <CategoriesList
        @on:category="(val) => ((otherCategories = []), addCategories(val))"
        :categories="categories"
      />
      <CategoriesList
        v-for="categories in otherCategories"
        @on:category="addCategories"
        :categories="categories"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";

interface IProps {
  categories?: ICategory[];
}
const props = defineProps<IProps>();

const emits = defineEmits(["setCategory"]);

const otherCategories = ref<ICategory[][]>([]);

const addCategories = async (category: ICategory) => {
  if (!category?.categoriesCount) return emits("setCategory", category?.id);

  const categories = await api.categories.getAll({
    params: {
      expand: "categoriesCount",
      "filter[category_id]": category?.id,
    },
  });

  if (!categories?.length) return;

  otherCategories.value = [...otherCategories.value, categories];
};
</script>
