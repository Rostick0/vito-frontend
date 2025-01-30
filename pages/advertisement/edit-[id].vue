<template>
  <AdvertisementForm :advertisement="advertisement" :onSubmit="onSubmit" />
</template>

<script lang="ts" setup>
import api from "~/api";
import { useForm } from "vee-validate";

const { handleSubmit } = useForm<IAdvertisementSubmit>();
const { getImageIdsFrom } = useImages();

const route = useRoute();
const id = route.params?.id?.toString();

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

    const res = await api.advertisements.update({ id, data });
    //   errorMessage.value = resErrors?.message;
  }
);

const advertisement = await api.advertisements.get({
  id,
  params: {
    expand: [
      "product.vendor",
      "images.image",
      "advertisementProperties.property",
    ].join(),
  },
});

useHead({
  title: `Редактирование объявления #${id}`,
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
