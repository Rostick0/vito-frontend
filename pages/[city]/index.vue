<template>
  <div class="container mx-auto">
    {{ filters }}
    <div class="flex items-start gap-5">
      <Filter v-if="properties" :properties="properties" />

      <CardAdvertisementRowList
        class="grow"
        v-if="newAdvertisements?.length"
        :advertisements="newAdvertisements"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import debounce from "lodash/debounce";
import { useForm } from "vee-validate";

const { values, handleSubmit } = useForm();

const { filters } = useFilters<{
  "filter[advertisementProperties.product_property_id][in]": Array<
    number | never
  >;
}>({
  initialFilters: {
    "filter[advertisementProperties.product_property_id][in]": [],
  },
});

// const onSubmit = handleSubmit(async (values) => {
//   console.log(values);
// });

const { data: newAdvertisements, get: getNewAdvertisements } = await useApi<
  IAdvertisement[]
>({
  apiMethod: "getAll",
  apiName: "advertisements",
  params: {
    expand: ["mainImage", "user"].join(","),
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
        if (!cur.filter.in[item]) return;

        allFilters[`filter[${item?.replace(/:/g, ".")}][in]`] = JSON.stringify(
          cur.filter.in[item]?.map((item: IOption) => item?.id)
        );
      });
    }

    if (cur?.properties_products?.length) {
      const proeprtyValues = [] as Array<number | never>;

      cur?.properties_products?.forEach(
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
