<template>
  {{ fields[0] }}
  <VFormComponent v-for="field in fields" :key="field.name" :field="field" />
</template>

<script lang="ts" setup>
interface IProps {
  properties?: IProperty[];
}

const props = defineProps<IProps>();

const setFormatProperties = () =>
  props.properties?.map((property, index) => ({
    type: "select",
    name: `properties_products.${index}`,
    modelValue: null,

    bind: {
      label: property?.name + (property?.unit ? ` (${property?.unit})` : ""),
      options: property?.productProperties?.map((item) => ({
        ...item,
        value: item?.value ?? item?.propertyValue?.value,
      })),
    },
  }));

const fields = ref(setFormatProperties());

// watch(props, setFormatProperties);
</script>
