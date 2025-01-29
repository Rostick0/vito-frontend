<template>
  <!-- <NuxtLayout name="default" :headerIsSticky="false"> -->
  <div class="container mx-auto">
    <UiH1>{{ advertisement?.title }}</UiH1>
    <div class="flex gap-x-12 items-start">
      <div class="grow">
        <AdvertisementImages
          :advertisement="advertisement"
          :images="advertisement?.images"
        />
        <AdvertisementPrePay
          v-if="$device.isMobileOrTablet"
          class="mt-6 -mb-8"
          :advertisement="advertisement"
        />
        <div class="flex flex-col gap-y-10 max-md:gap-y-5 mt-16">
          <AdvertisementParams title="О смартфоне">
            <div class="grid gap-2 md:grid-cols-2">
              <AdvertisementParamsItem title="Экран"
                >Без дефектов</AdvertisementParamsItem
              >
              <AdvertisementParamsItem title="Корпус"
                >Без дефектов</AdvertisementParamsItem
              >
              <AdvertisementParamsItem title="Комплект"
                >Коробка, Блок зарядки, Провод зарядки</AdvertisementParamsItem
              >
            </div>
          </AdvertisementParams>
          <AdvertisementParams title="Характеристики">
            <div class="grid gap-2 sm:grid-cols-2">
              <!-- <AdvertisementParamsItem title="Состояние"
                >Хорошее</AdvertisementParamsItem
              > -->
              <AdvertisementParamsItem title="Производитель">{{
                advertisement?.product?.vendor?.name
              }}</AdvertisementParamsItem>
              <AdvertisementParamsItem title="Модель">{{
                advertisement?.product?.name
              }}</AdvertisementParamsItem>
              <template
                v-for="advertisementProperties in advertisement?.advertisementProperties"
              >
                <AdvertisementParamsItem
                  v-if="advertisementProperties?.productProperty"
                  :title="
                    advertisementProperties?.productProperty?.property?.name as string
                  "
                  >{{
                    getPropertyValue(advertisementProperties?.productProperty)
                  }}</AdvertisementParamsItem
                >
              </template>
              <!-- <AdvertisementParamsItem title="Состояние аккумулятора"
                >88 %</AdvertisementParamsItem
              > -->
              <NuxtLink
                v-if="advertisement?.product?.name"
                class="text-sky-400"
                :to="
                  `/products/${encodeURIComponent(
                    transliterateHref(advertisement?.product?.name)
                  )}/${advertisement?.product?.id}`.toLowerCase()
                "
                >Все характеристики</NuxtLink
              >
            </div>
          </AdvertisementParams>
          <AdvertisementParams
            v-if="advertisement?.description"
            title="Описание"
            >{{ advertisement.description }}</AdvertisementParams
          >
        </div>

        <div class="mt-10">
          <UiH2>Рекомендации для вас</UiH2>
          <!-- <CardProductList :products="products" /> -->
        </div>
        <div
          v-if="$device.isMobileOrTablet"
          class="bg-white rounded-t-lg fixed left-2/4 bottom-0 -translate-x-2/4 p-3 max-w-48 w-full z-10"
        >
          <UiBtn class="justify-center w-full">Написать</UiBtn>
        </div>
      </div>
      <AdvertisementPrePay
        v-if="$device.isDesktop"
        class="max-w-80"
        :advertisement="advertisement"
      />
    </div>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script lang="ts" setup>
import api from "~/api";

const route = useRoute();
const advertisement = await api.advertisements.get({
  id: route.params?.id?.toString(),
  params: {
    expand: [
      "images.image",
      "advertisementProperties.productProperty.property",
      "advertisementProperties.productProperty.propertyValue",
      "product.vendor",
    ].join(","),
  },
});

if (!advertisement) navigateTo("/404", {});

// definePageMeta({
//   //   name: "empty",
//   layout: false,
// });
</script>
