<template>
  <div class="container mx-auto">
    <UiH2>Отзыв - {{ product?.name }}</UiH2>
    <form @submit="onSubmit">
      <div class="flex flex-wrap gap-x-2 gap-y-3 mb-8 max-w-md">
        <VFormComponent :field="text" />
        <VFormComponent :field="mark" />
      </div>
      <UiBtn>{{ review?.id ? "Изменить" : "Отправить÷" }} </UiBtn>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { useToast } from "vue-toastification";
import api from "~/api";

const route = useRoute();

const defaultParams = {
  reviewtable_id: +route.params.id,
  reviewtable_type: "app\\models\\Product",
};

const toast = useToast();

const { data: product, get: getProduct } = await useApi<IProduct>({
  apiName: "products",
  apiMethod: "get",
  params: {
    field: "name",
  },
  requestParams: {
    id: route.params.id,
  },
});

const { data: review, get: getReview } = await useApi<IReview>({
  apiName: "reviews",
  apiMethod: "getMy",
  params: {
    ...defaultParams,
  },
});

await Promise.all([getProduct(), getReview()]);

const { handleSubmit, setErrors } = useForm();

const onSubmit = handleSubmit(async (values) => {
  const data = {
    ...values,
  };

  const res = review.value?.id
    ? await api.reviews.update({
        id: review.value.id,
        data: data as IReviewUpdate,
      })
    : await api.reviews.create({
        data: { ...data, ...defaultParams } as IReviewCreate,
      });

  if (res?.error) {
    setErrors(res?.errorResponse);
    toast.error("Ошибка валидации");
    return;
  }

  toast.success("Отзыв успешно " + (review.value?.id ? "изменён" : "создан"));
});

const text = ref({
  type: "textarea",
  name: "text",
  modelValue: review.value?.text ?? "",
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
  modelValue: review.value?.mark ?? "",
  rules: "required|max:255",

  bind: {
    label: "Текст отзыва",
    placeholder: "Поделитесь вашими впечатлениями",
    rows: 3,
  },
});
</script>
