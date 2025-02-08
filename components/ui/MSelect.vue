<template>
  <div @focusout="onFocusout" ref="wrapper" tabindex="-1" class="select">
    <div
      class="select__field"
      :class="{ select__active: isOpened }"
      @click.stop="toggle"
    >
      <template v-if="isSearchable">
        <input
          class="select__value"
          v-show="!isOpened"
          :placeholder="placeholder || 'Не выбрано'"
          :value="selectedItemsText"
          readonly
        />

        <input
          class="select__value"
          v-show="isOpened"
          ref="inputRef"
          @input="$emit('update:searchString', $event.target.value)"
          :value="searchString"
          type="text"
        />
      </template>
      <template v-else>
        <input
          type="text"
          class="select__value"
          :value="selectedItemsText"
          :placeholder="placeholder ?? 'Не выбрано'"
          readonly
        />
      </template>
      <svg
        v-if="withIcon"
        class="select__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="var(--color-grey-dark)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      v-show="isOpened"
      @scroll="handleScroll"
      class="select__options"
      @mousedown.prevent
    >
      <div
        class="options__item"
        v-for="option in sortedOptions"
        :key="option.id"
        @mousedown="handleSelect(option)"
        :class="{
          selected:
            modelValue &&
            modelValue?.find?.((i) => option?.id == i?.id || option?.id == i),
        }"
      >
        <span>
          {{ option.name || option.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits([
  "update:modelValue",
  "update:searchString",
  "scrolledBottom",
]);

interface IProps {
  rightIcon?: string;
  errorMessage?: string;
  message?: string;
  label?: string;
  searchString?: string | number;
  isSearchable?: boolean;
  placeholder?: string;
  withIcon?: boolean;
  modelValue: Array<any>;
  options: Array<any>;
}

const props = defineProps<IProps>();

const isOpened = ref(false);

const inputRef = ref();
const wrapper = ref();

const toggle = () => {
  isOpened.value = !isOpened.value;

  nextTick(() => inputRef.value?.focus?.());
};

const onFocusout = (e: FocusEvent) => {
  if (!wrapper.value.contains(e.relatedTarget)) isOpened.value = false;
};

const handleSelect = (option: MouseEvent) => {
  if (props.modelValue && props.modelValue?.find((i) => option.id == i.id)) {
    emits(
      "update:modelValue",
      props.modelValue?.filter((i) => i.id !== option.id)
    );
  } else {
    emits("update:modelValue", [...props.modelValue, option]);
  }
};

const sortedOptions = computed(() => {
  const options = [...(props?.options || [])];
  const modelValue = props.modelValue;

  options.sort((a, b) => {
    const firstVal = modelValue?.find?.((item) => item == a.id) ? 1 : 0;
    const secondVal = modelValue?.find?.((item) => item == b.id) ? 1 : 0;

    return secondVal - firstVal;
  });

  return options;
});

const selectedItemsText = computed(
  () =>
    props.modelValue &&
    props.modelValue
      ?.map((item) => item?.title || item?.name || item?.value || item?.slug)
      ?.join(", ")
);

const handleScroll = (event: any) => {
  const div = event.target;

  const scrollFromBottom =
    div.scrollHeight - (div.scrollTop + div.clientHeight);

  if (scrollFromBottom < 400) {
    emits("scrolledBottom");
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
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
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
