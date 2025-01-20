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
  <!-- <UiSelect
    @scrolled-bottom="debounceHandleScrollToBottom"
    @scrolled-top="debounceHandleScrollToTop"
    v-bind="props"
    :options="currentOptions"
    v-model="modelValue"
    v-model:search-string="searchString"
    :is-searchable="!!searchFn"
  /> -->
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
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
