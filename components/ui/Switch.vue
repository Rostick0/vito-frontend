<template>
  <div
    class="switch cursor-pointer inline-flex items-center gap-x-2.5"
    @click="emits('update:modelValue', !modelValue)"
  >
    <div
      class="switch__icon rounded-2xl flex items-center shrink-0 relative duration-300 w-10 h-5"
      :class="{ active: modelValue }"
    >
      <div
        class="switch__icon_circle rounded-full absolute duration-300 w-3.5 h-3.5"
      ></div>
    </div>
    <div class="switch__label">
      <span class="text-sm" v-if="title">
        {{ title }}
      </span>
      <template v-else>
        <slot />
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  title: String,
});

const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.switch {
  &__icon {
    background-color: white;

    &.active {
      background-color: rgb(56, 189, 248);

      .switch__icon_circle {
        background-color: white;
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }

    &_circle {
      background-color: rgb(56, 189, 248);
      left: 3px;
    }
  }
}
</style>
