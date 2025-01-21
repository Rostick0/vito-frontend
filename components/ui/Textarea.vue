<template>
  <textarea
    :="$attrs"
    class="border-2 border-transparent rounded-lg text-base relative px-3 py-2 w-full focus:border-sky-400 min-h-11"
    v-maska
    :data-maska="maska"
    :data-maska-tokens="maskaTokens"
    :data-maska-reversed="dataMaskReserved"
    @input="
      $emit(
        'update:modelValue',
        ($event.target as HTMLInputElement).value || undefined
      )
    "
    ref="textarea"
    :value="modelValue"
    :rows="rows"
  ></textarea>
</template>

<script setup lang="ts">
import { type TextareaHTMLAttributes } from "vue";

export interface FieldProps extends /* @vue-ignore */ TextareaHTMLAttributes {
  modelValue?: string;
  maska?: any;
  dataMaskReserved?: boolean;
  maskaTokens?: any;
  rows?: string | number;
}

interface Emits {
  (event: "update:modelValue", value?: string): void;
}

defineEmits<Emits>();
withDefaults(defineProps<FieldProps>(), { rows: 1 });

const textarea = ref();

const textareaResize = () => {
  textarea.value.style.height = "auto";
  textarea.value.style.height = textarea.value.scrollHeight + "px";
};

onMounted(() => {
  textarea.value;

  textarea.value.style.height = textarea.value.scrollHeight + "px";
  textarea.value.style.overflowY = "hidden";

  textarea.value.addEventListener("input", textareaResize);
});

onUnmounted(() => {
  textarea.value?.removeEventListener("input", textareaResize);
});
</script>

<style lang="scss" scoped></style>
