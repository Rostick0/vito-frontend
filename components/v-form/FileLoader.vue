<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiFileLoader
      v-bind="props"
      class="fileloader__input"
      @update:modelValue="(file) => emits('update:modelValue', file)"
      type="file"
    />
  </UiControl>
</template>
<script setup>
defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  invalid: Boolean,
  rightIcon: String,
  message: String,
  label: String,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
});
</script>

<style lang="scss"></style>
