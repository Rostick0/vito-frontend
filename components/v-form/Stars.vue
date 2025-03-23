<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
  >
    <UiStars
      classStar="cursor-pointer"
      :value="value"
      @update:modelValue="(val) => emits('update:modelValue', val)"
      size="24"
    />
  </UiControl>
</template>

<script lang="ts" setup>
interface IProps {
  modelValue: number;
  invalid?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  message?: string;
  label?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => val,
});
</script>
