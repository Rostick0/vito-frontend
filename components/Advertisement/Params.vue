<template>
  <div class="bg-white rounded-lg p-4">
    <div class="font-bold text-2xl mb-3" v-if="title">{{ title }}</div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title?: string;
}

const props = defineProps<IProps>();
</script>
