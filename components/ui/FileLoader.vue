<template>
  <div class="control__fileloader fileloader">
    <input
      @change="handleOnFileChange"
      v-bind="$attrs"
      class="fileloader__input"
      type="file"
    />
  </div>
</template>
<script setup>
defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  rightIcon: String,
  placeholder: String,
  onChange: Function,
});

const handleOnFileChange = (e) => {
  const files = e.target.files;
  if (!files?.length) {
    return emits("update:modelValue", null);
  }
  const file = files[0];
  emits("update:modelValue", file);
};
</script>

<style lang="scss"></style>
