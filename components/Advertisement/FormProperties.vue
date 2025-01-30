<template>
  <VFormComponent v-for="field in fields" :key="field.name" :field="field" />
</template>

<script lang="ts" setup>
interface IProps {
  properties?: IProperty[];
  avertisementProperties?: IAdvertisementProperty[];
}

const props = defineProps<IProps>();

const propertyUsedIdValues = generateObjFromArr<
  {
    [_: number]: boolean;
  },
  IAdvertisementProperty
>(props?.avertisementProperties ?? [], (item) => [
  item?.product_property_id,
  true,
]);

const setFormatProperties = () =>
  props.properties?.map((property, index) => {
    const options = property?.productProperties?.map((item) => ({
      ...item,
      value: item?.value ?? item?.propertyValue?.value,
    }));

    return {
      type: "select",
      name: `properties_products.${index}`,
      modelValue: options?.find?.((item) => propertyUsedIdValues?.[item?.id]),

      bind: {
        label: property?.name + (property?.unit ? ` (${property?.unit})` : ""),
        options,
      },
    };
  });

const fields = ref(setFormatProperties());
</script>
