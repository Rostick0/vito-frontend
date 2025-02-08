<template>
  <UiControl
    :label="label"
    :hideMessage="hideMessage"
    :invalid="!!errorMessage"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiMultiMSelect
      v-bind="props"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </UiControl>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: String,
  hideMessage: String,
  message: String,
  errorMessage: String,
  rightIcon: String,
  limit: {
    type: Number,
    default: 20,
  },
  options: {
    type: [Array],
    default: [],
  },
  modelValue: {
    type: [Object, Number, String, Array],
  },
  searchFn: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
  deps: [Array, Object, String, Number],
  onDepsChange: {
    type: Function,
  },
  forceDeps: Boolean,
});
</script>
