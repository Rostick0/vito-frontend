<template>
  <div class="container mx-auto">
    <VendorList v-if="vendors?.length" class="mb-8" :vendors="vendors" />
    <div v-if="newAdvertisements?.length" class="">
      <UiH2>Новинки</UiH2>
      <CardAdvertisementList :advertisements="newAdvertisements" />
      <!-- <CardProductList :products="products" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: vendors, get: getVendors } = await useApi<IVendor[]>({
  apiMethod: "getAll",
  apiName: "vendors",
  params: {
    expand: "image.image",
  },
});
// const vendors = [
//   {
//     id: 1,
//     name: "Apple",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-apple.png" } },
//   },
//   {
//     id: 2,
//     name: "Asus",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-asus.png" } },
//   },
//   {
//     id: 3,
//     name: "Acer",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-acer.png" } },
//   },
//   {
//     id: 4,
//     name: "Hp",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-hp.png" } },
//   },
//   {
//     id: 5,
//     name: "Xiaomi",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-xiaomi.png" } },
//   },
//   {
//     id: 6,
//     name: "Samsung",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-samsung.webp" } },
//   },
//   {
//     id: 7,
//     name: "Chuwi",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-chuwi.png" } },
//   },
//   {
//     id: 8,
//     name: "HKC",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-hkc.webp" } },
//   },
//   {
//     id: 9,
//     name: "DELL",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-dell.webp" } },
//   },
//   {
//     id: 10,
//     name: "Lenovo",
//     imageRel: { id: 1, image: { id: 1, path: "/images/logo-lenovo.png" } },
//   },
//   // { id: 8, name: "Lenovo", imageRel: { id: 1, image: { id: 1, path: "/images/logo-lenovo.png" } }},
// ] as IVendor[];

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

const { data: newAdvertisements, get: getNewAdvertisements } = await useApi<
  IAdvertisement[]
>({
  apiMethod: "getAll",
  apiName: "advertisements",
  params: {
    expand: "mainImage",
    sort: "-id",
    // limit:
  },
});

await Promise.all([getVendors(), getNewAdvertisements()]);
</script>
