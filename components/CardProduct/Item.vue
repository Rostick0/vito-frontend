<template>
  <div class="bg-white rounded-xl">
    <NuxtLink class="relative flex pt-[100%]" to="/moscow/product-1">
      <div class="absolute top-0 w-full h-full">
        <img
          class="object-cover w-full h-full"
          :src="product?.mainImage?.path"
          :alt="product?.name"
          width="232"
          height="232"
          v-lazy-load
          loading="lazy"
          decoding="async"
        />
      </div>
    </NuxtLink>
    <div class="p-4">
      <div class="flex gap-x-2 items-start justify-between mb-1">
        <NuxtLink class="font-bold text-sm text-sky-400" to="/moscow/product-1">{{
          product?.name
        }}</NuxtLink>
        <button class="flex" @click="favoriteToggle(product?.id)">
          <IconFavorite v-if="favoriteHas(product?.id)" class="fill-sky-400" />
          <IconFavoriteStroke v-else class="shrink-0 fill-sky-400" />
        </button>
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

const { favoriteHas, favoriteToggle } = useFavorite();
</script>
