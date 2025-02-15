<template>
  <div class="cursor-pointer text-sm p-2 max-">
    {{ category?.name }}
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  category: ICategory;
}

const props = defineProps<IProps>();
</script>
