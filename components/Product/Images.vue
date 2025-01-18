<template>
  <div class="mx-auto" :class="{ 'w-4/5': $device.isDesktop }">
    <div class="flex relative pt-[62%] mb-4 max-md:mb-2">
      <div class="absolute top-0 left-0 w-full h-full">
        <ClientOnly>
          <ProductSwiperImages :activeSlide="activeSlide" v-bind="props" />
        </ClientOnly>
      </div>
    </div>
    <div class="flex gap-x-1 overflow-auto">
      <img
        v-for="(image, i) in image_rels"
        @click="activeSlide = i"
        class="object-cover border-2 w-20 h-16 hover:border-sky-300"
        :class="[activeSlide == i ? 'border-sky-500' : 'border-transparent']"
        :src="image?.image?.path"
        :alt="product?.name"
        v-lazy-load
        decoding="async"
        loading="lazy"
        width="80"
        height="64"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
  image_rels: IImageRel[];
}

const props = defineProps<IProps>();

const activeSlide = ref();
</script>
