<template>
  <!-- grid-cols-5 -->
  <div
    class="grid gap-5 max-md:gap-3 items-start grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <CardAdvertisementColItem
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
