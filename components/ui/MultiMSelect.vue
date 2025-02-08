<template>
  <UiMSelect
    @scrolled-bottom="debounceHandleScrollToBottom"
    v-bind="$attrs"
    ref="exposedValues"
    :options="currentOptions"
    v-model="modelValue"
    v-model:search-string="searchString"
    :is-searchable="!!searchFn"
  />
</template>

<script lang="ts" setup>
import debounce from "lodash/debounce";

interface IProps {
  limit?: number;
  options?: Array<IOption>;
  modelValue: Array<any>;
  searchFn?: Function;
  onChange?: Function;
  deps?: [] | object | string | number;
  onDepsChange?: Function;
  debounceMs?: string | number;
  forceDeps?: boolean;
  message?: string;
  errorMessage?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  limit: 20,
  debounceMs: 600,
});

const emits = defineEmits(["update:modelValue"]);

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const page = ref(1);
const totalPages = ref();

const currentOptions = ref(props.options || []);
const currentSearchLimit = ref(props.limit);
const searchString = ref("");

const debounceHandleScrollToBottom = debounce(
  handleScrollToBottom,
  +props.debounceMs
);

const debounceHandleSearch = debounce(handleSearch, +props.debounceMs);

// Контекст данного селекта, может понадобится для кастомизации специфичных моментов
const ctx = computed(() => ({
  searchString: searchString.value,
  searchFn: props.searchFn,
  handleSearch: handleSearch,
  debounceHandleSearch: debounceHandleSearch,
  initialOptions: props.options,
  updateCurrentOptions: (values: IOption[]) => (currentOptions.value = values),
  currentOptions: currentOptions.value,
  modelValue: props.modelValue,
  updateModelValue: (value: any[]) => emits("update:modelValue", value),
}));

// При изменении поисковой строки вызывает handleSearch с задержкой
watch(searchString, debounceHandleSearch.bind(searchString.value), {
  immediate: true,
});

// Срабатывает при изменении зависимостей в массиве deps
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

// Срабатывает при изменении выбора
watch(
  () => props.modelValue,
  async () => {
    props.onChange?.(ctx.value);
  },
  {
    deep: true,
    immediate: true,
  }
);

// Записывает новый массив на основе поисковой строки и лимита, вызывается при вводе символов
async function handleSearch(_searchString: string) {
  if (!props.searchFn) return;

  // currentSearchLimit.value = props.limit;

  const options = await props.searchFn(
    ctx.value,
    searchString.value,
    currentSearchLimit.value,
    page.value
  );

  page.value = 1;
  totalPages.value = options?.last_page;
  if (options?.length) currentOptions.value = options;
}

// Записывает новый массив после скролла и двигает лимит вперёд, вызывается при скролле
async function handleScrollToBottom() {
  if (!props.searchFn) return;

  page.value++;

  const newPages = await props.searchFn(
    ctx.value,
    searchString.value,
    currentSearchLimit.value,
    page.value
  );

  totalPages.value = newPages?.last_page;
  if (newPages?.length)
    currentOptions.value = [...currentOptions.value, ...newPages];
}
</script>
