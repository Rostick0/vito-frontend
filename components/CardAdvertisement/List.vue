<template>
  <!-- grid-cols-5 -->
  <div
    class="grid gap-4 max-md:gap-3 items-start grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <CardAdvertisementItem
      v-for="advertisement in advertisements"
      :key="advertisement?.id"
      :advertisement="advertisement"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  advertisements: IAdvertisement[];
}

const props = defineProps<IProps>();
</script>
