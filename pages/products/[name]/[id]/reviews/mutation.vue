<template>
  <div class="container mx-auto">
    <UiH2>Отзыв</UiH2>
    <form @submit="onSubmit">
      <div class="flex flex-wrap gap-x-2 gap-y-3 max-w-md">
        <VFormComponent :field="text" />
        <VFormComponent :field="mark" />
      </div>
      <UiBtn>Отправить</UiBtn>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";

const route = useRoute();

const defaultParams = {
  reviewtable_id: +route.params.id,
  reviewtable_type: "app\\models\\Product",
};

const { data, get } = await useApi({
  apiName: "reviews",
  apiMethod: "getMy",
  params: {
    ...defaultParams,
  },
});

await get();

const { handleSubmit, setErrors } = useForm();
// const data
const onSubmit = handleSubmit(async (values) => {
  const data = {
    ...values,
  };

  const res = data.value?.id
    ? await api.reviews.update({
        id: data.value.id,
        data: data as IReviewUpdate,
      })
    : await api.reviews.create({
        data: { ...data, ...defaultParams } as IReviewCreate,
      });

  if (res?.error) {
    setErrors(res?.errorResponse);
    return;
  }
});

const text = ref({
  type: "textarea",
  name: "text",
  modelValue: "",
  rules: "required|max:255",

  bind: {
    label: "Текст отзыва",
    placeholder: "Поделитесь вашими впечатлениями",
    rows: 3,
  },
});

const mark = ref({
  type: "stars",
  name: "mark",
  modelValue: "",
  rules: "required|max:255",

  bind: {
    label: "Текст отзыва",
    placeholder: "Поделитесь вашими впечатлениями",
    rows: 3,
  },
});
</script>
