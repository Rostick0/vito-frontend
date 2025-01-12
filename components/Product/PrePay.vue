<template>
  <!-- top-4 -->
  <div
    class="bg-white rounded-lg shrink-0 p-4 top-4 w-full z-10"
    :class="{ sticky: $device.isDesktop }"
  >
    <div class="flex justify-between mb-3">
      <div class="font-bold text-3xl">
        {{ formatNumber(product?.price) }}&nbsp;₽
      </div>
      <button class="flex" @click="favoriteToggle(product?.id)">
        <IconFavorite
          v-if="favoriteHas(product?.id)"
          class="fill-sky-400"
          width="28"
          height="28"
        />
        <IconFavoriteStroke
          v-else
          class="shrink-0 fill-sky-400"
          width="28"
          height="28"
        />
      </button>
    </div>
    <div class="mb-3">
      <span class="bg-green-500 text-white rounded py-1 px-1.5">{{
        product?.raiting
      }}</span
      >&nbsp;<span class="text-green-500"
        >{{ product?.reviews_count }} отзывов о модели</span
      >
    </div>
    <ProductUser v-if="product?.user" :user="product?.user" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>();

const { favoriteHas, favoriteToggle } = useFavorite();
</script>
