<template>
  <div
    class="grid gap-5 max-md:gap-3 items-start grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <CategoryItem
      v-for="category in categories"
      :key="category?.id"
      :category="category"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  categories: ICategory[];
}

const props = defineProps<IProps>();
</script>
