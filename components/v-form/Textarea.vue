<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiTextarea
      :="$attrs"
      v-bind="$props"
      class="control__textarea"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value || undefined
        )
      "
      ref="textarea"
    ></UiTextarea>
  </UiControl>
</template>

<script setup lang="ts">
import { type TextareaHTMLAttributes } from "vue";

export interface FieldProps extends /* @vue-ignore */ TextareaHTMLAttributes {
  modelValue?: string;
  invalid?: boolean;
  rightIcon?: any;
  message?: string;
  label?: string;
  maska?: any;
  dataMaskReserved?: boolean;
  maskaTokens?: any;
  errorMessage?: string;
  rows?: string | number;
}

interface Emits {
  (event: "update:modelValue", value?: string): void;
}

defineEmits<Emits>();
defineProps<FieldProps>();
</script>

<style lang="scss" scoped>
// .control__textarea {
//   border-radius: 0.33rem;
//   font-size: 1rem;
//   padding: 0.75rem 1.25rem;
//   width: 100%;
//   min-height: 42.4px;
// }
</style>
