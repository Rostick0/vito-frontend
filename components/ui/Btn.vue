<template>
  <button
    class="font-medium rounded-lg flex py-2 px-3"
    :class="[bgColor, color]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "bg-sky-400",
  },
  color: {
    type: String,
    default: "text-white",
  },
});
</script>
