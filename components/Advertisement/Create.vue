<template>
  <AdvertisementForm :categoryId="categoryId" :onSubmit="onSubmit" />
</template>

<script lang="ts" setup>
import flattenDepth from "lodash/flattenDepth";
import api from "~/api";
import { useForm } from "vee-validate";

interface IProps {
  categoryId: number;
}

const props = defineProps<IProps>();

const { handleSubmit, setErrors } = useForm<IAdvertisementSubmit>();
const { getImageIdsFrom } = useImages();

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
    } as IAdvertisementCreate;

    const res = await api.advertisements.create({ data });

    if (res?.error) {
      setErrors(res?.errorResponse);
      // errorMessage.value = resErrors?.message;
      return;
    }
  }
);
</script>
