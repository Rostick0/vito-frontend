<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiDatePicker
      :placeholder="placeholder"
      class="control__datepicker"
      :format="format"
      @update:model-value="handleInput"
      :modelValue="modelValue"
    />
  </UiControl>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: String,
  placeholder: String,
  modelValue: [Date, String, Number, Object],
  invalid: Boolean,
  rightIcon: String,
  message: String,
  label: String,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
  deps: [Array, Object, String, Number],
  onDepsChange: {
    type: Function,
  },
  forceDeps: Boolean,
  format: {
    type: Function,
    defaultValue: (date) => {
      if (!date) {
        return;
      }
      return `${date?.getDate()}/${
        date?.getMonth() + 1
      }/${date?.getFullYear()}`;
    },
  },
});

function handleInput(date) {
  emits("update:modelValue", date || undefined);
}

const ctx = computed(() => ({
  modelValue: props.modelValue,
  updateModelValue: (value) => emits("update:modelValue", value),
}));

watch(
  () => props.deps,
  (cur, prev) => {
    if (
      Array.isArray(prev)
        ? prev.find((item) => item !== undefined)
        : prev !== undefined
    ) {
      props?.onDepsChange?.(ctx.value);
    }
  },
  {
    deep: true,
    immediate: props.forceDeps,
  }
);
</script>

<style lang="scss"></style>
