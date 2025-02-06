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
    const options = getPropertyOptions(property);

    return {
      type: "select",
      name: `properties_products.${index}`,
      modelValue: options?.find?.((item) => propertyUsedIdValues?.[item?.id]),

      bind: {
        label: getPropertyLabel(property),
        options,
      },
    };
  });

const fields = ref(setFormatProperties());
</script>
