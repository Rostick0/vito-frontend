<template>
  <div
    class="rounded-full flex items-center justify-center uppercase text-xl w-10 h-10"
  >
    {{ name?.[0] }}
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  name: string;
}

const props = defineProps<IProps>();
</script>
