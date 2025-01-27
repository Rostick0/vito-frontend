<template>
  <div class="bg-white rounded-xl">
    <NuxtLink class="relative flex pt-[100%]" to="/moscow/advert-1">
      <div class="absolute top-0 w-full h-full">
        <img
          class="object-cover w-full h-full"
          :src="advertisement?.mainImage?.path"
          :alt="advertisement?.title"
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
        <NuxtLink
          class="font-bold text-sm text-sky-400"
          to="/moscow/advert-1"
          >{{ advertisement?.title }}</NuxtLink
        >
        <button class="flex" @click="favoriteToggle(advertisement?.id)">
          <IconFavorite
            v-if="favoriteHas(advertisement?.id)"
            class="fill-sky-400"
          />
          <IconFavoriteStroke v-else class="shrink-0 fill-sky-400" />
        </button>
      </div>
      <div class="font-bold text-sm">
        {{ formatNumber(advertisement?.price) }} ₽
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  advertisement: IAdvertisement;
}

const props = defineProps<IProps>();

const { favoriteHas, favoriteToggle } = useFavorite();
</script>
