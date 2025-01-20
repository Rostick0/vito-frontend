<template>
  <!-- {{ $attrs }} -->
  <input
    class="control__field p-3"
    :class="size"
    :="$attrs"
    v-maska
    :data-maska="maska"
    :data-maska-tokens="maskaTokens"
    :data-maska-reversed="dataMaskaReversed"
    @change="handleChange"
    @input="handleInput"
    :value="modelValue"
  />
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: [String, Number],
  invalid: Boolean,
  leftIcon: String,
  rightIcon: String,
  message: String,
  maska: {
    type: [String, Array],
  },
  dataMaskaReversed: {
    type: Boolean,
    default: false,
  },
  maskaTokens: String,
  onChange: Function,
  deps: [Array, Object, String, Number],
  // small | standard | big
  size: String,
  onDepsChange: {
    type: Function,
  },
  forceDeps: Boolean,
});

function handleInput(event) {
  emits("update:modelValue", event.target.value || undefined);
}

function handleChange(event) {
  props?.onChange?.(event);
}

const ctx = computed(() => ({
  modelValue: props.modelValue,
  handleChange,
  handleInput,
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
.control {
  &.invalid {
    .control__field {
      border-color: var(--color-red);
      color: var(--color-red);
    }
  }

  &__field {
    background-color: #f5f5f5;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;

    &:focus {
      border-color: var(--color-green);
    }
  }
}
</style>
