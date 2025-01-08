<template>
  <div class="grid gap-4 grid-cols-[repeat(auto-fit,232px)] items-start">
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
