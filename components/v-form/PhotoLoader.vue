<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiPhotoLoader
      v-bind="$attrs"
      @update:modelValue="(file) => emits('update:modelValue', file)"
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

const url = ref(props.modelValue);

watch(
  () => props.modelValue,
  () => {
    if (typeof props.modelValue == "string") {
      url.value = props.modelValue;
    }
  }
);

const handleOnFileChange = (e) => {
  const files = e.target.files;
  if (!files?.length) {
    url.value = null;
    return emits("update:modelValue", null);
  }
  const file = files[0];
  url.value = URL.createObjectURL(file);
  emits("update:modelValue", file);
};
</script>
