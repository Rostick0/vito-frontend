<template>
  <div class="container mx-auto">
    <!-- {{ advertisement?.images?.map((item) => item?.image) }} -->
    <form class="max-w-xl" @submit="onSubmit" method="post">
      <div class="flex flex-col gap-y-8 mb-8">
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Параметры</h2>
          <div class="flex flex-col gap-y-3">
            <div class="">
              <VFormComponent :field="title" />
              <span class="text-xs opacity-75 mt-2"
                >Например, "iPhone 15 Pro Max 256gb" или "MacBook M1 Pro 16/512
                gb"</span
              >
            </div>
            <VFormComponent :field="is_new" />
            <!-- <VFormComponent :field="is_new" /> -->
          </div>
        </div>
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Характеристики</h2>
          <div class="flex flex-col gap-y-3">
            <VFormComponent :field="vendor" />
            <VFormComponent v-if="vendor.modelValue" :field="product" />
            <AdvertisementFormProperties
              v-if="properties?.length"
              :properties="properties"
              :avertisementProperties="advertisement?.advertisementProperties"
            />
          </div>
        </div>
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Подробности</h2>
          <div class="flex flex-col gap-y-3">
            <VFormComponent :field="images" />
            <VFormComponent :field="description" />
          </div>
        </div>
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Местоположение</h2>
          <div class="flex flex-col gap-y-3">
            <VFormComponent :field="office" />
            <UiYandexMap
              :cords="[55.746846, 37.62085]"
              :functionInit="initMap"
            />
          </div>
        </div>
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Продажа</h2>
          <div class="flex flex-col gap-y-3">
            <VFormComponent :field="price" />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-3 max-w-md">
        <UiBtn class="grow justify-center">Создать и опубликовать</UiBtn>
        <UiBtn
          class="grow justify-center"
          bgColor="bg-gray-300"
          color="text-black"
          @click.prevent
          >Сохранить черновик</UiBtn
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";

interface IProps {
  advertisement?: IAdvertisement;
  onSubmit: (payload: Event) => void;
}
const props = defineProps<IProps>();

const offices = [
  {
    id: 1,
    name: "Башня Федерация",
    address: "Пресненская наб., 12, Москва",
    coordinates: [55.747774, 37.540169],
  },
  {
    id: 2,
    name: "Бизнес-центр «Москва-Сити»",
    address: "1-й Красногвардейский пр-д, 21, стр. 2, Москва",
    coordinates: [55.745314, 37.534392],
  },
  {
    id: 3,
    name: "Домников Бизнес Центр",
    address: "ул. Домодедовская, 20к2, Москва",
    coordinates: [55.608699, 37.717153],
  },
  {
    id: 4,
    name: "Офисный центр «Белые Сады»",
    address: "Ленинградский просп., 47, Москва",
    coordinates: [55.781123, 37.561648],
  },
  {
    id: 5,
    name: "Даниловский Форт",
    address: "Варшавское ш., 9, Москва",
    coordinates: [55.708237, 37.624609],
  },
  {
    id: 6,
    name: "Бизнес-парк «Румянцево»",
    address: "Киевское шоссе, 22-й км, вл4с2, Москва",
    coordinates: [55.643209, 37.425598],
  },
  {
    id: 7,
    name: "Бизнес-центр «Омега Плаза»",
    address: "Ленинская слобода, 19, Москва",
    coordinates: [55.710674, 37.656503],
  },
  {
    id: 8,
    name: "Бизнес-центр «Новоспасский двор»",
    address: "Кожевническая ул., 14, стр. 5, Москва",
    coordinates: [55.728909, 37.649321],
  },
  {
    id: 9,
    name: "Офисный комплекс «W Plaza II»",
    address: "Очаковское ш., 34, стр. 2, Москва",
    coordinates: [55.677528, 37.451733],
  },
  {
    id: 10,
    name: "Бизнес-центр «Арма»",
    address: "Нижняя Сыромятническая ул., 10, стр. 10, Москва",
    coordinates: [55.753423, 37.668158],
  },
];

const title = ref({
  type: "text",
  name: "title",
  modelValue: props?.advertisement?.title ?? "",

  bind: {
    label: "Название объявления",
    placeholder: "Введите вашу почту",
  },
});

// const category = ref({
//   type: "select",
//   name: "category",
//   modelValue: props?.advertisement?.category ?? "",

//   bind: {
//     label: "Категория",
//     placeholder: "Выберите категорию",
//     debounceMs: 200,
//     // searchFn: fetchCategory,
//   },
// });

