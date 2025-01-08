<template>
  <div class="">
    <span class="text-gray-500">{{ title }}</span
    >&nbsp;<span class=""><slot /></span>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
}

const props = defineProps<IProps>();
</script>
