<template>
  <Swiper class="w-full h-full" @swiper="(swiperInit) => (swiper = swiperInit)">
    <SwiperSlide>
      <span
        class="bg-no-repeat bg-center bg-[length:100%_100%] absolute w-full h-full -z-10"
        :style="{ backgroundImage: `url(${firstImage?.image?.path})` }"
      ></span>
      <NuxtImg
        class="backdrop-blur-sm object-contain w-full h-full"
        :src="firstImage?.image?.path"
        :alt="advertisement?.title"
        preload
        decoding="async"
        loading="lazy"
      />
    </SwiperSlide>
    <SwiperSlide v-for="image in otherImages" :key="image?.id">
      <span
        class="bg-no-repeat bg-center bg-[length:100%_100%] absolute w-full h-full -z-10"
        :style="{ backgroundImage: `url(${image?.image?.path})` }"
      ></span>
      <img
        class="backdrop-blur-sm object-contain w-full h-full"
        :src="image?.image?.path"
        :alt="advertisement?.title"
        v-lazy-load
        decoding="async"
        loading="lazy"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
await import("swiper/css");

interface IProps {
  advertisement: IAdvertisement;
  activeSlide?: number;
  images: IImageRel[];
}

const props = defineProps<IProps>();

const swiper = ref();

const firstImage = computed(() => props?.images?.[0]);
const otherImages = computed(() => props?.images?.slice(1, -1));

watch(
  () => props.activeSlide,
  (cur) => {
    swiper.value.slideTo(cur, 200, false);
  }
);
</script>
