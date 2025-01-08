<template>
  <div class="flex relative pt-[50%] mb-4 mx-auto w-4/5">
    <div class="absolute top-0 left-0 w-full h-full">
      <ClientOnly>
        <ProductSwiperImages :activeSlide="activeSlide" v-bind="props" />
      </ClientOnly>
    </div>
  </div>
  <div class="flex gap-x-1">
    <img
      v-for="(image, i) in images"
      @click="activeSlide = i"
      class="object-cover w-20 h-16"
      :src="image?.path"
      :alt="product?.name"
      v-lazy-load
      decoding="async"
      loading="lazy"
      width="80"
      height="64"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
  images: IImage[];
}

const props = defineProps<IProps>();

const activeSlide = ref();
</script>
