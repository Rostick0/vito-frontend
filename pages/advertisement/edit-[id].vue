<template>
  <AdvertisementForm
    :advertisement="advertisement"
    :categoryId="categoryId"
    :onSubmit="onSubmit"
  />
</template>

<script lang="ts" setup>
import flattenDepth from "lodash/flattenDepth";
import api from "~/api";
import { useForm } from "vee-validate";

const { handleSubmit, setErrors } = useForm<IAdvertisementSubmit>();
const { getImageIdsFrom } = useImages();

const route = useRoute();
const id = route.params?.id?.toString();

const advertisement = await api.advertisements.get({
  id,
  params: {
    expand: convertToExpand([
      "product.vendor",
      "images.image",
      "advertisementProperties.property",
      "advertisementDefects.defect",
    ]),
  },
});

if (!advertisement) navigateTo("/404");

const categoryId = ref(advertisement?.id);

const onSubmit = handleSubmit(
  async ({
    images,
    product,
    advertisement_properties,
    advertisement_defects,
    office,
    vendor,
    ...values
  }) => {
    const images_load = await getImageIdsFrom(images);

    const data = {
      ...values,
      images: images_load,
      product_id: product?.id,
      advertisement_properties: advertisement_properties?.map(
        (item) => item?.id
      ),
      advertisement_defects: flattenDepth(advertisement_defects, 2)?.map(
        (item) => item?.id
      ),
      office_id: office?.id,
    } as IAdvertisementUpdate;

    const res = await api.advertisements.update({ id, data });

    if (res?.error) {
      setErrors(res?.errorResponse);
      // errorMessage.value = resErrors?.message;
      return;
    }
  }
);

useHead({
  title: `Редактирование объявления #${id}`,
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>
