<template>
  <div class="bg-white rounded-xl flex flex-col gap-4 p-4">
    <div class="flex flex-col gap-y-2">
      <ReviewMark
        :countStars="5"
        :countReviews="reviewMarks?.find((item) => item.mark === 5)?.count"
      />
      <ReviewMark
        :countStars="4"
        :countReviews="reviewMarks?.find((item) => item.mark === 4)?.count"
      />
      <ReviewMark
        :countStars="3"
        :countReviews="reviewMarks?.find((item) => item.mark === 3)?.count"
      />
      <ReviewMark
        :countStars="2"
        :countReviews="reviewMarks?.find((item) => item.mark === 2)?.count"
      />
      <ReviewMark
        :countStars="1"
        :countReviews="reviewMarks?.find((item) => item.mark === 1)?.count"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  reviewMarks?: IReviewMarks[];
}

const props = defineProps<IProps>();
</script>
