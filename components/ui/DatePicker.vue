<template>
  <Datepicker
    :placeholder="placeholder"
    class="control__datepicker"
    :format="format"
    @update:model-value="handleInput"
    :modelValue="modelValue"
  />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
await import("@vuepic/vue-datepicker/dist/main.css");

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  placeholder: String,
  modelValue: [Date, String, Number, Object],
  placeholder: String,
  format: {
    type: Function,
    defaultValue: (date) => {
      if (!date) {
        return;
      }
      return `${date?.getDate()}/${
        date?.getMonth() + 1
      }/${date?.getFullYear()}`;
    },
  },
});

function handleInput(date) {
  emits("update:modelValue", date || undefined);
}
</script>

<style lang="scss"></style>
