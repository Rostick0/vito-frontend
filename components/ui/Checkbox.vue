<template>
  <UiControl :invalid="!!errorMessage" :message="errorMessage || message">
    <label class="control__checkbox checkbox">
      <input
        v-bind="$attrs"
        class="checkbox__input"
        type="checkbox"
        :checked="modelValue"
        @input="handleChange"
      />
      <div class="checkbox__label" v-if="label">
        {{ label }}
      </div>
    </label>
  </UiControl>
</template>
<script setup>
defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: String,
  modelValue: [Boolean, Number, String],
  message: String,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
  deps: [Array, Object, String, Number],
  onDepsChange: {
    type: Function,
  },
  forceDeps: Boolean,
  innerConvertTo: Function,
});

function handleChange(event) {
  emits(
    "update:modelValue",
    props?.innerConvertTo?.(event.target.checked) ?? event.target.checked
  );
  props?.onChange?.(event);
}

const ctx = computed(() => ({
  modelValue: props.modelValue,
  handleChange,
  handleChange,
  updateModelValue: (value) => emits("update:modelValue", value),
}));

watch(
  () => props.deps,
  (cur, prev) => {
    if (
      Array.isArray(prev)
        ? prev.find((item) => item !== undefined)
        : prev !== undefined
    ) {
      props?.onDepsChange?.(ctx.value);
    }
  },
  {
    deep: true,
    immediate: props.forceDeps,
  }
);
</script>

<style lang="scss" scoped>
.checkbox {
  padding: 0.75rem 0;
  display: flex;
  display: flex;
  align-items: center;
  transition: 0.3s;

  &__input {
    transition: 0.3s;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  &__input {
    width: 1em;
    height: 1em;
    margin-top: 0.3125em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    print-color-adjust: exact;
  }

  &__input[type="checkbox"] {
    border-radius: 0.25em;
    margin: 0;
  }

  &__input:active {
    filter: brightness(90%);
  }

  &__input:focus {
  }

  &__input:checked {
  }

  &__input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  }

  &__input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFF'/%3e%3c/svg%3e");
  }

  &__input[type="checkbox"]:indeterminate {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }

  &__label {
    transition: 0.3s;
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
}
</style>
