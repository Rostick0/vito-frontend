<template>
  <div class="tags">
    <div
      class="tag"
      v-for="option in options"
      :key="option.id"
      @click="handleSelect(option)"
      :class="[
        modelValue && modelValue?.find?.((i) => option?.id == i?.id)
          ? 'bg-sky-400 text-white'
          : 'bg-white',
      ]"
    >
      {{ option?.name ?? option?.value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);

interface IProps {
  modelValue?: Array<IOption | never>;
  options: IOption[];
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: [],
});

const handleSelect = (option: IOption) => {
  if (props.modelValue && props.modelValue?.find((i) => option.id == i.id)) {
    emits(
      "update:modelValue",
      props.modelValue?.filter((i) => i.id !== option.id)
    );
  } else {
    emits("update:modelValue", [...props.modelValue, option]);
  }
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
}

.tag {
  user-select: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  transition: background 0.3s, color 0.3s;
  padding: 8px 16px;
}
</style>
