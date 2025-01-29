<template>
  <!-- grid-cols-5 -->
  <div
    class="grid gap-5 max-md:gap-3 items-start grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <CardProductItem
      v-for="product in products"
      :key="product?.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  products: IProduct[];
}

const props = defineProps<IProps>();
</script>
