<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
  >
    <template #leftIcon>
      <slot name="leftIcon"></slot>
    </template>
    <UiField
      v-bind="$attrs"
      :modelValue="modelValue"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </UiControl>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: [String, Number],
  invalid: Boolean,
  leftIcon: String,
  rightIcon: String,
  message: String,
  label: String,
  errorMessage: String,
});
</script>

<style lang="scss" scoped>
.control {
  &.invalid {
    .control__field {
      border-color: var(--color-red);
      color: var(--color-red);
    }
  }

  &__label {
    display: flex;
    position: relative;

    &_name {
      color: var(--color-grey-dark);
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      transition: 0.3s;
    }
  }
}
</style>
