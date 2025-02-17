<template>
  <div class="flex flex-col gap-3">
    <ReviewItem v-for="review in reviews" :key="review?.id" :review="review" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  reviews?: IReview[];
}

const props = defineProps<IProps>();
</script>
