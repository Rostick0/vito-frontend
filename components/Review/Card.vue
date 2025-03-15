<template>
  <div class="bg-white rounded-xl flex items-center gap-4 p-4">
    <img
      class="object-contain shrink-0 w-28 h-20"
      :src="product?.mainImage?.path"
      :alt="product?.name"
      v-lazy-load
      loading="lazy"
      decoding="async"
      width="112"
      height="80"
    />
    <div class="">
      <NuxtLink
        :to="ROUTES_NAMES.product(convertNamePath(product?.name), product?.id)"
      >
        <h1 class="font-bold">Всё о модели: {{ product?.name }}</h1>
      </NuxtLink>
      <div
        class="rounded text-white inline-block text-sm mt-1 px-2 py-1"
        :class="[getColorRaiting(product?.raiting, 'bg')]"
      >
        {{ (product?.raiting ?? 0)?.toFixed(1) }}&nbsp;—&nbsp;{{
          product?.reviewsCount
        }}
      </div>
    </div>
  </div>
  <!-- {{ product }} -->
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>();
</script>
