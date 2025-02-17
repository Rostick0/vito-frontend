<template>
  <!-- top-4 -->
  <div
    class="bg-white rounded-lg shrink-0 p-4 top-4 w-full z-10"
    :class="{ sticky: $device.isDesktop }"
  >
    <div class="flex justify-between mb-3">
      <div class="font-bold text-3xl">
        {{ formatNumber(advertisement?.price) }}&nbsp;₽
      </div>
      <button class="flex" @click="favoriteToggle(advertisement?.id)">
        <IconFavorite
          v-if="favoriteHas(advertisement?.id)"
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
    <NuxtLink
      class="mb-3"
      :to="
        ROUTES_NAMES.productReviews(productNameHref, advertisement?.product?.id as number)
      "
    >
      <span class="bg-green-500 text-white rounded py-1 px-1.5">{{
        advertisement?.product?.raiting
      }}</span
      >&nbsp;<span class="text-green-500"
        >{{ advertisement?.product?.reviewsCount }} отзывов о модели</span
      >
    </NuxtLink>
    <AdvertisementUser v-if="advertisement?.user" :user="advertisement?.user" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  advertisement: IAdvertisement;
  productNameHref: string;
}

const props = defineProps<IProps>();

const { favoriteHas, favoriteToggle } = useFavorite();
</script>
