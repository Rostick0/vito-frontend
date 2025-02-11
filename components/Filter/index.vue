<template>
  <form class="bg-white rounded-xl p-4">
    <div class="flex flex-col gap-y-3">
      <VFormComponent :field="vendor" />
      <VFormComponent :field="product" />

      <VFormComponent
        v-for="property in properties"
        :key="property?.name"
        :field="property"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import api from "~/api";

interface IProps {
  properties?: IProperty[];
  // onSubmit: (payload: Event) => void;
}

const props = defineProps<IProps>();

const vendor = ref({
  type: "multiple-select",
  name: "filter.in.product:vendor_id",
  modelValue: [],

  bind: {
    label: "Производитель",
    searchFn: fetchVendor,
    // options: getPropertyOptions(property),
  },
});

const product = ref({
  type: "multiple-select",
  name: "filter.in.product_id",
  // name: `filter[product_id][in]`,
  modelValue: [],

  bind: {
    label: "Модель",
    searchFn: fetchProduct,
    // options: getPropertyOptions(property),
  },
});

const properties = ref(
  props.properties?.map((property, index) => ({
    type: "multiple-select",
    name: `advertisement_properties.${index}`,
    modelValue: [],

    bind: {
      label: getPropertyLabel(property),
      options: getPropertyOptions(property),
    },
  }))
);

async function fetchVendor(
  _: any,
  searchString: string,
  limit: number,
  page: number
) {
  return await api.vendors.getAll({
    params: {
      "filter[name][like]": searchString,
      limit,
      page,
    },
  });
}

async function fetchProduct(
  _: any,
  searchString: string,
  limit: number,
  page: number
) {
  return await api.products.getAll({
    params: {
      "filter[name][like]": searchString,
      // "filter[vendor_id]": vendor.value.modelValue?.id,
      limit,
      page,
    },
  });
}
</script>
