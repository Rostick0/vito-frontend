<template>
  <div class="bg-white flex gap-x-4 rounded-xl p-5">
    <NuxtLink class="w-full max-w-60" :to="link">
      <div class="relative flex pt-[100%] w-full">
        <img
          class="absolute top-0 object-cover w-full h-full"
          :src="advertisement?.mainImage?.path ?? DEFAULT_IMAGE"
          :alt="advertisement?.title"
          @error="setDefaultImgSrc"
          width="232"
          height="232"
          v-lazy-load
          loading="lazy"
          decoding="async"
        />
      </div>
    </NuxtLink>
    <div class="grow">
      <div class="flex gap-x-2 items-start justify-between mb-1">
        <NuxtLink class="font-bold text-sm text-sky-400" :to="link">{{
          advertisement?.title
        }}</NuxtLink>
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
      <div class="text-sm">
        {{
          truncate(advertisement?.description, {
            length: 192,
          })
        }}
      </div>
    </div>
    <div class="shrink-0 w-44">
      <div class="mb-3">
        <div class="">
          {{ advertisement?.user?.name }}
        </div>
        <div class="flex items-center gap-x-1">
          <span class="text-sm">{{
            advertisement?.user?.raiting?.toFixed(1)
          }}</span>
          <UiStars :value="advertisement?.user?.raiting" />
        </div>
      </div>
      <div class="mb-3">
        <UiBtn
          v-if="!isShowTel"
          @click="isShowTel = true"
          class="justify-center w-full"
          >Показать телефон</UiBtn
        >
        <a
          class="font-medium flex items-center justify-center h-8"
          :href="`tel:${advertisement?.user?.tel}`"
          v-else
          >{{ advertisement?.user?.tel }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import truncate from "lodash/truncate";

interface IProps {
  advertisement: IAdvertisement;
}

const props = defineProps<IProps>();

const { favoriteHas, favoriteToggle } = useFavorite();

const isShowTel = ref<boolean>(false);

const link = computed(() =>
  getLinkAdvertisement("moscow", props.advertisement)
);
</script>
