<template>
  <UiControl
    :label="label"
    :hideMessage="hideMessage"
    :invalid="!!errorMessage"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiMultiSelect
      v-bind="$attrs"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </UiControl>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);

interface IProps {
  label?: string;
  message?: string;
  hideMessage?: boolean;
  errorMessage?: string;
  rightIcon?: string;
}

const props = defineProps<IProps>();
// const props = defineProps({
//   limit: {
//     type: Number,
//     default: 20,
//   },
//   options: {
//     type: [Array],
//     default: [],
//   },
//   modelValue: {
//     type: [Object, Number, String, Array],
//   },
//   searchFn: {
//     type: Function,
//   },
//   onChange: {
//     type: Function,
//   },
//   deps: [Array, Object, String, Number],
//   onDepsChange: {
//     type: Function,
//   },
//   debounceMs: {
//     type: [Number, String],
//     default: 0,
//   },
//   forceDeps: Boolean,
// });
</script>
