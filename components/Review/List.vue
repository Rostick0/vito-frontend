<template>
  <div class="bg-white rounded-xl flex flex-col gap-4 p-4">
    <ReviewItem v-for="review in reviews" :key="review?.id" :review="review" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  reviews?: IReview[];
}

const props = defineProps<IProps>();
</script>
