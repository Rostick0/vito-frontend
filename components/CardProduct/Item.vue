<template>
  <div class="bg-white rounded-xl">
    <div class="relative pt-[100%]">
      <div class="absolute top-0">
        <img class="" :src="product?.main_image?.path" alt="" />
      </div>
    </div>
    <div class="p-4">
      <div class="flex gap-x-2 items-start justify-between mb-1">
        <NuxtLink class="font-bold text-sm text-sky-400" to="#">{{ product?.name }}</NuxtLink>
        <IconFavoriteStroke class="fill-sky-400" />
        <!-- <IconFavorite class="fill-sky-400" /> -->
      </div>
      <div class="font-bold text-sm">{{ formatNumber(product?.price) }} ₽</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>();
</script>
