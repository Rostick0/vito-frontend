<template>
  <div class="container mx-auto">
    <div class="flex items-start gap-5">
      <Filter v-if="properties" :properties="properties" />

      <LazyCardAdvertisementRowList
        class="grow"
        v-if="newAdvertisements?.length"
        :advertisements="newAdvertisements"
      />
      <LazyUiNotFound v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import debounce from "lodash/debounce";
import { useForm } from "vee-validate";

const { values, handleSubmit } = useForm();

const { filters } = useFilters<{
  "filter[product.vendor_id][in]"?: Array<number>;
  "filter[product_id][in]"?: Array<number>;
  "filter[advertisementProperties.product_property_id][in]"?: Array<number>;
}>();

// const onSubmit = handleSubmit(async (values) => {
//   console.log(values);
// });

const { data: newAdvertisements, get: getNewAdvertisements } = await useApi<
  IAdvertisement[]
>({
  apiMethod: "getAll",
  apiName: "advertisements",
  params: {
    expand: convertToExpand(["mainImage", "user"]),
    sort: "-id",
    // limit:
  },
  filters,
});

const { data: properties, get: getProperties } = await useApi<IProperty[]>({
  apiName: "properties",
  apiMethod: "getAll",
  params: {
    expand: "productProperties.propertyValue",
    "filter[is_specified]": 1,
  },
  // filters
});

await Promise.all([getNewAdvertisements(), getProperties()]);

const initWatch = ref(false);
watch(
  values,
  debounce((cur) => {
    if (!initWatch.value) return (initWatch.value = true);

    const allFilters = {} as Record<string, string | Array<string | number>>;

    if (cur?.filter?.in) {
      Object.keys(cur?.filter?.in).forEach((item) => {
        if (!cur.filter.in[item]?.length) return;

        allFilters[`filter[${item?.replace(/:/g, ".")}][in]`] = JSON.stringify(
          cur.filter.in[item]?.map((item: IOption) => item?.id)
        );
      });
    }

    if (cur?.advertisement_properties?.length) {
      const proeprtyValues = [] as Array<number | never>;

      cur?.advertisement_properties?.forEach(
        (productProperties: IProductProperty[]) =>
          productProperties?.forEach(
            (item) => item?.id && proeprtyValues.push(item?.id)
          )
      );

      if (proeprtyValues?.length)
        allFilters["filter[advertisementProperties.product_property_id][in]"] =
          JSON.stringify(proeprtyValues);
    }

    filters.value = allFilters;
  }, 750)
);
</script>
