<template>
  <div @focusout="onFocusout" ref="wrapper" tabindex="-1" class="select">
    <div
      @keydown.enter="isOpened = !isOpened"
      class="select__field"
      tabindex="0"
      :class="{ select__active: isOpened }"
      @click="toggle"
      style="position: relative"
    >
      <template v-if="isSearchable">
        <div v-if="!isOpened" class="select__value">
          {{
            (model?.value ?? model?.name ?? model?.title) ||
            placeholder ||
            "Не выбрано"
          }}
        </div>
        <input
          class="select__value"
          ref="inputRef"
          @input="$emit('update:searchString', $event.target.value)"
          :value="searchString"
          v-if="isOpened"
          type="text"
        />
      </template>
      <template v-else>
        <div class="select__value">
          {{
            (model?.value ?? model?.name ?? model?.title) ||
            placeholder ||
            "Не выбрано"
          }}
        </div>
      </template>
    </div>
    <div
      ref="selectRef"
      v-if="isOpened"
      @scroll="handleScroll"
      class="select__options"
      @mousedown.prevent
    >
      <template v-if="options?.length">
        <div
          class="options__item"
          v-for="option in options"
          :key="option.id"
          @mousedown="handleSelect(option)"
          :class="{ selected: option?.id == model?.id }"
        >
          {{ option?.value ?? option?.name ?? option?.title }}
        </div>
      </template>
      <template v-else>
        <div class="options__notfound">Ничего не найдено</div>
      </template>
    </div>
  </div>
</template>

<script setup>
const selectRef = ref();
const props = defineProps({
  searchString: String,
  isSearchable: Boolean,
  closeAfterSelect: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [Object, Number, String, Array],
  },
  placeholder: String,
  options: Array,

  modelValueIsNumber: {
    default: false,
    type: Boolean,
  },
});
const emits = defineEmits([
  "update:searchString",
  "update:modelValue",
  "scrolledTop",
  "scrolledBottom",
]);

const model = computed({
  get() {
    if (!props.modelValue) return;

    if (props.modelValueIsNumber) {
      const option = props.options.find((i) => i.id == props.modelValue);
      return {
        id: props.modelValue,
        value: option?.value ?? option?.name ?? option?.title,
      };
    }
    return props.modelValue;
  },
  set(_value) {
    if (!_value) {
      return emits("update:modelValue", null);
    }

    if (props.modelValueIsNumber) {
      if (props.modelValue === _value?.id) {
        return emits("update:modelValue", null);
      }

      return emits("update:modelValue", _value.id);
    }

    if (props.modelValue?.id === _value?.id) {
      return emits("update:modelValue", null);
    }

    return emits("update:modelValue", _value);
  },
});

const isOpened = ref(false);

watch([selectRef], () => {
  if (selectRef.value) {
    selectRef.value.scrollTo(0, selectRef.value.children[0].clientHeight / 15);
  }
});

const inputRef = ref();

const toggle = () => {
  isOpened.value = !isOpened.value;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const wrapper = ref();

const onFocusout = (e) => {
  if (!wrapper.value.contains(e.relatedTarget)) isOpened.value = false;
};

const handleSelect = (option) => {
  if (props.closeAfterSelect) {
    isOpened.value = false;
  }
  model.value = option;
};

const handleScroll = (event) => {
  const div = event.target;

  const scrollFromTop = div.scrollTop;
  const scrollFromBottom =
    div.scrollHeight - (div.scrollTop + div.clientHeight);

  if (scrollFromBottom < 20) {
    emits("scrolledBottom", div);
  }
  if (scrollFromTop < 20) {
    emits("scrolledTop", div);
  }
};
</script>

<style lang="scss" scoped>
.select {
  cursor: pointer;
  position: relative;

  &__field {
    width: 100%;
  }

  input {
    width: 100%;

    &::placeholder {
      line-height: 1.3;
    }
  }

  &__value {
    background-color: white;
    border-radius: 0.5rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.75rem 1.25rem;
    width: 100%;
  }

  .options {
    &__item {
      transition: 0.3s;

      &:hover {
        background-color: rgb(56, 189, 248);
        color: white;
      }
      &.selected {
        background-color: black;
        color: white;
      }
    }

    &__notfound {
      cursor: default;
    }
  }

  &__options {
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid;
    box-shadow: 0 1px 2px rgba(50, 50, 71, 0.08);
    position: absolute;
    top: 108%;
    left: 0;
    overflow: auto;
    max-height: 20rem;
    width: 100%;
    z-index: 10000;

    div {
      display: block;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      padding: 0.75rem 1.25rem;
      -moz-padding-start: calc(1.25rem - 3px);
      transition: 0.3s;
      width: 100%;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
