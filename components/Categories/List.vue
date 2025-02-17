<template>
  <div class="">
    <CategoriesItem
      v-for="category in categories"
      @click="emits('on:category', category)"
      :key="category?.id"
      :category="category"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  categories?: ICategory[];
}

const props = defineProps<IProps>();
const emits = defineEmits(["on:category"]);

// onMounted(() => {
//   console.log("update");
// });
</script>
