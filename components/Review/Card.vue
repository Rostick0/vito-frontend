<template>
  <div class="">
    <div class="bg-white flex gap-4 p-4">
      <img
        class="object-contain shrink-0"
        :src="product?.mainImage?.path"
        :alt="product?.name"
        v-lazy-load
        loading="lazy"
        decoding="async"
        width="80"
        height="80"
      />
      <div class="">
        <NuxtLink :to="ROUTES_NAMES.product(product?.name, product?.id)">
          <h1 class="font-bold">Всё о модели: {{ product?.name }}</h1>
        </NuxtLink>
      </div>
    </div>
    <!-- {{ product }} -->
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>();
</script>
