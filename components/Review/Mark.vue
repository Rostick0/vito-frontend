<template>
  <div class="flex gap-2 items-center justify-between text-sm">
    <div class="flex">
      <IconStar
        v-for="(_, i) in [...new Array(countStars)]"
        :key="i"
        class="fill-yellow-400"
        width="16"
        height="16"
      />
    </div>
    <span>{{ countReviews ?? "-" }}</span>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  countStars: number;
  countReviews?: number;
}

const props = defineProps<IProps>();
</script>
