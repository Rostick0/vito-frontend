<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiMFileLoader
      :modelValue="modelValue"
      @update:modelValue="(val) => emits('update:modelValue', val)"
      :placeholder="placeholder"
    />
  </UiControl>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  invalid?: boolean;
  rightIcon?: any;
  message?: string;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
}

const props = defineProps<Props>();

const emits = defineEmits(["update:modelValue"]);
</script>
