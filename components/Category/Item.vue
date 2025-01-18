<template>
  <div class="bg-white rounded-xl flex flex-col items-center p-6 h-full">
    <div class="w-4/5">
      <div class="flex relative pt-[100%] mb-3 w-full">
        <img
          class="object-contain absolute top-0 left-0 w-full h-full"
          :src="category?.image_rel?.image?.path"
          :alt="category?.name"
          v-lazy-load
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
    <div class="fw-bold text-center">{{ category?.name }}</div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  category: ICategory;
}

const props = defineProps<IProps>();
</script>
