<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiTagCheckbox
      :="$props"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </UiControl>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: Array<IOption | never>;
  options: IOption[];
  invalid?: boolean;
  rightIcon?: any;
  message?: string;
  label?: string;
  errorMessage?: string;
}

const props = defineProps<Props>();

const emits = defineEmits(["update:modelValue"]);
</script>
