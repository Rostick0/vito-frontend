<template>
  <form class="bg-white rounded-xl p-4">
    <div class="flex flex-col gap-y-3">
      <VFormComponent
        v-for="property in properties"
        :key="property?.name"
        :field="property"
      />
    </div>
    <!-- {{ properties }} -->
  </form>
</template>

<script lang="ts" setup>
interface IProps {
  properties?: IProperty[];
  // onSubmit: (payload: Event) => void;
}

const props = defineProps<IProps>();

const properties = ref(
  props.properties?.map((property, index) => ({
    type: "multiple-select",
    name: `properties_products.${index}`,
    modelValue: [],

    bind: {
      label: getPropertyLabel(property),
      options: getPropertyOptions(property),
    },
  }))
);
</script>
