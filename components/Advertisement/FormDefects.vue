<template>
  <VFormComponent v-for="field in fields" :key="field.name" :field="field" />
</template>

<script lang="ts" setup>
interface IProps {
  defectTypes?: IDefectType[];
  advertisementDefects?: IAdvertisementDefect[];
}

const props = withDefaults(defineProps<IProps>(), {
  advertisementDefects: [],
});

const fields = ref(
  props.defectTypes?.map((item, i) => ({
    type: "tag",
    name: `advertisement_defects.${i}`,
    modelValue: props?.advertisementDefects
      ?.filter((el) => item?.id === el?.defect?.defect_type_id)
      ?.map((item) => item?.defect),

    bind: {
      label: item?.name,
      options: item?.defects,
    },
  }))
);
</script>
