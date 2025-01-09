<template>
  <!-- <NuxtLayout name="default" :headerIsSticky="false"> -->
  <div class="container mx-auto">
    <UiH1>{{ product?.name }}</UiH1>
    <div class="flex gap-x-12 items-start">
      <div class="grow">
        <!-- <div class=" mx-auto" style="max-width: 75%;"> -->
        <ProductImages :product="product" :images="product?.images" />
        <!-- </div> -->
        <div class="flex flex-col gap-y-10 mt-16">
          <ProductParams title="О смартфоне">
            <div class="grid gap-2 grid-cols-2">
              <ProductParamsItem title="Экран">Без дефектов</ProductParamsItem>
              <ProductParamsItem title="Корпус">Без дефектов</ProductParamsItem>
              <ProductParamsItem title="Комплект"
                >Коробка, Блок зарядки, Провод зарядки</ProductParamsItem
              >
            </div>
          </ProductParams>
          <ProductParams title="Характеристики">
            <div class="grid gap-2 grid-cols-2">
              <ProductParamsItem title="Состояние">Хорошее</ProductParamsItem>
              <ProductParamsItem title="Производитель">Apple</ProductParamsItem>
              <ProductParamsItem title="Модель"
                >iPhone 15 Pro Max</ProductParamsItem
              >
              <ProductParamsItem title="Встроенная память"
                >256 ГБ</ProductParamsItem
              >
              <ProductParamsItem title="Цвет">Чёрный</ProductParamsItem>
              <ProductParamsItem title="Состояние аккумулятора"
                >88 %</ProductParamsItem
              >
              <NuxtLink class="text-sky-400" to="#"
                >Все характеристики</NuxtLink
              >
            </div>
          </ProductParams>
          <ProductParams title="Описание"
            >Продам iPhone 15 Pro Max 256gb. Европеец, ограниченная гарантия до
            08.01.2025 года. Без косяков и без дефектов.
            Звоните!!!</ProductParams
          >
        </div>

        <div class="mt-10">
          <UiH2>Рекомендации для вас</UiH2>
          <CardProductList :products="products" />
        </div>
      </div>
      <div
        class="bg-white rounded-lg shrink-0 p-4 sticky top-4 w-full max-w-80"
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
    </div>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script lang="ts" setup>
const route = useRoute();

const product = {
  id: 1,
  name: "iPhone 15 Pro Max, 256 ГБ",
  price: 85000,
  raiting: 4.53,
  is_show: true,
  category_id: 1,
  created_at: new Date("05-02-2024 00:01:20"),
  //   main_image: IImage;
  category: {
    id: 1,
    name: "Смартфоны",
  },
  images: [
    {
      id: 1,
      path: "https://20.img.avito.st/image/1/1.Dug59La4ogEPXWAEKaxRuSJVoAeHVSAJT1CgA4ldqguP.huK_U9lVQDbmkskoavLofvO-dpTfHtlye-lQlfRRbFo",
    },
    {
      id: 2,
      path: "https://30.img.avito.st/image/1/1.Qyf7X7a4787N9i3L8RJbJf3-7chF_m3GjfvtzEv258RN.k-2MyUACTMmuc1XodWEkU-P88M9aOGjnWkmycCoKRL4",
    },
    {
      id: 3,
      path: "https://80.img.avito.st/image/1/1.przNLLa4ClX7hchQjRb67daNCFNzjYhdu4gIV32FAl97.qIDjXX209e_FdYfnMu2J8pqYspd7N45_g4BGV5CuO4k",
    },
    {
      id: 4,
      path: "https://30.img.avito.st/image/1/1.RlA5_ra46rkPVyi8OcdMASJf6L-HX2ixT1rou4lX4rOP.BfchIu3cBkXcqrGDSAmLdxS52B5ARB7mtB-OeFDF-n0",
    },
    {
      id: 5,
      path: "https://80.img.avito.st/image/1/1.udqBS7a4FTO34tc2_12g2IfqFzU_6pc79-8XMTHiHTk3.IDR48Qyb-0euWu7qpAopmrTQbw_9wyFIumPw2YarkfU",
    },
  ],
  reviews_count: 153,
  user: {
    id: 1,
    name: "Продавец",
    raiting: 4.6,
    reviews_count: 10,
    type: "individual",
    created_at: new Date("02-03-2024 10:10:20"),
  },
} as IProduct;

const { favoriteHas, favoriteToggle } = useFavorite();

const products = [
  {
    id: 1,
    name: "Macbook Pro 13 2020 M1 / как новый",
    price: 65000,
    created_at: new Date("05-05-2024 00:00:00"),
    main_image: {
      id: 1,
      path: "https://50.img.avito.st/image/1/1.HhK4wbaAsvu-ZQD-iK0xGb5gsP8Kdrb7ChHT_wrSt0kJYrbhvmUA_g4.a86G2hFl_oGGjU-33qiGaBN2WV8b8VKTA5bFck9ob2g",
    },
  },
  {
    id: 2,
    name: "Xiaomi Redmi Note 12 Pro 4G, 8/256 ГБ",
    price: 20000,
    created_at: new Date("05-05-2025 00:00:00"),
    main_image: {
      id: 1,
      path: "https://10.img.avito.st/image/1/1.uVr2BLaAFbOAode3iG7UVvClF7dEsxGzRNR0t0RnEXFGpxGpgKHXt0A.0oZIahA-KqdaFpRKq9NLl1m02odNsyXQPc6nevn2prY",
    },
  },
  {
    id: 3,
    name: "iPhone Xs, 256 ГБ",
    price: 18000,
    created_at: new Date("05-05-2023 00:00:00"),
    main_image: {
      id: 1,
      path: "https://90.img.avito.st/image/1/1.kLcVQ7aAPF5j5v5aOV386w7iPlqn9Dhep5NdWqcgOJyl4DhEY-b-WqM.3gRRQVYczsO1Y3bQWUUFW8e1PcoyJcBUM0efvWsZR0A",
    },
  },
  {
    id: 4,
    name: "Apple macbook air 13 2020 m1",
    price: 18000,
    created_at: new Date("01-02-2025 00:00:00"),
    main_image: {
      id: 1,
      path: "https://60.img.avito.st/image/1/1.kUpxaLaAPaMHzf-nXzLMF2rJP6fD3zmjw7hcp8MLOWHByzm5B83_p8c.y_zNbF4sZIvS8HoyIFoLCb-_a13SF-BYYd3SXpEEm_M",
    },
  },
  {
    id: 5,
    name: "iPhone 12 Pro Max, 256 ГБ",
    price: 32000,
    created_at: new Date("03-08-2024 00:00:00"),
    main_image: {
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
