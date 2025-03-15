<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
  >
    <UiStars v-model="value" size="24" />
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

const value = computed({
  get: () => props.modelValue,
  set: (val) => val,
});
</script>
