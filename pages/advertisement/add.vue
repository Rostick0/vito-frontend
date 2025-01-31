<template>
  <AdvertisementForm :onSubmit="onSubmit" />
</template>

<script lang="ts" setup>
import api from "~/api";
import { useForm } from "vee-validate";

const { handleSubmit, setErrors } = useForm<IAdvertisementSubmit>();
const { getImageIdsFrom } = useImages();

const onSubmit = handleSubmit(
  async ({
    images,
    product,
    properties_products,
    office,
    vendor,
    ...values
  }) => {
    const images_load = await getImageIdsFrom(images);

    const data = {
      ...values,
      images: images_load,
      product_id: product?.id,
      properties_products: properties_products?.map((item) => item?.id),
      office_id: office?.id,
    } as IAdvertisementCreate;

    // console.log(data);
    const res = await api.advertisements.create({ data });

    if (res?.error) {
      setErrors(res?.errorResponse);
      // errorMessage.value = resErrors?.message;
      return;
    }
  }
);

useHead({
  title: "Добавление объявления",
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
