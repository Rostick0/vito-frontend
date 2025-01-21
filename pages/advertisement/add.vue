<template>
  <div class="container mx-auto">
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
          </div>
        </div>
        <div class="">
          <h2 class="font-bold text-2xl mb-4">Подробности</h2>
          <div class="flex flex-col gap-y-3">
            <VFormComponent :field="images" />
            <VFormComponent :field="description" />
          </div>
        </div>
      </div>

      <div class="flex gap-x-2">
        <UiBtn>Создать и опубликовать</UiBtn>
        <UiBtn bgColor="bg-gray-300" color="text-black" @click.prevent
          >Сохранить как чероновик</UiBtn
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";

const showIndex = ref(0);
const { handleSubmit } = useForm<any>();

const title = ref({
  type: "text",
  name: "title",
  modelValue: "",

  bind: {
    label: "Название объявления",
    placeholder: "Введите вашу почту",
  },
});

// const category = ref({
//   type: "select",
//   name: "category",
//   modelValue: "",

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
  modelValue: false,

  bind: {
    title: "Товар новый",
  },
});

const vendor = ref({
  type: "select",
  name: "vendor",
  modelValue: null,

  bind: {
    label: "Производитель",
    placeholder: "Выберите производителя вашей техники",
    options: [
      { id: 1, name: "123" },
      { id: 2, name: "ads" },
    ],
  },
});

const images = ref({
  type: "multiple-photo-loader",
  name: "images",
  modelValue: null,

  bind: {
    label: "Фотографии",
    placeholder: "Выберите производителя вашей техники",
  },
});

const description = ref({
  type: "textarea",
  name: "description",
  rules: "max:65536",
  modelValue: "",

  bind: {
    label: "Название объявления",
    placeholder: "Введите вашу почту",
    rows: 4,
  },
});

const onSubmit = handleSubmit(async (values) => {
  //   const resErrors = await login(values);
  console.log(values);
  //   errorMessage.value = resErrors?.message;
});

// async function fetchCategory(
//   _: any,
//   searchString: string,
//   limit: number,
//   page: number
// ) {
//   return await api.categories.getAll({
//     params: {
//       "filterLIKE[name]": searchString,
//       limit,
//       page,
//     },
//   });
// }

useHead({
  title: "Вход в аккаунт",
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>

<style lang="scss" scoped></style>
