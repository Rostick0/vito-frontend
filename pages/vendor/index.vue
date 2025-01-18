<template>
  <div class="container mx-auto">
    <div class="mb-6">
      <img
        class=""
        :src="vendor?.image_rel?.image?.path"
        :title="vendor?.name"
        :alt="vendor?.name"
        v-lazy-load
        decoding="async"
        loading="lazy"
      />
    </div>
    <div class="">
      <CategoryList :categories="categories" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const vendor = {
  id: 1,
  name: "Apple",
  image_rel: {
    id: 1,
    image: {
      id: 1,
      path: "https://c.dns-shop.ru/thumb/st1/fit/148/110/799530d03afe7af0f4961be67d1510e1/803a26bccbf00125dc8bf1c88135c3bb88da4f79225db7c37b21ac33dcc68aca.png.webp",
    },
  },
} as IVendor;

const categories = [
  {
    id: 1,
    name: "Смартфоны",
    image_rel: {
      id: 1,
      image_id: 1,
      image: {
        path: "https://c.dns-shop.ru/thumb/st4/fit/148/110/b63664764ed23b8e33e715dff8bedc95/13792c617d055de06e08219dccd4a0cbc1d47833f5ae5500c617f2b9475401f5.jpg.webp",
      },
    },
  },
  {
    id: 2,
    name: "Ноутбуки",
    image_rel: {
      id: 2,
      image_id: 2,
      image: {
        path: "https://c.dns-shop.ru/thumb/st1/fit/148/110/0435e29ac3740cb35126d3f224fb4938/0003b0feb05a84dc644c305553f77165ffe0c34c05282cdea7ec826081659b5e.jpg.webp",
      },
    },
  },
  {
    id: 3,
    name: "Планшеты",
    image_rel: {
      id: 3,
      image_id: 3,
      image: {
        path: "https://c.dns-shop.ru/thumb/st1/fit/148/110/41daa76417d5dda3a0ea5455ed0fbc2a/e74efe2c69b33de86d68a356b71e023e3ac522c285d42026ab57202853a22fe8.jpg.webp",
      },
    },
  },
  {
    id: 4,
    name: "Моноблоки",
    image_rel: {
      id: 4,
      image_id: 4,
      image: {
        path: "https://c.dns-shop.ru/thumb/st1/fit/148/110/eafb8b724d2b112d5460d9e71a9e3104/9d3afab0e6626b8021f0b96e8161b6e3e4cd1aa330b524ba7230ebe24fe2a5b5.jpg.webp",
      },
    },
  },
  {
    id: 5,
    name: "Моноблоки",
    image_rel: {
      id: 5,
      image_id: 5,
      image: {
        path: "https://c.dns-shop.ru/thumb/st4/fit/148/110/ec77846e84e8424c20fdf5a758ecbd51/971d77d92246786db0880b4e904004a193363ac11fedb90e93ae1dfc68be3dbf.jpg.webp",
      },
    },
  },
  {
    id: 6,
    name: "Персональные компьютеры",
    image_rel: {
      id: 6,
      image_id: 6,
      image: {
        path: "https://c.dns-shop.ru/thumb/st1/fit/148/110/85c4c3d0224a4089cdb41eedbfdfccde/62b8cb2c5fab68cb48fa34dcd2a5dedf91a6b568899dcc949275df2bb4c92ec0.jpg.webp",
      },
    },
  },
] as ICategory[];
</script>
