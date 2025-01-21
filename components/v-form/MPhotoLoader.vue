<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiMPhotoLoader
      v-bind="props"
      @update:modelValue="(images) => emits('update:modelValue', images)"
      @setError="(error) => emits('setError', error)"
      @remove="(image) => emits('remove', image)"
    />
  </UiControl>
</template>

<script setup>
const emits = defineEmits(["update:modelValue", "remove", "setError"]);

const props = defineProps({
  modelValue: [String, Object, Array],
  invalid: Boolean,
  rightIcon: String,
  message: String,
  label: String,
  placeholder: String,
  errorMessage: String,
});
</script>
