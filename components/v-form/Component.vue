<template>
  <LazyVFormField
    v-if="['input', 'text'].includes(field.type)"
    v-model="model"
    v-bind="field.bind"
    :errorMessage="errorMessage"
  />
  <template v-else-if="field.type == 'select'">
    <LazyVFormMultiSelect
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />
  </template>
  <LazyVFormTextarea
    v-else-if="field.type == 'textarea'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />
  <!-- <UiCheckbox
    v-else-if="field.type == 'checkbox'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  /> -->
  <LazyVFormMultiMSelect
    v-else-if="field.type == 'multiple-select'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
    :name="field.name"
  />

  <LazyVFormSwitch
    v-else-if="['switch', 'checkbox'].includes(field.type)"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormTagCheckbox
    v-else-if="field.type == 'tag'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormDatePicker
    v-else-if="field.type == 'date'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormFileLoader
    v-else-if="field.type == 'file-loader'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />
  <LazyVFormMFileLoader
    v-else-if="field.type == 'multiple-file-loader'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormPhotoLoader
    v-else-if="field.type == 'photo-loader'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormMPhotoLoader
    v-else-if="field.type == 'multiple-photo-loader'"
    v-model="model"
    v-bind="field.bind"
    :error-message="errorMessage"
  />

  <LazyVFormStars
    v-else-if="field.type === 'stars'"
    v-model="model"
    v-bind="field.bind"
    :errorMessage="errorMessage"
  />
</template>

<script setup>
import { useField } from "vee-validate";

defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  field: Object,
  modelValue: [String, Array, Object, Number, Boolean],
});

const model = computed({
  get() {
    return props.field.modelValue;
  },
  set(value) {
    props.field.modelValue = value;
    emits("update:modelValue", value);
  },
});

const { errorMessage, value } = useField(props.field.name, props.field.rules, {
  initialValue:
    props.field.convertTo?.(props.field.modelValue) ?? props.field.modelValue,
});

watch(
  model,
  () => {
    value.value = props.field.convertTo?.(model.value) ?? model.value;
  },
  {
    deep: true,
  }
);
</script>
