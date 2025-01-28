<template>
  <div
    class="category-item bg-white rounded-xl relative flex flex-col items-center p-6 h-full before:shadow-md before:duration-300"
  >
    <div class="w-4/5">
      <div class="flex relative pt-[100%] mb-3 w-full">
        <img
          class="object-contain absolute top-0 left-0 w-full h-full"
          :src="category?.image?.image?.path"
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

<style lang="scss" scoped>
.category-item {
  &::before {
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    &::before {
      opacity: 100%;
    }
  }
}
</style>
