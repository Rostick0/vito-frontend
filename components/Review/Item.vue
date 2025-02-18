<template>
  <div class="">
    <div class="flex gap-x-2 items-center mb-2">
      <UserAvatar :name="review?.user?.name" />
      <div class="">
        <div class="font-semibold mb-1">{{ review?.user?.name }}</div>
        <div class="text-xs">
          {{ moment(review?.created_at).format("DD MMMM") }}
        </div>
      </div>
    </div>
    {{ review }}
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";

interface IProps {
  review: IReview;
}

const props = defineProps<IProps>();
</script>
