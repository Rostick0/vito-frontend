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
                  :title="
                    advertisementProperties?.productProperty?.property?.name as string
                  "
                  >{{
                    getPropertyValue(advertisementProperties?.productProperty)
                  }}</AdvertisementParamsItem
                >
              </template>
              <!-- <AdvertisementParamsItem title="Встроенная память"
                >256 ГБ</AdvertisementParamsItem
              >
              <AdvertisementParamsItem title="Цвет"
                >Чёрный</AdvertisementParamsItem
              > -->
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
console.log(advertisement);

if (!advertisement) navigateTo("/404", {});

// const product = {
//   id: 1,
//   name: "iPhone 15 Pro Max, 256 ГБ",
//   price: 85000,
//   raiting: 4.53,
//   is_show: true,
//   category_id: 1,
//   created_at: new Date("05-02-2024 00:01:20"),
//   //   mainImage: IImage;
//   category: {
//     id: 1,
//     name: "Смартфоны",
//   },
//   images: [
//     {
//       id: 1,
//       image_id: 1,
//       image: {
//         id: 1,
//         path: "https://20.img.avito.st/image/1/1.Dug59La4ogEPXWAEKaxRuSJVoAeHVSAJT1CgA4ldqguP.huK_U9lVQDbmkskoavLofvO-dpTfHtlye-lQlfRRbFo",
//       },
//     },
//     {
//       id: 2,
//       image_id: 2,
//       image: {
//         id: 2,
//         path: "https://30.img.avito.st/image/1/1.Qyf7X7a4787N9i3L8RJbJf3-7chF_m3GjfvtzEv258RN.k-2MyUACTMmuc1XodWEkU-P88M9aOGjnWkmycCoKRL4",
//       },
//     },
//     {
//       id: 3,
//       image_id: 3,
//       image: {
//         id: 3,
//         path: "https://80.img.avito.st/image/1/1.przNLLa4ClX7hchQjRb67daNCFNzjYhdu4gIV32FAl97.qIDjXX209e_FdYfnMu2J8pqYspd7N45_g4BGV5CuO4k",
//       },
//     },
//     {
//       id: 4,
//       image_id: 4,
//       image: {
//         id: 4,
//         path: "https://30.img.avito.st/image/1/1.RlA5_ra46rkPVyi8OcdMASJf6L-HX2ixT1rou4lX4rOP.BfchIu3cBkXcqrGDSAmLdxS52B5ARB7mtB-OeFDF-n0",
//       },
//     },
//     {
//       id: 5,
//       image_id: 5,
//       image: {
//         id: 5,
//         path: "https://80.img.avito.st/image/1/1.udqBS7a4FTO34tc2_12g2IfqFzU_6pc79-8XMTHiHTk3.IDR48Qyb-0euWu7qpAopmrTQbw_9wyFIumPw2YarkfU",
//       },
//     },
//   ],
//   reviews_count: 153,
//   user: {
//     id: 1,
//     name: "Продавец",
//     raiting: 4.6,
//     reviews_count: 10,
//     type: "individual",
//     created_at: new Date("02-03-2024 10:10:20"),
//   },
// } as IProduct;

const products = [
  {
    id: 1,
    name: "Macbook Pro 13 2020 M1 / как новый",
    price: 65000,
    created_at: new Date("05-05-2024 00:00:00"),
    mainImage: {
      id: 1,
      path: "https://50.img.avito.st/image/1/1.HhK4wbaAsvu-ZQD-iK0xGb5gsP8Kdrb7ChHT_wrSt0kJYrbhvmUA_g4.a86G2hFl_oGGjU-33qiGaBN2WV8b8VKTA5bFck9ob2g",
    },
  },
  {
    id: 2,
    name: "Xiaomi Redmi Note 12 Pro 4G, 8/256 ГБ",
    price: 20000,
    created_at: new Date("05-05-2025 00:00:00"),
    mainImage: {
      id: 1,
      path: "https://10.img.avito.st/image/1/1.uVr2BLaAFbOAode3iG7UVvClF7dEsxGzRNR0t0RnEXFGpxGpgKHXt0A.0oZIahA-KqdaFpRKq9NLl1m02odNsyXQPc6nevn2prY",
    },
  },
  {
    id: 3,
    name: "iPhone Xs, 256 ГБ",
    price: 18000,
    created_at: new Date("05-05-2023 00:00:00"),
    mainImage: {
      id: 1,
      path: "https://90.img.avito.st/image/1/1.kLcVQ7aAPF5j5v5aOV386w7iPlqn9Dhep5NdWqcgOJyl4DhEY-b-WqM.3gRRQVYczsO1Y3bQWUUFW8e1PcoyJcBUM0efvWsZR0A",
    },
  },
  {
    id: 4,
    name: "Apple macbook air 13 2020 m1",
    price: 18000,
    created_at: new Date("01-02-2025 00:00:00"),
    mainImage: {
      id: 1,
      path: "https://60.img.avito.st/image/1/1.kUpxaLaAPaMHzf-nXzLMF2rJP6fD3zmjw7hcp8MLOWHByzm5B83_p8c.y_zNbF4sZIvS8HoyIFoLCb-_a13SF-BYYd3SXpEEm_M",
    },
  },
  {
    id: 5,
    name: "iPhone 12 Pro Max, 256 ГБ",
    price: 32000,
    created_at: new Date("03-08-2024 00:00:00"),
    mainImage: {
      id: 1,
      path: "https://10.img.avito.st/image/1/1.JoA517aAimk_czhsea9i0yJ2iG2LYI5piwfrbYvEj9uIdI5zP3M4bI8.DZYeRV6Vevu0QvIj1Q7mDXN1M9yuNDon4fbIa6TfSVk",
    },
  },
] as IProduct[];

// definePageMeta({
//   //   name: "empty",
//   layout: false,
// });
</script>
