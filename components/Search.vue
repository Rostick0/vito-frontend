<template>
  <div
    class="relative w-full"
    @focusin="onFocusin"
    @focusout="onFocusout"
    ref="wrapper"
    tabindex="-1"
  >
    <div class="flex relative">
      <input
        class="border-2 border-sky-400 rounded-lg text-base relative p-2 w-full"
        ref="searchInput"
        v-model="search"
        type="text"
        :placeholder="placeholder"
      />
      <button
        class="flex main-search__close absolute items-center self-center"
        @click="search = ''"
        v-show="search?.length > 1"
        title="Сбросить поиск"
        type="reset"
      >
        <IconClose class="fill-red-600" />
      </button>
      <UiBtn
        class="flex main-search__send"
        title="Search"
        :variant="variant"
        @click="redirectToSearch"
      >
        <IconSearch class="fill-white" />
      </UiBtn>
    </div>
    <div
      class="main-search__options bg-white rounded-lg flex flex-col gap-y-2 absolute py-3 px-2 overflow-auto z-10"
      v-show="isShow"
    >
      <template v-if="products?.length">
        <NuxtLink
          class="flex gap-x-2"
          :to="`/products/${product?.link_name}`"
          @click="isShow = false"
          v-for="product in products"
          :key="product?.id"
        >
          <div class="shrink-0 w-12 h-12">
            <img
              class="object-contain"
              :scr="product?.main_image?.image?.path_webp"
              :alt="product?.title"
              decoding="async"
              loading="lazy"
              v-lazy-load
              width="48"
              height="48"
            />
          </div>
          <!-- <div class="main-search-option__title">{{ product?.title }}</div> -->
        </NuxtLink>
        <NuxtLink
          class="mt-2"
          v-if="productMeta?.last_page > 1"
          :to="`/search?search=${search}`"
          @click="isShow = false"
          >Посмотреть все результаты</NuxtLink
        >
      </template>
      <div class="text-red" v-else>Отсутствуют результаты</div>
    </div>
  </div>
</template>

<script setup>
import debounce from "lodash/debounce";

const areEnoughLetters = (valLength) => valLength >= 2;

const searchInput = ref();

const props = defineProps({
  placeholder: {
    type: String,
    default: "Поиск товаров",
  },
  variant: String,
});

const search = ref("");
const isShow = ref();

const wrapper = ref();
const onFocusin = () =>
  areEnoughLetters(search.value?.length) && (isShow.value = true);
const onFocusout = (e) =>
  !wrapper.value.contains(e.relatedTarget) && (isShow.value = false);

// watch(
//   () => search.value?.length,
//   debounce((newV) => {
//     isShow.value = areEnoughLetters(newV) ? true : false;
//   }, 200)
// );

// const { filters } = useFilters({
//   initialFilters: {
//     search: "",
//   },
// });

// const { data: products, meta: productMeta } = await useApi({
//   name: "products.getAll",
//   filters,
//   params: {
//     // extendsCount: "cars",
//     // sort: "cars_count,-name",
//     limit: 6,
//   },
// });

// const redirectToSearch = () => navigateTo(`/search?search=${search.value}`);

// watch(
//   () => search.value,
//   debounce(async (newV) => {
//     if (!isShow.value) return;

//     filters.value["search"] = newV;
//   }, 500)
// );
</script>

<style lang="scss" scoped>
.main-search {
  &__close {
    right: 72px;
  }

  &__send {
    padding: 10px 20px;
    margin-left: -14px;
    padding-left: 30px;
  }

  &__options {
    width: calc(100% - 60px);
  }

  @media (max-width: 768px) {
    &__send {
      padding: 11.25px;
      padding-left: 26px;
    }

    &__close {
      right: 60px;
    }

    &__options {
      width: 100%;
    }
  }
}
</style>