const is_new = ref({
  type: "switch",
  name: "is_new",
  modelValue: props?.advertisement?.is_new ?? false,

  bind: {
    title: "Товар новый",
  },
});

const vendor = ref({
  type: "select",
  name: "vendor",
  modelValue: props?.advertisement?.product?.vendor ?? null,

  bind: {
    label: "Производитель",
    placeholder: "Выберите производителя вашей техники",
    searchFn: fetchVendor,
  },
});

const product = ref({
  type: "select",
  name: "product",
  modelValue: props?.advertisement?.product ?? null,

  bind: {
    label: "Наименование",
    placeholder: "Выберите название товара",
    searchFn: fetchProduct,
  },
});

const { data: properties, get: getProperties } = await useApi<IProperty[]>({
  apiName: "properties",
  apiMethod: "getAll",
  params: {
    expand: "productProperties.propertyValue",
    "filter[is_specified]": 1,
  },
  // filters
});

watch(
  () => vendor.value.modelValue,
  (cur) => {
    product.value.modelValue = null;
  }
);

if (product.value?.modelValue?.id) {
  await getProperties(
    {},
    {
      "filter[productProperties.product_id]": product.value?.modelValue?.id,
    }
  );
}

watch(
  () => product.value.modelValue,
  (cur) => {
    if (!cur) return (properties.value = []);

    getProperties(
      {},
      {
        "filter[productProperties.product_id]": cur?.id,
      }
    );
    // api.properties.getAll({
    //   params: {
    //     "filter[productProperties.product_id]": cur?.id,
    //     "filter[is_specified]": 1,
    //   },
    // });
  }
);

const images = ref({
  type: "multiple-photo-loader",
  name: "images",
  modelValue: props?.advertisement?.images?.map((item) => item?.image) ?? [],

  bind: {
    label: "Фотографии",
    placeholder: "Выберите производителя вашей техники",
  },
});

const description = ref({
  type: "textarea",
  name: "description",
  rules: "max:65536",
  modelValue: props?.advertisement?.description ?? null,

  bind: {
    label: "Название объявления",
    placeholder: "Введите вашу почту",
    rows: 4,
  },
});

const office = ref({
  type: "select",
  name: "office",
  modelValue: props?.advertisement?.office ?? "",

  bind: {
    label: "Организация",
    placeholder: "Выберите организавцию, куда будете доставлять",
    // searchFn: fetchVendor,
    options: offices,
  },
});

const price = ref({
  type: "text",
  name: "price",
  modelValue: props?.advertisement?.price ?? "",

  bind: {
    label: "Цена (в рублях)",
    placeholder: "Укажите желаемую стоимость",
    // type: "number",
    maska: "S#",
    maskaTokens: "S:[0-9]:multiple",
    maskaReversed: true,
  },
});

// async function fetchCategory(
//   _: any,
//   searchString: string,
//   limit: number,
//   page: number
// ) {
//   return await api.categories.getAll({
//     params: {
//       "filter[name][like]": searchString,
//       limit,
//       page,
//     },
//   });
// }

async function fetchVendor(
  _: any,
  searchString: string,
  limit: number,
  page: number
) {
  return await api.vendors.getAll({
    params: {
      "filter[name][like]": searchString,
      limit,
      page,
    },
  });
}

async function fetchProduct(
  _: any,
  searchString: string,
  limit: number,
  page: number
) {
  return await api.products.getAll({
    params: {
      "filter[name][like]": searchString,
      "filter[vendor_id]": vendor.value.modelValue?.id,
      limit,
      page,
    },
  });
}

const mapTo = ref();
const initMap = (maps: any, myMap: any) => {
  const pointers = offices;

  pointers.forEach((pointer) => {
    const place = new maps.Placemark(pointer?.coordinates, {
      iconCaption: pointer?.name,
      balloonContentBody: pointer?.address,
      data: pointer,
    });
    myMap.geoObjects.add(place);
  });

  myMap.geoObjects.events.add("click", function (e: any) {
    // Получим ссылку на геообъект, по которому кликнул пользователь.
    var target = e.get("target");
    const data = target?.properties?._data?.data;

    office.value.modelValue = data;

    // Переместим центр карты по координатам метки с учётом заданных отступов.
    myMap.panTo(target.geometry.getCoordinates(), { useMapMargin: true });
  });

  mapTo.value = (coords: number[]) =>
    myMap.panTo(coords, { useMapMargin: true });
};

watch(
  () => office.value.modelValue,
  (cur) => {
    if (!cur) return;

    mapTo.value?.(cur?.coordinates);
  }
);
</script>

<style lang="scss" scoped></style>
