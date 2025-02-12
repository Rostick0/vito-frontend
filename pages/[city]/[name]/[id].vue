<template>
  <!-- <NuxtLayout name="default" :headerIsSticky="false"> -->
  <div class="container mx-auto" v-if="advertisement">
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
          <!-- <AdvertisementParams title="О смартфоне">
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
          </AdvertisementParams> -->
          <AdvertisementParams title="Характеристики">
            <div class="grid gap-2 sm:grid-cols-2">
              <AdvertisementParamsItem title="Состояние">{{
                advertisement?.is_new ? "Новое" : "Б/у"
              }}</AdvertisementParamsItem>
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
            v-if="advertisement?.advertisementDefects?.length"
            title="Неисправности"
          >
            <div
              v-for="advertisementDefects in advertisement?.advertisementDefects"
              :key="advertisementDefects.id"
            >
              {{ advertisementDefects?.defect?.name }}
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
// import api from "~/api";

const route = useRoute();
const { data: advertisement, get: getAdvertisement } =
  await useApi<IAdvertisement>({
    apiMethod: "get",
    apiName: "advertisements",
    requestParams: {
      id: route.params?.id?.toString(),
    },
    params: {
      expand: [
        "advertisementProperties.productProperty.property",
        "advertisementProperties.productProperty.propertyValue",
        "advertisementDefects.defect",
        "images.image",
        "product.vendor",
      ].join(","),
    },
  });

await Promise.all([getAdvertisement()]);

if (!advertisement.value) navigateTo("/404", {});

// definePageMeta({
//   //   name: "empty",
//   layout: false,
// });
</script>
